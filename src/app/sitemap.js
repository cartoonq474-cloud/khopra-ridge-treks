import { sitemapSections } from "@/data/sitemapLinks";

export default async function sitemap() {
  const baseUrl = "https://khopraridgetrek.com";
  const urls = [];

  // Always include homepage first
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  sitemapSections.forEach((section) => {
    section.links.forEach((link) => {
      const href = link.href;
      
      // Skip the root path since we added it explicitly with 1.0 priority
      if (href === "/") return;
      
      const cleanPath = href.startsWith("/") ? href : `/${href}`;
      const fullUrl = `${baseUrl}${cleanPath}`;
      
      if (!urls.some((u) => u.url === fullUrl)) {
        urls.push({
          url: fullUrl,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    });
  });

  return urls;
}
