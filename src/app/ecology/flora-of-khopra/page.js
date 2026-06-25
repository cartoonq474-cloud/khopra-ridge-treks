import React from "react";
import Link from "next/link";

export default function Page() {
  const zones = [
    {
      range: "Sub-Tropical & Temperate Forest (1,000m - 2,500m)",
      trees: "Alnus nepalensis (Utis), oak trees, bamboo groves, and farming terrace crops.",
      desc: "Rich, humid valleys with dense tree canopy cover. Ferns, orchids, and climbing vines grow along the Modi Khola river basin trail segments."
    },
    {
      range: "Sub-Alpine Forest (2,500m - 3,500m)",
      trees: "Rhododendron arboreum (Lali Gurans), Himalayan birch, and blue pine.",
      desc: "This is the signature ecological zone of Tadapani and Dobato. In spring, the forest turns into a massive canopy of red, pink, and white blossoms."
    },
    {
      range: "Alpine Scrub & Meadows (3,500m - 4,700m)",
      trees: "Dwarf junipers, alpine grasses, mosses, lichens, and mountain wildflowers.",
      desc: "As you climb out of Chhistibung onto Khopra Ridge, the tree canopy disappears. The landscape is dominated by wind-resistant dwarf shrubs and seasonal summer meadows."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-600 transition-colors">Ecology</Link>
          <span>/</span>
          <span className="text-stone-800">Flora</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Himalayan Biodiversity</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Flora of the Khopra Ridge Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Discover the vegetation. A complete guide to the diverse ecological zones, rhododendron species, and high-altitude alpine flora of the circuit.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Botanical Transition Loop</h2>
          <p>Because the Khopra Ridge Trek begins in warm river basins at 1,025 meters and ascends to high alpine lake plates at 4,660 meters, it features a remarkable cross-section of Himalayan flora. Trekkers walk through bamboo jungles, dense oak forests, blooming rhododendron canopies, and high-altitude grasslands.
          </p>
        </div>

        {/* Zones List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Ecological Elevation Zones</h3>
          <div className="space-y-6">
            {zones.map((zone, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{zone.range}</span>
                <h4 className="font-extrabold text-stone-950 text-base mt-1">Dominant Flora: {zone.trees}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Explore Himalayan Forests</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We specialize in educational guided treks, pointing out local herbs, medicinal plants, and rhododendron species along the loop.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
