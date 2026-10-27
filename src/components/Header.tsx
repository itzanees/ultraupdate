"use client";

import ThemeToggle from "./ui/ThemeToggle";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = (href: string) =>
    `relative text-sm font-bold uppercase tracking-wider transition-colors py-2 ${
      pathname === href ? "text-cyan-400" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-2xl shadow-cyan-500/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="shrink-0 relative z-50">
          <Image
            src="/logo.webp"
            alt="Ultratek Arabia"
            width={160}
            height={48}
            style={{ width: "auto", height: "40px" }}
            className="h-10 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className={navClass("/")}>
            Home
            {pathname === "/" && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-500"
              />
            )}
          </Link>
          <Link href="/about" className={navClass("/about")}>
            About
            {pathname === "/about" && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-500"
              />
            )}
          </Link>
          <div
            className="relative py-4"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className={navClass("/services")}>
              <span className="flex items-center gap-1">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </span>
              {pathname.startsWith("/services") && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-3 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-500"
                />
              )}
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 glass rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="p-2">
                    {services.map((s) => {
                    const IconComponent = s.icon;
                    return(
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="shrink-0 flex items-center justify-center w-6 h-6">
                            <IconComponent />
                        </div>
                        <span className="text-sm font-bold text-slate-200">
                          {s.title}
                        </span>
                      </Link>
                    );
                    })}
                  </div>
                  <div className="bg-white/5 p-3 border-t border-white/5">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex justify-center"
                    >
                      Full Services List
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/gallery" className={navClass("/contact")}>
            Gallery
          </Link>
          <Link href="/contact" className={navClass("/contact")}>
            Contact
            {pathname === "/contact" && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-500"
              />
            )}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/966501417878"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 h-10 inline-flex items-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="p-2 rounded-lg hover:bg-white/10 lg:hidden text-white"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-60 bg-[#050816]"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end p-6">
              <button
                className="text-white hover:bg-white/10 p-2 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-20">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-white/90 hover:text-cyan-400 font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}