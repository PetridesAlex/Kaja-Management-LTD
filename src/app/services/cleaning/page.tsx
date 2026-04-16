import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import CleaningWhatsAppFloating, { CLEANING_WHATSAPP_HREF } from "@/components/services/CleaningWhatsAppCTA";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} KAJA Green Clean: deep, regular, and move-in/move-out cleaning for managed properties in Cyprus.`;

export const metadata: Metadata = {
  title: "KAJA Green Clean",
  description: desc,
  openGraph: { title: pageTitle("KAJA Green Clean"), description: desc },
  twitter: { title: pageTitle("KAJA Green Clean"), description: desc }
};

const cleaningServiceItems = [
  "Deep cleaning",
  "Standard / regular cleaning",
  "End of tenancy & move-in / move-out cleaning",
  "Airbnb cleaning",
  "Office and commercial cleaning",
  "Window cleaning",
  "Kitchen, oven & appliance cleaning",
  "Bathroom, tile & grout cleaning",
  "Sofa, mattress & carpet cleaning",
  "Eco-friendly cleaning options"
] as const;

export default function CleaningServicePage() {
  return (
    <PageContainer>
      <section className="mt-8 space-y-8 mb-12 md:mb-16">
        <article className="relative overflow-hidden rounded-[30px] min-h-[280px] md:min-h-[400px] shadow-2xl bg-gradient-to-br from-pageSoft via-page to-brandDeep/[0.12] ring-1 ring-black/5">
          <Image
            src="/images/claning-services/premium-cleaning-services.webp"
            alt="Premium cleaning services for residential and commercial properties"
            fill
            priority
            className="object-contain object-center p-3 sm:p-5 md:p-6"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(45,30,20,0.06)_100%)]"
            aria-hidden
          />
        </article>

        <header className="rounded-[28px] border border-accent/15 bg-gradient-to-br from-white via-page to-pageSoft/95 px-6 py-8 shadow-[0_20px_56px_rgba(45,30,20,0.07)] ring-1 ring-white/90 md:px-10 md:py-10">
          <p className="text-xs tracking-[0.22em] text-accent font-semibold uppercase">KAJA Green Clean</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.8vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.01em] bg-gradient-to-r from-brandDeep via-brand to-secondary bg-clip-text text-transparent">
            Premium Cleaning Services
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-700 md:text-lg">
            High-quality, detail-focused cleaning solutions for residential and commercial properties.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <article className="lg:col-span-8 p-1 md:p-2">
            <p className="text-xs tracking-[0.22em] text-accent font-semibold uppercase">Cleaning Excellence</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.8vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.01em] bg-gradient-to-r from-brandDeep via-brand to-secondary bg-clip-text text-transparent">
              Why Clients Choose KAJA Green Clean
            </h2>

            <div className="mt-8 rounded-[28px] border border-accent/15 bg-gradient-to-br from-white via-page to-pageSoft/90 p-6 md:p-8 shadow-[0_12px_48px_rgba(45,30,20,0.07)] ring-1 ring-white/80">
              <div className="space-y-5 text-[17px] leading-[1.75] text-slate-700/95 md:text-lg">
                <p>
                  At KAJA Green Clean, we provide high-quality, professional cleaning services tailored to both residential
                  and commercial properties.
                </p>
                <p className="text-slate-800">
                  Our focus is simple — deliver exceptional results, attention to detail, and a reliable service you can
                  trust every time.
                </p>
                <p>
                  Whether it&apos;s a one-time deep clean or ongoing maintenance, we ensure every space is left spotless,
                  fresh, and maintained to the highest standard.
                </p>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center">
              <div className="relative h-[220px] w-full max-w-[560px] md:h-[260px]">
                <Image
                  src="/images/claning-services/green-kaja.webp"
                  alt="KAJA Green Clean professional cleaning service"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4" role="presentation">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/45 to-transparent" aria-hidden />
              <span className="select-none text-lg leading-none text-accent/80" aria-hidden>
                ⸻
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/45 to-transparent" aria-hidden />
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-xl font-semibold tracking-wide text-brandDeep md:text-2xl">Our Services</h3>
                <span className="hidden sm:inline-block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-secondary opacity-80" aria-hidden />
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-3.5">
                {cleaningServiceItems.map((item) => (
                  <li
                    key={item}
                    className="group flex gap-3 rounded-2xl border border-slate-200/90 bg-white/60 px-4 py-3.5 shadow-[0_8px_24px_rgba(45,30,20,0.04)] transition hover:border-accent/25 hover:bg-white hover:shadow-[0_12px_32px_rgba(45,30,20,0.08)]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-secondary/15 text-brandDeep ring-1 ring-accent/20">
                      <Check className="h-4 w-4 stroke-[2.5]" aria-hidden />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>

              <aside className="relative mt-10 overflow-hidden rounded-3xl border border-accent/12 bg-gradient-to-br from-white via-page to-pageSoft/90 px-6 py-7 shadow-[0_28px_72px_rgba(45,30,20,0.09)] ring-1 ring-white/95 md:px-9 md:py-8">
                <div
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent blur-3xl"
                  aria-hidden
                />
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-accent via-brand/80 to-secondary opacity-90" aria-hidden />
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brandDeep via-brand to-secondary text-white shadow-[0_12px_28px_rgba(45,30,20,0.25)] ring-1 ring-white/25">
                    <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-3 pl-0 sm:pl-1">
                    <p className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
                      Bespoke scope
                    </p>
                    <p className="font-display text-[clamp(1.05rem,2.1vw,1.25rem)] font-medium leading-[1.65] tracking-[-0.015em] text-slate-800">
                      All of our services can be fully tailored to your specific needs, ensuring the right solution for
                      every property.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </article>

          <aside className="lg:col-span-4 self-start h-fit rounded-3xl bg-gradient-to-br from-brandDeep via-brand to-secondary text-white p-6 shadow-card">
            <p className="text-xs tracking-[0.18em] text-white/75 font-semibold uppercase">Service Promise</p>
            <ul className="mt-5 space-y-3 text-sm leading-6">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                Professional teams with consistent quality control
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                Flexible one-time and recurring service plans
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                Spotless presentation for owners, tenants, and guests
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="rounded-xl px-5 py-3 bg-accent text-brandDeep font-semibold text-center hover:opacity-95 transition">
                Request Cleaning Proposal
              </Link>
              <a
                href={CLEANING_WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="Request a cleaning service proposal on WhatsApp"
                className="rounded-xl px-5 py-3 border border-white/35 bg-white/10 text-white font-semibold text-center hover:bg-white/15 transition inline-flex items-center justify-center gap-2"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp — cleaning proposal only
              </a>
              <p className="text-[11px] leading-relaxed text-white/65">
                Opens WhatsApp with a pre-filled message for KAJA Green Clean proposals (not general enquiries).
              </p>
            </div>
          </aside>
        </div>
      </section>
      <CleaningWhatsAppFloating />
    </PageContainer>
  );
}
