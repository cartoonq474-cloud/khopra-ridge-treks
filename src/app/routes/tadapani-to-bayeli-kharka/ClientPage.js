"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedSeason, setSelectedSeason] = useState("autumn");

  const seasonalDetails = {
    spring: {
      label: "🌸 Spring (March–May)",
      trail: "Dry, stable trail conditions with blooming rhododendron, oak, and bamboo forest tunnels.",
      weather: "Mild daytime hiking temperatures (12°C to 18°C), cold mornings/nights at Bayeli Kharka (0°C to 5°C).",
      highlight: "Peak floral bloom and active birdlife including Himalayan Monal sightings.",
    },
    autumn: {
      label: "🍂 Autumn (Sept–Nov)",
      trail: "Firm, dry footing across forest paths and ridge meadows.",
      weather: "Crisp, clear atmosphere with minimal cloud cover; cold nights (-2°C to 4°C) at 3,410m.",
      highlight: "Strongest mountain panoramas of Annapurna South, Machhapuchhre, and Dhaulagiri.",
    },
    winter: {
      label: "❄️ Winter (Dec–Feb)",
      trail: "Potentially icy forest sections and snow cover approaching Bayeli Kharka meadow.",
      weather: "Freezing temperatures (-8°C to 2°C). High altitude wind chill above treeline.",
      highlight: "Unmatched trail solitude, clear morning skies, and dramatic snowbound landscapes.",
    },
    monsoon: {
      label: "🌧️ Monsoon (June–Aug)",
      trail: "Slippery mud, wet tree roots, and active forest leeches requiring gaiters.",
      weather: "Humid with heavy afternoon downpours and low cloud obscuring mountain peaks.",
      highlight: "Intensely green alpine foliage and vibrant mountain streams.",
    },
  };

  const currentSeason = seasonalDetails[selectedSeason];

  const quickStats = [
    { label: "Trail Distance", value: "7 to 8 km (4.3 to 5.0 miles)" },
    { label: "Hiking Duration", value: "4 to 6 Hours" },
    { label: "Starting Altitude", value: "~2,630 m (Tadapani)" },
    { label: "Ending Altitude", value: "~3,410 m (Bayeli Kharka)" },
    { label: "Net Elevation Gain", value: "~780 m (+2,559 ft)" },
    { label: "Difficulty Rating", value: "Moderate (Forest & Meadow)" },
    { label: "Overnight Stay", value: "Bayeli Kharka Community Lodge" },
    { label: "Mobile Signal", value: "Weak to Non-Existent" },
  ];

  const summarySpecs = [
    { label: "Distance", value: "7 to 8 km" },
    { label: "Elevation Gain", value: "+780m (Bayeli 3,410m)" },
    { label: "Hiking Time", value: "4 to 6 Hours" },
    { label: "Trail Vibe", value: "Quiet Offbeat Forest Walk" },
  ];

  const faqs = [
    {
      q: "How far is Bayeli Kharka from Tadapani?",
      a: "The distance between Tadapani and Bayeli Kharka is approximately 7 to 8 kilometers (4.3 to 5.0 miles) along a continuous forest trail.",
    },
    {
      q: "How long does it take to trek from Tadapani to Bayeli Kharka?",
      a: "Most trekkers complete the stage in 4 to 6 hours including rest breaks. Faster hikers can finish in 3.5 hours, while slower groups or families should budget up to 6 hours.",
    },
    {
      q: "What is the altitude of Bayeli Kharka?",
      a: "Bayeli Kharka sits at approximately 3,410 meters (11,187 ft) above sea level, roughly 780 meters higher than Tadapani.",
    },
    {
      q: "Is the Tadapani to Bayeli Kharka route difficult?",
      a: "We rate it moderate. It involves a steady, sustained climb through forest and meadow without technical difficulty, but the 780m gain and higher altitude require steady pacing.",
    },
    {
      q: "Can beginners complete this hike?",
      a: "Yes, provided they pace themselves through the middle forest climb. Beginners who have walked earlier days of the trek will have sufficient acclimatization.",
    },
    {
      q: "Are there lodges or teahouses in Bayeli Kharka?",
      a: "Accommodation at Bayeli Kharka is centered on a single community-run lodge rather than multiple competing teahouses, providing basic twin rooms and warm meals.",
    },
    {
      q: "Is there mobile signal in Bayeli Kharka?",
      a: "Mobile signal (NTC/Ncell) is weak to non-existent along most of the forest trail and at Bayeli Kharka itself. Treat this stage as a break from mobile connectivity.",
    },
    {
      q: "What mountains can be seen from Bayeli Kharka?",
      a: "On clear days, the meadow at Bayeli Kharka offers panoramas of Annapurna South (7,219m), Machhapuchhre (6,993m), Hiunchuli (6,441m), and Dhaulagiri (8,167m).",
    },
    {
      q: "What is the best season for this trek?",
      a: "Autumn (September–November) provides the clearest mountain views and dry trails, while Spring (March–May) features blooming rhododendron cloud forests.",
    },
    {
      q: "Do I need a guide for this section of the Khopra Ridge Trek?",
      a: "A guide is not legally required, but trail signage is minimal and mobile coverage is absent. Independent trekkers should carry a downloaded offline GPX track.",
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
            <Link href="/routes/ghandruk-to-tadapani" className="hover:text-emerald-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-emerald-400">Tadapani to Bayeli Kharka</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Khopra Ridge Route Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Tadapani to Bayeli Kharka Route Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete route guide covering distance (7–8 km), elevation gain (+780m), hiking time (4–6 hrs), trail conditions, navigation, and community lodge accommodation.
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
                🌲
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Quiet Forest Route Documentation</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our licensed guides lead small group departures through this quiet offbeat section from Tadapani into Bayeli Kharka&apos;s community lodge.
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Tadapani to Bayeli Kharka
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
                Tadapani to Bayeli Kharka Route Overview
              </h2>
              <p className="font-medium text-stone-900">
                The walk from Tadapani to Bayeli Kharka is where the Khopra Ridge Trek departs from mainstream teahouse circuits. Turning off toward Bayeli Kharka leads immediately into quiet, dense rhododendron, oak, and bamboo cloud forest where trekker crowds fade away.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Distance &amp; Hiking Timing</h3>
                <p>
                  Covering 7 to 8 km, this stage takes 4 to 6 hours of steady walking. The total net elevation gain is approximately 780 meters, climbing from Tadapani (2,630m) to Bayeli Kharka (3,410m).
                </p>
                <h3 className="text-lg font-bold text-stone-900">Where It Fits in the Itinerary</h3>
                <p>
                  This stage sits between Tadapani (reached from Ghandruk) and Chhistibung (the precursor to Khopra Ridge). It is typically Day 2 or 3 of the Khopra Ridge loop.
                </p>
              </div>
            </div>

            {/* Section 2: Interactive Seasonal Inspector */}
            <div id="seasonal-inspector" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Seasonal Conditions Inspector
              </h2>
              <p className="text-sm text-stone-600">Select a trekking season to inspect trail footing, weather expectations, and highlights along this stage.</p>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {Object.keys(seasonalDetails).map((key) => (
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
                      {seasonalDetails[key].label}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-stone-100 rounded-2xl space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Trail Footing &amp; Surface</span>
                    <p className="text-xs text-stone-800 font-semibold mt-1">{currentSeason.trail}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Temperature &amp; Weather</span>
                    <p className="text-xs text-stone-700 mt-1">{currentSeason.weather}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Seasonal Highlight</span>
                    <p className="text-xs text-emerald-800 font-bold mt-1">{currentSeason.highlight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Detailed Trail Breakdown */}
            <div id="trail-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Detailed Stage Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1</span>
                  <h3 className="font-bold text-stone-900 text-lg">Leaving Tadapani into Dense Forest</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Leaving Tadapani, the path enters dense rhododendron and oak forest immediately. Within 20 minutes, the noise of mainstream tea house trails fades completely into birdsong and forest quiet.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2</span>
                  <h3 className="font-bold text-stone-900 text-lg">Middle Forest Ascent &amp; Stream Crossings</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The middle third involves sustained climbing over packed soil, tree roots, and small stream crossings. In spring, blooming rhododendrons form colorful tunnels over the trail.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3</span>
                  <h3 className="font-bold text-stone-900 text-lg">Final Climb to Alpine Grazing Meadow</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The final climb pushes out of tree cover into open alpine pasture land. The openness reveals panoramas of Annapurna South and Machhapuchhre as you reach Bayeli Kharka (3,410m).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Accommodation & Facilities */}
            <div id="accommodation" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Bayeli Kharka Community Lodge &amp; Facilities
              </h2>
              <p className="text-sm sm:text-base text-stone-600">
                Accommodation at Bayeli Kharka is centered on a single community-owned lodge. 100% of profits fund local school teachers and community development.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🛏️ Basic Twin Rooms</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Simple, functional twin-bed rooms with clean mattresses and thick blankets. Shared bathroom facilities are standard.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🍲 Dining &amp; Dal Bhat</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Freshly cooked Dal Bhat, noodle soups, fried rice, and hot tea/coffee. Unlimited Dal Bhat refills provide excellent energy after climbing 780m.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🔋 Charging &amp; Power Banks</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Solar charging for devices is available for a small fee. We recommend carrying a 10,000mAh power bank as a backup.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📶 Mobile Signal &amp; Cash</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Cellular signal is weak to non-existent. Carry sufficient Nepali Cash (NPR) for meals, hot water, and charging.
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
                  Community Eco-Trek Departure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Tadapani to Bayeli Kharka With Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We organize ACAP permits, transport from Pokhara, community lodge bookings, and experienced trail guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/nodes/bayeli-kharka-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Bayeli Kharka Guide
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
                <a href="#seasonal-inspector" className="block hover:text-emerald-600 transition">
                  • Seasonal Conditions
                </a>
                <a href="#trail-breakdown" className="block hover:text-emerald-600 transition">
                  • Detailed Stage Breakdown
                </a>
                <a href="#accommodation" className="block hover:text-emerald-600 transition">
                  • Lodge &amp; Facilities
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Next Stage Routes</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/routes/bayeli-kharka-to-chhistibung" className="hover:text-emerald-700 underline">
                      Bayeli Kharka to Chhistibung Route
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/bayeli-kharka-guide" className="hover:text-emerald-700 underline">
                      Bayeli Kharka Node Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/chhistibung-to-khopra-ridge" className="hover:text-emerald-700 underline">
                      Chhistibung to Khopra Ridge
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Lodge Tourism Guide
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
