"use client";
import React, { useState } from "react";

export default function PricingSection({ rates7Days, rates9Days }) {
  const [pricingDuration, setPricingDuration] = useState(9);
  const [pricingPax, setPricingPax] = useState(2);

  const activeRates = pricingDuration === 9 ? rates9Days : rates7Days;
  const applicableTier = activeRates.find(t => pricingPax >= t.minPax && pricingPax <= t.maxPax) || activeRates[0];
  const perPersonPrice = applicableTier.price;
  const totalTripCost = (pricingPax * perPersonPrice).toLocaleString();

  return (
    <>
      {/* PRICING & COST CALCULATOR */}
      <section id="pricing" className="py-24 bg-stone-100 border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Trek Cost</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Interactive Pricing & Group Discounts
            </h2>
            <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
              Select your itinerary and group size to calculate your exact package cost. Enjoy automatically applied group discounts.
            </p>
          </div>

          {/* Pricing Controls: Duration selector and Pax counter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 max-w-4xl mx-auto bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
            {/* Duration Tab Switcher */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Select Itinerary Duration</label>
              <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200/60 shadow-inner">
                <button
                  type="button"
                  onClick={() => setPricingDuration(9)}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pricingDuration === 9 
                      ? "bg-[#0b1717] text-white shadow-sm" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  9-Day Core Route
                </button>
                <button
                  type="button"
                  onClick={() => setPricingDuration(7)}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pricingDuration === 7 
                      ? "bg-[#0b1717] text-white shadow-sm" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  7-Day Express Route
                </button>
              </div>
            </div>

            {/* Separator on desktop */}
            <div className="hidden md:block h-12 w-px bg-stone-200" />

            {/* Group Size (Pax) Input Counter */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Number of Trekkers (Pax)</label>
              <div className="flex items-center justify-between bg-stone-100 px-4 py-2 rounded-2xl border border-stone-200/60 shadow-inner">
                <button
                  type="button"
                  onClick={() => setPricingPax((prev) => Math.max(1, prev - 1))}
                  className="h-10 w-10 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-bold text-lg flex items-center justify-center transition-all cursor-pointer select-none"
                >
                  −
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-black text-stone-900 leading-none">{pricingPax}</span>
                  <span className="text-[9px] font-semibold text-stone-400 uppercase tracking-widest mt-0.5">
                    {pricingPax === 1 ? "Trekker (Solo)" : "Trekkers"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPricingPax((prev) => Math.min(25, prev + 1))}
                  className="h-10 w-10 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-bold text-lg flex items-center justify-center transition-all cursor-pointer select-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Layout */}
          <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
            
            {/* LEFT COLUMN: STANDARD PRICE CARD WITH RIBBON */}
            <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Ribbon Header */}
              <div className="absolute top-0 left-0 w-full">
                <div className="relative bg-emerald-700 text-white py-3.5 px-8 font-black text-sm uppercase tracking-widest text-center shadow-md">
                  Standard Price
                </div>
              </div>

              {/* Price Details Body */}
              <div className="mt-14 pt-6">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                  Per Person, Min 2 Pax - {pricingDuration} Days
                </span>
                
                {/* Dynamically Resolved Price per Person */}
                <div className="mt-4 flex items-baseline gap-1.5 justify-center">
                  <span className="text-3xl font-black text-emerald-700">$</span>
                  <span className="text-6xl font-black text-emerald-700 tracking-tight">{perPersonPrice}</span>
                  <span className="text-base font-bold text-stone-400 uppercase tracking-wider ml-1">USD</span>
                </div>

                {/* Total Price breakdown */}
                {pricingPax > 1 ? (
                  <div className="mt-6 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex justify-between items-center text-left">
                    <div>
                      <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest block">Total Package Cost</span>
                      <span className="text-sm text-stone-500 font-medium">({pricingPax} travellers × ${perPersonPrice})</span>
                    </div>
                    <span className="text-xl font-black text-emerald-800">${totalTripCost} USD</span>
                  </div>
                ) : (
                  <div className="mt-6 p-4 rounded-2xl bg-[#faf9f5]/80 border border-stone-200/60 text-center text-stone-500 text-xs leading-relaxed font-normal">
                    Solo trek rate is slightly higher to cover dedicated guide and room costs. Save by inviting travel partners!
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="#book"
                  className="block w-full text-center rounded-2xl bg-emerald-50 border border-emerald-500/30 hover:border-emerald-500/60 py-3.5 text-xs font-black text-emerald-700 uppercase tracking-widest transition-all hover:scale-[1.02]"
                >
                  Customize Trip
                </a>
                <a
                  href="#book"
                  className="block w-full text-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-black text-white uppercase tracking-widest shadow-md transition-all hover:scale-[1.02] shadow-emerald-950/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: DISCOUNTED RATES LIST */}
            <div className="lg:col-span-7 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 mb-6">
                  Discounted Group Prices
                </h3>

                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                  <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                    <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="px-6 py-4">Pax (Group Size)</th>
                        <th className="px-6 py-4 text-right">Price per Person</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                      {activeRates.map((tier) => {
                        // Check if this row matches the user's selected Pax group size
                        const isSelectedRow = pricingPax >= tier.minPax && pricingPax <= tier.maxPax;
                        return (
                          <tr 
                            key={tier.label} 
                            className={`transition-all duration-300 ${
                              isSelectedRow 
                                ? "bg-emerald-50 font-bold text-emerald-900 shadow-sm" 
                                : "hover:bg-stone-50/50"
                            }`}
                          >
                            <td className="px-6 py-4 flex items-center gap-3">
                              {isSelectedRow && (
                                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                              )}
                              <span>{tier.label} Pax</span>
                            </td>
                            <td className="px-6 py-4 text-right font-black">
                              US$ {tier.price}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* EEAT Booking Trust Footer */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-3 text-stone-400 text-xs">
                <span className="text-lg">🛡️</span>
                <p className="leading-relaxed font-normal">
                  All Nirvana Trails packages include government permits, accommodation, tourist bus transit, private jeeps, and full guide/porter insurance coverage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}