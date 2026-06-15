import React from "react";
import Link from "next/link";

export default function Page() {
  const routes = [
    {
      name: "Khopra Ridge Community Trek",
      duration: "6 - 9 Days",
      difficulty: "Challenging",
      crowds: "Very Low",
      ideal: "Fit hikers seeking absolute quiet, massive panoramas, and social community impact."
    },
    {
      name: "Annapurna Base Camp (ABC)",
      duration: "7 - 10 Days",
      difficulty: "Moderate",
      crowds: "High",
      ideal: "First-time trekkers who want the vertical, amphitheater view of the peaks."
    },
    {
      name: "Annapurna Circuit Trek",
      duration: "10 - 15 Days",
      difficulty: "Strenuous",
      crowds: "Moderate to High",
      ideal: "Hikers wanting to cross a classic high pass (Thorong La at 5,416m) and explore diverse climates."
    },
    {
      name: "Mardi Himal Trek",
      duration: "4 - 5 Days",
      difficulty: "Moderate",
      crowds: "High",
      ideal: "Hikers with limited calendar days wanting a steep ridge-line climb."
    },
    {
      name: "Poon Hill Trek",
      duration: "3 - 4 Days",
      difficulty: "Easy to Moderate",
      crowds: "Very High",
      ideal: "Beginners, families, and seniors wanting comfortable lodges and basic walking stages."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Which Annapurna Trek to Choose?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Find your perfect path. Read our detailed comparison matrix covering duration, altitude difficulty, crowd density, and scenery across the Annapurna.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Navigating the Annapurna Trails</h2>
          <p className="text-stone-600 leading-relaxed">
            The Annapurna region is the most diverse trekking destination in Nepal, offering everything from short foothill loops to high-altitude pass crossings. Choosing the right path requires aligning your physical fitness, trekking experience, and comfort preferences with the right route profile.
          </p>
        </div>

        {/* Route comparison grid */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Annapurna Route Matrix</h3>
          <div className="space-y-6">
            {routes.map((rt, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{rt.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    Difficulty: {rt.difficulty}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Duration:</strong> {rt.duration}</p>
                  <p><strong>Crowd Density:</strong> {rt.crowds}</p>
                  <p><strong>Ideal For:</strong> {rt.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides lead tours on all five major Annapurna routes. This comparison table is maintained to ensure unbiased, clear route decisions for trekkers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Inquire &amp; Customize Your Route</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Still not sure which route fits your calendar and physical stamina? Get in touch with our Pokhara planning team.
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
