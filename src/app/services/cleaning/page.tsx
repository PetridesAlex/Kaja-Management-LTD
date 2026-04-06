import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

export default function CleaningServicePage() {
  return (
    <PageContainer>
      <section className="mt-8 space-y-8 mb-12 md:mb-16">
        <article className="relative overflow-hidden rounded-[30px] min-h-[260px] md:min-h-[320px] shadow-2xl bg-gradient-to-r from-brandDeep via-brand to-secondary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(212,175,106,0.22),transparent_44%)]" />
          <div className="relative z-10 h-full px-6 md:px-10 py-8 md:py-10 flex flex-col justify-start">
            <div className="max-w-4xl p-1 md:p-2">
              <p className="text-xs tracking-[0.22em] text-white/90 font-semibold uppercase">KAJA Green Clean</p>
              <h1 className="text-white text-4xl md:text-6xl font-bold mt-3 leading-tight">Premium Cleaning Services</h1>
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

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-xl px-5 py-3 bg-accent text-brandDeep font-semibold">
                Request Cleaning Proposal
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageContainer>
  );
}
