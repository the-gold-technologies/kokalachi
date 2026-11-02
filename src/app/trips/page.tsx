import type { Metadata } from "next";
import { TripsListingPage, tripsMetadata } from "@/components/trips/TripsListingPage";

export const metadata: Metadata = tripsMetadata("all");

// Every trip: upcoming departures first, then the ones that have already run
export default function AllTripsPage() {
  return <TripsListingPage pageKey="all" />;
}
