import Link from "next/link";
import { categories } from "@/content/categories";
import { cities } from "@/content/cities";
import { site } from "@/content/site";

export function ServiceAreaGrid() {
  const flagshipCategory = categories[0];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="eyebrow text-xs text-accent-dark">Areas We Serve</p>
        <h2 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
          Featured Cities
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          We match homeowners with licensed local gutter installers across {site.serviceArea}.
          Here are the areas we&apos;re currently active in.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${flagshipCategory.slug}/${flagshipCategory.services[0].slug}/${city.slug}`}
              className="border-b border-border pb-2 text-sm text-ink/80 hover:text-accent-dark hover:border-accent-dark"
            >
              {city.name}, {city.state}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
