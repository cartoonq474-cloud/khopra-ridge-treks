"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [season, setSeason] = useState("autumn"); // autumn, winter, monsoon
  const [style, setStyle] = useState("guided"); // guided, solo
  const [checkedItems, setCheckedItems] = useState({});

  // Base list of items
  const baseChecklist = {
    clothing: [
      { id: "c1", name: "Moisture-wicking base layers (2-3 sets)", always: true },
      { id: "c2", name: "Trekking shirts (synthetic/merino wool)", always: true },
      { id: "c3", name: "Warm fleece jacket or active layer", always: true },
      { id: "c4", name: "Convertible hiking pants (2 pairs)", always: true },
      { id: "c5", name: "Heavyweight down jacket (thermal rating -10°C)", always: false, seasons: ["winter", "autumn"] },
      { id: "c6", name: "Monsoon windbreaker & waterproof rain pants", always: false, seasons: ["monsoon"] },
      { id: "c7", name: "Thermal gloves, beanie, and sun hat", always: true }
    ],
    footwear: [
      { id: "f1", name: "Broken-in waterproof hiking boots", always: true },
      { id: "f2", name: "Camp shoes (sneakers or light sandals)", always: true },
      { id: "f3", name: "Merino wool trekking socks (3-4 pairs)", always: true },
      { id: "f4", name: "Breathable liner socks (helps prevent blisters)", always: true }
    ],
    gear: [
      { id: "g1", name: "Trekking poles (highly recommended for descents)", always: true },
      { id: "g2", name: "Headlamp with spare batteries", always: true },
      { id: "g3", name: "UV-filtered sunglasses", always: true },
      { id: "g4", name: "Lightweight daypack (20L-30L with rain cover)", always: true },
      { id: "g5", name: "Heavyweight internal frame backpack (50L-65L)", always: false, styles: ["solo"] },
      { id: "g6", name: "Sleeping bag (comfort rating -15°C)", always: false, styles: ["solo"] }
    ],
    medical: [
      { id: "m1", name: "Personal first-aid kit & oximeter", always: true },
      { id: "m2", name: "Water purification tablets (Chlorine Dioxide)", always: true },
      { id: "m3", name: "Altitude medication (Diamox/Acetazolamide)", always: true },
      { id: "m4", name: "Sunscreen SPF 50+ & lip balm", always: true }
    ],
    documents: [
      { id: "d1", name: "Passport (valid for at least 6 months)", always: true },
      { id: "d2", name: "ACAP entry permit & TIMS card", always: true },
      { id: "d3", name: "Travel insurance documentation (covering evacuation up to 5,000m)", always: true },
      { id: "d4", name: "Cash in Nepalese Rupees (no ATMs on the ridge)", always: true }
    ]
  };

  const getFilteredItems = (category) => {
    return baseChecklist[category].filter((item) => {
      if (item.always) return true;
      if (item.seasons && !item.seasons.includes(season)) return false;
      if (item.styles && !item.styles.includes(style)) return false;
      return true;
    });
  };

  const handleToggle = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { key: "clothing", label: "Clothing & Layers", emoji: "👕", code: "1f455" },
    { key: "footwear", label: "Footwear & Socks", emoji: "🥾", code: "1f97e" },
    { key: "gear", label: "Technical Gear", emoji: "🎒", code: "1f392" },
    { key: "medical", label: "Medical & Hygiene", emoji: "💊", code: "1f48a" },
    { key: "documents", label: "Documents & Cash", emoji: "📄", code: "1f4c4" }
  ];

  // Calculate overall progress
  const allFilteredItems = categories.flatMap(c => getFilteredItems(c.key));
  const checkedCount = allFilteredItems.filter(item => checkedItems[item.id]).length;
  const progressPercent = allFilteredItems.length ? Math.round((checkedCount / allFilteredItems.length) * 100) : 0;

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased print:bg-white print:text-black">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 print:border-none print:pb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 print:hidden">Authority Asset</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Interactive Trek Packing Checklist
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium print:hidden">
            Customize your gear list dynamically based on the month you are traveling and whether you have hired porter support. Check off items or print for offline use.
          </p>
        </div>

        {/* Dynamic Controls Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 bg-white p-6 border border-stone-200 rounded-3xl shadow-sm print:hidden">
          
          {/* Season Selector */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Trek Season</span>
            <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200">
              {[
                { key: "autumn", label: "Autumn/Spring" },
                { key: "winter", label: "Winter" },
                { key: "monsoon", label: "Monsoon" }
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSeason(s.key)}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                    season === s.key 
                      ? "bg-white text-stone-950 shadow-sm border border-stone-200/50" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support Style Selector */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Trekking Style</span>
            <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200">
              {[
                { key: "guided", label: "Guided (With Porters)" },
                { key: "solo", label: "Solo (Carry Own Gear)" }
              ].map((st) => (
                <button
                  key={st.key}
                  onClick={() => setStyle(st.key)}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                    style === st.key 
                      ? "bg-white text-stone-950 shadow-sm border border-stone-200/50" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="mt-8 bg-emerald-950 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
          <div className="space-y-1">
            <h4 className="font-bold text-base">Your Packing Progress</h4>
            <p className="text-xs text-emerald-200">
              Checked off <strong className="text-white">{checkedCount}</strong> of <strong className="text-white">{allFilteredItems.length}</strong> required items
            </p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="h-2 w-48 bg-emerald-900/60 rounded-full overflow-hidden shrink-0">
              <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="text-emerald-400 font-extrabold text-lg shrink-0">{progressPercent}%</span>
          </div>
        </div>

        {/* Checklists Display */}
        <div className="mt-12 space-y-10">
          {categories.map((cat) => {
            const items = getFilteredItems(cat.key);
            if (!items.length) return null;
            
            return (
              <div key={cat.key} className="space-y-4 print:space-y-2">
                <h3 className="text-xl font-black text-stone-950 flex items-center gap-2.5 pb-2 border-b border-stone-200">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${cat.code}.svg`}
                    alt={cat.emoji}
                    className="w-7 h-7 object-contain select-none pointer-events-none"
                  />
                  {cat.label}
                </h3>
                
                <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-1">
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => handleToggle(item.id)}
                      className={`p-4 bg-white border rounded-2xl flex items-start gap-3 cursor-pointer select-none transition ${
                        checkedItems[item.id] 
                          ? "border-emerald-500/50 bg-emerald-50/10" 
                          : "border-stone-200 hover:border-stone-300"
                      } print:border-none print:p-1`}
                    >
                      <input 
                        type="checkbox" 
                        checked={!!checkedItems[item.id]} 
                        onChange={() => {}} // handled by div click
                        className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                      />
                      <span className={`text-xs text-stone-700 leading-snug ${checkedItems[item.id] ? "line-through text-stone-400" : ""}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4 print:hidden">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This packing checklist is curated by our guides. We adjust recommendations based on seasonal weather profiles to keep packs light yet safe.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden print:hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Print Checklist Offline</h3>
              <p className="mt-2 text-stone-400 text-sm leading-relaxed max-w-sm">
                Need to print this list for offline prep? Simply press Ctrl+P or print below.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all cursor-pointer"
            >
              Print Checklist
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
