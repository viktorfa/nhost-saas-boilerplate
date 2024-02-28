import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import type { OptionsJson } from "body-parser";
import {
  verifyStripeSignature,
  verifyVippsSignature,
} from "@/functions/security";

import handleInsert from "./functions/handleInsert";
import handleStripeWebhook from "@/functions/stripe/handleStripeWebhook";
import handleVippsWebhook from "@/functions/vipps/handleVippsWebhook";
import handleUpdate from "@/functions/handleUpdate";
import status from "@/functions/status";

const expressApp = express();

expressApp.use(cors());

const rawBodyPaths = ["/v1/handleStripeWebhook", "/v1/handleVippsWebhook"];
const myJson = (options: OptionsJson) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (rawBodyPaths.includes(req.path)) {
      return express.json({
        ...options,
        verify: (req, res, buf, encoding) => {
          req.rawBody = buf.toString((encoding as BufferEncoding) || "utf8");
        },
      })(req, res, next);
    } else {
      return express.json(options)(req, res, next);
    }
  };
};

expressApp.use(myJson({ limit: "6mb" }));

const routerV1 = express.Router();

routerV1.post("/handleInsert", handleInsert);
routerV1.post(
  "/handleStripeWebhook",
  verifyStripeSignature,
  handleStripeWebhook
);
routerV1.post("/handleVippsWebhook", verifyVippsSignature, handleVippsWebhook);
routerV1.post("/handleUpdate", handleUpdate);
routerV1.get("/status", status);

routerV1.get("/_status", function (req, res) {
  res.sendStatus(200);
});

expressApp.use("/v1", routerV1);

export default expressApp;
