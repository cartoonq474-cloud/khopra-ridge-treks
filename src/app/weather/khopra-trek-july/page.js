"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "15°C to 19°C (59°F to 66°F)" },
    { label: "Avg Night Temp", value: "6°C to 10°C (43°F to 50°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "22 - 25 Days" },
    { label: "Sky Clarity Index", value: "20% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in July
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for peak monsoon. Review average high/low temperatures, heavy rainfall details, mud and safety indexes, and gear advice for July.
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

        {/* Why July section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why July is Peak Monsoon</h2>
          <p className="text-stone-600 leading-relaxed">
            July brings the heavy rains of the summer monsoon to the Annapurna region. It is the wettest month of the year, characterized by daily rain, high levels of cloud cover, and high humidity throughout the trek.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Due to the persistent precipitation, trails can become muddy, slippery, and prone to landslides, particularly on the lower forest slopes. Active leeches are common in the dense vegetation zones.
          </p>
          <p className="text-stone-600 leading-relaxed">
            While mountain views are rarely clear, July transforms the alpine pastures into incredibly lush, green meadows carpeted with wild alpine flowers. High mountain streams and waterfalls are at their absolute peak flow, creating stunning natural dynamics.
          </p>
        </div>

        {/* July Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key July Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Waterproof Trail Shoes:</strong> Boots with deep grip are essential for slick, muddy paths.</li>
            <li><strong>Dry Bags:</strong> Keep all clothing and electronics inside dry bags or zip locks inside your backpack.</li>
            <li><strong>Leech Treatment Kit:</strong> Bring hand sanitizer, salt, or insect spray for dealing with leeches on the trail.</li>
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
            <h3 className="text-2xl font-bold">Book Your July Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              July requires high preparation and flexible schedules due to weather-induced transport delays. Secure your permit-inclusive booking packages with our local team.
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
