"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Innovation",
    subtitle: "Building the future",
    description: "We apply modern operations, responsive communication, and smart workflows to elevate property performance."
  },
  {
    title: "Speed",
    subtitle: "Fast, reliable execution",
    description: "From resident requests to owner updates, our systems are designed for quick turnaround and consistent delivery."
  },
  {
    title: "Transparency",
    subtitle: "Clear visibility always",
    description: "Owners receive structured reporting, financial clarity, and proactive updates for confident decision-making."
  },
  {
    title: "Impact",
    subtitle: "Long-term asset value",
    description: "We focus on retention, care standards, and operational quality that compound value over time."
  }
];

const ROTATION_MS = 3200;

export default function About4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const elapsed = time - startedAt;
      const next = Math.min(1, elapsed / ROTATION_MS);
      setProgress(next);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex]);

  const current = slides[activeIndex];
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <section className="mt-0 bg-page">
      <div className="w-full min-h-[calc(100vh-80px)] px-0 md:px-4 py-0 md:py-6">
        <div className="grid lg:grid-cols-12 gap-0 md:gap-5 items-stretch min-h-[calc(100vh-80px)] rounded-none md:rounded-[30px] border-0 md:border md:border-accent/35 bg-gradient-to-br from-brandDeep via-brand to-secondary shadow-none md:shadow-2xl overflow-hidden">
          <article className="lg:col-span-4 bg-white/5 border-b md:border-b-0 md:border-r border-white/15 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.25em] text-white/70 font-semibold">ABOUT</p>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mt-3 max-w-sm leading-tight">
              Premium management,
              <br />
              engineered for consistency.
            </h2>

            <div className="mt-7 space-y-1.5 md:space-y-2">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="block text-left w-full"
                    aria-label={`Show ${slide.title} value`}
                  >
                    <span
                      className={`block leading-tight text-[clamp(1.35rem,3.2vw,2.75rem)] font-semibold transition ${
                        isActive ? "text-page" : "text-white/35 hover:text-white/60"
                      }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </article>

          <article className="lg:col-span-4 overflow-hidden border-b md:border-b-0 md:border-r border-white/15 bg-black/20 relative min-h-[320px] md:min-h-[420px]">
            <motion.div
              key={activeIndex}
              initial={{ scale: 1.06, opacity: 0.75 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/highrise-apartment-buildings-downtown.webp"
                alt="Premium city property skyline"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <p className="text-page text-sm">Our core values</p>
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 44 44" className="h-10 w-10 -rotate-90">
                  <circle cx="22" cy="22" r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                  <circle
                    cx="22"
                    cy="22"
                    r={radius}
                    stroke="rgba(176,138,87,1)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                  />
                </svg>
              </div>
            </div>
          </article>

          <article className="lg:col-span-4 bg-white/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-[11px] tracking-[0.22em] text-white/70 font-semibold">KAJA MANAGEMENT LTD</p>
                <h3 className="text-[clamp(2rem,4.4vw,4rem)] text-white font-semibold mt-3 leading-tight">{current.subtitle}</h3>
                <p className="text-white/80 leading-7 mt-4 max-w-lg">{current.description}</p>
              </motion.div>
            </AnimatePresence>
          </article>
        </div>
      </div>
    </section>
  );
}
