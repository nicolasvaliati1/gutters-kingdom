export type CityFaq = {
  question: string;
  answer: string;
};

export type City = {
  slug: string;
  name: string;
  state: string;
  govUrl: string;
  historicDistrict: boolean;
  nearbySlugs: string[];
  // Genuinely unique per city — used to avoid the city-service pages
  // reading as the same page with the name swapped. Reused across every
  // service page for that city (that's fine — it's location content, not
  // service content), but never copy-pasted between cities.
  characterParagraph: string;
  neighborhoods: string[];
  localConsideration: string;
  cityFaqs: CityFaq[];
};

// PLACEHOLDER launch market: five Florida metros. Swap or extend once the
// real service area is confirmed.
export const cities: City[] = [
  {
    slug: "miami-fl",
    name: "Miami",
    state: "FL",
    govUrl: "https://www.miamigov.com",
    historicDistrict: false,
    nearbySlugs: ["fort-lauderdale-fl"],
    characterParagraph:
      "Miami's housing stock is dominated by concrete-block ranches from the 1950s and 60s, mid-century modern homes, and newer stucco builds, many under barrel-tile or low-slope roofs. A large share of older homes were built with little or no gutter system, so roof water often lands right at the foundation and the slab.",
    neighborhoods: ["Coconut Grove", "Shenandoah", "Morningside", "Coral Way"],
    localConsideration:
      "Miami-Dade sits inside Florida's High-Velocity Hurricane Zone, which holds roofing work to stricter standards than the rest of the state. We ask every installer how gutters get fastened to the fascia and how hanger spacing is set for wind, not just how they look on install day.",
    cityFaqs: [
      {
        question: "Do Miami homes with tile roofs need a different gutter setup?",
        answer:
          "Often, yes. Barrel tile and low-slope roofs change where and how hangers attach, and tile edges can shed water faster and farther than shingle. The installer scopes the profile and hanger type during the estimate, not on install day.",
      },
      {
        question: "My Miami house has no gutters at all. Is that a problem?",
        answer:
          "It's common in older block homes and it isn't automatically a problem, but water pouring off the roofline can pool at the slab and splash stucco. Gutters with downspouts discharged away from the house solve that.",
      },
    ],
  },
  {
    slug: "fort-lauderdale-fl",
    name: "Fort Lauderdale",
    state: "FL",
    govUrl: "https://www.fortlauderdale.gov",
    historicDistrict: false,
    nearbySlugs: ["miami-fl"],
    characterParagraph:
      "Fort Lauderdale is built around water: canals and the Intracoastal thread through neighborhoods of 1950s and 60s ranches and newer waterfront rebuilds. Salt air, high humidity, and heavy summer rain make it a hard environment for exterior metal.",
    neighborhoods: ["Victoria Park", "Rio Vista", "Coral Ridge", "Sailboat Bend"],
    localConsideration:
      "Within a mile or two of the coast, salt air corrodes steel fasteners and lower-grade metal faster than inland. We push for aluminum with a baked-on finish and corrosion-resistant hardware on waterfront jobs, and we say so in the estimate.",
    cityFaqs: [
      {
        question: "Does salt air shorten gutter life in Fort Lauderdale?",
        answer:
          "It can. Gutters close to the water corrode faster, especially at cut edges and steel screws. Aluminum with a factory finish and stainless or coated fasteners is the usual answer.",
      },
      {
        question: "Can gutters handle Fort Lauderdale's summer downpours?",
        answer:
          "A five-inch gutter can overflow when a Florida storm dumps rain in minutes. Six-inch gutters with larger downspouts handle heavy roof planes better, and we size the system to the roof, not to a default.",
      },
    ],
  },
  {
    slug: "tampa-fl",
    name: "Tampa",
    state: "FL",
    govUrl: "https://www.tampa.gov",
    historicDistrict: true,
    nearbySlugs: ["orlando-fl"],
    characterParagraph:
      "Tampa mixes 1920s bungalows in Hyde Park and Seminole Heights with mid-century ranches and newer South Tampa rebuilds. Mature live oaks shade many older streets, which is good for cooling bills and hard on gutters.",
    neighborhoods: ["Hyde Park", "Seminole Heights", "Davis Islands", "South Tampa"],
    localConsideration:
      "Older Tampa bungalows often have original wood fascia. Before hanging a new gutter, the installer needs to check that fascia for rot, because a gutter screwed into soft wood pulls away within a season or two.",
    cityFaqs: [
      {
        question: "Should I fix rotted fascia before installing new gutters in Tampa?",
        answer:
          "Yes. New gutters need solid wood to hold screws or hangers. Rotted fascia gets repaired or replaced first, otherwise the new system sags along the same line as the old one.",
      },
      {
        question: "Are gutter guards worth it under Tampa's oak trees?",
        answer:
          "They help with leaves and acorn caps, which are the main clog source under oaks. They won't stop oak pollen and fine debris, so expect an inspection once a year regardless.",
      },
    ],
  },
  {
    slug: "orlando-fl",
    name: "Orlando",
    state: "FL",
    govUrl: "https://www.orlando.gov",
    historicDistrict: true,
    nearbySlugs: ["tampa-fl", "jacksonville-fl"],
    characterParagraph:
      "Orlando's older core, around College Park, Lake Eola Heights, and Thornton Park, is full of 1920s to 1950s homes on brick-lined streets under oak canopy, ringed by newer subdivisions built since the 1990s. Summer means near-daily afternoon thunderstorms.",
    neighborhoods: ["College Park", "Lake Eola Heights", "Thornton Park", "Baldwin Park"],
    localConsideration:
      "Orlando's afternoon storms send a lot of water off a roof in a short window. Downspout count and outlet size matter here: one downspout per 30 to 40 feet of gutter run is a common starting point we ask installers to justify against your roof area.",
    cityFaqs: [
      {
        question: "How many downspouts does an Orlando home need?",
        answer:
          "It depends on roof area and gutter length, but a common rule of thumb is one downspout per 30 to 40 feet of gutter. Large roof planes and heavy storm exposure push that toward more, or toward larger downspouts.",
      },
      {
        question: "Do Orlando's historic neighborhoods restrict gutter changes?",
        answer:
          "Some do. Properties inside a historic district may need approval for exterior changes, including gutter profile or color. Check with the city first if you're unsure whether yours is in one.",
      },
    ],
  },
  {
    slug: "jacksonville-fl",
    name: "Jacksonville",
    state: "FL",
    govUrl: "https://www.coj.net",
    historicDistrict: true,
    nearbySlugs: ["orlando-fl"],
    characterParagraph:
      "Jacksonville is the largest city in the contiguous United States by land area, and its housing spans from the century-old homes of Riverside and Avondale to San Marco, Mandarin, and sprawling newer suburbs. Oaks, pines, and hanging Spanish moss put a steady load of debris on roofs.",
    neighborhoods: ["Riverside", "Avondale", "San Marco", "Mandarin"],
    localConsideration:
      "Pine needles and Spanish moss clog gutters differently than leaves: needles slip through wide-mesh guards and moss mats across the trough. If you're choosing guards for a Jacksonville home, ask the installer which style they've seen hold up against needles specifically.",
    cityFaqs: [
      {
        question: "Which gutter guards work best against pine needles?",
        answer:
          "Fine micro-mesh guards handle needles better than wide-mesh or perforated ones, but no guard is maintenance-free. Ask the installer to explain what they'd choose for your tree mix and why.",
      },
      {
        question: "Do older Jacksonville homes need special gutter work?",
        answer:
          "Often. Homes in Riverside and Avondale can have decorative fascia, built-in gutters, or non-standard rooflines that call for custom-formed or half-round gutters. The assessment covers what your house actually has.",
      },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
