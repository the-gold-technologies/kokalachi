import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyWeStartedSection } from "@/components/about/WhyWeStartedSection";
import { WhatWeBelieveSection } from "@/components/about/WhatWeBelieveSection";
import { MeetFounderSection } from "@/components/about/MeetFounderSection";
import { JoinTribeSection } from "@/components/about/JoinTribeSection";

export const metadata: Metadata = {
  title: "About Kokalachi - Journeys Become Friendships",
  description:
    "Discover why Kokalachi exists, our vision, mission, and the people behind our curated group travel journeys.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0E5A60] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow pt-24 lg:pt-28">
        {/* Step 1: About Hero */}
        <AboutHeroSection />

        {/* Step 2: Why We Started (Vision) */}
        <WhyWeStartedSection />

        {/* Step 3: What We Believe (Mission) */}
        <WhatWeBelieveSection />

        {/* Step 4: Meet the Founder */}
        <MeetFounderSection />

        {/* Step 5: Join the Tribe (Final CTA) */}
        <JoinTribeSection />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
