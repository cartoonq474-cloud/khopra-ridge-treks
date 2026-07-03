export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/checkout",
        "/review-submission",
        "/*?_rsc=",
      ],
    },
    sitemap: "https://khopraridgetrek.com/sitemap.xml",
  };
}
