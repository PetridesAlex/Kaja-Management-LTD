import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

type ServiceHeroCaptionProps = {
  eyebrow: string;
  title: string;
  blurb: string;
};

/** Premium overlay for service imagery: glass panel, accent rail, editorial typography. */
function ServiceHeroCaption({ eyebrow, title, blurb }: ServiceHeroCaptionProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.14] via-white/[0.06] to-transparent p-[1px] shadow-[0_20px_50px_rgba(15,10,8,0.45)] backdrop-blur-md">
        <div className="relative rounded-[15px] bg-gradient-to-br from-black/45 via-black/30 to-black/20 px-5 py-5 md:px-7 md:py-6">
          <div className="border-l-2 border-accent/90 pl-4 md:pl-5 [box-shadow:inset_4px_0_24px_-4px_rgba(212,175,106,0.15)]">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-accent drop-shadow-sm">
              {eyebrow}
            </p>
            <p className="mt-2.5 font-display text-[clamp(1.2rem,2.8vw,1.65rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
              {title}
            </p>
            <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/85 md:text-sm">{blurb}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type PropertyManagementServicePageProps = {
  serviceLabel: string;
};

export default function PropertyManagementServicePage({ serviceLabel }: PropertyManagementServicePageProps) {
  const pageMeta: Record<string, { focus: string; subtitle: string; bullets: string[] }> = {
    "Communal Property Management": {
      focus: "COMMUNAL OPERATIONS",
      subtitle:
        "This page is focused on communal building management, with additional modules for individual management, renovation, outdoor care, and pest control.",
      bullets: [
        "Current focus: Communal Property Management",
        "Includes operational workflows and owner reporting",
        "Also covers individual, renovation, garden & pool, and pest control modules"
      ]
    },
    "Individual Property Management": {
      focus: "INDIVIDUAL ASSET CARE",
      subtitle:
        "This page is focused on individual property management, with additional modules for communal operations, renovation, outdoor care, and pest control.",
      bullets: [
        "Current focus: Individual Property Management",
        "Includes tenant, maintenance, and communication workflows",
        "Also covers communal, renovation, garden & pool, and pest control modules"
      ]
    },
    "Renovation Services": {
      focus: "RENOVATION MANAGEMENT",
      subtitle:
        "This page is focused on renovation services, with additional modules for ongoing communal and individual management support.",
      bullets: [
        "Current focus: Renovation Services",
        "Includes planning, execution, and quality delivery notes",
        "Also shows related communal and individual modules"
      ]
    }
  };

  const meta = pageMeta[serviceLabel] ?? {
    focus: "SERVICE OVERVIEW",
    subtitle:
      "This page includes structured management and renovation modules with clear responsibilities and delivery standards.",
    bullets: [
      `Current focus: ${serviceLabel}`,
      "Includes management operations and service delivery workflows",
      "Designed for clear owner communication and execution"
    ]
  };

  const individualServices = [
    "Coordination with partner agents for tenant placement",
    "Full rent collection and financial tracking",
    "Professional tenant communication and relationship management",
    "Routine inspections and detailed reporting",
    "Maintenance and repair coordination",
    "Seamless move-in and move-out management",
    "Contract handling and administrative support",
    "Full oversight of vacant or holiday properties"
  ];

  const enhancedExperience = [
    "Airport pick-up and drop-off services",
    "Pre-arrival property preparation",
    "Professional cleaning services (KAJA Green Clean)",
    "Regular property checks for vacant homes",
    "Ongoing support with fast response times"
  ];

  const gardenPoolBullets = [
    "Lawn, planting beds, borders, and irrigation line checks",
    "Seasonal pruning, weed control, and debris clearance",
    "Pool water chemistry, filtration, and routine equipment inspection",
    "Deck, patio, and pool surround cleaning with safety in mind",
    "Coordination with trusted suppliers and documented service visits",
    "Optional upgrades: lighting checks, outdoor furniture areas, and storm readiness"
  ];

  const pestControlBullets = [
    "Preventive inspections and treatment plans for common areas and service zones",
    "Coordinated interior and perimeter treatments where permitted",
    "Rapid call-outs for urgent reports from tenants or staff",
    "Food-safe and hygiene-aware approaches for hospitality and short-stay units",
    "Seasonal adjustments for insects, rodents, and local pests",
    "Reporting aligned with building rules and owner expectations"
  ];

  const communalServices = [
    "Full coordination and supervision of building maintenance",
    "Cleaning and upkeep of all communal areas",
    "Organization and management of repairs when required",
    "Financial administration and expense tracking",
    "Transparent reporting to property owners",
    "Communication with all residents and owners",
    "Supplier and contractor coordination",
    "Regular inspections of communal areas",
    "Handling day-to-day issues within the building",
    "Ensuring the building remains clean, safe, and well-presented"
  ];

  return (
    <PageContainer>
      <section className="mt-8">
        <div className="space-y-10">
          <article className="relative overflow-hidden rounded-[30px] min-h-[340px] md:min-h-[430px]">
            <Image
              src="/images/claning-services/proffesional-property-services.webp"
              alt="Professional property services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandDeep/85 via-brand/75 to-secondary/65" />
            <div className="relative z-10 h-full px-6 md:px-10 py-10 md:py-12 flex flex-col justify-end">
              <p className="text-xs tracking-[0.2em] text-white/80 font-semibold">KAJA MANAGEMENT LTD</p>
              <h3 className="text-white text-3xl md:text-5xl font-bold mt-3 max-w-3xl">
                Premium Property Management With Structured Operations
              </h3>
              <p className="text-slate-100 mt-4 max-w-2xl text-base md:text-lg">
                We protect asset value, streamline daily operations, and deliver reliable experiences for owners,
                residents, and guests.
              </p>
            </div>
          </article>

          <div className="grid lg:grid-cols-12 gap-5 items-end">
            <div className="lg:col-span-8">
              <p className="text-accent text-xs tracking-[0.22em] font-semibold uppercase">Current Service</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">{serviceLabel}</h2>
              <p className="text-slate-700/95 mt-4 max-w-3xl text-base md:text-lg leading-8">
                {meta.subtitle}
              </p>
              <p className="mt-4 inline-flex items-center rounded-full bg-accent/18 px-4 py-1.5 text-[11px] tracking-[0.16em] font-semibold text-brand uppercase">
                {meta.focus}
              </p>
            </div>
            <aside className="lg:col-span-4 rounded-2xl p-5">
              <p className="text-[11px] tracking-[0.18em] text-muted font-semibold">PAGE OVERVIEW</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {meta.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <article className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-3xl min-h-[300px]">
              <Image
                src="/images/claning-services/building-management.webp"
                alt="Individual property management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/45 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs tracking-[0.18em] text-white/80 font-semibold">INDIVIDUAL PROPERTY MANAGEMENT</p>
                <p className="text-white text-lg font-semibold mt-2">End-to-end care for every private asset.</p>
              </div>
            </div>
            <div className="p-2 md:p-4">
              <p className="text-slate-700 leading-7">
                At KAJA Management, successful property investment is not simply about occupancy. It is about
                protecting your asset while delivering a high-quality living experience.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                We coordinate tenant placement with trusted agents, then manage the full post-placement cycle with
                operational control, communication, and reporting.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                For holiday homes and secondary residences, we provide complete oversight so your property remains
                secure, pristine, and always ready.
              </p>
              <p className="mt-4 text-slate-800 font-medium">
                The result: longer tenancies, cleaner operations, and complete peace of mind.
              </p>
            </div>
          </article>

          <div className="grid xl:grid-cols-2 gap-6">
            <article className="p-2 md:p-4">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold">OUR SERVICES</p>
              <ul className="mt-4 grid gap-2 text-slate-700">
                {individualServices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="p-2 md:p-4">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold">ENHANCED EXPERIENCE & PROPERTY CARE</p>
              <ul className="mt-4 grid gap-2 text-slate-700">
                {enhancedExperience.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="p-2 md:p-4">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold">COMMUNAL PROPERTY MANAGEMENT</p>
              <p className="mt-4 text-slate-700 leading-7">
                We provide structured communal management to keep shared spaces clean, safe, efficient, and financially
                transparent for all owners.
              </p>
              <ul className="mt-5 grid gap-2 text-slate-700">
                {communalServices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl min-h-[300px]">
              <Image
                src="/images/claning-services/all-day-support.webp"
                alt="Communal support and maintenance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/45 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs tracking-[0.18em] text-white/80 font-semibold">TRANSPARENCY & COMMUNICATION</p>
                <p className="text-white text-lg font-semibold mt-2">Owners stay informed with clear reporting.</p>
              </div>
            </div>
          </article>

          <article className="grid lg:grid-cols-2 gap-6 items-start pb-8 md:pb-12">
            <div className="relative overflow-hidden rounded-3xl min-h-[280px]">
              <Image src="/images/claning-services/rennovation.webp" alt="Renovation services" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand/85 via-brand/45 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs tracking-[0.18em] text-white/80 font-semibold">RENOVATION SERVICES</p>
                <p className="text-white text-lg font-semibold mt-2">From upgrades to full-scope project delivery.</p>
              </div>
            </div>
            <div className="p-2 md:p-4">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold uppercase">Execution Standards</p>
              <p className="text-slate-700 leading-7">
                We deliver renovation services for individual apartments and full residential blocks with a structured,
                quality-focused process.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                From minor upgrades to full-scale renovations, every scope is managed with clear budgeting, sequencing,
                and communication.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Through our vetted contractor network, projects are executed to high standards, on schedule, and with
                full visibility for owners.
              </p>
            </div>
          </article>

          <article
            id="garden-pool"
            className="scroll-mt-28 md:scroll-mt-32 grid lg:grid-cols-2 gap-6 items-stretch"
          >
            <div className="p-2 md:p-4 order-2 lg:order-1">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold">GARDEN & POOL MAINTENANCE</p>
              <p className="mt-4 text-slate-700 leading-7">
                Crystal-clear water, tidy surrounds, and healthy planting support both communal schemes and private
                portfolios. We coordinate scheduled visits, quality checks, and vendor performance so pools, decks, and
                gardens stay on standard—with clear reporting for committees and owners.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Frequency aligns with season, usage, and local conditions, with documented service visits you can rely on.
              </p>
              <ul className="mt-5 grid gap-2 text-slate-700">
                {gardenPoolBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href="/services/garden-pool-maintenance"
                  className="text-sm font-semibold text-brand hover:text-brandDeep underline-offset-4 hover:underline"
                >
                  Full garden & pool service details →
                </Link>
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[340px] order-1 lg:order-2">
              <Image
                src="/images/claning-services/pool-services.webp"
                alt="Pool and garden maintenance for managed properties"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDeep/92 via-brand/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_80%_20%,rgba(212,175,106,0.18),transparent_60%)] pointer-events-none" />
              <ServiceHeroCaption
                eyebrow="Outdoor & pool care"
                title="Landscapes, irrigation, and pool chemistry—on rhythm."
                blurb="Scheduled care for communal and private assets, with vendor oversight and visit documentation you can trust."
              />
            </div>
          </article>

          <article
            id="pest-control"
            className="scroll-mt-28 md:scroll-mt-32 grid lg:grid-cols-2 gap-6 items-stretch"
          >
            <div className="relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[340px] bg-gradient-to-br from-pageSoft via-page to-brandDeep/[0.12] ring-1 ring-black/5">
              <Image
                src="/images/claning-services/pest-control-services.webp"
                alt="Pest prevention and treatment for managed properties"
                fill
                className="object-contain object-center p-3 sm:p-4 md:p-5"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDeep/65 via-brandDeep/15 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-brandDeep/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_85%,rgba(212,175,106,0.1),transparent_55%)] pointer-events-none" />
              <ServiceHeroCaption
                eyebrow="Pest control"
                title="Prevention, rapid response, and audit-ready documentation."
                blurb="Programs and call-outs through vetted partners—structured for tenants, committees, and owner reporting."
              />
            </div>
            <div className="p-2 md:p-4">
              <p className="text-xs tracking-[0.16em] text-muted font-semibold">PEST CONTROL</p>
              <p className="mt-4 text-slate-700 leading-7">
                Pest issues can escalate quickly in shared buildings and rental units. We manage preventive programs and
                responsive treatment through vetted partners, with schedules and communication that keep tenants informed
                and owners protected.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Every engagement is documented with scope, timing, and follow-up recommendations so committees and owners
                have a clear audit trail.
              </p>
              <ul className="mt-5 grid gap-2 text-slate-700">
                {pestControlBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href="/services/pest-control"
                  className="text-sm font-semibold text-brand hover:text-brandDeep underline-offset-4 hover:underline"
                >
                  Full pest control service details →
                </Link>
              </p>
            </div>
          </article>

        </div>
      </section>
    </PageContainer>
  );
}
