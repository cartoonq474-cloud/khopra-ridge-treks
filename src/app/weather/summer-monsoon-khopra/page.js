import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/weather/best-time-to-trek" className="hover:text-emerald-600 transition-colors">Weather Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Summer & Monsoon</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Wet Season</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Summer & Monsoon Trekking (June - August)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Navigating the rains. An honest guide to mudslide risks, leeches in the forest, rain gear packing, and the lush summer green valleys.
          </p>
        </div>

        {/* Warning block */}
        <div className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-3xl text-amber-800 space-y-4">
          <h3 className="text-lg font-bold">Caution: High Rain & Landslide Hazards</h3>
          <p className="text-xs leading-relaxed font-medium">Monsoon brings heavy, continuous rains that can make trail navigation hazardous. Landslides are possible along the steep dirt road access paths past Nayapul, and mudslides can block sections between Swanta and Ghorepani. Additionally, the forest canopies are infested with leeches. We generally do not recommend this season for novice hikers.
          </p>
        </div>

        {/* The Positives */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Is There Any Advantage to Monsoon Trekking?</h2>
          <p>Despite the physical challenges, summer offers a few unique experiences for hardy travelers:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Lush, Green Valleys:</strong>The agricultural terraces of Swanta and Ghandruk are incredibly vibrant, showing off dense crops of millet and barley.
            </li>
            <li>
              <strong>Shepherd Encounters:</strong>You will meet local shepherds (*Gothalas*) grazing their massive sheep flocks on the high pastures of Khopra Ridge.
            </li>
            <li>
              <strong>Pilgrimage Timing:</strong>The sacred full moon festival at Khayer Lake (Janai Purnima) occurs in August, offering a rare opportunity to observe local religious culture.
            </li>
          </ul>
        </div>

        {/* Essential Gear */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Essential Monsoon Gear List</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-2.5">
            <li><strong>Heavy Rain Poncho:</strong>A pack-covering poncho is critical, as umbrellas are difficult to carry on steep stone step ascents.</li>
            <li><strong>Waterproof Boots:</strong>Sturdy leather boots with deep lug soles to prevent slipping on mud.</li>
            <li><strong>Leech Protection:</strong>Carry salt pockets or insect sprays to remove leeches. Wearing long gaiters can block them from entering your boots.</li>
            <li><strong>Dry Bags:</strong>Pack all clothes and electronics inside airtight dry sacks within your backpack.</li>
          </ul>
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
            <h3 className="text-2xl font-bold">Consult Our Trail Planners</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">If you must trek during the summer, contact us. We employ experienced guides who can map out alternative loop bypasses around active landslide zones.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Consult a planner
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/weather/summer-monsoon-khopra',
  },
};
