import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${privacyPolicy.title} | Kokalachi`,
    description: privacyPolicy.description,
    url: "https://kokalachi.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
