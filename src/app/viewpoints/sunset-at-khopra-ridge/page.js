import React from "react";
import Link from "next/link";

export default function Page() {
  const sunsetTips = [
    {
      title: "Annapurna South Alpenglow",
      desc: "At sunset, the light strikes the west-facing walls of the Annapurna range. Annapurna South (7,219m) and Hiunchuli (6,441m) glow intensely with golden and orange alpenglow, towering directly above the lodge."
    },
    {
      title: "Kali Gandaki Valley Shadows",
      desc: "As the sun drops below the high ridges to the west, you will see deep, long shadow lines stretch across the Kali Gandaki Gorge thousands of meters below, creating a dramatic sense of depth."
    },
    {
      title: "Comfortable Viewing Temperatures",
      desc: "Unlike sunrise, which is freezing cold, sunset is much more comfortable. You can sit outside on the lodge benches to watch the transition before heading inside for dinner."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Experience</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Sunset at Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Watch the sunset paint the shear face of Annapurna South in hues of crimson and gold, high above the Kali Gandaki Gorge.
          </p>
        </div>

        {/* Sunset details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Evening Spectacle</h2>
          <p>While sunrise on the Khopra Ridge trek gets a lot of attention, the sunset is equally spectacular. As the evening sets in, the clouds that often gather in the afternoon begin to dissipate, revealing clear, sharp outlines of the high peaks against a darkening sky.
          </p>
        </div>

        {/* Tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Sunset Viewing and Photography Tips</h3>
          <div className="space-y-6">
            {sunsetTips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Watch the Sun Set Over the Peaks</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Join our 9-day guided trek. We manage all permits, secure lodging on the high ridge, and ensure you travel with certified local leaders.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
