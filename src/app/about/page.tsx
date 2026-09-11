import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyWeStartedSection } from "@/components/about/WhyWeStartedSection";
import { WhatWeBelieveSection } from "@/components/about/WhatWeBelieveSection";
import { MeetFounderSection } from "@/components/about/MeetFounderSection";
import { ExploreJourneysSection } from "@/components/about/ExploreJourneysSection";
import { JoinTribeSection } from "@/components/about/JoinTribeSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover why Kokalachi exists, our vision, mission, and the people behind our curated group travel journeys.",
  openGraph: {
    title: "About Kokalachi — Journeys Become Friendships",
    description:
      "Discover why Kokalachi exists, our vision, mission, and the people behind our curated group travel journeys.",
    url: "https://kokalachi.com/about",
    images: [{ url: "/fevicon.png", width: 512, height: 512, alt: "Kokalachi Logo" }],
  },
  twitter: {
    card: "summary",
    title: "About Kokalachi — Journeys Become Friendships",
    description: "Discover the vision, mission, and people behind Kokalachi's curated group journeys.",
    images: ["/fevicon.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col  text-slate-900 antialiased  selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Step 1: About Hero */}
        <AboutHeroSection />

        {/* Step 2: Why We Started (Vision) */}
        <WhyWeStartedSection />

        {/* Step 3: What We Believe (Mission) */}
        <WhatWeBelieveSection />

        {/* Step 4: Meet the Founder */}
        <MeetFounderSection />

        {/* Step 5: Explore Our Journeys */}
        <ExploreJourneysSection />

        {/* Step 6: Join the Tribe (Final CTA) */}
        <JoinTribeSection />
      </main>
    </div>
  );
}
