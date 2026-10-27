import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const SITE_URL = "https://ultratekcs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cold Storage & Warehouse Construction in Saudi Arabia",
    template: "Ultratek Arabia | %s",
  },
  description:
    "Leading cold storage, warehouse construction & loading bay solutions in Saudi Arabia. 25+ years experience. ISO certified. Serving Jeddah, Riyadh, Dammam & across KSA.",
  // keywords: [
  //   "turnkey cold storage constructor in Saudi Arabia", "cold storage Saudi Arabia",
  //   "cold storage constructor in Jeddah", 
  //   "cold storage constructor in Riyadh", 
  //   "cold storage constructor in Dammam", 
  //   "cold room installation contractor Jeddah", "cold room installation contractor Riyadh", " cold room installation contractor Dammam",
  //   "refrigerated distribution center construction in KSA",
  //   "warehouse construction KSA", "sandwich panel installation Saudi Arabia",
  //   "loading bay Jeddah", "refrigeration Saudi Arabia",
  //   "مستودعات التبريد السعودية", "غرف تبريد جدة",
  // ],
  keywords:[
     // --- English High-Volume B2B Keywords ---
    "turnkey cold storage constructor in Saudi Arabia",
    "cold storage Saudi Arabia",
    "cold storage constructor in Jeddah",
    "cold storage constructor in Riyadh",
    "cold storage constructor in Dammam",
    "cold room installation contractor Jeddah",
    "cold room installation contractor Riyadh",
    "cold room installation contractor Dammam",
    "refrigerated distribution center construction in KSA",
    "warehouse construction KSA",
    "sandwich panel installation Saudi Arabia",
    "loading bay Jeddah",
    "refrigeration Saudi Arabia",
    "industrial refrigeration contractor KSA",
    
    // --- Arabic High-Volume B2B Keywords (Saudi Market) ---
    "شركة بناء مستودعات تبريد تسليم مفتاح بالسعودية",
    "مستودعات التبريد والتجميد في السعودية",
    "مقاول مستودعات تبريد في جدة",
    "مقاول مستودعات تبريد في الرياض",
    "مقاول مستودعات تبريد في الدمام",
    "شركة تركيب غرف تبريد في جدة",
    "شركة تركيب غرف تبريد في الرياض",
    "شركة تركيب غرف تبريد في الدمام",
    "إنشاء مراكز توزيع لوجستية مبردة بالمملكة",
    "بناء وتشييد مستودعات في السعودية",
    "مقاول تركيب ساندوتش بانل السعودية",
    "أرصفة تحميل وأنظمة شحن وتفريغ جدة",
    "أنظمة التبريد الصناعي في السعودية",
    "شركات تبريد وتجميد في السعودية",
    "مستودعات التبريد السعودية",
    "غرف تبريد جدة"
  ],
  verification: {
    google:'aT7m9xT91dIfp3m0sXO3UFGeeP78SEpxsUdXMSeAe_4'
  },
  authors: [{ name: "Ultratek Arabia" }],
  creator: "Ultratek Arabia",
  publisher: "Ultratek Arabia",
  openGraph: {
    type: "website",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    url: SITE_URL,
    siteName: "Ultratek Arabia",
    title: "Ultratek Arabia | Cold Storage & Warehouse Construction in KSA",
    description: "Leading cold storage, warehouse construction & loading bay solutions in Saudi Arabia.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ultratek Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultratek Arabia",
    description: "Cold storage & warehouse construction in Saudi Arabia",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-SA": SITE_URL,
      "ar-SA": `${SITE_URL}/ar`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-B14X42P581";
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className={`${inter.className} bg-bg text-slate-100 antialiased`}>
        <Providers>{children}</Providers>
         <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
         <Script 
          id="cookieyes" 
          type="text/javascript" 
          src="https://cdn-cookieyes.com/client_data/23e31b7fc2afab5f87b51506/script.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}