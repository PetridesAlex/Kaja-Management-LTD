"use client";

import Link from "next/link";

const tickerItems: { href: string; label: string }[] = [
  { href: "/services/communal-property-management", label: "Communal Property Management" },
  { href: "/services/individual-property-management", label: "Individual Property Management" },
  { href: "/services/cleaning", label: "KAJA Green Clean" },
  { href: "/services/renovation", label: "Renovation Services" },
  { href: "/services", label: "Premium Portfolio Management" },
  { href: "/contact", label: "Concierge & Owner Support" }
];

export default function HeaderServicesTicker() {
  return (
    <div
      className="relative overflow-hidden border-t border-accent/35 bg-[linear-gradient(90deg,#1c140e_0%,#2d1e14_22%,#3d2a1c_50%,#2d1e14_78%,#1c140e_100%)] shadow-[inset_0_1px_0_rgba(212,175,106,0.12)]"
      aria-label="Service highlights"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 sm:w-20 bg-gradient-to-r from-[#1c140e] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 sm:w-20 bg-gradient-to-l from-[#1c140e] to-transparent"
        aria-hidden
      />

      <div className="header-ticker-track flex w-max items-center gap-0 py-2.5 md:py-3">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex shrink-0 items-center gap-6 px-4 md:gap-10 md:px-8"
            aria-hidden={dup === 1}
          >
            {tickerItems.map((item, i) => (
              <div key={`${dup}-${item.href}-${i}`} className="flex items-center gap-6 md:gap-10">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent/90 shadow-[0_0_10px_rgba(212,175,106,0.45)]" aria-hidden />
                <Link
                  href={item.href}
                  tabIndex={dup === 1 ? -1 : undefined}
                  className="shrink-0 whitespace-nowrap font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:text-accent sm:text-[11px] md:text-xs"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
