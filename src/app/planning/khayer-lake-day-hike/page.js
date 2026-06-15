"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const steps = [
    { time: "5:00 AM", event: "Early Start", desc: "Depart the Khopra Ridge community lodge in the pitch dark. Use headlamps and hike slowly to warm up your muscles." },
    { time: "7:00 AM", event: "First Ridge Saddle View", desc: "Watch the golden sunrise hit the peak of Dhaulagiri across the valley. Take a brief hydration and snack break." },
    { time: "9:30 AM", event: "Glacial Moraine Crossing", desc: "Leave the grassy pastures behind and navigate the rocky moraine paths. Pacing must be slow and steady." },
    { time: "11:00 AM", event: "Arrival at Khayer Lake", desc: "Reach the sacred lake at 4,660m. Explore the shoreline, visit the Khayer Baraha temple, and photograph the towering wall of Annapurna South." },
    { time: "12:30 PM", event: "Begin Descent", desc: "Start the return hike. Weather patterns often deteriorate in the afternoon, bringing clouds and winds. Walk carefully on loose shale." },
    { time: "4:00 PM", event: "Return to Khopra Ridge", desc: "Arrive back at the community lodge. Relax in the heated dining hall and celebrate a successful climb." }
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
          <span className="text-stone-800">Day Hike Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Day Excursion</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake Day Hike Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            The ultimate summit timeline. A detailed hour-by-hour pacing schedule, trail walkthrough, and checkpoints for the 10-hour round-trip trek.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 text-center">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Total Distance</span>
            <p className="mt-1 text-sm font-bold text-stone-900">16 km / 9.9 mi</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation Gain</span>
            <p className="mt-1 text-sm font-bold text-stone-900">+1,000m / +3,280ft</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Hiking Time</span>
            <p className="mt-1 text-sm font-bold text-stone-900">8 - 10 Hours</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Difficulty</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Strenuous</p>
          </div>
        </div>

        {/* Daily Schedule Timeline */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Hour-by-Hour Hiking Timeline</h3>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="md:w-1/4 shrink-0">
                  <span className="text-sm font-extrabold text-stone-950 block">{step.time}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{step.event}</span>
                </div>
                <div className="md:w-3/4 text-xs text-stone-500 leading-relaxed md:pt-1">
                  {step.desc}
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
            <h3 className="text-2xl font-bold">Secure an All-Inclusive Summit Package</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guides arrange advance safety planning, carry pulse oximeters, coordinate emergency procedures, and pace your ascent safely to guarantee a successful day hike.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Request booking
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
