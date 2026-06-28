const fs = require('fs');
const path = require('path');
const pagePath = path.join('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/app/page.js');
const pageContent = fs.readFileSync(pagePath, 'utf8');

function extract(startStr, endStr) {
  const start = pageContent.indexOf(startStr);
  const end = pageContent.indexOf(endStr, start);
  return pageContent.substring(start, end);
}

const sHero = '{/* HERO SECTION */}';
const sQuick = '{/* QUICK INFO GRID */}';
const sSpecs = '{/* TREK SPECIFICATIONS OVERVIEW */}';
const sPrep = '{/* PHYSICAL PREPARATION & AMS SAFETY GUIDE */}';
const sItin = '{/* DETAILED ITINERARY */}';
const sCov = '{/* TRIP COVERAGE & PREP TRACKER (INCLUDED & EXCLUDED) */}';
const sGear = '{/* GEAR ESSENTIALS & SEASONAL CLIMATE */}';
const sView = '{/* VIEWPOINTS & MOUNTAINS SHOWCASE */}';
const sVisions = '{/* VISIONS OF KHOPRA GALLERY */}';
const sComm = '{/* THE COMMUNITY LODGE DIFFERENCE */}';
const sCult = '{/* CULTURAL ETIQUETTE & CODE OF CONDUCT */}';
const sPrice = '{/* PRICING & COST CALCULATOR */}';
const sRev = '{/* REVIEWS SECTION */}';
const sGuides = '{/* MEET OUR GUIDES & TEAM PROFILES */}';
const sFaq = '{/* FAQ SECTION */}';
const sBook = '{/* BOOKING / INQUIRY FORM */}';
const sEnd = '    </div>';

const trekJSX = extract(sSpecs, sPrep);
const itinJSX = extract(sItin, sCov);
const covJSX = extract(sCov, sGear);
const priceJSX = extract(sPrice, sRev);
const revJSX = extract(sRev, sGuides);
const faqJSX = extract(sFaq, sBook);
const bookJSX = pageContent.substring(pageContent.indexOf(sBook), pageContent.lastIndexOf(sEnd));

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/TrekSpecsSection.js', `"use client";
import React, { useState } from "react";

