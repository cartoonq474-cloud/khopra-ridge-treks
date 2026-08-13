import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Bayeli Kharka to Chhistibung Route Guide: Distance, Time",
  description: "Planning the Bayeli Kharka to Chhistibung trek? Get the exact distance, hiking time, trail conditions, GPX navigation, wildlife, and difficulty rating for.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/bayeli-kharka-to-chhistibung",
  },
  openGraph: {
    title: "Bayeli Kharka to Chhistibung Route Guide: Distance, Time & Trail",
    description:
      "Planning the Bayeli Kharka to Chhistibung trek? Get the exact distance, hiking time, trail conditions, GPX navigation, wildlife, and difficulty rating for this Khopra Ridge stage.",
    url: "https://khopraridgetrek.com/routes/bayeli-kharka-to-chhistibung",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
