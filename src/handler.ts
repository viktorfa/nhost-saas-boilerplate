import expressApp from "@/express-app";
import serverlessHttp from "serverless-http";

export const handler = serverlessHttp(expressApp, {
  provider: "aws",
});
