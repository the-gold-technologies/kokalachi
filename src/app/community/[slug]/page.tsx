import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Camera, Mail } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { TripStoryChapter } from "@/components/community/TripStoryChapter";
import { StoryCard } from "@/components/community/StoryCard";
import { CommunityCta } from "@/components/community/CommunityCta";
import { UpcomingJourneysStrip } from "@/components/UpcomingJourneysStrip";
import { getAllStories, getCommunityTrips, getPage, getTrips, getUpcomingJourneysStrip } from "@/lib/content";
import { tripStoriesHref } from "@/data/community";

// One trip's page in the community: its photo & video wall and every traveller's full letter.
// Cards on /community (and the homepage) link here with #story-<id>, which opens that letter.

type Props = { params: Promise<{ slug: string }> };

// Prerender every trip; trips added later in the CMS render on first visit, then stay cached
export async function generateStaticParams() {
  const trips = await getCommunityTrips();
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trip = (await getCommunityTrips()).find((t) => t.slug === slug);
  if (!trip) return {};
  const title = `${trip.destination} travel stories`;
  const description =
    trip.stories[0]?.summary ||
    `Photos, videos and letters from the people who travelled to ${trip.destination} with Kokalachi.`;
  const path = tripStoriesHref(trip);
  return {
    title: { absolute: `${title} | Kokalachi` },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: trip.coverImage }] },
  };
}

export default async function CommunityTripPage({ params }: Props) {
  const { slug } = await params;
  const [{ sections }, communityTrips, allStories, trips, strip] = await Promise.all([
    getPage("community"),
    getCommunityTrips(),
    getAllStories(),
    getTrips(),
    getUpcomingJourneysStrip(),
  ]);
  const index = communityTrips.findIndex((t) => t.slug === slug);
  if (index === -1) notFound();
  const trip = communityTrips[index];

  const photoCount = trip.media.filter((m) => m.type === "image").length;
  const videoCount = trip.media.length - photoCount;
  const moreStories = allStories.filter((e) => e.trip.slug !== trip.slug).slice(0, 3);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#FAF6F0]">
      {/* Banner (same as the other pages) */}
      <div className="relative min-h-[60vh] w-full flex items-end">
        <img
          src={trip.coverImage}
          alt={`${trip.destination} with the Kokalachi group`}
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/40 to-black/30" />

        <div className="relative z-10 w-full pt-32 md:pt-48 pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <Link
                href="/community"
                className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white text-[13px] font-medium mb-5 transition-colors"
              >
                <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" /> All community stories
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {trip.tripType}
                </span>
              </div>
              <h1 className="heading-hero font-semibold font-serif text-white mb-4">
                Stories from{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {trip.destination}
                  <TitleUnderline />
                </span>
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-[#F3B748] mb-5">{trip.tagline}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base font-medium text-slate-200">
                <span className="flex items-center gap-2">
                  <CalendarDays size={17} className="text-teal-400" /> {trip.travelledOn}
                </span>
                <span className="flex items-center gap-2">
                  <Camera size={17} className="text-teal-400" />
                  {photoCount} {photoCount === 1 ? "photo" : "photos"}
                  {videoCount > 0 && ` · ${videoCount} ${videoCount === 1 ? "video" : "videos"}`}
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={17} className="text-teal-400" />
                  {trip.stories.length} {trip.stories.length === 1 ? "letter" : "letters"}
                </span>
                {trip.journeySlug && (
                  <Link
                    href={`/journeys/${trip.journeySlug}`}
                    className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    See the {trip.destination} journey →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The photo wall and every letter */}
      <TripStoryChapter trip={trip} number={index + 1} labels={sections.CommunityChaptersSection} showHeader={false} />

      {/* More stories from other trips */}
      {moreStories.length > 0 && (
        <section className="bg-white py-14 sm:py-20 border-t border-amber-900/10">
          <div className="site-container">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
              <h2 className="heading-section font-serif text-[#0E5A60]">
                More stories from{" "}
                <span className="font-script font-normal text-[1.15em] text-[#D96C2C]">the road</span>
              </h2>
              <Link
                href="/community"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#D96C2C] hover:text-[#0E5A60] transition-colors"
              >
                See all stories <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreStories.map((entry) => (
                <StoryCard key={`${entry.trip.slug}-${entry.story.id}`} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      <UpcomingJourneysStrip trips={trips} content={strip} page="community" inline />

      <CommunityCta cta={sections.CommunityCtaSection} />
    </div>
  );
}
