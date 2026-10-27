import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
} from "./BrandIcons";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.webp"
                alt="Ultratek Arabia"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leading provider of cold storage, warehouse construction, and
              industrial optimization in Saudi Arabia.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/ultratek_arabia",
                  Icon: InstagramIcon,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/ultratekarabia/",
                  Icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                {
                  href: "https://wa.me/966501417878",
                  Icon: WhatsappIcon,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.facebook.com",
                  Icon: FacebookIcon,
                  label: "Facebook",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/news", label: "News" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground hover:text-cyan-400 hover:pl-2 transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-muted-foreground hover:text-cyan-400 hover:pl-2 transition-all text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact</h3>
            <div className="space-y-5">
              <a
                href="tel:+966501417878"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Call
                  </p>
                  <p className="text-slate-200 font-semibold">
                    +966 50 141 7878
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@ultratekcs.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-slate-200 font-semibold">
                    info@ultratekcs.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Visit
                  </p>
                  <p className="text-slate-200 font-semibold text-sm">
                    AL BAGHDADIYAH, JEDDAH
                    <br />
                    22235, K.S.A
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ultratek Arabia. All rights reserved.
          </p>
          <div className="relative h-10 w-32">
            <Image
              src="/iso-certifications.webp"
              alt="ISO Certified"
              fill
              sizes="128px"
              className="object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all bg-white/10 rounded p-1"
            />
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-cyan-400 transition">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
