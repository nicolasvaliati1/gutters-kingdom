// Minimal inline markdown for blog body copy: **bold** and [text](url).
// Lets content in content/blogPosts.ts read as plain sentences while still
// producing real <strong> tags and contextual in-copy links (internal +
// external, with correct rel attributes) instead of a stack of <b>/<a> JSX
// authored by hand for every paragraph.
import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isExternal = href.startsWith("http");
          if (isExternal) {
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-accent-dark/40 underline-offset-2 hover:text-accent-dark"
              >
                {label}
              </a>
            );
          }
          return (
            <Link
              key={index}
              href={href}
              className="underline decoration-accent-dark/40 underline-offset-2 hover:text-accent-dark"
            >
              {label}
            </Link>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
