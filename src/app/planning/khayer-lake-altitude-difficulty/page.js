"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [oxAltitude, setOxAltitude] = useState(3660);

  // Oxygen concentration relative to sea level formula: P = P0 * e^(-Mgh/RT)
  // Simplified linear/exponential estimation for public understanding:
  const getOxygenLevel = (alt) => {
    if (alt <= 0) return 100;
    // Estimated drop: ~1.1% per 100m
    const level = Math.max(40, 100 - (alt / 100) * 1.12);
    return Math.round(level * 10) / 10;
  };

  const currentOxygen = getOxygenLevel(oxAltitude);

  const summarySpecs = [
    { label: "Khayer Lake Altitude", value: "4,660m / 15,289ft" },
    { label: "Highest Overnight Stop", value: "3,660m / 12,008ft" },
    { label: "Difficulty Rating", value: "Moderate to Challenging" },
    { label: "Trek Duration", value: "7 - 9 Days" }
  ];

  const altitudeTiers = [
    { name: "Pokhara", alt: 820, desc: "Sea level baseline pressure. Altitude sickness risk is 0%." },
    { name: "Tadapani", alt: 2630, desc: "Tree line boundary. Minor breathing adjustments for flatland hikers." },
    { name: "Bayeli Kharka", alt: 3425, desc: "High mountain climate. Acclimatization symptoms (mild headache) may start." },
    { name: "Khopra Ridge", alt: 3660, desc: "High ridge exposure. Sleep altitude limit; do not climb further if feeling unwell." },
    { name: "Khayer Lake", alt: 4660, desc: "Extreme alpine lake. Oxygen is thin (~48% effective pressure). Acute Mountain Sickness risk is high." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🏔️ Altitude &amp; Safety Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khayer Lake Altitude &amp; Difficulty Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            At 4,660 meters, this sacred alpine lake sits in genuinely thin air. Learn why the trek to reach it is shaped almost entirely by how your body handles altitude, and how to safely prepare for the physical challenges.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Answer &amp; Overview
              </a>
              <a href="#altitude-facts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Is the Altitude?
              </a>
              <a href="#calculator" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Oxygen Pressure Calculator
              </a>
              <a href="#trek-difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Overall Difficulty
              </a>
              <a href="#distance-stats" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance &amp; Statistics
              </a>
              <a href="#day-hike-challenge" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why the Hike Feels Harder
              </a>
              <a href="#trail-terrain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trail Terrain Conditions
              </a>
              <a href="#ams-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Sickness (AMS) Risk
              </a>
              <a href="#acclimatization" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatization Plan
              </a>
              <a href="#route-difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Elevation Options
              </a>
              <a href="#fitness-prep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fitness &amp; Preparation
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons &amp; Climate
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#safety-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Essential Safety Tips
              </a>
              <a href="#is-it-for-you" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is it Right for You?
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Consult a Route Expert
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Quick Answer &amp; Overview
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Khayer Lake is one of the highest points you can reach on foot in the Khopra Ridge section of the Annapurna region. At 4,660 meters, this sacred alpine lake sits in genuinely thin air, and the trek to reach it is shaped almost entirely by how your body handles altitude rather than by technical climbing skill.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Altitude Sickness Risk</span>
                <span className="text-lg font-extrabold text-red-600 block">Moderate to High above 3,500m</span>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The risk rises sharply as you cross 4,000m on the final approach to the lake. Pacing, hydration, and gradual climbs are critical.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Beginner Suitability</span>
                <span className="text-lg font-extrabold text-emerald-600 block">Fit Beginners with Pacing Buffer</span>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Achievable for fit beginners who build in a rest day at Khopra Ridge (3,660m) rather than rushing the climb.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 2: WHAT IS THE ALTITUDE */}
          <article id="altitude-facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Altitude of Khayer Lake?
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <h3 className="text-lg font-bold text-stone-950">Khayer Lake Elevation in Meters and Feet</h3>
              <p>
                Khayer Lake sits at <strong>4,660 meters (15,289 feet)</strong> above sea level. That places it firmly in what mountaineers call the high-altitude zone, the range where oxygen availability drops enough to noticeably affect breathing, energy, and sleep quality even in healthy adults.
              </p>
              <p>
                Crossing 4,500 meters is a meaningful threshold. Below that line, most trekkers with reasonable fitness adjust within a day or two. Above it, the body has to work measurably harder for the same effort, which is why this single elevation figure shapes almost every other decision on this trek.
              </p>

              <h3 className="text-lg font-bold text-stone-955 mt-6">Highest Point of the Khayer Lake Trek</h3>
              <p>
                Khayer Lake itself is the highest point most trekkers reach on this route. There is no higher pass or ridge beyond it on the standard itinerary, so 4,660m represents the trek&apos;s true ceiling rather than a midpoint on the way to somewhere higher. This simplifies your acclimatization strategy: you are not pacing yourself for a bigger climb later — the lake is the destination and the turnaround point.
              </p>

              <h3 className="text-lg font-bold text-stone-955 mt-6">Khopra Ridge vs Khayer Lake Altitude</h3>
              <p>
                Most itineraries base trekkers at Khopra Ridge (also called Khopra Danda), at 3,660m (12,008ft), and treat Khayer Lake as a day hike from there. That gap — <strong>exactly 1,000 meters</strong> — is the most important number to keep in mind.
              </p>
              <p>
                Sleeping at 3,660m while day-hiking up to 4,660m and returning the same evening follows one of the most reliable altitude safety principles in mountaineering. You gain exposure to thinner air during the day, but you sleep at a lower, more oxygen-rich elevation, which gives your body a real chance to recover overnight.
              </p>
            </div>
          </article>

          {/* OXYGEN CALCULATOR SECTION */}
          <article id="calculator" className="scroll-mt-12 space-y-6">
            <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-stone-950">Interactive Oxygen Pressure Estimator</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                As you ascend, the barometric pressure drops, resulting in fewer oxygen molecules per breath. Use the slider below to estimate the effective oxygen level relative to sea level.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Target Altitude</span>
                  <strong className="text-xl sm:text-2xl font-black text-emerald-600">{oxAltitude} meters ({Math.round(oxAltitude * 3.28084)} feet)</strong>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="5000" 
                  value={oxAltitude}
                  onChange={(e) => setOxAltitude(Number(e.target.value))}
                  className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-bold">
                  <span>800m (Pokhara)</span>
                  <span>3,660m (Khopra Ridge)</span>
                  <span>5,000m (Extreme)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-100 pt-6">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <span className="text-xs text-stone-400 font-semibold block uppercase tracking-wider">Effective Oxygen Level</span>
                  <span className="text-3xl font-black text-stone-950 mt-1 block">{currentOxygen}%</span>
                  <span className="text-[10px] text-stone-400 mt-1 block">Relative to sea level baseline (100%)</span>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col justify-center">
                  <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Safety Guidance</span>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-medium">
                    {oxAltitude < 2500 && "Low risk. Standard hiking pace."}
                    {oxAltitude >= 2500 && oxAltitude < 3500 && "Moderate altitude. Standard acclimatization rules apply. Drink lots of water."}
                    {oxAltitude >= 3500 && oxAltitude < 4000 && "High altitude. Rest days recommended. Do not sleep higher if experiencing headaches."}
                    {oxAltitude >= 4000 && "Extreme altitude. High AMS risk. Return to lower elevations immediately if symptoms worsen."}
                  </p>
                </div>
              </div>
            </div>

            {/* Altitude Tiers */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-stone-950">Elevation Milestones &amp; Risk Profiles</h3>
              <div className="space-y-4">
                {altitudeTiers.map((tier, idx) => (
                  <div key={idx} className="p-5 bg-white border border-stone-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-extrabold text-stone-950 text-sm sm:text-base">{tier.name}</h4>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed max-w-lg">{tier.desc}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/10 block w-max sm:w-auto">
                        {tier.alt}m / {Math.round(tier.alt * 3.28084)}ft
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 3: HOW DIFFICULT IS THE TREK */}
          <article id="trek-difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khayer Lake Trek?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Overall, the Khayer Lake trek rates as <strong>moderate to moderately challenging</strong>. It doesn&apos;t require technical mountaineering skills, ropes, or prior high-altitude experience, but it does demand solid cardiovascular fitness, multiple consecutive days of hiking, and genuine respect for altitude.
            </p>

            {/* Overall Difficulty Rating Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Category</th>
                      <th className="p-4">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Fitness demand</td>
                      <td className="p-4">Moderate</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Altitude difficulty</td>
                      <td className="p-4 text-orange-600 font-semibold">Moderately challenging to challenging</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Technical skill</td>
                      <td className="p-4">Easy (no climbing gear or experience needed)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Endurance</td>
                      <td className="p-4 text-orange-600 font-semibold">Moderate to challenging on the Khayer Lake day-hike day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4 text-stone-650 text-sm">
              <h3 className="text-lg font-bold text-stone-900">What Makes the Trek Physically Demanding</h3>
              <p>
                The physical load comes from three things stacking on top of each other: multi-hour daily walking, steep elevation gain on certain days, and several consecutive trekking days with limited full rest. The single hardest day is the Khayer Lake round trip itself, which involves a steep, sustained climb followed by a long descent back to Khopra Ridge — all in thinner air than your body is used to.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Why Altitude Is the Biggest Challenge</h3>
              <p>
                Distance and terrain are manageable for most regular hikers; altitude is the variable that changes everything. Above roughly 3,000 meters, the air contains noticeably less oxygen per breath, and your body has to compensate by breathing faster and working your heart harder. Fitness alone doesn&apos;t guarantee an easy time above 4,000 meters — genetics, hydration, sleep quality, and ascent pace play massive roles.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Who Will Find the Trek Most Difficult</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Trekkers attempting their first high-altitude trek without any prior experience above 3,000m.</li>
                <li>People who skip acclimatization days to save time.</li>
                <li>Smokers, or anyone with untreated respiratory or cardiac conditions.</li>
                <li>Trekkers who ascend too quickly without listening to early warning symptoms.</li>
                <li>Older trekkers with limited recent hiking practice, though age alone isn&apos;t disqualifying with proper pacing.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 4: DISTANCE, DURATION & ELEVATION */}
          <article id="distance-stats" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Trek Distance, Duration, and Elevation Gain
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                The full route — from Pokhara through Ghandruk, Tadapani, and Bayeli Kharka to Khopra Ridge, with the Khayer Lake side trip and a descent loop back out — covers roughly <strong>55–65 kilometers</strong> over the course of the trek. The Khayer Lake round trip itself, from Khopra Ridge to the lake and back, typically runs <strong>12–15 kilometers</strong>.
              </p>
              <p>
                Daily walking hours range from 5–7 hours, with the Khayer Lake day stretching to <strong>7–9 hours round trip</strong> once you factor in the steep terrain and slower pace at altitude.
              </p>
              <p>
                From Ghandruk (around 1,940m) to Khayer Lake at 4,660m, you are gaining roughly <strong>2,700 meters of net elevation</strong> over several days, with the final 1,000-meter push from Khopra Ridge to the lake concentrated into a single demanding day.
              </p>
            </div>

            {/* Trek Statistics Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Statistic</th>
                      <th className="p-4">Approximate Figure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Total trek distance</td>
                      <td className="p-4">55–65 km</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Khopra Ridge to Khayer Lake (round trip)</td>
                      <td className="p-4">12–15 km</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Total trek duration</td>
                      <td className="p-4">7–9 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Highest point reached</td>
                      <td className="p-4 font-semibold text-emerald-600">4,660m (Khayer Lake)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Highest overnight stop</td>
                      <td className="p-4 font-semibold text-emerald-600">3,660m (Khopra Ridge)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Net elevation gain (Ghandruk to Khayer Lake)</td>
                      <td className="p-4">~2,700m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 5: WHY THE DAY HIKE FEELS HARDER */}
          <article id="day-hike-challenge" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why the Khayer Lake Day Hike Feels Harder Than Expected
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">⛰️ Relentless Steepness</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                  The trail above Khopra Ridge climbs steadily and steeply toward Khayer Lake, with little flat ground to recover on. Pacing yourself on earlier, gentler days is key.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">💨 Thin Air &amp; Breathing</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                  Once you cross 4,000 meters, the reduced oxygen becomes impossible to ignore. Short uphill bursts require deliberate pacing and breathing.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">🔋 Long Return Journey</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                  Because it is treated as a single day hike, you must descend the same 1,000 meters back to Khopra Ridge afterward on tired legs.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: TRAIL CONDITIONS & TERRAIN */}
          <article id="trail-terrain" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trail Conditions and Terrain on the Route
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                The route starts in <strong>dense forest trails</strong> (Ghandruk to Tadapani) of rhododendron and oak, which are gentler and well-shaded. As you climb, the trail opens up into <strong>exposed ridge walking</strong> around Khopra Ridge, where weather and wind have a much bigger effect.
              </p>
              <p>
                Much of the route alternates between <strong>stone steps, rocky paths, and shared mule trails</strong>. The constant up-and-down on uneven stone steps is hard on the knees and requires slow pacing.
              </p>
              <p>
                The final approach to the lake moves into true <strong>alpine terrain</strong> — sparse vegetation, rocky ground, scree, and exposure to wind and cold even on clear days.
              </p>
            </div>
          </article>

          {/* SECTION 7: AMS RISKS */}
          <article id="ams-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Sickness Risk on the Khayer Lake Trek
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <h3 className="text-lg font-bold text-stone-950">At What Altitude Does AMS Become a Concern?</h3>
              <p>
                Acute Mountain Sickness (AMS) risk typically begins to rise above 2,500–3,000 meters, which corresponds roughly to the Tadapani-to-Bayeli Kharka stretch. By the time you reach Khopra Ridge at 3,660m, mild symptoms are common, and the push to Khayer Lake at 4,660m is where risk is highest.
              </p>

              <h3 className="text-lg font-bold text-stone-950">Common Symptoms of Acute Mountain Sickness</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Headache, often the first noticeable symptom</li>
                <li>Fatigue beyond what the day&apos;s effort would normally cause</li>
                <li>Loss of appetite or mild nausea</li>
                <li>Disturbed or shallow sleep</li>
                <li>Dizziness or lightheadedness</li>
              </ul>

              <h3 className="text-lg font-bold text-stone-950">Warning Signs That Require Immediate Descent</h3>
              <div className="bg-red-50 border border-red-200 p-5 rounded-2xl text-red-950 text-xs leading-relaxed font-semibold">
                ⚠️ Critical Safety Warning: Severe AMS symptoms (confusion, loss of coordination, a persistent dry cough, shortness of breath at rest, or a worsening headache that doesn&apos;t respond to rest/hydration) demand immediate descent. These symptoms should never be pushed through.
              </div>

              <h3 className="text-lg font-bold text-stone-950">How Common Is Altitude Sickness at Khayer Lake?</h3>
              <p>
                Mild AMS symptoms — headache, slight fatigue — are common at this altitude and affect a meaningful share of trekkers, even fit ones. Severe AMS is far less common, especially for trekkers who follow a sensible acclimatization schedule and don&apos;t rush the final ascent.
              </p>
            </div>
          </article>

          {/* SECTION 8: ACCLIMATIZATION */}
          <article id="acclimatization" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Acclimatization Strategy for Reaching Khayer Lake Safely
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">🏡 Staying at Khopra Ridge Helps</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Basing yourself at Khopra Ridge (3,660m) for the Khayer Lake push, rather than trying to reach the lake and a higher overnight stop in one go, gives your body a lower, more breathable elevation to recover at after the day&apos;s exertion.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">📈 Climb High, Sleep Low</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Exposing your body to higher elevation during the day stimulates the physiological adaptations that help you acclimatize, while sleeping at a lower elevation afterward lets your body recover without the added stress of overnight oxygen deprivation.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-stone-600 text-sm mt-4">
              <h3 className="text-lg font-bold text-stone-950">Recommended Acclimatization Timeline</h3>
              <p>
                A sensible itinerary builds in at least one rest or short-acclimatization day before or around Khopra Ridge, rather than rushing straight from Bayeli Kharka to the Khayer Lake push. Ascending no more than roughly 400–500 meters of overnight elevation gain per day above 3,000 meters is a reasonable guideline, and the Khayer Lake day hike itself should ideally happen after at least one night already spent at or near 3,660m.
              </p>

              <h3 className="text-lg font-bold text-stone-950">Hydration, Nutrition, and Pacing Tips</h3>
              <p>
                Drink more water than you think you need — altitude increases fluid loss through faster breathing. Eat enough carbohydrates to fuel sustained effort, even if appetite drops, and walk at a deliberately slower pace than you would at lower elevation. A pulse oximeter is a useful, low-cost way to track blood oxygen saturation each morning and evening.
              </p>
            </div>
          </article>

          {/* SECTION 9: DIFFICULTY BY ROUTE OPTION */}
          <article id="route-difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Difficulty by Route Option
            </h2>
            <div className="space-y-4 text-stone-600 text-sm">
              <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-2">
                <h4 className="font-bold text-stone-900">🧭 1. Khayer Lake Trek from Ghandruk</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Starting from Ghandruk is the most common approach and gives you the most gradual acclimatization profile, since you pass through Tadapani and Bayeli Kharka before reaching Khopra Ridge. This route spreads the elevation gain over more days, which makes it the gentlest option for trekkers without prior high-altitude experience.
                </p>
              </div>
              <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-2">
                <h4 className="font-bold text-stone-900">🧭 2. Khayer Lake Trek from Tadapani</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Starting or rejoining the route at Tadapani shortens the trek by a day but compresses the elevation gain that follows. It suits trekkers who already have some altitude experience or limited time, but it leaves less buffer for acclimatization than the full Ghandruk start.
                </p>
              </div>
              <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-2">
                <h4 className="font-bold text-stone-900">🧭 3. Khayer Lake Trek from Khopra Ridge</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Once you&apos;re based at Khopra Ridge, the push to Khayer Lake is a single demanding day hike — steep, exposed, and the most physically intense day of the entire trek regardless of which route brought you there. This is the section every itinerary variation eventually funnels into.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: FITNESS & PREPARATION */}
          <article id="fitness-prep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Fitness Requirements and Trek Preparation
            </h2>
            <div className="space-y-4 text-stone-600 text-sm">
              <h3 className="text-lg font-bold text-stone-950">Can Beginners Trek to Khayer Lake?</h3>
              <p>
                Beginners can complete this trek, but with a qualifier: you should already be someone who hikes regularly, even if you&apos;ve never trekked at altitude before. Complete first-time hikers with no cardiovascular base are likely to struggle, not because the trail is technical, but because the combination of multi-day walking and altitude punishes low baseline fitness quickly.
              </p>

              <h3 className="text-lg font-bold text-stone-950">Minimum Fitness Level Recommended</h3>
              <p>
                A reasonable benchmark is being able to walk 5–6 hours on varied terrain on consecutive days without significant recovery time, and being comfortable with sustained uphill walking carrying a daypack. If you can manage a long day hike with 800–1,000 meters of elevation gain at home, you have a solid baseline for this trek.
              </p>

              <h3 className="text-lg font-bold text-stone-950">Suggested Training Before the Trek</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Build a cardio base with running, cycling, or brisk hiking 3–4 times a week for at least 6–8 weeks before departure.</li>
                <li>Add stair climbing or hill repeats to prepare your legs for sustained ascent.</li>
                <li>Practice multi-hour hikes on consecutive days to simulate trek fatigue.</li>
                <li>Include some training with a loaded daypack to get used to the extra weight.</li>
              </ul>

              <h3 className="text-lg font-bold text-stone-950">Preparation Checklist Before Arrival</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Schedule a basic health check, especially if you have any heart or respiratory history.</li>
                <li>Pack layered clothing for temperature swings between forest and alpine sections.</li>
                <li>Bring a personal first-aid kit and consider carrying Diamox after consulting a doctor.</li>
                <li>Arrange travel insurance that explicitly covers high-altitude trekking and emergency evacuation.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time for the Khayer Lake Trek
            </h2>
            <div className="space-y-4 text-stone-600 text-sm">
              <p>
                <strong>Autumn (September–November)</strong> is widely considered the best season. Skies are typically clearest, visibility toward Annapurna and Dhaulagiri is excellent, and trail conditions are dry and stable. <strong>Spring (March–May)</strong> is a strong second option, bringing blooming rhododendrons and stable climbing weather, though afternoon clouds are common.
              </p>
              <p>
                <strong>Winter (December–February)</strong> adds snow and ice, temperatures drop well below freezing, and the push to the lake is generally not recommended for inexperienced trekkers. <strong>Monsoon (June–August)</strong> brings heavy rain, landslide risk, leeched paths, and clouds.
              </p>
            </div>

            {/* Seasonal Difficulty Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Season</th>
                      <th className="p-4">Difficulty</th>
                      <th className="p-4">Visibility</th>
                      <th className="p-4">Key Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Spring (Mar–May)</td>
                      <td className="p-4">Moderate</td>
                      <td className="p-4">Good, some afternoon cloud</td>
                      <td className="p-4">Variable weather</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Autumn (Sep–Nov)</td>
                      <td className="p-4 text-emerald-600 font-semibold">Moderate</td>
                      <td className="p-4 text-emerald-600 font-semibold">Excellent</td>
                      <td className="p-4">Cold nights at altitude</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Winter (Dec–Feb)</td>
                      <td className="p-4 text-orange-600 font-semibold">Challenging</td>
                      <td className="p-4">Good but limited by snow</td>
                      <td className="p-4 text-red-500 font-semibold">Snow, ice, extreme cold</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Monsoon (Jun–Aug)</td>
                      <td className="p-4 text-orange-600 font-semibold">Challenging</td>
                      <td className="p-4 text-red-500 font-semibold">Poor</td>
                      <td className="p-4 text-red-500 font-semibold">Rain, leeches, landslide risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 12: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Difficulty Compared to Other Popular Nepal Treks
            </h2>
            <div className="space-y-4 text-stone-600 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>vs Poon Hill:</strong> Poon Hill tops out at around 3,210m and is done as a short 2–3 day trek, making it significantly easier and more beginner-friendly than the Khayer Lake route.</li>
                <li><strong>vs Mardi Himal:</strong> Mardi Himal&apos;s highest viewpoint sits in a similar elevation range to Khayer Lake, carrying comparable altitude-related difficulty. Mardi Himal is somewhat more exposed along its upper ridge, while Khayer Lake&apos;s challenge concentrates heavily into a single steep day-hike day.</li>
                <li><strong>vs Annapurna Base Camp:</strong> ABC reaches a slightly lower altitude than Khayer Lake but spans a longer overall trek. ABC offers a gentler acclimatization curve, while Khayer Lake concentrates more altitude gain into fewer days.</li>
              </ul>
            </div>

            {/* Trek Comparisons Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Trek</th>
                      <th className="p-4">Highest Altitude</th>
                      <th className="p-4">Relative Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Poon Hill</td>
                      <td className="p-4">~3,210m</td>
                      <td className="p-4">Easier</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Khayer Lake</td>
                      <td className="p-4 font-semibold text-emerald-600">4,660m</td>
                      <td className="p-4 text-orange-600 font-semibold">Moderate–challenging</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Mardi Himal</td>
                      <td className="p-4">~4,500m</td>
                      <td className="p-4 text-orange-600 font-semibold">Moderate–challenging</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Annapurna Base Camp</td>
                      <td className="p-4">~4,130m</td>
                      <td className="p-4">Moderate, longer duration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 13: SAFETY TIPS */}
          <article id="safety-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Essential Safety Tips for Trekking to Khayer Lake
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">🚶 Pace Yourself</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Slow your walking pace noticeably once you pass 3,000 meters. A slower, steady rhythm reduces strain on your cardiovascular system and lowers your AMS risk.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">📊 Monitor Daily Saturation</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Check in with yourself and a pulse oximeter morning and evening. Catching a mild headache or dropping oxygen saturation early gives you options before symptoms become severe.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">🧥 Prepare for Weather Swings</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Conditions near Khopra Ridge and Khayer Lake can shift quickly, even in favorable seasons. Carry layers, a windproof shell, and don&apos;t assume a clear morning guarantees a clear afternoon.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">🚨 Know When to Turn Back</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  The single most important safety skill isn&apos;t fitness — it&apos;s the willingness to turn back if symptoms worsen. No view is worth pushing through warning signs of severe AMS.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 14: IS IT RIGHT FOR YOU */}
          <article id="is-it-for-you" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Is the Khayer Lake Trek Right for You?
            </h2>
            <div className="space-y-4 text-stone-650 text-sm">
              <h3 className="text-lg font-bold text-stone-950">Ideal Trekker Profile</h3>
              <p>
                This trek suits regular hikers with solid cardiovascular fitness, even without prior high-altitude experience, as long as they are willing to follow a sensible acclimatization schedule and pace themselves on the Khopra Ridge section.
              </p>

              <h3 className="text-lg font-bold text-stone-950">Who Should Take Extra Precautions</h3>
              <p>
                Trekkers with any history of heart or respiratory conditions, those who have had severe AMS on previous treks, and anyone unable to dedicate extra acclimatization time should consult a doctor beforehand and consider building additional rest days into their itinerary.
              </p>

              <h3 className="text-lg font-bold text-stone-950">When to Consider a Guided Trek</h3>
              <p>
                If this is your first high-altitude trek, traveling with an experienced guide adds a meaningful safety margin. A good guide monitors group pacing, recognizes early AMS symptoms before they become serious, and knows when a descent decision needs to be made — judgment that is hard to replace with research alone.
              </p>
            </div>
          </article>

          {/* SECTION 15: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How high is Khayer Lake in Nepal?",
                  a: "Khayer Lake sits at 4,660 meters (15,289 feet) above sea level in the Annapurna region, making it one of the highest points reached on the Khopra Ridge trekking circuit."
                },
                {
                  q: "What is the highest point of the Khayer Lake trek?",
                  a: "Khayer Lake itself, at 4,660m, is the highest point on the standard itinerary. There's no higher section beyond it, so it marks both the destination and the trek's elevation ceiling."
                },
                {
                  q: "Is the Khayer Lake trek difficult?",
                  a: "The trek rates as moderate to moderately challenging. It doesn't require technical climbing skills, but the combination of multi-day walking, a steep 1,000-meter day-hike to the lake, and altitude above 4,000 meters makes it more demanding than a typical short trek."
                },
                {
                  q: "Can beginners trek to Khayer Lake?",
                  a: "Beginners with regular hiking fitness and no underlying health conditions can complete this trek, especially with a rest day built in at Khopra Ridge. Complete newcomers to hiking without any cardiovascular base will likely find it significantly harder."
                },
                {
                  q: "How long is the hike from Khopra Ridge to Khayer Lake?",
                  a: "The round trip from Khopra Ridge to Khayer Lake and back covers roughly 12–15 kilometers and typically takes 7–9 hours, including a steep 1,000-meter elevation gain on the way up."
                },
                {
                  q: "Is altitude sickness common on the Khayer Lake trek?",
                  a: "Mild symptoms like headache and fatigue are fairly common above 3,500 meters, including at Khopra Ridge and near Khayer Lake. Severe AMS is less common among trekkers who acclimatize properly and avoid rushing the final ascent."
                },
                {
                  q: "How many days do I need for proper acclimatization?",
                  a: "Most itineraries build in at least one rest or short-acclimatization day around Khopra Ridge before attempting the Khayer Lake day hike, in addition to the gradual elevation gain built into the days leading up to it."
                },
                {
                  q: "What is the best time to visit Khayer Lake?",
                  a: "Autumn (September to November) generally offers the clearest skies and most stable trail conditions, with spring (March to May) as a strong second option. Winter and monsoon seasons bring added difficulty from snow, ice, or rain."
                },
                {
                  q: "Is Khayer Lake harder than Poon Hill?",
                  a: "Yes. Poon Hill tops out around 3,210m and is typically a two- to three-day trek, while Khayer Lake reaches 4,660m and involves a longer itinerary with a more demanding final ascent."
                },
                {
                  q: "Do I need a guide for the Khayer Lake trek?",
                  a: "A guide isn't strictly mandatory, but for a first high-altitude trek, traveling with an experienced guide adds a real safety margin — particularly for recognizing early AMS symptoms and making sound descent decisions if conditions change."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
                >
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base list-none">
                    <span>{faq.q}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* SECTION 16: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Khayer Lake&apos;s altitude is the defining fact of this trek, and everything else — the pacing, the acclimatization schedule, the choice of starting point — exists to manage it safely. At 4,660 meters, reaching the lake isn&apos;t about technical skill; it&apos;s about respecting what thin air does to your body and giving yourself enough time to adapt to it.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              For a reasonably fit trekker willing to follow a sensible itinerary, rest at Khopra Ridge before pushing higher, and listen to their body along the way, this trek is genuinely achievable. The difficulty is real, but it&apos;s also predictable and manageable once you understand where it comes from.
            </p>
          </article>

          {/* SECTION 17: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Have Questions About Altitude Safety?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guides are wilderness medical first responders. We can help you build an acclimatization schedule and itinerary suited to your experience level, so you reach Khayer Lake prepared rather than guessing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Talk to a Local Trek Expert &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    📝 Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    💰 Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🎒 Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This altitude planner is verified by Nepal medical guide coordinators. All guides carry altitude sickness response sheets, diamox, and portable oxygen systems, and are trained to recognize early AMS symptoms.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
