"use client";

import { useQuoteModal } from "@/components/QuoteModalProvider";

type QuoteButtonProps = {
  children: React.ReactNode;
  source?: string;
  defaultService?: string;
  className?: string;
};

const base = "eyebrow inline-flex items-center justify-center border-2 px-6 py-4 text-xs transition-colors";

// Exported as a plain constant, not a static property on QuoteButton: a
// "use client" component becomes a server-side reference object when
// imported into server components, and static properties attached at
// module scope don't survive that boundary.
export const quoteButtonVariants = {
  primary: `${base} border-strong-border bg-yellow text-ink hover:bg-yellow-dark`,
  dark: `${base} border-strong-border bg-ink text-white hover:bg-yellow hover:border-yellow hover:text-ink`,
  outline: `${base} border-strong-border bg-transparent text-ink hover:bg-ink hover:text-white`,
};

export function QuoteButton({
  children,
  source = "",
  defaultService = "",
  className = quoteButtonVariants.primary,
}: QuoteButtonProps) {
  const { open } = useQuoteModal();

  return (
    <button type="button" onClick={() => open({ source, defaultService })} className={className}>
      {children}
    </button>
  );
}
