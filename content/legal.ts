// Copy for the three legal pages: Terms of Service, Privacy Policy, and
// Accessibility. Each page renders through components/LegalPage.tsx.
//
// Gutters Kingdom is a matching service, not a contractor. The installer
// signs the contract, does the work, and carries the workmanship warranty,
// so these pages say that plainly instead of copying contractor-style terms.
//
// `updated` is shown at the top of each page. Change it whenever the copy
// changes in a way a reader would care about.
import { site } from "@/content/site";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  eyebrow: string;
  metaDescription: string;
  summary: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

export const termsOfService: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  eyebrow: "Legal",
  metaDescription: `The terms that apply when you use ${site.url.replace("https://", "")}, request a gutter quote, or get matched with a local installer through ${site.name}.`,
  summary: `The terms that apply when you use this website or request a quote. The gutter work itself is covered by the written contract you sign with your installer.`,
  updated: "September 25, 2026",
  intro: [
    `By using ${site.url}, requesting a quote, or asking for a callback, you agree to these Terms of Service. "${site.name}", "we", and "us" mean the operator of this website.`,
    `${site.name} connects homeowners in ${site.serviceArea} with independent, licensed local gutter installers. We are not the contractor. Any gutter work is done under a separate written agreement between you and the installer, and that agreement sets the scope, price, schedule, and warranty for your job. These terms don't replace it.`,
  ],
  sections: [
    {
      id: "website-use",
      heading: "Website use",
      paragraphs: [
        `This website gives general information about gutters and a way to request quotes. It is provided "as is", without a promise that everything on it is complete or current. Prices, cost ranges, and timelines on the site are general estimates as of the date published and can change. Your actual price comes from the installer after they look at your home, and it is confirmed in the contract you sign with them.`,
        `Blog posts and guides are general information, not engineering, legal, or insurance advice for your specific property.`,
      ],
    },
    {
      id: "quote-requests",
      heading: "Quote requests and callbacks",
      paragraphs: [
        `Sending a quote request or a callback request does not create a contract or an obligation for anyone. You don't have to hire anyone we match you with, and you can stop at any point before you sign a written agreement with an installer.`,
        `When you submit a request, you agree that we, and the installer we match you with, can contact you about that request by phone, text, or email using the details you gave us. Please only submit your own contact details.`,
      ],
    },
    {
      id: "installers",
      heading: "Our role and the installers",
      paragraphs: [
        `Installers in our network are independent businesses, not our employees or agents. We check that an installer is licensed as required and carries liability and workers' comp coverage before we match them with homeowners. Checking those things is not a guarantee of any particular result.`,
        `The installer is responsible for their estimate, permits, workmanship, cleanup, and meeting their contract with you. In Florida, contractors are licensed under Chapter 489 of the Florida Statutes and by local jurisdictions where required. You can look up a state license with the Florida Department of Business and Professional Regulation (DBPR) before you sign.`,
        `If a job goes wrong, tell us at ${site.email}. We will follow up with the installer and, where it makes sense, stop sending them new work. We can't enforce your contract for you.`,
      ],
    },
    {
      id: "warranties",
      heading: "Warranties",
      paragraphs: [
        `${site.name} does not provide a warranty on gutter work. Warranties on an installed job usually come in two layers:`,
      ],
      list: [
        "Manufacturer warranty on materials such as gutter coil, guards, and hangers, under the manufacturer's own terms.",
        "Installer workmanship warranty on labor, for the period stated in the installer's contract.",
      ],
      after: [
        "Get both in writing before you sign. Warranty claims go to the installer or the manufacturer named in your contract.",
      ],
    },
    {
      id: "pricing-payment",
      heading: "Pricing and payment",
      paragraphs: [
        `Using ${site.name} is free for homeowners. We don't charge you to request quotes or to be matched. You pay the installer directly under the payment terms in their contract, and any change to the scope should be written up and signed by both of you before the extra work starts.`,
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of liability",
      paragraphs: [
        `To the fullest extent Florida law allows, our liability for any claim arising from this website or our matching service is limited to direct damages and will not exceed $100. We are not liable for the work, products, or conduct of any installer. This limit does not apply to bodily injury, fraud, or anything that can't be limited under Florida law, including the Florida Deceptive and Unfair Trade Practices Act (Fla. Stat. § 501.201 and following).`,
      ],
    },
    {
      id: "disputes",
      heading: "Disputes and complaints",
      paragraphs: [
        `If you have a problem with us, email ${site.email} first. Most issues get sorted out that way.`,
        `Florida homeowners can also file a complaint about a licensed contractor with the Florida DBPR, and a consumer complaint with the Florida Department of Agriculture and Consumer Services or the Florida Attorney General. Disputes about the gutter work itself are handled under your contract with the installer.`,
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        `The text, logo, and design of this website belong to ${site.name}. Some photos are used under the Pexels License. You can't copy, republish, or build on the site's content for commercial use without written permission.`,
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        `These terms are governed by the laws of the State of Florida, without regard to conflict-of-law rules. Any case that goes to court will be heard in the state or federal courts serving Orange County, Florida.`,
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        `We may update these terms. When we do, we'll post the new version here and change the "Last updated" date. Using the site after that means you accept the updated terms.`,
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        `Questions about these terms: email ${site.email} with "Terms" in the subject line.`,
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Legal",
  metaDescription: `What ${site.name} collects when you request a gutter quote, who we share it with, how long we keep it, and how to ask us to delete it.`,
  summary: `What we collect when you request a gutter quote, who sees it, how long we keep it, and how to get it deleted.`,
  updated: "September 25, 2026",
  intro: [
    `${site.name} ("we", "us", "our") connects homeowners with local gutter installers. To do that, we have to pass your request to an installer. This policy explains exactly what we collect, who we share it with, and what you can ask us to do with it.`,
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "Information we collect",
      paragraphs: [
        `When you fill out a quote form, ask for a callback, or email ${site.email}, we collect:`,
      ],
      list: [
        "Contact details: name, phone number, email address, and ZIP code.",
        "Project details: the service you want, budget range, timeline, best time to call, urgency, property type, and anything you write in the message box.",
        "Technical details: the page you sent the form from, a timestamp, and a hidden anti-spam field. Our hosting provider also keeps standard server logs, such as IP address and browser type.",
      ],
      after: [
        "We don't collect Social Security numbers, bank or card details, or biometric data through this website.",
      ],
    },
    {
      id: "how-we-use-it",
      heading: "How we use your information",
      paragraphs: ["We use what you send us only to:"],
      list: [
        "Reply to your request and call you back if you asked us to.",
        "Match you with a licensed local installer who covers your area and does the work you need.",
        "Follow up after the job to check it was done right.",
        "Keep basic records of requests and matches, and stop spam.",
      ],
    },
    {
      id: "information-we-share",
      heading: "Who we share it with",
      paragraphs: [
        "Matching you with an installer is the whole service, so sharing your request with them is the main thing we do with it. We share information only with:",
      ],
      list: [
        "The installer we match you with, who gets your contact and project details so they can contact you, visit, and quote the job.",
        "Service providers that run the site for us, such as website hosting and the tools that receive form submissions and email. They can use it only to provide that service.",
        "Government authorities when the law requires it, such as a subpoena or court order.",
      ],
    },
    {
      id: "we-do-not-sell",
      heading: "What we don't do",
      paragraphs: [
        "We don't sell your personal information. We don't rent or pass your details to marketing companies or lead resellers, and we don't send the same request to a long list of contractors. If you want quotes from more than one installer, tell us and we'll set that up.",
      ],
    },
    {
      id: "cookies-analytics",
      heading: "Cookies and analytics",
      paragraphs: [
        "This site doesn't use advertising trackers, retargeting pixels, or cross-site tracking. It doesn't set cookies to track you. If we add analytics later, we'll update this policy before we switch it on.",
      ],
    },
    {
      id: "data-retention",
      heading: "How long we keep it",
      paragraphs: [
        "Requests that don't lead to a job are kept for up to 24 months and then deleted. Requests that lead to a job are kept for as long as we need them for follow-up, record keeping, and any legal obligation, and then deleted.",
        "Once an installer has your details, they hold their own copy under their own privacy practices. Ask them directly if you want their copy deleted.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your choices",
      paragraphs: ["Wherever you live, you can ask us to:"],
      list: [
        "Tell you what information we hold about you.",
        "Correct information that's wrong or out of date.",
        "Delete your information, unless the law requires us to keep it.",
        "Stop contacting you about anything other than a job already in progress.",
      ],
      after: [
        `Email ${site.email} with "Privacy Request" in the subject line. We reply within 30 days. If you think we've mishandled your data, you can also contact the Florida Attorney General's office.`,
      ],
    },
    {
      id: "children",
      heading: "Children",
      paragraphs: [
        "This website is meant for adult homeowners and property managers. We don't knowingly collect information from children under 13. If we find out we have, we delete it.",
      ],
    },
    {
      id: "security",
      heading: "Security",
      paragraphs: [
        "Every page and form on this site is served over HTTPS, and access to submitted requests is limited to the people who handle them. No website can promise perfect security, but we take reasonable steps to protect what you send us.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        `If we change this policy in a way that matters, we'll post the new version here and update the "Last updated" date.`,
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        `Questions about this policy or your data: email ${site.email} with "Privacy" in the subject line.`,
      ],
    },
  ],
};

export const accessibilityStatement: LegalDocument = {
  slug: "accessibility",
  title: "Accessibility Statement",
  eyebrow: "WCAG 2.2 Level AA",
  metaDescription: `How ${site.name} makes its website usable with assistive technology, the standard we build to, and how to report a barrier.`,
  summary: `We want every homeowner to be able to use this site, including people who use a screen reader, a keyboard, or zoom.`,
  updated: "September 25, 2026",
  intro: [
    `${site.name} builds this website to meet WCAG 2.2 Level AA across pages, forms, navigation, and pop-up windows. If something on the site gets in your way, email ${site.email} with the page address and what happened. We reply within 5 business days.`,
  ],
  sections: [
    {
      id: "standards",
      heading: "Standards we follow",
      list: [
        "WCAG 2.2 Level AA, the current Web Content Accessibility Guidelines from the W3C.",
        "Section 508, the U.S. federal accessibility requirements for digital content.",
      ],
    },
    {
      id: "features",
      heading: "What's built into the site",
      list: [
        "A \"Skip to content\" link as the first thing you reach with the Tab key on every page.",
        "Semantic HTML with a clear heading order and landmarks (header, nav, main, footer).",
        "Every link, button, and form field can be reached and used with a keyboard.",
        "A visible focus outline on anything you can tab to.",
        "Form fields with real labels, including labels screen readers read when the label isn't shown on screen.",
        "Form errors announced to screen readers as alerts.",
        "Quote and callback windows marked as dialogs, and closed with the Escape key.",
        "Text and background colors chosen to meet a contrast ratio of at least 4.5:1 for body text and 3:1 for large text.",
        "Descriptive alt text on photos. Decorative icons are hidden from screen readers.",
      ],
    },
    {
      id: "known-limitations",
      heading: "Known limitations",
      paragraphs: [
        "We don't know of any barriers on this site right now. Websites, quotes, and paperwork from the installers we match you with are run by those businesses, not by us. If one of them isn't accessible to you, tell us and we'll help you get the information another way.",
      ],
    },
    {
      id: "report-a-barrier",
      heading: "Reporting a barrier",
      paragraphs: [
        `If you find something on the site you can't use, email ${site.email} and include:`,
      ],
      list: [
        "The address of the page.",
        "What you were trying to do and what happened, plus the assistive technology you use, if any.",
        "How you'd like us to reply: email or phone.",
      ],
      after: [
        "We reply within 5 business days. While we fix the problem, we'll get you the information or service you needed another way.",
      ],
    },
    {
      id: "other-ways",
      heading: "Other ways to request a quote",
      paragraphs: ["If the forms don't work for you, you can get the same service through:"],
      list: [
        `Email: ${site.email}. Tell us your ZIP code, the gutter work you need, and how to reach you.`,
        `Phone callback: use the "Call Me" button, or ask for a call by email. During business hours (${site.hours[0].days}, ${site.hours[0].time}; ${site.hours[1].days}, ${site.hours[1].time}) we call back within 5 minutes.`,
      ],
    },
    {
      id: "testing",
      heading: "How we test",
      paragraphs: [
        "We check the site against WCAG 2.2 AA when we make major changes, using automated tools (Lighthouse and axe) and by working through pages and forms with a keyboard only. Reports from real visitors come first when we decide what to fix.",
      ],
    },
  ],
};

export const legalPages = [termsOfService, privacyPolicy, accessibilityStatement];
