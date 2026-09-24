"use client";

import { useEffect, useRef, useState, useId } from "react";
import { useCallbackModal } from "@/components/CallbackModalProvider";
import { categories } from "@/content/categories";
import { site } from "@/content/site";
import { submitToWebhook } from "@/lib/submitForm";

const CALLBACK_WEBHOOK_URL = process.env.NEXT_PUBLIC_CALLBACK_WEBHOOK_URL;

const bestTimeOptions = [
  "As soon as possible",
  "This morning",
  "This afternoon",
  "This evening",
  "Tomorrow morning",
  "Tomorrow afternoon",
];

const urgencyOptions = [
  "Ready to start soon",
  "Within 1-3 months",
  "Within 3-6 months",
  "Just researching",
];

const propertyTypeOptions = [
  "Single-family home",
  "Condo / townhouse",
  "Multi-unit rental",
  "Commercial property",
];

export function CallbackModal() {
  const { isOpen, close } = useCallbackModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const idPrefix = useId();
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
      setSubmitted(false);
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

  const inputClass =
    "w-full border border-soft-border bg-white px-4 py-3 text-sm font-medium text-ink placeholder:text-charcoal/60 focus:border-rust focus:outline-none";

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
        aria-labelledby="callback-modal-title"
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

        <h2 id="callback-modal-title" className="font-display text-3xl leading-tight text-ink">
          We&apos;ll Call You{" "}
          <span className="font-serif-italic text-rust">Back in 5.</span>
        </h2>
        <p className="mt-3 text-sm text-charcoal">
          Tell us about the project. A real {site.name} coordinator — not a bot — calls you back
          within five minutes during business hours. No pitch, no pressure.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink">
          {[
            "5-minute callback from a real person",
            "Free written estimate within 24 hours",
            "Every gutter pro in our network is licensed & insured",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-yellow text-[10px] font-bold text-ink" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {submitted ? (
          <p className="mt-8 border-t border-soft-border pt-6 text-sm text-charcoal">
            Thanks — we&apos;ve got it. Expect a call within 5 minutes during business hours.
          </p>
        ) : (
          <form
            className="mt-6 space-y-5 border-t border-soft-border pt-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setPending(true);
              setError("");
              const result = await submitToWebhook(CALLBACK_WEBHOOK_URL, e.currentTarget, {
                formType: "callback",
              });
              setPending(false);
              if (result.ok) {
                setSubmitted(true);
              } else {
                setError(result.error);
              }
            }}
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor={`${idPrefix}-website`}>Leave this field empty</label>
              <input id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <p className="eyebrow text-[11px] text-rust">Contact</p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor={`${idPrefix}-name`} className="sr-only">Full Name</label>
                  <input id={`${idPrefix}-name`} name="name" type="text" required placeholder="Full Name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor={`${idPrefix}-phone`} className="sr-only">Phone</label>
                  <input id={`${idPrefix}-phone`} name="phone" type="tel" required placeholder="Phone" className={inputClass} />
                </div>
                <div>
                  <label htmlFor={`${idPrefix}-zip`} className="sr-only">ZIP Code</label>
                  <input
                    id={`${idPrefix}-zip`}
                    name="zip"
                    type="text"
                    required
                    inputMode="numeric"
                    pattern="^\d{5}(-\d{4})?$"
                    placeholder="ZIP Code"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${idPrefix}-email`} className="sr-only">Email (optional)</label>
                  <input id={`${idPrefix}-email`} name="email" type="email" placeholder="Email (optional)" className={inputClass} />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-[11px] text-rust">Project</p>
              <div className="mt-3 space-y-3">
                <div>
                  <label htmlFor={`${idPrefix}-service`} className="sr-only">Service Interest</label>
                  <select id={`${idPrefix}-service`} name="service" required defaultValue="" className={`${inputClass} bg-white`}>
                    <option value="" disabled>Service Interest</option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.slug}>{category.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${idPrefix}-time`} className="sr-only">Best Time</label>
                    <select id={`${idPrefix}-time`} name="bestTime" required defaultValue="" className={`${inputClass} bg-white`}>
                      <option value="" disabled>Best Time</option>
                      {bestTimeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${idPrefix}-urgency`} className="sr-only">Urgency</label>
                    <select id={`${idPrefix}-urgency`} name="urgency" required defaultValue="" className={`${inputClass} bg-white`}>
                      <option value="" disabled>Urgency</option>
                      {urgencyOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor={`${idPrefix}-property`} className="sr-only">Property Type (optional)</label>
                  <select id={`${idPrefix}-property`} name="propertyType" defaultValue="" className={`${inputClass} bg-white`}>
                    <option value="">Property Type (optional)</option>
                    {propertyTypeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="eyebrow w-full bg-yellow px-5 py-4 text-xs text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-60"
            >
              {pending ? "Sending…" : "Call Me Back"}
            </button>
            <p className="text-center text-[11px] leading-snug text-charcoal">
              5-min reply · No pressure · No obligation
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
