import type { QumraClient } from "sdk/client";

/**
 * Creates an authenticated Admin GraphQL client for a specific store.
 *
 * @param {QumraClient} client
 *  Base Qumra SDK client used to perform HTTP requests.
 *
 * @param {Object} session
 *  Current admin session containing authentication credentials.
 *
 * @param {string} session.accessToken
 *  Access token used to authorize admin GraphQL requests.
 *
 * @param {string} store
 *  Store domain (e.g. "example.qumra.com") used to build the GraphQL endpoint.
 *
 * @returns {AdminGraphQL}
 *  An admin-scoped GraphQL client with authentication headers applied.
 */
export function getAdminGraphql(
  client: QumraClient,
  session: { accessToken: string },
  store: string
): AdminGraphQL {
  const adminRequest = client.request.bind(client);

  return {
    graphql: (query: string, variables?: any) =>
      adminRequest({
        query,
        variables,
        url: `https://${store}/api/graphql`,
        headers: {
          Authorization: session.accessToken,
        },
      }),
  };
}
