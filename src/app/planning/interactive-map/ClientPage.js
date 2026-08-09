"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [activeNode, setActiveNode] = useState("khopra");

  const nodes = {
    pokhara: {
      name: "Pokhara (Transit Hub)",
      elev: "820 m (2,690 ft)",
      desc: "The lakeside tourism gateway. Where we arrange ACAP & TIMS permits, hold gear checks, and catch private jeeps to the trailheads.",
      route: "Start/End Point",
      type: "Transit Hub",
    },
    ghandruk: {
      name: "Ghandruk Village",
      elev: "1,940 m (6,365 ft)",
      desc: "A massive Gurung village with stone-clad lanes, cultural museums, and spectacular early views of Annapurna South.",
      route: "Day 1 Stay",
      type: "Overnight Village",
    },
    tadapani: {
      name: "Tadapani Node",
      elev: "2,630 m (8,628 ft)",
      desc: "Dense rhododendron forest hub where the trail splits between the classic Poon Hill circuit and the Khopra Ridge path.",
      route: "Day 2 Stop",
      type: "Checkpoint Node",
    },
    dobato: {
      name: "Dobato Pasture",
      elev: "3,432 m (11,259 ft)",
      desc: "High-altitude pasture lodges situated beneath Muldai Viewpoint. A quiet, pristine forested clearing.",
      route: "Day 3 Stay",
      type: "Overnight Village",
    },
    khopra: {
      name: "Khopra Ridge Lodge",
      elev: "3,660 m (12,007 ft)",
      desc: "The ultimate destination ridge lodge. Positioned right on the grassy edge of the deep valley facing Dhaulagiri directly.",
      route: "Day 4 & 5 Stay",
      type: "Overnight Village",
    },
    khayer_lake: {
      name: "Sacred Khayer Lake",
      elev: "4,660 m (15,288 ft)",
      desc: "Sacred turquoise glacial lake sitting directly beneath the vertical face of Annapurna South. Reached via Day 5 hike.",
      route: "Day 5 Side Hike",
      type: "Sacred Landmark",
    },
    swanta: {
      name: "Swanta Village",
      elev: "2,214 m (7,263 ft)",
      desc: "A cozy Magar agricultural settlement surrounded by terraced fields, organic honey hives, and community lodges.",
      route: "Day 6 Stay",
      type: "Overnight Village",
    },
    ghorepani: {
      name: "Ghorepani Village",
      elev: "2,860 m (9,383 ft)",
      desc: "Major trail junction town offering classic views from Poon Hill. Where we reconnect with primary trails.",
      route: "Day 7 Stay",
      type: "Overnight Village",
    },
  };

  const selectedNode = nodes[activeNode];

  const summarySpecs = [
    { label: "Circuit Distance", value: "65–75 km (Loop)" },
    { label: "Standard Duration", value: "7 to 9 Days" },
    { label: "Highest Elevation", value: "Khayer Lake (4,660m)" },
    { label: "Trail Type", value: "Non-Technical Mountain Loop" },
  ];

  const itineraryStages = [
    { stage: "Pokhara/Kimche to Ghandruk", dist: "10–12 km", time: "5–6 hrs", ascent: "+1,120m" },
    { stage: "Ghandruk to Tadapani", dist: "8–10 km", time: "5–6 hrs", ascent: "+690m" },
    { stage: "Tadapani to Dobato", dist: "10–12 km", time: "6–7 hrs", ascent: "+800m" },
    { stage: "Dobato to Khopra Ridge", dist: "5–6 km", time: "3–4 hrs", ascent: "+228m" },
    { stage: "Khopra Ridge to Khayer Lake (Round Trip)", dist: "12–14 km", time: "6–7 hrs", ascent: "+1,000m" },
    { stage: "Khopra Ridge to Swanta Village", dist: "10–12 km", time: "5–6 hrs", ascent: "-1,446m" },
    { stage: "Swanta to Ghorepani", dist: "8–10 km", time: "4–5 hrs", ascent: "+620m" },
    { stage: "Ghorepani to Poon Hill & Nayapul", dist: "12–14 km", time: "5–6 hrs", ascent: "-1,790m" },
  ];

  const elevationChart = [
    { stop: "Ghandruk", elev: "1,940 m", type: "Village Lodge", highlight: "Gurung culture & museum" },
    { stop: "Tadapani", elev: "2,630 m", type: "Forest Junction", highlight: "Fishtail peak views" },
    { stop: "Dobato", elev: "3,420 m", type: "Pasture Lodge", highlight: "Muldai 360° sunrise deck" },
    { stop: "Khopra Ridge", elev: "3,660 m", type: "High Ridge Lodge", highlight: "Dhaulagiri & Annapurna South edge" },
    { stop: "Khayer Lake", elev: "4,660 m", type: "Glacial Shrine", highlight: "Highest point & sacred basin" },
    { stop: "Swanta Village", elev: "2,240 m", type: "Magar Farming", highlight: "Terraced barley & honey hives" },
    { stop: "Ghorepani", elev: "2,860 m", type: "Trail Hub", highlight: "Poon Hill sunrise access" },
  ];

  const faqs = [
    {
      q: "Can I complete the Khopra Ridge Trek without a guide?",
      a: "While independent trekking is possible, hiring a licensed local guide is strongly recommended (and required under TIMS regulations for solo trekkers). Key junctions like Tadapani and Dobato require reliable navigation.",
    },
    {
      q: "Is the Khopra Ridge Trek route clearly marked?",
      a: "The trail is well-defined between major villages, but high-altitude sections above Dobato and around Khayer Lake can become obscured by fog or snow. Having an offline GPS map is essential.",
    },
    {
      q: "Which offline map app works best for the Khopra Ridge Trek?",
      a: "Maps.me and Organic Maps both offer accurate offline mapping for the Annapurna region. Pre-download the Western Nepal regional map before departing Pokhara.",
    },
    {
      q: "Can I use GPS on the Khopra Ridge trail?",
      a: "Yes, phone GPS functions reliably without cellular service as long as you have downloaded offline maps or GPX tracks in advance.",
    },
    {
      q: "How long is the Khopra Ridge Trek?",
      a: "The standard full loop covers 65 to 75 kilometers over 7 to 9 days, depending on entry/exit points and whether you include the Khayer Lake day hike.",
    },
    {
      q: "What is the highest point on the route?",
      a: "Khayer Lake, at approximately 4,660 meters (15,288 ft), is the highest elevation point reached on the trek.",
    },
    {
      q: "Where does the Khopra Ridge Trek start and finish?",
      a: "Most trekkers start from Pokhara via Kimche or Nayapul, loop through Ghandruk, Tadapani, Dobato, Khopra Ridge, Swanta, and Ghorepani, before descending back to Nayapul and driving to Pokhara.",
    },
    {
      q: "How far is Khayer Lake from Khopra Ridge?",
      a: "The round trip between Khopra Ridge Lodge and Khayer Lake is 12 to 14 kilometers, taking roughly 6 to 7 hours of strenuous high-altitude walking.",
    },
    {
      q: "Is the Khopra Ridge Trek suitable for beginners?",
      a: "It is rated moderate (novice-friendly). Beginners with good baseline physical fitness can complete the trek, provided they maintain a steady pace and build in acclimatization.",
    },
    {
      q: "Can I customize the standard itinerary?",
      a: "Yes. The loop can be shortened to 6 days or extended to 10–12 days by incorporating Mohare Danda or additional rest days in Swanta or Ghandruk.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-400 transition">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Interactive Map</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Interactive Navigation Hub
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Interactive Route Explorer Map
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Explore the complete Khopra Ridge Trek loop — stage itinerary, elevation profile, daily distances, village checkpoints, and offline GPS navigation tips.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summarySpecs.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🗺️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">ACAP &amp; TIMS Verified GPS Route Data</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). All elevation data and node distances are synchronized with official Annapurna Conservation Area trail markers.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                The Khopra Ridge Trek is one of the few routes in the Annapurna region where you can walk for days without crowds, sleep in community-run lodges, and still stand face-to-face with Dhaulagiri, Annapurna South, and Nilgiri.
              </p>
              <p>
                Below, you will find an interactive route explorer that lets you click through every stage of the Khopra Ridge loop — from Pokhara to Khayer Lake and back — along with elevation changes, distances, village checkpoints, and offline GPS guidance.
              </p>
            </div>

            {/* Section 1: Interactive Map Diagram & Node Inspector */}
            <div id="interactive-explorer" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Interactive Circuit Loop &amp; Node Inspector
              </h2>
              <p className="text-sm text-stone-600">
                Click on any node in the schematic diagram below to view detailed altitude, pacing schedule, and landmark highlights for that stop.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {/* SVG Schematic Map */}
                <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col justify-center items-center">
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Circuit Schematic Diagram</h3>
                  
                  <svg viewBox="0 0 400 400" className="w-full max-w-[320px] h-auto">
                    {/* Main Loop Path */}
                    <path
                      d="M 200,350 L 300,280 L 290,220 L 280,160 L 200,100 L 120,160 L 100,280 Z"
                      fill="none"
                      stroke="#d6d3d1"
                      strokeWidth="4"
                      strokeDasharray="6 6"
                    />
                    {/* Khayer Lake Extension Path */}
                    <path
                      d="M 200,100 L 200,45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeDasharray="4 4"
                    />

                    {/* Pokhara Node */}
                    <circle
                      cx="200" cy="350" r="12"
                      fill={activeNode === "pokhara" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("pokhara")}
                    />
                    <text x="200" y="380" textAnchor="middle" className="text-[10px] font-black fill-stone-800">Pokhara</text>

                    {/* Ghandruk Node */}
                    <circle
                      cx="300" cy="280" r="10"
                      fill={activeNode === "ghandruk" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("ghandruk")}
                    />
                    <text x="320" y="285" textAnchor="start" className="text-[10px] font-bold fill-stone-700">Ghandruk</text>

                    {/* Tadapani Node */}
                    <circle
                      cx="290" cy="220" r="9"
                      fill={activeNode === "tadapani" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("tadapani")}
                    />
                    <text x="310" y="225" textAnchor="start" className="text-[10px] font-bold fill-stone-700">Tadapani</text>

                    {/* Dobato Node */}
                    <circle
                      cx="280" cy="160" r="10"
                      fill={activeNode === "dobato" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("dobato")}
                    />
                    <text x="300" y="165" textAnchor="start" className="text-[10px] font-bold fill-stone-700">Dobato</text>

                    {/* Khopra Ridge Node */}
                    <circle
                      cx="200" cy="100" r="12"
                      fill={activeNode === "khopra" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("khopra")}
                    />
                    <text x="200" y="125" textAnchor="middle" className="text-[10px] font-black fill-stone-800">Khopra (3,660m)</text>

                    {/* Khayer Lake Node */}
                    <circle
                      cx="200" cy="45" r="10"
                      fill={activeNode === "khayer_lake" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("khayer_lake")}
                    />
                    <text x="200" y="30" textAnchor="middle" className="text-[10px] font-bold fill-stone-700">Khayer Lake (4,660m)</text>

                    {/* Swanta Node */}
                    <circle
                      cx="120" cy="160" r="10"
                      fill={activeNode === "swanta" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("swanta")}
                    />
                    <text x="100" y="165" textAnchor="end" className="text-[10px] font-bold fill-stone-700">Swanta</text>

                    {/* Ghorepani Node */}
                    <circle
                      cx="100" cy="280" r="10"
                      fill={activeNode === "ghorepani" ? "#10b981" : "#78716c"}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode("ghorepani")}
                    />
                    <text x="80" y="285" textAnchor="end" className="text-[10px] font-bold fill-stone-700">Ghorepani</text>
                  </svg>
                  
                  <span className="text-[10px] text-stone-400 mt-6 leading-relaxed block text-center max-w-xs">
                    *Schematic representation. Click circles to inspect segment details. Green dashed line indicates Khayer Lake extension.
                  </span>
                </div>

                {/* Node Details Inspector */}
                <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Node Inspector</span>
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">{selectedNode.type}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Station Name</span>
                      <span className="text-2xl font-black text-stone-950 mt-1 block">{selectedNode.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Altitude</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedNode.elev}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Pacing Schedule</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedNode.route}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Landmark Overview</span>
                      <p className="text-xs text-stone-600 leading-relaxed mt-2">{selectedNode.desc}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200/60 text-[10px] text-stone-400">
                    Community-managed lodges operate at Ghandruk, Dobato, Khopra Ridge, Swanta, and Ghorepani.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Stage-by-Stage Distance & Timing Table */}
            <div id="stage-distances" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Stage-by-Stage Distance &amp; Walking Hours
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Stage</th>
                      <th className="py-4 px-4 sm:px-6">Distance</th>
                      <th className="py-4 px-4 sm:px-6">Walking Time</th>
                      <th className="py-4 px-4 sm:px-6">Elevation Delta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {itineraryStages.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.stage}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.dist}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-stone-900">{row.time}</td>
                        <td className={`py-4 px-4 sm:px-6 font-bold ${row.ascent.startsWith('+') ? 'text-emerald-700' : 'text-stone-500'}`}>
                          {row.ascent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Elevation Profile Table */}
            <div id="elevation-profile" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Elevation Profile &amp; Major Stop Breakdown
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Stop</th>
                      <th className="py-4 px-4 sm:px-6">Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Facility Type</th>
                      <th className="py-4 px-4 sm:px-6">Key Highlight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {elevationChart.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.stop}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.type}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.highlight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Offline Navigation & GPS Guidance */}
            <div id="gps-navigation" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Offline GPS Navigation &amp; Safety Guidance
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📱 Recommended Offline Apps</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Download <strong>Maps.me</strong> or <strong>Organic Maps</strong> in Pokhara. Pre-download the Western Nepal offline map tiles before losing mobile connectivity past Tadapani.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🔋 Battery &amp; Power Bank Prep</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Cold temperatures at Khopra Ridge (3,660m) drain smartphone batteries rapidly. Keep devices in inner jacket pockets and carry a 10,000mAh+ power bank.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📶 Cellular Connectivity</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    NTC &amp; Ncell networks provide decent coverage in Ghandruk and Ghorepani, but signal drops out completely near Dobato, Khopra Ridge, and Khayer Lake.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🚨 Critical Junctions</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The Tadapani junction splits toward Poon Hill or Khopra. Pay close attention to ACAP trail signs after leaving Tadapani forest towards Dobato.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Guided Navigation &amp; Logistics
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Circuit with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Let local Pokhara operators <strong>EMD Treks</strong> (NTB License #8928-091) handle your ACAP permits, TIMS cards, community lodge reservations, and experienced mountain guide logistics.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Start Planning Your Trek
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Detailed Itinerary
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#interactive-explorer" className="block hover:text-emerald-600 transition">
                  • Circuit Map &amp; Node Inspector
                </a>
                <a href="#stage-distances" className="block hover:text-emerald-600 transition">
                  • Stage Distances &amp; Timing
                </a>
                <a href="#elevation-profile" className="block hover:text-emerald-600 transition">
                  • Elevation Profile Breakdown
                </a>
                <a href="#gps-navigation" className="block hover:text-emerald-600 transition">
                  • Offline GPS &amp; Safety Tips
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Navigation Tools</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/gpx-download" className="hover:text-emerald-700 underline">
                      Download GPX Tracks
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-trek-map" className="hover:text-emerald-700 underline">
                      Full Printable Route Map
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-trek-distance-guide" className="hover:text-emerald-700 underline">
                      Distance &amp; Time Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khopra-ridge-elevation" className="hover:text-emerald-700 underline">
                      Elevation Chart &amp; Risks
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
