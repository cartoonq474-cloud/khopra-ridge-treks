import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Node Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Ghandruk Village: Annapurna's Gurung Cultural Capital
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Ghandruk is a massive, beautifully preserved stone village built into the hillsides of the Annapurna region. Famous for its clean paved lanes, slate-roofed houses, and rich Gurung heritage.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
                    <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">1,940 m (6,364 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Primary Ethnicity</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Gurung (Gurkha heritage)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Transport Access</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Jeep from Pokhara (3 hrs)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Key Attraction</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Gurung Cultural Museum</p>
          </div>

        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
                    <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Gurung Culture & Heritage</h3>
            <p className="text-stone-600 leading-relaxed">Ghandruk is the spiritual heart of the Gurung people in the Modi Khola valley. Many families here have historic ties to the Gurkha regiments. Visitors can dress in traditional Gurung attire at the local cultural museum and learn about local architecture, shamanistic rituals, and stone carving.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Accommodation & Homestays</h3>
            <p className="text-stone-600 leading-relaxed">Unlike high-altitude wild nodes, Ghandruk features highly comfortable teahouses, cozy guest houses, and community-run homestays. Most accommodations offer hot showers, Wi-Fi, and panoramic dining rooms facing Annapurna South and Machhapuchhre.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Connecting to Khopra Ridge</h3>
            <p className="text-stone-600 leading-relaxed">For the Khopra Ridge Trek, Ghandruk serves as the primary starting point. After driving from Pokhara, hikers spend their first afternoon exploring Ghandruk before ascending towards Tadapani the next morning.</p>
          </div>

        </div>

        {/* DETAILED RESOURCES */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <h3 className="text-2xl font-bold text-stone-950">Detailed Ghandruk Planning Resources</h3>
          <p className="mt-2 text-sm text-stone-500 leading-relaxed">
            Select one of our specialized Ghandruk planning guides below to plan your activities, cultural experiences, and transit routes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
            <Link href="/nodes/ghandruk-things-to-do" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Things to Do in Ghandruk</span>
              <span>→</span>
            </Link>
            <Link href="/nodes/ghandruk-gurung-culture" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Gurung Culture & Heritage</span>
              <span>→</span>
            </Link>
            <Link href="/nodes/ghandruk-accommodation-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Lodging & Accommodation</span>
              <span>→</span>
            </Link>
            <Link href="/nodes/syauli-bazaar-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Syauli Bazaar Trailhead</span>
              <span>→</span>
            </Link>
            <Link href="/nodes/birethanti-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Birethanti Checkpoint Info</span>
              <span>→</span>
            </Link>
            <Link href="/nodes/kimche-trailhead" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Kimche Jeep Trailhead</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* E-E-A-T AUTHOR FOOTNOTE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This node guide is reviewed by certified local guides based in Pokhara. We regularly update trail access routes, teahouse lists, and village details based on active checks.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to Explore the Annapurna Region?</h3>
          <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
            Our expert guides manage all logistical permits, lodging, transport, and safety. Join our next 9-Day Khopra Ridge trek.
          </p>
          <a
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all"
          >
            Inquire &amp; Book Today
          </a>
        </div>
      </div>

      
    </div>
  );
}
