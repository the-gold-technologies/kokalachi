import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function FaqCtaSection() {
  return (
    <section id="still-have-questions" className="pb-16 lg:pb-20 bg-white">
      <div className="site-container">
        <div className="bg-[#FAF5EE] rounded-[40px] border border-amber-900/10 shadow-sm relative overflow-hidden px-6 py-12 sm:px-12 lg:py-16 text-center">
          {/* Decorative Ambient Glows */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#C85A24]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D35400] font-montserrat block mb-4">
              Still Have Questions?
            </span>
            <h2 className="heading-section font-medium text-[#0E5A60] font-serif mb-8 tracking-tight">
              We&apos;re a message away.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919711845700"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E5A60] hover:bg-[#061C29] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2.5"
              >
                <FaWhatsapp size={18} />
                <span>Chat with Us on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0E5A60] px-7 py-3.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2.5 border border-amber-900/10"
              >
                <span>Send an Enquiry</span>
                <ArrowRight size={16} className="text-[#D96C2C]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
