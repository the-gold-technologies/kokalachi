import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyDetail } from "@/components/journeys/JourneyDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTrip, getTrips } from "@/lib/content";

type Props = { params: Promise<{ id: string }> };

// Prerender every trip at build; trips added later in the CMS render on first visit, then stay cached
export async function generateStaticParams() {
  const trips = await getTrips();
  return trips.map((trip) => ({ id: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trip = await getTrip((await params).id);
  if (!trip) return {};
  const tour = trip.tourPackage;
  const title = trip.seo.metaTitle || tour.title;
  const description = trip.seo.metaDescription || tour.subtitle || tour.hook;
  return {
    title: { absolute: `${title} | Kokalachi` },
    description,
    keywords: trip.seo.targetKeywords ?? undefined,
    alternates: { canonical: `/journeys/${trip.slug}` },
    ...(trip.seo.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: { title, description, url: `/journeys/${trip.slug}`, images: [{ url: tour.image }] },
  };
}

export default async function JourneyPage({ params }: Props) {
  const { id } = await params;
  const [trip, trips] = await Promise.all([getTrip(id), getTrips()]);
  if (!trip) notFound();

  return (
    <>
      <JsonLd schema={trip.seo.schema} />
      <JourneyDetail trip={trip} otherTrips={trips.filter((t) => t.id !== trip.id).slice(0, 3)} />
    </>
  );
}
