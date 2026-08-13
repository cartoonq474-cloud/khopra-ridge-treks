import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Khopra Ridge Trek Photography Gallery | Nepal Trek Guide",
  description: "Explore the Khopra Ridge Trek Photography Gallery — real images of Annapurna South, Dhaulagiri, Khayer Lake, hidden villages, and the best photo spots on.",
  alternates: {
    canonical: "https://khopraridgetrek.com/viewpoints/photo-gallery",
  },
  openGraph: {
    title: "Khopra Ridge Trek Photography Gallery: Himalayan Views & Villages",
    description:
      "Explore the Khopra Ridge Trek Photography Gallery — real images of Annapurna South, Dhaulagiri, Khayer Lake, hidden villages, and the best photo spots on this offbeat trail.",
    url: "https://khopraridgetrek.com/viewpoints/photo-gallery",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
