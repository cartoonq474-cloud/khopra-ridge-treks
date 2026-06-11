"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const toursList = [
    {
      name: "9-Day Khopra Ridge & Sacred Lake",
      duration: "9 Days",
      elevation: "4,660m",
      difficulty: "Challenging",
      desc: "Our complete and recommended itinerary. Includes local flights, Kathmandu hotels, airport transfers, and a full day hike to the sacred alpine temple of Khayer Lake.",
      tag: "Best Seller",
      href: "/#book"
    },
    {
      name: "7-Day Khopra Ridge Express",
      duration: "7 Days",
      elevation: "4,660m",
      difficulty: "Challenging",
      desc: "Optimized for fit trekkers. Starts and ends directly in Pokhara, bypassing flights, while still including the sacred Khayer Lake side-hike and Poon Hill loop.",
      tag: "Popular Duration",
      href: "/planning/7-day-khopra-trek"
    },
    {
      name: "5-Day Khopra Ridge Rapid",
      duration: "5 Days",
      elevation: "3,660m",
      difficulty: "Moderate",
      desc: "Designed for hikers short on time or those wanting to avoid high elevations. Skips the 4,660m lake climb but retains the ridge sunrise panoramas.",
      tag: "Short Option",
      href: "/planning/5-day-khopra-trek"
    },
    {
      name: "Khayer Lake Pilgrimage Tour",
      duration: "9 Days",
      elevation: "4,660m",
      difficulty: "Challenging",
      desc: "A tour variants with an added focus on cultural pilgrimage rituals at the sacred Khayer Baraha Temple temple. Best for religious studies or custom groups.",
      tag: "Cultural",
      href: "/tours/khayer-lake-trek"
    },
    {
      name: "Khopra Ridge & Poon Hill Combo",
      duration: "10 Days",
      elevation: "4,660m",
      difficulty: "Challenging",
      desc: "For maximum view coverage. Combine the absolute silence of the Khopra Ridge forests with the iconic morning sunrise visual from Poon Hill.",
      tag: "Extended Loop",
      href: "/tours/khopra-poon-hill-trek"
    },
    {
      name: "Khopra & Mohare Danda Offbeat Tour",
      duration: "11 Days",
      elevation: "3,660m",
      difficulty: "Moderate",
      desc: "Explore both community-lodge circuits in the Annapurna range. Walk through Mohare Danda and Khopra Ridge for a full community eco-experience.",
      tag: "Eco Focus",
      href: "/tours/khopra-mohare-danda-trek"
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Tour Packages</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Our Khopra Ridge Trek Packages
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Find the perfect route variant. Explore durations, difficulty grades, and highlight details for all our curated community-lodge trekking packages.
          </p>
        </div>

        {/* Tours Showcase Grid */}
        <div className="mt-12 space-y-6">
          {toursList.map((t, i) => (
            <div 
              key={i} 
              className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm hover:shadow-md transition duration-300 relative flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Floating Tag */}
              <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase ${
                t.tag === "Best Seller" 
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-500/10" 
                  : "bg-stone-100 text-stone-600 border border-stone-200"
              }`}>
                {t.tag}
              </span>

              {/* Title & Info */}
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{t.duration}</span>
                <h3 className="text-2xl font-black text-stone-950">{t.name}</h3>
                <div className="text-xs space-y-1 text-stone-500 flex gap-4 pt-1">
                  <div>Max Altitude: <strong className="text-stone-700">{t.elevation}</strong></div>
                  <div>Difficulty: <strong className="text-stone-700">{t.difficulty}</strong></div>
                </div>
                <p className="mt-3 text-xs text-stone-400 leading-relaxed leading-relaxed">{t.desc}</p>
              </div>

              {/* Action Button */}
              <div className="shrink-0 pt-4 sm:pt-0">
                <Link
                  href={t.href}
                  className="w-full sm:w-auto inline-flex justify-center rounded-full bg-stone-950 px-6 py-3 text-xs font-bold text-white hover:bg-emerald-600 hover:text-white transition shadow-sm"
                >
                  Book Package
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our travel licenses are audited yearly by the Nepal Ministry of Tourism. All pricing packages include certified guide wages and ACAP permit entries.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
