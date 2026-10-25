import React from "react";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Users, MessageSquare, UserCheck, Compass } from "lucide-react";

// What the trip itself is like (trust & safety lives in GoodCompanySection)
const differences = [
  {
    icon: Users,
    title: "Curated, Not Crowded",
    text: "Groups are built around compatibility, not headcount, so conversations happen naturally and no one is left on the sidelines.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=800",
    alt: "A small group of friends gathered together",
  },
  {
    icon: MessageSquare,
    title: "Built for Connection",
    text: "Shared meals, downtime and activities that spark conversation are part of the plan, not a checklist of monuments.",
    image: "https://images.unsplash.com/photo-1625463006115-09f08489f591?auto=format&fit=crop&q=85&w=800",
    alt: "Two travellers laughing together over a phone",
  },
  {
    icon: UserCheck,
    title: "Hosted, End to End",
    text: "A Kokalachi trip host travels with your group and handles the logistics, so you can stay present instead of managing details.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=85&w=800",
    alt: "A group of hikers together in the mountains",
  },
  {
    icon: Compass,
    title: "Thoughtfully Planned",
    text: "From the pace of each day to the choice of stays, every journey is built with intention, never stitched from a template.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=85&w=800",
    alt: "A travel map with a camera, notebook and guidebooks",
  },
];

// One torn-paper edge, reused so every card ends the same way
const TORN_EDGE = "0,0 5,16 10,2 15,18 20,4 25,16 30,3 35,17 40,2 45,16 50,3 55,18 60,4 65,16 70,2 75,17 80,3 85,16 90,2 95,15 100,0 100,20 0,20";

export function DifferenceSection() {
  return (
    <section
      id="difference"
      className="py-12 sm:py-14 lg:py-16 bg-[#FDFBF7] relative overflow-hidden select-none"
    >
      <FlyingBirds className="hidden lg:block absolute top-16 left-10 opacity-30 text-[#0E5A60]" />

      {/* Ambient Brand Color Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionIntro
          kicker="WHY KOKALACHI"
          before="More than a trip. Here's what makes us"
          accent="different."
          subtitle="Great places become unforgettable when you share them with the right people. Everything we plan starts there."
        />

        {/* 4 equal polaroid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {differences.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative h-full transition-transform duration-500 hover:rotate-0 ${i % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"}`}
              >
                {/* Masking tape, alternating corners */}
                <div
                  className={`w-16 h-4 bg-amber-200/90 absolute -top-2 z-30 shadow-sm border-t border-white/60 ${
                    i % 2 === 0 ? "left-6 -rotate-[8deg]" : "right-6 rotate-[8deg]"
                  }`}
                />

                <div className="bg-[#FFFBF5] rounded-t-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-200/90 overflow-hidden flex flex-col h-full">
                  <div className="p-3 pb-0">
                    <div className="overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="px-5 pt-5 pb-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[#D96C2C] text-xs font-bold mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#FDF0EC] flex items-center justify-center">
                        <Icon size={14} />
                      </span>
                      <span className="tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0E5A60] font-serif leading-snug mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>

                  {/* Torn paper bottom edge */}
                  <svg className="w-full h-4 text-[#EFE5D8] block" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polygon points={TORN_EDGE} fill="currentColor" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
