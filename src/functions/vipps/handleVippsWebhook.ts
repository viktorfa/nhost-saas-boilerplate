import { withSentry } from "@/functions/sentry";
import { gql } from "graphql-tag";
import { NhostClient } from "@nhost/nhost-js";
import { Request, Response } from "express";
import { ofetch } from "ofetch";
import sgMail from "@sendgrid/mail";
import {
  getPurchaseEmailString,
  getPurchaseEmailSubjectLine,
} from "@/functions/emails";
import { Analytics } from "@june-so/analytics-node";
import { Client, type EPaymentWebhookEvent } from "@vippsmobilepay/sdk";
import { isProd } from "@/functions/utils";

const UPDATE_VIPPS_SESSION_MUTATION = gql`
  mutation UPDATE_VIPPS_SESSION(
    $id: uuid!
    $update: payment_vipps_sessions_set_input!
  ) {
    update_payment_vipps_sessions_by_pk(
      pk_columns: { id: $id }
      _set: $update
    ) {
      id
    }
  }
`;

export default async (req: Request, res: Response) => {
  return withSentry(req, res, handler);
};

const handler = async (
  req: Request & { body: EPaymentWebhookEvent },
  res: Response
) => {
  console.log("req.headers");
  console.log(req.headers);
  console.log("req.body");
  console.log(JSON.stringify(req.body, null, 2));

  const requestBody = req.body as EPaymentWebhookEvent;

  switch (requestBody.name) {
    case "CREATED":
      const createdResponse = await handleCreated({
        event: requestBody,
      });
      return res.status(204).json(createdResponse);
    case "AUTHORIZED":
      const captureResponse = await handleAuthorized({
        event: requestBody,
      });
      return res.status(204).json(captureResponse);
    case "CAPTURED":
      const insertedSubscription = await handleCaptured({
        event: requestBody,
      });
      return res.status(201).json(insertedSubscription);
  }
  return res.sendStatus(204);
};

const handleCaptured = async ({ event }: { event: EPaymentWebhookEvent }) => {
  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });

  const vippsSessionResponse = await nhostClient.graphql.request<
    GQL_GET_VIPPS_SESSION_WITH_USER_QUERY,
    GQL_GET_VIPPS_SESSION_WITH_USER_QUERY_VARIABLES
  >(
    gql`
      query GET_VIPPS_SESSION_WITH_USER($id: uuid!) {
        payment_vipps_sessions_by_pk(id: $id) {
          amount
          currency
          id
          org_id
          product
          quantity
          status
          vipps_reference
          metadata
          org_user {
            id
            user {
              id
              email
              locale
            }
          }
        }
      }
    `,
    { id: event.reference },
    {
      headers: {
        "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET,
      },
    }
  );
  const dbVippsSession = vippsSessionResponse.data.payment_vipps_sessions_by_pk;
  if (!dbVippsSession) {
    console.error("Vipps session not found");
    throw new Error("Vipps session not found");
  }
  if (!["CREDITS"].includes(dbVippsSession.product)) {
    console.error(`Invalid product: ${dbVippsSession.product}`);
    throw new Error(`Invalid product: ${dbVippsSession.product}`);
  }

  const amount = event.amount.value;
  const currency = event.amount.currency;
  const sessionId = event.reference;
  const gcid = dbVippsSession.metadata.gcid;
  const orgId = dbVippsSession.org_id;
  const credits = dbVippsSession.quantity;
  const userEmail = dbVippsSession.org_user.userByUser.email;
  const userLocale = dbVippsSession.org_user.userByUser.locale;
  const userId = dbVippsSession.org_user.userByUser.id;
  const orgUserId = dbVippsSession.org_user.id;

  Promise.all([
    createSubscription({
      credits,
      orgId,
      sessionId,
    }),
    trackUserPurchase({
      orgId,
      userId,
      orgUserId,
      amount,
      currency,
      sessionId,
      gcid,
    }),
    sendPurchaseEmail({
      toEmail: userEmail,
      amount,
      credits,
      locale: userLocale,
    }),
    junePurchaseVippsEvent({
      amount,
      credits,
      currency,
      userId,
    }),
  ]);
};

