"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Persona Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek for Couples
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan a romantic mountain getaway. Discover scenic lookouts, private room options at community lodges, pacing strategies, and visual highlights.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Secluded Romantic Escapade</h2>
          <p className="text-stone-600 leading-relaxed">
            The Khopra Ridge Trek is the perfect alternative to crowded classic loops for couples seeking raw nature, quiet forest walks, and stunning panoramas. Spending evenings watching the sunset over Dhaulagiri from the cozy dining room of a community lodge is an exceptionally intimate experience.
          </p>
          <p className="text-stone-600 leading-relaxed">
            While high-altitude community lodges are basic, lower-elevation villages like Ghandruk offer comfortable hotels with attached bathrooms and private balconies. We recommend a custom 7 to 9-day loop to enjoy the scenery at a relaxed pace.
          </p>
        </div>

        {/* Highlights for couples */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Highlights for Couples</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Private Room Options</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Although rooms are basic wood partitions, early bookings allow couples to secure private double rooms rather than sleeping in communal dorms.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Scenic Sunset Ridge</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Khopra Ridge (3,660m) offers some of the most spectacular, uninterrupted golden-hour sunsets over Dhaulagiri and the Annapurna range.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Heritage Stays</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Enjoy traditional Gurung guest houses in Ghandruk and organic farming homestays in Swanta for local culture and hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We arrange custom private tours for couples and honeymooners. We prioritize double-room bookings and arrange private jeep transfers for comfort.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Customize Your Couple&apos;s Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to design a romantic mountain itinerary with comfortable transport and private rooms? Contact our planning team.
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
