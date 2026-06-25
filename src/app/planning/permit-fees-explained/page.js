import React from "react";
import Link from "next/link";

export default function Page() {
  const permitFeesList = [
    {
      item: "ACAP Permit (Foreigners)",
      cost: "NPR 3,000 (~$23 USD)",
      details: "Standard entry fee. Must be obtained in Kathmandu or Pokhara before starting."
    },
    {
      item: "TIMS Card (Foreigners)",
      cost: "NPR 2,000 (~$15 USD)",
      details: "Mandatory tracking registration database card."
    },
    {
      item: "SAARC Nationals (ACAP)",
      cost: "NPR 1,000 (~$8 USD)",
      details: "Discounted entry fee for citizens of SAARC countries (India, Bangladesh, etc.)."
    },
    {
      item: "SAARC Nationals (TIMS)",
      cost: "NPR 1,000 (~$8 USD)",
      details: "Discounted tracking card registration for SAARC passport holders."
    },
    {
      item: "Trailhead Double-Fee Penalty",
      cost: "NPR 6,000 (~$46 USD)",
      details: "Charged if you arrive at Birethanti checkpoint without purchasing your ACAP permit beforehand."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Permit Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Permit Fees &amp; Double-Fee Warnings
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Review detailed government permit fees. Learn about foreigner pricing, SAARC country discounts, and how to avoid the trailhead double-payment fine.
          </p>
        </div>

        {/* Fees list */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Detailed Fee Breakdown</h2>
          <div className="space-y-6">
            {permitFeesList.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                <div className="sm:w-1/3">
                  <span className="text-sm font-extrabold text-stone-950 block">{item.item}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block">{item.cost}</span>
                </div>
                <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local support details */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important Double-Fee Advisory</h3>
          <p className="text-xs leading-relaxed font-medium">We highly advise trekkers to never head to Nayapul hoping to buy permits at checkposts. Government rangers are authorized to charge a **100% fine penalty** (NPR 6,000 instead of NPR 3,000) for ACAP permits purchased at the park gate. Always secure your registration copies at NTB Pokhara or NTB Kathmandu first.
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
            <h3 className="text-2xl font-bold">Simplify Your Permit Logistics</h3>
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
