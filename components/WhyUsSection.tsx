const reasons = [
  {
    title: "One Crew, Start to Finish.",
    description:
      "Measuring, forming, hanging, and downspouts handled by one team, instead of you coordinating a gutter installer, a fascia carpenter, and a drainage contractor.",
  },
  {
    title: "Seamless, Formed On Site.",
    description:
      "Gutters are formed from a coil to the exact length of each run, so seams sit only at corners and outlets, not every ten feet.",
  },
  {
    title: "Clean Job Site, Every Day.",
    description:
      "Old sections, cut-offs, and fasteners hauled away before we leave, every day of the project and not just the last one.",
  },
];

export function WhyUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <p className="eyebrow text-xs text-accent-dark">Why Homeowners Choose Us</p>
      <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium text-ink sm:text-4xl">
        Built for homeowners who don&apos;t want to manage three contractors.
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason.title} className="border-t border-accent pt-6">
            <h3 className="font-display text-xl font-semibold text-ink">
              {reason.title}
            </h3>
            <p className="mt-3 text-sm text-muted">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
