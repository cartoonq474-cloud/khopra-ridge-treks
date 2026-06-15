import React from "react";
import Link from "next/link";

export default function Page() {
  const segments = [
    {
      from: "Pokhara (Drive) to Kimche",
      to: "Ghandruk (Trek)",
      distance: "4.5 km / 2.8 mi",
      duration: "1.5 Hours",
      elevation: "+300m / +984ft",
      terrain: "Winding paved/dirt roads, followed by flat and climbing stone steps through farming terraces."
    },
    {
      from: "Ghandruk",
      to: "Tadapani",
      distance: "9.2 km / 5.7 mi",
      duration: "4 - 5 Hours",
      elevation: "+760m / +2,493ft",
      terrain: "Climbing dirt trails shaded by dense oak, moss, and rhododendron forests."
    },
    {
      from: "Tadapani",
      to: "Dobato",
      distance: "6.8 km / 4.2 mi",
      duration: "3 - 4 Hours",
      elevation: "+732m / +2,401ft",
      terrain: "Less traveled ridge paths, ascending open moss meadows and high-altitude pastures."
    },
    {
      from: "Dobato",
      to: "Chhistibung",
      distance: "4.5 km / 2.8 mi",
      duration: "2 - 3 Hours",
      elevation: "-432m / -1,417ft (descending)",
      terrain: "Forest descents dropping down to the stream before starting the next ridge ascent."
    },
    {
      from: "Chhistibung",
      to: "Khopra Ridge",
      distance: "5.5 km / 3.4 mi",
      duration: "3.5 - 4.5 Hours",
      elevation: "+660m / +2,165ft",
      terrain: "Very steep, exposed alpine climb along grassy ridges up to the primary vantage point."
    },
    {
      from: "Khopra Ridge",
      to: "Khayer Lake (Round Trip)",
      distance: "16.0 km / 9.9 mi",
      duration: "8 - 10 Hours",
      elevation: "+1,000m / -1,000m (+3,280ft)",
      terrain: "High-altitude wilderness, loose shale, scree, alpine meadows, and exposed mountain slopes."
    },
    {
      from: "Khopra Ridge",
      to: "Swanta",
      distance: "9.2 km / 5.7 mi",
      duration: "4 Hours",
      elevation: "-1,446m / -4,744ft (descending)",
      terrain: "Rapid and steep drop through bamboo groves, moist pastures, and agricultural steps."
    },
    {
      from: "Swanta",
      to: "Ghorepani",
      distance: "7.0 km / 4.3 mi",
      duration: "3.5 Hours",
      elevation: "+646m / +2,119ft",
      terrain: "Hike down to the suspension bridge, followed by a steep climb back to the Ghorepani village gateway."
    }
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
          <span className="text-stone-800">Distance Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Data</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek Distance & Pacing Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Review detailed metrics of the loop trail. Plan your daily hiking output using exact horizontal distances and vertical elevation profiles.
          </p>
        </div>

        {/* Total Summary */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
            <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] block">Total Loop Distance</span>
            <span className="text-2xl font-black text-stone-950 mt-1 block">~68 km</span>
            <span className="text-xs text-stone-500 block">42.2 Miles</span>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
            <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] block">Khayer Lake Side-Trip</span>
            <span className="text-2xl font-black text-stone-950 mt-1 block">16 km</span>
            <span className="text-xs text-stone-500 block">Round-Trip from Ridge</span>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
            <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] block">Highest Point Ascent</span>
            <span className="text-2xl font-black text-stone-950 mt-1 block">4,660m</span>
            <span className="text-xs text-stone-500 block">15,288 Feet</span>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
            <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] block">Avg. Daily Hiking</span>
            <span className="text-2xl font-black text-stone-950 mt-1 block">5 - 6 hrs</span>
            <span className="text-xs text-stone-500 block">Paced for Safety</span>
          </div>
        </div>

        {/* Detailed Segment Breakdown */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Segment-by-Segment Statistics</h2>
          <div className="space-y-6">
            {segments.map((seg, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Section {i + 1}</span>
                    <h3 className="font-extrabold text-stone-950 text-sm mt-0.5">
                      {seg.from} → {seg.to}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                      {seg.distance}
                    </span>
                    <span className="text-xs font-bold text-stone-700 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
                      {seg.duration}
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-stone-400 font-semibold uppercase tracking-wider text-[9px]">Vertical Gain/Loss</span>
                    <strong className="block text-stone-800 mt-1">{seg.elevation}</strong>
                  </div>
                  <div>
                    <span className="block text-stone-400 font-semibold uppercase tracking-wider text-[9px]">Terrain & Trail Notes</span>
                    <p className="text-stone-500 mt-1 leading-relaxed">{seg.terrain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pacing Advice */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Why Vertical Distance Matters More</h3>
          <p className="text-xs leading-relaxed font-medium">
            In the Himalayas, horizontal distance is often secondary to vertical elevation changes. Climbing 1,000 meters vertically (like the Chhistibung to Khopra segment or the Khayer Lake day hike) takes significantly more energy and time than trekking 10 kilometers on flat ground. When preparing, focus your training on stair climbing, step-ups, and incline training rather than purely horizontal running distance.
          </p>
        </div>

        {/* EEAT Footnote */}
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
            <h3 className="text-2xl font-bold">Customize Your Trail Pace</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Prefer shorter daily trekking distances? We can add extra rest days or divide long segments into shorter stages with comfortable overnight stays.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Consult a guide
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
