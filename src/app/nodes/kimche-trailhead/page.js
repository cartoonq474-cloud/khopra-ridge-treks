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
            Kimche: The Jeep Road Trailhead
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Kimche is the highest road point reached by vehicles ascending from Pokhara via Nayapul. It serves as the physical walking trailhead for those looking to skip the lower river walk.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">1,640 m (5,380 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Trailhead Connection</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Leads to Ghandruk</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Road Type</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Unpaved Mountain Dirt Road</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Jeep Cost</span>
            <p className="mt-1 text-sm font-bold text-stone-900">~7,000 - 9,000 NPR</p>
          </div>
        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Why Start at Kimche?</h3>
            <p className="text-stone-600 leading-relaxed">
              Trekking from Nayapul along the dirt road can be dusty and exposed. By taking a private 4WD jeep directly to Kimche from Pokhara, you skip the unscenic dirt road walk and begin your trek directly on the stone staircase leading up to Ghandruk village. This cuts approximately 3-4 hours of walking from your first day.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Road Conditions and Monsoon Travel</h3>
            <p className="text-stone-600 leading-relaxed">
              The mountain road from Nayapul to Kimche is unpaved and runs along deep gorges. During the monsoon season (June to September), heavy rains regularly trigger minor mudslides or turn stream crossings impassable. A sturdy high-clearance 4WD jeep is essential year-round, and road statuses should be verified daily with our local transport coordinator.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Hiking to Ghandruk</h3>
            <p className="text-stone-600 leading-relaxed">
              From the jeep stop at Kimche, the trail is a clear uphill staircase made of hand-carved stone steps. The climb to Ghandruk village takes about 1 to 1.5 hours of steady ascent through fields and small tea plantations.
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
