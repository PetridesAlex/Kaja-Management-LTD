import SectionTitle from "@/components/shared/SectionTitle";

const stats = [
  { label: "BUILDINGS", value: "5+" },
  { label: "UNITS", value: "40+" },
  { label: "YEARS OF EXPERIENCE", value: "10+" },
  { label: "SATISFIED CLIENTS", value: "400+" }
];

export default function StatsSection() {
  return (
    <section className="mt-20">
      <SectionTitle
        eyebrow="Performance"
        title="Our Results At A Glance"
        subtitle="Proven numbers that reflect our focus on operational excellence, tenant satisfaction and long-term asset value."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="bg-white/95 rounded-2xl p-6 shadow-card relative overflow-hidden"
            aria-label={`${item.value} ${item.label}`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-secondary" />
            <p className="text-4xl font-bold text-brand tracking-tight">{item.value}</p>
            <p className="text-slate-500 mt-2 text-sm tracking-[0.12em]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