export default function TrekSpecsSection({ specs }) {
  const [activeSpecCategory, setActiveSpecCategory] = useState("all");
  const [isMetric, setIsMetric] = useState(true);

  const filteredSpecs = activeSpecCategory === "all" 
    ? specs 
    : specs.filter(s => s.category === activeSpecCategory);

  return (
    <>
      ${trekJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/ItinerarySection.js', `"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ItinerarySection({ itinerary }) {
  const [activeDay, setActiveDay] = useState(1);

  // Elevation Profile Chart (Placeholder)
  const ElevationProfile = () => (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm relative overflow-hidden group">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="font-bold text-stone-900 text-sm">Elevation Gain Profile</h3>
          <span className="text-xs text-stone-500">Max altitude: 4,660m</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-stone-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Camp
          <span className="h-2 w-2 rounded-full bg-stone-300 ml-2" /> Peak
        </div>
      </div>
      <div className="h-48 w-full border-b-2 border-l-2 border-stone-200 relative flex items-end justify-between px-2 pb-2">
        {itinerary.map((day, idx) => {
          const heightPercent = (parseInt(day.altitude.replace(/,/g, '')) / 4660) * 100;
          return (
            <div key={idx} className="relative group/bar flex flex-col items-center flex-1">
              <div 
                className={\`w-full max-w-[20px] sm:max-w-[32px] rounded-t-sm transition-all duration-700 ease-out \${
                  activeDay === day.day ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "bg-stone-200 hover:bg-stone-300"
                }\`}
                style={{ height: \`\${heightPercent}%\` }}
              />
              <span className="text-[9px] font-bold text-stone-400 mt-2 block hidden sm:block">D{day.day}</span>
              
              <div className="absolute bottom-full mb-2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-stone-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap z-10 pointer-events-none">
                {day.altitude}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      ${itinJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/CoverageSection.js', `"use client";
import React, { useState } from "react";

export default function CoverageSection({ includedItems, excludedItems }) {
  const [activeCoverageTab, setActiveCoverageTab] = useState("all");
  const [checkedCoverageItems, setCheckedCoverageItems] = useState({});
  const [isIncludedExpanded, setIsIncludedExpanded] = useState(false);
  const [isExcludedExpanded, setIsExcludedExpanded] = useState(false);

  const filteredIncluded = activeCoverageTab === "all" 
    ? includedItems 
    : includedItems.filter(item => item.category === activeCoverageTab);
    
  const filteredExcluded = activeCoverageTab === "all" 
    ? excludedItems 
    : excludedItems.filter(item => item.category === activeCoverageTab);

  const displayedIncluded = isIncludedExpanded ? filteredIncluded : filteredIncluded.slice(0, 5);
  const displayedExcluded = isExcludedExpanded ? filteredExcluded : filteredExcluded.slice(0, 5);

  const totalCoverageItems = includedItems.length + excludedItems.length;
  const checkedCount = Object.values(checkedCoverageItems).filter(Boolean).length;
  const coverageProgress = Math.round((checkedCount / totalCoverageItems) * 100) || 0;

  return (
    <>
      ${covJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/PricingSection.js', `"use client";
import React, { useState } from "react";

export default function PricingSection({ rates7Days, rates9Days }) {
  const [pricingDuration, setPricingDuration] = useState(9);
  const [pricingPax, setPricingPax] = useState(2);

  const activeRates = pricingDuration === 9 ? rates9Days : rates7Days;
  const applicableTier = activeRates.find(t => pricingPax >= t.minPax && pricingPax <= t.maxPax) || activeRates[0];
  const perPersonPrice = applicableTier.price;
  const totalTripCost = (pricingPax * perPersonPrice).toLocaleString();

  return (
    <>
      ${priceJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/ReviewsSection.js', `"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function ReviewsSection({ googleReviews, tripAdvisorReviews }) {
  const [activeReviewTab, setActiveReviewTab] = useState("google");
  const activeReviews = activeReviewTab === "google" ? googleReviews : tripAdvisorReviews;
  const scrollContainerRef = useRef(null);

  const scrollReviews = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      ${revJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/FaqSection.js', `"use client";
import React, { useState } from "react";

export default function FaqSection({ faqCategories, categorizedFaqs }) {
  const [activeFaqCategory, setActiveFaqCategory] = useState("route");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currentFaqCategory = activeFaqCategory === "all"
    ? {
        title: "All Questions",
        faqs: Object.values(categorizedFaqs).flatMap(cat => cat.faqs)
      }
    : categorizedFaqs[activeFaqCategory];

  return (
    <>
      ${faqJSX}
    </>
  );
}`);

fs.writeFileSync('c:/Users/ASUS/OneDrive/Desktop/khopra ridge trek/src/components/home/BookingSection.js', `"use client";
import React, { useState, useRef, useEffect } from "react";
import { FIND_US_OPTIONS } from "@/data/trekData";

export default function BookingSection() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);
  const foundUsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    packSize: "2 Trekkers",
    trekPackage: "9-Day Core Route",
    foundUs: "Google Search",
    message: ""
  });

  const filteredFoundUsSuggestions = FIND_US_OPTIONS.filter(option =>
    option.toLowerCase().includes((formData.foundUs || "").toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (foundUsRef.current && !foundUsRef.current.contains(event.target)) {
        setShowFoundUsSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        packSize: "2 Trekkers",
        trekPackage: "9-Day Core Route",
        foundUs: "Google Search",
        message: ""
      });
    }, 5000);
  };

  return (
    <>
      ${bookJSX}
    </>
  );
}`);
