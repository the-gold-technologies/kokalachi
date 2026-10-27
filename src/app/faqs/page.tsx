import type { Metadata } from "next";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FaqCtaSection } from "@/components/faq/FaqCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage, headingTag, seoMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPage("faqs");
  return seoMetadata(seo, "/faqs");
}

export default async function FaqsPage() {
  const { sections, seo } = await getPage("faqs");
  const Heading = headingTag(seo?.headingOptions);
  const hero = sections.FaqsHeroSection;
  const { categories, sidebarTitle } = sections.FaqsAccordionSection;

  // FAQPage structured data so search engines can show the answers directly
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
      })),
    ),
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <JsonLd schema={jsonLd} />
      <JsonLd schema={seo?.schema} />

      {/* Hero Section (Matching Contact Page) */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <img
          src={hero.bannerImage}
          alt="Travellers planning a journey"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {hero.tagline}
                </span>
              </div>
              <Heading className="heading-hero font-semibold font-serif text-white mb-5 max-w-4xl">
                {hero.headline.trim()}{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.scriptAccent}
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

      <FaqAccordion categories={categories} sidebarTitle={sidebarTitle} />

      <FaqCtaSection content={sections.FaqsCtaSection} />
    </div>
  );
}
