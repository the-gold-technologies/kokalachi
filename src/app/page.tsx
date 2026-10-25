import { HeroSection } from "@/components/HeroSection";
import { WhyWeExistSection } from "@/components/WhyWeExistSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { UpcomingJourneysSection } from "@/components/UpcomingJourneysSection";
import { GoodCompanySection } from "@/components/GoodCompanySection";
import { MomentsThatStayedSection } from "@/components/MomentsThatStayedSection";
import { WhoTravelsSection } from "@/components/WhoTravelsSection";
import { BehindKokalachiSection } from "@/components/BehindKokalachiSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getAllStories, getCommunityStats } from "@/data/community";
import { getSortedBlogPosts } from "@/data/blogs";
import { tripCards } from "@/data/trips";
import { hasFullDetails, isBookingOpen } from "@/lib/departures";

export default function Home() {
  // Pulled from the community & blog data, so new stories and posts show up here on their own
  const stories = getAllStories();
  const { countryCount } = getCommunityStats();
  const posts = getSortedBlogPosts();
  // Two bookable trips (same picks as the navbar) to preview step 1 of How It Works
  const previewTrips = tripCards.filter((card) => isBookingOpen(card) && hasFullDetails(card.tourPackage)).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      <div className="flex-grow">
        {/* Section 1: Hero — Brand introduction, value proposition & primary CTA */}
        <HeroSection />

        {/* Section 2: Why We Exist — Pain points of planning & problem framing */}
        <WhyWeExistSection />

        {/* Section 3: How It Works — 3-step frictionless travel process */}
        <HowItWorksSection trips={previewTrips} story={stories[0]} />

        {/* Section 4: The Kokalachi Difference — Key differentiators & hosting style */}
        <DifferenceSection />

        {/* Section 5: Good Company — Trust, compatibility & traveller community */}
        <GoodCompanySection />

        {/* Section 6: Moments That Stayed — Authentic social proof, reviews & memories */}
        <MomentsThatStayedSection stories={stories} countryCount={countryCount} />

        {/* Section 7: Who Travels With Us — Personas & community belonging */}
        {/* <WhoTravelsSection /> */}

        {/* Section 8: Upcoming Journeys — Curated itineraries, dates & booking CTAs */}
        <UpcomingJourneysSection />

        {/* Section 9: From the Journal — Newest blog posts */}
        <BehindKokalachiSection posts={posts} />
      </div>
    </div>
  );
}
