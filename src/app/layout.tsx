import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import FloatingContactButton from "@/components/layout/FloatingContactButton";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Preloader from "@/components/layout/Preloader";
import { DEFAULT_PAGE_TITLE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_PAGE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
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
        <Preloader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingContactButton />
      </body>
    </html>
  );
}
