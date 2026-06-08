import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Communal building operations, maintenance coordination, and transparent owner communication.`;

export const metadata = createPageMetadata({
  title: "Communal Property Management",
  description: desc,
  path: "/services/communal-property-management"
});

export default function CommunalPropertyManagementPage() {
  return <PropertyManagementServicePage serviceLabel="Communal Property Management" />;
}
