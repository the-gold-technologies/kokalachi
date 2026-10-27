import { headers } from "next/headers"

// The visitor's IP, so the CMS rate-limits each visitor rather than this server
export async function getClientIp() {
  const h = await headers()
  return h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || undefined
}
