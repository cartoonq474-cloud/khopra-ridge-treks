"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Peak Name", value: "Hiunchuli" },
    { label: "Altitude", value: "6,441 m (21,132 ft)" },
    { label: "Proximity", value: "Sits adjacent to Annapurna South; forms the Sanctuary Gate" },
    { label: "Visual Profile", value: "Broad, jagged rocky wall framing the Eastern skyline" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Profiles</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Hiunchuli Views from the Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Hiunchuli (6,441m) towers alongside Annapurna South, forming the massive rock wall that hosts the western gateway into the sacred Annapurna Sanctuary.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Sanctuary Sentinel</h2>
          <p>
            Hiunchuli (6,441m) is a prominent peak that is climbed as a trekking peak in Nepal. However, it is considered physically demanding and complex to climb due to steep ice walls and rockfall hazards.
          </p>
          <p>
            From the stone trails of Ghandruk and Tadapani, Hiunchuli appears as a massive rocky wall that towers directly above the Gurung villages. From Khopra Ridge, it is seen connected to Annapurna South, forming the backdrop of the high community lodge to the east.
          </p>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Discover Quiet Forest Trails</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Skip the crowded tourist paths. Let our local guides lead you through the community lodge circuit. Book our guided departures today.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
