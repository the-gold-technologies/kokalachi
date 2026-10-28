// Privacy Policy and Terms & Conditions. The text is edited as rich text in the CMS
// (Terms / Privacy Policy pages); each <h2> in it starts a numbered section with its own
// entry in the "On this page" list. Have changes reviewed by a lawyer before relying on them.

import type { LegalSections } from "@/types/cms";

export interface LegalSection {
  id: string;
  title: string;
  html: string;
}

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  updatedOn: string; // "YYYY-MM-DD"
  intro: string;
  questionsEmail: string;
  sections: LegalSection[];
}

const decodeEntities = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function toLegalDocument(content: LegalSections["LegalDocumentSection"]): LegalDocument {
  // Normalize non-breaking spaces (&nbsp; / \u00a0) commonly emitted by rich text editors so text wraps normally
  const cleanBody = (content.bodyHtml || "").replace(/&nbsp;|\u00a0/g, " ");

  // ["text before the first heading", heading 1, body 1, heading 2, body 2, ...]
  const parts = cleanBody.split(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const preamble = parts[0].trim();
  const sections: LegalSection[] = [];
  const used = new Set<string>();

  for (let i = 1; i < parts.length; i += 2) {
    // The page numbers sections itself, so a typed "3. " prefix is dropped
    const title = decodeEntities(parts[i].replace(/<[^>]+>/g, "")).replace(/^\s*\d+[.)]\s*/, "").trim();
    let id = slugify(title) || `section-${sections.length + 1}`;
    while (used.has(id)) id += "-2";
    used.add(id);
    sections.push({ id, title, html: parts[i + 1].trim() });
  }

  if (preamble) {
    if (sections.length) sections[0].html = preamble + sections[0].html;
    else sections.push({ id: "details", title: content.title, html: preamble });
  }

  return {
    slug: content.slug,
    title: content.title,
    description: content.description,
    updatedOn: content.updatedOn,
    intro: (content.intro || "").replace(/&nbsp;|\u00a0/g, " "),
    questionsEmail: content.questionsEmail,
    sections,
  };
}
