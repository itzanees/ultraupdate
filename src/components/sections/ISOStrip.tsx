// import Image from "next/image";
// import { ShieldCheck } from "lucide-react";

// export default function ISOStrip() {
//   return (
//     <section className="py-20 bg-white border-y border-slate-100">
//       <div className="container mx-auto px-6 text-center max-w-5xl flex flex-col items-center">
//         <div className="flex items-center gap-4 mb-10">
//           <div className="h-2 w-2 rounded-full bg-blue-600" />
//           <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-900">ISO Certified Excellence</span>
//           <div className="h-2 w-2 rounded-full bg-blue-600" />
//         </div>
//         <div className="relative bg-slate-50 rounded-[3rem] p-12 md:p-10 border border-slate-100 flex items-center justify-center w-full">
//           <Image src="/iso-certifications.webp" alt="ISO Global Certifications"
//           // fill
//           // sizes="(max-width: 768px) 256px, 384px"
//           width={380} height={100}
//           className="h-20 md:h-32 w-auto object-contain" />
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-10 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border-4 border-white">
//             <ShieldCheck className="w-6 h-6 text-blue-200" />
//             <span className="text-xs font-black uppercase tracking-widest">Fully Accredited Partner</span>
//           </div>
//         </div>
//         <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed mt-20">
//           Internationally Certified Compliance in Quality Management, Environmental Sustainability, and Occupational Health &amp; Safety.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";


export default function ISOStrip() {
  return (
    <section className="relative py-24 bg-background border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10 flex flex-col items-center transition-all duration-500 group">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px bg-cyan-400" />
          <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-400">
            ISO Certified Excellence
          </span>
          <span className="w-8 h-px bg-cyan-400" />
        </motion.div>

        {/* Certifications panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full max-w-4xl transition-transform duration-700 group-hover:scale-105"
        >
          <div className="glass rounded-3xl p-10 md:p-16 border border-white/10 flex items-center justify-center hover:border-cyan-400/30 transition-colors duration-500 relative">
            {/* Badge floating at bottom */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-2xl shadow-cyan-500/30 flex items-center gap-2 border-4 border-[#050816] whitespace-nowrap">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Fully Accredited Partner
              </span>
            </div>

            {/* ISO badges */}
            <div className="relative w-full h-20 md:h-28 bg-white rounded-2xl p-4 flex items-center justify-center">
              <Image
                src="/iso-certifications.webp"
                alt="ISO Global Certifications"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-3"
              />
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed mt-16"
        >
          Internationally Certified Compliance in Quality Management, Environmental Sustainability, and Occupational Health &amp; Safety.
        </motion.p>
      </div>
    </section>
  );
}