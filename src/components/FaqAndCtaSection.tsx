"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";

const faqs = [
  {
    q: "Is Kokalachi safe for solo female travellers?",
    a: "100% yes. Safety is our top priority. All travellers are vetted through our pre-trip intro, and every single trip is accompanied by an experienced, dedicated Kokalachi Trip Host and trusted local safety partners.",
  },
  {
    q: "How does the Pre-Trip Intro work?",
    a: "Once your spot is confirmed, you get invited to a private community group with your fellow travellers and trip host. You can chat, ask questions, and break the ice weeks before your departure date.",
  },
  {
    q: "What is the typical group size for a circle?",
    a: "We keep our circles intentionally small — usually between 8 to 12 solo travellers. This ensures everyone gets to connect, no one feels left out, and logistics remain smooth.",
  },
  {
    q: "What if I need to cancel my booking?",
    a: "We offer flexible booking policies. You can transfer your deposit to any future Kokalachi circle up to 30 days before departure with zero penalties.",
  },
  {
    q: "Can I join a trip even if I've never traveled solo before?",
    a: "Absolutely! Over 70% of our travellers are first-time solo travellers. Our hosts and community make sure you feel welcomed, comfortable, and included from day one.",
  },
];

export function FaqAndCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      className="py-20 lg:py-28 bg-[#ffffff] relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline (Top Left Variation) */}
      <FlyingBirds className="hidden lg:block absolute top-14 left-16 opacity-30 text-[#0B2A3D]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        {/* SUB-HEADER TAGLINE */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          GOT QUESTIONS?
        </span>

        {/* MAIN HEADING */}
        <div className="mb-4 max-w-4xl mx-auto relative">
          {/* Left Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -left-20 top-2 text-[#C85A24] font-script text-base sm:text-lg -rotate-4 pointer-events-none select-none">
            <span>✨ no silly questions</span>
          </div>

          {/* Right Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -right-20 top-2 text-[#C85A24] font-script text-base sm:text-lg rotate-3 pointer-events-none select-none">
            <span>♡ we&apos;ve got you covered</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            Frequently Asked{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
              Questions
              <TitleUnderline />
            </span>
          </h2>
        </div>

        {/* SUBTITLE */}
        <p className="text-[#0B2A3D]/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-14 leading-relaxed font-sans">
          Everything you need to know before joining your first Kokalachi
          circle.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4 text-left mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-[#0B2A3D] text-base md:text-lg gap-4 hover:text-[#0E5A60] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0E5A60]" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
