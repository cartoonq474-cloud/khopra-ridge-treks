import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Himalayan Mountain Identification Guide: How to Identify Nepal's Peaks",
  description:
    "Learn how to identify Himalayan peaks by shape, elevation, and viewpoint. A practical field guide covering Dhaulagiri, Annapurna South, Machhapuchhre, and more.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/mountain-id-guide",
  },
  openGraph: {
    title: "Himalayan Mountain Identification Guide: How to Identify Nepal's Peaks",
    description:
      "Learn how to identify Himalayan peaks by shape, elevation, and viewpoint. A practical field guide covering Dhaulagiri, Annapurna South, Machhapuchhre, and more.",
    url: "https://khopraridgetrek.com/mountains/mountain-id-guide",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
