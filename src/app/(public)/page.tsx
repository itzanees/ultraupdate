// import ColdStorageIcon from "@/components/ui/icons/ColdStorageIcon";
// import StructuralCivilIcon from "@/components/ui/icons/StructuralCivilIcon";
// import SandwichPanelIcon from "@/components/ui/icons/SandwichPanelIcon";
// import WarehouseCoolingIcon from "@/components/ui/icons/WarehouseCoolingIcon";
// import IndustrialDoorIcon from "@/components/ui/icons/IndustrialDoorIcon";
// import ColdroomLightingIcon from "@/components/ui/icons/ColdroomLightingIcon";
// import LoadingBayIcon from "@/components/ui/icons/LoadingBayIcon";
// import FireSuppressionIcon from "@/components/ui/icons/FireSuppressionIcon";
// import RackSystemIcon from "@/components/ui/icons/RackSystemIcon";
// import Hero3D from "@/components/Hero3D";

// export default function HomePage() {
//     // return (
//     //     <>
//     //         <div className="min-h-screen flex items-center justify-center">
//     //             <h1 className="text-6xl font-black text-gradient">Homepage coming soon</h1>
//     //         </div>
//     //         <div className="min-h-screen flex items-center justify-center">
//     //             <p><ColdStorageIcon /></p>
//     //             <p><StructuralCivilIcon /></p>
//     //             <p><SandwichPanelIcon /></p>
//     //             <p><WarehouseCoolingIcon /></p>
//     //             <p><IndustrialDoorIcon /></p>
//     //             <p><ColdroomLightingIcon /></p>
//     //             <p><LoadingBayIcon /></p>
//     //             <p><FireSuppressionIcon /></p>
//     //             <p><RackSystemIcon /></p>
//     //         </div>
//     //     </>
//     // );
//       return <Hero3D />;

// }


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