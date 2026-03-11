import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rancho Corrido RV Resort | San Diego County",
  description: "Affordable RV and mobile home living in San Diego County. Located in Pauma Valley - near casinos, wine country, and beaches. Monthly and extended stays available.",
  keywords: "RV park San Diego County, mobile home park Pauma Valley, affordable housing San Diego, RV resort near casinos, extended stay RV park",
  openGraph: {
    title: "Rancho Corrido RV Resort | San Diego County",
    description: "Affordable country living in San Diego County. RV sites and cabins in Pauma Valley.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
