import React from "react";
import Link from "next/link";

export default function Page() {
  const groupStats = [
    { label: "Typical Group Size", value: "4 to 10 Trekkers" },
    { label: "Price Range", value: "$450 to $650 USD / person" },
    { label: "Porter Ratio", value: "1 Porter per 2 Trekkers" },
    { label: "Transfer Style", value: "Shared tourist bus or shared 4WD jeep" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Group Trek Cost &amp; Shared Packaging
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Learn how joining a small group departure reduces costs. Review typical group sizes, shared porter ratios, pricing parameters, and visual social benefits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          {groupStats.map((stat, i) => (
            <div key={i}>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Why Choose a Group Departure?</h2>
          <p>Joining a scheduled group departure is the most cost-effective way to experience the community lodges of the Khopra Ridge Trek without sacrificing comfort or safety. By sharing expenses like guide wages, trailhead jeep transfers, and administrative checkpost fees, you save up to 35% compared to private solo treks.
          </p>
          <p>Beyond the savings, group treks offer a rich social experience. Meeting like-minded travelers around the wood-fired community dining stoves creates lifelong friendships, while hiking with a cohesive group increases overall safety margins.
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
            <h3 className="text-2xl font-bold">Join an Upcoming Group</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Check our upcoming seasonal departures. We guarantee low prices, expert local guides, and pre-arranged permit logistics.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Check Departure Dates
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
