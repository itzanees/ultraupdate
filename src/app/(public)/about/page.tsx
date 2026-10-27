

import Link from "next/link";
import Image from "next/image";
import { Target, Leaf, Users, ArrowRight, icons, LayoutDashboard } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ISOStrip from "@/components/sections/ISOStrip";
import { ISOMotion } from "@/components/sections/ISOStrip";
import TiltCard from "@/components/ui/TiltCard";
import ComprehensiveSolutions from "@/components/sections/ComprehensiveSolutions";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Ultratek Arabia — a premier multi-disciplinary industrial contractor in Saudi Arabia with 25+ years of experience in cold storage, warehouse construction, and loading bay optimization.",
  other: {
    "description-ar": "تعرف على ألتراتك العربية، مقاول صناعي رائد في المملكة. نحن متخصصون في بناء مستودعات التبريد الجاهزة، إنشاء المستودعات، وتحسين أرصفة التحميل.",
  },
  alternates: { canonical: "/about" },
  keywords: [
    "cold storage constructor in Riyadh",
    "cold storage constructor in Dammam",
    "مقاول مستودعات تبريد في الرياض",
    "مقاول مستودعات تبريد في الدمام",
    "شركة تركيب غرف تبريد في الرياض",
    "شركة تركيب غرف تبريد في الدمام"
  ],
  openGraph: {
    title: "About Ultratek Arabia",
    description:
      "25+ years of expertise in cold storage and warehouse construction across the Kingdom of Saudi Arabia.",
    url: "/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "We believe that details define quality. Zero tolerance for errors in execution — every beam, seal, and joint is engineered to spec.",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    description:
      "Building for the future using energy-efficient materials, smart technologies, and climate-conscious construction methods.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We don't just work for you; we work with you. Your operational goals become our engineering objectives from day one.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "250+", label: "Projects Finished" },
  { value: "18M+", label: "Sq. Meters Finished" },
  { value: "95%", label: "On-Time Delivery" },
];


export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* 1. HERO */}
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Engineering the
            <br />
            <span className="text-gradient">Infrastructure of <br /> Tomorrow</span>
          </>
        }
        subtitle="Ultratek Arabia combines more than two decades of expertise with cutting-edge technology to redefine industrial cold storage construction standards in Saudi Arabia."
        backgroundImage="/about-construction.webp"
        backgroundAlt="Ultratek Arabia construction site"
        align="center"
        height="lg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        overlay="light"
      />
      <ISOMotion />

      {/* 2. COMPANY STORY */}
      <section className="relative py-36 bg-background overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
                <span className="w-8 h-px bg-cyan-400" />
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.05] tracking-tighter">
                More Than Just
                <br />
                <span className="text-gradient">Construction</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform the logistics landscape,
                  Ultratek Arabia has grown into a premier multi-disciplinary
                  contractor. We don&apos;t simply erect steel structures; we
                  engineer ecosystems that empower businesses to operate more
                  efficiently.
                </p>
                <p>
                  As experts in Cold Store, Heavy Structural Fabrication, and
                  Electromechanical contracting, we bring a holistic approach to
                  every project. Our integrated methodology ensures that civil
                  works, refrigeration, and structural engineering work in
                  perfect harmony.
                </p>
                <p>
                  From the first blueprint to final handover, we deliver
                  end-to-end solutions that prioritize reliability, safety, and
                  long-term client satisfaction.
                </p>
              </div>

              {/* Mini stats */}
              <div className="mt-12 flex gap-12">
                <div>
                  <h3 className="text-4xl font-black text-gradient mb-1">
                    25+
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-gradient mb-1">
                    250+
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Projects Delivered
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-gradient mb-1">
                    30+
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Projects Ongoing
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/about-warehouse.webp"
                  alt="Ultratek Arabia warehouse interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 md:right-6 px-6 py-4 rounded-2xl glass border border-cyan-400/30 shadow-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
                  25+ years
                </p>
                <p className="text-foreground font-black text-2xl">
                  Building KSA
                </p>
              </div>

              {/* Ambient glow */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES */}
      <section className="relative py-32 bg-muted overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
              <span className="w-8 h-px bg-cyan-400" />
              Our Values
              <span className="w-8 h-px bg-cyan-400" />
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-[1.05] tracking-tighter">
              Principles That
              <br />
              <span className="text-gradient">Drive Every Project</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The values that guide every blueprint we draw and every beam we
              place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <TiltCard key={value.title} intensity={10}>
                <div className="group glass rounded-3xl p-10 neon-border h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-8 group-hover:w-20 transition-all duration-500" />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP QUOTE */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote mark */}
            <div className="inline-block mb-8">
              <svg
                className="w-16 h-16 text-cyan-400/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 15.1543 14.8154 13.9746C14.321 12.3965 12.4497 12.4834 12.4497 9.8252C12.4497 7.50293 14.282 5.43359 16.7119 5.43359C19.3838 5.43359 21.4648 8.0166 21.4648 10.9756C21.4648 15.707 18.0645 21 14.017 21ZM4.91016 21L4.91016 18C4.91016 16.0547 6.08887 15.1543 5.71426 13.9746C5.2209 12.3965 3.32715 12.4834 3.32715 9.8252C3.32715 7.50293 5.37891 5.43359 7.82812 5.43359C10.5 5.43359 12.5811 8.0166 12.5811 10.9756C12.5811 15.707 9.17773 21 4.91016 21Z" />
              </svg>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-10 tracking-tight">
              &ldquo;Our commitment is not just to build structures, but to
              build <span className="text-gradient">trust</span>. Every project
              is a promise kept.&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4" />
              <h4 className="text-lg font-bold text-foreground">
                Abdulla Mullapally
              </h4>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Founder &amp; Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <ISOStrip />

      {/* 6. STATS STRIP */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <ComprehensiveSolutions />

      {/* 7. FINAL CTA */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tighter leading-[1.05]">
            Ready to Work
            <br />
            <span className="text-gradient">With Us?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can bring your cold storage, warehouse, or
            industrial project to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-bold hover:bg-foreground/5 hover:border-cyan-400/40 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}