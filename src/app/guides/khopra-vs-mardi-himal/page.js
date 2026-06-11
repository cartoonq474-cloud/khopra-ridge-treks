"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonRows = [
    {
      metric: "Crowd Density",
      khopra: "Very Low. Quiet forests and single lodge settlements.",
      mardi: "Moderate-High. Rapidly growing popularity; trail traffic is common."
    },
    {
      metric: "Lodge Ownership",
      khopra: "100% community-owned. Profits directly fund village schools.",
      mardi: "Private teahouses owned by individual families and business owners."
    },
    {
      metric: "Max Elevation",
      khopra: "3,660m (Ridge) / 4,660m (Sacred Khayer Lake side-hike).",
      mardi: "3,580m (High Camp) / 4,500m (Mardi Upper Viewpoint)."
    },
    {
      metric: "Dhaulagiri Visibility",
      khopra: "Exceptional. Faces Dhaulagiri I (8,167m) directly across the valley.",
      mardi: "None. Blocked by the Annapurna South ridge line."
    },
    {
      metric: "Trek Difficulty",
      khopra: "Moderate to Challenging (demanding climb to Khayer Lake).",
      mardi: "Moderate (short segments of steep ridge stairs)."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparisons</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge vs. Mardi Himal Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Stuck between two ridges? Read our detailed, comparative analysis of Khopra Ridge vs. Mardi Himal Trek in the Annapurna range to pick the perfect route.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Ridge Trek Showdown</h2>
          <p className="text-stone-600 leading-relaxed">
            Both **Khopra Ridge** (Khopra Danda) and **Mardi Himal** are high-altitude ridge treks branching off from the classic Annapurna sanctuary routes. They both offer hikers the chance to escape the crowded pathways of Poon Hill and walk along high ridges. However, their visual profiles, accommodation models, and crowd densities are completely different.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Comparison Matrix</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Khopra Ridge Trek</th>
                  <th className="px-6 py-4">Mardi Himal Trek</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                    <td className="px-6 py-4">{row.khopra}</td>
                    <td className="px-6 py-4">{row.mardi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Key Differences Explained</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">1. View Dynamics &amp; Mountains</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mardi Himal places you directly under the shadow of Machhapuchhre (Fishtail peak). The mountain views are vertical and towering, but the scope is narrower. Khopra Ridge, on the other hand, faces Dhaulagiri I (8,167m) and the Annapurna range. It feels like standing on a natural amphitheater, offering 360-degree views of several 8,000m peaks and the deepest gorge in the world.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">2. Crowds and Seclusion</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                In recent years, Mardi Himal has become one of Nepal's fastest-growing domestic and international routes, meaning High Camp and trails can get highly crowded during spring and autumn. Khopra Ridge remains isolated, with very low visitor counts, ensuring you walk through silent, uncrowded rhododendron forests.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">3. Social Responsibility</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Khopra Ridge is operated under a strict community lodge framework. All profits pay for local school teacher salaries and health clinics. Mardi Himal uses a standard private teahouse framework, meaning profits go directly to individual business owners.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We lead trips on both Mardi Himal and Khopra Ridge trails monthly. This comparative matrix is updated based on crowd monitoring data and local lodge capacities.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Ready to Experience the Secluded Trail?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our core 9-day Khopra Ridge itinerary to avoid the crowds, explore sacred lakes, and directly fund local mountain communities.
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
