import type { Metadata } from "next";
import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Communal building operations, maintenance coordination, and transparent owner communication.`;

export const metadata: Metadata = {
  title: "Communal Property Management",
  description: desc,
  openGraph: { title: pageTitle("Communal Property Management"), description: desc },
  twitter: { title: pageTitle("Communal Property Management"), description: desc }
};

export default function CommunalPropertyManagementPage() {
  return <PropertyManagementServicePage serviceLabel="Communal Property Management" />;
}
