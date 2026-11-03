import type { Metadata } from "next";
import { TripsPageView, tripsMetadata } from "@/components/trips/TripsListingPage";

// /trips/custom-group-trip: content and SEO from CMS → Static Pages → Trips Pages and SEO → Page Settings
export function generateMetadata(): Promise<Metadata> {
  return tripsMetadata("custom-group-trip");
}

export default function Page() {
  return <TripsPageView slug="custom-group-trip" />;
}
