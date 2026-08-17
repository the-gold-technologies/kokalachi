import { HeroSection } from "@/components/HeroSection";
import { WhyWeExistSection } from "@/components/WhyWeExistSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { UpcomingJourneysSection } from "@/components/UpcomingJourneysSection";
import { GoodCompanySection } from "@/components/GoodCompanySection";
import { MomentsThatStayedSection } from "@/components/MomentsThatStayedSection";
import { WhoTravelsSection } from "@/components/WhoTravelsSection";
import { BehindKokalachiSection } from "@/components/BehindKokalachiSection";
import { FaqAndCtaSection } from "@/components/FaqAndCtaSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      {/* Official Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Step 1: Hero — Grab attention & inspire */}
        <HeroSection />

        {/* Step 2: Why We Exist — Build relevance & empathy */}
        <WhyWeExistSection />

        {/* Step 3: How It Works — Reduce friction (3 simple steps) */}
        <HowItWorksSection />

        {/* Step 4: The Kokalachi Difference — Differentiate & position */}
        <DifferenceSection />

        {/* Step 5: Upcoming Journeys — Show real options & spark excitement */}
        <UpcomingJourneysSection />

        {/* Step 6: You're in Good Company — Build trust & safety */}
        <GoodCompanySection />

        {/* Step 7: Moments That Stayed — Authentic social proof */}
        <MomentsThatStayedSection />

        {/* Step 8: Who Travels With Us? — Community belonging */}
        <WhoTravelsSection />

        {/* Step 9: Behind Kokalachi — Journal stories & curation */}
        <BehindKokalachiSection />

        {/* Step 10: FAQs & Final Booking CTA — Remove last-mile doubts */}
        <FaqAndCtaSection />

        {/* Step 10: Final CTA Banner */}
        <FinalCtaSection />
      </main>

      {/* Official Brand Footer */}
      <Footer />
    </div>
  );
}
