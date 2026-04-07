import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export type FacilityCareServicePageProps = {
  eyebrow: string;
  title: string;
  heroSubtitle: string;
  intro: string[];
  bullets: string[];
  heroImage: string;
  heroImageAlt: string;
  focusBadge: string;
  /** Lighter overlay + taller hero when the image should stay visible (e.g. pool / outdoor). */
  heroVisual?: "standard" | "photo";
  /**
   * `cover` fills the hero (may crop). `contain` shows the full image (no crop) with branded letterboxing.
   */
  heroImageObject?: "cover" | "contain";
};

export default function FacilityCareServicePage({
  eyebrow,
  title,
  heroSubtitle,
  intro,
  bullets,
  heroImage,
  heroImageAlt,
  focusBadge,
  heroVisual = "standard",
  heroImageObject = "cover"
}: FacilityCareServicePageProps) {
  const isPhoto = heroVisual === "photo";
  const isContain = heroImageObject === "contain";

  return (
    <PageContainer>
      <section className="mt-8 space-y-10 mb-12 md:mb-16">
        <article
          className={`relative overflow-hidden rounded-[30px] shadow-2xl bg-gradient-to-br from-brandDeep via-brand to-secondary ${
            isPhoto ? "min-h-[300px] md:min-h-[440px]" : "min-h-[280px] md:min-h-[360px]"
          }`}
        >
          {isContain ? (
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,106,0.12),transparent_55%)]"
              aria-hidden
            />
          ) : null}
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className={
              isContain
                ? "object-contain object-center p-4 sm:p-6 md:p-8"
                : `object-cover ${isPhoto ? "object-center" : ""}`
            }
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
          />
          <div
            className={
              isContain
                ? "absolute inset-0 bg-gradient-to-r from-brandDeep/55 via-brand/38 to-secondary/32 pointer-events-none"
                : isPhoto
                  ? "absolute inset-0 bg-gradient-to-r from-brandDeep/70 via-brand/52 to-secondary/42"
                  : "absolute inset-0 bg-gradient-to-r from-brandDeep/88 via-brand/72 to-secondary/60"
            }
          />
          <div
            className={
              isContain
                ? "absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,106,0.14),transparent_52%)] pointer-events-none"
                : isPhoto
                  ? "absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(212,175,106,0.18),transparent_50%)]"
                  : "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,106,0.2),transparent_45%)]"
            }
          />
          <div
            className={`relative z-10 flex flex-col justify-end px-6 md:px-10 py-8 md:py-12 ${
              isPhoto ? "min-h-[300px] md:min-h-[440px]" : "min-h-[280px] md:min-h-[360px]"
            }`}
          >
            <p className="text-xs tracking-[0.22em] text-white/85 font-semibold uppercase">{eyebrow}</p>
            <h1
              className={`text-white text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-3xl ${
                isPhoto ? "drop-shadow-[0_2px_28px_rgba(0,0,0,0.4)]" : ""
              }`}
            >
              {title}
            </h1>
            <p className="text-white/95 mt-4 text-base md:text-lg leading-8 max-w-2xl">{heroSubtitle}</p>
            <p className="mt-4 inline-flex w-fit rounded-full bg-white/20 px-4 py-1.5 text-[11px] tracking-[0.16em] font-semibold text-white uppercase">
              {focusBadge}
            </p>
          </div>
        </article>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <article className="lg:col-span-7 space-y-4">
            {intro.map((p, i) => (
              <p key={i} className="text-slate-700 leading-8">
                {p}
              </p>
            ))}
          </article>
          <aside className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-brandDeep via-brand to-secondary text-white p-6 md:p-8 shadow-card">
            <p className="text-xs tracking-[0.18em] text-white/75 font-semibold uppercase">What we coordinate</p>
            <ul className="mt-5 space-y-3 text-sm leading-7">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl px-5 py-3 bg-accent text-brandDeep font-semibold hover:opacity-95 transition"
              >
                Discuss your property
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageContainer>
  );
}
