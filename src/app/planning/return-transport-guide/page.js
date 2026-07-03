import React from "react";
import Link from "next/link";

export default function Page() {
  const returnOptions = [
    {
      point: "1. Return from Nayapul (Main Exit)",
      details: "The most common exit. Taxis and private cars are readily available at the highway junction. Takes 1.5 hours to Pokhara Lakeside. Cost is $30 to $40 USD total."
    },
    {
      point: "2. Return from Tatopani (Hot Springs Route)",
      details: "If you descend via Tatopani, you can hire a private 4WD jeep to drive you directly to Pokhara. Takes 4 to 5 hours on bumpy dirt roads. Cost is $140 to $170 USD total."
    },
    {
      point: "3. Shared Jeep via Beni",
      details: "Take a local shared jeep from Tatopani to Beni bazaar (1.5 hours), then transfer to a public bus or shared taxi to Pokhara (3 hours). Total cost is NPR 1,200 (~$9 USD) per person."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transport Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Return Transport Guide: Heading Back to Pokhara
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan your exit logistics. A comprehensive guide on how to travel from trail exit points like Nayapul, Tatopani, and Beni back to Pokhara Lakeside.
          </p>
        </div>

        {/* Options list */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Exit Points Compared</h2>
          <div className="space-y-6">
            {returnOptions.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.point}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-booking warning */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Why Pre-Arranging Return Jeeps is Advisable</h3>
          <p className="text-xs leading-relaxed font-medium">While finding transport at Nayapul is easy, securing jeeps from remote nodes like Tatopani can be challenging in the peak trekking seasons. Drivers may inflate rates for stranded trekkers. We highly recommend pre-booking your return transfers through our local Kathmandu office to guarantee a locked-in rate and a reliable vehicle.
          </p>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Secure Your Return Transfer</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided community trek today. Let our local guides coordinate all permit registrations, checkposts, and guide insurance rules for you.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/planning/return-transport-guide',
  },
};
