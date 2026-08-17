import {
  NavbarV2,
  Step1Hero,
  Step2WhyWeExist,
  Step3HowItWorks,
  Step4Difference,
  Step5UpcomingJourneys,
  Step6GoodCompany,
  Step7MomentsThatStayed,
  Step8WhoTravels,
  Step9BehindKokalachi,
  Step9MeetFounder,
  Step10FaqAndCta,
  FooterV2,
} from "@/components/journey";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      {/* Official Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Step 1: Hero — Grab attention & inspire */}
        <Step1Hero />

        {/* Step 2: Why We Exist — Build relevance & empathy */}
        <Step2WhyWeExist />

        {/* Step 3: How It Works — Reduce friction (3 simple steps) */}
        <Step3HowItWorks />

        {/* Step 4: The Kokalachi Difference — Differentiate & position */}
        <Step4Difference />

        {/* Step 5: Upcoming Journeys — Show real options & spark excitement */}
        <Step5UpcomingJourneys />

        {/* Step 6: You're in Good Company — Build trust & safety */}
        <Step6GoodCompany />

        {/* Step 7: Moments That Stayed — Authentic social proof */}
        <Step7MomentsThatStayed />

        {/* Step 8: Who Travels With Us? — Community belonging */}
        <Step8WhoTravels />

        {/* Behind Kokalachi — Journal stories & curation */}
        <Step9BehindKokalachi />

        {/* Step 9: Meet the Founder — Humanize the brand */}
        <Step9MeetFounder />

        {/* Step 10: FAQs & Final Booking CTA — Remove last-mile doubts */}
        <Step10FaqAndCta />
      </main>

      {/* Official Brand Footer */}
      <FooterV2 />
    </div>
  );
}
