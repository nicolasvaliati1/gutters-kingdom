import { site } from "@/content/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="24" height="24" rx="3" fill="var(--ink)" />
        <path
          d="M4 17.5 5.6 8.5l4.1 3.6L12 6l2.3 6.1 4.1-3.6 1.6 9Z"
          fill="var(--yellow)"
        />
        <rect x="4" y="18.5" width="16" height="1.6" fill="var(--yellow)" />
      </svg>
      <span className="font-display text-2xl leading-none tracking-wide text-ink sm:text-[28px]">
        {site.name.toUpperCase()}
      </span>
    </span>
  );
}
