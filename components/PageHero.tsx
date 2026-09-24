import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/content/site";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbHref: string;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Breadcrumbs
          baseUrl={site.url}
          items={[
            { name: "Home", href: "/" },
            { name: title, href: breadcrumbHref },
          ]}
        />
        <p className="eyebrow mt-6 text-xs text-accent-dark">{eyebrow}</p>
        <h1 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted">{description}</p>
      </div>
    </section>
  );
}
