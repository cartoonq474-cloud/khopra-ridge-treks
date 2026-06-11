"use client";

import React from "react";

export default function Page() {
  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Khopra Ridge Trek Resource</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Dhaulagiri Views from Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Khopra Ridge sits directly across the Kali Gandaki Valley from Dhaulagiri I, offering an unobstructed view of the seventh-highest mountain on Earth.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
                    <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Peak Name</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Dhaulagiri I</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Altitude</span>
            <p className="mt-1 text-sm font-bold text-stone-900">8,167 m (26,795 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Visual Proximity</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Direct line of sight across Dhaulagiri corridor</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Sunset Aspect</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Alpenglow shines bright gold on East face</p>
          </div>

        </div>

        {/* E-E-A-T AUTHOR FOOTNOTE */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, permit fees, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* PRIMARY CALL TO ACTION */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Ready to Experience Khopra Ridge?</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Skip the crowded paths. Let our local guides lead you through the community lodge circuit to sacred Khayer Lake. Book our 9-Day all-inclusive package today.
            </p>
            <a
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all"
            >
              Inquire &amp; Customize Itinerary
            </a>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12">
            ACAP
          </div>
        </div>
      </div>

      
    </div>
  );
}
