"use client";

import React, { useState, useEffect } from "react";

export default function InteractiveChecklist() {
  const [season, setSeason] = useState("autumn"); // autumn, winter, monsoon
  const [style, setStyle] = useState("guided"); // guided, solo
  const [checkedItems, setCheckedItems] = useState({});

  // Core list of items with filters
  const packingItems = {
    clothing: [
      { id: "c1", name: "Moisture-wicking thermal base layers (2-3 sets) - wool or synthetic, avoid cotton", always: true },
      { id: "c2", name: "Trekking shirts (short & long sleeve breathable synthetic or merino wool)", always: true },
      { id: "c3", name: "Insulating mid-layer fleece jacket or active layering pullover", always: true },
      { id: "c4", name: "Convertible hiking pants (2 pairs, quick-dry material)", always: true },
      { id: "c5", name: "Heavyweight down jacket (comfort rated to -10°C) with hood", always: false, seasons: ["autumn", "winter"] },
      { id: "c6", name: "Waterproof outer shell jacket & rain pants (Gore-Tex or breathable equivalent)", always: true },
      { id: "c7", name: "Heavyweight winter down parka (-15°C rated)", always: false, seasons: ["winter"] },
      { id: "c8", name: "Lightweight windbreaker or active wind jacket", always: false, seasons: ["autumn", "monsoon"] },
      { id: "c9", name: "Thermal gloves (insulated/windproof) and lightweight liner gloves", always: false, seasons: ["autumn", "winter"] },
      { id: "c10", name: "Warm beanie, neck gaiter/buff (protects from dust & cold), and a wide-brim sun hat", always: true }
    ],
    footwear: [
      { id: "f1", name: "Sturdy waterproof hiking boots (broken-in, good ankle support and grip)", always: true },
      { id: "f2", name: "Camp shoes or light sandals (for wearing around the teahouses in the evening)", always: true },
      { id: "f3", name: "Cushioned wool trekking socks (3-4 pairs, merino wool preferred)", always: true },
      { id: "f4", name: "Breathable thin liner socks (helps reduce friction and prevent blisters)", always: true },
      { id: "f5", name: "Breathable snow gaiters (to keep snow and ice out of your boots)", always: false, seasons: ["winter"] }
    ],
    gear: [
      { id: "g1", name: "Adjustable trekking poles (essential for saving knees on steep descents)", always: true },
      { id: "g2", name: "Headlamp with spare batteries or USB charging cable", always: true },
      { id: "g3", name: "UV-filtered polarized sunglasses (glacier rated to prevent snow blindness)", always: true },
      { id: "g4", name: "Lightweight daypack (20L-30L with integrated rain cover) - for carrying personal essentials", always: true },
      { id: "g5", name: "Heavyweight internal frame backpack (50L-65L with rain cover)", always: false, styles: ["solo"] },
      { id: "g6", name: "High-capacity power bank (10,000 - 20,000mAh, cold degrades battery life quickly)", always: true },
      { id: "g7", name: "Sturdy wide-mouth water bottles (2x 1-liter) or hydration bladder (2-3L)", always: true }
    ],
    sleeping: [
      { id: "s1", name: "Four-season sleeping bag (comfort rated to -10°C / 14°F)", always: false, styles: ["solo"], seasons: ["autumn", "monsoon"] },
      { id: "s2", name: "Heavyweight sub-zero sleeping bag (comfort rated to -15°C / 5°F)", always: false, seasons: ["winter"] },
      { id: "s3", name: "Four-season sleeping bag (comfort rated to -10°C / 14°F)", always: false, styles: ["guided"], seasons: ["autumn"] }, // guided winter gets heavy, guided autumn gets standard
      { id: "s4", name: "Breathable sleeping bag liner (silk or fleece adds warmth and keeps bag clean)", always: true },
      { id: "s5", name: "Small inflatable camp pillow or earplugs (for thin teahouse walls)", always: true }
    ],
    medical: [
      { id: "m1", name: "Personal first aid kit containing blister plasters (moleskin), band-aids, tape, and scissors", always: true },
      { id: "m2", name: "Water purification tablets (Chlorine Dioxide) or portable filtration system (Sawyer)", always: true },
      { id: "m3", name: "Altitude sickness medication (Diamox/Acetazolamide) - consult your doctor", always: true },
      { id: "m4", name: "Sunscreen SPF 50+ & lip balm with UV block (sun is intense at 3,600m+)", always: true },
      { id: "m5", name: "Hand sanitizer, biodegradable wet wipes, and a small quick-dry microfiber towel", always: true },
      { id: "m6", name: "Personal prescription medications and basic painkillers (Ibuprofen/Paracetamol)", always: true }
    ],
    documents: [
      { id: "d1", name: "Original passport (valid for at least 6 months) and Nepalese Visa", always: true },
      { id: "d2", name: "Two passport photocopies and 4 passport-size photographs", always: true },
      { id: "d3", name: "ACAP entry permit and TIMS registration card (keep in waterproof pouch)", always: true },
      { id: "d4", name: "Travel insurance certificate (must specifically cover high-altitude trekking up to 5,000m)", always: true },
      { id: "d5", name: "Emergency contact details (local trekking agency, insurance provider, next of kin)", always: true },
      { id: "d6", name: "Cash in Nepalese Rupees (small denominations; no ATMs or card readers exist on-trail)", always: true }
    ]
  };

  const getFilteredItems = (category) => {
    return packingItems[category].filter((item) => {
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
    { key: "clothing", label: "Clothing & Layering", emoji: "" },
    { key: "footwear", label: "Footwear & Socks", emoji: "" },
    { key: "gear", label: "Technical Gear", emoji: "" },
    { key: "sleeping", label: "Sleeping & Comfort", emoji: "" },
    { key: "medical", label: "Medical & Hygiene", emoji: "" },
    { key: "documents", label: "Documents, Insurance & Cash", emoji: "" }
  ];

  // Calculate overall progress
  const allFilteredItems = categories.flatMap(c => getFilteredItems(c.key));
  const checkedCount = allFilteredItems.filter(item => checkedItems[item.id]).length;
  const progressPercent = allFilteredItems.length ? Math.round((checkedCount / allFilteredItems.length) * 100) : 0;

  // Local storage caching for user's checked items
  useEffect(() => {
    const saved = localStorage.getItem("khopra_packing_checked");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading packed checklist status", e);
      }
    }
  }, []);

  const saveToLocal = (newChecked) => {
    localStorage.setItem("khopra_packing_checked", JSON.stringify(newChecked));
  };

  const toggleItem = (id) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    saveToLocal(updated);
  };

  const resetChecklist = () => {
    if (window.confirm("Are you sure you want to clear all checked items and start over?")) {
      setCheckedItems({});
      localStorage.removeItem("khopra_packing_checked");
    }
  };

  return (
    <div className="space-y-8 print:text-black">
      {/* Dynamic Controls Grid */}
      <div className="grid gap-6 sm:grid-cols-2 bg-white p-6 border border-stone-200 rounded-3xl shadow-sm print:hidden">
        
        {/* Season Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
             Select Trekking Season
          </label>
          <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200">
            {[
              { key: "autumn", label: "Spring / Autumn" },
              { key: "winter", label: "Winter" },
              { key: "monsoon", label: "Monsoon" }
            ].map((s) => (
              <button
                key={s.key}
                onClick={() => setSeason(s.key)}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                  season === s.key 
                    ? "bg-white text-stone-950 shadow-sm border border-stone-200/50" 
                    : "text-stone-500 hover:text-stone-850"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Support Style Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
             Choose Trekking Style
          </label>
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
                    : "text-stone-500 hover:text-stone-850"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Tracker Bar */}
      <div className="bg-emerald-950 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
        <div className="space-y-1">
          <h4 className="font-bold text-base font-sans">Your Packing Progress</h4>
          <p className="text-xs text-emerald-200">
            Checked off <strong className="text-white">{checkedCount}</strong> of <strong className="text-white">{allFilteredItems.length}</strong> dynamic checklist items.
          </p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="h-2.5 w-full sm:w-48 bg-emerald-900/60 rounded-full overflow-hidden shrink-0">
            <div 
              className="h-full bg-emerald-400 transition-all duration-500 rounded-full" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
          <span className="text-emerald-400 font-black text-xl shrink-0">{progressPercent}%</span>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-10">
        {categories.map((cat) => {
          const items = getFilteredItems(cat.key);
          if (!items.length) return null;
          
          return (
            <div key={cat.key} className="space-y-4 print:space-y-2 break-inside-avoid">
              <h3 className="text-lg sm:text-xl font-extrabold text-stone-950 flex items-center gap-2.5 pb-2 border-b border-stone-200">
                <span className="text-2xl">{cat.emoji}</span>
                <span>{cat.label}</span>
              </h3>
              
              <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-1">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 bg-white border rounded-2xl flex items-start gap-3 cursor-pointer select-none transition-all duration-200 ${
                      checkedItems[item.id] 
                        ? "border-emerald-500 bg-emerald-50/10 shadow-sm" 
                        : "border-stone-200 hover:border-stone-300 hover:shadow-xs"
                    } print:border-none print:p-1 print:bg-transparent`}
                  >
                    <input 
                      type="checkbox" 
                      checked={!!checkedItems[item.id]} 
                      onChange={() => {}} // Handle on parent div click
                      className="mt-0.5 h-4.5 w-4.5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer print:text-black print:accent-black"
                    />
                    <span className={`text-xs sm:text-sm text-stone-700 leading-relaxed ${checkedItems[item.id] ? "line-through text-stone-400 font-medium" : "font-semibold text-stone-800"}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="flex-1 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-2xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition duration-200 cursor-pointer"
        >
          🖨️ Print Packing List
        </button>
        <button
          onClick={resetChecklist}
          className="bg-stone-200 hover:bg-stone-300 text-stone-700 font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl transition duration-200 cursor-pointer"
        >
           Reset Checklist
        </button>
      </div>
    </div>
  );
}
