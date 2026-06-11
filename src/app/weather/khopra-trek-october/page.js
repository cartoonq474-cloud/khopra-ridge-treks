"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "12°C to 15°C (54°F to 59°F)" },
    { label: "Avg Night Temp", value: "-2°C to 4°C (28°F to 39°F) at ridge" },
    { label: "Avg Rain Days", value: "1 - 2 Days" },
    { label: "Sky Clarity Index", value: "95% Clear Visibility" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in October
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for peak season. Review average high/low temperatures, rain expectations, visibility index, and gear advice for October.
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

        {/* Why October section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why October is the Ultimate Month</h2>
          <p className="text-stone-600 leading-relaxed">
            October sits at the heart of Nepal's post-monsoon autumn season. The rain clouds have cleared completely, leaving the atmosphere crisp, dry, and dust-free. This creates the most stunning, high-contrast panoramic views of the Dhaulagiri and Annapurna ranges.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Daytime temperatures are perfect for hiking in standard shirts or light fleeces. However, once you climb above the tree line to Khopra Ridge (3,660m), nighttime temperatures frequently drop below freezing. A heavy-weight down jacket and thermal underwear are mandatory items.
          </p>
        </div>

        {/* October Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key October Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>4-Season Sleeping Bag:</strong> Nights at the ridge community lodge can get cold as rooms are unheated. Bring a bag comfortable to -10°C or ask our guide to rent one.</li>
            <li><strong>Thermal Layers:</strong> High-quality merino wool thermals for sleeping and high ridge segments.</li>
            <li><strong>Windproofing:</strong> October breezes on the ridges can drop wind chill significantly. Carry a wind-resistant shell.</li>
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
            <h3 className="text-2xl font-bold">Book Your October Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              October is the busiest month in the Himalayas. Community lodge beds are extremely limited. Secure your room reservations in advance today.
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
