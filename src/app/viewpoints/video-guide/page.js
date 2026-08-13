import React from "react";
import ClientPage from "./ClientPage";

export const metadata = {
  title: "Khopra Ridge Video Walkthroughs | Nepal Trek Guide",
  description: "Explore Khopra Ridge through drone footage, trail walkthroughs, and Khayer Lake videos. See the route, teahouses, and mountain views before you trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/viewpoints/video-guide",
  },
  openGraph: {
    title: "Khopra Ridge Video Walkthroughs: Complete Trek Trail & Scenic Guide",
    description:
      "Explore Khopra Ridge through drone footage, trail walkthroughs, and Khayer Lake videos. See the route, teahouses, and mountain views before you trek.",
    url: "https://khopraridgetrek.com/viewpoints/video-guide",
    type: "article",
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
