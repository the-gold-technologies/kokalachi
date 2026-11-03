import type { Metadata } from "next";
import { TripsPageView, tripsMetadata } from "@/components/trips/TripsListingPage";

// /trips/past: content and SEO from CMS → Static Pages → Trips Pages and SEO → Page Settings
export function generateMetadata(): Promise<Metadata> {
  return tripsMetadata("past");
}

export default function Page() {
  return <TripsPageView slug="past" />;
}
