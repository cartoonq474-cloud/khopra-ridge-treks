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

  const altitudeTiers = [
    { name: "Pokhara", alt: 820, desc: "Sea level baseline pressure. Altitude sickness risk is 0%." },
    { name: "Tadapani", alt: 2630, desc: "Tree line boundary. Minor breathing adjustments for flatland hikers." },
    { name: "Bayeli Kharka", alt: 3425, desc: "High mountain climate. Acclimatization symptoms (mild headache) may start." },
    { name: "Khopra Ridge", alt: 3660, desc: "High ridge exposure. Sleep altitude limit; do not climb further if feeling unwell." },
    { name: "Khayer Lake", alt: 4660, desc: "Extreme alpine lake. Oxygen is thin (~48% effective pressure). Acute Mountain Sickness risk is high." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Altitude &amp; Safety</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake Altitude &amp; Difficulty Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Climbing to 4,660 meters is a major high-altitude undertaking. Learn how to prepare, estimate oxygen changes, and structure acclimatization days to ensure safety.
          </p>
        </div>

        {/* Oxygen Calculator Section */}
        <div className="mt-12 p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Interactive Oxygen Pressure Estimator</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            As you ascend, the barometric pressure drops, resulting in fewer oxygen molecules per breath. Use the slider below to estimate the effective oxygen level relative to sea level.
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Target Altitude</span>
              <strong className="text-2xl font-black text-emerald-600">{oxAltitude} meters ({Math.round(oxAltitude * 3.28084)} feet)</strong>
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

          <div className="grid grid-cols-2 gap-4 border-t border-stone-100 pt-6">
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

        {/* Elevation Tier Listing */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Elevation Milestones &amp; Risk Profiles</h2>
          <div className="space-y-4">
            {altitudeTiers.map((tier, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-stone-950 text-base">{tier.name}</h3>
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

        {/* Deep-Dive Safety, Difficulty & Altitude Resources */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Detailed Safety, Altitude &amp; Difficulty Silos</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            For maximum E-E-A-T and deep trail safety preparation, explore our specialized guides covering all aspects of physical training, altitude adaptation, and emergency logistics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">1. Difficulty &amp; Training</span>
              <ul className="space-y-2 text-xs font-semibold text-stone-700">
                <li>
                  <Link href="/planning/khopra-trek-difficulty" className="hover:text-emerald-600 transition">
                    &rarr; Khopra Trek Difficulty Profile
                  </Link>
                </li>
                <li>
                  <Link href="/planning/can-beginners-do-khopra-trek" className="hover:text-emerald-600 transition">
                    &rarr; Can Beginners Hike Khopra?
                  </Link>
                </li>
                <li>
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-600 transition">
                    &rarr; Fitness Standards &amp; Self-Test
                  </Link>
                </li>
                <li>
                  <Link href="/planning/training-for-khopra-trek" className="hover:text-emerald-600 transition">
                    &rarr; 8-Week Training Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/planning/trekking-fitness-plan" className="hover:text-emerald-600 transition">
                    &rarr; Weekly Workout Schedule
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">2. Altitude &amp; Acclimatization</span>
              <ul className="space-y-2 text-xs font-semibold text-stone-700">
                <li>
                  <Link href="/altitude/khopra-trek-altitude-guide" className="hover:text-emerald-600 transition">
                    &rarr; Complete Altitude Guide
                  </Link>
                </li>
                <li>
                  <Link href="/altitude/khopra-trek-altitude-chart" className="hover:text-emerald-600 transition">
                    &rarr; Elevation Profile Chart
                  </Link>
                </li>
                <li>
                  <Link href="/altitude/ams-on-khopra-trek" className="hover:text-emerald-600 transition">
                    &rarr; AMS Symptoms &amp; Prevention
                  </Link>
                </li>
                <li>
                  <Link href="/altitude/acclimatization-guide" className="hover:text-emerald-600 transition">
                    &rarr; Science of Acclimatization
                  </Link>
                </li>
                <li>
                  <Link href="/altitude/sleeping-altitude-breakdown" className="hover:text-emerald-600 transition">
                    &rarr; Night-by-Night Lodging Elev.
                  </Link>
                </li>
                <li>
                  <Link href="/altitude/khayer-lake-altitude-risks" className="hover:text-emerald-600 transition">
                    &rarr; Khayer Lake (4,660m) Risks
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">3. Safety &amp; Logistics</span>
              <ul className="space-y-2 text-xs font-semibold text-stone-700">
                <li>
                  <Link href="/safety/is-khopra-trek-safe" className="hover:text-emerald-600 transition">
                    &rarr; General Safety &amp; Wildlife
                  </Link>
                </li>
                <li>
                  <Link href="/safety/weather-hazards" className="hover:text-emerald-600 transition">
                    &rarr; Trail Weather Hazards
                  </Link>
                </li>
                <li>
                  <Link href="/safety/landslide-risks" className="hover:text-emerald-600 transition">
                    &rarr; Landslide &amp; Rockfall Risks
                  </Link>
                </li>
                <li>
                  <Link href="/safety/travel-insurance-nepal-trek" className="hover:text-emerald-600 transition">
                    &rarr; Travel Insurance Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/safety/helicopter-rescue-evacuation" className="hover:text-emerald-600 transition">
                    &rarr; Helicopter Rescue Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Altitude Rules */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Standard Acclimatization Protocols</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-5 bg-white border border-stone-200 rounded-3xl space-y-2">
              <h4 className="font-bold text-stone-900">Rule 1: Climb High, Sleep Low</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Take day hikes to higher elevations to stimulate red blood cell production, but return to a lower altitude to sleep. This is why staying at Khopra Ridge (3,660m) and day-hiking to Khayer Lake (4,660m) is the safest method.
              </p>
            </div>
            <div className="p-5 bg-white border border-stone-200 rounded-3xl space-y-2">
              <h4 className="font-bold text-stone-900">Rule 2: Monitor Vital Metrics</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Check blood oxygen saturation using a pulse oximeter twice daily (morning and evening). A sudden drop below 80% saturation along with headaches or fatigue signals a need to descend.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This altitude planner is verified by Nepal medical guide coordinators. All guides carry altitude sickness response sheets, diamox, and portable oxygen systems.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Have Questions About Altitude Safety?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Our guides are wilderness medical first responders. Contact us to learn more about how we structure safe climbs for senior trekkers or beginner groups.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Speak with a Guide
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
