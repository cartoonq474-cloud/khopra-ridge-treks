import React from "react";

export default function Page() {
  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Node Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Swanta Village: Terraces & Community Projects
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Nestled in a peaceful side-valley beneath Khopra Ridge, Swanta is a traditional agricultural village populated by the Magar community, showcasing local community development.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
                    <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">2,200 m (7,217 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Primary Ethnicity</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Magar</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Community Projects</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Local High School & Yak Cheese Farm</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Trail Section</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Descent from Khopra Danda</p>
          </div>

        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
                    <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Community Lodge & Development</h3>
            <p className="text-stone-600 leading-relaxed">Swanta played a pivotal role in the launch of the community lodge network. The local community lodge directly finances the Swanta High School, paying the salaries of teachers so that local children do not have to walk hours to Ghorepani for education.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Agriculture & Yak Cheese</h3>
            <p className="text-stone-600 leading-relaxed">Swanta is surrounded by beautiful terraced fields growing potatoes, barley, and maize. The village also features a community-run yak cheese factory, producing organic cheese that is sold to trekkers along the route.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">The Trail to Swanta</h3>
            <p className="text-stone-600 leading-relaxed">When descending from the high altitude of Khopra Ridge, the path drops steeply through forests into the pastures of Swanta. It provides a warm, relaxing rest stop with comfortable village lodges after the cold nights on the ridge.</p>
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
