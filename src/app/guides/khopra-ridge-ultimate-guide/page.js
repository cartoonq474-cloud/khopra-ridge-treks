"use client";

import React, { useState } from "react";
import ElevationProfile from "@/components/ElevationProfile";

export default function Page() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = {
    overview: {
      title: "Trek Overview",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            The <strong>Khopra Ridge Trek</strong> (also known as Khopra Danda) is one of the most scenic, uncrowded, and sustainable trekking routes in Nepal's Annapurna region. While classic treks like the Annapurna Circuit and Poon Hill draw thousands of visitors daily, Khopra Ridge remains pristine, wild, and community-focused.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Perched at 3,660 meters, the ridge provides an unobstructed, eye-level vantage point directly facing the seventh-highest mountain on Earth—Dhaulagiri (8,167m)—alongside Annapurna South (7,219m), Nilgiri, and Hiunchuli. The highlight for adventurous trekkers is the demanding side-trip to the sacred alpine <strong>Khayer Lake</strong>, situated at 4,660m.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-stone-100 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">Trek Type</span>
              <p className="font-bold text-stone-900 mt-1">Community Lodge Circuit</p>
            </div>
            <div className="p-4 bg-stone-100 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">Best Seasons</span>
              <p className="font-bold text-stone-900 mt-1">Oct - Nov &amp; Mar - Apr</p>
            </div>
          </div>
        </div>
      )
    },
    itinerary: {
      title: "Detailed Route Map",
      content: (
        <div className="space-y-6">
          <div className="mb-8">
            <ElevationProfile />
          </div>
          <p className="text-stone-600 leading-relaxed mb-6">
            The classic itinerary takes 9 days starting and ending in Kathmandu. The trail winds through traditional Gurung and Magar villages before climbing above the tree line onto the high ridges.
          </p>
          <div className="space-y-8 mt-6">
            {[
              {
                day: 1,
                title: "Arrival in Kathmandu & Transfer to Hotel",
                elev: "1,400m",
                time: "1-2 hrs",
                image: "/kathmandu-arrival.png",
                desc: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport (TIA) in Kathmandu, our representative will transfer you to your hotel in Thamel. Enjoy a pre-trek briefing and welcome dinner in the evening."
              },
              {
                day: 2,
                title: "Fly to Pokhara, Drive to Ghandruk & Trek to Tadapani",
                elev: "2,630m",
                time: "5-6 hrs",
                image: "/ghandruk-village.png",
                desc: "Take a scenic morning flight to Pokhara, then drive 3 hours to Ghandruk. Trek through oak forests up to Tadapani, enjoying initial views of Annapurna South."
              },
              {
                day: 3,
                title: "Tadapani to Bayeli Kharka",
                elev: "3,425m",
                time: "5-6 hrs",
                image: "/forest-trail.png",
                desc: "Ascend off the beaten tourist path through quiet, moss-draped rhododendron forests towards the pasture lands of Bayeli."
              },
              {
                day: 4,
                title: "Bayeli Kharka to Chhistibung",
                elev: "2,975m",
                time: "4-5 hrs",
                image: "/chhistibung-pasture.png",
                desc: "Descend into a silent valley before ascending through bamboo meadows. Excellent region for spotting the Himalayan Monal."
              },
              {
                day: 5,
                title: "Chhistibung to Khopra Ridge (Khopra Danda)",
                elev: "3,660m",
                time: "3-4 hrs",
                image: "/khopra-ridge-view.png",
                desc: "A steep and scenic climb above the tree line brings you onto the ridge for sunset views over Mount Dhaulagiri."
              },
              {
                day: 6,
                title: "Day Hike to Sacred Khayer Lake",
                elev: "4,660m",
                time: "7-8 hrs",
                image: "/khayer-lake.png",
                desc: "A long and demanding but deeply rewarding day hike to the sacred alpine lake situated directly beneath Annapurna South."
              },
              {
                day: 7,
                title: "Khopra Ridge to Swanta Village",
                elev: "2,200m",
                time: "5-6 hrs",
                image: "/swanta-village.png",
                desc: "Descend down the steep valley walls to reach the traditional Magar village of Swanta, surrounded by terraced farming fields."
              },
              {
                day: 8,
                title: "Swanta to Ghorepani",
                elev: "2,860m",
                time: "4-5 hrs",
                image: "/ghorepani-village.png",
                desc: "Cross the suspension bridge and climb back up to rejoin the classic trekking route at the popular lodge village of Ghorepani."
              },
              {
                day: 9,
                title: "Poon Hill Sunrise, Trek to Nayapul, Drive Pokhara & Fly to Kathmandu",
                elev: "1,400m",
                time: "7-8 hrs",
                image: "/poon-hill-sunrise.png",
                desc: "Climb Poon Hill for sunrise, descend to Nayapul, drive to Pokhara, and take a scenic flight back to Kathmandu for your departure."
              }
            ].map((d) => (
              <div key={d.day} className="flex gap-4 sm:gap-6 items-start relative pl-8 border-l border-stone-200 ml-4">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                  {d.day}
                </span>
                <div className="grid gap-4 sm:grid-cols-3 w-full bg-stone-50/50 p-4 rounded-2xl border border-stone-200/50">
                  <div className="sm:col-span-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="font-extrabold text-stone-950 text-base leading-snug">{d.title}</h4>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-semibold text-stone-400 mt-1 uppercase tracking-wider">Duration: {d.time}</span>
                    <p className="mt-2 text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="sm:col-span-1 rounded-xl overflow-hidden aspect-video bg-stone-100 border border-stone-200">
                    <img src={d.image} alt={d.title} className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    permits: {
      title: "Required Permits",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            Since the trek sits entirely within the <strong>Annapurna Conservation Area (ACA)</strong>, you must register and purchase permits in advance at the Nepal Tourism Board office in Kathmandu or Pokhara.
          </p>
          <ul className="space-y-4">
            <li className="p-4 bg-white rounded-2xl border border-stone-200">
              <h4 className="font-bold text-stone-950">1. ACAP Permit (Conservation Area)</h4>
              <p className="mt-1 text-sm text-stone-500">Cost: 3,000 NPR (~$23 USD) per person. Required for all foreign nationals.</p>
            </li>
            <li className="p-4 bg-white rounded-2xl border border-stone-200">
              <h4 className="font-bold text-stone-950">2. TIMS Card (Trekker Registry)</h4>
              <p className="mt-1 text-sm text-stone-500">Cost: 2,000 NPR (~$15 USD) per person. Helps monitor hiker locations for safety.</p>
            </li>
          </ul>
        </div>
      )
    },
    acclimatization: {
      title: "Altitude & Safety",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            With a maximum altitude of 4,660m at Khayer Lake, altitude awareness is crucial. Acute Mountain Sickness (AMS) can affect anyone, regardless of fitness level.
          </p>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800">
            <h4 className="font-bold text-sm">Altitude Acclimatization Rules:</h4>
            <ul className="mt-2 space-y-1.5 text-sm list-disc pl-5">
              <li>Do not climb more than 500m of sleeping elevation per day once above 3,000m.</li>
              <li>Spend two nights at Khopra Ridge before attempting to hike up to Khayer Lake.</li>
              <li>Drink at least 4 liters of water daily to prevent dehydration.</li>
              <li>If you develop a severe headache, dizziness, or nausea, descend immediately.</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4 w-full flex-1">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 flex flex-col gap-2">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`text-left px-5 py-3.5 rounded-2xl border transition-all font-bold text-sm ${
                activeSection === key
                  ? "border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm"
                  : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        {/* Dynamic Section Display */}
        <div className="lg:col-span-3 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="border-b border-stone-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Planning &amp; Prep</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-950">
              {sections[activeSection].title}
            </h1>
          </div>

          {sections[activeSection].content}

          {/* E-E-A-T FOOTNOTE */}
          <div className="mt-12 p-6 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This ultimate planner is curated by certified guides based in Pokhara. We walk the Khopra circuit monthly to monitor trail degradation, water supplies, and teahouse conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
