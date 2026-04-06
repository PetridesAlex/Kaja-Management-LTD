import PageContainer from "@/components/layout/PageContainer";
import ContactCTASection from "@/components/sections/ContactCTASection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PageContainer>
        <StatsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactCTASection />
      </PageContainer>
    </>
  );
}
