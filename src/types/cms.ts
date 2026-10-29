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
}

export interface HowItWorksContent extends Heading {
  tag: string;
  description: string;
  steps: { title: string; description: string; image?: string; tag?: string; stepNumber?: number }[];
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
}

export interface MomentsThatStayedContent extends Heading {
  tag: string;
  subtitle: string;
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
  polaroidImage: string;
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
  polaroidImage: string;
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
  ContactHeroSection: Heading & { tagline: string; bannerImage: string };
  ContactFormSection: {
    heading: string;
    subtitle: string;
    successTitle: string;
    successSubtitle: string;
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
  FaqsHeroSection: Heading & { tagline: string; description: string; bannerImage: string };
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
  CommunityChaptersSection: { chapters: CommunityTrip[] };
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
}
