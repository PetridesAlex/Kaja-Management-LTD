import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/communal-property-management", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/individual-property-management", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/renovation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/garden-pool-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/pest-control", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority
  }));
}
