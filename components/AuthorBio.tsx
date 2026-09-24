import Link from "next/link";
import { site } from "@/content/site";

export function AuthorBio() {
  return (
    <div className="mt-12 flex flex-col gap-4 border border-border bg-cream p-6 sm:flex-row sm:items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-display text-lg font-semibold text-accent">
        {site.shortName.charAt(0)}
      </div>
      <div>
        <p className="eyebrow text-[11px] text-accent-dark">Written By</p>
        <Link
          href="/about"
          className="font-display mt-1 block text-base font-semibold text-ink hover:text-accent-dark"
        >
          {site.author.name}
        </Link>
        <p className="text-xs text-muted">{site.author.title}</p>
        <p className="mt-3 max-w-xl text-sm text-muted">{site.author.bio}</p>
      </div>
    </div>
  );
}
