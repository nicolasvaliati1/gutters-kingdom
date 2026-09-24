// Builds the logo and favicon assets:
//   public/brand/logo-source.png    -> brand/logo.png + brand/logo.webp (banner logo, used in structured data and OG cards)
//   public/brand/favicon-source.png -> icon.png (512), favicon-32.png, apple-touch-icon.png (180)
// Rerun with `node scripts/generate-icons.mjs` after replacing either source.
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const src = await readFile(path.join(root, "public", "brand", "logo-source.png"));
const trimmed = await sharp(src).trim({ threshold: 5 }).png().toBuffer();
const meta = await sharp(trimmed).metadata();
console.log(`trimmed logo: ${meta.width}x${meta.height}`);

await writeFile(path.join(root, "public", "brand", "logo.png"), trimmed);

const headerHeight = 240;
const webp = await sharp(trimmed).resize({ height: headerHeight }).webp({ quality: 88, alphaQuality: 100, effort: 6 }).toBuffer();
await writeFile(path.join(root, "public", "brand", "logo.webp"), webp);
console.log(`brand/logo.webp: ${(webp.length / 1024).toFixed(0)} KB`);

const faviconSrc = await readFile(path.join(root, "public", "brand", "favicon-source.png"));
const favicon = await sharp(faviconSrc).trim({ threshold: 5 }).png().toBuffer();
const fmeta = await sharp(favicon).metadata();
console.log(`trimmed favicon: ${fmeta.width}x${fmeta.height}`);

async function square(size, background) {
  const inner = await sharp(favicon).resize({ width: size, height: size, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background } }).composite([{ input: inner }]).png().toBuffer();
}

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
await writeFile(path.join(root, "public", "icon.png"), await square(512, clear));
await writeFile(path.join(root, "public", "favicon-32.png"), await square(32, clear));
await writeFile(path.join(root, "public", "apple-touch-icon.png"), await square(180, "#0f2a52"));
console.log("icons written");
