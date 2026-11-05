// Content shapes as saved by the kokalachi-cms section editors (Page → Section.content).
// Section names match the website components 1-to-1.

import type { CommunityTrip } from "@/data/community";
import type { FaqCategory } from "@/data/faqs";

export interface PageSeo {
  title: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  targetKeywords: string | null;
  canonicalUrl: string | null;
  noIndex: boolean;
  schema: string | null;
  // Only on pages (CMS → SEO → Pages), not on blog posts
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  featuredImage?: string | null;
  headingOptions?: unknown; // "h1"…"h6": the tag used for the page's hero headline
}

// "Find your next" + handwritten "journey." + "begin?"
interface Heading {
  headline: string;
  scriptAccent: string;
  headlineSuffix?: string;
}

// ---------- Home ----------

export interface HeroContent extends Heading {
  tagline: string;
  subtitle1: string;
  subtitle2: string;
  backgroundImage: string;
  destPlaceholder: string;
  popularDestinations: string[];
  quickDatePresets: string[];
  searchPlaceholder: string;
  popularDestinationsTitle: string;
  whenLabel: string;
  travellersLabel: string;
  groupSizeTitle: string;
  searchButtonText: string;
  customButtonText?: string; // replaces the search button when "Custom" is picked
  popularSearchesLabel: string;
  // The "How are you travelling?" choices, matched to Solo / Group / Custom by key
  travellerOptions: { key?: string; label: string; desc: string }[];
}

export interface WhyWeExistContent extends Heading {
  tag: string;
  description: string;
  oldWayBadge: string;
  oldWayTitle: string;
  newWayBadge: string;
  newWayTitle: string;
  photos: { image: string; alt: string; badge: string; captionTitle: string; captionSub: string }[];
  conclusionTitle: string;
  conclusionDescription: string;
  callout1Text: string;
  callout2Text: string;
  callout3Text: string;
  chatMembersCount: string;
  chatGroupImage: string;
  chatMessages: {
    sender: string;
    text: string;
    time: string;
    color?: string;
    avatar?: string;
    isUser?: boolean;
    isSilence?: boolean;
    isSilent?: boolean;
    reactions?: string;
  }[];
  pillar1Title?: string;
  pillar2Title?: string;
  pillar3Title?: string;
  pillar4Title?: string;
}

export interface HowItWorksContent extends Heading {
  tag: string;
  description: string;
  steps: { title: string; description: string; points?: string[] }[];
  ctaPrimaryText: string;
  ctaPrimaryUrl: string;
  ctaSecondaryText: string;
  ctaSecondaryUrl: string;
  step1UpcomingTitle: string;
  step1BookButtonText: string;
  step2GroupTitle: string;
  step2GroupSubtitle: string;
  step2Message1Author: string;
  step2Message1Text: string;
  step2Message2Author: string;
  step2Message2Text: string;
  step2Message3Text: string;
  step3Image?: string;
}

export interface DifferenceContent extends Heading {
  tag: string;
  subtitleStatement: string;
  features: { title: string; description: string; image: string; caption?: string; tag?: string }[];
}

export interface GoodCompanyContent extends Heading {
  tag: string;
  description: string;
  cards: { title: string; description: string; image: string; hashtag: string }[];
  ctaText: string;
  ctaLink: string;
  promiseTitle?: string;
  promiseHeadline?: string;
  promiseAccent?: string;
}

export interface MomentsThatStayedContent extends Heading {
  tag: string;
  subtitle: string;
  timelineTitle: string;
  timelineSteps: { title: string; text?: string; description?: string; color?: string; icon: string }[];
  unfilteredMomentsLabel: string;
  readLetterLabel: string;
  readFullLetterLabel: string;
  chatBadgeLabel: string;
  memoryLaneLabel: string;
}

