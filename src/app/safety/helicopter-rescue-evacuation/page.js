"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const safetyStats = [
    { label: "Emergency Evacuation", value: "Helicopter Arrangements" },
    { label: "Insurance Requirement", value: "High-Altitude Coverage" },
    { label: "Communication Network", value: "Satellite/Radio Checks" },
    { label: "Hospital Destinations", value: "Pokhara &amp; Kathmandu" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Safety Information</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Helicopter Rescue &amp; Safety Protocols
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Learn about our high-altitude safety networks. Review mandatory travel insurance rules, emergency satellite check-ins, helicopter rescue procedures, and medical evacuation details.
          </p>
        </div>

        {/* Safety Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {safetyStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Helicopter Evacuation Protocol</h3>
            <p className="text-stone-600 leading-relaxed">
              In the event of severe Acute Mountain Sickness (AMS), extreme trail injuries, or natural blockages, our head guide has direct authorization to coordinate emergency helicopter evacuation. Heli-lifts are launched from Pokhara Airport and can reach trail landing spots within 30 to 45 minutes, weather permitting.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Mandatory High-Altitude Travel Insurance</h3>
            <p className="text-stone-600 leading-relaxed">
              Every trekker must carry travel insurance that explicitly covers high-altitude hiking up to 5,000 meters and medical emergency helicopter evacuation. We require a printed copy of your policy and emergency contact number before departing Kathmandu. This card is used to guarantee costs directly with helicopter operators in emergencies.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Hospital Staging &amp; Care</h3>
            <p className="text-stone-600 leading-relaxed">
              Evacuated trekkers are flown directly to private hospitals in Pokhara or Kathmandu, which specialize in high-altitude medicine and mountain trauma care. Our office staff coordinates with your insurance provider, handles admissions, and ensures you receive first-class care from start to finish.
            </p>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile climate data from meteorological stations inside the ACA. All weather warnings are updated in real-time by checkpost coordinators.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Inquire About Safety and Book With Confidence</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Trek safely. Our local team is fully registered, licensed by TAAN and NTB, and carries comprehensive safety equipment on all mountain departures.
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
