declare type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
declare type  FetchClientOptions<TVariables = any, TBody = any> = {
  url?: string;
  method?: HttpMethod;
  headers?: Record<string, string>;

  // GraphQL
  query?: string;
  variables?: TVariables;

  // REST
  body?: TBody;
};


declare type AdminAuthParams = {
  request: Request;
  client: QumraClient;
};

declare type AdminGraphQL = {
  graphql: (query: string, variables?: any) => Promise<any>;
};

declare type AdminContext = {
  admin: AdminGraphQL;
  session: any;
  store:string
};

declare type AdminAuthGetResult = AdminContext & {
  data?: any;
};

declare type AdminAuthPostResult = AdminContext & {
  payload: any;
  topic: string;
  storeId: string;
};

declare type AdminAuthResult =
  | AdminAuthGetResult
  | AdminAuthPostResult
  | Response;