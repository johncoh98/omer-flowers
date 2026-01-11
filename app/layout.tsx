import type { Metadata } from "next";
import { Assistant, Noto_Serif_Hebrew, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

const geistSans = Assistant({
  variable: "--font-geist-sans",
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const display = Noto_Serif_Hebrew({
  variable: "--font-display",
  subsets: ["hebrew"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "פרחי עומר | חנות פרחים שכונתית",
  description: "פרחי עומר - זרי פרחים טריים, משלוחים מהירים ועיצוב לאירועים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const business = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: siteConfig.storeName,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.countryCode,
    },
    telephone: siteConfig.phone.e164,
    url: siteConfig.siteUrl,
    // openingHours intentionally omitted; hours vary on Fridays relative to Shabbat
    sameAs: [
      `https://wa.me/${siteConfig.whatsappNumber}`
    ]
  };

  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <StickyWhatsApp />
        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify(business)}
        </Script>
      </body>
    </html>
  );
}
