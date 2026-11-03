import type { TripListKind } from "@/lib/tripFilters";
import type { PageSeo, TitleText } from "@/types/cms";

// The /trips section: /trips plus its sub-pages (Upcoming, Past, Custom Group Trip, Solo
// Travellers). Their text, hero photos, tab order and SEO come from the CMS
// (Static Pages → Trips Pages, SEO → Page Settings); see getTripsPages in lib/content.ts.
// Only the routes are fixed here: each sub-page has its own folder under app/trips.

export const TRIPS_PATH = "/trips";
export const UPCOMING_TRIPS_PATH = "/trips/upcoming";

export const tripsPath = (slug: string) => (slug ? `${TRIPS_PATH}/${slug}` : TRIPS_PATH);

// Sub-page slug → its link in CMS → Navigation → Menu Links (the navbar tile's name)
export const TRIPS_NAV_IDS: Record<string, string> = {
  upcoming: "nav-trips-upcoming",
  past: "nav-trips-past",
  "custom-group-trip": "nav-trips-custom",
  "solo-travellers": "nav-trips-solo",
};

export interface TripsPage {
  slug: string; // "" for /trips, otherwise the part after /trips/
  path: string;
  tabLabel: string; // its tab, and its footer link
  tagline: string;
  headline: string;
  scriptAccent: string;
  description: string;
  heroImage: string;
  layout: "list" | "enquiry"; // a list of trips, or the private-trip enquiry form
  list: TripListKind;
  listTitle: string;
  listSubtitle: string;
  notes: TitleText[]; // list pages: cards above the trip list
  howItWorksLabel: string; // enquiry pages
  howItWorksTitle: string;
  steps: TitleText[];
  enquiryTag: string;
  menu: { tag: string; desc: string; image: string } | null; // navbar Trips tile (sub-pages only)
  seo: PageSeo | null;
}

export interface TripsSection {
  pages: TripsPage[]; // /trips first, then the sub-pages in their tab order
  menuFooterText: string; // bottom of the navbar's Trips dropdown
}

// What the tabs need about each trips page
export type TripsTab = Pick<TripsPage, "slug" | "path" | "tabLabel" | "layout">;
export const toTripsTab = ({ slug, path, tabLabel, layout }: TripsPage): TripsTab => ({ slug, path, tabLabel, layout });

// What the navbar's Trips dropdown and the footer need (kept small: they're on every page)
export interface TripsMenu {
  menuFooterText: string;
  pages: Pick<TripsPage, "slug" | "path" | "tabLabel" | "menu">[];
}
export const toTripsMenu = ({ pages, menuFooterText }: TripsSection): TripsMenu => ({
  menuFooterText,
  pages: pages.map(({ slug, path, tabLabel, menu }) => ({ slug, path, tabLabel, menu })),
});
