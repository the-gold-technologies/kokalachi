import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage, headingTag, seoMetadata } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPage("contact");
  return seoMetadata(seo, "/contact");
}

export default async function ContactPage() {
  const { sections, seo } = await getPage("contact");
  return (
    <>
      <JsonLd schema={seo?.schema} />
      <ContactView sections={sections} headingTag={headingTag(seo?.headingOptions)} />
    </>
  );
}
