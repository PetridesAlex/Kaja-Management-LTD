import type { Metadata } from "next";
import PropertyManagementServicePage from "@/components/services/PropertyManagementServicePage";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const desc = `${SITE_DESCRIPTION} Renovation planning and delivery with clear budgets and timelines for managed properties.`;

export const metadata: Metadata = {
  title: "Renovation Services",
  description: desc,
  openGraph: { title: pageTitle("Renovation Services"), description: desc },
  twitter: { title: pageTitle("Renovation Services"), description: desc }
};

export default function RenovationServicePage() {
  return <PropertyManagementServicePage serviceLabel="Renovation Services" />;
}
