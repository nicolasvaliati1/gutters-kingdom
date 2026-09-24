# On-Page SEO Checklist

Read this file before generating or editing any blog post or service page. Every item applicable to the page type must be satisfied. This checklist works alongside `references/voice.md` — SEO structure never overrides voice; it's implemented within it.

---

## 1. Head & Metadata — what Google indexes first

- Title tag — ~50-60 chars, primary keyword near the start.
- Meta description — ~150-160 chars, keyword + benefit = a CTA.
- Canonical URL set to prevent duplicates.
- Open Graph — `og:title`, `og:description`, `og:image` (1200x630), `og:url`.
- Twitter Card — `summary_large_image`, title, description, image.
- Language attribute on `<html>` (e.g., `lang="en"`).
- Viewport meta tag for responsive rendering.
- Favicon — apple-touch-icon.
- Charset meta — `<meta charset="utf-8">`.

## 2. URL Structure — clean, readable, keyword-forward

- Short slug — under 60 chars.
- Primary keyword in the slug.
- Hyphens only — never underscores.
- Lowercase only.
- No stop words — "and", "or", "the" removed unless essential.
- Logical hierarchy — `/services/plumbing` not `/service-plumbing`.

## 3. Headings — structure for skimmers & bots

- Exactly one H1 per page, contains primary keyword.
- Logical H2 → H3 hierarchy — never skip levels.
- H2s use supporting keywords + questions from the PAA block.
- No keyword stuffing — write naturally.

## 4. Copy & Body — answer the query, fast

- Primary keyword in the first 100 words.
- Direct answer to the query in the first paragraph.
- Length matches SERP average (within 20% of top 3).
- Short paragraphs (2-4 sentences).
- Readability ~8th-10th grade level.
- Active voice preferred.
- Bold key phrases — sparingly.
- Bullets & numbered lists where appropriate.

## 5. FAQ Section — every blog post

- 4-6 questions from SERP competitor sites, or "People Also Ask".
- Direct answers — 2-4 sentences each.
- FAQ schema (JSON-LD) applied.

## 6. Images — every image is a ranking signal

- Alt text describes image + keyword where natural.
- Filenames — descriptive, hyphens, e.g., `leaky-pipe-repair.jpg`.
- WebP, compressed under 200 KB.
- Width/height attributes specified — prevents CLS.
- Lazy loading (`loading="lazy"`) for below fold.
- Responsive `srcset` where needed.
- Featured/hero image for social sharing.

## 7. Internal Links — pass authority across the site

- 3-5 internal links per post.
- Link to related blog posts & relevant service pages.
- Descriptive anchor text — never "click here" or "read more".
- Contextually placed in body copy.
- Breadcrumbs on every page.

## 8. External Links — cite authority, don't hoard it

- 2-3 external links to authoritative sources (.gov, .edu, major industry).
- Relevant to the topic.
- Open in new tab with `rel="noopener"`.
- `rel="nofollow"` for sponsored links.

## 9. Schema Markup — JSON-LD in `<head>`

- Article schema on blog posts.
- LocalBusiness schema — NAP (Name/Address/Phone), Social Links.
- Service schema on service pages.
- FAQ schema wherever FAQ section exists.
- BreadcrumbList schema on every page.
- Organization schema site-wide.
- Author/Person schema on bylines.

## 10. E-E-A-T — Experience, Expertise, Authority, Trust

- Author byline with full name on every blog post.
- Author bio with credentials (years, qualifications).
- Link to author's dedicated page.
- Published date displayed.
- "Last updated" date when refreshed.
- Real stories, numbers, opinions from the local service area.
- Cite authoritative sources.
- About page with full company credentials.
- Contact page — real address, phone, hours.

## 11. Accessibility — a11y signals = SEO signals

- Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- ARIA labels on interactive elements where needed.
- Color contrast meets WCAG AA (4.5:1 body text).
- Focus indicators visible on interactive elements.
- Alt text on all images (empty `alt=""` for decorative).
- Descriptive link text.
- Skip-to-content link for keyboard users.

## 12. Mobile & Responsive — mobile-first indexing

- Responsive layout (fails on flat data tables).
- Touch targets minimum 44x44 px.
- Body font minimum 16 px.
- No horizontal scroll at any viewport.
- No intrusive interstitials.

## 13. Social Preview — shareable card

- OG image optimized — 1200x630, under 1 MB.
- Twitter Card image — 1200x600.
- Compelling `og:description` — different from meta description.

## 14. Conversion Elements — service pages only

- Primary CTA above the fold.
- Phone number with click-to-call (`tel:`).
- Multiple CTA placements throughout the page.
- Trust signals — reviews, ratings, badges, press.
- Testimonials with names (photos where possible).
- Service-area coverage listed.
- Business hours displayed.
- Physical address with embedded map.

## 15. Long-Form Content — 1500+ word posts

- Table of contents with anchor links at the top.
- Jump links for each H2.
- Back-to-top button.
