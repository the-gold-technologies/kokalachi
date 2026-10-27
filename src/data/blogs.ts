// Blog types and helpers. Posts are managed in the CMS (Blogs) and read by src/lib/content.ts.
// Inside any `text`, write [label](/path) to add a link.

import type { PageSeo } from "@/types/cms";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "tip"; text: string }                       // sticky-note tip
  | { type: "quote"; text: string }                     // big handwritten pull quote
  | { type: "list"; items: { title?: string; text: string }[]; style?: "check" | "cards" }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "postcard"; text: string; signature: string };

export interface BlogSection {
  id: string;              // anchor for the table of contents
  number?: number;         // numbered chapters show a big "01" marker
  kicker?: string;         // short label shown in the table of contents
  title: string;
  blocks: BlogBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  heroLead: string;        // hero headline, split so the second half can be handwritten
  heroAccent: string;
  excerpt: string;
  category: string;
  publishedAt: string;     // "YYYY-MM-DD"
  author: string;
  heroImage: string;
  heroAlt: string;
  ogImage?: string;        // optional link-preview image; left empty, it's made from heroImage
  marginNote?: string;     // handwritten note beside the intro
  intro: string[];
  sections: BlogSection[];
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    primaryText: string;
    primaryUrl: string;
    secondaryText: string;
    secondaryUrl: string;
  };
  share: { title: string; note: string; buttonText: string }; // sidebar "send this to a friend" card
  sidebarBadge?: string;    // e.g. "First-timer pick"
  relatedCategory?: string; // trip category to suggest at the end, e.g. "FirstTimers"
  seo: PageSeo;
}

// Link-preview image (WhatsApp, LinkedIn…): a 1200×630 JPG, since the full hero is too heavy
// and Unsplash's auto=format can hand crawlers AVIF, which WhatsApp won't show
export function getBlogOgImage(post: BlogPost): string {
  if (post.ogImage) return post.ogImage;
  if (post.heroImage.startsWith("https://images.unsplash.com/")) {
    return `${post.heroImage.split("?")[0]}?fm=jpg&fit=crop&w=1200&h=630&q=75`;
  }
  return post.heroImage;
}

// ~200 words a minute, rounded up
export function getReadingTime(post: BlogPost): number {
  const blockText = (block: BlogBlock) =>
    block.type === "list"
      ? block.items.map((item) => `${item.title ?? ""} ${item.text}`).join(" ")
      : block.type === "image"
        ? block.caption
        : block.text;
  const text = [
    ...post.intro,
    ...post.sections.flatMap((section) => [section.title, ...section.blocks.map(blockText)]),
  ].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

// "21 Oct 2026"
export function formatBlogDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
