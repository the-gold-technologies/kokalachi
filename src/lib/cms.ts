// Server-side reader for the Kokalachi CMS (kokalachi-cms) REST API.
//
// Every response lands in Next's Data Cache under a tag, so pages render from cache and
// the CMS is only queried again when a tag goes stale. The CMS pings /api/revalidate with
// the tag right after an admin saves, and REVALIDATE_SECONDS is the safety net in case a
// ping is missed. If the CMS is down during a refresh, visitors keep getting the last good copy.

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

// Also rolls departure dates over: past dates drop off the site within the hour
export const REVALIDATE_SECONDS = 3600;

// Must match WebsiteTag in kokalachi-cms/src/lib/revalidateWebsite.ts
export const CmsTag = {
  trips: "trips",
  blogs: "blogs",
  site: "site", // global config & navigation
  page: (slug: string) => `page:${slug}`,
};

export type CmsResponse<T, S = undefined> = { success: true; data: T; seo: S };

export async function cmsGet<T, S = undefined>(path: string, tags: string[]): Promise<CmsResponse<T, S>> {
  if (!CMS_URL) throw new Error("NEXT_PUBLIC_CMS_URL is not set");

  const res = await fetch(`${CMS_URL.replace(/\/$/, "")}/api${path}`, {
    next: { tags, revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`[cms] GET ${path} responded ${res.status}`);

  const json = await res.json();
  if (!json.success) throw new Error(`[cms] GET ${path} failed: ${json.error}`);
  return json;
}

// Server-to-server POST for submissions (bookings, enquiries). Never cached.
export async function cmsPost<T>(path: string, body: unknown, clientIp?: string): Promise<T> {
  const secret = process.env.CMS_SHARED_SECRET;
  if (!CMS_URL || !secret) throw new Error("NEXT_PUBLIC_CMS_URL or CMS_SHARED_SECRET is not set");

  const res = await fetch(`${CMS_URL.replace(/\/$/, "")}/api${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cms-secret": secret,
      ...(clientIp ? { "x-client-ip": clientIp } : {}),
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success) {
    throw new Error(`[cms] POST ${path} responded ${res.status}: ${json?.error ?? "no body"}`);
  }
  return json.data;
}
