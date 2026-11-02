import type { Metadata } from "next";
import { TripsListingPage, tripsMetadata } from "@/components/trips/TripsListingPage";

export const metadata: Metadata = tripsMetadata("upcoming");

export default function UpcomingTripsPage() {
  return <TripsListingPage pageKey="upcoming" />;
}
