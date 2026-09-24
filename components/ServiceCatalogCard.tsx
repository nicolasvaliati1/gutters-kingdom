import Link from "next/link";
import type { Category, Service } from "@/content/categories";

export function ServiceCatalogCard({
  category,
  service,
}: {
  category: Category;
  service: Service;
}) {
  return (
    <Link
      href={`/${category.slug}/${service.slug}`}
      className="block border-2 border-strong-border bg-white p-5 transition-colors hover:border-rust"
    >
      <h3 className="font-display text-lg text-ink">{service.title}</h3>
      <p className="mt-2 text-sm text-charcoal">{service.summary}</p>
      <span className="eyebrow mt-3 inline-flex items-center gap-1 text-[11px] text-rust">
        Learn More →
      </span>
    </Link>
  );
}
