"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedPace, setSelectedPace] = useState("average");

  const pacingGuide = {
    fast: {
      label: "Fast / Experienced Hiker",
      time: "3.5 – 4.0 Hours",
      details: "Brisk pace through the bamboo forest descent with quick 5-minute breather stops.",
      tip: "Start by 8:00 AM from Bayeli Kharka to reach Chhistibung around noon for early lunch.",
    },
    average: {
      label: "Average Trekker Pace",
      time: "4.0 – 5.0 Hours",
      details: "Steady descent with 15-minute breaks at stream crossings and wildlife viewing stops.",
      tip: "Start by 7:30 AM. Keep camera accessible for langur monkey and monal bird sightings in the canopy.",
    },
    slower: {
      label: "Slower Pace / Photography / Families",
      time: "5.0 – 6.0 Hours",
      details: "Deliberate foot placement on wet roots and stone steps with frequent breaks.",
      tip: "Use trekking poles to protect knees during the long 500m descent into the valley floor.",
    },
  };

  const currentPace = pacingGuide[selectedPace];

  const quickStats = [
    { label: "Route Distance", value: "8 to 9 km (5.0 to 5.6 miles)" },
    { label: "Hiking Duration", value: "4 to 5 Hours" },
    { label: "Starting Altitude", value: "~3,450 m (Bayeli Kharka)" },
    { label: "Ending Altitude", value: "~2,940 m (Chhistibung)" },
    { label: "Net Elevation Change", value: "-510 m (Descent + Re-ascent)" },
    { label: "Difficulty Rating", value: "Moderate" },
    { label: "Key Wildlife Sightings", value: "Himalayan Langur & Monal Bird" },
    { label: "Mobile Signal", value: "Minimal to Non-Existent" },
  ];

  const summarySpecs = [
    { label: "Distance", value: "8 to 9 km" },
    { label: "Net Elevation", value: "-510m (Chhistibung 2,940m)" },
    { label: "Hiking Time", value: "4 to 5 Hours" },
    { label: "Key Highlight", value: "Bamboo Forest & Wildlife" },
  ];

  const faqs = [
    {
      q: "How far is Bayeli Kharka from Chhistibung?",
      a: "The route covers approximately 8 to 9 kilometers (5.0 to 5.6 miles). Though mostly downhill, the descent and final re-climb make it feel longer than a flat 8km walk.",
    },
    {
      q: "How long does it take to hike from Bayeli Kharka to Chhistibung?",
      a: "Most trekkers complete this stage in 4 to 5 hours. Experienced hikers finish in 3.5 to 4 hours, while beginners or photography enthusiasts take 5 to 6 hours.",
    },
    {
      q: "Is the Bayeli Kharka to Chhistibung route difficult?",
      a: "It is rated moderate. There is no technical climbing, but the long forest descent over tree roots followed by a steep final climb into Chhistibung tests knee endurance.",
    },
    {
      q: "Can beginners complete this trek?",
      a: "Yes. Reasonably fit beginners can complete this stage comfortably. Using trekking poles during the forest descent is strongly recommended to reduce knee strain.",
    },
    {
      q: "Are there teahouses or lodges in Chhistibung?",
      a: "Yes. Chhistibung features a small cluster of community-run lodges offering simple twin rooms, fresh dal bhat, and basic charging facilities.",
    },
    {
      q: "Is there a GPX map for the route?",
      a: "Yes. Downloading an offline GPX track before leaving Bayeli Kharka is recommended, as forest trails have minimal signage and mobile coverage is absent.",
    },
    {
      q: "Can I trek independently without a guide?",
      a: "Independent trekking is possible in clear weather, but dense forest sections and patchy mobile signal lead many trekkers to hire a local guide for safety.",
    },
    {
      q: "What wildlife can I see on this trail?",
      a: "Himalayan Langur monkeys and the colorful Himalayan Monal (Danphe, Nepal's national bird) are frequently spotted in the early morning bamboo canopy.",
    },
    {
      q: "What permits do I need for the Khopra Ridge Trek?",
      a: "You need an Annapurna Conservation Area Permit (ACAP) and a TIMS Card, both checked at official checkposts along the circuit.",
    },
    {
      q: "Is the route safe during monsoon season?",
      a: "It remains passable, but expect muddy descent paths, slippery tree roots, and active forest leeches. Gaiters and waterproof boots are essential during monsoon.",
    },
    {
      q: "Is there mobile network coverage on the trail?",
      a: "Mobile signal is minimal to nonexistent for most of the forest route between Bayeli Kharka and Chhistibung, improving slightly near the Chhistibung lodges.",
    },
    {
      q: "What is the best season for this trek?",
      a: "Spring (March–May) and Autumn (October–November) offer dry trails, clear weather, and prime wildlife watching opportunities.",
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
            <Link href="/routes/tadapani-to-bayeli-kharka" className="hover:text-emerald-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-emerald-400">Bayeli Kharka to Chhistibung</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Khopra Ridge Stage 3
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Bayeli Kharka to Chhistibung Route Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete route guide covering distance (8–9 km), elevation profile (~3,450m to ~2,940m), hiking time (4–5 hrs), bamboo forest terrain, wildlife sightings, and lodge accommodations.
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
                🦚
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Bamboo Forest Route Documentation</h4>
                <p>
                  Maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our licensed guides lead regular departures down this quiet wildlife-rich stage from Bayeli Kharka to Chhistibung.
                </p>
              </div>
            </div>

            {/* Quick Facts Table */}
            <div id="quick-facts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Route Summary: Bayeli Kharka to Chhistibung
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
                Bayeli Kharka to Chhistibung Trek Overview
              </h2>
              <p className="font-medium text-stone-900">
                While most trekkers research Khopra Ridge for panoramic views, the stage from Bayeli Kharka to Chhistibung offers an immersive forest experience. Dropping through bamboo and oak canopies before climbing back to Chhistibung, it is the best wildlife stage on the circuit.
              </p>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-stone-900">Distance &amp; Net Elevation Profile</h3>
                <p>
                  Covering roughly 8 to 9 km, the trail drops from Bayeli Kharka (3,450m) into the valley floor before climbing back up to Chhistibung (2,940m). The net loss is roughly 510m, but the total descent and re-climb require effort comparable to a 12 km flat walk.
                </p>
                <h3 className="text-lg font-bold text-stone-900">Where It Fits in the Itinerary</h3>
                <p>
                  This stage sits between Bayeli Kharka and Chhistibung, directly preceding the steep climb up to Khopra Ridge (3,660m) the following day.
                </p>
              </div>
            </div>

            {/* Section 2: Interactive Pacing & Timing Calculator */}
            <div id="pacing-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Hiking Pace &amp; Duration Guide
              </h2>
              <p className="text-sm text-stone-600">Select your trekking pace to inspect estimated duration and guide recommendations for this forest descent.</p>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {Object.keys(pacingGuide).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPace(key)}
                      className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                        selectedPace === key
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200"
                      }`}
                    >
                      {pacingGuide[key].label}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-stone-100 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Estimated Duration</span>
                    <span className="text-base font-extrabold text-emerald-800">{currentPace.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Pacing Details</span>
                    <p className="text-xs text-stone-800 font-semibold mt-1">{currentPace.details}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Local Guide Advice</span>
                    <p className="text-xs text-stone-600 mt-1">{currentPace.tip}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Detailed Trail Breakdown */}
            <div id="trail-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Step-by-Step Stage Breakdown
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 1 (1 km)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Leaving Bayeli Kharka &amp; Entering Canopy</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The path leaves open pasture land and enters dense forest canopy. The air cools noticeably as trees enclose the trail.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 2 (4–5 km)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Descending Through Bamboo &amp; Oak Forest</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The longest section drops continuously through bamboo groves and oak woods over exposed tree roots and soil steps. Trekking poles prevent knee strain.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 3 (1 km)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Valley Floor &amp; Seasonal Stream Crossings</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    At the lowest point, the trail crosses small mountain streams over stepping stones—a prime spot for rest and water filtration.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Stage 4 (2–3 km)</span>
                  <h3 className="font-bold text-stone-900 text-lg">Final Uphill Push to Chhistibung (2,940m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The trail turns upward for a moderate final climb. Tree cover thins as you reach Chhistibung&apos;s community lodges nestled in the forest clearing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Wildlife & Ecosystems */}
            <div id="wildlife" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Wildlife &amp; Forest Ecosystems
              </h2>
              <p className="text-sm sm:text-base text-stone-600">
                Because this stage sees far less foot traffic than Poon Hill, wildlife encounters are significantly higher.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🐒 Himalayan Langur Monkeys</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Frequently spotted foraging in early morning oak canopies. Listen for branch movement and vocalizations along the descent.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🦚 Himalayan Monal (Danphe)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Nepal&apos;s national bird inhabits these quiet bamboo woods. Early morning hikers regularly spot their iridescent multi-colored plumage.
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
                  Khopra Ridge Stage 3 Departure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Bayeli Kharka to Chhistibung With Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP permits, TIMS cards, transport from Pokhara, community lodge bookings, and experienced trail guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/nodes/chhistibung-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Chhistibung Node Guide
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
                <a href="#pacing-guide" className="block hover:text-emerald-600 transition">
                  • Hiking Pace Guide
                </a>
                <a href="#trail-breakdown" className="block hover:text-emerald-600 transition">
                  • Step-by-Step Breakdown
                </a>
                <a href="#wildlife" className="block hover:text-emerald-600 transition">
                  • Wildlife &amp; Ecosystems
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Next Stage Routes</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/routes/chhistibung-to-khopra-ridge" className="hover:text-emerald-700 underline">
                      Chhistibung to Khopra Ridge Route
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/chhistibung-guide" className="hover:text-emerald-700 underline">
                      Chhistibung Node Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/khopra-ridge-to-khayer-lake" className="hover:text-emerald-700 underline">
                      Khopra Ridge to Khayer Lake
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Khopra Wildlife &amp; Bird Guide
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
