import type { TripCardData } from "@/data/trips";
import { getUpcomingDepartures } from "@/lib/departures";
import { NO_FILTERS, isUpcomingTrip, matchesDates, matchesQuery, type TripFilters } from "@/lib/tripFilters";
import { TRIP_PAGES } from "@/data/tripPages";

// The home page search ("Where to? / When? / Travellers"): turns what was picked into a page.
// One matching trip opens that trip; otherwise /trips/upcoming opens with the filters applied.

type DateFilters = Pick<TripFilters, "month" | "from" | "to" | "weekend">;

const pad = (n: number) => String(n).padStart(2, "0");
const iso = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
const addDays = (isoDate: string, days: number) => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return iso(d);
};
const lastDayOfMonth = (year: number, month: number) => iso(new Date(Date.UTC(year, month, 0))); // month is 1-12
const todayIST = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// Season → [first month, last month] (1-12); winter runs into the next year
const SEASONS: Record<string, [number, number]> = {
  spring: [3, 5],
  summer: [6, 8],
  monsoon: [7, 9],
  autumn: [9, 11],
  fall: [9, 11],
  winter: [12, 2],
};

/**
 * The "When?" choice as date filters. pickedDate is a day from the calendar ("YYYY-MM-DD");
 * otherwise the preset label from the CMS is read: "Next 30 Days", "Upcoming Weekends",
 * "Autumn 2026", "December 2026". Anything else (e.g. "Flexible Dates") means any date.
 */
export function datesFromSelection(label: string, pickedDate?: string): Partial<DateFilters> {
  const today = todayIST();
  // A picked day: departures in the 30 days from it
  if (pickedDate) return { from: pickedDate < today ? today : pickedDate, to: addDays(pickedDate, 30) };

  const text = label.toLowerCase();
  const year = Number(text.match(/\b(20\d{2})\b/)?.[1]) || Number(today.slice(0, 4));

  const nextDays = text.match(/next\s+(\d+)\s+days?/);
  if (nextDays) return { from: today, to: addDays(today, Number(nextDays[1])) };

  if (text.includes("weekend")) return { from: today, to: addDays(today, 60), weekend: true };

  const season = Object.keys(SEASONS).find((name) => text.includes(name));
  if (season) {
    const [first, last] = SEASONS[season];
    const endYear = last < first ? year + 1 : year;
    return { from: `${year}-${pad(first)}-01`, to: lastDayOfMonth(endYear, last) };
  }

  const month = MONTHS.findIndex((name) => text.includes(name));
  if (month >= 0) return { month: `${year}-${pad(month + 1)}` };

  return {};
}

/** Where the search should go: a single trip's page, or /trips/upcoming with filters. */
export function searchTarget(trips: TripCardData[], query: string, dates: Partial<DateFilters>): string {
  const q = query.trim();
  const filters: TripFilters = { ...NO_FILTERS, ...dates };
  const hasDates = !!(dates.month || dates.from || dates.to || dates.weekend);

  const matches = trips.filter((card) => isUpcomingTrip(card) && matchesQuery(card, q));
  const bookable = hasDates
    ? matches.filter((card) => getUpcomingDepartures(card.tourPackage).some((d) => matchesDates(d, filters)))
    : matches;

  // Exactly one trip fits what was searched: open it
  if (q && bookable.length === 1) return `/journeys/${bookable[0].slug}`;

  const params = new URLSearchParams();
  if (q) {
    // All matches in one destination: use the destination dropdown; otherwise keep the search text
    const destinations = new Set(matches.map((card) => card.destination));
    if (destinations.size === 1) params.set("destination", [...destinations][0]);
    else params.set("q", q);
  }
  if (dates.month) params.set("month", dates.month);
  if (dates.from) params.set("from", dates.from);
  if (dates.to) params.set("to", dates.to);
  if (dates.weekend) params.set("weekend", "1");

  const queryString = params.toString();
  return queryString ? `${TRIP_PAGES.upcoming.path}?${queryString}` : TRIP_PAGES.upcoming.path;
}

/**
 * Destinations to suggest in the search: the CMS list, minus places with no upcoming trip yet,
 * followed by any trip destinations it doesn't cover. New trips show up here on their own.
 */
export function destinationSuggestions(trips: TripCardData[], cmsList: string[]): string[] {
  const upcoming = trips.filter(isUpcomingTrip);
  const fromCms = cmsList.filter((name) => upcoming.some((card) => matchesQuery(card, name)));
  const covered = (card: TripCardData) => fromCms.some((name) => matchesQuery(card, name));
  const extra = [...new Set(upcoming.filter((card) => !covered(card)).map((card) => card.destination))];
  return [...fromCms, ...extra];
}
