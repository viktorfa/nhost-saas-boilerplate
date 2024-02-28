import type { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import crypto from "node:crypto";
import assert from "node:assert";

type RawBodyRequest = Request & { rawBody: string };

export const checkWebhookSecret = (req: Request, res: Response) => {
  const requestNhostWebhookSecret = req.get("nhost-webhook-secret");
  if (!requestNhostWebhookSecret) {
    res.status(400).send("No webhook secret");
    return false;
  }
  if (requestNhostWebhookSecret !== process.env.NHOST_WEBHOOK_SECRET) {
    res.status(400).send("Incorrect webhook secret");
    return false;
  }
  return true;
};

export const verifyStripeSignature = (
  req: RawBodyRequest,
  res: Response,
  next: NextFunction
) => {
  const sig = req.get("stripe-signature");
  console.log(`sig: ${sig}`);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });
  try {
    req.body = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_ENDPOINT_SECRET
    );
    next();
  } catch (error) {
    console.warn("Signature not valid");
    console.warn(error);
    return res.status(400).send("Signature not valid");
  }
};
export const verifyVippsSignature = (
  req: RawBodyRequest,
  res: Response,
  next: NextFunction
) => {
  // Verify content
  const expectedContentHash = crypto
    .createHash("sha256")
    .update(req.rawBody)
    .digest("base64");
  // Verify signature
  const expectedSignedString =
    `${req.method}\n` +
    `${req.originalUrl}\n` +
    `${req.get("X-Ms-Date")};${req.get("Host")};${req.get(
      "X-Ms-Content-Sha256"
    )}`;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.VIPPS_WEBHOOK_SECRET)
    .update(expectedSignedString)
    .digest("base64");
  const expectedAuth = `HMAC-SHA256 SignedHeaders=x-ms-date;host;x-ms-content-sha256&Signature=${expectedSignature}`;

  try {
    assert.equal(
      req.get("X-Ms-Content-Sha256"),
      expectedContentHash,
      "Content hash was not valid"
    );
    assert.equal(
      expectedAuth,
      req.get("Authorization"),
      "Authorization was not valid"
    );
    next();
  } catch (error) {
    console.warn("Signature not valid");
    console.warn(error);
    return res.status(400).send("Signature not valid");
  }
};
