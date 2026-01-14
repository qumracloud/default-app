export function isIframeRequest(request: Request): boolean {
  const url = new URL(request.url);

  const secFetchDest = request.headers.get("sec-fetch-dest");
  const secFetchMode = request.headers.get("sec-fetch-mode");
  const secFetchSite = request.headers.get("sec-fetch-site");
  const embedded  =  url.searchParams.get("embedded") === "1";

  if (embedded) return true;

  // ✅ Browsers حديثة
  if (secFetchDest === "iframe") {
    return true;
  }

  // ❌ غالبًا iframe داخل موقع تاني
  if (
    secFetchMode === "navigate" &&
    secFetchSite === "cross-site"
  ) {
    return true;
  }

   throw new Error("Iframe requests are not allowed");;
}
