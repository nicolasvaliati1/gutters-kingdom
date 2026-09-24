"use client";

import { useId, useState } from "react";
import { categories } from "@/content/categories";
import { submitToWebhook } from "@/lib/submitForm";

const QUOTE_WEBHOOK_URL = process.env.NEXT_PUBLIC_QUOTE_WEBHOOK_URL;

const budgetOptions = ["Under $3,000", "$3,000–$7,500", "$7,500–$15,000", "$15,000+"];
const timelineOptions = ["As soon as possible", "Within a month", "1–3 months", "Just researching"];

export type QuoteFormVariant = "hero" | "sidebar" | "modal";

export function QuoteForm({
  variant = "hero",
  defaultService = "",
  source = "",
  compact = false,
}: {
  variant?: QuoteFormVariant;
  defaultService?: string;
  source?: string;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const idPrefix = useId();
  const showBudgetTimeline = variant === "hero" && !compact;
  const showDescription = variant === "modal";

  const inputClass =
    "w-full border border-soft-border bg-white px-4 py-3 text-sm font-medium text-ink placeholder:text-charcoal/60 focus:border-rust focus:outline-none";

  return (
    <div className={compact ? "" : "bg-white p-6 shadow-xl sm:p-8"}>
      {!compact && (
        <>
          <p className="eyebrow text-xs text-rust">Free Quote in 5 Minutes</p>
          <h2 className="font-display mt-2 text-2xl text-ink">Reply From a Real Person</h2>
        </>
      )}

      {submitted ? (
        <p className="mt-6 text-sm text-charcoal">
          Thanks — your request is in. We reply directly, usually the same business day.
        </p>
      ) : (
        <form
          className={compact ? "mt-4 space-y-3" : "mt-6 space-y-4"}
          onSubmit={async (e) => {
            e.preventDefault();
            setPending(true);
            setError("");
            const result = await submitToWebhook(QUOTE_WEBHOOK_URL, e.currentTarget, {
              formType: "quote",
              variant,
            });
            setPending(false);
            if (result.ok) {
              setSubmitted(true);
            } else {
              setError(result.error);
            }
          }}
        >
          {/* Honeypot — hidden from sighted and AT users, out of tab order */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor={`${idPrefix}-website`}>Leave this field empty</label>
            <input id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <input type="hidden" name="source" value={source} />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${idPrefix}-name`} className="sr-only">
                Full Name
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-phone`} className="sr-only">
                Phone Number
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-zip`} className="sr-only">
                ZIP Code
              </label>
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
              <label htmlFor={`${idPrefix}-email`} className="sr-only">
                Email (optional)
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                placeholder="Email (optional)"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${idPrefix}-service`} className="sr-only">
              Service
            </label>
            <select
              id={`${idPrefix}-service`}
              name="service"
              required
              defaultValue={defaultService}
              className={`${inputClass} bg-white`}
            >
              <option value="" disabled>
                Select a Service
              </option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {showBudgetTimeline && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={`${idPrefix}-budget`} className="sr-only">
                  Budget (optional)
                </label>
                <select id={`${idPrefix}-budget`} name="budget" defaultValue="" className={`${inputClass} bg-white`}>
                  <option value="">Budget (optional)</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`${idPrefix}-timeline`} className="sr-only">
                  Timeline (optional)
                </label>
                <select id={`${idPrefix}-timeline`} name="timeline" defaultValue="" className={`${inputClass} bg-white`}>
                  <option value="">Timeline (optional)</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {showDescription && (
            <div>
              <label htmlFor={`${idPrefix}-description`} className="sr-only">
                Tell us about your project
              </label>
              <textarea
                id={`${idPrefix}-description`}
                name="description"
                rows={4}
                placeholder="Tell us about your project (optional)"
                className={`${inputClass} min-h-[100px] resize-y`}
              />
            </div>
          )}

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
            {pending ? "Sending…" : "Get My Free Quote"}
          </button>

          <p className="text-center text-[11px] leading-snug text-charcoal">
            No obligation. We reply directly — no call center, no automated queue.
          </p>
        </form>
      )}
    </div>
  );
}
