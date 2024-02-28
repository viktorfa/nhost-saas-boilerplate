type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GQL_GET_ORG_FOR_FOLLOW_QUERY_VARIABLES = Exact<{
  id: Scalars['uuid']['input'];
}>;


type GQL_GET_ORG_FOR_FOLLOW_QUERY = { __typename?: 'query_root', orgs_by_pk: { __typename?: 'orgs', id: string, owner_id: string, org_users: Array<{ __typename?: 'org_users', id: string, user: { __typename?: 'users', locale: string, id: string } }> } | null };

type GQL_INSERT_ORG_SUBSCRIPTION_MUTATION_VARIABLES = Exact<{
  org_id: Scalars['uuid']['input'];
  status: Scalars['String']['input'];
  valid_until: Scalars['timestamptz']['input'];
  plan: Scalars['String']['input'];
  credits: Scalars['Int']['input'];
  stripe_checkout_session_id: Scalars['String']['input'];
  stripe_customer_id: Scalars['String']['input'];
}>;


type GQL_INSERT_ORG_SUBSCRIPTION_MUTATION = { __typename?: 'mutation_root', insert_org_subscriptions_one: { __typename?: 'org_subscriptions', id: string } | null };

type GQL_UPDATE_VIPPS_SESSION_MUTATION_VARIABLES = Exact<{
  id: Scalars['uuid']['input'];
  update: GQL_PAYMENT_VIPPS_SESSIONS_SET_INPUT;
}>;


type GQL_UPDATE_VIPPS_SESSION_MUTATION = { __typename?: 'mutation_root', update_payment_vipps_sessions_by_pk: { __typename?: 'payment_vipps_sessions', id: string } | null };

type GQL_GET_VIPPS_SESSION_WITH_USER_QUERY_VARIABLES = Exact<{
  id: Scalars['uuid']['input'];
}>;


type GQL_GET_VIPPS_SESSION_WITH_USER_QUERY = { __typename?: 'query_root', payment_vipps_sessions_by_pk: { __typename?: 'payment_vipps_sessions', amount: number, currency: string, id: string, org_id: string, product: string, quantity: number, status: string, vipps_reference: string, metadata: Record<string, any> | Array<any>, org_user: { __typename?: 'org_users', id: string, user: { __typename?: 'users', id: string, email: any | null, locale: string } } } | null };

type GQL_INSERT_ORG_SUBSCRIPTION_FOR_VIPPS_MUTATION_VARIABLES = Exact<{
  org_id: Scalars['uuid']['input'];
  status: Scalars['String']['input'];
  valid_until: Scalars['timestamptz']['input'];
  plan: Scalars['String']['input'];
  credits: Scalars['Int']['input'];
  vipps_session_id: Scalars['uuid']['input'];
}>;


type GQL_INSERT_ORG_SUBSCRIPTION_FOR_VIPPS_MUTATION = { __typename?: 'mutation_root', insert_org_subscriptions_one: { __typename?: 'org_subscriptions', id: string } | null, update_payment_vipps_sessions_by_pk: { __typename?: 'payment_vipps_sessions', id: string } | null };

type GQL_GET_VIPPS_SESSION_QUERY_VARIABLES = Exact<{
  id: Scalars['uuid']['input'];
}>;


type GQL_GET_VIPPS_SESSION_QUERY = { __typename?: 'query_root', payment_vipps_sessions_by_pk: { __typename?: 'payment_vipps_sessions', amount: number, currency: string, id: string, org_id: string, product: string, quantity: number, status: string, vipps_reference: string, metadata: Record<string, any> | Array<any> } | null };

/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  jsonb: { input: Record<string, any> | Array<any>; output: Record<string, any> | Array<any>; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
type GQL_BOOLEAN_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['Boolean']['input']>;
  _gt: InputMaybe<Scalars['Boolean']['input']>;
  _gte: InputMaybe<Scalars['Boolean']['input']>;
  _in: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Boolean']['input']>;
  _lte: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<Scalars['Boolean']['input']>;
  _nin: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
type GQL_INT_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['Int']['input']>;
  _gt: InputMaybe<Scalars['Int']['input']>;
  _gte: InputMaybe<Scalars['Int']['input']>;
  _in: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Int']['input']>;
  _lte: InputMaybe<Scalars['Int']['input']>;
  _neq: InputMaybe<Scalars['Int']['input']>;
  _nin: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
type GQL_STRING_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']['input']>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']['input']>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']['input']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_PROVIDER_REQUESTS = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_PROVIDER_REQUESTS_OPTIONS_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate: Maybe<GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_PROVIDER_REQUESTS>;
};

/** aggregate fields of "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE_FIELDS = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_PROVIDER_REQUESTS_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_PROVIDER_REQUESTS_MIN_FIELDS>;
};


/** aggregate fields of "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_AUTH_PROVIDER_REQUESTS_APPEND_INPUT = {
  options: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
type GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  options: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
enum GQL_AUTH_PROVIDER_REQUESTS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  PROVIDER_REQUESTS_PKEY = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_AUTH_PROVIDER_REQUESTS_DELETE_AT_PATH_INPUT = {
  options: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_AUTH_PROVIDER_REQUESTS_DELETE_ELEM_INPUT = {
  options: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_AUTH_PROVIDER_REQUESTS_DELETE_KEY_INPUT = {
  options: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_INSERT_INPUT = {
  id: InputMaybe<Scalars['uuid']['input']>;
  options: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_PROVIDER_REQUESTS_MAX_FIELDS = {
  __typename?: 'authProviderRequests_max_fields';
  id: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
type GQL_AUTH_PROVIDER_REQUESTS_MIN_FIELDS = {
  __typename?: 'authProviderRequests_min_fields';
  id: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_MUTATION_RESPONSE = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_PROVIDER_REQUESTS>;
};

/** on_conflict condition type for table "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_ON_CONFLICT = {
  constraint: GQL_AUTH_PROVIDER_REQUESTS_CONSTRAINT;
  update_columns: Array<GQL_AUTH_PROVIDER_REQUESTS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
type GQL_AUTH_PROVIDER_REQUESTS_ORDER_BY = {
  id: InputMaybe<GQL_ORDER_BY>;
  options: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.provider_requests */
