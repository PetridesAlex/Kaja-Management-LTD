import Link from "next/link";
import Image from "next/image";
import StaggeredText from "@/components/animated/StaggeredText";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full min-h-screen">
      <Image
        src="/images/highrise-apartment-buildings-downtown.webp"
        alt="Modern high-rise apartment buildings"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.72),rgba(15,23,42,0.28))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(197,157,95,0.30),transparent_42%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <StaggeredText
            text="FIND YOUR NEXT PROPERTY"
            segmentBy="words"
            direction="top"
            delay={80}
            duration={0.6}
            blur
            staggerDirection="forward"
            exitOnScrollOut
            className="text-white text-4xl md:text-7xl font-bold leading-tight tracking-[0.02em]"
            as="h1"
          />
          <p className="hero-fade-in-up-delay-1 text-slate-100 mt-5 max-w-2xl text-base md:text-xl">
            Modern brokerage and property management with premium service and transparent communication.
          </p>
          <div className="hero-fade-in-up-delay-2 flex gap-3 mt-8 flex-wrap">
            <Link
              href="/properties"
              className="rounded-xl px-6 py-3 min-h-12 font-semibold bg-accent text-slate-950 inline-block hover:opacity-90 transition"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-xl px-6 py-3 min-h-12 font-semibold bg-white/15 text-white inline-block hover:bg-white/25 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
