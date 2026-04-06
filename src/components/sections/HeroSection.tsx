"use client";

import Link from "next/link";
import Image from "next/image";
import StaggeredText from "@/components/animated/StaggeredText";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full min-h-[100svh] md:min-h-screen">
      <Image
        src="/images/highrise-apartment-buildings-downtown.webp"
        alt="Modern high-rise apartment buildings"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,30,20,0.76),rgba(74,52,35,0.34))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(212,175,106,0.33),transparent_42%)]" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 md:px-10 min-h-[100svh] md:min-h-screen py-5 sm:py-6 md:py-10">
        <div className="min-h-[calc(100svh-8rem)] md:min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center md:items-start">
          <div className="md:col-span-8 w-full max-w-[720px] mx-auto md:mx-0 flex flex-col items-center text-center md:items-start md:text-left py-8 sm:py-10 md:py-0 md:pt-16 lg:pt-20 md:self-start">
            <Link
              href="/"
              className="mb-6 sm:mb-7 md:mb-8 inline-flex rounded-2xl bg-white/5 p-3 ring-1 ring-white/15 backdrop-blur-[2px] transition hover:bg-white/10 hover:ring-white/25"
              aria-label="Kaja Management LTD — Home"
            >
              <Image
                src="/images/logo/property-needs-logo.webp"
                alt="Kaja Management LTD"
                width={300}
                height={76}
                priority
                className="h-14 w-auto sm:h-16 md:h-[4.25rem] object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.4)]"
              />
            </Link>
            <h1 className="font-display text-white text-[clamp(1.65rem,6.5vw,2.35rem)] md:text-[clamp(2.7rem,5vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.01em] max-w-[22rem] sm:max-w-none md:max-w-none">
              Protecting, maintaining, and maximizing your property&apos;s value
            </h1>
            <StaggeredText
              text='“We deliver tailored solutions designed to protect, maintain, and maximize the long-term value of your property, ensuring it performs at its highest potential.”'
              segmentBy="words"
              direction="top"
              delay={35}
              duration={0.58}
              blur
              staggerDirection="forward"
              exitOnScrollOut
              className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full max-w-[min(100%,22rem)] sm:max-w-2xl md:max-w-3xl mx-auto md:mx-0 text-center md:text-left text-white/95 text-sm sm:text-base md:text-xl leading-7 md:leading-9 font-medium border-t border-accent/50 pt-5 border-l-0 pl-0 md:border-t-0 md:border-l-2 md:border-accent/75 md:pt-0 md:pl-4 lg:pl-5 italic"
              as="p"
            />
            <div className="hero-fade-in-up-delay-2 mt-8 sm:mt-10 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none items-center justify-center md:justify-start">
              <Link
                href="/services"
                className="rounded-full px-4 py-2 min-h-9 text-sm sm:px-6 sm:py-3 sm:min-h-12 sm:text-base font-semibold bg-accent text-slate-950 inline-flex items-center justify-center w-auto min-w-[9.5rem] sm:min-w-0 hover:opacity-90 transition"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-4 py-2 min-h-9 text-sm sm:px-6 sm:py-3 sm:min-h-12 sm:text-base font-semibold bg-white/15 text-white inline-flex items-center justify-center w-auto min-w-[9.5rem] sm:min-w-0 hover:bg-white/25 transition border border-white/20"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
