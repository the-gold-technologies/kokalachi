import type { TripCardData, TripRegion } from "@/data/trips";

// Domestic (India) or international, for the /journeys filter.
//
// Each CMS trip should carry `region: "domestic" | "international"`. Until it does, trips are
// sorted by this list of today's trips outside India (matched on the trip or destination slug);
// everything else counts as domestic. Once the CMS sends a region, that value wins.
const INTERNATIONAL_WITHOUT_CMS_REGION = new Set(["bhutan", "sri-lanka", "almaty"]);

export function tripRegion(cmsRegion: string | null | undefined, slugs: (string | null | undefined)[]): TripRegion {
  const value = cmsRegion?.trim().toLowerCase();
  if (value === "domestic" || value === "international") return value;
  return slugs.some((s) => s && INTERNATIONAL_WITHOUT_CMS_REGION.has(s)) ? "international" : "domestic";
}

export type RegionFilter = "all" | TripRegion;

export const REGION_FILTERS: { id: RegionFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "domestic", label: "Domestic" },
  { id: "international", label: "International" },
];

export const isRegionFilter = (value: string | null): value is RegionFilter =>
  REGION_FILTERS.some((r) => r.id === value);

export function filterTripsByRegion(trips: TripCardData[], region: RegionFilter): TripCardData[] {
  return region === "all" ? trips : trips.filter((trip) => trip.region === region);
}
