// One-off asset sourcing: downloads the chosen Pexels photos, crops and
// compresses each to WebP under 200 KB (on-page-seo.md section 6), and
// writes photographer credits to scripts/image-credits.json.
//
// Needs PEXEL_API in .env (gitignored). Run with:
//   node scripts/fetch-pexels-images.mjs
//
// To swap a photo: change its Pexels id below and rerun.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const key = readFileSync(path.join(process.cwd(), ".env"), "utf8").match(/PEXEL_API=(.+)/)?.[1]?.trim();
if (!key) throw new Error("PEXEL_API missing from .env");

const HERO = [1600, 900];
const THUMB = [640, 480];

// { file, id, size }
const jobs = [
  { file: "category-specialty-gutters-hero.webp", id: 36393720, size: HERO },
  { file: "category-specialty-gutters-thumb.webp", id: 36608489, size: THUMB },
  { file: "category-seamless-gutters-hero.webp", id: 39634958, size: HERO },
  { file: "category-seamless-gutters-thumb.webp", id: 32546261, size: THUMB },
  { file: "category-gutter-repair-hero.webp", id: 37677476, size: HERO },
  { file: "category-gutter-repair-thumb.webp", id: 10372434, size: THUMB },
  { file: "category-gutter-cleaning-hero.webp", id: 39301187, size: HERO },
  { file: "category-gutter-cleaning-thumb.webp", id: 39301187, size: THUMB },
  { file: "category-downspouts-hero.webp", id: 3964796, size: HERO },
  { file: "category-downspouts-thumb.webp", id: 12343741, size: THUMB },
  { file: "category-gutter-guards-hero.webp", id: 18688864, size: HERO },
  { file: "category-gutter-guards-thumb.webp", id: 14443170, size: THUMB },
  { file: "category-drainage-solutions-hero.webp", id: 13307118, size: HERO },
  { file: "category-drainage-solutions-thumb.webp", id: 4406597, size: THUMB },
  { file: "category-fascia-soffit-hero.webp", id: 12790288, size: HERO },
  { file: "category-fascia-soffit-thumb.webp", id: 6307752, size: THUMB },
  { file: "category-commercial-gutters-hero.webp", id: 18239262, size: HERO },
  { file: "category-commercial-gutters-thumb.webp", id: 18289258, size: THUMB },
];

const cache = new Map();
async function getPhoto(id) {
  if (cache.has(id)) return cache.get(id);
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`Pexels ${id}: HTTP ${res.status}`);
  const photo = await res.json();
  const buf = Buffer.from(await (await fetch(photo.src.large2x)).arrayBuffer());
  const entry = { photo, buf };
  cache.set(id, entry);
  return entry;
}

const credits = {};
for (const job of jobs) {
  const { photo, buf } = await getPhoto(job.id);
  const [w, h] = job.size;
  let quality = 72;
  let out;
  do {
    out = await sharp(buf).resize(w, h, { fit: "cover" }).webp({ quality, effort: 5 }).toBuffer();
    quality -= 8;
  } while (out.length > 200 * 1024 && quality > 30);
  writeFileSync(path.join("public", "images", job.file), out);
  credits[job.file] = { pexelsId: job.id, photographer: photo.photographer, url: photo.url };
  console.log(job.file, (out.length / 1024).toFixed(0) + " KB");
}
writeFileSync(path.join("scripts", "image-credits.json"), JSON.stringify(credits, null, 2) + "\n");
