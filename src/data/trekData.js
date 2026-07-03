import React from "react";

export const FIND_US_OPTIONS = [
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

export const googleReviews = [
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

export const tripAdvisorReviews = [
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

export const faqCategories = [
  { id: "route", label: "Route & Trail" },
  { id: "community", label: "Community Lodges" },
  { id: "preparation", label: "Preparation & Safety" },
  { id: "booking", label: "Booking & Transport" }
];

export const categorizedFaqs = {
  route: [
    {
      question: "What makes the Khopra Ridge Trek different from other Annapurna treks?",
      answer: "Unlike the heavily commercialized paths of Ghorepani Poon Hill or Annapurna Base Camp, Khopra Ridge is a quieter, community-owned circuit. All profits from the lodges are reinvested directly into Swanta and surrounding Magar villages to fund local high schools, clinics, and organic farming."
    },
    {
      question: "How long does it take from Kathmandu to reach the trailhead?",
      answer: "Our Kathmandu to Kathmandu itinerary includes a scenic tourist bus road journey along the Prithvi Highway from Kathmandu to Pokhara on Day 2, followed by a private jeep transfer to Ghandruk village, where the hike begins."
    },
    {
      question: "How difficult is the optional side-trip to Khayer Lake?",
      answer: "The hike to Khayer Lake (4,660m) on Day 6 is challenging. It is a 7-8 hour round-trip from Khopra Ridge lodge. The path involves a steady climb on steep terrain. While highly rewarding, it is optional, and you can choose to spend a relaxing day enjoying views from the ridge instead."
    },
    {
      question: "Is Khopra Ridge Trek a Kathmandu-to-Kathmandu Trek?",
      answer: "Yes. The trek operates as a complete Kathmandu-to-Kathmandu itinerary using comfortable tourist bus transportation between Kathmandu and Pokhara, offering a classic overland road experience."
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
      question: "What is the road travel like between Kathmandu and Pokhara?",
      answer: "We travel by comfortable tourist buses along the scenic Prithvi Highway. The drive takes about 6-8 hours depending on road conditions, passing along beautiful rivers, terraced farmlands, and small highway towns."
    },
    {
      question: "Can I customize the itinerary to add Poon Hill or Mohare Danda?",
      answer: "Absolutely! Since our agency is local, we can customize your package to include a visit to Mohare Danda or extend your stay in Pokhara. Simply indicate your preferences in the custom needs section of our booking inquiry form."
    },
    {
      question: "What is your booking cancellation policy?",
      answer: "We offer flexible booking terms. A small deposit is required to secure lodge bookings and transport reservations. If your plans change, you can reschedule your trek to any future date within 24 months at no extra charge, subject to lodge and transport availability."
    }
  ]
};

export const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu (1400m) and Transfer to Hotel",
    hours: "1-2 hrs",
    altitude: "1,400 m",
    image: "/kathmandu-arrival.png",
    desc: "Kathmandu sits at 1,400 m (4,593 ft). On arrival at Tribhuvan International Airport, a representative meets you and drives you to your hotel, typically Hotel Vistara or similar. The rest of the day is free to rest after the flight. In the evening, you meet your trekking guide for a briefing covering the route, permits, and packing checklist at the office.\n\nAccommodation: Hotel Vistara or similar\nMeals: Welcome briefing only; meals in Kathmandu are on your own unless a welcome dinner is arranged"
  },
  {
    day: 2,
    title: "Fly to Pokhara, Drive to Ghandruk (1940m) and Trek to Tadapani (2630m)",
    hours: "3-4 hrs",
    altitude: "2,630 m",
    image: "/ghandruk-village.png",
    desc: "A 25-minute flight covers the distance from Kathmandu to Pokhara, with clear Himalayan views from the window on a good day. From Pokhara airport, a private vehicle drives roughly 3 hours to Ghandruk at 1,940 m (6,363 ft), a large Gurung village where you stop for lunch and a short introduction to local culture and tradition. From Ghandruk, a 3 to 4 hour trek over 8 km (4.97 mi) of forest trail brings you to Tadapani at 2,630 m (8,663 ft), your first overnight stop on the mountain.\n\nDistance: 8 km / 4.97 mi\nAccommodation: Teahouse\nMeals: Lunch and dinner"
  },
  {
    day: 3,
    title: "Trek from Tadapani to Dobato (3350m)",
    hours: "4-5 hrs",
    altitude: "3,350 m",
    image: "/forest-trail.png",
    desc: "This is one of the steeper climbing days on the trek. After an early breakfast, the trail climbs through dense rhododendron forest and a long run of stone steps, then follows a ridgeline with open views over the surrounding valleys before reaching Dobato at 3,350 m (10,990 ft). Plan for an early night here, since the next day starts before sunrise with the hike up to Muldai View Point.\n\nDistance: 6.5 km / 4 mi\nAccommodation: Teahouse\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 4,
    title: "Sunrise from Muldai View Point and Trek to Khopra Danda (3660m)",
    hours: "6-7 hrs",
    altitude: "3,660 m",
    image: "/chhistibung-pasture.png",
    desc: "A pre-dawn walk takes you to Muldai View Point in time to watch sunrise light spread across the snow-covered peaks of the Dhaulagiri and Annapurna ranges. After descending for breakfast, the trail continues up and down through rhododendron forest to Khopra Danda, also called Khopra Ridge, at 3,660 m (12,006 ft). Dhaulagiri, the seventh-highest mountain in the world, stays in view for much of the day, and trail traffic stays light, with only the occasional yak or mule train for company.\n\nDistance: 11 km / 6.83 mi\nAccommodation: Teahouse\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 5,
    title: "Hike to Khayer Lake (4500m) and Return to Khopra Ridge",
    hours: "8-9 hrs",
    altitude: "4,500 m",
    image: "/khopra-ridge-view.png",
    desc: "This is the longest day of the trek. After watching sunrise color the peaks of Annapurna South, Dhaulagiri, and the Nilgiri range from Khopra Ridge, you set off across the lower slopes of the Annapurna massif toward Khayer Lake. The lake sits at 4,500 m (14,762 ft), ringed by mountains and glaciers, with several small Hindu shrines along its shore; local tradition holds that bathing in its waters washes away past wrongdoing. After time at the lake, you retrace the trail back down to Khopra Ridge for a second night, completing 13 km (8 mi) of walking in total.\n\nDistance: 13 km / 8 mi round trip\nAccommodation: Teahouse (Khopra Ridge)\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 6,
    title: "Trek from Khopra Ridge to Swanta Village (2214m)",
    hours: "5-6 hrs",
    altitude: "2,214 m",
    image: "/khayer-lake.png",
    desc: "After a final view of the Himalayan panorama from Khopra Ridge, the trail drops steadily toward Swanta Village over rocky, uneven ground, so a careful pace matters more than speed on this stage. Dhaulagiri stays visible in the distance for most of the descent, which passes ridge-top settlements and terraced farmland before reaching Swanta at 2,214 m (7,263 ft).\n\nDistance: 9.6 km / 5.9 mi\nAccommodation: Teahouse\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 7,
    title: "Trek from Swanta Village to Ghorepani (2858m)",
    hours: "4-5 hrs",
    altitude: "2,858 m",
    image: "/swanta-village.png",
    desc: "The trail out of Swanta drops through forest and past paddy fields, crosses a suspension bridge, and climbs to the small settlement of Chittre. Expect more company on the trail from here, including other trekkers and mule trains, since the route rejoins busier sections of the Annapurna trail network. A final stretch of stone steps leads up to Ghorepani at 2,858 m (9,376 ft), where the rest of the afternoon is free.\n\nDistance: 6 km / 3.7 mi\nAccommodation: Teahouse\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 8,
    title: "Hike to Poon Hill (3210m), Descend to Hile, and Drive to Pokhara",
    hours: "7-9 hrs",
    altitude: "3,210 m",
    image: "/ghorepani-village.png",
    desc: "A pre-dawn climb brings you to Poon Hill at 3,210 m (10,530 ft) in time for sunrise, one of the best-known viewpoints in the Annapurna region, with Dhaulagiri, the Annapurna massif, Hiunchuli, and Gangapurna all visible from the summit. After sunrise, you descend back to Ghorepani for breakfast, then continue down a steep trail to the lower village of Hile. From Hile, a private vehicle covers the remaining distance to Pokhara.\n\nDistance: 65 km / 40 mi (hike plus drive)\nAccommodation: Hotel Crystal Palace or similar\nMeals: Breakfast, lunch, and dinner"
  },
  {
    day: 9,
    title: "Drive from Pokhara to Kathmandu (200km)",
    hours: "6-7 hrs",
    altitude: "1,400 m",
    image: "/poon-hill-sunrise.png",
    desc: "The final day covers the road journey back to Kathmandu by tourist bus, a 6 to 7 hour drive over 200 km (124.27 mi) along the Trisuli River and through Mugling. Trekkers who want to see more of Pokhara before leaving can arrange a half-day sightseeing add-on at an extra cost. Back in Kathmandu, the evening is free to browse the Thamel or Ason bazaars before your trip ends.\n\nDistance: 200 km / 124.27 mi\nAccommodation: Hotel Vistara or similar\nMeals: Breakfast"
  }
];

export const specs = [
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
    hoverTip: "Starts with arrival in Kathmandu and wraps up with tourist bus travel back to Kathmandu on Day 9.",
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
    hoverTip: "Pokhara serves as the primary gateway city for the Khopra Ridge Trek. After a scenic tourist bus ride from Kathmandu, trekkers travel by road to Ghandruk, the official trailhead where the trekking portion begins.",
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
    hoverTip: "The KTM Loop Trail design connects Kathmandu and Pokhara overland. Enjoy a comfortable scenic tourist bus journey along the Prithvi Highway, showcasing Nepal's river valleys and terraced hills.",
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
    hoverTip: "Average walking distance of 7-8 km per day. Excludes tourist bus travel and private jeeps.",
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
    hoverTip: "The nearest major transport connection hub is Pokhara (accessed via tourist bus or private road travel).",
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
    label: "Tourist Bus",
    valMetric: "KTM - Pokhara",
    valImperial: "KTM - Pokhara",
    subMetric: "Scenic Road Transit",
    subImperial: "Scenic Road Transit",
    category: "logistics",
    hoverTip: "Overland transit by comfortable tourist bus along the Prithvi Highway (approx. 6-8 hours).",
    icon: (
      <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1a2 2 0 002-2V8a2 2 0 00-2-2h-1m4 10a2 2 0 002-2v-5a2 2 0 00-2-2m0 9h1m-1-5H18" />
      </svg>
    )
  }
];

export const includedItems = [
  {
    id: "inc-airport",
    text: "Airport transfer services during arrival and departure, and the tourist bus schedule",
    category: "transit",
    hoverTip: "Private airport transfers to/from your hotel in Kathmandu. Includes tourist bus seat booking and arrangements."
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

export const excludedItems = [
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

export const rates7Days = [
  { label: "1 - 1", minPax: 1, maxPax: 1, price: 835 },
  { label: "2 - 3", minPax: 2, maxPax: 3, price: 490 },
  { label: "4 - 6", minPax: 4, maxPax: 6, price: 470 },
  { label: "7 - 9", minPax: 7, maxPax: 9, price: 440 },
  { label: "10+", minPax: 10, maxPax: 999, price: 410 }
];

export const rates9Days = [
  { label: "1 - 1", minPax: 1, maxPax: 1, price: 1250 },
  { label: "2 - 3", minPax: 2, maxPax: 3, price: 890 },
  { label: "4 - 6", minPax: 4, maxPax: 6, price: 840 },
  { label: "7 - 9", minPax: 7, maxPax: 9, price: 790 },
  { label: "10+", minPax: 10, maxPax: 999, price: 740 }
];
