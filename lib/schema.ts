import type { Faq } from "@/content/faqs";
import { site } from "@/content/site";

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function personSchema(author: { name: string; title: string }, url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    ...(url ? { url: `${site.url}${url}` } : {}),
  };
}

// Gutters Kingdom is a hub connecting homeowners with local gutter
// installers, not a single fixed-location business — so there's no
// LocalBusiness/HomeAndConstructionBusiness schema (that type implies a
// physical premises) and no telephone/sameAs (no public phone number or
// social profiles are displayed on the site). No aggregateRating either:
// add it only once real, verifiable reviews exist. Organization schema
// covers site-wide identity; areaServed is the metro area, not a street address.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/og/home.png`,
    email: site.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.serviceArea,
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${site.url}${url}`,
    provider: {
      "@type": "Organization",
      name: site.name,
    },
    areaServed: areaServed ?? site.serviceArea,
  };
}

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    url: `${site.url}${url}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}${url}`,
    },
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl ? { url: `${site.url}${authorUrl}` } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/og/home.png`,
      },
    },
  };
}
