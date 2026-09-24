import type { Faq } from "@/content/faqs";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogLink = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  ogDescription: string;
  excerpt: string;
  category: string;
  primaryKeyword: string;
  date: string;
  updatedDate?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  intro: string[];
  sections: BlogSection[];
  faqs: Faq[];
  relatedPosts: string[];
};

// Two seed posts to prove the template. Cost figures come from the
// placeholder ranges in content/categories.ts — confirm them against the
// real installer network before these go live.
export const blogPosts: BlogPost[] = [
  {
    slug: "gutter-repair-vs-replacement",
    title: "Gutter Repair or Replacement: How to Decide Before You Pay for Either",
    seoTitle: "Gutter Repair vs. Replacement: How to Decide",
    metaDescription:
      "Repair when damage is local and costs $150 to $900. Replace when most of the run is failing. Here's how to tell the difference before you book a quote.",
    ogDescription:
      "A leaking seam is a repair. Gutters pulling away along the whole roofline are not. Here's how to tell which one you have.",
    excerpt:
      "Repair fixes local damage for $150 to $900. Replacement makes sense when most of the run is failing. Here's how to tell them apart.",
    category: "Repair",
    primaryKeyword: "gutter repair vs replacement",
    date: "2026-09-10",
    image: "/images/blog-gutter-repair-vs-replacement.webp",
    imageAlt: "Installer on a ladder inspecting the gutter along the roofline of a stone-accented home",
    imageWidth: 1200,
    imageHeight: 675,
    intro: [
      "Repair your gutters if the damage is local: one leaking seam, one loose section, one clogged downspout. Replace them if most of the run is failing, rusting through, or pulling away from the house. Repairs typically cost **$150 to $900**. Replacement typically costs **$1,500 to $5,500**.",
      "The harder question is what counts as local. A homeowner sees a gutter that sags at one corner. An installer sees whether the fascia behind it is soft, whether the pitch is wrong along the whole run, and whether the fix will hold. That gap is where most repeat repair calls come from.",
    ],
    sections: [
      {
        id: "when-repair-makes-sense",
        heading: "When a Repair Is the Right Call",
        paragraphs: [
          "Repair is the right spend when the gutter metal is sound and the problem is confined to a spot. Four common cases:",
        ],
        bullets: [
          "**A leaking corner or end cap** — sealant fails before the metal does. Cleaning to bare metal and resealing usually fixes it.",
          "**One sagging section** — loose hangers on a single run can be replaced without touching the rest.",
          "**A clogged or detached downspout** — a cleanout or a new strap solves it.",
          "**A small hole or rust spot** — a patch works if the surrounding metal is solid.",
        ],
      },
      {
        id: "when-to-replace",
        heading: "When Replacement Is Cheaper Than Another Repair",
        paragraphs: [
          "Replacement wins when the problem is systemic. If more than about a third of the run needs work, the repairs add up to close to the price of a new system, and you're left with old metal that will fail somewhere else next year.",
          "Signs the whole system is done: rust-through in multiple spots, seams leaking in six places, gutters pulling away along most of the roofline, or the same repair coming back twice in two years. In those cases, a [gutter replacement](/gutter-installation/gutter-replacement) usually costs less over five years than three more repair calls.",
        ],
      },
      {
        id: "fascia-question",
        heading: "The Question Most Quotes Skip: What's Behind the Gutter",
        paragraphs: [
          "Gutters hang on the fascia board. If that wood is soft, no repair will hold, because a new hanger has nothing to bite into. Probe the fascia with a screwdriver. If it sinks in, the board is rotting and needs to be repaired or replaced first.",
          "This is why a cheap patch quote and a full-replacement quote can both be honest and still differ by thousands. One assumes the wood is sound. The other found out it isn't. Ask any installer whether they inspected the fascia before they quoted, and what happens if they find rot mid-job.",
        ],
      },
      {
        id: "cost-comparison",
        heading: "What Each Option Actually Costs",
        paragraphs: [
          "The ranges below are typical for a single-family home. Your number depends on linear feet, stories, and fascia condition.",
        ],
        bullets: [
          "**Leak repair** — $150 to $600. See [gutter leak repair](/gutter-repair/gutter-leak-repair).",
          "**Sagging or pulled-away gutters** — $200 to $900. See [sagging gutter repair](/gutter-repair/sagging-gutter-repair).",
          "**Full replacement** — $1,500 to $5,500, including tear-off and disposal.",
        ],
      },
      {
        id: "when-not-to-hire",
        heading: "When Not to Pay for a Repair or a Replacement",
        paragraphs: [
          "If your gutters overflow but the metal is sound and they're just packed with debris, you need a cleaning at $120 to $450, not a repair. If the real problem is water pooling at the foundation, the fix may be a longer downspout extension, and a new gutter system won't help. A good installer tells you that and doesn't take the job.",
          "The [Insurance Institute for Business & Home Safety](https://ibhs.org) publishes guidance on protecting a home's roof edge from storm damage, useful if you're deciding how much to spend ahead of hurricane season.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to repair a gutter?",
        answer:
          "Typically $150 to $900 depending on the type of damage and how much of the run is affected. A single leaking end cap sits at the low end; re-hanging a long sagging run sits higher.",
      },
      {
        question: "Is it cheaper to repair or replace gutters?",
        answer:
          "Repair is cheaper for local damage. Once more than about a third of the run needs work, replacement usually costs less over time than repeated repairs.",
      },
      {
        question: "How do I know if my gutters need replacing?",
        answer:
          "Rust-through in several spots, seams leaking in multiple places, gutters pulling away along most of the roofline, or the same repair failing twice are all signs the system is at the end of its life.",
      },
      {
        question: "Can sagging gutters be fixed without replacing them?",
        answer:
          "Often, if the metal is sound and the fascia is solid. New hidden hangers and a reset pitch fix most sagging. If the fascia is rotted, it needs repair first.",
      },
    ],
    relatedPosts: ["how-many-downspouts-does-a-house-need"],
  },
  {
    slug: "how-many-downspouts-does-a-house-need",
    title: "How Many Downspouts Does a House Need? A Simple Sizing Rule",
    seoTitle: "How Many Downspouts Does a House Need?",
    metaDescription:
      "A common rule of thumb is one downspout per 30 to 40 feet of gutter. Here's how roof size, downspout size, and rainfall change the number.",
    ogDescription:
      "Too few downspouts is one of the most common reasons gutters overflow. Here's how to count the ones your house needs.",
    excerpt:
      "One downspout per 30 to 40 feet of gutter is the usual starting point. Roof size, downspout size, and rainfall move it up.",
    category: "Downspouts",
    primaryKeyword: "how many downspouts does a house need",
    date: "2026-09-17",
    image: "/images/blog-how-many-downspouts-does-a-house-need.webp",
    imageAlt: "Dark seamless gutter and downspout under a terracotta tile roof",
    imageWidth: 1200,
    imageHeight: 675,
    intro: [
      "A common rule of thumb is **one downspout for every 30 to 40 feet of gutter**, with a downspout at each end of any long run and at each inside corner where two roof planes meet. That number rises with roof area, steep pitch, and heavy rain, and it drops if you upsize to a larger downspout.",
      "Too few downspouts is one of the most common causes of overflowing gutters, and it's the cheapest one to fix. Before you pay for new gutters, count your downspouts against your roofline.",
    ],
    sections: [
      {
        id: "the-basic-rule",
        heading: "The Basic Rule and Where It Comes From",
        paragraphs: [
          "Gutters don't move water on their own. They slope toward a downspout, and each downspout can only carry so much. Spacing them 30 to 40 feet apart keeps any one gutter from carrying more water than its outlet can drain.",
          "That's a starting point, not a code. A roof with big, steep planes dumps water faster than a small low-pitch one, so a house with the same gutter length can need different numbers of downspouts.",
        ],
      },
      {
        id: "size-matters",
        heading: "Downspout Size Changes the Count",
        paragraphs: [
          "A standard 2x3 downspout has an opening of 6 square inches. A 3x4 has 12 square inches. That is twice the capacity from one outlet.",
          "On a large roof plane, one 3x4 downspout can do the work of two 2x3s. If you're building a system from scratch, upsizing is often cheaper than adding outlets. See our guide to [downspout installation and repair](/downspouts-gutter-guards/downspout-installation-repair) for how installers size them.",
        ],
      },
      {
        id: "signs-you-need-more",
        heading: "Signs You Don't Have Enough",
        paragraphs: [
          "Overflow at a specific spot is the tell. Look for these:",
        ],
        bullets: [
          "**Water spilling over the far end of a long run** during a heavy rain",
          "**Streaks or staining on siding** below the gutter line",
          "**Erosion or pooling** at the spot beneath where water overshoots",
          "**Overflow at valleys** where two roof planes send water into one gutter",
        ],
      },
      {
        id: "climate",
        heading: "Rainfall Changes the Math",
        paragraphs: [
          "In places with short, heavy downpours, like Florida in summer, a gutter that handles a steady rain can still overflow in a twenty-minute storm. Homes there often do better with six-inch gutters and 3x4 downspouts. Read our page on [6-inch oversized gutters](/seamless-gutters/six-inch-oversized-gutters) if that's your situation.",
          "The [National Weather Service](https://www.weather.gov) publishes local rainfall data if you want to see how intense storms get where you live.",
        ],
      },
      {
        id: "where-water-lands",
        heading: "Where the Water Lands Matters More Than the Count",
        paragraphs: [
          "Adding downspouts doesn't help if they all empty beside the foundation. Each outlet should carry water several feet away from the house, through an extension or a buried drain. If your real problem is a wet foundation, more downspouts pointed at the same spot won't fix it. A longer extension will.",
          "This isn't a job for a new gutter system if your gutters are fine and just short of outlets. A downspout added to an existing run costs far less than a replacement, and a good installer will tell you that.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many downspouts should a house have?",
        answer:
          "A common rule of thumb is one per 30 to 40 feet of gutter, with a downspout at the end of each long run. Large roofs and heavy rain call for more, or for larger 3x4 downspouts.",
      },
      {
        question: "What size downspout do I need?",
        answer:
          "2x3 is standard for small roofs. 3x4 has twice the opening area and is worth it on large roof planes or in heavy-rain climates.",
      },
      {
        question: "Can I add a downspout to existing gutters?",
        answer:
          "Yes. Adding an outlet and a downspout to a long run is a common fix for overflow and costs far less than replacing the gutters.",
      },
      {
        question: "How far from the house should a downspout empty?",
        answer:
          "Several feet at minimum. On flat lots or clay soil, a buried drain line or a long extension carries water farther and protects the foundation.",
      },
    ],
    relatedPosts: ["gutter-repair-vs-replacement"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
