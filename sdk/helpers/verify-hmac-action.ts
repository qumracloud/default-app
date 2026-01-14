import crypto from "crypto";

/**
 * Verify HMAC signature for Qumra actions / webhooks
 * - Signature is generated from specific request headers
 * - Uses HMAC-SHA256
 */
type ActionHmacVerificationResult = {
  isValid: boolean;
  topic: string;
  store: string;
  storeId: string;
  webhookId: string;
  requestId: string;
};

export function verifyActionHmac(
  headers: Request["headers"],
  secretKey: string
): ActionHmacVerificationResult {
  /* =========================================
   * 1️⃣ Extract required headers
   * ========================================= */
  const receivedHmac = headers.get("X-Qumra-Hmac");

  if (!receivedHmac) {
    return createInvalidResult();
  }

  const topic = headers.get("X-Qumra-Topic") ?? "";
  const store = headers.get("X-Qumra-Store-Domain") ?? "";
  const storeId = headers.get("X-Qumra-Store-ID") ?? "";
  const webhookId = headers.get("X-Qumra-Webhook-Id") ?? "";
  const requestId = headers.get("X-Qumra-Request-Id") ?? "";

  /* =========================================
   * 2️⃣ Generate expected HMAC
   * ========================================= */
  const signedPayload = `${topic}${store}${storeId}${webhookId}${requestId}`;

  const expectedHmac = crypto
    .createHmac("sha256", secretKey)
    .update(signedPayload)
    .digest("hex");

  /* =========================================
   * 3️⃣ Constant-time comparison
   * ========================================= */
  const isValid =
    expectedHmac.length === receivedHmac.length &&
    crypto.timingSafeEqual(
      Buffer.from(expectedHmac),
      Buffer.from(receivedHmac)
    );

  return {
    isValid,
    topic,
    store,
    storeId,
    webhookId,
    requestId,
  };
}

/* ======================================================
 * Helpers
 * ====================================================== */

function createInvalidResult(): ActionHmacVerificationResult {
  return {
    isValid: false,
    topic: "",
    store: "",
    storeId: "",
    webhookId: "",
    requestId: "",
  };
}
