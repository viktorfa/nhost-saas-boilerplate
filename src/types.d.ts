type HasuraWebhookRequestBody<T = { id: string }> = {
  created_at: string;
  delivery_info: { current_retry: number; max_retries: number };
  event: {
    data: { new: T; old: T };
    op: "INSERT" | "UPDATE" | "DELETE";
    session_variables: {
      "x-hasura-org-id"?: string;
      "x-hasura-org-ids"?: string;
      "x-hasura-org-user-id"?: string;
      "x-hasura-role": string;
      "x-hasura-user-id"?: string;
      "x-hasura-user-is-anonymous"?: string;
    };
    trace_context: object;
  };
  id: string;
  table: { name: string; schema: string };
  trigger: { name: string };
};

type NhostUser = {
  userId: string;
  orgId: string;
  orgUserId: string;
};

type HasuraClaimKey =
  | "x-hasura-user-id"
  | "x-hasura-org-id"
  | "x-hasura-org-ids"
  | "x-hasura-org-user-id"
  | "x-hasura-user-is-anonymous";

type NhostToken = {
  "https://hasura.io/jwt/claims": {
    "x-hasura-Org-Id": string;
    "x-hasura-Org-Ids": string;
    "x-hasura-Org-User-Id": string;
    "x-hasura-allowed-roles": ["me", "user_with_inherit", "user", "admin"];
    "x-hasura-default-role": "user_with_inherit";
    "x-hasura-user-id": string;
    "x-hasura-user-is-anonymous": "false" | "true";
  };
  sub: string;
  iat: number;
  exp: number;
  iss: "hasura-auth";
};
