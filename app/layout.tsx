import type { Metadata } from "next";
import { Heebo, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Script from "next/script";

const geistSans = Heebo({
  variable: "--font-geist-sans",
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "700", "900"],
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
    name: "פרחי עומר",
    address: {
      "@type": "PostalAddress",
      streetAddress: "רחוב הראשי 10",
      addressLocality: "תל אביב",
      addressCountry: "IL",
    },
    telephone: "+972-50-123-4567",
    url: "https://example.com",
    openingHours: [
      "Su-Th 09:00-19:00",
      "Fr 09:00-14:00",
    ],
    sameAs: [
      "https://wa.me/972501234567"
    ]
  };

  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
