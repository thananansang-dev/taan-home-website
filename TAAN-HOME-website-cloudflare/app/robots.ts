import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://taanhome.com/sitemap.xml",
    host: "https://taanhome.com",
  };
}