const createSubscription = async ({
  credits,
  orgId,
  sessionId,
}: {
  credits: number;
  orgId: string;
  sessionId: string;
}) => {
  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });
  const createSubscriptionResponse = await nhostClient.graphql.request<
    GQL_INSERT_ORG_SUBSCRIPTION_FOR_VIPPS_MUTATION,
    GQL_INSERT_ORG_SUBSCRIPTION_FOR_VIPPS_MUTATION_VARIABLES
  >(
    gql`
      mutation INSERT_ORG_SUBSCRIPTION_FOR_VIPPS(
        $org_id: uuid!
        $status: String!
        $valid_until: timestamptz!
        $plan: String!
        $credits: Int!
        $vipps_session_id: uuid!
      ) {
        insert_org_subscriptions_one(
          object: {
            org_id: $org_id
            status: $status
            valid_until: $valid_until
            plan: $plan
            credits: $credits
            vipps_session_id: $vipps_session_id
          }
        ) {
          id
        }
        update_payment_vipps_sessions_by_pk(
          pk_columns: { id: $vipps_session_id }
          _set: { status: "CAPTURED" }
        ) {
          id
        }
      }
    `,
    {
      plan: "CREDITS",
      org_id: orgId,
      status: "ACTIVE",
      valid_until: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365), // 1 year from now
      credits,
      vipps_session_id: sessionId,
    },
    { headers: { "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET } }
  );

  if (createSubscriptionResponse.error) {
    console.error(createSubscriptionResponse.error);
    throw new Error("Could not create Vipps subscription");
  }

  return createSubscriptionResponse;
};

const trackUserPurchase = async ({
  orgId,
  orgUserId,
  userId,
  amount,
  currency,
  sessionId,
  gcid,
}: {
  orgId: string;
  orgUserId: string;
  userId: string;
  amount: number;
  currency: string;
  sessionId: string;
  gcid?: string;
}) => {
  const googleAnalResponse = await ofetch(
    `https://www.google-analytics.com/mp/collect`,
    {
      method: "POST",
      query: {
        measurement_id: process.env.GA4_MEASUREMENT_ID,
        api_secret: process.env.GA4_API_SECRET,
      },
      body: {
        client_id: gcid,
        timestamp_micros: new Date().getTime() + "000",
        events: [
          {
            name: "purchase",
            params: {
              currency: currency.toUpperCase(),
              value: amount / 100,
              transaction_id: sessionId,
              user_id: userId,
              t_user_id: userId,
              t_org_id: orgId,
              t_org_user_id: orgUserId,
              items: [
                {
                  item_id: "credits",
                  item_name: "Credits",
                  price: amount / 100,
                },
              ],
            },
          },
        ],
      },
    }
  );
  return googleAnalResponse;
};

