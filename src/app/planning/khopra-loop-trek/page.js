"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const loopStages = [
    {
      stage: "Stage 1: The Ascent (Clockwise)",
      desc: "Starting at Kimche, you climb through Ghandruk Gurung village and oak forests to Tadapani and Dobato. Acclimatization is gradual, peaking at the high meadows of Bayeli Kharka (3,432m)."
    },
    {
      stage: "Stage 2: The High Ridge & Lake",
      desc: "You descend to Chhistibung (2,975m) before making the final steep climb to the Khopra Ridge (3,660m) and the optional strenuous day climb to sacred Khayer Lake (4,660m)."
    },
    {
      stage: "Stage 3: The Valley & Forest Exit",
      desc: "From the ridge, you descend steeply to Swanta Magar village, cross to Ghorepani classic teahouse hub, watch the sunrise at Poon Hill, and descend to Nayapul to drive back."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Variations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Loop Trek: The Complete Circuit
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand the complete closed-loop routing. Learn why a clockwise direction provides optimal pacing, safety, and diverse cultural transitions without repeating trails.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Closed-Loop Himalayan Adventure</h2>
          <p>
            Unlike many out-and-back trails in Nepal, the Khopra Ridge Trek is a true closed loop. Every day of hiking brings completely new landscapes—transitioning from terraced Gurung valleys and mossy rhododendron forests to alpine pasture ridges, high-altitude lakes, and deep Magar agricultural gorges.
          </p>
        </div>

        {/* Stages list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Stages of the Loop</h3>
          <div className="space-y-6">
            {loopStages.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.stage}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Secure Your Loop Booking</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Experience the complete closed-loop community circuit. Book our guided 9-day all-inclusive package today.
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
