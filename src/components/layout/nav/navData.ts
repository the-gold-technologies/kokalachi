import type { Departure, TripCardData } from "@/data/trips";
import type { BlogPost } from "@/data/blogs";
import type { TopBarConfig } from "@/types/cms";
import { TRIPS_NAV_IDS, type TripsMenu } from "@/data/tripPages";
import {
  formatMonth,
  getDepartureOriginalPrice,
  getDeparturePrice,
  getNextDeparture,
  getUpcomingDepartures,
  hasFullDetails,
  isSoldOut,
} from "@/lib/departures";

// Everything the navbar menus show, worked out from the CMS trips and the newest blog post.
// Journeys = browse by the kind of trip (vibe). Trips = browse by date and trip type.

export type MenuKey = "journeys" | "trips" | "blogs";

export type NavItem =
  | { kind: "menu"; key: MenuKey; navId: string; label: string; href: string }
  | { kind: "link"; navId: string; label: string; href: string };

// Menu link names, by the ids in CMS → Navigation → Menu Links (admins can rename them there)
export type NavLabels = Record<string, string>;

// Top-level order of the navbar: finding a trip first, then stories and people, then who we are.
// The labels here are the defaults; the CMS names replace them.
export const NAV_ITEMS: NavItem[] = [
  { kind: "menu", key: "journeys", navId: "nav-journeys", label: "Journeys", href: "/journeys" },
  { kind: "menu", key: "trips", navId: "nav-trips", label: "Trips", href: "/trips" },
  { kind: "menu", key: "blogs", navId: "nav-blogs", label: "Blogs", href: "/blogs" },
  { kind: "link", navId: "nav-community", label: "Community", href: "/community" },
  { kind: "link", navId: "nav-about", label: "About Us", href: "/about" },
];

export interface MenuLink {
  id: string;
  title: string;
  desc: string;
  href: string;
  meta?: string; // small note beside the title, e.g. "Next: 14 Nov"
}

// One destination in the Journeys menu (trips sharing a destination are grouped)
export type DestinationLink = MenuLink;

export interface MonthTile {
  value: string; // "YYYY-MM"
  short: string; // "Nov"
  year: string; // "2026"
  count: number; // departures that month
  href: string;
}

export interface LeavingSoon {
  card: TripCardData;
  departure: Departure;
}

// One message in the rotating chip on the right of the top bar
export interface TickerItem {
  id: string;
  label: string; // orange pill, e.g. "Next departure", "Early Bird"
  text: string; // e.g. "Kashmir · 10 Nov"
  href: string;
}

export interface NavData {
  items: NavItem[]; // NAV_ITEMS with the CMS names
  contactLabel: string;
  showTopBar: boolean;
  facts: string[]; // rotating line on the left of the top bar
  ticker: TickerItem[];
  destinations: DestinationLink[];
  tripPages: MenuLink[];
  months: MonthTile[];
  leavingSoon: LeavingSoon[];
  latestPost?: BlogPost;
  blogLinks: MenuLink[];
}

const plural = (n: number, word: string) => `${n} ${n === 1 ? word : `${word}s`}`;

// "14 Nov"
const shortDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

// Earliest bookable departure across a set of trips
function soonest(cards: TripCardData[]): Departure | undefined {
  return cards
    .map((card) => getNextDeparture(card.tourPackage))
    .filter((d): d is Departure => !!d)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))[0];
}


