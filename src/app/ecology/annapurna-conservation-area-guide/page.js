"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Established Year", value: "1986" },
    { label: "Total Area Size", value: "7,629 sq km" },
    { label: "Altitude Range", value: "790m to 8,091m" },
    { label: "Governing Authority", value: "NTNC" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Ecology Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Annapurna Conservation Area (ACA) Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the sanctuary. Learn about the rules, entry permits, checkpoints, biodiversity, and ecosystem restoration of Nepal's largest protected region.
          </p>
        </div>

        {/* Fact Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Ecosystem Protection parameters</h2>
          <p className="text-stone-600 leading-relaxed">
            The **Annapurna Conservation Area** (ACA) is governed by the National Trust for Nature Conservation (NTNC). Unlike standard national parks, ACA focuses heavily on integrating local communities directly in the conservation process. This community-centric model ensures that local villagers participate in managing tourism, maintaining trails, and protecting native forests.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The region hosts over 1,200 species of flowering plants, 100 species of mammals (including the rare Snow Leopard and Musk Deer), and 500 species of birds (such as the Himalayan Monal, Nepal's national bird).
          </p>
        </div>

        {/* Ecology Sub-Silo Links */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Ecology &amp; Wildlife Resources</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
            <Link href="/ecology/flora-of-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Flora of Khopra</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/birds-of-annapurna" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Birds of Annapurna</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/spring-rhododendron-bloom" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Spring Rhododendron Bloom</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/alpine-meadows" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Alpine Meadows</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/conservation-efforts" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Conservation Efforts</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/red-pandas-on-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Red Pandas on Khopra</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/rhododendron-forests" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Rhododendron Forests</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/wildlife-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Wildlife Guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Entry Regulations */}
        <div className="mt-12 p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block">Permits &amp; Registration</span>
          <h3 className="text-xl font-bold text-stone-950">Mandatory Entry Rules</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            All foreign trekkers must carry a valid ACAP entry permit and a registered TIMS card. These are checked at official government checkpoints along the trail (such as Nayapul, Birethanti, or Ghorepani). Entering the conservation area without a registered permit results in heavy fines at the gates.
          </p>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium leading-relaxed">
            All permit registration processing is fully handled by our guides for clients booking package tours.
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We coordinate directly with NTNC checkpost officers to monitor wildlife sightings, forest degradation patterns, and trail safety conditions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Support ACA Conservation</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our 9-day core itinerary. 100% of accommodation profits directly fund the Magar village communities inside the conservation area.
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
