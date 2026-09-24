// Centralized brand/business settings — the rest of the site reads from
// here rather than hardcoding these values twice.
//
// Gutters Kingdom is a hub that connects homeowners with vetted, licensed
// local gutter installers — not a single crew. No street address, public
// phone number, or review/rating figures are shown: contact happens
// through the quote form or the callback request, and rating/review numbers
// stay out of the site (and out of structured data) until they are real.
//
// TODO before launch — every value below marked PLACEHOLDER must be
// replaced with the real business info:
//   - url: production domain (gutterskingdom.com), connected in Vercel
//   - email: PLACEHOLDER, not a monitored inbox yet
//   - hours: PLACEHOLDER
//   - serviceArea: Greater Orlando (cities within about 30 miles of
//     downtown Orlando, per cities.ts)
//   - indexable: true lets search engines index the site. Set false for a
//     noindex meta tag + Disallow-all robots.txt (e.g. to take it offline
//     while the placeholders above are being replaced).
export const site = {
  indexable: true,
  name: "Gutters Kingdom",
  shortName: "Gutters Kingdom",
  tagline: "Gutter Installation & Repair",
  url: "https://gutterskingdom.com",
  email: "hello@gutterskingdom.com",
  serviceArea: "Greater Orlando",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  author: {
    name: "Gutters Kingdom Team",
    title: "Homeowner Success Team, Gutters Kingdom",
    bio: "Gutters Kingdom matches homeowners with licensed, insured local gutter installers. These guides are written for the person about to compare quotes.",
  },
} as const;
