import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import type { CommunitySections } from "@/types/cms";

// "Share your story" band at the end of /community and every trip's story page
// (CMS → Community → CTA section).
export function CommunityCta({ cta }: { cta: CommunitySections["CommunityCtaSection"] }) {
  return (
  <section className="relative py-20 sm:py-24 overflow-hidden border-t border-amber-900/10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="mx-auto site-x max-w-3xl relative z-10 text-center">
      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-4">
        {cta.kicker}
      </span>
      <h2 className="heading-section font-serif text-[#0E5A60] mb-5">
        {cta.titleLead.trim()}{" "}
        <span className="relative inline-block font-script font-normal text-[1.15em]">
          {cta.titleAccent}
          <TitleUnderline />
        </span>
      </h2>
      <p className="text-[#0E5A60]/80 text-base sm:text-lg leading-relaxed mb-9">
        {cta.description}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href={cta.primaryBtnUrl}
          className="inline-flex items-center gap-2 bg-[#0E5A60] hover:bg-[#0B2A3D] text-white px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
        >
          <MessageCircle size={16} /> {cta.primaryBtnText}
        </Link>
        <a
          href={cta.secondaryBtnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white hover:bg-[#FDF0EC] text-[#0E5A60] border border-[#0E5A60]/20 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
        >
          <FaInstagram className="w-4 h-4" /> {cta.secondaryBtnText}
        </a>
      </div>
      <Link
        href={cta.tertiaryLinkUrl}
        className="group mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#D96C2C] hover:text-[#0E5A60] transition-colors"
      >
        {cta.tertiaryLinkText}
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
  );
}
