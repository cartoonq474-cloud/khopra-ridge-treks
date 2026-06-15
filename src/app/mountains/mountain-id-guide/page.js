"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const peaks = [
    {
      name: "Dhaulagiri I",
      height: "8,167 m (26,795 ft)",
      profile: "Massive, white pyramid peak dominating the western horizon. Seventh highest mountain in the world.",
      visibleFrom: "Khopra Ridge, Muldai Viewpoint, Poon Hill."
    },
    {
      name: "Annapurna South",
      height: "7,219 m (23,684 ft)",
      profile: "Towering snow wall rising directly behind the community lodge at Khopra Ridge.",
      visibleFrom: "Every node along the trail (dominates the backdrop)."
    },
    {
      name: "Nilgiri (Nilgiri North)",
      height: "7,061 m (23,166 ft)",
      profile: "Prominent jagged peak situated between Dhaulagiri and Annapurna South.",
      visibleFrom: "Khopra Ridge, Chhistibung, Bayeli."
    },
    {
      name: "Machhapuchhre (Fishtail)",
      height: "6,993 m (22,943 ft)",
      profile: "Double-pointed, sacred peak resembling a fish tail. Closed to climbing.",
      visibleFrom: "Ghandruk, Tadapani, Dobato, Muldai Viewpoint."
    },
    {
      name: "Hiunchuli",
      height: "6,441 m (21,132 ft)",
      profile: "A steep, glaciated peak flanking Annapurna South on the eastern side.",
      visibleFrom: "Ghandruk, Tadapani, Dobato."
    }
  ];

  const [filter, setFilter] = useState("all");

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Himalayan Mountain Identification Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Identify the peaks. A visual profile guide mapping peak heights, shapes, and viewpoints for Dhaulagiri, Annapurna South, Nilgiri, and Machhapuchhre.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex gap-4 text-xs font-bold">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border transition ${filter === "all" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"}`}
          >
            All Peaks
          </button>
          <button 
            onClick={() => setFilter("8000m")}
            className={`px-4 py-2 rounded-full border transition ${filter === "8000m" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"}`}
          >
            8,000m+ Peaks
          </button>
        </div>

        {/* Mountain Profiles */}
        <div className="mt-12 space-y-6">
          {peaks
            .filter(peak => filter === "all" || (filter === "8000m" && peak.height.includes("8,")))
            .map((peak, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h3 className="font-extrabold text-stone-950 text-xl">{peak.name}</h3>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {peak.height}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Peak Profile:</strong> {peak.profile}</p>
                  <p><strong>Primary Viewpoints:</strong> {peak.visibleFrom}</p>
                </div>
              </div>
            ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile data from topographic records of the Survey Department of Nepal. Our guides carry mountain identification charts for clients.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Mountain-View Guided Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to trek with a licensed guide who knows every peak and viewpoint? Secure your permit-inclusive booking packages with our local team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book Your Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
