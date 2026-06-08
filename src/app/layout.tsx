import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import FloatingContactButton from "@/components/layout/FloatingContactButton";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Preloader from "@/components/layout/Preloader";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_PAGE_TITLE,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  SITE_DESCRIPTION,
  SITE_NAME
} from "@/lib/site-metadata";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: DEFAULT_PAGE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION
  },
  icons: {
    icon: "/images/logo/property-needs-logo.webp",
    shortcut: "/images/logo/property-needs-logo.webp",
    apple: "/images/logo/property-needs-logo.webp"
  }
};

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body antialiased`}>
        <JsonLd data={[getOrganizationJsonLd(), getWebSiteJsonLd()]} />
        <Preloader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingContactButton />
      </body>
    </html>
  );
}
