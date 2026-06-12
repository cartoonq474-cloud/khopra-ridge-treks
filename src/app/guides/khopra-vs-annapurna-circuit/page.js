"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonRows = [
    {
      metric: "Trek Duration",
      khopra: "9 Days (5-6 days of actual walking).",
      circuit: "12 - 18 Days (traditional full loop, though road construction has shortened it)."
    },
    {
      metric: "Maximum Altitude",
      khopra: "3,660m (Overnight on ridge) / 4,660m (Optional day hike to Khayer Lake).",
      circuit: "5,416m (Crossing the strenuous Thorong La Pass)."
    },
    {
      metric: "Crowd Levels",
      khopra: "Very Low. You will walk hours without seeing other groups.",
      circuit: "High. One of Nepal's most famous and busy trekking highways."
    },
    {
      metric: "Road Interference",
      khopra: "None. Entirely on pristine walking trails through forests and ridges.",
      circuit: "High. Jeep roads run along large parts of the classic route (Marsyangdi and Kali Gandaki valleys)."
    },
    {
      metric: "Lodge & Support Model",
      khopra: "100% community-owned eco-lodges. Profits directly fund local schools.",
      circuit: "Commercial private teahouses and standard tourist guest houses."
    },
    {
      metric: "Primary Mountain Views",
      khopra: "Up-close panoramic face-to-face views of Dhaulagiri (8,167m) and Annapurna South.",
      circuit: "Transitional valley views of Annapurna II, III, IV, Gangapurna, and Thorung Peak."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparisons</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge vs. Annapurna Circuit
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Choosing between a short, community-run wilderness trail and Nepal's most famous trekking loop? Here is our comprehensive comparative guide to help you decide.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Wilderness Ridge vs. The Grand Loop</h2>
          <p className="text-stone-600 leading-relaxed">
            The **Annapurna Circuit** is legendary for its grand scale, geographic diversity, and the challenge of crossing Thorong La Pass. However, modern road construction has significantly changed the classic circuit, leading many trekkers to seek alternative, untouched trails. The **Khopra Ridge Trek** (Khopra Danda) has emerged as the premier off-the-beaten-path alternative—offering similar panoramic alpine vistas but in a shorter, road-free, and community-centric package.
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
                  <th className="px-6 py-4">Annapurna Circuit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                    <td className="px-6 py-4">{row.khopra}</td>
                    <td className="px-6 py-4">{row.circuit}</td>
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
              <h4 className="font-extrabold text-stone-950 text-base">1. The Road Issue &amp; Trail Authenticity</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                The biggest complaint about the modern Annapurna Circuit is the dusty jeep roads that now cover much of the trail on both sides of Thorong La. While beautiful, hikers are frequently forced to share the route with vehicles. Khopra Ridge remains entirely pristine, utilizing ancient forest trails and high mountain pastures that vehicles cannot reach.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">2. Altitude Risk &amp; Acclimatization</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                At 5,416 meters, Thorong La Pass presents a severe risk of Acute Mountain Sickness (AMS), requiring multiple rest days and intense physical preparation. Khopra Ridge stays at a more manageable altitude (3,660m at the highest lodge), though you still have the option to challenge yourself with a day hike to Khayer Lake (4,660m) while sleeping back at the safer elevation of the ridge.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">3. Sustainable &amp; Local Impact</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                While the Annapurna Circuit is highly commercialized with private guesthouses, the Khopra circuit is community-run. Every teahouse along the Khopra Ridge route is owned collectively by the local villages. The profits directly pay high school teachers' salaries and support community health posts in Swanta and surrounding Magar communities.
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
              Our guides have led treks on both the Annapurna Circuit and the Khopra Ridge trail for over a decade. We monitor road construction and trail safety monthly to provide realistic route comparisons.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Ready to Experience the Road-Free Trail?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our core 9-day Khopra Ridge itinerary to avoid commercial crowd trails, hike along high mountain ridges, and support sustainable local schools.
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
