"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const methods = [
    {
      name: "UV Purification Stations",
      cost: "NPR 80 - 150 per liter",
      pros: "Operated by the community lodge committees. Safe, certified drinking water treated with commercial UV filters, saving plastic waste."
    },
    {
      name: "Boiled Water",
      cost: "NPR 150 - 300 per liter (higher at ridges)",
      pros: "Boiling kills 100% of pathogens. Double benefit of warming your body up in cold high-altitude mornings and filling your thermos for the night."
    },
    {
      name: "Water Filtration Bottles / Tablets",
      cost: "Free (natural source water)",
      pros: "Use a hollow-fiber membrane filter bottle (e.g. LifeStraw or Sawyer) or add chlorine/aquatabs to river/tap water. Takes 30 mins to treat."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Drinking Water</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Hydration</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Drinking Water & Hydration Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Stay hydrated safely. Learn about the plastic bottle ban, water sterilization methods, purification costs, and local filling stations.
          </p>
        </div>

        {/* The Plastic Bottle Ban */}
        <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important: The Plastic Bottle Ban</h3>
          <p className="text-xs leading-relaxed font-medium">
            To combat the environmental impact of plastic pollution in the Himalayas, the Annapurna Conservation Area Project (ACAP) and the community lodge committees have implemented a strict ban on the sale of single-use plastic mineral water bottles beyond Ghandruk and Ghorepani. You cannot purchase bottled water on the high ridges of Dobato, Bayeli, or Khopra. You must carry reusable bottles or hydration bladders and sterilize your own water.
          </p>
        </div>

        {/* Purification Options */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Water Sterilization Options & Costs</h3>
          <div className="space-y-6">
            {methods.map((method, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{method.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {method.cost}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">{method.pros}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration Rules */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Hydration Rules for Altitude</h3>
          <p>
            When trekking at high altitudes (especially above the 3,000-meter threshold at Dobato, Khopra Ridge, and Khayer Lake), proper hydration is the single most important defense against Acute Mountain Sickness (AMS).
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Daily Volume:</strong> Drink between 4 and 5 liters of water daily.</li>
            <li><strong>Avoid Ice-Cold Water:</strong> Drinking freezing river water can cause cold spasms or cough. Keep your bottle warm inside your jacket, or mix in hot boiled water.</li>
            <li><strong>Electrolytes:</strong> Carry hydration powders or ORS packets to maintain mineral balances on long hiking days.</li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Trek Safely and Sustainably</h3>
            <p className="mt-4 text-emerald-150/80 text-sm leading-relaxed">
              Our guides carry high-performance Katadyn filters and backup purification tablets to ensure you always have access to safe drinking water.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Learn about our tours
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
