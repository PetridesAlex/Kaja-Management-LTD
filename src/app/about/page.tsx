import type { Metadata } from "next";
import About4 from "@/components/about/about-4";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const aboutDesc = `${SITE_DESCRIPTION} Learn about our team, approach, and commitment to owners and tenants across Cyprus.`;

export const metadata: Metadata = {
  title: "About",
  description: aboutDesc,
  openGraph: {
    title: pageTitle("About"),
    description: aboutDesc
  },
  twitter: {
    title: pageTitle("About"),
    description: aboutDesc
  }
};

export default function AboutPage() {
  return <About4 />;
}
