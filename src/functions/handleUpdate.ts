import { getDifferenceInObjects } from "@/functions/utils";
import type { Request, Response } from "express";
import { withSentry } from "@/functions/sentry";
import { checkWebhookSecret } from "@/functions/security";

export default async (req: Request, res: Response) => {
  return withSentry(req, res, handler);
};

const handler = async (
  req: Request & { body: HasuraWebhookRequestBody },
  res: Response
) => {
  if (!checkWebhookSecret(req, res)) {
    return;
  }
  console.log("req.body");
  console.log(req.body);
  const requestBody = req.body as HasuraWebhookRequestBody;

  const difference = getDifferenceInObjects({
    from: requestBody.event.data.old,
    to: requestBody.event.data.new,
  });

  console.log("difference");
  console.log(difference);

  const differenceFields = Object.keys(difference);

  if (
    differenceFields.length === 1 &&
    differenceFields.includes("updated_at")
  ) {
    return res.sendStatus(204);
  }

  switch (requestBody.table.name) {
    default:
      return res.sendStatus(204);
  }
};
