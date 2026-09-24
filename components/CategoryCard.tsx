import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/content/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="flex h-full flex-col border-2 border-strong-border bg-white">
      <div className="relative h-[200px] w-full">
        <Image
          src={category.thumbImage}
          alt={category.imageAlt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col px-7 pb-7 pt-7">
        <p className="eyebrow text-[11px] text-rust">Category {category.number}</p>
        <h3 className="font-display mt-2 text-2xl text-ink">{category.title}</h3>
        <p className="mt-2 text-sm text-charcoal">{category.heroParagraph}</p>
        <ul className="mt-4 space-y-1.5">
          {category.services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${category.slug}/${service.slug}`}
                className="flex items-center gap-2 text-sm text-ink hover:text-rust"
              >
                <span className="text-yellow" aria-hidden>
                  ›
                </span>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/${category.slug}`}
          className="eyebrow mt-6 inline-flex items-center gap-1 text-[11px] text-ink hover:text-rust"
        >
          Explore {category.title} →
        </Link>
      </div>
    </article>
  );
}
