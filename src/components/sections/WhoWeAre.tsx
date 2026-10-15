// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const tabs = [
//   {
//     id: "mission",
//     label: "OUR MISSION",
//     description:
//       "Our mission is to provide high-quality, end-to-end construction services for cold rooms and warehouses, combining over 25+ years of expertise with skilled workmanship, modern equipment, and dedicated manpower.",
//     image: "/cold-storage-facility.webp",
//   },
//   {
//     id: "vision",
//     label: "OUR VISION",
//     description:
//       "To be a trusted leader in cold storage and warehouse construction, recognized for delivering innovative, efficient, and sustainable turnkey solutions that exceed client expectations across the region.",
//     image: "/vision.webp",
//   },
//   {
//     id: "approach",
//     label: "OUR APPROACH",
//     description:
//       "We specialize in creating efficient, customized warehouse designs tailored to your business's needs. Our approach combines advanced engineering, cutting-edge technology, and a deep understanding of logistics.",
//     image: "/approach.webp",
//   },
// ];

// export default function WhoWeAre() {
//   const [active, setActive] = useState(tabs[0]);

//   return (
//     <section className="py-24 bg-gray-50 overflow-hidden">
//       {/* Inline styles to eliminate scrollbars across Chrome, Safari, Firefox, and Edge */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `,
//         }}
//       />

//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#004575] hover-text-effect">
//             {"WHO WE ARE".split("").map((ch, i) => (
//               <span key={i} className="char-zoom">
//                 {ch === " " ? "\u00A0" : ch}
//               </span>
//             ))}
//           </h2>
//           <motion.div
//             className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             variants={{ visible: { transition: { staggerChildren: 0.01 } } }}
//           >
//             {"We offer warehouse solutions, cold storage solutions & loading bay optimization"
//               .split(" ")
//               .map((word, wi) => (
//                 <span key={wi} className="inline-block whitespace-nowrap mr-1">
//                   {word.split("").map((ch, ci) => (
//                     <motion.span
//                       key={ci}
//                       variants={{
//                         hidden: { opacity: 0, y: 10 },
//                         visible: { opacity: 1, y: 0 },
//                       }}
//                       className="inline-block"
//                     >
//                       {ch}
//                     </motion.span>
//                   ))}
//                 </span>
//               ))}
//           </motion.div>
//         </div>

//         {/* Tabs - Hidden scroll track wrapper */}
//         <div className="max-w-4xl mx-auto mb-12">
//           <nav className="p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm overflow-hidden">
//             {/* <ul className="flex items-center justify-between md:justify-center gap-1 md:gap-8 overflow-x-auto">
//               {tabs.map((tab) => {
//                 const active = tab.id === activeTab.id;
//                 return (
//                   <li
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab)}
//                     className={`relative cursor-pointer px-3 md:px-6 py-3 rounded-lg text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
//                       active
//                         ? "text-cyan-400" // <-- hardcoded, not dynamic
//                         : "text-slate-400 hover:text-slate-200"
//                     }`}
//                   >
//                     {tab.label}

//                     {active && (
//                       <motion.span
//                         layoutId="who-underline"
//                         className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
//                         transition={{
//                           type: "spring",
//                           stiffness: 380,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </li>
//                 );
//               })}
//             </ul> */}
//             <ul className="flex items-center justify-between md:justify-center gap-1 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
//               {tabs.map((tab) => (
//                 <motion.li
//                   key={tab.id}
//                   className={`relative px-3 md:px-6 py-3 cursor-pointer rounded-lg text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-wider transition-colors whitespace-nowrap select-none ${
//                     tab.id === active.id ? "text-gradient" : "text-gray-500 hover:text-gray-700"
//                   }`}
//                   onClick={() => setActive(tab)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {tab.label}
//                   {tab.id === active.id && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
//                       layoutId="underline"
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </motion.li>
//               ))}
//             </ul>
//           </nav>
//         </div>

//         {/* Panel */}
//         <div className="max-w-6xl mx-auto min-h-[500px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.id}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full"
//             >
//               <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
//                 <Image
//                   src={active.image}
//                   alt={active.label}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#004575] mb-6 md:mb-8">
//                     {active.label}
//                   </h3>
//                   <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
//                     {active.description}
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "mission",
    label: "OUR MISSION",
    description:
      "Our mission is to provide high-quality, end-to-end construction services for cold rooms and warehouses, combining over 25+ years of expertise with skilled workmanship, modern equipment, and dedicated manpower. Whether delivering complete turnkey projects or executing specialized scopes, we are committed to reliability, safety, and long-term client satisfaction in every project we undertake.",
    image: "/cold-storage-facility.webp",
  },
  {
    id: "vision",
    label: "OUR VISION",
    description:
      "To be a trusted leader in cold storage and warehouse construction, recognized for delivering innovative, efficient, and sustainable turnkey solutions that exceed client expectations across the region.",
    image: "/vision.webp",
  },
  {
    id: "approach",
    label: "OUR APPROACH",
    description:
      "We specialize in creating efficient, customized warehouse designs tailored to your business's needs. Our approach combines advanced engineering, cutting-edge technology, and a deep understanding of logistics to deliver optimal storage, workflow, and space utilization.",
    image: "/approach.webp",
  },
];

export default function WhoWeAre() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <span className="w-8 h-px bg-cyan-400" />
            Who We Are
            <span className="w-8 h-px bg-cyan-400" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter"
          >
            Built on Expertise,{" "}
            <br className="hidden md:block" />
            Driven by{" "}
            <span className="text-gradient">Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We offer warehouse solutions, cold storage solutions &amp; loading bay optimization across the Kingdom.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="max-w-3xl mx-auto mb-16">
          <nav className="glass rounded-2xl p-2">
            <ul className="flex items-center justify-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = tab.id === active.id;
                return (
                  <li
                    key={tab.id}
                    onClick={() => setActive(tab)}
                    className={`relative cursor-pointer px-4 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.span
                        layoutId="who-underline"
                        className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Panel */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl overflow-hidden neon-border grid grid-cols-1 md:grid-cols-2"
            >
              {/* Image side */}
              <div className="relative min-h-[300px] md:min-h-[520px]">
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0B1120]/90" />
              </div>

              {/* Text side */}
              <div className="p-8 md:p-14 flex flex-col justify-center relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="inline-block h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 mb-6" />

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                    {active.label}
                  </h3>

                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    {active.description}
                  </p>

                  {/* Decorative accent */}
                  <div className="mt-10 flex items-center gap-3 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    <span className="w-8 h-px bg-cyan-400" />
                    Abdulla Mullappally
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}