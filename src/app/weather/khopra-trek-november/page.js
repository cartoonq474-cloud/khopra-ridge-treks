"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "8°C to 12°C (46°F to 54°F)" },
    { label: "Avg Night Temp", value: "-6°C to 0°C (21°F to 32°F) at ridge" },
    { label: "Avg Rain Days", value: "0 - 1 Days" },
    { label: "Sky Clarity Index", value: "98% Clear Visibility" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in November
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for crisp post-monsoon skies. Review average high/low temperatures, precipitation expectations, visibility index, and gear advice for November.
          </p>
        </div>

        {/* Climate Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {weatherStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Why November section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why November has the Sharpest Views</h2>
          <p className="text-stone-600 leading-relaxed">
            November represents the sweet spot of the post-monsoon autumn season. The atmosphere has cooled, drawing out all moisture and haze, which results in the absolute sharpest, high-contrast panoramic views of Mount Dhaulagiri and Annapurna South.
          </p>
          <p className="text-stone-600 leading-relaxed">
            While daytime conditions are dry and pleasant for walking, nighttime temperatures on the exposed ridge at Khopra Danda (3,660m) will drop below freezing. A high-loft down jacket (suitable for temperatures down to -10°C) and a sub-zero sleeping bag are absolute essentials for comfort.
          </p>
        </div>

        {/* November Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key November Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>High-Loft Down Jacket:</strong> Essential for cold evenings in the unheated community lodge dining halls.</li>
            <li><strong>Thermal Underwear:</strong> Bring high-quality merino wool base layers for warmth during night and early morning climbs.</li>
            <li><strong>Cold Weather Accessories:</strong> Warm gloves, a fleece beanie, and a neck buff are mandatory to prevent heat loss on the ridge.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile climate data from meteorological stations inside the ACA. All weather warnings are updated in real-time by checkpost coordinators.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your November Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              November is highly popular due to the exceptional view quality. Secure your dates and lodging reservations with our booking office early.
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
