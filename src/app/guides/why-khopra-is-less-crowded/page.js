"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const points = [
    {
      title: "1. Community Managed Zoning System",
      desc: "Local village committees regulate the development along the route. Rather than letting endless guest houses crop up, the trail relies on a strict single-lodge network in key locations (Bayeli, Chhistibung, Khopra Danda). This directly prevents mass hotel construction and overcrowding."
    },
    {
      title: "2. Higher Elevation Entry Threshold",
      desc: "Unlike Ghorepani and Poon Hill, which can be reached via easy, short stone staircases in 1-2 days, Khopra Ridge requires multiple days of steady climbing above the tree line. This filters out the mass weekend tourist crowd and keeps the trail serene."
    },
    {
      title: "3. Offbeat Visual Corridor",
      desc: "Most commercial tourist packages focus heavily on Annapurna Base Camp or Poon Hill. Khopra Ridge operates as an off-grid wilderness route, meaning it is rarely promoted by generic mass travel agencies in Kathmandu, preserving its quiet forest paths."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Seclusion</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Why is Khopra Ridge Less Crowded?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the details. Learn how community zoning, altitude steps, and offbeat logistics protect this Himalayan ridge from mass over-tourism.
          </p>
        </div>

        {/* Visitor Stats Card */}
        <div className="mt-12 p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Daily Hiker Comparison</h2>
          <p className="text-stone-600 text-xs leading-relaxed">
            During peak trekking seasons (October-November), popular routes in the Annapurna range experience severe trail traffic. Here is an average estimate of daily hikers on each trail:
          </p>
          
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Poon Hill Trail</span>
              <strong className="block text-3xl font-black text-amber-600 mt-2">600+</strong>
              <span className="text-[10px] text-stone-400 mt-1 block">hikers per day</span>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">ABC Sanctuary</span>
              <strong className="block text-3xl font-black text-amber-600 mt-2">400+</strong>
              <span className="text-[10px] text-stone-400 mt-1 block">hikers per day</span>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Khopra Ridge Trail</span>
              <strong className="block text-3xl font-black text-emerald-600 mt-2">15 - 25</strong>
              <span className="text-[10px] text-emerald-600 mt-1 block">hikers per day</span>
            </div>
          </div>
        </div>

        {/* Detailed Points */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Three Reasons For Trail Privacy</h2>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-2xl">
                <h3 className="font-extrabold text-stone-950 text-base">{p.title}</h3>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{p.desc}</p>
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
              We monitor ACA checkpost registries regularly. Our guides set paces designed to keep you clear of overlapping groups on the trail.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Trek the Secluded Sanctuary</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Avoid the crowds. Book our 9-day core itinerary to experience quiet rhododendron forests and spectacular ridge views.
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
