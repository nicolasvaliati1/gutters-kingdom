import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteModalProvider } from "@/components/QuoteModalProvider";
import { QuoteModal } from "@/components/QuoteModal";
import { CallbackModalProvider } from "@/components/CallbackModalProvider";
import { CallbackModal } from "@/components/CallbackModal";
import { CallbackButton } from "@/components/CallbackButton";
import { site } from "@/content/site";
import { organizationSchema } from "@/lib/schema";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} connects homeowners with licensed, insured local gutter installers across ${site.serviceArea}. Free quotes, no obligation, real people.`,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  ...(site.indexable ? {} : { robots: { index: false, follow: false } }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = organizationSchema();

  return (
    <html
      lang="en"
      className={`${bebas.variable} ${fraunces.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-yellow focus:px-4 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-wide focus:text-ink"
        >
          Skip to content
        </a>
        <QuoteModalProvider>
          <CallbackModalProvider>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <QuoteModal />
            <CallbackModal />
            <CallbackButton />
          </CallbackModalProvider>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
