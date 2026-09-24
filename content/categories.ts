// Category → service data model. Ten gutter categories, thirty services.
//
// Price ranges, timeframes, and warranty terms below are PLACEHOLDER
// figures based on typical US residential gutter work. Confirm them
// against the real installer network before publishing (see
// references/stats.md).
//
// Price ranges must keep the "$X – $Y" format: the city-service page splits
// on " – " to show a "Starting At" figure. Warranty strings must keep the
// "N-Unit Warranty" format.

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceMedia = {
  image: string;
  imageAlt: string;
  caption: string;
};

export type CaseStudy = {
  context: string;
  projectDate: string;
  facts: { label: string; value: string }[];
  outcome: string;
};

export type Service = {
  slug: string;
  title: string;
  qualifier: string; // e.g. "Built to Last" — used in H1, must stay location-neutral
  summary: string; // 20-35 words, used on category/catalog cards
  overview: string; // 80-110 words, opens the service page
  priceRange: string;
  timeframe: string;
  warranty: string;
  priceScopeParagraphs: string[]; // 60-100 words total
  considerationsIntro: string;
  considerations: string[]; // 3-5 bullets
  media1?: ServiceMedia;
  materialsIntro: string;
  materials: string[]; // 6-8 compact items
  media2?: ServiceMedia;
  processIntro: string;
  process: { title: string; description: string }[]; // 5-6 steps
  howToChooseIntro: string;
  howToChoose: { label: string; description: string }[]; // 3-6 items
  caseStudy?: CaseStudy;
  guarantee: { label: string; description: string }[]; // 4 items
  reasonsParagraph: string;
  reasonsBullets: string[];
  faqs: ServiceFaq[];
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  number: string;
  eyebrow: string;
  heroQualifier: string;
  heroParagraph: string;
  topicContextHeading: string;
  topicContextParagraphs: string[];
  image: string;
  thumbImage: string; // small variant for card contexts
  imageAlt: string;
  services: Service[];
  faqs: ServiceFaq[];
};

const sharedGuarantee = [
  {
    label: "Written Workmanship Warranty",
    description:
      "Every project is backed by a workmanship warranty in writing. If a seam leaks or a section pulls away from application error within the term, the installer comes back at no charge.",
  },
  {
    label: "Licensed & Insured",
    description:
      "Every installer in our network carries liability and workers' comp coverage, verified before they're matched with a homeowner. Details are available on request before you book.",
  },
  {
    label: "Fixed Written Estimate",
    description:
      "The number in your estimate is the number you pay, unless you change the scope yourself mid-project.",
  },
  {
    label: "Daily Site Cleanup",
    description:
      "Old gutter sections, cut-offs, and fasteners hauled away before the crew leaves, every day of the project and not just the last one.",
  },
];

