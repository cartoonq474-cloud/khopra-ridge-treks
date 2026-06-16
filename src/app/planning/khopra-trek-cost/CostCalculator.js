"use client";

import React, { useState } from "react";

export default function CostCalculator() {
  const [packSize, setPackSize] = useState(2);
  const [days, setDays] = useState(7);
  const [hasGuide, setHasGuide] = useState(true);
  const [hasPorter, setHasPorter] = useState(true);
  const [transportMode, setTransportMode] = useState("jeep"); // 'jeep' or 'bus'

  // Pricing constants (USD equivalents)
  const permitCost = 45; // ACAP ($30) + TIMS ($15)
  const foodLodgeRate = 30; // Per day per person
  const guideRate = 25; // Per day
  const porterRate = 18; // Per day (carries up to 20kg, shared by 2 people)
  const privateJeepRate = 140; // Round trip total group cost
  const publicBusRate = 15; // Round trip per person

  // Live calculations
  const totalPermits = permitCost * packSize;
  const totalFoodLodge = foodLodgeRate * days * packSize;
  const totalGuide = hasGuide ? guideRate * days : 0;
  const totalPorter = hasPorter ? porterRate * days * Math.ceil(packSize / 2) : 0;
  const totalTransport = transportMode === "jeep" ? privateJeepRate : publicBusRate * packSize;

  const grandTotal = totalPermits + totalFoodLodge + totalGuide + totalPorter + totalTransport;
  const perPersonCost = Math.round(grandTotal / packSize);

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-stone-950 font-sans">Interactive Cost Calculator</h3>
        <p className="text-xs text-stone-500 mt-1">
          Estimate your total and per-person cost dynamically based on your trek parameters.
        </p>
      </div>

      <div className="space-y-4">
        {/* Number of Trekkers */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">
            Number of Trekkers: <span className="text-emerald-700 text-sm font-black">{packSize}</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={packSize}
            onChange={(e) => setPackSize(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-bold">
            <span>1 Trekker</span>
            <span>5 Trekkers</span>
            <span>10 Trekkers</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">
            Trek Duration: <span className="text-emerald-700 text-sm font-black">{days} Days</span>
          </label>
          <input
            type="range"
            min="5"
            max="12"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-bold">
            <span>5 Days</span>
            <span>7 Days</span>
            <span>9 Days</span>
            <span>12 Days</span>
          </div>
        </div>

        {/* Guide & Porter Toggles */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => setHasGuide(!hasGuide)}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition duration-200 ${
              hasGuide
                ? "bg-emerald-50/50 border-emerald-500 text-emerald-950 font-bold"
                : "bg-white border-stone-200 text-stone-600 hover:border-stone-300"
            }`}
          >
            <span className="text-lg mb-1">🤠</span>
            <span className="text-xs">Include Guide</span>
            <span className="text-[10px] text-stone-400 mt-0.5">${guideRate}/day</span>
          </button>

          <button
            type="button"
            onClick={() => setHasPorter(!hasPorter)}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition duration-200 ${
              hasPorter
                ? "bg-emerald-50/50 border-emerald-500 text-emerald-950 font-bold"
                : "bg-white border-stone-200 text-stone-600 hover:border-stone-300"
            }`}
          >
            <span className="text-lg mb-1">🎒</span>
            <span className="text-xs">Include Porter</span>
            <span className="text-[10px] text-stone-400 mt-0.5">${porterRate}/day (Shared)</span>
          </button>
        </div>

        {/* Transportation Mode */}
        <div className="flex flex-col gap-1.5 pt-2">
          <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Pokhara to Trailhead Transfer</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTransportMode("jeep")}
              className={`p-3 rounded-2xl border text-center transition duration-200 ${
                transportMode === "jeep"
                  ? "bg-emerald-50/50 border-emerald-500 text-emerald-950 font-bold text-xs"
                  : "bg-white border-stone-200 text-stone-600 hover:border-stone-300 text-xs"
              }`}
            >
              🚙 Private Jeep
              <span className="block text-[10px] text-stone-400 mt-0.5">$140 (Group Split)</span>
            </button>
            <button
              type="button"
              onClick={() => setTransportMode("bus")}
              className={`p-3 rounded-2xl border text-center transition duration-200 ${
                transportMode === "bus"
                  ? "bg-emerald-50/50 border-emerald-500 text-emerald-950 font-bold text-xs"
                  : "bg-white border-stone-200 text-stone-600 hover:border-stone-300 text-xs"
              }`}
            >
              🚌 Public Bus
              <span className="block text-[10px] text-stone-400 mt-0.5">$15 / person</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Summary */}
      <div className="border-t border-stone-100 pt-6 space-y-3 text-sm text-stone-600">
        <div className="flex justify-between">
          <span>Permits total:</span>
          <span className="font-semibold text-stone-900">${totalPermits}</span>
        </div>
        <div className="flex justify-between">
          <span>Food &amp; Lodge total:</span>
          <span className="font-semibold text-stone-900">${totalFoodLodge}</span>
        </div>
        {(hasGuide || hasPorter) && (
          <div className="flex justify-between">
            <span>Staff support total:</span>
            <span className="font-semibold text-stone-900">${totalGuide + totalPorter}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Transportation total:</span>
          <span className="font-semibold text-stone-900">${totalTransport}</span>
        </div>

        <div className="border-t border-stone-100 pt-4 flex justify-between items-baseline">
          <span className="text-base font-bold text-stone-950">Grand Total:</span>
          <span className="text-2xl font-black text-emerald-700">${grandTotal}</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-wider">
          <span>Per Person Cost:</span>
          <span>${perPersonCost} / Person</span>
        </div>
      </div>

      <div className="pt-2">
        <a
          href="#booking"
          className="w-full text-center block bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-2xl shadow-sm transition duration-200"
        >
          Request Custom Itinerary &amp; Quote
        </a>
      </div>
    </div>
  );
}
