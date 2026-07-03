"use client";
import React, { useState } from "react";
import Image from "next/image";
import { itinerary } from "@/data/trekData";

export default function ItineraryInteractive() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <>
      {/* Elevation Profile Chart */}
      <div className="mt-12 w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm relative overflow-hidden group">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="font-bold text-stone-900 text-sm">Elevation Gain Profile</h3>
            <span className="text-xs text-stone-500">Max altitude: 4,660m</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-stone-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Camp
            <span className="h-2 w-2 rounded-full bg-stone-300 ml-2" /> Peak
          </div>
        </div>
        <div className="h-48 w-full border-b-2 border-l-2 border-stone-200 relative flex items-end justify-between px-2 pb-2">
          {itinerary.map((day, idx) => {
            const heightPercent = (parseInt(day.altitude.replace(/,/g, '')) / 4660) * 100;
            return (
              <div key={idx} className="relative group/bar flex flex-col items-center flex-1">
                <div 
                  className={`w-full max-w-[20px] sm:max-w-[32px] rounded-t-sm transition-all duration-700 ease-out ${
                    activeDay === day.day ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "bg-stone-200 hover:bg-stone-300"
                  }`}
                  style={{ height: `${heightPercent}%` }}
                />
                <span className="text-[9px] font-bold text-stone-400 mt-2 block hidden sm:block">D{day.day}</span>
                
                <div className="absolute bottom-full mb-2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-stone-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap z-10 pointer-events-none">
                  {day.altitude}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">
          Khopra Ridge Trek Itinerary (Day By Day)
        </h2>
        <p className="text-stone-600 leading-relaxed text-base">
          The Khopra Ridge Trek itinerary runs 9 days from Kathmandu to Kathmandu: 1 day for arrival, 7 days of trekking and side trips, and 1 day driving back from Pokhara. Each day below lists the elevation, distance, walking time, accommodation, and meals included.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* List of Days */}
        <div className="lg:col-span-1 flex flex-col gap-2.5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {itinerary.map((step) => (
            <button
              key={step.day}
              onClick={() => setActiveDay(step.day)}
              className={`text-left p-3 rounded-2xl border transition-all flex gap-3.5 items-center ${
                activeDay === step.day
                  ? "border-emerald-600 bg-emerald-50/60 shadow-sm ring-1 ring-emerald-600/30"
                  : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/50"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-12 w-16 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200/60">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                />
                <span className="absolute bottom-1 right-1 bg-stone-950/70 text-[9px] font-bold text-white px-1.5 py-0.5 rounded-md backdrop-blur-[2px]">
                  Day {step.day}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Day {step.day}</span>
                  <span className="text-[10px] text-stone-500 font-medium">{step.hours}</span>
                </div>
                <p className="mt-0.5 text-xs font-bold text-stone-900 truncate leading-tight">{step.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Day Details Display */}
        <div className="lg:col-span-2 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-6">
              <div>
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  Day {activeDay} Itinerary Details
                </span>
                <h3 className="mt-3 text-2xl font-bold text-stone-950">
                  {itinerary[activeDay - 1].title}
                </h3>
              </div>
              <div className="text-right">
                <span className="block text-xs text-stone-400">Target Elevation</span>
                <span className="text-lg font-bold text-emerald-600">{itinerary[activeDay - 1].altitude}</span>
              </div>
            </div>

            {/* Day Image */}
            <div className="mt-6 overflow-hidden rounded-2xl aspect-video relative bg-stone-100 border border-stone-200">
              <Image 
                src={itinerary[activeDay - 1].image} 
                alt={itinerary[activeDay - 1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center animate-fade-in"
              />
            </div>

            <p className="mt-6 text-stone-600 leading-relaxed text-base whitespace-pre-line">
              {itinerary[activeDay - 1].desc}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4 justify-between items-center">
            <span className="text-sm text-stone-500">
              Estimated Trek Duration: <strong>{itinerary[activeDay - 1].hours}</strong>
            </span>
            <a
              href="#book"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-500 transition-all flex items-center gap-1"
            >
              Ask questions about Day {activeDay} →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
