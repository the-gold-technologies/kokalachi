// Traveller stories for /community. Each trip gets a photo & video wall, then the
// reviews written by the people who were on it.
//
// To add your own photos/videos: drop them in /public/community/<trip-slug>/ and
// point `src` at them, e.g. { type: "image", src: "/community/udaipur/palace.jpg", ... }.
// Videos work the same way: { type: "video", src: "/community/udaipur/reel.mp4", poster: "/community/udaipur/reel.jpg" }.

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

const UDAIPUR_PALACE_BOAT =
  "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=85&w=1200";
const UDAIPUR_PALACE_DUSK =
  "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&q=85&w=1200";
const UDAIPUR_PALACE_DAY =
  "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?auto=format&fit=crop&q=85&w=1200";

export const communityTrips: CommunityTrip[] = [
  {
    slug: "udaipur",
    destination: "Udaipur",
    country: "India",
    tripType: "Group Journey",
    travelledOn: "October 2026",
    tagline: "came as strangers, left as family ♡",
    journeySlug: "udaipur",
    coverImage: UDAIPUR_PALACE_DUSK,
    media: [
      { type: "image", src: UDAIPUR_PALACE_DUSK, alt: "City Palace lit up at dusk across Lake Pichola", caption: "Golden hour at Lake Pichola" },
      { type: "image", src: UDAIPUR_PALACE_BOAT, alt: "Boat on Lake Pichola in front of the City Palace", caption: "The boat ride everyone still talks about" },
      { type: "image", src: UDAIPUR_PALACE_DAY, alt: "City Palace of Udaipur seen from the water", caption: "City Palace, ice-cream queue & all" },
    ],
    stories: [
      {
        id: "girotra",
        title: "We went as strangers, but returned as an extended family",
        pullQuote: "Sometimes, it is these little gestures that stay in our hearts the longest.",
        travelledAs: "Couple",
        summary:
          "We went with a group of strangers, but returned with wonderful memories and a feeling that we had gained an extended family in the form of our co-passengers.",
        highlights: [
          { icon: "guide", label: "Captain Abhay Negi", detail: "Travel, stay & meals made smooth" },
          { icon: "welcome", label: "Aditi’s warm welcome", detail: "Thoughtful touches for the ladies" },
          { icon: "hotel", label: "Chronicles Hotel", detail: "Rajasthani charm & great food" },
          { icon: "bus", label: "Urbania Tempo Traveller", detail: "Comfortable all the way" },
        ],
        paragraphs: [
          "Our Udaipur trip with Kokalachi Travellers Group was truly a beautiful experience. We went with a group of strangers, but returned with wonderful memories and a feeling that we had gained ==an extended family== in the form of our co-passengers.",
          "A special word of appreciation for Captain Abhay Negi, who made the entire journey — from travel and stay to meals and little arrangements — ==smooth, comfortable and memorable==. He was always ready to help, adjust and make things easier for everyone.",
          "One small incident touched me deeply. While standing alone in a long queue for ice cream at City Palace, I suddenly noticed Abhay standing a little distance away, quietly waiting until the purchase was completed. It was such a simple gesture, yet it made me realise that ==someone was genuinely looking out for us==. Sometimes, it is these little gestures that stay in our hearts the longest.",
          "A special mention also for Aditi, Abhay’s lovely wife, who made every effort to create ==a warm and welcoming atmosphere==, especially for the ladies in the group. Her thoughtful gestures added a beautiful personal touch to the journey.",
          "Our stay at Chronicles Hotel was another highlight. The lovely Rajasthani artefacts and traditional touches gave the place ==a unique charm==. The food, hospitality and overall experience were equally appreciable.",
          "The Urbania Tempo Traveller was comfortable and made our travel enjoyable throughout.",
          "Our heartfelt thanks to the entire Kokalachi Travellers Group for giving us not just a memorable Udaipur trip, but also the opportunity to meet wonderful people and create bonds that we will cherish.",
          "We went as strangers, but returned as an extended family — with hearts full of sweet memories. ❤️",
          "Wishing Kokalachi continued success and sending our heartfelt blessings and best wishes to Abhay and Aditi. May you both continue to spread the same warmth, kindness and happiness wherever life takes you.",
          "Thank you, Kokalachi, for a journey that will remain close to our hearts. ❤️",
        ],
        signoff: "Much Love & Blessings",
        authors: [
          { name: "Yogita Girotra", role: "Lecturer Physics, Directorate of Education, GNCT of Delhi" },
          { name: "Sanjay Kumar Girotra", role: "Author & Advocate, Delhi High Court" },
        ],
      },
      {
        id: "mandy",
        title: "Some friendships pick up exactly where they left off",
        pullQuote: "Some trips become memories for a lifetime.",
        travelledAs: "Old friends, reunited",
        summary:
          "Kokalachi planned everything so perfectly that we had just one responsibility… catching up on years of gossip, laughter, stories and memories! 😂",
        highlights: [
          { icon: "plan", label: "Planned perfectly", detail: "Nothing to do but catch up" },
          { icon: "hotel", label: "An amazing stay", detail: "Comfort from start to finish" },
          { icon: "place", label: "Beautiful Udaipur", detail: "Every moment felt special" },
        ],
        paragraphs: [
          "After all these years, we finally managed to get together again — and it felt like no time had passed at all! 😄",
          "A huge shoutout to Kokalachi for ==planning everything so perfectly==. That left us with just one important responsibility… catching up on years of gossip, laughter, stories and memories! 😂",
          "From an amazing stay to the beauty of Udaipur, every moment made this trip truly special.",
          "Some friendships pick up exactly where they left off. Some reunions are long overdue. And some trips become memories for a lifetime. ❤️",
          "Here’s to old friends, endless laughter, and many more adventures together! 🥂",
        ],
        authors: [{ name: "Mandy" }],
      },
    ],
  },
  {
    slug: "dubai",
    destination: "Dubai",
    country: "UAE",
    tripType: "Family Holiday",
    travelledOn: "2026",
    tagline: "visa to transfers, all sorted ✈️",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=85&w=1200",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=85&w=1200", alt: "Dubai skyline with the Burj Khalifa at sunrise", caption: "Good morning, Dubai" },
      { type: "image", src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=85&w=1200", alt: "Looking up at the Burj Khalifa between palm trees", caption: "Neck-craning at the Burj" },
      { type: "image", src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=85&w=1200", alt: "Burj Khalifa and Downtown Dubai lake on a sunny day", caption: "Downtown strolls" },
      { type: "image", src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=85&w=1200", alt: "Aerial view of the Burj Al Arab on the coast", caption: "Burj Al Arab from above" },
      { type: "image", src: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=85&w=1200", alt: "Burj Al Arab rising over calm water", caption: "Beach day views" },
      { type: "image", src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=85&w=1200", alt: "Sheikh Zayed Road towers glowing at night", caption: "City lights after dark" },
    ],
    stories: [
      {
        id: "nijhawan",
        title: "A completely hassle-free Dubai experience",
        pullQuote: "We could simply relax, spend quality time together and enjoy Dubai.",
        travelledAs: "Mom & two daughters",
        summary:
          "From the very beginning, they took care of everything, so we could simply relax and enjoy Dubai together without worrying about arrangements.",
        highlights: [
          { icon: "visa", label: "Visa processing", detail: "Handled from day one" },
          { icon: "hotel", label: "Hotel stay", detail: "Comfortable & well chosen" },
          { icon: "transfer", label: "Tours & transfers", detail: "Planned and organised" },
          { icon: "support", label: "Always reachable", detail: "Help whenever we needed it" },
        ],
        paragraphs: [
          "Travelling to Dubai with my two daughters was a trip we were really looking forward to, and choosing Kokalachi made the entire experience ==so much easier and stress-free==.",
          "From the very beginning, ==they took care of everything== — visa processing, hotel stay, tours, transfers, and all the little details that we usually have to worry about while travelling. Everything was well planned and organised throughout our trip.",
          "What we appreciated most was that Kokalachi didn’t just arrange the major things; they took care of ==the small details== that make a holiday comfortable and enjoyable. Whenever we needed any assistance, the team was always available and helpful.",
          "We could simply relax, spend quality time together and enjoy Dubai with our daughters without constantly worrying about arrangements.",
          "Thank you, Kokalachi, for taking such wonderful care of us and making our family holiday truly memorable. ==We would happily travel with you again!==",
        ],
        signoff: "A Happy Mom & Her Two Daughters",
        authors: [{ name: "Jyoti Nijhawan" }],
      },
    ],
  },
];

// Banner photo at the top of /community. Pick one with a darker lower third so the white text reads clearly.
export const communityHeroImage = {
  src: UDAIPUR_PALACE_DAY.replace("w=1200", "w=2400"),
  alt: "City Palace across Lake Pichola, Udaipur",
};

export type StoryEntry = { trip: CommunityTrip; story: TravellerStory };

export const getAllStories = (): StoryEntry[] =>
  communityTrips.flatMap((trip) => trip.stories.map((story) => ({ trip, story })));

// Live numbers for the homepage and /community, so nothing is typed in by hand
export function getCommunityStats() {
  const stories = getAllStories();
  return {
    storyCount: stories.length,
    travellerCount: stories.reduce((n, { story }) => n + story.authors.length, 0),
    momentCount: communityTrips.reduce((n, trip) => n + trip.media.length, 0),
    countryCount: new Set(communityTrips.map((trip) => trip.country)).size,
  };
}
