export function invariantChecker(
  condition: any,
  message: string,
  status = 400
): asserts condition {
  if (!condition) {
    throw new Response(message, { status });
  }
}
