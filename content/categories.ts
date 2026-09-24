// Category → service data model. Four gutter categories, twelve services.
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
    thumbImage: "/images/gutter-installer-ladder-brick.webp",
    imageAlt: "Installer on a ladder hanging a gutter along the roofline of a stone-accented home",
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
    image: "/images/seamless-gutter-downspout-tile-roof.webp",
    thumbImage: "/images/seamless-gutter-downspout-mobile.webp",
    imageAlt: "Close-up of a dark seamless gutter and downspout under a terracotta tile roof",
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
    slug: "gutter-repair",
    title: "Gutter Repair",
    shortTitle: "Repair",
    number: "03",
    eyebrow: "Repairs & Cleaning",
    heroQualifier: "Gutter Repair That Fixes the Cause",
    heroParagraph:
      "Leaks sealed, sagging runs re-hung, and clogged gutters cleaned out, with an honest answer when repair isn't the right spend.",
    topicContextHeading: "When a Repair Is the Right Call",
    topicContextParagraphs: [
      "Most gutter problems are local: a leaking seam, a section pulled loose from the fascia, a clogged downspout. Those are repair jobs, and they cost a fraction of replacement.",
      "The hard part of a repair is diagnosing the cause. A gutter that sags might have failed hangers, rotted fascia, or standing water weighing it down from a bad pitch. Patching the symptom without finding the cause means the same call next season.",
    ],
    image: "/images/hero-gutter-roofline.webp",
    thumbImage: "/images/gutter-guards-closeup.webp",
    imageAlt: "Installer working on a white gutter along a shingle roofline with a helper on the roof",
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
    ],
  },
  {
    slug: "downspouts-gutter-guards",
    title: "Downspouts & Gutter Guards",
    shortTitle: "Downspouts & Guards",
    number: "04",
    eyebrow: "Drainage & Debris Control",
    heroQualifier: "Downspouts and Guards That Move Water Away",
    heroParagraph:
      "Downspouts placed and sized to the roof, extensions and underground drains that carry water away from the foundation, and gutter guards matched to the debris you actually have.",
    topicContextHeading: "Where the Water Goes Matters",
    topicContextParagraphs: [
      "A gutter is only as good as where it sends the water. A downspout that empties beside the foundation puts hundreds of gallons of roof water into the soil next to your slab every storm, and that causes cracked walls, damp crawlspaces, and settling far more often than the gutter itself failing.",
      "Guards are the other half of the question. They keep the biggest debris out, but no guard fits every roof, every tree, or every storm. The right choice depends on what falls on your house and how hard it rains.",
    ],
    image: "/images/gutter-installer-sunset.webp",
    thumbImage: "/images/gutter-installer-ladder-mobile.webp",
    imageAlt: "Installer working on a dark gutter at the roof edge in late-afternoon sun, with a downspout piece resting on the shingles",
    faqs: [
      {
        question: "How far from the house should a downspout empty?",
        answer:
          "Several feet at minimum, and farther on flat lots or clay soil. Extensions or a buried drain line carry water well away from the foundation.",
      },
      {
        question: "Do gutter guards work?",
        answer:
          "They cut how often you clean, not whether you inspect. Fine debris still gets through most guards, and some styles can overshoot in heavy rain.",
      },
      {
        question: "Can downspouts be moved?",
        answer:
          "Yes. Outlets can be relocated, extended, or tied into a buried line, and moving them is often the cheapest fix for a wet foundation.",
      },
    ],
    services: [
      {
        slug: "downspout-installation-repair",
        title: "Downspout Installation & Repair",
        qualifier: "Sized and Placed to Drain",
        summary:
          "New, replaced, or relocated downspouts sized to the roof area they serve, with outlets aimed away from the foundation.",
        overview:
          "Downspouts carry water from the gutter to the ground. Too few, too small, or badly placed, and gutters overflow no matter how new they are. The installer adds or replaces downspouts, upsizes to 3x4 where the roof area calls for it, and relocates outlets that dump beside the foundation. A common rule of thumb is one downspout per 30 to 40 feet of gutter, with more where a large roof plane funnels into one run.",
        priceRange: "$150 – $1,200",
        timeframe: "Half Day – 1 Day",
        warranty: "2-Year Warranty",
        priceScopeParagraphs: [
          "Downspout work typically runs $150 to $1,200, priced per downspout with extra for upsizing and custom offsets. Replacing one damaged downspout sits at the low end; adding several and upsizing sits at the high end.",
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
          "Splash blocks",
          "Flexible or hard extensions",
        ],
        processIntro: "The process is quick:",
        process: [
          { title: "Assess Flow", description: "The installer checks roof area per run to decide count and size." },
          { title: "Plan Outlets", description: "Discharge points chosen away from foundation and walkways." },
          { title: "Install", description: "Downspouts cut, fitted, and strapped to the wall." },
          { title: "Extend", description: "Extensions or splash blocks added at each outlet." },
          { title: "Flow Test", description: "Water run through to confirm drainage and check for leaks." },
        ],
        howToChooseIntro: "What to look for:",
        howToChoose: [
          { label: "Count Justified", description: "The installer should explain why the downspout count fits your roof." },
          { label: "Outlet Plan", description: "Ask where each downspout empties before you sign." },
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
        slug: "gutter-guards",
        title: "Gutter Guards",
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
        slug: "underground-drainage",
        title: "Downspout Extensions & Underground Drainage",
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
