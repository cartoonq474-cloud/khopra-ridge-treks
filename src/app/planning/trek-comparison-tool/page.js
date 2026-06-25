"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [selectedTrek, setSelectedTrek] = useState("poonhill");

  const trekData = {
    poonhill: {
      name: "Poon Hill Trek",
      duration: "3 - 4 Days",
      maxAlt: "3,210m",
      difficulty: "Easy to Moderate",
      crowds: "Very High",
      lodges: "Commercial Private Teahouses",
      scenery: "Broad panoramic view of Annapurna & Dhaulagiri range from a distance.",
      social: "Low. Privately owned lodging structures."
    },
    mardihimal: {
      name: "Mardi Himal Trek",
      duration: "4 - 5 Days",
      maxAlt: "4,500m (Upper Viewpoint)",
      difficulty: "Moderate",
      crowds: "Moderate to High",
      lodges: "Private Teahouses",
      scenery: "Spectacular vertical views directly beneath Machhapuchhre (Fishtail peak).",
      social: "Low. Private family business models."
    },
    annapurna_base: {
      name: "Annapurna Base Camp (ABC)",
      duration: "7 - 10 Days",
      difficulty: "Moderate",
      maxAlt: "4,130m",
      crowds: "High",
      lodges: "Commercial Private Teahouses",
      scenery: "Renders you inside a high-altitude sanctuary bowl surrounded by 7,000m+ walls.",
      social: "Moderate. ACAP regulated business zones."
    },
    khopraridge: {
      name: "Khopra Ridge Community Trek",
      duration: "6 - 9 Days",
      maxAlt: "3,660m (Ridge) / 4,660m (Khayer Lake)",
      difficulty: "Challenging",
      crowds: "Very Low",
      lodges: "Community Co-operative Lodges",
      scenery: "Eye-level panoramas of Dhaulagiri, deep valley cloud sheets, sacred turquoise glacial lake.",
      social: "100% community-funded. Directly pays school teacher salaries and village clinics."
    }
  };

  const selectedData = trekData[selectedTrek];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Interactive Tools</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Interactive Trek Comparison Tool
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Compare Khopra Ridge with the most popular Annapurna circuits side-by-side. Choose a route below to compare duration, crowd indexes, and social impact parameters.
          </p>
        </div>

        {/* Matrix Controls */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          
          {/* Sidebar selector */}
          <div className="md:col-span-1 p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-stone-950 uppercase tracking-wider">Select Route to Compare</h3>
            <div className="flex flex-col gap-2">
              {Object.keys(trekData).map((key) => (
                <button
                  key={key}
                  onClick={() =>setSelectedTrek(key)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-xs transition-all ${
                    selectedTrek === key 
                      ? "bg-emerald-600 text-white shadow-sm" 
                      : "bg-stone-50 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {trekData[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix side-by-side display */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Header comparison card */}
            <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <h3 className="text-xl font-black text-stone-950">{selectedData.name}</h3>
                <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  {selectedData.difficulty}
                </span>
              </div>

              {/* Data grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-stone-50 rounded-2xl">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Duration</span>
                  <span className="mt-1 block font-bold text-stone-900">{selectedData.duration}</span>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Max Elevation</span>
                  <span className="mt-1 block font-bold text-stone-900">{selectedData.maxAlt}</span>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Crowd Levels</span>
                  <span className="mt-1 block font-bold text-stone-900">{selectedData.crowds}</span>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Lodge Framework</span>
                  <span className="mt-1 block font-bold text-stone-900">{selectedData.lodges}</span>
                </div>
              </div>

              {/* Detail content */}
              <div className="space-y-4 pt-4 border-t border-stone-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Scenery &amp; Vistas</span>
                  <p className="mt-1 text-stone-600 leading-relaxed">{selectedData.scenery}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Social &amp; Economic Impact</span>
                  <p className="mt-1 text-stone-600 leading-relaxed">{selectedData.social}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We lead tours on all major Annapurna circuits and regularly update our data matrix to ensure transparent and objective planning indicators.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Customize Your Route Itinerary</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to combine viewpoints, customize routes, or adjust duration? Get in touch with our Pokhara planning team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
