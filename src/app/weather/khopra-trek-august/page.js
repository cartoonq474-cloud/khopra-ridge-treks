"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "15°C to 19°C (59°F to 66°F)" },
    { label: "Avg Night Temp", value: "6°C to 10°C (43°F to 50°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "18 - 22 Days" },
    { label: "Sky Clarity Index", value: "30% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in August
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for late monsoon. Review average high/low temperatures, monsoon tapering, alpine wildflowers, and gear advice for August.
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

        {/* Why August section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why August is the Late Monsoon Period</h2>
          <p className="text-stone-600 leading-relaxed">
            August is the final full month of the summer monsoon. While the first half of the month experiences heavy rainfall similar to July, the weather patterns usually begin to stabilize slightly by the end of August as the monsoon prepares to transition.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Trekkers should still expect wet, muddy trails and high humidity. Leeches remain active in the forest regions. Morning skies are mostly cloudy, though the mountains can briefly peek through during brief dry spells.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The high alpine meadows surrounding Khopra Ridge (3,660m) are at their most vibrant, covered with a thick carpet of green grass and wildflowers. It is an excellent season for botanists and nature lovers who enjoy solitary, quiet hikes.
          </p>
        </div>

        {/* August Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key August Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Trekking Umbrellas:</strong> Many guides recommend carrying a compact trekking umbrella alongside a rain shell for better ventilation in humid rain.</li>
            <li><strong>Quick-Dry Apparel:</strong> Avoid cotton entirely. Pack high-quality synthetic layers that dry quickly.</li>
            <li><strong>Robust Footwear:</strong> Good trail traction is paramount due to muddy, wet trail sections.</li>
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
            <h3 className="text-2xl font-bold">Book Your August Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              August offers rich green alpine meadows and absolute solitude. Secure your permit-inclusive booking packages with our local team.
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
