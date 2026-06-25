import React from "react";
import Link from "next/link";

export default function Page() {
  const hiddenCosts = [
    {
      item: "Hot Showers",
      cost: "NPR 200 to NPR 400 (~$1.50 to $3.00 USD)",
      note: "Lodges charge to heat water via gas geyser or firewood, especially at high nodes like Bayeli and Khopra Ridge."
    },
    {
      item: "Device Charging",
      cost: "NPR 100 to NPR 300 (~$0.75 to $2.25 USD)",
      note: "Charging phone batteries, power banks, and cameras. Rates are higher at high altitudes where solar power is limited."
    },
    {
      item: "Wi-Fi & Internet",
      cost: "NPR 200 to NPR 400 (~$1.50 to $3.00 USD)",
      note: "Satellite Wi-Fi cards are available at some lodges but can be slow. Mobile data is spotty."
    },
    {
      item: "Snacks, Beverages, and Beers",
      cost: "$5 to $10 USD / day (optional)",
      note: "Soft drinks, candy bars, and beer are hauled up by porters and horses. A bottle of beer at Khopra costs up to NPR 800 (~$6 USD)."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Hidden Costs of the Khopra Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Avoid budget surprises. A comprehensive checklist of small on-trail fees including hot showers, device charging, Wi-Fi cards, and standard tipping guidelines.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">On-Trail Extra Expenses</h2>
          <p>While your main package covers food and lodging, there are several small on-trail expenses that require cash. Because there are **no ATMs along the trail**, carrying sufficient Nepalese Rupees (NPR) is essential to avoid running out of money.
          </p>
        </div>

        {/* Table of hidden costs */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Typical On-Trail Extra Charges</h3>
          <div className="space-y-6">
            {hiddenCosts.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                <div className="sm:w-1/3">
                  <span className="text-sm font-extrabold text-stone-950 block">{item.item}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block">{item.cost}</span>
                </div>
                <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipping advice */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Tipping Guidelines for Guides &amp; Porters</h3>
          <p className="text-xs leading-relaxed">Tipping is not technically mandatory, but it is deeply expected in Nepalese trekking culture and represents a major part of guide and porter income. As a general standard:
          </p>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5 font-medium">
            <li><strong>Guide Tips:</strong> $10 to $15 USD per day from the group.</li>
            <li><strong>Porter Tips:</strong> $8 to $12 USD per day from the group.</li>
            <li><strong>Total Allocation:</strong>We recommend allocating approximately **$100 to $150 USD total** per trekker for tips at the end of the 9-day trek.</li>
          </ul>
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
            <h3 className="text-2xl font-bold">Secure Your All-Inclusive Package</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Want to skip the hassle of carrying cash for small trail fees? Book our premium guided package where permits, lodging, transport, and select hot drinks are fully pre-paid.
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
