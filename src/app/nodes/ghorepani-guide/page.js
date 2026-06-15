import React from "react";

export default function Page() {
  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Node Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Ghorepani Village & Poon Hill Hub
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Ghorepani is a bustling mountain village situated on a historic trade pass. It is the launching point for the famous sunrise hike to Poon Hill (3,210m).
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
                    <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">2,860 m (9,383 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Primary Viewpoint</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Poon Hill (3,210m)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Lodge Count</span>
            <p className="mt-1 text-sm font-bold text-stone-900">30+ Teahouses</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Connecting Trail</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Swanta Village or Tatopani</p>
          </div>

        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
                    <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Poon Hill Sunrise Hike</h3>
            <p className="text-stone-600 leading-relaxed">From Ghorepani, hikers climb 45 minutes up a stone staircase early in the morning to reach Poon Hill. At sunrise, the peaks of Dhaulagiri, Nilgiri, and the Annapurna range glow gold in one of the most famous panoramas in Asia.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">World's Largest Rhododendron Canopy</h3>
            <p className="text-stone-600 leading-relaxed">Ghorepani sits inside a massive rhododendron forest. During March and April, the entire hillside turns bright red and pink with blooming flowers, making it a paradise for photographers and nature lovers.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Linking to Khopra</h3>
            <p className="text-stone-600 leading-relaxed">Many hikers combine Poon Hill and Khopra Ridge. After catching the sunrise at Poon Hill, you can hike down to Swanta and begin the climb towards Chhistibung and Khopra Danda.</p>
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
