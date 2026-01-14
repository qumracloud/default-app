const GRAPHQL_URL = "https://api.qumra.cloud/graphql";


export async function fetchQuery<TResponse = any, TVariables = any, TBody = any>(
  options: FetchClientOptions<TVariables, TBody>
): Promise<TResponse> {
  const {
    url = GRAPHQL_URL,
    method = "POST",
    headers = {},
    query,
    variables,
    body,
  } = options;

  const isGraphQL = !!query;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body:
      method === "GET"
        ? undefined
        : JSON.stringify(
            isGraphQL
              ? { query, variables }
              : body
          ),
  });

  const json = await res.json();

  if (json?.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json;
}
