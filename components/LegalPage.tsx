import { PageHero } from "@/components/PageHero";
import { TableOfContents } from "@/components/TableOfContents";
import type { LegalDocument } from "@/content/legal";

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        description={doc.summary}
        breadcrumbHref={`/${doc.slug}`}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-[11px] text-muted">Last updated: {doc.updated}</p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
          {doc.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10">
          <TableOfContents
            items={doc.sections.map((section) => ({ id: section.id, label: section.heading }))}
          />
        </div>

        <div className="mt-12 space-y-12">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-yellow" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
