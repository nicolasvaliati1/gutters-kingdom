import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border border-border bg-white p-6">
      <div className="flex gap-1 text-accent" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-display text-sm font-semibold text-ink">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted">{testimonial.location}</p>
        <p className="eyebrow mt-1 text-[10px] text-accent-dark">
          {testimonial.service}
        </p>
      </div>
    </article>
  );
}
