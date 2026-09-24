import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";

export function InlineCta({
  title,
  reassurance,
  source,
  defaultService,
}: {
  title: string;
  reassurance?: string;
  source: string;
  defaultService?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 border-2 border-strong-border bg-bone px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-xl text-ink">{title}</p>
        {reassurance && <p className="mt-1 text-sm text-charcoal">{reassurance}</p>}
      </div>
      <QuoteButton source={source} defaultService={defaultService} className={quoteButtonVariants.primary}>
        Get Free Quote
      </QuoteButton>
    </div>
  );
}
