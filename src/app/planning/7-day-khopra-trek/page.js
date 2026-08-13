import React from "react";
import Link from "next/link";

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "7 Days" },
    { label: "Total Distance", value: "~58 km / 36.0 mi" },
    { label: "Max Altitude", value: "4,660m / 15,288ft" },
    { label: "Difficulty Grade", value: "Challenging" }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Drive Pokhara to Hile, Trek to Tadapani | Nepal Trek Guide",
      elev: "2,630m",
      time: "5-6 hrs",
      desc: "Scenic jeep drive from Pokhara to Hile (3 hrs) followed by a steady ascent through lush oak forests and rhododendrons to reach Tadapani node."
    },
    {
      day: 2,
      title: "Tadapani to Chhistibung",
      elev: "2,975m",
      time: "6-7 hrs",
      desc: "Leave the busy Ghorepani circuit. Wander through quiet meadows and prime flora habitats, dropping down before climbing to Chhistibung community pasture."
    },
    {
      day: 3,
      title: "Chhistibung to Khopra Ridge",
      elev: "3,660m",
      time: "3-4 hrs",
      desc: "Climb steeply above the tree line. The trail opens up into high ridges. Arrive at the community lodge for spectacular sunset views directly opposite Dhaulagiri."
    },
    {
      day: 4,
      title: "Day Hike to Sacred Khayer Lake & Return",
      elev: "4,660m",
      time: "7-8 hrs",
      desc: "A long and challenging ascent to the sacred alpine temple lake directly under Annapurna South. Leave early morning and return to the comfort of Khopra Ridge."
    },
    {
      day: 5,
      title: "Khopra Ridge to Swanta Village",
      elev: "2,200m",
      time: "5-6 hrs",
      desc: "Trek down the ridge through beautiful high-altitude pastures. Arrive at Swanta, a peaceful farming village inhabited by the local Magar community."
    },
    {
      day: 6,
      title: "Swanta to Ghorepani Village",
      elev: "2,860m",
      time: "4-5 hrs",
      desc: "Cross the suspension bridge, ascend through bamboo forests, and join the main trekking route at the popular village hub of Ghorepani."
    },
    {
      day: 7,
      title: "Poon Hill Sunrise, Descend to Hile & Drive to Pokhara",
      elev: "1,400m",
      time: "6-7 hrs",
      desc: "Ascend Poon Hill (3,210m) for sunrise views. Descend to Hile, then board your private jeep transfer back to Pokhara."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Breadcrumb / Category */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Itinerary Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            7-Day Khopra Ridge Trek (Express Route)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">The ideal duration for active hikers. This 7-day express itinerary includes the demanding day-hike to sacred Khayer Lake and ends via Ghorepani and Poon Hill.
          </p>
        </div>

        {/* Spec Overview Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {summarySpecs.map((spec, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{spec.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Is the 7-Day Route Right for You?</h2>
          <p className="text-stone-600 leading-relaxed">The 7-day package represents the perfect balance of visual rewards and physical challenge. By starting directly with jeep logistics, it allows you to climb to the ridge, hike the sacred corridor of Khayer Lake (4,660m), and wrap up the loop through Ghorepani and Poon Hill within a week. Due to the rapid altitude gains, it is recommended for trekkers with some high-altitude experience and excellent cardiovascular fitness.
          </p>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 text-sm leading-relaxed">
            <strong>Altitude Warning:</strong>You will ascend from 1,400m to 3,660m in just 3 days. Ensure you monitor oxygen saturation levels daily using an oximeter, which is provided in all our guides' medical kits.
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Day-by-Day Itinerary</h2>
          <div className="space-y-6">
            {itinerary.map((d) => (
              <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                  {d.day}
                </span>
                <div className="w-full bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-extrabold text-stone-950 text-base">{d.title}</h3>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                      {d.elev}
                    </span>
                  </div>
                  <span className="block text-xs font-semibold text-stone-400 mt-1 uppercase tracking-wider">Walking time: {d.time}</span>
                  <p className="mt-3 text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This express 7-day plan is verified by our field staff. We check trail markers, suspension bridges, and community pasture safety profiles weekly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book this 7-Day Tour</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Ready to climb? Book our standard 7-day package with certified guides, private transport, and local community accommodations.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Book This Trek
              </Link>
              <Link
                href="/planning/khopra-trek-itinerary"
                className="rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
              >Compare Route Options
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
    canonical: '/planning/7-day-khopra-trek',
  },
};
