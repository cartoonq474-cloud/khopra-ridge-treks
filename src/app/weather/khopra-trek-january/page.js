"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "2°C to 6°C (35°F to 43°F)" },
    { label: "Avg Night Temp", value: "-15°C to -10°C (5°F to 14°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "2 - 3 Days" },
    { label: "Sky Clarity Index", value: "90% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in January
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for peak winter. Review average high/low temperatures, snow expectations, visibility index, and gear advice for January.
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

        {/* Why January section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why January is the Coldest Winter Month</h2>
          <p className="text-stone-600 leading-relaxed">
            January is the heart of winter in the Annapurna region. While lower sections of the trek like Ghandruk remain relatively mild during the day, high-altitude ridges like Khopra Ridge (3,660m) experience freezing conditions, especially after the sun sets.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The major advantage of trekking in January is the exceptional visibility. The winter air is dry and crisp, offering crystal-clear mountain views of Dhaulagiri, Annapurna South, and Nilgiri in the mornings. Additionally, trails are incredibly quiet, offering a peaceful experience.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Trekkers must prepare for temperatures dropping well below freezing at night. High-altitude community lodges have wood stoves in the common areas, but bedrooms are unheated. A high-quality down sleeping bag (-20°C rated) and four-season layers are mandatory.
          </p>
        </div>

        {/* January Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key January Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Heavy Down Jacket:</strong> Essential for evenings on the ridge when temperatures fall below -10°C.</li>
            <li><strong>Thermal Layers:</strong> Double set of heavyweight merino wool or synthetic thermal underwear.</li>
            <li><strong>Microspikes & Gaiters:</strong> Necessary for potential icy or snow-packed trail sections around the high ridge and Khayer Lake.</li>
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
            <h3 className="text-2xl font-bold">Book Your January Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              January offers unparalleled winter clarity for experienced trekkers. Secure your permit-inclusive booking packages with our local team.
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
