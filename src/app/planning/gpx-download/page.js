import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "GPX Tracks & Topographic Maps Download for Khopra Ridge Trek",
  description: "Download verified Khopra Ridge Trek GPX tracks, GPS routes, and topographic maps. Get offline navigation files, elevation data, and app guidance for safer.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/gpx-download",
  },
  openGraph: {
    title: "GPX Tracks & Topographic Maps Download for Khopra Ridge Trek",
    description:
      "Download verified Khopra Ridge Trek GPX tracks, GPS routes, and topographic maps. Get offline navigation files, elevation data, and app guidance for safer trekking.",
    url: "https://khopraridgetrek.com/planning/gpx-download",
    type: "website",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
