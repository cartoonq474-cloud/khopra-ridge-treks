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
