import type { Metadata } from "next";
import { TripsListingPage, tripsMetadata } from "@/components/trips/TripsListingPage";

export const metadata: Metadata = tripsMetadata("past");

// Trips with departures that have already started, most recent first
export default function PastTripsPage() {
  return <TripsListingPage pageKey="past" />;
}
