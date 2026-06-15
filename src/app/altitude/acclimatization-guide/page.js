import React from "react";
import Link from "next/link";

export default function Page() {
  const steps = [
    {
      title: "1. The 'Climb High, Sleep Low' Method",
      desc: "During the day hike to Khayer Lake, you climb to 4,660m but return to sleep at 3,660m (Khopra Ridge). This exposes your body to thinner air to stimulate red blood cell production, while letting you recover at a lower sleeping altitude."
    },
    {
      title: "2. Limit Sleeping Elevation Gain",
      desc: "Avoid climbing more than 500 meters per night above 3,000m. The Khopra itinerary fits this by having you sleep at Bayeli (3,432m) before descending to Chhistibung (2,975m) and then moving to Khopra (3,660m)."
    },
    {
      title: "3. Slow Pace & Low Intensity",
      desc: "Walk at a pace where you can easily speak in complete sentences. Overexerting yourself drains your energy and slows down your body's natural acclimatization process."
    },
    {
      title: "4. Trail Nutrition & Fueling",
      desc: "Your body burns more energy at high altitude. Eat carbohydrate-rich meals like Dal Bhat, garlic soup (believed to improve circulation), and complex starches to maintain energy levels."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Adaptation</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Acclimatization Principles for High Altitudes
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Learn how to safely adapt your body to low oxygen environments. A detailed breakdown of pacing, hydration, and ascending techniques in the Annapurnas.
          </p>
        </div>

        {/* How Acclimatization Works */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">How Acclimatization Works</h2>
          <p className="text-stone-600 leading-relaxed">
            Acclimatization is the process by which your body adapts to the decrease in oxygen pressure at higher altitudes. This occurs through physiological changes: hyperventilation (deeper, faster breathing), increased red blood cell concentration, and modified kidney function.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Acclimatization requires patience. If you climb too fast, your body cannot keep up, resulting in altitude headaches, fatigue, or severe sickness.
          </p>
        </div>

        {/* The Acclimatization Steps */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Acclimatization Guidelines</h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{step.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration warning */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Why Garlic Soup is a Local Remedy</h3>
          <p className="text-xs leading-relaxed">
            In Nepalese trekking culture, guides often recommend drinking **garlic soup** (Lasun ko Soup) daily at high altitude. While not a medical cure, garlic contains sulfur compounds and active ingredients that can help thin blood, improve micro-circulation, and promote better breathing. It is also an excellent way to rehydrate and replenish sodium levels after a hard day of climbing.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are certified by the Keep Nepal Friendly organization and receive annual training on high-altitude altitude safety, pacing, and emergency response.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Safe Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Maximize your safety and success rates on the trail. Plan a guided trek with our safety-oriented local guides.
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
