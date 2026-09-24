// Builds every logo asset from the single source file
// public/brand/logo-source.png (transparent PNG):
//   public/brand/logo.webp      header/footer logo, trimmed
//   public/brand/logo.png       full-size trimmed PNG for structured data
//   public/icon.png             512px square favicon, transparent
//   public/favicon-32.png       32px favicon
//   public/apple-touch-icon.png 180px, cream background (iOS fills transparency)
// Rerun with `node scripts/generate-icons.mjs` after replacing the source.
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

async function square(size, { pad, background }) {
  const inner = size - pad * 2;
  const logo = await sharp(trimmed).resize({ width: inner, height: inner, fit: "inside" }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
await writeFile(path.join(root, "public", "icon.png"), await square(512, { pad: 24, background: clear }));
await writeFile(path.join(root, "public", "favicon-32.png"), await square(32, { pad: 1, background: clear }));
await writeFile(path.join(root, "public", "apple-touch-icon.png"), await square(180, { pad: 14, background: "#f3efe6" }));
console.log("icons written");
