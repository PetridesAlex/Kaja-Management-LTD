import About4 from "@/components/about/about-4";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/site-metadata";

const aboutDesc = `${SITE_DESCRIPTION} Learn about our team, approach, and commitment to owners and tenants across Cyprus.`;

export const metadata = createPageMetadata({
  title: "About",
  description: aboutDesc,
  path: "/about"
});

export default function AboutPage() {
  return <About4 />;
}
