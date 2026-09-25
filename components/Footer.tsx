import Link from "next/link";
import { site } from "@/content/site";
import { categories } from "@/content/categories";

export function Footer() {
  return (
    <footer className="border-t border-strong-border bg-near-black text-light-text">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-display text-2xl text-white">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-light-text">
            We connect homeowners with licensed, insured local gutter installers across {site.serviceArea}.
            Free quotes, no obligation, and a real person on the other end.
          </p>
          <div className="mt-6 space-y-1 text-sm text-light-text">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-yellow-bright">
                {site.email}
              </a>
            </p>
            <p className="text-muted-light-text">{site.hours[0].days}: {site.hours[0].time}</p>
            <p className="text-muted-light-text">{site.hours[1].days}: {site.hours[1].time}</p>
            <p className="text-muted-light-text">Online requests: 24/7</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-xs text-yellow-bright">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-light-text">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/${category.slug}`} className="hover:text-yellow-bright">
                  {category.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-muted-light-text hover:text-yellow-bright">
                Full Service Directory →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs text-yellow-bright">Popular Services</p>
          <ul className="mt-4 space-y-2 text-sm text-light-text">
            {categories
              .flatMap((category) =>
                category.services.map((service) => ({ category, service }))
              )
              .slice(0, 8)
              .map(({ category, service }) => (
                <li key={service.slug}>
                  <Link href={`/${category.slug}/${service.slug}`} className="hover:text-yellow-bright">
                    {service.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs text-yellow-bright">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-light-text">
            <li>
              <Link href="/" className="hover:text-yellow-bright">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-bright">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-bright">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-yellow-bright">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-bright">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-strong-border px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-muted-light-text sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} — All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/terms" className="hover:text-yellow-bright">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-yellow-bright">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-yellow-bright">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
