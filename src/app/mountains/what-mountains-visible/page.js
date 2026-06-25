import React from "react";
import Link from "next/link";

export default function Page() {
  const mountainRanges = [
    {
      range: "1. The Dhaulagiri Massif (West)",
      peaks: [
        { name: "Dhaulagiri I", height: "8,167 m (26,795 ft)", desc: "The seventh-highest mountain in the world. Dominates the western horizon directly across the Kali Gandaki Valley." },
        { name: "Tukuche Peak", height: "6,920 m (22,703 ft)", desc: "A snow-covered dome peak sitting immediately adjacent to Dhaulagiri I to the north." },
        { name: "Dhaulagiri II, III, IV, V", height: "Varying 7,200m - 7,700m", desc: "Secondary peaks extending along the Dhaulagiri range to the west." }
      ]
    },
    {
      range: "2. The Annapurna Massif (East)",
      peaks: [
        { name: "Annapurna South", height: "7,219 m (23,684 ft)", desc: "The massive peak wall towering directly behind the Khopra Ridge lodge to the east." },
        { name: "Hiunchuli", height: "6,441 m (21,132 ft)", desc: "Broad, jagged rocky summit adjacent to Annapurna South, forming the Annapurna Sanctuary gateway." },
        { name: "Machhapuchhre (Fishtail)", height: "6,993 m (22,943 ft)", desc: "The iconic, sacred double-peaked summit visible framing the eastern skyline." },
        { name: "Gangapurna", height: "7,455 m (24,457 ft)", desc: "Hanging glaciers and fluted snow ridge visible to the northeast beyond Nilgiri." }
      ]
    },
    {
      range: "3. The Nilgiri Range (North)",
      peaks: [
        { name: "Nilgiri North", height: "7,061 m (23,166 ft)", desc: "The highest peak of the Nilgiri group, forming the northern wall of the trek." },
        { name: "Nilgiri South", height: "6,839 m (22,437 ft)", desc: "The closest Nilgiri peak, featuring vertical ice flutings visible from the ridge." }
      ]
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Identification</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">What Mountains Can You See from Khopra Ridge?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">An exhaustive peak-by-peak directory identifying the massive mountain walls visible from your community lodge high-point.
          </p>
        </div>

        {/* Ranges Directory */}
        <div className="mt-12 space-y-12">
          {mountainRanges.map((rangeGroup, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-2xl font-bold text-stone-950">{rangeGroup.range}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rangeGroup.peaks.map((peak, idx) => (
                  <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                    <span className="text-xs font-extrabold text-stone-400 block uppercase tracking-wider">{peak.name}</span>
                    <span className="text-xs font-bold text-emerald-600 block">{peak.height}</span>
                    <p className="text-xs text-stone-500 leading-relaxed">{peak.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Peak Analysis Guides */}
        <div className="mt-16 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Detailed Mountain Peak Profiles</h3>
          <p className="text-stone-600 text-sm leading-relaxed">Read our deep-dives on each major mountain peak visible from the trail, including elevations, route history, and photography aspects:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-emerald-600">
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Dhaulagiri I Peak Profile (8,167m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Annapurna South Peak Profile (7,219m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Machhapuchhre (Fishtail) Peak Profile (6,993m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/nilgiri-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Nilgiri South &amp; North Peak Profiles (7,061m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/hiunchuli-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Hiunchuli Peak Profile (6,441m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/tukuche-peak-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Tukuche Peak Profile (6,920m)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/mountains/gangapurna-views" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Gangapurna Peak Profile (7,455m)
              </Link>
            </li>
          </ul>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Trek the Scenic Heights</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Plan your guided community lodge trek today. Let our local guides lead you through traditional Gurung villages and show you the ultimate viewing spots.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
