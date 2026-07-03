import React from "react";
import Link from "next/link";

export default function PackingListSection() {
  const categories = [
    {
      title: "Daily Wear",
      items: [
        "Lightweight moisture-wicking base layers and 1 thermal mid-layer.",
        "2 pairs of quick-drying trekking pants.",
        "2 long-sleeve shirts for sun protection and 2 short-sleeve shirts for warm afternoons.",
        "A warm hat and 2 pairs of gloves, 1 thin and 1 insulated.",
        "Waterproof hiking boots, broken in before departure.",
        "Casual shoes for evenings in Kathmandu and Pokhara.",
        "3 to 4 pairs of wool or synthetic hiking socks.",
        "1 scarf or buff for wind and dust protection."
      ]
    },
    {
      title: "Gear",
      items: [
        "A 30 to 40 liter daypack.",
        "1 pair of adjustable trekking poles.",
        "A sleeping bag rated to at least -10°C.",
        "A reusable, insulated water bottle.",
        "A headlamp with spare batteries.",
        "A power bank for charging electronics between outlets."
      ]
    },
    {
      title: "Hygiene and Safety",
      items: [
        "Biodegradable soap, toothbrush, and toothpaste.",
        "High-SPF sunscreen and SPF lip balm.",
        "Insect repellent for lower forest sections.",
        "A personal first-aid kit with blister treatment, antiseptic wipes, and any personal medication."
      ]
    },
    {
      title: "Electronics",
      items: [
        "A camera or smartphone for photos.",
        "A book or e-reader for the evenings.",
        "A notebook and pen for journaling the trek."
      ]
    }
  ];

  const garments = [
    { item: "Underwear", detail: "Breathable synthetic", qty: "3" },
    { item: "Socks", detail: "Wool", qty: "3" },
    { item: "Base layer pants", detail: "Merino wool", qty: "1" },
    { item: "Trekking shirts", detail: "Lightweight synthetic", qty: "2" },
    { item: "Rain pants", detail: "Lightweight synthetic", qty: "1" },
    { item: "Trekking pants", detail: "Lightweight synthetic", qty: "2" },
    { item: "Hiking boots", detail: "Waterproof, broken in", qty: "1 pair" },
    { item: "Camp shoes", detail: "Down booties or sandals", qty: "1 pair" },
    { item: "Gloves", detail: "Thin and insulated pairs", qty: "2" },
    { item: "Hat", detail: "Sun hat with neck cover", qty: "1" },
    { item: "Down jacket", detail: "High-loft, packable", qty: "1" },
    { item: "Windbreaker", detail: "Lightweight, packable", qty: "1" }
  ];

  const essentials = [
    {
      title: "Broken-in Boots",
      desc: "Waterproof, ankle-high boots prevent blisters on the stone steps near Ulleri and the loose gravel near Khayer Lake. Break boots in on at least 5 practice hikes before departure.",
      icon: "🥾"
    },
    {
      title: "-10°C Sleeping Bag",
      desc: "Lodge rooms above Tadapani have no heating. A sleeping bag rated to -10°C keeps you warm through the cold nights at Khopra Ridge and Dobato.",
      icon: "⛺"
    },
    {
      title: "Trekking Poles",
      desc: "Poles reduce knee strain on the long descents from Khopra Ridge to Swanta and from Poon Hill to Hile, both of which lose more than 1,000 m in a single day.",
      icon: "🚶"
    },
    {
      title: "Thermal Base Layers",
      desc: "Merino wool base layers wick sweat and retain warmth better than cotton, which stays wet and cold once you sweat through it on the climbs.",
      icon: "👕"
    },
    {
      title: "High-Loft Down Jacket",
      desc: "A packable down jacket handles the temperature swing between sunny midday trekking and the near-freezing mornings at Khopra Ridge and Khayer Lake.",
      icon: "🧥"
    },
    {
      title: "Water Purification",
      desc: "Single-use plastic bottles are banned inside the Annapurna Conservation Area. Bring purification tablets, a UV purifier, or a filter bottle to treat local water instead.",
      icon: "💧"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Preparation</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Packing List for Khopra Ridge Trek
          </h2>
          <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
            You should need this essential Packing List on Khopra Ridge Trek:
          </p>
        </div>

        {/* 6 Essentials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">6 Absolute Packing Essentials</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item, i) => (
              <div key={i} className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm hover:border-emerald-200 transition-all">
                <h4 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4 mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-stone-600">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Garment Table */}
        <div className="bg-[#0e1e1a] rounded-3xl p-8 shadow-xl border border-emerald-950 overflow-hidden">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">Garment List</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-stone-300">
              <thead className="text-xs uppercase bg-stone-900/50 text-emerald-500">
                <tr>
                  <th className="px-6 py-4 font-bold rounded-tl-xl">Item</th>
                  <th className="px-6 py-4 font-bold">Detail</th>
                  <th className="px-6 py-4 font-bold rounded-tr-xl">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/30">
                {garments.map((g, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{g.item}</td>
                    <td className="px-6 py-4">{g.detail}</td>
                    <td className="px-6 py-4">{g.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            Start Planning Your Trek
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
