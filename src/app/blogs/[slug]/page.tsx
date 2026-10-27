import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Feather, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { TripCardItem } from "@/components/TripCardItem";
import { BlogBlocks } from "@/components/blog/BlogBlocks";
import { BlogToc } from "@/components/blog/BlogToc";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatBlogDate, getBlogOgImage, getReadingTime } from "@/data/blogs";
import { getBlogPost, getBlogPosts, getTrips } from "@/lib/content";
import { hasFullDetails } from "@/lib/departures";

// Prerender every post at build; posts published later in the CMS render on first visit, then stay cached
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription || post.excerpt,
    keywords: post.seo.targetKeywords ?? undefined,
    alternates: { canonical: post.seo.canonicalUrl || `/blogs/${post.slug}` },
    ...(post.seo.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "article",
      siteName: "Kokalachi",
      locale: "en_IN",
      title: post.title,
      description: post.excerpt,
      url: `https://kokalachi.com/blogs/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: getBlogOgImage(post), width: 1200, height: 630, alt: post.heroAlt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [getBlogOgImage(post)],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, trips] = await Promise.all([getBlogPost(slug), getTrips()]);
  if (!post) notFound();

  const readingTime = getReadingTime(post);
  const relatedTrips = post.relatedCategory
    ? trips
        .filter((card) => card.categories.includes(post.relatedCategory!) && hasFullDetails(card.tourPackage))
        .slice(0, 3)
    : [];
  const nextTrip = relatedTrips[0];
  const shareText =encodeURIComponent(`${post.title} https://kokalachi.com/blogs/${post.slug}`);

  // BlogPosting structured data for search engines (the CMS can supply its own)
  const jsonLd = post.seo.schema || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: new URL(getBlogOgImage(post), "https://kokalachi.com").href,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Kokalachi" },
    mainEntityOfPage: `https://kokalachi.com/blogs/${post.slug}`,
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <JsonLd schema={jsonLd} />
      <ReadingProgress targetId="article-body" />

      {/* Hero */}
      <header className="relative h-[78vh] min-h-[540px] w-full overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.heroAlt}
          className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
        />
        {/* Dark only behind the text, so the photo stays bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-14">
          <div className="site-container">
            <div className="max-w-4xl animate-fade-in-up">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-widest mb-5 transition-colors"
              >
                <ArrowLeft size={14} /> The Kokalachi Journal
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>
              <h1 className="heading-hero font-semibold font-serif text-white mb-6">
                {post.heroLead}{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-[#FFD9BF]">
                  {post.heroAccent}
                  <TitleUnderline />
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Feather size={15} className="text-[#FFB98A]" /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={15} className="text-[#FFB98A]" /> {formatBlogDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-[#FFB98A]" /> {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article — clip (not hide) the glows so they can't widen the page, without breaking the sticky sidebars */}
      <div className="relative overflow-x-clip">
        {/* Scrapbook dot grid + soft glows */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0E5A60 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="absolute top-40 -left-40 w-[420px] h-[420px] bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[60%] -right-40 w-[420px] h-[420px] bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10 py-14 sm:py-20">
          {/* Chapters | article (kept to a readable line length) | trip & share sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_260px] gap-10 lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <BlogToc sections={post.sections} />
              </div>
            </aside>

            <article id="article-body" className="min-w-0 w-full max-w-[720px] mx-auto">
              {/* Intro */}
              <div className="mb-6">
                {post.intro.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[19px] sm:text-[22px] font-serif text-[#0E5A60] leading-[1.6] mb-6 first-letter:float-left first-letter:font-serif first-letter:text-[68px] first-letter:leading-[0.85] first-letter:font-bold first-letter:text-[#D96C2C] first-letter:mr-3 first-letter:mt-1"
                        : "text-[16px] sm:text-[18px] text-slate-600 leading-[1.85] mb-6"
                    }
                  >
                    {para}
                  </p>
                ))}
                {post.marginNote && (
                  <p className="font-script text-2xl sm:text-[28px] text-[#C85A24] -rotate-2 flex items-center gap-2 pl-2">
                    {post.marginNote}
                    <svg className="w-10 h-6 text-[#C85A24]/70 rotate-12" viewBox="0 0 50 30" fill="none" aria-hidden>
                      <path
                        d="M 5 5 C 20 25 35 15 45 20 M 38 14 L 45 20 L 40 28"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                )}
              </div>

              {/* Mobile table of contents */}
              <details className="lg:hidden my-8 rounded-2xl bg-[#FAF5EE] border border-amber-900/10 px-5 py-4 group">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-[#0E5A60] text-sm">
                  <span>In this story · {post.sections.length} chapters</span>
                  <ArrowRight size={16} className="text-[#D96C2C] transition-transform group-open:rotate-90" />
                </summary>
                <ol className="mt-3 space-y-2">
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="flex items-baseline gap-2.5 text-sm text-slate-600 hover:text-[#0E5A60]">
                        <span className="font-script text-lg text-[#D96C2C] w-5 shrink-0">{section.number ?? "✦"}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              {/* Chapters */}
              {post.sections.map((section) =>
                section.number ? (
                  <section key={section.id} id={section.id} className="scroll-mt-28 pt-12">
                    <div className="flex items-end gap-4 mb-5">
                      <span className="font-script text-[64px] sm:text-[76px] leading-[0.8] text-[#D96C2C]">
                        {String(section.number).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#C85A24] font-montserrat pb-2">
                        {section.kicker}
                      </span>
                    </div>
                    <h2 className="text-[26px] sm:text-[34px] font-serif font-semibold text-[#0E5A60] leading-tight mb-6">
                      {section.title}
                    </h2>
                    <BlogBlocks blocks={section.blocks} />
                    <div className="flex items-center justify-center gap-3 pt-4 text-[#D96C2C]/40" aria-hidden>
                      <span className="h-px w-16 bg-current" />✦<span className="h-px w-16 bg-current" />
                    </div>
                  </section>
                ) : (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 mt-12 relative rounded-[32px] bg-[#0E5A60] text-white px-6 py-10 sm:px-10 overflow-hidden"
                  >
                    <FlyingBirds className="absolute top-5 right-6 opacity-30 text-white" />
                    <h2 className="text-[26px] sm:text-[34px] font-serif font-semibold leading-tight mb-5 pr-10">
                      {section.title}
                    </h2>
                    {/* Closing thoughts: plain paragraphs, the last one handwritten */}
                    {section.blocks.map((block, i) =>
                      block.type === "p" ? (
                        <p
                          key={i}
                          className={
                            i === section.blocks.length - 1
                              ? "font-script text-[26px] sm:text-3xl leading-snug text-[#FFD9BF]"
                              : "text-[16px] sm:text-[18px] text-white/85 leading-[1.85] mb-6"
                          }
                        >
                          {block.text}
                        </p>
                      ) : null
                    )}
                  </section>
                )
              )}

              {/* Share */}
              <div className="xl:hidden mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-dashed border-[#0E5A60]/25 px-6 py-5">
                <p className="font-script text-2xl text-[#0E5A60]">{post.share.note}</p>
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white px-5 py-2.5 text-sm font-bold shadow-sm transition-colors shrink-0"
                >
                  <FaWhatsapp size={17} /> {post.share.buttonText}
                </a>
              </div>
            </article>

            <aside className="hidden xl:block">
              <div className="sticky top-32 space-y-8">
                {nextTrip && (
                  <Link
                    href={`/journeys/${nextTrip.slug}`}
                    className="group block rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={nextTrip.images[0]}
                        alt={nextTrip.destination}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 bg-[#D96C2C] text-white text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                        {post.sidebarBadge}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-slate-500 flex items-center gap-1 mb-1.5">
                        <MapPin size={13} className="text-[#D96C2C]" /> {nextTrip.destination} · {nextTrip.duration}
                      </p>
                      <p className="font-serif font-semibold text-[#0E5A60] leading-snug mb-3 group-hover:text-[#C85A24] transition-colors">
                        {nextTrip.tourPackage.title}
                      </p>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D96C2C] flex items-center gap-1">
                        See the trip
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                )}

                <div className="relative rounded-[24px] bg-[#FFF6DF] border border-amber-900/10 p-5 rotate-[-1.5deg] shadow-[0_12px_30px_rgba(140,94,60,0.12)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#D96C2C]/25 border-y border-[#D96C2C]/20 rotate-[-4deg]" />
                  <p className="font-script text-2xl text-[#C85A24] mb-1">{post.share.title}</p>
                  <p className="text-sm text-[#5B4636] leading-relaxed mb-4">{post.share.note}</p>
                  <a
                    href={`https://wa.me/?text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white px-4 py-2.5 text-xs font-bold shadow-sm transition-colors"
                  >
                    <FaWhatsapp size={15} /> {post.share.buttonText}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="pb-16 lg:pb-20">
        <div className="site-container">
          <div className="bg-[#FAF5EE] rounded-[40px] border border-amber-900/10 shadow-sm relative overflow-hidden px-6 py-12 sm:px-12 lg:py-16 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#C85A24]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D35400] font-montserrat block mb-4">
                {post.cta.eyebrow}
              </span>
              <h2 className="heading-section font-medium text-[#0E5A60] font-serif mb-5 tracking-tight">
                {post.cta.title}
              </h2>
              <p className="text-[#0E5A60]/80 text-sm sm:text-base leading-relaxed mb-8">{post.cta.text}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={post.cta.primaryUrl}
                  className="w-full sm:w-auto bg-[#D96C2C] hover:bg-[#C85A24] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md shadow-[#D96C2C]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2.5"
                >
                  <span>{post.cta.primaryText}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={post.cta.secondaryUrl}
                  className="w-full sm:w-auto text-[#0E5A60] hover:text-[#C85A24] px-4 py-3.5 font-bold text-sm transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>{post.cta.secondaryText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trips to try it on */}
      {relatedTrips.length > 0 && (
        <section className="pb-20 lg:pb-24">
          <div className="site-container">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
                Made for first-timers
              </span>
              <h2 className="heading-section font-serif text-[#0E5A60]">
                Trips to say{" "}
                <span className="relative inline-block font-script text-[1.15em]">
                  yes
                  <TitleUnderline />
                </span>{" "}
                to
              </h2>
            </div>
            {/* Centered, so two trips don't leave a gap on the right */}
            <div className="flex flex-wrap justify-center gap-6">
              {relatedTrips.map((card) => (
                <div key={card.slug} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <TripCardItem card={card} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
