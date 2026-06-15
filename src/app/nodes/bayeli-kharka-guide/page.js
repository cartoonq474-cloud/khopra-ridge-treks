import React from "react";

export default function Page() {
  return (
    <div className="w-full flex-1">
      

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Node Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Bayeli Kharka: Remote High-Altitude Hub
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Situated high above the main trekking loops, Bayeli Kharka is a quiet clearing in the sub-alpine forest offering stunning close-up views of Annapurna South.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
                    <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Elevation</span>
            <p className="mt-1 text-sm font-bold text-stone-900">3,425 m (11,236 ft)</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Lodge Type</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Community Lodge</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Acclimatization Role</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Altitude Transition Stop</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Visible Peaks</span>
            <p className="mt-1 text-sm font-bold text-stone-900">Annapurna South (West Face), Dhaulagiri</p>
          </div>

        </div>

        {/* EXPANDED SECTION DETAILS */}
        <div className="mt-12 space-y-10">
                    <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">The Community Lodge System</h3>
            <p className="text-stone-600 leading-relaxed">The single lodge at Bayeli Kharka is run by the community. It is simple, offering wooden twin rooms and a cozy dining room heated by a central stove. Profits directly fund the local communities in the valleys below.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Forest Wildlife & Surroundings</h3>
            <p className="text-stone-600 leading-relaxed">Bayeli Kharka is located in a dense forest of oak, rhododendron, and bamboo. It is one of the best spots on the trek to see Himalayan Monals, musk deer, and various high-altitude bird species.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-950">Altitude Safety Stop</h3>
            <p className="text-stone-600 leading-relaxed">Sleeping at 3,425m in Bayeli is key for acclimatization. It prepares your body for the higher elevation of Khopra Ridge (3,660m) and Khayer Lake (4,660m) later in the trek.</p>
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
