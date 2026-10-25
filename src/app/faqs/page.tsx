import type { Metadata } from "next";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FaqCtaSection } from "@/components/faq/FaqCtaSection";
import { faqCategories } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Everything you might want to know before you join a Kokalachi journey, from how it works to what's included.",
  openGraph: {
    title: "FAQs | Kokalachi",
    description:
      "Everything you might want to know before you join a Kokalachi journey, from how it works to what's included.",
    url: "https://kokalachi.com/faqs",
    images: [{ url: "/fevicon.png", width: 512, height: 512, alt: "Kokalachi Logo" }],
  },
  twitter: {
    card: "summary",
    title: "FAQs | Kokalachi",
    description: "Questions before you join a journey? We've got you.",
    images: ["/fevicon.png"],
  },
};

// FAQPage structured data so search engines can show the answers directly
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  ),
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section (Matching Contact Page) */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Travellers planning a journey"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  FAQs
                </span>
              </div>
              <h1 className="heading-hero font-semibold font-serif text-white mb-5 max-w-4xl">
                Questions?{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  We&apos;ve got you.
                  <TitleUnderline />
                </span>
              </h1>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Everything you might want to know before you join a journey, from how it works to
                what&apos;s included. Can&apos;t find your answer? Just ask us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FaqAccordion categories={faqCategories} />

      <FaqCtaSection />
    </div>
  );
}