export const categories: Category[] = [
  {
    slug: "gutter-installation",
    title: "Gutter Installation",
    shortTitle: "Installation",
    number: "01",
    eyebrow: "New & Replacement Gutters",
    heroQualifier: "Gutter Installation Sized to Your Roof",
    heroParagraph:
      "New gutters and full replacements measured to your roofline, hung on hidden hangers, and pitched so water actually reaches the downspout.",
    topicContextHeading: "What a Gutter Installation Actually Involves",
    topicContextParagraphs: [
      "A gutter installation is more than hanging a trough under the roof edge. The installer measures every run, decides where downspouts go, checks the fascia board for rot, and sets a slope of about a quarter inch per ten feet so water drains instead of sitting.",
      "Most gutter problems trace back to the install, not the gutter. Hangers spaced too far apart let a run sag under a full load of rain, and a downspout that dumps beside the foundation causes more damage than no gutter at all. That's the part of a quote worth reading closely.",
    ],
    image: "/images/hero-gutter-ladder.webp",
    thumbImage: "/images/gutter-installer-ladder-mobile.webp",
    imageAlt: "Installer on a ladder working on the gutter of a gray home with stone columns",
    faqs: [
      {
        question: "How long does a gutter installation take?",
        answer:
          "Most single-family homes take one to two days. Seamless gutters are formed on site, so the timeline follows linear footage and roofline complexity.",
      },
      {
        question: "Do I need to be home during installation?",
        answer:
          "Not for the work itself. Be available at the start to confirm the layout and at the end for the walkthrough.",
      },
      {
        question: "Do you remove and haul away the old gutters?",
        answer:
          "Yes, on replacement jobs. Removal and disposal should be a line in the written estimate, not a surprise charge.",
      },
      {
        question: "Can new gutters be installed on any house?",
        answer:
          "Almost any. The fascia has to be solid enough to hold the hangers, so rotted wood gets repaired or replaced first.",
      },
    ],
    services: [
      {
        slug: "new-gutter-installation",
        title: "New Gutter Installation",
        qualifier: "Where There Were None",
        summary:
          "First-time gutter systems for homes with no gutters, measured to the roofline with downspouts placed where water can drain away from the foundation.",
        overview:
          "A new gutter installation puts a drainage system on a house that never had one, or has lost the old one entirely. The installer walks the roofline, marks where each downspout will land, and forms seamless aluminum gutters from a coil to the exact length of each run. Hidden hangers go in every 24 inches or closer, and the run is pitched about a quarter inch per ten feet toward the downspout. Water leaves the roof edge in a controlled path instead of splashing onto siding, landscaping, and the foundation.",
        priceRange: "$1,200 – $4,500",
        timeframe: "1–2 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "A whole-house installation typically runs $1,200 to $4,500, priced mostly by linear feet of gutter and the number of downspouts. A single-story ranch with 140 feet of roofline lands near the low end; a two-story home with a complex roofline and eight downspouts lands near the high end.",
          "Second-story work, steep roofs, and rooflines with many corners add time. Every inside and outside corner adds a seam to seal, so a cut-up roof costs more per foot than a plain rectangle.",
        ],
        considerationsIntro:
          "A few decisions move both the price and how long the system lasts:",
        considerations: [
          "**Gutter size** — five-inch is standard; six-inch costs more per foot but handles large roof planes and heavy rain without overflowing.",
          "**Metal gauge** — .032-inch aluminum resists dents and sagging better than .027-inch. Ask which one the quote assumes.",
          "**Downspout count and size** — a 3x4 downspout has twice the opening area of a 2x3, which matters on big roof sections.",
          "**Fascia condition** — soft or rotted fascia can't hold a hanger, and repairing it is a separate line item.",
        ],
        materialsIntro:
          "Most residential installs use coil-formed aluminum, with fasteners matched to the fascia material:",
        materials: [
          "Seamless aluminum, .027 or .032 inch",
          "5-inch or 6-inch K-style profile",
          "Hidden hangers, stainless or coated screws",
          "2x3 or 3x4 downspouts",
          "Baked-on factory finish, color-matched to trim",
          "Gutter sealant at every corner and end cap",
          "Splash blocks or extensions at every outlet",
        ],
        processIntro:
          "The same six steps run on every new installation:",
        process: [
          { title: "Roofline Assessment", description: "The installer measures each run, checks the fascia, and marks downspout locations." },
          { title: "Written Estimate", description: "Linear footage, gauge, size, downspout count, and color are itemized before any work starts." },
          { title: "Form the Gutters", description: "Aluminum is formed from a coil on site, cut to the exact length of each run." },
          { title: "Hang & Pitch", description: "Hidden hangers go in every 24 inches or closer, sloped about a quarter inch per ten feet." },
          { title: "Seal & Downspouts", description: "Corners and end caps sealed, downspouts attached, outlets pointed away from the foundation." },
          { title: "Water Test & Walkthrough", description: "Runs are checked for standing water, then walked with you before the crew leaves." },
        ],
        howToChooseIntro: "What separates an installer worth hiring from one to skip:",
        howToChoose: [
          { label: "Itemized Estimate", description: "Linear feet, gauge, gutter size, and downspout count written out, not a single lump sum." },
          { label: "Hanger Spacing Stated", description: "Ask how far apart the hangers go. Wide spacing is where sagging starts." },
          { label: "Fascia Check", description: "A good installer inspects the fascia before quoting and tells you what needs repair." },
          { label: "Insurance on Request", description: "Liability and workers' comp coverage provided before you sign, not after." },
          { label: "Downspout Discharge", description: "The estimate should say where each downspout empties, not leave it to install day." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Most gutter installs fail at the hangers and the downspout outlets, not at the gutter itself. We scope both in the estimate. This isn't the right fit if you want the cheapest possible bid on thin-gauge material with widely spaced hangers, because that job will be back for a repair inside a few years.",
        reasonsBullets: [
          "Hanger spacing and metal gauge stated in the written estimate",
          "Fascia inspected before quoting, not after the first screw",
          "Downspout outlets planned away from the foundation",
          "Old materials and cut-offs hauled away daily",
        ],
        faqs: [
          { question: "How much does a new gutter installation cost?", answer: "Typically $1,200 to $4,500 for a whole house, depending mostly on linear feet, gutter size, and downspout count." },
          { question: "Are seamless gutters worth it over sectional?", answer: "For most homes, yes. Seamless runs have seams only at corners and outlets, which means far fewer places to leak." },
          { question: "How long do new aluminum gutters last?", answer: "Twenty years or more when installed with proper pitch and hanger spacing and kept reasonably clear of debris." },
          { question: "Do new gutters need a permit?", answer: "Usually not, but some cities and HOAs regulate exterior changes. Confirm before you choose a color or profile." },
        ],
      },
      {
        slug: "gutter-replacement",
        title: "Gutter Replacement",
        qualifier: "Old System Out, New One In",
        summary:
          "Full tear-off of worn, rusted, or pulling-away gutters and a new seamless system hung on solid fascia, with the old material hauled away.",
        overview:
          "Gutter replacement is the right call when the old system is failing along most of its length: rust-through, runs pulling away from the house, or repairs that keep coming back. The crew removes the old gutters and downspouts, inspects and repairs the fascia underneath, and installs a new seamless system sized to the roof. Replacement is usually a chance to fix what caused the failure, whether that was undersized gutters, too few downspouts, or a pitch that never worked.",
        priceRange: "$1,500 – $5,500",
        timeframe: "1–2 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Replacement typically runs $1,500 to $5,500, a few hundred dollars more than a new install on the same house because of tear-off, disposal, and fascia work. The range follows linear feet and downspout count.",
          "Fascia repair is the swing factor. Behind an old gutter that's leaked for years, the wood is often soft, and replacing a few boards adds cost before the new system can go up.",
        ],
        considerationsIntro:
          "Before you replace instead of repair:",
        considerations: [
          "**Why the old system failed** — if the pitch or the size was wrong, a like-for-like swap repeats the problem.",
          "**Fascia rot** — check for soft wood behind the old gutters; repairing it is part of the real cost.",
          "**Repair math** — if more than about a third of the run needs work, replacement is usually the better spend.",
          "**Existing downspout discharge** — replacement is the moment to move outlets away from the foundation.",
        ],
        materialsIntro: "The same materials as a new install, with removal on top:",
        materials: [
          "Seamless aluminum, .027 or .032 inch",
          "5-inch or 6-inch K-style profile",
          "Hidden hangers with stainless or coated screws",
          "New fascia boards where the old ones are soft",
          "2x3 or 3x4 downspouts",
          "Haul-away of old gutters and downspouts",
        ],
        processIntro: "Replacement adds a tear-off and repair phase to the standard install:",
        process: [
          { title: "Failure Assessment", description: "The installer finds out why the old system failed, not just that it did." },
          { title: "Written Estimate", description: "Tear-off, fascia repair, new system, and disposal itemized separately." },
          { title: "Tear-Off", description: "Old gutters, hangers, and downspouts removed and hauled away." },
          { title: "Fascia Repair", description: "Soft or rotted boards replaced so the new hangers have solid wood to hold." },
          { title: "Install & Pitch", description: "New seamless runs hung and sloped toward correctly placed downspouts." },
          { title: "Walkthrough", description: "Water-tested and walked with you, with cleanup done before the crew leaves." },
        ],
        howToChooseIntro: "What to check before hiring for a replacement:",
        howToChoose: [
          { label: "Removal Included", description: "Confirm tear-off and disposal are in the number and not billed separately." },
          { label: "Fascia Plan", description: "Ask what happens if the crew finds rot mid-job, and what it costs per board." },
          { label: "Root Cause Answer", description: "A good installer tells you why the old gutters failed and what changes this time." },
          { label: "Warranty in Writing", description: "Term and what it covers, on paper, before the deposit." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "The cheapest replacement is the one that leaves the old problem in place. We ask why the gutters failed before pricing the new ones. If your gutters are fine and just dirty, a cleaning is the honest answer and replacement isn't worth the money.",
        reasonsBullets: [
          "Failure cause identified before the new system is designed",
          "Fascia repair scoped and priced up front",
          "Tear-off and disposal listed in the estimate",
          "New downspout outlets planned away from the foundation",
        ],
        faqs: [
          { question: "How do I know if I should replace instead of repair?", answer: "If the gutters are rusting through, pulling away along most of the run, or the same seams keep leaking, replacement is usually cheaper than another repair." },
          { question: "Is fascia repair included in the estimate?", answer: "It should be scoped in the estimate if the installer sees rot, and priced per board if it turns up mid-job." },
          { question: "Can you replace only part of my gutters?", answer: "Yes. If one side is failing and the rest is sound, a partial replacement is possible, though matching the color and profile takes care." },
        ],
      },
      {
        slug: "tile-roof-gutter-installation",
        title: "Tile Roof Gutter Installation",
        qualifier: "Fastened Without Cracking Tile",
        summary:
          "Gutters for concrete and clay tile roofs, hung from the fascia or rafter tails so no tile gets drilled, lifted, or cracked.",
        overview:
          "Tile roofs are common across Central Florida, and they change how gutters mount. Tile overhangs the roof edge and sheds water faster and farther than shingle, and the fascia behind it can be set back or sloped, so a standard hidden hanger has nothing to clip to. The installer uses fascia-mounted or rafter-tail brackets, works from a ladder or lift instead of walking on the tile, and often pairs the system with a wider gutter so heavy rain lands in the trough instead of past it.",
        priceRange: "$1,800 – $6,000",
        timeframe: "1–3 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Tile roof installations typically run $1,800 to $6,000 for a whole house, roughly 20 to 40 percent above the same house with shingles. The difference is slower, more careful mounting and, often, six-inch gutters.",
          "Homes with complex rooflines or a fascia that needs repair sit at the high end. Tile that is already cracked is a roofer's job to repair, not the gutter installer's.",
        ],
        considerationsIntro: "What shapes a tile-roof gutter job:",
        considerations: [
          "**Tile profile** — barrel tile and flat tile leave different gaps at the roof edge, which changes the bracket and the gutter position.",
          "**Overshoot** — tile can throw water past a five-inch gutter in heavy rain. Ask whether the installer recommends six-inch.",
          "**Fascia depth and condition** — mounting needs sound wood, and some tile homes have a shallow fascia.",
          "**Roofer coordination** — if tile has to be lifted or replaced, a roofer does that, not the gutter crew.",
        ],
        materialsIntro: "Materials chosen for the mounting method:",
        materials: [
          "Seamless aluminum, .032 inch",
          "6-inch K-style or half-round profile",
          "Fascia or rafter-tail brackets",
          "Stainless or coated screws",
          "Gutter apron or drip edge where needed",
          "3x4 downspouts",
        ],
        processIntro: "The process adds a mounting plan up front:",
        process: [
          { title: "Roof Edge Assessment", description: "Tile type, fascia depth, and overhang measured to choose the bracket." },
          { title: "Written Estimate", description: "Gutter size, bracket type, and downspout count itemized." },
          { title: "Form the Gutters", description: "Runs formed on site to length." },
          { title: "Mount Without Disturbing Tile", description: "Brackets set from a ladder or lift into fascia or rafter tails." },
          { title: "Seal & Downspouts", description: "Corners sealed, downspouts attached, outlets aimed away from the foundation." },
          { title: "Water Test", description: "Runs checked for overshoot and standing water before the crew leaves." },
        ],
        howToChooseIntro: "What to check for tile-roof work:",
        howToChoose: [
          { label: "Tile Experience", description: "Ask for photos of a past tile-roof install, not just shingle jobs." },
          { label: "No Walking on Tile", description: "The crew should work from ladders or a lift. Tile cracks under foot." },
          { label: "Bracket Type Stated", description: "The estimate should say how the gutter attaches, not just what it's made of." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A tile roof can crack under the wrong installer in one afternoon. We scope the mounting method in the estimate and say who handles any tile repair. If your tile is already damaged, get the roof fixed first.",
        reasonsBullets: [
          "Mounting method named in the estimate",
          "Work done from ladders or lifts, not on the tile",
          "Gutter size chosen for tile's faster runoff",
        ],
        faqs: [
          { question: "Can gutters be installed on a tile roof?", answer: "Yes. They mount to the fascia or rafter tails instead of clipping to the roof edge, and no tile needs to be drilled." },
          { question: "Do tile roofs need bigger gutters?", answer: "Often. Tile sheds water faster and farther, so six-inch gutters with a proper roof-edge setup reduce overshoot." },
          { question: "Will installing gutters damage my tile?", answer: "Not if the crew works from ladders or a lift and mounts to the fascia. Walking on tile is what cracks it." },
        ],
      },
    ],
  },
  {
    slug: "seamless-gutters",
    title: "Seamless Gutters",
    shortTitle: "Seamless",
    number: "02",
    eyebrow: "Formed on Site, No Mid-Run Seams",
    heroQualifier: "Seamless Gutters Cut to Your Exact Roofline",
    heroParagraph:
      "Gutters formed from a metal coil on your driveway, cut to the length of each run, so the only seams are at the corners and outlets.",
    topicContextHeading: "What Makes a Gutter Seamless",
    topicContextParagraphs: [
      "Seamless gutters are formed on site from a coil of metal by a roll-forming machine, then cut to the exact length of each run. A traditional sectional gutter comes in ten-foot pieces joined every ten feet, and every joint is a place to leak. A seamless run has seams only at the corners and at the downspout outlets.",
      "That's the whole advantage, and it's a real one: fewer seams means fewer leaks and fewer spots for debris to catch. The trade-off is that seamless gutters need a roll-forming machine and a crew that knows how to hang a thirty-foot run without kinking it.",
    ],
    image: "/images/hero-gutter-roofline.webp",
    thumbImage: "/images/gutter-installer-ladder-brick.webp",
    imageAlt: "Installer and a helper working along a white gutter on a shingle roofline",
    faqs: [
      {
        question: "Are seamless gutters more expensive?",
        answer:
          "Slightly, per foot, than sectional gutters. Fewer leaks and fewer repairs usually make up the difference within a few years.",
      },
      {
        question: "Can seamless gutters be made in any color?",
        answer:
          "Aluminum coil comes in a range of baked-on factory colors. Copper is left unpainted and weathers to a green patina over time.",
      },
      {
        question: "How long can a seamless run be?",
        answer:
          "Runs commonly reach 30 to 40 feet. Longer runs are broken up with a hidden joint or a downspout outlet.",
      },
    ],
    services: [
      {
        slug: "seamless-aluminum-gutters",
        title: "Seamless Aluminum Gutters",
        qualifier: "The Standard for Most Homes",
        summary:
          "Coil-formed aluminum gutters in a baked-on color, cut to the length of each run and hung on hidden hangers, with seams only at corners and outlets.",
        overview:
          "Seamless aluminum is the default choice for most homes. It doesn't rust, holds a baked-on color for years, and is light enough to hang cleanly on a long run. The crew forms each run from a coil on site, cuts it to length, and hangs it with hidden hangers along the fascia. Corners and end caps get sealed by hand, which is the one place a seamless system can still leak if the sealant work is careless.",
        priceRange: "$1,200 – $4,000",
        timeframe: "1–2 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Seamless aluminum typically runs $1,200 to $4,000 for a whole house, priced per linear foot with extra for corners and downspouts. Most homeowners land between $7 and $12 per foot installed.",
          "Heavier gauge and six-inch profiles add to the per-foot number. Custom colors add a little more than white or brown.",
        ],
        considerationsIntro: "Decisions that change the price and the finish:",
        considerations: [
          "**Gauge** — .032-inch resists denting from ladders and hail better than .027-inch.",
          "**Color** — white, brown, and black are stock; other colors may require a special coil order.",
          "**Corner count** — every corner is a hand-sealed seam, so a complicated roofline costs more.",
        ],
        materialsIntro: "What goes into a standard seamless aluminum install:",
        materials: [
          "Aluminum coil, .027 or .032 inch",
          "5-inch K-style profile",
          "Hidden hangers with stainless screws",
          "Baked-on enamel finish",
          "Corner and end-cap sealant",
          "2x3 downspouts with matching brackets",
        ],
        processIntro: "The process is the standard installation sequence:",
        process: [
          { title: "Measure & Match Color", description: "Runs measured and coil color matched to the trim." },
          { title: "Form On Site", description: "The roll-former shapes each run from coil, cut to the exact length." },
          { title: "Hang", description: "Runs are hung on hidden hangers, pitched toward the downspouts." },
          { title: "Seal", description: "Corners, end caps, and outlets sealed by hand." },
          { title: "Water Test", description: "Runs checked for standing water and leaks before the crew leaves." },
        ],
        howToChooseIntro: "What to look for in an aluminum installer:",
        howToChoose: [
          { label: "Gauge Stated", description: "The estimate names .027 or .032. If it doesn't, ask." },
          { label: "On-Site Forming", description: "True seamless is formed to length on site, not assembled from pre-cut pieces." },
          { label: "Corner Sealant", description: "Ask what sealant they use at corners. This is where seamless systems fail." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Aluminum is the right material for most homes and most budgets. It isn't the right choice for a historic home where the original copper or half-round profile is part of the look, and we'd tell you that in the assessment.",
        reasonsBullets: [
          "Gauge named in the written estimate",
          "Runs formed to length on site",
          "Hand-sealed corners with a stated sealant",
        ],
        faqs: [
          { question: "How long do seamless aluminum gutters last?", answer: "Twenty years or more with proper pitch and periodic cleaning." },
          { question: "Do aluminum gutters dent?", answer: "They can, especially at .027-inch. Heavier .032-inch resists ladder dents and hail better." },
          { question: "Can aluminum gutters be painted?", answer: "They come with a baked-on finish, and repainting is rarely needed. Repainting later is possible with the right primer." },
        ],
      },
      {
        slug: "seamless-copper-gutters",
        title: "Seamless Copper Gutters",
        qualifier: "A 50-Year Material",
        summary:
          "Formed copper gutters and downspouts that weather to a natural patina, built to outlast the roof under them and priced accordingly.",
        overview:
          "Copper is the long-term option: it can last 50 years or more, never needs painting, and develops a brown-to-green patina as it weathers. It's also several times the cost of aluminum. Copper gutters are formed and soldered by a crew that knows the material, and they must be kept away from aluminum and galvanized steel, because contact between dissimilar metals corrodes the weaker one.",
        priceRange: "$4,500 – $16,000",
        timeframe: "2–4 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Copper typically runs $4,500 to $16,000 for a whole house, at roughly $25 to $40 per linear foot installed. Half-round and custom profiles cost more than K-style.",
          "Soldered joints and hand-formed corners take longer than sealed aluminum, which is where much of the labor cost goes.",
        ],
        considerationsIntro: "What to think through before choosing copper:",
        considerations: [
          "**Budget honesty** — copper costs three to four times aluminum. It pays off on homes you'll keep for decades.",
          "**Dissimilar metals** — copper must not touch aluminum or galvanized steel, including fasteners and downspout connections.",
          "**Patina timeline** — new copper is bright; it darkens over months and greens over years. Some owners prefer a factory patina.",
          "**Roof runoff** — copper runoff can stain light surfaces below it and harms some roofing metals.",
        ],
        materialsIntro: "Materials for a copper system:",
        materials: [
          "16-ounce or heavier copper",
          "Half-round or K-style profile",
          "Copper or stainless fasteners only",
          "Soldered joints",
          "Round or rectangular copper downspouts",
          "Copper strap hangers",
        ],
        processIntro: "The process is slower because of soldering:",
        process: [
          { title: "Design & Material Choice", description: "Profile, weight, and patina finish chosen before ordering." },
          { title: "Form", description: "Copper formed and cut to each run." },
          { title: "Solder Joints", description: "Seams and corners soldered rather than sealed." },
          { title: "Hang", description: "Runs hung with copper or stainless hardware only." },
          { title: "Downspouts", description: "Copper downspouts attached and outlets set away from the foundation." },
          { title: "Final Walkthrough", description: "Runs checked for pitch and joints, then walked with you." },
        ],
        howToChooseIntro: "What to check for copper work:",
        howToChoose: [
          { label: "Soldering Experience", description: "Ask for photos of soldered joints on a past copper job." },
          { label: "Weight Stated", description: "16-ounce copper is standard; lighter copper wears out sooner." },
          { label: "Compatible Hardware", description: "The estimate should confirm copper or stainless fasteners throughout." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Copper is a poor buy if you're selling in two years or working to a tight budget. Aluminum does the job for a quarter of the cost. Copper makes sense for a home where the material is part of the design and you plan to stay.",
        reasonsBullets: [
          "Copper weight named in the written estimate",
          "Soldered rather than sealed joints",
          "Copper or stainless hardware only, no mixed metals",
        ],
        faqs: [
          { question: "How long do copper gutters last?", answer: "Fifty years or more with basic care, often outlasting the roof." },
          { question: "Will copper gutters turn green?", answer: "Yes, over years. They darken first and develop a green patina, or you can start with a factory-applied patina." },
          { question: "Is copper worth the cost?", answer: "On a home you'll keep for decades, often yes. For a shorter horizon, aluminum is the better value." },
        ],
      },
      {
        slug: "six-inch-oversized-gutters",
        title: "6-Inch Oversized Gutters",
        qualifier: "For Heavy Rain and Big Roofs",
        summary:
          "Six-inch gutters with larger downspouts for steep roofs, large roof planes, and heavy-rain climates where a five-inch gutter overflows.",
        overview:
          "A six-inch K-style gutter carries roughly half again the water of a five-inch and pairs with a three-by-four downspout that has twice the opening area of a standard two-by-three. It's the right upgrade for large roof planes, steep pitches, and places with heavy downpours like Florida, where a summer storm can drop more rain in twenty minutes than a five-inch system can move.",
        priceRange: "$1,600 – $5,500",
        timeframe: "1–2 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Six-inch systems typically run $1,600 to $5,500 for a whole house, about 10 to 20 percent above the same house in five-inch. The extra cost is mostly material.",
          "Six-inch gutters need slightly more clearance and sturdier hangers because they hold more water when full.",
        ],
        considerationsIntro: "When six-inch earns its cost:",
        considerations: [
          "**Roof plane size** — a large, steep roof plane sends water fast, and a five-inch gutter can overshoot.",
          "**Valleys** — where two roof planes meet, flow concentrates and overflows are common.",
          "**Downspout upgrade** — pairing six-inch with 3x4 downspouts is what actually improves drainage.",
          "**Fascia depth** — the fascia has to be tall enough to carry a six-inch gutter cleanly.",
        ],
        materialsIntro: "Sized up across the system:",
        materials: [
          "6-inch K-style seamless aluminum",
          ".032-inch gauge recommended",
          "3x4 downspouts",
          "Heavy-duty hidden hangers",
          "Valley splash guards",
          "Baked-on factory finish",
        ],
        processIntro: "The process matches a standard install with extra attention to outlets:",
        process: [
          { title: "Roof Area Assessment", description: "Each roof plane measured to size gutters and downspouts to the flow." },
          { title: "Estimate", description: "Gutter size, downspout size, and count listed separately." },
          { title: "Form & Hang", description: "Six-inch runs formed on site and hung on heavy-duty hangers." },
          { title: "Downspouts & Outlets", description: "3x4 downspouts attached with outlets sized to match." },
          { title: "Valley Protection", description: "Splash guards added where roof valleys dump into the gutter." },
          { title: "Water Test", description: "Runs tested under flow before the crew leaves." },
        ],
        howToChooseIntro: "What to ask about oversized gutters:",
        howToChoose: [
          { label: "Downspout Size", description: "Six-inch gutters with 2x3 downspouts are a bottleneck. Confirm 3x4 outlets." },
          { label: "Hanger Rating", description: "Heavier gutters need sturdier hangers. Ask what the installer uses." },
          { label: "Roof Area Reasoning", description: "The installer should explain why six-inch fits your roof, not just upsell." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Six-inch gutters are an upgrade, not a default. A small ranch with a low-pitch roof doesn't need them, and paying extra for capacity you'll never use isn't a good deal. We size to the roof.",
        reasonsBullets: [
          "Sizing justified against your roof area",
          "3x4 downspouts paired with six-inch runs",
          "Valley overflow protection where it's needed",
        ],
        faqs: [
          { question: "Do I need six-inch gutters?", answer: "If you have large roof planes, steep pitches, or heavy rain, often yes. A small low-pitch roof usually doesn't." },
          { question: "Can six-inch gutters replace existing five-inch?", answer: "Usually, if the fascia is tall enough. The installer checks before quoting." },
        ],
      },
    ],
  },
  {
    slug: "specialty-gutters",
    title: "Specialty Gutters",
    shortTitle: "Specialty",
    number: "03",
    eyebrow: "Half-Round, Built-In & Decorative",
    heroQualifier: "Specialty Gutters for Homes That Aren't Standard",
    heroParagraph:
      "Half-round profiles, built-in box gutters, and rain chains for homes where the standard K-style gutter doesn't fit the roofline or the look.",
    topicContextHeading: "When a Standard Gutter Isn't the Answer",
    topicContextParagraphs: [
      "Most homes take a K-style gutter. Some don't: Mediterranean and historic homes often call for a half-round profile, older homes may have gutters built into the roof edge, and some porches suit a rain chain better than a downspout.",
      "Specialty work costs more per foot and needs an installer who has done it before. A half-round gutter carries less water than a K-style of the same width, so sizing matters more, not less.",
    ],
    image: "/images/seamless-gutter-downspout-tile-roof.webp",
    thumbImage: "/images/seamless-gutter-downspout-mobile.webp",
    imageAlt: "Close-up of a dark gutter and round downspout under a terracotta tile roof",
    faqs: [
      {
        question: "Are half-round gutters worth the extra cost?",
        answer:
          "When the look matters, yes. They cost more per foot and hold less water than K-style of the same width, so many installers step up to a larger size.",
      },
      {
        question: "Can built-in gutters be repaired instead of replaced?",
        answer:
          "Often. Leaks usually come from a failed liner or outlet, which can be re-lined or replaced without rebuilding the roof edge.",
      },
      {
        question: "Do rain chains work in heavy rain?",
        answer:
          "They handle light to moderate rain from a small roof section. In a heavy Florida downpour they can overflow, so they're not a downspout replacement for a main roof.",
      },
    ],
    services: [
      {
        slug: "half-round-gutters",
        title: "Half-Round Gutters",
        qualifier: "The Classic Profile",
        summary:
          "Smooth, curved half-round gutters in aluminum or copper, hung on strap hangers and paired with round downspouts for Mediterranean and historic homes.",
        overview:
          "A half-round gutter is a smooth, rounded trough with no flat back, and it has been the traditional choice on Mediterranean, colonial, and historic homes for a long time. It sheds debris more easily than a K-style because it has no corners for leaves to catch in. It also carries less water than a K-style of the same width, so installers often go up a size, and it hangs from visible strap hangers instead of hidden ones.",
        priceRange: "$2,200 – $9,000",
        timeframe: "1–3 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Half-round systems typically run $2,200 to $9,000 for a whole house, depending on material and linear feet. Aluminum sits at the low end; copper and custom sizes sit near the top.",
          "The profile costs more per foot than K-style and needs a crew that has formed and hung it before. Round downspouts and matching fittings add to the price.",
        ],
        considerationsIntro: "What to think through before choosing half-round:",
        considerations: [
          "**Capacity** — a 5-inch half-round holds less water than a 5-inch K-style. Ask what size the installer recommends for your roof.",
          "**Look** — visible strap hangers are part of the style. If you want hangers hidden, K-style is a better fit.",
          "**Material** — aluminum is the budget option; copper is the long-term one, with the compatibility rules that come with it.",
          "**Matching downspouts** — round downspouts keep the look consistent but move less water than 3x4 rectangular ones.",
        ],
        materialsIntro: "Materials for a half-round system:",
        materials: [
          "Aluminum, .032 inch, or 16-ounce copper",
          "5-inch or 6-inch half-round profile",
          "Strap or bracket hangers",
          "Round downspouts",
          "Matching elbows and end caps",
          "Stainless or copper fasteners",
        ],
        processIntro: "The process mirrors a standard install with more fitting work:",
        process: [
          { title: "Measure & Size", description: "Roof area measured to size the gutter and downspouts to the flow." },
          { title: "Material & Finish", description: "Aluminum color or copper finish chosen before ordering." },
          { title: "Form", description: "Runs formed on site or fabricated to length." },
          { title: "Hang", description: "Strap hangers set and the run pitched toward each outlet." },
          { title: "Downspouts", description: "Round downspouts fitted and outlets set away from the foundation." },
          { title: "Walkthrough", description: "Runs water-tested and walked with you." },
        ],
        howToChooseIntro: "What to look for:",
        howToChoose: [
          { label: "Half-Round Experience", description: "Ask for photos of half-round jobs. Curved corners and miters are where inexperience shows." },
          { label: "Size Reasoning", description: "The installer should explain why the size fits your roof, given the profile's lower capacity." },
          { label: "Hanger Spacing", description: "Ask how far apart the strap hangers go." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Half-round is a style choice, not a performance upgrade. If you just want the best drainage per dollar, a 6-inch K-style does more for less, and we'd tell you so.",
        reasonsBullets: [
          "Sized for the profile's lower capacity",
          "Hanger spacing stated in the estimate",
          "Matching round downspouts and fittings",
        ],
        faqs: [
          { question: "Do half-round gutters hold less water than K-style?", answer: "Yes, at the same nominal width. Installers often step up a size to make up the difference." },
          { question: "Are half-round gutters easier to keep clean?", answer: "Somewhat. The smooth curve gives debris fewer corners to catch in." },
          { question: "Can half-round gutters be installed on any house?", answer: "Most. The fascia and overhang have to suit the hanger type, which the installer checks in the assessment." },
        ],
      },
      {
        slug: "box-gutter-repair",
        title: "Box & Built-In Gutter Repair",
        qualifier: "Fixed Before It Rots the Structure",
        summary:
          "Leaking built-in and box gutters re-lined, re-sealed, or re-fitted with new outlets before water reaches the framing behind them.",
        overview:
          "A box or built-in gutter is part of the roof edge instead of hanging from it. It's lined with metal or a rubber membrane, and when that liner or an outlet fails, water goes into the fascia and framing instead of the downspout. Damage is hidden until it shows up as stained ceilings or soft wood. The repair finds the failed spot, replaces the liner or outlet, checks the wood behind it, and re-tests the run with water.",
        priceRange: "$400 – $3,500",
        timeframe: "1–3 Days",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Box gutter repairs typically run $400 to $3,500 depending on the length affected and how much wood behind it has to be replaced. A single failed outlet sits at the low end; a full re-lining sits near the top.",
          "If the roof edge is failing, some of the work belongs to a roofer. We'd say which part is which in the estimate.",
        ],
        considerationsIntro: "What shapes a box gutter repair:",
        considerations: [
          "**Liner type** — metal and rubber liners fail in different ways and need different repairs.",
          "**Outlets** — most leaks start where the gutter meets the downspout.",
          "**Hidden damage** — wood behind a leaking liner is often soft and has to be replaced.",
          "**Roofer overlap** — some repairs involve the roof covering, which a roofer handles.",
        ],
        materialsIntro: "Materials for a repair:",
        materials: [
          "Rubber (EPDM) or metal liner material",
          "Replacement outlets",
          "Sealant and flashing",
          "Replacement fascia or sheathing",
          "Stainless or coated fasteners",
        ],
        processIntro: "A five-step repair:",
        process: [
          { title: "Water Test", description: "Water is run through the gutter to find every leak and where it goes." },
          { title: "Open & Inspect", description: "Failed liner or outlet exposed and the wood behind it probed." },
          { title: "Repair Wood", description: "Soft fascia or sheathing replaced." },
          { title: "Re-Line or Re-Seal", description: "New liner, outlet, or sealant installed." },
          { title: "Retest", description: "Water run again to confirm the gutter holds." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Built-In Experience", description: "Ask if the installer has repaired built-in gutters before, not only hung new ones." },
          { label: "Honest Scope", description: "The estimate should separate gutter work from roof work." },
          { label: "Wood Plan", description: "Ask what happens if rot turns up behind the liner." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A leaking box gutter is a structural problem, not a cosmetic one. A quick sealant patch over a failed liner hides the leak for a season and leaves the rot to grow. We scope the wood behind the liner first.",
        reasonsBullets: [
          "Water-tested to find every leak",
          "Wood behind the liner probed before quoting",
          "Gutter work and roof work separated in the estimate",
        ],
        faqs: [
          { question: "What is a box gutter?", answer: "A gutter built into the roof edge, lined with metal or a rubber membrane, instead of hung from the fascia." },
          { question: "Why does my built-in gutter leak?", answer: "Usually a failed liner or a bad seal at the outlet. Water then runs into the wood behind it." },
          { question: "Can a box gutter be replaced with a regular gutter?", answer: "Sometimes, if the roof edge allows. It depends on how the gutter is framed into the structure." },
        ],
      },
      {
        slug: "rain-chains",
        title: "Rain Chains",
        qualifier: "A Decorative Downspout Alternative",
        summary:
          "Copper or aluminum rain chains that guide water from a gutter outlet to a basin or gravel bed, for porches, entries, and small roof sections.",
        overview:
          "A rain chain replaces a section of downspout with a chain or a string of cups that water follows down to the ground. It looks better than a downspout and sounds better in the rain, and it works well on a porch, an entry, or a small roof section. It moves less water than a closed downspout and splashes, so it needs a basin, gravel bed, or drain at the bottom, and it isn't a substitute for downspouts on the main roof.",
        priceRange: "$150 – $900",
        timeframe: "Half Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Rain chains typically run $150 to $900 installed, depending on length, material, and whether a basin or drain is included. Copper costs more than aluminum.",
          "Adding a gravel bed or tying the chain into a buried drain adds to the price and prevents splash against siding.",
        ],
        considerationsIntro: "Before choosing a rain chain:",
        considerations: [
          "**Roof area** — a rain chain suits a small section. A large roof plane needs a closed downspout.",
          "**Splash** — in heavy rain, water throws off the chain. Keep it away from siding and walkways.",
          "**Where the water lands** — a basin, gravel bed, or drain at the bottom is part of the install.",
          "**Cup style vs. link style** — cups carry more water than open links.",
        ],
        materialsIntro: "Common materials:",
        materials: [
          "Copper or aluminum cup-style chain",
          "Chain hanger or outlet adapter",
          "Splash basin or river-rock bed",
          "Ground anchor to stop swinging",
          "Buried drain connection where needed",
        ],
        processIntro: "A short, four-step install:",
        process: [
          { title: "Choose the Spot", description: "A porch, entry, or small roof section where a chain suits the flow." },
          { title: "Fit the Outlet", description: "Gutter outlet adapted to hold the chain." },
          { title: "Hang & Anchor", description: "Chain hung and anchored so it doesn't swing." },
          { title: "Set the Landing", description: "Basin, gravel bed, or drain placed where the water lands." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Honest Sizing", description: "A good installer tells you if the roof section is too big for a chain." },
          { label: "Landing Plan", description: "The estimate should say where the water goes at the bottom." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A rain chain on a large roof plane in a Florida downpour will overflow, and we'd tell you to use a closed downspout there. On a porch or entry, it's a good-looking option that works.",
        reasonsBullets: [
          "Roof section sized to the chain",
          "Landing basin or drain included in the plan",
          "Closed downspout recommended where a chain won't cope",
        ],
        faqs: [
          { question: "Do rain chains work as well as downspouts?", answer: "For small roof sections, yes. For large ones or heavy rain, a closed downspout moves more water." },
          { question: "Where does the water go?", answer: "Into a basin, a gravel bed, or a buried drain at the bottom. That's part of the install." },
          { question: "Can a rain chain replace all my downspouts?", answer: "Rarely. Most homes need closed downspouts on the main roof and a chain, if any, on a small section." },
        ],
      },
    ],
  },
  {
    slug: "gutter-repair",
    title: "Gutter Repair",
    shortTitle: "Repair",
    number: "04",
    eyebrow: "Leaks, Sagging & Storm Damage",
    heroQualifier: "Gutter Repair That Fixes the Cause",
    heroParagraph:
      "Leaks sealed, sagging runs re-hung, and storm damage fixed, with an honest answer when repair isn't the right spend.",
    topicContextHeading: "When a Repair Is the Right Call",
    topicContextParagraphs: [
      "Most gutter problems are local: a leaking seam, a section pulled loose from the fascia, a run bent by a fallen limb. Those are repair jobs, and they cost a fraction of replacement.",
      "The hard part of a repair is diagnosing the cause. A gutter that sags might have failed hangers, rotted fascia, or standing water weighing it down from a bad pitch. Patching the symptom without finding the cause means the same call next season.",
    ],
    image: "/images/gutter-installer-sunset.webp",
    thumbImage: "/images/gutter-installer-sunset.webp",
    imageAlt: "Installer working on a dark gutter at the roof edge in late-afternoon sun",
    faqs: [
      {
        question: "Should I repair or replace my gutters?",
        answer:
          "Repair local damage: a leaking seam, a loose section, a failed downspout. Replace when most of the run is failing or the same repairs keep coming back.",
      },
      {
        question: "How long does a gutter repair take?",
        answer:
          "Most repairs take a few hours to half a day. Larger jobs that involve fascia work can run a day.",
      },
      {
        question: "Why do my gutters overflow when it rains?",
        answer:
          "Usually clogged gutters or downspouts, sometimes a pitch that lets water sit, and occasionally gutters too small for the roof. The cause decides the fix.",
      },
    ],
    services: [
      {
        slug: "gutter-leak-repair",
        title: "Gutter Leak Repair",
        qualifier: "Sealed at the Source",
        summary:
          "Leaking seams, corners, and end caps found and sealed, or patched with new metal, so water goes where the gutter sends it.",
        overview:
          "Gutter leaks almost always show up at seams: sectional gutters where two pieces join, or seamless gutters at corners, end caps, and downspout outlets. The repair starts by cleaning the leaking area back to bare metal, since sealant doesn't bond to dirt or old caulk. The installer then reseals with a gutter-grade sealant, replaces failed end caps, or patches holes with new metal. If the leak is a sign of a bigger pitch or hanger problem, the estimate says so.",
        priceRange: "$150 – $600",
        timeframe: "Half Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Leak repairs typically run $150 to $600 depending on how many spots leak and how hard they are to reach. A single end cap on the first floor sits at the low end; several failed seams on a second story sit higher.",
          "A repair quote that keeps growing usually means the gutters are near the end of their life. Ask for a replacement quote alongside it.",
        ],
        considerationsIntro: "What to know before booking a leak repair:",
        considerations: [
          "**Where it leaks** — corners and end caps are simple to fix; a rusted-through run is not.",
          "**Age of the system** — old sectional gutters can leak again at the next seam.",
          "**Underlying cause** — a leak from overflow is a clog or pitch problem, not a sealing problem.",
        ],
        materialsIntro: "What the repair uses:",
        materials: [
          "Gutter-grade sealant",
          "Replacement end caps",
          "Aluminum patch stock",
          "Stainless or coated rivets and screws",
          "Wire brush and cleaner for surface prep",
        ],
        processIntro: "A short, focused process:",
        process: [
          { title: "Find the Leak", description: "Water is run through the gutter to locate every leak, not just the obvious one." },
          { title: "Clean the Area", description: "Old sealant and debris removed back to bare metal." },
          { title: "Seal or Patch", description: "Seams resealed, end caps replaced, or holes patched with new metal." },
          { title: "Retest", description: "Water run again to confirm the repair holds." },
        ],
        howToChooseIntro: "How to pick a repair installer:",
        howToChoose: [
          { label: "Water Test", description: "A good installer runs water through the gutter to find every leak." },
          { label: "Honest Diagnosis", description: "If the gutters are past repair, they'll say so and quote replacement." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A leak repair is cheap when it's caught early. If a gutter is leaking in six places, another patch won't hold and you're better off replacing. We'd say so in the estimate rather than book another repair.",
        reasonsBullets: [
          "Water-tested to find every leak",
          "Surface prepped so sealant actually bonds",
          "Replacement quoted when repair isn't worth it",
        ],
        faqs: [
          { question: "How much does it cost to fix a leaking gutter?", answer: "Typically $150 to $600 depending on the number of leaks and access." },
          { question: "Can I fix a leaking gutter myself?", answer: "Small seam leaks are a workable DIY with the right sealant and a clean surface. Anything on a second story or a rusted run is worth a pro." },
          { question: "Why does my new gutter leak at the corners?", answer: "Corners and end caps are hand-sealed on site. If the sealant was applied to a dirty surface, it can fail early and should be covered by the workmanship warranty." },
        ],
      },
      {
        slug: "sagging-gutter-repair",
        title: "Sagging & Pulled-Away Gutter Repair",
        qualifier: "Re-Hung and Re-Pitched",
        summary:
          "Sagging or separating gutters re-hung on new hangers, with the pitch reset and any damaged fascia repaired.",
        overview:
          "Gutters sag for one of a few reasons: hangers that have pulled out of the fascia, hangers spaced too far apart, rotted fascia that can't hold a screw, or standing water and debris adding weight. The repair identifies which one it is, replaces failed spikes and ferrules with hidden hangers or long screws, corrects the pitch so water drains, and repairs any fascia that has gone soft. Skipping the fascia check is why sagging gutters often come back within a season.",
        priceRange: "$200 – $900",
        timeframe: "Half Day – 1 Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Sagging-gutter repairs typically run $200 to $900 depending on the length of the affected run and whether fascia needs repair. Re-hanging one twenty-foot run sits near the low end.",
          "If fascia rot runs along the whole roofline, the repair becomes a replacement, since new hangers need sound wood to hold.",
        ],
        considerationsIntro: "Before you book:",
        considerations: [
          "**Fascia condition** — probe for soft spots. If a screwdriver sinks in, the board is rotting.",
          "**Weight in the gutter** — standing water and packed debris will pull a sound gutter down again.",
          "**Old fastening method** — spikes and ferrules loosen over time; hidden hangers hold better.",
          "**Pitch** — a run that holds water needs re-sloping, not just re-hanging.",
        ],
        materialsIntro: "Typical repair materials:",
        materials: [
          "Hidden hangers",
          "Long stainless or coated screws",
          "Replacement fascia board",
          "Gutter sealant",
          "Level and chalk line for pitch",
        ],
        processIntro: "A five-step process:",
        process: [
          { title: "Inspect", description: "Fascia probed, pitch checked, and hanger condition noted." },
          { title: "Clear the Run", description: "Standing water and debris removed so the gutter can be reset." },
          { title: "Repair Fascia", description: "Soft boards replaced so new hangers have wood to hold." },
          { title: "Re-Hang", description: "Hidden hangers or long screws installed and the pitch reset." },
          { title: "Test", description: "Water run to confirm the gutter drains fully." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Fascia Inspection", description: "The installer should probe the fascia before quoting." },
          { label: "Fastener Choice", description: "Spikes and ferrules are the old method. Ask what they use to re-hang." },
          { label: "Pitch Check", description: "Ask how they verify the slope after re-hanging." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Re-hanging a gutter on rotted fascia is a repair that fails quickly, so we scope the wood first. If most of your run is sagging, replacement is often the better long-term spend and we'll quote both.",
        reasonsBullets: [
          "Fascia probed before any hanger goes in",
          "Hidden hangers or long screws, not old-style spikes",
          "Pitch verified after the re-hang",
        ],
        faqs: [
          { question: "Why are my gutters pulling away from the house?", answer: "Usually loose hangers or rotted fascia, often made worse by standing water and debris adding weight." },
          { question: "Can sagging gutters be fixed without replacing them?", answer: "Often yes, if the metal is sound and the fascia is repairable. If the gutter is bent or corroded, replacement is a better spend." },
        ],
      },
      {
        slug: "storm-damage-gutter-repair",
        title: "Storm Damage Gutter Repair",
        qualifier: "After the Wind and Debris",
        summary:
          "Gutters bent, torn loose, or crushed by wind, limbs, or debris re-hung, straightened, or replaced, with the fascia checked underneath.",
        overview:
          "Central Florida storms take gutters off the house in sections: hangers pull out, runs bend under a fallen limb, and downspouts get crushed. The repair starts with securing anything that could fall, then assesses what's bent, what's detached, and what the fascia behind it looks like. Photograph the damage before repairs start if you plan to file an insurance claim; the installer can supply an itemized estimate, but filing and coverage decisions are between you and your insurer.",
        priceRange: "$250 – $2,500",
        timeframe: "Half Day – 2 Days",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Storm repairs typically run $250 to $2,500 depending on how much of the roofline is affected. Re-hanging one detached run sits at the low end; replacing several damaged runs and a section of fascia sits near the top.",
          "Repair windows tighten after a major storm as everyone calls at once. A temporary securing job can hold until a full repair is scheduled.",
        ],
        considerationsIntro: "What to do and check after a storm:",
        considerations: [
          "**Photos first** — document the damage before anything is moved if you may file a claim.",
          "**Safety** — a hanging gutter can fall. Keep people and cars away from it.",
          "**Fascia and roof edge** — wind that pulls a gutter off can damage the wood behind it or the roof edge.",
          "**Roof damage** — if shingles or tile are also damaged, a roofer needs to look at it.",
        ],
        materialsIntro: "Common materials:",
        materials: [
          "Replacement gutter sections",
          "Hidden hangers and long screws",
          "Replacement downspouts and elbows",
          "Fascia boards where needed",
          "Sealant for re-connected joints",
        ],
        processIntro: "A repair sequence built around safety first:",
        process: [
          { title: "Secure", description: "Hanging or loose sections fastened or removed so nothing falls." },
          { title: "Assess", description: "Bent runs, detached sections, and the fascia behind them inspected." },
          { title: "Itemized Estimate", description: "Repairs listed so you can share them with your insurer if you file." },
          { title: "Repair or Replace", description: "Runs straightened and re-hung, or replaced where too bent to reuse." },
          { title: "Water Test", description: "Runs checked for flow and leaks before the crew leaves." },
        ],
        howToChooseIntro: "What to check after a storm:",
        howToChoose: [
          { label: "Itemized Estimate", description: "A line-by-line estimate is what an insurer will want to see." },
          { label: "No Pressure to Sign on the Spot", description: "Post-storm sales pressure is common. Compare at least two quotes if you can." },
          { label: "Licensed & Insured", description: "Confirm coverage before anyone goes up a ladder at your house." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A storm-damaged gutter can look fixable and hide a rotted fascia or a damaged roof edge. We check the wood and tell you when a roofer needs to look before we do anything else.",
        reasonsBullets: [
          "Loose sections secured before anything else",
          "Fascia and roof edge inspected, not just the gutter",
          "Itemized estimate you can share with your insurer",
        ],
        faqs: [
          { question: "Should I repair storm-damaged gutters right away?", answer: "Secure anything hanging right away. Permanent repairs can wait for a proper estimate, which also helps if you're filing a claim." },
          { question: "Can you help with an insurance claim?", answer: "We provide an itemized estimate and photos of the work. Filing the claim and coverage decisions are between you and your insurer." },
          { question: "Are gutters covered by homeowners insurance?", answer: "It depends on your policy and the cause of damage. Check with your insurer before repairs." },
        ],
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning & Maintenance",
    shortTitle: "Cleaning",
    number: "05",
    eyebrow: "Cleaning, Inspection & Brightening",
    heroQualifier: "Gutter Cleaning That Ends With a Water Test",
    heroParagraph:
      "Debris cleared, downspouts flushed, and problems flagged, plus written inspections and exterior cleaning for gutters that have gone streaky.",
    topicContextHeading: "Why Gutters Need Regular Attention",
    topicContextParagraphs: [
      "Clogged gutters overflow, and overflow soaks the fascia, stains siding, and pools water at the foundation. Under oaks and pines, the debris load comes back fast, and a wet, packed gutter also weighs enough to pull hangers loose.",
      "Cleaning is the cheapest maintenance on the house, and a good cleaning doubles as an inspection. The person on the ladder sees the sagging run and the leaking seam before they become a repair bill.",
    ],
    image: "/images/gutter-guards-closeup.webp",
    thumbImage: "/images/gutter-guards-closeup.webp",
    imageAlt: "Installer on a telescoping ladder checking a gutter under a dark roof edge",
    faqs: [
      {
        question: "How often should gutters be cleaned?",
        answer:
          "At least twice a year. Homes under heavy oak or pine cover often need three to four cleanings.",
      },
      {
        question: "Is gutter cleaning worth paying for?",
        answer:
          "On a one-story house you can do it yourself if you're comfortable on a ladder. On two stories or steep roofs, paying a pro is safer and usually not much more.",
      },
      {
        question: "What are the black streaks on my gutters?",
        answer:
          "Usually dirt and algae carried down the face by runoff. They clean off with the right cleaner and a soft brush, and there's no need to replace the gutter.",
      },
    ],
    services: [
      {
        slug: "gutter-cleaning",
        title: "Gutter Cleaning",
        qualifier: "Cleared and Flow-Tested",
        summary:
          "Debris cleared from gutters and downspouts, then flushed with water to confirm every run drains, with minor problems flagged.",
        overview:
          "Gutter cleaning removes leaves, shingle grit, and packed debris from the trough and clears the downspouts, then flushes the system with water to confirm it drains. It's the cheapest way to prevent overflow, ice or moss damage, and the fascia rot that follows from water sitting against wood. A good cleaning also doubles as an inspection, since the person on the ladder sees sagging, loose hangers, and leaking seams before they become a bigger bill.",
        priceRange: "$120 – $450",
        timeframe: "1–3 Hours",
        warranty: "30-Day Warranty",
        priceScopeParagraphs: [
          "Cleaning typically runs $120 to $450 depending on linear feet, number of stories, and how packed the gutters are. A one-story home with light debris sits at the low end; a two-story home under heavy tree cover sits at the high end.",
          "Frequency drives long-term cost. Homes under oaks or pines often need cleaning two to four times a year, and that's when gutter guards start to earn their price.",
        ],
        considerationsIntro: "What changes the price:",
        considerations: [
          "**Stories and access** — second-story work costs more and takes longer.",
          "**Tree cover** — heavy leaf, needle, or moss loads mean more debris and more frequent visits.",
          "**Downspout clogs** — a blocked downspout needs to be cleared and sometimes flushed from the bottom.",
        ],
        materialsIntro: "What the crew uses:",
        materials: [
          "Gutter scoops and hand tools",
          "Hose and flushing wand",
          "Tarps for ground debris",
          "Leaf blower for roof edges",
          "Extension ladders or ladder stabilizers",
        ],
        processIntro: "A short, four-step visit:",
        process: [
          { title: "Clear the Troughs", description: "Debris scooped out by hand and bagged." },
          { title: "Clear the Downspouts", description: "Downspouts checked and unclogged." },
          { title: "Flush & Test", description: "Water run through every run to confirm flow and spot leaks." },
          { title: "Report", description: "Any sagging, loose hangers, or leaks noted for you." },
        ],
        howToChooseIntro: "What to check when hiring:",
        howToChoose: [
          { label: "Flush Included", description: "A cleaning without a water test can miss clogged downspouts." },
          { label: "Debris Removal", description: "Confirm debris is bagged and hauled, not dropped on your yard." },
          { label: "Insured Crew", description: "Ladder work carries real injury risk. Ask for proof of coverage." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Gutter cleaning is a good DIY job on a one-story house if you're comfortable on a ladder. On two stories or steep roofs, it's worth paying for. We'd rather you skip a cleaning you don't need than book one out of habit.",
        reasonsBullets: [
          "Water-flushed to confirm every run drains",
          "Problems flagged during the visit, not after",
          "Debris bagged and hauled",
        ],
        faqs: [
          { question: "How often should gutters be cleaned?", answer: "At least twice a year. Homes under heavy tree cover may need three to four cleanings." },
          { question: "How much does gutter cleaning cost?", answer: "Typically $120 to $450, depending on linear feet, stories, and how packed the gutters are." },
          { question: "Will gutter guards eliminate cleaning?", answer: "No. They reduce frequency, but fine debris still gets through and guards need an occasional check." },
        ],
      },
      {
        slug: "gutter-inspection",
        title: "Gutter Inspection",
        qualifier: "A Written Report Before You Spend",
        summary:
          "A walk of the full roofline with a water test, pitch check, fascia probe, and photo report, so you know what actually needs fixing.",
        overview:
          "A gutter inspection answers one question: do these gutters need cleaning, repair, or replacement, and how urgent is it? The inspector walks the roofline, runs water through every run, checks the pitch, probes the fascia for rot, and photographs anything that needs attention. You get a written list with priorities, which is useful before you buy a house, after a storm, or when quotes on the same house disagree.",
        priceRange: "$100 – $250",
        timeframe: "1–2 Hours",
        warranty: "30-Day Warranty",
        priceScopeParagraphs: [
          "Inspections typically run $100 to $250 depending on the size of the house and the number of stories. Many installers credit the fee against repair or replacement work booked afterward.",
          "A free estimate covers the work an installer is bidding on. An inspection is for when you want a report you can use whether or not you hire that installer.",
        ],
        considerationsIntro: "When an inspection is worth paying for:",
        considerations: [
          "**Buying or selling** — a written report gives you leverage on a price or a repair credit.",
          "**Conflicting quotes** — an independent report shows which quote is scoped correctly.",
          "**After a storm** — documents damage before repairs.",
          "**Recurring overflow** — finds the cause before you pay to replace.",
        ],
        materialsIntro: "What the inspector brings:",
        materials: [
          "Extension ladder or lift",
          "Hose for a water test",
          "Level for pitch checks",
          "Screwdriver for probing fascia",
          "Camera for photo report",
        ],
        processIntro: "A short, methodical visit:",
        process: [
          { title: "Walk the Roofline", description: "Every run, corner, outlet, and downspout checked visually." },
          { title: "Water Test", description: "Water run through each run to check flow, pitch, and leaks." },
          { title: "Probe the Fascia", description: "Wood behind the gutter tested for rot." },
          { title: "Photograph", description: "Problem spots documented." },
          { title: "Written Report", description: "Findings listed by priority with a suggested fix for each." },
        ],
        howToChooseIntro: "What a useful inspection includes:",
        howToChoose: [
          { label: "Water Test", description: "Looking isn't enough. Pitch and leaks show up under flow." },
          { label: "Written Report", description: "You should get photos and a list, not just a verbal summary." },
          { label: "No Sales Script", description: "A good inspector tells you if nothing needs doing." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "We'd rather tell you your gutters are fine than sell you a repair. If nothing needs work, the report says that, and you've spent the fee to avoid a bigger bill.",
        reasonsBullets: [
          "Water-tested, not just looked at",
          "Fascia probed for rot",
          "Written report with photos and priorities",
        ],
        faqs: [
          { question: "How much does a gutter inspection cost?", answer: "Typically $100 to $250, and often credited toward work you book afterward." },
          { question: "How long does an inspection take?", answer: "One to two hours for most homes." },
          { question: "Is a gutter inspection part of a home inspection?", answer: "General home inspections usually look at gutters briefly. A dedicated inspection includes a water test and a fascia check." },
        ],
      },
      {
        slug: "gutter-brightening",
        title: "Gutter Exterior Cleaning & Brightening",
        qualifier: "Streaks and Algae Off the Face",
        summary:
          "Black streaks, algae, and oxidation removed from the outside of aluminum gutters and downspouts, without harming the finish.",
        overview:
          "The dark vertical streaks on a gutter face are dirt and algae carried down by runoff, and in Florida's humidity they come back fast. They're cosmetic, and they don't mean the gutter is failing. Brightening cleans the outside of the gutters and downspouts with a gutter-safe cleaner and a soft brush or low-pressure wash, and it often takes a house from looking neglected to looking maintained without replacing anything.",
        priceRange: "$120 – $450",
        timeframe: "1–3 Hours",
        warranty: "30-Day Warranty",
        priceScopeParagraphs: [
          "Exterior cleaning typically runs $120 to $450 depending on linear feet and the number of stories. It's often booked together with an interior gutter cleaning at a lower combined price.",
          "Heavy oxidation, where the finish has chalked, may not clean fully. The installer tells you what's realistic before starting.",
        ],
        considerationsIntro: "What to know before booking:",
        considerations: [
          "**Finish condition** — a baked-on finish cleans well. A chalky, oxidized one may only improve.",
          "**Pressure** — high pressure can strip the finish. Soft washing and hand brushing are safer.",
          "**Bundle with cleaning** — both jobs use the same ladder setup.",
          "**Runoff staining** — streaks return if the roof above is shedding algae or debris.",
        ],
        materialsIntro: "What the crew uses:",
        materials: [
          "Gutter-safe cleaner",
          "Soft brushes and sponges",
          "Low-pressure wash system",
          "Ladder stabilizers",
          "Drop cloths for landscaping",
        ],
        processIntro: "A four-step visit:",
        process: [
          { title: "Test a Spot", description: "Cleaner tried on a hidden section to confirm it's safe for the finish." },
          { title: "Apply Cleaner", description: "Gutter and downspout faces treated." },
          { title: "Brush & Rinse", description: "Streaks brushed off and the surface rinsed clean." },
          { title: "Walkthrough", description: "Results checked with you." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Low Pressure", description: "Ask how they clean. A pressure washer can damage a baked-on finish." },
          { label: "Spot Test", description: "A good crew tests a hidden section first." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Brightening is cosmetic. If your gutters are sagging or leaking, cleaning the outside doesn't fix them, and we'd point you to a repair instead.",
        reasonsBullets: [
          "Gutter-safe cleaner, tested first",
          "Low-pressure methods that protect the finish",
          "Honest about what the finish can recover",
        ],
        faqs: [
          { question: "Why do gutters get black streaks?", answer: "Dirt and algae carried down the face by runoff. They're common in humid climates." },
          { question: "Can black streaks be removed?", answer: "Usually, with the right cleaner and a soft brush. Heavily oxidized finishes may only improve." },
          { question: "Do I need to replace stained gutters?", answer: "No. Staining is cosmetic and cleans off in most cases." },
        ],
      },
    ],
  },
  {
    slug: "downspouts",
    title: "Downspouts",
    shortTitle: "Downspouts",
    number: "06",
    eyebrow: "Installation, Repair & Extensions",
    heroQualifier: "Downspouts That Move Water Away",
    heroParagraph:
      "Downspouts sized and placed for your roof area, repaired or replaced when they fail, and extended so water lands well away from the foundation.",
    topicContextHeading: "Where the Water Goes Matters",
    topicContextParagraphs: [
      "A gutter is only as good as where it sends the water. A downspout that empties beside the foundation puts hundreds of gallons of roof water into the soil next to your slab every storm, and that causes cracked walls, damp crawlspaces, and settling far more often than the gutter itself failing.",
      "Downspouts fail quietly: a crushed elbow, a detached section, a clog no one notices until the gutter overflows. Count, size, and outlet location are the three things worth checking on every house.",
    ],
    image: "/images/seamless-gutter-downspout-tile-roof.webp",
    thumbImage: "/images/seamless-gutter-downspout-mobile.webp",
    imageAlt: "Close-up of a dark gutter and round downspout under a terracotta tile roof",
    faqs: [
      {
        question: "How many downspouts does a house need?",
        answer:
          "A common rule of thumb is one per 30 to 40 feet of gutter, with more for large roof planes or heavy rain.",
      },
      {
        question: "How far from the house should a downspout empty?",
        answer:
          "Several feet at minimum, and farther on flat lots. Extensions or a buried drain line carry water well away from the foundation.",
      },
      {
        question: "Can downspouts be moved?",
        answer:
          "Yes. Outlets can be relocated, extended, or tied into a buried line, and moving them is often the cheapest fix for a wet foundation.",
      },
    ],
    services: [
      {
        slug: "downspout-installation",
        title: "Downspout Installation",
        qualifier: "Sized and Placed to Drain",
        summary:
          "New downspouts added or relocated, sized to the roof area they serve, with outlets aimed away from the foundation.",
        overview:
          "Downspouts carry water from the gutter to the ground. Too few, too small, or badly placed, and gutters overflow no matter how new they are. The installer adds downspouts where a long run has none, upsizes to 3x4 where the roof area calls for it, and relocates outlets that dump beside the foundation. A common rule of thumb is one downspout per 30 to 40 feet of gutter, with more where a large roof plane funnels into one run.",
        priceRange: "$200 – $1,200",
        timeframe: "Half Day – 1 Day",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Downspout installation typically runs $200 to $1,200, priced per downspout with extra for upsizing and custom offsets. Adding one downspout to a first-floor run sits at the low end; adding several and upsizing sits near the top.",
          "Second-story downspouts need longer runs and more brackets, which adds labor.",
        ],
        considerationsIntro: "Points that shape the job:",
        considerations: [
          "**Count** — too few downspouts is a common cause of overflow. One per 30 to 40 feet is a starting point.",
          "**Size** — a 3x4 downspout has twice the opening area of a 2x3.",
          "**Outlet location** — where the water lands matters as much as the downspout itself.",
          "**Elbows and offsets** — every bend slows flow and catches debris. Fewer is better.",
        ],
        materialsIntro: "Materials for downspout work:",
        materials: [
          "Aluminum 2x3 or 3x4 downspouts",
          "Round downspouts where they fit the style",
          "Elbows and offsets in matching color",
          "Straps and brackets",
          "Gutter outlets and sealant",
          "Splash blocks",
        ],
        processIntro: "A quick five-step process:",
        process: [
          { title: "Assess Flow", description: "The installer checks roof area per run to decide count and size." },
          { title: "Plan Outlets", description: "Discharge points chosen away from foundation and walkways." },
          { title: "Cut the Outlet", description: "New outlet opened in the gutter and sealed." },
          { title: "Install", description: "Downspouts cut, fitted, and strapped to the wall." },
          { title: "Flow Test", description: "Water run through to confirm drainage and check for leaks." },
        ],
        howToChooseIntro: "What to look for:",
        howToChoose: [
          { label: "Count Justified", description: "The installer should explain why the downspout count fits your roof." },
          { label: "Outlet Plan", description: "Ask where each downspout empties before you sign." },
          { label: "Sealed Outlets", description: "A new outlet cut into a gutter must be sealed, or it leaks at the joint." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Most drainage problems come from where the water lands, not the gutter. If your problem is a wet foundation, moving the outlets can fix it for less than new gutters would cost.",
        reasonsBullets: [
          "Downspout count and size justified in the estimate",
          "Outlets planned away from the foundation",
          "Water-tested before the crew leaves",
        ],
        faqs: [
          { question: "How many downspouts do I need?", answer: "A common rule of thumb is one per 30 to 40 feet of gutter, with more for large roof planes or heavy rain." },
          { question: "Can I add a downspout to existing gutters?", answer: "Yes. It's a common fix for overflow at the far end of a long run." },
          { question: "Should downspouts be 2x3 or 3x4?", answer: "3x4 has twice the opening area. It's worth it on large roof sections and in heavy-rain climates." },
        ],
      },
      {
        slug: "downspout-repair-replacement",
        title: "Downspout Repair & Replacement",
        qualifier: "Fixed, Not Patched",
        summary:
          "Crushed, detached, clogged, or leaking downspouts repaired or replaced, with elbows, straps, and outlets checked along the whole run.",
        overview:
          "Downspouts fail in a few predictable ways: a crushed or dented section that restricts flow, a section that has pulled away from its straps, a clog at an elbow, or a leaking joint that soaks the wall. The repair clears or replaces the failed part, re-secures the run, and water-tests it end to end. If a downspout keeps clogging at the same elbow, the fix is usually changing the route, not clearing it again.",
        priceRange: "$120 – $700",
        timeframe: "Half Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Downspout repairs typically run $120 to $700 depending on how many sections are damaged and how high they are. Re-securing one loose section sits at the low end; replacing a full second-story run sits near the top.",
          "Where a downspout is old and dented in several places, replacing the run costs little more than patching it.",
        ],
        considerationsIntro: "What to check before booking:",
        considerations: [
          "**Where it clogs** — repeat clogs at one spot usually point to a bad bend or an undersized downspout.",
          "**Matching** — replacement sections need to match the size, shape, and color of the existing run.",
          "**Outlet condition** — a failing gutter outlet can look like a downspout problem.",
          "**Wall damage** — a leaking joint that has soaked the wall may need siding or paint repair separately.",
        ],
        materialsIntro: "Typical repair materials:",
        materials: [
          "Replacement downspout sections",
          "Elbows and offsets",
          "Straps and brackets",
          "Sealant and rivets",
          "Gutter outlets",
        ],
        processIntro: "A short repair sequence:",
        process: [
          { title: "Find the Problem", description: "Water run through the downspout to locate clogs, leaks, and crushed sections." },
          { title: "Clear or Remove", description: "Clogs cleared or damaged sections removed." },
          { title: "Replace & Re-Secure", description: "New sections fitted and strapped to the wall." },
          { title: "Seal Joints", description: "Joints and outlets sealed." },
          { title: "Flow Test", description: "Water run through to confirm it drains." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Root Cause", description: "Ask why it failed. A repeat clog needs a reroute, not another cleaning." },
          { label: "Matched Parts", description: "Replacement parts should match your existing size and shape." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A downspout patched over the same bad elbow will clog again. We look for the reason it failed before quoting the fix.",
        reasonsBullets: [
          "Water-tested end to end",
          "Repeat clogs traced to the cause",
          "Matched parts, sealed joints",
        ],
        faqs: [
          { question: "How do I unclog a downspout?", answer: "Flush it with a hose from the top, and if that fails, from the bottom. A stubborn clog at an elbow may need the section removed." },
          { question: "Should I repair or replace a dented downspout?", answer: "One dent can often be replaced by section. Several dents along the run are cheaper to replace as a whole." },
          { question: "Why does my downspout keep clogging?", answer: "Usually a tight bend, an undersized downspout, or debris getting past the gutter. Guards or a reroute can help." },
        ],
      },
      {
        slug: "downspout-extensions",
        title: "Downspout Extensions",
        qualifier: "Water Landed Away From the Wall",
        summary:
          "Above-ground extensions, flexible or hard, that carry downspout water several feet from the foundation without digging.",
        overview:
          "The cheapest fix for a wet foundation is often a longer downspout. An extension carries water several feet from the house, and on a lot that slopes away it can be all you need. Options include rigid aluminum or PVC extensions, flip-up extensions that lift out of the way for mowing, and flexible hoses. They work best where the ground slopes away, and they're not right where a walkway or a mower has to cross them.",
        priceRange: "$100 – $600",
        timeframe: "Half Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Extensions typically run $100 to $600 for a whole house, depending on how many downspouts need them and how long they are. Basic splash blocks cost the least; rigid extensions with a stable landing cost more.",
          "If the yard is flat or the extension would cross a walkway, a buried drain is a better answer than a longer extension.",
        ],
        considerationsIntro: "Before choosing an extension:",
        considerations: [
          "**Slope** — an extension only works if the ground falls away from the house.",
          "**Traffic** — mowers, walkways, and kids don't mix well with extensions lying on the lawn.",
          "**Style** — flip-up and pop-up types stay out of the way when dry.",
          "**Length** — several feet from the foundation is the minimum, and more is better on flat lots.",
        ],
        materialsIntro: "Common extension types:",
        materials: [
          "Rigid aluminum or PVC extension",
          "Flip-up extension",
          "Flexible extension hose",
          "Concrete or plastic splash block",
          "Ground stakes or anchors",
        ],
        processIntro: "A quick install:",
        process: [
          { title: "Check the Slope", description: "The lot is checked to make sure water will run away from the house." },
          { title: "Choose the Type", description: "Extension chosen for traffic and appearance." },
          { title: "Install", description: "Extension fitted to each downspout and anchored." },
          { title: "Test", description: "Water run to confirm it lands where intended." },
        ],
        howToChooseIntro: "What to ask:",
        howToChoose: [
          { label: "Where It Lands", description: "The installer should show you where the water ends up." },
          { label: "Honest Alternative", description: "On flat lots, a buried drain may be a better answer." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "An extension that empties onto a flat lot just moves the puddle a few feet. If your yard doesn't slope away, we'd quote a buried drain instead.",
        reasonsBullets: [
          "Slope checked before an extension is chosen",
          "Type matched to traffic in the yard",
          "Buried drain quoted when an extension won't do",
        ],
        faqs: [
          { question: "How long should a downspout extension be?", answer: "At least several feet from the foundation, and longer on flat lots. Longer is better as long as the water can keep moving." },
          { question: "Are flip-up extensions any good?", answer: "Yes, for lawns you mow. They lift out of the way and drop back down when water flows." },
          { question: "Will an extension fix a wet foundation?", answer: "Often, if the ground slopes away from the house. If it doesn't, a buried drain is the better fix." },
        ],
      },
    ],
  },
  {
    slug: "gutter-guards",
    title: "Gutter Guards",
    shortTitle: "Guards",
    number: "07",
    eyebrow: "Debris Control",
    heroQualifier: "Gutter Guards Matched to Your Debris",
    heroParagraph:
      "Micro-mesh, screen, and reverse-curve guards chosen for the leaves, pine needles, and rain load your home actually gets.",
    topicContextHeading: "Guards Cut Cleaning, They Don't End It",
    topicContextParagraphs: [
      "Gutter guards cover the trough so leaves and larger debris ride off the roof edge instead of packing the gutter. They come in several styles, and none of them fits every roof, every tree, or every storm.",
      "The right choice depends on what falls on your house and how hard it rains. Oak leaves, pine needles, and shingle grit each behave differently against different guards, and a guard that overshoots in a downpour is worse than no guard at all.",
    ],
    image: "/images/gutter-guards-closeup.webp",
    thumbImage: "/images/gutter-guards-closeup.webp",
    imageAlt: "Installer on a telescoping ladder checking a gutter under a dark roof edge",
    faqs: [
      {
        question: "Do gutter guards work?",
        answer:
          "They cut how often you clean, not whether you inspect. Fine debris still gets through most guards, and some styles can overshoot in heavy rain.",
      },
      {
        question: "Which gutter guard is best?",
        answer:
          "It depends on your debris. Micro-mesh handles fine debris; screens handle leaves. No one style fits every roof.",
      },
      {
        question: "Can guards be added to old gutters?",
        answer:
          "Yes, if the gutters are sound. Guards on failing gutters are money spent on the wrong end of the problem.",
      },
    ],
    services: [
      {
        slug: "gutter-guard-installation",
        title: "Gutter Guard Installation",
        qualifier: "Matched to Your Debris",
        summary:
          "Micro-mesh, screen, and reverse-curve guards fitted to your gutters, chosen for the leaves, needles, and rain load your home actually gets.",
        overview:
          "Gutter guards cover the trough so leaves and larger debris ride off the roof edge instead of packing the gutter. They come in a few styles: micro-mesh that filters fine debris, perforated or screen guards that stop leaves, foam and brush inserts, and reverse-curve covers that shed water around a curved lip. None is maintenance-free. Reverse-curve styles can overshoot the gutter in a heavy downpour, and screens with large openings let pine needles through.",
        priceRange: "$1,000 – $4,500",
        timeframe: "1 Day",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Gutter guards typically run $1,000 to $4,500 for a whole house, at roughly $5 to $25 per linear foot depending on the style. Micro-mesh sits near the high end; basic screens sit near the low end.",
          "Guards cost more than a year or two of cleanings, so the payoff is over several years, particularly on two-story homes or lots with heavy tree cover.",
        ],
        considerationsIntro: "Before you pick a style:",
        considerations: [
          "**Debris type** — oak leaves, pine needles, and shingle grit each behave differently against different guards.",
          "**Rain intensity** — in heavy-downpour areas, ask whether a reverse-curve style will overshoot.",
          "**Roof compatibility** — some guards slide under shingles, which can affect a shingle warranty.",
          "**Maintenance expectations** — plan on an inspection once or twice a year regardless.",
        ],
        materialsIntro: "Common guard materials:",
        materials: [
          "Stainless micro-mesh with aluminum frame",
          "Aluminum perforated covers",
          "Reverse-curve aluminum covers",
          "Foam inserts",
          "Brush inserts",
          "Stainless screws",
        ],
        processIntro: "A one-day install:",
        process: [
          { title: "Debris Assessment", description: "The installer notes what falls on your roof to choose a style." },
          { title: "Clean the Gutters", description: "Gutters cleaned and flushed before any guard goes on." },
          { title: "Fit Guards", description: "Guards cut and fitted along each run." },
          { title: "Secure", description: "Guards fastened or slid into place per the manufacturer's method." },
          { title: "Flow Test", description: "Water run over the guards to confirm it enters the gutter." },
        ],
        howToChooseIntro: "What separates a good guard installer from a salesperson:",
        howToChoose: [
          { label: "Debris Question", description: "A good installer asks what trees you have before recommending a style." },
          { label: "Honest Limits", description: "Ask what the guard does not stop. If the answer is 'nothing,' be skeptical." },
          { label: "Shingle Warranty Check", description: "Ask whether the install affects your roof's shingle warranty." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Guards are not the right buy for every house. If your gutters stay clear, or you have almost no trees, cleaning is cheaper than guards. We'd rather tell you that than sell you a system you don't need.",
        reasonsBullets: [
          "Style chosen against your actual debris",
          "Limits of each guard type explained up front",
          "Shingle warranty impact checked before install",
        ],
        faqs: [
          { question: "Do gutter guards stop all cleaning?", answer: "No. They reduce how often you clean, but fine debris still gets through and guards need a periodic check." },
          { question: "Which gutter guard is best?", answer: "It depends on your debris. Micro-mesh handles fine debris; screens handle leaves. No one style fits every roof." },
          { question: "Can guards be added to old gutters?", answer: "Yes, if the gutters are sound. Guards on failing gutters are money spent on the wrong end of the problem." },
        ],
      },
      {
        slug: "micro-mesh-gutter-guards",
        title: "Micro-Mesh Gutter Guards",
        qualifier: "For Fine Debris",
        summary:
          "Stainless micro-mesh guards that filter pine needles, shingle grit, and oak pollen, fitted to sound gutters with the right pitch.",
        overview:
          "Micro-mesh guards use a fine stainless mesh over an aluminum frame to keep out much of what larger-opening guards let through: pine needles, seed pods, shingle grit, and some pollen. They cost more than screens, and they need clean, properly pitched gutters to work. Fine debris can film over the mesh surface, so plan on a periodic brush-off, and know that a clogged mesh sheds water over the edge in a heavy downpour.",
        priceRange: "$1,800 – $5,500",
        timeframe: "1 Day",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Micro-mesh typically runs $1,800 to $5,500 for a whole house, at roughly $8 to $25 per linear foot installed. It's the priciest guard style, and the one with the best track record against fine debris.",
          "Some styles slide under the shingles, which can affect a shingle warranty. Ask before install.",
        ],
        considerationsIntro: "Things to weigh:",
        considerations: [
          "**Debris type** — micro-mesh earns its price under pines and where shingle grit is heavy.",
          "**Roof compatibility** — check whether the guard tucks under the shingle course and what that does to the roof warranty.",
          "**Pitch and condition** — the gutter must be clean and draining before a guard goes on.",
          "**Maintenance** — an occasional brush-off keeps the mesh flowing.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Stainless micro-mesh screen",
          "Aluminum frame",
          "Stainless screws",
          "Hidden or under-shingle mounting hardware",
          "Gutter sealant where needed",
        ],
        processIntro: "A one-day install:",
        process: [
          { title: "Debris Assessment", description: "The installer checks what falls on your roof and how the gutters are draining." },
          { title: "Clean & Flush", description: "Gutters cleaned and water-tested before any guard goes on." },
          { title: "Fit", description: "Guards cut and fitted along each run." },
          { title: "Secure", description: "Guards fastened or slid into place per the manufacturer's method." },
          { title: "Flow Test", description: "Water run over the guards to confirm it enters the gutter." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Shingle Warranty", description: "Ask whether installation affects your roof's warranty." },
          { label: "Honest Limits", description: "Ask what the guard does not stop." },
          { label: "Mesh Material", description: "Stainless holds up. Cheaper plastic or aluminum mesh can sag or corrode." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Micro-mesh is the best guard for fine debris, and it isn't the right buy for a house with few trees. If cleaning once a year does the job, the guard costs more than it saves.",
        reasonsBullets: [
          "Stainless mesh, not plastic",
          "Roof warranty impact checked before install",
          "Gutters cleaned and tested before guards go on",
        ],
        faqs: [
          { question: "Do micro-mesh gutter guards stop pine needles?", answer: "Mostly, yes. It's the style with the best record against needles, though fine debris can still film over the surface." },
          { question: "Do micro-mesh guards need cleaning?", answer: "Occasionally. A brush-off or rinse once or twice a year keeps water flowing through the mesh." },
          { question: "Are micro-mesh guards worth the cost?", answer: "Under pines or in a house with heavy shingle grit, often. With few trees, cleaning is cheaper." },
        ],
      },
      {
        slug: "gutter-guard-repair-replacement",
        title: "Gutter Guard Repair & Replacement",
        qualifier: "Fixed or Swapped Out",
        summary:
          "Bent, lifted, or storm-blown guards re-secured or replaced, and failing guards swapped for a style that fits your debris.",
        overview:
          "Guards get bent by ladders, lifted by wind, or removed and never put back after a gutter repair. Sometimes the problem is the guard itself: the wrong style for the trees, or a mesh that has clogged solid. This service re-secures loose guards, replaces damaged sections, swaps a failing style for a better one, and re-installs guards after gutter work. Cleaning under existing guards, which means lifting them, cleaning the trough, and putting them back, is part of the visit.",
        priceRange: "$150 – $2,500",
        timeframe: "Half Day – 1 Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Guard repairs typically run $150 to $2,500. Re-securing a few loose sections sits at the low end; removing a failed system and installing a different style on the whole house sits near the top.",
          "Guards from a manufacturer that has since gone out of business can be hard to match. In that case, replacing only the damaged runs may not look uniform.",
        ],
        considerationsIntro: "What shapes the job:",
        considerations: [
          "**Why it failed** — storm damage, wrong style, and age each call for different fixes.",
          "**Matching** — replacement sections have to fit the existing guards, or the whole run changes.",
          "**Gutter condition** — guards on a failing gutter aren't worth repairing.",
          "**Cleaning underneath** — guards have to be lifted and put back to clean the trough.",
        ],
        materialsIntro: "Typical materials:",
        materials: [
          "Replacement guard sections",
          "Stainless screws and clips",
          "Micro-mesh, screen, or reverse-curve guards",
          "Gutter sealant",
          "Hand tools for lifting and re-seating",
        ],
        processIntro: "A repair visit:",
        process: [
          { title: "Inspect", description: "Guards and the gutter beneath them checked." },
          { title: "Lift & Clean", description: "Guards lifted and the trough cleaned and flushed." },
          { title: "Repair or Replace", description: "Damaged sections re-secured, replaced, or swapped for a better style." },
          { title: "Flow Test", description: "Water run over the guards to confirm it enters the gutter." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Honest Diagnosis", description: "A good installer tells you if the guard style is wrong for your trees." },
          { label: "Matching", description: "Ask if replacement sections will match the rest." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "If your guards were sold as maintenance-free and the gutters still clog, the fix may be a different style, not another cleaning. We'd say so in the estimate.",
        reasonsBullets: [
          "Cause of failure identified first",
          "Gutter cleaned and flow-tested under the guards",
          "Replacement style recommended when the current one doesn't fit",
        ],
        faqs: [
          { question: "Why are my gutter guards not working?", answer: "Usually the wrong style for your debris, or a mesh that has clogged. A different style or a cleaning often fixes it." },
          { question: "Can gutter guards be removed for cleaning?", answer: "Yes. Most lift out or unclip. The trough is cleaned, and the guards are put back." },
          { question: "Can I replace only some of my guards?", answer: "If the style is still available. Otherwise the whole run may need to change to match." },
        ],
      },
    ],
  },
  {
    slug: "drainage-solutions",
    title: "Roof Drainage Solutions",
    shortTitle: "Drainage",
    number: "08",
    eyebrow: "Buried Drains, Emitters & Rain Barrels",
    heroQualifier: "Roof Water Carried Well Away From the House",
    heroParagraph:
      "Buried drain lines, pop-up emitters, and rain barrels that take downspout water somewhere it can't hurt the foundation.",
    topicContextHeading: "What Happens After the Downspout",
    topicContextParagraphs: [
      "When a downspout empties next to the house, the ground near the foundation stays wet. Above-ground extensions solve it on many lots. On flat lots, tight side yards, or where an extension is a tripping hazard, a buried line is the cleaner answer.",
      "Central Florida's sandy soil drains quickly in many areas, but flat lots and a high water table in the wet season can leave water sitting. A good installer checks where your lot actually drains before choosing a discharge point.",
    ],
    image: "/images/gutter-installer-sunset.webp",
    thumbImage: "/images/gutter-installer-ladder-mobile.webp",
    imageAlt: "Installer working on a dark gutter at the roof edge in late-afternoon sun",
    faqs: [
      {
        question: "Do buried downspout drains clog?",
        answer:
          "They can, especially if debris gets in. Clean-outs and a good grade make clogs rarer and easier to clear.",
      },
      {
        question: "Is a simple extension enough?",
        answer:
          "Often. If the ground drains well and the lot slopes away, a longer extension can be all you need.",
      },
      {
        question: "Can I collect roof water in a rain barrel?",
        answer:
          "Yes. Use a screened inlet and a sealed lid so mosquitoes can't breed in it, and plan an overflow path for full barrels.",
      },
    ],
    services: [
      {
        slug: "underground-downspout-drainage",
        title: "Underground Downspout Drainage",
        qualifier: "Water Carried Well Away",
        summary:
          "Buried drain lines and pop-up emitters that carry downspout water away from the foundation to a safe discharge point.",
        overview:
          "When a downspout empties next to the house, the ground near the foundation stays wet. Underground drainage solves that by connecting downspouts to buried pipe that carries water to daylight, a dry well, or a pop-up emitter well away from the structure. The installer digs a trench with steady downhill grade, lays the pipe, connects each downspout, and backfills. Utilities are located before any digging starts. Calling 811 first is required in most places, and the installer handles it.",
        priceRange: "$600 – $3,000",
        timeframe: "1–2 Days",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Underground drainage typically runs $600 to $3,000 depending on the number of downspouts tied in, the pipe length, and the terrain. A single downspout to a nearby emitter sits at the low end.",
          "Hard soil, tree roots, and buried utilities add time. Landscape restoration is not always included in the base price, so ask.",
        ],
        considerationsIntro: "Points that affect the job:",
        considerations: [
          "**Discharge point** — the water needs somewhere to go: a lower part of the lot, a street drain where allowed, or a dry well.",
          "**Slope** — the pipe needs steady downhill grade or it will hold water and clog.",
          "**Utilities** — buried lines must be located before digging.",
          "**Local rules** — some places restrict discharging roof water to the street or a neighbor's lot.",
        ],
        materialsIntro: "Materials for a buried drain:",
        materials: [
          "4-inch solid PVC or corrugated pipe",
          "Downspout adapters",
          "Pop-up emitters",
          "Catch basins or clean-out access",
          "Gravel bedding",
          "Dry-well components where needed",
        ],
        processIntro: "The process is more involved than an above-ground extension:",
        process: [
          { title: "Site Assessment", description: "Slope, soil, and discharge points evaluated." },
          { title: "Utility Locate", description: "Buried utilities marked before any digging." },
          { title: "Trench", description: "Trench dug with steady downhill grade." },
          { title: "Lay Pipe", description: "Pipe laid, connected to each downspout, and set on bedding." },
          { title: "Backfill & Restore", description: "Trench backfilled and the surface returned to grade." },
          { title: "Flow Test", description: "Water run through each downspout to confirm it drains." },
        ],
        howToChooseIntro: "What to check when hiring:",
        howToChoose: [
          { label: "Utility Locate", description: "The installer should schedule a locate before digging, no exceptions." },
          { label: "Discharge Plan", description: "Ask where the water ends up and whether that's allowed locally." },
          { label: "Restoration Scope", description: "Confirm what happens to your lawn or landscaping after the trench." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Underground drainage is worth it when a wet foundation or a soggy yard is the actual problem. If a two-foot extension would do the job, that's cheaper, and we'd quote that first.",
        reasonsBullets: [
          "Utilities located before digging",
          "Discharge point checked against local rules",
          "Simpler extension quoted first when it will work",
        ],
        faqs: [
          { question: "Do buried downspout drains clog?", answer: "They can, especially if debris gets in. Clean-outs and a good grade make clogs rarer and easier to clear." },
          { question: "How deep do drain lines go?", answer: "Depth depends on soil and local practice, but the key is steady downhill grade, not a specific depth." },
          { question: "Is a simple extension enough?", answer: "Often. If the ground drains well and the lot slopes away, a longer extension can be all you need." },
        ],
      },
      {
        slug: "pop-up-drain-emitters",
        title: "Pop-Up Drain Emitters",
        qualifier: "Buried Line, Clean Lawn",
        summary:
          "Spring-loaded emitters at the end of a buried downspout line that stay flush with the grass until water flows through.",
        overview:
          "A pop-up drain emitter sits at the end of a buried pipe that runs from your downspout. When water flows, the lid lifts and releases it onto the lawn or into a swale away from the house. When it's dry, the lid drops flush with the grass so the mower goes right over. It's the tidy way to finish a buried downspout drain, and it works where the ground falls away from the emitter.",
        priceRange: "$250 – $900",
        timeframe: "Half Day – 1 Day",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Pop-up emitters typically run $250 to $900 per downspout, depending on the pipe length and soil. They usually come as part of a buried drain job.",
          "Where the discharge point is close to the house, or the lot is very flat, the emitter can leave water sitting. A dry well or a different discharge may be a better fit.",
        ],
        considerationsIntro: "What shapes the job:",
        considerations: [
          "**Discharge location** — the emitter has to sit where water can run off, away from the house.",
          "**Slope** — the buried line needs steady downhill grade.",
          "**Debris** — leaves can jam the lid. A screen or filter helps.",
          "**Local rules** — check for restrictions on discharging roof water toward streets or neighbors.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Pop-up emitter with a spring lid",
          "4-inch solid PVC or corrugated pipe",
          "Downspout adapter",
          "Gravel bedding",
          "Debris screen at the downspout",
        ],
        processIntro: "A short install:",
        process: [
          { title: "Choose the Discharge Point", description: "A spot with room to run off, well away from the house." },
          { title: "Locate Utilities", description: "Buried utilities marked before any digging." },
          { title: "Trench & Lay Pipe", description: "Pipe laid with steady downhill grade." },
          { title: "Set the Emitter", description: "Emitter installed flush with the grade." },
          { title: "Flow Test", description: "Water run through to confirm the lid opens and drains." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Utility Locate", description: "The installer should schedule a locate before digging." },
          { label: "Discharge Plan", description: "Ask where the water ends up and whether that's allowed locally." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "An emitter that discharges ten feet from the house on a flat lot just moves the wet spot. We check where your lot actually drains first, and say so if a dry well is the better answer.",
        reasonsBullets: [
          "Utilities located before digging",
          "Discharge point checked for drainage",
          "Debris screen at the downspout",
        ],
        faqs: [
          { question: "How does a pop-up drain emitter work?", answer: "A spring-loaded lid stays closed when dry and lifts when water flows through, releasing it onto the ground." },
          { question: "Can a lawn mower run over a pop-up emitter?", answer: "Yes. When closed, the lid sits flush with the grass." },
          { question: "Do pop-up emitters clog?", answer: "They can, with leaves or debris. A screen at the downspout and an occasional check keep them working." },
        ],
      },
      {
        slug: "rain-barrel-installation",
        title: "Rain Barrel Installation",
        qualifier: "Roof Water You Can Use",
        summary:
          "Rain barrels connected to a downspout with a diverter, screened inlet, and overflow line, for garden watering without a mosquito problem.",
        overview:
          "A rain barrel catches water from a downspout and stores it for garden and lawn watering. Installation includes a stand or base, a diverter that sends water into the barrel and sends the excess back down the downspout, a screened inlet, and an overflow line. In Florida, the screen and a sealed lid matter more than anywhere: an open barrel becomes a mosquito nursery within days.",
        priceRange: "$150 – $700",
        timeframe: "Half Day",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Rain barrel installations typically run $150 to $700 depending on barrel size, stand, and diverter. A single barrel on an existing downspout sits at the low end; a linked multi-barrel setup sits near the top.",
          "A barrel is not drainage. It fills quickly in a storm, so the downspout still needs a path for the overflow.",
        ],
        considerationsIntro: "Points that matter:",
        considerations: [
          "**Mosquitoes** — a fine screen at the inlet and a sealed lid are non-negotiable.",
          "**Overflow** — a full barrel has to send water away from the foundation.",
          "**Base** — a full barrel is heavy. It needs a solid, level stand.",
          "**Use** — the water is for irrigation, not drinking.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Rain barrel with a sealed lid",
          "Downspout diverter",
          "Fine-mesh inlet screen",
          "Overflow hose and fitting",
          "Level stand or pavers",
        ],
        processIntro: "A short install:",
        process: [
          { title: "Choose the Downspout", description: "One near the garden with room for a base." },
          { title: "Build the Base", description: "Stand or level pavers set." },
          { title: "Install the Diverter", description: "Diverter fitted into the downspout." },
          { title: "Connect Barrel & Overflow", description: "Barrel connected with a screened inlet and an overflow line." },
          { title: "Test", description: "Water run to confirm filling and overflow." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Screened Inlet", description: "Confirm a fine mesh screen and a sealed lid are included." },
          { label: "Overflow Plan", description: "Ask where the excess goes when the barrel is full." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A rain barrel is a garden accessory, not a drainage fix. If your real problem is water at the foundation, a barrel won't solve it, and we'd point you to an extension or a buried drain.",
        reasonsBullets: [
          "Screened inlet and sealed lid as standard",
          "Overflow path planned",
          "Stable base for a full barrel",
        ],
        faqs: [
          { question: "Do rain barrels attract mosquitoes?", answer: "Only if they're open. A fine-mesh screen and a sealed lid keep mosquitoes out." },
          { question: "How much water does a rain barrel hold?", answer: "Common barrels hold 50 to 100 gallons. A single storm can fill one quickly." },
          { question: "Is rain barrel water safe to drink?", answer: "No. It's for watering plants and lawns." },
        ],
      },
    ],
  },
  {
    slug: "fascia-soffit",
    title: "Fascia, Soffit & Drip Edge",
    shortTitle: "Fascia & Soffit",
    number: "09",
    eyebrow: "The Roof Edge Behind the Gutter",
    heroQualifier: "Roof-Edge Repair That Lets Gutters Hold",
    heroParagraph:
      "Fascia boards, soffits, and drip edge repaired or replaced so new gutters have solid wood to hang on and water goes into the trough.",
    topicContextHeading: "Why the Roof Edge Decides How Long Gutters Last",
    topicContextParagraphs: [
      "Gutters hang on the fascia board. When that wood is soft from years of overflow, no hanger will hold, and a new gutter on rotted fascia sags along the same line as the old one.",
      "The soffit under the overhang and the drip edge on top of it belong to the same system. A missing drip edge lets water run behind the gutter and onto the fascia, and a damaged soffit lets pests into the attic.",
    ],
    image: "/images/hero-gutter-roofline.webp",
    thumbImage: "/images/gutter-installer-ladder-brick.webp",
    imageAlt: "Installer and a helper working along a white gutter on a shingle roofline",
    faqs: [
      {
        question: "How do I know if my fascia is rotted?",
        answer:
          "Probe it with a screwdriver. If the tip sinks in, or the paint is bubbling and the wood feels spongy, the board is soft.",
      },
      {
        question: "Do I need to replace fascia before new gutters?",
        answer:
          "If it's soft, yes. New hangers need solid wood to hold, or the gutter pulls away within a season or two.",
      },
      {
        question: "What does drip edge do?",
        answer:
          "It's a metal strip at the roof edge that directs water into the gutter instead of behind it. Older roofs often don't have one.",
      },
    ],
    services: [
      {
        slug: "fascia-repair-replacement",
        title: "Fascia Board Repair & Replacement",
        qualifier: "Solid Wood for the Hangers",
        summary:
          "Rotted or warped fascia boards cut out and replaced, primed and painted, so new or existing gutters have something solid to hold.",
        overview:
          "Fascia is the board along the roof edge that the gutter hangs from. Years of overflow soak it, and it rots from the top down. A gutter screwed into soft fascia pulls away no matter how good the gutter is. The repair removes the gutter section, cuts out the bad wood, installs a new board (wood, composite, or aluminum-wrapped), and re-hangs the gutter. Matching paint or a wrap finish makes the repair disappear.",
        priceRange: "$400 – $2,500",
        timeframe: "1–2 Days",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Fascia repair typically runs $400 to $2,500 depending on linear feet, board height, and the material. Wood repair runs roughly $6 to $20 per linear foot; composite and aluminum wrap cost more.",
          "If the rot extends into the rafter tails or the roof sheathing, a carpenter or roofer has to handle that part.",
        ],
        considerationsIntro: "What shapes the job:",
        considerations: [
          "**Extent of rot** — probe the board along its full length, not just at one soft spot.",
          "**Material** — wood is cheapest and rots again if water gets to it. Composite and aluminum wrap last longer.",
          "**Rafter tails** — rot that runs behind the fascia can reach the framing.",
          "**Paint** — new wood needs primer and paint, or a wrap, to protect it.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Primed wood, composite, or PVC fascia board",
          "Aluminum fascia wrap",
          "Stainless or coated screws",
          "Exterior primer and paint",
          "Sealant and flashing",
        ],
        processIntro: "The usual sequence:",
        process: [
          { title: "Probe & Mark", description: "Fascia probed along its length and bad sections marked." },
          { title: "Remove Gutter Section", description: "Gutter taken down where the board is being replaced." },
          { title: "Replace the Board", description: "Rotted wood cut out and a new board fastened." },
          { title: "Prime & Finish", description: "Primer and paint applied, or the board wrapped." },
          { title: "Re-Hang Gutter", description: "Gutter re-hung on hidden hangers and re-pitched." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Rot Extent", description: "Ask how far the installer probed and whether rafter tails were checked." },
          { label: "Material Choice", description: "Ask why they recommend the material they do." },
          { label: "Finish Included", description: "Confirm primer and paint or wrap are in the estimate." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Rotted fascia repaired without fixing the overflow that rotted it will rot again. We look at why the water reached the wood before we quote the fix.",
        reasonsBullets: [
          "Rot probed along the full length",
          "Cause of overflow checked",
          "Primer and finish included",
        ],
        faqs: [
          { question: "How much does fascia replacement cost?", answer: "Typically $400 to $2,500 for most homes, depending on length and material." },
          { question: "What causes fascia rot?", answer: "Overflowing gutters, missing drip edge, and roof leaks soak the board. Wood rots when it stays wet." },
          { question: "Should I replace fascia with aluminum or composite?", answer: "Both last longer than wood. Cost and appearance decide the choice." },
        ],
      },
      {
        slug: "soffit-repair-replacement",
        title: "Soffit Repair & Replacement",
        qualifier: "Vented, Sealed, Pest-Proof",
        summary:
          "Damaged, rotted, or pest-breached soffit panels replaced with vented aluminum or vinyl, keeping attic airflow and closing gaps.",
        overview:
          "The soffit is the underside of the roof overhang, and it does two jobs: it ventilates the attic and it keeps animals out. Water damage from a leaking gutter can rot wood soffits, and gaps let birds, squirrels, and rats into the attic, which is a real problem in Central Florida. The repair replaces damaged panels with vented aluminum or vinyl, secures loose sections, and closes any entry points.",
        priceRange: "$350 – $2,800",
        timeframe: "1–2 Days",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Soffit repair typically runs $350 to $2,800 depending on linear feet and material. Replacing a few damaged panels sits at the low end; replacing a full roofline sits near the top.",
          "If animals have been in the attic, exclusion and cleanup are separate jobs handled by a wildlife or pest professional.",
        ],
        considerationsIntro: "What shapes the job:",
        considerations: [
          "**Ventilation** — attics need airflow. Replacement panels should be vented, not solid.",
          "**Cause of damage** — a leaking gutter above will damage new soffit too.",
          "**Pest entry** — gaps at corners and the fascia line are common entry points.",
          "**Material** — aluminum and vinyl don't rot. Wood needs paint and upkeep.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Vented aluminum or vinyl soffit panels",
          "J-channel and trim",
          "Stainless or coated fasteners",
          "Screen or mesh at vents",
          "Sealant for gaps",
        ],
        processIntro: "The usual sequence:",
        process: [
          { title: "Inspect", description: "Soffit checked for rot, gaps, and signs of pests." },
          { title: "Fix the Source", description: "Any gutter or roof leak above is fixed or noted." },
          { title: "Remove Damaged Panels", description: "Rotted or broken panels taken out." },
          { title: "Install New Panels", description: "Vented panels fitted with trim." },
          { title: "Close Gaps", description: "Edges and corners sealed." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Vented Panels", description: "Confirm the replacement lets the attic breathe." },
          { label: "Source of Damage", description: "Ask what caused the damage and whether that's been fixed." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "New soffit under a leaking gutter fails again. We check the gutter above before we replace what's below it, and we'd say so if a wildlife professional needs to handle what's in the attic first.",
        reasonsBullets: [
          "Vented panels to protect attic airflow",
          "Cause of the damage checked",
          "Gaps sealed against pest entry",
        ],
        faqs: [
          { question: "What does soffit do?", answer: "It covers the underside of the roof overhang and lets air into the attic, and it keeps animals out." },
          { question: "Why is my soffit rotting?", answer: "Usually water from a leaking or overflowing gutter, or a roof leak at the edge." },
          { question: "Can animals get in through soffit?", answer: "Yes. Gaps and damaged panels are common entry points for birds, squirrels, and rats." },
        ],
      },
      {
        slug: "drip-edge-installation",
        title: "Drip Edge Installation",
        qualifier: "Water Into the Gutter, Not Behind It",
        summary:
          "Metal drip edge added along the roof edge so water flows into the gutter instead of running behind it onto the fascia.",
        overview:
          "Drip edge is a metal strip at the roof edge that directs water off the roof and into the gutter. Without it, water can curl under the shingle edge and run down the back of the gutter onto the fascia, which is one of the most common reasons fascia rots. Newer roofs usually have drip edge; older ones often don't. Adding it means working at the roof edge, which is roofer territory on many homes, so we say up front who does what.",
        priceRange: "$300 – $1,800",
        timeframe: "1 Day",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Drip edge typically runs $300 to $1,800 depending on linear feet and how much of the roof edge is involved. It's usually cheaper when done together with gutter installation or fascia work.",
          "On tile roofs and some shingle roofs, a gutter apron is used in place of drip edge. The installer chooses based on the roof.",
        ],
        considerationsIntro: "What to check first:",
        considerations: [
          "**Roof type** — shingle, tile, and metal roofs use different edge details.",
          "**Roofer overlap** — installing drip edge means lifting the shingle edge. Some roofers require that they do it.",
          "**Fascia condition** — water behind the gutter often means the fascia needs attention too.",
          "**Gutter position** — the gutter has to sit so water lands in it.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Aluminum or galvanized drip edge",
          "Gutter apron for tile or low-slope edges",
          "Roofing nails or stainless screws",
          "Sealant and flashing tape",
          "Primer for any bare wood",
        ],
        processIntro: "A one-day sequence:",
        process: [
          { title: "Inspect the Edge", description: "Roof edge and fascia checked for existing drip edge and water damage." },
          { title: "Plan the Detail", description: "Drip edge or apron chosen for the roof type." },
          { title: "Lift & Install", description: "Shingle edge lifted and the drip edge slid under and fastened." },
          { title: "Seal", description: "Edges sealed and shingles re-set." },
          { title: "Water Test", description: "Gutter checked to confirm water lands in it." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Who Touches the Roof", description: "Ask who lifts the shingle edge and whether it affects your roof warranty." },
          { label: "Right Detail for the Roof", description: "Tile and shingle need different edge solutions." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Drip edge is cheap protection, and if your roof is due for replacement soon, it's often better added by the roofer at that time. We'd tell you that instead of doing it twice.",
        reasonsBullets: [
          "Detail chosen for your roof type",
          "Roof warranty impact checked",
          "Fascia checked for existing water damage",
        ],
        faqs: [
          { question: "What does drip edge do?", answer: "It directs water off the roof edge and into the gutter, so it doesn't run behind the gutter onto the fascia." },
          { question: "Does my roof need drip edge?", answer: "If water runs behind your gutters or your fascia rots, probably. Newer roofs usually have it; older ones often don't." },
          { question: "Can drip edge be added to an existing roof?", answer: "Yes, by lifting the shingle edge. On some roofs a roofer needs to do it." },
        ],
      },
    ],
  },
  {
    slug: "commercial-gutters",
    title: "Commercial Gutters",
    shortTitle: "Commercial",
    number: "10",
    eyebrow: "Offices, Retail & Multi-Unit",
    heroQualifier: "Commercial Gutter Work for Larger Rooflines",
    heroParagraph:
      "Gutter installation, cleaning, and repair for offices, retail buildings, and multi-unit properties, with lift equipment and after-hours scheduling.",
    topicContextHeading: "Why Commercial Roofs Need Their Own Plan",
    topicContextParagraphs: [
      "Commercial roofs shed far more water than a house, so the system has to be sized for it. Larger gutters, bigger downspouts, and closer hanger spacing are standard on commercial jobs.",
      "Access and scheduling matter as much as the metal. Lifts, tenant hours, and walkways that can't be blocked all shape how the job runs and what it costs.",
    ],
    image: "/images/hero-gutter-roofline.webp",
    thumbImage: "/images/hero-gutter-ladder.webp",
    imageAlt: "Installer and a helper working along a white gutter on a shingle roofline",
    faqs: [
      {
        question: "Do you work outside business hours on commercial jobs?",
        answer:
          "Yes. Early morning and weekend windows are common so entrances and parking stay open.",
      },
      {
        question: "Do commercial gutters need bigger downspouts?",
        answer:
          "Usually. Larger roof areas call for 3x4 or bigger downspouts and closer hanger spacing than a house.",
      },
      {
        question: "Can you clean gutters on a multi-story building?",
        answer:
          "Yes, with lifts or scaffolding where a ladder can't safely reach.",
      },
    ],
    services: [
      {
        slug: "commercial-gutter-installation",
        title: "Commercial Gutter Installation",
        qualifier: "For Larger Rooflines",
        summary:
          "Gutter systems for offices, retail buildings, and multi-unit properties, sized for large roof areas and installed with lift equipment where a ladder can't reach.",
        overview:
          "Commercial roofs shed far more water than a house, so the system has to be sized for it. Six-inch or larger gutters, three-by-four or bigger downspouts, and closer hanger spacing are common on commercial jobs. The crew works with lifts on tall rooflines, coordinates around tenants and business hours, and plans drainage so water doesn't pool on walkways or in parking lots.",
        priceRange: "$4,000 – $30,000",
        timeframe: "3–7 Days",
        warranty: "5-Year Warranty",
        priceScopeParagraphs: [
          "Commercial installations typically run $4,000 to $30,000, depending on linear footage, building height, and whether lift rental is needed. A small retail strip sits near the low end; a multi-story multi-unit building sits near the high end.",
          "Scheduling around tenants and access adds time. Work near entrances or parking often runs early morning or weekends so foot traffic is not blocked.",
        ],
        considerationsIntro: "What drives commercial gutter scope:",
        considerations: [
          "**Roof area** — drainage sizing follows how much roof feeds each downspout, not building footprint.",
          "**Height and access** — lifts and scaffolding cost more than ladder work and take longer to set up.",
          "**Tenant and customer access** — walkways and entrances may need to stay open, which shapes scheduling.",
          "**Discharge point** — downspouts that empty into a parking lot or sidewalk need drainage planning.",
        ],
        materialsIntro: "Heavier gauge and larger sizes than a typical residential job:",
        materials: [
          "Seamless aluminum, .032 inch or heavier",
          "6-inch or larger K-style or box gutters",
          "3x4 or larger downspouts",
          "Closely spaced heavy-duty hangers",
          "Baked-on factory finish",
          "Lift or scaffolding rental",
        ],
        processIntro: "The commercial process adds a site plan up front:",
        process: [
          { title: "Site Assessment", description: "Roof area, height, access, and drainage paths measured and noted." },
          { title: "Drainage Plan", description: "Gutter size and downspout count sized to the roof area each run serves." },
          { title: "Written Estimate", description: "Equipment, materials, and scheduling constraints itemized." },
          { title: "Schedule Around Tenants", description: "Work windows agreed to keep entrances and lots usable." },
          { title: "Install", description: "Runs formed, hung, and sealed with lift or scaffold access." },
          { title: "Water Test & Sign-Off", description: "Runs checked for flow and standing water, then walked with the property manager." },
        ],
        howToChooseIntro: "What to check when hiring for commercial gutter work:",
        howToChoose: [
          { label: "Commercial Experience", description: "Ask for a recent comparable job, not just residential references." },
          { label: "Insurance Limits", description: "Coverage limits that match the property's requirements, on request before you sign." },
          { label: "Drainage Sizing", description: "The installer should explain why the gutter and downspout sizes fit the roof area." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A commercial gutter that's too small overflows onto walkways and staining walls within the first big storm. We size the system to the roof and put the sizing rationale in writing. Very small commercial jobs, like a single awning, are often better handled by a residential-scale installer.",
        reasonsBullets: [
          "Drainage sized to the roof area, not a default",
          "Lift and scaffold work planned into the estimate",
          "Scheduling built around tenant and customer access",
          "Written sign-off with the property manager",
        ],
        faqs: [
          { question: "Do you work outside business hours on commercial jobs?", answer: "Yes. Early morning and weekend windows are common so entrances and parking stay open." },
          { question: "Do commercial gutters need bigger downspouts?", answer: "Usually. Larger roof areas call for 3x4 or bigger downspouts and closer hanger spacing than a house." },
        ],
      },
      {
        slug: "commercial-gutter-cleaning",
        title: "Commercial Gutter Cleaning",
        qualifier: "On Your Schedule, Not Your Tenants'",
        summary:
          "Scheduled gutter and downspout cleaning for offices, retail, and multi-unit buildings, using lifts where ladders can't safely reach.",
        overview:
          "Commercial gutters clog like any other, but the stakes are higher: overflow onto walkways, staining on the storefront, and water pooling in a parking lot. The crew cleans gutters and downspouts, flushes each run, and reports leaks, sagging, and drainage problems. Work is scheduled around business hours, and recurring contracts on a set interval keep the roofline clear before the wet season.",
        priceRange: "$300 – $3,000",
        timeframe: "Half Day – 2 Days",
        warranty: "30-Day Warranty",
        priceScopeParagraphs: [
          "Commercial cleaning typically runs $300 to $3,000 per visit depending on linear feet, height, and debris load. Multi-story buildings needing lifts sit at the high end.",
          "Recurring schedules usually come with a lower per-visit price than one-off calls.",
        ],
        considerationsIntro: "What shapes scope and price:",
        considerations: [
          "**Height and access** — lifts and scaffolding add cost but are safer than tall ladders.",
          "**Debris load** — buildings under trees need more frequent visits.",
          "**Downspout discharge** — clogs at ground level can back up onto walkways.",
          "**Schedule** — tenant hours and foot traffic set the work window.",
        ],
        materialsIntro: "Equipment:",
        materials: [
          "Boom or scissor lift",
          "Blower and scoops",
          "Hoses and flushing wands",
          "Barricades and cones",
          "Debris bags and tarps",
        ],
        processIntro: "The usual visit:",
        process: [
          { title: "Site Walk", description: "Roofline, access, and drainage paths noted." },
          { title: "Set Up Safely", description: "Work zone barricaded and lift or ladders positioned." },
          { title: "Clean", description: "Gutters cleared by hand and downspouts flushed." },
          { title: "Flow Test", description: "Water run through every run." },
          { title: "Report", description: "Leaks, sagging, or drainage issues noted for the property manager." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Insurance Limits", description: "Coverage that meets the property's requirements, on request." },
          { label: "Lift Capability", description: "Ask what equipment they bring for tall rooflines." },
          { label: "Recurring Plan", description: "Ask about pricing for a scheduled interval." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "Cleaning is the cheapest way to avoid a commercial overflow, and the report the crew hands back often catches a small repair before it becomes a large one.",
        reasonsBullets: [
          "Scheduled around tenant hours",
          "Water-flushed and reported",
          "Lift equipment for tall rooflines",
        ],
        faqs: [
          { question: "How often should commercial gutters be cleaned?", answer: "At least twice a year, and more often under trees. Many properties use a quarterly schedule." },
          { question: "Can you clean gutters on a multi-story building?", answer: "Yes, with lifts or scaffolding where a ladder isn't safe." },
          { question: "Do you offer recurring service?", answer: "Yes. A scheduled interval usually costs less per visit than one-off calls." },
        ],
      },
      {
        slug: "commercial-gutter-repair",
        title: "Commercial Gutter Repair",
        qualifier: "Fixed Without Closing the Doors",
        summary:
          "Leak, sag, and storm-damage repairs on commercial gutters and downspouts, scheduled around tenants and customer traffic.",
        overview:
          "On a commercial building, a failed gutter drops water on customers, staining walls and flooding walkways. Repairs cover leaking seams and outlets, sagging or detached runs, crushed downspouts, and storm damage. The crew works from lifts, keeps entrances open, and gives the property manager an itemized report. If the system is past repair, the estimate says so and quotes replacement.",
        priceRange: "$400 – $6,000",
        timeframe: "1–3 Days",
        warranty: "1-Year Warranty",
        priceScopeParagraphs: [
          "Commercial repairs typically run $400 to $6,000 depending on length, height, and access. A single leaking outlet sits at the low end; several runs on a multi-story building sit near the top.",
          "Emergency post-storm calls are priced for the speed they require. Scheduled repairs cost less.",
        ],
        considerationsIntro: "What shapes scope and price:",
        considerations: [
          "**Access** — height and obstructions decide lifts versus ladders.",
          "**Cause** — a repair that ignores why the gutter failed comes back.",
          "**Tenant impact** — work near entrances usually runs off-hours.",
          "**Repair vs. replace** — old systems with repeated failures are cheaper to replace.",
        ],
        materialsIntro: "Materials:",
        materials: [
          "Commercial-gauge aluminum sections",
          "Heavy-duty hangers",
          "3x4 or larger downspouts",
          "Outlets and elbows",
          "Commercial sealant",
        ],
        processIntro: "The usual sequence:",
        process: [
          { title: "Site Assessment", description: "Damage and drainage assessed with the property manager." },
          { title: "Itemized Estimate", description: "Repairs, access equipment, and schedule listed." },
          { title: "Schedule Around Tenants", description: "Work window agreed to keep entrances open." },
          { title: "Repair", description: "Runs re-hung, sealed, or replaced." },
          { title: "Water Test & Sign-Off", description: "Runs tested and walked with the property manager." },
        ],
        howToChooseIntro: "What to check:",
        howToChoose: [
          { label: "Commercial References", description: "Ask for a comparable recent job." },
          { label: "Itemized Report", description: "You'll want a written breakdown for records or an insurer." },
          { label: "Insurance", description: "Coverage limits that meet the property's requirements." },
        ],
        guarantee: sharedGuarantee,
        reasonsParagraph:
          "A commercial repair that only patches the symptom brings the crew back after the next storm. We look at why the run failed and tell you when replacement is the cheaper answer.",
        reasonsBullets: [
          "Itemized report for the property manager",
          "Scheduled around tenants and customers",
          "Replacement quoted when repair won't hold",
        ],
        faqs: [
          { question: "Do you offer emergency commercial gutter repair?", answer: "Yes. Emergency calls are priced for the speed required, and scheduled repairs cost less." },
          { question: "Can you repair gutters without closing entrances?", answer: "Usually. The crew barricades the work zone and keeps a clear path." },
          { question: "Should I repair or replace commercial gutters?", answer: "Repair local damage. Replace when the system fails repeatedly or in several places." },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getService(categorySlug: string, serviceSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return null;
  const service = category.services.find((s) => s.slug === serviceSlug);
  return service ? { category, service } : null;
}

export function allServices() {
  return categories.flatMap((category) =>
    category.services.map((service) => ({ category, service }))
  );
}
