import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const servicesDescription = `${SITE_DESCRIPTION} Explore communal and individual management, cleaning, renovation, garden & pool, and pest control.`;

export const metadata: Metadata = {
  title: "Services",
  description: servicesDescription,
  openGraph: {
    title: pageTitle("Services"),
    description: servicesDescription
  },
  twitter: {
    title: pageTitle("Services"),
    description: servicesDescription
  }
};

const cleaningModels = [
  {
    title: "In-house Team",
    description:
      "Dedicated internal staff for full quality control, standardized schedules, and direct service accountability."
  },
  {
    title: "Vetted Partner Network (Recommended to Start)",
    description:
      "A curated network of trusted cleaning partners with negotiated rates, managed bookings, and quality oversight."
  },
  {
    title: "Tenant/Owner On-Demand Cleaning",
    description:
      "Flexible cleaning requests from tenants and owners through a simple booking flow with coordinated access."
  },
  {
    title: "Move-In / Move-Out Packages",
    description:
      "Fixed-price handover packages with detailed checklists for new tenancies and end-of-lease transitions."
  },
  {
    title: "Short-Term Rental Turnovers",
    description:
      "High-frequency turnover support for Airbnb-style units with linen, restocking, and inspection-ready service."
  }
];

const cleaningServices = [
  {
    title: "Regular Cleaning (Weekly / Bi-weekly)",
    detail: "Routine upkeep for occupied homes and offices.",
    icon: "🧹"
  },
  {
    title: "Deep Cleaning",
    detail: "Post-renovation, seasonal refresh, or full property reset.",
    icon: "✨"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    detail: "Ideal for handovers, tenant changeovers, and lease completion.",
    icon: "📦"
  },
  {
    title: "Airbnb / Short-Term Rental Turnovers",
    detail: "Fast turnaround with linen change and restocking options.",
    icon: "🛎️"
  },
  {
    title: "Post-Renovation Cleaning",
    detail: "Dust removal, floors, windows, and detailed finish work.",
    icon: "🛠️"
  },
  {
    title: "Window & Balcony Cleaning",
    detail: "Interior/exterior windows, terraces, railings, and outdoor surfaces.",
    icon: "🪟"
  },
  {
    title: "Laundry & Linen Service (Optional)",
    detail: "Wash, dry, fold, and setup for active rental units.",
    icon: "🧺"
  },
  {
    title: "Inspection After Cleaning (Optional)",
    detail: "Checklist plus photo confirmation sent to owner.",
    icon: "📸"
  }
];

const steps = [
  "Request a cleaning (share property details and preferred date).",
  "We confirm schedule and quote.",
  "Our team or partners complete the cleaning and checklist.",
  "You receive photos and invoice (optional key-safe access)."
];

const COMMUNAL_PM = "/services/communal-property-management";

const serviceLinks: Record<string, string> = {
  s1: COMMUNAL_PM,
  s2: "/services/individual-property-management",
  s3: "/services/cleaning",
  s4: "/services/renovation",
  s5: `${COMMUNAL_PM}#garden-pool`,
  s6: `${COMMUNAL_PM}#pest-control`
};

const managementSocial = {
  instagram: "https://www.instagram.com/kaja_management/",
  facebook: "https://www.facebook.com/people/Kaja-Management/61570694188025/?ref=1",
  linkedin: "https://www.linkedin.com/company/kajamanagement/"
} as const;

