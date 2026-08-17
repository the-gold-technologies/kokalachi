"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, Sparkles, HelpCircle } from "lucide-react";

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
    <section id="faqs" className="py-24 bg-[#F7F3EC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E5A60]/10 text-[#0E5A60] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-[#D96C2C]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2A3D] leading-tight">
            Frequently Asked <span className="text-[#0E5A60]">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Everything you need to know before joining your first Kokalachi circle.
          </p>
        </div>

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

        {/* Final High-Impact Booking CTA Box */}
        <div className="bg-[#0B2A3D] p-10 sm:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-[#D96C2C]" />
            <span>Your Circle Is Forming Now</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Somewhere, someone else is looking <br className="hidden sm:inline" />
            <span className="text-[#6F8F84]">for exactly the trip you are.</span>
          </h3>

          <p className="text-[#F7F3EC]/80 text-lg sm:text-xl font-light italic mb-8">
            &quot;Maybe this is how you meet.&quot;
          </p>

          <a
            href="#upcoming-circles"
            className="px-10 py-5 bg-[#0E5A60] hover:bg-[#0a464b] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-3 border border-teal-400/30"
          >
            <span>Explore Upcoming Trips</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
