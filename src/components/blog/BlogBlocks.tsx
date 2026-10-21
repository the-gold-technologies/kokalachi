import React from "react";
import { Check, Lightbulb } from "lucide-react";
import { BlogBlock } from "@/data/blogs";
import { BlogRichText } from "@/components/blog/BlogRichText";

function TipNote({ text }: { text: string }) {
  return (
    <div className="relative my-10 mx-1 sm:mx-6 rotate-[-0.8deg]">
      {/* Washi tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#D96C2C]/25 border-y border-[#D96C2C]/20 rotate-[-4deg] z-10" />
      <div className="bg-[#FFF6DF] border border-amber-900/10 rounded-2xl px-6 py-6 sm:px-8 shadow-[0_12px_30px_rgba(140,94,60,0.15)]">
        <p className="font-script text-2xl text-[#C85A24] flex items-center gap-2 mb-2">
          <Lightbulb size={20} className="text-[#D96C2C]" /> Kokalachi tip
        </p>
        <p className="text-[15px] sm:text-base text-[#5B4636] leading-relaxed">
          <BlogRichText text={text} />
        </p>
      </div>
    </div>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <blockquote className="relative my-10 py-2 pl-6 sm:pl-8 border-l-4 border-[#D96C2C]">
      <span className="absolute -top-6 -left-1 font-serif text-7xl text-[#D96C2C]/20 leading-none select-none" aria-hidden>
        &ldquo;
      </span>
      <p className="font-script text-[26px] sm:text-[32px] leading-snug text-[#0E5A60]">
        <BlogRichText text={text} />
      </p>
    </blockquote>
  );
}

function Polaroid({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-12 flex justify-center">
      <div className="relative bg-white p-3 pb-14 sm:p-4 sm:pb-16 shadow-[0_20px_50px_rgba(14,90,96,0.18)] rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 max-w-[640px] w-full">
        <div className="absolute -top-3 left-8 w-20 h-6 bg-[#FFF4E5]/90 border-y border-amber-900/15 rotate-[-6deg]" />
        <div className="absolute -top-3 right-8 w-20 h-6 bg-[#FFF4E5]/90 border-y border-amber-900/15 rotate-[5deg]" />
        <img src={src} alt={alt} className="w-full aspect-[4/3] object-cover" />
        <figcaption className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center font-script text-xl sm:text-2xl text-[#0E5A60]">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}

function Postcard({ text, signature }: { text: string; signature: string }) {
  return (
    <div className="my-12 flex justify-center">
      <div className="relative w-full max-w-[640px] bg-[#FDFAF3] border border-amber-900/15 rounded-md shadow-[0_20px_50px_rgba(140,94,60,0.18)] rotate-[-1.2deg] p-5 sm:p-7">
        {/* Stamp + postmark */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-14 h-16 sm:w-16 sm:h-[72px] border-2 border-dashed border-[#D96C2C]/60 bg-[#D96C2C]/10 flex flex-col items-center justify-center rotate-3">
          <span className="text-xl sm:text-2xl" aria-hidden>🏔️</span>
          <span className="text-[8px] font-bold tracking-widest text-[#C85A24] uppercase">Kokalachi</span>
        </div>
        <div className="absolute top-8 right-16 sm:right-20 w-16 h-16 rounded-full border-2 border-[#0E5A60]/20 hidden sm:flex items-center justify-center -rotate-12">
          <span className="text-[7px] font-bold tracking-widest text-[#0E5A60]/40 uppercase text-center leading-tight">
            last day
            <br />
            ♡ post
          </span>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A24] mb-4">Post card</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_120px] gap-4 sm:gap-6 pr-16 sm:pr-0">
          <p className="font-script text-xl sm:text-2xl leading-snug text-[#0E5A60]">
            {text}
            <span className="block mt-3 text-lg sm:text-xl text-[#C85A24]">— {signature}</span>
          </p>
          <div className="hidden sm:block w-px bg-amber-900/15" />
          <div className="hidden sm:flex flex-col justify-end gap-4 pb-2">
            <div className="h-px bg-amber-900/20" />
            <div className="h-px bg-amber-900/20" />
            <div className="h-px bg-amber-900/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function List({ items, style = "check" }: Extract<BlogBlock, { type: "list" }>) {
  if (style === "cards") {
    return (
      <ol className="my-8 grid gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="group flex gap-4 rounded-2xl bg-white border border-slate-100 px-5 py-4 shadow-sm hover:shadow-md hover:border-[#D96C2C]/30 hover:-translate-y-0.5 transition-all"
          >
            <span className="font-script text-3xl leading-none text-[#D96C2C] w-6 shrink-0 pt-0.5">{i + 1}</span>
            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
              {item.title && <strong className="text-[#0E5A60] font-semibold">{item.title} </strong>}
              <BlogRichText text={item.text} />
            </p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="my-7 grid gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="mt-1 w-5 h-5 rounded-full bg-[#0E5A60] text-white flex items-center justify-center shrink-0">
            <Check size={12} strokeWidth={3} />
          </span>
          <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
            {item.title && <strong className="text-[#0E5A60] font-semibold">{item.title} </strong>}
            <BlogRichText text={item.text} />
          </p>
        </li>
      ))}
    </ul>
  );
}

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-[16px] sm:text-[18px] text-slate-600 leading-[1.85] mb-6">
                <BlogRichText text={block.text} />
              </p>
            );
          case "tip":
            return <TipNote key={i} text={block.text} />;
          case "quote":
            return <PullQuote key={i} text={block.text} />;
          case "image":
            return <Polaroid key={i} {...block} />;
          case "postcard":
            return <Postcard key={i} {...block} />;
          case "list":
            return <List key={i} {...block} />;
        }
      })}
    </>
  );
}
