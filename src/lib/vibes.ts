import { Compass, Flame, Heart, Mountain, Coffee, Palmtree, type LucideIcon } from "lucide-react";
import type { TripCardData } from "@/data/trips";

// Filter labels come from the CMS (Journeys page → JourneysFilterSection); the icons stay in code.
// Unknown ids fall back to the compass.
const VIBE_ICONS: Record<string, LucideIcon> = {
  All: Compass,
  Trending: Flame,
  FirstTimers: Compass,
  WomenOnly: Heart,
  Adventure: Mountain,
  SlowTravel: Coffee,
  BeachEscape: Palmtree,
};

export const vibeIcon = (id: string): LucideIcon => VIBE_ICONS[id] ?? Compass;

// Women Only is drawn as a filled red heart
export const isHeartVibe = (id: string) => id === "WomenOnly";

// "All" shows everything and "Trending" the first six (trips arrive sorted by next departure)
export function filterTripsByVibe(trips: TripCardData[], id: string): TripCardData[] {
  if (id === "All") return trips;
  if (id === "Trending") return trips.slice(0, 6);
  return trips.filter((card) => card.categories.includes(id));
}
