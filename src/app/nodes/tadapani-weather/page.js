import React from "react";
import Link from "next/link";

export default function Page() {
  const seasons = [
    {
      name: "Spring (March - May)",
      temp: "10°C to 18°C (Day) | 2°C to 8°C (Night)",
      desc: "Mild, comfortable weather. Forest canopies are alive with rhododendron blooms. Afternoon clouds are common, but mornings are clear."
    },
    {
      name: "Autumn (September - November)",
      temp: "8°C to 15°C (Day) | -2°C to 5°C (Night)",
      desc: "Dry and crisp air. Excellent visibility for mountain viewing. Clear blue skies throughout the day, though nights can get cold."
    },
    {
      name: "Monsoon (June - August)",
      temp: "15°C to 22°C (Day) | 10°C to 15°C (Night)",
      desc: "Heavy rain, high humidity, and thick fog. Leeches are common in the forest trails. Trails can be slippery; mountain views are rare."
    },
    {
      name: "Winter (December - February)",
      temp: "2°C to 10°C (Day) | -8°C to 0°C (Night)",
      desc: "Cold temperatures with occasional snow. Crystal-clear mornings. Requires heavy layers, sleeping bags, and thermal insulation."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Tadapani Weather</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Climate Data</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Tadapani Weather & Visibility Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the weather patterns. A complete breakdown of temperatures, seasonal visibility, and moisture profiles in Tadapani.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Forest Microclimate Dynamics</h2>
          <p>Tadapani is located at 2,630 meters in a dense oak and rhododendron forest saddle. This creates a distinct forest microclimate characterized by higher relative humidity and frequent fog compared to exposed ridge settlements like Khopra Ridge.
          </p>
          <p>During the afternoon, warm air climbs from the Modi Khola valley, condensing into mist as it hits the cool forest. This can cause visibility to drop rapidly in the late afternoon, though mornings are typically crisp, clear, and bright.
          </p>
        </div>

        {/* Seasons List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Seasonal Weather Profiles</h3>
          <div className="space-y-6">
            {seasons.map((season, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{season.name}</h4>
                <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{season.temp}</span>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{season.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Plan Around Clear Windows</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides study meteorological trends daily to adjust hiking schedules, ensuring you arrive at view spots like Tadapani and Muldai when skies are clearest.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Consult weather team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/nodes/tadapani-weather',
  },
};
