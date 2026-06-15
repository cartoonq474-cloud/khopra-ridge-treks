"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeNode, setActiveNode] = useState("khopra");

  const nodes = {
    pokhara: {
      name: "Pokhara (Transit Hub)",
      elev: "820 m (2,690 ft)",
      desc: "The lakeside tourism gateway. Where we arrange your permits, hold gear checks, and catch private jeeps to the trailheads.",
      route: "Start/End Point"
    },
    ghandruk: {
      name: "Ghandruk Village",
      elev: "1,940 m (6,365 ft)",
      desc: "A massive Gurung village with stone-clad lanes, cultural museums, and spectacular early views of Annapurna South.",
      route: "Day 1 Stay"
    },
    dobato: {
      name: "Dobato Pasture",
      elev: "3,432 m (11,259 ft)",
      desc: "High-altitude pasture lodges situated beneath the Muldai Viewpoint. A quiet, pristine forested clearing.",
      route: "Day 2 Stay"
    },
    khopra: {
      name: "Khopra Ridge Lodge",
      elev: "3,660 m (12,007 ft)",
      desc: "The ultimate destination ridge lodge. Positioned right on the edge of the deep valley facing Dhaulagiri directly.",
      route: "Day 3 & 4 Stay"
    },
    khayer_lake: {
      name: "Sacred Khayer Lake",
      elev: "4,660 m (15,288 ft)",
      desc: "Sacred turquoise glacial lake sitting directly beneath the vertical face of Annapurna South. Reached via Day 4 hike.",
      route: "Day 4 Side Hike"
    },
    swanta: {
      name: "Swanta Village",
      elev: "2,214 m (7,263 ft)",
      desc: "A cozy Magar agricultural settlement surrounded by terraced fields, organic honey hives, and community lodges.",
      route: "Day 5 Stay"
    },
    ghorepani: {
      name: "Ghorepani Village",
      elev: "2,860 m (9,383 ft)",
      desc: "Major trail junction town offering classic views from Poon Hill. Where we reconnect with primary trails.",
      route: "Day 6 Stay"
    }
  };

  const selectedNode = nodes[activeNode];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Interactive Tools</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Interactive Route Explorer Map
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the complete 9-day loop. Click on any trail node on the diagram below to inspect elevations, daily pacing details, and landmark overviews.
          </p>
        </div>

        {/* Interactive map display */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          
          {/* SVG Map / Diagram */}
          <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col justify-center items-center">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Interactive Route Loop</h3>
            
            {/* SVG Path Diagram */}
            <svg viewBox="0 0 400 400" className="w-full max-w-[320px] h-auto">
              {/* Loop Path */}
              <path
                d="M 200,350 L 300,280 L 280,180 L 200,100 L 120,180 L 100,280 Z"
                fill="none"
                stroke="#d6d3d1"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <path
                d="M 200,100 L 200,50"
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

              {/* Dobato Node */}
              <circle
                cx="280" cy="180" r="10"
                fill={activeNode === "dobato" ? "#10b981" : "#78716c"}
                className="cursor-pointer hover:scale-125 transition-transform"
                onClick={() => setActiveNode("dobato")}
              />
              <text x="300" y="185" textAnchor="start" className="text-[10px] font-bold fill-stone-700">Dobato</text>

              {/* Khopra Ridge Node */}
              <circle
                cx="200" cy="100" r="12"
                fill={activeNode === "khopra" ? "#10b981" : "#78716c"}
                className="cursor-pointer hover:scale-125 transition-transform"
                onClick={() => setActiveNode("khopra")}
              />
              <text x="200" y="125" textAnchor="middle" className="text-[10px] font-black fill-stone-800">Khopra (3,660m)</text>

              {/* Khayer Lake Side Node */}
              <circle
                cx="200" cy="50" r="10"
                fill={activeNode === "khayer_lake" ? "#10b981" : "#78716c"}
                className="cursor-pointer hover:scale-125 transition-transform"
                onClick={() => setActiveNode("khayer_lake")}
              />
              <text x="200" y="35" textAnchor="middle" className="text-[10px] font-bold fill-stone-700">Khayer Lake (4,660m)</text>

              {/* Swanta Node */}
              <circle
                cx="120" cy="180" r="10"
                fill={activeNode === "swanta" ? "#10b981" : "#78716c"}
                className="cursor-pointer hover:scale-125 transition-transform"
                onClick={() => setActiveNode("swanta")}
              />
              <text x="100" y="185" textAnchor="end" className="text-[10px] font-bold fill-stone-700">Swanta</text>

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
              *Diagram is a schematic representation of the loop circuit. Click circles to inspect segment details.
            </span>
          </div>

          {/* Node Details Inspector */}
          <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">Node Inspector</span>
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
              Cooperative lodges are established at Ghandruk, Dobato, Khopra Ridge, Swanta, and Ghorepani.
            </div>
          </div>

        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We update elevations and route timings in cooperation with ACAP trail engineers. All indicators reflect active loop conditions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book the Full Loop Circuit</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want our experienced local guides to navigate the entire loop for you? Secure your permit-inclusive booking packages with our local team.
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
