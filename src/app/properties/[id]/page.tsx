import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import AgentCard from "@/components/shared/AgentCard";
import MapPreview from "@/components/shared/MapPreview";
import PropertyImageGallery from "@/components/shared/PropertyImageGallery";
import RequestViewingButton from "@/components/shared/RequestViewingButton";
import SectionTitle from "@/components/shared/SectionTitle";
import { agents } from "@/data/agents";
import { properties } from "@/data/properties";
import { formatCurrency } from "@/utils/format";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = properties.find((item) => item.id === resolvedParams.id);
  if (!property) return notFound();

  const agent = agents.find((item) => item.id === property.agentId);
  const sameTypeProperties = properties.filter((item) => item.id !== resolvedParams.id && item.type === property.type);
  const fallbackProperties = properties.filter((item) => item.id !== resolvedParams.id);
  const similarProperties = (sameTypeProperties.length > 0 ? sameTypeProperties : fallbackProperties).slice(0, 3);

  return (
    <PageContainer>
      <section className="mt-8">
        <SectionTitle eyebrow="Property Detail" title={property.title} subtitle={`${property.location} · ${property.type}`} />

        <PropertyImageGallery images={property.images} title={property.title} />

        <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-card mt-6">
          <div className="flex flex-wrap gap-4">
            <p className="text-brand text-2xl font-bold">{formatCurrency(property.price)}</p>
            <p className="text-slate-700">{property.beds} beds</p>
            <p className="text-slate-700">{property.baths} baths</p>
            <p className="text-slate-700">{property.areaSqm} sqm</p>
          </div>
          <p className="text-slate-600 mt-4 leading-7">{property.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {property.amenities.map((amenity) => (
              <span key={amenity} className="bg-slate-100 rounded-full px-3 py-1 text-slate-700">
                {amenity}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <RequestViewingButton propertyTitle={property.title} />
            <a
              href="https://wa.me/35799961512"
              target="_blank"
              className="rounded-xl px-5 py-3 min-h-12 font-semibold bg-white border border-slate-300 text-slate-900"
            >
              WhatsApp
            </a>
          </div>
        </article>

        <section className="mt-8">
          <SectionTitle eyebrow="Location" title="Map" />
          <MapPreview />
        </section>

        {agent ? (
          <section className="mt-8">
            <SectionTitle eyebrow="Agent" title="Your Property Advisor" />
            <AgentCard agent={agent} />
          </section>
        ) : null}

        <section className="mt-10">
          <SectionTitle eyebrow="Similar Properties" title="You may also like" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {similarProperties.map((item) => (
              <Link key={item.id} href={`/properties/${item.id}`} aria-label={`Open property ${item.title}`}>
                <article className="relative overflow-hidden rounded-3xl min-h-[300px] md:min-h-[340px] shadow-card group">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/55 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800">
                    {item.type}
                  </div>
                  <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
                    <p className="text-white/85 text-sm">
                      {item.location} · {item.areaSqm} sqm
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mt-1">{item.title}</h3>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-white text-xl font-bold">{formatCurrency(item.price)}</p>
                      <p className="text-white/85 text-sm">
                        {item.beds > 0 ? `${item.beds} Beds · ` : ""}
                        {item.baths} Baths
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link href="/properties" className="text-brand font-semibold">
            ← Back to properties
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