export function buildNavData(
  trips: TripCardData[],
  latestPost: BlogPost | undefined,
  topBar?: TopBarConfig | null,
  tripsMenu?: TripsMenu | null, // CMS → Trips Pages; null when the CMS can't be reached
  navLabels: NavLabels = {},
): NavData {
  const label = (id: string, fallback: string) => navLabels[id] || fallback;
  const items = NAV_ITEMS.map((item) => ({ ...item, label: label(item.navId, item.label) }));

  // Every destination we run, soonest next departure first, then the rest A–Z. One trip opens
  // the trip itself; several trips to the same place open the trip list filtered to it.
  const groups = new Map<string, TripCardData[]>();
  for (const card of trips) groups.set(card.destination, [...(groups.get(card.destination) ?? []), card]);
  const destinations = [...groups.entries()]
    .map(([name, cards]) => {
      const next = soonest(cards)?.startDate;
      const link: DestinationLink = {
        id: name,
        title: name,
        desc: cards.length === 1 ? cards[0].duration : plural(cards.length, "trip"),
        href: cards.length === 1 ? `/journeys/${cards[0].slug}` : `/trips?destination=${encodeURIComponent(name)}`,
        meta: next ? `Next: ${shortDate(next)}` : "New dates soon",
      };
      return { link, next };
    })
    .sort((a, b) =>
      a.next && b.next
        ? a.next.localeCompare(b.next)
        : a.next
          ? -1
          : b.next
            ? 1
            : a.link.title.localeCompare(b.link.title),
    )
    .map(({ link }) => link);

  // The /trips sub-pages, in the CMS tab order (/trips itself is the "See all trips" button)
  const tripPages: MenuLink[] = (tripsMenu?.pages ?? [])
    .filter((page) => page.slug)
    .map((page) => ({
      id: page.slug,
      title: label(TRIPS_NAV_IDS[page.slug] ?? "", page.tabLabel),
      desc: page.menu?.desc ?? "",
      href: page.path,
      meta: page.menu?.tag || undefined,
    }));

  // Months with at least one bookable departure, the next six
  const byMonth = new Map<string, number>();
  for (const card of trips) {
    for (const d of getUpcomingDepartures(card.tourPackage)) {
      if (isSoldOut(d)) continue;
      const key = d.startDate.slice(0, 7);
      byMonth.set(key, (byMonth.get(key) ?? 0) + 1);
    }
  }
  const months = [...byMonth.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, 6)
    .map(([value, count]) => ({
      value,
      short: formatMonth(`${value}-01`).slice(0, 3),
      year: value.slice(0, 4),
      count,
      href: `/trips/upcoming?month=${value}`,
    }));

  // The next trips to leave, soonest first (only ones with a full itinerary to show)
  const leavingSoon = trips
    .filter((card) => hasFullDetails(card.tourPackage))
    .map((card) => ({ card, departure: getNextDeparture(card.tourPackage) }))
    .filter((t): t is LeavingSoon => !!t.departure)
    .sort((a, b) => a.departure.startDate.localeCompare(b.departure.startDate))
    .slice(0, 3);

  const blogLinks: MenuLink[] = [
    { id: "journal", title: label("nav-blogs-all", "The Kokalachi Journal"), desc: "Honest guides & stories for curious travellers", href: "/blogs", meta: "All Blogs" },
    { id: "moments", title: label("nav-blogs-moments", "Moments Captured"), desc: "Visual memories, polaroids & photo tracks", href: "/#moments", meta: "Photo Diary" },
    { id: "why", title: label("nav-blogs-why", "Why We Started"), desc: "The story, values & beliefs behind our tribe", href: "/about#why-we-started", meta: "Our Vision" },
  ];

  const { facts, ticker } = buildTopBar(trips, topBar);

  return { items, contactLabel: label("nav-contact", "Contact Us"), showTopBar: topBar?.enabled !== false, facts, ticker, destinations, tripPages, months, leavingSoon, latestPost, blogLinks };
}

// Which top-level item the current page belongs to, for the "you are here" dot
export function isCurrent(item: NavItem, pathname: string): boolean {
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

// The CMS WhatsApp field may hold a full link or just a number. `message` pre-fills the chat
// (a full link keeps its own text unless a message is given).
export function whatsappHref(value: string | null | undefined, message?: string): string | null {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) {
    if (!message) return value;
    try {
      const url = new URL(value);
      url.searchParams.set("text", message);
      return url.toString();
    } catch {
      return value;
    }
  }
  const digits = value.replace(/\D/g, "");
  if (!digits) return null;
  const text = encodeURIComponent(message ?? "Hi Kokalachi! Can you help me find a trip?");
  return `https://wa.me/${digits}?text=${text}`;
}

const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;

