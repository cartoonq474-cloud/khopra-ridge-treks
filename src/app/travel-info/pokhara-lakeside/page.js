import React from "react";
import Link from "next/link";

export default function Page() {
  const lakesideStats = [
    { label: "Transit Role", value: "Trek Gateway City" },
    { label: "Luggage Storage", value: "Free at Partner Hotels" },
    { label: "Gear Availability", value: "Rental Shops Everywhere" },
    { label: "Kathmandu Flights", value: "25-min Domestic Flights" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Travel Information</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Pokhara Lakeside: The Gateway to the Annapurnas
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan your transit and preparation. Review gear rental options, luggage storage services, ATMs, and lakefront rest ideas in Lakeside Pokhara before and after your trek.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {lakesideStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Pre-Trek Gear Prep and Rental</h3>
            <p className="text-stone-600 leading-relaxed">
              Lakeside Pokhara is packed with high-quality trekking gear outlets and rental shops. You can purchase or rent essential items like down jackets, sub-zero sleeping bags, trekking poles, and rain gear at a fraction of the cost in Western countries. Our guides will accompany you during prep day to negotiate fair prices and ensure you get authentic gear.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Luggage Storage and Security</h3>
            <p className="text-stone-600 leading-relaxed">
              You do not need to carry your city clothes, suitcases, or non-trekking gear into the mountains. We provide secure, free luggage storage at our partner hotels in Lakeside Pokhara. Leave your extra bags locked safely at the hotel during the trek, and pick them up upon your return.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">ATMs, Cash, and Connectivity</h3>
            <p className="text-stone-600 leading-relaxed">
              While Lakeside Pokhara has numerous ATMs accepting international cards, cash is king in the mountains. Ensure you withdraw enough Nepali Rupees (NPR) to cover your personal daily trail expenses (such as hot showers, battery charging, and snacks) because card payments and active ATMs are completely unavailable once you leave the trailhead.
            </p>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We update Pokhara transit databases weekly. All recommended rental shops and flight coordination points are actively vetted for quality and safety.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Seamless Pokhara Gateway Package</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Our all-inclusive package covers tourist bus travel, Pokhara hotel bookings, private trailhead jeeps, and guide fees. Focus on the trail while we handle the logistics.
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
