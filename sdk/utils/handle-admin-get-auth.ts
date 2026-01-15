import type { QumraClient } from "sdk/client";
import { verifyRequestHmac } from "../helpers/verify-request-hmac";
import { verifyJwt } from "../helpers/verify-jwt";
import { AUTH_URL } from "sdk/constant/api.constant";
import { getAdminGraphql } from "./get-admin-graphql";
import { isIframeRequest } from "sdk/validations/is-iframe-request";
import { invariantChecker } from "sdk/helpers/in-variant-checker";

export async function handleAdminGetAuth(
  request: Request,
  client: QumraClient
): Promise<AdminAuthGetResult | Response> {
  const url = new URL(request.url);
  const params = url.searchParams;

  const store = params.get("store");
  const code = params.get("code");
  const token = params.get("id_token");
  const operation = params.get("operation") as
    | "authorize"
    | "launch";

  invariantChecker(store, "Invalid store");
  invariantChecker(
    verifyRequestHmac(request, client.secretKey),
    "Hmac is invalid",
    401
  );

  /**
   * =========================
   * AUTHORIZE FLOW
   * =========================
   */
  if (operation === "authorize") {
    invariantChecker(code, "Authorization code is missing");

    const authResponse = await client.request<{
      data: { access_token: string; callbackUrl: string };
    }>({
      url: AUTH_URL,
      method: "POST",
      body: {
        client_id: client.apiKey,
        client_secret: client.secretKey,
        code,
      },
    });

    invariantChecker(authResponse.data.access_token, "Access token is missing");

    await client.sessionStorage.session.upsert({
      where: { store },
      update: {
        accessToken: authResponse.data.access_token,
        isOnline: true,
        lastSeenAt: new Date(),
      },
      create: {
        store,
        accessToken: authResponse.data.access_token,
        isOnline: true,
        lastSeenAt: new Date(),
      },
    });

    throw Response.redirect(authResponse.data.callbackUrl, 302);
  }

  /**
   * =========================
   * LAUNCH FLOW
   * =========================
   */
  invariantChecker(token, "ID token is missing");

  isIframeRequest(request);

  const decodedToken = verifyJwt(token, client.secretKey);
  invariantChecker(decodedToken, "Token is invalid", 401);

  const session = await client.sessionStorage.session.findUnique({
    where: { store },
  });
  invariantChecker(session, "Session not found", 404);

  return {
    admin: getAdminGraphql(client, session, store),
    session,
    data: decodedToken,
    store,
  };
}

