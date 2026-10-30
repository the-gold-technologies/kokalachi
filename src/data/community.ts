// Traveller story types for /community. Each trip gets a photo & video wall, then the
// reviews written by the people who were on it. The stories are managed in the CMS
// (Community → Chapters) and read by src/lib/content.ts.

export type CommunityMedia =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster: string; alt: string; caption?: string };

export type HighlightIcon = "guide" | "welcome" | "hotel" | "bus" | "visa" | "transfer" | "tours" | "support" | "plan" | "place" | "friends";

export interface TravellerStory {
  id: string;
  title: string;             // short headline pulled from the review
  pullQuote: string;         // the line that gets the big handwritten treatment
  summary: string;           // 1–2 sentences from the review, shown before the full letter
  highlights: { icon: HighlightIcon; label: string; detail: string }[]; // "What they loved", 2–4 items
  paragraphs: string[];      // the review, in the traveller's own words. Wrap a phrase in ==...== to highlight it
  signoff?: string;          // e.g. "Much Love & Blessings"
  authors: { name: string; role?: string }[];
  travelledAs: string;       // "Couple", "Mom & two daughters", "Old friends"
}

export interface CommunityTrip {
  slug: string;
  destination: string;
  country: string;
  tripType: string;          // "Group Journey", "Family Holiday", ...
  travelledOn: string;       // "October 2026"
  tagline: string;           // handwritten line beside the gallery
  journeySlug?: string;      // links to /journeys/<slug> when we run this trip
  coverImage: string;
  media: CommunityMedia[];
  stories: TravellerStory[];
}

export type StoryEntry = { trip: CommunityTrip; story: TravellerStory };
