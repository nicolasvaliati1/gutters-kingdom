import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { MetricStrip } from "@/components/MetricStrip";
import { QuoteForm } from "@/components/QuoteForm";
import { InlineCta } from "@/components/InlineCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaBanner } from "@/components/CtaBanner";
import { categories, allServices, getService } from "@/content/categories";
import { cities, getCity } from "@/content/cities";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return allServices().flatMap(({ category, service }) =>
    cities.map((city) => ({
      category: category.slug,
      service: service.slug,
      city: city.slug,
    }))
  );
}

type PageProps = {
  params: Promise<{ category: string; service: string; city: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug, city: citySlug } = await params;
  const match = getService(categorySlug, serviceSlug);
  const city = getCity(citySlug);
  if (!match || !city) return {};
  const { category, service } = match;

  const path = `/${category.slug}/${service.slug}/${city.slug}`;
  const title = `${service.title} in ${city.name}, ${city.state}`;
  const description = `${service.summary.split(".")[0]}. Free estimate for ${city.name} homeowners from a licensed local installer familiar with ${city.name}'s ${city.historicDistrict ? "historic district rules" : "housing stock"}.`.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
      images: [service.media1?.image ?? category.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      images: [service.media1?.image ?? category.image],
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { category: categorySlug, service: serviceSlug, city: citySlug } = await params;
  const match = getService(categorySlug, serviceSlug);
  const city = getCity(citySlug);
  if (!match || !city) notFound();
  const { category, service } = match;

  const nearbyCities = city.nearbySlugs
    .map((slug) => getCity(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const otherServicesInCategory = category.services.filter((s) => s.slug !== service.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);
  const pageTestimonials = testimonials.slice(0, 3);
  const sourceTag = `${category.slug}/${service.slug}/${city.slug}`;

  // City-specific FAQs come first (genuinely unique per city) followed by
  // the service's own FAQs (shared across cities, which is fine — they're
  // about the service, not the location).
  const pageFaqs = [...city.cityFaqs, ...service.faqs];

  const faqSchema = faqPageSchema(pageFaqs);
  const serviceJsonLd = serviceSchema({
    name: `${service.title} in ${city.name}, ${city.state}`,
    description: service.summary,
    url: `/${category.slug}/${service.slug}/${city.slug}`,
    areaServed: `${city.name}, ${city.state}`,
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
        eyebrow={`${category.title} — ${city.name}, ${city.state}`}
        title={service.title}
        emphasis={`in ${city.name}, ${city.state}`}
        paragraph={`${service.summary} Free written estimate for ${city.name} homeowners, matched with a licensed local installer.`}
        image={service.media1?.image ?? category.image}
        imageAlt={service.media1?.imageAlt ?? category.imageAlt}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.title, href: `/${category.slug}` },
          { name: service.title, href: `/${category.slug}/${service.slug}` },
          { name: city.name, href: `/${category.slug}/${service.slug}/${city.slug}` },
        ]}
        form={<QuoteForm variant="hero" compact source={`city-hero:${sourceTag}`} />}
      />

      <MetricStrip
        metrics={[
          { value: service.priceRange.split(" – ")[0], label: "Starting At" },
          { value: service.timeframe, label: "Timeline" },
          { value: service.warranty.replace(" Warranty", ""), label: "Warranty" },
          { value: "Free", label: "Written Estimate" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
        <section>
          <p className="text-lg leading-relaxed text-charcoal">{city.characterParagraph}</p>
          <p className="mt-4 text-base leading-relaxed text-charcoal">{service.overview}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-ink">Neighborhoods We Serve in {city.name}</h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal">
            We take {service.title.toLowerCase()} projects throughout {city.name}, including:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {city.neighborhoods.map((area) => (
              <span key={area} className="border border-soft-border bg-bone px-3 py-2 text-sm text-ink">
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-ink">
            {service.title} Cost in {city.name}
          </h2>
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

        <div className="mt-10">
          <InlineCta
            title={`Get a Free ${city.name} Estimate`}
            reassurance="Written, in-person, no obligation."
            source={`city-inline-1:${sourceTag}`}
            defaultService={category.slug}
          />
        </div>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-ink">
            {city.name} Considerations Before You Start
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal">
            <p>{city.localConsideration}</p>
            <p>
              Any installer we match you with in {city.name} confirms their license and insurance
              before work starts, and can tell you whether your HOA or city requires approval for
              exterior changes like gutter color or profile. Ask for proof of both before you sign.
            </p>
            {city.historicDistrict && (
              <p>
                Check with the{" "}
                <a
                  href={city.govUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-rust"
                >
                  City of {city.name}
                </a>{" "}
                if you&apos;re not sure whether your property falls inside a historic district
                before changing the gutter profile or color.
              </p>
            )}
          </div>
        </section>

        <section className="mt-12">
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

        <div className="mt-10">
          <InlineCta
            title={`Ready to Get Your ${city.name} Project Scheduled?`}
            source={`city-inline-2:${sourceTag}`}
            defaultService={category.slug}
          />
        </div>

        <section className="mt-12">
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
      </div>

      <section className="border-t border-soft-border bg-bone">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-xs text-rust">Keep Exploring</p>
          <h2 className="font-display mt-2 text-3xl text-ink">Other Services &amp; Nearby Areas</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-[11px] text-charcoal">More in {category.title}</p>
              <ul className="mt-3 space-y-2">
                {otherServicesInCategory.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${category.slug}/${s.slug}/${city.slug}`} className="text-sm text-ink hover:text-rust">
                      {s.title} in {city.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[11px] text-charcoal">Other Services</p>
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
              <p className="eyebrow text-[11px] text-charcoal">{service.title} Nearby</p>
              <ul className="mt-3 space-y-2">
                {nearbyCities.map((nearby) => (
                  <li key={nearby.slug}>
                    <Link
                      href={`/${category.slug}/${service.slug}/${nearby.slug}`}
                      className="text-sm text-ink hover:text-rust"
                    >
                      {service.title} in {nearby.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {pageTestimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-xs text-rust">Reviews</p>
          <h2 className="font-display mt-2 text-3xl text-ink">What Homeowners Say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pageTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-xs text-rust">Questions Answered</p>
        <h2 className="font-display mt-2 text-3xl text-ink">
          {service.title} in {city.name}, Answered
        </h2>
        <FaqAccordion faqs={pageFaqs} />
      </section>

      <CtaBanner source={`city-final:${sourceTag}`} />
    </>
  );
}
