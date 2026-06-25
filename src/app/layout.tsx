import type { Metadata } from "next";
// Self-hosted fonts (via @fontsource) — no external requests, faster + private.
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Premium Property Development & Investment`,
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} | Transforming Land Into Legacy`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} | Transforming Land Into Legacy`,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteConfig.url },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postcode,
    addressCountry: "GB",
  },
  sameAs: Object.values(siteConfig.social),
  areaServed: "United Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
