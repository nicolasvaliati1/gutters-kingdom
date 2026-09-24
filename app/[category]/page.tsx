import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { MetricStrip } from "@/components/MetricStrip";
import { QuoteForm } from "@/components/QuoteForm";
import { TableOfContents } from "@/components/TableOfContents";
import { ServiceCatalogCard } from "@/components/ServiceCatalogCard";
import { InlineCta } from "@/components/InlineCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import { categories, getCategory } from "@/content/categories";
import { cities } from "@/content/cities";
import { site } from "@/content/site";
import { faqPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};

  const path = `/${category.slug}`;
  const description = `${category.heroParagraph} Free written estimate across ${site.serviceArea}.`;

  return {
    title: category.heroQualifier,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${category.heroQualifier} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
      images: [`/og/category-${category.slug}.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.heroQualifier} | ${site.name}`,
      images: [`/og/category-${category.slug}.png`],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const otherCategories = categories.filter((c) => c.slug !== category.slug);
  const faqSchema = faqPageSchema(category.faqs);

  const tocItems = [
    { id: "context", label: "Overview" },
    { id: "our-services", label: category.title },
    { id: "price", label: "Cost & Scope" },
    { id: "materials", label: "Materials We Use" },
    { id: "guarantee", label: "Guarantee" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ImageHero
        eyebrow={category.eyebrow}
        title={category.heroQualifier}
        paragraph={category.heroParagraph}
        image={category.image}
        imageAlt={category.imageAlt}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.title, href: `/${category.slug}` },
        ]}
        form={
          <QuoteForm
            variant="hero"
            compact
            source={`category-hero:${category.slug}`}
          />
        }
      />

      <MetricStrip
        metrics={[
          { value: `${category.services.length}`, label: "Services" },
          { value: "Free", label: "Written Estimate" },
          { value: "5 Min", label: "Callback Window" },
          { value: category.services[0]?.warranty.replace(" Warranty", "") ?? "5-Year", label: "Warranty" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <TableOfContents items={tocItems} />
      </div>

      <section id="context" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-10 lg:px-10">
        <h2 className="font-display text-3xl text-ink">{category.topicContextHeading}</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal">
          {category.topicContextParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="our-services" className="border-t border-soft-border bg-bone">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-xs text-rust">What We Offer</p>
          <h2 className="font-display mt-2 text-3xl text-ink">{category.title} Services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service) => (
              <ServiceCatalogCard key={service.slug} category={category} service={service} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10">
        <InlineCta
          title={`Not Sure Which ${category.shortTitle} Service You Need?`}
          reassurance="Tell us about the project and we'll recommend the right scope — no pressure, no obligation."
          source={`category-inline:${category.slug}`}
        />
      </div>

      <section id="price" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-10 lg:px-10">
        <h2 className="font-display text-3xl text-ink">What {category.title} Costs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {category.services.map((service) => (
            <div key={service.slug} className="border border-soft-border bg-white p-4">
              <p className="text-sm font-semibold text-ink">{service.title}</p>
              <p className="mt-1 text-sm text-charcoal">{service.priceRange}</p>
              <p className="text-xs text-charcoal">{service.timeframe}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-charcoal">
          Every estimate is free and given to you in writing before any work starts. The ranges
          above depend on linear feet, roof height, material, and how much repair is involved. See
          each service page for a full cost breakdown.
        </p>
      </section>

      <section id="materials" className="border-t border-soft-border bg-bone">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-xs text-rust">What We Use</p>
          <h2 className="font-display mt-2 text-3xl text-ink">Brands &amp; Materials</h2>
          <p className="mt-4 text-sm text-charcoal">
            A sample of the materials used across these services. Your installer confirms the exact
            gauge, profile, and finish in the written estimate.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
            {Array.from(new Set(category.services.flatMap((s) => s.materials))).slice(0, 8).map((material) => (
              <span key={material} className="text-sm text-ink">
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantee" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-rust">Guarantee &amp; Support</p>
        <h2 className="font-display mt-2 text-3xl text-ink">What Every Job Is Backed By</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {category.services[0]?.guarantee.map((item) => (
            <div key={item.label} className="border-t-2 border-yellow pt-4">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm text-charcoal">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-soft-border bg-bone">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-xs text-rust">Keep Exploring</p>
          <h2 className="font-display mt-2 text-3xl text-ink">Other Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="border-2 border-strong-border bg-white p-5 hover:border-rust"
              >
                <p className="font-display text-xl text-ink">{other.title}</p>
                <p className="mt-2 text-sm text-charcoal">{other.heroParagraph}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-rust">Areas We Serve</p>
        <h2 className="font-display mt-2 text-3xl text-ink">{category.title} by City</h2>
        <p className="mt-3 max-w-2xl text-sm text-charcoal">
          We match homeowners with licensed local gutter installers across {site.serviceArea}.
          Here are the areas where {category.title.toLowerCase()} is a popular request.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${category.slug}/${category.services[0].slug}/${city.slug}`}
              className="border border-soft-border bg-white px-4 py-3 text-sm text-ink hover:border-rust hover:text-rust"
            >
              {city.name}, {city.state}
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-rust">Questions Answered</p>
        <h2 className="font-display mt-2 text-3xl text-ink">{category.title}, Answered</h2>
        <FaqAccordion faqs={category.faqs} />
      </section>

      <CtaBanner source={`category-final:${category.slug}`} />
    </>
  );
}
