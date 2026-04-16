/** Shared SEO copy for Kaja Management (Cyprus / Larnaca). */
export const SITE_DESCRIPTION =
  "Professional property management in Cyprus based in Larnaca. We handle tenants, maintenance, and property operations — helping you maximise value and simplify ownership.";

export const SITE_NAME = "Kaja Management LTD";

export const DEFAULT_PAGE_TITLE = `${SITE_NAME} | Premium Real Estate`;

export function pageTitle(segment: string): string {
  return `${segment} | ${SITE_NAME}`;
}
