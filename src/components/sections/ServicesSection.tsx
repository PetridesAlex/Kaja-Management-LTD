import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { services } from "@/data/services";
import ScrollReveal from "@/components/animated/ScrollReveal";

const serviceImages: Record<string, string> = {
  s1: "/images/claning-services/building-management.webp",
  s2: "/images/claning-services/all-day-support.webp",
  s3: "/images/claning-services/cleaning-maintenance.webp",
  s4: "/images/claning-services/rennovation.webp"
};

const COMMUNAL_PM = "/services/communal-property-management";

const serviceLinks: Record<string, string> = {
  s1: COMMUNAL_PM,
  s2: "/services/individual-property-management",
  s3: "/services/cleaning",
  s4: "/services/renovation"
};

/** Home “Property Services” grid omits garden/pool and pest (same as header nav). */
const HOME_EXCLUDED_SERVICE_IDS = new Set(["s5", "s6"]);

export default function ServicesSection() {
  return (
    <ScrollReveal>
      <section className="mt-20">
        <SectionTitle
          eyebrow="What We Do"
          title="Property Services"
          subtitle="Integrated support for owners and investors, from operations to long-term value optimization."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services
              .filter((service) => !HOME_EXCLUDED_SERVICE_IDS.has(service.id))
              .map((service, index) => (
              <article key={service.id} className="transition duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                  />
                </div>

              <div className="pt-4">
                  <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.24em] text-brand/55 font-semibold uppercase">Service 0{index + 1}</span>
                  </div>
                <h3 className="mt-2 font-display text-[clamp(1.15rem,2vw,1.45rem)] font-semibold text-brandDeep leading-tight tracking-[-0.005em]">
                  {service.title}
                </h3>
                <p className="text-slate-700/90 mt-2.5 leading-7 text-[15px]">{service.description}</p>
                <Link
                  href={serviceLinks[service.id] ?? "/services"}
                  className="inline-flex mt-3 items-center gap-1.5 rounded-full border border-accent/35 bg-white px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-brand hover:bg-gradient-to-r hover:from-accent/15 hover:to-secondary/15 hover:border-accent/60 hover:text-brandDeep transition"
                >
                  View now →
                </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
