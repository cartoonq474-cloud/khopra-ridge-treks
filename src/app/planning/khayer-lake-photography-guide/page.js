"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const tips = [
    {
      title: "Glacial Reflection Framing",
      desc: "For clear, mirror-like reflections of Annapurna South, shoot before 9:30 AM. After mid-morning, alpine wind gusts disturb the water surface, breaking up the reflection."
    },
    {
      title: "Circular Polarizer Filters",
      desc: "Essential gear. A high-quality CPL filter cuts down the harsh glare bouncing off the water, saturating the deep turquoise and blue tones of the glacial lake."
    },
    {
      title: "Golden Hour Timing",
      desc: "Sunrise offers spectacular golden glow shots on the peaks, but since you must walk 4 hours to reach the lake, shoot sunrise from Khopra Ridge, and arrive at the lake for the brilliant late morning light."
    },
    {
      title: "Scale Compositions",
      desc: "The scale of the Annapurna South face (towering 3,000 meters straight above the lake) is hard to capture. Have your trekking partner stand near the shoreline to give context and scale to the frame."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Photography</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Creation</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake Photography Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Capture the reflection. A professional guide to composition angles, polarizer setups, and lighting timing at the base of Annapurna South.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Photographer&apos;s Alpine Dream</h2>
          <p>
            Khayer Lake (4,660m) offers one of the most dramatic mountain backdrops in the Himalayas. The turquoise glacial waters sit at the immediate foot of the south face of Annapurna South (7,219m), which rises like a giant wall straight out of the water.
          </p>
          <p>
            Due to the extreme altitude, dry air, and strong sun reflection off the glaciers, taking clean, professional photographs requires specific technical knowledge and composition adjustments.
          </p>
        </div>

        {/* Tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Professional Photography Tips</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-2xl">📸</span>
                <h4 className="font-extrabold text-stone-950 text-base mt-2">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Gear Checklist */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Recommended Photography Gear Checklist</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-2.5">
            <li><strong>Wide-Angle Lens:</strong> A 16-35mm or 24-70mm lens (full-frame equivalent) is essential to capture both the lake and the towering peak in a single frame.</li>
            <li><strong>Circular Polarizer (CPL):</strong> Cuts through glacier and water reflections, saturating sky and lake colors.</li>
            <li><strong>Extra Batteries:</strong> The extreme cold at 4,660m drains lithium-ion camera batteries rapidly. Keep spare batteries warm in an inner pocket close to your chest.</li>
            <li><strong>Lightweight Tripod:</strong> Useful for dawn exposures along the trail or panorama stitching.</li>
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
            <h3 className="text-2xl font-bold">Join Our Photography Expeditions</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              We run dedicated photography tours with extended stays on Khopra Ridge, allowing you to capture the golden hours in comfort.
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
