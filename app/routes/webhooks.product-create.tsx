import { authenticate } from '~/qumra.server'

export async function action({ request }: { request: Request }) {
  await authenticate.webhook(request)
  const data = await request.json()
  console.log("webhook: product/create", data)
  return Response.json({ success: true })
}
