function failIfBot(condition: boolean, reason: string): void {
  if (condition) {
    throw new Error(`Bot request blocked: ${reason}`);
  }
}

function isBotUserAgent(userAgent: string): boolean {
  const botUserAgents = [
    "bot",
    "crawler",
    "spider",
    "curl",
    "wget",
    "python-requests",
    "postman",
    "httpclient",
  ];

  const ua = userAgent.toLowerCase();

//    if (process.env.NODE_ENV !== "production" && ua.includes("postman")) {
//     return false;
//   }

  return botUserAgents.some((bot) => ua.includes(bot));
}


export function isBotRequest(request: Request): boolean {
  const headers = request.headers;

  const userAgent = headers.get("user-agent") ?? '';
  const accept = headers.get("accept");

  failIfBot(!userAgent, "Missing User-Agent");
  failIfBot(isBotUserAgent(userAgent), "Bot User-Agent detected");
  failIfBot(!accept, "Missing Accept header");

  return false; 
}

