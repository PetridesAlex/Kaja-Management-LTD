import FacilityCareServicePage from "@/components/services/FacilityCareServicePage";

export default function PestControlPage() {
  return (
    <FacilityCareServicePage
      eyebrow="KAJA Management LTD"
      title="Pest Control"
      heroSubtitle="Structured prevention and rapid response to protect buildings, tenants, and hygiene standards—without disrupting daily operations."
      focusBadge="Prevention · Treatment · Documentation"
      heroImage="/images/claning-services/pest-control-services.webp"
      heroImageAlt="Professional pest control and prevention for managed properties"
      heroVisual="photo"
      heroImageObject="contain"
      intro={[
        "Pest issues can escalate quickly in shared buildings and rental units. We manage preventive programs and responsive treatment through vetted partners, with schedules and communication that keep tenants informed and owners protected.",
        "Every engagement is documented with scope, timing, and follow-up recommendations so committees and owners have a clear audit trail."
      ]}
      bullets={[
        "Preventive inspections and treatment plans for common areas and service zones",
        "Coordinated interior and perimeter treatments where permitted",
        "Rapid call-outs for urgent reports from tenants or staff",
        "Food-safe and hygiene-aware approaches for hospitality and short-stay units",
        "Seasonal adjustments for insects, rodents, and local pests",
        "Reporting aligned with building rules and owner expectations"
      ]}
    />
  );
}
