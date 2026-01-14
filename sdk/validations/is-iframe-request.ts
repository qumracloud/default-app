export function isIframeRequest(request: Request): boolean {
  const secFetchDest = request.headers.get("sec-fetch-dest");
  const secFetchMode = request.headers.get("sec-fetch-mode");
  const secFetchSite = request.headers.get("sec-fetch-site");

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
