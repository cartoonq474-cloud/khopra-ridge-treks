"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedNode, setSelectedNode] = useState(null);

  const routeNodes = [
    {
      id: "pokhara",
      name: "Pokhara Gateway",
      elev: "820m",
      type: "City Hub",
      desc: "The main trailhead launching point. Secure permits and gather supplies here."
    },
    {
      id: "ghandruk",
      name: "Ghandruk Village",
      elev: "1,940m",
      type: "Gurung Culture",
      desc: "Slate-roof Gurung capital. Easy stone steps, rich heritage, and views of Annapurna South."
    },
    {
      id: "dobato",
      name: "Dobato Pass",
      elev: "3,432m",
      type: "High Meadow Viewpoint",
      desc: "A key vertical junction. Sunrise walks here look out over both Dhaulagiri and Machhapuchhre."
    },
    {
      id: "khopra",
      name: "Khopra Ridge / Danda",
      elev: "3,660m",
      type: "Community Ridge Lodge",
      desc: "Spectacular grassy plateau. Hosts a community-run lodge directly opposite the Dhaulagiri wall."
    },
    {
      id: "khayer",
      name: "Sacred Khayer Lake",
      elev: "4,660m",
      type: "Glacial Lake / Shrine",
      desc: "High alpine lake beneath the Annapurna South face. Pilgrimage site with holy temple shrines."
    },
    {
      id: "swanta",
      name: "Swanta Village",
      elev: "2,214m",
      type: "Magar Settlement",
      desc: "Tranquil agricultural village in the valley. Home of community lodges and local farming."
    },
    {
      id: "ghorepani",
      name: "Ghorepani Village",
      elev: "2,860m",
      type: "Trekking Hub Junction",
      desc: "Rejoins the classic corridor. Gateway to the famous Poon Hill sunrise viewpoint."
    }
  ];

  const distances = [
    { segment: "Kimche to Ghandruk", dist: "4 km / 2.5 mi", elev: "+300m", time: "1.5 - 2 hours" },
    { segment: "Ghandruk to Dobato", dist: "14 km / 8.7 mi", elev: "+1,492m", time: "6 - 7 hours" },
    { segment: "Dobato to Khopra Ridge", dist: "11 km / 6.8 mi", elev: "+228m (net)", time: "5 - 6 hours" },
    { segment: "Khopra to Khayer Lake (RT)", dist: "16 km / 9.9 mi", elev: "+/- 1,000m", time: "8 - 10 hours" },
    { segment: "Khopra to Swanta", dist: "9 km / 5.6 mi", elev: "-1,446m", time: "4 - 5 hours" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Trail Geography Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trek Map &amp; Route Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand the complete loop configuration. Explore trailheads, daily elevation shifts, key junctions, and the high-altitude route extensions.
          </p>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#interactive-map" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Interactive SVG Map
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day-by-Day Stages
              </a>
              <a href="#distances" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance Chart
              </a>
              <a href="#elevation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Profile
              </a>
              <a href="#variations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Alternatives
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake Trail
              </a>
              <a href="#navigation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                GPS &amp; Navigation
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Trail conditions
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty Rating
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra vs Other Treks
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Plan Route
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Overview &amp; Loop Trail Structure
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The Khopra Ridge Trek sits in a part of the Annapurna region that most trekking itineraries skip entirely. Instead of following the well-worn path through Ghorepani toward Tatopani, this route branches north into a string of high pasturelands and ridgeline lodges that few travelers ever see in person.
              </p>
              <p>
                That is exactly why route planning matters more here than on standard trails. There is no single, obvious path. Trekkers choose between starting from Ghandruk or Ghorepani, decide whether to add the Khayer Lake side trip, and pick between a compact six-day version or a longer loop that takes in Swanta Village on the way back.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">Where the Trek Starts and Ends</h3>
              <p>
                Most itineraries begin at Kimche, a small roadhead reached by a drive from Pokhara, followed by a short climb to Ghandruk. Ghandruk itself sits at 1,940m and is one of the largest Gurung villages in the region. The trek typically ends one of two ways: looping back down through Swanta Village to Ghorepani, or exiting via the Ghandruk corridor.
              </p>
              <p>
                A standard loop itinerary runs 7 to 9 days from Pokhara, covering roughly 54 to 60 kilometers depending on the route variation and side trips you include.
              </p>
            </div>
          </article>

          {/* SECTION 2: INTERACTIVE SVG MAP */}
          <article id="interactive-map" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Interactive Route Map &amp; Node Info
            </h2>
            
            {/* SVG Visual */}
            <div className="bg-stone-900 border border-stone-850 p-6 rounded-3xl relative overflow-hidden shadow-inner">
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest bg-stone-950 px-2 py-1 rounded border border-stone-800">
                  Interactive Topo Layout
                </span>
              </div>

              {/* Map rendering */}
              <div className="w-full flex justify-center py-6">
                <svg 
                  viewBox="0 0 600 400" 
                  className="w-full max-w-2xl h-auto text-stone-300 font-sans select-none"
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2c2a29" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Trails */}
                  <path d="M 100 350 L 220 280" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 220 280 L 320 200" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 320 200 L 380 120" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 380 120 L 480 50" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 380 120 L 260 110" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 260 110 L 160 180" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
                  <path d="M 160 180 L 100 350" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />

                  {/* Nodes */}
                  <circle cx="100" cy="350" r="10" fill="#ffffff" stroke="#10b981" strokeWidth="3" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("pokhara")} />
                  <text x="80" y="380" fill="#a8a29e" className="text-[10px] font-bold">Pokhara (820m)</text>

                  <circle cx="220" cy="280" r="10" fill="#ffffff" stroke="#10b981" strokeWidth="3" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("ghandruk")} />
                  <text x="210" y="305" fill="#a8a29e" className="text-[10px] font-bold">Ghandruk (1,940m)</text>

                  <circle cx="320" cy="200" r="10" fill="#ffffff" stroke="#10b981" strokeWidth="3" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("dobato")} />
                  <text x="310" y="225" fill="#a8a29e" className="text-[10px] font-bold">Dobato (3,432m)</text>

                  <circle cx="380" cy="120" r="12" fill="#10b981" stroke="#ffffff" strokeWidth="2" className="cursor-pointer hover:scale-125 transition-transform duration-200 animate-pulse" onClick={() => setSelectedNode("khopra")} />
                  <text x="395" y="125" fill="#ffffff" className="text-[11px] font-black">Khopra Ridge (3,660m)</text>

                  <circle cx="480" cy="50" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("khayer")} />
                  <text x="430" y="35" fill="#f87171" className="text-[11px] font-bold">Khayer Lake (4,660m)</text>

                  <circle cx="260" cy="110" r="10" fill="#ffffff" stroke="#10b981" strokeWidth="3" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("swanta")} />
                  <text x="245" y="90" fill="#a8a29e" className="text-[10px] font-bold">Swanta (2,214m)</text>

                  <circle cx="160" cy="180" r="10" fill="#ffffff" stroke="#10b981" strokeWidth="3" className="cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => setSelectedNode("ghorepani")} />
                  <text x="100" y="195" fill="#a8a29e" className="text-[10px] font-bold">Ghorepani (2,860m)</text>
                </svg>
              </div>

              {/* Info popup */}
              <div className="mt-4 bg-stone-950/80 border border-stone-850 p-6 rounded-2xl min-h-[120px] flex flex-col justify-center text-center text-stone-300">
                {selectedNode ? (
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {routeNodes.find((n) => n.id === selectedNode).type} — {routeNodes.find((n) => n.id === selectedNode).elev}
                    </span>
                    <h4 className="text-lg font-black text-white mt-1">{routeNodes.find((n) => n.id === selectedNode).name}</h4>
                    <p className="text-stone-400 text-xs mt-2 max-w-xl mx-auto leading-relaxed">
                      {routeNodes.find((n) => n.id === selectedNode).desc}
                    </p>
                  </div>
                ) : (
                  <p className="text-stone-500 text-xs font-semibold">
                    Click on any marker node (circle) above to reveal segment elevations, trail profiles, and terrain summaries.
                  </p>
                )}
              </div>
            </div>
          </article>

          {/* SECTION 3: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Day-by-Day Itinerary Stages
            </h2>
            <div className="space-y-4 text-sm text-stone-600">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 1 – Kimche to Ghandruk</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Scenic drive to Kimche followed by a 1.5 to 2-hour walk gaining 300m to reach Ghandruk (1,940m). Gentle introduction on stone trails.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 2 – Ghandruk to Tadapani</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Trek climbs through thick oak and rhododendron forests. Reach Tadapani for early evening panoramas of Annapurna South.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 3 – Tadapani to Dobato</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Long forest climb. The trail rises out of the trees onto the open ridgeline of Dobato (3,432m). Requires 6 to 7 hours of sustained hiking.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 4 – Dobato to Bayeli Kharka</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Walk along high ridge pastures and meadows. The trail is open, wind-exposed, and delivers sweeping panoramic valley views.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 5 – Bayeli Kharka to Khopra Ridge</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  The final approach. Climb steadily on grassy ridge pastures to reach the community lodge at Khopra Ridge (3,660m).
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 6 – Khayer Lake Excursion</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Sacred pilgrimage push. Climb 1,000m vertically over 16km round trip to reach the glacial lake (4,660m) under Annapurna South.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 7 – Khopra Ridge to Swanta Village</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Sustained downhill descent. Drop over 1,450m vertically into thick bamboo forest and terraced lands near Swanta (2,214m).
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-stone-900">Day 8 – Swanta to Ghorepani and Exit</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  Reconnect to the classic trekking grid. Climb up to Ghorepani and Poon Hill, then descend to Nayapul for Pokhara transfer.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: DISTANCES */}
          <article id="distances" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Distance Chart
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-stone-50 text-stone-700 font-bold uppercase border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Trek Segment</th>
                    <th className="px-6 py-4">Distance</th>
                    <th className="px-6 py-4 text-emerald-600">Elevation Change</th>
                    <th className="px-6 py-4 text-right">Avg Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                  {distances.map((d, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-6 py-4 font-bold text-stone-900">{d.segment}</td>
                      <td className="px-6 py-4">{d.dist}</td>
                      <td className="px-6 py-4 text-emerald-600">{d.elev}</td>
                      <td className="px-6 py-4 text-right">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              * Note: Beginners or those carrying heavy backpacks should add 30 to 60 minutes per stage, particularly on the Ghandruk-to-Dobato and Khayer Lake days.
            </p>
          </article>

          {/* SECTION 5: ELEVATION */}
          <article id="elevation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Elevation Map and Altitude Profile
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Elevation, not distance, is what makes or breaks a Khopra Ridge Trek itinerary. The biggest single gain happens between Ghandruk and Dobato — nearly 1,500 meters across one stage — which is why Dobato is treated as a mandatory overnight.
              </p>
              <p>
                <strong>Highest points:</strong> Khopra Ridge sits at 3,660m, while Khayer Lake reaches 4,660m. The itinerary uses a &quot;climb high, sleep low&quot; logic with Dobato serving as the key acclimatization night before the ridge.
              </p>
            </div>
          </article>

          {/* SECTION 6: VARIATIONS */}
          <article id="variations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Options &amp; Alternatives
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Standard Ghandruk Route</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Starts at Ghandruk and loops through Dobato to the ridge. Offers the most gradual acclimatization curve and the widest variety of scenery.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Ghorepani Variant</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Begins from Ghorepani, joining the loop closer to Dobato. Shaves a day off the itinerary, making it easier to combine with a Poon Hill sunrise.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Shorter Route (5 - 6 Days)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Skips the Khayer Lake side trip and starts at Ghorepani. Keeps the ridge walking and views, but drops the high lake demands.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Extended Loop (9+ Days)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Combines the full Ghandruk-to-Swanta loop with additional rest days, side trips to Muldai Viewpoint, or other trail systems.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Route Extension
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The round trip to Khayer Lake and back covers approximately 16 km (9.9 mi), completed in a single long day of 8 to 10 hours. Gaining 1,000m of elevation at high altitude with no lodges along the way makes it the hardest day on the trek.
              </p>
              <p>
                Trekkers include it because of the holy shrine temple at the water&apos;s edge, and because it sits in a dramatic glacial bowl offering close-up perspectives of Dhaulagiri and Annapurna South.
              </p>
            </div>
          </article>

          {/* SECTION 8: NAVIGATION */}
          <article id="navigation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trail Navigation &amp; GPS Planning
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The path is generally clear through the busier sections. However, trails become quieter and less obvious past Bayeli Kharka and on the Khayer Lake side trip. Fog or snow can easily obscure trail markings.
              </p>
              <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-850 text-xs">
                <strong>Navigation Advice:</strong> Download offline GPS maps (Maps.me or Gaia GPS work well) in Pokhara, as mobile signal disappears past Ghandruk. Confirm key trail junctions before committing.
              </div>
            </div>
          </article>

          {/* SECTION 9: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Trail Conditions
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Autumn &amp; Spring</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Stable trail conditions. Dry paths, clear skies, and rhododendrons blooming (in spring). Peak season.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Winter (Dec-Feb)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Brings cold and heavy snow to high meadows, particularly near Dobato and the Khayer Lake approach.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Monsoon (Jun-Sep)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Wet, slippery, muddy trails. Leeches in the forests and low mountain visibility. Least recommended.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Physical Difficulty by Trek Segment
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Ghandruk-to-Dobato stage and the Khayer Lake round trip are the two toughest days. The descent from Khopra to Swanta is also challenging — dropping nearly 1,450m of knee-jarring downhill in a single day.
              </p>
              <p>
                Trekkers with no prior high-altitude hiking experience can complete this route, but it isn&apos;t a true beginner trek. A local guide adds safety margins on the quieter stretches.
              </p>
            </div>
          </article>

          {/* SECTION 11: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the Khopra Route Is Different from Other Annapurna Treks
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">vs. Poon Hill</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Poon Hill is shorter, lower, and heavily crowded. Khopra involves more days, higher elevation, and peaceful trail solitude.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">vs. Annapurna Base Camp</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  ABC places you inside a giant glacial amphitheater. Khopra Ridge offers wide-open panoramic sweeps of both ranges simultaneously.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Community Lodges</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Every lodge on the loop is community-owned. Profits support local Magar village schools, clinics, and infrastructure.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Route Map
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How long is the Khopra Ridge Trek?",
                  a: "Most itineraries run 7 to 9 days from Pokhara and back, covering roughly 54 to 60 km depending on the route variation and whether the Khayer Lake extension is included. Shorter 6-day versions are possible by starting from Ghorepani and skipping the lake."
                },
                {
                  q: "Where does the Khopra Trek start?",
                  a: "The trek typically starts at Kimche, reached by a short drive from Pokhara, followed by a walk up to Ghandruk. Some itineraries instead start from Ghorepani for a faster route to the ridge."
                },
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Yes, with reasonable hiking fitness, though it isn't a true beginner-level trek. The route doesn't require technical climbing skills, but the altitude and multi-day demands mean some prior multi-day hiking experience is a real advantage."
                },
                {
                  q: "What is the highest point on the Khopra Trek?",
                  a: "Khopra Ridge itself sits at around 3,660m. Trekkers who add the Khayer Lake extension reach a higher point still, generally cited around 4,660m."
                },
                {
                  q: "Is GPS needed for Khopra Trek navigation?",
                  a: "It isn't strictly required on the busier sections, but it's strongly recommended for the quieter stretches past Bayeli Kharka and on the Khayer Lake side trip, where the trail can be harder to follow. Offline apps like Maps.me or Gaia GPS work well without mobile signal."
                },
                {
                  q: "How difficult is the Khayer Lake hike?",
                  a: "It's the hardest single day of the trek — a long round trip of around 16 km with roughly 1,000m of elevation change at high altitude. It should only be attempted after proper acclimatization at Khopra Ridge."
                },
                {
                  q: "Which route is better: Ghandruk or Ghorepani?",
                  a: "The Ghandruk route offers a more gradual acclimatization profile and more varied scenery, making it the better choice for most first-time trekkers. The Ghorepani route is faster and suits trekkers combining the trip with a Poon Hill visit or working with a tighter schedule."
                },
                {
                  q: "Can I do the Khopra Trek without a guide?",
                  a: "Independent trekking is possible, particularly with good route research and offline GPS, since most of the trail is well-marked. A local guide still adds value through up-to-date trail and lodge information that isn't available on static maps."
                },
                {
                  q: "Is the Khopra Trek harder than the Poon Hill Trek?",
                  a: "Yes. Poon Hill is a shorter trek built around a single viewpoint, while Khopra Ridge involves more trekking days, greater elevation gain, and a tougher overall route, including the optional high-altitude Khayer Lake extension."
                },
                {
                  q: "What is the best route for first-time trekkers?",
                  a: "The standard Ghandruk-to-Dobato-to-Khopra Ridge loop, without the Khayer Lake extension, offers the most balanced introduction to the route — enough altitude and scenery to feel like a real Himalayan trek, without the toughest single day on the itinerary."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
                >
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base list-none">
                    <span>{faq.q}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* SECTION 13: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek rewards trekkers who plan their route properly. Unlike the busier Annapurna trails, there is no single obvious path here — your choice of starting point, whether to add Khayer Lake, and how many days you build in for acclimatization will shape the entire experience, for better or worse.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Use this guide as your planning foundation: study the route map, map out your days against the distance and elevation charts, and decide honestly whether the Khayer Lake extension fits your timeline and fitness level.
            </p>
          </article>

          {/* SECTION 14: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Need help planning your Khopra Ridge Trek route?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local trekking experts in Pokhara can help you build a personalized itinerary based on your available time, fitness level, and trekking experience — including the route variation and Khayer Lake decision that fits you best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact our planners &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is managed and reviewed by licensed local trekking guides operating out of Pokhara. We regularly update routes, weather warnings, and community lodge statuses based on active trail checks.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
