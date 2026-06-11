"use client";

import React, { useState } from "react";

export default function Page() {
  const [selectedPreference, setSelectedPreference] = useState("all");

  const comparisonData = [
    {
      feature: "Altitude",
      khopra: "3,660 m (up to 4,660 m at Khayer Lake)",
      poonhill: "3,210 m",
      winner: "Khopra Ridge (Higher altitude/proximity)"
    },
    {
      feature: "Crowd Density",
      khopra: "Very low. Peaceful, remote trails.",
      poonhill: "Extremely high. Up to 500+ hikers at sunrise.",
      winner: "Khopra Ridge (Quiet experience)"
    },
    {
      feature: "Peak Proximity",
      khopra: "Direct face-to-face proximity to Dhaulagiri and Annapurna South.",
      poonhill: "Panoramic but distant mountain horizon view.",
      winner: "Khopra Ridge (Closer views)"
    },
    {
      feature: "Lodging Style",
      khopra: "Community-owned lodges supporting local Magar villages.",
      poonhill: "Commercial, privately-owned teahouses.",
      winner: "Khopra Ridge (Sustainable / EEAT)"
    },
    {
      feature: "Difficulty & Ascent",
      khopra: "Moderate to Strenuous. Requires steady steep climbing.",
      poonhill: "Easy to Moderate. Stone staircases, very accessible.",
      winner: "Poon Hill (For beginners/families)"
    }
  ];

  const getFilteredData = () => {
    if (selectedPreference === "easy") {
      return comparisonData.filter(d => d.feature === "Difficulty & Ascent" || d.feature === "Altitude");
    }
    if (selectedPreference === "views") {
      return comparisonData.filter(d => d.feature === "Peak Proximity" || d.feature === "Altitude" || d.feature === "Crowd Density");
    }
    if (selectedPreference === "eco") {
      return comparisonData.filter(d => d.feature === "Lodging Style" || d.feature === "Crowd Density");
    }
    return comparisonData;
  };

  const filteredData = getFilteredData();

  return (
    <div className="bg-stone-50 font-sans text-stone-900 selection:bg-emerald-500 selection:text-white min-h-screen flex flex-col justify-between antialiased">
      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Viewpoint Comparison</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge vs Poon Hill Views
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Compare Annapurna's two most famous viewpoints side-by-side to choose the trail matching your physical fitness and visual style.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-10">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-3">Filter by what matters most to you:</span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Show All Metrics" },
              { id: "views", label: "Best Mountain Views" },
              { id: "easy", label: "Ease of Access & Fitness" },
              { id: "eco", label: "Sustainability & Lodging" }
            ].map((pref) => (
              <button
                key={pref.id}
                onClick={() => setSelectedPreference(pref.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  selectedPreference === pref.id
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                    : "bg-white border-stone-200 text-stone-600 hover:border-stone-300"
                }`}
              >
                {pref.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Metric</th>
                <th className="px-6 py-4">Khopra Ridge</th>
                <th className="px-6 py-4">Poon Hill</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              {filteredData.map((d, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">{d.feature}</td>
                  <td className="px-6 py-4">{d.khopra}</td>
                  <td className="px-6 py-4">{d.poonhill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Verdict Box */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
          <h4 className="font-bold text-emerald-950 text-base">The Verdict</h4>
          <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
            If you have 9–10 days, seek peace, and want up-close mountain vistas, <strong>Khopra Ridge</strong> is by far the superior choice. If you are short on time, trekking with younger children, or prefer lower altitudes and shorter hikes, <strong>Poon Hill</strong> remains a beautiful, albeit crowded, option.
          </p>
        </div>

        {/* E-E-A-T AUTHOR FOOTNOTE */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This comparison was written by veteran Nepalese guides who have operated tours in both Ghandruk and Ghorepani since 2012.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Still Unsure Which Trek is Best?</h3>
          <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
            Let our local trekking specialists design a custom itinerary that combines both, or adapts to your group's fitness level.
          </p>
          <a
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all"
          >
            Ask a Trek Planner
          </a>
        </div>
      </main>
    </div>
  );
}
