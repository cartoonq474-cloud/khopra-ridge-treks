import React from "react";
import Link from "next/link";

export default function Page() {
  const options = [
    {
      mode: "Private 4WD Jeep (Recommended)",
      duration: "2.5 to 3 hours",
      cost: "$100 to $120 USD total",
      details: "Offers comfortable transport. Easily navigates the final rough dirt track climbing from Birethanti to Kimche."
    },
    {
      mode: "Local Shared Jeep",
      duration: "3.5 to 4.5 hours",
      cost: "NPR 600 (~$5 USD) / seat",
      details: "Departs from Hari Chowk in Pokhara. Highly crowded and slow, but cheap."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transport Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Pokhara to Kimche Trailhead Transport
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan your transfer to the starting point of the Ghandruk climb. Compare private 4WD jeep options and local shared jeep departures from Pokhara.
          </p>
        </div>

        {/* Options list */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Transport Options</h2>
          <div className="space-y-6">
            {options.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-sm font-extrabold text-stone-950 block">{item.mode}</span>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-emerald-600">
                  <span>Duration: {item.duration}</span>
                  <span>•</span>
                  <span>Cost: {item.cost}</span>
                </div>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trailhead details */}
        <div className="mt-16 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Why Start Trekking at Kimche?</h3>
          <p>
            Kimche (1,640m) has become the preferred trailhead for hikers who want to bypass the dusty dirt roads between Nayapul and Ghandruk. Once your jeep drops you at the Kimche parking area, it is a pleasant, scenic **1-hour stone step climb** to reach the main village center of Ghandruk (1,940m), making it an easy first day of hiking.
          </p>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Secure Your Trailhead Transfer</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book our guided community trek today. Let our local guides coordinate all permit registrations, checkposts, and guide insurance rules for you.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
