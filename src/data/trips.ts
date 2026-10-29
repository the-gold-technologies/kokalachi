import { getNextDeparture, isBookingOpen } from "@/lib/departures";

// One dated batch of a trip. Add a line to a trip's `departures` to open a new date;
// past dates disappear from the site automatically.
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
  id: number;
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
  id: number;
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
}

const allTripCards: TripCardData[] = [
  {
    id: 10,
    slug: "manali",
    destination: "Manali",
    locationTag: "📍 Manali",
    duration: "3 Days / 2 Nights",
    groupSize: "Intimate Group",
    price: "5,999",
    vibeTags: ["Mountains", "Cafés", "Road Trip", "Scenic", "Community"],
    categories: ["Trending", "FirstTimers", "Adventure"],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1597167231350-d057a45dc868?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1590265788376-5d99eb11976e?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1623416225940-abdc8359edf4?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 10,
      title: "Valleys & Vistas: A Journey Through Manali",
      subtitle: "Pine Valleys, Mountain Cafés & Cozy Fireside Evenings",
      location: "Manali",
      duration: "2 Nights / 3 Days",
      rating: 5,
      price: 5999,
      gstAmount: 180,
      gstIncluded: true,
      originalPrice: 7999,
      offerLabel: "Limited Offer",
      image: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?auto=format&fit=crop&q=85&w=800",
      category: "Mountains",
      tag: "Triple Sharing",
      tagColor: "bg-[#0E5A60]",
      departures: [
        { id: "manali-2026-10-29", startDate: "2026-10-29", endDate: "2026-11-01", label: "Limited Offer", note: "Overnight departure from Delhi by AC Tempo Traveller" }
      ],
      hook: "Overnight Departure · Tempo Traveller · Manali",
      gallery: [
        "https://images.unsplash.com/photo-1597167231350-d057a45dc868?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1590265788376-5d99eb11976e?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1706696448543-a08dee17cea7?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1623416225940-abdc8359edf4?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1726266140611-90e75629f2a7?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Valleys & Vistas: A Journey Through Manali is a 2-night, 3-day road trip into the Himalayas, built for travellers who want their group to feel like regulars at the same mountain café by the end of it.",
        "Here's what the journey holds:",
        "• Leave Delhi by AC Tempo Traveller in the evening, with a highway dinner stop and a midnight chai pause as the group gets to know each other on the overnight drive up",
        "• Arrive in Manali, hike to Jogni Falls, and visit Hadimba and Manu Temples before an afternoon spent café-hopping through Old Manali's wood-fired pizza spots and bakery lanes",
        "• Take a scenic drive to Sissu for valley views and adventure activities, closing the day with a bonfire, music, and games back at the hotel",
        "• Squeeze in one last café stop and some souvenir shopping before the overnight drive back to Delhi, with postcards written and photos exchanged along the way"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "The Night Drive to the Hills",
          journey: "Evening assembly in Delhi → Board AC Tempo Traveller → En-route highway dinner stop → Overnight journey across the Himalayas.",
          community: "\"Two Truths & A Travel Lie\" and Highway Chai Stop: An icebreaker session aboard the Tempo Traveller as the group leaves the city, paired with a midnight roadside chai pause.",
          image: "https://images.unsplash.com/photo-1726266140611-90e75629f2a7?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Old-Town Charm & Café Hopping",
          journey: "Morning arrival in Manali → Hotel check-in and breakfast → Afternoon hike to Jogni Falls → Visit Hadimba Temple and Manu Temple → Old Manali café exploration → Evening walk at Mall Road.",
          community: "The Old Manali Café Crawl and Local Food Quest: Pairing up to explore Old Manali's famous wood-fired pizza spots and bakery lanes, concluding with a group shopping trip along Mall Road.",
          image: "https://images.unsplash.com/photo-1590265788376-5d99eb11976e?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Snow Peaks & Fireside Vibes",
          journey: "Breakfast → Scenic drive to Sissu (adventure activities and valley views) → Evening hotel return.",
          community: "The Trans Himalaya Reset and Fireside Jam Session: Trip to Sissu followed by an evening bonfire, music playlist swap, and group games back at the hotel.",
          image: "https://images.unsplash.com/photo-1623416225940-abdc8359edf4?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Mountain Farewell & Return",
          journey: "Morning breakfast and checkout → Last-minute café pause and souvenir shopping → Board Tempo Traveller for Delhi → En-route lunch stop → Late-night arrival in Delhi.",
          community: "The Circle Postcard Ritual and Frame Photo Exchange: Writing physical postcards to fellow travellers during the drive back and sharing the master media folder before reaching Delhi.",
          image: "https://images.unsplash.com/photo-1571677465484-2dd540924245?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Delhi–Manali–Delhi AC Tempo Traveller transfers",
        "Hotel stay (Triple Sharing)",
        "Daily breakfasts",
        "Daily dinners",
        "Guided excursions as per itinerary (Jogni Falls, Hadimba & Manu Temple, Sissu)",
        "Kokalachi community experiences",
        "Trip coordination"
      ],
      exclusions: [
        "Travel to and from the Delhi departure point",
        "Meals throughout the trip, unless explicitly mentioned",
        "Personal expenses, café purchases, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional sightseeing not listed in the itinerary",
        "Any costs arising from unforeseen circumstances, such as road closures or weather disruptions"
      ],
      whatToPack: [
        "Layered clothing: warm jackets, thermals, and woollens, as Manali and Sissu can get cold even outside peak winter",
        "Comfortable, sturdy shoes for the Jogni Falls hike and walking through Old Manali's lanes",
        "A neck pillow or light blanket for the overnight Tempo Traveller journeys both ways",
        "A light raincoat, since mountain weather can shift quickly",
        "Sunscreen and sunglasses, especially for the Sissu valley drive",
        "A power bank for the long road journeys",
        "Cash in small denominations for Old Manali's cafés and local markets",
        "A valid photo ID for hotel check-in"
      ],
      weather: [
        "Manali's weather shifts significantly by season, so this should be refined once your exact travel dates are confirmed, but as a general guide:",
        "October–February: Cold, with winter (Dec–Feb) bringing snowfall and sub-zero nights, so heavy woollens are essential",
        "March–June: Pleasant and cool, ideal for café-hopping and valley drives",
        "July–September: Monsoon season, with the possibility of landslides affecting mountain routes like Sissu",
        "Sissu, being higher altitude, is consistently colder than Manali town. Pack an extra layer for that leg of the trip regardless of season"
      ],
      faqs: [
        {
          question: "Where does this trip start from?",
          answer: "The trip begins with a common evening departure from Delhi by AC Tempo Traveller, and returns to Delhi late at night on Day 4."
        },
        {
          question: "What is the room type?",
          answer: "Stays are on a Triple Sharing basis."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Not applicable for this trip. It's a road journey by AC Tempo Traveller with a common departure point in Delhi, so no flights or permits are required."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Contact us for more details"
        }
      ]
    }
  },
  {
    id: 1,
    slug: "kashmir",
    destination: "Kashmir",
    locationTag: "📍 Kashmir",
    duration: "5 Days / 4 Nights",
    groupSize: "10–12 Travellers",
    price: "20,999",
    vibeTags: ["Adventure", "Nature", "Scenic", "Heritage", "Culture"],
    categories: ["Trending", "Adventure", "ScenicJourney"],
    images: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1593417376544-4c4201061e22?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 1,
      title: "Kashmir: Valley of the Shepherds & Silent Waters",
      subtitle: "Saffron Trails, Pine Canyons, and Heritage Houseboat Evenings",
      location: "Kashmir",
      duration: "4 Nights / 5 Days",
      rating: 5,
      price: 20999,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
      category: "Heritage",
      tag: "10-12 Travellers",
      tagColor: "bg-[#0E5A60]",
      departures: [
        { id: "kashmir-2026-11-10", startDate: "2026-11-10", endDate: "2026-11-14" }
      ],
      hook: "Kashmir: Valley of the Shepherds & Silent Waters is a 4-night, 5-day journey through saffron trails, pine canyons, Gulmarg's alpine meadows, and heritage houseboat evenings, curated for travellers who want the trip to be as much about the people beside them as the postcard views ahead.",
      gallery: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1593417376544-4c4201061e22?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Kashmir: Valley of the Shepherds & Silent Waters is a 4-night, 5-day journey through saffron trails, pine canyons, Gulmarg's alpine meadows, and heritage houseboat evenings, curated for travellers who want the trip to be as much about the people beside them as the postcard views ahead.",
        "Here's what the journey holds:",
        "• Begin in Srinagar with a scenic drive to Pahalgam, pausing at the saffron fields and Awantipora's cricket bat factory, and close the day with an acoustic bonfire night",
        "• Take a Union cab excursion to Aru Valley, walking the trail with your \"Step Buddy\" before a group picnic at Hajin",
        "• Drive to Gulmarg via the Srinagar bypass, past the saffron fields near Pampore, and explore it as a team on a photo scavenger hunt",
        "• Ride the Gulmarg Gondola, then head to Srinagar for an optional half-day at the Mughal Gardens (Chasma Shahi, Nishat Bagh & Shalimar Bagh)",
        "• Close with a sunset shikara ride, a night of traditional Kashmiri music and food, and a stay aboard a deluxe houseboat"
      ],
      highlights: [
        { icon: "Users", title: "Intimate Circle Size", description: "Max 12 Travellers" },
        { icon: "ShieldCheck", title: "Vetted Community", description: "Pre-trip intro & dedicated chat" },
        { icon: "Compass", title: "Kokalachi Trip Host", description: "Expert guidance throughout the journey" },
        { icon: "Heart", title: "Zero Planning Stress", description: "Stays, transport & select meals covered" }
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Saffron Trails & Woodland Bonfires",
          journey: "Early Srinagar Airport arrival → Scenic drive to Pahalgam (100 km / 3–4 hrs) → Enroute saffron fields pause → Awantipora Cricket Bat Factory stop → Check-in at the hotel.",
          community: "\"Two Truths & A Travel Lie\" and Acoustic Bonfire Night: An icebreaker session on the coach drive to Pahalgam. In the evening, gather around a riverside bonfire for fresh Kashmiri snacks, local folk music, and an open-mic storytelling session.",
          image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Canyon Trails & The Tribe Picnic",
          journey: "Breakfast → Union cab excursion to Aru Valley → Overnight at Pahalgam.",
          community: "The Step Buddy System and Scenic Valley Picnic: Travellers pair up as \"Step Buddies\" during the Aru Valley trail walk, concluding with a group picnic spread at the idyllic Hajin spot and an evening pass-the-aux music session.",
          image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Pahalgam to Gulmarg: The Alpine Transition",
          journey: "Check out from Pahalgam → Scenic drive to Gulmarg via the Srinagar bypass route (approx. 4–5 hrs), with views of the valley floor, the saffron fields near Pampore, and popular avenues → Arrive in Gulmarg and check in at the hotel → Warm lunch.",
          community: "The Gulmarg Photo Scavenger Hunt: Instead of exploring Gulmarg individually, the group splits into dynamic pairs or small teams at the base station. Each team gets a fun photo scavenger hunt list to complete across the Golf Course, St Mary's Church, Phase 1 (Kongdori) and Phase 2 (Apharwat Peak), such as \"capture the most dramatic snow selfie\", \"find a fellow traveller wearing the brightest winter jacket\", or \"pose like you're conquering Everest\".",
          image: "https://images.unsplash.com/photo-1568889753852-196c487a536e?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Heritage Gardens & Floating Sunsets",
          journey: "Early breakfast and Gondola ride → Drive to Srinagar → Half-day Mughal Gardens exploration (optional: Chasma Shahi, Nishat Bagh & Shalimar Bagh) → Sunset shikara ride → Deluxe houseboat check-in.",
          community: "The Musical Feast and Floating Postcard Ritual: Writing physical postcards to fellow travellers on the open deck of the shikara during sunset, followed by an evening of traditional Kashmiri music and a traditional Kashmiri dinner.",
          image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "The Unbroken Circle",
          journey: "Morning breakfast → Srinagar Airport transfer by coach.",
          community: "The Circle Alumni Onboarding and Frame Photo Exchange: A final group photo on the houseboat deck and official onboarding into the Kokalachi alumni network to share the master photo vault before departure.",
          image: "https://images.unsplash.com/photo-1593417376544-4c4201061e22?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Accommodation in Pahalgam, Gulmarg, and a Deluxe Houseboat in Srinagar",
        "Daily breakfast",
        "Private airport and inter-hotel transfers",
        "English-speaking guide throughout the itinerary",
        "Aru Valley excursion (Union cab)",
        "Sunset shikara ride",
        "Bonfire evening with local snacks",
        "Live music evenings",
        "Kokalachi Trip Host throughout the journey"
      ],
      exclusions: [
        "Flights to and from Srinagar",
        "Meals and beverages, unless explicitly mentioned",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional activities not listed above",
        "Mughal Gardens visit and entry fees (optional)",
        "Any costs arising from unforeseen circumstances, such as flight delays or natural disasters"
      ],
      meals: [
        "Day 1: Kashmiri snacks at the riverside bonfire evening",
        "Day 2: Group picnic spread at Hajin (lunch)",
        "Day 5: Breakfast aboard the houseboat",
        "Daily breakfast is included throughout the trip",
        "Lunches and dinners outside of the moments listed above are not included, so you can explore local food spots with your group at your own pace"
      ],
      whatToPack: [
        "Layered clothing: light woollens for the day, a warmer jacket for evenings and higher altitudes (Aru Valley, Gulmarg)",
        "A comfortable pair of walking/trekking shoes for the Aru Valley trail walk",
        "A warm, waterproof jacket. November is mostly dry, but early snow is possible in Gulmarg",
        "Sunscreen, sunglasses, and a cap for daytime activities",
        "A power bank and universal adapter",
        "A valid photo ID (mandatory for domestic flights and permits)",
        "A reusable water bottle",
        "A notebook or postcards of your own, if you'd like to add to the Floating Postcard Ritual on Day 4",
        "Cash in small denominations for local markets and personal expenses"
      ],
      weather: [
        "Kashmir in mid-November is in late autumn, turning to early winter: crisp, mostly dry days, cold nights, and the chinar trees in their last autumn colours.",
        "Srinagar: Daytime highs of around 13–15°C, dropping to around 0°C at night",
        "Pahalgam: Colder given the altitude, with daytime highs of around 9–11°C and nights below freezing",
        "Gulmarg: The coldest stop, with daytime highs of around 5–7°C, nights well below freezing, and a chance of the season's first snow",
        "Figures above are typical seasonal ranges, not a forecast, so it's worth checking again a week before departure."
      ],
      faqs: [
        {
          question: "Age Category:",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes, our team can help you plan your flights to Srinagar and guide you through any permits Kashmir travel may require. Reach out to us on WhatsApp and we'll take it from there."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Srinagar Airport, with pickup arranged as part of your package. Your journey home also ends at Srinagar Airport on Day 5."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room, so you're never rooming with a stranger by chance. Our team curates roommate pairings the same way we curate the group itself. If you'd prefer your own space, the Private Room option is available at checkout."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Please reach out to our team or refer to the checkout page for detailed cancellation policies."
        }
      ]
    },
  },
  {
    id: 2,
    slug: "meghalaya",
    destination: "Meghalaya",
    locationTag: "📍 Meghalaya",
    duration: "5 Nights / 6 Days",
    groupSize: "Intimate Group",
    dates: "Upcoming",
    price: "TBA",
    vibeTags: ["Adventure", "Trekking", "Scenic", "Exploration"],
    categories: ["Trending", "Adventure"],
    images: [
      "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1689089526066-c7e6e95ee265?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 2,
      title: "Roots & Rainbows - Meghalaya",
      subtitle: "The Mist & Waterfalls Circle · Lush Rainforests, Deep Canyons, and High-Energy Adventure",
      location: "Meghalaya",
      duration: "5 Nights / 6 Days",
      rating: 5,
      price: 42999,
      gstAmount: 540,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800",
      category: "Adventure",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 12,
      nextDeparture: "Upcoming",
      hook: "This Journey of Roots & Rainbows is a 5-night, 6-day plunge into Meghalaya's rainforests, canyons, and living-root bridges, built for travellers who want their group chat buzzing long after the last waterfall dip.",
      gallery: [
        "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1689089526066-c7e6e95ee265?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "This Journey of Roots & Rainbows is a 5-night, 6-day plunge into Meghalaya's rainforests, canyons, and living-root bridges, built for travellers who want their group chat buzzing long after the last waterfall dip.",
        "Here's what the journey holds:",
        "• Land in Guwahati and drive into Shillong, pausing at Umiam Lake before an evening street-food walk through Police Bazaar",
        "• Stand above the clouds at Laitlum Canyons, then cool off with a swim under Krang Suri Waterfall",
        "• Walk through the sacred, centuries-old Mawphlang forest and visit the Mawsynram caves before arriving in Cherrapunjee",
        "• Descend 3,200 steps to Meghalaya's famous Double Decker Living Root Bridge, hiking on to Rainbow Falls",
        "• Close the trip with a Brahmaputra River sunset cruise, a postcard ritual, and a Kamakhya Temple visit before departure"
      ],
      highlights: [
        { icon: "Users", title: "Intimate Circle Size", description: "Max 12 Travellers" },
        { icon: "ShieldCheck", title: "Vetted Community", description: "Pre-trip intro & dedicated chat" },
        { icon: "Compass", title: "Kokalachi Trip Host", description: "Expert guidance throughout the journey" },
        { icon: "Heart", title: "Zero Planning Stress", description: "Stays, transport & select meals covered" }
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "The Unfiltered Welcome",
          journey: "Guwahati Airport arrival → Scenic drive to Shillong → Umiam Lake pause → Police Bazaar evening walk.",
          community: "\"Two Truths & A Travel Lie\" and Street-Food Quest: An icebreaker session on the drive to Shillong, followed by pairing up at Police Bazaar to find and review local street snacks over evening tea.",
          image: "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Canyon Trails & Waterfall Dips",
          journey: "Laitlum Canyons viewpoint → Krang Suri Waterfall swim → Return to Shillong.",
          community: "The Pass-the-Aux Horizon Session and Water Curtain Plunge: A 15-minute group quiet moment at Laitlum adding tracks to the shared Spotify playlist, followed by a synchronized team plunge under the Krang Suri waterfall curtain.",
          image: "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Ancient Forests & Mountain Myths",
          journey: "Mawsynram Caves → Mawphlang Sacred Grove walk → Khasi Model Village → Elephant Falls → Cherrapunjee arrival.",
          community: "The Silent Forest Walk and \"Waiting Problem\" Fireside Chat: A 10-minute silent walk through the ancient grove, ending with an evening bonfire chat sharing the trips everyone put off before joining this circle.",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "The Tribe Challenge",
          journey: "Full-day Nongriat trek → 3,200 steps descent → Double Decker Living Root Bridge → Rainbow Falls hike → Cherrapunjee return.",
          community: "The Step Buddy System and Victory Dip: Travellers are paired as \"Step Buddies\" to support each other during the 3,200-step trek, celebrating the finish with a group splash at Rainbow Falls.",
          image: "https://images.unsplash.com/photo-1689089526066-c7e6e95ee265?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "Sunset Reflections",
          journey: "Cherrapunjee to Guwahati drive → Brahmaputra River sunset cruise.",
          community: "The Postcard Ritual and Circle Awards: Writing physical postcards to fellow travellers on the deck of the riverboat, followed by handing out non-competitive \"Circle Badges\" during dinner.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 06",
          title: "The Unbroken Circle",
          journey: "Morning Kamakhya Temple visit → Guwahati Airport drop.",
          community: "The Circle Alumni Onboarding: A final group photo exchange and onboarding into the official post-trip alumni chat before departure.",
          image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Accommodation in Shillong and Cherrapunjee",
        "Daily breakfast",
        "Private airport and inter-hotel transfers",
        "English-speaking guide throughout the itinerary",
        "Laitlum Canyons and Krang Suri Waterfall excursion",
        "Mawsynram Caves and Mawphlang Sacred Grove entry",
        "Nongriat trek to the Double Decker Living Root Bridge",
        "Brahmaputra River sunset cruise",
        "Kokalachi Trip Host throughout the journey",
        "Flight assistance for arrival/departure"
      ],
      exclusions: [
        "Flights to and from Guwahati",
        "Meals and beverages, unless explicitly mentioned",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional activities not listed above",
        "Any costs arising from unforeseen circumstances, such as flight delays or natural disasters",
        "Taxes (5% GST and 2% TCS)"
      ],
      meals: [
        "Day 1: Evening tea and street-food tasting at Police Bazaar",
        "Day 3: Bonfire dinner in Cherrapunjee",
        "Day 5: Dinner aboard the Brahmaputra sunset cruise",
        "Daily breakfast is included throughout the trip",
        "Lunches and dinners outside of the moments listed above are not included"
      ],
      whatToPack: [
        "Sturdy trekking shoes with good grip. The Nongriat descent involves 3,200 steps and can be slippery",
        "A quick-dry change of clothes for the waterfall swim at Krang Suri",
        "A light raincoat or poncho. Meghalaya is one of the wettest regions in the world",
        "Layered clothing for cooler mornings and evenings in Shillong and Cherrapunjee",
        "A dry bag or waterproof pouch for phones and cameras",
        "A reusable water bottle and a basic first-aid kit for the trek",
        "A valid photo ID",
        "Cash in small denominations. Card acceptance is limited in Cherrapunjee and Nongriat"
      ],
      weather: [
        "Expected Weather & Temperature Meghalaya's climate depends heavily on the season. It's known globally for its rainfall, so conditions can shift quickly between misty and clear.",
        "Expect cool, humid mornings and evenings, with daytime temperatures generally comfortable for trekking",
        "Rain is possible at any time of year in this region, even outside the monsoon months. Pack for it regardless of your travel dates",
        "Trails can be slippery after rainfall, so grip-focused footwear matters more than warmth here"
      ],
      faqs: [
        {
          question: "Age Category:",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes, our team can help you plan your flights to Guwahati. No special permits are required for Indian nationals travelling to Meghalaya."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Guwahati Airport, with pickup arranged as part of your package. Your journey home also ends at Guwahati Airport on Day 6."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room. Our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Please reach out to our team or refer to the checkout page for detailed cancellation policies."
        }
      ]
    },
  },
  {
    id: 3,
    slug: "kerala",
    destination: "Kerala",
    locationTag: "📍 Kerala",
    duration: "5 Nights / 6 Days",
    groupSize: "Intimate Group",
    price: "TBA",
    vibeTags: ["Heritage", "Coastal", "Culture", "Relaxed", "Scenic"],
    categories: ["Trending", "SlowTravel"],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 3,
      title: "Tides & Tea Gardens - Kerala",
      subtitle: "Heritage, Mountains & Slow Backwaters · Colonial Streets, Misty Western Ghats, and Coastal Serenity",
      location: "Kerala",
      duration: "5 Nights / 6 Days",
      rating: 5,
      price: 29999,
      gstAmount: 360,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800",
      category: "Coastal & Heritage",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      departures: [
        { id: "kerala-2026-12-03", startDate: "2026-12-03", endDate: "2026-12-08" }
      ],
      hook: "Tides & Tea Gardens is a 5-night, 6-day slow-travel journey through Kerala's colonial streets, misty Western Ghats, and quiet backwaters, designed for travellers who want the pace of the trip to match the pace of getting to know each other.",
      gallery: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Tides & Tea Gardens is a 5-night, 6-day slow-travel journey through Kerala's colonial streets, misty Western Ghats, and quiet backwaters, designed for travellers who want the pace of the trip to match the pace of getting to know each other.",
        "Here's what the journey holds:",
        "• Wander Fort Kochi's heritage lanes, photograph the Chinese fishing nets, and catch sunset at Fort Kochi Beach",
        "• Head into the Western Ghats to Vagamon's meadows, pine forests, and tea gardens for a digital-detox afternoon",
        "• Drive the winding roads to Ponmudi, dropping symbolic \"stress stones\" into the Golden Valley stream",
        "• Trade mountain views for coastal energy at Varkala's clifftop cafés and Papanasam Beach",
        "• Canoe through Munroe Island's narrow backwater canals in complete silence, then close the trip with a postcard exchange and farewell dinner"
      ],
      highlights: [
        { icon: "Users", title: "Intimate Circle Size", description: "Max 12 Travellers" },
        { icon: "ShieldCheck", title: "Vetted Community", description: "Pre-trip intro & dedicated chat" },
        { icon: "Compass", title: "Kokalachi Trip Host", description: "Expert guidance throughout the journey" },
        { icon: "Heart", title: "Zero Planning Stress", description: "Stays, transport & select meals covered" }
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Heritage & Coastal Icebreakers",
          journey: "Kochi Airport arrival → Fort Kochi heritage lanes → Chinese fishing nets → Princess Street walk → Sunset at Fort Kochi Beach.",
          community: "Tuk-Tuk Photo Quest and Beach Icebreakers: Pairing up to capture candid portraits against colonial backdrops, followed by a beachside \"Two Truths & A Travel Lie\" session at sunset.",
          image: "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Pine Forests & Fireside Vibes",
          journey: "Drive to Vagamon (Western Ghats) → Vagamon Meadows → Pine forest walk → Tea gardens.",
          community: "The Silent Canopy Pause and Fireside Chat: A 10-minute digital-detox walk through the pine trees with instrumental ambient music, followed by an evening bonfire chat.",
          image: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Winding Roads & Horizon Sounds",
          journey: "Scenic drive to Ponmudi → Golden Valley streams → Mountain viewpoint walk.",
          community: "The Riverstone Ritual and Acoustic Sunset: Dropping symbolic \"stress stones\" into the Golden Valley stream, followed by an acoustic sunset singalong overlooking the valley.",
          image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Clifftop Sunsets & Coastal Energy",
          journey: "Drive to Varkala → Papanasam Beach → Varkala Cliff cafés.",
          community: "Sunset Beach Games and Cliff Café Swap: Casual beach frisbee on Papanasam Beach, followed by rotating seats between courses at dinner along the Varkala Cliff.",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "Slow Waterways & Fellowship",
          journey: "Day trip to Munroe Island → Canoe ride through narrow canals → Village walk → Varkala return.",
          community: "The Silent Canoe Stream and Farewell Dinner: 15 minutes of complete silence on the backwater canoes to absorb the natural setting, followed by a postcard exchange and badge ceremony in Varkala.",
          image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 06",
          title: "The Unbroken Circle",
          journey: "Leisurely breakfast → Trivandrum Airport transfer.",
          community: "The Co-Branded Vault Exchange: Sharing a master media folder of all trip photos and connecting the group to the Kokalachi alumni network.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Accommodation in Fort Kochi, Vagamon/Ponmudi region, and Varkala",
        "Daily breakfast",
        "Private airport and inter-hotel transfers",
        "English-speaking guide throughout the itinerary",
        "Munroe Island backwater canoe excursion",
        "Vagamon Meadows and tea garden visit",
        "Kokalachi Trip Host throughout the journey",
        "Flight assistance for arrival/departure"
      ],
      exclusions: [
        "Flights into Kochi and out of Trivandrum",
        "Meals and beverages, unless explicitly mentioned",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional activities not listed above",
        "Any costs arising from unforeseen circumstances, such as flight delays or natural disasters",
        "Taxes (5% GST and 2% TCS)"
      ],
      meals: [
        "Day 2: Evening bonfire dinner in Vagamon",
        "Day 4: Dinner at a Varkala Cliff café",
        "Day 5: Farewell dinner in Varkala",
        "Daily breakfast is included throughout the trip",
        "Lunches and dinners outside of the moments listed above are not included, so you can explore Kerala's food scene with your group at your own pace"
      ],
      whatToPack: [
        "Light, breathable clothing for the coast, with a light layer for cooler evenings in Vagamon and Ponmudi",
        "Comfortable walking shoes for heritage lanes and forest walks",
        "Swimwear and a quick-dry towel for Munroe Island and beach stops",
        "Sunscreen, sunglasses, and a hat for beach days in Varkala",
        "A light raincoat, especially if travelling during Kerala's rainier months",
        "A reusable water bottle",
        "A notebook or postcards of your own, if you'd like to add to the postcard ritual on Day 5",
        "Cash in small denominations for local markets and cafés"
      ],
      weather: [
        "Kerala's climate is generally warm and humid, tempered by the coast on one end and the cooler Western Ghats on the other.",
        "Coastal areas (Kochi, Varkala): Warm and humid through most of the year, with sea breezes keeping evenings comfortable",
        "Western Ghats (Vagamon, Ponmudi): Noticeably cooler, especially in the early mornings and evenings. Mist is common",
        "Rain is possible depending on your travel dates, particularly during the monsoon months. Check closer to departure and pack a light raincoat regardless"
      ],
      faqs: [
        {
          question: "Age Category",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes, our team can help you plan your flights into Kochi and out of Trivandrum. No special permits are required for Indian nationals travelling to Kerala."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Kochi Airport, with pickup arranged as part of your package. Your journey ends at Trivandrum Airport on Day 6."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room. Our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Please reach out to our team or refer to the checkout page for detailed cancellation policies."
        }
      ]
    },
  },
  {
    id: 4,
    slug: "bhutan",
    destination: "Bhutan",
    locationTag: "📍 Bhutan",
    duration: "5 Nights / 6 Days",
    groupSize: "Intimate Group",
    dates: "Upcoming",
    price: "TBA",
    vibeTags: ["Culture", "Scenic", "Mindful", "Heritage", "Discovery"],
    categories: ["Trending", "SlowTravel"],
    images: [
      "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1555821108-3fb2763b226a?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 4,
      title: "The Thunder Dragon Trail - Bhutan",
      subtitle: "The Kingdom of Happiness · Sacred Monasteries, High Passes, and Mindfulness",
      location: "Bhutan",
      duration: "5 Nights / 6 Days",
      rating: 5,
      price: 41000,
      gstAmount: 900,
      tcsPercent: 2,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800",
      category: "Culture & Discovery",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 12,
      nextDeparture: "Upcoming",
      hook: "The Thunder Dragon Trail is a 5-night, 6-day journey through Bhutan's monasteries, mountain passes, and valleys, built for travellers looking for more than sightseeing, and open to a little reflection along the way.",
      gallery: [
        "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1555821108-3fb2763b226a?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "The Thunder Dragon Trail is a 5-night, 6-day journey through Bhutan's monasteries, mountain passes, and valleys, built for travellers looking for more than sightseeing, and open to a little reflection along the way.",
        "Here's what the journey holds:",
        "• Arrive in Paro and cross the Iron Bridge at Tamchhog Lhakhang en route to Thimphu, setting personal intentions with a traditional butter tea tasting",
        "• Try your hand at traditional archery, explore Thimphu's art schools, and take in the valley from Sangaygang Viewpoint",
        "• Cross Dochula Pass, home to 108 stupas, and write personal wishes on prayer flags before reaching Punakha Dzong",
        "• Walk through the Royal Botanical Garden and Paro's dzongs, building up to the trip's biggest moment",
        "• Hike to the legendary Tiger's Nest Monastery, pacing each other up the climb before a farewell night in Paro"
      ],
      highlights: [
        { icon: "Users", title: "Intimate Circle Size", description: "Max 12 Travellers" },
        { icon: "ShieldCheck", title: "Vetted Community", description: "Pre-trip intro & dedicated chat" },
        { icon: "Compass", title: "Kokalachi Trip Host", description: "Expert guidance throughout the journey" },
        { icon: "Heart", title: "Zero Planning Stress", description: "Stays, transport & select meals covered" }
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & The Happiness Meter",
          journey: "Paro Airport arrival → Tamchhog Lhakhang (Iron Bridge) → Chuzom Confluence → Thimphu check-in.",
          community: "The GNH Baseline and Salted Butter Tea Trial: Recording initial \"Happiness Meter\" goals in pocket journals, followed by a group tasting of traditional Suja (butter tea).",
          image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Art, Archery & Mountain Skylines",
          journey: "Buddha Point → Sangaygang Viewpoint → Zorig Chusum Art School → Simply Bhutan Museum.",
          community: "Traditional Archery Challenge and The 3-Word Pause: Competing in friendly traditional dart and archery games, paired with a 3-word reflection session overlooking Thimphu valley.",
          image: "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Pass of 108 Stupas",
          journey: "Drive to Punakha via Dochula Pass (3,080m) → Punakha Dzong → Suspension bridge.",
          community: "Prayer Flags on the Wind and Suspension Bridge Hype: Writing personal wishes on traditional prayer flags at Dochula Pass, followed by paired photo walks across Bhutan's longest suspension bridge.",
          image: "https://images.unsplash.com/photo-1555821108-3fb2763b226a?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Botanical Walks & Mountain Legends",
          journey: "Royal Botanical Garden (Lampelri) → Ta Dzong → Rinpung Dzong → Paro arrival.",
          community: "The Riverstone Gratitude Circle and Hike Prep: Creating a group rock cairn by the Paro Chhu river, followed by a supportive carbo-load dinner before the big hike.",
          image: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "The Tiger's Nest Tribe Hike",
          journey: "Full-day hike to Taktsang Lhakhang (Tiger's Nest) → Pine forest trail → Mountain cafeteria → Paro return.",
          community: "The Hike Relay and Future-Self Letters: Pacing each other up the 3-hour climb using a shared hike playlist, writing letters to your future self at the mountain cafeteria, and ending with a signed frame farewell night.",
          image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 06",
          title: "Blessings & Onward Journeys",
          journey: "Paro hotel checkout → Paro Airport transfer.",
          community: "The Circle Alumni Onboarding: A final prayer wheel spin together and onboarding into the official post-trip alumni network.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Accommodation in Thimphu and Paro",
        "Daily breakfast",
        "Private airport and inter-hotel transfers",
        "English-speaking guide throughout the itinerary",
        "Dochula Pass, Punakha Dzong, and suspension bridge visit",
        "Tiger's Nest Monastery guided hike",
        "Traditional archery and cultural experiences",
        "Kokalachi Trip Host throughout the journey",
        "Bhutan Sustainable Development Fee (SDF)"
      ],
      exclusions: [
        "International flights to and from Paro",
        "Meals and beverages, unless explicitly mentioned",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional activities not listed above",
        "Any costs arising from unforeseen circumstances, such as flight delays or natural disasters",
        "Visa fees (Bhutan requires advance visa arrangement for most nationalities)"
      ],
      meals: [
        "Day 1: Traditional butter tea (Suja) tasting in Thimphu",
        "Day 4: Carbo-load dinner in Paro, ahead of the Tiger's Nest hike",
        "Day 5: Farewell dinner in Paro",
        "Daily breakfast is included throughout the trip",
        "Lunches and dinners outside of the moments listed above are not included"
      ],
      whatToPack: [
        "Layered clothing: mornings and evenings in Thimphu and Paro are cool even when afternoons are mild",
        "Sturdy, broken-in hiking shoes for the Tiger's Nest climb. This is a real trek, not a casual walk",
        "A light jacket or fleece for Dochula Pass, which sits above 3,000m and is notably colder than the valleys",
        "A reusable water bottle and some energy snacks for the hike",
        "Modest clothing for visiting dzongs and monasteries. Shoulders and knees should be covered",
        "A valid passport and any required visa documentation (arranged in advance for Bhutan)",
        "A power bank, as charging points can be limited on the road",
        "Cash in small denominations. Card acceptance is limited outside major towns"
      ],
      weather: [
        "Bhutan's climate varies sharply with altitude. Thimphu and Paro sit in cooler mountain valleys, and Dochula Pass is colder still.",
        "Expect cool mornings and evenings throughout the trip, even when midday sun feels pleasant",
        "Dochula Pass (3,080m) can be significantly colder and windier than the valley towns. A warm layer is essential here specifically",
        "Conditions can shift quickly at altitude, so pack for a wider temperature range than the valley forecast alone would suggest"
      ],
      faqs: [
        {
          question: "Age Category",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes, Bhutan requires advance visa arrangements for most nationalities, and our team will guide you through this as part of booking, along with flight planning into Paro."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins and ends at Paro International Airport, Bhutan's only international airport."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room. Our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Please reach out to our team or refer to the checkout page for detailed cancellation policies."
        }
      ]
    },
  },
  {
    id: 5,
    slug: "udaipur",
    destination: "Udaipur",
    locationTag: "📍 Udaipur",
    duration: "3 Days / 2 Nights",
    groupSize: "20 Travellers",
    price: "9,999",
    vibeTags: ["Heritage", "Culture", "Scenic", "Road Trip", "Community"],
    categories: ["Trending", "FirstTimers"],
    images: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 5,
      title: "The Majestic Sunsets | Udaipur · Royalty, Lakes & Connections",
      subtitle: "Royal Havelis, Lakeside Sunsets, an Overnight Trip that helps you meet new people sharing the love for travel, thereby turning strangers into friends",
      location: "Udaipur",
      duration: "3 Days / 2 Nights",
      rating: 4.9,
      price: 9999,
      originalPrice: 18999,
      gstAmount: 360,
      image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=85&w=800",
      category: "Heritage",
      tag: "Community",
      tagColor: "bg-amber-100 text-amber-800",
      departures: [
        { id: "udaipur-2026-10-01", startDate: "2026-10-01", endDate: "2026-10-04", spotsLeft: 20 },
        { id: "udaipur-2026-11-13", startDate: "2026-11-13", endDate: "2026-11-16" },
        { id: "udaipur-2026-12-11", startDate: "2026-12-11", endDate: "2026-12-13", note: "Departs Delhi on 10 Dec night" },
      ],
      hook: "Overnight departure via Tempo Traveller from Delhi to Udaipur",
      overview: [
        "The Majestics Sunsets is a 2-night, 3-day road trip to the City of Lakes, built around the ideation that the journey towards this royal destination matters equally as much as the destination",
        "Here's what the journey holds:",
        "Depart Delhi by Tempo Traveller at night, with ice-breakers and music as the group gets to know each other before Udaipur even comes into view",
        "Check into Sarovar on Lake Pichola, then spend the evening watching the sunset over Lake Pichola",
        "Explore the City Palace, Jagdish Temple, and the lanes of Old Udaipur, followed by an afternoon at Fateh Sagar Lake and Saheliyon Ki Bari",
        "Close the second night with one last evening of music, games, and conversation as a full group",
        "Share a final \"one thing I'll take back from this trip\" moment by the lake before the road trip back to Delhi"
      ],
      itinerary: [
        {
          day: "01",
          title: "Departure Night: The Journey Begins",
          journey: "Common departure from Delhi by Tempo Traveller → Overnight journey towards Udaipur.",
          community: "The Kokalachi Moment: Ice-breaker activities and introductions on the road, with music, games, and travel conversations as the trip begins before Udaipur is even in sight. \"You came as strangers. Let the journey change that.\"",
          image: "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "02",
          title: "Welcome to the City of Lakes",
          journey: "Arrive in Udaipur → Check in at Sarovar on Lake Pichola → Leisure afternoon → Evening at Lake Pichola for sunset and group photographs.",
          community: "The Lake Pichola Sunset: The group gathers by the lake as the sun sets over the City of Lakes, with music, conversations, and group photographs, the signature evening of the trip.",
          image: "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "03",
          title: "Royal Udaipur, Explored Together",
          journey: "City Palace → Jagdish Temple → Old Udaipur lanes and local markets → Afternoon at Saheliyon Ki Bari and Fateh Sagar Lake.",
          community: "The Kokalachi Old City Experience and Sunset Moment: Photography stops, local handicraft discoveries, a chai break, and group interaction challenges through Old Udaipur's lanes, followed by an evening of music, conversations, games, and drinks back at the hotel.",
          image: "https://images.unsplash.com/photo-1622462281019-f6118fc42e46?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "04",
          title: "Goodbyes, But Not Really",
          journey: "Breakfast and check-out → Final photographs by Lake Pichola → Free time for shopping → Return road trip to Delhi.",
          community: "The Kokalachi Circle: Before leaving Udaipur, everyone shares \"one thing I'll take back from this trip\", because the idea was never just to visit Udaipur, but to find the people you met along the way.",
          image: "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Delhi–Udaipur–Delhi travel by Tempo Traveller",
        "Accommodation at Sarovar on Lake Pichola, Udaipur",
        "Hotel breakfast (2 mornings)",
        "Udaipur local sightseeing",
        "Kokalachi community experiences",
        "Trip coordination"
      ],
      exclusions: [
        "Travel to and from the Delhi departure point",
        "Meals not explicitly listed above",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for monuments/attractions not included in the group itinerary",
        "Any costs arising from unforeseen circumstances, such as road delays or weather disruptions",
        "Taxes, if not already included in the ₹9,999 package price"
      ],
      whatToPack: [
        "Light, breathable clothing for warm October days, with a light layer for cooler evenings by the lake",
        "Comfortable walking shoes for the City Palace, Old Udaipur's lanes, and general sightseeing",
        "A neck pillow or light blanket for the overnight Tempo Traveller journey",
        "Sunscreen, sunglasses, and a cap for daytime sightseeing",
        "A power bank, useful for the long road journey both ways",
        "A camera or phone ready for the Lake Pichola sunset. This is the trip's most photographed moment",
        "A valid photo ID for hotel check-in",
        "Cash in small denominations for Old Udaipur's local markets and handicraft stalls"
      ],
      weather: [
        "Udaipur in October sits at the tail end of the monsoon, with warm, mostly dry days and pleasantly cool evenings, one of the more comfortable times of year to visit.",
        "Daytime highs typically reach around 32–33°C (90–91°F)",
        "Evenings and nights cool down to around 18–20°C (65–68°F), comfortable for the Lake Pichola sunset evenings",
        "Rain is unlikely but not impossible. A light layer for evenings is more useful than rain gear"
      ],
      faqs: [
        {
          question: "Group Size",
          answer: "20 people"
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Not applicable for this trip. It's a road journey by Tempo Traveller with a common departure point in Delhi, so no flights or permits are required."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins with a common departure from Delhi by Tempo Traveller on the night of departure, and returns to Delhi on the last day of the trip."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Contact us for more details"
        }
      ]
    }
  },
  {
    id: 7,
    slug: "sri-lanka",
    destination: "Sri Lanka",
    locationTag: "📍 Sri Lanka",
    duration: "5 Days / 4 Nights",
    groupSize: "Intimate Group",
    price: "40,000",
    vibeTags: ["Coastal", "Heritage", "Food", "Ocean", "Community"],
    categories: ["BeachEscape"],
    images: [
      "https://images.unsplash.com/photo-1579989197111-928f586796a3?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1580910527739-556eb89f9d65?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1561426802-392f5b6290cf?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 7,
      title: "Ramparts & Whale Waters",
      subtitle: "Galle Fort Sunsets, Southern Beaches, and a Morning Out on the Open Ocean",
      location: "Sri Lanka · Galle & Colombo",
      duration: "4 Nights / 5 Days",
      // ₹42,000 per person on twin sharing, ₹2,000 off for early birds; GST added on top
      price: 40000,
      gstAmount: 900,
      originalPrice: 42000,
      offerLabel: "Early Bird",
      image: "https://images.unsplash.com/photo-1579989197111-928f586796a3?auto=format&fit=crop&q=85&w=800",
      category: "Beach Escape",
      tag: "Twin Sharing",
      departures: [
        { id: "sri-lanka-2026-11-18", startDate: "2026-11-18", endDate: "2026-11-22", label: "Early Bird" }
      ],
      hook: "Ramparts & Whale Waters is a 4-night, 5-day escape to Sri Lanka's southern coast — sunsets on the walls of Galle Fort, a morning at sea out of Mirissa, and a final night in Colombo with the people you started the week as strangers with.",
      gallery: [
        "https://images.unsplash.com/photo-1579989197111-928f586796a3?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1580910527739-556eb89f9d65?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1561426802-392f5b6290cf?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Ramparts & Whale Waters is a 4-night, 5-day escape to Sri Lanka's southern coast — sunsets on the walls of Galle Fort, a morning at sea out of Mirissa, and a final night in Colombo with the people you started the week as strangers with.",
        "Here's what the journey holds:",
        "• Land in Colombo, transfer straight to Galle, and open the trip with a Galle Fort walk, sunset on the ramparts, and a welcome sundowner with the group",
        "• Spend a beach day at Unawatuna with a group picnic, then café-hop and shop through Galle Fort, with a friendly street photography competition on the side",
        "• Head out from Mirissa on a whale-watching excursion, then try a Sri Lankan cooking class and a traditional group lunch, ending the day with a beachside sunset",
        "• Drive up the coast to Bentota for a Madu River boat safari or turtle conservation visit, then take in Colombo's Galle Face Green, Independence Square, and Colombo Fort",
        "• Close with a farewell dinner and the \"Best Travel Moment\" awards before flying home"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Welcome Sundowner",
          journey: "Arrival at Colombo Airport → Meet & greet and private transfer to Galle → Hotel check-in → Relax by the pool or beach → Evening Galle Fort walk → Sunset at the ramparts → Welcome dinner with the group.",
          community: "Welcome Sundowner & Introductions: A welcome sundowner combined with group introductions and interactive icebreaker games.",
          image: "https://images.unsplash.com/photo-1566299597203-225f611b865f?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Galle Beach & Experiences",
          journey: "Breakfast → Morning visit to Unawatuna Beach → Optional water activities → Lunch at a beachfront café → Afternoon free for spa, pool, or relaxation → Evening café hopping and shopping in Galle Fort → Dinner.",
          community: "Beach Picnic & Street Photography: A group beach picnic, photoshoot, and friendly street photography competition around Galle Fort.",
          image: "https://images.unsplash.com/photo-1645839451285-6010ab4a47d6?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Ocean Adventure & Sunset",
          journey: "Early breakfast → Whale-watching excursion from Mirissa → Return to hotel → Relaxation and pool time → Evening at leisure → Beachside dinner and sunset experience.",
          community: "Cultural Culinary & Coastal Vibe: An optional coconut plantation visit and interactive Sri Lankan cooking class, followed by a traditional group lunch and a sunset gathering.",
          image: "https://images.unsplash.com/photo-1580910527739-556eb89f9d65?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Coastal Drive & Colombo City Tour",
          journey: "Breakfast and check-out → En-route stop at Bentota (Madu River boat safari / turtle conservation) → Continue to Colombo and check in → Colombo city tour (Galle Face Green, Independence Square, Colombo Fort, shopping) → Evening farewell dinner.",
          community: "Farewell Dinner & Best Travel Moment Awards: A group farewell dinner featuring the \"Best Travel Moment\" awards presentation.",
          image: "https://images.unsplash.com/photo-1663654558464-a5680b70e04f?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "The Unbroken Circle",
          journey: "Breakfast → Free time depending on flight → Transfer to Colombo Airport → Departure for India.",
          community: "The Circle Alumni Onboarding: Photo exchange and official onboarding into the Kokalachi alumni network before departure.",
          image: "https://images.unsplash.com/photo-1653151106233-8e928c21bc1a?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Private airport meet & greet and transfer from Colombo Airport to Galle",
        "Accommodation in Galle and Colombo",
        "Daily breakfast",
        "Whale-watching excursion from Mirissa",
        "Sri Lankan cooking class",
        "Bentota stop (Madu River boat safari / turtle conservation) and Colombo city tour",
        "Transfers and transport throughout the itinerary",
        "Kokalachi community experiences",
        "Kokalachi Trip Host throughout the journey"
      ],
      exclusions: [
        "International flights to and from Colombo",
        "Visa or electronic travel authorisation fees, if applicable",
        "Optional water activities at Unawatuna and the optional coconut plantation visit, if charged separately",
        "Meals not explicitly listed in the itinerary",
        "Personal expenses, shopping, spa treatments, and tips",
        "Travel insurance",
        "Any costs arising from unforeseen circumstances, such as flight delays, sea conditions, or natural disasters",
        "Taxes (5% GST and TCS), unless already included in the quoted price"
      ],
      whatToPack: [
        "Valid passport (check it has at least six months of validity) and any required travel authorisation",
        "Light, breathable clothing for warm, humid days, plus swimwear and a quick-dry towel",
        "A light rain jacket — showers can roll in on the south-west coast in November",
        "Motion-sickness tablets if you're prone to seasickness — the whale-watching trip is on open water",
        "Sunscreen, sunglasses, a hat, and reef-safe sun protection if you have it",
        "Comfortable sandals and walking shoes for Galle Fort's cobbled lanes",
        "Modest clothing (shoulders and knees covered) if you plan to visit any temples in Colombo",
        "A power bank and a Type D/G plug adapter (Sri Lanka uses 230V)",
        "A little Sri Lankan rupee cash for markets and small purchases"
      ],
      weather: [
        "November falls in the inter-monsoon period on Sri Lanka's south-west coast: warm and humid, with a chance of afternoon or evening showers.",
        "Expect daytime temperatures in the high 20s to around 30°C, with warm evenings",
        "Showers tend to be short and are usually followed by sunshine, so a light rain layer beats an umbrella",
        "Whale-watching season off Mirissa generally begins around November, so conditions are on the early side of the season and sightings can't be guaranteed",
        "Figures above are typical seasonal ranges, not a forecast — worth refreshing a week before departure."
      ],
      faqs: [
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes — our team can help you plan flights into and out of Colombo and walk you through any entry documents Sri Lanka requires for Indian passport holders."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins and ends at Colombo Airport (Bandaranaike International), with your arrival transfer to Galle and departure transfer included."
        },
        {
          question: "Need more Details about the Trip?",
          answer: "Contact us"
        }
      ]
    }
  },
  {
    id: 8,
    slug: "beas-kund-trek",
    destination: "Beas Kund",
    locationTag: "📍 Beas Kund",
    duration: "3 Days / 2 Nights",
    groupSize: "Intimate Group",
    price: "TBA",
    vibeTags: ["Trek","Himalayas","Adventure","Community"],
    categories: ["Adventure"],
    images: [
      "https://images.unsplash.com/photo-1620236232016-3eb7bc6ede3d?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1624881256794-a7ee33ecbb99?auto=format&fit=crop&q=85&w=800"
    ],
    // Full itinerary, inclusions and price still to come — the page shows a "details coming soon" view
    tourPackage: {
      id: 8,
      title: "Beas Kund Trek",
      subtitle: "A Himalayan group trek to the glacial lake at the source of the Beas. Full itinerary coming soon",
      location: "Himachal Pradesh",
      duration: "3 Days / 2 Nights",
      price: "TBA",
      image: "https://images.unsplash.com/photo-1620236232016-3eb7bc6ede3d?auto=format&fit=crop&q=85&w=800",
      category: "Trek",
      departures: [
        { id: "beas-kund-2026-11-20", startDate: "2026-11-20", endDate: "2026-11-22", note: "Departs Delhi on 19 Nov night" }
      ]
    }
  },
  {
    id: 9,
    slug: "nag-tibba-trek",
    destination: "Nag Tibba",
    locationTag: "📍 Nag Tibba",
    duration: "3 Days / 2 Nights",
    groupSize: "Intimate Group",
    price: "TBA",
    vibeTags: ["Trek","Himalayas","Adventure","Community"],
    categories: ["Adventure","FirstTimers"],
    images: [
      "https://images.unsplash.com/photo-1697807880008-234c28ae6632?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1643284674341-659e5c67dfbd?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1697473046112-4dce673cf87d?auto=format&fit=crop&q=85&w=800"
    ],
    // Full itinerary, inclusions and price still to come — the page shows a "details coming soon" view
    tourPackage: {
      id: 9,
      title: "Nag Tibba Trek",
      subtitle: "A weekend group trek to the highest peak of the Nag Tibba range in Uttarakhand. Full itinerary coming soon",
      location: "Uttarakhand",
      duration: "3 Days / 2 Nights",
      price: "TBA",
      image: "https://images.unsplash.com/photo-1697807880008-234c28ae6632?auto=format&fit=crop&q=85&w=800",
      category: "Trek",
      departures: [
        { id: "nag-tibba-2026-11-20", startDate: "2026-11-20", endDate: "2026-11-22", note: "Departs Delhi on 19 Nov night" }
      ]
    }
  },
  {
    id: 11,
    slug: "almaty",
    destination: "Almaty",
    locationTag: "📍 Almaty, Kazakhstan",
    duration: "5 Days / 4 Nights",
    groupSize: "Limited Seats",
    price: "89,900",
    vibeTags: ["International", "Mountains", "Culture", "Shopping", "Flights Included"],
    categories: ["Trending"],
    images: [
      "https://images.unsplash.com/photo-1659651117607-d2b397cf100f?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1703573198475-f6879ec335f5?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1777058590996-da3052085799?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 11,
      title: "Discover Almaty",
      subtitle: "Almaty City with Kok-Tobe, Shymbulak, Arbat Street, Alma-Arasan & Shopping Tour",
      location: "Kazakhstan · Almaty",
      duration: "4 Nights / 5 Days",
      // INR 89,900 per person, Air Astana flight and taxes included (as per the flyer)
      price: 89900,
      image: "https://images.unsplash.com/photo-1659651117607-d2b397cf100f?auto=format&fit=crop&q=85&w=800",
      category: "International",
      tag: "Flights Included",
      departures: [
        { id: "almaty-2026-11-19", startDate: "2026-11-19", endDate: "2026-11-23", label: "Fixed Departure", note: "Flies from Delhi on Air Astana" }
      ],
      hook: "A 4 nights / 5 days fixed departure to Almaty, Kazakhstan, on 19 November 2026, with the Air Astana flight from Delhi included.",
      gallery: [
        "https://images.unsplash.com/photo-1659651117607-d2b397cf100f?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1703573198475-f6879ec335f5?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1777058590996-da3052085799?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1716835018054-5b13e5ef53b0?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1780511441285-032654f2b25c?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1765436271393-16377d973d0e?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Almaty is famous for its natural beauty, and its national park is the finest example. The park is the soul of the city, stretching from the Turgen Gorge to the Chimlogan River.",
        "Almaty at a glance: founded in 1854, an area of 682 km², a population of 20.68 lakh, Islam as the main religion, Russian and Kazakh as the languages, and the tenge as the currency.",
        "Here's what the journey holds:",
        "• Day 1: Arrival at Almaty, with your guide helping you buy a SIM card and exchange currency",
        "• Day 2: Almaty City with Kok-Tobe, including Panfilov Park and the Zenkov Cathedral",
        "• Day 3: Shymbulak Ski Resort, up to Talgar Pass (3,200 m), and a walking tour of Arbat Street",
        "• Day 4: Alma-Arasan Gorge and a shopping tour of the Green Bazaar and Rahat Chocolate Factory",
        "• Day 5: Leisure (own shopping) and departure"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Welcome to Almaty",
          journey: "Arrival at Almaty Airport on Air Astana (KC 908, departs Delhi 12:10, arrives 15:10) → Meet & greet: your guide will help you buy a SIM card and exchange currency → Transfer to the hotel → Check in and relax → Overnight at the hotel",
          community: "",
          image: "https://images.unsplash.com/photo-1765436271393-16377d973d0e?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 02",
          title: "Almaty City with Kok-Tobe",
          journey: "Buffet breakfast at the hotel → 11:00 pick-up from the hotel → Panfilov Park, a picturesque green space in the heart of Almaty → Zenkov Cathedral, a Russian Orthodox church made entirely of wood → 14:00 lunch at an Indian restaurant (on own) → 15:00 Kok-Tobe recreational area, connected to downtown Almaty by cable car, with the 372 m TV Tower → 19:00 dinner at an Indian restaurant (on own) → 20:00 back to the hotel → Overnight at the hotel",
          community: "",
          image: "https://images.unsplash.com/photo-1703573198475-f6879ec335f5?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 03",
          title: "Shymbulak + Arbat Street",
          journey: "Buffet breakfast at the hotel → 11:00 Shymbulak Ski Resort, spread across three levels: Combi 1 (2,260 m), Combi 2 (2,840 m) and Talgar Pass (3,200 m), with views of the surrounding peaks and glaciers → 14:00 lunch at an Indian restaurant (on own) → Walking tour of Arbat Street, known for its cafés, shops and art galleries → 19:00 dinner at an Indian restaurant (on own) → 20:00 back to the hotel → Overnight at the hotel",
          community: "",
          image: "https://images.unsplash.com/photo-1716835018054-5b13e5ef53b0?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 04",
          title: "Alma-Arasan + Shopping Tour",
          journey: "Buffet breakfast at the hotel → 11:00 pick-up from the hotel for Alma-Arasan Gorge (1,780 m), known for its lush forests, the Prokhodnaya River and hot springs → 14:00 lunch at an Indian restaurant (on own) → Shopping tour at the Green Bazaar and Rahat Chocolate Factory → 19:00 dinner at an Indian restaurant (on own) → 20:00 back to the hotel → Overnight at the hotel",
          community: "",
          image: "https://images.unsplash.com/photo-1780511441285-032654f2b25c?auto=format&fit=crop&q=85&w=800"
        },
        {
          day: "Day 05",
          title: "Leisure (Own Shopping) + Departure",
          journey: "Leisure time for your own shopping → Check out and pick-up from the hotel → Drop at the airport → Air Astana KC 963 departs Almaty 21:20, arrives Delhi 01:30 (next day)",
          community: "",
          image: "https://images.unsplash.com/photo-1787150741175-fb44645fa4b4?auto=format&fit=crop&q=85&w=800"
        }
      ],
      inclusions: [
        "Air Astana flights, Delhi–Almaty–Delhi, with meals (23 kg check-in and 7 kg hand baggage)",
        "4 nights at Saraichik Hotel, Almaty, on twin/double sharing",
        "4 buffet breakfasts at the hotel restaurant",
        "All tours and transfers on a sharing basis",
        "English-speaking guide",
        "Complimentary water bottles during the tour (2 × 0.5 L)",
        "Entrance fees: Shymbulak 3rd level cable car, Kok-Tobe, and Alma-Arasan national eco fees",
        "Shopping: Mega Park & Dostyk Plaza",
        "Walking tour: Green Bazaar, Lotte Factory & Arbat Street",
        "Taxes included"
      ],
      exclusions: [
        "Lunch and dinner at Indian restaurants (on own)",
        "Local SIM card or international roaming plan (at personal cost)",
        "Travel insurance"
      ],
      whatToPack: [
        "Passport with visa copy, plus copies of your passport and visa",
        "Travel insurance",
        "Tickets",
        "Warm clothing and a proper winter jacket",
        "Kazakhstani tenge for small purchases, tips and local markets",
        "A small first-aid kit with medicine for headaches, colds or digestive issues",
        "An adapter for type C and F plugs (Kazakhstan uses 220V / 50Hz)",
        "Bottled water to avoid stomach complications"
      ],
      highlights: [
        { icon: "Compass", title: "Flight Included", description: "Air Astana from Delhi" },
        { icon: "ShieldCheck", title: "Certified Guide", description: "English-speaking guide" },
        { icon: "Heart", title: "Taxes Included", description: "INR 89,900 per person" },
        { icon: "Users", title: "Fixed Departure", description: "19 November 2026" }
      ],
      faqs: [
        {
          question: "What are the payment and cancellation terms?",
          answer: "Payment: a 50% advance payment is required to confirm the booking, and the remaining 50% must be paid 21 days prior to departure. Cancellation: the entire advance amount is non-refundable in case of cancellation, and if the package is cancelled within 21 days prior to departure, no refund is applicable. As this is a group departure, strict cancellation policies apply. Tickets are issued 2 days before departure."
        },
        {
          question: "What are the flight details?",
          answer: "19 Nov – 23 Nov, ex-Delhi: KC 908 Delhi 12:10 → Almaty 15:10, and KC 963 Almaty 21:20 → Delhi 01:30 (next day). Baggage: 23 kg check-in and 7 kg hand baggage."
        },
        {
          question: "What travel documents do I need?",
          answer: "Please carry your passport with a visa copy, travel insurance and your tickets. Carry your passport at all times, as Kazakhstan authorities may request identification, and keep copies of your passport and visa."
        },
        {
          question: "Need more Details about the Trip?",
          answer: "Contact us"
        }
      ]
    }
  }
];

// Featured trips first, then soonest departure; trips without a bookable date go last.
// Ties (and trips without dates) keep their order in the list above.
const nextStart = (card: TripCardData) => getNextDeparture(card.tourPackage)?.startDate;

export const tripCards: TripCardData[] = [...allTripCards].sort((a, b) => {
  if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
  const aOpen = isBookingOpen(a);
  const bOpen = isBookingOpen(b);
  if (aOpen !== bOpen) return aOpen ? -1 : 1;
  const aStart = nextStart(a) ?? "9999";
  const bStart = nextStart(b) ?? "9999";
  return aStart.localeCompare(bStart);
});
