import React from "react";
import Link from "next/link";

export default function Page() {
  const budgetTable = [
    { item: "ACAP Permit", cost: "NPR 3,000 (~$23 USD)", details: "One-time entry fee for international trekkers." },
    { item: "TIMS Card", cost: "NPR 2,000 (~$15 USD)", details: "One-time registration card." },
    { item: "Community Lodging", cost: "$5 to $8 USD / night", details: "Twin-shared basis. Rates are standardized by the community project." },
    { item: "Daily Meals & Water", cost: "$15 to $20 USD / day", details: " Dal Bhat, noodle soups, black tea, and filtered water." },
    { item: "Local Transport (Bus/Jeep)", cost: "$10 to $15 USD total", details: "Shared public jeeps from Pokhara to the trailhead." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Budget Khopra Trek Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">How to complete the community lodge circuit on a budget. Detailed daily expense analysis, permit fees, transport choices, and money-saving trail hacks.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">How Much Does a Budget Trek Cost?</h2>
          <p>An independent, budget-oriented trekker sharing the cost of a guide can expect to spend approximately **$25 to $35 USD per day** on the trail. This includes all community lodging, local transport, standard meals, and water.
          </p>
          <p>Because the lodges along the Khopra trail are community-owned, prices for food and rooms are standardized and highly reasonable compared to commercial routes like Annapurna Base Camp.
          </p>
        </div>

        {/* Budget Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Estimated Budget Breakdown</h2>
          <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Expense Item</th>
                  <th className="px-6 py-4">Approx. Cost</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs text-stone-600">
                {budgetTable.map((item, i) => (
                  <tr key={i} className="hover:bg-stone-50/50">
                    <td className="px-6 py-4 font-bold text-stone-900">{item.item}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                    <td className="px-6 py-4">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Money saving hacks */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Top Budget Trail Hacks</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Stick to Dal Bhat:</strong>The local dish offers free refills of rice, soup, and curry, keeping you full for hours on a single price.</li>
            <li><strong>Water Purification Tablets:</strong>Buying bottled mineral water at high altitude costs $1.50 to $3.00 per bottle. Use purification drops or tablets with tap water to save up to $20 USD.</li>
            <li><strong>Public Transportation:</strong>Take the local bus or shared jeep from Pokhara instead of booking a private tourist car. Shared transport costs a fraction of the price.</li>
          </ul>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Book a Budget-Friendly Package</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We offer shared group treks and budget guided options. Let us arrange your TIMS/ACAP permits, local transfers, and secure your community lodge beds.
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
