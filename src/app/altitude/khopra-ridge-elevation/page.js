"use client";

import React from "react";
import Link from "next/link";
import ElevationProfile from "@/components/ElevationProfile";

export default function Page() {
  const chartData = [
    { day: "Day 1", village: "Tadapani", elev: 2630 },
    { day: "Day 2", village: "Bayeli Kharka", elev: 3425 },
    { day: "Day 3", village: "Chhistibung", elev: 2975 },
    { day: "Day 4", village: "Khopra Ridge", elev: 3660 },
    { day: "Day 5", village: "Khayer Lake Side-hike", elev: 4660 },
    { day: "Day 6", village: "Swanta Village", elev: 2200 },
    { day: "Day 7", village: "Ghorepani Village", elev: 2860 }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Altitude Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Elevation Chart &amp; Profile
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Acclimatize safely. Review our comprehensive day-by-day altitude progression chart, altitude metrics, and guides warnings for high-altitude passes.
          </p>
        </div>

        {/* Elevation Profile component */}
        <div className="mt-12 bg-white p-6 border border-stone-200 rounded-3xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Acclimatization Chart Profile</h2>
          <p className="text-stone-600 text-xs leading-relaxed">
            The profile maps out a moderate-to-high ascent. By climbing gradually and returning to lower villages for sleep (such as Swanta), you prevent AMS effectively.
          </p>
          <div className="p-4 bg-stone-50 border border-stone-100 rounded-2xl">
            <ElevationProfile />
          </div>
        </div>

        {/* Milestone Steps Table */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Daily Elevation Gains &amp; Drops</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-4">Day</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Elevation (Meters)</th>
                  <th className="px-6 py-4">Elevation (Feet)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {chartData.map((d, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{d.day}</td>
                    <td className="px-6 py-4">{d.village}</td>
                    <td className="px-6 py-4 font-bold text-emerald-600">{d.elev}m</td>
                    <td className="px-6 py-4 text-stone-400">{Math.round(d.elev * 3.28084)}ft</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Acclimatization graphs are updated yearly based on checking station logs. We recommend spending 2 nights at Khopra Ridge prior to attempting the Sacred Lake summit.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Have Altitude Concerns?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Contact our Pokhara office. Our guides are trained in wilderness medical first response to help you navigate Annapurna's vertical segments safely.
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
