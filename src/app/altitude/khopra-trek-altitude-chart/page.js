"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const chartPoints = [
    { day: "Day 1", name: "Nayapul", elev: 1070 },
    { day: "Day 2", name: "Ghandruk", elev: 1940 },
    { day: "Day 3", name: "Tadapani", elev: 2630 },
    { day: "Day 4", name: "Bayeli", elev: 3432 },
    { day: "Day 5", name: "Chhistibung", elev: 2975 },
    { day: "Day 6", name: "Khopra Ridge", elev: 3660 },
    { day: "Day 7", name: "Khayer Lake", elev: 4660 },
    { day: "Day 8", name: "Swanta", elev: 2214 },
    { day: "Day 9", name: "Ghorepani", elev: 2860 }
  ];

  // SVG parameters
  const width = 800;
  const height = 300;
  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 40;
  const paddingBottom = 50;

  const minElev = 800;
  const maxElev = 5000;

  // Coordinate scaling helpers
  const getX = (index) => {
    return paddingLeft + (index / (chartPoints.length - 1)) * (width - paddingLeft - paddingRight);
  };

  const getY = (elev) => {
    return height - paddingBottom - ((elev - minElev) / (maxElev - minElev)) * (height - paddingTop - paddingBottom);
  };

  // Generate SVG path string
  let pathD = "";
  chartPoints.forEach((p, i) => {
    const x = getX(i);
    const y = getY(p.elev);
    if (i === 0) {
      pathD += `M ${x} ${y}`;
    } else {
      pathD += ` L ${x} ${y}`;
    }
  });

  // Generate area under line path string
  const startX = getX(0);
  const endX = getX(chartPoints.length - 1);
  const bottomY = height - paddingBottom;
  const areaD = `${pathD} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1 w-full">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Route Profile</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Trek Elevation Chart
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Visualize the steep climbs, valley descents, and high-altitude peaks along the 9-day trek. Review the day-by-day altitude layout.
          </p>
        </div>

        {/* Chart View */}
        <div className="mt-12 p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto">
          <div className="min-w-[760px] relative">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
              
              {/* Grid Lines */}
              {[1000, 2000, 3000, 4000, 5000].map((gridElev, idx) => {
                const y = getY(gridElev);
                return (
                  <g key={idx}>
                    <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4 4" />
                    <text x={paddingLeft - 10} y={y + 4} textAnchor="end" fontSize="10" className="fill-stone-400 font-semibold">{gridElev}m</text>
                  </g>
                );
              })}

              {/* Area path */}
              <path d={areaD} fill="url(#emerald-gradient)" opacity="0.1" />

              {/* Line path */}
              <path d={pathD} fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* Markers & Labels */}
              {chartPoints.map((point, i) => {
                const x = getX(i);
                const y = getY(point.elev);
                return (
                  <g key={i}>
                    {/* Circle marker */}
                    <circle cx={x} cy={y} r="5" className="fill-emerald-600 stroke-white" strokeWidth="2" />
                    
                    {/* Elevation label */}
                    <text x={x} y={y - 12} textAnchor="middle" fontSize="9" className="fill-stone-900 font-extrabold">{point.elev}m</text>
                    
                    {/* Day label */}
                    <text x={x} y={height - paddingBottom + 16} textAnchor="middle" fontSize="10" className="fill-stone-950 font-bold">{point.day}</text>
                    
                    {/* Location label */}
                    <text x={x} y={height - paddingBottom + 28} textAnchor="middle" fontSize="8" className="fill-stone-400 font-medium">{point.name}</text>
                  </g>
                );
              })}

              {/* Definitions */}
              <defs>
                <linearGradient id="emerald-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>

            </svg>
          </div>
        </div>

        {/* Elevation Insights */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Key Elevation Profile Observations</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
            <p>
              * **The Valley Drop (Day 5)**: Notice the dip between Bayeli (3,432m) and Chhistibung (2,975m). This descent into the forest acts as a natural acclimatization brake before the big climb.
            </p>
            <p>
              * **The Ridge Wall (Day 6)**: The trail climbs from 2,975m at Chhistibung to 3,660m at Khopra Ridge. This is a severe 685-meter climb in a short hiking period, requiring a slow, steady pace.
            </p>
            <p>
              * **The Khayer Lake Peak (Day 7)**: The single day climb to Khayer Lake (4,660m) represents the highest altitude on the trail. You gain 1,000m of elevation and return to sleep on the Ridge, executing the standard high-altitude strategy of "climb high, sleep low".
            </p>
          </div>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile coordinates using detailed GPX trackers mapping the Annapurnas. Note that local lodges may vary slightly in altitude records depending on GPS calibration.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Secure Your Custom Route Planning</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our guided packages. Our team ensures safety and comfort, providing you with elevation trackers and personal altitude monitoring throughout.
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
