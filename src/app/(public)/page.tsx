import type { Metadata } from "next";
import Hero3D from "@/components/Hero3D";
import StatsStrip from "@/components/sections/StatsStrip";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ISOStrip from "@/components/sections/ISOStrip";
import SectorsSection from "@/components/sections/SectorsSection";
import Testimonials from "@/components/sections/Testimonials";
import ClientMarquee from "@/components/sections/ClientMarquee";

export const metadata: Metadata = {
  title: "Cold Storage & Warehouse Construction in KSA",
  description:
    "Leading cold storage, warehouse construction, and loading bay solutions in Saudi Arabia. 25+ years experience. ISO certified. Serving Jeddah, Riyadh & across the Kingdom.",
  other: {
    "description-ar": "الرائد في حلول التبريد والمستودعات وأنظمة الشحن في المملكة العربية السعودية. أكثر من 25 عاماً من الخبرة. معتمدون من ISO. نخدم جدة، الرياض وجميع أنحاء المملكة.",
  },
  alternates: { canonical: "/" },
  keywords: [
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
};

export default function HomePage() {
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ultratek Arabia",
    url: "https://ultratekcs.com",
  };

  return (
    <>
      {/* Inject the schema into the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <Hero3D />
      <WhoWeAre />
      <StatsStrip />
      <ISOStrip />
      <SectorsSection />
      <Testimonials />
      <ClientMarquee />
    </>
  );
}