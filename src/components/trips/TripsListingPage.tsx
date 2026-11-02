import React from "react";
import type { Metadata } from "next";
import { getTrips } from "@/lib/content";
import { TRIP_PAGES, TRIPS_HERO_IMAGE, type TripPageKey } from "@/data/tripPages";
import { TripsBrowser } from "@/components/trips/TripsBrowser";
import { UpcomingJourneysStrip } from "@/components/UpcomingJourneysStrip";

// Shared server side of the /trips pages. Their text and hero photo live in src/data/tripPages.ts;
// the trips and filter options come from the CMS.

export function tripsMetadata(key: TripPageKey, image = TRIPS_HERO_IMAGE): Metadata {
  const page = TRIP_PAGES[key];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: {
      title: `${page.metaTitle} | Kokalachi`,
      description: page.metaDescription,
      url: page.path,
      images: [{ url: image }],
    },
  };
}

export async function TripsListingPage({
  pageKey,
  intro,
}: {
  pageKey: Exclude<TripPageKey, "custom">;
  intro?: React.ReactNode;
}) {
  const trips = await getTrips();
  return (
    <>
      <TripsBrowser trips={trips} pageKey={pageKey} heroImage={TRIPS_HERO_IMAGE} intro={intro} />
      <UpcomingJourneysStrip trips={trips} />
    </>
  );
}
