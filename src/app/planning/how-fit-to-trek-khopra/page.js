import React from "react";
import Link from "next/link";

export default function Page() {
  const fitnessChecks = [
    {
      metric: "Cardiovascular Endurance (Aerobic Capacity)",
      requirement: "Ability to run 5k in under 35 minutes, or sustain 60 minutes of continuous stair-stepping / uphill walking without extreme shortness of breath."
    },
    {
      metric: "Lower Body Strength",
      requirement: "Strong quadriceps, hamstrings, and calves to manage the steep 1,000m ascent to Khopra and the deep, joint-jarring descents to Swanta and Tatopani."
    },
    {
      metric: "Core and Back Stability",
      requirement: "Sufficient core strength to carry a 5kg to 8kg daypack containing water, shell jackets, dry socks, snacks, and personal electronics for 6+ hours daily."
    },
    {
      metric: "Mental Endurance",
      requirement: "The mental stamina to trek continuously for 6 to 8 days, occasionally in cold, wet, or windy alpine conditions with basic lodge comforts."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Fitness Standards</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">How Fit Do You Need to Be for Khopra?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Analyze your physical readiness. Review required stamina, lower-body strength standards, and a quick self-test to check if your body is trail-ready.
          </p>
        </div>

        {/* The Baseline */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Understanding the Fitness Baseline</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge Trek is not a technical mountaineering climb, but it demands a good level of physical fitness. You will hike between 5 and 15 kilometers daily on uneven mountain trails, climbing steep gradients at altitudes where the air contains up to 45% less oxygen than at sea level.
          </p>
          <p className="text-stone-600 leading-relaxed">A solid foundation of cardiovascular fitness and muscular strength will determine whether you spend your trek marveling at the giant Dhaulagiri and Annapurna peaks, or staring at your boots in absolute exhaustion.
          </p>
        </div>

        {/* Fitness Metrics */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Core Fitness Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fitnessChecks.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">{item.metric}</span>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">{item.requirement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Home Self-Test */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-6">
          <h3 className="text-lg font-bold">The 3-Hour Trail Readiness Self-Test</h3>
          <p className="text-xs leading-relaxed">To test your fitness at home before booking, try this: Find a local trail or hilly area. Pack a backpack with 6kg of weight (water bottles work great). Hike uphill for 1.5 hours and descend for 1.5 hours.
          </p>
          <p className="text-xs leading-relaxed font-semibold">If you can complete this 3-hour hike without severe joint pain and recover fully within 24 hours, you have the baseline conditioning required to start training for the Khopra Ridge Trek.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We design training guides to help trekkers prepare. If you have pre-existing knee issues or asthma, please consult a physician before trekking to high altitudes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Prepare with Our Support</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book a guided trek and receive our comprehensive, customized training guide. Let our experienced guides assist you on the mountain.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
