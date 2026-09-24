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

// Cities within roughly 30 miles of downtown Orlando, FL. Add more here
// (and they appear everywhere automatically); keep each city's copy unique.
export const cities: City[] = [
  {
    slug: "orlando-fl",
    name: "Orlando",
    state: "FL",
    govUrl: "https://www.orlando.gov",
    historicDistrict: true,
    nearbySlugs: ["winter-park-fl", "ocoee-fl", "windermere-fl"],
    characterParagraph:
      "Orlando's older core, around College Park, Lake Eola Heights, and Thornton Park, is full of 1920s to 1950s homes on brick-lined streets under oak canopy, ringed by newer subdivisions built since the 1990s. Summer means near-daily afternoon thunderstorms.",
    neighborhoods: ["College Park", "Lake Eola Heights", "Thornton Park", "Baldwin Park"],
    localConsideration:
      "Afternoon storms send a lot of water off a roof in a short window. Downspout count and outlet size matter here: one downspout per 30 to 40 feet of gutter is a common starting point we ask installers to justify against your roof area.",
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
    slug: "winter-park-fl",
    name: "Winter Park",
    state: "FL",
    govUrl: "https://www.cityofwinterpark.org",
    historicDistrict: true,
    nearbySlugs: ["orlando-fl", "altamonte-springs-fl", "oviedo-fl"],
    characterParagraph:
      "Winter Park is built around its lakes, brick streets, and oak canopy. Homes range from 1920s and 30s cottages near Park Avenue to large lakefront properties, often with complex rooflines, steep pitches, and trees close enough to drop debris on the roof all year.",
    neighborhoods: ["Park Avenue area", "Orwin Manor", "Winter Park Pines", "Interlachen"],
    localConsideration:
      "Winter Park protects its mature trees, so cutting back branches over the roof isn't always an option. That makes debris control part of the gutter plan: guard style and cleaning frequency get decided together, not after the first clogged storm.",
    cityFaqs: [
      {
        question: "Are gutter guards worth it under Winter Park's oak trees?",
        answer:
          "They help with leaves and acorn caps, the main clog sources under oaks. They won't stop oak pollen and fine debris, so plan on a yearly check regardless of the guard style.",
      },
      {
        question: "Do large Winter Park homes need bigger gutters?",
        answer:
          "Often. Big roof planes and steep pitches shed a lot of water quickly, and six-inch gutters with 3x4 downspouts handle that better than the five-inch standard.",
      },
    ],
  },
  {
    slug: "kissimmee-fl",
    name: "Kissimmee",
    state: "FL",
    govUrl: "https://www.kissimmee.gov",
    historicDistrict: false,
    nearbySlugs: ["orlando-fl", "windermere-fl"],
    characterParagraph:
      "Kissimmee, south of Orlando in Osceola County, mixes a small historic downtown with large areas of subdivisions built from the 1990s onward. Many homes here are managed as vacation rentals, and a large share sit inside HOA communities with exterior rules.",
    neighborhoods: ["Downtown Kissimmee", "Buenaventura Lakes", "Poinciana"],
    localConsideration:
      "Most Kissimmee subdivisions have an HOA, and many require approval for gutter color or profile changes. Rental owners also need repairs scheduled around guest turnover. We ask about both at the estimate, not after materials are ordered.",
    cityFaqs: [
      {
        question: "Does my Kissimmee HOA need to approve new gutters?",
        answer:
          "Often yes, especially for a color or profile change. Check your community's architectural guidelines before you order, and get approval in writing if it's required.",
      },
      {
        question: "Can gutter work be scheduled around vacation-rental guests?",
        answer:
          "Yes. Exterior gutter work rarely needs anyone inside, so it can usually be booked between stays.",
      },
    ],
  },
  {
    slug: "altamonte-springs-fl",
    name: "Altamonte Springs",
    state: "FL",
    govUrl: "https://www.altamonte.org",
    historicDistrict: false,
    nearbySlugs: ["winter-park-fl", "lake-mary-fl", "apopka-fl"],
    characterParagraph:
      "Altamonte Springs, just north of Orlando in Seminole County, is a built-out suburb of 1970s to 1990s subdivisions, townhomes, and condominiums around a busy retail core. Homes are mostly single-story or two-story with simple rooflines, and many are now 30 to 50 years old.",
    neighborhoods: ["Eastmonte", "Spring Oaks", "Cranes Roost"],
    localConsideration:
      "With homes of this age, original gutters are often at or past their service life, and the fascia behind them has taken years of overflow. We probe the fascia before quoting replacement, because new hangers need solid wood to hold.",
    cityFaqs: [
      {
        question: "How long do gutters last on a 1980s Altamonte Springs home?",
        answer:
          "Original aluminum gutters can reach 20 years or more with care, but sectional gutters from that era have many seams that fail earlier. If yours are original, an assessment tells you whether repair or replacement makes sense.",
      },
      {
        question: "Do townhome and condo owners handle their own gutters?",
        answer:
          "It depends on the association. Many HOAs maintain the exterior. Check your governing documents before you book anyone.",
      },
    ],
  },
  {
    slug: "apopka-fl",
    name: "Apopka",
    state: "FL",
    govUrl: "https://www.apopka.net",
    historicDistrict: false,
    nearbySlugs: ["ocoee-fl", "altamonte-springs-fl", "orlando-fl"],
    characterParagraph:
      "Apopka, northwest of Orlando near Lake Apopka, has grown quickly from an agricultural town into a suburb with large newer subdivisions alongside older homes on bigger lots. Live oaks and pines are common on the older streets, and new construction fills in around them.",
    neighborhoods: ["Downtown Apopka", "Errol Estate", "Piedmont Lakes"],
    localConsideration:
      "New builds in Apopka often ship with minimal gutter coverage or none at all, and builders' gutters are typically the lightest gauge. Homeowners commonly add or upgrade after the first heavy rain shows where water lands.",
    cityFaqs: [
      {
        question: "My new Apopka home has no gutters. Do I need them?",
        answer:
          "If water pours off the roof edge onto landscaping, siding, or beside the slab, yes. Gutters and properly placed downspouts protect the foundation and keep mulch from washing out.",
      },
      {
        question: "Should I upgrade builder-grade gutters?",
        answer:
          "If they're thin-gauge, sagging, or spaced with few downspouts, an upgrade to .032-inch aluminum with hidden hangers usually pays for itself in avoided repairs.",
      },
    ],
  },
  {
    slug: "oviedo-fl",
    name: "Oviedo",
    state: "FL",
    govUrl: "https://www.cityofoviedo.net",
    historicDistrict: false,
    nearbySlugs: ["winter-park-fl", "lake-mary-fl", "sanford-fl"],
    characterParagraph:
      "Oviedo, northeast of Orlando near Lake Jessup and the University of Central Florida, is a suburban city of established subdivisions built from the 1980s through the 2000s, many with mature oaks and a lot of two-story homes.",
    neighborhoods: ["Downtown Oviedo", "Twin Rivers", "Alafaya Woods"],
    localConsideration:
      "Two-story homes are common in Oviedo, which makes ladder cleaning harder and the case for guards stronger. Second-story gutter work also costs more per foot, so ask whether the estimate assumes lifts or ladders.",
    cityFaqs: [
      {
        question: "Is gutter cleaning worth paying for on a two-story Oviedo home?",
        answer:
          "Usually, yes. Second-story ladder work carries real injury risk, and a pro also sees hanger and fascia problems you'd miss from the ground.",
      },
      {
        question: "Do gutter guards make sense on two-story homes?",
        answer:
          "They reduce how often you need someone on a ladder, which is the main saving. They don't remove the need for a periodic inspection.",
      },
    ],
  },
  {
    slug: "winter-garden-fl",
    name: "Winter Garden",
    state: "FL",
    govUrl: "https://www.cwgdn.com",
    historicDistrict: true,
    nearbySlugs: ["ocoee-fl", "windermere-fl", "clermont-fl"],
    characterParagraph:
      "Winter Garden, west of Orlando, pairs a historic downtown around Plant Street with the large newer communities of the Horizon West area. Older homes near downtown have original wood fascia and traditional rooflines, while newer ones are stucco and tile with big, complicated roof planes.",
    neighborhoods: ["Downtown Winter Garden", "Horizon West", "Stoneybrook West"],
    localConsideration:
      "Newer Horizon West homes often have tile roofs and steep, cut-up rooflines, which change how gutters mount and how many downspouts they need. Older downtown homes are more likely to have wood fascia that needs a check before new gutters go on.",
    cityFaqs: [
      {
        question: "Can gutters be installed on a tile roof in Winter Garden?",
        answer:
          "Yes. They mount to the fascia or rafter tails instead of clipping to the roof edge, so no tile is drilled. Six-inch gutters are common because tile sheds water quickly.",
      },
      {
        question: "Do downtown Winter Garden's historic homes need approval for gutter changes?",
        answer:
          "Possibly. If your property is in a historic district, exterior changes can need review. Check with the city before changing the gutter profile or color.",
      },
    ],
  },
  {
    slug: "ocoee-fl",
    name: "Ocoee",
    state: "FL",
    govUrl: "https://www.ocoee.org",
    historicDistrict: false,
    nearbySlugs: ["winter-garden-fl", "apopka-fl", "orlando-fl"],
    characterParagraph:
      "Ocoee sits between Orlando and Winter Garden, near Lake Apopka. It's a suburb of subdivisions from the 1990s to today, many with retention ponds, and a lot of two-story stucco homes on relatively small lots.",
    neighborhoods: ["Downtown Ocoee", "Wesmere", "West Colonial corridor"],
    localConsideration:
      "Small lots put neighbors close together, so downspout discharge has to be planned to avoid sending roof water onto the property next door. Extensions or a buried drain to the street-side swale usually solve it.",
    cityFaqs: [
      {
        question: "Where should my downspouts drain on a small Ocoee lot?",
        answer:
          "Away from your foundation and off a neighbor's yard: toward the street, a swale, or into a buried line. The installer plans the discharge point at the estimate.",
      },
      {
        question: "Do I need to worry about retention ponds near my home?",
        answer:
          "Only for where water is allowed to go. Most communities restrict altering drainage patterns, so check your HOA's rules before adding a buried drain.",
      },
    ],
  },
  {
    slug: "sanford-fl",
    name: "Sanford",
    state: "FL",
    govUrl: "https://www.sanfordfl.gov",
    historicDistrict: true,
    nearbySlugs: ["lake-mary-fl", "oviedo-fl"],
    characterParagraph:
      "Sanford, the Seminole County seat on Lake Monroe and the St. Johns River, has one of the region's older housing stocks: late-1800s and early-1900s homes in the historic downtown and Georgetown, alongside newer subdivisions to the north and west.",
    neighborhoods: ["Historic Downtown Sanford", "Georgetown", "Lake Monroe waterfront"],
    localConsideration:
      "Century-old Sanford homes can have decorative fascia, built-in gutters, or non-standard rooflines that a standard K-style system doesn't fit. The assessment covers what your house actually has before any profile is chosen.",
    cityFaqs: [
      {
        question: "Can built-in gutters on an old Sanford home be repaired?",
        answer:
          "Often. Leaks usually come from a failed liner or outlet, which can be re-lined or replaced without rebuilding the roof edge.",
      },
      {
        question: "Do Sanford's historic districts restrict gutter work?",
        answer:
          "Properties inside a historic district can need approval for exterior changes. Check with the city before changing the profile, material, or color.",
      },
    ],
  },
  {
    slug: "lake-mary-fl",
    name: "Lake Mary",
    state: "FL",
    govUrl: "https://www.lakemaryfl.com",
    historicDistrict: false,
    nearbySlugs: ["sanford-fl", "altamonte-springs-fl", "oviedo-fl"],
    characterParagraph:
      "Lake Mary, north of Orlando in Seminole County, is an affluent suburb of planned communities like Heathrow and Timacuan built from the 1990s onward, with larger two-story homes, tile and shingle roofs, and a corporate park corridor along the interstate.",
    neighborhoods: ["Heathrow", "Timacuan", "Downtown Lake Mary"],
    localConsideration:
      "Most Lake Mary neighborhoods are governed by active HOAs with detailed architectural standards, and larger homes often warrant six-inch gutters with premium finishes. Get HOA approval on color and profile before the material is ordered.",
    cityFaqs: [
      {
        question: "Do I need HOA approval for new gutters in Lake Mary?",
        answer:
          "In most planned communities, yes, at least for color and style changes. Check your guidelines and get approval in writing.",
      },
      {
        question: "Are copper or half-round gutters allowed in my community?",
        answer:
          "It depends on your association's standards. Some approve them on request, and others require a specific color and profile. Ask first.",
      },
    ],
  },
  {
    slug: "clermont-fl",
    name: "Clermont",
    state: "FL",
    govUrl: "https://www.clermontfl.gov",
    historicDistrict: false,
    nearbySlugs: ["winter-garden-fl", "windermere-fl"],
    characterParagraph:
      "Clermont, in Lake County west of Orlando, sits on some of the hillier ground in Central Florida, with a lakefront downtown and large subdivisions like Kings Ridge built across rolling terrain.",
    neighborhoods: ["Downtown Clermont", "Kings Ridge", "Waterbrooke"],
    localConsideration:
      "Clermont's slopes send water downhill fast. A downspout that empties at the top of a slope can cause erosion below it, and one that empties at the bottom can flood a neighbor's yard, so we plan where each outlet lands relative to the grade.",
    cityFaqs: [
      {
        question: "How do I stop erosion below my downspouts on a slope?",
        answer:
          "Spread the flow with a splash pad, extension, or buried drain to a stable outlet. Letting roof water hit bare soil on a slope washes it away.",
      },
      {
        question: "Does a hilly lot change where downspouts should drain?",
        answer:
          "Yes. Outlets should discharge across or down the slope in a controlled way, away from the foundation and neighboring lots.",
      },
    ],
  },
  {
    slug: "windermere-fl",
    name: "Windermere",
    state: "FL",
    govUrl: "https://www.town.windermere.fl.us",
    historicDistrict: false,
    nearbySlugs: ["winter-garden-fl", "orlando-fl", "kissimmee-fl"],
    characterParagraph:
      "Windermere, southwest of Orlando on the Butler Chain of Lakes, is a small town of large lakefront estates and gated communities like Isleworth, with big homes, tile roofs, steep pitches, and lots of mature trees.",
    neighborhoods: ["Isleworth", "Keene's Pointe", "Downtown Windermere"],
    localConsideration:
      "Large, complex roofs shed a lot of water, and the homes often call for copper, half-round, or custom-formed gutters to match the architecture. Sizing and downspout count matter more than usual, and so does an installer who has done specialty profiles before.",
    cityFaqs: [
      {
        question: "Do large Windermere estates need special gutters?",
        answer:
          "Often. Big roof planes and steep pitches call for larger gutters and downspouts, and many owners choose copper or half-round to match the architecture.",
      },
      {
        question: "Is copper worth it on a lakefront home?",
        answer:
          "On a home you'll keep for decades, often yes. Copper lasts 50 years or more, but it has to be installed with copper or stainless hardware and kept away from aluminum and galvanized steel.",
      },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
