import type { Metadata } from "next";
import FacilityCareServicePage from "@/components/services/FacilityCareServicePage";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Garden, pool, and outdoor maintenance for communal and private portfolios in Cyprus.`;

export const metadata: Metadata = {
  title: "Garden & Pool Maintenance",
  description: desc,
  openGraph: { title: pageTitle("Garden & Pool Maintenance"), description: desc },
  twitter: { title: pageTitle("Garden & Pool Maintenance"), description: desc }
};

export default function GardenPoolMaintenancePage() {
  return (
    <FacilityCareServicePage
      eyebrow="KAJA Management LTD"
      title="Garden & Pool Maintenance"
      heroSubtitle="Pools, terraces, and landscaped spaces—kept safe, compliant, and guest-ready across communal and private portfolios."
      focusBadge="Landscaping · Pools · Seasonal care"
      heroImage="/images/claning-services/pool-services.webp"
      heroImageAlt="Resort-style pool and outdoor areas maintained for managed properties"
      heroVisual="photo"
      intro={[
        "Crystal-clear water, tidy surrounds, and healthy planting send the right signal to residents and visitors. We coordinate scheduled visits, quality checks, and vendor performance so pools, decks, and gardens stay on standard—without surprises for committees or owners.",
        "Whether you oversee a residential block, villa portfolio, or mixed-use scheme, we align frequency with season, usage, and Cyprus conditions, with clear reporting and documented service visits."
      ]}
      bullets={[
        "Lawn, planting beds, borders, and irrigation line checks",
        "Seasonal pruning, weed control, and debris clearance",
        "Pool water chemistry, filtration, and routine equipment inspection",
        "Deck, patio, and pool surround cleaning with safety in mind",
        "Coordination with trusted suppliers and documented service visits",
        "Optional upgrades: lighting checks, outdoor furniture areas, and storm readiness"
      ]}
    />
  );
}
