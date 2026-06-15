"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const highlights = [
    {
      title: "Muldai Sunrise Viewpoint Access",
      desc: "Dobato serves as the sleeping launchpad for climbing to the top of Muldai Viewpoint (3,637m). A short 30-45 minute morning walk leads you to a panoramic view that rival or exceeds Poon Hill."
    },
    {
      title: "Peaceful Forest Trails",
      desc: "The trail leading up to Dobato passes through ancient rhododendron, cedar, and oak forests. You are far away from the commercial tourist trails here, offering true peace."
    },
    {
      title: "Community Lodges",
      desc: "Like much of the loop, the lodging in Dobato is managed by local community collectives, directly funding community schools and health facilities in the valley below."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Dobato Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Dobato Location Hub & Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the high pastures. Discover the elevation specs, route maps, and viewpoints of the serene forest settlement of Dobato.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Hidden Oasis in the High Forest</h2>
          <p>
            Situated at 3,432 meters (11,259 feet), Dobato is a small cluster of lodges nestled in a high forest pasture clearing. Tucked beneath the ridges of Muldai Hill, it provides an essential acclimatization sleep-stop for trekkers making their way up the Khopra Ridge circuit.
          </p>
          <p>
            Unlike Ghandruk or Ghorepani, Dobato has no road access and no large commercial hotel blocks. It is a quiet sanctuary surrounded by dense oak canopies, where you can watch the mist roll over the hills and enjoy first-row views of Annapurna South and Machhapuchhre.
          </p>
        </div>

        {/* Highlights List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Why Dobato Is a Vital Trail Stop</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((hl, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{hl.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation and Facilities */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Accommodation & Facilities</h3>
          <p>
            Lodging in Dobato is rustic. Rooms are twin setups built of wood and plywood, featuring warm heavy blankets. Bathrooms are shared, and hot water is generally supplied in buckets (gas heated) for a small fee. Charge your devices in the common dining area, which is kept cozy by a central firewood stove.
          </p>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Experience Dobato and Muldai Hill</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              We arrange guided stays in Dobato community lodges. Our packages include early morning guided climbs to Muldai Viewpoint for sunrise.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire about loops
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
