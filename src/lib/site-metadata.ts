import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

/** Shared SEO copy for Kaja Management (Cyprus / Larnaca). */
export const SITE_DESCRIPTION =
  "Professional property management in Cyprus based in Larnaca. We handle tenants, maintenance, and property operations — helping you maximise value and simplify ownership.";

export const SITE_NAME = "Kaja Management LTD";

export const DEFAULT_PAGE_TITLE = `${SITE_NAME} | Premium Real Estate`;

export function pageTitle(segment: string): string {
  return `${segment} | ${SITE_NAME}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = pageTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB"
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description
    }
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: absoluteUrl("/images/logo/property-needs-logo.webp"),
    email: "Info@kajamanagement.eu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Larnaca",
      addressCountry: "CY"
    },
    sameAs: [
      "https://www.instagram.com/kaja_management/",
      "https://www.facebook.com/people/Kaja-Management/61570694188025/?ref=1",
      "https://www.linkedin.com/company/kajamanagement/"
    ]
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl()
    }
  };
}

export function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
