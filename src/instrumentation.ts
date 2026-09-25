// Runs once when the Next.js server starts.
export async function register() {
  // Only the production Node server; skips the Edge runtime and `next dev`
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.NODE_ENV === "production") {
    const { startKeepAlive } = await import("./lib/keep-alive")
    startKeepAlive()
  }
}
