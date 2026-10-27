import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { WhyWeExistSection } from "@/components/WhyWeExistSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { UpcomingJourneysSection } from "@/components/UpcomingJourneysSection";
import { GoodCompanySection } from "@/components/GoodCompanySection";
import { MomentsThatStayedSection } from "@/components/MomentsThatStayedSection";
import { BehindKokalachiSection } from "@/components/BehindKokalachiSection";
import { getAllStories, getBlogPosts, getCommunityStats, getPage, getSiteConfig, getTrips, headingTag } from "@/lib/content";
import { hasFullDetails, isBookingOpen } from "@/lib/departures";

// The home page uses Global SEO (CMS → SEO → Global); its JSON-LD is rendered site-wide by the root layout
export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();
  return {
    title: { absolute: site.siteTitle },
    description: site.siteDescription,
    alternates: { canonical: "/" },
  };
}

export default async function Home() {
  // All cached CMS reads, fetched in parallel
  const [{ sections }, site, journeys, trips, stories, { countryCount }, posts] = await Promise.all([
    getPage("home"),
    getSiteConfig(),
    getPage("journeys"),
    getTrips(),
    getAllStories(),
    getCommunityStats(),
    getBlogPosts(),
  ]);
  // Two bookable trips (same picks as the navbar) to preview step 1 of How It Works
  const previewTrips = trips.filter((card) => isBookingOpen(card) && hasFullDetails(card.tourPackage)).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      <div className="flex-grow">
        {/* Section 1: Hero — Brand introduction, value proposition & primary CTA */}
        <HeroSection content={sections.HeroSection} headingTag={headingTag(site.headingOptions)} />

        {/* Section 2: Why We Exist — Pain points of planning & problem framing */}
        <WhyWeExistSection content={sections.WhyWeExistSection} />

        {/* Section 3: How It Works — 3-step frictionless travel process */}
        <HowItWorksSection content={sections.HowItWorksSection} trips={previewTrips} story={stories[0]} />

        {/* Section 4: The Kokalachi Difference — Key differentiators & hosting style */}
        <DifferenceSection content={sections.DifferenceSection} />

        {/* Section 5: Good Company — Trust, compatibility & traveller community */}
        <GoodCompanySection content={sections.GoodCompanySection} />

        {/* Section 6: Moments That Stayed — Authentic social proof, reviews & memories */}
        <MomentsThatStayedSection
          content={sections.MomentsThatStayedSection}
          stories={stories}
          countryCount={countryCount}
        />

        {/* Section 7: Who Travels With Us — Personas & community belonging */}
        {/* <WhoTravelsSection /> */}

        {/* Section 8: Upcoming Journeys — Curated itineraries, dates & booking CTAs */}
        <UpcomingJourneysSection
          content={sections.UpcomingJourneysSection}
          trips={trips}
          vibes={journeys.sections.JourneysFilterSection.categories}
        />

        {/* Section 9: From the Journal — Newest blog posts */}
        <BehindKokalachiSection content={sections.BehindKokalachiSection} posts={posts} />
      </div>
    </div>
  );
}