export interface UpcomingJourneysContent extends Heading {
  tag: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface BehindKokalachiContent extends Heading {
  tagline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  readStoryText: string;
}

export interface HomeSections {
  HeroSection: HeroContent;
  WhyWeExistSection: WhyWeExistContent;
  HowItWorksSection: HowItWorksContent;
  DifferenceSection: DifferenceContent;
  GoodCompanySection: GoodCompanyContent;
  MomentsThatStayedSection: MomentsThatStayedContent;
  UpcomingJourneysSection: UpcomingJourneysContent;
  BehindKokalachiSection: BehindKokalachiContent;
}

// ---------- About ----------

export interface AboutHeroContent extends Heading {
  tagline: string;
  handwrittenSubtitle: string;
  doodleNote: string;
  backgroundImage: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  polaroid1Image: string;
  polaroid1Title: string;
  polaroid2Image: string;
  polaroid2Title: string;
  polaroid3Image: string;
  polaroid3Title: string;
}

export interface WhyWeStartedContent extends Heading {
  tagline: string;
  description: string;
  mainImage: string;
  mainImageAlt?: string; // optional in the CMS; components fall back to a description
  polaroidImage: string;
  polaroidImageAlt?: string;
  polaroidNote: string;
  item1Title: string;
  item2Title: string;
  item3Title: string;
  conclusionPrefix: string;
  conclusionBrand: string;
  conclusionText: string;
}

export interface WhatWeBelieveContent extends Heading {
  tagline: string;
  description: string;
  mainImage: string;
  mainImageAlt?: string; // optional in the CMS; components fall back to a description
  polaroidImage: string;
  polaroidImageAlt?: string;
  polaroidCaption: string;
  footerNote: string;
  pillars: { title: string; desc: string }[];
}

export interface MeetFounderContent extends Heading {
  tagline: string;
  badge: string;
  founderNames: string;
  founderFullName: string;
  founderTitle: string;
  founderPhoto: string;
  imageAlt?: string; // optional in the CMS; the component falls back to the founders' names
  leadQuote: string;
  story: string;
  closingNote: string;
}

export interface ExploreJourneysContent extends Heading {
  tagline: string;
  description: string;
}

export interface JoinTribeContent {
  tagline: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  blobImage: string;
  blobImageAlt?: string;
  polaroidNote: string;
  footerTag: string;
}

export interface AboutSections {
  AboutHeroSection: AboutHeroContent;
  WhyWeStartedSection: WhyWeStartedContent;
  WhatWeBelieveSection: WhatWeBelieveContent;
  MeetFounderSection: MeetFounderContent;
  ExploreJourneysSection: ExploreJourneysContent;
  JoinTribeSection: JoinTribeContent;
}

// ---------- Contact ----------

export interface ContactSections {
  ContactHeroSection: Heading & { tagline: string; bannerImage: string; bannerAlt?: string };
  ContactFormSection: {
    heading: string;
    subtitle: string;
    successTitle: string;
    successSubtitle: string;
    sendAnotherMessageText: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    journeyLabel: string;
    journeyPlaceholder: string;
    travelDateLabel: string;
    guestsLabel: string;
    guestsSoloText: string;
    guestsPluralSuffix: string;
    messageLabel: string;
    messagePlaceholder: string;
    hearAboutLabel: string;
    hearAboutPlaceholder: string;
    submittingButtonText: string;
    journeyOptions: string[];
    hearAboutOptions: string[];
    submitButtonText: string;
    urgencyNote: string;
  };
  ContactSidebarSection: {
    altCardTitle: string;
    emailTitle: string;
    emailDesc: string;
    emailAddress: string;
    instaTitle: string;
    instaDesc: string;
    instaHandle: string;
    instaLink: string;
    trust1Title: string;
    trust1Desc: string;
    trust2Title: string;
    trust2Desc: string;
    trust3Title: string;
    trust3Desc: string;
    officeTitle?: string;
    officeCompanyName?: string;
    officeAddress?: string;
  };
}

// ---------- Journeys ----------

export interface VibeCategory {
  id: string; // matches Trip.categories, e.g. "FirstTimers"; "All" shows everything
  label: string;
}

export interface JourneysSections {
  JourneysHeroSection: { title: string; scriptAccent: string; tagline: string; description: string; bannerImage: string };
  JourneysFilterSection: { categories: VibeCategory[]; sidebarTitle: string; emptyStateText: string };
}

// ---------- FAQs ----------

export interface FaqsSections {
  FaqsHeroSection: Heading & { tagline: string; description: string; bannerImage: string; bannerAlt?: string };
  FaqsAccordionSection: { sidebarTitle: string; categories: FaqCategory[] };
  FaqsCtaSection: {
    tagline: string;
    headline: string;
    whatsappText: string;
    whatsappUrl: string;
    enquiryText: string;
    enquiryUrl: string;
  };
}

// ---------- Community ----------

export interface CommunitySections {
  CommunityHeroSection: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    heroImage: string;
    heroAlt: string;
  };
  CommunityChaptersSection: {
    moreMomentsLabel: string;
    inTheirWordsLabel: string;
    inShortLabel: string;
    whatTheyLovedLabel: string;
    chapters: CommunityTrip[];
  };
  CommunityCtaSection: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryBtnText: string;
    primaryBtnUrl: string;
    secondaryBtnText: string;
    secondaryBtnUrl: string;
    tertiaryLinkText: string;
    tertiaryLinkUrl: string;
  };
}

// ---------- Blogs listing ----------

export interface BlogsSections {
  BlogHeroSection: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    heroImage: string;
    heroAlt: string;
  };
  BlogCtaSection: {
    kicker: string;
    chaiNote: string;
    brewingTitle: string;
    brewingDescription: string;
    ctaBtnText: string;
    ctaBtnUrl: string;
  };
}

