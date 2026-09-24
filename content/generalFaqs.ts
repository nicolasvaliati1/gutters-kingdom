export type FaqGroup = {
  heading: string;
  faqs: { question: string; answer: string }[];
};

export const generalFaqGroups: FaqGroup[] = [
  {
    heading: "Services & Suitability",
    faqs: [
      {
        question: "What gutter services do you offer?",
        answer:
          "Gutter installation, seamless gutters, gutter repair and cleaning, and downspouts and gutter guards. Four categories covering everything from one leaking corner to a full-house replacement. See the service directory for specifics.",
      },
      {
        question: "Do you work on tile, metal, and flat roofs, or only shingle?",
        answer:
          "All of them, but the attachment method changes. Tile and low-slope roofs often need fascia-mounted hangers set differently than a standard shingle roofline, and we scope that explicitly rather than treating every roof the same.",
      },
      {
        question: "Can you handle repairs and a full replacement on the same visit?",
        answer:
          "Yes. If the assessment shows a section is beyond repair, the installer can quote replacement of that run, or the whole system, in the same written estimate.",
      },
      {
        question: "Do you work on commercial and multi-unit buildings, not just single-family homes?",
        answer:
          "Yes. Offices, retail buildings, and multi-unit residential properties are in scope, including lift work for rooflines a ladder can't reach.",
      },
    ],
  },
  {
    heading: "Estimates & Pricing",
    faqs: [
      {
        question: "Is the estimate really free?",
        answer:
          "Yes. Every estimate is free and given to you in writing before any work starts, never a verbal number over the phone.",
      },
      {
        question: "Why do gutter quotes vary so much between contractors?",
        answer:
          "Almost always material and gauge. Aluminum thickness, hanger type and spacing, and whether the quote includes removal of the old system move the number more than profit margin does.",
      },
      {
        question: "Do you require full payment upfront?",
        answer:
          "No. A deposit plus a final payment on completion is standard. Full payment upfront removes your leverage if the work doesn't match the estimate.",
      },
    ],
  },
  {
    heading: "Scheduling & Project Communication",
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "Repairs and small jobs can often be scheduled within days. Full installs book out further ahead of hurricane season and after major storms, so earlier is better if timing matters.",
      },
      {
        question: "Who do I talk to once the project starts?",
        answer:
          "You get a direct line to your matched installer and a coordinator on our team. No call center, no automated queue.",
      },
      {
        question: "Do I need to be home while the work is done?",
        answer:
          "Not for most exterior gutter work. You'll want to be available at the start to confirm the layout and at the end for the walkthrough.",
      },
    ],
  },
  {
    heading: "Guarantee & Support",
    faqs: [
      {
        question: "What does your warranty actually cover?",
        answer:
          "If a seam leaks or a section pulls away from application error within the warranty period, the installer comes back and fixes it at no charge. It doesn't cover damage from storms, fallen limbs, or debris blockage.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. Every installer in our network is licensed and carries liability and workers' comp coverage, verified before they're matched with a homeowner.",
      },
      {
        question: "What happens if I'm not satisfied with the finished work?",
        answer:
          "We walk every job with you before calling it done and address anything that doesn't match the estimate before the crew leaves.",
      },
    ],
  },
];

export const allGeneralFaqs = generalFaqGroups.flatMap((group) => group.faqs);
