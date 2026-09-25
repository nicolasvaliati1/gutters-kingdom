import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfService } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.metaDescription,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `${termsOfService.title} | ${site.name}`,
    description: termsOfService.metaDescription,
    url: `${site.url}/terms`,
    images: ["/og/terms.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${termsOfService.title} | ${site.name}`,
    images: ["/og/terms.png"],
  },
};

export default function TermsPage() {
  return <LegalPage doc={termsOfService} />;
}
