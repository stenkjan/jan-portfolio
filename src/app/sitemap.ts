import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
      url: `${SITE_URL}/#konditionen`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#projekte`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#arbeitsweise`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#kontakt`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.8,
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
