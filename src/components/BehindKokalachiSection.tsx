import React from "react";
import Link from "next/link";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { Clock, ArrowRight, PenLine } from "lucide-react";
import { formatBlogDate, getReadingTime, type BlogPost } from "@/data/blogs";
import type { BehindKokalachiContent } from "@/types/cms";

interface BehindKokalachiSectionProps {
  content: BehindKokalachiContent;
  posts: BlogPost[]; // newest first
}

// Smaller Unsplash crops for cards; local images pass through untouched
const sized = (src: string, width: number) => src.replace(/([?&])w=\d+/, `$1w=${width}`);

export function BehindKokalachiSection({ content, posts }: BehindKokalachiSectionProps) {
  const [featured, ...rest] = posts;
  if (!featured) return null;
  const more = rest.slice(0, 3);

  return (
    <section
      id="behind-kokalachi"
      className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline (Top Right Variation) */}
      <FlyingBirds className="hidden lg:block absolute top-10 right-14 opacity-35 text-[#0E5A60]" />
      <div className="site-container relative z-10 text-center">
        {/* FROM THE JOURNAL INNER CONTAINER */}
        <div className="bg-[#FAF5EE] relative text-center">
          {/* Journal Tagline */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
            {content.tagline}
          </span>

          {/* Journal Main Title */}
          <h2 className="heading-section font-normal text-[#0E5A60] font-serif mb-4 max-w-4xl mx-auto">
            {content.headline}{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0E5A60]">
              {content.scriptAccent}
              <TitleUnderline />
            </span>
            {content.headlineSuffix && <> {content.headlineSuffix}</>}
          </h2>

          {/* Journal Subtitle Paragraph */}
          <p className="text-[#1E3327]/80 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mb-12 leading-relaxed font-sans whitespace-pre-line">
            {content.description}
          </p>

          {/* FEATURED STORY (newest post) */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="group bg-[#FFFDF9] p-5 sm:p-6 rounded-[32px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all text-left mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Featured Photo (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-sm relative bg-slate-100">
              <img
                src={sized(featured.heroImage, 1200)}
                alt={featured.heroAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Featured Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4 pr-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96C2C] font-montserrat block">
                FEATURED STORY · {featured.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E3327] font-serif leading-snug group-hover:text-[#0E5A60] transition-colors">
                {featured.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#D96C2C] font-medium pt-1">
                <Clock size={15} />
                <span>{getReadingTime(featured)} min read</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{formatBlogDate(featured.publishedAt)}</span>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E3327] border-b border-[#1E3327] pb-0.5 group-hover:text-[#D96C2C] group-hover:border-[#D96C2C] transition-colors">
                  <span>{content.readStoryText}</span>
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>

          {/* UP TO 3 MORE ARTICLES (Bottom Row) */}
          {more.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
              {more.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="bg-[#FFFDF9] p-5 rounded-[28px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                      <img
                        src={sized(post.heroImage, 600)}
                        alt={post.heroAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Floating Circle Icon Badge */}
                      <div className="w-10 h-10 rounded-full bg-white text-[#1E3327] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-amber-900/10">
                        <PenLine size={18} className="text-[#1E3327]" />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <h4 className="text-lg sm:text-xl font-bold text-[#1E3327] font-serif group-hover:text-[#0E5A60] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#D96C2C] font-medium pt-4 border-t border-amber-900/10 mt-4">
                    <Clock size={14} />
                    <span>{getReadingTime(post)} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* BOTTOM JOURNAL CTA */}
          <div className="flex items-center justify-center pt-2">
            <Link
              href={content.ctaUrl}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0E5A60] hover:bg-[#061C29] text-white font-medium text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
            >
              <span>{content.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
