import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { MetricStrip } from "@/components/MetricStrip";
import { QuoteForm } from "@/components/QuoteForm";
import { InlineCta } from "@/components/InlineCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaBanner } from "@/components/CtaBanner";
import { RichText } from "@/lib/richText";
import { categories, allServices, getService } from "@/content/categories";
import { cities } from "@/content/cities";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return allServices().map(({ category, service }) => ({
    category: category.slug,
    service: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ category: string; service: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const match = getService(categorySlug, serviceSlug);
  if (!match) return {};
  const { category, service } = match;

  const path = `/${category.slug}/${service.slug}`;
  const title = `${service.title} ${service.qualifier}`;
  const description = service.summary;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
      images: [service.media1?.image ?? "/og/services.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      images: [service.media1?.image ?? "/og/services.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const match = getService(categorySlug, serviceSlug);
  if (!match) notFound();
  const { category, service } = match;

  const otherServicesInCategory = category.services.filter((s) => s.slug !== service.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);
  const pageTestimonials = testimonials.slice(0, 3);
  const sourceTag = `${category.slug}/${service.slug}`;

  const faqSchema = faqPageSchema(service.faqs);
  const serviceJsonLd = serviceSchema({
    name: `${service.title} ${service.qualifier}`,
    description: service.summary,
    url: `/${category.slug}/${service.slug}`,
    areaServed: site.serviceArea,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <ImageHero
        eyebrow={category.title}
        title={service.title}
        emphasis={service.qualifier}
        paragraph={service.summary}
        image={service.media1?.image ?? category.image}
        imageAlt={service.media1?.imageAlt ?? category.imageAlt}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.title, href: `/${category.slug}` },
          { name: service.title, href: `/${category.slug}/${service.slug}` },
        ]}
        form={<QuoteForm variant="hero" compact source={`service-hero:${sourceTag}`} />}
      />

      <MetricStrip
        metrics={[
          { value: service.priceRange.split(" – ")[0], label: "Starting At" },
          { value: service.timeframe, label: "Timeline" },
          { value: service.warranty.replace(" Warranty", ""), label: "Warranty" },
          { value: "Free", label: "Written Estimate" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_360px]">
          <article className="max-w-[780px] space-y-12">
            <section>
              <p className="text-lg leading-relaxed text-charcoal">{service.overview}</p>
            </section>

            {service.media1 && (
              <figure>
                <div className="relative h-[320px] w-full sm:h-[420px]">
                  <Image
                    src={service.media1.image}
                    alt={service.media1.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(min-width: 1024px) 780px, 100vw"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-charcoal">{service.media1.caption}</figcaption>
              </figure>
            )}

            <section>
              <h2 className="font-display text-3xl text-ink">Cost &amp; Scope</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal">
                {service.priceScopeParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 border border-soft-border bg-bone p-4 text-sm">
                <div>
                  <p className="eyebrow text-[11px] text-charcoal">Cost Range</p>
                  <p className="mt-1 font-semibold text-ink">{service.priceRange}</p>
                </div>
                <div>
                  <p className="eyebrow text-[11px] text-charcoal">Timeframe</p>
                  <p className="mt-1 font-semibold text-ink">{service.timeframe}</p>
                </div>
                <div>
                  <p className="eyebrow text-[11px] text-charcoal">Warranty</p>
                  <p className="mt-1 font-semibold text-ink">{service.warranty}</p>
                </div>
              </div>
            </section>

            <InlineCta
              title={`Get a Free ${service.title} Estimate`}
              reassurance="Written, in-person, no obligation."
              source={`service-inline-1:${sourceTag}`}
              defaultService={category.slug}
            />

            <section>
              <h2 className="font-display text-3xl text-ink">Important Considerations</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{service.considerationsIntro}</p>
              <ul className="mt-4 space-y-3">
                {service.considerations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-charcoal">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-yellow" aria-hidden />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {service.media2 && (
              <figure>
                <div className="relative h-[320px] w-full sm:h-[420px]">
                  <Image
                    src={service.media2.image}
                    alt={service.media2.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(min-width: 1024px) 780px, 100vw"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-charcoal">{service.media2.caption}</figcaption>
              </figure>
            )}

            <InlineCta
              title="Ready to See This Done Right?"
              reassurance="Free written estimate, no pressure."
              source={`service-inline-2:${sourceTag}`}
              defaultService={category.slug}
            />

            <section>
              <h2 className="font-display text-3xl text-ink">Materials We Use</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{service.materialsIntro}</p>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                {service.materials.map((material) => (
                  <p key={material} className="text-sm text-ink">
                    {material}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-ink">Our Process</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{service.processIntro}</p>
              <ol className="mt-6 space-y-6">
                {service.process.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display shrink-0 text-2xl text-yellow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="mt-1 text-sm text-charcoal">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <InlineCta
              title="Get Your Project Scheduled"
              source={`service-inline-3:${sourceTag}`}
              defaultService={category.slug}
            />

            <section>
              <h2 className="font-display text-3xl text-ink">How to Choose a Provider</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{service.howToChooseIntro}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.howToChoose.map((item) => (
                  <div key={item.label} className="border border-soft-border bg-white p-4">
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-charcoal">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {service.caseStudy && (
              <section className="border-2 border-strong-border bg-bone p-6">
                <p className="eyebrow text-[11px] text-rust">Example Project</p>
                <p className="mt-2 text-sm text-charcoal">{service.caseStudy.context}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {service.caseStudy.facts.map((fact) => (
                    <div key={fact.label}>
                      <p className="eyebrow text-[10px] text-charcoal">{fact.label}</p>
                      <p className="text-sm font-semibold text-ink">{fact.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-charcoal">{service.caseStudy.outcome}</p>
                <p className="mt-4 text-xs text-charcoal">
                  Illustrative example based on typical project scope — not a specific client record.
                </p>
              </section>
            )}

            <section id="guarantee">
              <h2 className="font-display text-3xl text-ink">Guarantee &amp; Support</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {service.guarantee.map((item) => (
                  <div key={item.label} className="border-t-2 border-yellow pt-4">
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-2 text-sm text-charcoal">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-ink">Why Choose {site.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{service.reasonsParagraph}</p>
              <ul className="mt-4 space-y-2">
                {service.reasonsBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-yellow" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-8 border-t border-soft-border pt-10 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-[11px] text-rust">More {category.title}</p>
                <ul className="mt-3 space-y-2">
                  {otherServicesInCategory.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${category.slug}/${s.slug}`} className="text-sm text-ink hover:text-rust">
                        {s.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-[11px] text-rust">Other Services</p>
                <ul className="mt-3 space-y-2">
                  {otherCategories.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className="text-sm text-ink hover:text-rust">
                        {c.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-[11px] text-rust">Areas We Serve</p>
                <ul className="mt-3 space-y-2">
                  {cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/${category.slug}/${service.slug}/${city.slug}`}
                        className="text-sm text-ink hover:text-rust"
                      >
                        {service.title} in {city.name}, {city.state} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-[100px] lg:h-fit">
            <div className="border-2 border-strong-border bg-white p-6">
              <p className="eyebrow text-xs text-rust">Free Quote</p>
              <h2 className="font-display mt-2 text-xl text-ink">Get Started Today</h2>
              <div className="mt-4">
                <QuoteForm variant="sidebar" compact defaultService={category.slug} source={`service-sidebar:${sourceTag}`} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-soft-border pt-4 text-[11px] text-charcoal">
                <span>Licensed &amp; insured</span>
                <span>Free estimate</span>
                <span>{service.warranty}</span>
                <span>Vetted local pros</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {pageTestimonials.length > 0 && (
        <section className="border-t border-soft-border bg-bone">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <p className="eyebrow text-xs text-rust">Customer Reviews</p>
            <h2 className="font-display mt-2 text-3xl text-ink">What Homeowners Say</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {pageTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-rust">Questions Answered</p>
        <h2 className="font-display mt-2 text-3xl text-ink">{service.title}, Answered</h2>
        <FaqAccordion faqs={service.faqs} />
      </section>

      <CtaBanner source={`service-final:${sourceTag}`} />
    </>
  );
}
