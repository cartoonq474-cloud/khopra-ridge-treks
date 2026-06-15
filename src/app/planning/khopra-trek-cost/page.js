"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [packSize, setPackSize] = useState(1);
  const [days, setDays] = useState(9);

  // Cost calculations
  const permitCost = 38; // TIMS + ACAP in USD
  const guideRate = 35; // Per day in USD
  const porterRate = 25; // Per day in USD (1 porter for 2 people)
  const foodLodgeRate = 30; // Daily average in USD
  const jeepCost = 140; // Total group roundtrip transfer Pokhara to Ghandruk/Nayapul

  const totalGuideCost = guideRate * days;
  const totalPorterCost = porterRate * days * Math.ceil(packSize / 2);
  const totalFoodLodge = foodLodgeRate * days * packSize;
  const totalPermits = permitCost * packSize;
  const totalJeeps = jeepCost;

  const grandTotal = totalGuideCost + totalPorterCost + totalFoodLodge + totalPermits + totalJeeps;
  const perPersonCost = Math.round(grandTotal / packSize);

  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 py-16 w-full flex-1 grid gap-12 lg:grid-cols-3">
        {/* Left column: Explanations & Tables */}
        <div className="lg:col-span-2 space-y-8">
          <div className="border-b border-stone-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Budget Planner</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
              Khopra Trek Cost Guide
            </h1>
            <p className="mt-4 text-stone-600 leading-relaxed font-medium">
              We believe in complete pricing transparency. Below is a detailed analysis of what you will spend along the community lodge trail.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Average Daily Cost Estimates</h3>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
                <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Expense Item</th>
                    <th className="px-6 py-4">Cost (Local Currency)</th>
                    <th className="px-6 py-4">Cost (USD Equivalent)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">ACAP Entry Permit</td>
                    <td className="px-6 py-4">3,000 NPR</td>
                    <td className="px-6 py-4">~$23 USD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">TIMS Registration Card</td>
                    <td className="px-6 py-4">2,000 NPR</td>
                    <td className="px-6 py-4">~$15 USD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Certified Local Guide</td>
                    <td className="px-6 py-4">4,000 - 4,500 NPR / day</td>
                    <td className="px-6 py-4">~$30 - $35 USD / day</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Porter (Carries 20kg max)</td>
                    <td className="px-6 py-4">3,200 - 3,500 NPR / day</td>
                    <td className="px-6 py-4">~$25 USD / day</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Daily Food &amp; Lodging</td>
                    <td className="px-6 py-4">3,500 - 4,000 NPR / day</td>
                    <td className="px-6 py-4">~$30 USD / day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Cost Analysis Guides */}
          <div className="border-t border-stone-200 pt-8 space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Detailed Cost Analysis Silos</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Explore our specialized pricing articles for detailed group discounts, private jeep estimates, porter ratios, and hidden trail fees:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-emerald-600">
              <Link href="/planning/budget-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Budget Trekking Tips &amp; Hacks
              </Link>
              <Link href="/planning/private-khopra-trek-cost" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Private Guided Tour Costs
              </Link>
              <Link href="/planning/group-trek-cost" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Group Tour Packaging Costs
              </Link>
              <Link href="/planning/guide-cost" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Guide Wages &amp; Selection Value
              </Link>
              <Link href="/planning/porter-cost" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Porter Wages &amp; Weight Limits
              </Link>
              <Link href="/planning/hidden-costs-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Hidden Trail Costs &amp; Shower/Charging Fees
              </Link>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Cost Calculator */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-stone-950">Interactive Cost Calculator</h3>
            <p className="mt-2 text-xs text-stone-500">Estimate your self-guided vs guided costs based on your group size.</p>

            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Number of Trekkers</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={packSize}
                  onChange={(e) => setPackSize(Math.max(1, parseInt(e.target.value) || 1))}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trek Duration (Days)</label>
                <input
                  type="number"
                  min="5"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Math.max(5, parseInt(e.target.value) || 5))}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="mt-8 border-t border-stone-100 pt-6 space-y-3">
              <div className="flex justify-between text-sm text-stone-600">
                <span>Permits Total:</span>
                <span className="font-semibold">${totalPermits}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Food &amp; Lodge Total:</span>
                <span className="font-semibold">${totalFoodLodge}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Guide &amp; Porter Total:</span>
                <span className="font-semibold">${totalGuideCost + totalPorterCost}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Private Transport:</span>
                <span className="font-semibold">${totalJeeps}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-stone-950 border-t border-stone-100 pt-4">
                <span>Estimated Total:</span>
                <span className="text-emerald-700">${grandTotal}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-wider">
                <span>Per Person:</span>
                <span>${perPersonCost} / person</span>
              </div>
            </div>

            <a
              href="/#book"
              className="mt-6 block w-full text-center rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 transition-all"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
}
