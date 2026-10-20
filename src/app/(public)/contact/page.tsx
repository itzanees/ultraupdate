import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Users, Zap, FileCheck } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "Contact Us",
  description:
    "Talk to Ultratek Arabia about your cold storage, warehouse, or loading bay project. Direct line to our engineering team, response within 24 hours. Based in Jeddah, serving all of Saudi Arabia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ultratek Arabia",
    description:
      "Talk to our engineering team about cold storage, warehouse, and industrial construction across Saudi Arabia.",
    url: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ultratek Arabia",
  url: "https://ultratekcs.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Ultratek Arabia",
    telephone: "+966501417878",
    email: "info@ultratekcs.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Baghdadiyah",
      addressLocality: "Jeddah",
      postalCode: "22235",
      addressCountry: "SA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
};

const trustPoints = [
  {
    icon: Zap,
    title: "Response in 24 Hours",
    description: "Every enquiry reaches a human on our team.",
  },
  {
    icon: Users,
    title: "Direct to Engineering",
    description: "No call centers — you talk to project engineers.",
  },
  {
    icon: FileCheck,
    title: "NDA on Request",
    description: "Confidential review of your specs and drawings.",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description: "Fully compliant with KSA and international standards.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* 1. HERO */}
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Start Your
            <br />
            <span className="text-gradient">Next Project</span>
          </>
        }
        subtitle="Talk directly to the team that will build your facility. No forms lost in an inbox, no call-center queues — a straight line to the engineers who deliver."
        backgroundImage="/contact.webp"
        backgroundAlt="Ultratek Arabia Contact"
        align="center"
        height="lg"
        overlay="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* 2. INFO CARDS */}
      <section className="relative -mt-16 pb-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                label: "Visit Our Office",
                lines: ["AL BAGHDADIYAH", "Jeddah, 22235, K.S.A"],
                href: undefined,
              },
              {
                icon: Phone,
                label: "Call or WhatsApp",
                lines: ["+966 50 141 7878"],
                href: "tel:+966501417878",
              },
              {
                icon: Mail,
                label: "Email Us",
                lines: ["info@ultratekcs.com"],
                href: "mailto:info@ultratekcs.com",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="glass rounded-3xl p-8 border border-border text-center relative overflow-hidden hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mx-auto mb-5">
                    <card.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400 mb-3">
                    {card.label}
                  </h3>

                  {card.lines.map((line) =>
                    card.href ? (
                      <a
                        key={line}
                        href={card.href}
                        className="block text-foreground font-bold hover:text-cyan-400 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-foreground font-bold">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN GRID */}
      <section className="relative pb-32 bg-background overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT — Form */}
            <div className="lg:col-span-7">
              <div className="glass rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">
                      <span className="w-8 h-px bg-cyan-400" />
                      Send Us a Message
                    </span>

                    <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-3">
                      Tell us about your project
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      Share the essentials — facility type, location, and timeline. Our engineers will respond within 24 hours with next steps.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>

              {/* WhatsApp quick CTA */}
              <div className="glass rounded-3xl p-6 mt-6 border border-emerald-400/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Prefer WhatsApp?</p>
                    <p className="text-sm text-muted-foreground">
                      Chat directly with our team — usually replies in minutes during business hours.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/966501417878?text=Hello%20Ultratek%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Now
                </a>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Business Hours */}
              <div className="glass rounded-3xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-foreground tracking-tight">
                    Business Hours
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Sat – Thu</span>
                    <span className="font-bold text-foreground">8:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Fri</span>
                    <span className="font-bold text-muted-foreground/60">Closed</span>
                  </li>
                </ul>

                <p className="text-xs text-muted-foreground/70 mt-4">
                  Times shown in Arabia Standard Time (AST / UTC+3).
                </p>
              </div>

              {/* Map */}
              <div className="glass rounded-3xl p-2 border border-border overflow-hidden">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.206175460412!2d39.179126865093956!3d21.506472798407763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83a23cc5474f2a97%3A0x7a7396141ea76762!2sULTRATEK%20ARABIA%20CO.-%20Cold%20Storage%20%26%20Warehouse%20Solutions!5e1!3m2!1sen!2ssa!4v1790578551728!5m2!1sen!2ssa" 

                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59392.686520556205!2d39.1979705!3d21.5168865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sid!4v1709400000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ultratek Arabia office location — Jeddah, Saudi Arabia"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"

                  />
                  {/* Map overlay for dark theme */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050816]/40 to-transparent" />
                </div>
              </div>

              {/* Emergency Callout */}
              <div className="relative rounded-3xl p-8 border border-cyan-400/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-3">
                    Urgent Project?
                  </p>
                  <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">
                    Call us directly
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    For time-sensitive projects, we can schedule a technical call within hours.
                  </p>

                  <a
                    href="tel:+966501417878"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold w-full justify-center shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    +966 50 141 7878
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="relative py-20 bg-muted border-y border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="glass rounded-2xl p-6 border border-border hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-4">
                  <point.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-foreground mb-2 tracking-tight">
                  {point.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALTERNATIVE CTA */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6">
            <span className="w-8 h-px bg-cyan-400" />
            Site Visit
            <span className="w-8 h-px bg-cyan-400" />
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter leading-[1.05] max-w-3xl mx-auto">
            Prefer to walk through your options{" "}
            <span className="text-gradient">in person?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We can arrange a site visit, reference project tour, or technical workshop at your location — anywhere in Saudi Arabia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/966501417878?text=Hello%20Ultratek%2C%20I%27d%20like%20to%20arrange%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Arrange a Site Visit
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-bold hover:bg-foreground/5 hover:border-cyan-400/40 transition-all duration-300"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}