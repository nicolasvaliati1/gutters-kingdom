export function MetricStrip({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) {
  return (
    <div className="border-b-2 border-strong-border bg-bone">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 lg:px-10">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="font-display text-3xl text-ink">{metric.value}</p>
            <p className="eyebrow mt-1 text-[11px] text-charcoal">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
