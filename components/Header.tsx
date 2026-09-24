"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { Logo } from "@/components/Logo";
import { categories } from "@/content/categories";
import { QuoteButton, quoteButtonVariants } from "@/components/QuoteButton";

const beforeServices = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const afterServices = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function closeAll() {
    setMobileOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-near-black px-6 py-3 text-center lg:px-10">
        <p className="eyebrow text-[11px] text-light-text">
          Licensed &amp; Insured — Free Written Estimates Across {site.serviceArea}
        </p>
      </div>

      <div className="border-b border-strong-border bg-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:h-[88px] lg:px-10">
          <Link href="/" className="flex items-center" onClick={closeAll}>
            <Logo />
            <span className="sr-only">{`${site.name} — ${site.tagline}`}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {beforeServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-xs text-ink transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="eyebrow flex items-center gap-1 text-xs text-ink transition-colors hover:text-rust"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <span aria-hidden>{servicesOpen ? "▲" : "▼"}</span>
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full max-h-[80vh] w-[760px] -translate-x-1/2 overflow-y-auto border-2 border-strong-border bg-white shadow-xl">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-6">
                    {categories.map((category) => (
                      <div key={category.slug}>
                        <Link
                          href={`/${category.slug}`}
                          className="eyebrow block text-[11px] text-rust hover:underline"
                          onClick={closeAll}
                        >
                          {category.shortTitle}
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {category.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/${category.slug}/${service.slug}`}
                                className="text-xs text-charcoal hover:text-ink"
                                onClick={closeAll}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-strong-border bg-bone px-6 py-4">
                    <Link
                      href="/services"
                      className="eyebrow text-[11px] text-ink hover:text-rust"
                      onClick={closeAll}
                    >
                      View Full Directory →
                    </Link>
                    <QuoteButton source="header-mega-menu" className={quoteButtonVariants.primary}>
                      Get Free Quote
                    </QuoteButton>
                  </div>
                </div>
              )}
            </div>

            {afterServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-xs text-ink transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <QuoteButton source="header" className={quoteButtonVariants.primary}>
              Get Free Quote
            </QuoteButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-2 border-strong-border lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-b-2 border-strong-border bg-white px-6 py-5 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-5">
            {beforeServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-xs text-ink"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <p className="eyebrow text-[11px] text-rust">Services</p>
              <div className="mt-3 space-y-4">
                {categories.map((category) => (
                  <div key={category.slug}>
                    <Link
                      href={`/${category.slug}`}
                      className="text-sm font-semibold text-ink"
                      onClick={closeAll}
                    >
                      {category.title}
                    </Link>
                    <ul className="mt-2 space-y-1.5 pl-3">
                      {category.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/${category.slug}/${service.slug}`}
                            className="text-xs text-charcoal"
                            onClick={closeAll}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {afterServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-xs text-ink"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}

            <QuoteButton source="mobile-nav" className={`${quoteButtonVariants.primary} justify-center`}>
              Get Free Quote
            </QuoteButton>
          </div>
        </nav>
      )}
    </header>
  );
}
