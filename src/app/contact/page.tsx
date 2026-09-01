"use client";

import React, { useState } from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, User, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      {/* Hero Section (Matching Detailed Page) */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Get In Touch"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-serif text-white leading-[1.1] mb-6 max-w-4xl">
                Got a question before you{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  join the tribe?
                  <TitleUnderline />
                </span>
              </h1>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl border border-slate-100">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-[#0E5A60]/10 text-[#0E5A60] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="stroke-[2]" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#0E5A60] mb-3">Enquiry Sent Successfully</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Thanks for reaching out! We&apos;ve received your message and our team will get back to you within 24 hours.
                </p>
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
                    Tell us a little about your next journey
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-base">
                    The more we know, the better we can help — but even a quick hello works.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input 
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
                        type="tel" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Which journey are you interested in?</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select an option (optional)</option>
                        <option value="kashmir">The Houseboat Diaries (Kashmir)</option>
                        <option value="meghalaya">Roots & Rainbows (Meghalaya)</option>
                        <option value="kerala">Tides & Tea Gardens (Kerala)</option>
                        <option value="bhutan">The Thunder Dragon Trail (Bhutan)</option>
                        <option value="help">Not sure yet — help me pick</option>
                        <option value="other">Something else entirely</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Preferred Travel Dates</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="e.g., Sometime in November, or exact dates"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How many of you are travelling?</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all"
                        placeholder="e.g., Just me · 2 · Group of 5+"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">How can we help? <span className="text-red-500">*</span></label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all resize-none"
                      placeholder="Tell us what's on your mind — a question, a special request, or just 'I don't know where to start.'"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">How did you hear about us?</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected>Select an option (optional)</option>
                      <option value="instagram">Instagram</option>
                      <option value="friend">A friend</option>
                      <option value="google">Google Search</option>
                      <option value="traveller">Kokalachi Traveller</option>
                      <option value="other">Other</option>
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
                          <span>Send Enquiry</span>
                          <ArrowRight size={18} className="stroke-[2.5]" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 mt-4 max-w-sm">
                      We typically respond within 24 hours. For anything urgent, Instagram is your fastest bet.
                    </p>
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
                    <h4 className="font-bold text-[#0E5A60] mb-1">Real humans reply, not bots</h4>
                    <p className="text-sm text-slate-600">Our team personally reads and replies to every single enquiry.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D96C2C]/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#D96C2C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0E5A60] mb-1">No spam, ever</h4>
                    <p className="text-sm text-slate-600">We&apos;ll only reach out about what you asked. Your inbox is safe.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0E5A60]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-[#0E5A60]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0E5A60] mb-1">Your details are safe with us</h4>
                    <p className="text-sm text-slate-600">We respect your privacy and protect your data rigorously.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Ways to Reach Us */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-[#0E5A60] mb-6">Prefer to skip the form?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <Mail size={16} /> Email
                  </h4>
                  <p className="text-sm text-slate-500 mb-2">For detailed questions, group bookings, or anything you&apos;d rather put in writing.</p>
                  <a href="mailto:hello@kokalachi.com" className="text-[#0E5A60] font-bold hover:underline">hello@kokalachi.com</a>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <FaInstagram size={16} /> Instagram
                  </h4>
                  <p className="text-sm text-slate-500 mb-2">Follow the journeys as they happen, or DM us directly for quick questions.</p>
                  <a href="https://instagram.com/kokalachi" target="_blank" rel="noreferrer" className="text-[#D96C2C] font-bold hover:underline">@kokalachi</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