// Shown on the left when the CMS has no facts of its own
const DEFAULT_FACTS = [
  "Small-group slow travel across India & beyond",
  "Every trip is solo-friendly",
  "{departures} departures coming up across {destinations} destinations",
  "Small, curated groups of like-minded people",
];

// "YYYY-MM-DD" today in India, for the CMS messages' start/end dates
const todayIST = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

// Top bar content. Left: the CMS facts (or the defaults) with live counts filled in. Right: the CMS
// messages that are live today, then the automatic trip updates: the next departure, offers, last
// seats and the next few departures (one per trip). At most six chips.
function buildTopBar(
  trips: TripCardData[],
  config: TopBarConfig | null | undefined,
): { facts: string[]; ticker: TickerItem[] } {
  const upcoming = trips
    .map((card) => ({ card, d: getNextDeparture(card.tourPackage) }))
    .filter((t): t is { card: TripCardData; d: Departure } => !!t.d)
    .sort((a, b) => a.d.startDate.localeCompare(b.d.startDate));

  const departure = ({ card, d }: (typeof upcoming)[number]): TickerItem => ({
    id: card.slug,
    label: d.label || "Next departure",
    text: `${card.destination} · ${shortDate(d.startDate)}`,
    href: `/journeys/${card.slug}`,
  });

  const [first, ...rest] = upcoming;
  const offers: TickerItem[] = [];
  const seats: TickerItem[] = [];
  const others: TickerItem[] = [];
  for (const t of rest) {
    const tour = t.card.tourPackage;
    const price = getDeparturePrice(tour, t.d);
    const original = getDepartureOriginalPrice(tour, t.d);
    const href = `/journeys/${t.card.slug}`;
    if (price != null && original != null && original > price) {
      offers.push({
        id: t.card.slug,
        label: t.d.label || tour.offerLabel || "Offer",
        text: `Save ${rupees(original - price)} · ${t.card.destination}`,
        href,
      });
    } else if (t.d.spotsLeft != null && t.d.spotsLeft > 0 && t.d.spotsLeft <= 5) {
      seats.push({ id: t.card.slug, label: "Last seats", text: `${t.card.destination} · ${t.d.spotsLeft} left`, href });
    } else {
      others.push(departure(t));
    }
  }
  const tripUpdates = [...(first ? [departure(first)] : []), ...offers, ...seats, ...others].slice(0, 5);

  const today = todayIST();
  const custom: TickerItem[] = (config?.messages ?? [])
    .filter((m) => m?.label?.trim() && m?.text?.trim())
    .filter((m) => (!m.startDate || m.startDate <= today) && (!m.endDate || m.endDate >= today))
    .map((m, i) => ({ id: `cms-${i}`, label: m.label.trim(), text: m.text.trim(), href: m.link?.trim() || "/trips" }));

  const ticker = [...custom, ...(config?.showTripUpdates === false ? [] : tripUpdates)].slice(0, 6);

  const departureCount = trips.reduce(
    (n, card) => n + getUpcomingDepartures(card.tourPackage).filter((d) => !isSoldOut(d)).length,
    0,
  );
  const destinationCount = new Set(upcoming.map((t) => t.card.destination)).size;
  const cmsFacts = (config?.facts ?? []).map((f) => f?.trim()).filter((f): f is string => !!f);
  const facts = (cmsFacts.length ? cmsFacts : DEFAULT_FACTS)
    // A line with a live count only makes sense while there are departures to count
    .filter((f) => !/\{(departures|destinations)\}/.test(f) || departureCount > 1)
    .map((f) =>
      f
        .replace(/\{departures\}/g, String(departureCount))
        .replace(/\{destinations\}/g, String(destinationCount))
        .replace(/\b1 destinations\b/, "1 destination"),
    );

  return { facts, ticker };
}

// Logos from the CMS can have transparent padding baked in (the light one does), which makes the
// two logos look different sizes at the same height. Cloudinary's e_trim serves the image with
// those edges cut off, so both fill their height exactly. Other URLs are left as they are.
export function trimmedLogo(url: string | null | undefined): string | null {
  if (!url) return null;
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/") || url.includes("e_trim")) return url;
  return url.replace("/upload/", "/upload/e_trim/");
}
