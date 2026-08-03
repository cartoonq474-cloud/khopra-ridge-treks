import ClientPage from "./ClientPage";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-map",
  },
  title: "Khopra Ridge Trek Map & Route Guide (Complete Trail Map + Itinerary)",
  description: "Planning the Khopra Ridge Trek? Explore the complete route map, day-by-day itinerary, distance chart, elevation profile, route alternatives, and trail navigation guide.",
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
