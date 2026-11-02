"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { ShieldCheck, Mail, User } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { ContactForm } from "@/components/contact/ContactForm";
import type { ContactSections } from "@/types/cms";
import type { HeadingTag } from "@/lib/content";

export function ContactView({
  sections,
  headingTag: Heading = "h1",
}: {
  sections: ContactSections;
  headingTag?: HeadingTag;
}) {
  const hero = sections.ContactHeroSection;
  const form = sections.ContactFormSection;
  const sidebar = sections.ContactSidebarSection;
  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      {/* Hero Section (Matching Detailed Page) */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={hero.bannerImage}
          alt={hero.tagline}
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
              <Heading className="heading-hero font-semibold font-serif text-white mb-6 max-w-4xl">
                <span className="whitespace-pre-line">{hero.headline}</span>{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.scriptAccent}
                  <TitleUnderline />
                </span>
              </Heading>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="site-container py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <ContactForm form={form} />

          {/* Right Column: Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Trust Reinforcement */}
            <div className="bg-[#0E5A60]/5 rounded-3xl p-8 border border-[#0E5A60]/10">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0E5A60]/10 flex items-center justify-center shrink-0">
                    <User size={20} className="text-[#0E5A60]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0E5A60] mb-1">{sidebar.trust1Title}</h4>
                    <p className="text-sm text-slate-600">{sidebar.trust1Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D96C2C]/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#D96C2C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0E5A60] mb-1">{sidebar.trust2Title}</h4>
                    <p className="text-sm text-slate-600">{sidebar.trust2Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0E5A60]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-[#0E5A60]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0E5A60] mb-1">{sidebar.trust3Title}</h4>
                    <p className="text-sm text-slate-600">{sidebar.trust3Desc}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Ways to Reach Us */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-[#0E5A60] mb-6">{sidebar.altCardTitle}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <Mail size={16} /> {sidebar.emailTitle}
                  </h4>
                  <p className="text-sm text-slate-500 mb-2">{sidebar.emailDesc}</p>
                  <a href={`mailto:${sidebar.emailAddress}`} className="text-[#0E5A60] font-bold hover:underline">{sidebar.emailAddress}</a>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <FaInstagram size={16} /> {sidebar.instaTitle}
                  </h4>
                  <p className="text-sm text-slate-500 mb-2">{sidebar.instaDesc}</p>
                  <a href={sidebar.instaLink} target="_blank" rel="noreferrer" className="text-[#D96C2C] font-bold hover:underline">{sidebar.instaHandle}</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
