import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villas San Miguel — Weslaco, TX | Half-Acre Residential Lots",
  description: "8 half-acre residential lots available in Weslaco, TX. Starting at $105,000. Prime location on Mile 5.5 in the Rio Grande Valley. Contact Yoli San Miguel for more information.",
  keywords: "lots for sale Weslaco TX, residential lots RGV, land for sale Weslaco, half acre lots Rio Grande Valley, Villas San Miguel Weslaco",
  openGraph: {
    title: "Villas San Miguel — Half-Acre Lots in Weslaco, TX",
    description: "8 half-acre residential lots available starting at $105,000. Prime location in Weslaco, TX.",
    siteName: "Villas San Miguel",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://villas-sanmiguel.vercel.app",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Villas San Miguel",
  "description": "8 half-acre residential lots for sale in Weslaco, TX starting at $105,000.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "711 Urie Drive",
    "addressLocality": "Weslaco",
    "addressRegion": "TX",
    "postalCode": "78596",
    "addressCountry": "US"
  },
  "telephone": "+19562276922",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
