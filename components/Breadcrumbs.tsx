import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({
  items,
  baseUrl,
  dark = false,
}: {
  items: BreadcrumbItem[];
  baseUrl: string;
  dark?: boolean;
}) {
  const schema = breadcrumbSchema(
    items.map((item) => ({ name: item.name, url: `${baseUrl}${item.href}` }))
  );
  const linkColor = dark ? "text-light-text hover:text-yellow-bright" : "text-charcoal hover:text-rust";
  const currentColor = dark ? "text-white" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className="eyebrow text-[11px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className={currentColor}>{item.name}</span>
              ) : (
                <Link href={item.href} className={linkColor}>
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden className={dark ? "text-muted-light-text" : "text-soft-border"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
