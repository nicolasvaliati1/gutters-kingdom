import { site } from "@/content/site";

const badges = [
  "Licensed & Insured Network",
  `Serving ${site.serviceArea}`,
  "Free Estimates",
  "Written Warranty",
];

export function TrustStrip() {
  return (
    <div className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 lg:px-10">
        {badges.map((badge) => (
          <span key={badge} className="eyebrow text-[11px] text-ink/70">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
