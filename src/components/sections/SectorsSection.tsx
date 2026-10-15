// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { sectors, type Sector } from "@/data/sectors";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: false },
// };

// const accentMap: Record<Sector["color"], string> = {
//   blue: "text-blue-600",
//   indigo: "text-indigo-600",
//   cyan: "text-cyan-600",
//   slate: "text-slate-600",
// };

// const badgeMap: Record<Sector["color"], string> = {
//   blue: "bg-blue-50 text-blue-700 ring-blue-100",
//   indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
//   cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
//   slate: "bg-slate-50 text-slate-700 ring-slate-100",
// };

// export default function SectorsSection() {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="max-w-3xl mb-20">
//           <motion.span
//             className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
//             {...fadeUp}
//             transition={{ duration: 0.8 }}
//           >
//             Industries We Serve
//           </motion.span>

//           <motion.h2
//             className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
//             {...fadeUp}
//             transition={{ duration: 0.8, delay: 0.1 }}
//           >
//             Specialized Solutions for{" "}
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Leading Sectors
//             </span>
//           </motion.h2>

//           <motion.p
//             className="text-lg text-slate-600 leading-relaxed max-w-2xl"
//             {...fadeUp}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             We translate complex engineering requirements into high-performance
//             infrastructure across a diverse range of critical industries.
//           </motion.p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//           {sectors.map((sector, index) => {
//             const IconComponent = sector.icon;
//             return(
//             <motion.div
//               key={sector.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, margin: "-80px" }}
//               transition={{ duration: 0.7, delay: index * 0.1 }}
//               className="group relative flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5"
//             >
//               {/* Image */}
//               <div className="relative h-64 lg:h-80 overflow-hidden">
//                 <Image
//                   src={sector.image}
//                   alt={sector.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
//                   onError={(e) => {
//                     // Graceful fallback if a sector image is missing
//                     const fallbacks: Record<string, string> = {
//                       "food-processing": "/about-warehouse.webp",
//                       logistics: "/about-construction.webp",
//                       "food-products": "/about-warehouse.webp",
//                       construction: "/about-construction.webp",
//                     };
//                     const target = e.currentTarget as HTMLImageElement;
//                     target.src = fallbacks[sector.id] || "/about-warehouse.webp";
//                   }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

//                 {/* Icon badge (top-right) */}
//                 <div
//                   className={`absolute top-5 right-5 w-12 h-12 rounded-2xl ring-1 backdrop-blur-md flex items-center justify-center text-2xl ${badgeMap[sector.color]}`}
//                   aria-hidden="true"
//                 >
//                 <IconComponent />

//                 </div>

//                 {/* Title over image */}
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
//                     {sector.title}
//                   </h3>
//                 </div>
//               </div>

//               {/* Body */}
//               <div className="p-8 lg:p-10 flex flex-col flex-grow">
//                 <h4
//                   className={`font-bold text-sm uppercase tracking-wider mb-4 ${accentMap[sector.color]}`}
//                 >
//                   {sector.subtitle}
//                 </h4>
//                 <p className="text-slate-600 leading-relaxed font-light flex-grow">
//                   {sector.description}
//                 </p>
//               </div>
//             </motion.div>
//             )})}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectors, type Sector } from "@/data/sectors";
import TiltCard from "@/components/ui/TiltCard";

const fadeUp = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
};

const accentMap: Record<Sector["color"], string> = {
  blue: "from-cyan-400 to-blue-500",
  indigo: "from-indigo-400 to-purple-500",
  cyan: "from-cyan-300 to-teal-400",
  slate: "from-slate-300 to-slate-500",
};

export default function SectorsSection() {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.span
            className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6"
            {...fadeUp}
            transition={{ duration: 0.8 }}
          >
            <span className="w-8 h-px bg-cyan-400" />
            Industries We Serve
          </motion.span>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tighter"
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Specialized Solutions
            <br />
            for{" "}
            <span className="text-gradient">Leading Sectors</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We translate complex engineering requirements into high-performance
            infrastructure across a diverse range of critical industries.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 ">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return(
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <TiltCard intensity={8} className="h-full">
                <div className="group relative h-full rounded-3xl glass neon-border overflow-hidden">
                  {/* Image */}
                  <div className="relative h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                      onError={(e) => {
                        const fallbacks: Record<string, string> = {
                          "food-processing": "/about-warehouse.webp",
                          logistics: "/about-construction.webp",
                          "food-products": "/about-warehouse.webp",
                          construction: "/about-construction.webp",
                        };
                        (e.currentTarget as HTMLImageElement).src =
                          fallbacks[sector.id] || "/about-warehouse.webp";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-[#050816]/30 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                     <IconComponent />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 lg:p-10">
                    <div
                      className={`inline-block h-1 w-12 bg-gradient-to-r ${accentMap[sector.color]} rounded-full mb-5 group-hover:w-20 transition-all duration-500`}
                    />

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                      {sector.title}
                    </h3>

                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
                      {sector.subtitle}
                    </p>

                    <p className="text-slate-400 leading-relaxed font-light">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}