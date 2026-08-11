import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Khopra Ridge to Swanta Village Route Guide: Distance, Difficulty & Trail Details",
  description:
    "Planning the Khopra Ridge to Swanta Village trek? Get exact distance, hiking time, elevation loss, trail conditions, GPS routes, and accommodation details from local experts.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/khopra-ridge-to-swanta-village",
  },
  openGraph: {
    title: "Khopra Ridge to Swanta Village Route Guide: Distance, Difficulty & Trail Details",
    description:
      "Planning the Khopra Ridge to Swanta Village trek? Get exact distance, hiking time, elevation loss, trail conditions, GPS routes, and accommodation details from local experts.",
    url: "https://khopraridgetrek.com/routes/khopra-ridge-to-swanta-village",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
