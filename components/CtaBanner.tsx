import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";
import { site } from "@/content/site";

export function CtaBanner({
  title = "Free Estimate in 5 Minutes.",
  subhead = "Reply From a Real Person.",
  source = "cta-banner",
}: {
  title?: string;
  subhead?: string;
  source?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-display text-4xl text-white">{title}</h2>
        <p className="font-serif-italic mt-2 text-3xl text-yellow-bright">{subhead}</p>
        <p className="mx-auto mt-5 max-w-xl text-sm text-light-text">
          Tell us about your project and {site.name} will follow up directly —
          no call center, no automated queue.
        </p>
        <div className="mt-8 flex justify-center">
          <QuoteButton source={source} className={quoteButtonVariants.primary}>
            Get Free Quote
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}
