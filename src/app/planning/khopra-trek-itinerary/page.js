"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("all");

  const itineraries = [
    {
      id: "9day",
      duration: "9 Days",
      title: "Core Community Route",
      distance: "68 km / 42.2 mi",
      elevation: "4,660m / 15,288ft",
      difficulty: "Challenging",
      desc: "Our primary, recommended itinerary. Starts in Kathmandu, includes flights, private transfers, and a full day hike to the sacred alpine temple of Khayer Lake.",
      tag: "Recommended",
      href: "/#itinerary",
      features: [
        "Inbound/Outbound Kathmandu flights",
        "Full day side-trip to Khayer Lake (4,660m)",
        "Includes Tadapani, Bayeli, Chhistibung, Swanta & Ghorepani",
        "Maximizes acclimatization safety"
      ]
    },
    {
      id: "7day",
      duration: "7 Days",
      title: "Express Loop Route",
      distance: "58 km / 36.0 mi",
      elevation: "4,660m / 15,288ft",
      difficulty: "Challenging",
      desc: "Optimized for fit hikers with limited time. Skips Kathmandu airport transfers and flights, starting and ending directly in Pokhara while retaining the sacred lake side-trip.",
      tag: "Popular",
      href: "/planning/7-day-khopra-trek",
      features: [
        "Starts and ends in Pokhara",
        "Includes Khayer Lake side-trip (4,660m)",
        "Rejoins main route via Swanta & Ghorepani",
        "Demanding vertical ascent profile"
      ]
    },
    {
      id: "5day",
      duration: "5 Days",
      title: "Rapid Ridge Circle",
      distance: "48 km / 29.8 mi",
      elevation: "3,660m / 12,007ft",
      difficulty: "Moderate",
      desc: "A fast-paced wilderness escape. Skips the sacred lake hike entirely, making this route easier on the legs and ideal for hikers looking to avoid extreme elevations.",
      tag: "Short Duration",
      href: "/planning/5-day-khopra-trek",
      features: [
        "Direct ridge climb (3,660m max elevation)",
        "Skips the challenging 4,660m lake ascent",
        "Experience community lodges & local culture",
        "Perfect for tight travel slots"
      ]
    }
  ];

  const filteredItineraries = activeTab === "all" 
    ? itineraries 
    : itineraries.filter(item => item.difficulty.toLowerCase() === activeTab);

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Planning Resource</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Compare Khopra Trek Itinerary Options
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Review the breakdown of our core 9-day, express 7-day, and rapid 5-day itineraries to find the layout that fits your travel style.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-12 flex justify-center gap-2 bg-stone-100 p-1 rounded-2xl max-w-md mx-auto border border-stone-200">
          {["all", "moderate", "challenging"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition uppercase tracking-wider cursor-pointer ${
                activeTab === tab 
                  ? "bg-white text-stone-950 shadow-sm border border-stone-200/50" 
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Itinerary Showcase Grid */}
        <div className="mt-12 space-y-8">
          {filteredItineraries.map((it) => (
            <div 
              key={it.id} 
              className="group rounded-3xl bg-white border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Badge Tag */}
              <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase ${
                it.tag === "Recommended" 
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-500/10"
                  : "bg-stone-100 text-stone-600 border border-stone-200"
              }`}>
                {it.tag}
              </span>

              {/* Title & Info */}
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{it.duration}</span>
                <h3 className="text-2xl font-black text-stone-950 mt-1">{it.title}</h3>
                
                {/* Stats Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-y border-stone-100 py-3 text-center text-xs">
                  <div>
                    <span className="block text-stone-400 font-semibold uppercase tracking-wider text-[9px]">Distance</span>
                    <strong className="block text-stone-800 mt-0.5">{it.distance}</strong>
                  </div>
                  <div>
                    <span className="block text-stone-400 font-semibold uppercase tracking-wider text-[9px]">Max Altitude</span>
                    <strong className="block text-stone-800 mt-0.5">{it.elevation}</strong>
                  </div>
                  <div>
                    <span className="block text-stone-400 font-semibold uppercase tracking-wider text-[9px]">Difficulty</span>
                    <strong className="block text-stone-800 mt-0.5">{it.difficulty}</strong>
                  </div>
                </div>

                <p className="mt-6 text-stone-600 text-sm leading-relaxed">{it.desc}</p>

                {/* Features list */}
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {it.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-stone-600">
                      <span className="h-5 w-5 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-400">Customizable itinerary layout</span>
                <Link
                  href={it.href}
                  className="rounded-full bg-stone-950 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                >
                  View Full Details
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Route Variations Directory */}
        <div className="mt-16 pt-12 border-t border-stone-250">
          <h2 className="text-2xl font-black text-stone-950">Explore Route Variations & Resources</h2>
          <p className="mt-3 text-sm text-stone-500 leading-relaxed">
            Select an option below to explore specific duration outlines, trailhead variation advantages, and topographic mapping.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Durations */}
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="text-sm font-extrabold text-stone-950 uppercase tracking-wider mb-4 text-emerald-700">Itinerary Durations</h4>
              <ul className="space-y-3 text-xs font-semibold text-stone-600">
                <li>
                  <Link href="/planning/5-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>5-Day Express Route</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/6-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>6-Day High Intensity</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/7-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>7-Day Express Loop</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/8-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>8-Day Wilderness Path</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/10-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>10-Day Deep Culture</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/12-day-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>12-Day Grand Loop</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trailheads */}
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="text-sm font-extrabold text-stone-950 uppercase tracking-wider mb-4 text-emerald-700">Trailhead Entry Points</h4>
              <ul className="space-y-3 text-xs font-semibold text-stone-600">
                <li>
                  <Link href="/planning/khopra-trek-via-ghandruk" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Via Ghandruk Heritage</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-via-ghorepani" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Via Ghorepani Gateway</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-via-poon-hill" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Via Poon Hill Sunrise</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-via-mohare-danda" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Via Mohare Danda Ridge</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-loop-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Complete Circuit Loop</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-with-khayer-lake" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>With Khayer Lake Side-Trip</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-from-pokhara" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Starting from Pokhara</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Map & Specs */}
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="text-sm font-extrabold text-stone-950 uppercase tracking-wider mb-4 text-emerald-700">Route Intelligence</h4>
              <ul className="space-y-3 text-xs font-semibold text-stone-600">
                <li>
                  <Link href="/planning/khopra-trek-map" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Interactive Route Map</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-distance-guide" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Distance & Segments</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/khopra-trek-route-overview" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Route Overview Details</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/planning/highest-point-on-khopra-trek" className="hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>Highest Point & Altitude Safety</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* E-E-A-T EVIDENCE BAR */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We update itinerary durations based on trekking records and seasonal weather trends. ACAP checkpoints monitor all groups using these itineraries for safety registries.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
