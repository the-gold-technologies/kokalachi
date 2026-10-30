import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { toLegalDocument } from "@/data/legal";
import { getPage, headingTag, seoMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { sections, seo } = await getPage("terms");
  const doc = sections.LegalDocumentSection;
  return {
    title: doc.title,
    description: doc.description,
    ...seoMetadata(seo, "/terms"),
  };
}

export default async function TermsPage() {
  const { sections, seo } = await getPage("terms");
  return (
    <>
      <JsonLd schema={seo?.schema} />
      <LegalPage doc={toLegalDocument(sections.LegalDocumentSection)} headingTag={headingTag(seo?.headingOptions)} />
    </>
  );
}