export default function ServicesPage() {
  return (
    <PageContainer>
      <section className="mt-8" id="communal-property-management">
        <div className="relative overflow-hidden rounded-[30px] min-h-[340px] md:min-h-[420px] mb-10">
          <Image
            src="/images/claning-services/proffesional-property-services.webp"
            alt="Property services hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brandDeep/80 via-brand/65 to-secondary/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(176,138,87,0.33),transparent_40%)]" />
          <div className="relative z-10 h-full px-6 md:px-10 py-10 md:py-12 flex flex-col justify-end">
            <p className="text-xs tracking-[0.2em] text-white/80 font-semibold">WHAT WE DO</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold mt-3 max-w-3xl">Professional Property Services</h1>
            <p className="text-slate-100 mt-4 max-w-2xl text-base md:text-lg">
              End-to-end operations, cleaning, turnovers, and owner-focused coordination to keep assets performing at
              premium standards.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/contact" className="rounded-xl px-6 py-3 bg-accent text-white font-semibold min-h-12">
                Request a Service Plan
              </Link>
              <Link href="/services#communal-property-management" className="rounded-xl px-6 py-3 bg-white/20 text-white font-semibold min-h-12">
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">Connect</p>
                <p className="mt-1 max-w-md font-display text-sm text-white/92">
                  Follow Kaja Management for service updates and property insights.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={managementSocial.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kaja Management on Instagram"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 hover:border-white/35"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                </a>
                <a
                  href={managementSocial.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kaja Management on Facebook"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 hover:border-white/35"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
                  </svg>
                </a>
                <a
                  href={managementSocial.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kaja Management on LinkedIn"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 hover:border-white/35"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle
          eyebrow="What We Do"
          title="Services"
          subtitle="Comprehensive management and brokerage services tailored for modern portfolios."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={
                service.id === "s1"
                  ? "individual-property-management"
                  : service.id === "s2"
                    ? "cleaning-services"
                    : service.id === "s3"
                      ? "renovation-services"
                      : undefined
              }
              className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-brand/10 flex items-center justify-center text-2xl">{service.icon}</div>
                <p className="text-[11px] tracking-[0.24em] text-brand/55 font-semibold uppercase">Service 0{index + 1}</p>
              </div>
              <h3 className="mt-3 font-display text-[clamp(1.15rem,2vw,1.45rem)] font-semibold text-brandDeep leading-tight tracking-[-0.005em]">
                {service.title}
              </h3>
              <p className="text-slate-700/90 mt-2.5 leading-7 text-[15px]">{service.description}</p>
              <Link
                href={serviceLinks[service.id] ?? "/services"}
                className="inline-flex mt-3 items-center gap-1.5 rounded-full border border-accent/35 bg-white px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-brand hover:bg-gradient-to-r hover:from-accent/15 hover:to-secondary/15 hover:border-accent/60 hover:text-brandDeep transition"
              >
                View now →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle
          eyebrow="Cleaning Operations"
          title="Cleaning & Turnover Services"
          subtitle="Keep your property spotless without lifting a finger. Our management team coordinates professional cleaning for apartments, villas, and offices - ideal for tenants, owners, and short-term rentals."
        />

        <div className="relative overflow-hidden rounded-[28px] min-h-[260px] md:min-h-[320px] mb-6 shadow-card">
          <Image
            src="/images/claning-services/cleaning-services.webp"
            alt="Professional cleaning services team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brandDeep/85 via-brand/70 to-secondary/55" />
          <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
            <p className="text-white/80 text-xs tracking-[0.2em] font-semibold">TURNOVER SOLUTIONS</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold mt-2 max-w-2xl">
              Reliable Cleaning, Faster Turnovers, Better Property Presentation
            </h3>
            <p className="text-slate-100 mt-3 max-w-2xl">
              From move-out resets to short-term rental turnovers, we coordinate every detail with quality checks and
              photo confirmations.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] bg-gradient-to-br from-page via-page to-pageSoft p-5 md:p-8 shadow-card">
          <div className="grid xl:grid-cols-12 gap-5">
            <article className="xl:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brandDeep via-brand to-secondary text-white p-6 md:p-7 shadow-card border border-accent/25">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(176,138,87,0.26),transparent_42%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.03)_65%,transparent_100%)]" />

              <div className="absolute right-4 top-4 z-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-2">
                <Image
                  src="/images/logo/property-needs-logo.webp"
                  alt="Kaja Management LTD"
                  width={150}
                  height={44}
                  className="h-8 w-auto object-contain"
                />
              </div>

              <div className="absolute -right-20 -bottom-20 opacity-10">
                <Image
                  src="/images/logo/property-needs-logo.webp"
                  alt=""
                  width={280}
                  height={96}
                  aria-hidden="true"
                  className="h-auto w-[230px] object-contain"
                />
              </div>

              <div className="relative z-20">
              <p className="text-xs tracking-[0.2em] text-white/75 font-semibold">DELIVERY MODELS</p>
              <h3 className="text-3xl font-semibold mt-3">How We Deliver This Service</h3>
              <p className="text-white/90 mt-3 leading-7">
                We mix direct operations with curated partner capacity, so quality stays high while response time stays fast.
              </p>
              <div className="mt-6 space-y-3">
                {cleaningModels.map((model, index) => (
                  <div key={model.title} className="rounded-xl bg-white/12 p-4 border border-white/15">
                    <p className="text-[11px] tracking-[0.18em] text-white/75">MODEL 0{index + 1}</p>
                    <p className="font-semibold mt-1">{model.title}</p>
                    <p className="text-white/80 text-sm mt-1 leading-6">{model.description}</p>
                  </div>
                ))}
              </div>
              </div>
            </article>

            <article className="xl:col-span-7 rounded-3xl bg-white p-6 md:p-7 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-semibold text-brand">Core Service Scope</h3>
                <p className="text-xs tracking-[0.16em] text-muted">8 OPERATIONAL PACKAGES</p>
              </div>
              <div className="mt-5 grid md:grid-cols-2 gap-3">
                {cleaningServices.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl bg-slate-50/90 p-4 border border-slate-100 hover:bg-white hover:shadow-sm transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold leading-5">{item.title}</p>
                        <p className="text-slate-600 text-sm mt-1 leading-6">{item.detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-5">
          <article className="lg:col-span-2 rounded-3xl bg-white p-6 md:p-8 border border-slate-100 shadow-card">
            <h3 className="text-2xl font-semibold text-brand">How It Works</h3>
            <div className="mt-5 grid md:grid-cols-2 gap-3">
              {steps.map((step, index) => (
                <article key={step} className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-brand text-white text-xs font-semibold px-3 py-1">
                    STEP 0{index + 1}
                  </div>
                  <p className="text-slate-700 mt-3 text-sm leading-6">{step}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="bg-gradient-to-br from-brand to-secondary rounded-3xl p-6 md:p-8 text-white shadow-card">
            <h3 className="text-2xl font-semibold">Starting From</h3>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-white/80 text-sm">Regular Cleaning</p>
                <p className="text-xl font-semibold">from EUR XX</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-white/80 text-sm">Deep Cleaning</p>
                <p className="text-xl font-semibold">from EUR XX</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-white/80 text-sm">Move-Out Cleaning</p>
                <p className="text-xl font-semibold">from EUR XX</p>
              </div>
            </div>
            <p className="text-white/70 text-xs mt-4">
              Final pricing depends on square meters, bedrooms, and property condition.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl bg-white border border-slate-100 p-5 md:p-6 shadow-card flex flex-wrap gap-3 items-center justify-between">
          <p className="text-slate-700 max-w-xl">
            Need recurring cleaning, move-out support, or turnover operations? Our team can configure a model tailored
            to your property type and occupancy cycle.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl px-6 py-3 bg-brand text-white font-semibold min-h-12">
            Book a Cleaning
            </Link>
            <Link href="/contact" className="rounded-xl px-6 py-3 bg-secondary text-white font-semibold min-h-12">
            Get a Quote
            </Link>
            <Link href="/contact" className="rounded-xl px-6 py-3 bg-white border border-slate-300 text-brand font-semibold min-h-12">
            Request a Call
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
