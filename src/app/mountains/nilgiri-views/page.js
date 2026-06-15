"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Peak Name", value: "Nilgiri (North/Central/South)" },
    { label: "Altitude (North)", value: "7,061 m (23,166 ft)" },
    { label: "Altitude (South)", value: "6,839 m (22,437 ft)" },
    { label: "Visual Profile", value: "Massive ice-fluted peak wall visible to the North from Khopra" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Profiles</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Nilgiri Views from Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Nilgiri stands as a massive, ice-fluted ridge wall to the north of Khopra, bridging the gap between Annapurna South and the Kali Gandaki Gorge.
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
          <h2 className="text-2xl font-bold text-stone-950">The Ice Flutings of Nilgiri</h2>
          <p>
            The Nilgiri group consists of three main summits: Nilgiri North (7,061m), Nilgiri Central (6,940m), and Nilgiri South (6,839m). From the grassy flanks of Khopra Ridge, Nilgiri South is the closest and most prominent.
          </p>
          <p>
            You can clearly see the intricate, vertical ice flutings and glacier lines carving down Nilgiri South, which drop into the gorge of the Kali Gandaki. The reflection of sunrise and sunset on these white glacier slopes creates a beautiful blue-white and golden color transition.
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
            <h3 className="text-2xl font-bold">Discover Alpine Panoramas</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Plan your guided trip today. We manage all paperwork, local flights, guides, and secure your lodge spaces along the community circuit.
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