// ---------- Legal ----------

export interface LegalSections {
  LegalDocumentSection: {
    slug: string;
    title: string;
    description: string;
    updatedOn: string; // "YYYY-MM-DD"
    intro: string;
    bodyHtml: string;
    questionsEmail: string;
    badge: string;
    lastUpdatedLabel: string;
    tableOfContentsLabel: string;
    questionsTitle: string;
    questionsSubtitle: string;
  };
}

export interface PageSections {
  home: HomeSections;
  about: AboutSections;
  contact: ContactSections;
  journeys: JourneysSections;
  faqs: FaqsSections;
  community: CommunitySections;
  terms: LegalSections;
  "privacy-policy": LegalSections;
}

// ---------- Global ----------

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  logo: string | null; // dark logo, for light backgrounds
  favicon: string | null;
  socialLinks: {
    navbarLightLogo?: string; // light logo, for the see-through navbar over dark heroes
    footerLogo?: string;
    whatsapp?: string;
    copyrightText?: string;
    newsletterTitle?: string;
    newsletterDescription?: string;
    newsletterButtonText?: string;
    newsletterSuccessMessage?: string;
    newsletterPrivacyNote?: string;
  } | null;
  headingOptions: unknown; // hero headline tag for the home page
  schema: string | null; // site-wide JSON-LD (e.g. TravelAgency)
  googleAnalyticsId: string | null;
  gtmId: string | null;
  searchConsoleId: string | null;
  customHeaderScripts: string | null;
  customFooterScripts: string | null;
  robotsTxt: string | null;
  sitemapEnabled: boolean;
  sitemapCustomContent: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  youtubeUrl: string | null;
  linkedinUrl: string | null;
  topBar?: TopBarConfig | null; // the slim bar above the navbar
}

// CMS → SEO → Global → Top bar. Every field is optional: anything left empty falls back to the
// website's defaults, so the bar works before (and without) any of this being filled in.
export interface TopBarConfig {
  enabled?: boolean; // false hides the bar on every page
  // Left side, rotating. {departures} and {destinations} are replaced with live counts from the
  // trips, e.g. "{departures} departures across {destinations} destinations".
  facts?: string[];
  // Right side, rotating: your own chips (sales, announcements), shown before the trip updates
  messages?: TopBarMessage[];
  // Right side: also show the automatic trip updates (next departure, offers, last seats). Default true.
  showTripUpdates?: boolean;
}

export interface TopBarMessage {
  label: string; // orange pill, e.g. "Diwali Sale"
  text: string; // e.g. "Flat ₹2,000 off all November trips"
  link?: string; // "/trips/upcoming" or a full URL
  startDate?: string; // "YYYY-MM-DD", shown from this day (India time)
  endDate?: string; // "YYYY-MM-DD", hidden after this day
}

// ---------- Trips pages (CMS → Static Pages → Trips Pages) ----------
// /trips is the "trips" page (AllTripsSection); each sub-page is "trips/<slug>" with one
// TripsSubPageSection. Field names match kokalachi-cms/src/lib/tripsPageContent.ts.

export interface TitleText {
  title: string;
  text: string;
}

export interface TripsPageContent {
  tabLabel: string; // tab under every trips hero, and the footer link
  tagline: string; // orange pill above the headline
  headline: string;
  scriptAccent: string; // handwritten, underlined end of the headline
  description: string;
  heroImage: string;
  listTitle: string;
  listSubtitle: string;
}

export interface TripsSubPageContent extends TripsPageContent {
  layout: "list" | "enquiry"; // a list of trips, or the private-trip enquiry form
  list: "all" | "upcoming" | "past";
  notes: TitleText[]; // list pages: cards above the trip list
  howItWorksLabel: string; // enquiry pages
  howItWorksTitle: string;
  steps: TitleText[];
  enquiryTag: string;
  menuTag: string; // navbar Trips dropdown tile
  menuDesc: string;
  menuImage: string;
}

export interface CmsTripsPages {
  sections: { AllTripsSection?: TripsPageContent & { menuFooterText: string } };
  seo: PageSeo | null;
  pages: { slug: string; order: number; content: TripsSubPageContent; seo: PageSeo }[];
}

// ---------- Shared sections (CMS → Static Pages → Shared Sections) ----------

// Pages that can show the Upcoming Journeys strip (Shared Sections → Show on)
export type StripPage = "about" | "community" | "blogs" | "blog-post" | "journeys" | "journey-detail" | "trips";

export interface UpcomingJourneysStripContent {
  tag: string;
  headline: string;
  scriptAccent: string;
  description: string;
  viewAllText: string;
  showOn: StripPage[];
}

export interface SharedSections {
  UpcomingJourneysStripSection?: UpcomingJourneysStripContent;
}
