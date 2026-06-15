"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const landslideZones = [
    {
      zone: "Swanta River Gorge & Bridge",
      terrain: "Loose shale and steep river flanks.",
      risk: "Active landslide debris and rockfalls can block the path to Chhistibung after pre-monsoon storms. Guides often inspect this path before groups cross."
    },
    {
      zone: "Tadapani to Dobato Forest Trail",
      terrain: "Damp soil, rotting trees, and steep clay banks.",
      risk: "Heavy rains can wash away trail shoulders or bring down dead tree branches. Watch your footing on slippery clay climbs."
    },
    {
      zone: "Chhistibung to Ridge Ascent Flanks",
      terrain: "Alpine grass cliffs and scree fields.",
      risk: "While the main path is grassy, secondary grazing paths are crumbly and can trigger slides. Stick to the marked trail."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Terrain Safety</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Landslide & Rockfall Risks on the Khopra Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand landslide danger zones, mudslide risk seasons, and the standard trail safety procedures to follow when crossing active scree slopes.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Landslide Dynamics in the Annapurnas</h2>
          <p className="text-stone-600 leading-relaxed">
            The geological structure of the Himalayas is relatively young and active, which means soil erosion and landslides are natural processes, particularly in steep river gorges. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            On the Khopra Ridge Trek, the lower segments (around Swanta and the valleys between Ghandruk and Tadapani) contain regions where slopes can become unstable, especially after heavy rains. Managing these risks involves seasonal awareness and trail discipline.
          </p>
        </div>

        {/* Landslide zones */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Identified Risk Zones</h2>
          <div className="space-y-6">
            {landslideZones.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-extrabold text-stone-400 block uppercase tracking-wider">{item.zone}</span>
                <span className="text-xs font-bold text-emerald-600 block mt-1">Terrain Type: {item.terrain}</span>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">{item.risk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crossing protocols */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Standard Safety Protocols for Crossing Scree Slopes</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Cross One by One:</strong> Never cross a landslide zone in a tight group. Walk individually so that if a rockfall starts, the entire group is not in the line of fire.</li>
            <li><strong>Keep Your Eyes Uphill:</strong> When walking through loose gravel or rockfall zones, watch the slope above you, not your feet. Listen for the sound of cracking timber or shifting stones.</li>
            <li><strong>No Lingering:</strong> Move quickly and continuously through the marked hazard area. Do not stop to rest, adjust gear, or take photos.</li>
          </ul>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides examine alternative trails and coordinate with local checkposts daily. If a landslide blocks the main trail, we reroute through safe alternative pathways.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Trek with Peace of Mind</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our guided departure. Get an experienced local leader who knows all trail detours, safety procedures, and handles all checkpost permits.
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
