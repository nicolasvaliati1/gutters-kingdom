import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { InlineCta } from "@/components/InlineCta";
import { CtaBanner } from "@/components/CtaBanner";
import { generalFaqGroups, allGeneralFaqs } from "@/content/generalFaqs";
import { site } from "@/content/site";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common questions about pricing, scheduling, warranty, and how ${site.name} runs a gutter project.`,
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: `FAQ | ${site.name}`,
    description: `Answers to common questions about pricing, scheduling, warranty, and how ${site.name} runs a gutter project.`,
    url: `${site.url}/faq`,
    images: ["/og/faq.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ | ${site.name}`,
    images: ["/og/faq.png"],
  },
};

export default function FaqPage() {
  const faqSchema = faqPageSchema(allGeneralFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ImageHero
        eyebrow="Questions Answered"
        title="Frequently Asked"
        emphasis="Questions"
        paragraph="Straight answers about pricing, scheduling, and how a project actually runs — before you request a quote."
        image="/images/seamless-gutter-downspout-tile-roof.webp"
        imageAlt="Close-up of a dark seamless gutter and downspout under a terracotta tile roof"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
        form={<QuoteForm variant="hero" compact source="faq-hero" />}
      />

      <div className="mx-auto max-w-3xl space-y-14 px-6 py-16 lg:px-10">
        {generalFaqGroups.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-3xl text-ink">{group.heading}</h2>
            <div className="mt-6 space-y-8">
              {group.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-soft-border pb-6">
                  <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <InlineCta
          title="Still Have a Question?"
          reassurance="Ask us directly — we reply the same business day, no automated queue."
          source="faq-inline"
        />
      </div>

      <CtaBanner source="faq-final" />
    </>
  );
}
