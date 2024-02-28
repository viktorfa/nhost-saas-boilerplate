import { Request, Response } from "express";
import postgres from "postgres";
import { ofetch } from "ofetch";
import sgMail from "@sendgrid/mail";
import {
  getWelcomeEmailString,
  getWelcomeEmailSubjectLine,
} from "@/functions/emails";
import { Analytics } from "@june-so/analytics-node";

export default async (
  req: Request & { body: HasuraWebhookRequestBody },
  res: Response
) => {
  console.log("req.body");
  console.log(req.body);

  const requestBody = req.body as HasuraWebhookRequestBody<GQL_USERS>;
  if (!requestBody.event.data.new.id) {
    return res.status(400).send("No request body with id");
  }
  const createdUser = requestBody.event.data.new;
  const createdUserId = createdUser.id;

  const sql = postgres(process.env.DATABASE_URL);

  const orgName = createdUser.displayName
    ? `${createdUser.displayName}'s org`
    : "My org";

  const [userProfile, org, orgUser] = await sql.begin(async (sql) => {
    // Insert into orgs and capture the new org ID
    const [org] = await sql`
      INSERT INTO public.orgs (owner_id, title)
      VALUES (${createdUserId}, ${orgName})
      RETURNING id
    `;

    // Insert into org_users
    const [orgUser] = await sql`
      INSERT INTO public.org_users ("user_id", org_id, role)
      VALUES (${createdUserId}, ${org.id}, 'OWNER')
      RETURNING id
    `;

    // Insert into user_profiles
    const [userProfile] = await sql`
      INSERT INTO public.user_profiles ("user_id", current_org_user)
      VALUES (${createdUserId}, ${orgUser.id})
      RETURNING id
    `;

    return [userProfile, org, orgUser];
  });

  console.log(userProfile, org, orgUser);

  await Promise.all([
    trackUserSignUp({
      user: createdUser,
      orgId: org.id,
      orgUserId: orgUser.id,
    }),
    sendWelcomeEmail({
      toEmail: createdUser.email,
      locale: createdUser.locale,
    }),
    sendNewUserNotificationEmail({ userEmail: createdUser.email }),
    juneSignUpEvent({ user: createdUser }),
  ]).catch((e) => {
    console.error(`Error sending welcome email to ${createdUser.email}`);
    console.error(e);
    throw e;
  });

  return res.json([userProfile, org, orgUser]).status(201);
};

const trackUserSignUp = async ({
  user,
  orgId,
  orgUserId,
}: {
  user: GQL_USERS;
  orgId: string;
  orgUserId: string;
}) => {
  const timestamp = new Date().getTime();
  const transaction_id = `${user.id}-${timestamp}-sign-up`;

  console.log("user.metadata");
  console.log(user.metadata);
  console.log(typeof user.metadata);

  let userMetadata = user.metadata || {};
  if (typeof userMetadata === "string") {
    try {
      userMetadata = JSON.parse(userMetadata) as UserMetadata;
    } catch (e) {
      console.error(`Error parsing user.metadata for user ${user.id}`);
      console.error(e);
    }
  }

  const googleAnalResponse = await ofetch(
    `https://www.google-analytics.com/mp/collect`,
    {
      method: "POST",
      query: {
        measurement_id: process.env.GA4_MEASUREMENT_ID,
        api_secret: process.env.GA4_API_SECRET,
      },
      body: {
        client_id: userMetadata.gcid,
        timestamp_micros: timestamp.toString() + "000",
        events: [
          {
            name: "sign_up",
            params: {
              transaction_id,
              method: userMetadata.signUpMethod,
              user_id: user.id,
              t_user_id: user.id,
              t_org_id: orgId,
              t_org_user_id: orgUserId,
            },
          },
        ],
      },
    }
  ).catch((e) => {
    console.error("Error sending sign up event to Google Analytics");
    console.error(e);
  });
  return googleAnalResponse;
};

export const sendWelcomeEmail = async ({
  toEmail,
  locale = "en",
}: {
  toEmail: string;
  locale: string;
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const subjectLine = getWelcomeEmailSubjectLine({ locale });
  const emailHtml = await getWelcomeEmailString({
    props: { toEmail },
    locale,
  });
  const emailPlain = await getWelcomeEmailString({
    props: { toEmail },
    options: { plainText: true },
    locale,
  });

  const sgMessage: sgMail.MailDataRequired = {
    subject: subjectLine,
    to: toEmail,
    from: { email: "info@my-app.com", name: "My App Name" },
    text: emailPlain,
    html: emailHtml,
  };
  console.log(`Sending email to ${toEmail}`);
  const sendgridResponse = await sgMail.send(sgMessage);
  return sendgridResponse;
};
export const sendNewUserNotificationEmail = async ({
  userEmail,
}: {
  userEmail: string;
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const subjectLine = `Ny bruker til My App Name - ${userEmail}`;
  const emailHtml = `<p>${subjectLine}</p>`;
  const emailPlain = subjectLine;

  const sgMessage = {
    to: "vikfand@gmail.com",
    from: { email: "info@my-app.com", name: "My App Name" },
    subject: subjectLine,
    text: emailPlain,
    html: emailHtml,
  };
  console.log(`Sending email to vikfand@gmail.com`);
  const sendgridResponse = await sgMail.send(sgMessage);
  return sendgridResponse;
};

type UserMetadata = {
  gcid?: string;
  utmSource?: string;
  utmKamp?: string;
  signUpMethod?: string;
};

export const juneSignUpEvent = async ({ user }: { user: GQL_USERS }) => {
  try {
    const userId = user.id;
    let userMetadata = user.metadata || {};
    if (typeof userMetadata === "string") {
      try {
        userMetadata = JSON.parse(userMetadata) as UserMetadata;
      } catch (e) {
        console.error(`Error parsing user.metadata for user ${user.id}`);
        console.error(e);
      }
    }
    const analytics = new Analytics(process.env.JUNE_KEY as string);

    console.log("June sign up event");
    console.log("user.metadata", user.metadata);

    analytics.identify({
      userId,
      traits: {
        locale: user.locale,
        email: user.email,
        gcid: userMetadata?.gcid,
        signUpMethod: userMetadata?.signUpMethod,
        utmSource: userMetadata?.utmSource,
        utmKamp: userMetadata?.utmKamp,
      },
    });
    analytics.track({
      userId,
      event: "Signed Up",
      properties: {
        gcid: userMetadata?.gcid,
        signUpMethod: userMetadata?.signUpMethod,
        utmSource: userMetadata?.utmSource,
        utmKamp: userMetadata?.utmKamp,
      },
    });
    analytics.closeAndFlush();
  } catch (e) {
    console.error(`Error sending sign up event to June for user ${user.id}`);
    console.error(e);
  }
};
