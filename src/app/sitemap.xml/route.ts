import { getBlogPosts, getPageSeoRows, getSiteConfig, getTrips } from "@/lib/content";

// CMS → SEO → Sitemap & Robots decides what is served here: nothing when the sitemap is switched
// off, the uploaded XML when there is one, otherwise a sitemap built from the CMS content below.
export const revalidate = 3600;

const SITE_URL = "https://kokalachi.com";

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const xmlResponse = (body: string) =>
  new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });

export async function GET() {
  const site = await getSiteConfig();
  if (!site.sitemapEnabled) return new Response("Sitemap disabled", { status: 404 });
  if (site.sitemapCustomContent?.trim()) return xmlResponse(site.sitemapCustomContent);

  const [pages, trips, posts] = await Promise.all([getPageSeoRows(), getTrips(), getBlogPosts()]);

  const urls: { path: string; priority: string; lastmod?: string }[] = [
    ...pages
      .filter((page) => !page.noIndex)
      .map((page) => ({
        path: page.slug === "home" ? "" : `/${page.slug}`,
        priority: page.slug === "home" ? "1.0" : "0.8",
      })),
    ...trips.filter((trip) => !trip.seo.noIndex).map((trip) => ({ path: `/journeys/${trip.slug}`, priority: "0.7" })),
    ...posts
      .filter((post) => !post.seo.noIndex)
      .map((post) => ({ path: `/blogs/${post.slug}`, priority: "0.6", lastmod: post.publishedAt })),
  ];

  const body = urls
    .map(
      (url) =>
        `  <url>\n    <loc>${xmlEscape(SITE_URL + url.path)}</loc>\n` +
        (url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>\n` : "") +
        `    <changefreq>weekly</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
  );
}
