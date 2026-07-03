import React from "react";
import Link from "next/link";

export default function Page() {
  const lakeRisks = [
    {
      title: "1. Rapid 1,000-Meter Ascent",
      desc: "Climbing from Khopra Ridge (3,660m) to Khayer Lake (4,660m) in a single morning violates the standard 500m per day recommendation. While you sleep back at the Ridge, this rapid ascent can cause sudden headache or nausea."
    },
    {
      title: "2. Freezing Temperatures and Wind Chill",
      desc: "At 4,660m, temperatures are significantly colder. Even in spring or autumn, morning temperatures at the lake can drop below freezing, with strong winds sweeping off the Annapurna South face."
    },
    {
      title: "3. Extremely Remote Terrain",
      desc: "There are no permanent teahouses, lodges, or shops along the trail from the Ridge to the Lake. You must carry all your water, food, and layers. A rescue from this zone must be done manually or via helicopter."
    },
    {
      title: "4. Rapid Oxygen Desaturation",
      desc: "With effective oxygen levels dropping to 57%, your muscles will feel heavy and breathing will be labored. Pacing is critical to prevent exhaustion."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">High Altitude Challenge</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khayer Lake Altitude Risks & Safety
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Climbing to 4,660m (15,288ft) requires careful safety management. Review oxygen drop statistics, cold weather alerts, and emergency turnaround rules.
          </p>
        </div>

        {/* The Challenge */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Khayer Lake Day Hike Challenge</h2>
          <p className="text-stone-600 leading-relaxed">The hike from Khopra Ridge to the sacred Khayer Lake is a stunning, spiritual experience. However, standing at **4,660 meters** places you at the same altitude as some of the highest base camps in the Himalayas.
          </p>
          <p className="text-stone-600 leading-relaxed">Because this is a long round-trip hike (8 to 10 hours of walking), you will spend several hours in the high-altitude zone. Understanding and preparing for these risks is essential for a safe trek.
          </p>
        </div>

        {/* Risks Cards */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Core Risk Factors to Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lakeRisks.map((risk, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{risk.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Turning Around Rule */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">The Golden Rule: The 1:00 PM Turnaround</h3>
          <p className="text-xs leading-relaxed">No matter how close you are to the lake, our guides enforce a strict **1:00 PM turnaround rule**. Weather at 4,660m can deteriorate rapidly in the afternoon, with thick clouds rolling in and temperatures dropping. To avoid walking in freezing fog, you must begin your descent by 1:00 PM to return to the safety of the Khopra Ridge lodge before dark.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We monitor trail conditions and mountain weather updates daily. Our guides carry satellite communication devices or VHF radios to coordinate rescues from the high lake area.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan a Safe Exploration</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our guided departure to ensure you hike with an experienced leader who carries emergency gear, oxygen monitors, and handles all permits.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/altitude/khayer-lake-altitude-risks',
  },
};
