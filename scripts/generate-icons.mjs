// Generates public/apple-touch-icon.png and public/icon.png from brand
// colors/initial. One-off asset — rerun only if the brand mark or accent
// color changes. Run with `node scripts/generate-icons.mjs`.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { site } from "../content/site.ts";

const INK = "#0f2a52";
const ACCENT = "#f2b62a";
const initial = site.shortName.trim().charAt(0).toUpperCase();

function svgFor(size) {
  const fontSize = Math.round(size * 0.52);
  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="${INK}" />
    <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-size="${fontSize}" fill="${ACCENT}">${initial}</text>
  </svg>`;
}

async function main() {
  const outDir = path.join(process.cwd(), "public");

  const appleTouch = await sharp(Buffer.from(svgFor(180))).png().toBuffer();
  await writeFile(path.join(outDir, "apple-touch-icon.png"), appleTouch);
  console.log("generated public/apple-touch-icon.png");

  const icon = await sharp(Buffer.from(svgFor(512))).png().toBuffer();
  await writeFile(path.join(outDir, "icon.png"), icon);
  console.log("generated public/icon.png");
}

main();
