"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Peak Name", value: "Machhapuchhre (Fishtail)" },
    { label: "Altitude", value: "6,993 m (22,943 ft)" },
    { label: "Sacred Status", value: "Holy to Lord Shiva; climbing is strictly prohibited" },
    { label: "Visual Profile", value: "Sharp double-peaked pointed summit visible from Dobato & Ghandruk" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Profiles</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Machhapuchhre Views from the Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Machhapuchhre (6,993m), the iconic Fishtail Mountain, frames the eastern sky throughout the trek, showing its famous double-summit profile.
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
          <h2 className="text-2xl font-bold text-stone-950">The Sacred Peak of the Annapurnas</h2>
          <p>
            Machhapuchhre, which translates to **&quot;Fish Tail&quot;** in Nepali, is one of the most recognizable peaks in the Himalayas. Its vertical slopes rise directly from the Pokhara valley. Because of its religious association with the Hindu god Shiva, the peak is considered holy, and the government of Nepal has banned climbing on it. It remains unclimbed to this day.
          </p>
          <p>
            On the Khopra trek, you will get spectacular, unobstructed views of Machhapuchhre from the stone alleys of Ghandruk village, the forest clearing of Tadapani, and the open ridge of Muldai Viewpoint. From Khopra Ridge itself, you can spot its sharp pointed tip rising above the eastern valley clouds.
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
            <h3 className="text-2xl font-bold">Discover the Sacred Himalayas</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book our guided community trek today. Let our local guides lead you through traditional Gurung villages and show you the ultimate viewing spots.
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
