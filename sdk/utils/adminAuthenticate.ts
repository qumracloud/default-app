import { isBotRequest } from "sdk/validations/is-bot-request";
import { handleAdminGetAuth } from "./handle-admin-get-auth";
import { handleAdminPostAuth } from "./handle-admin-post-auth";

export async function adminAuthenticate({
  request,
  client,
}: AdminAuthParams): Promise<AdminAuthResult> {
  //! TODO checker logic
  isBotRequest(request);

  if (request.method === "GET") {
    return handleAdminGetAuth(request, client);
  }

  if (request.method === "POST") {
    return handleAdminPostAuth(request, client);
  }

  throw new Error(`Method ${request.method} not supported`);
}
