import React from "react";
import Link from "next/link";

export default function Page() {
  const guideStats = [
    { label: "Daily Wage Range", value: "$25 to $35 USD / day" },
    { label: "Permit Clearance", value: "Registered under TAAN / NTB" },
    { label: "First-Aid Training", value: "Wilderness Medical Responder Certified" },
    { label: "Tipping Standard", value: "15% to 20% of total wage (Recommended)" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Guide Cost: Payouts &amp; Value on the Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the daily costs of hiring a certified trekking guide in Nepal. Review wage scales, mountain insurance, tipping practices, and trail coordination value.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          {guideStats.map((stat, i) => (
            <div key={i}>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Where Does the Guide Fee Go?</h2>
          <p>The average cost for a licensed, English-speaking trekking guide ranges from **$25 to $35 USD per day**. This amount covers the guide&apos;s daily wage, their food and community lodge lodging along the trail, government checkpost insurance, and administrative fees.
          </p>
          <p>Hiring a guide directly helps the local mountain communities. By ensuring fair wage payouts, you directly support local families and the local mountain school programs financed by the community lodge network.
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
            <h3 className="text-2xl font-bold">Book a Guided Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Plan your guided trip today. We manage all paperwork, local flights, guides, and secure your lodge spaces along the community circuit.
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
