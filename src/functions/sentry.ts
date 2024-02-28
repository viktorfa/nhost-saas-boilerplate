import type { Request, Response } from "express";

export const withSentry = async (
  req: Request,
  res: Response,
  handler: (req: Request, res: Response) => any
) => {
  try {
    const response = await handler(req, res);
    return response;
  } catch (e) {
    console.log("Caught error");
    console.error(e);
    if (e instanceof Error) {
      // Can determine whether it's safe to return the full error.
      // E.g. with webhooks from Hasura.
      // For functions invoked by users, it's not safe to return the full error.
      return res.status(500).json({ message: "See error logs" });
    } else {
      return res.status(500).json({ message: "See error logs" });
    }
  }
};
