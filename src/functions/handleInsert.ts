import { withSentry } from "@/functions/sentry";
import { checkWebhookSecret } from "@/functions/security";
import type { Request, Response } from "express";
import handleInsertUser from "@/functions/users/handleInsertUser";

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

  switch (requestBody.table.name) {
    case "users":
      return handleInsertUser(req, res);

    default:
      return res.status(204);
  }
};