type GQL_AUTH_PROVIDER_REQUESTS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_AUTH_PROVIDER_REQUESTS_PREPEND_INPUT = {
  options: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
enum GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN {
  /** column name */
  ID = 'id',
  /** column name */
  OPTIONS = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
type GQL_AUTH_PROVIDER_REQUESTS_SET_INPUT = {
  id: InputMaybe<Scalars['uuid']['input']>;
  options: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
type GQL_AUTH_PROVIDER_REQUESTS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_PROVIDER_REQUESTS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_PROVIDER_REQUESTS_STREAM_CURSOR_VALUE_INPUT = {
  id: InputMaybe<Scalars['uuid']['input']>;
  options: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
enum GQL_AUTH_PROVIDER_REQUESTS_UPDATE_COLUMN {
  /** column name */
  ID = 'id',
  /** column name */
  OPTIONS = 'options'
}

type GQL_AUTH_PROVIDER_REQUESTS_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_KEY_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_PROVIDERS = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<GQL_AUTH_USER_PROVIDERS>;
  /** An aggregate relationship */
  userProviders_aggregate: GQL_AUTH_USER_PROVIDERS_AGGREGATE;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_PROVIDERS_USER_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_PROVIDERS_USER_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};

/** aggregated selection of "auth.providers" */
type GQL_AUTH_PROVIDERS_AGGREGATE = {
  __typename?: 'authProviders_aggregate';
  aggregate: Maybe<GQL_AUTH_PROVIDERS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_PROVIDERS>;
};

/** aggregate fields of "auth.providers" */
type GQL_AUTH_PROVIDERS_AGGREGATE_FIELDS = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_PROVIDERS_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_PROVIDERS_MIN_FIELDS>;
};


/** aggregate fields of "auth.providers" */
type GQL_AUTH_PROVIDERS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_PROVIDERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
type GQL_AUTH_PROVIDERS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_PROVIDERS_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_PROVIDERS_BOOL_EXP>>;
  id: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  userProviders: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
  userProviders_aggregate: InputMaybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_BOOL_EXP>;
};

/** unique or primary key constraints on table "auth.providers" */
enum GQL_AUTH_PROVIDERS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  PROVIDERS_PKEY = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
type GQL_AUTH_PROVIDERS_INSERT_INPUT = {
  id: InputMaybe<Scalars['String']['input']>;
  userProviders: InputMaybe<GQL_AUTH_USER_PROVIDERS_ARR_REL_INSERT_INPUT>;
};

/** aggregate max on columns */
type GQL_AUTH_PROVIDERS_MAX_FIELDS = {
  __typename?: 'authProviders_max_fields';
  id: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
type GQL_AUTH_PROVIDERS_MIN_FIELDS = {
  __typename?: 'authProviders_min_fields';
  id: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
type GQL_AUTH_PROVIDERS_MUTATION_RESPONSE = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_PROVIDERS>;
};

/** input type for inserting object relation for remote table "auth.providers" */
type GQL_AUTH_PROVIDERS_OBJ_REL_INSERT_INPUT = {
  data: GQL_AUTH_PROVIDERS_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_PROVIDERS_ON_CONFLICT>;
};

/** on_conflict condition type for table "auth.providers" */
type GQL_AUTH_PROVIDERS_ON_CONFLICT = {
  constraint: GQL_AUTH_PROVIDERS_CONSTRAINT;
  update_columns: Array<GQL_AUTH_PROVIDERS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.providers". */
type GQL_AUTH_PROVIDERS_ORDER_BY = {
  id: InputMaybe<GQL_ORDER_BY>;
  userProviders_aggregate: InputMaybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_ORDER_BY>;
};

/** primary key columns input for table: auth.providers */
type GQL_AUTH_PROVIDERS_PK_COLUMNS_INPUT = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
enum GQL_AUTH_PROVIDERS_SELECT_COLUMN {
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "auth.providers" */
type GQL_AUTH_PROVIDERS_SET_INPUT = {
  id: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
type GQL_AUTH_PROVIDERS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_PROVIDERS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_PROVIDERS_STREAM_CURSOR_VALUE_INPUT = {
  id: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
enum GQL_AUTH_PROVIDERS_UPDATE_COLUMN {
  /** column name */
  ID = 'id'
}

type GQL_AUTH_PROVIDERS_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_PROVIDERS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_PROVIDERS_BOOL_EXP;
};

/** columns and relationships of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES = {
  __typename?: 'authRefreshTokenTypes';
  comment: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<GQL_AUTH_REFRESH_TOKENS>;
  /** An aggregate relationship */
  refreshTokens_aggregate: GQL_AUTH_REFRESH_TOKENS_AGGREGATE;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_REFRESH_TOKENS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


/** columns and relationships of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_REFRESH_TOKENS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};

/** aggregated selection of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_REFRESH_TOKEN_TYPES>;
};

/** aggregate fields of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE_FIELDS = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MIN_FIELDS>;
};


/** aggregate fields of "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
type GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>>;
  comment: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  refreshTokens: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
  refreshTokens_aggregate: InputMaybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_BOOL_EXP>;
  value: InputMaybe<GQL_STRING_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
enum GQL_AUTH_REFRESH_TOKEN_TYPES_CONSTRAINT {
  /** unique or primary key constraint on columns "value" */
  REFRESH_TOKEN_TYPES_PKEY = 'refresh_token_types_pkey'
}

enum GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM {
  /** Personal access token */
  PAT = 'pat',
  /** Regular refresh token */
  REGULAR = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
type GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM_COMPARISON_EXP = {
  _eq: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>;
  _in: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>;
  _nin: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_INSERT_INPUT = {
  comment: InputMaybe<Scalars['String']['input']>;
  refreshTokens: InputMaybe<GQL_AUTH_REFRESH_TOKENS_ARR_REL_INSERT_INPUT>;
  value: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_REFRESH_TOKEN_TYPES_MAX_FIELDS = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
type GQL_AUTH_REFRESH_TOKEN_TYPES_MIN_FIELDS = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_MUTATION_RESPONSE = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_REFRESH_TOKEN_TYPES>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_ON_CONFLICT = {
  constraint: GQL_AUTH_REFRESH_TOKEN_TYPES_CONSTRAINT;
  update_columns: Array<GQL_AUTH_REFRESH_TOKEN_TYPES_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
type GQL_AUTH_REFRESH_TOKEN_TYPES_ORDER_BY = {
  comment: InputMaybe<GQL_ORDER_BY>;
  refreshTokens_aggregate: InputMaybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_ORDER_BY>;
  value: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.refresh_token_types */
type GQL_AUTH_REFRESH_TOKEN_TYPES_PK_COLUMNS_INPUT = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
enum GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_SET_INPUT = {
  comment: InputMaybe<Scalars['String']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
type GQL_AUTH_REFRESH_TOKEN_TYPES_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_REFRESH_TOKEN_TYPES_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_REFRESH_TOKEN_TYPES_STREAM_CURSOR_VALUE_INPUT = {
  comment: InputMaybe<Scalars['String']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
enum GQL_AUTH_REFRESH_TOKEN_TYPES_UPDATE_COLUMN {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

type GQL_AUTH_REFRESH_TOKEN_TYPES_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_REFRESH_TOKENS = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash: Maybe<Scalars['String']['output']>;
  type: GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM;
  /** An object relationship */
  user: GQL_USERS;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_REFRESH_TOKENS_METADATA_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_AGGREGATE = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate: Maybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_REFRESH_TOKENS>;
};

type GQL_AUTH_REFRESH_TOKENS_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_AUTH_REFRESH_TOKENS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_AGGREGATE_FIELDS = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_REFRESH_TOKENS_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_REFRESH_TOKENS_MIN_FIELDS>;
};


/** aggregate fields of "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_AGGREGATE_ORDER_BY = {
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_AUTH_REFRESH_TOKENS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_AUTH_REFRESH_TOKENS_MIN_ORDER_BY>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_AUTH_REFRESH_TOKENS_APPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_AUTH_REFRESH_TOKENS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_REFRESH_TOKENS_ON_CONFLICT>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
type GQL_AUTH_REFRESH_TOKENS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  expiresAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  metadata: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
  refreshTokenHash: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  type: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM_COMPARISON_EXP>;
  user: InputMaybe<GQL_USERS_BOOL_EXP>;
  userId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
enum GQL_AUTH_REFRESH_TOKENS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  REFRESH_TOKENS_PKEY = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_AUTH_REFRESH_TOKENS_DELETE_AT_PATH_INPUT = {
  metadata: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_AUTH_REFRESH_TOKENS_DELETE_ELEM_INPUT = {
  metadata: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_AUTH_REFRESH_TOKENS_DELETE_KEY_INPUT = {
  metadata: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_INSERT_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>;
  user: InputMaybe<GQL_USERS_OBJ_REL_INSERT_INPUT>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_REFRESH_TOKENS_MAX_FIELDS = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  expiresAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_MAX_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  expiresAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  refreshTokenHash: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_AUTH_REFRESH_TOKENS_MIN_FIELDS = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  expiresAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_MIN_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  expiresAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  refreshTokenHash: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_MUTATION_RESPONSE = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_REFRESH_TOKENS>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_ON_CONFLICT = {
  constraint: GQL_AUTH_REFRESH_TOKENS_CONSTRAINT;
  update_columns: Array<GQL_AUTH_REFRESH_TOKENS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
type GQL_AUTH_REFRESH_TOKENS_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  expiresAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  metadata: InputMaybe<GQL_ORDER_BY>;
  refreshTokenHash: InputMaybe<GQL_ORDER_BY>;
  type: InputMaybe<GQL_ORDER_BY>;
  user: InputMaybe<GQL_USERS_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.refresh_tokens */
type GQL_AUTH_REFRESH_TOKENS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_AUTH_REFRESH_TOKENS_PREPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
enum GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  EXPIRES_AT = 'expiresAt',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  REFRESH_TOKEN_HASH = 'refreshTokenHash',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
type GQL_AUTH_REFRESH_TOKENS_SET_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
type GQL_AUTH_REFRESH_TOKENS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_REFRESH_TOKENS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_REFRESH_TOKENS_STREAM_CURSOR_VALUE_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ENUM>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
enum GQL_AUTH_REFRESH_TOKENS_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  EXPIRES_AT = 'expiresAt',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  REFRESH_TOKEN_HASH = 'refreshTokenHash',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'userId'
}

type GQL_AUTH_REFRESH_TOKENS_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_AUTH_REFRESH_TOKENS_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_KEY_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_AUTH_REFRESH_TOKENS_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKENS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_REFRESH_TOKENS_BOOL_EXP;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_ROLES = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<GQL_AUTH_USER_ROLES>;
  /** An aggregate relationship */
  userRoles_aggregate: GQL_AUTH_USER_ROLES_AGGREGATE;
  /** An array relationship */
  usersByDefaultRole: Array<GQL_USERS>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: GQL_USERS_AGGREGATE;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_ROLES_USER_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_ROLES_USER_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_ROLES_USERS_BY_DEFAULT_ROLE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_ROLES_USERS_BY_DEFAULT_ROLE_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};

/** aggregated selection of "auth.roles" */
type GQL_AUTH_ROLES_AGGREGATE = {
  __typename?: 'authRoles_aggregate';
  aggregate: Maybe<GQL_AUTH_ROLES_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_ROLES>;
};

/** aggregate fields of "auth.roles" */
type GQL_AUTH_ROLES_AGGREGATE_FIELDS = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_ROLES_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_ROLES_MIN_FIELDS>;
};


/** aggregate fields of "auth.roles" */
type GQL_AUTH_ROLES_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_ROLES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
type GQL_AUTH_ROLES_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_ROLES_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_ROLES_BOOL_EXP>>;
  role: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  userRoles: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
  userRoles_aggregate: InputMaybe<GQL_AUTH_USER_ROLES_AGGREGATE_BOOL_EXP>;
  usersByDefaultRole: InputMaybe<GQL_USERS_BOOL_EXP>;
  usersByDefaultRole_aggregate: InputMaybe<GQL_USERS_AGGREGATE_BOOL_EXP>;
};

/** unique or primary key constraints on table "auth.roles" */
enum GQL_AUTH_ROLES_CONSTRAINT {
  /** unique or primary key constraint on columns "role" */
  ROLES_PKEY = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
type GQL_AUTH_ROLES_INSERT_INPUT = {
  role: InputMaybe<Scalars['String']['input']>;
  userRoles: InputMaybe<GQL_AUTH_USER_ROLES_ARR_REL_INSERT_INPUT>;
  usersByDefaultRole: InputMaybe<GQL_USERS_ARR_REL_INSERT_INPUT>;
};

/** aggregate max on columns */
type GQL_AUTH_ROLES_MAX_FIELDS = {
  __typename?: 'authRoles_max_fields';
  role: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
type GQL_AUTH_ROLES_MIN_FIELDS = {
  __typename?: 'authRoles_min_fields';
  role: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
type GQL_AUTH_ROLES_MUTATION_RESPONSE = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_ROLES>;
};

/** input type for inserting object relation for remote table "auth.roles" */
type GQL_AUTH_ROLES_OBJ_REL_INSERT_INPUT = {
  data: GQL_AUTH_ROLES_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_ROLES_ON_CONFLICT>;
};

/** on_conflict condition type for table "auth.roles" */
type GQL_AUTH_ROLES_ON_CONFLICT = {
  constraint: GQL_AUTH_ROLES_CONSTRAINT;
  update_columns: Array<GQL_AUTH_ROLES_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.roles". */
type GQL_AUTH_ROLES_ORDER_BY = {
  role: InputMaybe<GQL_ORDER_BY>;
  userRoles_aggregate: InputMaybe<GQL_AUTH_USER_ROLES_AGGREGATE_ORDER_BY>;
  usersByDefaultRole_aggregate: InputMaybe<GQL_USERS_AGGREGATE_ORDER_BY>;
};

/** primary key columns input for table: auth.roles */
type GQL_AUTH_ROLES_PK_COLUMNS_INPUT = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
enum GQL_AUTH_ROLES_SELECT_COLUMN {
  /** column name */
  ROLE = 'role'
}

/** input type for updating data in table "auth.roles" */
type GQL_AUTH_ROLES_SET_INPUT = {
  role: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
type GQL_AUTH_ROLES_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_ROLES_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_ROLES_STREAM_CURSOR_VALUE_INPUT = {
  role: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
enum GQL_AUTH_ROLES_UPDATE_COLUMN {
  /** column name */
  ROLE = 'role'
}

type GQL_AUTH_ROLES_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_ROLES_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_ROLES_BOOL_EXP;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_USER_PROVIDERS = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: GQL_AUTH_PROVIDERS;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: GQL_USERS;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_AGGREGATE = {
  __typename?: 'authUserProviders_aggregate';
  aggregate: Maybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_USER_PROVIDERS>;
};

type GQL_AUTH_USER_PROVIDERS_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_AUTH_USER_PROVIDERS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_AGGREGATE_FIELDS = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_USER_PROVIDERS_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_USER_PROVIDERS_MIN_FIELDS>;
};


/** aggregate fields of "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_AGGREGATE_ORDER_BY = {
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_AUTH_USER_PROVIDERS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_AUTH_USER_PROVIDERS_MIN_ORDER_BY>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_AUTH_USER_PROVIDERS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_USER_PROVIDERS_ON_CONFLICT>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
type GQL_AUTH_USER_PROVIDERS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>>;
  accessToken: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  provider: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
  providerId: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  providerUserId: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  refreshToken: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updatedAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  user: InputMaybe<GQL_USERS_BOOL_EXP>;
  userId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.user_providers" */
enum GQL_AUTH_USER_PROVIDERS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  USER_PROVIDERS_PKEY = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  USER_PROVIDERS_PROVIDER_ID_PROVIDER_USER_ID_KEY = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  USER_PROVIDERS_USER_ID_PROVIDER_ID_KEY = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_INSERT_INPUT = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  provider: InputMaybe<GQL_AUTH_PROVIDERS_OBJ_REL_INSERT_INPUT>;
  providerId: InputMaybe<Scalars['String']['input']>;
  providerUserId: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  user: InputMaybe<GQL_USERS_OBJ_REL_INSERT_INPUT>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_USER_PROVIDERS_MAX_FIELDS = {
  __typename?: 'authUserProviders_max_fields';
  accessToken: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  providerId: Maybe<Scalars['String']['output']>;
  providerUserId: Maybe<Scalars['String']['output']>;
  refreshToken: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_MAX_ORDER_BY = {
  accessToken: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  providerId: InputMaybe<GQL_ORDER_BY>;
  providerUserId: InputMaybe<GQL_ORDER_BY>;
  refreshToken: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_AUTH_USER_PROVIDERS_MIN_FIELDS = {
  __typename?: 'authUserProviders_min_fields';
  accessToken: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  providerId: Maybe<Scalars['String']['output']>;
  providerUserId: Maybe<Scalars['String']['output']>;
  refreshToken: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_MIN_ORDER_BY = {
  accessToken: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  providerId: InputMaybe<GQL_ORDER_BY>;
  providerUserId: InputMaybe<GQL_ORDER_BY>;
  refreshToken: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_MUTATION_RESPONSE = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_USER_PROVIDERS>;
};

/** on_conflict condition type for table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_ON_CONFLICT = {
  constraint: GQL_AUTH_USER_PROVIDERS_CONSTRAINT;
  update_columns: Array<GQL_AUTH_USER_PROVIDERS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.user_providers". */
type GQL_AUTH_USER_PROVIDERS_ORDER_BY = {
  accessToken: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  provider: InputMaybe<GQL_AUTH_PROVIDERS_ORDER_BY>;
  providerId: InputMaybe<GQL_ORDER_BY>;
  providerUserId: InputMaybe<GQL_ORDER_BY>;
  refreshToken: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  user: InputMaybe<GQL_USERS_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.user_providers */
type GQL_AUTH_USER_PROVIDERS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
enum GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN {
  /** column name */
  ACCESS_TOKEN = 'accessToken',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PROVIDER_ID = 'providerId',
  /** column name */
  PROVIDER_USER_ID = 'providerUserId',
  /** column name */
  REFRESH_TOKEN = 'refreshToken',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  USER_ID = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
type GQL_AUTH_USER_PROVIDERS_SET_INPUT = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  providerId: InputMaybe<Scalars['String']['input']>;
  providerUserId: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
type GQL_AUTH_USER_PROVIDERS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_USER_PROVIDERS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_USER_PROVIDERS_STREAM_CURSOR_VALUE_INPUT = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  providerId: InputMaybe<Scalars['String']['input']>;
  providerUserId: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
enum GQL_AUTH_USER_PROVIDERS_UPDATE_COLUMN {
  /** column name */
  ACCESS_TOKEN = 'accessToken',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PROVIDER_ID = 'providerId',
  /** column name */
  PROVIDER_USER_ID = 'providerUserId',
  /** column name */
  REFRESH_TOKEN = 'refreshToken',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  USER_ID = 'userId'
}

type GQL_AUTH_USER_PROVIDERS_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_USER_PROVIDERS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_USER_PROVIDERS_BOOL_EXP;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_USER_ROLES = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: GQL_AUTH_ROLES;
  /** An object relationship */
  user: GQL_USERS;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
type GQL_AUTH_USER_ROLES_AGGREGATE = {
  __typename?: 'authUserRoles_aggregate';
  aggregate: Maybe<GQL_AUTH_USER_ROLES_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_USER_ROLES>;
};

type GQL_AUTH_USER_ROLES_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_AUTH_USER_ROLES_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_AUTH_USER_ROLES_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "auth.user_roles" */
type GQL_AUTH_USER_ROLES_AGGREGATE_FIELDS = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_USER_ROLES_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_USER_ROLES_MIN_FIELDS>;
};


/** aggregate fields of "auth.user_roles" */
type GQL_AUTH_USER_ROLES_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_AGGREGATE_ORDER_BY = {
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_AUTH_USER_ROLES_MAX_ORDER_BY>;
  min: InputMaybe<GQL_AUTH_USER_ROLES_MIN_ORDER_BY>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_AUTH_USER_ROLES_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_USER_ROLES_ON_CONFLICT>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
type GQL_AUTH_USER_ROLES_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_USER_ROLES_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_USER_ROLES_BOOL_EXP>>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  role: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  roleByRole: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
  user: InputMaybe<GQL_USERS_BOOL_EXP>;
  userId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.user_roles" */
enum GQL_AUTH_USER_ROLES_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  USER_ROLES_PKEY = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  USER_ROLES_USER_ID_ROLE_KEY = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_INSERT_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  roleByRole: InputMaybe<GQL_AUTH_ROLES_OBJ_REL_INSERT_INPUT>;
  user: InputMaybe<GQL_USERS_OBJ_REL_INSERT_INPUT>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_USER_ROLES_MAX_FIELDS = {
  __typename?: 'authUserRoles_max_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_MAX_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_AUTH_USER_ROLES_MIN_FIELDS = {
  __typename?: 'authUserRoles_min_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_MIN_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_MUTATION_RESPONSE = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_USER_ROLES>;
};

/** on_conflict condition type for table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_ON_CONFLICT = {
  constraint: GQL_AUTH_USER_ROLES_CONSTRAINT;
  update_columns: Array<GQL_AUTH_USER_ROLES_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.user_roles". */
type GQL_AUTH_USER_ROLES_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  roleByRole: InputMaybe<GQL_AUTH_ROLES_ORDER_BY>;
  user: InputMaybe<GQL_USERS_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.user_roles */
type GQL_AUTH_USER_ROLES_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
enum GQL_AUTH_USER_ROLES_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  ROLE = 'role',
  /** column name */
  USER_ID = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
type GQL_AUTH_USER_ROLES_SET_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
type GQL_AUTH_USER_ROLES_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_USER_ROLES_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_USER_ROLES_STREAM_CURSOR_VALUE_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
enum GQL_AUTH_USER_ROLES_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  ROLE = 'role',
  /** column name */
  USER_ID = 'userId'
}

type GQL_AUTH_USER_ROLES_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_USER_ROLES_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_USER_ROLES_BOOL_EXP;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_AUTH_USER_SECURITY_KEYS = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: GQL_USERS;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate: Maybe<GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_AUTH_USER_SECURITY_KEYS>;
};

type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_FIELDS = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg: Maybe<GQL_AUTH_USER_SECURITY_KEYS_AVG_FIELDS>;
  count: Scalars['Int']['output'];
  max: Maybe<GQL_AUTH_USER_SECURITY_KEYS_MAX_FIELDS>;
  min: Maybe<GQL_AUTH_USER_SECURITY_KEYS_MIN_FIELDS>;
  stddev: Maybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_FIELDS>;
  stddev_pop: Maybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_POP_FIELDS>;
  stddev_samp: Maybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_SAMP_FIELDS>;
  sum: Maybe<GQL_AUTH_USER_SECURITY_KEYS_SUM_FIELDS>;
  var_pop: Maybe<GQL_AUTH_USER_SECURITY_KEYS_VAR_POP_FIELDS>;
  var_samp: Maybe<GQL_AUTH_USER_SECURITY_KEYS_VAR_SAMP_FIELDS>;
  variance: Maybe<GQL_AUTH_USER_SECURITY_KEYS_VARIANCE_FIELDS>;
};


/** aggregate fields of "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_ORDER_BY = {
  avg: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_AVG_ORDER_BY>;
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_MIN_ORDER_BY>;
  stddev: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_ORDER_BY>;
  stddev_pop: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_POP_ORDER_BY>;
  stddev_samp: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_STDDEV_SAMP_ORDER_BY>;
  sum: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_SUM_ORDER_BY>;
  var_pop: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_VAR_POP_ORDER_BY>;
  var_samp: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_VAR_SAMP_ORDER_BY>;
  variance: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_VARIANCE_ORDER_BY>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_AUTH_USER_SECURITY_KEYS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_ON_CONFLICT>;
};

/** aggregate avg on columns */
type GQL_AUTH_USER_SECURITY_KEYS_AVG_FIELDS = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_AVG_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
type GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>>;
  _not: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>>;
  counter: InputMaybe<GQL_BIGINT_COMPARISON_EXP>;
  credentialId: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  credentialPublicKey: InputMaybe<GQL_BYTEA_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  nickname: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  transports: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  user: InputMaybe<GQL_USERS_BOOL_EXP>;
  userId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
enum GQL_AUTH_USER_SECURITY_KEYS_CONSTRAINT {
  /** unique or primary key constraint on columns "credential_id" */
  USER_SECURITY_KEY_CREDENTIAL_ID_KEY = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  USER_SECURITY_KEYS_PKEY = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_INC_INPUT = {
  counter: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_INSERT_INPUT = {
  counter: InputMaybe<Scalars['bigint']['input']>;
  credentialId: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey: InputMaybe<Scalars['bytea']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  nickname: InputMaybe<Scalars['String']['input']>;
  transports: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<GQL_USERS_OBJ_REL_INSERT_INPUT>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_AUTH_USER_SECURITY_KEYS_MAX_FIELDS = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter: Maybe<Scalars['bigint']['output']>;
  credentialId: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  nickname: Maybe<Scalars['String']['output']>;
  transports: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_MAX_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
  credentialId: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  nickname: InputMaybe<GQL_ORDER_BY>;
  transports: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_AUTH_USER_SECURITY_KEYS_MIN_FIELDS = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter: Maybe<Scalars['bigint']['output']>;
  credentialId: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  nickname: Maybe<Scalars['String']['output']>;
  transports: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_MIN_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
  credentialId: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  nickname: InputMaybe<GQL_ORDER_BY>;
  transports: InputMaybe<GQL_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_MUTATION_RESPONSE = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_AUTH_USER_SECURITY_KEYS>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_ON_CONFLICT = {
  constraint: GQL_AUTH_USER_SECURITY_KEYS_CONSTRAINT;
  update_columns: Array<GQL_AUTH_USER_SECURITY_KEYS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
type GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
  credentialId: InputMaybe<GQL_ORDER_BY>;
  credentialPublicKey: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  nickname: InputMaybe<GQL_ORDER_BY>;
  transports: InputMaybe<GQL_ORDER_BY>;
  user: InputMaybe<GQL_USERS_ORDER_BY>;
  userId: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: auth.user_security_keys */
type GQL_AUTH_USER_SECURITY_KEYS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
enum GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN {
  /** column name */
  COUNTER = 'counter',
  /** column name */
  CREDENTIAL_ID = 'credentialId',
  /** column name */
  CREDENTIAL_PUBLIC_KEY = 'credentialPublicKey',
  /** column name */
  ID = 'id',
  /** column name */
  NICKNAME = 'nickname',
  /** column name */
  TRANSPORTS = 'transports',
  /** column name */
  USER_ID = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_SET_INPUT = {
  counter: InputMaybe<Scalars['bigint']['input']>;
  credentialId: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey: InputMaybe<Scalars['bytea']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  nickname: InputMaybe<Scalars['String']['input']>;
  transports: InputMaybe<Scalars['String']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_FIELDS = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_pop on columns */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_POP_FIELDS = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_POP_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_samp on columns */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_SAMP_FIELDS = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_STDDEV_SAMP_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
type GQL_AUTH_USER_SECURITY_KEYS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_AUTH_USER_SECURITY_KEYS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_AUTH_USER_SECURITY_KEYS_STREAM_CURSOR_VALUE_INPUT = {
  counter: InputMaybe<Scalars['bigint']['input']>;
  credentialId: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey: InputMaybe<Scalars['bytea']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  nickname: InputMaybe<Scalars['String']['input']>;
  transports: InputMaybe<Scalars['String']['input']>;
  userId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
type GQL_AUTH_USER_SECURITY_KEYS_SUM_FIELDS = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_SUM_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** update columns of table "auth.user_security_keys" */
enum GQL_AUTH_USER_SECURITY_KEYS_UPDATE_COLUMN {
  /** column name */
  COUNTER = 'counter',
  /** column name */
  CREDENTIAL_ID = 'credentialId',
  /** column name */
  CREDENTIAL_PUBLIC_KEY = 'credentialPublicKey',
  /** column name */
  ID = 'id',
  /** column name */
  NICKNAME = 'nickname',
  /** column name */
  TRANSPORTS = 'transports',
  /** column name */
  USER_ID = 'userId'
}

type GQL_AUTH_USER_SECURITY_KEYS_UPDATES = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_INC_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP;
};

/** aggregate var_pop on columns */
type GQL_AUTH_USER_SECURITY_KEYS_VAR_POP_FIELDS = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_VAR_POP_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate var_samp on columns */
type GQL_AUTH_USER_SECURITY_KEYS_VAR_SAMP_FIELDS = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_VAR_SAMP_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate variance on columns */
type GQL_AUTH_USER_SECURITY_KEYS_VARIANCE_FIELDS = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
type GQL_AUTH_USER_SECURITY_KEYS_VARIANCE_ORDER_BY = {
  counter: InputMaybe<GQL_ORDER_BY>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
type GQL_BIGINT_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['bigint']['input']>;
  _gt: InputMaybe<Scalars['bigint']['input']>;
  _gte: InputMaybe<Scalars['bigint']['input']>;
  _in: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['bigint']['input']>;
  _lte: InputMaybe<Scalars['bigint']['input']>;
  _neq: InputMaybe<Scalars['bigint']['input']>;
  _nin: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
type GQL_BUCKETS = {
  __typename?: 'buckets';
  cacheControl: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<GQL_FILES>;
  /** An aggregate relationship */
  files_aggregate: GQL_FILES_AGGREGATE;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
type GQL_BUCKETS_FILES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


/** columns and relationships of "storage.buckets" */
type GQL_BUCKETS_FILES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};

/** aggregated selection of "storage.buckets" */
type GQL_BUCKETS_AGGREGATE = {
  __typename?: 'buckets_aggregate';
  aggregate: Maybe<GQL_BUCKETS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_BUCKETS>;
};

/** aggregate fields of "storage.buckets" */
type GQL_BUCKETS_AGGREGATE_FIELDS = {
  __typename?: 'buckets_aggregate_fields';
  avg: Maybe<GQL_BUCKETS_AVG_FIELDS>;
  count: Scalars['Int']['output'];
  max: Maybe<GQL_BUCKETS_MAX_FIELDS>;
  min: Maybe<GQL_BUCKETS_MIN_FIELDS>;
  stddev: Maybe<GQL_BUCKETS_STDDEV_FIELDS>;
  stddev_pop: Maybe<GQL_BUCKETS_STDDEV_POP_FIELDS>;
  stddev_samp: Maybe<GQL_BUCKETS_STDDEV_SAMP_FIELDS>;
  sum: Maybe<GQL_BUCKETS_SUM_FIELDS>;
  var_pop: Maybe<GQL_BUCKETS_VAR_POP_FIELDS>;
  var_samp: Maybe<GQL_BUCKETS_VAR_SAMP_FIELDS>;
  variance: Maybe<GQL_BUCKETS_VARIANCE_FIELDS>;
};


/** aggregate fields of "storage.buckets" */
type GQL_BUCKETS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_BUCKETS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
type GQL_BUCKETS_AVG_FIELDS = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
type GQL_BUCKETS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_BUCKETS_BOOL_EXP>>;
  _not: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_BUCKETS_BOOL_EXP>>;
  cacheControl: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  downloadExpiration: InputMaybe<GQL_INT_COMPARISON_EXP>;
  files: InputMaybe<GQL_FILES_BOOL_EXP>;
  files_aggregate: InputMaybe<GQL_FILES_AGGREGATE_BOOL_EXP>;
  id: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  maxUploadFileSize: InputMaybe<GQL_INT_COMPARISON_EXP>;
  minUploadFileSize: InputMaybe<GQL_INT_COMPARISON_EXP>;
  presignedUrlsEnabled: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  updatedAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "storage.buckets" */
enum GQL_BUCKETS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  BUCKETS_PKEY = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
type GQL_BUCKETS_INC_INPUT = {
  downloadExpiration: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
type GQL_BUCKETS_INSERT_INPUT = {
  cacheControl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration: InputMaybe<Scalars['Int']['input']>;
  files: InputMaybe<GQL_FILES_ARR_REL_INSERT_INPUT>;
  id: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
type GQL_BUCKETS_MAX_FIELDS = {
  __typename?: 'buckets_max_fields';
  cacheControl: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['String']['output']>;
  maxUploadFileSize: Maybe<Scalars['Int']['output']>;
  minUploadFileSize: Maybe<Scalars['Int']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
type GQL_BUCKETS_MIN_FIELDS = {
  __typename?: 'buckets_min_fields';
  cacheControl: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['String']['output']>;
  maxUploadFileSize: Maybe<Scalars['Int']['output']>;
  minUploadFileSize: Maybe<Scalars['Int']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
type GQL_BUCKETS_MUTATION_RESPONSE = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_BUCKETS>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
type GQL_BUCKETS_OBJ_REL_INSERT_INPUT = {
  data: GQL_BUCKETS_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_BUCKETS_ON_CONFLICT>;
};

/** on_conflict condition type for table "storage.buckets" */
type GQL_BUCKETS_ON_CONFLICT = {
  constraint: GQL_BUCKETS_CONSTRAINT;
  update_columns: Array<GQL_BUCKETS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};

/** Ordering options when selecting data from "storage.buckets". */
type GQL_BUCKETS_ORDER_BY = {
  cacheControl: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  downloadExpiration: InputMaybe<GQL_ORDER_BY>;
  files_aggregate: InputMaybe<GQL_FILES_AGGREGATE_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  maxUploadFileSize: InputMaybe<GQL_ORDER_BY>;
  minUploadFileSize: InputMaybe<GQL_ORDER_BY>;
  presignedUrlsEnabled: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: storage.buckets */
type GQL_BUCKETS_PK_COLUMNS_INPUT = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
enum GQL_BUCKETS_SELECT_COLUMN {
  /** column name */
  CACHE_CONTROL = 'cacheControl',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  DOWNLOAD_EXPIRATION = 'downloadExpiration',
  /** column name */
  ID = 'id',
  /** column name */
  MAX_UPLOAD_FILE_SIZE = 'maxUploadFileSize',
  /** column name */
  MIN_UPLOAD_FILE_SIZE = 'minUploadFileSize',
  /** column name */
  PRESIGNED_URLS_ENABLED = 'presignedUrlsEnabled',
  /** column name */
  UPDATED_AT = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
type GQL_BUCKETS_SET_INPUT = {
  cacheControl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
type GQL_BUCKETS_STDDEV_FIELDS = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
type GQL_BUCKETS_STDDEV_POP_FIELDS = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
type GQL_BUCKETS_STDDEV_SAMP_FIELDS = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
type GQL_BUCKETS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_BUCKETS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_BUCKETS_STREAM_CURSOR_VALUE_INPUT = {
  cacheControl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
type GQL_BUCKETS_SUM_FIELDS = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize: Maybe<Scalars['Int']['output']>;
  minUploadFileSize: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
enum GQL_BUCKETS_UPDATE_COLUMN {
  /** column name */
  CACHE_CONTROL = 'cacheControl',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  DOWNLOAD_EXPIRATION = 'downloadExpiration',
  /** column name */
  ID = 'id',
  /** column name */
  MAX_UPLOAD_FILE_SIZE = 'maxUploadFileSize',
  /** column name */
  MIN_UPLOAD_FILE_SIZE = 'minUploadFileSize',
  /** column name */
  PRESIGNED_URLS_ENABLED = 'presignedUrlsEnabled',
  /** column name */
  UPDATED_AT = 'updatedAt'
}

type GQL_BUCKETS_UPDATES = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<GQL_BUCKETS_INC_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_BUCKETS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_BUCKETS_BOOL_EXP;
};

/** aggregate var_pop on columns */
type GQL_BUCKETS_VAR_POP_FIELDS = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
type GQL_BUCKETS_VAR_SAMP_FIELDS = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
type GQL_BUCKETS_VARIANCE_FIELDS = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize: Maybe<Scalars['Float']['output']>;
  minUploadFileSize: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
type GQL_BYTEA_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['bytea']['input']>;
  _gt: InputMaybe<Scalars['bytea']['input']>;
  _gte: InputMaybe<Scalars['bytea']['input']>;
  _in: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['bytea']['input']>;
  _lte: InputMaybe<Scalars['bytea']['input']>;
  _neq: InputMaybe<Scalars['bytea']['input']>;
  _nin: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
type GQL_CITEXT_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['citext']['input']>;
  _gt: InputMaybe<Scalars['citext']['input']>;
  _gte: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['citext']['input']>;
  _in: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['citext']['input']>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['citext']['input']>;
  _lt: InputMaybe<Scalars['citext']['input']>;
  _lte: InputMaybe<Scalars['citext']['input']>;
  _neq: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['citext']['input']>;
  _nin: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
enum GQL_CURSOR_ORDERING {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** columns and relationships of "storage.files" */
type GQL_FILES = {
  __typename?: 'files';
  /** An object relationship */
  bucket: GQL_BUCKETS;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded: Maybe<Scalars['Boolean']['output']>;
  metadata: Maybe<Scalars['jsonb']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
type GQL_FILES_METADATA_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.files" */
type GQL_FILES_AGGREGATE = {
  __typename?: 'files_aggregate';
  aggregate: Maybe<GQL_FILES_AGGREGATE_FIELDS>;
  nodes: Array<GQL_FILES>;
};

type GQL_FILES_AGGREGATE_BOOL_EXP = {
  bool_and: InputMaybe<GQL_FILES_AGGREGATE_BOOL_EXP_BOOL_AND>;
  bool_or: InputMaybe<GQL_FILES_AGGREGATE_BOOL_EXP_BOOL_OR>;
  count: InputMaybe<GQL_FILES_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_FILES_AGGREGATE_BOOL_EXP_BOOL_AND = {
  arguments: GQL_FILES_SELECT_COLUMN_FILES_AGGREGATE_BOOL_EXP_BOOL_AND_ARGUMENTS_COLUMNS;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_FILES_BOOL_EXP>;
  predicate: GQL_BOOLEAN_COMPARISON_EXP;
};

type GQL_FILES_AGGREGATE_BOOL_EXP_BOOL_OR = {
  arguments: GQL_FILES_SELECT_COLUMN_FILES_AGGREGATE_BOOL_EXP_BOOL_OR_ARGUMENTS_COLUMNS;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_FILES_BOOL_EXP>;
  predicate: GQL_BOOLEAN_COMPARISON_EXP;
};

type GQL_FILES_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_FILES_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "storage.files" */
type GQL_FILES_AGGREGATE_FIELDS = {
  __typename?: 'files_aggregate_fields';
  avg: Maybe<GQL_FILES_AVG_FIELDS>;
  count: Scalars['Int']['output'];
  max: Maybe<GQL_FILES_MAX_FIELDS>;
  min: Maybe<GQL_FILES_MIN_FIELDS>;
  stddev: Maybe<GQL_FILES_STDDEV_FIELDS>;
  stddev_pop: Maybe<GQL_FILES_STDDEV_POP_FIELDS>;
  stddev_samp: Maybe<GQL_FILES_STDDEV_SAMP_FIELDS>;
  sum: Maybe<GQL_FILES_SUM_FIELDS>;
  var_pop: Maybe<GQL_FILES_VAR_POP_FIELDS>;
  var_samp: Maybe<GQL_FILES_VAR_SAMP_FIELDS>;
  variance: Maybe<GQL_FILES_VARIANCE_FIELDS>;
};


/** aggregate fields of "storage.files" */
type GQL_FILES_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
type GQL_FILES_AGGREGATE_ORDER_BY = {
  avg: InputMaybe<GQL_FILES_AVG_ORDER_BY>;
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_FILES_MAX_ORDER_BY>;
  min: InputMaybe<GQL_FILES_MIN_ORDER_BY>;
  stddev: InputMaybe<GQL_FILES_STDDEV_ORDER_BY>;
  stddev_pop: InputMaybe<GQL_FILES_STDDEV_POP_ORDER_BY>;
  stddev_samp: InputMaybe<GQL_FILES_STDDEV_SAMP_ORDER_BY>;
  sum: InputMaybe<GQL_FILES_SUM_ORDER_BY>;
  var_pop: InputMaybe<GQL_FILES_VAR_POP_ORDER_BY>;
  var_samp: InputMaybe<GQL_FILES_VAR_SAMP_ORDER_BY>;
  variance: InputMaybe<GQL_FILES_VARIANCE_ORDER_BY>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_FILES_APPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
type GQL_FILES_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_FILES_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_FILES_ON_CONFLICT>;
};

/** aggregate avg on columns */
type GQL_FILES_AVG_FIELDS = {
  __typename?: 'files_avg_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
type GQL_FILES_AVG_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
type GQL_FILES_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_FILES_BOOL_EXP>>;
  _not: InputMaybe<GQL_FILES_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_FILES_BOOL_EXP>>;
  bucket: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
  bucketId: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  etag: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  isUploaded: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  metadata: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
  mimeType: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  name: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  size: InputMaybe<GQL_INT_COMPARISON_EXP>;
  updatedAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  uploadedByUserId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "storage.files" */
enum GQL_FILES_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  FILES_PKEY = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_FILES_DELETE_AT_PATH_INPUT = {
  metadata: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_FILES_DELETE_ELEM_INPUT = {
  metadata: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_FILES_DELETE_KEY_INPUT = {
  metadata: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
type GQL_FILES_INC_INPUT = {
  size: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
type GQL_FILES_INSERT_INPUT = {
  bucket: InputMaybe<GQL_BUCKETS_OBJ_REL_INSERT_INPUT>;
  bucketId: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  etag: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isUploaded: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Int']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_FILES_MAX_FIELDS = {
  __typename?: 'files_max_fields';
  bucketId: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  etag: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Int']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
type GQL_FILES_MAX_ORDER_BY = {
  bucketId: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  etag: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  mimeType: InputMaybe<GQL_ORDER_BY>;
  name: InputMaybe<GQL_ORDER_BY>;
  size: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  uploadedByUserId: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_FILES_MIN_FIELDS = {
  __typename?: 'files_min_fields';
  bucketId: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  etag: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Int']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
type GQL_FILES_MIN_ORDER_BY = {
  bucketId: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  etag: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  mimeType: InputMaybe<GQL_ORDER_BY>;
  name: InputMaybe<GQL_ORDER_BY>;
  size: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  uploadedByUserId: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "storage.files" */
type GQL_FILES_MUTATION_RESPONSE = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_FILES>;
};

/** input type for inserting object relation for remote table "storage.files" */
type GQL_FILES_OBJ_REL_INSERT_INPUT = {
  data: GQL_FILES_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_FILES_ON_CONFLICT>;
};

/** on_conflict condition type for table "storage.files" */
type GQL_FILES_ON_CONFLICT = {
  constraint: GQL_FILES_CONSTRAINT;
  update_columns: Array<GQL_FILES_UPDATE_COLUMN>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};

/** Ordering options when selecting data from "storage.files". */
type GQL_FILES_ORDER_BY = {
  bucket: InputMaybe<GQL_BUCKETS_ORDER_BY>;
  bucketId: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  etag: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  isUploaded: InputMaybe<GQL_ORDER_BY>;
  metadata: InputMaybe<GQL_ORDER_BY>;
  mimeType: InputMaybe<GQL_ORDER_BY>;
  name: InputMaybe<GQL_ORDER_BY>;
  size: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  uploadedByUserId: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: storage.files */
type GQL_FILES_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_FILES_PREPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
enum GQL_FILES_SELECT_COLUMN {
  /** column name */
  BUCKET_ID = 'bucketId',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ETAG = 'etag',
  /** column name */
  ID = 'id',
  /** column name */
  IS_UPLOADED = 'isUploaded',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  MIME_TYPE = 'mimeType',
  /** column name */
  NAME = 'name',
  /** column name */
  SIZE = 'size',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  UPLOADED_BY_USER_ID = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
enum GQL_FILES_SELECT_COLUMN_FILES_AGGREGATE_BOOL_EXP_BOOL_AND_ARGUMENTS_COLUMNS {
  /** column name */
  IS_UPLOADED = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
enum GQL_FILES_SELECT_COLUMN_FILES_AGGREGATE_BOOL_EXP_BOOL_OR_ARGUMENTS_COLUMNS {
  /** column name */
  IS_UPLOADED = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
type GQL_FILES_SET_INPUT = {
  bucketId: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  etag: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isUploaded: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Int']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
type GQL_FILES_STDDEV_FIELDS = {
  __typename?: 'files_stddev_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
type GQL_FILES_STDDEV_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_pop on columns */
type GQL_FILES_STDDEV_POP_FIELDS = {
  __typename?: 'files_stddev_pop_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
type GQL_FILES_STDDEV_POP_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_samp on columns */
type GQL_FILES_STDDEV_SAMP_FIELDS = {
  __typename?: 'files_stddev_samp_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
type GQL_FILES_STDDEV_SAMP_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** Streaming cursor of the table "files" */
type GQL_FILES_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_FILES_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_FILES_STREAM_CURSOR_VALUE_INPUT = {
  bucketId: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  etag: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isUploaded: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Int']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
type GQL_FILES_SUM_FIELDS = {
  __typename?: 'files_sum_fields';
  size: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
type GQL_FILES_SUM_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** update columns of table "storage.files" */
enum GQL_FILES_UPDATE_COLUMN {
  /** column name */
  BUCKET_ID = 'bucketId',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  ETAG = 'etag',
  /** column name */
  ID = 'id',
  /** column name */
  IS_UPLOADED = 'isUploaded',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  MIME_TYPE = 'mimeType',
  /** column name */
  NAME = 'name',
  /** column name */
  SIZE = 'size',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  UPLOADED_BY_USER_ID = 'uploadedByUserId'
}

type GQL_FILES_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_FILES_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_FILES_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_FILES_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_FILES_DELETE_KEY_INPUT>;
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<GQL_FILES_INC_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_FILES_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_FILES_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_FILES_BOOL_EXP;
};

/** aggregate var_pop on columns */
type GQL_FILES_VAR_POP_FIELDS = {
  __typename?: 'files_var_pop_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
type GQL_FILES_VAR_POP_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate var_samp on columns */
type GQL_FILES_VAR_SAMP_FIELDS = {
  __typename?: 'files_var_samp_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
type GQL_FILES_VAR_SAMP_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate variance on columns */
type GQL_FILES_VARIANCE_FIELDS = {
  __typename?: 'files_variance_fields';
  size: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
type GQL_FILES_VARIANCE_ORDER_BY = {
  size: InputMaybe<GQL_ORDER_BY>;
};

type GQL_JSONB_CAST_EXP = {
  String: InputMaybe<GQL_STRING_COMPARISON_EXP>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
type GQL_JSONB_COMPARISON_EXP = {
  _cast: InputMaybe<GQL_JSONB_CAST_EXP>;
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars['jsonb']['input']>;
  _eq: InputMaybe<Scalars['jsonb']['input']>;
  _gt: InputMaybe<Scalars['jsonb']['input']>;
  _gte: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars['String']['input']>>;
  _in: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['jsonb']['input']>;
  _lte: InputMaybe<Scalars['jsonb']['input']>;
  _neq: InputMaybe<Scalars['jsonb']['input']>;
  _nin: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
type GQL_MUTATION_ROOT = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider: Maybe<GQL_AUTH_PROVIDERS>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest: Maybe<GQL_AUTH_PROVIDER_REQUESTS>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests: Maybe<GQL_AUTH_PROVIDER_REQUESTS_MUTATION_RESPONSE>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders: Maybe<GQL_AUTH_PROVIDERS_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken: Maybe<GQL_AUTH_REFRESH_TOKENS>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MUTATION_RESPONSE>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens: Maybe<GQL_AUTH_REFRESH_TOKENS_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole: Maybe<GQL_AUTH_ROLES>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles: Maybe<GQL_AUTH_ROLES_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider: Maybe<GQL_AUTH_USER_PROVIDERS>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders: Maybe<GQL_AUTH_USER_PROVIDERS_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole: Maybe<GQL_AUTH_USER_ROLES>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles: Maybe<GQL_AUTH_USER_ROLES_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey: Maybe<GQL_AUTH_USER_SECURITY_KEYS>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys: Maybe<GQL_AUTH_USER_SECURITY_KEYS_MUTATION_RESPONSE>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket: Maybe<GQL_BUCKETS>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets: Maybe<GQL_BUCKETS_MUTATION_RESPONSE>;
  /** delete single row from the table: "storage.files" */
  deleteFile: Maybe<GQL_FILES>;
  /** delete data from the table: "storage.files" */
  deleteFiles: Maybe<GQL_FILES_MUTATION_RESPONSE>;
  /** delete single row from the table: "auth.users" */
  deleteUser: Maybe<GQL_USERS>;
  /** delete data from the table: "auth.users" */
  deleteUsers: Maybe<GQL_USERS_MUTATION_RESPONSE>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus: Maybe<GQL_VIRUS>;
  /** delete data from the table: "storage.virus" */
  deleteViruses: Maybe<GQL_VIRUS_MUTATION_RESPONSE>;
  /** delete data from the table: "org_subscriptions" */
  delete_org_subscriptions: Maybe<GQL_ORG_SUBSCRIPTIONS_MUTATION_RESPONSE>;
  /** delete single row from the table: "org_subscriptions" */
  delete_org_subscriptions_by_pk: Maybe<GQL_ORG_SUBSCRIPTIONS>;
  /** delete data from the table: "org_users" */
  delete_org_users: Maybe<GQL_ORG_USERS_MUTATION_RESPONSE>;
  /** delete single row from the table: "org_users" */
  delete_org_users_by_pk: Maybe<GQL_ORG_USERS>;
  /** delete data from the table: "orgs" */
  delete_orgs: Maybe<GQL_ORGS_MUTATION_RESPONSE>;
  /** delete single row from the table: "orgs" */
  delete_orgs_by_pk: Maybe<GQL_ORGS>;
  /** delete data from the table: "payment.vipps_sessions" */
  delete_payment_vipps_sessions: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MUTATION_RESPONSE>;
  /** delete single row from the table: "payment.vipps_sessions" */
  delete_payment_vipps_sessions_by_pk: Maybe<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** delete data from the table: "user_profiles" */
  delete_user_profiles: Maybe<GQL_USER_PROFILES_MUTATION_RESPONSE>;
  /** delete single row from the table: "user_profiles" */
  delete_user_profiles_by_pk: Maybe<GQL_USER_PROFILES>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider: Maybe<GQL_AUTH_PROVIDERS>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest: Maybe<GQL_AUTH_PROVIDER_REQUESTS>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests: Maybe<GQL_AUTH_PROVIDER_REQUESTS_MUTATION_RESPONSE>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders: Maybe<GQL_AUTH_PROVIDERS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken: Maybe<GQL_AUTH_REFRESH_TOKENS>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MUTATION_RESPONSE>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens: Maybe<GQL_AUTH_REFRESH_TOKENS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole: Maybe<GQL_AUTH_ROLES>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles: Maybe<GQL_AUTH_ROLES_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider: Maybe<GQL_AUTH_USER_PROVIDERS>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders: Maybe<GQL_AUTH_USER_PROVIDERS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole: Maybe<GQL_AUTH_USER_ROLES>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles: Maybe<GQL_AUTH_USER_ROLES_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey: Maybe<GQL_AUTH_USER_SECURITY_KEYS>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys: Maybe<GQL_AUTH_USER_SECURITY_KEYS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket: Maybe<GQL_BUCKETS>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets: Maybe<GQL_BUCKETS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "storage.files" */
  insertFile: Maybe<GQL_FILES>;
  /** insert data into the table: "storage.files" */
  insertFiles: Maybe<GQL_FILES_MUTATION_RESPONSE>;
  /** insert a single row into the table: "auth.users" */
  insertUser: Maybe<GQL_USERS>;
  /** insert data into the table: "auth.users" */
  insertUsers: Maybe<GQL_USERS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus: Maybe<GQL_VIRUS>;
  /** insert data into the table: "storage.virus" */
  insertViruses: Maybe<GQL_VIRUS_MUTATION_RESPONSE>;
  /** insert data into the table: "org_subscriptions" */
  insert_org_subscriptions: Maybe<GQL_ORG_SUBSCRIPTIONS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "org_subscriptions" */
  insert_org_subscriptions_one: Maybe<GQL_ORG_SUBSCRIPTIONS>;
  /** insert data into the table: "org_users" */
  insert_org_users: Maybe<GQL_ORG_USERS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "org_users" */
  insert_org_users_one: Maybe<GQL_ORG_USERS>;
  /** insert data into the table: "orgs" */
  insert_orgs: Maybe<GQL_ORGS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "orgs" */
  insert_orgs_one: Maybe<GQL_ORGS>;
  /** insert data into the table: "payment.vipps_sessions" */
  insert_payment_vipps_sessions: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MUTATION_RESPONSE>;
  /** insert a single row into the table: "payment.vipps_sessions" */
  insert_payment_vipps_sessions_one: Maybe<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** insert data into the table: "user_profiles" */
  insert_user_profiles: Maybe<GQL_USER_PROFILES_MUTATION_RESPONSE>;
  /** insert a single row into the table: "user_profiles" */
  insert_user_profiles_one: Maybe<GQL_USER_PROFILES>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider: Maybe<GQL_AUTH_PROVIDERS>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest: Maybe<GQL_AUTH_PROVIDER_REQUESTS>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests: Maybe<GQL_AUTH_PROVIDER_REQUESTS_MUTATION_RESPONSE>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders: Maybe<GQL_AUTH_PROVIDERS_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken: Maybe<GQL_AUTH_REFRESH_TOKENS>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MUTATION_RESPONSE>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens: Maybe<GQL_AUTH_REFRESH_TOKENS_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole: Maybe<GQL_AUTH_ROLES>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles: Maybe<GQL_AUTH_ROLES_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider: Maybe<GQL_AUTH_USER_PROVIDERS>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders: Maybe<GQL_AUTH_USER_PROVIDERS_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole: Maybe<GQL_AUTH_USER_ROLES>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles: Maybe<GQL_AUTH_USER_ROLES_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey: Maybe<GQL_AUTH_USER_SECURITY_KEYS>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys: Maybe<GQL_AUTH_USER_SECURITY_KEYS_MUTATION_RESPONSE>;
  /** update single row of the table: "storage.buckets" */
  updateBucket: Maybe<GQL_BUCKETS>;
  /** update data of the table: "storage.buckets" */
  updateBuckets: Maybe<GQL_BUCKETS_MUTATION_RESPONSE>;
  /** update single row of the table: "storage.files" */
  updateFile: Maybe<GQL_FILES>;
  /** update data of the table: "storage.files" */
  updateFiles: Maybe<GQL_FILES_MUTATION_RESPONSE>;
  /** update single row of the table: "auth.users" */
  updateUser: Maybe<GQL_USERS>;
  /** update data of the table: "auth.users" */
  updateUsers: Maybe<GQL_USERS_MUTATION_RESPONSE>;
  /** update single row of the table: "storage.virus" */
  updateVirus: Maybe<GQL_VIRUS>;
  /** update data of the table: "storage.virus" */
  updateViruses: Maybe<GQL_VIRUS_MUTATION_RESPONSE>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many: Maybe<Array<Maybe<GQL_AUTH_PROVIDER_REQUESTS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many: Maybe<Array<Maybe<GQL_AUTH_PROVIDERS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many: Maybe<Array<Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many: Maybe<Array<Maybe<GQL_AUTH_REFRESH_TOKENS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many: Maybe<Array<Maybe<GQL_AUTH_ROLES_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many: Maybe<Array<Maybe<GQL_AUTH_USER_PROVIDERS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many: Maybe<Array<Maybe<GQL_AUTH_USER_ROLES_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many: Maybe<Array<Maybe<GQL_AUTH_USER_SECURITY_KEYS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many: Maybe<Array<Maybe<GQL_BUCKETS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many: Maybe<Array<Maybe<GQL_FILES_MUTATION_RESPONSE>>>;
  /** update data of the table: "org_subscriptions" */
  update_org_subscriptions: Maybe<GQL_ORG_SUBSCRIPTIONS_MUTATION_RESPONSE>;
  /** update single row of the table: "org_subscriptions" */
  update_org_subscriptions_by_pk: Maybe<GQL_ORG_SUBSCRIPTIONS>;
  /** update multiples rows of table: "org_subscriptions" */
  update_org_subscriptions_many: Maybe<Array<Maybe<GQL_ORG_SUBSCRIPTIONS_MUTATION_RESPONSE>>>;
  /** update data of the table: "org_users" */
  update_org_users: Maybe<GQL_ORG_USERS_MUTATION_RESPONSE>;
  /** update single row of the table: "org_users" */
  update_org_users_by_pk: Maybe<GQL_ORG_USERS>;
  /** update multiples rows of table: "org_users" */
  update_org_users_many: Maybe<Array<Maybe<GQL_ORG_USERS_MUTATION_RESPONSE>>>;
  /** update data of the table: "orgs" */
  update_orgs: Maybe<GQL_ORGS_MUTATION_RESPONSE>;
  /** update single row of the table: "orgs" */
  update_orgs_by_pk: Maybe<GQL_ORGS>;
  /** update multiples rows of table: "orgs" */
  update_orgs_many: Maybe<Array<Maybe<GQL_ORGS_MUTATION_RESPONSE>>>;
  /** update data of the table: "payment.vipps_sessions" */
  update_payment_vipps_sessions: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MUTATION_RESPONSE>;
  /** update single row of the table: "payment.vipps_sessions" */
  update_payment_vipps_sessions_by_pk: Maybe<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** update multiples rows of table: "payment.vipps_sessions" */
  update_payment_vipps_sessions_many: Maybe<Array<Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MUTATION_RESPONSE>>>;
  /** update data of the table: "user_profiles" */
  update_user_profiles: Maybe<GQL_USER_PROFILES_MUTATION_RESPONSE>;
  /** update single row of the table: "user_profiles" */
  update_user_profiles_by_pk: Maybe<GQL_USER_PROFILES>;
  /** update multiples rows of table: "user_profiles" */
  update_user_profiles_many: Maybe<Array<Maybe<GQL_USER_PROFILES_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many: Maybe<Array<Maybe<GQL_USERS_MUTATION_RESPONSE>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many: Maybe<Array<Maybe<GQL_VIRUS_MUTATION_RESPONSE>>>;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_PROVIDER_ARGS = {
  id: Scalars['String']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_PROVIDER_REQUEST_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_PROVIDER_REQUESTS_ARGS = {
  where: GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_PROVIDERS_ARGS = {
  where: GQL_AUTH_PROVIDERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_REFRESH_TOKEN_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_REFRESH_TOKEN_TYPE_ARGS = {
  value: Scalars['String']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_REFRESH_TOKEN_TYPES_ARGS = {
  where: GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_REFRESH_TOKENS_ARGS = {
  where: GQL_AUTH_REFRESH_TOKENS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_ROLE_ARGS = {
  role: Scalars['String']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_ROLES_ARGS = {
  where: GQL_AUTH_ROLES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_PROVIDER_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_PROVIDERS_ARGS = {
  where: GQL_AUTH_USER_PROVIDERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_ROLE_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_ROLES_ARGS = {
  where: GQL_AUTH_USER_ROLES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_SECURITY_KEY_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_AUTH_USER_SECURITY_KEYS_ARGS = {
  where: GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_BUCKET_ARGS = {
  id: Scalars['String']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_BUCKETS_ARGS = {
  where: GQL_BUCKETS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_FILE_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_FILES_ARGS = {
  where: GQL_FILES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_USER_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_USERS_ARGS = {
  where: GQL_USERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_VIRUS_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_VIRUSES_ARGS = {
  where: GQL_VIRUS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORG_SUBSCRIPTIONS_ARGS = {
  where: GQL_ORG_SUBSCRIPTIONS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORG_SUBSCRIPTIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORG_USERS_ARGS = {
  where: GQL_ORG_USERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORG_USERS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORGS_ARGS = {
  where: GQL_ORGS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_ORGS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_PAYMENT_VIPPS_SESSIONS_ARGS = {
  where: GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_PAYMENT_VIPPS_SESSIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_USER_PROFILES_ARGS = {
  where: GQL_USER_PROFILES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_DELETE_USER_PROFILES_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_PROVIDER_ARGS = {
  object: GQL_AUTH_PROVIDERS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_PROVIDERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_PROVIDER_REQUEST_ARGS = {
  object: GQL_AUTH_PROVIDER_REQUESTS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_PROVIDER_REQUESTS_ARGS = {
  objects: Array<GQL_AUTH_PROVIDER_REQUESTS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_PROVIDERS_ARGS = {
  objects: Array<GQL_AUTH_PROVIDERS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_PROVIDERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_REFRESH_TOKEN_ARGS = {
  object: GQL_AUTH_REFRESH_TOKENS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_REFRESH_TOKENS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_REFRESH_TOKEN_TYPE_ARGS = {
  object: GQL_AUTH_REFRESH_TOKEN_TYPES_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_REFRESH_TOKEN_TYPES_ARGS = {
  objects: Array<GQL_AUTH_REFRESH_TOKEN_TYPES_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_REFRESH_TOKENS_ARGS = {
  objects: Array<GQL_AUTH_REFRESH_TOKENS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_REFRESH_TOKENS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_ROLE_ARGS = {
  object: GQL_AUTH_ROLES_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_ROLES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_ROLES_ARGS = {
  objects: Array<GQL_AUTH_ROLES_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_ROLES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_PROVIDER_ARGS = {
  object: GQL_AUTH_USER_PROVIDERS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_USER_PROVIDERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_PROVIDERS_ARGS = {
  objects: Array<GQL_AUTH_USER_PROVIDERS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_USER_PROVIDERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_ROLE_ARGS = {
  object: GQL_AUTH_USER_ROLES_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_USER_ROLES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_ROLES_ARGS = {
  objects: Array<GQL_AUTH_USER_ROLES_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_USER_ROLES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_SECURITY_KEY_ARGS = {
  object: GQL_AUTH_USER_SECURITY_KEYS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_AUTH_USER_SECURITY_KEYS_ARGS = {
  objects: Array<GQL_AUTH_USER_SECURITY_KEYS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_BUCKET_ARGS = {
  object: GQL_BUCKETS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_BUCKETS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_BUCKETS_ARGS = {
  objects: Array<GQL_BUCKETS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_BUCKETS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_FILE_ARGS = {
  object: GQL_FILES_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_FILES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_FILES_ARGS = {
  objects: Array<GQL_FILES_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_FILES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_USER_ARGS = {
  object: GQL_USERS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_USERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_USERS_ARGS = {
  objects: Array<GQL_USERS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_USERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_VIRUS_ARGS = {
  object: GQL_VIRUS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_VIRUS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_VIRUSES_ARGS = {
  objects: Array<GQL_VIRUS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_VIRUS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORG_SUBSCRIPTIONS_ARGS = {
  objects: Array<GQL_ORG_SUBSCRIPTIONS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_ORG_SUBSCRIPTIONS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORG_SUBSCRIPTIONS_ONE_ARGS = {
  object: GQL_ORG_SUBSCRIPTIONS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_ORG_SUBSCRIPTIONS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORG_USERS_ARGS = {
  objects: Array<GQL_ORG_USERS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_ORG_USERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORG_USERS_ONE_ARGS = {
  object: GQL_ORG_USERS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_ORG_USERS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORGS_ARGS = {
  objects: Array<GQL_ORGS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_ORGS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_ORGS_ONE_ARGS = {
  object: GQL_ORGS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_ORGS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_PAYMENT_VIPPS_SESSIONS_ARGS = {
  objects: Array<GQL_PAYMENT_VIPPS_SESSIONS_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_PAYMENT_VIPPS_SESSIONS_ONE_ARGS = {
  object: GQL_PAYMENT_VIPPS_SESSIONS_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_USER_PROFILES_ARGS = {
  objects: Array<GQL_USER_PROFILES_INSERT_INPUT>;
  on_conflict: InputMaybe<GQL_USER_PROFILES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_INSERT_USER_PROFILES_ONE_ARGS = {
  object: GQL_USER_PROFILES_INSERT_INPUT;
  on_conflict: InputMaybe<GQL_USER_PROFILES_ON_CONFLICT>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDER_ARGS = {
  _set: InputMaybe<GQL_AUTH_PROVIDERS_SET_INPUT>;
  pk_columns: GQL_AUTH_PROVIDERS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDER_REQUEST_ARGS = {
  _append: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_SET_INPUT>;
  pk_columns: GQL_AUTH_PROVIDER_REQUESTS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDER_REQUESTS_ARGS = {
  _append: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_SET_INPUT>;
  where: GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDERS_ARGS = {
  _set: InputMaybe<GQL_AUTH_PROVIDERS_SET_INPUT>;
  where: GQL_AUTH_PROVIDERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKEN_ARGS = {
  _append: InputMaybe<GQL_AUTH_REFRESH_TOKENS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_AUTH_REFRESH_TOKENS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKENS_SET_INPUT>;
  pk_columns: GQL_AUTH_REFRESH_TOKENS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKEN_TYPE_ARGS = {
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_SET_INPUT>;
  pk_columns: GQL_AUTH_REFRESH_TOKEN_TYPES_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKEN_TYPES_ARGS = {
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_SET_INPUT>;
  where: GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKENS_ARGS = {
  _append: InputMaybe<GQL_AUTH_REFRESH_TOKENS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_AUTH_REFRESH_TOKENS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_AUTH_REFRESH_TOKENS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_AUTH_REFRESH_TOKENS_SET_INPUT>;
  where: GQL_AUTH_REFRESH_TOKENS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_ROLE_ARGS = {
  _set: InputMaybe<GQL_AUTH_ROLES_SET_INPUT>;
  pk_columns: GQL_AUTH_ROLES_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_ROLES_ARGS = {
  _set: InputMaybe<GQL_AUTH_ROLES_SET_INPUT>;
  where: GQL_AUTH_ROLES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_PROVIDER_ARGS = {
  _set: InputMaybe<GQL_AUTH_USER_PROVIDERS_SET_INPUT>;
  pk_columns: GQL_AUTH_USER_PROVIDERS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_PROVIDERS_ARGS = {
  _set: InputMaybe<GQL_AUTH_USER_PROVIDERS_SET_INPUT>;
  where: GQL_AUTH_USER_PROVIDERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_ROLE_ARGS = {
  _set: InputMaybe<GQL_AUTH_USER_ROLES_SET_INPUT>;
  pk_columns: GQL_AUTH_USER_ROLES_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_ROLES_ARGS = {
  _set: InputMaybe<GQL_AUTH_USER_ROLES_SET_INPUT>;
  where: GQL_AUTH_USER_ROLES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_SECURITY_KEY_ARGS = {
  _inc: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_INC_INPUT>;
  _set: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_SET_INPUT>;
  pk_columns: GQL_AUTH_USER_SECURITY_KEYS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_SECURITY_KEYS_ARGS = {
  _inc: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_INC_INPUT>;
  _set: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_SET_INPUT>;
  where: GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_BUCKET_ARGS = {
  _inc: InputMaybe<GQL_BUCKETS_INC_INPUT>;
  _set: InputMaybe<GQL_BUCKETS_SET_INPUT>;
  pk_columns: GQL_BUCKETS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_BUCKETS_ARGS = {
  _inc: InputMaybe<GQL_BUCKETS_INC_INPUT>;
  _set: InputMaybe<GQL_BUCKETS_SET_INPUT>;
  where: GQL_BUCKETS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_FILE_ARGS = {
  _append: InputMaybe<GQL_FILES_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_FILES_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_FILES_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_FILES_DELETE_KEY_INPUT>;
  _inc: InputMaybe<GQL_FILES_INC_INPUT>;
  _prepend: InputMaybe<GQL_FILES_PREPEND_INPUT>;
  _set: InputMaybe<GQL_FILES_SET_INPUT>;
  pk_columns: GQL_FILES_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_FILES_ARGS = {
  _append: InputMaybe<GQL_FILES_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_FILES_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_FILES_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_FILES_DELETE_KEY_INPUT>;
  _inc: InputMaybe<GQL_FILES_INC_INPUT>;
  _prepend: InputMaybe<GQL_FILES_PREPEND_INPUT>;
  _set: InputMaybe<GQL_FILES_SET_INPUT>;
  where: GQL_FILES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USER_ARGS = {
  _append: InputMaybe<GQL_USERS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_USERS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_USERS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_USERS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_USERS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_USERS_SET_INPUT>;
  pk_columns: GQL_USERS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USERS_ARGS = {
  _append: InputMaybe<GQL_USERS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_USERS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_USERS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_USERS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_USERS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_USERS_SET_INPUT>;
  where: GQL_USERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_VIRUS_ARGS = {
  _append: InputMaybe<GQL_VIRUS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_VIRUS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_VIRUS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_VIRUS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_VIRUS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_VIRUS_SET_INPUT>;
  pk_columns: GQL_VIRUS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_VIRUSES_ARGS = {
  _append: InputMaybe<GQL_VIRUS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_VIRUS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_VIRUS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_VIRUS_DELETE_KEY_INPUT>;
  _prepend: InputMaybe<GQL_VIRUS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_VIRUS_SET_INPUT>;
  where: GQL_VIRUS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDER_REQUESTS_MANY_ARGS = {
  updates: Array<GQL_AUTH_PROVIDER_REQUESTS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_PROVIDERS_MANY_ARGS = {
  updates: Array<GQL_AUTH_PROVIDERS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKEN_TYPES_MANY_ARGS = {
  updates: Array<GQL_AUTH_REFRESH_TOKEN_TYPES_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_REFRESH_TOKENS_MANY_ARGS = {
  updates: Array<GQL_AUTH_REFRESH_TOKENS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_ROLES_MANY_ARGS = {
  updates: Array<GQL_AUTH_ROLES_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_PROVIDERS_MANY_ARGS = {
  updates: Array<GQL_AUTH_USER_PROVIDERS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_ROLES_MANY_ARGS = {
  updates: Array<GQL_AUTH_USER_ROLES_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_AUTH_USER_SECURITY_KEYS_MANY_ARGS = {
  updates: Array<GQL_AUTH_USER_SECURITY_KEYS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_BUCKETS_MANY_ARGS = {
  updates: Array<GQL_BUCKETS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_FILES_MANY_ARGS = {
  updates: Array<GQL_FILES_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_SUBSCRIPTIONS_ARGS = {
  _inc: InputMaybe<GQL_ORG_SUBSCRIPTIONS_INC_INPUT>;
  _set: InputMaybe<GQL_ORG_SUBSCRIPTIONS_SET_INPUT>;
  where: GQL_ORG_SUBSCRIPTIONS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_SUBSCRIPTIONS_BY_PK_ARGS = {
  _inc: InputMaybe<GQL_ORG_SUBSCRIPTIONS_INC_INPUT>;
  _set: InputMaybe<GQL_ORG_SUBSCRIPTIONS_SET_INPUT>;
  pk_columns: GQL_ORG_SUBSCRIPTIONS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_SUBSCRIPTIONS_MANY_ARGS = {
  updates: Array<GQL_ORG_SUBSCRIPTIONS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_USERS_ARGS = {
  _set: InputMaybe<GQL_ORG_USERS_SET_INPUT>;
  where: GQL_ORG_USERS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_USERS_BY_PK_ARGS = {
  _set: InputMaybe<GQL_ORG_USERS_SET_INPUT>;
  pk_columns: GQL_ORG_USERS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORG_USERS_MANY_ARGS = {
  updates: Array<GQL_ORG_USERS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORGS_ARGS = {
  _set: InputMaybe<GQL_ORGS_SET_INPUT>;
  where: GQL_ORGS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORGS_BY_PK_ARGS = {
  _set: InputMaybe<GQL_ORGS_SET_INPUT>;
  pk_columns: GQL_ORGS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_ORGS_MANY_ARGS = {
  updates: Array<GQL_ORGS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_PAYMENT_VIPPS_SESSIONS_ARGS = {
  _append: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_KEY_INPUT>;
  _inc: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_INC_INPUT>;
  _prepend: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_SET_INPUT>;
  where: GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_PAYMENT_VIPPS_SESSIONS_BY_PK_ARGS = {
  _append: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_APPEND_INPUT>;
  _delete_at_path: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_AT_PATH_INPUT>;
  _delete_elem: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_ELEM_INPUT>;
  _delete_key: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_KEY_INPUT>;
  _inc: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_INC_INPUT>;
  _prepend: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_PREPEND_INPUT>;
  _set: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_SET_INPUT>;
  pk_columns: GQL_PAYMENT_VIPPS_SESSIONS_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_PAYMENT_VIPPS_SESSIONS_MANY_ARGS = {
  updates: Array<GQL_PAYMENT_VIPPS_SESSIONS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USER_PROFILES_ARGS = {
  _set: InputMaybe<GQL_USER_PROFILES_SET_INPUT>;
  where: GQL_USER_PROFILES_BOOL_EXP;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USER_PROFILES_BY_PK_ARGS = {
  _set: InputMaybe<GQL_USER_PROFILES_SET_INPUT>;
  pk_columns: GQL_USER_PROFILES_PK_COLUMNS_INPUT;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USER_PROFILES_MANY_ARGS = {
  updates: Array<GQL_USER_PROFILES_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_USERS_MANY_ARGS = {
  updates: Array<GQL_USERS_UPDATES>;
};


/** mutation root */
type GQL_MUTATION_ROOT_UPDATE_VIRUS_MANY_ARGS = {
  updates: Array<GQL_VIRUS_UPDATES>;
};

/** column ordering options */
enum GQL_ORDER_BY {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS = {
  __typename?: 'org_subscriptions';
  created_at: Scalars['timestamptz']['output'];
  credits: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  org_id: Scalars['uuid']['output'];
  plan: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stripe_checkout_session_id: Maybe<Scalars['String']['output']>;
  stripe_customer_id: Maybe<Scalars['String']['output']>;
  stripe_subscription_id: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  valid_until: Scalars['timestamptz']['output'];
  vipps_session_id: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_AGGREGATE = {
  __typename?: 'org_subscriptions_aggregate';
  aggregate: Maybe<GQL_ORG_SUBSCRIPTIONS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_ORG_SUBSCRIPTIONS>;
};

type GQL_ORG_SUBSCRIPTIONS_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_ORG_SUBSCRIPTIONS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_ORG_SUBSCRIPTIONS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_AGGREGATE_FIELDS = {
  __typename?: 'org_subscriptions_aggregate_fields';
  avg: Maybe<GQL_ORG_SUBSCRIPTIONS_AVG_FIELDS>;
  count: Scalars['Int']['output'];
  max: Maybe<GQL_ORG_SUBSCRIPTIONS_MAX_FIELDS>;
  min: Maybe<GQL_ORG_SUBSCRIPTIONS_MIN_FIELDS>;
  stddev: Maybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_FIELDS>;
  stddev_pop: Maybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_POP_FIELDS>;
  stddev_samp: Maybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_SAMP_FIELDS>;
  sum: Maybe<GQL_ORG_SUBSCRIPTIONS_SUM_FIELDS>;
  var_pop: Maybe<GQL_ORG_SUBSCRIPTIONS_VAR_POP_FIELDS>;
  var_samp: Maybe<GQL_ORG_SUBSCRIPTIONS_VAR_SAMP_FIELDS>;
  variance: Maybe<GQL_ORG_SUBSCRIPTIONS_VARIANCE_FIELDS>;
};


/** aggregate fields of "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_AGGREGATE_ORDER_BY = {
  avg: InputMaybe<GQL_ORG_SUBSCRIPTIONS_AVG_ORDER_BY>;
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_ORG_SUBSCRIPTIONS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_ORG_SUBSCRIPTIONS_MIN_ORDER_BY>;
  stddev: InputMaybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_ORDER_BY>;
  stddev_pop: InputMaybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_POP_ORDER_BY>;
  stddev_samp: InputMaybe<GQL_ORG_SUBSCRIPTIONS_STDDEV_SAMP_ORDER_BY>;
  sum: InputMaybe<GQL_ORG_SUBSCRIPTIONS_SUM_ORDER_BY>;
  var_pop: InputMaybe<GQL_ORG_SUBSCRIPTIONS_VAR_POP_ORDER_BY>;
  var_samp: InputMaybe<GQL_ORG_SUBSCRIPTIONS_VAR_SAMP_ORDER_BY>;
  variance: InputMaybe<GQL_ORG_SUBSCRIPTIONS_VARIANCE_ORDER_BY>;
};

/** input type for inserting array relation for remote table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_ORG_SUBSCRIPTIONS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_ORG_SUBSCRIPTIONS_ON_CONFLICT>;
};

/** aggregate avg on columns */
type GQL_ORG_SUBSCRIPTIONS_AVG_FIELDS = {
  __typename?: 'org_subscriptions_avg_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_AVG_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** Boolean expression to filter rows from the table "org_subscriptions". All fields are combined with a logical 'AND'. */
type GQL_ORG_SUBSCRIPTIONS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>>;
  _not: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>>;
  created_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  credits: InputMaybe<GQL_INT_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  org_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  plan: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  status: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  stripe_checkout_session_id: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  stripe_customer_id: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  stripe_subscription_id: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updated_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  valid_until: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  vipps_session_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "org_subscriptions" */
enum GQL_ORG_SUBSCRIPTIONS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  ORG_SUBSCRIPTIONS_PKEY = 'org_subscriptions_pkey'
}

/** input type for incrementing numeric columns in table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_INC_INPUT = {
  credits: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_INSERT_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  credits: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  plan: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  stripe_checkout_session_id: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  valid_until: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_session_id: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_ORG_SUBSCRIPTIONS_MAX_FIELDS = {
  __typename?: 'org_subscriptions_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credits: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  plan: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  stripe_checkout_session_id: Maybe<Scalars['String']['output']>;
  stripe_customer_id: Maybe<Scalars['String']['output']>;
  stripe_subscription_id: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  valid_until: Maybe<Scalars['timestamptz']['output']>;
  vipps_session_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_MAX_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  credits: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  plan: InputMaybe<GQL_ORDER_BY>;
  status: InputMaybe<GQL_ORDER_BY>;
  stripe_checkout_session_id: InputMaybe<GQL_ORDER_BY>;
  stripe_customer_id: InputMaybe<GQL_ORDER_BY>;
  stripe_subscription_id: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  valid_until: InputMaybe<GQL_ORDER_BY>;
  vipps_session_id: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_ORG_SUBSCRIPTIONS_MIN_FIELDS = {
  __typename?: 'org_subscriptions_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credits: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  plan: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  stripe_checkout_session_id: Maybe<Scalars['String']['output']>;
  stripe_customer_id: Maybe<Scalars['String']['output']>;
  stripe_subscription_id: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  valid_until: Maybe<Scalars['timestamptz']['output']>;
  vipps_session_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_MIN_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  credits: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  plan: InputMaybe<GQL_ORDER_BY>;
  status: InputMaybe<GQL_ORDER_BY>;
  stripe_checkout_session_id: InputMaybe<GQL_ORDER_BY>;
  stripe_customer_id: InputMaybe<GQL_ORDER_BY>;
  stripe_subscription_id: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  valid_until: InputMaybe<GQL_ORDER_BY>;
  vipps_session_id: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_MUTATION_RESPONSE = {
  __typename?: 'org_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_ORG_SUBSCRIPTIONS>;
};

/** on_conflict condition type for table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_ON_CONFLICT = {
  constraint: GQL_ORG_SUBSCRIPTIONS_CONSTRAINT;
  update_columns: Array<GQL_ORG_SUBSCRIPTIONS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};

/** Ordering options when selecting data from "org_subscriptions". */
type GQL_ORG_SUBSCRIPTIONS_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  credits: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  plan: InputMaybe<GQL_ORDER_BY>;
  status: InputMaybe<GQL_ORDER_BY>;
  stripe_checkout_session_id: InputMaybe<GQL_ORDER_BY>;
  stripe_customer_id: InputMaybe<GQL_ORDER_BY>;
  stripe_subscription_id: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  valid_until: InputMaybe<GQL_ORDER_BY>;
  vipps_session_id: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: org_subscriptions */
type GQL_ORG_SUBSCRIPTIONS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "org_subscriptions" */
enum GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CREDITS = 'credits',
  /** column name */
  ID = 'id',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  PLAN = 'plan',
  /** column name */
  STATUS = 'status',
  /** column name */
  STRIPE_CHECKOUT_SESSION_ID = 'stripe_checkout_session_id',
  /** column name */
  STRIPE_CUSTOMER_ID = 'stripe_customer_id',
  /** column name */
  STRIPE_SUBSCRIPTION_ID = 'stripe_subscription_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALID_UNTIL = 'valid_until',
  /** column name */
  VIPPS_SESSION_ID = 'vipps_session_id'
}

/** input type for updating data in table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_SET_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  credits: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  plan: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  stripe_checkout_session_id: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  valid_until: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_session_id: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_FIELDS = {
  __typename?: 'org_subscriptions_stddev_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_pop on columns */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_POP_FIELDS = {
  __typename?: 'org_subscriptions_stddev_pop_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_POP_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate stddev_samp on columns */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_SAMP_FIELDS = {
  __typename?: 'org_subscriptions_stddev_samp_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_STDDEV_SAMP_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** Streaming cursor of the table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_ORG_SUBSCRIPTIONS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_ORG_SUBSCRIPTIONS_STREAM_CURSOR_VALUE_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  credits: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  plan: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  stripe_checkout_session_id: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  valid_until: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_session_id: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
type GQL_ORG_SUBSCRIPTIONS_SUM_FIELDS = {
  __typename?: 'org_subscriptions_sum_fields';
  credits: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_SUM_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** update columns of table "org_subscriptions" */
enum GQL_ORG_SUBSCRIPTIONS_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CREDITS = 'credits',
  /** column name */
  ID = 'id',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  PLAN = 'plan',
  /** column name */
  STATUS = 'status',
  /** column name */
  STRIPE_CHECKOUT_SESSION_ID = 'stripe_checkout_session_id',
  /** column name */
  STRIPE_CUSTOMER_ID = 'stripe_customer_id',
  /** column name */
  STRIPE_SUBSCRIPTION_ID = 'stripe_subscription_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALID_UNTIL = 'valid_until',
  /** column name */
  VIPPS_SESSION_ID = 'vipps_session_id'
}

type GQL_ORG_SUBSCRIPTIONS_UPDATES = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<GQL_ORG_SUBSCRIPTIONS_INC_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_ORG_SUBSCRIPTIONS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_ORG_SUBSCRIPTIONS_BOOL_EXP;
};

/** aggregate var_pop on columns */
type GQL_ORG_SUBSCRIPTIONS_VAR_POP_FIELDS = {
  __typename?: 'org_subscriptions_var_pop_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_VAR_POP_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate var_samp on columns */
type GQL_ORG_SUBSCRIPTIONS_VAR_SAMP_FIELDS = {
  __typename?: 'org_subscriptions_var_samp_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_VAR_SAMP_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate variance on columns */
type GQL_ORG_SUBSCRIPTIONS_VARIANCE_FIELDS = {
  __typename?: 'org_subscriptions_variance_fields';
  credits: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "org_subscriptions" */
type GQL_ORG_SUBSCRIPTIONS_VARIANCE_ORDER_BY = {
  credits: InputMaybe<GQL_ORDER_BY>;
};

/** columns and relationships of "org_users" */
type GQL_ORG_USERS = {
  __typename?: 'org_users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  org: GQL_ORGS;
  org_id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: GQL_USERS;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "org_users" */
type GQL_ORG_USERS_AGGREGATE = {
  __typename?: 'org_users_aggregate';
  aggregate: Maybe<GQL_ORG_USERS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_ORG_USERS>;
};

type GQL_ORG_USERS_AGGREGATE_BOOL_EXP = {
  count: InputMaybe<GQL_ORG_USERS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_ORG_USERS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "org_users" */
type GQL_ORG_USERS_AGGREGATE_FIELDS = {
  __typename?: 'org_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_ORG_USERS_MAX_FIELDS>;
  min: Maybe<GQL_ORG_USERS_MIN_FIELDS>;
};


/** aggregate fields of "org_users" */
type GQL_ORG_USERS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "org_users" */
type GQL_ORG_USERS_AGGREGATE_ORDER_BY = {
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_ORG_USERS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_ORG_USERS_MIN_ORDER_BY>;
};

/** input type for inserting array relation for remote table "org_users" */
type GQL_ORG_USERS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_ORG_USERS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_ORG_USERS_ON_CONFLICT>;
};

/** Boolean expression to filter rows from the table "org_users". All fields are combined with a logical 'AND'. */
type GQL_ORG_USERS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_ORG_USERS_BOOL_EXP>>;
  _not: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_ORG_USERS_BOOL_EXP>>;
  created_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  org: InputMaybe<GQL_ORGS_BOOL_EXP>;
  org_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  role: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updated_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  user: InputMaybe<GQL_USERS_BOOL_EXP>;
  user_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "org_users" */
enum GQL_ORG_USERS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  ORG_USERS_PKEY = 'org_users_pkey'
}

/** input type for inserting data into table "org_users" */
type GQL_ORG_USERS_INSERT_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org: InputMaybe<GQL_ORGS_OBJ_REL_INSERT_INPUT>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user: InputMaybe<GQL_USERS_OBJ_REL_INSERT_INPUT>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_ORG_USERS_MAX_FIELDS = {
  __typename?: 'org_users_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "org_users" */
type GQL_ORG_USERS_MAX_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  user_id: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_ORG_USERS_MIN_FIELDS = {
  __typename?: 'org_users_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "org_users" */
type GQL_ORG_USERS_MIN_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  user_id: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "org_users" */
type GQL_ORG_USERS_MUTATION_RESPONSE = {
  __typename?: 'org_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_ORG_USERS>;
};

/** input type for inserting object relation for remote table "org_users" */
type GQL_ORG_USERS_OBJ_REL_INSERT_INPUT = {
  data: GQL_ORG_USERS_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_ORG_USERS_ON_CONFLICT>;
};

/** on_conflict condition type for table "org_users" */
type GQL_ORG_USERS_ON_CONFLICT = {
  constraint: GQL_ORG_USERS_CONSTRAINT;
  update_columns: Array<GQL_ORG_USERS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};

/** Ordering options when selecting data from "org_users". */
type GQL_ORG_USERS_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org: InputMaybe<GQL_ORGS_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  role: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  user: InputMaybe<GQL_USERS_ORDER_BY>;
  user_id: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: org_users */
type GQL_ORG_USERS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "org_users" */
enum GQL_ORG_USERS_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "org_users" */
type GQL_ORG_USERS_SET_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "org_users" */
type GQL_ORG_USERS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_ORG_USERS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_ORG_USERS_STREAM_CURSOR_VALUE_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "org_users" */
enum GQL_ORG_USERS_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

type GQL_ORG_USERS_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_ORG_USERS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_ORG_USERS_BOOL_EXP;
};

/** columns and relationships of "orgs" */
type GQL_ORGS = {
  __typename?: 'orgs';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  org_subscriptions: Array<GQL_ORG_SUBSCRIPTIONS>;
  /** An aggregate relationship */
  org_subscriptions_aggregate: GQL_ORG_SUBSCRIPTIONS_AGGREGATE;
  /** An array relationship */
  org_users: Array<GQL_ORG_USERS>;
  /** An aggregate relationship */
  org_users_aggregate: GQL_ORG_USERS_AGGREGATE;
  owner_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "orgs" */
type GQL_ORGS_ORG_SUBSCRIPTIONS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


/** columns and relationships of "orgs" */
type GQL_ORGS_ORG_SUBSCRIPTIONS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


/** columns and relationships of "orgs" */
type GQL_ORGS_ORG_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


/** columns and relationships of "orgs" */
type GQL_ORGS_ORG_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};

/** aggregated selection of "orgs" */
type GQL_ORGS_AGGREGATE = {
  __typename?: 'orgs_aggregate';
  aggregate: Maybe<GQL_ORGS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_ORGS>;
};

/** aggregate fields of "orgs" */
type GQL_ORGS_AGGREGATE_FIELDS = {
  __typename?: 'orgs_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_ORGS_MAX_FIELDS>;
  min: Maybe<GQL_ORGS_MIN_FIELDS>;
};


/** aggregate fields of "orgs" */
type GQL_ORGS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_ORGS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
type GQL_ORGS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_ORGS_BOOL_EXP>>;
  _not: InputMaybe<GQL_ORGS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_ORGS_BOOL_EXP>>;
  created_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  org_subscriptions: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
  org_subscriptions_aggregate: InputMaybe<GQL_ORG_SUBSCRIPTIONS_AGGREGATE_BOOL_EXP>;
  org_users: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  org_users_aggregate: InputMaybe<GQL_ORG_USERS_AGGREGATE_BOOL_EXP>;
  owner_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  title: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updated_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "orgs" */
enum GQL_ORGS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  ORGS_PKEY = 'orgs_pkey'
}

/** input type for inserting data into table "orgs" */
type GQL_ORGS_INSERT_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_subscriptions: InputMaybe<GQL_ORG_SUBSCRIPTIONS_ARR_REL_INSERT_INPUT>;
  org_users: InputMaybe<GQL_ORG_USERS_ARR_REL_INSERT_INPUT>;
  owner_id: InputMaybe<Scalars['uuid']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
type GQL_ORGS_MAX_FIELDS = {
  __typename?: 'orgs_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  owner_id: Maybe<Scalars['uuid']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
type GQL_ORGS_MIN_FIELDS = {
  __typename?: 'orgs_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  owner_id: Maybe<Scalars['uuid']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "orgs" */
type GQL_ORGS_MUTATION_RESPONSE = {
  __typename?: 'orgs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_ORGS>;
};

/** input type for inserting object relation for remote table "orgs" */
type GQL_ORGS_OBJ_REL_INSERT_INPUT = {
  data: GQL_ORGS_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_ORGS_ON_CONFLICT>;
};

/** on_conflict condition type for table "orgs" */
type GQL_ORGS_ON_CONFLICT = {
  constraint: GQL_ORGS_CONSTRAINT;
  update_columns: Array<GQL_ORGS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};

/** Ordering options when selecting data from "orgs". */
type GQL_ORGS_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_subscriptions_aggregate: InputMaybe<GQL_ORG_SUBSCRIPTIONS_AGGREGATE_ORDER_BY>;
  org_users_aggregate: InputMaybe<GQL_ORG_USERS_AGGREGATE_ORDER_BY>;
  owner_id: InputMaybe<GQL_ORDER_BY>;
  title: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: orgs */
type GQL_ORGS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orgs" */
enum GQL_ORGS_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  OWNER_ID = 'owner_id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "orgs" */
type GQL_ORGS_SET_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  owner_id: InputMaybe<Scalars['uuid']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "orgs" */
type GQL_ORGS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_ORGS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_ORGS_STREAM_CURSOR_VALUE_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  owner_id: InputMaybe<Scalars['uuid']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "orgs" */
enum GQL_ORGS_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  OWNER_ID = 'owner_id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

type GQL_ORGS_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_ORGS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_ORGS_BOOL_EXP;
};

/** columns and relationships of "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS = {
  __typename?: 'payment_vipps_sessions';
  amount: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata: Scalars['jsonb']['output'];
  org_id: Scalars['uuid']['output'];
  /** An object relationship */
  org_user: GQL_ORG_USERS;
  org_user_id: Scalars['uuid']['output'];
  product: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  vipps_reference: Scalars['uuid']['output'];
};


/** columns and relationships of "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_METADATA_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE = {
  __typename?: 'payment_vipps_sessions_aggregate';
  aggregate: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_PAYMENT_VIPPS_SESSIONS>;
};

/** aggregate fields of "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE_FIELDS = {
  __typename?: 'payment_vipps_sessions_aggregate_fields';
  avg: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_AVG_FIELDS>;
  count: Scalars['Int']['output'];
  max: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MAX_FIELDS>;
  min: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_MIN_FIELDS>;
  stddev: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_FIELDS>;
  stddev_pop: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_POP_FIELDS>;
  stddev_samp: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_SAMP_FIELDS>;
  sum: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_SUM_FIELDS>;
  var_pop: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_VAR_POP_FIELDS>;
  var_samp: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_VAR_SAMP_FIELDS>;
  variance: Maybe<GQL_PAYMENT_VIPPS_SESSIONS_VARIANCE_FIELDS>;
};


/** aggregate fields of "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_PAYMENT_VIPPS_SESSIONS_APPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_AVG_FIELDS = {
  __typename?: 'payment_vipps_sessions_avg_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payment.vipps_sessions". All fields are combined with a logical 'AND'. */
type GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>>;
  _not: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>>;
  amount: InputMaybe<GQL_INT_COMPARISON_EXP>;
  created_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  currency: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  metadata: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
  org_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  org_user: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  org_user_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  product: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  quantity: InputMaybe<GQL_INT_COMPARISON_EXP>;
  status: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updated_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  vipps_reference: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "payment.vipps_sessions" */
enum GQL_PAYMENT_VIPPS_SESSIONS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  VIPPS_SESSIONS_PKEY = 'vipps_sessions_pkey',
  /** unique or primary key constraint on columns "vipps_reference" */
  VIPPS_SESSIONS_VIPPS_REFERENCE_KEY = 'vipps_sessions_vipps_reference_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_PAYMENT_VIPPS_SESSIONS_DELETE_AT_PATH_INPUT = {
  metadata: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_PAYMENT_VIPPS_SESSIONS_DELETE_ELEM_INPUT = {
  metadata: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_PAYMENT_VIPPS_SESSIONS_DELETE_KEY_INPUT = {
  metadata: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_INC_INPUT = {
  amount: InputMaybe<Scalars['Int']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_INSERT_INPUT = {
  amount: InputMaybe<Scalars['Int']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  currency: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  org_user: InputMaybe<GQL_ORG_USERS_OBJ_REL_INSERT_INPUT>;
  org_user_id: InputMaybe<Scalars['uuid']['input']>;
  product: InputMaybe<Scalars['String']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_reference: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_MAX_FIELDS = {
  __typename?: 'payment_vipps_sessions_max_fields';
  amount: Maybe<Scalars['Int']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  org_user_id: Maybe<Scalars['uuid']['output']>;
  product: Maybe<Scalars['String']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  vipps_reference: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_MIN_FIELDS = {
  __typename?: 'payment_vipps_sessions_min_fields';
  amount: Maybe<Scalars['Int']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  org_id: Maybe<Scalars['uuid']['output']>;
  org_user_id: Maybe<Scalars['uuid']['output']>;
  product: Maybe<Scalars['String']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  vipps_reference: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_MUTATION_RESPONSE = {
  __typename?: 'payment_vipps_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_PAYMENT_VIPPS_SESSIONS>;
};

/** on_conflict condition type for table "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_ON_CONFLICT = {
  constraint: GQL_PAYMENT_VIPPS_SESSIONS_CONSTRAINT;
  update_columns: Array<GQL_PAYMENT_VIPPS_SESSIONS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};

/** Ordering options when selecting data from "payment.vipps_sessions". */
type GQL_PAYMENT_VIPPS_SESSIONS_ORDER_BY = {
  amount: InputMaybe<GQL_ORDER_BY>;
  created_at: InputMaybe<GQL_ORDER_BY>;
  currency: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  metadata: InputMaybe<GQL_ORDER_BY>;
  org_id: InputMaybe<GQL_ORDER_BY>;
  org_user: InputMaybe<GQL_ORG_USERS_ORDER_BY>;
  org_user_id: InputMaybe<GQL_ORDER_BY>;
  product: InputMaybe<GQL_ORDER_BY>;
  quantity: InputMaybe<GQL_ORDER_BY>;
  status: InputMaybe<GQL_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  vipps_reference: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: payment.vipps_sessions */
type GQL_PAYMENT_VIPPS_SESSIONS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_PAYMENT_VIPPS_SESSIONS_PREPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "payment.vipps_sessions" */
enum GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN {
  /** column name */
  AMOUNT = 'amount',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENCY = 'currency',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  ORG_USER_ID = 'org_user_id',
  /** column name */
  PRODUCT = 'product',
  /** column name */
  QUANTITY = 'quantity',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VIPPS_REFERENCE = 'vipps_reference'
}

/** input type for updating data in table "payment.vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_SET_INPUT = {
  amount: InputMaybe<Scalars['Int']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  currency: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  org_user_id: InputMaybe<Scalars['uuid']['input']>;
  product: InputMaybe<Scalars['String']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_reference: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_FIELDS = {
  __typename?: 'payment_vipps_sessions_stddev_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_POP_FIELDS = {
  __typename?: 'payment_vipps_sessions_stddev_pop_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_STDDEV_SAMP_FIELDS = {
  __typename?: 'payment_vipps_sessions_stddev_samp_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "payment_vipps_sessions" */
type GQL_PAYMENT_VIPPS_SESSIONS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_PAYMENT_VIPPS_SESSIONS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_PAYMENT_VIPPS_SESSIONS_STREAM_CURSOR_VALUE_INPUT = {
  amount: InputMaybe<Scalars['Int']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  currency: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  org_id: InputMaybe<Scalars['uuid']['input']>;
  org_user_id: InputMaybe<Scalars['uuid']['input']>;
  product: InputMaybe<Scalars['String']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  vipps_reference: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_SUM_FIELDS = {
  __typename?: 'payment_vipps_sessions_sum_fields';
  amount: Maybe<Scalars['Int']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "payment.vipps_sessions" */
enum GQL_PAYMENT_VIPPS_SESSIONS_UPDATE_COLUMN {
  /** column name */
  AMOUNT = 'amount',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENCY = 'currency',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  ORG_ID = 'org_id',
  /** column name */
  ORG_USER_ID = 'org_user_id',
  /** column name */
  PRODUCT = 'product',
  /** column name */
  QUANTITY = 'quantity',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VIPPS_REFERENCE = 'vipps_reference'
}

type GQL_PAYMENT_VIPPS_SESSIONS_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_DELETE_KEY_INPUT>;
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_INC_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP;
};

/** aggregate var_pop on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_VAR_POP_FIELDS = {
  __typename?: 'payment_vipps_sessions_var_pop_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_VAR_SAMP_FIELDS = {
  __typename?: 'payment_vipps_sessions_var_samp_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
type GQL_PAYMENT_VIPPS_SESSIONS_VARIANCE_FIELDS = {
  __typename?: 'payment_vipps_sessions_variance_fields';
  amount: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
};

type GQL_QUERY_ROOT = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<GQL_AUTH_PROVIDERS>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<GQL_AUTH_PROVIDER_REQUESTS>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<GQL_AUTH_PROVIDER_REQUESTS>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<GQL_AUTH_PROVIDERS>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: GQL_AUTH_PROVIDERS_AGGREGATE;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<GQL_AUTH_REFRESH_TOKENS>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<GQL_AUTH_REFRESH_TOKENS>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: GQL_AUTH_REFRESH_TOKENS_AGGREGATE;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<GQL_AUTH_ROLES>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<GQL_AUTH_ROLES>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: GQL_AUTH_ROLES_AGGREGATE;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<GQL_AUTH_USER_PROVIDERS>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<GQL_AUTH_USER_PROVIDERS>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: GQL_AUTH_USER_PROVIDERS_AGGREGATE;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<GQL_AUTH_USER_ROLES>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<GQL_AUTH_USER_ROLES>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: GQL_AUTH_USER_ROLES_AGGREGATE;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey: Maybe<GQL_AUTH_USER_SECURITY_KEYS>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<GQL_AUTH_USER_SECURITY_KEYS>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<GQL_BUCKETS>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<GQL_BUCKETS>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: GQL_BUCKETS_AGGREGATE;
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<GQL_FILES>;
  /** An array relationship */
  files: Array<GQL_FILES>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: GQL_FILES_AGGREGATE;
  /** An array relationship */
  org_subscriptions: Array<GQL_ORG_SUBSCRIPTIONS>;
  /** An aggregate relationship */
  org_subscriptions_aggregate: GQL_ORG_SUBSCRIPTIONS_AGGREGATE;
  /** fetch data from the table: "org_subscriptions" using primary key columns */
  org_subscriptions_by_pk: Maybe<GQL_ORG_SUBSCRIPTIONS>;
  /** An array relationship */
  org_users: Array<GQL_ORG_USERS>;
  /** An aggregate relationship */
  org_users_aggregate: GQL_ORG_USERS_AGGREGATE;
  /** fetch data from the table: "org_users" using primary key columns */
  org_users_by_pk: Maybe<GQL_ORG_USERS>;
  /** fetch data from the table: "orgs" */
  orgs: Array<GQL_ORGS>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: GQL_ORGS_AGGREGATE;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk: Maybe<GQL_ORGS>;
  /** fetch data from the table: "payment.vipps_sessions" */
  payment_vipps_sessions: Array<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** fetch aggregated fields from the table: "payment.vipps_sessions" */
  payment_vipps_sessions_aggregate: GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE;
  /** fetch data from the table: "payment.vipps_sessions" using primary key columns */
  payment_vipps_sessions_by_pk: Maybe<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<GQL_USERS>;
  /** fetch data from the table: "user_profiles" */
  user_profiles: Array<GQL_USER_PROFILES>;
  /** fetch aggregated fields from the table: "user_profiles" */
  user_profiles_aggregate: GQL_USER_PROFILES_AGGREGATE;
  /** fetch data from the table: "user_profiles" using primary key columns */
  user_profiles_by_pk: Maybe<GQL_USER_PROFILES>;
  /** fetch data from the table: "auth.users" */
  users: Array<GQL_USERS>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: GQL_USERS_AGGREGATE;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus: Maybe<GQL_VIRUS>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<GQL_VIRUS>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: GQL_VIRUS_AGGREGATE;
};


type GQL_QUERY_ROOT_AUTH_PROVIDER_ARGS = {
  id: Scalars['String']['input'];
};


type GQL_QUERY_ROOT_AUTH_PROVIDER_REQUEST_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_AUTH_PROVIDER_REQUESTS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_PROVIDER_REQUESTS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKEN_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKEN_TYPE_ARGS = {
  value: Scalars['String']['input'];
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKEN_TYPES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKENS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_REFRESH_TOKENS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_ROLE_ARGS = {
  role: Scalars['String']['input'];
};


type GQL_QUERY_ROOT_AUTH_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_PROVIDER_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_AUTH_USER_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_ROLE_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_AUTH_USER_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_SECURITY_KEY_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_AUTH_USER_SECURITY_KEYS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_AUTH_USER_SECURITY_KEYS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_BUCKET_ARGS = {
  id: Scalars['String']['input'];
};


type GQL_QUERY_ROOT_BUCKETS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_BUCKETS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_BUCKETS_ORDER_BY>>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_BUCKETS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_BUCKETS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_BUCKETS_ORDER_BY>>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_FILE_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_FILES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_FILES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORG_SUBSCRIPTIONS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORG_SUBSCRIPTIONS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORG_SUBSCRIPTIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_ORG_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORG_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORG_USERS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_ORGS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORGS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORGS_ORDER_BY>>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORGS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORGS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORGS_ORDER_BY>>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_ORGS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_PAYMENT_VIPPS_SESSIONS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_ORDER_BY>>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_PAYMENT_VIPPS_SESSIONS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_ORDER_BY>>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_PAYMENT_VIPPS_SESSIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_USER_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_USER_PROFILES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USER_PROFILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USER_PROFILES_ORDER_BY>>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_USER_PROFILES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USER_PROFILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USER_PROFILES_ORDER_BY>>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};


type GQL_QUERY_ROOT_USER_PROFILES_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_VIRUS_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_QUERY_ROOT_VIRUSES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_VIRUS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_VIRUS_ORDER_BY>>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};


type GQL_QUERY_ROOT_VIRUSES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_VIRUS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_VIRUS_ORDER_BY>>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};

type GQL_SUBSCRIPTION_ROOT = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<GQL_AUTH_PROVIDERS>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<GQL_AUTH_PROVIDER_REQUESTS>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<GQL_AUTH_PROVIDER_REQUESTS>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: GQL_AUTH_PROVIDER_REQUESTS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<GQL_AUTH_PROVIDER_REQUESTS>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<GQL_AUTH_PROVIDERS>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: GQL_AUTH_PROVIDERS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<GQL_AUTH_PROVIDERS>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<GQL_AUTH_REFRESH_TOKENS>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType: Maybe<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: GQL_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<GQL_AUTH_REFRESH_TOKEN_TYPES>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<GQL_AUTH_REFRESH_TOKENS>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: GQL_AUTH_REFRESH_TOKENS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<GQL_AUTH_REFRESH_TOKENS>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<GQL_AUTH_ROLES>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<GQL_AUTH_ROLES>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: GQL_AUTH_ROLES_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<GQL_AUTH_ROLES>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<GQL_AUTH_USER_PROVIDERS>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<GQL_AUTH_USER_PROVIDERS>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: GQL_AUTH_USER_PROVIDERS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<GQL_AUTH_USER_PROVIDERS>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<GQL_AUTH_USER_ROLES>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<GQL_AUTH_USER_ROLES>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: GQL_AUTH_USER_ROLES_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<GQL_AUTH_USER_ROLES>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey: Maybe<GQL_AUTH_USER_SECURITY_KEYS>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<GQL_AUTH_USER_SECURITY_KEYS>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<GQL_AUTH_USER_SECURITY_KEYS>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<GQL_BUCKETS>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<GQL_BUCKETS>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: GQL_BUCKETS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<GQL_BUCKETS>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<GQL_FILES>;
  /** An array relationship */
  files: Array<GQL_FILES>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: GQL_FILES_AGGREGATE;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<GQL_FILES>;
  /** An array relationship */
  org_subscriptions: Array<GQL_ORG_SUBSCRIPTIONS>;
  /** An aggregate relationship */
  org_subscriptions_aggregate: GQL_ORG_SUBSCRIPTIONS_AGGREGATE;
  /** fetch data from the table: "org_subscriptions" using primary key columns */
  org_subscriptions_by_pk: Maybe<GQL_ORG_SUBSCRIPTIONS>;
  /** fetch data from the table in a streaming manner: "org_subscriptions" */
  org_subscriptions_stream: Array<GQL_ORG_SUBSCRIPTIONS>;
  /** An array relationship */
  org_users: Array<GQL_ORG_USERS>;
  /** An aggregate relationship */
  org_users_aggregate: GQL_ORG_USERS_AGGREGATE;
  /** fetch data from the table: "org_users" using primary key columns */
  org_users_by_pk: Maybe<GQL_ORG_USERS>;
  /** fetch data from the table in a streaming manner: "org_users" */
  org_users_stream: Array<GQL_ORG_USERS>;
  /** fetch data from the table: "orgs" */
  orgs: Array<GQL_ORGS>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: GQL_ORGS_AGGREGATE;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk: Maybe<GQL_ORGS>;
  /** fetch data from the table in a streaming manner: "orgs" */
  orgs_stream: Array<GQL_ORGS>;
  /** fetch data from the table: "payment.vipps_sessions" */
  payment_vipps_sessions: Array<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** fetch aggregated fields from the table: "payment.vipps_sessions" */
  payment_vipps_sessions_aggregate: GQL_PAYMENT_VIPPS_SESSIONS_AGGREGATE;
  /** fetch data from the table: "payment.vipps_sessions" using primary key columns */
  payment_vipps_sessions_by_pk: Maybe<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** fetch data from the table in a streaming manner: "payment.vipps_sessions" */
  payment_vipps_sessions_stream: Array<GQL_PAYMENT_VIPPS_SESSIONS>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<GQL_USERS>;
  /** fetch data from the table: "user_profiles" */
  user_profiles: Array<GQL_USER_PROFILES>;
  /** fetch aggregated fields from the table: "user_profiles" */
  user_profiles_aggregate: GQL_USER_PROFILES_AGGREGATE;
  /** fetch data from the table: "user_profiles" using primary key columns */
  user_profiles_by_pk: Maybe<GQL_USER_PROFILES>;
  /** fetch data from the table in a streaming manner: "user_profiles" */
  user_profiles_stream: Array<GQL_USER_PROFILES>;
  /** fetch data from the table: "auth.users" */
  users: Array<GQL_USERS>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: GQL_USERS_AGGREGATE;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<GQL_USERS>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus: Maybe<GQL_VIRUS>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<GQL_VIRUS>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<GQL_VIRUS>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: GQL_VIRUS_AGGREGATE;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDER_ARGS = {
  id: Scalars['String']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDER_REQUEST_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDER_REQUESTS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDER_REQUESTS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDER_REQUESTS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDER_REQUESTS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_PROVIDER_REQUESTS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_PROVIDERS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_PROVIDERS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKEN_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKEN_TYPE_ARGS = {
  value: Scalars['String']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKEN_TYPES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKEN_TYPES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKEN_TYPES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKEN_TYPES_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKEN_TYPES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKENS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKENS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_REFRESH_TOKENS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_REFRESH_TOKENS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_ROLE_ARGS = {
  role: Scalars['String']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_ROLES_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_ROLES_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_PROVIDER_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_PROVIDERS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_USER_PROVIDERS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_ROLE_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_ROLES_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_USER_ROLES_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_SECURITY_KEY_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_SECURITY_KEYS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_SECURITY_KEYS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_AUTH_USER_SECURITY_KEYS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_BUCKET_ARGS = {
  id: Scalars['String']['input'];
};


type GQL_SUBSCRIPTION_ROOT_BUCKETS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_BUCKETS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_BUCKETS_ORDER_BY>>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_BUCKETS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_BUCKETS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_BUCKETS_ORDER_BY>>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_BUCKETS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_BUCKETS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_BUCKETS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_FILE_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_FILES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_FILES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_FILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_FILES_ORDER_BY>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_FILES_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_FILES_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_FILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_SUBSCRIPTIONS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_SUBSCRIPTIONS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_SUBSCRIPTIONS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_SUBSCRIPTIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_ORG_SUBSCRIPTIONS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_ORG_SUBSCRIPTIONS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_ORG_SUBSCRIPTIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORG_USERS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_ORG_USERS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_ORG_USERS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORGS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORGS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORGS_ORDER_BY>>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORGS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORGS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORGS_ORDER_BY>>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_ORGS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_ORGS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_ORGS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_ORGS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_PAYMENT_VIPPS_SESSIONS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_ORDER_BY>>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_PAYMENT_VIPPS_SESSIONS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_PAYMENT_VIPPS_SESSIONS_ORDER_BY>>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_PAYMENT_VIPPS_SESSIONS_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_PAYMENT_VIPPS_SESSIONS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_PAYMENT_VIPPS_SESSIONS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USER_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_USER_PROFILES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USER_PROFILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USER_PROFILES_ORDER_BY>>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USER_PROFILES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USER_PROFILES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USER_PROFILES_ORDER_BY>>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USER_PROFILES_BY_PK_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_USER_PROFILES_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_USER_PROFILES_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_USERS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_USERS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_VIRUS_ARGS = {
  id: Scalars['uuid']['input'];
};


type GQL_SUBSCRIPTION_ROOT_VIRUS_STREAM_ARGS = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GQL_VIRUS_STREAM_CURSOR_INPUT>>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_VIRUSES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_VIRUS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_VIRUS_ORDER_BY>>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};


type GQL_SUBSCRIPTION_ROOT_VIRUSES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_VIRUS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_VIRUS_ORDER_BY>>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
type GQL_TIMESTAMPTZ_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['timestamptz']['input']>;
  _gt: InputMaybe<Scalars['timestamptz']['input']>;
  _gte: InputMaybe<Scalars['timestamptz']['input']>;
  _in: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['timestamptz']['input']>;
  _lte: InputMaybe<Scalars['timestamptz']['input']>;
  _neq: InputMaybe<Scalars['timestamptz']['input']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_profiles" */
type GQL_USER_PROFILES = {
  __typename?: 'user_profiles';
  created_at: Scalars['timestamptz']['output'];
  current_org_user: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  org_user: GQL_ORG_USERS;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_profiles" */
type GQL_USER_PROFILES_AGGREGATE = {
  __typename?: 'user_profiles_aggregate';
  aggregate: Maybe<GQL_USER_PROFILES_AGGREGATE_FIELDS>;
  nodes: Array<GQL_USER_PROFILES>;
};

/** aggregate fields of "user_profiles" */
type GQL_USER_PROFILES_AGGREGATE_FIELDS = {
  __typename?: 'user_profiles_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_USER_PROFILES_MAX_FIELDS>;
  min: Maybe<GQL_USER_PROFILES_MIN_FIELDS>;
};


/** aggregate fields of "user_profiles" */
type GQL_USER_PROFILES_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_USER_PROFILES_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_profiles". All fields are combined with a logical 'AND'. */
type GQL_USER_PROFILES_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_USER_PROFILES_BOOL_EXP>>;
  _not: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_USER_PROFILES_BOOL_EXP>>;
  created_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  current_org_user: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  org_user: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  updated_at: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  user_id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "user_profiles" */
enum GQL_USER_PROFILES_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  USER_PROFILES_PKEY = 'user_profiles_pkey',
  /** unique or primary key constraint on columns "user_id" */
  USER_PROFILES_USER_ID_KEY = 'user_profiles_user_id_key'
}

/** input type for inserting data into table "user_profiles" */
type GQL_USER_PROFILES_INSERT_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  current_org_user: InputMaybe<Scalars['uuid']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  org_user: InputMaybe<GQL_ORG_USERS_OBJ_REL_INSERT_INPUT>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
type GQL_USER_PROFILES_MAX_FIELDS = {
  __typename?: 'user_profiles_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  current_org_user: Maybe<Scalars['uuid']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
type GQL_USER_PROFILES_MIN_FIELDS = {
  __typename?: 'user_profiles_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  current_org_user: Maybe<Scalars['uuid']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_profiles" */
type GQL_USER_PROFILES_MUTATION_RESPONSE = {
  __typename?: 'user_profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_USER_PROFILES>;
};

/** input type for inserting object relation for remote table "user_profiles" */
type GQL_USER_PROFILES_OBJ_REL_INSERT_INPUT = {
  data: GQL_USER_PROFILES_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_USER_PROFILES_ON_CONFLICT>;
};

/** on_conflict condition type for table "user_profiles" */
type GQL_USER_PROFILES_ON_CONFLICT = {
  constraint: GQL_USER_PROFILES_CONSTRAINT;
  update_columns: Array<GQL_USER_PROFILES_UPDATE_COLUMN>;
  where: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};

/** Ordering options when selecting data from "user_profiles". */
type GQL_USER_PROFILES_ORDER_BY = {
  created_at: InputMaybe<GQL_ORDER_BY>;
  current_org_user: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  org_user: InputMaybe<GQL_ORG_USERS_ORDER_BY>;
  updated_at: InputMaybe<GQL_ORDER_BY>;
  user_id: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: user_profiles */
type GQL_USER_PROFILES_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_profiles" */
enum GQL_USER_PROFILES_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENT_ORG_USER = 'current_org_user',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "user_profiles" */
type GQL_USER_PROFILES_SET_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  current_org_user: InputMaybe<Scalars['uuid']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_profiles" */
type GQL_USER_PROFILES_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_USER_PROFILES_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_USER_PROFILES_STREAM_CURSOR_VALUE_INPUT = {
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  current_org_user: InputMaybe<Scalars['uuid']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_profiles" */
enum GQL_USER_PROFILES_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENT_ORG_USER = 'current_org_user',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

type GQL_USER_PROFILES_UPDATES = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_USER_PROFILES_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_USER_PROFILES_BOOL_EXP;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS = {
  __typename?: 'users';
  activeMfaType: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: GQL_AUTH_ROLES;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata: Maybe<Scalars['jsonb']['output']>;
  newEmail: Maybe<Scalars['citext']['output']>;
  /** An array relationship */
  org_users: Array<GQL_ORG_USERS>;
  /** An aggregate relationship */
  org_users_aggregate: GQL_ORG_USERS_AGGREGATE;
  otpHash: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed: Maybe<Scalars['String']['output']>;
  passwordHash: Maybe<Scalars['String']['output']>;
  phoneNumber: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<GQL_AUTH_REFRESH_TOKENS>;
  /** An aggregate relationship */
  refreshTokens_aggregate: GQL_AUTH_REFRESH_TOKENS_AGGREGATE;
  /** An array relationship */
  roles: Array<GQL_AUTH_USER_ROLES>;
  /** An aggregate relationship */
  roles_aggregate: GQL_AUTH_USER_ROLES_AGGREGATE;
  /** An array relationship */
  securityKeys: Array<GQL_AUTH_USER_SECURITY_KEYS>;
  /** An aggregate relationship */
  securityKeys_aggregate: GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE;
  ticket: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<GQL_AUTH_USER_PROVIDERS>;
  /** An aggregate relationship */
  userProviders_aggregate: GQL_AUTH_USER_PROVIDERS_AGGREGATE;
  /** An object relationship */
  user_profile: Maybe<GQL_USER_PROFILES>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_METADATA_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_ORG_USERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_ORG_USERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_ORG_USERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_ORG_USERS_ORDER_BY>>;
  where: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_REFRESH_TOKENS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_REFRESH_TOKENS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_REFRESH_TOKENS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_ROLES_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_ROLES_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_ROLES_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_ROLES_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_SECURITY_KEYS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_SECURITY_KEYS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_SECURITY_KEYS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_USER_PROVIDERS_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
type GQL_USERS_USER_PROVIDERS_AGGREGATE_ARGS = {
  distinct_on: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_SELECT_COLUMN>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<GQL_AUTH_USER_PROVIDERS_ORDER_BY>>;
  where: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
};

/** aggregated selection of "auth.users" */
type GQL_USERS_AGGREGATE = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<GQL_USERS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_USERS>;
};

type GQL_USERS_AGGREGATE_BOOL_EXP = {
  bool_and: InputMaybe<GQL_USERS_AGGREGATE_BOOL_EXP_BOOL_AND>;
  bool_or: InputMaybe<GQL_USERS_AGGREGATE_BOOL_EXP_BOOL_OR>;
  count: InputMaybe<GQL_USERS_AGGREGATE_BOOL_EXP_COUNT>;
};

type GQL_USERS_AGGREGATE_BOOL_EXP_BOOL_AND = {
  arguments: GQL_USERS_SELECT_COLUMN_USERS_AGGREGATE_BOOL_EXP_BOOL_AND_ARGUMENTS_COLUMNS;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_USERS_BOOL_EXP>;
  predicate: GQL_BOOLEAN_COMPARISON_EXP;
};

type GQL_USERS_AGGREGATE_BOOL_EXP_BOOL_OR = {
  arguments: GQL_USERS_SELECT_COLUMN_USERS_AGGREGATE_BOOL_EXP_BOOL_OR_ARGUMENTS_COLUMNS;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_USERS_BOOL_EXP>;
  predicate: GQL_BOOLEAN_COMPARISON_EXP;
};

type GQL_USERS_AGGREGATE_BOOL_EXP_COUNT = {
  arguments: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
  filter: InputMaybe<GQL_USERS_BOOL_EXP>;
  predicate: GQL_INT_COMPARISON_EXP;
};

/** aggregate fields of "auth.users" */
type GQL_USERS_AGGREGATE_FIELDS = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_USERS_MAX_FIELDS>;
  min: Maybe<GQL_USERS_MIN_FIELDS>;
};


/** aggregate fields of "auth.users" */
type GQL_USERS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_USERS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
type GQL_USERS_AGGREGATE_ORDER_BY = {
  count: InputMaybe<GQL_ORDER_BY>;
  max: InputMaybe<GQL_USERS_MAX_ORDER_BY>;
  min: InputMaybe<GQL_USERS_MIN_ORDER_BY>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_USERS_APPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
type GQL_USERS_ARR_REL_INSERT_INPUT = {
  data: Array<GQL_USERS_INSERT_INPUT>;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_USERS_ON_CONFLICT>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
type GQL_USERS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_USERS_BOOL_EXP>>;
  _not: InputMaybe<GQL_USERS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_USERS_BOOL_EXP>>;
  activeMfaType: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  avatarUrl: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  currentChallenge: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  defaultRole: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  defaultRoleByRole: InputMaybe<GQL_AUTH_ROLES_BOOL_EXP>;
  disabled: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  displayName: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  email: InputMaybe<GQL_CITEXT_COMPARISON_EXP>;
  emailVerified: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  isAnonymous: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  lastSeen: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  locale: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  metadata: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
  newEmail: InputMaybe<GQL_CITEXT_COMPARISON_EXP>;
  org_users: InputMaybe<GQL_ORG_USERS_BOOL_EXP>;
  org_users_aggregate: InputMaybe<GQL_ORG_USERS_AGGREGATE_BOOL_EXP>;
  otpHash: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  otpHashExpiresAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  otpMethodLastUsed: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  passwordHash: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  phoneNumber: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  phoneNumberVerified: InputMaybe<GQL_BOOLEAN_COMPARISON_EXP>;
  refreshTokens: InputMaybe<GQL_AUTH_REFRESH_TOKENS_BOOL_EXP>;
  refreshTokens_aggregate: InputMaybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_BOOL_EXP>;
  roles: InputMaybe<GQL_AUTH_USER_ROLES_BOOL_EXP>;
  roles_aggregate: InputMaybe<GQL_AUTH_USER_ROLES_AGGREGATE_BOOL_EXP>;
  securityKeys: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_BOOL_EXP>;
  securityKeys_aggregate: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_BOOL_EXP>;
  ticket: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  ticketExpiresAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  totpSecret: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  updatedAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  userProviders: InputMaybe<GQL_AUTH_USER_PROVIDERS_BOOL_EXP>;
  userProviders_aggregate: InputMaybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_BOOL_EXP>;
  user_profile: InputMaybe<GQL_USER_PROFILES_BOOL_EXP>;
};

/** unique or primary key constraints on table "auth.users" */
enum GQL_USERS_CONSTRAINT {
  /** unique or primary key constraint on columns "email" */
  USERS_EMAIL_KEY = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  USERS_PHONE_NUMBER_KEY = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  USERS_PKEY = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_USERS_DELETE_AT_PATH_INPUT = {
  metadata: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_USERS_DELETE_ELEM_INPUT = {
  metadata: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_USERS_DELETE_KEY_INPUT = {
  metadata: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
type GQL_USERS_INSERT_INPUT = {
  activeMfaType: InputMaybe<Scalars['String']['input']>;
  avatarUrl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge: InputMaybe<Scalars['String']['input']>;
  defaultRole: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole: InputMaybe<GQL_AUTH_ROLES_OBJ_REL_INSERT_INPUT>;
  disabled: InputMaybe<Scalars['Boolean']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['citext']['input']>;
  emailVerified: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen: InputMaybe<Scalars['timestamptz']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  newEmail: InputMaybe<Scalars['citext']['input']>;
  org_users: InputMaybe<GQL_ORG_USERS_ARR_REL_INSERT_INPUT>;
  otpHash: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']['input']>;
  passwordHash: InputMaybe<Scalars['String']['input']>;
  phoneNumber: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens: InputMaybe<GQL_AUTH_REFRESH_TOKENS_ARR_REL_INSERT_INPUT>;
  roles: InputMaybe<GQL_AUTH_USER_ROLES_ARR_REL_INSERT_INPUT>;
  securityKeys: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_ARR_REL_INSERT_INPUT>;
  ticket: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders: InputMaybe<GQL_AUTH_USER_PROVIDERS_ARR_REL_INSERT_INPUT>;
  user_profile: InputMaybe<GQL_USER_PROFILES_OBJ_REL_INSERT_INPUT>;
};

/** aggregate max on columns */
type GQL_USERS_MAX_FIELDS = {
  __typename?: 'users_max_fields';
  activeMfaType: Maybe<Scalars['String']['output']>;
  avatarUrl: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge: Maybe<Scalars['String']['output']>;
  defaultRole: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['citext']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  lastSeen: Maybe<Scalars['timestamptz']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  newEmail: Maybe<Scalars['citext']['output']>;
  otpHash: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed: Maybe<Scalars['String']['output']>;
  passwordHash: Maybe<Scalars['String']['output']>;
  phoneNumber: Maybe<Scalars['String']['output']>;
  ticket: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Maybe<Scalars['timestamptz']['output']>;
  totpSecret: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
type GQL_USERS_MAX_ORDER_BY = {
  activeMfaType: InputMaybe<GQL_ORDER_BY>;
  avatarUrl: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  currentChallenge: InputMaybe<GQL_ORDER_BY>;
  defaultRole: InputMaybe<GQL_ORDER_BY>;
  displayName: InputMaybe<GQL_ORDER_BY>;
  email: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  lastSeen: InputMaybe<GQL_ORDER_BY>;
  locale: InputMaybe<GQL_ORDER_BY>;
  newEmail: InputMaybe<GQL_ORDER_BY>;
  otpHash: InputMaybe<GQL_ORDER_BY>;
  otpHashExpiresAt: InputMaybe<GQL_ORDER_BY>;
  otpMethodLastUsed: InputMaybe<GQL_ORDER_BY>;
  passwordHash: InputMaybe<GQL_ORDER_BY>;
  phoneNumber: InputMaybe<GQL_ORDER_BY>;
  ticket: InputMaybe<GQL_ORDER_BY>;
  ticketExpiresAt: InputMaybe<GQL_ORDER_BY>;
  totpSecret: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
};

/** aggregate min on columns */
type GQL_USERS_MIN_FIELDS = {
  __typename?: 'users_min_fields';
  activeMfaType: Maybe<Scalars['String']['output']>;
  avatarUrl: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge: Maybe<Scalars['String']['output']>;
  defaultRole: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['citext']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  lastSeen: Maybe<Scalars['timestamptz']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  newEmail: Maybe<Scalars['citext']['output']>;
  otpHash: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed: Maybe<Scalars['String']['output']>;
  passwordHash: Maybe<Scalars['String']['output']>;
  phoneNumber: Maybe<Scalars['String']['output']>;
  ticket: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Maybe<Scalars['timestamptz']['output']>;
  totpSecret: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
type GQL_USERS_MIN_ORDER_BY = {
  activeMfaType: InputMaybe<GQL_ORDER_BY>;
  avatarUrl: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  currentChallenge: InputMaybe<GQL_ORDER_BY>;
  defaultRole: InputMaybe<GQL_ORDER_BY>;
  displayName: InputMaybe<GQL_ORDER_BY>;
  email: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  lastSeen: InputMaybe<GQL_ORDER_BY>;
  locale: InputMaybe<GQL_ORDER_BY>;
  newEmail: InputMaybe<GQL_ORDER_BY>;
  otpHash: InputMaybe<GQL_ORDER_BY>;
  otpHashExpiresAt: InputMaybe<GQL_ORDER_BY>;
  otpMethodLastUsed: InputMaybe<GQL_ORDER_BY>;
  passwordHash: InputMaybe<GQL_ORDER_BY>;
  phoneNumber: InputMaybe<GQL_ORDER_BY>;
  ticket: InputMaybe<GQL_ORDER_BY>;
  ticketExpiresAt: InputMaybe<GQL_ORDER_BY>;
  totpSecret: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
};

/** response of any mutation on the table "auth.users" */
type GQL_USERS_MUTATION_RESPONSE = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_USERS>;
};

/** input type for inserting object relation for remote table "auth.users" */
type GQL_USERS_OBJ_REL_INSERT_INPUT = {
  data: GQL_USERS_INSERT_INPUT;
  /** upsert condition */
  on_conflict: InputMaybe<GQL_USERS_ON_CONFLICT>;
};

/** on_conflict condition type for table "auth.users" */
type GQL_USERS_ON_CONFLICT = {
  constraint: GQL_USERS_CONSTRAINT;
  update_columns: Array<GQL_USERS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_USERS_BOOL_EXP>;
};

/** Ordering options when selecting data from "auth.users". */
type GQL_USERS_ORDER_BY = {
  activeMfaType: InputMaybe<GQL_ORDER_BY>;
  avatarUrl: InputMaybe<GQL_ORDER_BY>;
  createdAt: InputMaybe<GQL_ORDER_BY>;
  currentChallenge: InputMaybe<GQL_ORDER_BY>;
  defaultRole: InputMaybe<GQL_ORDER_BY>;
  defaultRoleByRole: InputMaybe<GQL_AUTH_ROLES_ORDER_BY>;
  disabled: InputMaybe<GQL_ORDER_BY>;
  displayName: InputMaybe<GQL_ORDER_BY>;
  email: InputMaybe<GQL_ORDER_BY>;
  emailVerified: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  isAnonymous: InputMaybe<GQL_ORDER_BY>;
  lastSeen: InputMaybe<GQL_ORDER_BY>;
  locale: InputMaybe<GQL_ORDER_BY>;
  metadata: InputMaybe<GQL_ORDER_BY>;
  newEmail: InputMaybe<GQL_ORDER_BY>;
  org_users_aggregate: InputMaybe<GQL_ORG_USERS_AGGREGATE_ORDER_BY>;
  otpHash: InputMaybe<GQL_ORDER_BY>;
  otpHashExpiresAt: InputMaybe<GQL_ORDER_BY>;
  otpMethodLastUsed: InputMaybe<GQL_ORDER_BY>;
  passwordHash: InputMaybe<GQL_ORDER_BY>;
  phoneNumber: InputMaybe<GQL_ORDER_BY>;
  phoneNumberVerified: InputMaybe<GQL_ORDER_BY>;
  refreshTokens_aggregate: InputMaybe<GQL_AUTH_REFRESH_TOKENS_AGGREGATE_ORDER_BY>;
  roles_aggregate: InputMaybe<GQL_AUTH_USER_ROLES_AGGREGATE_ORDER_BY>;
  securityKeys_aggregate: InputMaybe<GQL_AUTH_USER_SECURITY_KEYS_AGGREGATE_ORDER_BY>;
  ticket: InputMaybe<GQL_ORDER_BY>;
  ticketExpiresAt: InputMaybe<GQL_ORDER_BY>;
  totpSecret: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  userProviders_aggregate: InputMaybe<GQL_AUTH_USER_PROVIDERS_AGGREGATE_ORDER_BY>;
  user_profile: InputMaybe<GQL_USER_PROFILES_ORDER_BY>;
};

/** primary key columns input for table: auth.users */
type GQL_USERS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_USERS_PREPEND_INPUT = {
  metadata: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
enum GQL_USERS_SELECT_COLUMN {
  /** column name */
  ACTIVE_MFA_TYPE = 'activeMfaType',
  /** column name */
  AVATAR_URL = 'avatarUrl',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  CURRENT_CHALLENGE = 'currentChallenge',
  /** column name */
  DEFAULT_ROLE = 'defaultRole',
  /** column name */
  DISABLED = 'disabled',
  /** column name */
  DISPLAY_NAME = 'displayName',
  /** column name */
  EMAIL = 'email',
  /** column name */
  EMAIL_VERIFIED = 'emailVerified',
  /** column name */
  ID = 'id',
  /** column name */
  IS_ANONYMOUS = 'isAnonymous',
  /** column name */
  LAST_SEEN = 'lastSeen',
  /** column name */
  LOCALE = 'locale',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NEW_EMAIL = 'newEmail',
  /** column name */
  OTP_HASH = 'otpHash',
  /** column name */
  OTP_HASH_EXPIRES_AT = 'otpHashExpiresAt',
  /** column name */
  OTP_METHOD_LAST_USED = 'otpMethodLastUsed',
  /** column name */
  PASSWORD_HASH = 'passwordHash',
  /** column name */
  PHONE_NUMBER = 'phoneNumber',
  /** column name */
  PHONE_NUMBER_VERIFIED = 'phoneNumberVerified',
  /** column name */
  TICKET = 'ticket',
  /** column name */
  TICKET_EXPIRES_AT = 'ticketExpiresAt',
  /** column name */
  TOTP_SECRET = 'totpSecret',
  /** column name */
  UPDATED_AT = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
enum GQL_USERS_SELECT_COLUMN_USERS_AGGREGATE_BOOL_EXP_BOOL_AND_ARGUMENTS_COLUMNS {
  /** column name */
  DISABLED = 'disabled',
  /** column name */
  EMAIL_VERIFIED = 'emailVerified',
  /** column name */
  IS_ANONYMOUS = 'isAnonymous',
  /** column name */
  PHONE_NUMBER_VERIFIED = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
enum GQL_USERS_SELECT_COLUMN_USERS_AGGREGATE_BOOL_EXP_BOOL_OR_ARGUMENTS_COLUMNS {
  /** column name */
  DISABLED = 'disabled',
  /** column name */
  EMAIL_VERIFIED = 'emailVerified',
  /** column name */
  IS_ANONYMOUS = 'isAnonymous',
  /** column name */
  PHONE_NUMBER_VERIFIED = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
type GQL_USERS_SET_INPUT = {
  activeMfaType: InputMaybe<Scalars['String']['input']>;
  avatarUrl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge: InputMaybe<Scalars['String']['input']>;
  defaultRole: InputMaybe<Scalars['String']['input']>;
  disabled: InputMaybe<Scalars['Boolean']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['citext']['input']>;
  emailVerified: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen: InputMaybe<Scalars['timestamptz']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  newEmail: InputMaybe<Scalars['citext']['input']>;
  otpHash: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']['input']>;
  passwordHash: InputMaybe<Scalars['String']['input']>;
  phoneNumber: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']['input']>;
  ticket: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
type GQL_USERS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_USERS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_USERS_STREAM_CURSOR_VALUE_INPUT = {
  activeMfaType: InputMaybe<Scalars['String']['input']>;
  avatarUrl: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge: InputMaybe<Scalars['String']['input']>;
  defaultRole: InputMaybe<Scalars['String']['input']>;
  disabled: InputMaybe<Scalars['Boolean']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['citext']['input']>;
  emailVerified: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen: InputMaybe<Scalars['timestamptz']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  metadata: InputMaybe<Scalars['jsonb']['input']>;
  newEmail: InputMaybe<Scalars['citext']['input']>;
  otpHash: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']['input']>;
  passwordHash: InputMaybe<Scalars['String']['input']>;
  phoneNumber: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']['input']>;
  ticket: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
enum GQL_USERS_UPDATE_COLUMN {
  /** column name */
  ACTIVE_MFA_TYPE = 'activeMfaType',
  /** column name */
  AVATAR_URL = 'avatarUrl',
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  CURRENT_CHALLENGE = 'currentChallenge',
  /** column name */
  DEFAULT_ROLE = 'defaultRole',
  /** column name */
  DISABLED = 'disabled',
  /** column name */
  DISPLAY_NAME = 'displayName',
  /** column name */
  EMAIL = 'email',
  /** column name */
  EMAIL_VERIFIED = 'emailVerified',
  /** column name */
  ID = 'id',
  /** column name */
  IS_ANONYMOUS = 'isAnonymous',
  /** column name */
  LAST_SEEN = 'lastSeen',
  /** column name */
  LOCALE = 'locale',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NEW_EMAIL = 'newEmail',
  /** column name */
  OTP_HASH = 'otpHash',
  /** column name */
  OTP_HASH_EXPIRES_AT = 'otpHashExpiresAt',
  /** column name */
  OTP_METHOD_LAST_USED = 'otpMethodLastUsed',
  /** column name */
  PASSWORD_HASH = 'passwordHash',
  /** column name */
  PHONE_NUMBER = 'phoneNumber',
  /** column name */
  PHONE_NUMBER_VERIFIED = 'phoneNumberVerified',
  /** column name */
  TICKET = 'ticket',
  /** column name */
  TICKET_EXPIRES_AT = 'ticketExpiresAt',
  /** column name */
  TOTP_SECRET = 'totpSecret',
  /** column name */
  UPDATED_AT = 'updatedAt'
}

type GQL_USERS_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_USERS_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_USERS_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_USERS_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_USERS_DELETE_KEY_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_USERS_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_USERS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_USERS_BOOL_EXP;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
type GQL_UUID_COMPARISON_EXP = {
  _eq: InputMaybe<Scalars['uuid']['input']>;
  _gt: InputMaybe<Scalars['uuid']['input']>;
  _gte: InputMaybe<Scalars['uuid']['input']>;
  _in: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['uuid']['input']>;
  _lte: InputMaybe<Scalars['uuid']['input']>;
  _neq: InputMaybe<Scalars['uuid']['input']>;
  _nin: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
type GQL_VIRUS = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: GQL_FILES;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
type GQL_VIRUS_USER_SESSION_ARGS = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
type GQL_VIRUS_AGGREGATE = {
  __typename?: 'virus_aggregate';
  aggregate: Maybe<GQL_VIRUS_AGGREGATE_FIELDS>;
  nodes: Array<GQL_VIRUS>;
};

/** aggregate fields of "storage.virus" */
type GQL_VIRUS_AGGREGATE_FIELDS = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<GQL_VIRUS_MAX_FIELDS>;
  min: Maybe<GQL_VIRUS_MIN_FIELDS>;
};


/** aggregate fields of "storage.virus" */
type GQL_VIRUS_AGGREGATE_FIELDS_COUNT_ARGS = {
  columns: InputMaybe<Array<GQL_VIRUS_SELECT_COLUMN>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
type GQL_VIRUS_APPEND_INPUT = {
  userSession: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
type GQL_VIRUS_BOOL_EXP = {
  _and: InputMaybe<Array<GQL_VIRUS_BOOL_EXP>>;
  _not: InputMaybe<GQL_VIRUS_BOOL_EXP>;
  _or: InputMaybe<Array<GQL_VIRUS_BOOL_EXP>>;
  createdAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  file: InputMaybe<GQL_FILES_BOOL_EXP>;
  fileId: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  filename: InputMaybe<GQL_STRING_COMPARISON_EXP>;
  id: InputMaybe<GQL_UUID_COMPARISON_EXP>;
  updatedAt: InputMaybe<GQL_TIMESTAMPTZ_COMPARISON_EXP>;
  userSession: InputMaybe<GQL_JSONB_COMPARISON_EXP>;
  virus: InputMaybe<GQL_STRING_COMPARISON_EXP>;
};

/** unique or primary key constraints on table "storage.virus" */
enum GQL_VIRUS_CONSTRAINT {
  /** unique or primary key constraint on columns "id" */
  VIRUS_PKEY = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
type GQL_VIRUS_DELETE_AT_PATH_INPUT = {
  userSession: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
type GQL_VIRUS_DELETE_ELEM_INPUT = {
  userSession: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
type GQL_VIRUS_DELETE_KEY_INPUT = {
  userSession: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
type GQL_VIRUS_INSERT_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  file: InputMaybe<GQL_FILES_OBJ_REL_INSERT_INPUT>;
  fileId: InputMaybe<Scalars['uuid']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userSession: InputMaybe<Scalars['jsonb']['input']>;
  virus: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
type GQL_VIRUS_MAX_FIELDS = {
  __typename?: 'virus_max_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  fileId: Maybe<Scalars['uuid']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  virus: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
type GQL_VIRUS_MIN_FIELDS = {
  __typename?: 'virus_min_fields';
  createdAt: Maybe<Scalars['timestamptz']['output']>;
  fileId: Maybe<Scalars['uuid']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  updatedAt: Maybe<Scalars['timestamptz']['output']>;
  virus: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
type GQL_VIRUS_MUTATION_RESPONSE = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GQL_VIRUS>;
};

/** on_conflict condition type for table "storage.virus" */
type GQL_VIRUS_ON_CONFLICT = {
  constraint: GQL_VIRUS_CONSTRAINT;
  update_columns: Array<GQL_VIRUS_UPDATE_COLUMN>;
  where: InputMaybe<GQL_VIRUS_BOOL_EXP>;
};

/** Ordering options when selecting data from "storage.virus". */
type GQL_VIRUS_ORDER_BY = {
  createdAt: InputMaybe<GQL_ORDER_BY>;
  file: InputMaybe<GQL_FILES_ORDER_BY>;
  fileId: InputMaybe<GQL_ORDER_BY>;
  filename: InputMaybe<GQL_ORDER_BY>;
  id: InputMaybe<GQL_ORDER_BY>;
  updatedAt: InputMaybe<GQL_ORDER_BY>;
  userSession: InputMaybe<GQL_ORDER_BY>;
  virus: InputMaybe<GQL_ORDER_BY>;
};

/** primary key columns input for table: storage.virus */
type GQL_VIRUS_PK_COLUMNS_INPUT = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
type GQL_VIRUS_PREPEND_INPUT = {
  userSession: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
enum GQL_VIRUS_SELECT_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  FILE_ID = 'fileId',
  /** column name */
  FILENAME = 'filename',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  USER_SESSION = 'userSession',
  /** column name */
  VIRUS = 'virus'
}

/** input type for updating data in table "storage.virus" */
type GQL_VIRUS_SET_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  fileId: InputMaybe<Scalars['uuid']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userSession: InputMaybe<Scalars['jsonb']['input']>;
  virus: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
type GQL_VIRUS_STREAM_CURSOR_INPUT = {
  /** Stream column input with initial value */
  initial_value: GQL_VIRUS_STREAM_CURSOR_VALUE_INPUT;
  /** cursor ordering */
  ordering: InputMaybe<GQL_CURSOR_ORDERING>;
};

/** Initial value of the column from where the streaming should start */
type GQL_VIRUS_STREAM_CURSOR_VALUE_INPUT = {
  createdAt: InputMaybe<Scalars['timestamptz']['input']>;
  fileId: InputMaybe<Scalars['uuid']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  updatedAt: InputMaybe<Scalars['timestamptz']['input']>;
  userSession: InputMaybe<Scalars['jsonb']['input']>;
  virus: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
enum GQL_VIRUS_UPDATE_COLUMN {
  /** column name */
  CREATED_AT = 'createdAt',
  /** column name */
  FILE_ID = 'fileId',
  /** column name */
  FILENAME = 'filename',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updatedAt',
  /** column name */
  USER_SESSION = 'userSession',
  /** column name */
  VIRUS = 'virus'
}

type GQL_VIRUS_UPDATES = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<GQL_VIRUS_APPEND_INPUT>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<GQL_VIRUS_DELETE_AT_PATH_INPUT>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<GQL_VIRUS_DELETE_ELEM_INPUT>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<GQL_VIRUS_DELETE_KEY_INPUT>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<GQL_VIRUS_PREPEND_INPUT>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GQL_VIRUS_SET_INPUT>;
  /** filter the rows which have to be updated */
  where: GQL_VIRUS_BOOL_EXP;
};
