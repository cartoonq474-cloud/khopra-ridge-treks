"use client";

import React, { useState } from "react";
import Link from "next/link";
import ElevationProfile from "@/components/ElevationProfile";

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeReviewTab, setActiveReviewTab] = useState("google");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState("route");
  const [activeSpecCategory, setActiveSpecCategory] = useState("all");
  const [isMetric, setIsMetric] = useState(true);
  const [activeCoverageTab, setActiveCoverageTab] = useState("all");
  const [checkedCoverageItems, setCheckedCoverageItems] = useState({});
  const [isIncludedExpanded, setIsIncludedExpanded] = useState(false);
  const [isExcludedExpanded, setIsExcludedExpanded] = useState(false);
  const [pricingDuration, setPricingDuration] = useState(9);
  const [pricingPax, setPricingPax] = useState(2);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    packSize: "1",
    trekPackage: "khayer-lake",
    foundUs: "",
    message: ""
  });

  const foundUsRef = React.useRef(null);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);

  const FIND_US_OPTIONS = [
    "Google Search",
    "Google AI Overviews",
    "Google AI Mode",
    "Bing",
    "ChatGPT",
    "Gemini",
    "Claude",
    "Perplexity",
    "Grok",
    "Microsoft Copilot",
    "Meta AI",
    "DeepSeek",
    "Reddit",
    "DuckDuckGo",
    "Yahoo",
    "Brave Search"
  ];

  const filteredFoundUsSuggestions = FIND_US_OPTIONS.filter(option =>
    option.toLowerCase().includes((formData.foundUs || "").toLowerCase())
  );

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (foundUsRef.current && !foundUsRef.current.contains(event.target)) {
        setShowFoundUsSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const googleReviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      country: "United Kingdom",
      date: "October 2025",
      rating: 5,
      tag: "9-Day Community Trek",
      text: "An absolute highlight of my time in Nepal! The Khopra Ridge trek is far quieter than the Poon Hill circuit, and the community lodge system makes you feel so connected to the local Magar villages. The sunrise over Dhaulagiri from the ridge was breathtaking. Our guide was incredibly knowledgeable and attentive."
    },
    {
      id: 2,
      name: "Dieter Weber",
      country: "Germany",
      date: "November 2025",
      rating: 5,
      tag: "Khopra Ridge Circuit",
      text: "Highly recommend the 9-day itinerary. The climb to Khayer Lake at 4,660m was challenging but the view of the sacred temple and the lake against Annapurna South was worth every step. Staying in community lodges meant our money directly supported local schools. Incredible experience!"
    },
    {
      id: 3,
      name: "Elena Rostova",
      country: "Canada",
      date: "March 2026",
      rating: 5,
      tag: "9-Day Community Trek",
      text: "If you want to experience the true Himalayas without the crowds of Annapurna Sanctuary, this is it. The views of Dhaulagiri and Nilgiri are unmatched. The hospitality at the Swanta community lodge was wonderful—we had delicious home-cooked meals and felt so welcomed by the villagers."
    },
    {
      id: 4,
      name: "Chloe Bennett",
      country: "United States",
      date: "January 2026",
      rating: 5,
      tag: "Khayer Lake Side-Trip",
      text: "A magnificent experience. The community lodges are very well run, clean, and support a great cause. Our guide helped us set a perfect pace for the high elevation. Dhaulagiri sunrise is a memory I will cherish forever."
    },
    {
      id: 5,
      name: "Anoop Sharma",
      country: "India",
      date: "May 2026",
      rating: 5,
      tag: "9-Day Community Trek",
      text: "Stunning and uncrowded. If you are tired of the crowded pathways of Annapurna Base Camp, Khopra Ridge is the perfect alternative. The side trek to Khayer Lake was challenging but deeply spiritual. 5 stars."
    },
    {
      id: 6,
      name: "Sofia Lindstrom",
      country: "Sweden",
      date: "October 2025",
      rating: 5,
      tag: "Community Lodge Circuit",
      text: "Warm hospitality in Swanta and Bayeli. The food was fresh, organic, and cooked with love. The views of Nilgiri and Annapurna South are so close you feel you can touch them. Excellent logistics from start to finish."
    }
  ];

  const tripAdvisorReviews = [
    {
      id: 1,
      name: "Mark & Emily",
      country: "Australia",
      date: "April 2026",
      rating: 5,
      tag: "Khopra & Poon Hill Combo",
      text: "We booked the Khopra & Poon Hill combo trek. The transition from the busy Poon Hill trails to the serene, isolated forests of Bayeli and Chhistibung was like entering another world. We saw Himalayan Monals and Langur monkeys. Flawless organization from Pokhara! Highly recommended company."
    },
    {
      id: 2,
      name: "Yuki Tanaka",
      country: "Japan",
      date: "October 2025",
      rating: 5,
      tag: "9-Day Community Trek",
      text: "Excellent, sustainable trekking path. The community lodges are warm and clean, serving local food. The view from Khopra Danda at sunset is something I will forget. Truly a magical journey. Our guide was very kind and organized everything perfectly."
    },
    {
      id: 3,
      name: "Jean-Pierre Dubois",
      country: "France",
      date: "December 2025",
      rating: 5,
      tag: "Khayer Lake Side-Trip",
      text: "A beautiful walk through rhododendron forests. The itinerary was perfectly planned for altitude adjustment. The guide kept a steady pace and made sure we drank enough water. The sacred lake is a mystical place. 10/10."
    },
    {
      id: 4,
      name: "Liam & Grace",
      country: "Ireland",
      date: "February 2026",
      rating: 5,
      tag: "Khopra & Poon Hill Combo",
      text: "Fantastic 9-day trek. We loved the community aspect where lodge profits fund the local Swanta school. The trail itself is pristine and beautiful, with very few other hikers. The views from the ridge are superior to Poon Hill."
    },
    {
      id: 5,
      name: "Carlos Mendez",
      country: "Spain",
      date: "November 2025",
      rating: 5,
      tag: "Community Lodge Circuit",
      text: "Exceptional organization. The guides are professional, friendly, and put safety first. Climbing to 4,660m at Khayer Lake is tough, but the dramatic views are worth the effort. The community lodge staff are lovely."
    },
    {
      id: 6,
      name: "Wong Kah Hin",
      country: "Singapore",
      date: "April 2026",
      rating: 5,
      tag: "9-Day Community Trek",
      text: "An unforgettable trekking adventure. Very quiet trails, spectacular viewpoints, and great local food at the community lodges. Perfect service from the booking coordinator in Pokhara."
    }
  ];

  const scrollContainerRef = React.useRef(null);

  const scrollReviews = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const faqCategories = [
    { id: "route", label: "Route & Trail" },
    { id: "community", label: "Community Lodges" },
    { id: "preparation", label: "Preparation & Safety" },
    { id: "booking", label: "Booking & Flights" }
  ];

  const categorizedFaqs = {
    route: [
      {
        question: "What makes the Khopra Ridge Trek different from other Annapurna treks?",
        answer: "Unlike the heavily commercialized paths of Ghorepani Poon Hill or Annapurna Base Camp, Khopra Ridge is a quieter, community-owned circuit. All profits from the lodges are reinvested directly into Swanta and surrounding Magar villages to fund local high schools, clinics, and organic farming."
      },
      {
        question: "How long does it take from Kathmandu to reach the trailhead?",
        answer: "Our Kathmandu to Kathmandu itinerary takes a 25-minute scenic flight from Kathmandu to Pokhara on Day 2, followed by a 3-hour private jeep transfer to Ghandruk village, where the hike begins. This saves you from a full day of driving on bumpy highways."
      },
      {
        question: "How difficult is the optional side-trip to Khayer Lake?",
        answer: "The hike to Khayer Lake (4,660m) on Day 6 is challenging. It is a 7-8 hour round-trip from Khopra Ridge lodge. The path involves a steady climb on steep terrain. While highly rewarding, it is optional, and you can choose to spend a relaxing day enjoying views from the ridge instead."
      },
      {
        question: "Is Khopra Ridge Trek a Kathmandu-to-Kathmandu Trek?",
        answer: "Yes. The trek operates as a complete Kathmandu-to-Kathmandu itinerary using domestic flights between Kathmandu and Pokhara, minimizing lengthy road travel."
      },
      {
        question: "What Makes Khopra Ridge Different from Annapurna Base Camp Trek?",
        answer: "Khopra Ridge offers quieter trails, community-owned lodges, panoramic Dhaulagiri and Annapurna views, and access to Sacred Khayer Lake while avoiding the crowds commonly found on the Annapurna Base Camp route."
      },
      {
        question: "Is Khayer Lake Included in the Khopra Ridge Trek?",
        answer: "Yes. Most itineraries include an optional or scheduled excursion to Sacred Khayer Lake (4,660m), one of the most significant pilgrimage sites in the Annapurna region."
      }
    ],
    community: [
      {
        question: "What is the community lodge difference?",
        answer: "Traditional teahouses in Nepal are privately owned. On the Khopra circuit, the lodges are owned collectively by the local villages. All profits directly pay teachers' salaries at the Swanta High School and fund community agricultural cooperatives. Your visit directly supports local mountain livelihoods."
      },
      {
        question: "What are the meals and accommodations like?",
        answer: "Accommodations are simple but clean twin-bedded rooms with warm blankets. Dining halls have wood-fired stoves. Meals are prepared using fresh, organic vegetables grown in the village. You can enjoy traditional Dal Bhat, local potato dishes, porridge, eggs, and hot tea."
      },
      {
        question: "Is there electricity, hot showers, and Wi-Fi?",
        answer: "Yes, electricity is available for charging devices (sometimes for a small fee). Hot gas showers are available at most lodges for $2-$3 USD. Local community Wi-Fi cards can be purchased at the lodges, though connectivity can be intermittent in high-elevation areas."
      },
      {
        question: "Are Community-Owned Lodges Available on Khopra Ridge Trek?",
        answer: "Yes. One of the unique features of the trek is the use of community-owned lodges that help support local development and conservation initiatives throughout the region."
      }
    ],
    preparation: [
      {
        question: "What permits are required for the Khopra Ridge Trek?",
        answer: "Since the entire trek is inside the Annapurna Conservation Area, you require two permits: the ACAP (Annapurna Conservation Area Permit) and the TIMS (Trekking Information Management System) card. Our 9-day all-inclusive package covers both permits and all administrative fees."
      },
      {
        question: "What is the best season to attempt this trek?",
        answer: "Autumn (October to November) offers the clearest skies and most stable weather for viewing Dhaulagiri and Annapurna South. Spring (March to April) is also exceptional, as the rhododendron forests are in full bloom, covering the mountainsides in pink and red."
      },
      {
        question: "How do you manage altitude safety and acclimatization?",
        answer: "Our itinerary is designed by certified guides with a gradual ascent profile. We stay multiple nights above 3,000m to acclimatize before attempting Khayer Lake. Guides carry first-aid kits and monitor oxygen levels daily. We advise drinking 4 liters of water and climbing at a slow, steady pace."
      }
    ],
    booking: [
      {
        question: "What happens if my flight between Kathmandu and Pokhara is delayed?",
        answer: "Mountain weather can occasionally cause domestic flight delays. If a flight is delayed, our agency handles rescheduling immediately. If needed, we arrange private jeep transfers to ensure you reach the trailhead safely without losing days on your itinerary."
      },
      {
        question: "Can I customize the itinerary to add Poon Hill or Mohare Danda?",
        answer: "Absolutely! Since our agency is local, we can customize your package to include a visit to Mohare Danda or extend your stay in Pokhara. Simply indicate your preferences in the custom needs section of our booking inquiry form."
      },
      {
        question: "What is your booking cancellation policy?",
        answer: "We offer flexible booking terms. A small deposit is required to secure lodge bookings and flight tickets. If your plans change, you can reschedule your trek to any future date within 24 months at no extra charge, subject to lodge and flight availability."
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/olibishal871@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Source": "Home Page Booking Form",
          Name: formData.name,
          Email: formData.email,
          "Proposed Start Date": formData.date,
          "Group Size": formData.packSize,
          "Trek Package": formData.trekPackage,
          "Where did you find us": formData.foundUs,
          "Custom Needs / Notes": formData.message
        })
      });
      if (response.ok) {
        setInquirySubmitted(true);
      } else {
        alert("There was an issue sending your booking inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("There was an error connecting to the server. Please try again.");
    }
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Kathmandu & Transfer to Hotel",
      hours: "1-2 hrs",
      altitude: "1,400 m",
      image: "/kathmandu-arrival.png",
      desc: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport (TIA) in Kathmandu, our representative will pick you up and transfer you to your hotel in Thamel. Spend the afternoon resting, and join us in the evening for a pre-trek briefing and welcome dinner."
    },
    {
      day: 2,
      title: "Fly to Pokhara, Drive to Ghandruk & Trek to Tadapani",
      hours: "5-6 hrs",
      altitude: "2,630 m",
      image: "/ghandruk-village.png",
      desc: "Take a scenic morning flight from Kathmandu to Pokhara (25 minutes). Upon landing, meet your jeep and drive 3 hours to Ghandruk village. From Ghandruk, trek through lush oak and rhododendron forests up to Tadapani, enjoying initial views of Annapurna South."
    },
    {
      day: 3,
      title: "Trek Tadapani to Bayeli Kharka",
      hours: "5-6 hrs",
      altitude: "3,425 m",
      image: "/forest-trail.png",
      desc: "Leave the main tourist trail behind as you ascend off the beaten track. Climb steadily through beautiful alpine landscapes and quiet moss-draped forests toward Bayeli Kharka. Stay tonight in a community-owned lodge with spectacular up-close views of Annapurna South, directly supporting local conservation and development projects."
    },
    {
      day: 4,
      title: "Trek Bayeli Kharka to Chhistibung",
      hours: "4-5 hrs",
      altitude: "2,975 m",
      image: "/chhistibung-pasture.png",
      desc: "Descend into a quiet valley before ascending back up through pristine bamboo and rhododendron forests. Watch for local wildlife like the colorful Himalayan Monal and Langur monkeys as you head toward the pasture lands of Chhistibung. Accommodation is provided in community-owned lodges that directly support local schools."
    },
    {
      day: 5,
      title: "Trek Chhistibung to Khopra Ridge (Khopra Danda)",
      hours: "3-4 hrs",
      altitude: "3,660 m",
      image: "/khopra-ridge-view.png",
      desc: "A steady, steep climb brings you above the tree line onto the majestic Khopra Ridge (Khopra Danda). The panoramic viewpoint at the ridge offers one of the most stunning 360-degree mountain views in Nepal, directly facing the massive Dhaulagiri and Annapurna South massifs. Stay overnight in the famous community-owned lodge on the ridge."
    },
    {
      day: 6,
      title: "Day Hike to Sacred Khayer Lake",
      hours: "7-8 hrs",
      altitude: "4,660 m",
      image: "/khayer-lake.png",
      desc: "An early morning excursion takes you to Sacred Khayer Lake (4,660m), one of the most important pilgrimage sites in the Annapurna region. Surrounded by towering Himalayan peaks, the lake holds deep spiritual significance for Hindu pilgrims and offers one of the most rewarding viewpoints of the entire Khopra Ridge Trek."
    },
    {
      day: 7,
      title: "Trek Khopra Ridge to Swanta Village",
      hours: "5-6 hrs",
      altitude: "2,200 m",
      image: "/swanta-village.png",
      desc: "Say goodbye to the high ridge and begin your descent down the steep valley walls. Pass through quiet forests to reach the traditional Magar village of Swanta, where community tourism supports the local high school and organic farming."
    },
    {
      day: 8,
      title: "Trek Swanta to Ghorepani",
      hours: "4-5 hrs",
      altitude: "2,860 m",
      image: "/ghorepani-village.png",
      desc: "Descend to cross the suspension bridge over the river before climbing back up to rejoin the classic trekking loop at Ghorepani. Enjoy the return of comfortable amenities and prepare for tomorrow's sunrise viewpoint."
    },
    {
      day: 9,
      title: "Fly from Pokhara to Kathmandu & Final Departure",
      hours: "7-8 hrs",
      altitude: "1,400 m",
      image: "/poon-hill-sunrise.png",
      desc: "After breakfast, transfer to Pokhara Airport for a short scenic flight back to Kathmandu (approximately 25 minutes). Upon arrival in Kathmandu, our team will assist with your hotel transfer. Depending on your international flight schedule, you may enjoy free time for sightseeing, shopping, or relaxation before your onward departure.\n\nMeals: Breakfast\nFlight Duration: Approximately 25 minutes\nTrip Conclusion: Khopra Ridge Trek officially ends upon arrival in Kathmandu or airport transfer assistance."
    }
  ];

  const specs = [
    {
      id: "trek-name",
      label: "Trek Name",
      valMetric: "Khopra Ridge",
      valImperial: "Khopra Ridge",
      subMetric: "Also called Khopra Danda",
      subImperial: "Also called Khopra Danda",
      category: "route",
      hoverTip: "A community-focused, less-crowded alternative to the classic tourist trails.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: "days",
      label: "Days",
      valMetric: "9 Days",
      valImperial: "9 Days",
      subMetric: "KTM Loop Trail",
      subImperial: "KTM Loop Trail",
      category: "route",
      hoverTip: "Starts with airport arrival in Kathmandu and wraps up with flight back to KTM on Day 9.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "adventure",
      label: "Adventure",
      valMetric: "Trekking",
      valImperial: "Trekking",
      subMetric: "Wilderness Walks",
      subImperial: "Wilderness Walks",
      category: "logistics",
      hoverTip: "Quiet forest paths, deep river valleys, alpine grasslands, and high ridge ascents.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      )
    },
    {
      id: "base-camp",
      label: "Trek Gateway",
      valMetric: "Pokhara",
      valImperial: "Pokhara",
      subMetric: "Trailhead: Ghandruk",
      subImperial: "Trailhead: Ghandruk",
      category: "climate",
      hoverTip: "Pokhara serves as the primary gateway city for the Khopra Ridge Trek. After a short scenic flight from Kathmandu, trekkers travel by road to Ghandruk, the official trailhead where the trekking portion begins.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "season",
      label: "Season",
      valMetric: "Spring | Autumn",
      valImperial: "Spring | Autumn",
      subMetric: "Dry Peak Windows",
      subImperial: "Dry Peak Windows",
      category: "climate",
      hoverTip: "Offers the clearest mountain panoramas, minimal rainfall, and comfortable daytime temps.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )
    },
    {
      id: "months",
      label: "Months",
      valMetric: "Mar-Jun | Oct-Nov",
      valImperial: "Mar-Jun | Oct-Nov",
      subMetric: "Stable Weather Periods",
      subImperial: "Stable Weather Periods",
      category: "climate",
      hoverTip: "Rhododendron blooms in Spring; Autumn features the sharpest mountain views of Dhaulagiri.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "country",
      label: "Country",
      valMetric: "Nepal",
      valImperial: "Nepal",
      subMetric: "Himalayan Region",
      subImperial: "Himalayan Region",
      category: "logistics",
      hoverTip: "Visas are easily obtained on arrival at Tribhuvan International Airport in Kathmandu.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "altitude",
      label: "Altitude",
      valMetric: "4,660 m",
      valImperial: "15,300 FT",
      subMetric: "At sacred Khayer Lake",
      subImperial: "At sacred Khayer Lake",
      category: "route",
      hoverTip: "Highest point reached on Day 6. The overnight stay on Khopra Ridge is at 3,660m (12,007ft).",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: "grade",
      label: "Grade",
      valMetric: "Moderate",
      valImperial: "Moderate",
      subMetric: "No mountaineering needed",
      subImperial: "No mountaineering needed",
      category: "route",
      hoverTip: "Fully achievable for anyone comfortable walking 5-6 hours a day with a light daypack.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "trail-type",
      label: "Trail Type",
      valMetric: "KTM Loop Trail",
      valImperial: "KTM Loop Trail",
      subMetric: "Kathmandu to Kathmandu",
      subImperial: "Kathmandu to Kathmandu",
      category: "route",
      hoverTip: "One of the major advantages of the Khopra Ridge Trek is its efficient KTM Loop Trail design. Instead of enduring long road journeys between Kathmandu and the Annapurna region, trekkers benefit from short domestic flights, reducing travel fatigue and maximizing time on the trail.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: "food",
      label: "Food",
      valMetric: "Veg & Eggs",
      valImperial: "Veg & Eggs",
      subMetric: "Organic Lodge Meals",
      subImperial: "Organic Lodge Meals",
      category: "logistics",
      hoverTip: "Healthy Dal Bhat, organic village-grown veggies, local potatoes, eggs, tea, and warm soups.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )
    },
    {
      id: "location",
      label: "Location",
      valMetric: "Pokhara / Annapurna",
      valImperial: "Pokhara / Annapurna",
      subMetric: "Western Nepal",
      subImperial: "Western Nepal",
      category: "climate",
      hoverTip: "Trek resides west of Pokhara, leading deep into the Myagdi high mountain pastures.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "distance",
      label: "Distance",
      valMetric: "50 km",
      valImperial: "31 miles",
      subMetric: "Walking Trail Portion",
      subImperial: "Walking Trail Portion",
      category: "route",
      hoverTip: "Average walking distance of 7-8 km per day. Excludes domestic flights and private jeeps.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: "rail-head",
      label: "Rail Head",
      valMetric: "Pokhara Transit",
      valImperial: "Pokhara Transit",
      subMetric: "No direct rail line",
      subImperial: "No direct rail line",
      category: "logistics",
      hoverTip: "The nearest major transport connection hub is Pokhara (accessed via road or domestic flights).",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1a2 2 0 002-2V8a2 2 0 00-2-2h-1m4 10a2 2 0 002-2v-5a2 2 0 00-2-2m0 9h1m-1-5H18" />
        </svg>
      )
    },
    {
      id: "stay",
      label: "Stay",
      valMetric: "Hotel & Teahouse",
      valImperial: "Hotel & Teahouse",
      subMetric: "Community Lodging",
      subImperial: "Community Lodging",
      category: "logistics",
      hoverTip: "Clean double-occupancy bedrooms in community lodges. All room profits support local schools.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: "airport",
      label: "Airport",
      valMetric: "Pokhara Int'l",
      valImperial: "Pokhara Int'l",
      subMetric: "Pokhara Airport",
      subImperial: "Pokhara Airport",
      category: "logistics",
      hoverTip: "Domestic flights land in Pokhara from Kathmandu (25 min scenic flight).",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ];

  const filteredSpecs = activeSpecCategory === "all" 
    ? specs 
    : specs.filter(spec => spec.category === activeSpecCategory);

  const includedItems = [
    {
      id: "inc-airport",
      text: "Airport transfer services during arrival and departure, and the local flight schedule",
      category: "transit",
      hoverTip: "Private airport transfers to/from your hotel in Kathmandu. Includes local flight booking and arrangements."
    },
    {
      id: "inc-hotel-ktm",
      text: "2-night hotel in Kathmandu, including breakfast (Hotel Vistara or similar)",
      category: "transit",
      hoverTip: "Double-occupancy clean standard rooms. Usually booked for Day 1 and Day 8."
    },
    {
      id: "inc-hotel-pkr",
      text: "1-night hotel in Pokhara, including breakfast (Hotel Crystal Palace or similar)",
      category: "transit",
      hoverTip: "Double-occupancy room near Lakeside Pokhara for prep/rest before or after the trek."
    },
    {
      id: "inc-trek-lodging",
      text: "Accommodations during the treks",
      category: "food",
      hoverTip: "Twin-bedded room in community-owned eco-lodges along the trail."
    },
    {
      id: "inc-meals",
      text: "3 meals (breakfast, lunch, dinner) and a cup of tea or coffee with meals",
      category: "food",
      hoverTip: "Fresh organic local dishes, vegetarian options, seasonal vegetables, eggs, and hot beverages."
    },
    {
      id: "inc-team",
      text: "Experienced English-speaking government-licensed trekking guide and 1 porter between 2 trekkers (no porter for solo trekkers)",
      category: "team",
      hoverTip: "Professional certified guides who carry first aid kits. Porter limit: 12.5 kg luggage per trekker."
    },
    {
      id: "inc-team-salary",
      text: "Guide and porter salary, food, equipment, and insurance",
      category: "team",
      hoverTip: "We ensure fair wages, proper cold-weather gear, and insurance coverage for all field staff."
    },
    {
      id: "inc-permits",
      text: "All applicable permits and fees, ACAP, and Local permits",
      category: "team",
      hoverTip: "Includes the Annapurna Conservation Area Permit (ACAP) and TIMS card registration fees."
    },
    {
      id: "inc-jeep",
      text: "Pokhara to Ghandruk, Hile to Pokhara private jeep",
      category: "transit",
      hoverTip: "Comfortable private four-wheel-drive jeep transfers to/from the trailheads."
    },
    {
      id: "inc-gear",
      text: "Sleeping bag and down jacket if needed (to be returned after the trek)",
      category: "gear",
      hoverTip: "High-quality cold weather gear suitable for temperatures down to -10°C."
    },
    {
      id: "inc-duffle",
      text: "Duffle bag for the porter use",
      category: "gear",
      hoverTip: "Sturdy water-resistant duffle bag. Yours to use during the trek to keep your gear safe."
    },
    {
      id: "inc-water",
      text: "Water purification tablet",
      category: "gear",
      hoverTip: "Chlorine/iodine-based purification tablets for safe drinking water along the route."
    },
    {
      id: "inc-meds",
      text: "First aid kit with an oximeter and other basic medications",
      category: "gear",
      hoverTip: "Includes band-aids, altitude medications (Diamox), gauze, rehydration salts, and oxygen level monitors."
    },
    {
      id: "inc-map",
      text: "Nepal Nirvana Trails Trekking map",
      category: "gear",
      hoverTip: "Detailed topographic map showing elevations, villages, viewpoints, and trail junctions."
    },
    {
      id: "inc-rescue",
      text: "Rescue arrangements, if necessary",
      category: "gear",
      hoverTip: "We coordinate with helicopter rescue operators and your insurance in case of medical emergencies."
    },
    {
      id: "inc-storage",
      text: "Luggage storage available for items not needed during the trek",
      category: "transit",
      hoverTip: "Free secure luggage storage at our partner hotels in Kathmandu or Pokhara."
    },
    {
      id: "inc-expenses",
      text: "Official expenses",
      category: "team",
      hoverTip: "All booking coordination, communications, and logistical planning administrative fees."
    },
    {
      id: "inc-taxes",
      text: "All local and government taxes and VAT",
      category: "team",
      hoverTip: "Standard 13% Nepal Government Value Added Tax (VAT) and local government tourism levies."
    }
  ];

  const excludedItems = [
    {
      id: "exc-flights",
      text: "International flight tickets",
      category: "transit",
      hoverTip: "Airfare from your home country to Kathmandu (KTM) and return."
    },
    {
      id: "exc-visa",
      text: "Nepal entry visa",
      category: "transit",
      hoverTip: "Can be obtained easily on arrival at KTM airport. Cash payment needed ($30 for 15 days, $50 for 30 days)."
    },
    {
      id: "exc-insurance",
      text: "Travel and Health Insurance, which covers emergency Rescues and evacuations",
      category: "gear",
      hoverTip: "Required. Must explicitly cover high-altitude trekking (up to 5,000m) and helicopter evacuation."
    },
    {
      id: "exc-personal",
      text: "All personal expenses, including snacks, alcoholic and non-alcoholic beverages, Coke, juice, bottled and hot water, WI-FI, battery charging, and a hot shower",
      category: "food",
      hoverTip: "These items are paid directly to teahouses. Wifi cards/hot showers cost $2-$3 USD each. Charging costs $1-$2."
    },
    {
      id: "exc-meals-city",
      text: "Lunch, dinner, and extra nights in Kathmandu and Pokhara",
      category: "food",
      hoverTip: "You can explore Pokhara and Kathmandu's diverse dining options. We only include breakfasts in cities."
    },
    {
      id: "exc-porter",
      text: "Hire an extra Porter: USD 160",
      category: "team",
      hoverTip: "If you are trekking solo and wish to have a personal porter to carry your main luggage."
    },
    {
      id: "exc-tips",
      text: "Tips for the trek guide and porter (it is appreciated)",
      category: "team",
      hoverTip: "Tipping is customary in Nepal for field crews. Typically $100-$150 USD total split among porters/guides."
    }
  ];

  const filteredIncluded = activeCoverageTab === "all"
    ? includedItems
    : includedItems.filter(item => item.category === activeCoverageTab);

  const filteredExcluded = activeCoverageTab === "all"
    ? excludedItems
    : excludedItems.filter(item => item.category === activeCoverageTab);

  const displayedIncluded = isIncludedExpanded
    ? filteredIncluded
    : filteredIncluded.slice(0, 5);

  const displayedExcluded = isExcludedExpanded
    ? filteredExcluded
    : filteredExcluded.slice(0, 5);

  const totalCoverageItems = includedItems.length + excludedItems.length;
  const checkedCount = Object.values(checkedCoverageItems).filter(Boolean).length;
  const coverageProgress = totalCoverageItems > 0 
    ? Math.round((checkedCount / totalCoverageItems) * 100) 
    : 0;

  const rates7Days = [
    { label: "1 - 1", minPax: 1, maxPax: 1, price: 835 },
    { label: "2 - 3", minPax: 2, maxPax: 3, price: 490 },
    { label: "4 - 6", minPax: 4, maxPax: 6, price: 470 },
    { label: "7 - 9", minPax: 7, maxPax: 9, price: 440 },
    { label: "10+", minPax: 10, maxPax: 999, price: 410 }
  ];

  const rates9Days = [
    { label: "1 - 1", minPax: 1, maxPax: 1, price: 1250 },
    { label: "2 - 3", minPax: 2, maxPax: 3, price: 890 },
    { label: "4 - 6", minPax: 4, maxPax: 6, price: 840 },
    { label: "7 - 9", minPax: 7, maxPax: 9, price: 790 },
    { label: "10+", minPax: 10, maxPax: 999, price: 740 }
  ];

  const activeRates = pricingDuration === 9 ? rates9Days : rates7Days;
  const activeRateTier = activeRates.find(
    (tier) => pricingPax >= tier.minPax && pricingPax <= tier.maxPax
  ) || activeRates[activeRates.length - 1];

  const perPersonPrice = activeRateTier.price;
  const totalTripCost = perPersonPrice * pricingPax;

  return (
    <div className="w-full flex-1">
      

      {/* HERO SECTION */}
      <section 
        className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center text-white py-24"
        style={{ backgroundImage: "url('/khopra-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full flex flex-col justify-center">
          {/* Google Reviews Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 rounded-xl bg-stone-950/60 px-5 py-2.5 border border-white/10 backdrop-blur-md">
              <div className="flex flex-col items-center border-r border-white/15 pr-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="text-[7px] font-bold text-stone-400 uppercase tracking-widest mt-1">Reviews</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-stone-200 font-semibold">Excellent <strong className="text-emerald-400">4.9</strong> out of 5</span>
                <div className="flex text-emerald-400 text-[10px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
              The Ultimate Himalayan Adventure
            </span>
            {/* Main Headline */}
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl leading-[1.05]">
              Khopra Ridge Trek
            </h1>
            {/* Description */}
            <div className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto space-y-4 text-center">
              <p>
                Discover the uncrowded wonders of the Annapurna region. A serene, visually stunning journey featuring sacred alpine lakes, community lodges, and the most dramatic 360-degree views of Dhaulagiri and Annapurna South. This wilderness trail winds through pristine rhododendron forests, authentic Magar villages, and high-alpine pastures, offering a rare opportunity to support local communities directly. From the high vantage point of Khopra Ridge, experience unparalleled vistas of the world's deepest gorge and majestic 8,000m peaks, all while avoiding the mainstream trekking crowds.
                {!isHeroExpanded && (
                  <button
                    onClick={() => setIsHeroExpanded(true)}
                    className="text-emerald-400 hover:text-emerald-300 font-bold underline transition ml-1 inline-flex items-center"
                  >
                    See More →
                  </button>
                )}
              </p>
              {isHeroExpanded && (
                <>
                  <p className="transition-all duration-300 opacity-100">
                    The Khopra Ridge Trek is a scenic Kathmandu-to-Kathmandu trekking adventure that showcases the quieter side of the Annapurna region. Combining breathtaking Himalayan panoramas, authentic cultural encounters, community-run lodges, and the sacred alpine waters of Khayer Lake, this off-the-beaten-path trek offers an enriching alternative to Nepal's busier trekking routes. Convenient flights between Kathmandu and Pokhara help reduce long road journeys, allowing you to spend more time immersed in the mountains.
                  </p>
                  <p className="transition-all duration-300 opacity-100">
                    This lesser-known trail winds through pristine rhododendron forests, traditional Magar villages, and high-alpine pastures before reaching the spectacular viewpoint of Khopra Ridge (Khopra Danda). Along the way, trekkers enjoy dramatic views of Annapurna South, Dhaulagiri, Nilgiri, Machhapuchhre (Fishtail), and the world's deepest gorge, while directly supporting local communities through a network of community-owned lodges. For those seeking outstanding mountain scenery, cultural immersion, and a rewarding journey to the sacred pilgrimage site of Khayer Lake, the Khopra Ridge Trek delivers one of the most memorable trekking experiences in the Annapurna region.
                    <button
                      onClick={() => setIsHeroExpanded(false)}
                      className="text-emerald-400 hover:text-emerald-300 font-bold underline transition ml-1 inline-flex items-center"
                    >
                      See Less
                    </button>
                  </p>
                </>
              )}
            </div>

            {/* Bottom Info Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-white/10 pt-8 max-w-2xl mx-auto">
              {/* Trust Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  ].map((url, i) => (
                    <img key={i} src={url} alt="User" className="h-8 w-8 rounded-full border-2 border-stone-950 object-cover" />
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-emerald-400 text-[10px]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[10px] font-bold text-stone-300 mt-0.5">Trusted by 14.8k+ trekkers</span>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block h-6 w-px bg-white/15" />

              {/* Video Card */}
              <div className="flex items-center gap-3 rounded-2xl bg-stone-950/40 border border-white/10 p-2 pr-4 backdrop-blur-sm">
                <div className="relative h-10 w-16 rounded-xl overflow-hidden bg-emerald-900 flex items-center justify-center">
                  <img src="/khopra-hero-bg.png" className="absolute inset-0 h-full w-full object-cover opacity-60" alt="Video Thumbnail" />
                  <span className="relative z-10 h-5 w-5 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                    <span className="border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-stone-900 ml-0.5" />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-widest">Trek Reel</span>
                  <span className="text-[11px] font-bold text-white mt-0.5">2026 Trail Preview</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#itinerary"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-500 transition-all hover:scale-105 hover-lift glow-btn"
              >
                Explore Trek
              </a>
              <a
                href="#book"
                className="rounded-full bg-transparent px-8 py-3.5 text-sm font-bold text-stone-200 border border-white/20 hover:bg-white/10 transition-all hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO GRID */}
      <section className="mx-auto -mt-8 max-w-7xl px-6 relative z-20">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-100 sm:grid-cols-4 md:p-8">
          {[
            { label: "Duration", val: "9 Days" },
            { label: "Max Altitude", val: "4,660 m" },
            { label: "Difficulty", val: "Moderate - Strenuous" },
            { label: "Lodges", val: "Community-Owned" }
          ].map((stat, i) => (
            <div key={i} className="text-center sm:text-left sm:border-r border-stone-100 last:border-none last:pr-0 sm:pr-8">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-lg font-bold text-stone-900 sm:text-2xl">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TREK SPECIFICATIONS OVERVIEW */}
      <section className="py-24 border-t border-stone-200 bg-[#faf9f5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Trek Specifications</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                Khopra Ridge Overview
              </h2>
              <p className="mt-4 text-stone-600 text-base max-w-xl">
                A modern interactive breakdown of the essential specifications, conditions, and logistics for your trek.
              </p>
            </div>
            
            {/* Unit Switcher */}
            <div className="mt-6 lg:mt-0 flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 w-fit">
              <button
                type="button"
                onClick={() => setIsMetric(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isMetric 
                    ? "bg-[#0b1717] text-white shadow-sm" 
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                Metric (m/km)
              </button>
              <button
                type="button"
                onClick={() => setIsMetric(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  !isMetric 
                    ? "bg-[#0b1717] text-white shadow-sm" 
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                Imperial (ft/mi)
              </button>
            </div>
          </div>

          {/* Category Tabs Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
            {[
              { id: "all", label: "All Specifications" },
              { id: "route", label: "Route & Trail" },
              { id: "climate", label: "Climate & Timing" },
              { id: "logistics", label: "Logistics & Comfort" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSpecCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeSpecCategory === tab.id
                    ? "bg-emerald-700 text-white border-transparent shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSpecs.map((spec) => (
              <div 
                key={spec.id}
                className="group relative rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm hover:shadow-md hover-lift transition-all duration-300 flex flex-col justify-between min-h-[160px] overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{spec.label}</span>
                    <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                      {spec.icon}
                    </div>
                  </div>
                  
                  <p className="mt-3 text-lg sm:text-xl font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors duration-300 leading-tight">
                    {isMetric ? spec.valMetric : spec.valImperial}
                  </p>
                  
                  <span className="mt-1 block text-xs text-stone-400 font-bold tracking-tight">
                    {isMetric ? spec.subMetric : spec.subImperial}
                  </span>
                </div>

                {/* Animated tooltip tip revealed on hover */}
                <div className="mt-4 pt-3 border-t border-stone-100 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[11px] text-stone-500 leading-relaxed font-normal">
                    {spec.hoverTip}
                  </p>
                </div>

                {/* Subtle visual glow accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600/0 via-emerald-600/30 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHYSICAL PREPARATION & AMS SAFETY GUIDE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Safety First</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Physical Preparation &amp; Altitude Guide
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Reaching Khayer Lake (4,660m) is a serious high-altitude endeavor. Read our recommended training timeline and guide to Acute Mountain Sickness (AMS).
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* CARD 1: Physical Training Regimen */}
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="border-b border-stone-200 pb-5 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">4-8 Week Training Plan</h3>
                    <span className="text-xs text-stone-400 font-bold">Suggested regimen for a comfortable trek</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Aerobic Conditioning (Weeks 1-4)</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Aim for 3-4 sessions per week of cardiovascular exercises. Focus on running, cycling, or swimming for 30-45 minutes at a moderate heart rate to build baseline lung capacity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Incline Strength &amp; Stair Climbing (Weeks 5-8)</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Himalayan trails are filled with stone steps. Train on stairclimbers or hike steep local hills with a loaded 5kg daypack to condition your quads, calves, and lower back.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Leg &amp; Core Endurance</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Incorporate bodyweight squats, lunges, step-ups, and planks into your weekly schedule to build core stability and joint resilience for descending steep trails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 text-stone-500 text-xs font-medium">
                <span>Pro Tip: Break in your trekking boots at least a month before departure to avoid blisters!</span>
              </div>
            </div>

            {/* CARD 2: AMS Altitude Safety Guide */}
            <div className="rounded-3xl border border-emerald-100 bg-[#0e1e1a] text-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="border-b border-white/10 pb-5 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">Altitude Safety &amp; AMS</h3>
                    <span className="text-xs text-emerald-300/60 font-bold">Understanding high altitude challenges</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Gradual Acclimatization Profile</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Our itinerary stays multiple nights at 3,000m+ before attempting the climb to Khayer Lake (4,660m) on Day 6. This gradual ascent schedule naturally helps your body produce oxygen-carrying red blood cells.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Prevention Rules: Hydration &amp; Pace</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Drink 4-5 liters of water daily to combat high-altitude dehydration. Hike at a slow, comfortable pace ('bistarey, bistarey' in Nepali) without exhausting your muscles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Recognizing Early Symptoms</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Notify your guide immediately if you experience a persistent headache, dizziness, loss of appetite, or difficulty sleeping. Early communication prevents mild symptoms from turning into severe altitude sickness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-emerald-400 text-xs font-semibold">
                <span>Our guides carry oximeters and first-aid kits, and monitor oxygen levels daily.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED ITINERARY */}
      <section id="itinerary" className="py-24 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Day-by-Day Trail</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            The Complete 9-Day Route
          </h2>
          <p className="mt-4 text-stone-500">
            A carefully mapped itinerary designed for optimal altitude acclimatization and unforgettable viewpoints.
          </p>
        </div>

        <div className="mt-12">
          <ElevationProfile />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* List of Days */}
          <div className="lg:col-span-1 flex flex-col gap-2.5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {itinerary.map((step) => (
              <button
                key={step.day}
                onClick={() => setActiveDay(step.day)}
                className={`text-left p-3 rounded-2xl border transition-all flex gap-3.5 items-center ${
                  activeDay === step.day
                    ? "border-emerald-600 bg-emerald-50/60 shadow-sm ring-1 ring-emerald-600/30"
                    : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/50"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-12 w-16 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200/60">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <span className="absolute bottom-1 right-1 bg-stone-950/70 text-[9px] font-bold text-white px-1.5 py-0.5 rounded-md backdrop-blur-[2px]">
                    Day {step.day}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Day {step.day}</span>
                    <span className="text-[10px] text-stone-500 font-medium">{step.hours}</span>
                  </div>
                  <p className="mt-0.5 text-xs font-bold text-stone-900 truncate leading-tight">{step.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Day Details Display */}
          <div className="lg:col-span-2 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-6">
                <div>
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    Day {activeDay} Itinerary Details
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-stone-950">
                    {itinerary[activeDay - 1].title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-stone-400">Target Elevation</span>
                  <span className="text-lg font-bold text-emerald-600">{itinerary[activeDay - 1].altitude}</span>
                </div>
              </div>

              {/* Day Image */}
              <div className="mt-6 overflow-hidden rounded-2xl aspect-video relative bg-stone-100 border border-stone-200">
                <img 
                  src={itinerary[activeDay - 1].image} 
                  alt={itinerary[activeDay - 1].title}
                  className="h-full w-full object-cover object-center animate-fade-in"
                />
              </div>

              <p className="mt-6 text-stone-600 leading-relaxed text-base whitespace-pre-line">
                {itinerary[activeDay - 1].desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4 justify-between items-center">
              <span className="text-sm text-stone-500">
                Estimated Trek Duration: <strong>{itinerary[activeDay - 1].hours}</strong>
              </span>
              <a
                href="#book"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-500 transition-all flex items-center gap-1"
              >
                Ask questions about Day {activeDay} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRIP COVERAGE & PREP TRACKER (INCLUDED & EXCLUDED) */}
      <section className="py-24 border-t border-stone-200 bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Trip Coverage</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                What's Included & Excluded
              </h2>
              <p className="mt-4 text-stone-600 text-base max-w-xl">
                Review our comprehensive package inclusions and exclusions. Check items off to build your pre-trip preparation list!
              </p>
            </div>

            {/* Dynamic Prep Progress Tracker */}
            <div className="mt-6 lg:mt-0 bg-white p-5 rounded-3xl border border-stone-200/80 shadow-sm w-full lg:w-80">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Prep Checklist Progress</span>
                <span className="text-sm font-black text-emerald-700">{coverageProgress}% Done</span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200/50">
                <div 
                  className="bg-emerald-600 h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${coverageProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-stone-400 mt-2 block font-medium">
                {checkedCount} of {totalCoverageItems} items reviewed
              </span>
            </div>
          </div>

          {/* Category Tabs Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
            {[
              { id: "all", label: "All Items" },
              { id: "transit", label: "Stays & Transport" },
              { id: "food", label: "Food & Lodging" },
              { id: "team", label: "Team & Permits" },
              { id: "gear", label: "Gear & Safety" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCoverageTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeCoverageTab === tab.id
                    ? "bg-[#0b1717] text-white border-transparent shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dual Column Layout */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* INCLUDED COLUMN */}
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6">
                <div className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">What's Included</h3>
                  <span className="text-xs text-stone-400 font-bold">Covered in the 9-day trek package</span>
                </div>
              </div>

              {filteredIncluded.length === 0 ? (
                <p className="text-sm text-stone-400 py-6 italic text-center">No inclusions in this category.</p>
              ) : (
                <>
                  <div className="space-y-3.5">
                    {displayedIncluded.map((item) => {
                      const isChecked = !!checkedCoverageItems[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCheckedCoverageItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 group relative cursor-pointer ${
                            isChecked 
                              ? "bg-emerald-50/40 border-emerald-500/30 ring-1 ring-emerald-500/10" 
                              : "bg-[#faf9f5]/50 border-stone-200/60 hover:bg-[#faf9f5] hover:border-stone-300"
                          }`}
                        >
                          {/* Interactive Checkbox */}
                          <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-emerald-600 border-emerald-600 text-white" 
                              : "border-stone-300 bg-white group-hover:border-stone-400"
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0 pr-6">
                            <p className={`text-xs sm:text-sm font-medium leading-relaxed transition-all duration-300 ${
                              isChecked ? "text-stone-400 line-through decoration-stone-300" : "text-stone-700"
                            }`}>
                              {item.text}
                            </p>
                            
                            {/* Inline dynamic tooltip shown on hover */}
                            <div className="mt-2 text-[10px] sm:text-xs text-stone-500 leading-normal max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-300">
                              <span className="font-semibold text-emerald-700">Detail:</span> {item.hoverTip}
                            </div>
                          </div>

                          {/* Hover info badge */}
                          <span className="absolute top-3.5 right-3.5 text-stone-300 group-hover:text-emerald-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {filteredIncluded.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setIsIncludedExpanded(!isIncludedExpanded)}
                      className="mt-4 w-full py-2.5 px-4 rounded-2xl border border-stone-200 text-stone-600 font-bold text-xs hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm bg-white"
                    >
                      {isIncludedExpanded ? "See Less Inclusions" : `See More Inclusions (${filteredIncluded.length - 5} more)`}
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isIncludedExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* EXCLUDED COLUMN */}
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6">
                <div className="h-9 w-9 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">What's Excluded</h3>
                  <span className="text-xs text-stone-400 font-bold">Personal costs and extras</span>
                </div>
              </div>

              {filteredExcluded.length === 0 ? (
                <p className="text-sm text-stone-400 py-6 italic text-center">No exclusions in this category.</p>
              ) : (
                <>
                  <div className="space-y-3.5">
                    {displayedExcluded.map((item) => {
                      const isChecked = !!checkedCoverageItems[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCheckedCoverageItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 group relative cursor-pointer ${
                            isChecked 
                              ? "bg-stone-50 border-stone-400/40" 
                              : "bg-[#faf9f5]/50 border-stone-200/60 hover:bg-[#faf9f5] hover:border-stone-300"
                          }`}
                        >
                          {/* Interactive Checkbox */}
                          <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-stone-600 border-stone-600 text-white" 
                              : "border-stone-300 bg-white group-hover:border-stone-400"
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0 pr-6">
                            <p className={`text-xs sm:text-sm font-medium leading-relaxed transition-all duration-300 ${
                              isChecked ? "text-stone-400 line-through decoration-stone-300" : "text-stone-700"
                            }`}>
                              {item.text}
                            </p>
                            
                            {/* Inline dynamic tooltip shown on hover */}
                            <div className="mt-2 text-[10px] sm:text-xs text-stone-500 leading-normal max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-300">
                              <span className="font-semibold text-stone-600">Detail:</span> {item.hoverTip}
                            </div>
                          </div>

                          {/* Hover info badge */}
                          <span className="absolute top-3.5 right-3.5 text-stone-300 group-hover:text-stone-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {filteredExcluded.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setIsExcludedExpanded(!isExcludedExpanded)}
                      className="mt-4 w-full py-2.5 px-4 rounded-2xl border border-stone-200 text-stone-600 font-bold text-xs hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm bg-white"
                    >
                      {isExcludedExpanded ? "See Less Exclusions" : `See More Exclusions (${filteredExcluded.length - 5} more)`}
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isExcludedExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* GEAR ESSENTIALS & SEASONAL CLIMATE */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Logistical Prep</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Gear Essentials &amp; Climate Matrix
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Prepare for extreme climate shifts as you journey from subtropical Pokhara to freezing alpine ridges. Check the packing essentials and seasonal temperature trends.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            
            {/* COLUMN 1: 6 Gear Essentials */}
            <div className="lg:col-span-7 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 mb-6">
                  6 Absolute Packing Essentials
                </h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Broken-in Boots", emoji: "🥾", code: "1f97e", desc: "Ankle-high waterproof boots. Ensure they are well broken-in to avoid deep trail blisters." },
                    { title: "-10°C Sleeping Bag", emoji: "⛺", code: "26fa", desc: "Warm down sleeping bag rated to comfort -10°C. Lodge rooms are unheated and cold." },
                    { title: "Trekking Poles", emoji: "🚶", code: "1f6b6", desc: "Highly recommended for steep knee-jarring descents from Khopra and Khayer Lake." },
                    { title: "Thermal Base Layers", emoji: "👕", code: "1f455", desc: "Moisture-wicking merino wool tops and bottoms. Avoid cotton as it retains sweat." },
                    { title: "High-Loft Down Jacket", emoji: "🧥", code: "1f9e5", desc: "A warm, windproof down jacket for freezing mornings and sunset ridge viewing." },
                    { title: "Water Purification", emoji: "💧", code: "1f4a7", desc: "Purification tablets or UV filters. Single-use plastic bottles are banned in ACAP." }
                  ].map((gear, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-500/20 transition group">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${gear.code}.svg`}
                          alt={gear.emoji}
                          className="w-7 h-7 object-contain select-none pointer-events-none"
                        />
                        <h4 className="font-bold text-stone-900 text-sm">{gear.title}</h4>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">{gear.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-400 font-medium">
                Want a complete checklist? Read our interactive <Link href="/planning/packing-checklist" className="text-emerald-700 underline font-bold hover:text-emerald-600">Packing List Guide</Link>.
              </div>
            </div>

            {/* COLUMN 2: Seasonal Temperature Matrix */}
            <div className="lg:col-span-5 rounded-3xl border border-emerald-100 bg-[#0c1715] text-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 mb-6">
                  Seasonal Temperature Matrix
                </h3>
                
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-stone-950/60">
                  <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                    <thead className="bg-stone-950 text-emerald-400 font-extrabold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="px-5 py-3.5">Location</th>
                        <th className="px-5 py-3.5">Spring (Mar-May)</th>
                        <th className="px-5 py-3.5">Autumn (Oct-Nov)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-stone-300 font-medium">
                      {[
                        { loc: "Pokhara (820m)", spring: "15°C to 28°C", autumn: "12°C to 25°C" },
                        { loc: "Swanta (2,200m)", spring: "8°C to 18°C", autumn: "5°C to 15°C" },
                        { loc: "Khopra Ridge (3,660m)", spring: "-2°C to 12°C", autumn: "-5°C to 10°C" },
                        { loc: "Khayer Lake (4,660m)", spring: "-8°C to 5°C", autumn: "-10°C to 2°C" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition">
                          <td className="px-5 py-3.5 font-bold text-white">{row.loc}</td>
                          <td className="px-5 py-3.5 text-stone-400">{row.spring}</td>
                          <td className="px-5 py-3.5 text-stone-400">{row.autumn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-emerald-400 font-semibold leading-relaxed">
                ❄️ High-altitude areas plunge below freezing at night. Layers are key to comfort and warmth!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIEWPOINTS & MOUNTAINS SHOWCASE */}
      <section id="mountains" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Himalayan Panoramas</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mountains Visible from the Ridge
            </h2>
            <p className="mt-4 text-stone-400">
              Standing at Khopra Ridge (3,660m) places you directly opposite Dhaulagiri, creating a visual corridor of snow-capped peaks.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                name: "Dhaulagiri I", 
                alt: "8,167 m", 
                image: "/dhaulagiri.png",
                desc: "The seventh-highest mountain in the world, dominating the western horizon." 
              },
              { 
                name: "Annapurna South", 
                alt: "7,219 m", 
                image: "/annapurna-south.png",
                desc: "Hovering directly above the ridge, towering over Khayer Lake." 
              },
              { 
                name: "Nilgiri", 
                alt: "7,061 m", 
                image: "/nilgiri.png",
                desc: "A beautiful group of three peaks glowing gold during sunset." 
              },
              { 
                name: "Machhapuchhre", 
                alt: "6,993 m", 
                image: "/machhapuchhre.png",
                desc: "The iconic sacred fish-tail mountain visible from the lower sections." 
              }
            ].map((peak, idx) => (
              <div 
                key={idx} 
                className="group rounded-3xl bg-stone-950 border border-white/10 overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col"
              >
                {/* Image Section with Zoom Effect */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img 
                    src={peak.image} 
                    alt={peak.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating altitude tag */}
                  <span className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-white tracking-widest uppercase">
                    {peak.alt}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
                      {peak.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                      {peak.desc}
                    </p>
                  </div>
                  
                  {/* Action Link to subpages if applicable */}
                  <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-400/80 group-hover:text-emerald-400 transition-colors duration-300">
                    <span>Peak Profile</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIONS OF KHOPRA GALLERY */}
      <section className="py-24 bg-[#faf9f5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">A Visual Journey</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Visions of Khopra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Left Image: Khopra Ridge View */}
            <div className="md:col-span-6 group relative rounded-3xl overflow-hidden shadow-md h-[450px] bg-stone-100 border border-stone-200">
              <img 
                src="/khopra-ridge-view.png" 
                alt="Sunset panoramic view of Dhaulagiri from Khopra Ridge" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">The Panorama Summit</span>
                <h4 className="text-xl font-bold mt-1">Khopra Ridge Vantage (3,660m)</h4>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  A spectacular 360-degree overlook offering close-up sunset vistas of the massive Dhaulagiri range.
                </p>
              </div>
            </div>

            {/* Middle Column: Two Stacked Images */}
            <div className="md:col-span-3 flex flex-col gap-4">
              
              {/* Top: Swanta Village */}
              <div className="group relative rounded-3xl overflow-hidden shadow-md h-[217px] bg-stone-100 border border-stone-200">
                <img 
                  src="/swanta-village.png" 
                  alt="Magar farming village of Swanta" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-4" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-400">Community Valley Hub</span>
                  <h4 className="text-sm font-bold mt-0.5">Swanta Village (2,200m)</h4>
                  <p className="text-[10px] text-stone-300 mt-1 leading-relaxed">
                    A traditional Magar farming settlement where lodge proceeds fund local high school teachers.
                  </p>
                </div>
              </div>

              {/* Bottom: Forest Trail */}
              <div className="group relative rounded-3xl overflow-hidden shadow-md h-[217px] bg-stone-100 border border-stone-200">
                <img 
                  src="/forest-trail.png" 
                  alt="Lush mossy rhododendron trail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-4" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-400">Silent Wilderness</span>
                  <h4 className="text-sm font-bold mt-0.5">Primal Rhododendron Forests</h4>
                  <p className="text-[10px] text-stone-300 mt-1 leading-relaxed">
                    Hike through isolated forests under towering trees, completely removed from crowded trekking routes.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Image: Khayer Lake */}
            <div className="md:col-span-3 group relative rounded-3xl overflow-hidden shadow-md h-[450px] bg-stone-100 border border-stone-200">
              <img 
                src="/khayer-lake.png" 
                alt="Sacred alpine Khayer Lake" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Pilgrimage Shrine</span>
                <h4 className="text-base font-bold mt-1">Sacred Khayer Lake (4,660m)</h4>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Deep alpine waters sitting directly beneath Annapurna South's giant vertical glaciated walls.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE COMMUNITY LODGE DIFFERENCE */}
      <section id="community" className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Sustainable Travel</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              What is the Community Lodge Difference?
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              Unlike traditional teahouse treks in Nepal where lodges are privately owned, the lodges along the Khopra Ridge route are community-owned. 
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              All profits generated from your accommodation and meals go directly to local schools, village health posts, and sustainable agriculture initiatives in Swanta and neighboring Magar villages. By booking this trek, you directly support local education and valley development.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">✓</span>
                <span className="text-sm font-bold text-stone-800">100% Local Reinvestment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">✓</span>
                <span className="text-sm font-bold text-stone-800">Preserved Cultural Exchange</span>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200">
            <h3 className="text-lg font-bold text-stone-950">A Typical Day on the Trail</h3>
            <ul className="mt-6 flex flex-col gap-4 text-sm text-stone-600">
              <li className="flex gap-3">
                <strong className="text-emerald-700">07:00 AM:</strong>
                <span>Warm breakfast of local porridge and farm eggs.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">08:00 AM:</strong>
                <span>Start hiking along quiet, uncrowded forest trails.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">01:00 PM:</strong>
                <span>Lunch stop at a high-elevation alpine pasture lodge.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">04:00 PM:</strong>
                <span>Arrive at the ridge lodge, watch the sunset over Dhaulagiri.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CULTURAL ETIQUETTE & CODE OF CONDUCT */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Responsible Tourism</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Code of Conduct &amp; Etiquette
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Sustainability is a two-way street. Respect the local culture and protect the high-altitude Annapurna ecosystem during your trek.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Cultural Etiquette Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-stone-200 pb-5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Magar &amp; Gurung Etiquette</h3>
                  <span className="text-xs text-stone-400 font-bold">Respecting mountain host communities</span>
                </div>
              </div>
              <ul className="space-y-4 text-xs text-stone-600 leading-relaxed font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Ask Before Photographing:</strong> Always request permission politely before taking photos of local villagers, children, or their personal property.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Dress Modestly:</strong> Cover shoulders and knees when visiting villages, shrines, or schools. Avoid revealing clothing as a sign of respect.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Temple Protocols:</strong> Walk clockwise around chortens, mani walls, and shrines. Remove shoes and leather items before entering sacred temples.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Two-Hand Respect:</strong> Use both hands when giving or receiving money, food, or gifts. It is a traditional sign of gratitude and respect.</span>
                </li>
              </ul>
            </div>

            {/* Leave No Trace Card */}
            <div className="bg-[#0e1e1a] text-white border border-emerald-950 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-white/10 pb-5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-400">Leave No Trace Rules</h3>
                  <span className="text-xs text-emerald-300/60 font-bold">Protecting the Annapurna ecosystem</span>
                </div>
              </div>
              <ul className="space-y-4 text-xs text-stone-300 leading-relaxed font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>No Single-Use Plastics:</strong> Commercial plastic water bottles are banned in the conservation zone. Use water purification tablets and refilled bottles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Battery &amp; Tech Waste:</strong> High-altitude villages do not have chemical waste disposal. Pack out used batteries, power banks, and electronics to cities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Stay on the Trail:</strong> Stick strictly to mapped pathways. Shortcuts on steep mountain slopes cause severe soil erosion during the monsoon season.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Pack Out Personal Trash:</strong> Never throw wrappers, tissues, or trash on the trail. Keep all waste in a bag inside your pack and dispose of it at the next lodge.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING & COST CALCULATOR */}
      <section id="pricing" className="py-24 bg-stone-100 border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Trek Cost</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Interactive Pricing & Group Discounts
            </h2>
            <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
              Select your itinerary and group size to calculate your exact package cost. Enjoy automatically applied group discounts.
            </p>
          </div>

          {/* Pricing Controls: Duration selector and Pax counter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 max-w-4xl mx-auto bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
            {/* Duration Tab Switcher */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Select Itinerary Duration</label>
              <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200/60 shadow-inner">
                <button
                  type="button"
                  onClick={() => setPricingDuration(9)}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pricingDuration === 9 
                      ? "bg-[#0b1717] text-white shadow-sm" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  9-Day Core Route
                </button>
                <button
                  type="button"
                  onClick={() => setPricingDuration(7)}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pricingDuration === 7 
                      ? "bg-[#0b1717] text-white shadow-sm" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  7-Day Express Route
                </button>
              </div>
            </div>

            {/* Separator on desktop */}
            <div className="hidden md:block h-12 w-px bg-stone-200" />

            {/* Group Size (Pax) Input Counter */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Number of Trekkers (Pax)</label>
              <div className="flex items-center justify-between bg-stone-100 px-4 py-2 rounded-2xl border border-stone-200/60 shadow-inner">
                <button
                  type="button"
                  onClick={() => setPricingPax((prev) => Math.max(1, prev - 1))}
                  className="h-10 w-10 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-bold text-lg flex items-center justify-center transition-all cursor-pointer select-none"
                >
                  −
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-black text-stone-900 leading-none">{pricingPax}</span>
                  <span className="text-[9px] font-semibold text-stone-400 uppercase tracking-widest mt-0.5">
                    {pricingPax === 1 ? "Trekker (Solo)" : "Trekkers"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPricingPax((prev) => Math.min(25, prev + 1))}
                  className="h-10 w-10 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-bold text-lg flex items-center justify-center transition-all cursor-pointer select-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Layout */}
          <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
            
            {/* LEFT COLUMN: STANDARD PRICE CARD WITH RIBBON */}
            <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Ribbon Header */}
              <div className="absolute top-0 left-0 w-full">
                <div className="relative bg-emerald-700 text-white py-3.5 px-8 font-black text-sm uppercase tracking-widest text-center shadow-md">
                  Standard Price
                </div>
              </div>

              {/* Price Details Body */}
              <div className="mt-14 pt-6">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                  Per Person, Min 2 Pax - {pricingDuration} Days
                </span>
                
                {/* Dynamically Resolved Price per Person */}
                <div className="mt-4 flex items-baseline gap-1.5 justify-center">
                  <span className="text-3xl font-black text-emerald-700">$</span>
                  <span className="text-6xl font-black text-emerald-700 tracking-tight">{perPersonPrice}</span>
                  <span className="text-base font-bold text-stone-400 uppercase tracking-wider ml-1">USD</span>
                </div>

                {/* Total Price breakdown */}
                {pricingPax > 1 ? (
                  <div className="mt-6 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex justify-between items-center text-left">
                    <div>
                      <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest block">Total Package Cost</span>
                      <span className="text-sm text-stone-500 font-medium">({pricingPax} travellers × ${perPersonPrice})</span>
                    </div>
                    <span className="text-xl font-black text-emerald-800">${totalTripCost} USD</span>
                  </div>
                ) : (
                  <div className="mt-6 p-4 rounded-2xl bg-[#faf9f5]/80 border border-stone-200/60 text-center text-stone-500 text-xs leading-relaxed font-normal">
                    Solo trek rate is slightly higher to cover dedicated guide and room costs. Save by inviting travel partners!
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="#book"
                  className="block w-full text-center rounded-2xl bg-emerald-50 border border-emerald-500/30 hover:border-emerald-500/60 py-3.5 text-xs font-black text-emerald-700 uppercase tracking-widest transition-all hover:scale-[1.02]"
                >
                  Customize Trip
                </a>
                <a
                  href="#book"
                  className="block w-full text-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-black text-white uppercase tracking-widest shadow-md transition-all hover:scale-[1.02] shadow-emerald-950/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: DISCOUNTED RATES LIST */}
            <div className="lg:col-span-7 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 mb-6">
                  Discounted Group Prices
                </h3>

                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                  <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                    <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="px-6 py-4">Pax (Group Size)</th>
                        <th className="px-6 py-4 text-right">Price per Person</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                      {activeRates.map((tier) => {
                        // Check if this row matches the user's selected Pax group size
                        const isSelectedRow = pricingPax >= tier.minPax && pricingPax <= tier.maxPax;
                        return (
                          <tr 
                            key={tier.label} 
                            className={`transition-all duration-300 ${
                              isSelectedRow 
                                ? "bg-emerald-50 font-bold text-emerald-900 shadow-sm" 
                                : "hover:bg-stone-50/50"
                            }`}
                          >
                            <td className="px-6 py-4 flex items-center gap-3">
                              {isSelectedRow && (
                                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                              )}
                              <span>{tier.label} Pax</span>
                            </td>
                            <td className="px-6 py-4 text-right font-black">
                              US$ {tier.price}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* EEAT Booking Trust Footer */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-3 text-stone-400 text-xs">
                <span className="text-lg">🛡️</span>
                <p className="leading-relaxed font-normal">
                  All Nirvana Trails packages include government permits, accommodation, flights, private jeeps, and full guide/porter insurance coverage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-stone-50 border-t border-stone-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Guest Experiences</span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                Loved by Trekkers Worldwide
              </h2>
              <p className="mt-4 text-stone-600 text-base max-w-xl">
                Verified reviews from adventurers who walked the uncrowded trails of Khopra Danda.
              </p>
            </div>
            
            {/* Scroll Navigation Buttons (Visible on all viewports, aligned right on desktop) */}
            <div className="flex gap-3 mt-6 md:mt-0">
              <button
                onClick={() => scrollReviews("left")}
                aria-label="Scroll left"
                className="h-12 w-12 rounded-full border border-stone-200 bg-white hover:border-emerald-600 hover:text-emerald-700 text-stone-600 flex items-center justify-center transition-all cursor-pointer hover:shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollReviews("right")}
                aria-label="Scroll right"
                className="h-12 w-12 rounded-full border border-stone-200 bg-white hover:border-emerald-600 hover:text-emerald-700 text-stone-600 flex items-center justify-center transition-all cursor-pointer hover:shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Selector Tabs for Google & TripAdvisor */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-3xl mx-auto mb-16">
            
            {/* Google Reviews Tab */}
            <button
              onClick={() => setActiveReviewTab("google")}
              className={`w-full sm:w-1/2 p-6 rounded-3xl border text-left transition-all hover-lift cursor-pointer ${
                activeReviewTab === "google"
                  ? "border-emerald-600 bg-white shadow-lg ring-1 ring-emerald-500/10"
                  : "border-stone-200 bg-stone-100/60 hover:bg-stone-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-extrabold text-stone-900 uppercase tracking-wide">Google Reviews</span>
                </div>
                <span className="text-2xl text-emerald-600 font-bold">4.9</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex text-amber-500 text-xs gap-0.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-xs text-stone-400 font-bold">142 reviews</span>
              </div>
            </button>

            {/* TripAdvisor Reviews Tab */}
            <button
              onClick={() => setActiveReviewTab("tripadvisor")}
              className={`w-full sm:w-1/2 p-6 rounded-3xl border text-left transition-all hover-lift cursor-pointer ${
                activeReviewTab === "tripadvisor"
                  ? "border-emerald-600 bg-white shadow-lg ring-1 ring-emerald-500/10"
                  : "border-stone-200 bg-stone-100/60 hover:bg-stone-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#00AF87] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                  </svg>
                  <span className="text-sm font-extrabold text-stone-900 uppercase tracking-wide">TripAdvisor</span>
                </div>
                <span className="text-2xl text-emerald-600 font-bold">5.0</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#00AF87] inline-block" />
                  ))}
                </div>
                <span className="text-xs text-stone-400 font-bold">84 reviews</span>
              </div>
            </button>

          </div>

          {/* Horizontally Scrollable Reviews Wrapper */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-6 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {(activeReviewTab === "google" ? googleReviews : tripAdvisorReviews).map((review) => (
                <div
                  key={review.id}
                  className="w-[290px] sm:w-[380px] flex-shrink-0 snap-start rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="h-10 w-10 rounded-full bg-emerald-600/10 text-emerald-800 flex items-center justify-center font-bold text-sm">
                          {review.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-stone-950 text-sm">{review.name}</h4>
                          <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">{review.country}</span>
                        </div>
                      </div>
                      
                      {/* Platform Logo */}
                      {activeReviewTab === "google" ? (
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#00AF87] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                        </svg>
                      )}
                    </div>

                    {/* Rating Stars/Bubbles & Date */}
                    <div className="mt-4 flex items-center justify-between">
                      {activeReviewTab === "google" ? (
                        <div className="flex text-amber-500 text-xs gap-0.5">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="h-2 w-2 rounded-full bg-[#00AF87] inline-block" />
                          ))}
                        </div>
                      )}
                      <span className="text-[10px] text-stone-400 font-semibold">{review.date}</span>
                    </div>

                    <p className="mt-4 text-stone-600 text-sm leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <span className="inline-block rounded-full bg-stone-100 border border-stone-200/50 px-3 py-1 text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      {review.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION BUTTON SECTION (CTA) */}
          <div className="mt-16 text-center bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/5 shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('/khopra-hero-bg.png')] bg-cover bg-center" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Make Your Dream Trek a Reality</span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Experience Khopra Ridge?
              </h3>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                Connect with our local experts in Pokhara. We will customize the itinerary, secure community lodges, and ensure you have the ultimate sustainable trek.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#book"
                  className="w-full sm:w-auto rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-all hover:scale-105 inline-block"
                >
                  Book This Trek
                </a>
                <a
                  href="#itinerary"
                  className="w-full sm:w-auto rounded-full bg-transparent border border-white/20 hover:bg-white/10 px-8 py-3.5 text-sm font-bold text-stone-200 transition-all hover:scale-105 inline-block"
                >
                  View Route Timeline
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MEET OUR GUIDES & TEAM PROFILES */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Expert Guides</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Meet Your Local Trekking Leaders
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Trek with safety and confidence. Our local leaders are government-licensed wilderness responders with years of high-altitude Annapurna experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Bishal Oli",
                role: "Lead Guide & Altitude Coordinator",
                initials: "BO",
                xp: "12+ Years Experience",
                certs: ["Licensed Mountain Guide", "Wilderness First Responder", "ACAP Ecology Specialist"],
                bio: "Born and raised in the Swanta valley, Bishal is dedicated to showing trekkers Magar agricultural heritage and keeping a safe, steady pace on the high trails."
              },
              {
                name: "Pasang Sherpa",
                role: "High-Altitude Safety Leader",
                initials: "PS",
                xp: "15+ Years Experience",
                certs: ["Wilderness First Aid Certified", "NMA Advanced Mountaineer", "Rescue Coordinator"],
                bio: "Pasang monitors guest oxygen levels daily and manages route acclimatization. His deep knowledge of weather patterns ensures safe ridge passes."
              },
              {
                name: "Mingma D. Sherpa",
                role: "Cultural & Wildlife Specialist",
                initials: "MS",
                xp: "8+ Years Experience",
                certs: ["Licensed Tour & Trek Guide", "ACAP Wildlife Tracker", "First Aid Certified"],
                bio: "Mingma is our flora and fauna expert. He connects trekkers with village committees and details the deep spiritual mythology of Sacred Khayer Lake."
              }
            ].map((guide, idx) => (
              <div 
                key={idx} 
                className="group rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm hover:shadow-md hover-lift transition flex flex-col justify-between"
              >
                <div>
                  {/* Avatar & Experience */}
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                        {guide.initials}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-stone-950 text-sm">{guide.name}</h4>
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{guide.role}</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100/60 px-2 py-1 rounded-md tracking-wider">
                      {guide.xp}
                    </span>
                  </div>

                  {/* Credentials / Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {guide.certs.map((c, i) => (
                      <span key={i} className="inline-block rounded bg-white border border-stone-200 px-2 py-0.5 text-[9px] font-bold text-stone-500">
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed font-medium">
                    {guide.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  <span>Wilderness Responder</span>
                  <span className="text-emerald-700">★ ★ ★ ★ ★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#f5f3ef] border-t border-stone-200">
        <div className="mx-auto max-w-4xl px-6">
          {/* Eyebrow got questions badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center rounded-full border border-stone-800 px-5 py-1.5 text-xs font-black text-stone-800 uppercase tracking-widest bg-transparent">
              Got Questions?
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl leading-tight">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
              Everything you need to know before booking your trek.
            </p>
          </div>

          {/* Pill Tabs Selector */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFaqCategory(cat.id);
                  setExpandedFaq(null);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeFaqCategory === cat.id
                    ? "bg-[#0b1717] text-white border-transparent shadow-sm"
                    : "bg-transparent text-stone-700 border-stone-300 hover:bg-stone-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Cards */}
          <div className="space-y-4">
            {categorizedFaqs[activeFaqCategory].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className={`rounded-3xl border transition-all bg-white p-6 ${
                    isOpen 
                      ? "border-emerald-600 shadow-md ring-1 ring-emerald-500/20" 
                      : "border-stone-200/80 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Question Accent Box */}
                      <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ?
                      </div>
                      <span className="text-base sm:text-lg font-bold text-stone-950 pr-4">{faq.question}</span>
                    </div>
                    
                    {/* Arrow Button */}
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen 
                        ? "bg-emerald-600 text-white font-bold" 
                        : "border border-stone-200 bg-white text-stone-400"
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] mt-4 pt-4 border-t border-stone-100" : "max-h-0"
                    }`}
                  >
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed pl-[52px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING / INQUIRY FORM */}
      <section id="book" className="py-24 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto rounded-3xl border border-stone-200 bg-white p-8 shadow-lg md:p-12">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-stone-950">Inquire &amp; Book Today</h2>
            <p className="mt-3 text-sm text-stone-500">
              Submit your tentative dates and details, and our local trekking planner will get back to you with custom adjustments within 24 hours.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="mt-8 text-center p-8 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-3xl">🎉</span>
              <h3 className="mt-4 text-lg font-bold text-emerald-900">Thank you for your inquiry!</h3>
              <p className="mt-2 text-sm text-emerald-700">
                Our team is currently checking lodge availability for your dates and will contact you via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Proposed Start Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Group Size</label>
                  <select
                    name="packSize"
                    value={formData.packSize}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                  >
                    <option value="1">1 Trekker (Solo)</option>
                    <option value="2">2 Trekkers</option>
                    <option value="3-5">3 - 5 Trekkers</option>
                    <option value="6-10">6 - 10 Trekkers</option>
                    <option value="11+">11+ Trekkers</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trek Package</label>
                  <select
                    name="trekPackage"
                    value={formData.trekPackage}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500 bg-white cursor-pointer"
                  >
                    <option value="khayer-lake">Sacred Khayer Lake Pilgrimage (9 Days)</option>
                    <option value="poon-hill-combo">Poon Hill &amp; Khopra Combo (8 Days)</option>
                    <option value="mohare-offbeat">Mohare Danda Offbeat (7 Days)</option>
                    <option value="custom">Custom Designed Itinerary</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 relative" ref={foundUsRef}>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Where did you find us?</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="foundUs"
                      value={formData.foundUs}
                      onChange={(e) => {
                        handleInputChange(e);
                        setShowFoundUsSuggestions(true);
                      }}
                      onFocus={() => setShowFoundUsSuggestions(true)}
                      className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                      placeholder="Start typing or click to select..."
                      autoComplete="off"
                    />
                    {formData.foundUs && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, foundUs: "" }))}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 font-bold text-sm px-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  {showFoundUsSuggestions && (
                    <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-56 overflow-y-auto rounded-xl border border-stone-200 bg-white shadow-xl py-1.5">
                      {filteredFoundUsSuggestions.length > 0 ? (
                        filteredFoundUsSuggestions.map((option, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, foundUs: option }));
                              setShowFoundUsSuggestions(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-50 transition text-stone-700 font-semibold border-b border-stone-50 last:border-b-0 cursor-pointer"
                          >
                            {option}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs text-stone-400 italic font-medium">
                          Custom value: "{formData.foundUs}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Custom Needs / Notes</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition resize-none"
                  placeholder="Share details like previous trekking experience, dietary needs, or if you wish to add Poon Hill..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 rounded-lg bg-emerald-600 py-4 text-base font-bold text-white shadow-md hover:bg-emerald-500 transition-all"
              >
                Send Free Booking Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      
    </div>
  );
}
