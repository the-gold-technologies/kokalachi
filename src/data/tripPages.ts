import type { TripListKind } from "@/lib/tripFilters";

// The /trips section: one listing of every trip plus its sub-pages. Used by the pages,
// the tabs at the top of each page, and the Trips menu in the navbar.
// Trip cards on these pages still open the trip itself at /journeys/<slug>.

export type TripPageKey = "all" | "upcoming" | "past" | "custom" | "solo";

export interface TripPageConfig {
  key: TripPageKey;
  path: string;
  label: string;        // tab & menu title
  menuTag: string;      // small badge on the navbar tile
  menuDesc: string;     // one line under the navbar tile
  tagline: string;      // orange pill above the hero headline
  title: string;
  scriptAccent: string; // handwritten end of the headline
  description: string;  // keep it short (~120 characters) so it fits on two lines
  metaTitle: string;    // the root layout adds " | Kokalachi"
  metaDescription: string;
  list?: TripListKind;  // which trips the page lists (none on the custom trip page)
  listTitle?: string;   // heading above the trip grid
  listSubtitle?: string;
}

export const TRIP_PAGES: Record<TripPageKey, TripPageConfig> = {
  all: {
    key: "all",
    path: "/trips",
    label: "All Trips",
    menuTag: "Explore All",
    menuDesc: "Every trip we run, past & upcoming.",
    tagline: "All Trips",
    title: "Every trip, past &",
    scriptAccent: "upcoming.",
    description:
      "Every Kokalachi trip in one place: the ones you can still book and the ones our travellers have already taken.",
    metaTitle: "All Trips",
    metaDescription:
      "Browse every Kokalachi group trip, upcoming and past. Filter by destination, month or date and find a departure that fits.",
    list: "all",
    listTitle: "All trips",
    listSubtitle: "Every trip we run, upcoming and past",
  },
  upcoming: {
    key: "upcoming",
    path: "/trips/upcoming",
    label: "Upcoming Trips",
    menuTag: "Book Now",
    menuDesc: "Small-group departures you can book today.",
    tagline: "Upcoming Trips",
    title: "Your next trip",
    scriptAccent: "starts here.",
    description:
      "Small-group departures you can book right now. Pick a destination and month to find dates that suit you.",
    metaTitle: "Upcoming Trips",
    metaDescription:
      "Upcoming Kokalachi group departures you can book now. Filter by destination, month or date.",
    list: "upcoming",
    listTitle: "Upcoming trips",
    listSubtitle: "Departures you can book now",
  },
  past: {
    key: "past",
    path: "/trips/past",
    label: "Past Trips",
    menuTag: "Memories",
    menuDesc: "Trips our travellers have already taken.",
    tagline: "Past Trips",
    title: "Where we've",
    scriptAccent: "already been.",
    description:
      "The trips our travellers have already taken. Many run again, so check each one for its next batch.",
    metaTitle: "Past Trips",
    metaDescription: "The Kokalachi group trips that have already run, and when they're running again.",
    list: "past",
    listTitle: "Past trips",
    listSubtitle: "Where our travellers have already been",
  },
  custom: {
    key: "custom",
    path: "/trips/custom-group-trip",
    label: "Custom Group Trip",
    menuTag: "Private",
    menuDesc: "A private trip planned around your group.",
    tagline: "Custom Group Trip",
    title: "Your group, your",
    scriptAccent: "itinerary.",
    description:
      "Travelling with friends, family or your team? Tell us where and when, and we'll plan a private trip for you.",
    metaTitle: "Custom Group Trip",
    metaDescription:
      "Plan a private Kokalachi trip for your friends, family or team. Tell us where and when, and we'll design it around your group.",
  },
  solo: {
    key: "solo",
    path: "/trips/solo-travellers",
    label: "Solo Travellers",
    menuTag: "Solo Friendly",
    menuDesc: "Every trip we run is made for solo travellers.",
    tagline: "Solo Travellers",
    title: "Come solo,",
    scriptAccent: "leave with friends.",
    description:
      "Every Kokalachi trip is made for solo travellers. Join a small group of like-minded people and we'll handle the rest.",
    metaTitle: "Trips for Solo Travellers",
    metaDescription:
      "Solo-friendly group trips with Kokalachi. Travel on your own with a small, curated group of like-minded people.",
    list: "all",
    listTitle: "Trips for solo travellers",
    listSubtitle: "Every trip we run is made for travelling solo",
  },
};

// Hero photo for the trip listings: hikers on the right, open trail on the left for the text.
// Kept separate from the /journeys banner.
export const TRIPS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=2400";

// Tab and menu order
export const TRIP_PAGE_ORDER: TripPageKey[] = ["all", "upcoming", "past", "custom", "solo"];
