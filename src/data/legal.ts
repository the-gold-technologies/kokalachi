// Privacy Policy and Terms & Conditions. Each block is a paragraph (string) or a bullet list (string[]).
// Inside any text, write [label](/path) to add a link.
// Have these reviewed by a lawyer before relying on them, and update `updatedOn` whenever you change them.

export type LegalBlock = string | string[];

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  updatedOn: string; // "YYYY-MM-DD"
  intro: string;
  sections: LegalSection[];
}

// Company details used across both documents
export const company = {
  name: "Kokalachi Travel Co.",
  address: "91 Springboard, C-2, Sector 1, Noida, Uttar Pradesh 201301, India",
  email: "hello@kokalachi.com",
  phone: "+91 97118 45700",
  website: "kokalachi.com",
};

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description: "How Kokalachi collects, uses and protects your personal data when you enquire, book or travel with us.",
  updatedOn: "2026-10-25",
  intro:
    "Your trust matters to us. This policy explains what personal data we collect when you use our website, contact us, book a journey or travel with us, why we need it, who we share it with, and the choices you have. It is written to meet India's Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        `${company.name} ("we", "us", "our") designs and runs small-group journeys in India and abroad, and operates the website ${company.website}. We decide how and why your personal data is used, which makes us the "Data Fiduciary" for it under Indian law.`,
        `You can reach us at ${company.email}, ${company.phone}, or ${company.address}.`,
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        "We only collect what we need to answer you, plan your journey and look after you on it.",
        "Information you give us:",
        [
          "Enquiries: your name, email, phone number, the journey you're interested in, preferred travel dates, group size, your message and how you heard about us.",
          "Booking requests: your name, email, phone number, number of travellers, the trip and departure you've chosen, and any special requests.",
          "Trip details we need to run your journey: government-issued ID for hotel check-ins and permits, passport and visa details for international trips, an emergency contact, and any dietary, medical or accessibility needs you choose to share.",
          "Payment details: records of the payments you make to us. Card and UPI details are handled by our bank or payment gateway and are not stored by us.",
          "Things you share with us: messages on WhatsApp, email or phone, reviews, and photos or videos you send us after a trip.",
        ],
        "Information collected automatically: like most websites, our hosting provider keeps basic technical logs (such as IP address, browser type, pages visited and time of visit) to keep the site secure and working. We do not use analytics, advertising or tracking cookies.",
        "Information from others: if a friend or family member books for you, they will give us your details. Please make sure they have your permission.",
      ],
    },
    {
      id: "how-we-use-it",
      title: "How we use your information",
      blocks: [
        [
          "To reply to your enquiries and help you choose a journey.",
          "To process and confirm your booking, collect payment and issue invoices, including GST and TCS where applicable.",
          "To arrange your stays, transport, activities, permits and visas with our travel partners.",
          "To add you to your trip's pre-trip group so you can meet your fellow travellers before departure.",
          "To keep you safe during the journey and contact your emergency contact if we ever need to.",
          "To send you important updates about your trip, such as itinerary changes, timings and packing lists.",
          "With your consent, to send you news about upcoming journeys and to feature your review, photos or videos.",
          "To meet our legal, tax and accounting obligations and to prevent fraud or misuse.",
        ],
      ],
    },
    {
      id: "consent",
      title: "Your consent",
      blocks: [
        "We process your personal data on the basis of the consent you give when you submit a form, book a journey or share information with us, and for other legitimate uses allowed by law, such as meeting legal requirements or responding to a medical emergency.",
        "You can withdraw your consent at any time by writing to us. This won't affect anything we did before you withdrew it, but if the information is needed to run your trip, we may no longer be able to provide it.",
      ],
    },
    {
      id: "sharing",
      title: "Who we share it with",
      blocks: [
        "We never sell your personal data. We share it only when it's needed to deliver your journey or required by law:",
        [
          "Travel partners: hotels, transport operators, guides and activity providers receive only the details they need, such as your name and ID for check-in.",
          "Government authorities: for visas, permits and border formalities, and whenever we are legally required to.",
          "Your fellow travellers: in the pre-trip group, other members of your trip can see your name and phone number. Let us know before you're added if you'd prefer a different way to stay in touch.",
          "Service providers: companies that host our website and database, send our emails and process payments, who handle your data on our behalf and under confidentiality.",
          "Professional advisers and authorities: our accountants, lawyers or the police where needed to protect your safety, our rights or to comply with the law.",
        ],
      ],
    },
    {
      id: "photos-and-reviews",
      title: "Photos, videos and reviews",
      blocks: [
        "Group photos and videos are a big part of our journeys. Your trip host or fellow travellers may take photos that include you, and we may share some of them on our website and social media.",
        "We only publish your review, or a photo where you are clearly the focus, with your name after you've agreed to it. If you'd rather not appear, tell your trip host or write to us, and we'll take it down.",
      ],
    },
    {
      id: "international-transfers",
      title: "Transfers outside India",
      blocks: [
        "For international journeys, we share the details needed for your stay, transport and visa with partners and authorities in the destination country. Some of our service providers may also store data on servers outside India. Where this happens, we take reasonable steps to make sure your data stays protected, in line with Indian law.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      blocks: [
        "Our website does not use analytics, advertising or tracking cookies, so there is nothing to accept or turn off.",
        "The only cookie we set is a strictly necessary login cookie for our own team's admin area. Some images on our site load from third-party image services, which may see your IP address when your browser requests the image. If we ever add analytics or similar tools, we will update this policy and ask for your consent where required.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      blocks: [
        [
          "Enquiries are kept for as long as we need them to reply and follow up with you, and then deleted.",
          "Booking and payment records are kept for as long as Indian tax and accounting laws require.",
          "Copies of ID, passport and visa documents are deleted after your journey, unless the law requires us to keep them longer.",
          "Reviews and photos stay published until you ask us to remove them.",
        ],
      ],
    },
    {
      id: "security",
      title: "How we protect it",
      blocks: [
        "We use reasonable security practices to protect your data, including encrypted (HTTPS) connections, restricted access for our team, and trusted service providers. No system is completely secure, but if a breach ever affects your data, we will inform you and the authorities as required by law.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      blocks: [
        "Under the Digital Personal Data Protection Act, 2023, you can:",
        [
          "Ask for a summary of the personal data we hold about you and who we've shared it with.",
          "Ask us to correct, complete or update your data.",
          "Ask us to erase your data when it's no longer needed, unless the law requires us to keep it.",
          "Withdraw your consent at any time.",
          "Nominate someone to exercise these rights on your behalf in case of death or incapacity.",
          "Raise a grievance with us, and if you're not satisfied with our response, complain to the Data Protection Board of India.",
        ],
        `To use any of these rights, write to ${company.email}. We may ask you to confirm your identity first, and we'll respond as quickly as we can and within the time the law requires.`,
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        "Our journeys are designed for adults. We don't knowingly collect personal data from anyone under 18, except when a parent or guardian books for them and gives consent on their behalf.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "We may update this policy from time to time. The date at the top of this page shows when it was last changed, and if we make a significant change, we'll let you know by email or on our website.",
      ],
    },
    {
      id: "contact",
      title: "Contact & grievances",
      blocks: [
        `For any question, request or complaint about your personal data, contact our Grievance Officer at ${company.email} or ${company.phone}, or write to us at ${company.address}.`,
        "You can also read our [Terms & Conditions](/terms) or [get in touch](/contact).",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  slug: "terms",
  title: "Terms & Conditions",
  description: "The terms that apply when you use the Kokalachi website, book a journey or travel with us.",
  updatedOn: "2026-10-25",
  intro:
    "These terms explain how booking and travelling with us works: what you can expect from us, and what we ask of you. Please read them before you book. By using our website or booking a journey, you agree to them.",
  sections: [
    {
      id: "about",
      title: "About these terms",
      blocks: [
        `These terms are an agreement between you and ${company.name} ("we", "us", "our"), ${company.address}. They apply to our website and to every journey you book with us. Each trip page, along with your booking confirmation, forms part of these terms, and where they differ, the trip-specific details in your confirmation apply.`,
      ],
    },
    {
      id: "bookings",
      title: "Booking a journey",
      blocks: [
        [
          "Submitting a booking on our website is a request to reserve a spot. Your booking is confirmed only once we confirm it to you in writing and receive the payment due.",
          "Spots on each departure are limited and are confirmed in the order payments are received.",
          "Please make sure the names and details you give us match your ID or passport. If you book for others, you confirm that they've agreed to these terms and that you're allowed to share their details with us.",
          "We may decline a booking where we believe it's needed to keep the group safe or comfortable.",
        ],
      ],
    },
    {
      id: "prices-and-payments",
      title: "Prices & payments",
      blocks: [
        [
          "Prices are per person, in Indian Rupees, and are shown on each trip page.",
          "Applicable taxes (such as GST, and TCS on international journeys) and any payment gateway charges are shown before you pay. Paying by UPI or bank transfer avoids the 3% gateway charge.",
          "The amount due at booking and the date for any balance payment are shared with you when we confirm your booking. If a payment isn't received by its due date, we may release your spot.",
          "Until your booking is confirmed, prices may change because of changes in taxes, fuel costs, exchange rates or our partners' rates.",
        ],
      ],
    },
    {
      id: "inclusions",
      title: "What's included",
      blocks: [
        "Each trip page lists what is and isn't included in the price. Unless the trip page says otherwise, flights, travel insurance, visa fees, personal expenses, and meals or activities not listed are not included.",
      ],
    },
    {
      id: "cancellations-by-you",
      title: "If you cancel",
      blocks: [
        [
          "Please tell us in writing (by email or WhatsApp) if you need to cancel. The date we receive your message is the date of cancellation.",
          "There is no fixed cancellation schedule. When our team connects with you to confirm your booking, they explain the cancellation terms for your journey, which usually depend on how close to departure you cancel, and confirm them to you in writing before you pay.",
          "Any refund due is made to your original payment method, in line with the cancellation terms agreed with you, after deducting payment gateway fees and any costs we've already paid that can't be recovered, such as permits, visa fees or non-refundable bookings.",
          "If you can't travel, you may be able to move to another departure or transfer your spot to someone else. Just ask us, and we'll help where possible.",
          "We can't offer refunds for unused services, missed departures, or for leaving a trip early.",
        ],
      ],
    },
    {
      id: "changes-by-us",
      title: "If we change or cancel a journey",
      blocks: [
        [
          "Itineraries can change because of weather, road conditions, local events or safety concerns. When that happens, your trip host will adjust the plan and arrange an alternative of similar standard wherever possible.",
          "If we cancel a departure (for example, if it doesn't reach the minimum group size, or for safety reasons), we'll offer you another date or a full refund of the money you've paid us.",
          "If a journey is cancelled or cut short because of events beyond our control (see Force majeure), we'll offer you another date or refund what we're able to recover from our partners.",
        ],
      ],
    },
    {
      id: "documents-health-insurance",
      title: "Documents, health & insurance",
      blocks: [
        [
          "You're responsible for carrying a valid government ID, and for international journeys a passport with enough validity, plus any visas and permits required. We can help with visa applications, but approval is always up to the authorities.",
          "Please make sure you're fit for the activities on your chosen journey, and tell us about any medical condition, allergy or need that we or our partners should know about.",
          "Travel insurance isn't included, and we strongly recommend it for every journey, covering medical emergencies, cancellation and loss of belongings.",
        ],
      ],
    },
    {
      id: "conduct",
      title: "Travelling together",
      blocks: [
        "Our journeys work because everyone looks out for each other. We ask every traveller to:",
        [
          "Treat fellow travellers, our team, our partners and local communities with kindness and respect.",
          "Follow our community guidelines, the trip host's safety instructions and local laws and customs.",
          "Not use illegal drugs, and not harass, discriminate against or endanger anyone.",
        ],
        "If someone's behaviour puts the group's safety or wellbeing at risk, we may ask them to leave the journey, without a refund. You're responsible for any damage you cause to property during the trip.",
      ],
    },
    {
      id: "groups-and-photos",
      title: "Pre-trip groups & photos",
      blocks: [
        "Before departure, we add travellers to a private group so you can get to know each other. Please keep it friendly and respectful, and don't share other members' details outside the group.",
        "Photos and videos are taken during our journeys and some may be shared on our website and social media. Our [Privacy Policy](/privacy-policy) explains how this works and how to ask us not to feature you.",
      ],
    },
    {
      id: "liability",
      title: "Our responsibility",
      blocks: [
        [
          "We plan your journey with care and work with partners we trust. Hotels, transport operators, airlines and activity providers are independent businesses with their own terms, and we're not responsible for their acts or omissions beyond our reasonable control.",
          "We're not responsible for loss, theft or damage to your belongings, or for delays and extra costs caused by events beyond our control.",
          "To the extent the law allows, our total liability to you for any journey is limited to the amount you paid us for it. Nothing in these terms limits any liability that can't be limited under Indian law.",
        ],
      ],
    },
    {
      id: "force-majeure",
      title: "Force majeure",
      blocks: [
        "We're not liable for any failure or delay caused by events beyond our reasonable control, such as natural disasters, extreme weather, epidemics, strikes, political unrest, government orders, or the closure of roads, airports or borders.",
      ],
    },
    {
      id: "website",
      title: "Using our website",
      blocks: [
        `All content on this website, including text, photos, videos and logos, belongs to ${company.name} or is used with permission. Please don't copy or reuse it without our written consent. We keep trip information as accurate and up to date as we can, but details may change, and your booking confirmation will always have the final details. Links to other websites are provided for convenience, and we're not responsible for their content.`,
      ],
    },
    {
      id: "law",
      title: "Governing law",
      blocks: [
        "These terms are governed by the laws of India. Any dispute will be handled by the courts at Gautam Buddh Nagar (Noida), Uttar Pradesh, though we'll always try to resolve any concern with you directly first.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        "We may update these terms from time to time. The version in place when you book applies to that booking. The date at the top of this page shows when they were last changed.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        `Questions about these terms or your booking? Write to us at ${company.email}, call or WhatsApp ${company.phone}, or [get in touch here](/contact).`,
      ],
    },
  ],
};
