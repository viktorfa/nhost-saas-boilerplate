import type { Request, Response, NextFunction } from "express";
import * as jose from "jose";

export const parseNhostJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(400).json({ message: "Need Authorization header" });
  }
  try {
    const nhostToken = await parseNhostToken({
      jwtToken: authorizationHeader.split(" ")[1],
    });
    const nhostUser: NhostUser = {
      userId: nhostToken["x-hasura-user-id"],
      orgId: nhostToken["x-hasura-org-id"],
      orgUserId: nhostToken["x-hasura-org-user-id"],
    };
    req.nhostUser = nhostUser;
    next();
  } catch (e) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export const parseNhostToken = async ({ jwtToken }: { jwtToken: string }) => {
  const jwtKey = process.env.NHOST_JWT_SECRET as string | undefined;
  await jose.jwtVerify(jwtToken, new TextEncoder().encode(jwtKey));
  const decodedAccessToken = jose.decodeJwt(jwtToken) as NhostToken;
  const hasuraClaims: Record<HasuraClaimKey, string> = {
    "x-hasura-user-id":
      decodedAccessToken["https://hasura.io/jwt/claims"]["x-hasura-user-id"],
    "x-hasura-org-ids":
      decodedAccessToken["https://hasura.io/jwt/claims"]["x-hasura-Org-Ids"],
    "x-hasura-org-id":
      decodedAccessToken["https://hasura.io/jwt/claims"]["x-hasura-Org-Id"],
    "x-hasura-org-user-id":
      decodedAccessToken["https://hasura.io/jwt/claims"][
        "x-hasura-Org-User-Id"
      ],
    "x-hasura-user-is-anonymous":
      decodedAccessToken["https://hasura.io/jwt/claims"][
        "x-hasura-user-is-anonymous"
      ],
  };

  return hasuraClaims;
};
