import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import FloatingContactButton from "@/components/layout/FloatingContactButton";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  title: "Kaja Management LTD | Premium Real Estate",
  description: "Modern real estate and management website.",
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
