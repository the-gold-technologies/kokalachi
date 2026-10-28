import React from "react";
import { Mail } from "lucide-react";
import type { LegalDocument } from "@/data/legal";
import type { HeadingTag } from "@/lib/content";
import { formatBlogDate } from "@/data/blogs";

// Shared layout for the Privacy Policy and Terms pages
export function LegalPage({ doc, headingTag: Heading = "h1" }: { doc: LegalDocument; headingTag?: HeadingTag }) {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* Header band (dark, so the see-through navbar stays readable) */}
      <div className="relative bg-[#0E5A60] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-[#D96C2C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="site-container relative pt-36 sm:pt-40 pb-12 sm:pb-14">
          <span className="inline-block bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm mb-4">
            Legal
          </span>
          <Heading className="heading-hero font-semibold font-serif text-white mb-4">{doc.title}</Heading>
          <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">{doc.intro}</p>
          <p className="mt-5 text-[11px] uppercase tracking-widest font-bold text-white/60">
            Last updated {formatBlogDate(doc.updatedOn)}
          </p>
        </div>
      </div>

      <div className="site-container py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <nav aria-label="On this page" className="lg:sticky lg:top-28 bg-[#FAF6F0] rounded-3xl border border-amber-900/10 p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C85A24] font-montserrat mb-3">
                On this page
              </p>
              <ol className="space-y-1">
                {doc.sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2.5 rounded-xl px-2.5 py-1.5 text-sm text-[#0E5A60]/80 hover:bg-white hover:text-[#D96C2C] transition-colors"
                    >
                      <span className="text-[#D96C2C]/70 font-semibold tabular-nums w-5 shrink-0">{i + 1}.</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Document */}
          <article className="lg:col-span-8 xl:col-span-9 max-w-3xl min-w-0">
            {doc.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 pb-9 mb-9 border-b border-slate-100 last:border-0">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0E5A60] mb-4 flex gap-3">
                  <span className="text-[#D96C2C]/60 tabular-nums">{i + 1}.</span>
                  <span>{section.title}</span>
                </h2>
                {/* Admin-authored rich text from the CMS */}
                <div
                  className="cms-rich-text text-[15px] sm:text-base text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </section>
            ))}

            {/* Questions */}
            <div className="mt-4 rounded-3xl bg-[#FAF6F0] border border-amber-900/10 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div>
                <p className="font-serif text-lg font-bold text-[#0E5A60]">Questions about this page?</p>
                <p className="text-sm text-slate-600">We&apos;re happy to explain anything in plain words.</p>
              </div>
              <a
                href={`mailto:${doc.questionsEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E5A60] hover:bg-[#0B2A3D] text-white text-sm font-medium transition-colors shrink-0"
              >
                <Mail size={16} /> {doc.questionsEmail}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
