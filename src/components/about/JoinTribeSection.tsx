"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";

export function JoinTribeSection() {
  return (
    <section id="join-the-tribe" className="py-12 bg-white relative overflow-hidden select-none">
      <div className="container max-w-7xl mx-auto px-4 lg:px-0 relative z-10">
        
        {/* Banner Container */}
        <div className="bg-[#FAF5EE] rounded-[40px] shadow-sm border border-amber-900/10 relative overflow-hidden flex flex-col lg:flex-row items-stretch">
          
          {/* Abstract Leaves Bottom Left */}
          <div className="absolute -bottom-8 -left-4 w-40 h-48 pointer-events-none z-0">
             <svg viewBox="0 0 100 100" className="w-full h-full text-[#93A9A0] opacity-80" fill="currentColor">
               <path d="M 10,100 C 10,60 30,30 40,100 Z" />
               <path d="M 30,100 C 25,50 65,20 50,100 Z" />
               <path d="M 45,100 C 60,70 100,60 70,100 Z" />
             </svg>
          </div>

          {/* Left Content Column */}
          <div className="w-full lg:w-[50%] p-10 lg:p-16 lg:pr-0 flex flex-col justify-center relative z-10">
            {/* Category Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D35400] font-montserrat block">
                JOIN THE TRIBE
              </span>
              <div className="h-[1px] w-12 bg-[#D35400]/30"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-medium text-[#0E5A60] leading-[1.12] font-serif mb-6 tracking-tight">
              Your next journey is <br/>waiting. So are your people.
              <span className="relative inline-block text-[#0E5A60]">
               
                <div className="absolute -bottom-1.5 left-0 w-full">
                   <TitleUnderline />
                </div>
              </span>
            </h2>

            {/* Paragraph Copy */}
            <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-relaxed max-w-xl mb-8">
              Somewhere out there is a group of travellers who are just as
              ready to explore, connect, and make memories as you are.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/#upcoming-journeys"
                className="bg-[#245856] hover:bg-[#1A4240] text-white px-7 py-3.5 rounded-full font-medium text-[13px] shadow-md transition-all inline-flex items-center gap-2 shrink-0"
              >
                <span>Explore Upcoming Trips</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#upcoming-journeys"
                className="bg-white hover:bg-slate-50 text-[#0E5A60] px-7 py-3.5 rounded-full font-bold text-[13px] shadow-sm transition-all inline-flex items-center gap-2 shrink-0"
              >
                <Send size={16} className="text-[#D35400] -rotate-12" />
                <span>Find your Next Journey</span>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-[50%] relative min-h-[440px] lg:min-h-full flex items-end justify-center lg:justify-end p-6 lg:p-10 z-10 overflow-visible">
            
            {/* Background elements for right side */}
            <div className="absolute inset-0 pointer-events-none z-0">
               {/* Yellow Sun/Circle */}
               <div className="absolute top-[15%] left-[8%] w-[200px] h-[200px] bg-[#FDE6B8] rounded-full mix-blend-multiply opacity-90" />
               {/* Spark doodles */}
               <svg className="absolute top-[38%] left-[5%] w-10 h-10 text-[#D35400]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                 <path d="M 12,25 L 2,25 M 18,15 L 8,8 M 28,10 L 28,0" />
               </svg>
            </div>
            {/* Blob Image */}
            <div className="relative w-[95%] lg:w-[110%] h-[280px] lg:h-[350px] z-10 lg:-mr-10 mb-6 lg:mb-6 shadow-lg" style={{ borderRadius: '300px 300px 200px 100px / 300px 200px 100px 150px', overflow: 'hidden' }}>
              <Image src="/about_why_started.jpg" fill className="object-cover object-top" alt="Group on mountain" />
            </div>

            {/* Note Polaroid */}
            <div className="absolute bottom-[10%] -right-4 lg:right-[20px] rotate-[8deg] bg-white p-5 rounded-lg shadow-xl w-[130px] z-30 border border-slate-100 flex flex-col items-center justify-center">
               <p className="font-script text-[19px] font-bold text-[#245856] leading-[1.1] text-center">
                 Good<br/>People<br/>Brighter<br/>Journeys
               </p>
               <span className="text-[#245856] mt-1 text-lg">♡</span>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-6 right-20 z-20 hidden lg:block">
              <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em] font-montserrat">
                TRAVEL • PEOPLE • PURPOSE
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
