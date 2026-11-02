import React from "react";
import { Map as MapIcon, MessageCircle, Plane } from "lucide-react";
import type { HeadingTag } from "@/lib/content";
import type { ContactSections } from "@/types/cms";
import { TRIP_PAGES } from "@/data/tripPages";
import { TripsHero, TripsTabs } from "@/components/trips/TripsHeader";
import { ContactForm } from "@/components/contact/ContactForm";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Tell us about your group",
    text: "Where you'd like to go, roughly when, and who's coming along.",
  },
  {
    icon: MapIcon,
    title: "We plan it around you",
    text: "We put together an itinerary and quote for your group, then fine-tune it with you.",
  },
  {
    icon: Plane,
    title: "Travel together",
    text: "Once it's confirmed, your group gets the trip to itself.",
  },
];

// /trips/custom-group-trip: how private trips work, then the site's enquiry form (same as /contact)
export function CustomGroupTripView({
  form,
  heroImage,
  headingTag,
}: {
  form: ContactSections["ContactFormSection"]; // from CMS → Contact page
  heroImage: string;
  headingTag?: HeadingTag;
}) {
  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      <TripsHero page={TRIP_PAGES.custom} image={heroImage} headingTag={headingTag} />

      <div className="site-container pt-8">
        <TripsTabs active="custom" />
      </div>

      <div className="site-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* How it works */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] mb-3">How it works</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E5A60] mb-6">
              A private trip, planned for your people
            </h2>
            <ol className="flex flex-col gap-5">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#0E5A60]/10 text-[#0E5A60] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0E5A60]">
                        <span className="text-[#D96C2C] mr-1.5">0{i + 1}</span>
                        {step.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* The same enquiry form as /contact, tagged so the enquiry shows it's for a custom group trip */}
          <ContactForm form={form} journeyPrefix="Custom group trip" />
        </div>
      </div>
    </div>
  );
}
