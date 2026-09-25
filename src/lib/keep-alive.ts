import { prisma } from "@/lib/prisma"

// Supabase's free plan pauses a project after about a week without database
// activity. A small real query once a day keeps it awake.
const INTERVAL_MS = 24 * 60 * 60 * 1000 // once a day
const FIRST_PING_DELAY_MS = 60 * 1000 // shortly after the server starts

export async function pingDatabase() {
  const bookings = await prisma.booking.count()
  return { bookings, checkedAt: new Date().toISOString() }
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
