import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import SectionTitle from "@/components/shared/SectionTitle";

type PropertyManagementServicePageProps = {
  serviceLabel: string;
};

export default function PropertyManagementServicePage({ serviceLabel }: PropertyManagementServicePageProps) {
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
      <section className="mt-10">
        <SectionTitle
          eyebrow="Service Detail"
          title={serviceLabel}
          subtitle="Professional, transparent, and structured management solutions for individual properties, communal buildings, and renovation projects."
        />

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
            <div className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-card">
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
            <article className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-card">
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
            <article className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-card">
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
            <div className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-card">
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

          <article className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-3xl min-h-[280px]">
              <Image src="/images/claning-services/rennovation.webp" alt="Renovation services" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand/85 via-brand/45 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs tracking-[0.18em] text-white/80 font-semibold">RENOVATION SERVICES</p>
                <p className="text-white text-lg font-semibold mt-2">From upgrades to full-scope project delivery.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-card">
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

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-brand text-white font-semibold shadow-sm hover:opacity-90 transition">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
