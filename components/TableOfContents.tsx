export type TocItem = {
  id: string;
  label: string;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="Table of contents" className="border border-border bg-cream p-6">
      <p className="eyebrow text-[11px] text-accent-dark">On This Page</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-ink/80 hover:text-accent-dark">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
