export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "about-kokalachi",
    title: "About Kokalachi",
    items: [
      {
        question: "What is Kokalachi?",
        answer:
          "Kokalachi brings together people who love travelling but don't always have the right people to travel with. We run curated group journeys so you can explore the world alongside like-minded travellers.",
      },
      {
        question: "Is Kokalachi a travel company?",
        answer:
          "Yes, and a little more. We plan and run the trips, but the heart of what we do is the group: small, curated, and designed so that you leave with friends, not just photos.",
      },
      {
        question: "Who travels with Kokalachi?",
        answer:
          "Working professionals, first-time solo travellers, long-time explorers, and everyone in between. What they share is curiosity, respect for others, and an easygoing, up-for-it attitude.",
      },
      {
        question: "Do I need to know anyone to join?",
        answer:
          "Not at all. Most of our travellers join on their own. You can also join with a friend.",
      },
    ],
  },
  {
    id: "joining-a-journey",
    title: "Joining a Journey",
    items: [
      {
        question: "How do I book a trip?",
        answer:
          "Browse Upcoming Trips, choose your journey, pick your room type, and hit Book Now. Questions before booking? Message us on WhatsApp.",
      },
      {
        question: "What does \"curated group\" mean?",
        answer:
          "We keep groups intentionally small and think about the mix of people, so conversations come naturally and nobody is left on the sidelines.",
      },
      {
        question: "Can I join a trip with a friend or in a pair?",
        answer:
          "Yes. You can book multiple guests in one booking and choose a double-sharing or private room.",
      },
      {
        question: "Are there women-only trips?",
        answer:
          "Some journeys may be designated women-only. Look for the Women Only tag on the trip card.",
      },
      {
        question: "Will I meet the group before the trip?",
        answer:
          "Yes. After you book, you're introduced to your fellow travellers through a dedicated pre-trip community, so the first hello doesn't happen at the airport.",
      },
    ],
  },
  {
    id: "safety-and-comfort",
    title: "Safety & Comfort",
    items: [
      {
        question: "Is Kokalachi safe for solo travellers?",
        answer:
          "Safety comes first on every journey. That means small groups, verified travellers, trusted travel partners, clear community guidelines, and responsive support throughout your trip.",
      },
      {
        question: "What are the community guidelines?",
        answer:
          "Every traveller is expected to treat fellow travellers, local communities, and shared experiences with kindness and respect. We share the full guidelines when you book.",
      },
      {
        question: "What if I don't get along with someone in the group?",
        answer:
          "Our host is there to help. If something doesn't feel right, speak to your host at any point in the trip and we'll work it out with you.",
      },
      {
        question: "Who will I share a room with?",
        answer:
          "If you're travelling solo, you'll be matched with a fellow solo traveller of the same gender in a double- or triple-sharing room, depending on the trip. Prefer your own space? Choose the Private Room option where it's available.",
      },
      {
        question: "What if I have dietary requirements or a health concern?",
        answer:
          "Tell us when you book and we'll do our best to plan around it.",
      },
    ],
  },
  {
    id: "pricing-and-payments",
    title: "Pricing & Payments",
    items: [
      {
        question: "How much do trips cost?",
        answer:
          "Prices vary by destination and trip length, and each trip page shows the price per person with a clear breakdown. Domestic road trips like Udaipur and Manali start from a lower price point than longer or international journeys.",
      },
      {
        question: "What's included in the price?",
        answer:
          "Each trip page has an Included & Excluded section listing exactly what's covered (stays, transfers, specific meals, guided experiences, and your Trip Host) and what isn't.",
      },
      {
        question: "Are taxes included?",
        answer:
          "Taxes and fees are shown in the booking summary before you pay (for example GST, and TCS where applicable, plus payment gateway charges).",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Paying by UPI or bank transfer saves you the 3% payment gateway charge.",
      },
      {
        question: "What is the cancellation and refund policy?",
        answer:
          "When our team connects with you to confirm your booking, they'll explain the cancellation and refund terms for your journey and confirm them in writing before you pay. Read our [Terms & Conditions](/terms) for how cancellations work.",
      },
    ],
  },
  {
    id: "travel-logistics",
    title: "Travel Logistics",
    items: [
      {
        question: "Are flights included?",
        answer:
          "For most journeys, no. Flights are not included unless the trip page says so. Our team can help you plan flights, and you can always ask us on WhatsApp.",
      },
      {
        question: "Where do trips start and end?",
        answer:
          "It depends on the trip. Some begin at an airport (for example Srinagar, Guwahati, Kochi, Paro, or Colombo), and our Udaipur and Manali road trips depart from Delhi by Tempo Traveller. The start and end points are on each trip page.",
      },
      {
        question: "Do I need a visa or any permits?",
        answer:
          "For domestic trips, Indian travellers generally don't need special permits. For international journeys such as Bhutan and Sri Lanka, entry requirements apply, and we guide you through them when you book.",
      },
      {
        question: "Do I need travel insurance?",
        answer:
          "Travel insurance isn't included, and we strongly recommend it for every trip.",
      },
      {
        question: "What should I pack?",
        answer:
          "Every trip page has a What To Pack & Carry section with a list tailored to that destination, plus the Expected Weather & Temperature for your dates.",
      },
      {
        question: "What meals are included?",
        answer:
          "Each trip page lists the meals included under Meals Included. Meals not listed are left open so you can explore local food with your group.",
      },
      {
        question: "What if my flight is delayed or I miss the group?",
        answer:
          "Message your Trip Host or our WhatsApp support straight away and we'll help you rejoin the group where possible.",
      },
    ],
  },
  {
    id: "during-and-after",
    title: "During & After Your Trip",
    items: [
      {
        question: "Is there a plan for each day?",
        answer:
          "Yes. Each journey has a chapter-by-chapter itinerary with the places you'll visit and the community experiences built in, from icebreakers to bonfire evenings.",
      },
      {
        question: "Are the community activities compulsory?",
        answer:
          "No. They're designed to be fun, never forced. Join as much or as little as feels comfortable.",
      },
      {
        question: "What happens after the trip?",
        answer:
          "You join the Kokalachi alumni network, with a shared photo vault and a group chat that tends to stay active long after the trip ends. Many travellers meet again on later journeys.",
      },
    ],
  },
];
