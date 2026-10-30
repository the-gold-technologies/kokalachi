import { getSiteConfig } from "@/lib/content";

// Rules from CMS → SEO → Sitemap & Robots; cached and refreshed whenever that page is saved
export const revalidate = 3600;

export async function GET() {
  const site = await getSiteConfig();
  // No rules in the CMS means no robots.txt, which crawlers read as "everything allowed"
  if (!site.robotsTxt?.trim()) return new Response("Not found", { status: 404 });
  return new Response(site.robotsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
