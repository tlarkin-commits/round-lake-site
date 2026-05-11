import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "Round Lake Community | Affordable Country Living in Klamath Falls, OR",
    template: "%s | Round Lake Community — Klamath Falls, OR",
  },
  description: "Affordable manufactured home lots and RV sites in Klamath Falls, Oregon. 150-acre community with golf course, fishing pond, and hiking trails. 15 minutes from downtown Klamath Falls. Call (541) 884-2520.",
  keywords: "mobile home park Klamath Falls, manufactured homes Oregon, RV park Klamath Falls, affordable housing Klamath Falls, Round Lake Community, country living Oregon, golf course community Oregon, lot rent Klamath Falls",
  alternates: {
    canonical: "https://www.roundlakecommunity.com",
  },
  openGraph: {
    title: "Round Lake Community | Affordable Country Living in Klamath Falls, OR",
    description: "Peaceful manufactured home and RV community on 150 acres near Klamath Falls, Oregon. Golf course, fishing pond, and hiking trails on-site.",
    url: "https://www.roundlakecommunity.com",
    siteName: "Round Lake Community",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.roundlakecommunity.com/images/round-lake/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Round Lake Community — Klamath Falls, OR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Round Lake Community | Affordable Country Living in Klamath Falls, OR",
    description: "Affordable country living in Klamath Falls, Oregon. Golf course, fishing pond, hiking trails on 150 acres.",
    images: ["https://www.roundlakecommunity.com/images/round-lake/hero.jpg"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18014277640"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18014277640');
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
