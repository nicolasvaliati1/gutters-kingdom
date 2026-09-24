import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { MetricStrip } from "@/components/MetricStrip";
import { CredibilitySection } from "@/components/CredibilitySection";
import { CtaBanner } from "@/components/CtaBanner";
import { site } from "@/content/site";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: `${site.author.name} — connecting homeowners with licensed, insured local gutter installers across ${site.serviceArea}.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${site.name}`,
    description: `${site.author.name} — connecting homeowners with licensed, insured local gutter installers across ${site.serviceArea}.`,
    url: `${site.url}/about`,
    images: ["/og/about.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${site.name}`,
    images: ["/og/about.png"],
  },
};

export default function AboutPage() {
  const authorSchema = personSchema(site.author, "/about");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <ImageHero
        eyebrow="Who We Are"
        title="About"
        emphasis={site.name}
        paragraph={`We connect homeowners with licensed, insured local gutter installers across ${site.serviceArea}. No rotation of unvetted contractors, just a network we've already checked out.`}
        image="/images/hero-gutter-roofline.webp"
        imageAlt="Gutter installer working along a white gutter at the roofline of a brick home"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        form={<QuoteForm variant="hero" compact source="about-hero" />}
      />

      <MetricStrip
        metrics={[
          { value: "1–2", label: "Days Typical Install" },
          { value: "24 In.", label: "Max Hanger Spacing" },
          { value: "5 Min", label: "Callback Window" },
          { value: "Free", label: "Written Estimate" },
        ]}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-accent-dark">What We Do</p>
        <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">
          {site.author.name}
        </h2>
        <p className="mt-1 text-sm text-muted">{site.author.title}</p>
        <p className="mt-4 max-w-2xl text-sm text-muted">{site.author.bio}</p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Every gutter installer in our network is licensed, insured, and vetted before they ever
          get matched with a homeowner. You tell us what you need; we connect you with the right
          local installer and follow up to make sure the job gets done right.
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <p className="eyebrow text-xs text-accent-dark">Contact &amp; Hours</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="space-y-1 text-sm text-ink/80">
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-accent-dark">
                  {site.email}
                </a>
              </p>
              <p className="text-muted">Prefer a call? Use the &quot;Call Me&quot; button — we&apos;ll call you back within 5 minutes during business hours.</p>
            </div>
            <ul className="space-y-1 text-sm text-ink/80">
              {site.hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-6">
                  <span className="text-muted">{entry.days}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <CredibilitySection />
      <CtaBanner />
    </>
  );
}
