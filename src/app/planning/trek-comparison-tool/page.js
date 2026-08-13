import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Interactive Trek Comparison Tool: Compare Nepal's Best Treks",
  description: "Compare Everest Base Camp, Annapurna, Langtang, Khopra Ridge, Mardi Himal and more with our interactive Nepal trek comparison tool. Compare cost, difficulty.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/trek-comparison-tool",
  },
  openGraph: {
    title: "Interactive Trek Comparison Tool: Compare Nepal's Best Treks",
    description:
      "Compare Everest Base Camp, Annapurna, Langtang, Khopra Ridge, Mardi Himal and more with our interactive Nepal trek comparison tool. Compare cost, difficulty, altitude, and duration to find your perfect trek.",
    url: "https://khopraridgetrek.com/planning/trek-comparison-tool",
    type: "website",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
