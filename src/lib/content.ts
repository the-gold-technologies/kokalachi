// Website content, read from the CMS and mapped into the shapes the components use.
// Each getter is wrapped in React's cache() so a page and its layout share one result per render.

import { cache } from "react";
import type { Metadata } from "next";
import { cmsGet, CmsTag } from "@/lib/cms";
import { sortTripCards, type Departure, type TripCardData } from "@/data/trips";
import type { BlogPost, BlogSection } from "@/data/blogs";
import type { CommunityTrip, StoryEntry } from "@/data/community";
import type { BlogsSections, PageSections, PageSeo, SiteConfig } from "@/types/cms";

// ---------- Trips ----------

interface CmsDeparture {
  id: string;
  startDate: string;
  endDate: string;
  price: number | null;
  originalPrice: number | null;
  spotsLeft: number;
  status: string;
  label: string | null;
  note: string | null;
}

interface CmsTrip {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  location: string;
  duration: string;
  rating: number;
  price: number;
  originalPrice: number | null;
  gstAmount: number;
  gstIncluded: boolean;
  tcsPercent: number | null;
  offerLabel: string | null;
  image: string;
  category: string;
  categories: string[] | null;
  tag: string | null;
  tagColor: string | null;
  hook: string | null;
  groupSize: string;
  overview: string[] | null;
  itinerary: TripCardData["tourPackage"]["itinerary"] | null;
  inclusions: string[] | null;
  exclusions: string[] | null;
  meals: string[] | null;
  whatToPack: string[] | null;
  weather: string[] | null;
  faqs: { question: string; answer: string }[] | null;
  highlights: { icon: string; title: string; description: string }[] | null;
  gallery: string[] | null;
  vibeTags: string[] | null;
  isFeatured: boolean;
  order: number;
  metaTitle: string | null;
  metaDescription: string | null;
  targetKeywords: string | null;
  noIndex: boolean;
  schema: string | null;
  departures: CmsDeparture[];
}

const orUndefined = <T,>(value: T | null): T | undefined => value ?? undefined;

function toDeparture(d: CmsDeparture): Departure {
  return {
    id: d.id,
    startDate: d.startDate,
    endDate: d.endDate,
    price: orUndefined(d.price),
    originalPrice: orUndefined(d.originalPrice),
    spotsLeft: d.spotsLeft,
    status: d.status as Departure["status"],
    label: orUndefined(d.label),
    note: orUndefined(d.note),
  };
}

function toTripCard(t: CmsTrip): TripCardData {
  const gallery = t.gallery ?? [];
  // A price of 0 in the CMS means "not announced yet": the site shows "Price TBA" and takes reservations
  const price = t.price > 0 ? t.price : "TBA";
  return {
    id: t.id,
    slug: t.slug,
    destination: t.location,
    locationTag: `📍 ${t.location}`,
    duration: t.duration,
    groupSize: t.groupSize,
    price: typeof price === "number" ? price.toLocaleString("en-IN") : price,
    vibeTags: t.vibeTags ?? [],
    categories: t.categories ?? [],
    featured: t.isFeatured,
    // The CMS gallery doubles as the card slideshow; the first three keep cards light
    images: gallery.length > 0 ? gallery.slice(0, 3) : [t.image],
    tourPackage: {
      id: t.id,
      title: t.title,
      subtitle: orUndefined(t.subtitle),
      location: t.location,
      duration: t.duration,
      rating: t.rating,
      price,
      originalPrice: t.originalPrice,
      image: t.image,
      category: t.category,
      tag: t.tag,
      tagColor: t.tagColor,
      departures: t.departures.map(toDeparture),
      hook: orUndefined(t.hook),
      overview: t.overview ?? [],
      itinerary: t.itinerary ?? [],
      inclusions: t.inclusions ?? [],
      exclusions: t.exclusions ?? [],
      meals: t.meals ?? [],
      whatToPack: t.whatToPack ?? [],
      weather: t.weather ?? [],
      faqs: t.faqs ?? [],
      highlights: t.highlights ?? [],
      gstAmount: t.gstAmount,
      gstIncluded: t.gstIncluded,
      tcsPercent: orUndefined(t.tcsPercent),
      offerLabel: orUndefined(t.offerLabel),
      gallery,
    },
    seo: {
      metaTitle: t.metaTitle,
      metaDescription: t.metaDescription,
      targetKeywords: t.targetKeywords,
      noIndex: t.noIndex,
      schema: t.schema,
    },
  };
}

