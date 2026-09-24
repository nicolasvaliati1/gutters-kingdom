// Centralized brand/business settings — the rest of the site reads from
// here rather than hardcoding these values twice.
//
// Gutters Kingdom is a hub that connects homeowners with vetted, licensed
// local gutter installers — not a single crew. No street address, public
// phone number, or review/rating figures are shown: contact happens
// through the quote form or the callback request, and rating/review numbers
// stay out of the site (and out of structured data) until they are real.
//
// Notes on the values below:
//   - url: production domain (gutterskingdom.com), connected in Vercel
//   - email: confirmed by the owner
//   - hours: confirmed by the owner (staffed Mon-Fri 8-6, Sat 8-12; online requests 24/7)
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
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 12:00 PM" },
    { days: "Sunday", time: "Closed" },
    { days: "Online quote requests", time: "24 hours a day, 7 days a week" },
  ],
  // Structured data only lists the hours a person answers the phone.
  // The 24/7 line above is for online requests, so it stays out of schema.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],
  author: {
    name: "Gutters Kingdom Team",
    title: "Homeowner Success Team, Gutters Kingdom",
    bio: "Gutters Kingdom matches homeowners with licensed, insured local gutter installers. These guides are written for the person about to compare quotes.",
  },
} as const;
