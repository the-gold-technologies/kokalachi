import { getNextDeparture, isBookingOpen } from "@/lib/departures";

// Trip types. The trips themselves are managed in the CMS (Journeys) and read by src/lib/content.ts.

// One dated batch of a trip. Past dates disappear from the site automatically.
export interface Departure {
  id: string;              // stable id, e.g. "udaipur-2026-10-01" — saved with each booking
  startDate: string;       // "YYYY-MM-DD"
  endDate: string;         // "YYYY-MM-DD"
  price?: number;          // overrides the trip price for this date
  originalPrice?: number;  // overrides the struck-through price for this date
  spotsLeft?: number;      // 0 marks the date as sold out
  status?: "open" | "soldout" | "closed"; // "closed" hides the date
  label?: string;          // e.g. "Diwali Special"
  note?: string;           // e.g. "Departs Delhi on 10 Dec night"
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  duration: string;
  rating?: number;
  price: number | string;
  originalPrice?: number | null;
  image: string;
  category: string;
  tag?: string | null;
  tagColor?: string | null;
  spotsLeft?: number;
  nextDeparture?: string;
  // When set, dates, next departure, spots and price on the site come from here.
  departures?: Departure[];
  hook?: string;
  overview?: string[];
  itinerary?: { day: string; title: string; journey: string; community: string; image?: string }[];
  inclusions?: string[];
  exclusions?: string[];
  meals?: string[];
  whatToPack?: string[];
  weather?: string[];
  faqs?: { question: string; answer: string }[];
  highlights?: { icon: string; title: string; description: string }[];
  gstAmount?: number;
  gstIncluded?: boolean;   // price already includes gstAmount, so cards show the all-in price
  tcsPercent?: number;
  offerLabel?: string;     // e.g. "Limited Offer", shown above the price on cards
  gallery?: string[];
}

export interface TripCardData {
  id: string;
  slug: string;
  destination: string;
  locationTag: string;
  duration: string;
  groupSize: string;
  dates?: string;          // only for trips without `departures`, e.g. "Upcoming"
  price: string;
  vibeTags: string[];
  categories: string[];
  images: string[];
  featured?: boolean;      // pins the trip to the front of every list, e.g. the newest launch
  tourPackage: TourPackage;
  seo: {
    metaTitle: string | null;
    metaDescription: string | null;
    targetKeywords: string | null;
    noIndex: boolean;
    schema: string | null;
  };
}

// Featured trips first, then soonest departure; trips without a bookable date go last.
// Ties (and trips without dates) keep the order they came in.
const nextStart = (card: TripCardData) => getNextDeparture(card.tourPackage)?.startDate;

export function sortTripCards(cards: TripCardData[]): TripCardData[] {
  return [...cards].sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
    const aOpen = isBookingOpen(a);
    const bOpen = isBookingOpen(b);
    if (aOpen !== bOpen) return aOpen ? -1 : 1;
    const aStart = nextStart(a) ?? "9999";
    const bStart = nextStart(b) ?? "9999";
    return aStart.localeCompare(bStart);
  });
}
