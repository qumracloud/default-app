import type { QumraClient } from "sdk/client";
import { verifyActionHmac } from "../helpers/verify-hmac-action";
import { getAdminGraphql } from "./get-admin-graphql";

export async function handleAdminPostAuth(
  request: Request,
  client: QumraClient
): Promise<AdminAuthPostResult> {
  const payload = await request.json();

  const {
    isValid,
    topic,
    store,
    storeId,
  } = verifyActionHmac(request.headers, client.secretKey);

  if (!isValid) {
    throw new Error("Invalid HMAC");
  }

  const session = await client.sessionStorage.session.findUnique({
    where: { store },
  });

  if (!session) {
    throw new Error("Session not found");
  }

  return {
    admin: getAdminGraphql(client, session, store),
    session,
    payload,
    topic,
    store,
    storeId,
  };
}