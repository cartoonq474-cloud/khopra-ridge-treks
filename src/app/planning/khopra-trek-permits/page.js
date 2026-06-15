"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [season, setSeason] = useState("autumn");
  const [isGuided, setIsGuided] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});

  const baseItems = [
    "Durable trekking boots (broken in)",
    "4-5 pairs of synthetic trekking socks",
    "Waterproof rain jacket and pants",
    "Moisture-wicking base layers (2 tops, 1 bottom)",
    "Quick-dry hiking pants (2 pairs)",
    "Warm insulated jacket (down or synthetic fleece)",
    "Refillable water bottles or hydration bladder (2L min)",
    "Water purification tablets or UV filter",
    "Headlamp with spare batteries",
    "First aid kit (bandages, blister tape, rehydration salts, altitude medication)",
    "Sun protection (sunglasses, SPF 50+ sunscreen, sun hat)",
    "Personal toiletries and biodegradable wet wipes"
  ];

  const seasonalAdditions = {
    spring: [
      "Lightweight windbreaker",
      "Buff or neck gaiter for dust/wind",
      "Camera with dust-protection bag"
    ],
    monsoon: [
      "Heavy-duty pack cover (waterproof)",
      "Leech socks or salt spray",
      "Gore-tex trail gaiters",
      "Extra zip-lock bags for dry storage"
    ],
    autumn: [
      "Medium-weight thermal layers",
      "Fleece gloves",
      "Lightweight beanie"
    ],
    winter: [
      "Heavyweight thermal layers (Merino wool)",
      "High-loft down jacket (suitable for -10°C)",
      "Sub-zero sleeping bag rating (-15°C min)",
      "Warm insulated gloves &amp; liners",
      "Thermal beanie &amp; balaclava",
      "Crampons or microspikes (for icy ridge sections)"
    ]
  };

  const guidedAdditions = {
    solo: [
      "Offline GPX trail maps downloaded",
      "Emergency whistle &amp; local contact numbers list",
      "Multi-tool or pocket knife",
      "Physical trail map of Annapurna Conservation Area"
    ],
    guided: [
      "Passport copies for guide registration checkpoints",
      "Tip budget envelope for guide/porters"
    ]
  };

  const getFullChecklist = () => {
    return [
      ...baseItems,
      ...(seasonalAdditions[season] || []),
      ...(guidedAdditions[isGuided ? "guided" : "solo"] || [])
    ];
  };

  const toggleItem = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const checklist = getFullChecklist();
  const checkedCount = Object.keys(checkedItems).filter(item => checkedItems[item] && checklist.includes(item)).length;
  const progressPercent = Math.round((checkedCount / checklist.length) * 100) || 0;

  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 py-16 w-full flex-1 grid gap-12 lg:grid-cols-3">
        {/* Left column: Permits guide content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="border-b border-stone-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Required Documents</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
              Permits &amp; Regulations
            </h1>
            <p className="mt-4 text-stone-600 leading-relaxed font-medium">
              Every trekker entering the Annapurna region must hold valid permits. Learn where to purchase them and what documents you need to prepare.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">How to Obtain Your Permits</h3>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Step 1</span>
                <h4 className="mt-2 text-lg font-bold text-stone-950">Prepare Your Documents</h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Before visiting the permit offices, make sure you have:
                </p>
                <ul className="mt-2 text-xs text-stone-500 list-disc pl-5 space-y-1">
                  <li>Original passport and 2 passport photocopies.</li>
                  <li>4 passport-size photographs (with white backgrounds).</li>
                  <li>Local currency (credit cards are generally not accepted for permit purchases).</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Step 2</span>
                <h4 className="mt-2 text-lg font-bold text-stone-950">Visit the Tourism Office</h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Permits can be purchased directly from the <strong>Nepal Tourism Board (NTB)</strong> offices:
                </p>
                <ul className="mt-2 text-xs text-stone-500 list-disc pl-5 space-y-1">
                  <li><strong>Pokhara:</strong> NTB Office, Damside (Open Mon-Sun 9:00 AM - 3:00 PM).</li>
                  <li><strong>Kathmandu:</strong> NTB Office, Bhrikutimandap (Open Mon-Sun 9:00 AM - 3:00 PM).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Permit, Regulation & Transport Resources */}
          <div className="border-t border-stone-200 pt-8 space-y-6">
            <h3 className="text-2xl font-bold text-stone-905">Detailed Permits, Rules &amp; Transit Silos</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Read our specialized resources covering all government requirements, fee tables, and flight or road transit choices:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-emerald-600">
              <Link href="/planning/acap-permit-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; ACAP Permit Guide (2026 Rules)
              </Link>
              <Link href="/planning/tims-card-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; TIMS Registration Card Guide
              </Link>
              <Link href="/planning/do-you-need-a-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Guide Requirement Regulations
              </Link>
              <Link href="/planning/trekking-regulations-explained" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Trail Regulations &amp; Drone Approval
              </Link>
              <Link href="/planning/permit-fees-explained" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Permit Fees &amp; Fine Penalties
              </Link>
              <Link href="/planning/kathmandu-to-pokhara" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Kathmandu to Pokhara Flight/Bus
              </Link>
              <Link href="/planning/pokhara-to-kimche" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Pokhara to Kimche Jeep Route
              </Link>
              <Link href="/planning/pokhara-to-syauli-bazaar" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Pokhara to Syauli Bazaar Transfer
              </Link>
              <Link href="/planning/return-transport-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Return Transport: Beni/Tatopani
              </Link>
              <Link href="/planning/jeep-vs-bus-for-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
                &rarr; Jeep vs Public Bus Comparison
              </Link>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Packing Checklist Generator */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-stone-950">Packing Checklist Tool</h3>
            <p className="mt-2 text-xs text-stone-500">Generate a custom gear checklist for your specific season.</p>

            <div className="mt-6 space-y-4">
              {/* Select Season */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trekking Season</label>
                <select
                  value={season}
                  onChange={(e) => {
                    setSeason(e.target.value);
                    setCheckedItems({});
                  }}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-stone-600 font-medium"
                >
                  <option value="spring">Spring (Mar - May)</option>
                  <option value="monsoon">Monsoon (Jun - Aug)</option>
                  <option value="autumn">Autumn (Sep - Nov)</option>
                  <option value="winter">Winter (Dec - Feb)</option>
                </select>
              </div>

              {/* Select Style */}
              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">Hiring a Guide?</span>
                <button
                  onClick={() => {
                    setIsGuided(!isGuided);
                    setCheckedItems({});
                  }}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isGuided ? "bg-emerald-600" : "bg-stone-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isGuided ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Checklist items list */}
            <div className="mt-6 border-t border-stone-100 pt-6">
              <div className="flex justify-between items-center text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
                <span>Progress</span>
                <span className="text-emerald-600">{progressPercent}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden mb-6">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="max-h-[300px] overflow-y-auto space-y-2 pr-1 border border-stone-100 rounded-xl p-2 bg-stone-50/50">
                {checklist.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleItem(item)}
                    className="flex w-full items-start gap-2.5 text-left p-1 text-xs"
                  >
                    <span className={`h-4 w-4 border rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      checkedItems[item]
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-stone-300 bg-white"
                    }`}>
                      {checkedItems[item] && "✓"}
                    </span>
                    <span className={`leading-tight ${
                      checkedItems[item] ? "line-through text-stone-400" : "text-stone-700"
                    }`}>
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
