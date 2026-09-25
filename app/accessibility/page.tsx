import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { accessibilityStatement } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: accessibilityStatement.title,
  description: accessibilityStatement.metaDescription,
  alternates: {
    canonical: "/accessibility",
  },
  openGraph: {
    title: `${accessibilityStatement.title} | ${site.name}`,
    description: accessibilityStatement.metaDescription,
    url: `${site.url}/accessibility`,
    images: ["/og/accessibility.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${accessibilityStatement.title} | ${site.name}`,
    images: ["/og/accessibility.png"],
  },
};

export default function AccessibilityPage() {
  return <LegalPage doc={accessibilityStatement} />;
}
