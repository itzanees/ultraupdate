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
   other: {
    "description-ar": "استكشف حلولنا الصناعية الشاملة: مرافق التبريد، الأعمال الإنشائية، ألواح الساندوتش بانل، أنظمة التبريد، مكافحة الحريق، أرصفة التحميل، وأنظمة الرفوف في المملكة.",
  },
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Ultratek Arabia",
    description:
      "Complete industrial solutions for cold storage, warehouses, and logistics infrastructure in Saudi Arabia.",
    url: "/services",
  },
  keywords: [
    "cold storage Saudi Arabia",
    "industrial refrigeration contractor KSA",
    "أنظمة التبريد الصناعي في السعودية",
    "شركات تبريد وتجميد في السعودية"
  ],
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