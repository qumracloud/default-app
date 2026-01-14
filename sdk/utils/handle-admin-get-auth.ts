import type { QumraClient } from "sdk/client";
import { verifyRequestHmac } from "../helpers/verify-request-hmac";
import { verifyJwt } from "../helpers/verify-jwt";
import { AUTH_URL } from "sdk/constant/api.constant";
import { getAdminGraphql } from "./get-admin-graphql";

export async function handleAdminGetAuth(
  request: Request,
  client: QumraClient
): Promise<AdminAuthGetResult | Response> {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const store = searchParams.get("store");
  const code = searchParams.get("code");
  const token = searchParams.get("id_token");

  if (!store) {
    throw new Error("Invalid store");
  }

  const redirectUrl = `https://app.qumra.cloud/store/${store?.split(".")[0]}`;

  // 🔐 Verify HMAC
  if (!verifyRequestHmac(request, client.secretKey)) {
    throw new Error("Hmac is invalid");
  }

  // 🗄️ Check existing session
  console.log("🚀 ~ handleAdminGetAuth ~ DATA @@##:", await client.sessionStorage.session.findMany())
  const session = await client.sessionStorage.session.findUnique({
    where: { store },
  });
  console.log("🚀 ~ handleAdminGetAuth ~ where.store:", store)
  console.log("🚀 ~ handleAdminGetAuth ~ session:", session)
  
  if (session) {
    await client.sessionStorage.session.update({
      where: { store },
      data: {
        isOnline: true,
        lastSeenAt: new Date(),
      },
    });
    
      // 🪪 Optional JWT
    const decodedToken = verifyJwt(token, client.secretKey);
     if (!decodedToken) {
       throw new Error("Token is invalid");
     }
   
    
    return {
      admin: getAdminGraphql(client, session, store),
      session,
      data: decodedToken,
      store
    };
  }

  if (!code) {
    throw new Error("Authorization code is missing");
  }

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

  if (!authResponse.data.access_token) {
    throw new Error("Access token is missing");
  }

  await client.sessionStorage.session.create({
    data: {
      store,
      accessToken: authResponse.data.access_token,
      isOnline: true,
      createdAt: new Date(),
      lastSeenAt: new Date(),
    },
  });

  throw Response.redirect(authResponse.data.callbackUrl, 302);
}