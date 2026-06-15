"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const shortTreks = [
    {
      name: "Khopra Ridge Short Route (5 - 6 Days)",
      elev: "3,660m (Ridge) / 4,660m (Khayer Lake)",
      crowds: "Very Low",
      desc: "An ideal combination of high-altitude alpine lakes, community cooperative lodge stays, and direct vistas of Dhaulagiri without the crowds."
    },
    {
      name: "Poon Hill Trek (3 - 4 Days)",
      elev: "3,210m",
      crowds: "Very High",
      desc: "The classic, entry-level Himalayan viewpoint trek. Standard private teahouses, paved steps, and massive tourist traffic."
    },
    {
      name: "Mardi Himal Short Trek (4 - 5 Days)",
      elev: "3,580m (High Camp)",
      crowds: "Moderate to High",
      desc: "Fast, steep ridge line climb putting you directly underneath Machhapuchhre. Extremely popular and highly busy during peak months."
    },
    {
      name: "Mohare Danda Eco Trek (4 - 5 Days)",
      elev: "3,300m",
      crowds: "Low",
      desc: "A soft, community-run eco-homestay alternative to Poon Hill running along a parallel ridge line."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Best Short Trek in Nepal: Annapurna Alternatives
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Short on calendar days? Compare the best short-duration trekking packages (3 to 6 days) in the Annapurna range to pick the perfect route.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Short-Duration Himalayan Trails</h2>
          <p className="text-stone-600 leading-relaxed">
            If you only have a week in Nepal, the Annapurna region is the most practical destination. It is easily accessible from Pokhara and offers multiple short routes that reach high viewpoints. However, choosing the right short path depends on whether you prioritize easy access, sweeping vistas, or escaping the crowds.
          </p>
        </div>

        {/* Short Trek List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Comparative Short-Trek Options</h3>
          <div className="space-y-6">
            {shortTreks.map((trek, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{trek.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    Max Alt: {trek.elev}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Crowd Density:</strong> {trek.crowds}</p>
                  <p><strong>Overview:</strong> {trek.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile feedback from over 500 short-trek departures annually. All routes are mapped for optimal pacing and acclimatization safety.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Customize a Short Itinerary</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Only have a few days? Let our Pokhara team arrange private jeeps to maximize your trail time.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
