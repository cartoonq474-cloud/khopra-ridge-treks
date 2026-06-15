import React from "react";
import Link from "next/link";

export default function Page() {
  const supports = [
    {
      title: "Direct Trail Employment",
      desc: "Our trekking packages prioritize hiring guides, porters, kitchen staff, and lodge helpers exclusively from the Myagdi and Kaski districts, ensuring cash flows directly into local households."
    },
    {
      title: "Agricultural Sourcing",
      desc: "Community lodges purchase fresh potatoes, cabbage, organic green vegetables, eggs, and dairy directly from family farms in Swanta, Ghandruk, and Ghorepani, bypassing city middlemen."
    },
    {
      title: "Handicrafts & Souvenirs",
      desc: "We encourage trekkers to purchase handmade wool apparel, honey, and nettle fabric bags directly from local village cooperatives, supporting women's craft groups."
    },
    {
      title: "Infrastructure Maintenance",
      desc: "A portion of your trek permit fee and lodge cost helps fund the maintenance of trail safety signs, wooden bridges, drinking water stations, and waste management bins."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sustainable Travel</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            How Trekking Supports Local Communities
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the economics of trekking on the Khopra Ridge loop and learn how your travel expenses support local guides, porters, and farmers.
          </p>
        </div>

        {/* Economic Contribution */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Linking Tourism and Livelihoods</h2>
          <p className="text-stone-600 leading-relaxed">
            In many mountain regions, the financial benefits of tourism are concentrated in capital cities or with large, multi-national agencies. However, the unique community structure of the Khopra Ridge circuit ensures that the economic impact is widely distributed among the mountain families.
          </p>
          <p className="text-stone-600 leading-relaxed">
            From the moment you hire local staff to your purchases of local meals and agricultural products, your journey helps protect local farming systems, supports public schooling, and funds vital infrastructure projects.
          </p>
        </div>

        {/* Support Breakdown */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Economic Impact Channels</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {supports.map((sup, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{sup.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{sup.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We employ licensed local mountain guides and maintain a strict code of ethics regarding fair wages, insurance coverage, and load limits for porters.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan Your Responsible Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Support local livelihoods by booking our all-inclusive tour packages. We guarantee fair salaries and safe working conditions for all trail crews.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
