"use client";
import React, { useState } from "react";
import { specs } from "@/data/trekData";

export default function SpecsInteractive() {
  const [activeSpecCategory, setActiveSpecCategory] = useState("all");
  const [isMetric, setIsMetric] = useState(true);

  const filteredSpecs = activeSpecCategory === "all" 
    ? specs 
    : specs.filter(s => s.category === activeSpecCategory);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Trek Specifications</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Khopra Ridge Overview
          </h2>
          <p className="mt-4 text-stone-600 text-base max-w-xl">
            A modern interactive breakdown of the essential specifications, conditions, and logistics for your trek.
          </p>
        </div>
        
        {/* Unit Switcher */}
        <div className="mt-6 lg:mt-0 flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 w-fit">
          <button
            type="button"
            onClick={() => setIsMetric(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              isMetric 
                ? "bg-[#0b1717] text-white shadow-sm" 
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            Metric (m/km)
          </button>
          <button
            type="button"
            onClick={() => setIsMetric(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              !isMetric 
                ? "bg-[#0b1717] text-white shadow-sm" 
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            Imperial (ft/mi)
          </button>
        </div>
      </div>

      {/* Category Tabs Selector */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
        {[
          { id: "all", label: "All Specifications" },
          { id: "route", label: "Route & Trail" },
          { id: "climate", label: "Climate & Timing" },
          { id: "logistics", label: "Logistics & Comfort" }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveSpecCategory(tab.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              activeSpecCategory === tab.id
                ? "bg-emerald-700 text-white border-transparent shadow-sm"
                : "bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSpecs.map((spec) => (
          <div 
            key={spec.id}
            className="group relative rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm hover:shadow-md hover-lift transition-all duration-300 flex flex-col justify-between min-h-[160px] overflow-hidden"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{spec.label}</span>
                <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  {spec.icon}
                </div>
              </div>
              
              <p className="mt-3 text-lg sm:text-xl font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors duration-300 leading-tight">
                {isMetric ? spec.valMetric : spec.valImperial}
              </p>
              
              <span className="mt-1 block text-xs text-stone-400 font-bold tracking-tight">
                {isMetric ? spec.subMetric : spec.subImperial}
              </span>
            </div>

            {/* Animated tooltip tip revealed on hover */}
            <div className="mt-4 pt-3 border-t border-stone-100 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[11px] text-stone-500 leading-relaxed font-normal">
                {spec.hoverTip}
              </p>
            </div>

            {/* Subtle visual glow accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600/0 via-emerald-600/30 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        ))}
      </div>
    </>
  );
}
