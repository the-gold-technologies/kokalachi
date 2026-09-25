import { pingDatabase } from "@/lib/keep-alive"

// Manual / external trigger for the same daily database ping that the server
// runs on its own (see src/instrumentation.ts). Useful as a backup from a
// Hostinger cron job or an uptime monitor, and for checking the database is up.
export async function GET(request: Request) {
  // When CRON_SECRET is set, callers must send "Authorization: Bearer <CRON_SECRET>"
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    return Response.json({ ok: true, ...(await pingDatabase()) })
  } catch (error) {
    console.error("[keep-alive] Database ping failed:", error)
    return Response.json({ ok: false, error: "Database unreachable" }, { status: 500 })
  }
}
