import type { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { MetricStrip } from "@/components/MetricStrip";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBanner } from "@/components/CtaBanner";
import { CallbackTrigger } from "@/components/CallbackTrigger";
import { categories } from "@/content/categories";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} — free written estimates, a callback within 5 minutes, and email support across ${site.serviceArea}.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${site.name}`,
    description: `Get in touch with ${site.name} — free written estimates, a callback within 5 minutes, and email support across ${site.serviceArea}.`,
    url: `${site.url}/contact`,
    images: ["/og/contact.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${site.name}`,
    images: ["/og/contact.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ImageHero
        eyebrow="Get in Touch"
        title="Contact"
        emphasis={site.name}
        paragraph="Tell us about your project and we'll follow up directly — no call center, no automated queue, no obligation."
        image="/images/hero-gutter-ladder.webp"
        imageAlt="Installer on a ladder working on the gutter of a gray home with stone columns"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        form={<QuoteForm variant="hero" compact source="contact-hero" />}
      />

      <MetricStrip
        metrics={[
          { value: "Free", label: "Written Estimate" },
          { value: "Same Day", label: "Quote Reply" },
          { value: "1–2", label: "Days Typical Install" },
          { value: "5 Min", label: "Callback Window" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="border-2 border-strong-border bg-white p-6">
            <h2 className="font-display text-xl text-ink">Request a Quote</h2>
            <p className="mt-2 text-sm text-charcoal">
              The fastest way to get a number — fill out the form and we reply the same business
              day.
            </p>
            <a href="#quote-form" className="eyebrow mt-4 inline-block text-[11px] text-rust hover:underline">
              Start Your Quote
            </a>
          </div>

          <div className="border-2 border-strong-border bg-white p-6">
            <h2 className="font-display text-xl text-ink">Call Me Back</h2>
            <p className="mt-2 text-sm text-charcoal">
              Prefer to talk it through? Request a callback and a real person calls you within 5
              minutes during business hours.
            </p>
            <CallbackTrigger className="eyebrow mt-4 inline-block text-[11px] text-rust hover:underline">
              Request a Callback
            </CallbackTrigger>
          </div>

          <div className="border-2 border-strong-border bg-white p-6">
            <h2 className="font-display text-xl text-ink">Email</h2>
            <p className="mt-2 text-sm text-charcoal">
              For questions before you&apos;re ready to request a quote, or to follow up on an
              existing project.
            </p>
            <a href={`mailto:${site.email}`} className="eyebrow mt-4 inline-block text-[11px] text-rust hover:underline">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-soft-border bg-bone">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <h2 className="font-display text-3xl text-ink">Hours</h2>
          <ul className="mt-4 max-w-xs space-y-1 text-sm text-charcoal">
            {site.hours.map((entry) => (
              <li key={entry.days} className="flex justify-between gap-6">
                <span>{entry.days}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quote-form" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          <article className="space-y-8 text-base leading-relaxed text-charcoal">
            <div>
              <h2 className="font-display text-3xl text-ink">What Happens After You Submit</h2>
              <p className="mt-3">
                We reply directly — usually the same business day — to confirm scope and connect
                you with a licensed local gutter installer for a free written estimate. There&apos;s no
                call center and no automated queue.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">How We Route Your Request</h2>
              <p className="mt-3">
                Installation, seamless, repair, and downspout requests all go to the same team, but
                we scope each differently before matching you with an installer:
              </p>
              <ul className="mt-3 space-y-2">
                {categories.map((category) => (
                  <li key={category.slug} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-yellow" aria-hidden />
                    <span>
                      <strong>{category.title}:</strong> {category.heroParagraph}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Multi-Service Projects</h2>
              <p className="mt-3">
                If your project spans more than one category, such as new gutters plus gutter
                guards, mention both in the form. One estimate covers the whole scope rather than
                requiring separate requests.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Service Coverage</h2>
              <p className="mt-3">
                We match homeowners with licensed local gutter installers across {site.serviceArea}.
                Tell us your ZIP code in the form and we&apos;ll confirm coverage in your area.
              </p>
            </div>
          </article>

          <div className="lg:sticky lg:top-[100px] lg:h-fit">
            <QuoteForm variant="sidebar" source="contact-sidebar" />
          </div>
        </div>
      </section>

      <CtaBanner source="contact-final" />
    </>
  );
}