// Featured first, then soonest bookable departure (see sortTripCards)
export const getTrips = cache(async (): Promise<TripCardData[]> => {
  const { data } = await cmsGet<CmsTrip[]>("/trips", [CmsTag.trips]);
  return sortTripCards([...data].sort((a, b) => a.order - b.order).map(toTripCard));
});

export const getTrip = cache(async (slug: string): Promise<TripCardData | undefined> => {
  const trips = await getTrips();
  return trips.find((trip) => trip.slug === slug);
});

// ---------- Blogs ----------

interface CmsBlogPost {
  slug: string;
  title: string;
  heroLead: string;
  heroAccent: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  ogImage: string | null;
  marginNote: string | null;
  intro: string[] | null;
  sections: BlogSection[] | null;
  ctaEyebrow: string | null;
  ctaTitle: string | null;
  ctaText: string | null;
  ctaPrimaryBtnText: string | null;
  ctaPrimaryBtnUrl: string | null;
  ctaSecondaryBtnText: string | null;
  ctaSecondaryBtnUrl: string | null;
  shareBtnText: string | null;
  relatedCategory: string | null;
  sidebarBadge: string | null;
  shareTitle: string | null;
  shareNote: string | null;
  isPublished: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  targetKeywords: string | null;
  canonicalUrl: string | null;
  noIndex: boolean;
  schema: string | null;
}

function toBlogPost(p: CmsBlogPost): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    heroLead: p.heroLead,
    heroAccent: p.heroAccent,
    excerpt: p.excerpt,
    category: p.category,
    publishedAt: p.publishedAt,
    author: p.author,
    heroImage: p.heroImage,
    heroAlt: p.heroAlt,
    ogImage: orUndefined(p.ogImage),
    marginNote: orUndefined(p.marginNote),
    intro: p.intro ?? [],
    sections: p.sections ?? [],
    cta: {
      eyebrow: p.ctaEyebrow ?? "",
      title: p.ctaTitle ?? "",
      text: p.ctaText ?? "",
      primaryText: p.ctaPrimaryBtnText ?? "",
      primaryUrl: p.ctaPrimaryBtnUrl ?? "",
      secondaryText: p.ctaSecondaryBtnText ?? "",
      secondaryUrl: p.ctaSecondaryBtnUrl ?? "",
    },
    share: { title: p.shareTitle ?? "", note: p.shareNote ?? "", buttonText: p.shareBtnText ?? "" },
    sidebarBadge: orUndefined(p.sidebarBadge),
    relatedCategory: orUndefined(p.relatedCategory),
    seo: {
      title: p.metaTitle,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      targetKeywords: p.targetKeywords,
      canonicalUrl: p.canonicalUrl,
      noIndex: p.noIndex,
      schema: p.schema,
    },
  };
}

const getBlogsListing = cache(() =>
  cmsGet<{ sections: BlogsSections; blogs: { slug: string }[] }, PageSeo>("/blogs?isPublished=true", [
    CmsTag.blogs,
    CmsTag.page("blogs"),
  ]),
);

// The listing only carries card fields, so each post is fetched in full (reading time needs the body).
// Every response is cached under the "blogs" tag, so this runs once per blog edit, not per visit.
export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const { data } = await getBlogsListing();
  const posts = await Promise.all(
    data.blogs.map(({ slug }) => cmsGet<CmsBlogPost>(`/blogs/${encodeURIComponent(slug)}`, [CmsTag.blogs])),
  );
  return posts
    .map(({ data: post }) => post)
    .filter((post) => post.isPublished)
    .map(toBlogPost)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)); // newest first
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
});

export const getBlogsPage = cache(async () => {
  const [{ data }, seo] = await Promise.all([getBlogsListing(), getPageSeo("blogs")]);
  return { sections: data.sections, seo };
});

// ---------- Pages ----------

// Full SEO rows for every page (CMS → SEO → Pages): adds the Open Graph fields and heading tag
// that the page endpoints leave out. Cached under every page's tag, so any page SEO save refreshes it.
const PAGE_SLUGS = ["home", "about", "contact", "journeys", "faqs", "community", "blogs", "terms", "privacy-policy"];

