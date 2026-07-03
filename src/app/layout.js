import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://khopraridgetrek.com"),
  title: "Khopra Ridge Trek | 9-Day Sacred Khayer Lake Community Trek",
  description: "Book the official 9-day Khopra Ridge Trek in Annapurna. A community-owned trekking route visiting sacred Khayer Lake, Ghandruk, Swanta, and Muldai Viewpoint.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khopra Ridge Trek | 9-Day Sacred Khayer Lake Community Trek",
    description: "Book the official 9-day Khopra Ridge Trek in Annapurna. A community-owned trekking route visiting sacred Khayer Lake, Ghandruk, Swanta, and Muldai Viewpoint.",
    url: "https://khopraridgetrek.com",
    siteName: "Khopra Ridge Trek",
    images: [
      {
        url: "/khopra-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Khopra Ridge Trek Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khopra Ridge Trek | 9-Day Sacred Khayer Lake Community Trek",
    description: "Book the official 9-day Khopra Ridge Trek in Annapurna.",
    images: ["/khopra-hero-bg.png"],
  },
  verification: {
    google: "BcyQhQJiRsMFSxk7AuOmvqoCUhQ0tUkTsSmOPhLXrZw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
