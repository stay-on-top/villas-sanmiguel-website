import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Villas San Miguel — Weslaco, TX | Half-Acre Residential Lots",
  description: "8 half-acre residential lots in a brand-new gated development in Weslaco, TX. Starting at $105,000. Seller covers septic. Water & electric available. Contact Yolanda San Miguel.",
  keywords: "lots for sale Weslaco TX, residential lots RGV, land for sale Weslaco, half acre lots Rio Grande Valley, Villas San Miguel Weslaco, gated community Weslaco",
  openGraph: {
    title: "Villas San Miguel — Half-Acre Lots in Weslaco, TX",
    description: "8 half-acre lots in a brand-new gated Weslaco development. Starting at $105,000. Seller covers septic.",
    siteName: "Villas San Miguel",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://villassanmigueltx.com" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Villas San Miguel",
  "description": "8 half-acre residential lots in a gated Weslaco development starting at $105,000.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "803 Uriel Dr",
    "addressLocality": "Weslaco",
    "addressRegion": "TX",
    "postalCode": "78599",
    "addressCountry": "US"
  },
  "telephone": "+19562276922",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
