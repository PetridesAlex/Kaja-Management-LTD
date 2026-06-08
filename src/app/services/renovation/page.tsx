import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Renovation planning and delivery with clear budgets and timelines for managed properties.`;

export const metadata = createPageMetadata({
  title: "Renovation Services",
  description: desc,
  path: "/services/renovation"
});

export default function RenovationServicePage() {
  return <PropertyManagementServicePage serviceLabel="Renovation Services" />;
}
