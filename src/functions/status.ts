import { withSentry } from "@/functions/sentry";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  return withSentry(req, res, handler);
};

const handler = async (
  req: Request & { body: HasuraWebhookRequestBody },
  res: Response
) => {
  console.log("req.body");
  console.log(req.body);
  console.log("req.rawBody");
  console.log(req.rawBody);
  const requestBody = req.body as HasuraWebhookRequestBody;

  return res
    .json({
      NHOST_SUBDOMAIN: process.env.NHOST_SUBDOMAIN,
      NHOST_REGION: process.env.NHOST_REGION,
    })
    .status(200);
};
