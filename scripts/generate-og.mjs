// Generates the static branded OG images for core/hub pages. Service and
// city-service pages use real project photos instead (set directly in
// their generateMetadata), so they don't need a card generated here.
// Run with `npx tsx scripts/generate-og.mjs` after changing brand copy,
// colors, or categories.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { site } from "../content/site.ts";
import { categories } from "../content/categories.ts";
import { blogPosts } from "../content/blogPosts.ts";

const WIDTH = 1200;
const HEIGHT = 630;
const NAVY = "#0f2a52";
const NAVY_DEEP = "#061630";
const RED = "#f2b62a";
const RED_BRIGHT = "#f7c948";
const WHITE = "#ffffff";

const corePages = [
  { file: "home.png", eyebrow: site.tagline, title: site.name },
  { file: "blog.png", eyebrow: site.name, title: "Blog" },
  { file: "services.png", eyebrow: site.name, title: "Gutter Services" },
  { file: "about.png", eyebrow: site.name, title: "About" },
  { file: "faq.png", eyebrow: site.name, title: "Frequently Asked Questions" },
  { file: "contact.png", eyebrow: site.name, title: "Contact" },
  { file: "terms.png", eyebrow: site.name, title: "Terms of Service" },
  { file: "privacy.png", eyebrow: site.name, title: "Privacy Policy" },
  { file: "accessibility.png", eyebrow: site.name, title: "Accessibility Statement" },
];

const categoryPages = categories.map((category) => ({
  file: `category-${category.slug}.png`,
  eyebrow: `${site.name} — ${category.services.length} Services`,
  title: category.title,
}));

const blogPages = blogPosts.map((post) => ({
  file: `blog-${post.slug}.png`,
  eyebrow: `${post.category} · ${site.name}`,
  title: post.title,
}));

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function wrapLines(title, maxCharsPerLine, maxLines) {
  const words = title.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const truncated = lines.slice(0, maxLines);
    truncated[maxLines - 1] = `${truncated[maxLines - 1].replace(/\s*\S*$/, "")}…`;
    return truncated;
  }
  return lines;
}

function svgFor({ eyebrow, title }) {
  const safeEyebrow = escapeXml(eyebrow.toUpperCase());
  const fontSize = title.length > 26 ? 64 : 92;
  const lineHeight = fontSize * 1.08;
  const maxCharsPerLine = Math.floor(700 / (fontSize * 0.46));
  const lines = wrapLines(title, maxCharsPerLine, fontSize === 64 ? 3 : 2);
  const startY = 360 - ((lines.length - 1) * lineHeight) / 2;
  const titleLines = lines
    .map(
      (line, index) =>
        `<text x="90" y="${startY + index * lineHeight}" font-family="'Arial Narrow', Arial, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="1" fill="${WHITE}">${escapeXml(line)}</text>`
    )
    .join("\n    ");
  const ruleY = startY + (lines.length - 1) * lineHeight + 40;

  return `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${NAVY_DEEP}" />
    <rect x="0" y="0" width="${WIDTH}" height="12" fill="${RED}" />
    <rect x="0" y="${HEIGHT - 12}" width="${WIDTH}" height="12" fill="${NAVY}" />
    <text x="90" y="270" font-family="Arial, sans-serif" font-size="30" letter-spacing="5" font-weight="700" fill="${RED_BRIGHT}">${safeEyebrow}</text>
    ${titleLines}
    <rect x="90" y="${ruleY}" width="140" height="5" fill="${RED}" />
  </svg>`;
}

async function main() {
  const outDir = path.join(process.cwd(), "public", "og");
  await mkdir(outDir, { recursive: true });

  for (const page of [...corePages, ...categoryPages, ...blogPages]) {
    const svg = svgFor(page);
    const logo = await sharp(path.join(process.cwd(), "public", "brand", "logo.png"))
      .resize({ height: 300 })
      .toBuffer();
    const buffer = await sharp(Buffer.from(svg))
      .composite([{ input: logo, left: WIDTH - 300 - 80, top: 165 }])
      .png()
      .toBuffer();
    await writeFile(path.join(outDir, page.file), buffer);
    console.log(`generated public/og/${page.file}`);
  }
}

main();
