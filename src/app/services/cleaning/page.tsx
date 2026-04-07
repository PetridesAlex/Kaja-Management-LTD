import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import CleaningWhatsAppFloating, { CLEANING_WHATSAPP_HREF } from "@/components/services/CleaningWhatsAppCTA";

export default function CleaningServicePage() {
  return (
    <PageContainer>
      <section className="mt-8 space-y-8 mb-12 md:mb-16">
        <article className="relative overflow-hidden rounded-[30px] min-h-[300px] md:min-h-[380px] shadow-2xl">
          <Image
            src="/images/claning-services/premium-cleaning-services.webp"
            alt="Premium cleaning services for residential and commercial properties"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brandDeep/82 via-brand/58 to-secondary/48" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,106,0.22),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(45,30,20,0.35)_100%)]" />
          <div className="relative z-10 h-full min-h-[300px] md:min-h-[380px] px-6 md:px-10 py-8 md:py-10 flex flex-col justify-start">
            <div className="max-w-4xl p-1 md:p-2">
              <p className="text-xs tracking-[0.22em] text-white/90 font-semibold uppercase">KAJA Green Clean</p>
              <h1 className="text-white text-4xl md:text-6xl font-bold mt-3 leading-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                Premium Cleaning Services
              </h1>
              <p className="text-white/95 mt-4 text-base md:text-lg leading-8">
                High-quality, detail-focused cleaning solutions for residential and commercial properties.
              </p>
            </div>
          </div>
        </article>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <article className="lg:col-span-8 p-1 md:p-2">
            <p className="text-xs tracking-[0.2em] text-accent font-semibold uppercase">Cleaning Excellence</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.8vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.01em] bg-gradient-to-r from-brandDeep via-brand to-secondary bg-clip-text text-transparent">
              Why Clients Choose KAJA Green Clean
            </h2>

            <p className="mt-5 text-slate-700 leading-8">
              At KAJA Green Clean, we provide high-quality, professional cleaning services tailored to both residential and
              commercial properties.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Our focus is simple - deliver exceptional results, attention to detail, and a reliable service you can trust every time.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Whether it is a one-time deep clean or ongoing maintenance, we ensure every space is left spotless, fresh, and
              maintained to the highest standard.
            </p>

            <div className="mt-7 max-w-[520px]">
              <div className="relative overflow-hidden rounded-2xl h-[220px] md:h-[260px]">
                <Image
                  src="/images/claning-services/green-kaja.webp"
                  alt="KAJA Green Clean professional cleaning service"
                  fill
                  className="object-contain object-center"
                />
              </div>
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
