"use client";

import React from "react";
import { Users, UserCheck, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export function Step6GoodCompany() {
  const pillars = [
    {
      emoji: "🧡",
      icon: <Users className="w-6 h-6 text-[#D96C2C]" />,
      title: "Small, Curated Groups",
      desc: "We keep our groups intentionally small (8-12 people), making it easier to connect, feel included, and truly enjoy the journey.",
    },
    {
      emoji: "🤝",
      icon: <UserCheck className="w-6 h-6 text-[#0E5A60]" />,
      title: "Meet Before You Travel",
      desc: "Get introduced to your fellow travellers before departure through a dedicated pre-trip community. The first hello shouldn't happen at the airport.",
    },
    {
      emoji: "🛡️",
      icon: <ShieldCheck className="w-6 h-6 text-[#6F8F84]" />,
      title: "Safety Comes First",
      desc: "From trusted travel partners to clear community guidelines and responsive 24/7 support, your comfort and security is always our priority.",
    },
    {
      emoji: "✨",
      icon: <HeartHandshake className="w-6 h-6 text-[#0E5A60]" />,
      title: "Built on Respect",
      desc: "Every traveller is expected to treat fellow travellers, local communities, and shared experiences with kindness, openness, and respect.",
    },
  ];

  return (
    <section id="good-company" className="py-24 bg-[#0B2A3D] text-white relative overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E5A60]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center">
        <span
          className="text-teal-300 text-2xl md:text-3xl mb-2 block"
          style={{ fontFamily: "var(--font-playball)" }}
        >
          Peace of Mind Always
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          You&apos;re in <span className="text-teal-300">Good Company.</span>
        </h2>
        <p className="text-[#F7F3EC]/90 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Every Kokalachi journey is thoughtfully curated so you can focus strictly on the experience, not the uncertainty. Whether it&apos;s your first group trip or your tenth, we work hard to ensure you feel welcomed, comfortable, and supported.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="font-extrabold text-xl text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#F7F3EC]/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Our Promise Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0E5A60] via-[#0B2A3D] to-[#0B2A3D] border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D96C2C] block mb-1">
              Our Promise
            </span>
            <p className="text-lg font-bold text-white leading-snug">
              &quot;We&apos;ll never compromise your safety, comfort or experience just to fill a trip. That&apos;s a promise we intend to keep on every journey.&quot;
            </p>
          </div>

          <a
            href="#faqs"
            className="shrink-0 px-7 py-3.5 bg-[#F7F3EC] text-[#0B2A3D] hover:bg-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center gap-2"
          >
            <span>Learn More About Safety</span>
            <ArrowRight size={16} className="text-[#0E5A60]" />
          </a>
        </div>
      </div>
    </section>
  );
}
