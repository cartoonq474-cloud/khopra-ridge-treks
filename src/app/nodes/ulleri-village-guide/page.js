"use client";

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
            Ulleri: The Traditional Magar Ridge Village
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Clinging dramatically to the steep mountainside, Ulleri is a large, traditional Magar village famous for its sweeping views of Annapurna South and its challenging stone steps.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">2,050 m (6,725 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Key Feature</span>
            <p className="mt-1 text-sm font-bold text-stone-900">3,200 Stone Steps</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Ethnic Culture</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Magar Community</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Lodge Type</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Standard Private Teahouses</p>
          </div>
        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">The Steep Ascent of Ulleri</h3>
            <p className="text-stone-600 leading-relaxed">
              For trekkers on the classic Ghorepani Poon Hill loop or those descending from Swanta, Ulleri is most famous for the legendary 3,200 hand-carved stone steps climbing up from the Bhurungdi Khola river at Tikhedhunga. Pacing is critical here; take small steps, keep a slow tempo, and take regular hydration breaks to prevent knee strain.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Magar Heritage and Culture</h3>
            <p className="text-stone-600 leading-relaxed">
              Unlike the Gurung villages on the eastern side of the sanctuary, Ulleri is home to the Magar community, one of Nepal&apos;s oldest indigenous groups. The village houses are traditional stone-built structures painted in white and ochre, surrounded by terraced fields growing barley, potatoes, and millet.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Spectacular Ridge Views</h3>
            <p className="text-stone-600 leading-relaxed">
              Ulleri sits on a high ridge overlooking the deep valley below. On clear mornings, you can enjoy direct, unobstructed views of Annapurna South (7,219m), Hiunchuli (6,441m), and the green valley basin stretching back toward Pokhara.
            </p>
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
          <Link
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white border border-transparent"
          >
            Inquire &amp; Book Today
          </Link>
        </div>
      </div>
    </div>
  );
}
