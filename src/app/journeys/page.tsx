import type { Metadata } from "next";
import { JourneysBrowser } from "@/components/journeys/JourneysBrowser";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage, getTrips, headingTag, seoMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPage("journeys");
  return seoMetadata(seo, "/journeys");
}

export default async function AllJourneysPage() {
  const [{ sections, seo }, trips] = await Promise.all([getPage("journeys"), getTrips()]);
  return (
    <>
      <JsonLd schema={seo?.schema} />
      <JourneysBrowser trips={trips} sections={sections} headingTag={headingTag(seo?.headingOptions)} />
    </>
  );
}
