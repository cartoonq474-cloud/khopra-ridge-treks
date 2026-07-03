import React from "react";
import Link from "next/link";

export default function Page() {
  const tipsForFirstTimers = [
    {
      title: "Hire a Licensed Local Guide",
      desc: "For your first time in the Himalayas, trekking with a licensed guide provides safety, route security, and deep cultural connections, while managing all lodge bookings and permit checks."
    },
    {
      title: "Buy Proper Footwear Early",
      desc: "Do not wear brand-new boots on the trek. Buy trekking shoes with good ankle support 4 to 6 weeks early and wear them on hikes to break them in, avoiding painful blisters."
    },
    {
      title: "Pace Yourself (Bistarai)",
      desc: "The golden rule of high-altitude trekking is to walk slowly ('Bistarai Bistarai'). Pushing too hard early leads to rapid exhaustion and raises Acute Mountain Sickness (AMS) risks."
    },
    {
      title: "Pack Smart and Light",
      desc: "Keep your pack weight under 10-12 kg if hiking solo, or under 15 kg for porters to carry. Layers are key: fleece jackets, thermals, windproof shells, and a warm beanie."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Persona Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Trek for First-Time Trekkers
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">First time in Nepal? Read our comprehensive guidelines on guide hiring, packing essentials, pacing control, and high-altitude health safety.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Perfect Himalayan Introduction</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge Trek is a fantastic option for first-time trekkers in Nepal. It offers a moderate-to-challenging high-altitude experience without the weeks-long commitment of the Everest Base Camp or Annapurna Circuit routes.
          </p>
          <p className="text-stone-600 leading-relaxed">However, trekking at 3,600+ meters requires understanding mountain safety, logistics, and tea house culture. Below is a checklist of critical advice to ensure a successful and enjoyable first Himalayan trek.
          </p>
        </div>

        {/* Tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Essential Tips for Beginners</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {tipsForFirstTimers.map((tip, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{tip.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides have led thousands of first-time trekkers through the Annapurna foothills. We design routes with conservative daily ascents to maximize safety and success.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your First Himalayan Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want a fully guided, permit-inclusive package designed specifically for beginners? Get in touch with our local team.
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

export const metadata = {
  alternates: {
    canonical: '/planning/khopra-for-first-time-trekkers',
  },
};
