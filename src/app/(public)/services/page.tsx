// import Link from "next/link";
// import Image from "next/image";
// import { services } from "@/data/services";

// export const metadata = {
//   title: "Our Services",
//   description: "Complete industrial solutions: cold storage, structural & civil works, sandwich panels, warehouse cooling, fire fighting, loading bay facilities and rack systems in Saudi Arabia.",
//   alternates: { canonical: "/services" },
// };

// export default function ServicesPage() {
//   return (
//     <div className="bg-slate-950 min-h-screen pt-20">
//       <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
//   <Image
//     src="/services/services-hero.png"
//     alt=""
//     fill
//     priority
//     sizes="100vw"
//     className="object-cover opacity-40"
//   />
//   <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/50 to-[#050816]" />
//   <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full" />

//   <div className="relative z-10 container mx-auto px-6 text-center">
//     <span className="inline-block py-1 px-4 rounded-full glass text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
//       What We Do
//     </span>
//     <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
//       Engineering <br />
//       <span className="text-gradient">Excellence</span>
//     </h1>
//     <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
//       Delivering end-to-end industrial solutions that define the future of construction and logistics.
//     </p>
//   </div>
// </section>

//       <section className="py-24 container mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s) => {
//           const IconComponent = s.icon;
//           return (
//             <Link
//               key={s.id}
//               href={`/services/${s.slug}`}
//               className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
//             >
//               <div className="h-64 relative overflow-hidden">
//                 <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition" />
//                 <div className="absolute top-6 right-6 w-14 h-14 bg-black/30 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition">
//                   <span className="text-3xl">
//                     <IconComponent size={40} />
//                   </span>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{s.title}</h2>
//                 <p className="text-slate-400 mb-8 line-clamp-3">{s.shortDescription}</p>
//                 <div className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider">
//                   Explore Service →
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//         </div>
//       </section>

//       <section className="py-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
//             <div className="relative z-10 max-w-3xl mx-auto">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//                 Have a Vision? <br /> Let's Build It Together.
//               </h2>
//               <p className="text-xl text-blue-100 mb-10">
//                 From concept to completion, our engineering expertise ensures your project is delivered with precision.
//               </p>
//               <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-900 font-bold rounded-full hover:bg-slate-100 transition shadow-xl">
//                 Schedule a Consultation
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// {/* <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
//   <Image
//     src="/services/services-hero.png"
//     alt=""
//     fill
//     priority
//     sizes="100vw"
//     className="object-cover opacity-40"
//   />
//   <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/50 to-[#050816]" />
//   <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full" />

//   <div className="relative z-10 container mx-auto px-6 text-center">
//     <span className="inline-block py-1 px-4 rounded-full glass text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
//       What We Do
//     </span>
//     <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
//       Engineering <br />
//       <span className="text-gradient">Excellence</span>
//     </h1>
//     <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
//       Delivering end-to-end industrial solutions that define the future of construction and logistics.
//     </p>
//   </div>
// </section> */}


import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services",
  description:
    "Complete industrial solutions: cold storage facilities, structural & civil works, sandwich panels, warehouse cooling, fire fighting, loading bay facilities and rack systems across Saudi Arabia.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Ultratek Arabia",
    description:
      "Complete industrial solutions for cold storage, warehouses, and logistics infrastructure in Saudi Arabia.",
    url: "/services",
  },
};

const differentiators = [
  {
    title: "25+ Years of Expertise",
    description:
      "Two decades of industrial construction experience across the Kingdom.",
  },
  {
    title: "ISO Certified Quality",
    description:
      "Internationally accredited processes for quality, safety, and sustainability.",
  },
  {
    title: "Turnkey Delivery",
    description:
      "From design and engineering to handover — one accountable partner.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* 1. HERO */}
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Engineering
            <br />
            <span className="text-gradient">Excellence</span>
          </>
        }
        subtitle="Delivering end-to-end industrial solutions that define the future of construction and logistics across Saudi Arabia."
        backgroundImage="/services-hero.webp"
        backgroundAlt="Ultratek Arabia services"
        align="center"
        height="lg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        overlay="light"
      />

      {/* 2. SERVICES GRID */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="max-w-3xl mb-20">
            <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
              <span className="w-8 h-px bg-cyan-400" />
              Our Capabilities
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.05] tracking-tighter">
              Complete Industrial
              <br />
              <span className="text-gradient">Solutions</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From cold storage facilities to loading bay optimization —
              we deliver every layer of your industrial infrastructure
              under one roof.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="block group"
                >
                  <TiltCard intensity={5} className="h-full">
                    <div className="group/card relative h-full rounded-3xl glass neon-border overflow-hidden flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-[#050816]/30 to-transparent" />

                        {/* Icon badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl group-hover/card:scale-110 transition-transform duration-500">
                          {/* {service.icon} */}
                          <IconComponent />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="inline-block h-1 w-10 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mb-5 group-hover/card:w-16 transition-all duration-500" />

                        <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 tracking-tight leading-tight">
                          {service.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                          {service.shortDescription}
                        </p>

                        {/* Footer link */}
                        <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                          Explore Service
                          <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="relative py-32 bg-muted overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
              <span className="w-8 h-px bg-cyan-400" />
              Why Ultratek
              <span className="w-8 h-px bg-cyan-400" />
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.05] tracking-tighter">
              One Partner.
              <br />
              <span className="text-gradient">Every Discipline.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="glass rounded-3xl p-8 border border-border hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6">
                  <Check className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tighter leading-[1.05]">
            Have a Vision?
            <br />
            <span className="text-gradient">Let&apos;s Build It.</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, our engineering expertise ensures your
            project is delivered with precision and quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-bold hover:bg-foreground/5 hover:border-cyan-400/40 transition-all duration-300"
            >
              About Ultratek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}