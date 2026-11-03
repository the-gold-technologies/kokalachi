import React from "react";
import { Map as MapIcon, MessageCircle, Plane } from "lucide-react";
import type { HeadingTag } from "@/lib/content";
import type { ContactSections } from "@/types/cms";
import type { TripsPage, TripsTab } from "@/data/tripPages";
import { TripsHero, TripsTabs } from "@/components/trips/TripsHeader";
import { ContactForm } from "@/components/contact/ContactForm";

// Icons for the steps, in order (repeating if there are more steps)
const STEP_ICONS = [MessageCircle, MapIcon, Plane];

// A trips page with the "enquiry" layout (e.g. /trips/custom-group-trip): how private trips work,
// then the site's enquiry form (same as /contact). Text from CMS → Trips Pages.
export function CustomGroupTripView({
  page,
  pages,
  form,
  headingTag,
}: {
  page: TripsPage;
  pages: TripsTab[]; // every trips page, for the tabs
  form: ContactSections["ContactFormSection"]; // from CMS → Contact page
  headingTag?: HeadingTag;
}) {
  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      <TripsHero page={page} headingTag={headingTag} />

      <div className="site-container pt-8">
        <TripsTabs pages={pages} active={page.slug} />
      </div>

      <div className="site-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* How it works */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            {page.howItWorksLabel && (
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] mb-3">
                {page.howItWorksLabel}
              </p>
            )}
            {page.howItWorksTitle && (
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E5A60] mb-6">
                {page.howItWorksTitle}
              </h2>
            )}
            <ol className="flex flex-col gap-5">
              {page.steps.map((step, i) => {
                const Icon = STEP_ICONS[i % STEP_ICONS.length];
                return (
                  <li key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#0E5A60]/10 text-[#0E5A60] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0E5A60]">
                        <span className="text-[#D96C2C] mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                        {step.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* The same enquiry form as /contact, tagged so the enquiry shows which page it came from */}
          <ContactForm form={form} journeyPrefix={page.enquiryTag || undefined} />
        </div>
      </div>
    </div>
  );
}
