"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Daily Wage Range", value: "$20 to $25 USD / day" },
    { label: "Max Weight Limit", value: "15 to 18 kg (33 to 40 lbs)" },
    { label: "Shared Ratio", value: "1 Porter shared between 2 Trekkers" },
    { label: "Tipping Standard", value: "10% to 15% of total wage (Recommended)" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Porter Cost &amp; Weight Limits
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand the expenses of hiring a local porter. Review wage scales, maximum weight limitations, ethical guidelines, and tipping standards.
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
          <h2 className="text-2xl font-bold text-stone-950">Ethical Porter Operations</h2>
          <p>
            Hiring a local porter costs **$20 to $25 USD per day**. This covers their daily wage, food and lodging along the trail, and essential mountain medical insurance. Sharing a porter between two hikers is standard, with each hiker placing up to 7.5kg to 9kg of gear inside a shared duffel bag.
          </p>
          <p>
            We strictly enforce IPPG (International Porter Protection Group) guidelines. We ensure our porters are provided with warm windproof clothing, proper hiking boots, standard sleeping space, and carry no more than the legal limit of 18kg.
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
            <h3 className="text-2xl font-bold">Plan Your Porter Support</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Enjoy a comfortable, weight-free hike. Book our guided packages which include pre-arranged, ethical porter support.
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