export const getPageSeoRows = cache(async () => {
  const { data } = await cmsGet<(PageSeo & { slug: string })[]>("/seo?type=pages", PAGE_SLUGS.map(CmsTag.page));
  return data;
});

export const getPageSeo = cache(async (slug: string): Promise<PageSeo | null> => {
  const rows = await getPageSeoRows();
  return rows.find((row) => row.slug === slug) ?? null;
});

// Endpoints that wrap their sections as { sections: {...} } instead of returning them directly
const NESTED_SECTION_PAGES = new Set<keyof PageSections>(["contact", "journeys", "faqs"]);

export const getPage = cache(
  async <K extends keyof PageSections>(slug: K): Promise<{ sections: PageSections[K]; seo: PageSeo | null }> => {
    const [{ data }, seo] = await Promise.all([
      cmsGet<Record<string, unknown>, PageSeo | null>(`/${slug}`, [CmsTag.page(slug)]),
      getPageSeo(slug),
    ]);
    const sections = (NESTED_SECTION_PAGES.has(slug) ? data.sections : data) as PageSections[K];
    if (!sections || Object.keys(sections).length === 0) {
      throw new Error(`[cms] Page "${slug}" has no sections yet. Save it once in the CMS.`);
    }
    return { sections, seo };
  },
);

// ---------- Community ----------

export const getCommunityTrips = cache(async (): Promise<CommunityTrip[]> => {
  const { sections } = await getPage("community");
  return sections.CommunityChaptersSection.chapters;
});

export const getAllStories = cache(async (): Promise<StoryEntry[]> => {
  const trips = await getCommunityTrips();
  return trips.flatMap((trip) => trip.stories.map((story) => ({ trip, story })));
});

// Live numbers for the homepage and /community, so nothing is typed in by hand
export async function getCommunityStats() {
  const [trips, stories] = await Promise.all([getCommunityTrips(), getAllStories()]);
  return {
    storyCount: stories.length,
    travellerCount: stories.reduce((n, { story }) => n + story.authors.length, 0),
    momentCount: trips.reduce((n, trip) => n + trip.media.length, 0),
    countryCount: new Set(trips.map((trip) => trip.country)).size,
  };
}

// ---------- Site ----------

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  const { data } = await cmsGet<SiteConfig>("/seo", [CmsTag.site]);
  return data;
});

// ---------- SEO ----------

// Metadata from a CMS SEO block. CMS titles are complete ("All Journeys | Kokalachi"),
// so they bypass the root layout's "%s | Kokalachi" template.
// contentImage: a photo from the page's own CMS content, used when SEO sets no share image.
export function seoMetadata(seo: PageSeo | null | undefined, path: string, contentImage?: string): Metadata {
  if (!seo) return {};
  const title = seo.metaTitle || seo.title;
  const description = seo.metaDescription || undefined;
  const ogTitle = seo.ogTitle || title;
  const ogDescription = seo.ogDescription || description;
  const ogImage = seo.ogImage || seo.featuredImage || contentImage;
  return {
    ...(title ? { title: { absolute: title } } : {}),
    description,
    keywords: seo.targetKeywords || undefined,
    alternates: { canonical: seo.canonicalUrl || path },
    ...(seo.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      ...(ogTitle ? { title: ogTitle } : {}),
      description: ogDescription,
      url: path,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      ...(ogTitle ? { title: ogTitle } : {}),
      description: ogDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// The hero headline tag chosen in the CMS ("Hero Headline Tag"). Older records store
// { heroHeadingTag: "h1" }, so both shapes are read; anything else falls back to h1.
export function headingTag(options: unknown): HeadingTag {
  const value =
    typeof options === "string"
      ? options
      : (options as { heroHeadingTag?: unknown } | null)?.heroHeadingTag;
  return typeof value === "string" && /^h[1-6]$/.test(value) ? (value as HeadingTag) : "h1";
}

// JSON-LD from a CMS "schema" field, or null when it is empty or not valid JSON
export function parseSchema(schema: string | null | undefined): object | null {
  if (!schema) return null;
  try {
    return JSON.parse(schema);
  } catch {
    console.error("[cms] Ignoring invalid JSON-LD schema");
    return null;
  }
}
