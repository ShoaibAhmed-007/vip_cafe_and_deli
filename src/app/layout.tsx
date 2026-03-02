import type { Metadata } from "next";
import { Outfit, Fredoka } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIP Deli & Tacos – Sacramento's Favorite Sandwich & Late-Night Taco Spot",
  description:
    "VIP Deli & Tacos in Sacramento serves premium sandwiches by day and authentic street tacos late at night. Located on Del Paso Blvd with free parking, outdoor patio, and vibrant vibes.",
  keywords: [
    "Sacramento deli",
    "tacos Sacramento",
    "Del Paso Blvd restaurant",
    "late night tacos Sacramento",
    "VIP Deli and Tacos",
    "sandwiches Sacramento",
  ],
  openGraph: {
    title: "VIP Deli & Tacos – Sacramento's Favorite Sandwich & Late-Night Taco Spot",
    description:
      "Premium sandwiches by day, authentic street tacos by night. Free parking, outdoor patio, and vibrant vibes in Sacramento.",
    url: "https://vipdeliandtacos.com",
    siteName: "VIP Deli & Tacos",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "VIP Deli & Tacos exterior at night",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "VIP Deli & Tacos",
  image: "/images/hero-banner.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1328 Del Paso Blvd",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    postalCode: "95815",
    addressCountry: "US",
  },
  telephone: "+19168795059",
  email: "Vipdeliandtacos25@gmail.com",
  url: "https://vipdeliandtacos.com",
  servesCuisine: ["Sandwiches", "Tacos", "Deli"],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "11:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "20:00",
      closes: "00:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "20:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "20:00",
      closes: "00:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fredoka.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-dark-900 text-white">
        {children}
      </body>
    </html>
  );
}
