/** Canonical production origin for all SEO outputs (sitemap, robots, metadata). */
export const PRODUCTION_SITE_URL = "https://kajamanagement.eu";

function normalizeOrigin(url: string): string {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  const withoutTrailingSlash = withProtocol.replace(/\/+$/, "");
  return withoutTrailingSlash.replace(/^(https?:\/\/)www\./i, "$1");
}

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return normalizeOrigin(raw || PRODUCTION_SITE_URL);
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();

  if (!path || path === "/") {
    return `${base}/`;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
