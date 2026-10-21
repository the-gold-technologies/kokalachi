// Blog posts. Add a post to `blogPosts` and it shows up on /blogs and at /blogs/<slug>.
// Inside any `text`, write [label](/path) to add a link.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "tip"; text: string }                       // sticky-note tip
  | { type: "quote"; text: string }                     // big handwritten pull quote
  | { type: "list"; items: { title?: string; text: string }[]; style?: "check" | "cards" }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "postcard"; text: string; signature: string };

export interface BlogSection {
  id: string;              // anchor for the table of contents
  number?: number;         // numbered chapters show a big "01" marker
  kicker?: string;         // short label shown in the table of contents
  title: string;
  blocks: BlogBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  heroLead: string;        // hero headline, split so the second half can be handwritten
  heroAccent: string;
  excerpt: string;
  category: string;
  publishedAt: string;     // "YYYY-MM-DD"
  author: string;
  heroImage: string;
  heroAlt: string;
  ogImage?: string;        // optional link-preview image; left empty, it's made from heroImage
  marginNote?: string;     // handwritten note beside the intro
  intro: string[];
  sections: BlogSection[];
  cta: { title: string; text: string };
  relatedCategory?: string; // trip category to suggest at the end, e.g. "FirstTimers"
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-group-trip-what-to-expect",
    title: "First Time on a Group Trip? Here's What to Expect (and How to Make It Great)",
    heroLead: "First time on a group trip?",
    heroAccent: "Here's what to expect.",
    excerpt:
      "You've picked a destination, found a trip, and then the doubts arrive. What if I don't click with anyone? What if everyone already knows each other? Here's what a first group trip is actually like.",
    category: "First-Timer Guide",
    publishedAt: "2026-10-21",
    author: "Team Kokalachi",
    heroImage: "https://images.unsplash.com/photo-1790488976420-696cd3a12498?auto=format&fit=crop&q=85&w=2400",
    heroAlt: "Five friends with their arms around each other, watching a golden sunset over the sea",
    marginNote: "nervous? same. that's the point ♡",
    intro: [
      "If you're reading this, there's a good chance you're hovering over a \"Book Now\" button with a mix of excitement and nerves.",
      "That's normal. Almost everyone who joins a group trip alone feels it. The destination is the easy part to get excited about. It's the people that make you wonder.",
      "So let's take the mystery out of it. This is what a first group trip tends to look like, from the moment you sign up to the moment you're swapping photos on the way home.",
    ],
    sections: [
      {
        id: "before-you-go",
        number: 1,
        kicker: "Before you go",
        title: "The first hello shouldn't happen at the airport",
        blocks: [
          {
            type: "p",
            text: "The most nerve-racking part of a group trip is walking up to people you've never met. The easiest fix is to make sure that moment never happens on the trip itself.",
          },
          {
            type: "p",
            text: "On Kokalachi journeys, you're introduced to your fellow travellers before departure through a dedicated pre-trip community. You see names, say hello, and find out who's coming from where and who's as nervous as you are. By the time you meet in person, you've already broken the ice.",
          },
          {
            type: "tip",
            text: "Say something small in the group chat, even just \"Hi, I'm [name], coming from [city], can't wait.\" Someone will reply, and you'll find that half the group was waiting for someone to go first.",
          },
        ],
      },
      {
        id: "day-one",
        number: 2,
        kicker: "Day one",
        title: "Everyone is a little shy, and that's fine",
        blocks: [
          {
            type: "p",
            text: "The first few hours are the quietest. Everyone is polite, slightly awkward, and looking at their phones. This is the part people worry about, and it's also the part that passes the fastest.",
          },
          {
            type: "p",
            text: "Good group trips don't leave this to chance. They build in small, easy ways to get talking. On our road trips, that starts on the vehicle itself, with a round of \"Two Truths & A Travel Lie.\" On other journeys it might be a welcome sundowner, a bonfire evening, or a group dinner.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1682962232755-f1d051ddb638?auto=format&fit=crop&q=80&w=1200",
            alt: "A group of young friends laughing together around a table",
            caption: "strangers at breakfast, friends by dinner",
          },
          {
            type: "p",
            text: "You don't have to be the loudest person in the room. Most people aren't. What matters is that there's a reason to talk that isn't \"So... what do you do?\"",
          },
        ],
      },
      {
        id: "icebreakers",
        number: 3,
        kicker: "Icebreakers",
        title: "How icebreakers actually work (and why they're not cringey)",
        blocks: [
          {
            type: "p",
            text: "\"Icebreakers\" can sound like corporate team-building. On a trip they're different, because you're about to spend several days together and everyone wants it to go well.",
          },
          { type: "p", text: "The ones that work best share a few traits:" },
          {
            type: "list",
            style: "cards",
            items: [
              {
                title: "They're low-pressure.",
                text: "You can join in as much or as little as you like. Nobody is forced to perform.",
              },
              {
                title: "They're tied to the trip.",
                text: "Pairing up to find the best street snack, or swapping songs for a shared playlist, feels natural because it's part of the experience.",
              },
              {
                title: "They create inside jokes.",
                text: "The silly moment on day one becomes the story everyone retells on day four.",
              },
            ],
          },
          {
            type: "p",
            text: "If group activities aren't your thing, that's fine. Join the parts that feel comfortable and let the rest happen around you.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1625463006115-09f08489f591?auto=format&fit=crop&q=80&w=1200",
            alt: "Two friends laughing while looking at a phone together",
            caption: "swapping songs for the trip playlist",
          },
          {
            type: "quote",
            text: "The friendships tend to form in the small moments anyway: a shared umbrella, a long drive, a hike where someone offers you water.",
          },
        ],
      },
      {
        id: "roommates",
        number: 4,
        kicker: "The roommate question",
        title: "The roommate question",
        blocks: [
          {
            type: "p",
            text: "For many first-timers, rooming with a stranger is the biggest worry. Here's how it generally works with Kokalachi:",
          },
          {
            type: "list",
            style: "check",
            items: [
              {
                text: "If you travel solo, you're matched with a fellow solo traveller of the same gender in a sharing room.",
              },
              {
                text: "Customisations are possible too, because your comfort matters most to us.",
              },
            ],
          },
          {
            type: "p",
            text: "Your roommate is also someone who chose to travel alone, so you're starting from the same place. Most people find it's one of the easier parts of the trip, and often the first friendship of the journey.",
          },
        ],
      },
      {
        id: "safety",
        number: 5,
        kicker: "Safety",
        title: "What to look for in any group trip",
        blocks: [
          {
            type: "p",
            text: "Feeling safe is what makes the rest possible. Whether you travel with us or anyone else, a good group trip should give you:",
          },
          {
            type: "list",
            style: "check",
            items: [
              { text: "Small, curated groups, so you can actually get to know people" },
              { text: "A dedicated trip host who travels with the group and is easy to reach" },
              { text: "Clear community guidelines about how everyone treats each other" },
              { text: "Trusted partners for stays, transport, and activities" },
              { text: "Responsive support if something doesn't go as planned" },
            ],
          },
          {
            type: "p",
            text: "If a trip can't tell you who's coming, who's in charge, or who to call, ask more questions before you book. Every Kokalachi journey is built around the first four, and you can read more in our [Trust & Safety section](/#good-company).",
          },
        ],
      },
      {
        id: "make-the-most",
        number: 6,
        kicker: "Make the most of it",
        title: "How to make the most of it",
        blocks: [
          { type: "p", text: "A few small habits make a big difference:" },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1567879558138-baa0601dfeab?auto=format&fit=crop&q=80&w=1200",
            alt: "Three friends posing in the middle of a mountain road in Ladakh",
            caption: "say yes to the little detours",
          },
          {
            type: "list",
            style: "cards",
            items: [
              {
                title: "Arrive curious, not performing.",
                text: "You don't need to be \"fun\" or \"outgoing.\" Being interested in other people is enough.",
              },
              {
                title: "Say yes to the small things.",
                text: "The chai stop, the sunset walk, the extra round of cards. These are where the group becomes a group.",
              },
              {
                title: "Give people room.",
                text: "Some travellers want to chat all day, and some want quiet time with the view. Both are welcome.",
              },
              {
                title: "Share your photos.",
                text: "A shared photo album is one of the nicest ways to keep a trip alive afterwards.",
              },
              {
                title: "Keep an open mind about who you'll click with.",
                text: "The person you expected to be your closest friend on the trip often isn't. It's frequently someone you'd never have picked.",
              },
            ],
          },
        ],
      },
      {
        id: "last-day",
        number: 7,
        kicker: "The last day",
        title: "What happens on the last day",
        blocks: [
          { type: "p", text: "Here's the part nobody warns you about: you won't want it to end." },
          {
            type: "p",
            text: "By the final day, the people who were strangers on day one are finishing each other's jokes. On our journeys the last day usually includes a small ritual, like writing postcards to fellow travellers or sharing \"one thing I'll take back from this trip.\"",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1780536891273-79cdaee78211?auto=format&fit=crop&q=80&w=1200",
            alt: "Handwritten postcards with stamps spread out on a table",
            caption: "little notes, big memories",
          },
          {
            type: "postcard",
            text: "Day one you sat at the back of the tempo and didn't say a word. Day three you started the antakshari. Same group, next trip? Deal.",
            signature: "someone you met on day one",
          },
          {
            type: "p",
            text: "Then the group chat takes over, and in many groups it stays active long after everyone is home.",
          },
          {
            type: "quote",
            text: "That's the real reason people go on a second trip. It isn't only the destination. It's wanting to see those people again.",
          },
        ],
      },
      {
        id: "worth-it",
        kicker: "Is it worth it?",
        title: "So, is group travel worth it for a first-timer?",
        blocks: [
          {
            type: "p",
            text: "If you're the kind of person who has a bucket list but not a travel buddy, yes. A good group trip handles the planning, gives you a safe and structured way to meet people, and leaves you with more than photos.",
          },
          {
            type: "p",
            text: "You don't need to be an extrovert. You just need to be willing to say yes to the first chai stop.",
          },
        ],
      },
    ],
    cta: {
      title: "Ready to take the first step?",
      text: "Browse our upcoming journeys and find the one that makes you a little excited and a little nervous. That's usually the right one.",
    },
    relatedCategory: "FirstTimers",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Link-preview image (WhatsApp, LinkedIn…): a 1200×630 JPG, since the full hero is too heavy
// and Unsplash's auto=format can hand crawlers AVIF, which WhatsApp won't show
export function getBlogOgImage(post: BlogPost): string {
  if (post.ogImage) return post.ogImage;
  if (post.heroImage.startsWith("https://images.unsplash.com/")) {
    return `${post.heroImage.split("?")[0]}?fm=jpg&fit=crop&w=1200&h=630&q=75`;
  }
  return post.heroImage;
}

// Newest first
export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

// ~200 words a minute, rounded up
export function getReadingTime(post: BlogPost): number {
  const blockText = (block: BlogBlock) =>
    block.type === "list"
      ? block.items.map((item) => `${item.title ?? ""} ${item.text}`).join(" ")
      : block.type === "image"
        ? block.caption
        : block.text;
  const text = [
    ...post.intro,
    ...post.sections.flatMap((section) => [section.title, ...section.blocks.map(blockText)]),
  ].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

// "21 Oct 2026"
export function formatBlogDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
