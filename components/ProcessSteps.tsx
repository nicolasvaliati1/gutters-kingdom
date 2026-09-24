const defaultSteps = [
  {
    title: "Free Assessment",
    description: "We walk the roofline, measure every run, and check the fascia before quoting.",
  },
  {
    title: "Size & Material Plan",
    description: "Gutter size, gauge, downspout count, and color locked in before a written quote goes out.",
  },
  {
    title: "Form & Hang",
    description: "Seamless runs formed on site, hung on hidden hangers, and pitched toward the downspouts.",
  },
  {
    title: "Test & Final Walkthrough",
    description: "Water run through every gutter to check flow, then we walk the job with you before calling it done.",
  },
];

export function ProcessSteps({
  eyebrow = "How We Work",
  title = "Free Quote to Final Walkthrough.",
  steps = defaultSteps,
}: {
  eyebrow?: string;
  title?: string;
  steps?: { title: string; description: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <p className="eyebrow text-xs text-accent-dark">{eyebrow}</p>
      <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium text-ink sm:text-4xl">
        {title}
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title}>
            <p className="font-display text-4xl font-medium text-charcoal/60" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-3 text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
