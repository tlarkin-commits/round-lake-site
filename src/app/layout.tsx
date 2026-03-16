import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "Rancho Corrido RV Resort & Mobile Home Community | Pauma Valley, CA",
    template: "%s | Rancho Corrido — Pauma Valley, CA",
  },
  description: "Affordable RV and mobile home living in Pauma Valley, San Diego County. 5 minutes to Harrah's Resort, 20 min to Temecula wine country, 30 min to the beach. Monthly and extended stays available. Call (760) 742-3755.",
  keywords: "RV park Pauma Valley, mobile home park San Diego County, affordable housing Pauma Valley, RV resort near Harrahs casino, extended stay RV park California, mobile home community San Diego",
  alternates: {
    canonical: "https://www.ranchocorridopark.com",
  },
  openGraph: {
    title: "Rancho Corrido RV Resort & Mobile Home Community | Pauma Valley, CA",
    description: "Affordable country living in Pauma Valley, San Diego County. RV sites and mobile homes near casinos, wine country, and beaches.",
    url: "https://www.ranchocorridopark.com",
    siteName: "Rancho Corrido RV Resort",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ranchocorridopark.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rancho Corrido RV Resort — Pauma Valley, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rancho Corrido RV Resort & Mobile Home Community | Pauma Valley, CA",
    description: "Affordable RV and mobile home living in Pauma Valley, San Diego County.",
    images: ["https://www.ranchocorridopark.com/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `
            }} />
          </>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
