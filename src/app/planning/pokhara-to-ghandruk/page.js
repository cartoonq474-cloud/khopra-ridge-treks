"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const options = [
    {
      type: "Private Jeep (Recommended)",
      cost: "7,000 - 9,000 NPR (~$55 - $70 USD)",
      time: "2.5 - 3 hours",
      desc: "Direct pick-up from Pokhara Lakeside hotels. Reaches all the way to Ghandruk village or Kimche trailhead. Highly comfortable, flexible stops, and recommended for groups or families.",
      badge: "Fastest & Safest",
      icon: "🚙"
    },
    {
      type: "Local Bus",
      cost: "400 - 600 NPR (~$3 - $5 USD) per person",
      time: "4.5 - 5.5 hours",
      desc: "Departs from Baglung Bus Park in Pokhara. Slow and frequently stops to load goods and local passengers. Trails through unpaved sections; can be bumpy and crowded.",
      badge: "Budget Option",
      icon: "🚌"
    },
    {
      type: "Local Shared Taxi",
      cost: "2,000 - 2,500 NPR (~$15 - $20 USD) per person",
      time: "3.5 - 4 hours",
      desc: "Shared taxi from Hari Chowk in Pokhara. Departs once all seats (4-5 passengers) are filled. A middle-ground budget option, though space is highly confined.",
      badge: "Shared Route",
      icon: "🚗"
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trailhead Logistics</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Pokhara to Ghandruk Transportation Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Learn how to reach Ghandruk village (the classic starting point of the Khopra Ridge Trek) from Pokhara by private jeep, local bus, or shared taxi.
          </p>
        </div>

        {/* Transportation Options Cards */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Transport Comparison</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {options.map((opt, i) => (
              <div 
                key={i} 
                className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      opt.badge === "Fastest & Safest" 
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-500/10" 
                        : "bg-stone-100 text-stone-600 border border-stone-200"
                    }`}>
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-stone-950 text-base mt-4">{opt.type}</h3>
                  <div className="mt-3 text-xs space-y-1 text-stone-500">
                    <div>Duration: <strong className="text-stone-700">{opt.time}</strong></div>
                    <div>Est. Cost: <strong className="text-stone-700">{opt.cost}</strong></div>
                  </div>
                  <p className="mt-4 text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Road Conditions Details */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Road Conditions &amp; Trailheads</h2>
          <p className="text-stone-600 leading-relaxed">
            The road from Pokhara to Nayapul (approx. 42km) is paved and sits along the main Baglung Highway. From Nayapul, the road turns off onto a dirt mountain track that winds upwards alongside the Modi Khola river.
          </p>
          <p className="text-stone-600 leading-relaxed">
            During the monsoon season (June to September), mudslides and water crossings can make the unpaved segments from Nayapul to Ghandruk impassable for standard cars. Four-wheel drive (4WD) private jeeps are highly recommended year-round to avoid delays or getting stuck.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We monitor road closures and highway construction records daily. Our private transfer jeeps are operated by certified, experienced mountain drivers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Private Jeep Transfer</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to arrange a private 4WD jeep pick-up directly from Pokhara Airport or Lakeside hotel? We handle all logistics seamlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book Transfer
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
