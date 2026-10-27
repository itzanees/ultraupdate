import Hero3D from "@/components/Hero3D";
import StatsStrip from "@/components/sections/StatsStrip";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ISOStrip from "@/components/sections/ISOStrip";
import SectorsSection from "@/components/sections/SectorsSection";
import Testimonials from "@/components/sections/Testimonials";
import ClientMarquee from "@/components/sections/ClientMarquee";

export default function HomePage() {
  return (
    <>
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