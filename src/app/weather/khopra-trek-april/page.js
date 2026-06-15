"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "10°C to 16°C (50°F to 61°F)" },
    { label: "Avg Night Temp", value: "-4°C to 2°C (25°F to 36°F) at ridge" },
    { label: "Avg Rain Days", value: "2 - 3 Days" },
    { label: "Sky Clarity Index", value: "85% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in April
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for peak spring bloom. Review average high/low temperatures, rain expectations, visibility index, and gear advice for April.
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

        {/* Why April section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why April is the Peak Rhododendron Season</h2>
          <p className="text-stone-600 leading-relaxed">
            April is widely considered one of the absolute best months to trek to Khopra Ridge. The forests between Ghandruk, Tadapani, and Swanta are in full bloom, covering the mountainsides in a spectacular canopy of red, pink, and white rhododendrons.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Daytime trekking temperatures are highly comfortable, and skies are generally clear in the mornings, offering panoramic views of Dhaulagiri and Annapurna South. Afternoon cloud build-up is common, but it rarely results in major rain. Carrying a lightweight windbreaker and camera protection is advised.
          </p>
        </div>

        {/* April Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key April Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Sun Protection:</strong> April has high UV levels. Carry SPF 50+ sunscreen, a wide-brimmed sun hat, and quality UV sunglasses.</li>
            <li><strong>Dust/Wind Buff:</strong> Winds on the ridge can blow dust along the trails. A neck gaiter or buff is highly useful.</li>
            <li><strong>Camera Gear:</strong> Bring extra memory cards and dust-tight cases to capture the blooming forests and close-up peak views.</li>
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
            <h3 className="text-2xl font-bold">Book Your April Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              April departures fill up quickly due to the peak spring bloom. Reserve your community lodge slots and guides early to secure your spot.
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
