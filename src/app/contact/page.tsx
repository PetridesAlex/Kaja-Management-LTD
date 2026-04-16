import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/site-metadata";

const contactDesc = `${SITE_DESCRIPTION} Get in touch for a management consultation, tenant support, or portfolio questions.`;

export const metadata: Metadata = {
  title: "Contact",
  description: contactDesc,
  openGraph: {
    title: pageTitle("Contact"),
    description: contactDesc
  },
  twitter: {
    title: pageTitle("Contact"),
    description: contactDesc
  }
};

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactCTASection />
    </PageContainer>
  );
}
