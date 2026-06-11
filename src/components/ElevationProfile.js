"use client";

import React, { useState } from "react";

const elevationData = [
  { day: 1, name: "Ghandruk", alt: 1940, note: "Start trek. Warm temperatures." },
  { day: 2, name: "Tadapani", alt: 2630, note: "Mossy forest walks. Comfortable height." },
  { day: 3, name: "Bayeli Kharka", alt: 3425, note: "Acclimatize here. Drink garlic soup!" },
  { day: 4, name: "Chhistibung", alt: 2975, note: "Valley descent & short forest climb." },
  { day: 5, name: "Khopra Ridge", alt: 3660, note: "Standing on the high ridge. Cold wind." },
  { day: 6, name: "Khayer Lake", alt: 4660, note: "Maximum altitude! Demanding side trip." },
  { day: 7, name: "Swanta Village", alt: 2200, note: "Descent to warm agricultural valleys." },
  { day: 8, name: "Ghorepani", alt: 2860, note: "Connect to Poon Hill route." },
  { day: 9, name: "Pokhara", alt: 820, note: "Return drive. End of trek services." }
];

export default function ElevationProfile() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // SVG Chart Dimensions
  const width = 800;
  const height = 250;
  const padding = 40;

  // Max and min boundaries for scaling the chart coordinates
  const maxAlt = 5000;
  const minAlt = 500;

  // Scale functions
  const getX = (index) => padding + (index * (width - padding * 2)) / (elevationData.length - 1);
  const getY = (alt) => height - padding - ((alt - minAlt) * (height - padding * 2)) / (maxAlt - minAlt);

  // Generate points string for SVG polyline
  const points = elevationData.map((d, i) => `${getX(i)},${getY(d.alt)}`).join(" ");
  // Area points string (closing the bottom area of the chart for gradient fill)
  const areaPoints = `${getX(0)},${height - padding} ${points} ${getX(elevationData.length - 1)},${height - padding}`;

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-stone-950">Interactive Elevation Profile</h3>
          <p className="text-xs text-stone-500 mt-1">Hover over any day node to view target altitude safety notes.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Peak: 4,660m (Khayer Lake)
        </span>
      </div>

      {/* SVG Chart Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[650px] relative">
          <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} className="overflow-visible">
            {/* Gradients */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[1000, 2000, 3000, 4000, 5000].map((gridAlt) => (
              <g key={gridAlt}>
                <line
                  x1={padding}
                  y1={getY(gridAlt)}
                  x2={width - padding}
                  y2={getY(gridAlt)}
                  className="stroke-stone-100"
                  strokeWidth={1}
                />
                <text
                  x={padding - 10}
                  y={getY(gridAlt) + 4}
                  className="fill-stone-400 text-[10px] font-bold text-right"
                  textAnchor="end"
                >
                  {gridAlt}m
                </text>
              </g>
            ))}

            {/* Area under the line */}
            <polygon points={areaPoints} fill="url(#chartGradient)" />

            {/* Elevation line path */}
            <polyline
              fill="none"
              stroke="#059669"
              strokeWidth={3}
              points={points}
              className="transition-all"
            />

            {/* Nodes */}
            {elevationData.map((d, i) => (
              <g
                key={d.day}
                onMouseEnter={() => setHoveredNode(d)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={getX(i)}
                  cy={getY(d.alt)}
                  r={hoveredNode?.day === d.day ? 8 : 5}
                  className={`transition-all ${
                    hoveredNode?.day === d.day
                      ? "fill-emerald-600 stroke-emerald-100"
                      : "fill-white stroke-emerald-600"
                  }`}
                  strokeWidth={3}
                />
                <text
                  x={getX(i)}
                  y={getY(d.alt) - 12}
                  className={`text-[10px] font-bold text-center transition-all ${
                    hoveredNode?.day === d.day ? "fill-stone-900 font-extrabold" : "fill-stone-400"
                  }`}
                  textAnchor="middle"
                >
                  D{d.day}
                </text>
              </g>
            ))}
          </svg>

          {/* Floating Tooltip */}
          {hoveredNode && (
            <div
              className="absolute bg-stone-900 text-white rounded-xl p-4 shadow-lg border border-stone-800 text-xs max-w-[220px] z-30 pointer-events-none transition-all"
              style={{
                left: `${getX(hoveredNode.day - 1) - 110}px`,
                top: `${getY(hoveredNode.alt) - 110}px`
              }}
            >
              <div className="flex justify-between items-center border-b border-stone-800 pb-1 mb-1">
                <span className="font-bold text-emerald-400">Day {hoveredNode.day}: {hoveredNode.name}</span>
                <span className="font-bold">{hoveredNode.alt}m</span>
              </div>
              <p className="text-stone-300 font-medium">{hoveredNode.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
