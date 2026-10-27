import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

// Called by kokalachi-cms right after an admin saves content: { tags: ["trips", "page:home"] }
export async function POST(request: NextRequest) {
  const secret = process.env.CMS_SHARED_SECRET;
  const given = request.headers.get("x-cms-secret") ?? "";
  if (!secret || given.length !== secret.length || !timingSafeEqual(Buffer.from(given), Buffer.from(secret))) {
    return Response.json({ revalidated: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const tags: unknown = body?.tags;
  if (!Array.isArray(tags) || tags.length === 0 || !tags.every((t) => typeof t === "string" && t.length <= 256)) {
    return Response.json({ revalidated: false, error: "Body must be { tags: string[] }" }, { status: 400 });
  }

  // Expire now rather than stale-while-revalidate, so the admin's next refresh shows the edit
  for (const tag of tags) revalidateTag(tag, { expire: 0 });

  return Response.json({ revalidated: true, tags, now: Date.now() });
}
