"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const amsRules = [
    {
      rule: "Rule 1: Recognize Early Symptoms",
      desc: "A mild, throbbing headache, loss of appetite, dizziness, fatigue, and difficulty sleeping are early warning signs of AMS. Do not ignore them."
    },
    {
      rule: "Rule 2: Never Ascend with Symptoms",
      desc: "If you have even mild symptoms of altitude sickness, you must not climb higher. Remain at your current altitude (e.g., stay at Bayeli or Khopra Ridge) until symptoms resolve."
    },
    {
      rule: "Rule 3: Descend Immediately if Symptoms Worsen",
      desc: "If a headache does not improve after 24 hours, or if you develop signs of HAPE (breathlessness at rest) or HACE (lack of coordination), descend immediately."
    },
    {
      rule: "Rule 4: Hydrate and Rest",
      desc: "Drink 4 to 5 liters of water daily. Avoid alcohol, sleep medication, and strenuous physical overexertion during transition days."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Altitude Safety</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            AMS on the Khopra Trek: Symptoms & Safety
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand Acute Mountain Sickness (AMS). Review prevention strategies, diagnostic checkpoints, and emergency protocols when trekking above 3,000 meters.
          </p>
        </div>

        {/* What is AMS */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">What is Acute Mountain Sickness?</h2>
          <p className="text-stone-600 leading-relaxed">
            Acute Mountain Sickness (AMS) is the body's reaction to ascending rapidly to altitudes above 2,500 meters without giving the respiratory and circulatory systems time to adjust to lower oxygen levels. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            On the Khopra Ridge Trek, the risks are highest during the climb from Chhistibung (2,975m) to Khopra Ridge (3,660m) and during the day hike to Khayer Lake (4,660m). Being aware of early symptoms can prevent progression to severe altitude illnesses like HAPE (High Altitude Pulmonary Edema) or HACE (High Altitude Cerebral Edema).
          </p>
        </div>

        {/* Symptoms checklist */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Altitude Illness Classifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">Mild AMS</span>
              <ul className="mt-3 space-y-2 text-xs text-stone-500 list-disc pl-4">
                <li>Dull, throbbing headache</li>
                <li>Mild fatigue or dizziness</li>
                <li>Loss of appetite</li>
                <li>Restless sleep patterns</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">HAPE (Pulmonary)</span>
              <ul className="mt-3 space-y-2 text-xs text-stone-500 list-disc pl-4">
                <li>Breathlessness even at rest</li>
                <li>Persistent dry cough</li>
                <li>Extreme fatigue</li>
                <li>Gurgling sound in chest</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">HACE (Cerebral)</span>
              <ul className="mt-3 space-y-2 text-xs text-stone-500 list-disc pl-4">
                <li>Severe, blinding headache</li>
                <li>Ataxia (loss of balance)</li>
                <li>Confusion or slurred speech</li>
                <li>Hallucinations or lethargy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Golden Rules */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Four Golden Rules of Altitude Safety</h2>
          <div className="space-y-6">
            {amsRules.map((rule, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{rule.rule}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Diamox info */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Acetazolamide (Diamox) Advice</h3>
          <p className="text-xs leading-relaxed">
            Diamox is a carbonic anhydrase inhibitor that speeds up acclimatization by increasing bicarbonate excretion in kidneys, stimulating deeper breathing. It is a preventive medication, not a cure for severe AMS. Consult your physician at home before using Diamox, and always remember: **Diamox is never a substitute for descending if symptoms are worsening**.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are trained in altitude medicine and carry comprehensive wilderness medical packs. We monitor oxygen levels and pulse daily above 3,000m to ensure a safe experience.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Prioritize Your Safety</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our guided departure. Get pre-trip briefings, trained mountain guides, and daily safety assessments during your trek.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
