"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Footer2() {
  return (
    <footer className="mt-0 border-t border-accent/30 bg-gradient-to-br from-brandDeep via-brand to-secondary text-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-2xl bg-white/10 border border-accent/30 px-3 py-2">
              <Image
                src="/images/logo/property-needs-logo.webp"
                alt="Kaja Management LTD logo"
                width={210}
                height={58}
                className="h-11 w-auto object-contain"
              />
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold">Kaja Management LTD</h3>
            <p className="mt-3 text-slate-200 leading-7 max-w-xl">
              Premium real estate and property management services focused on consistency, responsiveness, and long-term asset value.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.18em] text-white/70 font-semibold">NAVIGATION</p>
            <div className="mt-4 grid gap-2">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="text-slate-100 hover:text-white transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.18em] text-white/70 font-semibold">CONTACT</p>
            <div className="mt-4 grid gap-3">
              <a href="tel:+35799961512" className="inline-flex items-center gap-2 text-slate-100 hover:text-white transition">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/25">
                  <Phone className="h-4 w-4" />
                </span>
                +357 99961512
              </a>
              <a
                href="mailto:Info@kajamanagement.eu"
                className="inline-flex items-center gap-2 text-slate-100 hover:text-white transition break-all"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/30">
                  <Mail className="h-4 w-4" />
                </span>
                Info@kajamanagement.eu
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.instagram.com/kaja_management/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white hover:opacity-90 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-white hover:opacity-90 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/kajamanagement/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brandSoft text-white hover:opacity-90 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-accent/25 pt-5">
          <p className="text-sm text-slate-300">© 2019 Kaja Management LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
