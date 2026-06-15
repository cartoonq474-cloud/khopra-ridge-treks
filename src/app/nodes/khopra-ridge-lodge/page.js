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
            Khopra Ridge Community Lodge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Perched on the edge of the majestic Khopra Ridge (3,660m), this unique community-owned lodge offers the most spectacular 360-degree mountain views in the Annapurna region.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">3,660 m (12,007 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Lodge Type</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Community Eco-Lodge</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Ownership</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Magar/Gurung Villages</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Best Sunset Views</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Mount Dhaulagiri I (8,167m)</p>
          </div>
        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">The Community Lodge Difference</h3>
            <p className="text-stone-600 leading-relaxed">
              Unlike private teahouses on standard routes, the Khopra Ridge lodge was built collectively by local villages. All profits from accommodation and food directly support the Swanta High School and local medical services. Staying here means your tourism dollars directly benefit mountain communities.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Facilities &amp; Amenities</h3>
            <p className="text-stone-600 leading-relaxed">
              Due to its remote high-altitude location, facilities are basic but comfortable. The lodge has double rooms with twin beds and warm blankets. The central dining hall features a wood-fired stove where organic meals prepared with village-grown potatoes and vegetables are served. Battery charging and community Wi-Fi are available for a small fee.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Altitude Safety &amp; Excursion Gateway</h3>
            <p className="text-stone-600 leading-relaxed">
              The lodge is the primary staging area for the day trek to the sacred Khayer Lake (4,660m). At 3,660m, nights are cold, and early symptoms of AMS (Acute Mountain Sickness) must be monitored closely. Trekkers are advised to rest well, stay hydrated, and follow the guidance of their local guide.
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
