"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Minus, Plus, Calendar } from "lucide-react";
import { submitContactEnquiry } from "@/actions/contact";
import type { ContactSections } from "@/types/cms";

// The site's enquiry form. Its text and dropdown options come from CMS → Contact page →
// ContactFormSection, and every enquiry lands in CMS → Submissions → Enquiries.
// Used on /contact and /trips/custom-group-trip.
export function ContactForm({
  form,
  className = "w-full lg:w-2/3",
  journeyPrefix,
}: {
  form: ContactSections["ContactFormSection"];
  className?: string;
  journeyPrefix?: string; // e.g. "Custom group trip", so the enquiry shows where it came from
}) {
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
    const journey = journeyRef.current?.value || undefined;
    const result = await submitContactEnquiry({
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      journey: journeyPrefix ? `${journeyPrefix}: ${journey ?? "not chosen"}` : journey,
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
    <div className={`${className} bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl border border-slate-100`}>
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
            {form.sendAnotherMessageText}
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
                <label className="text-sm font-bold text-slate-700">{form.nameLabel}</label>
                <input
                  ref={nameRef}
                  type="text"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                  placeholder={form.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{form.emailLabel} <span className="text-red-500">*</span></label>
                <input
                  ref={emailRef}
                  type="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                  placeholder={form.emailPlaceholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{form.phoneLabel} <span className="text-red-500">*</span></label>
                <input
                  ref={phoneRef}
                  type="tel"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                  placeholder={form.phonePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{form.journeyLabel}</label>
                <select ref={journeyRef} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled>{form.journeyPlaceholder}</option>
                  {form.journeyOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5"><Calendar size={14} /> {form.travelDateLabel}</label>
                <input
                  ref={travelDateRef}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{form.guestsLabel}</label>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-fit">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-bold text-sm text-[#0E5A60] w-24 text-center">
                    {guests === 1 ? form.guestsSoloText : `${guests} ${form.guestsPluralSuffix}`}
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
                <label className="text-sm font-bold text-slate-700">{form.messageLabel} <span className="text-red-500">*</span></label>
                <textarea
                  ref={messageRef}
                  required
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all resize-none"
                  placeholder={form.messagePlaceholder}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{form.hearAboutLabel}</label>
                <select ref={hearAboutRef} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled>{form.hearAboutPlaceholder}</option>
                  {form.hearAboutOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full sm:w-auto bg-[#D96C2C] hover:bg-[#C85A24] text-white px-8 py-4 rounded-full font-bold text-base shadow-md hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:hover:transform-none disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  form.submittingButtonText
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
  );
}
