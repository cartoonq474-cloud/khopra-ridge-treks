import React from "react";
import Link from "next/link";

export default function Page() {
  const segmentStats = [
    { label: "Segment Distance", value: "~7.0 km / 4.3 mi" },
    { label: "Est. Hiking Time", value: "4 - 5 hours" },
    { label: "Elevation Profile", value: "Moderate Descent &amp; Ascent" },
    { label: "Terrain Profile", value: "Forest Glades, Bamboo Grooves" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Segment Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Bayeli Kharka to Chhistibung Route Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the wildlife rich valley trail. Read our guide covering segment distance, bamboo glades, langur monkey crossings, and lodging details at Chhistibung.
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
            The hike from Bayeli Kharka (3,425m) to Chhistibung (2,975m) involves a deep forest descent followed by a steady climb back out of the river valley. The trail cuts through dense bamboo groves and oak forests that shelter rare Himalayan wildlife.
          </p>
          <p className="text-stone-600 leading-relaxed">
            This segment is highly regarded for wildlife photography. Trekkers regularly spot troops of Himalayan Langur monkeys feeding in the treetops and the vibrant Himalayan Monal (Danphe) nesting in the bamboo glades. The route concludes at Chhistibung, a tiny community lodge settlement set in a high mountain pasture.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides walk the Bayeli-Chhistibung forest trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
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
