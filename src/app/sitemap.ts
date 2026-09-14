import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Nur echte Seiten. Fragment-URLs (`/#kontakt`) sind aus Crawler-Sicht
 * dieselbe Adresse wie `/` — sie standen hier als vier zusätzliche Einträge
 * und täuschten eine Struktur vor, die es nicht gibt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/impressum`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
