import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, PenLine } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { formatBlogDate, getReadingTime, getSortedBlogPosts } from "@/data/blogs";

// Link-preview version of the hero: 1200×630 JPG so WhatsApp can show it
const HERO_OG_IMAGE =
  "https://images.unsplash.com/photo-1735248325378-296191d6064e?fm=jpg&fit=crop&w=1200&h=630&q=75";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "The Kokalachi Journal: honest guides, traveller stories and slow-travel advice for anyone joining a group trip.",
  openGraph: {
    title: "The Kokalachi Journal | Kokalachi",
    description:
      "Honest guides, traveller stories and slow-travel advice for anyone joining a group trip.",
    url: "https://kokalachi.com/blogs",
    siteName: "Kokalachi",
    locale: "en_IN",
    type: "website",
    images: [{ url: HERO_OG_IMAGE, width: 1200, height: 630, alt: "Friends watching the sunset from a Himachal hilltop", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kokalachi Journal | Kokalachi",
    description: "Honest guides and traveller stories from the Kokalachi tribe.",
    images: [HERO_OG_IMAGE],
  },
};

export default function BlogsPage() {
  const [featured, ...rest] = getSortedBlogPosts();

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* Hero (matching FAQ / Contact pages) */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        {/* Mirrored so the people sit on the right, clear of the headline */}
        <img
          src="https://images.unsplash.com/photo-1735248325378-296191d6064e?auto=format&fit=crop&q=85&w=2400"
          alt="Friends on a bench at the edge of a Himachal hilltop, watching the sunset"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%] -scale-x-100"
        />
        {/* Dark only behind the text, so the photo stays bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  The Kokalachi Journal
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-serif text-white leading-[1.1] mb-5 max-w-4xl">
                Stories for the{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  curious traveller.
                  <TitleUnderline />
                </span>
              </h1>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Honest guides, little rituals and real stories from the road, for anyone who has a
                bucket list but not yet a travel buddy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0E5A60 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-8">
            Fresh off the press
          </span>

          {/* Featured story */}
          {featured && (
            <Link
              href={`/blogs/${featured.slug}`}
              className="group relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-[36px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 sm:h-80 md:h-full md:min-h-[420px] overflow-hidden">
                <img
                  src={featured.heroImage}
                  alt={featured.heroAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-5 left-5 bg-[#D96C2C] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  New story
                </span>
              </div>

              <div className="relative p-7 sm:p-10 flex flex-col justify-center">
                {/* Washi tape */}
                <div className="hidden md:block absolute -top-1 right-12 w-24 h-6 bg-[#FFF4E5] border-y border-amber-900/15 rotate-[4deg]" />
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C85A24] font-montserrat mb-3">
                  {featured.category}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-semibold text-[#0E5A60] leading-tight mb-4 group-hover:text-[#C85A24] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 mb-7">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-[#D96C2C]" /> {formatBlogDate(featured.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#D96C2C]" /> {getReadingTime(featured)} min read
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#0E5A60] group-hover:bg-[#D96C2C] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-md transition-colors">
                  Read the story
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <p className="hidden sm:block absolute bottom-6 right-8 font-script text-xl text-[#0E5A60]/60 rotate-[-4deg]">
                  grab a chai first ☕
                </p>
              </div>
            </Link>
          )}

          {/* More stories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-[28px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.heroAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C85A24] font-montserrat mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-xl font-serif font-semibold text-[#0E5A60] leading-snug mb-3 group-hover:text-[#C85A24] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                  <p className="mt-auto text-xs text-slate-500 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#D96C2C]" /> {getReadingTime(post)} min read
                  </p>
                </div>
              </Link>
            ))}

            {/* Placeholder until more posts land */}
            <div className="rounded-[28px] border-2 border-dashed border-[#0E5A60]/20 bg-[#FAF5EE]/60 p-8 flex flex-col items-center justify-center text-center min-h-[240px] sm:col-span-2 lg:col-span-3">
              <PenLine size={26} className="text-[#D96C2C] mb-3" />
              <p className="font-script text-3xl text-[#0E5A60] mb-2 -rotate-1">more stories brewing…</p>
              <p className="text-sm text-slate-500 max-w-md">
                Packing lists, route guides and traveller memoirs are on their way. Until then, the
                best stories are the ones you go and make.
              </p>
              <Link
                href="/journeys"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0E5A60] hover:text-[#C85A24] transition-colors"
              >
                Find your journey <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
