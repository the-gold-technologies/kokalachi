import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyWeStartedSection } from "@/components/about/WhyWeStartedSection";
import { WhatWeBelieveSection } from "@/components/about/WhatWeBelieveSection";
import { MeetFounderSection } from "@/components/about/MeetFounderSection";
import { ExploreJourneysSection } from "@/components/about/ExploreJourneysSection";
import { JoinTribeSection } from "@/components/about/JoinTribeSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage, getTrips, headingTag, seoMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPage("about");
  return seoMetadata(seo, "/about");
}

export default async function AboutPage() {
  const [{ sections, seo }, trips] = await Promise.all([getPage("about"), getTrips()]);

  return (
    <div className="min-h-screen flex flex-col  text-slate-900 antialiased  selection:text-white">
      <JsonLd schema={seo?.schema} />
      <div className="flex-grow">
        {/* Step 1: About Hero */}
        <AboutHeroSection content={sections.AboutHeroSection} headingTag={headingTag(seo?.headingOptions)} />

        {/* Step 2: Why We Started (Vision) */}
        <WhyWeStartedSection content={sections.WhyWeStartedSection} />

        {/* Step 3: What We Believe (Mission) */}
        <WhatWeBelieveSection content={sections.WhatWeBelieveSection} />

        {/* Step 4: Meet the Founder */}
        <MeetFounderSection content={sections.MeetFounderSection} />

        {/* Step 5: Explore Our Journeys */}
        <ExploreJourneysSection content={sections.ExploreJourneysSection} trips={trips} />

        {/* Step 6: Join the Tribe (Final CTA) */}
        <JoinTribeSection content={sections.JoinTribeSection} />
      </div>
    </div>
  );
}
