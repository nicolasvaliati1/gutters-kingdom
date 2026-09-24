import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";
import { site } from "@/content/site";

export function ImageHero({
  eyebrow,
  title,
  emphasis,
  paragraph,
  image,
  imageAlt,
  breadcrumbs,
  form,
  cta,
  metrics,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  paragraph: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: { name: string; href: string }[];
  form: React.ReactNode;
  cta?: { label: string; source: string };
  metrics?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        {breadcrumbs && (
          <div className="mb-10">
            <Breadcrumbs baseUrl={site.url} items={breadcrumbs} dark />
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-yellow-bright" aria-hidden />
              <p className="eyebrow text-xs text-yellow-bright">{eyebrow}</p>
            </div>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {title}
              {emphasis && (
                <>
                  {" "}
                  <span className="font-serif-italic text-yellow-bright">{emphasis}</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-[580px] text-lg leading-relaxed text-light-text">
              {paragraph}
            </p>

            {cta && (
              <div className="mt-8">
                <QuoteButton source={cta.source} className={quoteButtonVariants.primary}>
                  {cta.label}
                </QuoteButton>
              </div>
            )}

            {metrics && (
              <div className="mt-10 grid max-w-[520px] grid-cols-2 gap-6 border-t border-strong-border pt-6 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-display text-3xl text-yellow-bright">{metric.value}</p>
                    <p className="eyebrow mt-1 text-[11px] text-light-text">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-2 border-yellow bg-white p-7 sm:p-8">{form}</div>
        </div>
      </div>
    </section>
  );
}
