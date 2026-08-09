import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Interactive Route Explorer Map: Khopra Ridge Trek Route, GPS & Elevation Guide",
  description:
    "Explore the Khopra Ridge Trek with our interactive route map — full itinerary, elevation profile, distances, GPS navigation tips, and village checkpoints in one place.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/interactive-map",
  },
  openGraph: {
    title: "Interactive Route Explorer Map: Khopra Ridge Trek Route, GPS & Elevation Guide",
    description:
      "Explore the Khopra Ridge Trek with our interactive route map — full itinerary, elevation profile, distances, GPS navigation tips, and village checkpoints in one place.",
    url: "https://khopraridgetrek.com/planning/interactive-map",
    type: "website",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
