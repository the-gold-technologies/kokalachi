import type { Metadata } from "next";
import { getPage, getTrips } from "@/lib/content";
import { TRIPS_HERO_IMAGE } from "@/data/tripPages";
import { tripsMetadata } from "@/components/trips/TripsListingPage";
import { CustomGroupTripView } from "@/components/trips/CustomGroupTripView";
import { UpcomingJourneysStrip } from "@/components/UpcomingJourneysStrip";

export const metadata: Metadata = tripsMetadata("custom");

// Uses the enquiry form from the Contact page, so its text is edited in CMS → Contact
export default async function CustomGroupTripPage() {
  const [{ sections }, trips] = await Promise.all([getPage("contact"), getTrips()]);
  return (
    <>
      <CustomGroupTripView form={sections.ContactFormSection} heroImage={TRIPS_HERO_IMAGE} />
      <UpcomingJourneysStrip trips={trips} />
    </>
  );
}
