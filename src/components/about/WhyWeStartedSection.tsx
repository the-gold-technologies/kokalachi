"use client";

import React from "react";
import Image from "next/image";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { Map, CalendarX, Users } from "lucide-react";

export function WhyWeStartedSection() {
  return (
    <section id="why-we-started" className="py-12 lg:py-16 relative select-none">
      <div className="container max-w-7xl mx-auto px-2 md:px-6 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Column: Images with abstract shapes */}
          <div className="relative w-full h-[450px] lg:h-[500px] flex items-center justify-center">
            
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
            
               
               {/* Light grey/blue blob middle-right */}
               <svg className="absolute bottom-0 right-0 w-[200px] h-[200px] text-[#E9F0EE]" viewBox="0 0 200 200" fill="currentColor">
                 <path d="M100,0 C160,0 200,40 200,100 C200,160 160,200 100,200 C40,200 0,160 0,100 C0,40 40,0 100,0 Z" />
               </svg>
            </div>
            
            {/* Main Image */}
            <div className="relative z-10 w-[85%] h-[350px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white right-4 lg:right-8">
              <Image src="/about_why_started.jpg" fill className="object-cover" alt="Group of friends" />
            </div>

            {/* Bottom Left Polaroid */}
            <div className="absolute -bottom-2 -left-8 lg:-left-6 rotate-[-6deg] bg-white p-2.5 pb-4 rounded-xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] w-[200px] z-20">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100">
                <Image src="/about_hero_polaroid.jpg" fill className="object-cover" alt="Map and Compass" />
              </div>
              <p className="font-script text-xl text-center mt-3 text-[#1F3E5A] leading-[1.1] tracking-wide">
                Plans are easy.<br/>People make it real.
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="text-left space-y-8 lg:space-y-10 lg:pl-6 z-10 relative">
            
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[#D35400] text-[11px] font-black uppercase tracking-[0.15em] font-montserrat">
                  WHY WE STARTED
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-medium text-[#0E5A60] leading-[1.15] font-serif tracking-tight">
                The problem{" "}<br/> we  {" "}
                
                <span className="relative inline-block text-[#0E5A60]">
                 couldn't ignore.
                  <div className="absolute -bottom-1.5 left-0 w-full">
                     <TitleUnderline />
                  </div>
                </span>
              </h2>
              
              <p className="text-[#4A5568] text-base sm:text-[17px] leading-relaxed pt-2 max-w-2xl">
                Big travel plans often stay on hold, not because the desire fades but because life gets busy and the right people are hard to find.
              </p>
            </div>

            {/* Icons Section with connecting wavy line */}
            <div className="relative ">
              {/* Wavy line behind icons */}
              <svg className="absolute top-2 left-12 w-[calc(100%-7rem)] h-[60px] text-[#C85A24] opacity-30 z-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M 0,20 Q 25,40 50,20 T 100,20" strokeLinecap="round" />
              </svg>
              
              <div className="flex justify-between items-start relative z-10 w-full pr-5">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-4 w-[110px]">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#E5F1F1] flex items-center justify-center text-[#0A2640] shadow-sm">
                    <Map size={30} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#0A2640] text-center leading-snug">
                    Big plans,<br/>left on hold.
                  </span>
                </div>
                
                {/* Item 2 */}
                <div className="flex flex-col items-center gap-4 w-[110px]">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#FFEAE6] flex items-center justify-center text-[#0A2640] shadow-sm relative">
                    <CalendarX size={30} strokeWidth={1.5} />
                    <div className="absolute bottom-1.5 right-1.5 w-[18px] h-[18px] rounded-full bg-white text-[#C85A24] flex items-center justify-center shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#0A2640] text-center leading-snug">
                    Schedules don't<br/>always align.
                  </span>
                </div>
                
                {/* Item 3 */}
                <div className="flex flex-col items-center gap-4 w-[110px]">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#FDF1DB] flex items-center justify-center text-[#0A2640] shadow-sm">
                    <Users size={30} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#0A2640] text-center leading-snug">
                    The right people<br/>are hard to find.
                  </span>
                </div>
              </div>
            </div>


            {/* Bottom Conclusion */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-[#0A2640] leading-tight flex items-baseline gap-2">
                <span className="font-script text-[#0A2640] italic font-semibold text-[28px]">So we built</span>
                <span className="font-script text-[#D35400] italic font-semibold text-[30px]">Kokalachi.</span>
              </h3>
              <p className="text-[#4A5568] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
                A way to bring together people who share the same pull toward the world so a trip doesn't need to wait for the stars to align.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
