import type { Departure, TripCardData } from "@/data/trips";
import { formatMonth, getPastDepartures, getUpcomingDepartures } from "@/lib/departures";

// Filtering for the /trips pages: which trips are upcoming or past, and the
// destination / month / date filters at the top of those pages.

// "all" lists every trip once: upcoming ones first, then the ones that have only run in the past
export type TripListKind = "all" | "upcoming" | "past";

// "" / false means "any". month is "YYYY-MM"; date, from and to are "YYYY-MM-DD".
// destination, month and date are the dropdowns on the /trips pages. q, from, to and weekend
// come from the home page search (shown as removable chips on the /trips pages).
export interface TripFilters {
  destination: string;
  month: string;
  date: string;     // trips running on this day
  q: string;        // free-text search, e.g. "himachal"
  from: string;     // departures starting on or after this day
  to: string;       // ...and on or before this day
  weekend: boolean; // departures starting Thursday to Saturday
}

export const NO_FILTERS: TripFilters = { destination: "", month: "", date: "", q: "", from: "", to: "", weekend: false };

export const hasActiveFilters = (f: TripFilters) =>
  !!(f.destination || f.month || f.date || f.q || f.from || f.to || f.weekend);

const hasDateFilters = (f: TripFilters) => !!(f.month || f.date || f.from || f.to || f.weekend);

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// Free-text search over the destination, trip title and slug ("kerala", "himachal", "trek").
// Also matches when the search contains the destination ("kashmir valley" finds Kashmir).
export function matchesQuery(card: TripCardData, q: string): boolean {
  const query = normalize(q);
  if (!query) return true;
  const destination = normalize(card.destination);
  const haystack = normalize(`${card.destination} ${card.tourPackage.title} ${card.slug}`);
  return haystack.includes(query) || (!!destination && query.includes(destination));
}

export const isPastTrip = (card: TripCardData) => getPastDepartures(card.tourPackage).length > 0;

// Upcoming: has a future date, an "Upcoming" batch waiting for dates, or has never run yet
export function isUpcomingTrip(card: TripCardData): boolean {
  const tour = card.tourPackage;
  return getUpcomingDepartures(tour).length > 0 || !!tour.nextDeparture || !isPastTrip(card);
}

const inList = (card: TripCardData, kind: TripListKind) =>
  kind === "all" || (kind === "upcoming" ? isUpcomingTrip(card) : isPastTrip(card));

function departuresOf(card: TripCardData, kind: TripListKind): Departure[] {
  const upcoming = kind === "past" ? [] : getUpcomingDepartures(card.tourPackage);
  const past = kind === "upcoming" ? [] : getPastDepartures(card.tourPackage);
  return [...upcoming, ...past];
}

// Thursday, Friday or Saturday (dates are plain "YYYY-MM-DD", read as UTC)
const startsNearWeekend = (iso: string) => [4, 5, 6].includes(new Date(`${iso}T00:00:00Z`).getUTCDay());

// The month must match the start date; the date must fall within the trip; from/to bound the start
export function matchesDates(d: Departure, f: TripFilters): boolean {
  return (
    (!f.month || d.startDate.startsWith(f.month)) &&
    (!f.date || (d.startDate <= f.date && f.date <= d.endDate)) &&
    (!f.from || d.startDate >= f.from) &&
    (!f.to || d.startDate <= f.to) &&
    (!f.weekend || startsNearWeekend(d.startDate))
  );
}

export interface TripRow {
  card: TripCardData;
  departures: Departure[]; // the dates that match the filters
  past: boolean;           // shown as a past trip (it has no upcoming dates)
}

const latestStart = (row: TripRow) => row.departures[0]?.startDate ?? "";

export function filterTrips(cards: TripCardData[], kind: TripListKind, f: TripFilters): TripRow[] {
  const rows = cards
    .filter(
      (card) =>
        inList(card, kind) && (!f.destination || card.destination === f.destination) && matchesQuery(card, f.q),
    )
    .map((card) => ({
      card,
      departures: departuresOf(card, kind).filter((d) => matchesDates(d, f)),
      past: kind === "past" || (kind === "all" && !isUpcomingTrip(card)),
    }))
    // Trips without dates can't match a date filter
    .filter((row) => !hasDateFilters(f) || row.departures.length > 0);

  // Upcoming trips keep the site order (featured, then soonest); past ones follow, most recent first
  const upcoming = rows.filter((row) => !row.past);
  const past = rows.filter((row) => row.past).sort((a, b) => latestStart(b).localeCompare(latestStart(a)));
  return [...upcoming, ...past];
}

export function destinationOptions(cards: TripCardData[], kind: TripListKind): string[] {
  const names = cards.filter((card) => inList(card, kind)).map((card) => card.destination);
  return [...new Set(names)].sort((a, b) => a.localeCompare(b));
}

// Months that have at least one departure, earliest first
export function monthOptions(cards: TripCardData[], kind: TripListKind): { value: string; label: string }[] {
  const months = new Set(cards.flatMap((card) => departuresOf(card, kind).map((d) => d.startDate.slice(0, 7))));
  return [...months].sort().map((value) => ({ value, label: formatMonth(`${value}-01`) }));
}
