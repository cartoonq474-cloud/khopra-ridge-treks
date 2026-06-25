import React from "react";
import Link from "next/link";

export default function Page() {
  const beautifulPlaces = [
    {
      name: "Khopra Ridge Sunset Edge",
      desc: "Standing on the grassy precipice of the ridge at sunset, facing the deep valley clouds with the orange face of Dhaulagiri rising directly ahead."
    },
    {
      name: "Sacred Khayer Lake basin",
      desc: "The pristine turquoise glacial lake sitting at the base of the massive vertical wall of Annapurna South, surrounded by mountain reflections."
    },
    {
      name: "Muldai Viewpoint Panoramic Deck",
      desc: "A stunning 3,600m viewpoint that reveals the broad expanse of both Dhaulagiri and Annapurna massifs in a single 360-degree sweep."
    },
    {
      name: "Ancient Moss Forests of Dobato",
      desc: "Ancient oak and rhododendron woodlands covered in layers of green moss, where morning sun rays slice through the damp canopy."
    },
    {
      name: "Swanta Valley Terraced Farms",
      desc: "Descending the ridge to see Swanta village nestled in vibrant green or golden barley terrace fields, with local stream suspension bridges."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Most Beautiful Places on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Curated trail beauty. Explore the top 5 most photogenic locations, viewpoints, and valleys along the loop.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Visual Spectacle</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge Trek is a route of incredible visual diversity. Rather than walking through uniform valleys, you experience a dynamic progression of scenery, from terraced fields and slate villages to ancient cloud forests, exposed ridges, and turquoise glacial lakes.
          </p>
        </div>

        {/* Beautiful Places List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Top Scenic Highlights</h3>
          <div className="space-y-6">
            {beautifulPlaces.map((place, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{idx + 1}. {place.name}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We compile visual logs and coordinate photography tours across the Annapurna. This list represents the highest rated vistas by our guests and guides.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Scenic Photography Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to capture these beautiful viewpoints during optimal lighting windows? Secure your permit-inclusive booking packages with our local team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Book Your Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
