# Gutters Kingdom

Static Next.js 15 (App Router, Tailwind 4, TypeScript) site for gutter installation, seamless gutters, gutter repair, and downspouts. Pages pre-render to static HTML (`output: "export"`); `out/` is the deployable.

Project rules, voice, and SEO requirements live in [CLAUDE.md](CLAUDE.md), [on-page-seo.md](on-page-seo.md), and [references/](references/).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Structure

- `app/` — routes: home, `/services`, `/about`, `/faq`, `/contact`, `/blog`, `/blog/[slug]`, `/[category]`, `/[category]/[service]`, `/[category]/[service]/[city]`
- `content/` — all copy as flat TypeScript (site, categories/services, cities, FAQs, testimonials, blog posts)
- `components/` — shared UI, one component per file
- `brief/` — reference PDFs of the page templates this site was modelled on (a paving-contractor site). Design/structure reference only; not gutter content.
- `scripts/` — `generate-icons.mjs`, `generate-og.mjs`, `fetch-pexels-images.mjs` (category photos from Pexels by photo id; needs `PEXEL_API` in a gitignored `.env`; credits land in `scripts/image-credits.json`)

## Environment

Quote and callback forms post to webhooks configured at build time. See `.env.example`.

## Before launch

- [x] URL, email, and hours in `content/site.ts` are set
- [ ] Revisit prices in `content/categories.ts` once the installer network gives real numbers (current ranges come from competitor pricing, see `references/stats.md`)
- [ ] Set the two form webhook URLs in Vercel environment variables
- [ ] Add real testimonials to `content/testimonials.ts`; add review schema only once reviews are real
- [ ] Add a real logo (the header currently uses a text wordmark)
- [x] `indexable: true` in `content/site.ts` (site is live and indexable)
