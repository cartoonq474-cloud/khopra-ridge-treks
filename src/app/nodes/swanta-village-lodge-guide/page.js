"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const points = [
    {
      title: "Local Cheese Factory Co-op",
      desc: "Swanta hosts a community-run yak/cow cheese factory. Trekkers can visit the aging room, learn about local cooperative farming, and purchase fresh cheese rounds directly from the farmers."
    },
    {
      title: "Organic Homestays",
      desc: "Stay in traditional Magar homes built from local clay and stone. Food is made using fresh vegetables picked straight from the family&apos;s garden, offering an organic culinary experience."
    },
    {
      title: "Stable Infrastructure",
      desc: "Due to its lower altitude (2,200m), Swanta enjoys stable hydroelectric power. You can charge devices in your room for free and access standard cellular networks (Ncell)."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Swanta Accommodation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Magar Culture Hub</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Swanta Village Lodge & Homestay Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Agricultural heritage. Discover the homestays, community cheese cooperatives, and lodge facilities in the terraced village of Swanta.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Farming Paradise in the Mountains</h2>
          <p>
            Swanta (2,200m / 7,217ft) is a picturesque village nestled in a sunny mountain valley. Surrounded by steep terraced crop fields growing millet, barley, and potatoes, it is primarily inhabited by the indigenous Magar community.
          </p>
          <p>
            For trekkers descending from the cold, wind-swept heights of Khopra Ridge, Swanta represents a warm, comfortable haven where you can enjoy hot solar showers, organic farm-to-table dining, and direct exposure to Magar culture.
          </p>
        </div>

        {/* Village Highlights */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">What Makes Swanta Special</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {points.map((pt, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{pt.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EEAT Footnote */}
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
            <h3 className="text-2xl font-bold">Taste Local Swanta Cheese</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book our guided trek to visit Swanta co-op cheese factory and stay in comfortable family-run homestays.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Book guided package
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
