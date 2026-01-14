import crypto from "crypto";

/**
 * Verify HMAC signature for incoming HTTP requests
 * - Supports query string and headers
 * - Uses HMAC-SHA256
 */
export function verifyRequestHmac(
  request: Request,
  secretKey: string
): boolean {
  const url = new URL(request.url);

  /* =========================================
   * 1️⃣ Collect query parameters
   * ========================================= */
  const queryParams = new URLSearchParams(url.search);

  /* =========================================
   * 2️⃣ Extract HMAC (query → headers fallback)
   * ========================================= */
  const hmacFromQuery = queryParams.get("hmac");

  const hmacFromHeader =
    request.headers.get("hmac") ||
    request.headers.get("x-hmac") ||
    request.headers.get("x-qumra-hmac");

  const receivedHmac = hmacFromQuery || hmacFromHeader;

  if (!receivedHmac) {
    return false;
  }

  /* =========================================
   * 3️⃣ Remove HMAC from signed data
   * ========================================= */
  if (hmacFromQuery) {
    queryParams.delete("hmac");
  }

  /* =========================================
   * 4️⃣ Generate expected HMAC
   * ========================================= */
  const expectedHmac = crypto
    .createHmac("sha256", secretKey)
    .update(queryParams.toString())
    .digest("hex");

  /* =========================================
   * 5️⃣ Constant-time comparison
   * ========================================= */
  return (
    expectedHmac.length === receivedHmac.length &&
    crypto.timingSafeEqual(
      Buffer.from(expectedHmac),
      Buffer.from(receivedHmac)
    )
  );
}
