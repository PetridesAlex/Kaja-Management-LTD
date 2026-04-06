"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";

const testimonials = [
  {
    quote: "From first visit to closing, their process was smooth and professional.",
    name: "Sophia Lane",
    role: "Home Buyer"
  },
  {
    quote: "They improved occupancy and reduced maintenance response times significantly.",
    name: "Michael Hart",
    role: "Property Owner"
  },
  {
    quote: "Clear communication, strong market advice and exceptional execution.",
    name: "Amina Yusuf",
    role: "Investor"
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
    <section className="mt-20">
      <SectionTitle eyebrow="Testimonials" title="What Clients Say" />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-page to-pageSoft border border-accent/20 shadow-card p-6 md:p-8">
        <div className="absolute -top-8 -left-8 h-36 w-36 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />

        <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <article className="rounded-2xl bg-white/90 border border-slate-100 p-6 md:p-8">
            <p className="text-5xl text-accent leading-none">“</p>
            <p className="text-slate-700 text-lg md:text-2xl leading-relaxed -mt-3">{active.quote}</p>
            <div className="mt-6">
              <p className="text-slate-900 font-semibold text-lg">{active.name}</p>
              <p className="text-slate-500">{active.role}</p>
            </div>
          </article>

          <div className="flex lg:flex-col gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 text-brand hover:bg-slate-50"
            >
              ‹
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 text-brand hover:bg-slate-50"
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
      </div>
    </section>
  );
}
