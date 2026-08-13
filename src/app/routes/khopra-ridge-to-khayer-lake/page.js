import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Khopra Ridge to Sacred Khayer Lake Route Guide | Nepal Trek",
  description: "Planning the hike from Khopra Ridge to Sacred Khayer Lake? Get the full route guide — distance, elevation gain, difficulty, altitude risk, and sacred.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/khopra-ridge-to-khayer-lake",
  },
  openGraph: {
    title: "Khopra Ridge to Sacred Khayer Lake Route Guide: Distance, Difficulty & Altitude",
    description:
      "Planning the hike from Khopra Ridge to Sacred Khayer Lake? Get the full route guide — distance, elevation gain, difficulty, altitude risk, and sacred significance.",
    url: "https://khopraridgetrek.com/routes/khopra-ridge-to-khayer-lake",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
