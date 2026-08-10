import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Tadapani to Bayeli Kharka Route Guide: Distance, Trail Conditions & Hiking Tips",
  description:
    "Planning the Tadapani to Bayeli Kharka trek? We cover distance, hiking time, elevation gain, trail conditions, navigation, and accommodation on this quiet stretch of the Khopra Ridge Trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/tadapani-to-bayeli-kharka",
  },
  openGraph: {
    title: "Tadapani to Bayeli Kharka Route Guide: Distance, Trail Conditions & Hiking Tips",
    description:
      "Planning the Tadapani to Bayeli Kharka trek? We cover distance, hiking time, elevation gain, trail conditions, navigation, and accommodation on this quiet stretch of the Khopra Ridge Trek.",
    url: "https://khopraridgetrek.com/routes/tadapani-to-bayeli-kharka",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
