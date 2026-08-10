"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedSeason, setSelectedSeason] = useState("autumn");

  const seasonalConditions = {
    spring: {
      season: "🌸 Spring (March–May)",
      trail: "Blooming rhododendron forests lower down; dry, clear switchbacks as you ascend above tree line.",
      weather: "Mild hiking temperatures (10°C to 15°C) during ascent; chilly ridge evenings at 3,660m (0°C to 5°C).",
      view: "Exceptional mountain visibility with blooming flora contrasting against snow-capped Dhaulagiri.",
    },
    autumn: {
      season: "🍂 Autumn (Sept–Nov)",
      trail: "Firm, dry dirt switchbacks providing maximum traction. The best overall season for this climb.",
      weather: "Crisp, transparent atmospheric clarity; cold ridge nights (-4°C to 2°C).",
      view: "Crystal-clear panoramic views of Annapurna South, Machhapuchhre, Nilgiri, and Dhaulagiri.",
    },
    winter: {
      season: "❄️ Winter (Dec–Feb)",
      trail: "Snow accumulation and morning ice patches on upper switchbacks. Requires microspikes or crampons.",
      weather: "Freezing ridge temperatures (-10°C to -2°C). Heavy wind chill above the tree line.",
      view: "Stunning snowbound mountain landscapes with pristine clear morning skies.",
    },
    monsoon: {
      season: "🌧️ Monsoon (June–Aug)",
      trail: "Muddy, slippery switchbacks with high risk of slips on exposed tree roots and clay soils.",
      weather: "Humid conditions with afternoon downpours and thick cloud cover shrouding ridge views.",
      view: "Intermittent cloud openings revealing dramatic mist-enshrouded peaks.",
    },
  };

  const currentSeason = seasonalConditions[selectedSeason];

  const quickStats = [
    { label: "Starting Point", value: "Chhistibung (2,975m / 9,760ft)" },
    { label: "Ending Point", value: "Khopra Ridge (3,660m / 12,007ft)" },
    { label: "Distance", value: "4.5 km (2.8 miles)" },
    { label: "Net Elevation Gain", value: "+685 m (+2,247 ft)" },
    { label: "Average Gradient", value: "~150m Gain per km" },
    { label: "Hiking Duration", value: "3 to 4 Hours" },
    { label: "Difficulty Rating", value: "Moderate-to-Hard" },
    { label: "Overnight Lodge", value: "Khopra Ridge Community Lodge" },
  ];

  const summarySpecs = [
    { label: "Distance", value: "4.5 km" },
    { label: "Elevation Gain", value: "+685m (Khopra 3,660m)" },
    { label: "Hiking Time", value: "3 to 4 Hours" },
    { label: "Route Rating", value: "Toughest Segment of Trek" },
  ];

  const faqs = [
    {
      q: "How difficult is the Chhistibung to Khopra Ridge trek?",
      a: "It is rated moderate-to-hard and is widely considered the toughest single segment of the Khopra Ridge Trek due to a sustained +685m elevation gain over just 4.5 km.",
    },
    {
      q: "How long does it take to hike from Chhistibung to Khopra Ridge?",
      a: "Most trekkers complete the climb in 3 to 4 hours. Beginners or those pacing for altitude should budget 4 to 5 hours with frequent rest stops.",
    },
    {
      q: "What is the elevation gain between Chhistibung and Khopra Ridge?",
      a: "The trail climbs from 2,975m at Chhistibung to 3,660m at Khopra Ridge, gaining roughly 685 meters over 4.5 km (~150m vertical gain per km).",
    },
    {
      q: "Is altitude sickness (AMS) common on Khopra Ridge?",
      a: "Mild AMS symptoms like slight headache or breathlessness can occur due to the rapid ascent above 3,000m. A slow, rhythmic pace and drinking 3L+ of water daily reduce AMS risks.",
    },
    {
      q: "Can beginners hike to Khopra Ridge?",
      a: "Yes. Beginners with reasonable physical fitness can complete this climb by maintaining a slow, steady pace, using trekking poles, and taking regular breather breaks.",
    },
    {
      q: "What mountains can you see from Khopra Ridge?",
      a: "Khopra Ridge offers direct, head-on views of Dhaulagiri (8,167m) and Annapurna South (7,219m), along with Nilgiri, Hiunchuli, and Machhapuchhre.",
    },
    {
      q: "Are there teahouses or lodges at Khopra Ridge?",
      a: "Yes. Accommodation is centered on a single community-owned eco-lodge where 100% of profits fund local Magar village schools and health clinics.",
    },
    {
      q: "Is Khopra Ridge harder than Poon Hill?",
      a: "Yes. Khopra Ridge gains significantly more vertical elevation (+685m vs +300m) over steeper terrain, reaching a much higher final altitude (3,660m vs 3,210m).",
    },
    {
      q: "What is the hardest section of the Khopra Ridge Trek?",
      a: "The climb from Chhistibung to Khopra Ridge is universally recognized as the hardest single physical push on the entire 9-day circuit.",
    },
    {
      q: "When is the best season to hike from Chhistibung to Khopra Ridge?",
      a: "Spring (March–May) and Autumn (September–November) offer the most stable dirt switchbacks, clear skies, and spectacular mountain visibility.",
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
            <Link href="/routes/bayeli-kharka-to-chhistibung" className="hover:text-emerald-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-emerald-400">Chhistibung to Khopra Ridge</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Khopra Ridge Stage 4 • Toughest Climb
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Chhistibung to Khopra Ridge Route Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete climb guide covering distance (4.5 km), elevation gain (+685m to 3,660m), hiking time (3–4 hrs), altitude safety, and community lodge accommodation.
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
                ⛰️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Field Altitude Documentation</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our licensed mountain guides lead monthly climbs up this 685m vertical ascent to Khopra Ridge (3,660m).
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Chhistibung to Khopra Ridge
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
                Chhistibung to Khopra Ridge Trek Overview
              </h2>
              <p className="font-medium text-stone-900">
                Chhistibung sits at 2,975m in alpine forest. From there, the trail climbs almost 700 vertical meters in under 5 kilometers onto the open ridge at Khopra Danda (3,660m). It is universally agreed to be the hardest single physical segment of the entire circuit.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Distance, Duration &amp; Elevation Gain</h3>
                <p>
                  The climb covers 4.5 km (2.8 miles) and takes 3 to 4 hours. In that short distance, you gain roughly 685 meters (+2,247 ft)—an average gain of 150 vertical meters per kilometer.
                </p>
                <h3 className="text-lg font-bold text-stone-900">Starting &amp; Ending Altitude</h3>
                <p>
                  Starting at Chhistibung (2,975m) and ending at Khopra Ridge (3,660m), this jump brings trekkers above the tree line into thinner alpine air with grand panoramas of Dhaulagiri and Annapurna South.
                </p>
              </div>
            </div>

            {/* Section 2: Interactive Seasonal Inspector */}
            <div id="seasonal-inspector" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Seasonal Conditions Inspector
              </h2>
              <p className="text-sm text-stone-600">Select a season to inspect trail switchback footing, weather expectations, and mountain visibility.</p>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {Object.keys(seasonalConditions).map((key) => (
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
                      {seasonalConditions[key].season}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-stone-100 rounded-2xl space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Switchback Trail Footing</span>
                    <p className="text-xs text-stone-800 font-semibold mt-1">{currentSeason.trail}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Temperature &amp; Weather</span>
                    <p className="text-xs text-stone-700 mt-1">{currentSeason.weather}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Mountain View Profile</span>
                    <p className="text-xs text-emerald-800 font-bold mt-1">{currentSeason.view}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Step-by-Step Trail Breakdown */}
            <div id="trail-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Step-by-Step Climb Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1</span>
                  <h3 className="font-bold text-stone-900 text-lg">Leaving Chhistibung Alpine Forest</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The climb begins inside oak and rhododendron forest over root-laced dirt paths. Early morning cool temperatures make this the best time to start.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2</span>
                  <h3 className="font-bold text-stone-900 text-lg">Steep Dirt Switchbacks (~150m Gain/km)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The trail tightens into a continuous series of steep dirt switchbacks. Trekking poles provide essential stability and relieve leg strain.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3</span>
                  <h3 className="font-bold text-stone-900 text-lg">Clearing Tree Line &amp; Wind Exposure</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Tree cover thins into low alpine scrub. Wind exposure increases and temperatures drop noticeably. Add an extra windproof jacket layer here.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 4</span>
                  <h3 className="font-bold text-stone-900 text-lg">Final Approach to Khopra Danda (3,660m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The switchbacks culminate directly on Khopra Ridge. Dhaulagiri (8,167m) and Annapurna South (7,219m) appear suddenly in front of you in an emotional arrival moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Altitude Safety & Community Lodge */}
            <div id="altitude-lodge" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Altitude Safety &amp; Community Lodge Accommodation
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">⚠️ Rapid Altitude Gain Safety</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Gaining 685m in 4.5 km brings you to 3,660m. Maintain a slow, rhythmic breathing pace, drink 3L of water, and report any mild AMS headache immediately.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏫 Community Eco-Lodge Model</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Khopra Ridge features a single community-owned lodge. 100% of accommodation profits directly fund local Magar village schools, clinics, and infrastructure.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🛏️ Rooms &amp; Heating</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Simple twin-share rooms with heavy blankets. The communal dining room is heated by a stove during dinner hours.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏔️ Dhaulagiri &amp; Annapurna Views</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Panoramic 360-degree views of Dhaulagiri I (8,167m), Annapurna South (7,219m), Hiunchuli, and Nilgiri right from the lodge courtyard.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
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
                  Khopra Ridge High Point Departure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Reach Khopra Ridge (3,660m) With Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP permits, TIMS cards, transport from Pokhara, community lodge bookings, and experienced mountain guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/nodes/khopra-ridge-lodge"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Khopra Ridge Lodge Guide
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
                  • Climb Overview
                </a>
                <a href="#seasonal-inspector" className="block hover:text-emerald-600 transition">
                  • Seasonal Switchback Inspector
                </a>
                <a href="#trail-breakdown" className="block hover:text-emerald-600 transition">
                  • Step-by-Step Climb
                </a>
                <a href="#altitude-lodge" className="block hover:text-emerald-600 transition">
                  • Altitude &amp; Community Lodge
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Next Stage Routes</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/routes/khopra-ridge-to-khayer-lake" className="hover:text-emerald-700 underline">
                      Khopra Ridge to Khayer Lake (4,660m)
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/khopra-ridge-lodge" className="hover:text-emerald-700 underline">
                      Khopra Ridge Lodge &amp; Hub Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/khopra-ridge-to-swanta-village" className="hover:text-emerald-700 underline">
                      Khopra Ridge to Swanta Village
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khopra-ridge-elevation" className="hover:text-emerald-700 underline">
                      Khopra Elevation &amp; Altitude Profile
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
