import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["bed", "cabinet-console"].map((slug) => ({ url: `https://taanhome.com/collections/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    {
      url: "https://taanhome.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://taanhome.com/catalogue",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://taanhome.com/collections/dining-table-chair",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://taanhome.com/collections/sofa",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://taanhome.com/collections/coffee-table",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://taanhome.com/collections/lounge-chair",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
