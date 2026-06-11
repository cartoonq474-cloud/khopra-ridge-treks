"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "5 Days" },
    { label: "Total Distance", value: "~48 km / 29.8 mi" },
    { label: "Max Altitude", value: "3,660m / 12,007ft" },
    { label: "Difficulty Grade", value: "Moderate" }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Drive Pokhara to Kimche, Trek to Tadapani",
      elev: "2,630m",
      time: "5-6 hrs",
      desc: "Drive from Pokhara to Kimche (3 hrs) to start trekking. Ascent through traditional Gurung farming communities and forests to reach the forest hub of Tadapani."
    },
    {
      day: 2,
      title: "Tadapani to Chhistibung",
      elev: "2,975m",
      time: "6-7 hrs",
      desc: "Leave the busy tourist trail. Climb off-grid through pristine, mossy oak forests and bamboo meadows to reach Chhistibung community lodge."
    },
    {
      day: 3,
      title: "Chhistibung to Khopra Ridge",
      elev: "3,660m",
      time: "3-4 hrs",
      desc: "A steep, rewarding climb above the tree line. Arrive at the ridge early afternoon. Catch sunset over Mt. Dhaulagiri (8,167m) directly opposite."
    },
    {
      day: 4,
      title: "Khopra Ridge to Swanta Village",
      elev: "2,200m",
      time: "5-6 hrs",
      desc: "Descend the steep ridge slope down into the Swanta river valley. Stay in the traditional Magar village of Swanta and learn about community cheese production."
    },
    {
      day: 5,
      title: "Swanta to Hile, Drive to Pokhara",
      elev: "1,400m",
      time: "6-7 hrs",
      desc: "Trek through farming fields to join the main trail at Ghorepani / Hile. Meet your private transfer jeep and drive back to Pokhara."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Breadcrumb / Category */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Itinerary Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            5-Day Khopra Ridge Trek (Rapid Route)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Short on time? The 5-Day express route provides the direct climb to the high ridge and community lodges, skipping the high-altitude hike to Khayer Lake.
          </p>
        </div>

        {/* Spec Overview Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {summarySpecs.map((spec, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{spec.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Why choose 5-day section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Who is the 5-Day Route For?</h2>
          <p className="text-stone-600 leading-relaxed">
            The 5-day route is designed for moderately fit trekkers who want to experience the quiet beauty and community lodges of the Khopra Ridge region but have limited holiday schedules. By skipping the demanding day-hike to the sacred alpine lake (which requires an extra 8 hours at 4,660m), this route reduces the overall physical difficulty and altitude sickness risk.
          </p>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm leading-relaxed">
            <strong>Skip the lake, keep the views:</strong> You still stay directly at the Khopra Ridge community lodge (3,660m) to catch the iconic 360-degree panorama of the Dhaulagiri and Annapurna ranges.
          </div>
        </div>

        {/* Itinerary Breakdown */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Day-by-Day Itinerary</h2>
          <div className="space-y-6">
            {itinerary.map((d) => (
              <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                  {d.day}
                </span>
                <div className="w-full bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-extrabold text-stone-950 text-base">{d.title}</h3>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                      {d.elev}
                    </span>
                  </div>
                  <span className="block text-xs font-semibold text-stone-400 mt-1 uppercase tracking-wider">Walking time: {d.time}</span>
                  <p className="mt-3 text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This rapid 5-day route is monitored by our professional guides. Acclimatization profile maps are updated monthly to ensure safe transitions above the tree line.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Customize Your Itinerary</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to extend this trek, add a detour to Poon Hill, or hire an experienced local porter? We organize bespoke community lodge treks.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
              <Link
                href="/planning/khopra-trek-itinerary"
                className="rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
              >
                Compare Route Options
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
