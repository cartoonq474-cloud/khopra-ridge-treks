"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1">
      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Node Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Nayapul: The Trailhead Gateway
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Located on the Pokhara-Baglung Highway, Nayapul is the bustling transit town where many classic treks in the Annapurna Conservation Area begin and end.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">1,070 m (3,510 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Transit Distance</span>
            <p className="mt-1 text-sm font-bold text-stone-900">42 km from Pokhara</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Transport Options</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Bus, Jeep, Taxi</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Key Checkpoint</span>
            <p className="mt-1 text-sm font-bold text-stone-900">ACAP &amp; TIMS Office</p>
          </div>
        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Transport Hub Operations</h3>
            <p className="text-stone-600 leading-relaxed">
              Nayapul is accessed by a 1.5 to 2-hour road journey from Pokhara. Most trekkers use private 4WD jeeps arranged in advance, but shared local taxis and public buses departing from Pokhara&apos;s Baglung Bus Park are also available for budget travelers. It acts as the gateway to Ghandruk and Tikhedhunga.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Permit &amp; Safety Checkpoints</h3>
            <p className="text-stone-600 leading-relaxed">
              Immediately after crossing the suspension bridge at Nayapul, trekkers must register their permits at the local police and ACAP checkpoint. Ensure you have printed copies of your Annapurna Conservation Area Permit (ACAP) and Trekking Information Management System (TIMS) cards handy for registration.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Facilities &amp; Shops</h3>
            <p className="text-stone-600 leading-relaxed">
              The town is lined with local teashops, pharmacies, and small general stores. While you can purchase basic snacks, toilet paper, or bottled water here, we recommend buying all technical trekking gear and specialized medications in Kathmandu or Pokhara Lakeside beforehand.
            </p>
          </div>
        </div>

        {/* E-E-A-T AUTHOR FOOTNOTE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This node guide is reviewed by certified local guides based in Pokhara. We regularly update trail access routes, teahouse lists, and village details based on active checks.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to Explore the Annapurna Region?</h3>
          <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
            Our expert guides manage all logistical permits, lodging, transport, and safety. Join our next 9-Day Khopra Ridge trek.
          </p>
          <Link
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white border border-transparent"
          >
            Inquire &amp; Book Today
          </Link>
        </div>
      </div>
    </div>
  );
}
