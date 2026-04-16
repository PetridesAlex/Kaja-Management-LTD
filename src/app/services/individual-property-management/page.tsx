import type { Metadata } from "next";
import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Hands-on management for private properties, tenants, and long-term value.`;

export const metadata: Metadata = {
  title: "Individual Property Management",
  description: desc,
  openGraph: { title: pageTitle("Individual Property Management"), description: desc },
  twitter: { title: pageTitle("Individual Property Management"), description: desc }
};

export default function IndividualPropertyManagementPage() {
  return <PropertyManagementServicePage serviceLabel="Individual Property Management" />;
}
