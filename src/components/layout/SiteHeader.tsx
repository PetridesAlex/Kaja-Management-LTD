"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HeaderServicesTicker from "@/components/layout/HeaderServicesTicker";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/cleaning", label: "Cleaning" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const serviceLinks = [
  { href: "/services/communal-property-management", label: "Communal Property Management" },
  { href: "/services/individual-property-management", label: "Individual Property Management" },
  { href: "/services/cleaning", label: "Cleaning Services" },
  { href: "/services/renovation", label: "Renovation Services" },
  { href: "/services/garden-pool-maintenance", label: "Garden & Pool Maintenance" },
  { href: "/services/pest-control", label: "Pest Control" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocumentPointerDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current) return;
      if (!servicesMenuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocumentPointerDown);
    return () => document.removeEventListener("mousedown", onDocumentPointerDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-accent/30 bg-gradient-to-r from-brandDeep/95 via-brand/95 to-secondary/95 backdrop-blur shadow-lg">
      <div className="w-full px-4 md:px-8 py-3 flex items-center">
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <Image
            src="/images/logo/property-needs-logo.webp"
            alt="Property Needs Logo"
            width={300}
            height={76}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2 ml-auto rounded-2xl border border-accent/30 bg-white/10 px-2 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          {navLinks.map((item) => {
            if (item.label === "Services") {
              const active = pathname.startsWith("/services");
              return (
                <div
                  key={item.href}
                  className="relative"
                  ref={servicesMenuRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    className={`text-[13px] tracking-[0.08em] uppercase transition px-3.5 py-2 rounded-xl inline-flex items-center gap-2 font-display ${
                      active
                        ? "bg-gradient-to-r from-accent to-secondary text-white font-semibold shadow-[0_8px_20px_rgba(212,175,106,0.28)]"
                        : "text-white/95 font-semibold hover:text-white hover:bg-white/15"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                  >
                    Services
                    <span className={`text-[10px] transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  {servicesOpen ? (
                    <div className="absolute right-0 top-full pt-2 z-50">
                      <div
                        className="w-[min(100vw-2rem,340px)] overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-white via-page to-pageSoft/95 shadow-[0_22px_55px_rgba(45,30,20,0.14)] ring-1 ring-white/90 backdrop-blur-md"
                        role="menu"
                        aria-label="Service menu"
                      >
                        <div className="border-b border-accent/15 bg-gradient-to-r from-brandDeep/[0.06] via-transparent to-accent/[0.06] px-4 py-3">
                          <p className="font-display text-[9px] font-semibold uppercase tracking-[0.28em] text-brand/50">Service suite</p>
                          <p className="mt-1 font-display text-[13px] font-semibold tracking-wide text-brandDeep">Browse by specialty</p>
                        </div>
                        <div className="flex flex-col gap-0.5 p-1.5">
                          {serviceLinks.map((service) => {
                            const isActive = pathname === service.href;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                role="menuitem"
                                className={`group flex items-start justify-between gap-3 rounded-xl px-3.5 py-3 text-left text-[12px] font-display font-semibold leading-snug tracking-[0.04em] transition ${
                                  isActive
                                    ? "bg-gradient-to-r from-accent/20 via-secondary/10 to-transparent text-brandDeep shadow-[inset_0_0_0_1px_rgba(212,175,106,0.35)]"
                                    : "text-brand/90 hover:bg-white hover:text-brandDeep hover:shadow-sm"
                                }`}
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="min-w-0 flex-1">{service.label}</span>
                                <span
                                  className={`mt-0.5 shrink-0 text-[11px] font-normal text-accent transition ${
                                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                  }`}
                                  aria-hidden
                                >
                                  →
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-[0.08em] uppercase transition px-3.5 py-2 rounded-xl font-display ${
                  active
                    ? "bg-gradient-to-r from-accent to-secondary text-white font-semibold shadow-[0_8px_20px_rgba(212,175,106,0.28)]"
                    : "text-white/95 font-semibold hover:text-white hover:bg-white/15"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 ml-4 shrink-0">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-white hover:bg-accent/30 transition"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/25 text-white hover:bg-secondary/35 transition"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandSoft/45 text-white hover:bg-brandSoft/60 transition"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
            </svg>
          </a>
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="md:hidden ml-auto mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/25 text-white shadow-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          </svg>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="md:hidden mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/30 text-white shadow-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
            <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="md:hidden mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brandSoft/50 text-white shadow-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
            <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
          </svg>
        </a>

        <button className="md:hidden p-2 text-white" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>

      <HeaderServicesTicker />

      {open ? (
        <div className="md:hidden border-t border-accent/25 bg-brandDeep shadow-inner">
          <div className="w-full px-4 py-5 grid gap-2">
            {navLinks.map((item) => {
              if (item.label === "Services") {
                const active = pathname.startsWith("/services");
                return (
                  <div key={item.href} className="rounded-xl bg-white/10 text-slate-100">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((value) => !value)}
                      className={`w-full px-4 py-3 text-left text-base font-medium transition rounded-xl inline-flex items-center justify-between ${
                        active ? "bg-gradient-to-r from-accent to-secondary text-white shadow-sm" : "hover:bg-white/15 hover:text-white"
                      }`}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-list"
                    >
                      Services
                      <span className={`text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {mobileServicesOpen ? (
                      <div id="mobile-services-list" className="px-2 pb-2 grid gap-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="rounded-lg px-3 py-2 text-sm text-slate-100 hover:bg-white/15 hover:text-white transition"
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-secondary to-accent text-white shadow-sm"
                      : "bg-white/10 text-slate-100 hover:bg-white/15 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/25 text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/30 text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brandSoft/50 text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
