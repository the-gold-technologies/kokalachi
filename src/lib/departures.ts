import type { Departure, TourPackage, TripCardData } from "@/data/trips";

// All departure dates are plain "YYYY-MM-DD" strings, compared against today's date in India.
function todayIST(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());
}

function parseDate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

function format(iso: string, options: Intl.DateTimeFormatOptions): string {
  return parseDate(iso).toLocaleDateString("en-GB", { ...options, timeZone: "UTC" });
}

// "1 Oct 2026"
export function formatDate(iso: string): string {
  return format(iso, { day: "numeric", month: "short", year: "numeric" });
}

// "1 – 4 Oct 2026", "28 Oct – 2 Nov 2026", "30 Dec 2026 – 2 Jan 2027"
export function formatDateRange(startIso: string, endIso: string): string {
  const start = parseDate(startIso);
  const end = parseDate(endIso);
  const endLabel = formatDate(endIso);

  if (start.getUTCFullYear() !== end.getUTCFullYear()) {
    return `${formatDate(startIso)} – ${endLabel}`;
  }
  if (start.getUTCMonth() !== end.getUTCMonth()) {
    return `${format(startIso, { day: "numeric", month: "short" })} – ${endLabel}`;
  }
  return `${start.getUTCDate()} – ${endLabel}`;
}

export function formatDeparture(departure: Departure): string {
  return formatDateRange(departure.startDate, departure.endDate);
}

// Future departures that are not closed, earliest first. Past dates drop off automatically.
export function getUpcomingDepartures(tour: TourPackage): Departure[] {
  const today = todayIST();
  return (tour.departures ?? [])
    .filter((d) => d.startDate >= today && d.status !== "closed")
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function isSoldOut(departure: Departure): boolean {
  return departure.status === "soldout" || departure.spotsLeft === 0;
}

// The first upcoming departure that can still be booked.
export function getNextDeparture(tour: TourPackage): Departure | undefined {
  return getUpcomingDepartures(tour).find((d) => !isSoldOut(d));
}

export function getDeparturePrice(tour: TourPackage, departure?: Departure): number | undefined {
  if (departure?.price != null) return departure.price;
  return typeof tour.price === "number" ? tour.price : undefined;
}

export function getDepartureOriginalPrice(tour: TourPackage, departure?: Departure): number | undefined {
  return departure?.originalPrice ?? tour.originalPrice ?? undefined;
}

// Lowest price across bookable departures, for "Starting From" on cards.
export function getStartingPrice(tour: TourPackage): number | undefined {
  const prices = getUpcomingDepartures(tour)
    .filter((d) => !isSoldOut(d))
    .map((d) => getDeparturePrice(tour, d))
    .filter((p): p is number => p != null);
  return prices.length > 0 ? Math.min(...prices) : getDeparturePrice(tour);
}

// "₹9,999", or "Price TBA" for trips whose price isn't announced yet
export function formatStartingPrice(tour: TourPackage): string {
  const price = getStartingPrice(tour);
  return price != null ? `₹${price.toLocaleString("en-IN")}` : "Price TBA";
}

// Spots left on the next departure; trips without departures fall back to tour.spotsLeft.
export function getSpotsLeft(tour: TourPackage): number | undefined {
  if (!tour.departures) return tour.spotsLeft;
  return getNextDeparture(tour)?.spotsLeft;
}

// "17 Oct"
export function formatShortDate(iso: string): string {
  return format(iso, { day: "numeric", month: "short" });
}

// "Sat, 17 Oct"
export function formatDayDate(iso: string): string {
  return format(iso, { weekday: "short", day: "numeric", month: "short" });
}

// "October 2026" — used to group departures by month
export function formatMonth(iso: string): string {
  return format(iso, { month: "long", year: "numeric" });
}

export function groupByMonth(departures: Departure[]): { month: string; departures: Departure[] }[] {
  const groups: { month: string; departures: Departure[] }[] = [];
  for (const d of departures) {
    const month = formatMonth(d.startDate);
    const group = groups.find((g) => g.month === month);
    if (group) group.departures.push(d);
    else groups.push({ month, departures: [d] });
  }
  return groups;
}

export type Availability = { label: string; tone: "available" | "limited" | "soldout" };

// Few seats left reads as "Filling fast", like most group-tour sites
export function getAvailability(departure: Departure): Availability {
  if (isSoldOut(departure)) return { label: "Sold out", tone: "soldout" };
  if (departure.spotsLeft != null && departure.spotsLeft <= 5) {
    return { label: `Only ${departure.spotsLeft} left`, tone: "limited" };
  }
  if (departure.spotsLeft != null) return { label: `${departure.spotsLeft} seats left`, tone: "available" };
  return { label: "Available", tone: "available" };
}

// Upcoming, bookable departures to show on a trip card
export function getCardDepartures(card: TripCardData): Departure[] {
  return getUpcomingDepartures(card.tourPackage).filter((d) => !isSoldOut(d));
}

// Text shown on a card when there are no departures to list
export function getCardDatesFallback(card: TripCardData): string {
  return card.tourPackage.departures ? "New dates soon" : card.dates || "Upcoming";
}

// Trips added with dates only (no itinerary yet) show a "details coming soon" page
export function hasFullDetails(tour: TourPackage): boolean {
  return !!tour.itinerary?.length;
}

// Short label for the next departure, e.g. "1 Oct 2026".
export function getNextDepartureLabel(tour: TourPackage): string {
  if (!tour.departures) return tour.nextDeparture || "Upcoming";
  const next = getNextDeparture(tour);
  return next ? formatDate(next.startDate) : "New dates soon";
}

// A trip is open for booking when it has a bookable departure (or, for older
// trips without departures, real dates instead of the "Upcoming" placeholder).
export function isBookingOpen(card: TripCardData): boolean {
  if (card.tourPackage.departures) return getNextDeparture(card.tourPackage) != null;
  return !!card.dates && card.dates.trim().toLowerCase() !== "upcoming";
}
