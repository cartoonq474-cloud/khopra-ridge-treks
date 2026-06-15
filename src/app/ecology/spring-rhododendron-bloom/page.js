import React from "react";
import Link from "next/link";

export default function Page() {
  const bloomTimeline = [
    {
      elevation: "Lower Forests (1,500m - 2,200m)",
      timing: "Late February to Mid-March",
      colors: "Lali Gurans (Deep Red)",
      desc: "The bloom starts lower down around Ghandruk and Swanta, showing massive deep crimson red flower heads against terraced fields."
    },
    {
      elevation: "Mid-Altitude Ridges (2,200m - 3,000m)",
      timing: "Mid-March to Mid-April",
      colors: "Pink, Magenta, and White",
      desc: "Tadapani and Chhistibung forests turn into a dense canopy. Great trail sections for walking beneath arches of falling flower petals."
    },
    {
      elevation: "High Pasture Borders (3,000m - 3,500m)",
      timing: "Late April to Early May",
      colors: "Dwarf White and Pale Yellow",
      desc: "The final blooming frontier around Dobato and Bayeli. Stunted shrubs adapt to the cold, producing smaller white and yellow clusters."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-600 transition-colors">Ecology</Link>
          <span>/</span>
          <span className="text-stone-800">Rhododendron Bloom</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Spring Canopy</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Spring Rhododendron Bloom Timeline
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Walk under the crimson arches. Explore the annual flowering schedule, color bands, and elevation distributions of Nepal&apos;s national flower.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Nepal&apos;s Signature Spring Canopy</h2>
          <p>
            Rhododendron arboreum, known locally as **Lali Gurans**, is the national flower of Nepal. The forests surrounding Tadapani, Dobato, and Swanta are home to some of the largest rhododendron trees in the world, growing into massive trunks over 15 meters tall.
          </p>
          <p>
            During spring, these forests undergo a spectacular transformation. The canopy blossoms, creating a vertical gradient of color that climbs the mountainside as temperatures rise.
          </p>
        </div>

        {/* Bloom Timeline list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Bloom Schedule by Elevation</h3>
          <div className="space-y-6">
            {bloomTimeline.map((bt, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">{bt.elevation}</span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-2 mt-1 gap-1">
                  <h4 className="font-extrabold text-stone-950 text-base">{bt.colors}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {bt.timing}
                  </span>
                </div>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">{bt.desc}</p>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Book a Spring Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Experience the spectacular spring colors. Inquire today to secure lodge bookings and private transfers during the peak spring bloom season.
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
