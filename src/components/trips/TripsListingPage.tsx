import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPage,
  getTrips,
  getTripsPage,
  getTripsPages,
  getUpcomingJourneysStrip,
  headingTag,
  seoMetadata,
} from "@/lib/content";
import { TripsBrowser } from "@/components/trips/TripsBrowser";
import { CustomGroupTripView } from "@/components/trips/CustomGroupTripView";
import { UpcomingJourneysStrip } from "@/components/UpcomingJourneysStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { toTripsTab } from "@/data/tripPages";

// Shared server side of the /trips pages. Each route passes its slug ("" for /trips); the page's
// text, hero photo, layout and SEO come from the CMS (Static Pages → Trips Pages, SEO → Page Settings).

export async function tripsMetadata(slug: string): Promise<Metadata> {
  const page = await getTripsPage(slug);
  if (!page) return {};
  return seoMetadata(page.seo, page.path, page.heroImage);
}

export async function TripsPageView({ slug }: { slug: string }) {
  const [{ pages }, trips, strip] = await Promise.all([getTripsPages(), getTrips(), getUpcomingJourneysStrip()]);
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const heading = headingTag(page.seo?.headingOptions);
  // Offered on list pages when the filters match nothing
  const customTripPath = pages.find((p) => p.layout === "enquiry")?.path;
  // The list is a client component, so it gets only what it shows (not SEO or other pages' text)
  const tabs = pages.map(toTripsTab);
  const content = { ...page, seo: null };

  return (
    <>
      <JsonLd schema={page.seo?.schema} />
      {page.layout === "enquiry" ? (
        <CustomGroupTripView
          page={content}
          pages={tabs}
          // The enquiry form is the Contact page's (CMS → Contact)
          form={(await getPage("contact")).sections.ContactFormSection}
          headingTag={heading}
        />
      ) : (
        <TripsBrowser
          trips={trips}
          page={content}
          pages={tabs}
          customTripPath={customTripPath}
          headingTag={heading}
        />
      )}
      <UpcomingJourneysStrip trips={trips} content={strip} page="trips" />
    </>
  );
}
