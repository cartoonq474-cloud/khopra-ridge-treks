"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [selectedNode, setSelectedNode] = useState(null);

  const routeNodes = [
    { id: "pokhara", name: "Pokhara Gateway", elev: "820m", type: "City", desc: "The main trailhead launching point. Relax by Lakeside before or after your trek." },
    { id: "ghandruk", name: "Ghandruk Village", elev: "1,940m", type: "Gurung Culture", desc: "Cultural capital of the Gurung people. Slate houses, local museum, and grand mountain views." },
    { id: "dobato", name: "Dobato Camp", elev: "3,432m", type: "High Meadow", desc: "Beautiful pasture camp offering clear sunrise viewpoints over Annapurna South and Machhapuchhre." },
    { id: "khopra", name: "Khopra Ridge", elev: "3,660m", type: "High Ridge Panorama", desc: "Spectacular ridge hosting the community-run lodge. Overlooks the Kali Gandaki Gorge and Dhaulagiri range." },
    { id: "khayer", name: "Khayer Lake", elev: "4,660m", type: "Sacred Glacial Lake", desc: "Sacred alpine lake sitting at the direct foot of the Annapurna South glacier." },
    { id: "swanta", name: "Swanta Village", elev: "2,214m", type: "Magar Farming Village", desc: "Quiet farming village known for its organic cheese factory and cozy community lodges." },
    { id: "ghorepani", name: "Ghorepani Hub", elev: "2,860m", type: "Forest Junction", desc: "Major hub on the classic Annapurna trail. Connects to the famous Poon Hill sunrise viewpoint." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Route Map</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Intelligence</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Trek Map & Route Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Explore our custom topographic map layout. Click on nodes to reveal elevations, trail segments, and accommodation details.
          </p>
        </div>

        {/* Interactive SVG Map Visual */}
        <div className="mt-12 bg-stone-900 border border-stone-800 p-6 rounded-3xl relative overflow-hidden shadow-inner">
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest bg-stone-950 px-2 py-1 rounded border border-stone-800">Interactive Route Layout
            </span>
          </div>

          {/* SVG Map Container */}
          <div className="w-full flex justify-center py-6">
            <svg 
              viewBox="0 0 600 400" 
              className="w-full max-w-2xl h-auto text-stone-300 font-sans select-none"
            >
              {/* Grid Background */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2c2a29" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Connecting Trails */}
              {/* Pokhara to Ghandruk */}
              <path d="M 100 350 L 220 280" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
              {/* Ghandruk to Dobato */}
              <path d="M 220 280 L 320 200" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
              {/* Dobato to Khopra */}
              <path d="M 320 200 L 380 120" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
              {/* Khopra to Khayer Lake */}
              <path d="M 380 120 L 480 50" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" />
              {/* Khopra to Swanta */}
              <path d="M 380 120 L 260 110" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
              {/* Swanta to Ghorepani */}
              <path d="M 260 110 L 160 180" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />
              {/* Ghorepani to Pokhara return */}
              <path d="M 160 180 L 100 350" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" />

              {/* Node Circles */}
              {/* Pokhara */}
              <circle 
                cx="100" cy="350" r="10" 
                fill="#ffffff" stroke="#10b981" strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("pokhara")}
              />
              <text x="80" y="380" fill="#a8a29e" className="text-[10px] font-bold">Pokhara (820m)</text>

              {/* Ghandruk */}
              <circle 
                cx="220" cy="280" r="10" 
                fill="#ffffff" stroke="#10b981" strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("ghandruk")}
              />
              <text x="210" y="305" fill="#a8a29e" className="text-[10px] font-bold">Ghandruk (1,940m)</text>

              {/* Dobato */}
              <circle 
                cx="320" cy="200" r="10" 
                fill="#ffffff" stroke="#10b981" strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("dobato")}
              />
              <text x="310" y="225" fill="#a8a29e" className="text-[10px] font-bold">Dobato (3,432m)</text>

              {/* Khopra Ridge */}
              <circle 
                cx="380" cy="120" r="12" 
                fill="#10b981" stroke="#ffffff" strokeWidth="2"
                className="cursor-pointer hover:scale-125 transition-transform duration-200 animate-pulse"
                onClick={() =>setSelectedNode("khopra")}
              />
              <text x="395" y="125" fill="#ffffff" className="text-[11px] font-black">Khopra Ridge (3,660m)</text>

              {/* Khayer Lake */}
              <circle 
                cx="480" cy="50" r="10" 
                fill="#ef4444" stroke="#ffffff" strokeWidth="2"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("khayer")}
              />
              <text x="430" y="35" fill="#f87171" className="text-[11px] font-bold">Khayer Lake (4,660m)</text>

              {/* Swanta */}
              <circle 
                cx="260" cy="110" r="10" 
                fill="#ffffff" stroke="#10b981" strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("swanta")}
              />
              <text x="245" y="90" fill="#a8a29e" className="text-[10px] font-bold">Swanta (2,214m)</text>

              {/* Ghorepani */}
              <circle 
                cx="160" cy="180" r="10" 
                fill="#ffffff" stroke="#10b981" strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() =>setSelectedNode("ghorepani")}
              />
              <text x="100" y="195" fill="#a8a29e" className="text-[10px] font-bold">Ghorepani (2,860m)</text>

            </svg>
          </div>

          {/* Interactive Info Card */}
          <div className="mt-4 bg-stone-950/80 border border-stone-850 p-6 rounded-2xl min-h-[120px] flex flex-col justify-center text-center">
            {selectedNode ? (
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                  {routeNodes.find(n =>n.id === selectedNode).type} — {routeNodes.find(n =>n.id === selectedNode).elev}
                </span>
                <h4 className="text-lg font-black text-white mt-1">{routeNodes.find(n =>n.id === selectedNode).name}</h4>
                <p className="text-stone-400 text-xs mt-2 max-w-xl mx-auto leading-relaxed">
                  {routeNodes.find(n =>n.id === selectedNode).desc}
                </p>
              </div>
            ) : (
              <p className="text-stone-500 text-xs font-semibold">Click on any map marker node (circle) above to view segment profiles, altitudes, and terrain summaries.
              </p>
            )}
          </div>
        </div>

        {/* Detailed Map Description */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Understanding the Khopra Loop System</h2>
          <p>The Khopra Ridge Trek is structured as a loop trail branching off from the primary Annapurna tourist route. Instead of passing straight through Ghorepani to Tatopani, the route cuts north toward the high pasturelands of Dobato and Bayeli.
          </p>
          <p>This loop design allows hikers to approach the high ridge systematically. Most groups start via Ghandruk, hike to the ridge, climb to the sacred lake, and return via Swanta and Ghorepani. This layout optimizes acclimatization, as you sleep at Ghandruk (1,940m) and Dobato (3,432m) before reaching the 3,660m ridge lodge.
          </p>
        </div>

        {/* Table of Trail Segments */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Trail Segment Reference Table</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4">Trek Segment</th>
                  <th className="px-6 py-4">Distance</th>
                  <th className="px-6 py-4">Elevation Change</th>
                  <th className="px-6 py-4">Avg Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-500">
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Kimche to Ghandruk</td>
                  <td className="px-6 py-4">4 km / 2.5 mi</td>
                  <td className="px-6 py-4 text-emerald-600">+300m</td>
                  <td className="px-6 py-4">1.5 - 2 Hours</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Ghandruk to Dobato</td>
                  <td className="px-6 py-4">14 km / 8.7 mi</td>
                  <td className="px-6 py-4 text-emerald-600">+1,492m</td>
                  <td className="px-6 py-4">6 - 7 Hours</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Dobato to Khopra Ridge</td>
                  <td className="px-6 py-4">11 km / 6.8 mi</td>
                  <td className="px-6 py-4 text-emerald-600">+228m (net)</td>
                  <td className="px-6 py-4">5 - 6 Hours</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Khopra to Khayer Lake (RT)</td>
                  <td className="px-6 py-4">16 km / 9.9 mi</td>
                  <td className="px-6 py-4 text-rose-600">+/- 1,000m</td>
                  <td className="px-6 py-4">8 - 10 Hours</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Khopra to Swanta</td>
                  <td className="px-6 py-4">9 km / 5.6 mi</td>
                  <td className="px-6 py-4 text-rose-600">-1,446m</td>
                  <td className="px-6 py-4">4 - 5 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Need a Guided Route Planner?</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Contact us to customize your loop itinerary. We specialize in mapping out custom schedules suited to your physical pace and hiking style.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Contact our planners
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
