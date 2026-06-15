import React from "react";
import Link from "next/link";

export default function Page() {
  const mohareHighlights = [
    {
      title: "1. Authentic Village Homestays",
      desc: "Stay in traditional Magar villages like Banskharka and Nangi. You sleep in local homes, eat home-cooked organic meals, and learn about orange orchards and organic farming projects."
    },
    {
      title: "2. The Wireless Internet Legacy",
      desc: "Nangi village is famous as the birth site of the Nepal Wireless Networking Project, started by local hero Mahabir Pun to connect remote mountain communities to medical clinics and schools."
    },
    {
      title: "3. Shared Economic Support",
      desc: "Like Khopra, the Mohare Danda route operates on a 100% community-owned lodge model. Your trekking fees directly fund local teacher salaries and community development."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Variations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Trek via Mohare Danda
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            The ultimate eco-tourism circuit. Combine traditional Magar village homestays, paper-making projects, and two high pasture ridges (Mohare and Khopra) into one adventure.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Combining Two Great Eco-Circuits</h2>
          <p>
            For hikers seeking complete wilderness seclusion, local cultural interactions, and high ecological standards, combining Mohare Danda (3,300m) and Khopra Ridge (3,660m) is highly recommended. This route starts at Galeshwor and ascends through homestay villages to Mohare Danda, then crosses over to join the Khopra loop via Ghorepani and Swanta.
          </p>
        </div>

        {/* Highlights list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Mohare Danda Highlights</h3>
          <div className="space-y-6">
            {mohareHighlights.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Experience Eco-Tourism at Its Best</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Support local mountain villages directly. Book our guided 12-day Mohare and Khopra combo package.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
