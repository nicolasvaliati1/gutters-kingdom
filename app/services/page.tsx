import type { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { MetricStrip } from "@/components/MetricStrip";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCatalogCard } from "@/components/ServiceCatalogCard";
import { InlineCta } from "@/components/InlineCta";
import { CtaBanner } from "@/components/CtaBanner";
import { categories } from "@/content/categories";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gutter Services",
  description: `Every gutter service ${site.name} offers, grouped by category, with pricing, timelines, and warranty terms for each.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Gutter Services | ${site.name}`,
    description: `Every gutter service ${site.name} offers, grouped by category, with pricing, timelines, and warranty terms for each.`,
    url: `${site.url}/services`,
    images: ["/og/services.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gutter Services | ${site.name}`,
    images: ["/og/services.png"],
  },
};

const totalServices = categories.reduce((sum, c) => sum + c.services.length, 0);

export default function ServicesPage() {
  return (
    <>
      <ImageHero
        eyebrow="What We Do"
        title="Gutter Services"
        emphasis={`Across ${site.serviceArea}`}
        paragraph={`One licensed crew, ${categories.length} specialties, ${totalServices} specific services. Everything from a single leaking corner to a full-house replacement, without bringing in a second contractor.`}
        image="/images/hero-gutter-roofline.webp"
        imageAlt="Gutter installer working along a white gutter at the roofline of a brick home"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        form={<QuoteForm variant="hero" compact source="services-directory-hero" />}
      />

      <MetricStrip
        metrics={[
          { value: `${categories.length}`, label: "Categories" },
          { value: `${totalServices}`, label: "Services" },
          { value: "Free", label: "Written Estimate" },
          { value: "5 Min", label: "Callback Window" },
        ]}
      />

      <nav
        aria-label="Jump to category"
        className="sticky top-[72px] z-30 border-b-2 border-strong-border bg-white lg:top-[161px]"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-6 py-3 lg:px-10">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="eyebrow text-[11px] text-ink hover:text-rust"
            >
              {category.shortTitle}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-10">
        <h2 className="font-display text-3xl text-ink">One Crew for the Whole Roofline</h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Most homeowners juggle two or three different contractors: one to hang gutters, another
          for fascia repair, maybe a third for drainage. We run every category through one
          licensed, insured network instead, which means one schedule, one point of contact, and
          one written estimate covering the whole project instead of three separate ones. Every
          job starts with a free estimate and is backed by a written warranty specific to that
          service.
        </p>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-14 lg:px-10">
        <InlineCta
          title="Not Sure Which Service You Need?"
          reassurance="Tell us what's going on and we'll recommend the right scope — no pressure."
          source="services-directory-inline"
        />
      </div>

      {categories.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className="scroll-mt-32 border-t border-soft-border bg-bone"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-xs text-rust">Category {category.number}</p>
                <h2 className="font-display mt-2 text-3xl text-ink">{category.title}</h2>
                <p className="mt-2 max-w-xl text-sm text-charcoal">{category.heroParagraph}</p>
              </div>
              <Link
                href={`/${category.slug}`}
                className="eyebrow text-[11px] text-ink hover:text-rust"
              >
                {category.services.length} Services — View Category →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <ServiceCatalogCard key={service.slug} category={category} service={service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-2xl text-ink">Still Not Sure Which Service Fits?</h2>
        <p className="mt-3 text-sm text-charcoal">
          Tell us what&apos;s going on with your gutters and we&apos;ll point you to the right service,
          with no pressure and no obligation.
        </p>
      </section>

      <CtaBanner source="services-directory-final" />
    </>
  );
}
