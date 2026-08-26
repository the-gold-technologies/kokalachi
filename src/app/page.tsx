import { HeroSection } from "@/components/HeroSection";
import { WhyWeExistSection } from "@/components/WhyWeExistSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { UpcomingJourneysSection } from "@/components/UpcomingJourneysSection";
import { GoodCompanySection } from "@/components/GoodCompanySection";
import { MomentsThatStayedSection } from "@/components/MomentsThatStayedSection";
import { WhoTravelsSection } from "@/components/WhoTravelsSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      {/* Official Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero — Brand introduction, value proposition & primary CTA */}
        <HeroSection />

        {/* Section 2: Why We Exist — Pain points of planning & problem framing */}
        <WhyWeExistSection />

        {/* Section 3: How It Works — 3-step frictionless travel process */}
        <HowItWorksSection />

        {/* Section 4: The Kokalachi Difference — Key differentiators & hosting style */}
        <DifferenceSection />

        {/* Section 5: Good Company — Trust, compatibility & traveller community */}
        <GoodCompanySection />

        {/* Section 6: Moments That Stayed — Authentic social proof, reviews & memories */}
        <MomentsThatStayedSection />

        {/* Section 7: Who Travels With Us — Personas & community belonging */}
        {/* <WhoTravelsSection /> */}

        {/* Section 8: Upcoming Journeys — Curated itineraries, dates & booking CTAs */}
        <UpcomingJourneysSection />
      </main>

      {/* Official Brand Footer */}
      <Footer />
    </div>
  );
}
