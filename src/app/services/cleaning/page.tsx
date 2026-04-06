import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SectionTitle from "@/components/shared/SectionTitle";

export default function CleaningServicePage() {
  return (
    <PageContainer>
      <section className="mt-10">
        <SectionTitle
          eyebrow="Service Detail"
          title="Cleaning Services"
          subtitle="Dedicated cleaning service page. We can customize this page in detail next."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-slate-900">Cleaning Service Details</h3>
          <p className="mt-3 text-slate-600 leading-7">
            This is your standalone cleaning page. We can now tailor this page with specific offerings, pricing, visuals, and booking workflow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-brand text-white font-semibold">
              Request Cleaning Proposal
            </Link>
            <Link href="/services" className="rounded-xl px-5 py-3 border border-slate-300 text-slate-800 font-semibold">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
