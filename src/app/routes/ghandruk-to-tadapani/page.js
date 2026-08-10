import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Ghandruk to Tadapani Route Guide: Distance, Difficulty & Time",
  description:
    "Complete Ghandruk to Tadapani route guide: exact distance, elevation gain, hiking time, difficulty rating, trail conditions, teahouses, and seasonal advice.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/ghandruk-to-tadapani",
  },
  openGraph: {
    title: "Ghandruk to Tadapani Route Guide: Distance, Difficulty & Time",
    description:
      "Complete Ghandruk to Tadapani route guide: exact distance, elevation gain, hiking time, difficulty rating, trail conditions, teahouses, and seasonal advice.",
    url: "https://khopraridgetrek.com/routes/ghandruk-to-tadapani",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
