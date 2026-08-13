import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Khopra Ridge Trek Difficulty Calculator | Nepal Trek Guide",
  description: "Use our Khopra Ridge Trek Difficulty Calculator to check your fitness, altitude readiness, and backpack setup. Get a personal difficulty score before you go.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/difficulty-calculator",
  },
  openGraph: {
    title: "Khopra Ridge Trek Difficulty Calculator: Find Your Personal Score",
    description:
      "Use our Khopra Ridge Trek Difficulty Calculator to check your fitness, altitude readiness, and backpack setup. Get a personal difficulty score before you go.",
    url: "https://khopraridgetrek.com/planning/difficulty-calculator",
    type: "website",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
