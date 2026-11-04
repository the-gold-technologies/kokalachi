// Trip URLs that have moved: old slug → new slug, for /journeys/<slug>.
//
// Trip slugs come from the CMS. When a slug is renamed there, add the old one here so links
// already indexed by Google or shared on WhatsApp/Instagram keep working: the trip page sends
// them to the new URL with a permanent (308) redirect, which passes the page's ranking on.
// A redirect only happens once the new slug actually exists in the CMS, so this list can go
// live before or after the slugs are renamed there.
//
// Always point an old slug straight at the current one (no chains), and never remove an entry.

export const TRIP_SLUG_REDIRECTS: Record<string, string> = {
  // SEO rename to "<destination>-group-trip" (Nov 2026)
  udaipur: "udaipur-group-trip",
  kashmir: "kashmir-group-trip",
  manali: "manali-group-trip",
  kerala: "kerala-group-trip",
  meghalaya: "meghalaya-group-trip",
  "sri-lanka": "sri-lanka-group-trip",
  bhutan: "bhutan-group-trip",
  almaty: "almaty-kazakhstan-group-trip",
};

// Where an old slug now lives, if that trip exists under its new slug
export function movedTripSlug(slug: string, currentSlugs: string[]): string | undefined {
  const target = TRIP_SLUG_REDIRECTS[slug];
  return target && currentSlugs.includes(target) ? target : undefined;
}
