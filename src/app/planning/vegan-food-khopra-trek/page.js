"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const tips = [
    {
      title: "Omit Ghee from Dal Bhat",
      desc: "Traditional Dal Bhat lentil soup is sometimes finished with a drizzle of ghee (clarified butter). Always instruct your guide or lodge cook directly by saying: \"Ghee-bina Dal Bhat\" (Dal Bhat without clarified butter)."
    },
    {
      title: "Naturally Vegan Options",
      desc: "Many local staples are naturally vegan, including plain boiled potatoes, vegetable noodle soup, steamed momos (ensure dough is dairy-free), and flatbreads like Chapati."
    },
    {
      title: "Bring Your Own Snacks",
      desc: "High-energy vegan protein bars, nuts, seeds, and dried fruits are expensive and hard to find on the trail. We recommend purchasing these in Kathmandu or Pokhara Lakeside before departure."
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
          <span className="text-stone-800">Vegan Food</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Dining</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Vegan & Plant-Based Food Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trekking plant-based in Nepal. Understand dairy exclusions, local grains, and how to communicate your vegan preferences in remote community lodges.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Navigating Vegan Needs in the Himalayas</h2>
          <p>
            While vegetarianism is deeply understood and respected throughout Nepal due to religious traditions, veganism (which excludes dairy, honey, and ghee) is a relatively new concept in remote mountain villages. However, because local Himalayan diets rely heavily on rice, lentils, and potatoes, eating a complete, high-energy vegan diet is entirely possible with a little advance planning.
          </p>
        </div>

        {/* Tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Core Guidelines for Vegan Trekkers</h3>
          <div className="space-y-6">
            {tips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Vocabulary */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Helpful Nepali Dining Phrases</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-405 space-y-2.5">
            <li><strong>\"Ma Masu, Anda, ra Dudh ko chij haru khanna\"</strong> — I do not eat meat, eggs, or dairy products.</li>
            <li><strong>\"Ghee-bina pakaunuhos\"</strong> — Please cook it without clarified butter (ghee).</li>
            <li><strong>\"Dudh-bina ko Kalo Chiya\"</strong> — Black tea without milk.</li>
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
            <h3 className="text-2xl font-bold">Worry-Free Vegan Logistics</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book your guided trek with us. Our guides are trained to inspect kitchen setups and ensure all meals conform to your dietary requirements.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
