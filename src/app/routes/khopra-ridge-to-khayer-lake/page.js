import React from "react";
import Link from "next/link";

export default function Page() {
  const segmentStats = [
    { label: "Segment Distance", value: "~15.0 km / 9.3 mi (RT)" },
    { label: "Est. Hiking Time", value: "7 - 8 hours (RT)" },
    { label: "Elevation Gain/Loss", value: "+1,000m / -1,000m" },
    { label: "Terrain Profile", value: "Alpine Ridge Flank, Exposed Scree" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Segment Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge to Sacred Khayer Lake Route Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trek to the sacred pilgrimage site. Read our guide covering segment distance, technical ridge flanks, altitude sickness prevention, and the Khayer Baraha Temple.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {segmentStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Detail Description */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Segment Trail Details</h2>
          <p className="text-stone-600 leading-relaxed">
            The day hike from Khopra Ridge (3,660m) to Sacred Khayer Lake (4,660m) is a challenging alpine journey. This is a full-day round-trip excursion that takes you along the rugged, exposed flanks of the mountain range under the towering west face of Annapurna South.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The path starts early in the morning and winds upwards across rocky slopes and scree fields. High altitude makes this trek demanding, and packing warm layers, windbreakers, and plenty of snacks is crucial. Upon arrival, you will find the serene, sacred lake against the dramatic snow walls, along with the shrine of Khayer Baraha where Hindu pilgrims gather during the August festival.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides walk the Khopra-Khayer Lake trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan Your Trek Segments</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our core 9-day package. We arrange private jeeps to the trailhead and handle all community lodge accommodations along the quiet ridge trail.
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
