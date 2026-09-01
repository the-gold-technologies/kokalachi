export interface TourPackage {
  id: number;
  title: string;
  subtitle?: string;
  location: string;
  duration: string;
  rating: number;
  price: number | string;
  originalPrice?: number | null;
  image: string;
  category: string;
  tag?: string | null;
  tagColor?: string | null;
  spotsLeft?: number;
  nextDeparture?: string;
  hook?: string;
  overview?: string[];
  itinerary?: { day: string; title: string; journey: string; community: string }[];
  inclusions?: string[];
  exclusions?: string[];
  meals?: string[];
  whatToPack?: string[];
  weather?: string[];
  faqs?: { question: string; answer: string }[];
  highlights?: { icon: string; title: string; description: string }[];
  gallery?: string[];
}

export interface TripCardData {
  id: number;
  slug: string;
  destination: string;
  locationTag: string;
  duration: string;
  groupSize: string;
  dates: string;
  price: string;
  vibeTags: string[];
  categories: string[];
  images: string[];
  tourPackage: TourPackage;
}

export const tripCards: TripCardData[] = [
  {
    id: 1,
    slug: "kashmir",
    destination: "Kashmir",
    locationTag: "📍 Kashmir",
    duration: "4 Days / 3 Nights",
    groupSize: "10–12 Travellers",
    dates: "Upcoming",
    price: "TBA",
    vibeTags: ["Adventure", "Nature", "Scenic", "Heritage", "Culture"],
    categories: ["Trending", "Adventure", "ScenicJourney"],
    images: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1593417376544-4c4201061e22?auto=format&fit=crop&q=85&w=800"
    ],
    tourPackage: {
      id: 1,
      title: "The Houseboat Diaries - Kashmir",
      subtitle: "Valley of the Shepherds & Silent Waters · Saffron Fields, Pine Canyons, and Mughal Gardens",
      location: "Kashmir",
      duration: "3 Nights / 4 Days",
      rating: 5,
      price: "TBA",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
      category: "Heritage",
      tag: "10-12 Travellers",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 8,
      nextDeparture: "Upcoming",
      hook: "Kashmir: Valley of the Shepherds & Silent Waters is a 3-night, 4-day journey through saffron fields, pine-lined canyons, and Mughal gardens — curated for travellers who want the trip to be as much about the people beside them as the postcard views ahead.",
      gallery: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1593417376544-4c4201061e22?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Kashmir: Valley of the Shepherds & Silent Waters is a 3-night, 4-day journey through saffron fields, pine-lined canyons, and Mughal gardens — curated for travellers who want the trip to be as much about the people beside them as the postcard views ahead.",
        "Here's what the journey holds:",
        "• Begin in Srinagar with a scenic drive to Pahalgam, winding through saffron fields with a stop at Awantipora's cricket bat factory",
        "• Settle riverside at Hotel Lidder Resort for the first two nights",
        "• Trek toward Aru Valley and Betaab Valley, framed by pine canyons and glacier views",
        "• Wander through Srinagar's Mughal gardens — Chasma Shahi, Nishat Bagh & Shalimar Bagh",
        "• Close the trip with a sunset shikara ride and a night aboard a deluxe houseboat on Dal Lake",
        "• Traditional Wazwan feast, riverside bonfire storytelling, and a few Kokalachi-signature \"get to know your tribe\" moments woven into every day"
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
          journey: "Early Srinagar Airport arrival → Scenic drive to Pahalgam (100 km / 3–4 hrs) → Enroute saffron fields pause → Awantipora Cricket Bat Factory stop → Check-in at Hotel Lidder Resort, along the Lidder River.",
          community: "\"Two Truths & A Travel Lie\" and Acoustic Bonfire Night: An icebreaker session on the coach drive to Pahalgam, followed by a riverside bonfire in the evening with fresh Kashmiri snacks, local folk music, and an open-mic storytelling session."
        },
        {
          day: "Day 02",
          title: "Canyon Trails & The Tribe Picnic",
          journey: "Breakfast → Union cab excursion to Aru Valley → Scenic hike toward Kolahai Glacier base → Betaab Valley exploration → Chandanwari snow bridge visit → Overnight at Pahalgam.",
          community: "The Step Buddy System and Betaab Valley Picnic: Travellers pair up as \"Step Buddies\" during the Aru Valley trail walk, concluding with a group picnic at the idyllic Hajin spot and an evening pass-the-aux music session by the Lidder River."
        },
        {
          day: "Day 03",
          title: "Heritage Gardens & Floating Sunsets",
          journey: "Early breakfast → Drive to Srinagar → Half-day Mughal Gardens exploration (Chasma Shahi, Nishat Bagh & Shalimar Bagh) → Sunset shikara ride to Nehru Park → Deluxe houseboat check-in.",
          community: "The Wazwan Feast and Floating Postcard Ritual: A traditional multi-course Kashmiri Wazwan feast at a local restaurant, followed by writing physical postcards to fellow travellers on the open deck of the shikara during sunset."
        },
        {
          day: "Day 04",
          title: "The Unbroken Circle",
          journey: "Morning breakfast on the water → Srinagar Airport transfer by coach.",
          community: "The Circle Alumni Onboarding and Frame Photo Exchange: A final group photo on the houseboat deck, followed by official onboarding into the Kokalachi alumni network to share the master photo vault before departure."
        }
      ],
      inclusions: [
        "Accommodation at Hotel Lidder Resort and Deluxe Houseboat",
        "Daily breakfast",
        "Private airport and inter-hotel transfers",
        "English-speaking guide throughout the itinerary",
        "Aru Valley and Betaab Valley excursion (Union cab)",
        "Mughal Gardens entry (Chasma Shahi, Nishat Bagh & Shalimar Bagh)",
        "Sunset shikara ride",
        "Bonfire evening with local snacks and music",
        "Wazwan feast experience",
        "Kokalachi Trip Host throughout the journey"
      ],
      exclusions: [
        "Flights to and from Srinagar",
        "Meals and beverages, unless explicitly mentioned",
        "Personal expenses, shopping, and tips",
        "Travel insurance",
        "Entry fees for optional activities not listed above",
        "Any costs arising from unforeseen circumstances, such as flight delays or natural disasters",
        "Taxes (5% GST and 2% TCS)"
      ],
      meals: [
        "Day 1: Kashmiri snacks at the riverside bonfire evening",
        "Day 2: Group picnic spread at Hajin (lunch)",
        "Day 3: Traditional multi-course Wazwan feast (dinner)",
        "Day 4: Breakfast aboard the houseboat",
        "Daily breakfast is included throughout the trip",
        "Lunches and dinners outside of the moments listed above are not included, so you can explore local food spots with your group at your own pace"
      ],
      whatToPack: [
        "Layered clothing — light woollens for the day, a warmer jacket for evenings and higher altitudes (Aru Valley, Betaab Valley)",
        "A comfortable pair of walking/trekking shoes for the Kolahai Glacier base trail",
        "A light rain jacket or poncho — September sees occasional showers",
        "Sunscreen, sunglasses, and a cap for daytime activities",
        "A power bank and universal adapter",
        "A valid photo ID (mandatory for domestic flights and permits)",
        "A reusable water bottle",
        "A notebook or postcards of your own, if you'd like to add to the Floating Postcard Ritual on Day 3",
        "Cash in small denominations for local markets and personal expenses"
      ],
      weather: [
        "Kashmir in early September is at the tail end of its warm season — pleasant days, cool nights, and the first hints of autumn beginning to show in the valleys.",
        "Srinagar: Daytime highs of around 24°C (75°F), dropping to about 12°C (54°F) at night",
        "Pahalgam: Cooler, given the altitude — daytime highs of around 16–17°C (60–63°F), with nights dropping to 4–5°C (39–42°F)",
        "Occasional light rain is possible; layering is your best bet over heavy clothing, since afternoons can feel mild even when mornings and evenings are crisp"
      ],
      faqs: [
        {
          question: "Age Category:",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes — our team can help you plan your flights to Srinagar and guide you through any permits Kashmir travel may require. Reach out to us on WhatsApp and we'll take it from there."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Srinagar Airport, with pickup arranged as part of your package. Your journey home also ends at Srinagar Airport on Day 4."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room, so you're never rooming with a stranger by chance — our team curates roommate pairings the same way we curate the group itself. If you'd prefer your own space, the Private Room option is available at checkout."
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
      price: "TBA",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800",
      category: "Adventure",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 12,
      nextDeparture: "Upcoming",
      hook: "This Journey of Roots & Rainbows is a 5-night, 6-day plunge into Meghalaya's rainforests, canyons, and living-root bridges — built for travellers who want their group chat buzzing long after the last waterfall dip.",
      gallery: [
        "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1689089526066-c7e6e95ee265?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "This Journey of Roots & Rainbows is a 5-night, 6-day plunge into Meghalaya's rainforests, canyons, and living-root bridges — built for travellers who want their group chat buzzing long after the last waterfall dip.",
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
          community: "\"Two Truths & A Travel Lie\" and Street-Food Quest: An icebreaker session on the drive to Shillong, followed by pairing up at Police Bazaar to find and review local street snacks over evening tea."
        },
        {
          day: "Day 02",
          title: "Canyon Trails & Waterfall Dips",
          journey: "Laitlum Canyons viewpoint → Krang Suri Waterfall swim → Return to Shillong.",
          community: "The Pass-the-Aux Horizon Session and Water Curtain Plunge: A 15-minute group quiet moment at Laitlum adding tracks to the shared Spotify playlist, followed by a synchronized team plunge under the Krang Suri waterfall curtain."
        },
        {
          day: "Day 03",
          title: "Ancient Forests & Mountain Myths",
          journey: "Mawsynram Caves → Mawphlang Sacred Grove walk → Khasi Model Village → Elephant Falls → Cherrapunjee arrival.",
          community: "The Silent Forest Walk and \"Waiting Problem\" Fireside Chat: A 10-minute silent walk through the ancient grove, ending with an evening bonfire chat sharing the trips everyone put off before joining this circle."
        },
        {
          day: "Day 04",
          title: "The Tribe Challenge",
          journey: "Full-day Nongriat trek → 3,200 steps descent → Double Decker Living Root Bridge → Rainbow Falls hike → Cherrapunjee return.",
          community: "The Step Buddy System and Victory Dip: Travellers are paired as \"Step Buddies\" to support each other during the 3,200-step trek, celebrating the finish with a group splash at Rainbow Falls."
        },
        {
          day: "Day 05",
          title: "Sunset Reflections",
          journey: "Cherrapunjee to Guwahati drive → Brahmaputra River sunset cruise.",
          community: "The Postcard Ritual and Circle Awards: Writing physical postcards to fellow travellers on the deck of the riverboat, followed by handing out non-competitive \"Circle Badges\" during dinner."
        },
        {
          day: "Day 06",
          title: "The Unbroken Circle",
          journey: "Morning Kamakhya Temple visit → Guwahati Airport drop.",
          community: "The Circle Alumni Onboarding: A final group photo exchange and onboarding into the official post-trip alumni chat before departure."
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
        "Sturdy trekking shoes with good grip — the Nongriat descent involves 3,200 steps and can be slippery",
        "A quick-dry change of clothes for the waterfall swim at Krang Suri",
        "A light raincoat or poncho — Meghalaya is one of the wettest regions in the world",
        "Layered clothing for cooler mornings and evenings in Shillong and Cherrapunjee",
        "A dry bag or waterproof pouch for phones and cameras",
        "A reusable water bottle and a basic first-aid kit for the trek",
        "A valid photo ID",
        "Cash in small denominations — card acceptance is limited in Cherrapunjee and Nongriat"
      ],
      weather: [
        "Expected Weather & Temperature Meghalaya's climate depends heavily on the season — it's known globally for its rainfall, so conditions can shift quickly between misty and clear.",
        "Expect cool, humid mornings and evenings, with daytime temperatures generally comfortable for trekking",
        "Rain is possible at any time of year in this region, even outside the monsoon months — pack for it regardless of your travel dates",
        "Trails can be slippery after rainfall, so grip-focused footwear matters more than warmth here"
      ],
      faqs: [
        {
          question: "Age Category:",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes — our team can help you plan your flights to Guwahati. No special permits are required for Indian nationals travelling to Meghalaya."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Guwahati Airport, with pickup arranged as part of your package. Your journey home also ends at Guwahati Airport on Day 6."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room — our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
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
    dates: "Upcoming",
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
      price: "TBA",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800",
      category: "Coastal & Heritage",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 12,
      nextDeparture: "Upcoming",
      hook: "Tides & Tea Gardens is a 5-night, 6-day slow-travel journey through Kerala's colonial streets, misty Western Ghats, and quiet backwaters — designed for travellers who want the pace of the trip to match the pace of getting to know each other.",
      gallery: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1583513645242-25a32d451084?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "Tides & Tea Gardens is a 5-night, 6-day slow-travel journey through Kerala's colonial streets, misty Western Ghats, and quiet backwaters — designed for travellers who want the pace of the trip to match the pace of getting to know each other.",
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
          community: "Tuk-Tuk Photo Quest and Beach Icebreakers: Pairing up to capture candid portraits against colonial backdrops, followed by a beachside \"Two Truths & A Travel Lie\" session at sunset."
        },
        {
          day: "Day 02",
          title: "Pine Forests & Fireside Vibes",
          journey: "Drive to Vagamon (Western Ghats) → Vagamon Meadows → Pine forest walk → Tea gardens.",
          community: "The Silent Canopy Pause and Fireside Chat: A 10-minute digital-detox walk through the pine trees with instrumental ambient music, followed by an evening bonfire chat."
        },
        {
          day: "Day 03",
          title: "Winding Roads & Horizon Sounds",
          journey: "Scenic drive to Ponmudi → Golden Valley streams → Mountain viewpoint walk.",
          community: "The Riverstone Ritual and Acoustic Sunset: Dropping symbolic \"stress stones\" into the Golden Valley stream, followed by an acoustic sunset singalong overlooking the valley."
        },
        {
          day: "Day 04",
          title: "Clifftop Sunsets & Coastal Energy",
          journey: "Drive to Varkala → Papanasam Beach → Varkala Cliff cafés.",
          community: "Sunset Beach Games and Cliff Café Swap: Casual beach frisbee on Papanasam Beach, followed by rotating seats between courses at dinner along the Varkala Cliff."
        },
        {
          day: "Day 05",
          title: "Slow Waterways & Fellowship",
          journey: "Day trip to Munroe Island → Canoe ride through narrow canals → Village walk → Varkala return.",
          community: "The Silent Canoe Stream and Farewell Dinner: 15 minutes of complete silence on the backwater canoes to absorb the natural setting, followed by a postcard exchange and badge ceremony in Varkala."
        },
        {
          day: "Day 06",
          title: "The Unbroken Circle",
          journey: "Leisurely breakfast → Trivandrum Airport transfer.",
          community: "The Co-Branded Vault Exchange: Sharing a master media folder of all trip photos and connecting the group to the Kokalachi alumni network."
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
        "Western Ghats (Vagamon, Ponmudi): Noticeably cooler, especially in the early mornings and evenings — mist is common",
        "Rain is possible depending on your travel dates, particularly during the monsoon months — check closer to departure and pack a light raincoat regardless"
      ],
      faqs: [
        {
          question: "Age Category",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes — our team can help you plan your flights into Kochi and out of Trivandrum. No special permits are required for Indian nationals travelling to Kerala."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins at Kochi Airport, with pickup arranged as part of your package. Your journey ends at Trivandrum Airport on Day 6."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room — our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
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
      price: "TBA",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800",
      category: "Culture & Discovery",
      tag: "Intimate Group",
      tagColor: "bg-[#0E5A60]",
      spotsLeft: 12,
      nextDeparture: "Upcoming",
      hook: "The Thunder Dragon Trail is a 5-night, 6-day journey through Bhutan's monasteries, mountain passes, and valleys — built for travellers looking for more than sightseeing, and open to a little reflection along the way.",
      gallery: [
        "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&q=85&w=800",
        "https://images.unsplash.com/photo-1555821108-3fb2763b226a?auto=format&fit=crop&q=85&w=800"
      ],
      overview: [
        "The Thunder Dragon Trail is a 5-night, 6-day journey through Bhutan's monasteries, mountain passes, and valleys — built for travellers looking for more than sightseeing, and open to a little reflection along the way.",
        "Here's what the journey holds:",
        "• Arrive in Paro and cross the Iron Bridge at Tamchhog Lhakhang en route to Thimphu, setting personal intentions with a traditional butter tea tasting",
        "• Try your hand at traditional archery, explore Thimphu's art schools, and take in the valley from Sangaygang Viewpoint",
        "• Cross Dochula Pass — home to 108 stupas — and write personal wishes on prayer flags before reaching Punakha Dzong",
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
          community: "The GNH Baseline and Salted Butter Tea Trial: Recording initial \"Happiness Meter\" goals in pocket journals, followed by a group tasting of traditional Suja (butter tea)."
        },
        {
          day: "Day 02",
          title: "Art, Archery & Mountain Skylines",
          journey: "Buddha Point → Sangaygang Viewpoint → Zorig Chusum Art School → Simply Bhutan Museum.",
          community: "Traditional Archery Challenge and The 3-Word Pause: Competing in friendly traditional dart and archery games, paired with a 3-word reflection session overlooking Thimphu valley."
        },
        {
          day: "Day 03",
          title: "Pass of 108 Stupas",
          journey: "Drive to Punakha via Dochula Pass (3,080m) → Punakha Dzong → Suspension bridge.",
          community: "Prayer Flags on the Wind and Suspension Bridge Hype: Writing personal wishes on traditional prayer flags at Dochula Pass, followed by paired photo walks across Bhutan's longest suspension bridge."
        },
        {
          day: "Day 04",
          title: "Botanical Walks & Mountain Legends",
          journey: "Royal Botanical Garden (Lampelri) → Ta Dzong → Rinpung Dzong → Paro arrival.",
          community: "The Riverstone Gratitude Circle and Hike Prep: Creating a group rock cairn by the Paro Chhu river, followed by a supportive carbo-load dinner before the big hike."
        },
        {
          day: "Day 05",
          title: "The Tiger's Nest Tribe Hike",
          journey: "Full-day hike to Taktsang Lhakhang (Tiger's Nest) → Pine forest trail → Mountain cafeteria → Paro return.",
          community: "The Hike Relay and Future-Self Letters: Pacing each other up the 3-hour climb using a shared hike playlist, writing letters to your future self at the mountain cafeteria, and ending with a signed frame farewell night."
        },
        {
          day: "Day 06",
          title: "Blessings & Onward Journeys",
          journey: "Paro hotel checkout → Paro Airport transfer.",
          community: "The Bhutan Circle Onboarding: Official onboarding into the Kokalachi alumni community with shared digital photo albums before airport drop-off."
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
        "Layered clothing — mornings and evenings in Thimphu and Paro are cool even when afternoons are mild",
        "Sturdy, broken-in hiking shoes for the Tiger's Nest climb — this is a real trek, not a casual walk",
        "A light jacket or fleece for Dochula Pass, which sits above 3,000m and is notably colder than the valleys",
        "A reusable water bottle and some energy snacks for the hike",
        "Modest clothing for visiting dzongs and monasteries — shoulders and knees should be covered",
        "A valid passport and any required visa documentation (arranged in advance for Bhutan)",
        "A power bank, as charging points can be limited on the road",
        "Cash in small denominations — card acceptance is limited outside major towns"
      ],
      weather: [
        "Bhutan's climate varies sharply with altitude — Thimphu and Paro sit in cooler mountain valleys, and Dochula Pass is colder still.",
        "Expect cool mornings and evenings throughout the trip, even when midday sun feels pleasant",
        "Dochula Pass (3,080m) can be significantly colder and windier than the valley towns — a warm layer is essential here specifically",
        "Conditions can shift quickly at altitude, so pack for a wider temperature range than the valley forecast alone would suggest"
      ],
      faqs: [
        {
          question: "Age Category",
          answer: "Curated for adults (check with team for specific age group details)."
        },
        {
          question: "Need Assistance in Air Fare, Visa, Permit?",
          answer: "Yes — Bhutan requires advance visa arrangements for most nationalities, and our team will guide you through this as part of booking, along with flight planning into Paro."
        },
        {
          question: "Where does this trip start from?",
          answer: "The trip begins and ends at Paro International Airport, Bhutan's only international airport."
        },
        {
          question: "I am travelling solo. Who will I share a room with?",
          answer: "You'll be matched with a fellow solo traveller of the same gender in the Double Sharing Room — our team curates roommate pairings the same way we curate the group itself. Prefer your own space? The Private Room option is available at checkout."
        },
        {
          question: "What is the cancellation policy?",
          answer: "Please reach out to our team or refer to the checkout page for detailed cancellation policies."
        }
      ]
    },
  },
];
