"use client";

import { useEffect, useRef } from "react";
import { useQuoteModal } from "@/components/QuoteModalProvider";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";

export function QuoteModal() {
  const { isOpen, close, source, defaultService } = useQuoteModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={close}
        className="absolute inset-0 bg-near-black/80"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto border-2 border-strong-border bg-white p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-soft-border text-lg text-ink hover:border-strong-border"
        >
          ×
        </button>

        <p className="eyebrow text-xs text-rust">Free, No-Obligation Quote</p>
        <h2 id="quote-modal-title" className="font-display mt-2 text-3xl text-ink">
          Get Your Free Quote
        </h2>
        <p className="mt-2 text-sm text-charcoal">
          Tell us about your project and {site.name} will reply directly — most homeowners hear
          back the same business day.
        </p>

        <div className="mt-6">
          <QuoteForm variant="modal" defaultService={defaultService} source={source} compact />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-soft-border pt-4 text-[11px] text-charcoal sm:grid-cols-4">
          <span>Licensed &amp; insured</span>
          <span>Free written estimate</span>
          <span>No pressure</span>
          <span>Vetted local pros</span>
        </div>
      </div>
    </div>
  );
}
