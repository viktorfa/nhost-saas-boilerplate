import { withSentry } from "@/functions/sentry";
import { gql } from "graphql-tag";
import { NhostClient } from "@nhost/nhost-js";
import { Request, Response } from "express";
import Stripe from "stripe";
import { ofetch } from "ofetch";
import sgMail from "@sendgrid/mail";
import {
  getPurchaseEmailString,
  getPurchaseEmailSubjectLine,
} from "@/functions/emails";
import { Analytics } from "@june-so/analytics-node";

export default async (req: Request, res: Response) => {
  return withSentry(req, res, handler);
};

const handler = async (
  req: Request & { body: Stripe.Event },
  res: Response
) => {
  console.log("req.headers");
  console.log(req.headers);
  console.log("req.body");
  console.log(JSON.stringify(req.body, null, 2));

  const requestBody = req.body as Stripe.Event;

  let result;
  switch (requestBody.type) {
    case "checkout.session.completed":
      result = await handleStripeCheckoutCompleted({ event: requestBody });
      if (result) {
        return res.status(201).json(result);
      } else {
        return res.sendStatus(204);
      }
  }
  return res.sendStatus(204);
};

const handleStripeCheckoutCompleted = async ({
  event,
}: {
  event: Stripe.CheckoutSessionCompletedEvent;
}) => {
  if (event.data.object.status !== "complete") {
    return;
  }
  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const stripeLineItemsResponse = await stripe.checkout.sessions.listLineItems(
    event.data.object.id
  );

  console.log("stripeLineItemsResponse");
  console.log(stripeLineItemsResponse);

  const quantity = stripeLineItemsResponse.data[0].quantity;
  const orgId = event.data.object.client_reference_id;
  const gcid = event.data.object.metadata.gcid;
  const credits = quantity * 60;
  const amount = event.data.object.amount_total;
  const currency = event.data.object.currency;
  const userEmail = event.data.object.customer_details.email;
  const purchaseDate = new Date(event.data.object.created * 1000);
  const stripeCheckoutSessionId = event.data.object.id;
  const stripeCustomerId = event.data.object.customer;

  const createdSubscription = await createSubscription({
    orgId,
    credits,
    purchaseDate,
    stripeCustomerId,
    stripeCheckoutSessionId,
  });

  const orgResponse = await nhostClient.graphql.request<
    GQL_GET_ORG_FOR_FOLLOW_QUERY,
    GQL_GET_ORG_FOR_FOLLOW_QUERY_VARIABLES
  >(
    gql`
      query GET_ORG_FOR_FOLLOW($id: uuid!) {
        orgs_by_pk(id: $id) {
          id
          owner_id
          org_users {
            id
            user {
              locale
              id
            }
          }
        }
      }
    `,
    { id: orgId },
    { headers: { "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET } }
  );

  const userId = orgResponse.data.orgs_by_pk.owner;
  const orgUser = orgResponse.data.orgs_by_pk.org_users[0];
  const orgUserId = orgUser.id;
  const userLocale = orgUser.userByUser.locale;

  await Promise.all([
    trackUserPurchase({
      orgId,
      gcid,
      purchaseDate,
      amount,
      currency,
      sessionId: stripeCheckoutSessionId,
      userId,
      orgUserId,
      lineItems: stripeLineItemsResponse,
    }),
    sendPurchaseEmail({
      toEmail: userEmail,
      locale: userLocale,
      stripeEvent: event,
      credits,
      amount,
    }),
    junePurchaseEvent({
      userId,
      credits,
      amount,
      currency,
    }),
  ]).catch((e) => {
    console.error(`Error in purchase event`);
    console.error(e);
  });

  return createSubscription;
};

const createSubscription = async ({
  orgId,
  credits,
  purchaseDate,
  stripeCustomerId,
  stripeCheckoutSessionId,
}: {
  orgId: string;
  credits: number;
  purchaseDate: Date;
  stripeCustomerId: string;
  stripeCheckoutSessionId: string;
}) => {
  const nhostClient = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });
  const createSubscriptionResponse = await nhostClient.graphql.request<
    GQL_INSERT_ORG_SUBSCRIPTION_MUTATION,
    GQL_INSERT_ORG_SUBSCRIPTION_MUTATION_VARIABLES
  >(
    gql`
      mutation INSERT_ORG_SUBSCRIPTION(
        $org_id: uuid!
        $status: String!
        $valid_until: timestamptz!
        $plan: String!
        $credits: Int!
        $stripe_checkout_session_id: String!
        $stripe_customer_id: String!
      ) {
        insert_org_subscriptions_one(
          object: {
            org_id: $org_id
            status: $status
            valid_until: $valid_until
            plan: $plan
            credits: $credits
            stripe_customer_id: $stripe_customer_id
            stripe_checkout_session_id: $stripe_checkout_session_id
          }
        ) {
          id
        }
      }
    `,
    {
      plan: "CREDITS",
      org_id: orgId,
      status: "ACTIVE",
      valid_until: new Date(purchaseDate.getTime() + 1000 * 60 * 60 * 24 * 365), // 1 year from now
      credits,
      stripe_customer_id: stripeCustomerId,
      stripe_checkout_session_id: stripeCheckoutSessionId,
    },
    { headers: { "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET } }
  );

  if (createSubscriptionResponse.error) {
    console.error(createSubscriptionResponse.error);
    throw new Error("Could not create Stripe subscription");
  }

  return createSubscriptionResponse.data;
};

const trackUserPurchase = async ({
  orgId,
  gcid,
  purchaseDate,
  currency,
  amount,
  sessionId,
  userId,
  orgUserId,
  lineItems,
}: {
  orgId: string;
  gcid?: string;
  purchaseDate: Date;
  currency: string;
  amount: number;
  sessionId: string;
  userId: string;
  orgUserId: string;
  lineItems: Stripe.Response<Stripe.ApiList<Stripe.LineItem>>;
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
        timestamp_micros: purchaseDate.getTime().toString() + "000",
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
              items: lineItems.data.map((lineItem) => {
                return {
                  item_id: lineItem.id,
                  item_name: lineItem.description,
                  price: lineItem.amount_subtotal / 100,
                };
              }),
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
  stripeEvent,
  locale,
  credits,
  amount,
}: {
  toEmail: string;
  stripeEvent: Stripe.CheckoutSessionCompletedEvent;
  credits: number;
  amount: number;
  locale?: string;
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const charges: Stripe.Charge[] = [];
  if (typeof stripeEvent.data.object.payment_intent === "string") {
    const chargesResponse = await stripe.charges.list({
      payment_intent: stripeEvent.data.object.payment_intent,
    });
    charges.push(...chargesResponse.data);
  }
  const paymentCharge = charges.filter(
    (charge) => charge.status === "succeeded"
  )[0];

  const receiptUrl = paymentCharge?.receipt_url;

  console.log("paymentCharge");
  console.log(paymentCharge);

  const purchaseAmountString = `${(amount / 100).toFixed(0)},- kr`;
  const purchaseCredits = credits;

  const subjectLine = getPurchaseEmailSubjectLine({ locale });
  const emailHtml = await getPurchaseEmailString({
    props: { toEmail, purchaseAmountString, purchaseCredits, receiptUrl },
    locale,
  });
  const emailPlain = await getPurchaseEmailString({
    props: { toEmail, purchaseAmountString, purchaseCredits, receiptUrl },
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

export const junePurchaseEvent = async ({
  userId,
  credits,
  amount,
  currency,
}: {
  userId: string;
  credits: number;
  amount: number;
  currency: string;
}) => {
  const analytics = new Analytics(process.env.JUNE_KEY as string);

  console.log("June purchase event");

  analytics.track({
    userId,
    event: "Make Purchase",
    properties: {
      purchaseAmount: amount / 100,
      purchaseCurrency: currency,
      purchaseCredits: credits,
      paymentProvider: "Stripe",
    },
  });
  analytics.closeAndFlush();
};
