import Link from "next/link";

export type CrossLink = {
  label: string;
  href: string;
};

export function CrossLinkGrid({
  otherServices,
  nearbyCities,
}: {
  otherServices: CrossLink[];
  nearbyCities: CrossLink[];
}) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2">
      <div>
        <p className="eyebrow text-[11px] text-accent-dark">Other Services Here</p>
        <ul className="mt-3 space-y-2">
          {otherServices.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-ink/80 hover:text-accent-dark">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow text-[11px] text-accent-dark">Nearby Areas</p>
        <ul className="mt-3 space-y-2">
          {nearbyCities.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-ink/80 hover:text-accent-dark">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
