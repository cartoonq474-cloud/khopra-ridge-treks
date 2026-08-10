"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedFitness, setSelectedFitness] = useState("average");

  const fitnessPacing = {
    beginner: {
      label: "Beginner / First-Time Hiker",
      time: "6.5 – 7.5 Hours",
      pace: "Slow, deliberate pace with frequent short breaks every 30-45 minutes.",
      advice: "Start by 7:00 AM from Ghandruk. Plan a 1-hour rest stop at Bhaisi Kharka before tackling the final steep ascent.",
    },
    average: {
      label: "Average Fitness (Regular Hiker)",
      time: "5.5 – 6.5 Hours",
      pace: "Steady pace with 15-minute breaks per stage and a 45-minute lunch.",
      advice: "Start by 8:00 AM. Pace yourself through the Kimrong Khola valley dip so legs remain fresh for the final climb.",
    },
    experienced: {
      label: "Experienced / Advanced Hiker",
      time: "4.5 – 5.5 Hours",
      pace: "Brisk continuous pace with minimal stops.",
      advice: "Allows comfortably reaching Tadapani early in the afternoon for optimal mountain photography window before afternoon mist.",
    },
  };

  const selectedPacing = fitnessPacing[selectedFitness];

  const quickStats = [
    { label: "Total Distance", value: "9.5 to 10.5 km (5.9 to 6.5 mi)" },
    { label: "Starting Altitude", value: "Ghandruk, 1,940 m (6,365 ft)" },
    { label: "Ending Altitude", value: "Tadapani, 2,630 m (8,630 ft)" },
    { label: "Net Elevation Gain", value: "+690 m (+2,265 ft)" },
    { label: "Total Ascent (With Dips)", value: "850 to 950 m" },
    { label: "Hiking Duration", value: "5 to 7 Hours" },
    { label: "Difficulty Rating", value: "Moderate" },
    { label: "Best Seasons", value: "March–May, Sept–Nov" },
  ];

  const summarySpecs = [
    { label: "Trail Length", value: "9.5 to 10.5 km" },
    { label: "Net Gain", value: "+690m (Tadapani 2,630m)" },
    { label: "Walking Time", value: "5 to 7 Hours" },
    { label: "Route Difficulty", value: "Moderate (Forest & Steps)" },
  ];

  const faqs = [
    {
      q: "How far is the hike from Ghandruk to Tadapani?",
      a: "The direct trail distance is approximately 9.5 to 10.5 km (5.9 to 6.5 miles), depending on trail switchbacks and route variations above Bhaisi Kharka.",
    },
    {
      q: "How difficult is the Ghandruk to Tadapani trek?",
      a: "We rate it moderate. It does not require technical skill, but the combination of stone staircases, a dip into the Kimrong valley, and a steep final 690m ascent makes it physically demanding.",
    },
    {
      q: "How many hours does it take to reach Tadapani from Ghandruk?",
      a: "Most trekkers take 5 to 7 hours of walking time, plus rest stops. Beginners should budget 6.5 to 7.5 hours, while experienced hikers finish in 4.5 to 5.5 hours.",
    },
    {
      q: "Is the route suitable for beginners?",
      a: "Yes, provided you manage your pace. Beginners should start early (7:00 AM), use trekking poles, and take a substantial rest break at Bhaisi Kharka before the steep final climb.",
    },
    {
      q: "Can children and older trekkers complete this hike?",
      a: "Yes, at a measured pace, usually adding 1 to 2 hours to standard timing. We recommend hiring a porter or guide for family groups to manage gear on steep sections.",
    },
    {
      q: "Are there teahouses available between Ghandruk and Tadapani?",
      a: "Yes. Bhaisi Kharka sits roughly two-thirds along the route offering hot tea, meals, and water refills. Tadapani itself features a cluster of trekker teahouses.",
    },
    {
      q: "What mountains can be seen from Tadapani?",
      a: "Clear morning skies at Tadapani offer close views of Annapurna South (7,219m), Machhapuchhre (Fishtail, 6,993m), and Hiunchuli (6,441m).",
    },
    {
      q: "Is there mobile network coverage on the trail?",
      a: "Mobile signal is available in Ghandruk and Tadapani, but expect patchy or zero coverage through the forested Kimrong Khola valley.",
    },
    {
      q: "Do I need an ACAP permit for this trail?",
      a: "Yes. The trail lies inside the Annapurna Conservation Area. Your ACAP permit is inspected at the official checkpost in Ghandruk.",
    },
    {
      q: "Can I continue toward Annapurna Base Camp from Tadapani?",
      a: "Yes. Tadapani connects directly to Chhomrong, the gateway village leading into the Annapurna Sanctuary toward ABC.",
    },
    {
      q: "Is the trail safe during monsoon season?",
      a: "It is passable but wet, slippery, and subject to leeches in the forest. We recommend waterproof boots, gaiters, and extra caution on wet stone stairs.",
    },
    {
      q: "Is it possible to hike from Ghandruk to Tadapani without a guide?",
      a: "Independent trekking is legal and common on this main trail. However, hiring a local guide ensures reliable route finding, teahouse booking, and emergency support.",
    },
    {
      q: "Where does the trail lead after Tadapani?",
      a: "From Tadapani, trails split three ways: west to Ghorepani/Poon Hill (4-5 hrs), north to ABC via Chhomrong, or north-west toward Dobato, Khopra Ridge, and Khayer Lake.",
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
            <span className="text-emerald-400">Ghandruk to Tadapani</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Annapurna Route Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Ghandruk to Tadapani Route Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete route guide covering distance (9.5–10.5 km), elevation gain (+690m), hiking duration (5–7 hrs), trail conditions, teahouses, and mountain viewpoints.
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
                🥾
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Field Route Documentation</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our licensed guides walk this Ghandruk to Tadapani section regularly across all seasons, leading clients to Poon Hill, ABC, and Khopra Ridge.
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Ghandruk to Tadapani
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
                Ghandruk to Tadapani Trek Overview
              </h2>
              <p className="font-medium text-stone-900">
                The hike from Ghandruk to Tadapani is one of the most walked sections of trail in the Annapurna Conservation Area. It connects one of the region&apos;s iconic Gurung cultural villages to a rhododendron-forested junction that opens the door to Ghorepani, Poon Hill, Annapurna Base Camp, and Khopra Ridge.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Where Ghandruk Is Located</h3>
                <p>
                  Ghandruk sits at 1,940 meters in the Annapurna Conservation Area, roughly a two-hour drive northwest of Pokhara. As one of the largest Gurung settlements in the region, it features slate-paved lanes, terraced farmland, and classic views of Annapurna South and Machhapuchhre.
                </p>
                <h3 className="text-lg font-bold text-stone-900">Where Tadapani Sits</h3>
                <p>
                  Tadapani (&quot;far water&quot; in Nepali) sits at 2,630 meters inside a dense belt of rhododendron and oak forest. It functions primarily as a trekkers&apos; junction with a cluster of teahouses built to serve hikers connecting toward Ghorepani, Chhomrong, or Dobato.
                </p>
              </div>
            </div>

            {/* Section 2: Pacing & Fitness Calculator Widget */}
            <div id="pacing-calculator" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Hiking Time &amp; Pacing Calculator
              </h2>
              <p className="text-sm text-stone-600">Select your fitness background to preview expected hiking duration and pacing advice for this 690m ascent.</p>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {Object.keys(fitnessPacing).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedFitness(key)}
                      className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                        selectedFitness === key
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200"
                      }`}
                    >
                      {fitnessPacing[key].label}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-stone-100 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Estimated Duration</span>
                    <span className="text-base font-extrabold text-emerald-800">{selectedPacing.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Pacing Strategy</span>
                    <p className="text-xs text-stone-700 font-semibold mt-1">{selectedPacing.pace}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Guide Recommendation</span>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1">{selectedPacing.advice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Step-by-Step Trail Breakdown */}
            <div id="trail-stages" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Step-by-Step Trail Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1</span>
                  <h3 className="font-bold text-stone-900 text-lg">Leaving Ghandruk &amp; Descending to Kimrong Khola</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The trail begins with a stone-paved descent past Ghandruk&apos;s terraced farms down to the Kimrong Khola bridge. Take it easy on the knees during this initial downhill section.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2</span>
                  <h3 className="font-bold text-stone-900 text-lg">Climbing Through Oak &amp; Rhododendron Forest</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    After crossing the river, the trail enters dense rhododendron and oak canopy. In spring (March–April), red and pink blooms line the uphill forest path.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3</span>
                  <h3 className="font-bold text-stone-900 text-lg">Resting Stop at Bhaisi Kharka</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Bhaisi Kharka sits roughly two-thirds along the hike, providing small teahouses for lunch, tea, and water refilling before the final steep push.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 4</span>
                  <h3 className="font-bold text-stone-900 text-lg">Final Steep Push Into Tadapani (2,630m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The final climb increases in gradient through thinning trees before arriving at Tadapani&apos;s ridge teahouses, rewarding you with views of Fishtail and Annapurna South.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Seasonal Comparison & Trail Conditions */}
            <div id="seasonal-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Trail Conditions
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🌸 Spring (March–May)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Peak rhododendron bloom creates vibrant forest tunnels. Dry trails, comfortable daytime temperatures, and busy teahouses.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🍂 Autumn (Sept–Nov)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The clearest mountain visibility of the year. Firm footing, crisp morning air, and reliable mountain views of Annapurna South.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🌧️ Monsoon (June–Aug)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Muddy forest paths, frequent rainfall, and forest leeches. Empty trails and lush greenery, requiring gaiters and waterproof gear.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">❄️ Winter (Dec–Feb)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Cold temperatures and light frost/snow near Tadapani. Exceptionally clear morning skies and uncrowded teahouses.
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
                  Annapurna Circuit Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Ghandruk &amp; Tadapani Trek
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP permits, transport from Pokhara, teahouse reservations, and local guides whether you are heading to Khopra Ridge, Poon Hill, or ABC.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/nodes/ghandruk-village-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Ghandruk Village Guide
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
                <a href="#pacing-calculator" className="block hover:text-emerald-600 transition">
                  • Pacing Calculator
                </a>
                <a href="#trail-stages" className="block hover:text-emerald-600 transition">
                  • Step-by-Step Stages
                </a>
                <a href="#seasonal-guide" className="block hover:text-emerald-600 transition">
                  • Seasonal Conditions
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Trail Nodes</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-700 underline">
                      Ghandruk Village Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/tadapani-guide" className="hover:text-emerald-700 underline">
                      Tadapani Node Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/tadapani-to-bayeli-kharka" className="hover:text-emerald-700 underline">
                      Tadapani to Bayeli Kharka Route
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/dobato-guide" className="hover:text-emerald-700 underline">
                      Dobato Viewpoint Guide
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
