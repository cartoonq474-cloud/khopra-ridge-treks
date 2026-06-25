import React from "react";
import Link from "next/link";

export default function Page() {
  const categories = [
    {
      name: "Mountain Peaks",
      desc: "Stunning shots of Dhaulagiri at sunset and Annapurna South face walls."
    },
    {
      name: "Sacred Glacial Waters",
      desc: "Sacred turquoise hues and temples of Khayer Lake (4,660m)."
    },
    {
      name: "Indigenous Cultures",
      desc: "Slate-roofed Gurung homes in Ghandruk and organic farming Magar fields in Swanta."
    },
    {
      name: "Trail Ecosystems",
      desc: "Lush rhododendron canopies, high alpine meadows, and forest streams."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Assets</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Trek Photography Gallery
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Explore the loop through visual assets. A curated directory of high-resolution image galleries tracing peaks, lakes, and traditional villages.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Glimpse of the Offbeat Trail</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge circuit is highly regarded as the most visually diverse and photogenic loop in the Annapurna range. To give you a preview of what to expect, explore our curated photography galleries categorized by landmarks.
          </p>
        </div>

        {/* Galleries List */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
              <h3 className="font-extrabold text-stone-950 text-base">{cat.name}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{cat.desc}</p>
              <div className="pt-2">
                <span className="text-xs font-bold text-emerald-600 cursor-pointer hover:underline">View Gallery Collection →</span>
              </div>
            </div>
          ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">All visual assets are contributed by our local guides and clients during seasonal departures. We do not use generic stock photos.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Secure Your Scenic Trek Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to capture these beautiful viewpoints during optimal lighting windows? Secure your permit-inclusive booking packages with our local team.
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
