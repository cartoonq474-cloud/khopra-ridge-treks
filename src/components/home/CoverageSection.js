"use client";
import React, { useState } from "react";

export default function CoverageSection({ includedItems, excludedItems }) {
  const [activeCoverageTab, setActiveCoverageTab] = useState("all");
  const [checkedCoverageItems, setCheckedCoverageItems] = useState({});
  const [isIncludedExpanded, setIsIncludedExpanded] = useState(false);
  const [isExcludedExpanded, setIsExcludedExpanded] = useState(false);

  const filteredIncluded = activeCoverageTab === "all" 
    ? includedItems 
    : includedItems.filter(item => item.category === activeCoverageTab);
    
  const filteredExcluded = activeCoverageTab === "all" 
    ? excludedItems 
    : excludedItems.filter(item => item.category === activeCoverageTab);

  const displayedIncluded = isIncludedExpanded ? filteredIncluded : filteredIncluded.slice(0, 5);
  const displayedExcluded = isExcludedExpanded ? filteredExcluded : filteredExcluded.slice(0, 5);

  const totalCoverageItems = includedItems.length + excludedItems.length;
  const checkedCount = Object.values(checkedCoverageItems).filter(Boolean).length;
  const coverageProgress = Math.round((checkedCount / totalCoverageItems) * 100) || 0;

  return (
    <>
      {/* TRIP COVERAGE & PREP TRACKER (INCLUDED & EXCLUDED) */}
      <section className="py-24 border-t border-stone-200 bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Trip Coverage</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                What's Included & Excluded
              </h2>
              <p className="mt-4 text-stone-600 text-base max-w-xl">
                Review our comprehensive package inclusions and exclusions. Check items off to build your pre-trip preparation list!
              </p>
            </div>

            {/* Dynamic Prep Progress Tracker */}
            <div className="mt-6 lg:mt-0 bg-white p-5 rounded-3xl border border-stone-200/80 shadow-sm w-full lg:w-80">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Prep Checklist Progress</span>
                <span className="text-sm font-black text-emerald-700">{coverageProgress}% Done</span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200/50">
                <div 
                  className="bg-emerald-600 h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${coverageProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-stone-400 mt-2 block font-medium">
                {checkedCount} of {totalCoverageItems} items reviewed
              </span>
            </div>
          </div>

          {/* Category Tabs Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
            {[
              { id: "all", label: "All Items" },
              { id: "transit", label: "Stays & Transport" },
              { id: "food", label: "Food & Lodging" },
              { id: "team", label: "Team & Permits" },
              { id: "gear", label: "Gear & Safety" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCoverageTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeCoverageTab === tab.id
                    ? "bg-[#0b1717] text-white border-transparent shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dual Column Layout */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* INCLUDED COLUMN */}
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6">
                <div className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">What's Included</h3>
                  <span className="text-xs text-stone-400 font-bold">Covered in the 9-day trek package</span>
                </div>
              </div>

              {filteredIncluded.length === 0 ? (
                <p className="text-sm text-stone-400 py-6 italic text-center">No inclusions in this category.</p>
              ) : (
                <>
                  <div className="space-y-3.5">
                    {displayedIncluded.map((item) => {
                      const isChecked = !!checkedCoverageItems[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCheckedCoverageItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 group relative cursor-pointer ${
                            isChecked 
                              ? "bg-emerald-50/40 border-emerald-500/30 ring-1 ring-emerald-500/10" 
                              : "bg-[#faf9f5]/50 border-stone-200/60 hover:bg-[#faf9f5] hover:border-stone-300"
                          }`}
                        >
                          {/* Interactive Checkbox */}
                          <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-emerald-600 border-emerald-600 text-white" 
                              : "border-stone-300 bg-white group-hover:border-stone-400"
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0 pr-6">
                            <p className={`text-xs sm:text-sm font-medium leading-relaxed transition-all duration-300 ${
                              isChecked ? "text-stone-400 line-through decoration-stone-300" : "text-stone-700"
                            }`}>
                              {item.text}
                            </p>
                            
                            {/* Inline dynamic tooltip shown on hover */}
                            <div className="mt-2 text-[10px] sm:text-xs text-stone-500 leading-normal max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-300">
                              <span className="font-semibold text-emerald-700">Detail:</span> {item.hoverTip}
                            </div>
                          </div>

                          {/* Hover info badge */}
                          <span className="absolute top-3.5 right-3.5 text-stone-300 group-hover:text-emerald-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {filteredIncluded.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setIsIncludedExpanded(!isIncludedExpanded)}
                      className="mt-4 w-full py-2.5 px-4 rounded-2xl border border-stone-200 text-stone-600 font-bold text-xs hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm bg-white"
                    >
                      {isIncludedExpanded ? "See Less Inclusions" : `See More Inclusions (${filteredIncluded.length - 5} more)`}
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isIncludedExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* EXCLUDED COLUMN */}
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6">
                <div className="h-9 w-9 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">What's Excluded</h3>
                  <span className="text-xs text-stone-400 font-bold">Personal costs and extras</span>
                </div>
              </div>

              {filteredExcluded.length === 0 ? (
                <p className="text-sm text-stone-400 py-6 italic text-center">No exclusions in this category.</p>
              ) : (
                <>
                  <div className="space-y-3.5">
                    {displayedExcluded.map((item) => {
                      const isChecked = !!checkedCoverageItems[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCheckedCoverageItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 group relative cursor-pointer ${
                            isChecked 
                              ? "bg-stone-50 border-stone-400/40" 
                              : "bg-[#faf9f5]/50 border-stone-200/60 hover:bg-[#faf9f5] hover:border-stone-300"
                          }`}
                        >
                          {/* Interactive Checkbox */}
                          <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-stone-600 border-stone-600 text-white" 
                              : "border-stone-300 bg-white group-hover:border-stone-400"
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0 pr-6">
                            <p className={`text-xs sm:text-sm font-medium leading-relaxed transition-all duration-300 ${
                              isChecked ? "text-stone-400 line-through decoration-stone-300" : "text-stone-700"
                            }`}>
                              {item.text}
                            </p>
                            
                            {/* Inline dynamic tooltip shown on hover */}
                            <div className="mt-2 text-[10px] sm:text-xs text-stone-500 leading-normal max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-300">
                              <span className="font-semibold text-stone-600">Detail:</span> {item.hoverTip}
                            </div>
                          </div>

                          {/* Hover info badge */}
                          <span className="absolute top-3.5 right-3.5 text-stone-300 group-hover:text-stone-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {filteredExcluded.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setIsExcludedExpanded(!isExcludedExpanded)}
                      className="mt-4 w-full py-2.5 px-4 rounded-2xl border border-stone-200 text-stone-600 font-bold text-xs hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm bg-white"
                    >
                      {isExcludedExpanded ? "See Less Exclusions" : `See More Exclusions (${filteredExcluded.length - 5} more)`}
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isExcludedExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}