import React from "react";
import Link from "next/link";

export default function Page() {
  const videoGuides = [
    {
      title: "Khopra Ridge Loop Drone Compilation",
      duration: "4 min 12 sec",
      desc: "Stunning aerial views of the high alpine ridge walks, deep valley fog sheets, and the west face wall of Annapurna South."
    },
    {
      title: "Khayer Lake Trek Walkthrough & Trail Guide",
      duration: "12 min 30 sec",
      desc: "A first-person trail walkthrough covering river suspension crossings, forested stages, and the steep climb up to the glacial lake."
    },
    {
      title: "Community Lodge Cooperative Overview",
      duration: "8 min 15 sec",
      desc: "An informative documentary detailing the lodge operations under social entrepreneur Mahabir Pun, interviewing local Magar families."
    },
    {
      title: "Trekking Fitness & Altitude Briefing",
      duration: "6 min 45 sec",
      desc: "Our lead checkpost coordinator outlines safety protocols, Diamox prevention, acclimatization stages, and fitness tips."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Assets</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Video Walkthroughs
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the trails in motion. A curated directory of drone compilations, first-person trail walkthroughs, and safety briefings.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Visualizing the Himalayan Slopes</h2>
          <p className="text-stone-600 leading-relaxed">
            Videos offer a dynamic perspective of trail conditions, river crossings, and lodge facilities. To prepare you for the physical layout and altitude changes, watch our curated walkthrough videos of the Khopra circuit.
          </p>
        </div>

        {/* Video Guide List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Video Library</h3>
          <div className="space-y-6">
            {videoGuides.map((vid, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{vid.title}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    Duration: {vid.duration}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">
                  {vid.desc}
                </p>
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
              Our guides review all video footage to verify trail accuracy, landslide landmarks, and safety markers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Multi-Village Loop Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Explore these traditional villages with our licensed local guides. Secure your permit-inclusive booking packages with our local team.
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
