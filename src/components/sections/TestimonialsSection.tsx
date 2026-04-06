"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "@/components/shared/SectionTitle";

const testimonials = [
  {
    quote: "From the first consultation to handover, everything was structured, fast, and exceptionally professional.",
    name: "Eleni Papadopoulou",
    role: "Property Owner - Limassol"
  },
  {
    quote: "Their team improved occupancy and maintenance response times within the first quarter of management.",
    name: "Dmitri Volkov",
    role: "Portfolio Investor - Nicosia"
  },
  {
    quote: "Clear reporting, reliable vendor coordination, and excellent communication with both tenants and owners.",
    name: "Anastasia Ivanova",
    role: "Landlord - Larnaka"
  },
  {
    quote: "They manage our communal building with consistency and real attention to detail. Highly recommended.",
    name: "Nikos Georgiou",
    role: "Committee Member - Paphos"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="Testimonials" title="What Clients Say" />

      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-page to-pageSoft border border-accent/25 shadow-card p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.985 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
      >
        <div className="absolute -top-8 -left-8 h-36 w-36 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />

        <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <article className="rounded-2xl bg-white/92 border border-accent/20 p-6 md:p-8">
            <p className="text-5xl text-accent leading-none">"</p>
            <p className="text-slate-700 text-lg md:text-2xl leading-relaxed -mt-2">{active.quote}</p>
            <div className="mt-6">
              <p className="text-slate-900 font-semibold text-xl">{active.name}</p>
              <p className="text-brand/80 text-sm mt-1 inline-flex items-center rounded-full bg-accent/15 px-3 py-1 border border-accent/25">
                {active.role}
              </p>
            </div>
          </article>

          <div className="flex lg:flex-col gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full bg-white border border-accent/30 text-brand hover:bg-page transition"
            >
              ‹
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full bg-white border border-accent/30 text-brand hover:bg-page transition"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-5 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
