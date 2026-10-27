"use client";

import React, { useState, useRef } from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, User, Phone, Minus, Plus, Calendar } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { submitContactEnquiry } from "@/actions/contact";
import type { ContactSections } from "@/types/cms";

export function ContactView({ sections }: { sections: ContactSections }) {
  const hero = sections.ContactHeroSection;
  const form = sections.ContactFormSection;
  const sidebar = sections.ContactSidebarSection;
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [guests, setGuests] = useState(1);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const journeyRef = useRef<HTMLSelectElement>(null);
  const travelDateRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hearAboutRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    const result = await submitContactEnquiry({
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      journey: journeyRef.current?.value || undefined,
      travelDate: travelDateRef.current?.value || undefined,
      groupSize: guests === 1 ? "Just me" : `${guests} people`,
      message: messageRef.current?.value ?? "",
      hearAboutUs: hearAboutRef.current?.value || undefined,
    });
    if (result.success) {
      setFormStatus("success");
    } else {
      alert("Something went wrong. Please try again.");
      setFormStatus("idle");
    }
  };

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
              <h1 className="heading-hero font-semibold font-serif text-white mb-6 max-w-4xl">
                <span className="whitespace-pre-line">{hero.headline}</span>{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.scriptAccent}
                  <TitleUnderline />
                </span>
              </h1>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="site-container py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl border border-slate-100">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-[#0E5A60]/10 text-[#0E5A60] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="stroke-[2]" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#0E5A60] mb-3">{form.successTitle}</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto whitespace-pre-line">{form.successSubtitle}</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="text-[#0E5A60] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E5A60] mb-2">
                    {form.heading}
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-base whitespace-pre-line">{form.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        ref={nameRef}
                        type="text" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        ref={emailRef}
                        type="email" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="e.g. jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <input 
                        ref={phoneRef}
                        type="tel" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Which journey are you interested in?</label>
                      <select ref={journeyRef} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer" defaultValue="">
                        <option value="" disabled>Select an option (optional)</option>
                        {form.journeyOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5"><Calendar size={14} /> Preferred Travel Date</label>
                      <input 
                        ref={travelDateRef}
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How many of you are travelling?</label>
                      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-fit">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="font-bold text-sm text-[#0E5A60] w-24 text-center">
                          {guests === 1 ? "Just me" : `${guests} people`}
                        </span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(20, guests + 1))}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How can we help? <span className="text-red-500">*</span></label>
                      <textarea 
                        ref={messageRef}
                        required
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all resize-none"
                        placeholder="Tell us what's on your mind — a question, a special request, or just 'I don't know where to start.'"
                      />
                  </div>

                  <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How did you hear about us?</label>
                      <select ref={hearAboutRef} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer" defaultValue="">
                        <option value="" disabled>Select an option (optional)</option>
                        {form.hearAboutOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full sm:w-auto bg-[#0E5A60] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-bold text-base shadow-md hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:hover:transform-none disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          <span>{form.submitButtonText}</span>
                          <ArrowRight size={18} className="stroke-[2.5]" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 mt-4 max-w-sm whitespace-pre-line">{form.urgencyNote}</p>
                  </div>
                </form>
              </div>
            )}
          </div>

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
