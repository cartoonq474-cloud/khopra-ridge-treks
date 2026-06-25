export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/checkout",
        "/review-submission",
      ],
    },
    sitemap: "https://khopraridgetrek.com/sitemap.xml",
  };
}
