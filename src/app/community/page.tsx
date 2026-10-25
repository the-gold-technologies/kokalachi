import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { TripStoryChapter } from "@/components/community/TripStoryChapter";
import { communityHeroImage, communityTrips } from "@/data/community";

const OG_IMAGE = communityTrips[0].coverImage.replace("w=1200", "w=1200&h=630&fm=jpg");

export const metadata: Metadata = {
  title: "Community",
  description:
    "Real stories, photos and videos from Kokalachi travellers. Hear from the people who came as strangers and went home as family.",
  openGraph: {
    title: "The Kokalachi Community | Kokalachi",
    description: "Real stories, photos and videos from the people who travelled with us.",
    url: "https://kokalachi.com/community",
    siteName: "Kokalachi",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "City Palace across Lake Pichola, Udaipur", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kokalachi Community | Kokalachi",
    description: "Real stories, photos and videos from the people who travelled with us.",
    images: [OG_IMAGE],
  },
};


export default function CommunityPage() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#FAF6F0]">
      {/* ================= HERO (matches FAQ / Contact / Journeys) ================= */}
      <div className="relative h-[60vh] min-h-[440px] w-full">
        <img
          src={communityHeroImage.src}
          alt={communityHeroImage.alt}
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        {/* Same fade as the other page heroes: solid navy behind the text, lighter at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/40 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  The Kokalachi Community
                </span>
              </div>
              <h1 className="heading-hero font-semibold font-serif text-white mb-4">
                Strangers once, now{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  family.
                  <TitleUnderline />
                </span>
              </h1>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Photos, videos and letters from the people who travelled with us. No scripts and no
                filters, just the moments and friendships they brought home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRIP CHAPTERS ================= */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0E5A60 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        {communityTrips.map((trip, i) => (
          <div key={trip.slug} className={i % 2 === 1 ? "bg-white" : ""}>
            <TripStoryChapter trip={trip} number={i + 1} />
          </div>
        ))}
      </div>

      {/* ================= SHARE YOUR STORY ================= */}
      <section className="relative py-20 sm:py-24 overflow-hidden border-t border-amber-900/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto site-x max-w-3xl relative z-10 text-center">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-4">
            Travelled with us?
          </span>
          <h2 className="heading-section font-serif text-[#0E5A60] mb-5">
            Your story belongs{" "}
            <span className="relative inline-block font-script font-normal text-[1.15em]">
              here too.
              <TitleUnderline />
            </span>
          </h2>
          <p className="text-[#0E5A60]/80 text-base sm:text-lg leading-relaxed mb-9">
            Send us a few lines and your favourite photos or videos from the trip, and we&apos;ll add
            them to the wall. Or tag us on Instagram so the whole tribe can see.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0E5A60] hover:bg-[#0B2A3D] text-white px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
            >
              <MessageCircle size={16} /> Share your story
            </Link>
            <a
              href="https://www.instagram.com/kokalachi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FDF0EC] text-[#0E5A60] border border-[#0E5A60]/20 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <FaInstagram className="w-4 h-4" /> @kokalachi
            </a>
          </div>
          <Link
            href="/journeys"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#D96C2C] hover:text-[#0E5A60] transition-colors"
          >
            Or find the trip you&apos;ll write about next
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
