import PageContainer from "@/components/layout/PageContainer";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/site-metadata";

const contactDesc = `${SITE_DESCRIPTION} Get in touch for a management consultation, tenant support, or portfolio questions.`;

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactDesc,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactCTASection />
    </PageContainer>
  );
}
