import React from "react";
import Link from "next/link";

export default function Page() {
  const shootLocations = [
    {
      name: "Khopra Ridge (3,660m)",
      subject: "Dhaulagiri I, Nilgiri, Annapurna South, valley clouds.",
      time: "Sunset and Sunrise (golden hour reflection over Dhaulagiri)."
    },
    {
      name: "Muldai Viewpoint (3,637m)",
      subject: "360-degree Annapurna range, sunrise over the peaks.",
      time: "Pre-sunrise (climb from Dobato at 4:30 AM)."
    },
    {
      name: "Sacred Khayer Lake (4,660m)",
      subject: "Turquoise glacial water, Annapurna South face wall reflection, temple shrine.",
      time: "Mid-day (for optimal light reflection) to early afternoon."
    },
    {
      name: "Ghandruk Village (1,940m)",
      subject: "Slate-roof Gurung houses, terraced farms, traditional life.",
      time: "Morning street light and late afternoon portraits."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Persona Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Trek for Photographers
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">The ultimate visual guide. Read about camera gear recommendations, battery charging solutions, golden hour windows, and key shoot locations.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Landscape Photographer&apos;s Paradise</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge Trek offers some of the most dramatic, high-altitude landscape photography opportunities in Nepal. Because the trail runs along a high ridge, you stand at eye-level with the massive walls of Annapurna South and Dhaulagiri, looking down into the deepest valley in the world.
          </p>
          <p className="text-stone-600 leading-relaxed">To capture these vistas, photographers must prepare for challenges like freezing mountain temperatures (which drain lithium-ion batteries rapidly) and limited solar power charging capabilities at high-altitude community lodges.
          </p>
        </div>

        {/* Shoot Locations */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Photography Locations</h3>
          <div className="space-y-4">
            {shootLocations.map((loc, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{loc.name}</h4>
                <div className="mt-2 text-xs text-stone-500 leading-relaxed space-y-1">
                  <p><strong>Primary Subjects:</strong> {loc.subject}</p>
                  <p><strong>Best Time:</strong> {loc.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gear Tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important Photography Gear Tips</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Battery Management:</strong>Power outlets at high lodges like Bayeli and Khopra are solar-driven and cost $2-$3 USD per charge. Bring a high-capacity power bank and store camera batteries in warm pockets inside your sleeping bag at night.</li>
            <li><strong>Lens Selection:</strong>A wide-angle lens (16-35mm equivalent) is essential for broad landscape panoramas. A telephoto lens (70-200mm) is useful for compressing mountain peaks and capturing distant wildlife like Monal pheasants.</li>
            <li><strong>Weather Protection:</strong>High ridges are prone to sudden fog and mist. Pack dry bags, silica gel packets, and waterproof camera covers to protect your gear from moisture.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We lead specialized photography tours. Our guides know the exact spots, sun angles, and trail timings to ensure you get the best lighting.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Photography Guided Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to trek with a guide who understands lighting angles, peak alignments, and photography pacing? Inquire about our customized photo tours.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Book Photo Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/planning/khopra-for-photographers',
  },
};
