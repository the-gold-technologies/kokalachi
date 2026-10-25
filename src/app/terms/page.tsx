import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/data/legal";

export const metadata: Metadata = {
  title: termsAndConditions.title,
  description: termsAndConditions.description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${termsAndConditions.title} | Kokalachi`,
    description: termsAndConditions.description,
    url: "https://kokalachi.com/terms",
  },
};

export default function TermsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
