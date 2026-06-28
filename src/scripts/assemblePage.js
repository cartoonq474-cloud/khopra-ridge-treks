const fs = require('fs');
const path = require('path');
const pagePath = path.join('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/app/page.js');
const pageContent = fs.readFileSync(pagePath, 'utf8');

function extract(startStr, endStr) {
  const start = pageContent.indexOf(startStr);
  const end = pageContent.indexOf(endStr, start);
  return pageContent.substring(start, end);
}

const sQuick = '{/* QUICK INFO GRID */}';
const sSpecs = '{/* TREK SPECIFICATIONS OVERVIEW */}';
const sPrep = '{/* PHYSICAL PREPARATION & AMS SAFETY GUIDE */}';
const sItin = '{/* DETAILED ITINERARY */}';
const sGear = '{/* GEAR ESSENTIALS & SEASONAL CLIMATE */}';
const sPrice = '{/* PRICING & COST CALCULATOR */}';

const quickInfo = extract(sQuick, sSpecs);
const midStaticSections = extract(sPrep, sItin);
const gearToPrice = extract(sGear, sPrice);

const newPageJS = `import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  specs, 
  itinerary, 
  includedItems, 
  excludedItems, 
  rates7Days, 
  rates9Days, 
  googleReviews, 
  tripAdvisorReviews, 
  categorizedFaqs,
  faqCategories
} from "@/data/trekData";

import HeroSection from "@/components/home/HeroSection";
import TrekSpecsSection from "@/components/home/TrekSpecsSection";
import ItinerarySection from "@/components/home/ItinerarySection";
import CoverageSection from "@/components/home/CoverageSection";
import PricingSection from "@/components/home/PricingSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import BookingSection from "@/components/home/BookingSection";

export const metadata = {
  title: "Khopra Ridge Trek | Nirvana Trails",
  description: "Discover the uncrowded wonders of the Annapurna region on the Khopra Ridge Trek. Sacred alpine lakes, community lodges, and dramatic 360-degree views of Dhaulagiri.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      ${quickInfo}

      <TrekSpecsSection specs={specs} />

      ${midStaticSections}

      <ItinerarySection itinerary={itinerary} />

      <CoverageSection includedItems={includedItems} excludedItems={excludedItems} />

      ${gearToPrice}

      <PricingSection rates7Days={rates7Days} rates9Days={rates9Days} />

      <ReviewsSection googleReviews={googleReviews} tripAdvisorReviews={tripAdvisorReviews} />

      <FaqSection faqCategories={faqCategories} categorizedFaqs={categorizedFaqs} />

      <BookingSection />
    </main>
  );
}
`;

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/app/page.js', newPageJS);
console.log('page.js assembled successfully.');
