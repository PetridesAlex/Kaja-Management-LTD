import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Hands-on management for private properties, tenants, and long-term value.`;

export const metadata = createPageMetadata({
  title: "Individual Property Management",
  description: desc,
  path: "/services/individual-property-management"
});

export default function IndividualPropertyManagementPage() {
  return <PropertyManagementServicePage serviceLabel="Individual Property Management" />;
}
