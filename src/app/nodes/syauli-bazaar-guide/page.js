"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const transits = [
    {
      mode: "Local Jeep / Taxi from Pokhara",
      time: "2.5 Hours",
      cost: "$70 - $90 USD (per vehicle)",
      desc: "The fastest way to reach Syauli Bazaar. Drive through Nayapul and Birethanti, continuing along the dirt river road."
    },
    {
      mode: "Local Bus from Pokhara",
      time: "4 - 5 Hours",
      cost: "$3 - $5 USD (per person)",
      desc: "Buses drop passengers off at Nayapul or Birethanti. You must walk or catch a shared local jeep for the remaining dirt segment."
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
          <span className="text-stone-800">Syauli Bazaar</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transit Node</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Syauli Bazaar Trailhead Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Starting along the river. Learn about transport options, trailheads, and hiking pathways at Syauli Bazaar.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Lower Modi Khola Entry Point</h2>
          <p>
            Syauli Bazaar (1,220m / 4,002ft) is a small riverside village settlement sitting on the banks of the Modi Khola. It represents the lowest vehicular access trailhead for trekkers wishing to enter the Annapurna Conservation Area via Ghandruk.
          </p>
          <p>
            While many trekkers drive all the way up to Kimche or Ghandruk to skip the lower walking sections, starting at Syauli Bazaar offers a beautiful hike along agricultural fields, small waterfalls, and Gurung farmhouses, helping you ease into the trekking routine.
          </p>
        </div>

        {/* Transits list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Transport to Syauli Bazaar</h3>
          <div className="space-y-6">
            {transits.map((tr, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{tr.mode}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {tr.time} | {tr.cost}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">{tr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiking Profile to Ghandruk */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">The Ascent to Ghandruk</h3>
          <p>
            If you start your trek in Syauli Bazaar, you will face a steep, stone staircase climb to Ghandruk village. The hike covers:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Elevation Gain:</strong> +720m (climbing from 1,220m to 1,940m).</li>
            <li><strong>Hiking Time:</strong> 2.5 to 3.5 hours of continuous climbing.</li>
            <li><strong>Trail Type:</strong> Mostly stone steps winding through millet fields and local community settlements.</li>
          </ul>
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
            <h3 className="text-2xl font-bold">Plan Your Syauli Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              We arrange private hotel pickups in Pokhara with comfortable jeeps driving directly to Syauli Bazaar or higher trailheads.
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
