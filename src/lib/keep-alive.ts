// Supabase's free plan pauses a project after about a week without database
// activity. The CMS database backs this site now, so once a day we make one
// uncached CMS read that queries it, which keeps it awake.
const INTERVAL_MS = 24 * 60 * 60 * 1000 // once a day
const FIRST_PING_DELAY_MS = 60 * 1000 // shortly after the server starts

export async function pingDatabase() {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL
  if (!cmsUrl) throw new Error("NEXT_PUBLIC_CMS_URL is not set")
  const res = await fetch(`${cmsUrl.replace(/\/$/, "")}/api/seo`, { cache: "no-store" })
  if (!res.ok) throw new Error(`CMS responded ${res.status}`)
  return { checkedAt: new Date().toISOString() }
}

async function safePing() {
  try {
    const { checkedAt } = await pingDatabase()
    console.log(`[keep-alive] Database ping ok at ${checkedAt}`)
  } catch (error) {
    console.error("[keep-alive] Database ping failed:", error)
  }
}

// Runs inside the long-lived Node server (started from instrumentation.ts)
export function startKeepAlive() {
  // unref() so the timers never keep the process alive on their own
  setTimeout(safePing, FIRST_PING_DELAY_MS).unref()
  setInterval(safePing, INTERVAL_MS).unref()
}
