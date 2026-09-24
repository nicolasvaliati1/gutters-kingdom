import Image from "next/image";
import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";

const badges = ["Licensed Contractor", "Fully Insured", "Background-Checked Crews", "Written Warranty"];

const facts = [
  { value: "1–2", label: "Days Typical Install" },
  { value: "24 In.", label: "Max Hanger Spacing" },
  { value: "Free", label: "Written Estimate" },
];

export function CredibilitySection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative h-80 w-full lg:h-[26rem]">
          <Image
            src="/images/gutter-installer-ladder-brick.webp"
            alt="Installer on a ladder fitting a white gutter along the roofline of a brick house"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <p className="eyebrow text-xs text-accent-dark">Why It Holds Up</p>
          <h2 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
            Built On the Hangers, Not Shortcuts.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted">
            Most gutter failures start at the hangers and the downspout outlets,
            not the gutter itself. Every project is measured, pitched about a
            quarter inch per ten feet, hung on hidden hangers, and water-tested
            before the crew leaves.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-2xl font-semibold text-ink">{fact.value}</p>
                <p className="eyebrow mt-1 text-[11px] text-muted">{fact.label}</p>
              </div>
            ))}
          </div>

          <QuoteButton source="credibility-section" className={quoteButtonVariants.dark}>
            Get Free Quote
          </QuoteButton>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {badges.map((badge) => (
              <span key={badge} className="eyebrow text-[11px] text-ink/70">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
