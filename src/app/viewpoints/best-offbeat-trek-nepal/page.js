"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const offbeatTreks = [
    {
      name: "1. Khopra Ridge & Khayer Lake",
      score: "9.5 / 10",
      vibe: "Ultimate Wilderness Seclusion",
      views: "Spectacular 360° views of Dhaulagiri (8,167m) and Annapurna South.",
      lodging: "100% community-owned eco-lodges directly funding village schools.",
      verdict: "Perfect for active hikers seeking zero crowds, authentic cultural immersion, and challenging high-altitude side hikes (4,660m sacred lake)."
    },
    {
      name: "2. Mohare Danda Trek",
      score: "9.0 / 10",
      vibe: "Gentle Eco-Tourism Circuit",
      views: "Unobstructed panorama of the Annapurna range from 3,300m.",
      lodging: "Community-operated home stays and forest lodges supporting Swanta valleys.",
      verdict: "Ideal for senior trekkers, beginners, or families seeking a shorter, lower-altitude alternative to Poon Hill with warm homestay interactions."
    },
    {
      name: "3. Mardi Himal Ridge Trek",
      score: "8.5 / 10",
      vibe: "Jagged High Ridge Corridor",
      views: "Close-up towering perspective of the sacred Mount Machhapuchhre (Fishtail).",
      lodging: "Private teahouses owned by individual families and business owners.",
      verdict: "Great for travelers who want spectacular ridge walking and don't mind moderate trail traffic during high season. Skips community profit structures."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Offbeat Discovery</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Best Offbeat Treks in Nepal (2026 Rankings)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Escape the crowds. Compare the top 3 offbeat ridge treks in the Annapurna foothills based on crowd counts, views, lodging models, and social impact.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why Go Offbeat in the Himalayas?</h2>
          <p className="text-stone-600 leading-relaxed">
            While classic treks like the Annapurna Circuit and Everest Base Camp are legendary, they suffer from commercial over-development, road construction, and extreme trail traffic. Selecting an off-the-beaten-path alternative lets you experience the raw Himalayas of 30 years ago—walking along empty forest trails, staying in quiet village communities, and enjoying peaceful mountaintop sunrises.
          </p>
        </div>

        {/* Trek Lists */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Top 3 Alternative Ridge Treks</h2>
          <div className="space-y-6">
            {offbeatTreks.map((trek, i) => (
              <div 
                key={i} 
                className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4 relative overflow-hidden"
              >
                {/* Score badge */}
                <span className="absolute top-6 right-6 bg-emerald-100 text-emerald-800 border border-emerald-500/10 px-3 py-1 rounded-full text-xs font-black">
                  {trek.score}
                </span>

                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{trek.vibe}</span>
                <h3 className="text-xl font-black text-stone-950">{trek.name}</h3>
                
                <div className="text-xs space-y-2 pt-2 border-t border-stone-100 text-stone-600">
                  <div>🏔️ <strong className="text-stone-800">Mountain Views:</strong> {trek.views}</div>
                  <div>🏠 <strong className="text-stone-800">Lodging Model:</strong> {trek.lodging}</div>
                </div>

                <p className="mt-4 text-xs text-stone-400 leading-relaxed leading-relaxed pt-2">
                  <strong className="text-stone-700">Verdict:</strong> {trek.verdict}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We lead active groups across all of Nepal's offbeat tracks. This comparison list is adjusted based on seasonal weather profiles, lodge standard audits, and visitor numbers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Ready for an Offbeat Adventure?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our custom Khopra Ridge or Mohare Danda itineraries. Experience authentic Himalayan hospitality while directly funding local education.
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
