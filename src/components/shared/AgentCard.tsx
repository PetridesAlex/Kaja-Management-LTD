import Image from "next/image";
import { Agent } from "@/types";

export default function AgentCard({ agent }: { agent: Agent }) {
  const telHref = `tel:${agent.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${agent.email}`;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-white via-page to-pageSoft p-5 md:p-6 shadow-card">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-5">
        <div className="flex items-start gap-4">
          <Image
            src={agent.image}
            alt={agent.name}
            width={84}
            height={84}
            className="rounded-2xl h-20 w-20 object-cover ring-4 ring-white shadow-md"
          />
          <div>
            <p className="text-xs tracking-[0.16em] text-muted font-semibold">PROPERTY ADVISOR</p>
            <p className="text-2xl font-semibold text-slate-900 mt-1">{agent.name}</p>
            <p className="text-secondary font-medium mt-1">{agent.role}</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/80 border border-slate-200 p-3 min-w-[220px]">
          <p className="text-[11px] tracking-[0.16em] text-muted font-semibold">DIRECT CONTACT</p>
          <div className="mt-3 space-y-2">
            <a
              href={telHref}
              className="flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-50 hover:bg-slate-100 transition text-slate-800 text-sm font-medium"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand/10 text-brand">☎</span>
              {agent.phone}
            </a>
            <a
              href={mailHref}
              className="flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-50 hover:bg-slate-100 transition text-slate-800 text-sm font-medium break-all"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-secondary/10 text-secondary">✉</span>
              {agent.email}
            </a>
          </div>
        </div>
      </div>

      <p className="relative z-10 text-slate-600 mt-5 leading-7 max-w-3xl">{agent.bio}</p>
    </article>
  );
}
