import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustStrip } from "@/components/TrustStrip";
import { CategoryCard } from "@/components/CategoryCard";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PromoBanner } from "@/components/PromoBanner";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import { categories } from "@/content/categories";
import { testimonials } from "@/content/testimonials";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: `${site.name} connects homeowners with licensed, insured local gutter installers across ${site.serviceArea}. Free estimates, no obligation.`,
    url: site.url,
    images: ["/og/home.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    images: ["/og/home.png"],
  },
};

export default function Home() {
  const faqSchema = faqPageSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ImageHero
        eyebrow="Gutter Installation & Repair"
        title="Need Gutters?"
        emphasis="We'll Match You With a Pro."
        paragraph="Installation, seamless gutters, repair, and downspouts. Tell us what you need, and we'll connect you with a licensed, insured local installer instead of a stack of unvetted bids."
        image="/images/hero-gutter-ladder.webp"
        imageAlt="Installer on a ladder working on the gutter of a gray home with stone columns"
        cta={{ label: "Get Free Quote", source: "home-hero" }}
        form={<QuoteForm variant="hero" compact source="home-hero" />}
      />

      <TrustStrip />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="eyebrow text-xs text-accent-dark">Every Gutter Service You Need</p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl text-ink">
          One Request, the Right Installer.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Most homeowners juggle separate bids for gutters, repairs, and drainage. We
          match you with one licensed, insured local installer who covers the whole
          job, so you get one request and one point of contact.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <WhyUsSection />
      <CredibilitySection />
      <ProcessSteps />
      <PromoBanner />

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="eyebrow text-xs text-accent-dark">Customer Reviews</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl text-ink">
            What Homeowners Say.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}

      <ServiceAreaGrid />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <p className="eyebrow text-xs text-accent-dark">Questions Answered</p>
        <h2 className="font-display mt-3 text-4xl text-ink">
          Gutter Questions, Answered.
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      <CtaBanner source="home-final" />
    </>
  );
}
