import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.metaDescription,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `${privacyPolicy.title} | ${site.name}`,
    description: privacyPolicy.metaDescription,
    url: `${site.url}/privacy`,
    images: ["/og/privacy.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${privacyPolicy.title} | ${site.name}`,
    images: ["/og/privacy.png"],
  },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
