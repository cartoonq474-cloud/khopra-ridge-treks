import React from "react";
import Link from "next/link";

export default function Page() {
  const gems = [
    {
      name: "Bansi Kharka Pastures",
      location: "Between Tadapani and Bayeli Kharka",
      desc: "A quiet, green alpine clearing frequented by grazing cattle and local sheep herders. It is an ideal spot for a lunch break and bird watching, far away from the commercial pathways."
    },
    {
      name: "Muldai Sunrise Alternative",
      location: "Near Dobato",
      desc: "While most tourists climb Poon Hill for sunrise, Muldai Viewpoint (3,637m) offers a much cleaner, uncrowded 360-degree panorama of Dhaulagiri, Annapurna South, and Machhapuchhre."
    },
    {
      name: "Upper Swanta honeycombs",
      location: "Swanta Village flanks",
      desc: "Traditional bee hives nestled on the stone walls of local houses. You can witness organic honey harvesting and try fresh mountain honey comb slices in Swanta village."
    },
    {
      name: "Sacred Baraha temple shrine",
      location: "Khayer Lake shore",
      desc: "A small stone temple dedicated to the deity Khayer Baraha, located on the shores of the lake (4,660m). It serves as a holy pilgrimage site with unique spiritual energy."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Hidden Gems of the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Discover the unlisted scenic highlights. Read our guide to offbeat pastures, hidden shrines, and local honey spots along the loop.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Trails Less Traveled</h2>
          <p className="text-stone-600 leading-relaxed">The entire Khopra loop is an offbeat route, but certain landmarks and segments are exceptionally quiet and beautiful. Knowing where to pause, check out a local homestay, or take an alternate path can elevate your trek from a standard walk to a deep visual and cultural experience.
          </p>
        </div>

        {/* Gems list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Top Hidden Highlights</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {gems.map((gem, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{gem.name}</h4>
                <p className="text-xs text-stone-400 mb-2 font-semibold">{gem.location}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{gem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides are native to the surrounding valleys and walk the trails year-round, discovering unique locations and seasonal landmarks for our guests.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Inquire About Custom Offbeat Itineraries</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to design a custom trek highlighting these hidden viewpoints and homestays? Get in touch with our local team.
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
