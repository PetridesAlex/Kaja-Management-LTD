import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFoundPage() {
  return (
    <PageContainer>
      <section className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="max-w-xl text-center bg-white/90 rounded-3xl p-8 shadow-card">
          <p className="text-accent text-xs tracking-[0.2em] font-semibold">NOT FOUND</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand mt-3">Page not found</h1>
          <p className="text-slate-600 mt-4">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="rounded-xl px-6 py-3 min-h-12 font-semibold bg-gradient-to-r from-brand to-secondary text-white"
            >
              Go to Home
            </Link>
            <Link
              href="/services"
              className="rounded-xl px-6 py-3 min-h-12 font-semibold bg-white text-brand border border-slate-300"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
