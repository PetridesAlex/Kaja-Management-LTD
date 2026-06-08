/** Canonical production origin for all SEO outputs (sitemap, robots, metadata). */
export const PRODUCTION_SITE_URL = "https://www.kajamanagement.eu";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw) {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return withProtocol.replace(/\/+$/, "");
  }

  return PRODUCTION_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();

  if (!path || path === "/") {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