export const sendPurchaseEmail = async ({
  toEmail,
  amount,
  credits,
  locale,
}: {
  amount: number;
  credits: number;
  toEmail: string;
  locale?: string;
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const subjectLine = getPurchaseEmailSubjectLine({ locale });
  const purchaseAmountString = `${(amount / 100).toFixed(0)},- kr`;
  const emailHtml = await getPurchaseEmailString({
    props: {
      toEmail,
      purchaseAmountString,
      purchaseCredits: credits,
    },
    locale,
  });
  const emailPlain = await getPurchaseEmailString({
    props: { toEmail, purchaseAmountString, purchaseCredits: credits },
    options: { plainText: true },
    locale,
  });

  const sgMessage = {
    to: toEmail,
    from: { email: "info@my-app.com", name: "My App Name" },
    subject: subjectLine,
    text: emailPlain,
    html: emailHtml,
  };
  console.log(`Sending email to ${toEmail}`);
  const sendgridResponse = await sgMail.send(sgMessage);
  return sendgridResponse;
};

export const junePurchaseVippsEvent = async ({
  amount,
  credits,
  currency,
  userId,
}: {
  amount: number;
  credits: number;
  currency: string;
  userId: string;
}) => {
  const analytics = new Analytics(process.env.JUNE_KEY as string);

  console.log("June purchase Vipps event");

  analytics.track({
    userId,
    event: "Make Purchase",
    properties: {
      purchaseAmount: amount / 100,
      purchaseCurrency: currency,
      purchaseCredits: credits,
      paymentProvider: "Vipps",
    },
  });
  analytics.closeAndFlush();
};

const handleAuthorized = async ({ event }: { event: EPaymentWebhookEvent }) => {
  const vippsClient = Client({
    merchantSerialNumber: process.env.VIPPS_MERCHANT_SERIAL_NUMBER,
    subscriptionKey: process.env.VIPPS_OCM_SUBSCRIPTION_KEY,
    useTestMode: !isProd(),
    retryRequests: true,
    systemName: "My App Name website",
    systemVersion: "0.0.1",
    pluginVersion: "0.0.1",
    pluginName: "My App Name website node",
  });

  const accessToken = await vippsClient.auth.getToken(
    process.env.VIPPS_CLIENT_ID,
    process.env.VIPPS_CLIENT_SECRET
  );

  if (!accessToken.ok) {
    console.error(
      "Error retrieving token",
      JSON.stringify(accessToken.error, null, 2)
    );
    throw new Error("Error retrieving token");
  }

  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });

  const vippsSessionResponse = await nhostClient.graphql.request<
    GQL_GET_VIPPS_SESSION_QUERY,
    GQL_GET_VIPPS_SESSION_QUERY_VARIABLES
  >(
    gql`
      query GET_VIPPS_SESSION($id: uuid!) {
        payment_vipps_sessions_by_pk(id: $id) {
          amount
          currency
          id
          org_id
          product
          quantity
          status
          vipps_reference
          metadata
        }
      }
    `,
    { id: event.reference },
    {
      headers: {
        "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET,
      },
    }
  );

  const dbVippsSession = vippsSessionResponse.data.payment_vipps_sessions_by_pk;
  if (!dbVippsSession) {
    console.error("Vipps session not found");
    throw new Error("Vipps session not found");
  }
  if (!["CREDITS"].includes(dbVippsSession.product)) {
    console.error(`Invalid product: ${dbVippsSession.product}`);
    throw new Error(`Invalid product: ${dbVippsSession.product}`);
  }

  const capturePaymentResult = await vippsClient.payment.capture(
    accessToken.data.access_token,
    event.reference,
    {
      modificationAmount: {
        currency: event.amount.currency,
        value: event.amount.value,
      },
    }
  );

  const updateVippsSessionResponse = await nhostClient.graphql.request<
    GQL_UPDATE_VIPPS_SESSION_MUTATION,
    GQL_UPDATE_VIPPS_SESSION_MUTATION_VARIABLES
  >(
    UPDATE_VIPPS_SESSION_MUTATION,
    {
      id: event.reference,
      update: {
        status: "AUTHORIZED",
      },
    },
    { headers: { "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET } }
  );

  console.log("capturePaymentResult", capturePaymentResult);
  return capturePaymentResult;
};

const handleCreated = async ({ event }: { event: EPaymentWebhookEvent }) => {
  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });

  const updateVippsSessionResponse = await nhostClient.graphql.request<
    GQL_UPDATE_VIPPS_SESSION_MUTATION,
    GQL_UPDATE_VIPPS_SESSION_MUTATION_VARIABLES
  >(
    UPDATE_VIPPS_SESSION_MUTATION,
    {
      id: event.reference,
      update: {
        status: "CREATED",
      },
    },
    { headers: { "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET } }
  );

  console.log("updateVippsSessionResponse", updateVippsSessionResponse);
  return updateVippsSessionResponse;
};
