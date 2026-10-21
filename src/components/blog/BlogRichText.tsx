import React from "react";
import Link from "next/link";

// Turns "read our [Trust & Safety section](/#good-company)" into text with a link
export function BlogRichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <React.Fragment key={i}>{part}</React.Fragment>;
        return (
          <Link
            key={i}
            href={match[2]}
            className="font-semibold text-[#C85A24] underline decoration-[#D96C2C]/40 decoration-2 underline-offset-4 hover:decoration-[#D96C2C] transition-colors"
          >
            {match[1]}
          </Link>
        );
      })}
    </>
  );
}
