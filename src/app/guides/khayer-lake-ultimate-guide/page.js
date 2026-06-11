"use client";

import React, { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("trek");

  const tabs = {
    trek: {
      title: "The Hike",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            The hike to <strong>Khayer Lake (4,660m)</strong> is a challenging day excursion from Khopra Ridge. It is the highest point of the trek and requires a full day of steady climbing. The trail is steep, rocky, and can be covered in snow depending on the season.
          </p>
          <p className="text-stone-600 leading-relaxed">
            You will start early in the morning, usually around 5:30 AM, carrying a daypack with water, warm layers, and packed lunch. The round trip takes 7 to 8 hours of hiking.
          </p>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
            <span className="text-emerald-700 text-lg">💡</span>
            <p className="text-sm text-emerald-800 leading-relaxed">
              <strong>Tip:</strong> Hire a local guide. The trail is high and remote, with no teahouses or shops between Khopra Ridge and Khayer Lake.
            </p>
          </div>
        </div>
      )
    },
    mythology: {
      title: "Mythology & Pilgrimage",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            Khayer Lake is a sacred lake for Hindus and Buddhists. At the lake shore sits the small shrine of <strong>Khayer Baraha</strong>.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Every year during the August full moon festival (Janai Purnima), hundreds of pilgrims ascend to the lake. Childless couples come to pray to Goddess Baraha, believing she will bless them with children if they perform rituals at the holy waters.
          </p>
        </div>
      )
    },
    difficulty: {
      title: "Altitude & Safety",
      content: (
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            At 4,660 meters, the air contains only about 57% of the oxygen level at sea level. Dehydration and cold are major factors.
          </p>
          <ul className="space-y-3 text-sm text-stone-600 list-disc pl-5">
            <li><strong>Acclimatize:</strong> Spend at least 24 hours at Khopra Ridge (3,660m) before attempting this hike.</li>
            <li><strong>Hydrate:</strong> Drink plenty of warm garlic soup and water before and during the hike.</li>
            <li><strong>Clothing:</strong> Pack a windproof outer shell, thermal layers, gloves, and a warm hat. Temperatures at the lake can drop below freezing even in midday.</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sacred Destinations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            The Ultimate Khayer Lake Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the path to Annapurna's sacred high-altitude sanctuary situated at the base of the Annapurna South face.
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex gap-4 border-b border-stone-200 mt-10">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`pb-4 text-sm font-bold border-b-2 transition-all ${
                activeTab === key
                  ? "border-emerald-600 text-emerald-600 font-bold"
                  : "border-transparent text-stone-400 hover:text-stone-600"
              }`}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="py-8">
          {tabs[activeTab].content}
        </div>

        {/* E-E-A-T FOOTNOTE */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides review the Khayer Lake trail monthly. The path is narrow and can wash out after monsoons or heavy spring snow; we provide current details to keep you safe on the trail.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to Visit Khayer Lake?</h3>
          <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
            Our expert guides handle all permits, trail safety, and acclimatization pacing. Join our next 9-Day Khopra Ridge &amp; Khayer Lake trek.
          </p>
          <a
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all"
          >
            Inquire &amp; Book Today
          </a>
        </div>
      </div>

      
    </div>
  );
}
