import type { Metadata } from "next";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { StoryBrowser } from "@/components/community/StoryBrowser";
import { CommunityCta } from "@/components/community/CommunityCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { UpcomingJourneysStrip } from "@/components/UpcomingJourneysStrip";
import { getAllStories, getPage, getTrips, headingTag, seoMetadata, getUpcomingJourneysStrip } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { sections, seo } = await getPage("community");
  const ogImage = sections.CommunityChaptersSection.chapters[0]?.coverImage.replace("w=1200", "w=1200&h=630&fm=jpg");
  return seoMetadata(seo, "/community", ogImage);
}

export default async function CommunityPage() {
  const [{ sections, seo }, trips, stories] = await Promise.all([getPage("community"), getTrips(), getAllStories()]);
  const hero = sections.CommunityHeroSection;
  const cta = sections.CommunityCtaSection;
  const Heading = headingTag(seo?.headingOptions);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#FAF6F0]">
      <JsonLd schema={seo?.schema} />
      {/* ================= HERO (matches FAQ / Contact / Journeys) ================= */}
      <div className="relative h-[60vh] min-h-[440px] w-full">
        <img
          src={hero.heroImage}
          alt={hero.heroAlt}
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        {/* Same fade as the other page heroes: solid navy behind the text, lighter at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/40 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {hero.badge}
                </span>
              </div>
              <Heading className="heading-hero font-semibold font-serif text-white mb-4">
                {hero.titleLead.trim()}{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.titleAccent}
                  <TitleUnderline />
                </span>
              </Heading>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STORIES: one card per traveller letter ================= */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0E5A60 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <StoryBrowser entries={stories} eyebrow={sections.CommunityChaptersSection.inTheirWordsLabel} />
      </div>

      {/* Upcoming Journeys, placed before the CTA */}
      <UpcomingJourneysStrip trips={trips} content={await getUpcomingJourneysStrip()} page="community" inline />

      <CommunityCta cta={cta} />
    </div>
  );
}
