import type { Metadata } from "next";
import { TripsPageView, tripsMetadata } from "@/components/trips/TripsListingPage";

// /trips/upcoming: content and SEO from CMS → Static Pages → Trips Pages and SEO → Page Settings
export function generateMetadata(): Promise<Metadata> {
  return tripsMetadata("upcoming");
}

export default function Page() {
  return <TripsPageView slug="upcoming" />;
}
