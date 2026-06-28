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
  title: "Khopra Ridge Trek | 9-Day Sacred Khayer Lake Community Trek",
  description: "Book the official 9-day Khopra Ridge Trek in Annapurna. A community-owned trekking route visiting sacred Khayer Lake, Ghandruk, Swanta, and Muldai Viewpoint.",
  verification: {
    google: "BcyQhQJiRsMFSxk7AuOmvqoCUhQ0tUkTsSmOPhLXrZw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
