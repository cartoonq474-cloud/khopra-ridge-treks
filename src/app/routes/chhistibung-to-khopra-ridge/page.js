import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Chhistibung to Khopra Ridge Route Guide | Nepal Trek Guide",
  description: "Planning the climb from Chhistibung to Khopra Ridge? Get the real distance, elevation gain, difficulty rating, altitude safety advice, and accommodation.",
  alternates: {
    canonical: "https://khopraridgetrek.com/routes/chhistibung-to-khopra-ridge",
  },
  openGraph: {
    title: "Chhistibung to Khopra Ridge Route Guide: Distance, Difficulty & Gain",
    description:
      "Planning the climb from Chhistibung to Khopra Ridge? Get the real distance, elevation gain, difficulty rating, altitude safety advice, and accommodation details from guides who walk this trail monthly.",
    url: "https://khopraridgetrek.com/routes/chhistibung-to-khopra-ridge",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
