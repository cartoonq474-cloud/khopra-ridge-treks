"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedSeason, setSelectedSeason] = useState("autumn");

  const seasonalConditions = {
    spring: {
      season: "🌸 Spring (March–May)",
      trail: "Dry forest switchbacks and vibrant rhododendron blooms in pink and red across the middle elevation zone.",
      weather: "Warm hiking temperatures (12°C to 18°C) as you descend into Swanta; pleasant afternoons.",
      highlight: "Beautiful rhododendron forest canopy and comfortable conditions for descending.",
    },
    autumn: {
      season: "🍂 Autumn (Sept–Nov)",
      trail: "Firm dirt paths and dry rocky steps providing optimal traction for downhill hiking.",
      weather: "Clear skies and moderate temperatures (10°C to 16°C). Unobstructed morning mountain views.",
      highlight: "Peak season window with stable footing, clear Dhaulagiri views off the upper ridge, and pleasant village stays.",
    },
    winter: {
      season: "❄️ Winter (Dec–Feb)",
      trail: "Cold morning frost on upper ridge paths; dry, clear lower trails entering Swanta Valley.",
      weather: "Chilly ridge temperatures (-4°C to 2°C) warming up to 10°C in Swanta Village.",
      highlight: "Quiet, peaceful trails with fewer trekkers and crisp winter air.",
    },
    monsoon: {
      season: "🌧️ Monsoon (June–Aug)",
      trail: "Slippery mud on forest switchbacks, wet tree roots, and higher stream levels at crossings.",
      weather: "Humid and damp with afternoon rain showers.",
      highlight: "Lush green terraced fields in Swanta and active local farming culture.",
    },
  };

  const currentSeason = seasonalConditions[selectedSeason];

  const quickStats = [
    { label: "Starting Point", value: "Khopra Ridge (3,660 m / 12,007 ft)" },
    { label: "Ending Point", value: "Swanta Village (2,200 m / 7,217 ft)" },
    { label: "Distance", value: "9.5 km (5.9 miles) one way" },
    { label: "Total Elevation Loss", value: "-1,460 m (-4,790 ft)" },
    { label: "Hiking Time", value: "5 to 6 hours" },
    { label: "Difficulty Rating", value: "Moderate to Challenging (Descent-Heavy)" },
    { label: "Terrain Profile", value: "Alpine scrub, rhododendron forest, streams, terraces" },
    { label: "Accommodation", value: "Community-run lodges in Swanta" },
  ];

  const summarySpecs = [
    { label: "Distance", value: "9.5 km" },
    { label: "Elevation Loss", value: "-1,460m (Swanta 2,200m)" },
    { label: "Hiking Time", value: "5 to 6 Hours" },
    { label: "Route Rating", value: "Steep Descent Push" },
  ];

  const faqs = [
    {
      q: "How far is Khopra Ridge from Swanta Village?",
      a: "The trekking distance from Khopra Ridge to Swanta Village is approximately 9.5 kilometers (5.9 miles) one way along the descent trail.",
    },
    {
      q: "How long does it take to trek from Khopra Ridge to Swanta?",
      a: "Most trekkers take 5 to 6 hours of steady walking time. Slower trekkers or families should budget 6 to 7 hours to avoid rushing the downhill sections.",
    },
    {
      q: "Is the Khopra Ridge to Swanta Village route difficult?",
      a: "It is rated moderate to challenging. While not technically difficult or high-altitude, losing 1,460 meters of vertical elevation over 9.5 km creates sustained eccentric strain on knees and quads.",
    },
    {
      q: "How much elevation do you lose on this trek?",
      a: "You start at approximately 3,660m on Khopra Ridge and finish at 2,200m in Swanta Village—a net loss of roughly 1,460 vertical meters.",
    },
    {
      q: "Are trekking poles necessary for the descent?",
      a: "Trekking poles are highly recommended. They reduce impact on knee joints by up to 25–30% on sustained steep downhills.",
    },
    {
      q: "Is the trail easy to follow without a guide?",
      a: "The upper trail is fairly clear, but trail markings become less frequent in the middle rhododendron forest where local herding paths intersect. Carrying a downloaded GPX map is strongly advised.",
    },
    {
      q: "Can I download a GPX route for this section?",
      a: "Yes. Downloading offline maps on apps like Maps.me or Organic Maps before departing Khopra Ridge is recommended due to lack of cell coverage.",
    },
    {
      q: "Can beginners complete this section of the trek?",
      a: "Yes, beginners with reasonable fitness can complete it by pacing themselves, taking hourly breaks, and using trekking poles to manage knee strain.",
    },
    {
      q: "Is the route safe during monsoon season?",
      a: "The trail is accessible year-round, but monsoon rain (June–August) makes forest switchbacks slippery and stream crossings higher. Trekking poles and waterproof boots are essential.",
    },
    {
      q: "Is there mobile network coverage on the trail?",
      a: "Mobile signal is patchy to non-existent through the forested middle section, picking up slightly as you enter Swanta Village.",
    },
    {
      q: "What accommodation is available in Swanta Village?",
      a: "Swanta offers community-run lodges managed cooperatively by local Magar families, providing simple twin rooms, home-cooked Dal bhat, and hot showers.",
    },
    {
      q: "Should I hire a guide for this route?",
      a: "Hiring a local guide is strongly recommended for first-time trekkers or solo hikers to navigate forest junctions safely and assist if knee fatigue sets in.",
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
            <Link href="/routes/khopra-ridge-to-khayer-lake" className="hover:text-emerald-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra Ridge to Swanta Village</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Khopra Ridge Stage 5 • 1,460m Descent
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge to Swanta Village Route Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete route guide covering 9.5 km distance, 1,460m elevation loss (3,660m to 2,200m), 5–6 hour duration, knee safety tips, and Swanta community lodges.
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
                🏡
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Field Route Documentation</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our mountain guides lead this 1,460m descent stage into Swanta Village monthly, ensuring up-to-date trail condition checks.
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Khopra Ridge to Swanta Village
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
                Khopra Ridge to Swanta Village Trek Overview
              </h2>
              <p className="font-medium text-stone-900">
                After exploring the high alpine ridge, the route drops off Khopra Danda into thick rhododendron forest before emerging at Swanta Village (2,200m). While easy on lungs, this stage tests legs with a continuous 1,460-meter downhill drop over 9.5 km.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Distance &amp; 1,460m Vertical Drop</h3>
                <p>
                  Covering 9.5 km in 5 to 6 hours, you lose 1,460 meters of vertical altitude. There are very few uphill sections to break up the descent, making eccentric quad control essential.
                </p>
                <h3 className="text-lg font-bold text-stone-900">Swanta Village Magar Community</h3>
                <p>
                  Swanta is an authentic Magar agricultural village where tourism operates under a cooperative community lodge model. Overnight stays directly support village schools and healthcare.
                </p>
              </div>
            </div>

            {/* Section 2: Interactive Seasonal Inspector */}
            <div id="seasonal-inspector" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Seasonal Conditions Inspector
              </h2>
              <p className="text-sm text-stone-600">Select a season to inspect forest trail footing, temperatures, and village agricultural views.</p>

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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Forest Descent Trail Footing</span>
                    <p className="text-xs text-stone-800 font-semibold mt-1">{currentSeason.trail}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Temperature &amp; Weather</span>
                    <p className="text-xs text-stone-700 mt-1">{currentSeason.weather}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Scenic &amp; Cultural Highlight</span>
                    <p className="text-xs text-emerald-800 font-bold mt-1">{currentSeason.highlight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Step-by-Step Trail Breakdown */}
            <div id="trail-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Step-by-Step Descent Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1</span>
                  <h3 className="font-bold text-stone-900 text-lg">Leaving Open Alpine Ridgeline (3,660m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Take final looks back at Dhaulagiri and Annapurna South before the path tips downward off the ridge line into open alpine scrub.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2</span>
                  <h3 className="font-bold text-stone-900 text-lg">Rhododendron &amp; Oak Forest Switchbacks</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The longest section switches back continuously through dense forest. Shaded, root-laced dirt paths require steady foot placement.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3</span>
                  <h3 className="font-bold text-stone-900 text-lg">Stream Crossings &amp; Rocky Trails</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Cross small mountain streams over wooden logs and stone bridges. Path becomes rockier; use trekking poles to maintain balance.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 4</span>
                  <h3 className="font-bold text-stone-900 text-lg">Terraced Farmland into Swanta Village (2,200m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The gradient flattens as forest gives way to terraced barley and potato fields. Arrive at Swanta&#x27;s quiet community lodges.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Knee Safety & Community Tourism */}
            <div id="knee-community" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Knee Protection &amp; Community Tourism in Swanta
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🦵 Knee Protection Strategy</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Use dual trekking poles, keep knees slightly bent rather than locked, and take short, controlled steps on steep forest switchbacks.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏫 Community Eco-Lodge Model</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Swanta lodges are cooperatively managed by local Magar villagers. Accommodation revenue directly supports the village school and health post.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🗺️ GPS &amp; Offline Navigation</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Cell signal is absent in the middle forest. Download offline GPX maps (Maps.me or Organic Maps) before leaving Khopra Ridge.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🍲 Local Magar Hospitality</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Enjoy authentic home-cooked Dal bhat, fresh organic vegetables, hot showers, and warm Magar village hospitality in Swanta.
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
                  Swanta Village Route Departure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge &amp; Swanta Village With Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP permits, TIMS cards, transport from Pokhara, community lodge bookings, and certified mountain guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/nodes/swanta-village-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Swanta Village Guide
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
                  • Route Overview
                </a>
                <a href="#seasonal-inspector" className="block hover:text-emerald-600 transition">
                  • Seasonal Inspector
                </a>
                <a href="#trail-breakdown" className="block hover:text-emerald-600 transition">
                  • Step-by-Step Descent
                </a>
                <a href="#knee-community" className="block hover:text-emerald-600 transition">
                  • Knee Protection &amp; Swanta
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Next Stage Routes</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/routes/swanta-village-to-ghorepani" className="hover:text-emerald-700 underline">
                      Swanta Village to Ghorepani Route
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/swanta-village-guide" className="hover:text-emerald-700 underline">
                      Swanta Village Hub &amp; Lodge Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/swanta-village-lodge-guide" className="hover:text-emerald-700 underline">
                      Swanta Lodge &amp; Accommodation
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
