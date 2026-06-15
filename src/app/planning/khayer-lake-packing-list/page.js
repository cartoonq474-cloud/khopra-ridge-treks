"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const items = [
    { category: "Hydration & Energy", name: "3 Liters of Water", desc: "Carry a 2L hydration bladder and a 1L Nalgene bottle filled with hot water. Proper hydration is critical for altitude." },
    { category: "Hydration & Energy", name: "High-Energy Gels & Snacks", desc: "Energy bars, trail mix, dried fruit, and electrolyte powders. There are no tea houses or shops on this route." },
    { category: "Clothing Layers", name: "Windproof & Waterproof Shell", desc: "Weather changes rapidly at 4,660m. A high-quality Gore-Tex jacket protects against wind and sudden downpours." },
    { category: "Clothing Layers", name: "Thermal Insulation Jacket", desc: "A packable down jacket or warm fleece to wear during rest stops or at the windy lake shores." },
    { category: "Safety & Gear", name: "Headlamp & Batteries", desc: "Essential for the 5:00 AM start. Carry spare batteries, as the cold altitude reduces battery life." },
    { category: "Safety & Gear", name: "First-Aid Kit & Whistle", desc: "Bandages, blister tape, altitude medication (Diamox), and an emergency whistle for fog conditions." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Packing List</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Gear Checklist</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake Day Hike Packing List
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Pack smart, travel light. A detailed daypack checklist covering hydration, emergency layers, and safety equipment for the 10-hour alpine hike.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Preparing Your Daypack</h2>
          <p>
            When making the day-long push from Khopra Ridge (3,660m) to Khayer Lake (4,660m), you will leave your heavy duffel bag or backpack at the community lodge. You will only carry a 20-30L daypack.
          </p>
          <p>
            Because the trail leads through raw, unpopulated wilderness with no shelter, your daypack must contain all essential clothing layers, snacks, and safety gear to handle extreme cold, sudden snowstorms, or fog.
          </p>
        </div>

        {/* Items List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Essential Daypack Checklist</h3>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="md:w-1/3 shrink-0">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">{item.category}</span>
                  <strong className="text-stone-950 text-base mt-0.5 block">{item.name}</strong>
                </div>
                <div className="md:w-2/3 text-xs text-stone-500 leading-relaxed md:pt-1">
                  {item.desc}
                </div>
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
            <h3 className="text-2xl font-bold">Inquire About Guided Gear Bags</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guides carry emergency shelters, pulse oximeters, satellite trackers, and comprehensive medical kits on all Khayer Lake excursions.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
