import React from "react";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Sparkles, MessageCircle, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import type { GoodCompanyContent } from "@/types/cms";

// Trust & safety: how we look after you (what the trip is like lives in DifferenceSection). Icons follow card order.
const ICONS = [
  { icon: Sparkles, iconStyle: "bg-[#FDF0EC] text-[#D96C2C]" },
  { icon: MessageCircle, iconStyle: "bg-[#EBF3F0] text-[#0E5A60]" },
  { icon: ShieldCheck, iconStyle: "bg-[#EEF4F8] text-[#0E5A60]" },
  { icon: Heart, iconStyle: "bg-[#FDF0EC] text-[#EF4444]" },
];

// One torn-paper edge, reused so every card looks the same
const TORN_EDGE = "M0,20 Q25,5 50,22 T100,10 T150,30 T200,8 T250,25 T300,12 T350,28 T400,6 T450,24 T500,15 L500,50 L0,50 Z";

export function GoodCompanySection({ content }: { content: GoodCompanyContent }) {
  const promises = content.cards.map((card, i) => ({
    ...ICONS[i % ICONS.length],
    tag: card.hashtag,
    title: card.title,
    text: card.description,
    image: card.image,
    alt: card.title,
  }));

  return (
    <section
      id="good-company"
      className="py-12 sm:py-14 lg:py-16 bg-[#ffffff] relative overflow-hidden select-none"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      <FlyingBirds className="hidden lg:block absolute top-8 right-24 opacity-35 text-[#0E5A60]" />

      <div className="site-container relative z-10 text-center">
        <SectionIntro
          kicker={content.tag}
          before={content.headline}
          accent={content.scriptAccent}
          after={content.headlineSuffix}
          subtitle={content.description}
        />

        {/* 4 equal torn-paper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12 text-left">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-[#FAF6F0] rounded-[28px] border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group hover:rotate-0 ${
                  i % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                }`}
              >
                <div className="h-44 sm:h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
                  <div className="absolute top-3.5 right-3.5 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {item.tag}
                  </div>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-9 text-[#FAF6F0] block pointer-events-none"
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    fill="currentColor"
                  >
                    <path d={TORN_EDGE} />
                  </svg>
                </div>

                <div className="px-5 pt-1 pb-6 flex-1 flex flex-col">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${item.iconStyle}`}>
                    <Icon size={18} className="stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0E5A60] leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* OUR PROMISE STRIP */}
        <div className="bg-[#FAF4EB] rounded-[32px] border border-amber-900/10 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-left mb-10">
          <div className="flex items-center gap-4 shrink-0 md:pr-8 border-b md:border-b-0 md:border-r border-dashed border-[#EF4444]/30 pb-4 md:pb-0 w-full md:w-auto">
            <span className="w-14 h-14 rounded-full bg-[#FDF0EC] text-[#EF4444] flex items-center justify-center shrink-0">
              <Heart size={26} className="fill-[#EF4444]" />
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#0E5A60] font-bold leading-tight">
              Our <br className="hidden md:block" /> Promise
            </h4>
          </div>

          <div className="flex-1 space-y-1.5">
            <p className="text-lg sm:text-xl lg:text-[22px] font-serif font-bold text-[#0E5A60] leading-snug">
              We&apos;ll never compromise your safety, comfort or experience just to fill a trip.
            </p>
            <p className="font-script text-[#D96C2C] text-xl sm:text-2xl leading-relaxed">
              That&apos;s a promise we keep on every journey.
            </p>
          </div>
        </div>

        <a
          href={content.ctaLink}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E5A60] hover:bg-[#0B2A3D] text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          <span>{content.ctaText}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
