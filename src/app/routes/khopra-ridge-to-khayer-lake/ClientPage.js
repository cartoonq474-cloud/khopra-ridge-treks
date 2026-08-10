"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedSeason, setSelectedSeason] = useState("autumn");

  const seasonalGuide = {
    spring: {
      season: "🌸 Spring (March–May)",
      terrain: "Stable ridge paths with lingering snow patches near the 4,660m lake basin in March/April.",
      weather: "Cold morning starts (-2°C to 5°C); comfortable daytime walking before afternoon cloud build-up.",
      highlight: "Blooming rhododendron forests on lower slopes and crisp morning reflections on the lake.",
    },
    autumn: {
      season: "🍂 Autumn (Sept–Nov)",
      trail: "Firm scree footing, dry ridge trails, and peak atmospheric transparency.",
      weather: "Cold high-altitude temperatures (-5°C to 2°C at lake). Excellent early morning clarity.",
      highlight: "Crystal-clear reflections of Annapurna South and Dhaulagiri on Sacred Khayer Lake.",
    },
    winter: {
      season: "❄️ Winter (Dec–Feb)",
      trail: "Deep snow accumulation and ice across exposed scree slopes above 4,000m.",
      weather: "Freezing ridge temperatures (-12°C to -4°C). High wind chill across open ridgelines.",
      highlight: "Technical alpine adventure requiring microspikes, gaiters, and experienced mountain guides.",
    },
    monsoon: {
      season: "🌧️ Monsoon (June–Aug)",
      trail: "Slippery mud lower down, frequent rainfall, and cloud cover concealing high peaks.",
      weather: "Humid and damp with afternoon downpours.",
      highlight: "Sacred Janai Purnima pilgrimage in August, drawing local Magar and Hindu pilgrims to Khayer Baraha Temple.",
    },
  };

  const currentSeason = seasonalGuide[selectedSeason];

  const quickStats = [
    { label: "Round-Trip Distance", value: "14 to 16 km (8.7 to 9.9 miles)" },
    { label: "Elevation Gain", value: "+1,000 m (+3,280 ft)" },
    { label: "Starting Altitude", value: "Khopra Ridge (3,660 m / 12,007 ft)" },
    { label: "Highest Destination", value: "Sacred Khayer Lake (4,660 m / 15,289 ft)" },
    { label: "Ascent Duration", value: "4 to 5 Hours" },
    { label: "Descent Duration", value: "3 to 4 Hours" },
    { label: "Difficulty Rating", value: "Strenuous (Hardest Segment)" },
    { label: "Trek Configuration", value: "Out-and-Back Day Hike" },
  ];

  const summarySpecs = [
    { label: "Distance", value: "14 to 16 km RT" },
    { label: "Elevation Gain", value: "+1,000m (Lake 4,660m)" },
    { label: "Hiking Time", value: "7 to 9 Hours Total" },
    { label: "Route Rating", value: "Strenuous Day Hike" },
  ];

  const comparisonTable = [
    { route: "Poon Hill (3,210m)", difficulty: "Moderate", altitude: "Lower (<3,500m)", profile: "Paved stairs & teahouse crowd" },
    { route: "Mardi Himal Base Camp (4,500m)", difficulty: "Difficult", altitude: "High (4,500m)", profile: "Exposed narrow ridge trail" },
    { route: "Sacred Khayer Lake (4,660m)", difficulty: "Strenuous", altitude: "Highest (4,660m)", profile: "1,000m gain over remote scree & high ridge" },
  ];

  const faqs = [
    {
      q: "How far is Khayer Lake from Khopra Ridge?",
      a: "The round-trip distance from Khopra Ridge to Sacred Khayer Lake is approximately 14 to 16 kilometers (8.7 to 9.9 miles) as an out-and-back day hike.",
    },
    {
      q: "How long does it take to hike to Khayer Lake?",
      a: "Most trekkers take 4 to 5 hours to ascend 1,000m to the lake and 3 to 4 hours to descend back to Khopra Ridge, making it a 7 to 9 hour total hiking day.",
    },
    {
      q: "How difficult is the Khayer Lake trek?",
      a: "It is rated strenuous. It is physically the most demanding single day of the Khopra Ridge Trek due to 1,000m of elevation gain finishing at 4,660 meters.",
    },
    {
      q: "What is the altitude of Khayer Lake?",
      a: "Sacred Khayer Lake sits at approximately 4,660 meters (15,289 feet) above sea level, roughly 1,000 meters higher than Khopra Ridge.",
    },
    {
      q: "Can beginners hike to Khayer Lake?",
      a: "Beginners can attempt it only if they are properly acclimatized, physically fit, and accompanied by an experienced guide. It should not be attempted without prior acclimatization.",
    },
    {
      q: "Is altitude sickness (AMS) common at Khayer Lake?",
      a: "Yes. Ascending from 3,660m to 4,660m brings high AMS risks. Hydrate continuously, keep a slow rhythmic pace, and turn back immediately if severe headache or breathlessness occurs.",
    },
    {
      q: "What is the sacred significance of Khayer Lake?",
      a: "Khayer Lake and the Khayer Baraha Temple beside it are sacred pilgrimage sites for local Magar and Hindu communities. Pilgrims visit during the August Janai Purnima festival to offer prayers to Lord Vishnu/Baraha.",
    },
    {
      q: "What mountain peaks are visible from Khayer Lake?",
      a: "The route offers close views of Annapurna South (7,219m), Dhaulagiri I (8,167m), Nilgiri North, Hiunchuli, and Tukuche Peak.",
    },
    {
      q: "What is the recommended start time for the hike?",
      a: "Depart Khopra Ridge early between 5:30 AM and 6:00 AM. This ensures calm morning winds, clear mountain visibility, and return before afternoon fog.",
    },
    {
      q: "Do I need a guide to hike to Khayer Lake?",
      a: "While technically an out-and-back trail, a local guide is strongly recommended due to high altitude, sparse trail markers, unpredictable weather, and zero mobile coverage.",
    },
    {
      q: "Are there teahouses or food stalls at Khayer Lake?",
      a: "No. There are no teahouses or permanent shops along the route or at 4,660m. Trekkers must carry 2–3L of water and packed energy lunches from Khopra Ridge.",
    },
    {
      q: "Is Khayer Lake worth the strenuous climb?",
      a: "Yes. Trekkers consistently rate Khayer Lake as the highlight of the entire trek due to its pristine alpine solitude, sacred cultural atmosphere, and dramatic Annapurna South views.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/routes/chhistibung-to-khopra-ridge" className="hover:text-emerald-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra Ridge to Khayer Lake</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              High Altitude Day Hike • 4,660m
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge to Sacred Khayer Lake Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete route guide covering round-trip distance (14–16 km), elevation gain (+1,000m to 4,660m), 7–9 hour duration, AMS altitude safety, and sacred Khayer Baraha Temple history.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summarySpecs.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🏔️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified High-Altitude Route Guide</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our licensed guides lead acclimatized day hikes from Khopra Ridge (3,660m) to Sacred Khayer Lake (4,660m) throughout spring and autumn.
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Khopra Ridge to Khayer Lake
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {quickStats.map((stat, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-stone-950 w-1/3 bg-stone-50">{stat.label}</td>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-stone-800">{stat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 1: Route Overview */}
            <div id="route-overview" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed text-base sm:text-lg">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge to Sacred Khayer Lake Trek Overview
              </h2>
              <p className="font-medium text-stone-900">
                If you have made it to Khopra Ridge (3,660m), the day hike to Sacred Khayer Lake (4,660m) is the pinnacle experience. Reaching 4,660 meters, it is the highest elevation point of the entire trek and holds genuine religious importance for local Hindu communities.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Distance &amp; 1,000m Vertical Ascent</h3>
                <p>
                  The round-trip out-and-back trail spans 14 to 16 kilometers. Starting from Khopra Ridge at 3,660m, you climb 1,000 vertical meters up scree and alpine ridge terrain before descending back the same day.
                </p>
                <h3 className="text-lg font-bold text-stone-900">Sacred Pilgrim Site</h3>
                <p>
                  Khayer Lake is home to the sacred Khayer Baraha Temple. During the August Janai Purnima festival, Hindu pilgrims travel from Magar villages below to offer prayers to Lord Vishnu/Baraha.
                </p>
              </div>
            </div>

            {/* Section 2: Regional Route Difficulty Comparison */}
            <div id="difficulty-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Regional Hike Difficulty Comparison
              </h2>
              <p className="text-sm text-stone-600">How Khayer Lake compares to other popular Annapurna day hikes in distance, altitude, and physical effort.</p>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Route</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Terrain Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.difficulty}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.altitude}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.profile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Interactive Seasonal Inspector */}
            <div id="seasonal-inspector" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Seasonal Conditions Inspector
              </h2>
              <p className="text-sm text-stone-600">Select a season to inspect trail terrain, temperatures, and mountain views at 4,660m.</p>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {Object.keys(seasonalGuide).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedSeason(key)}
                      className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                        selectedSeason === key
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200"
                      }`}
                    >
                      {seasonalGuide[key].season}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-stone-100 rounded-2xl space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Scree &amp; Alpine Terrain</span>
                    <p className="text-xs text-stone-800 font-semibold mt-1">{currentSeason.terrain || currentSeason.trail}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Temperature Expectation</span>
                    <p className="text-xs text-stone-700 mt-1">{currentSeason.weather}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Highlight &amp; Cultural Feature</span>
                    <p className="text-xs text-emerald-800 font-bold mt-1">{currentSeason.highlight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Step-by-Step Route Breakdown */}
            <div id="trail-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Step-by-Step Climb Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1 (5:30 AM)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Pre-Dawn Departure Across Exposed Ridge</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Depart Khopra Ridge early (5:30 AM) while high winds are calm and ground is firm. Headlamps illuminate open ridge paths above the treeline.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2 (8:00 AM)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Cross Scree Slopes &amp; Rocky Ridges</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The middle third steepens over loose scree and boulder fields. Trekking poles provide essential balance on both ascent and descent.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3 (11:00 AM)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Arrival at Sacred Khayer Lake (4,660m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Reach the sacred lake basin tucked beneath Annapurna South. Explore Khayer Baraha Temple and rest before the 1:00 PM turnaround cutoff.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 4 (1:00 PM - 4:00 PM)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Descent Back to Khopra Ridge</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Descend 1,000 meters carefully. Scree sections require concentration to prevent ankle sprains when legs are tired.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Altitude Safety & Emergency Planning */}
            <div id="altitude-safety" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Altitude Safety &amp; Emergency Protocols
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">⚠️ AMS Symptoms at 4,660m</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Watch for persistent headache, nausea, extreme dizziness, or breathlessness at rest. Worsening symptoms require immediate descent.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🕒 1:00 PM Turnaround Rule</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Turn back by 1:00 PM regardless of progress. Afternoon fog and high winds build quickly across exposed ridges.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🎒 Essential Pack Supplies</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Carry 2–3L water, electrolyte tablets, energy food, 3 clothing layers, UV sunglasses, and headlamp. No teahouses exist on this route.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🛰️ Guide &amp; Evacuation Support</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Trek with an experienced local guide. Mobile signal is absent; guides carry satellite communication for emergency helicopter coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Sacred Lake Departure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek to Sacred Khayer Lake (4,660m) With Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge &amp; Khayer Lake Trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP permits, TIMS cards, transport from Pokhara, community lodge bookings, and certified mountain guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/tours/khayer-lake-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Tour Package
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#quick-facts" className="block hover:text-emerald-600 transition">
                  • Quick Facts Summary
                </a>
                <a href="#route-overview" className="block hover:text-emerald-600 transition">
                  • Trek Overview
                </a>
                <a href="#difficulty-comparison" className="block hover:text-emerald-600 transition">
                  • Route Comparison
                </a>
                <a href="#seasonal-inspector" className="block hover:text-emerald-600 transition">
                  • Seasonal Inspector
                </a>
                <a href="#trail-breakdown" className="block hover:text-emerald-600 transition">
                  • Step-by-Step Climb
                </a>
                <a href="#altitude-safety" className="block hover:text-emerald-600 transition">
                  • Altitude &amp; Safety
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related High Altitude Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-700 underline">
                      Sacred Khayer Lake Ultimate Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-baraha-temple-guide" className="hover:text-emerald-700 underline">
                      Khayer Baraha Temple History
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khayer-lake-altitude-risks" className="hover:text-emerald-700 underline">
                      Khayer Lake Altitude Safety Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/khopra-ridge-to-swanta-village" className="hover:text-emerald-700 underline">
                      Khopra Ridge to Swanta Descent
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
