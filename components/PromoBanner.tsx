import Link from "next/link";
import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";

export function PromoBanner() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl">
          Book Your Gutter Job Before Storm Season Peaks.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-light-text">
          Installs and repairs fill up ahead of hurricane season and again after
          major storms. Get a free estimate now to get on the calendar before
          the rush.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <QuoteButton source="promo-banner" className={quoteButtonVariants.primary}>
            Get Free Quote
          </QuoteButton>
          <Link
            href="/services"
            className="eyebrow inline-flex items-center border-2 border-white/30 px-6 py-4 text-xs text-white transition-colors hover:border-yellow-bright hover:text-yellow-bright"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
