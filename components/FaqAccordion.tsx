"use client";

import { useState } from "react";
import type { Faq } from "@/content/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-border border-t border-border">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-display text-base font-medium text-ink sm:text-lg">
                {faq.question}
              </span>
              <span className="text-xl text-accent-dark" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm text-muted">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
