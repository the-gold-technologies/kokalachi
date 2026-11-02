import type { Metadata } from "next";
import { Compass, Sparkles, Users } from "lucide-react";
import { TripsListingPage, tripsMetadata } from "@/components/trips/TripsListingPage";

export const metadata: Metadata = tripsMetadata("solo");

const SOLO_NOTES = [
  { icon: Users, title: "Small, curated groups", text: "Travel with a handful of like-minded people, not a crowded bus." },
  { icon: Sparkles, title: "No awkward start", text: "Meet your group before the trip, so day one feels like day three." },
  { icon: Compass, title: "We handle the plans", text: "Stays, transport and the itinerary are sorted, so you just show up." },
];

// Every trip we run is made for solo travellers, so this page lists them all
export default function SoloTravellersPage() {
  return (
    <TripsListingPage
      pageKey="solo"
      intro={
        <div className="site-container pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SOLO_NOTES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 bg-[#FAF6F0] rounded-2xl p-5 border border-[#0E5A60]/10">
                <div className="w-11 h-11 rounded-2xl bg-[#0E5A60]/10 text-[#0E5A60] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#0E5A60]">{title}</p>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
