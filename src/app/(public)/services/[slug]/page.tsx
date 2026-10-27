import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/FAQ";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

// Static generation — one HTML file per service at build time
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Add this to the top of your file
const serviceKeywords: Record<string, string[]> = {
  "cold-storage-facility": [
    "cold storage construction Saudi Arabia",
    "turnkey cold store builder Jeddah",
    "refrigerated warehouse construction KSA",
    "industrial freezer room construction Riyadh",
    "مقاول بناء مستودعات تبريد في جدة",
    "شركة إنشاء غرف تجميد بالسعودية",
    "بناء مستودعات تبريد وتجميد بالرياض"
  ],
  "sandwich-panel-installation": [
    "sandwich panel installation Saudi Arabia",
    "cold room panel insulation contractor Jeddah",
    "PIR PUR panel installation KSA",
    "مقاول تركيب ساندوتش بانل في السعودية",
    "تركيب ألواح العزل الحراري للمستودعات",
    "عزل مستودعات تبريد جدة"
  ],
  "warehouse-cooling-system": [
    "warehouse refrigeration system Saudi Arabia",
    "industrial cooling system installation KSA",
    "cold room refrigeration contractor Jeddah",
    "أنظمة التبريد الصناعي في السعودية",
    "تركيب معدات تبريد مستودعات بالرياض",
    "مقاول أنظمة تبريد وتجميد جدة"
  ],
  "industrial-doors-shutters": [
    "industrial doors Saudi Arabia",
    "cold storage high speed doors KSA",
    "warehouse shutters installation Jeddah",
    "أبواب مستودعات تبريد في السعودية",
    "تركيب بوابات وشترات صناعية بالرياض",
    "أبواب عزل حراري للمستودعات"
  ],
  "coldroom-warehouse-lighting": [
    "cold room lighting Saudi Arabia",
    "warehouse LED lighting installation KSA",
    "freezer lighting contractor Jeddah",
    "إضاءة غرف التبريد في السعودية",
    "تركيب إضاءة مستودعات ليد بالرياض",
    "إضاءة مستودعات التجميد جدة"
  ],
  "loading-bay-facilities": [
    "loading bay equipment Saudi Arabia",
    "dock levelers installation KSA",
    "warehouse loading dock construction Jeddah",
    "أرصفة تحميل وأنظمة شحن وتفريغ جدة",
    "تركيب ستائر وأبواب أرصفة التحميل بالسعودية",
    "معدات منصات تحميل المستودعات"
  ],
  "structural-civil-works": [
    "industrial civil works Saudi Arabia",
    "warehouse structural construction KSA",
    "steel structure contractor Jeddah",
    "أعمال مدنية وإنشائية للمستودعات بالسعودية",
    "مقاول هياكل معدنية وخرسانية جدة",
    "بناء وتشييد مستودعات بالرياض"
  ],
  "fire-fighting-system": [
    "fire fighting system Saudi Arabia",
    "warehouse fire sprinkler installation KSA",
    "industrial fire protection Jeddah",
    "أنظمة مكافحة الحريق للمستودعات في السعودية",
    "تركيب شبكات إطفاء الحرائق بالرياض",
    "مقاول أنظمة سلامة وإطفاء جدة"
  ],
  "rack-system-equipment": [
    "warehouse racking system Saudi Arabia",
    "pallet racking installation KSA",
    "cold storage shelving Jeddah",
    "أنظمة رفوف التخزين للمستودعات بالسعودية",
    "تركيب رفوف مستودعات تبريد بالرياض",
    "معدات تخزين لوجستية جدة"
  ]
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const dynamicKeywords = serviceKeywords[slug] || [service.title, `${service.title} Saudi Arabia`];
  const arabicDescriptions: Record<string, string> = {
    "cold-storage-facility": "بناء مستودعات تبريد وتجميد جاهزة تسليم مفتاح في السعودية.",
    "sandwich-panel-installation": "تركيب ألواح ساندوتش بانل المعزولة للحفاظ على درجات الحرارة.",
    "warehouse-cooling-system": "تركيب أنظمة تبريد المستودعات وغرف التجميد بكفاءة عالية.",
    "industrial-doors-shutters": "توريد وتركيب أبواب وشترات صناعية معزولة للمستودعات.",
    "coldroom-warehouse-lighting": "تركيب إضاءة ليد متخصصة للمستودعات وغرف التبريد.",
    "loading-bay-facilities": "تجهيز أرصفة التحميل وأنظمة الشحن والتفريغ للمستودعات.",
    "structural-civil-works": "تنفيذ الأعمال الإنشائية والمدنية والهياكل الحديدية للمستودعات.",
    "fire-fighting-system": "تركيب أنظمة مكافحة الحريق والإنذار للمستودعات الصناعية.",
    "rack-system-equipment": "توريد وتركيب أنظمة رفوف التخزين للمستودعات الباردة.",
  };

  return {
    title: service.title,
    description: service.shortDescription,
    other: {
      "description-ar": arabicDescriptions[slug] || "خدمات التبريد والإنشاءات الصناعية في السعودية.",
    },
    alternates: { canonical: `/services/${service.slug}` },
    keywords: dynamicKeywords,
    openGraph: {
      title: `${service.title} | Ultratek Arabia`,
      description: service.shortDescription,
      images: [service.image],
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Ultratek Arabia`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  // Structured data — FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // Structured data — Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ultratekcs.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://ultratekcs.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://ultratekcs.com/services/${service.slug}`,
      },
    ],
  };

  // Structured data — Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Ultratek Arabia",
      url: "https://ultratekcs.com",
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Dammam" },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ultratek, I'm interested in your "${service.title}" service. Could you please share more information?`
  );
  const IconComponent = service.icon;
  return (
    <div className="bg-background">
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO */}
      <PageHero
        eyebrow="Our Service"
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
        backgroundAlt={service.title}
        height="lg"
        overlay="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* 2. MAIN CONTENT + SIDEBAR */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT — Main content */}
            <div className="lg:col-span-8">
              <div className="glass rounded-3xl p-8 md:p-12 border border-border">
                {/* Header row */}
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-3xl flex-shrink-0">
                    {/* {service.icon} */}
                    <IconComponent />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-1">
                      Service Overview
                    </p>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Full description */}
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* FAQ section */}
                <div>
                  <div className="mb-10">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-3">
                      Common Questions
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                      Frequently Asked
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <FAQ key={i} faq={faq} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* CTA Card */}
                <div className="glass rounded-3xl p-8 border border-cyan-400/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">
                      Ready to Upgrade?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Get a comprehensive quote tailored to your specific
                      industrial requirements today.
                    </p>

                    <Link
                      href="/contact"
                      className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold flex items-center justify-center gap-2 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 mb-3"
                    >
                      Request Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`https://wa.me/966501417878?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl glass text-foreground font-bold flex items-center justify-center gap-2 hover:border-emerald-400/40 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      Chat on WhatsApp
                    </a>

                    <div className="mt-6 pt-6 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      We reply within 24 hours
                    </div>
                  </div>
                </div>

                {/* Other Services */}
                <div className="glass rounded-3xl p-8 border border-border">
                  <h3 className="text-lg font-black text-foreground mb-6 tracking-tight">
                    Other Services
                  </h3>
                  <div className="space-y-1">
                    {services
                      .filter((s) => s.id !== service.id)
                      .map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 py-3 px-2 -mx-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                          <span className="truncate font-medium">
                            {s.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="glass rounded-3xl p-6 border border-border text-center">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-2">
                    ISO Certified
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Quality &amp; Safety Compliant
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES */}
      <section className="relative py-32 bg-muted border-y border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
              <span className="w-8 h-px bg-cyan-400" />
              Explore More
              <span className="w-8 h-px bg-cyan-400" />
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter leading-[1.05]">
              Related{" "}
              <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((s) => {
              const IconComponent = s.icon;
              return(
              <Link key={s.id} href={`/services/${s.slug}`} className="group">
                <TiltCard intensity={6} className="h-full">
                  <div className="glass rounded-3xl overflow-hidden neon-border h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-lg">
                        {/* {s.icon} */}
                        <IconComponent />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="inline-block h-1 w-10 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

                      <h3 className="text-lg font-black text-foreground mb-2 tracking-tight">
                        {s.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-2">
                        {s.shortDescription}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                        Learn More
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tighter leading-[1.05]">
            Discuss Your
            <br />
            <span className="text-gradient">Project With Us</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Our engineering team is ready to help you design, build, and deliver
            your next industrial project.
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
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}