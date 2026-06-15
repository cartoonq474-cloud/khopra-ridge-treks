import React from "react";
import Link from "next/link";

export default function Page() {
  const villages = [
    {
      name: "Ghandruk (Gurung Cultural Hub)",
      elev: "1,940 m (6,365 ft)",
      highlight: "Gurung Museum, stone cottages, slate-paved streets, views of Annapurna South."
    },
    {
      name: "Swanta (Magar Farming Sanctuary)",
      elev: "2,214 m (7,263 ft)",
      highlight: "Organic bee harvesting, copper mills, terrace farms, warm homestays."
    },
    {
      name: "Ghorepani (Panoramic Junction)",
      elev: "2,860 m (9,383 ft)",
      highlight: "Gateway to Poon Hill, extensive teahouse options, vibrant blue-roof clusters."
    },
    {
      name: "Tadapani (Rhododendron Forest Outpost)",
      elev: "2,630 m (8,628 ft)",
      highlight: "Surrounding ancient forests, direct sightlines of Machhapuchhre, junction trailheads."
    },
    {
      name: "Dobato (High Alpine Pasture)",
      elev: "3,432 m (11,259 ft)",
      highlight: "Gateway to Muldai Viewpoint, quiet community-run lodges, pristine nature."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Culture Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Traditional Villages of the Khopra Circuit
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Take a visual and cultural tour of the beautiful Gurung and Magar settlements that you will explore along the Khopra Ridge Trek.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Indigenously Managed Settlements</h2>
          <p className="text-stone-600 leading-relaxed">
            One of the greatest joys of trekking the Khopra Ridge loop is the cultural variation. You will walk from the slate-paved streets and large Gurung town of Ghandruk up through high alpine pastures, and descend into the cozy, organic farming valleys of the Magar ethnic group at Swanta.
          </p>
        </div>

        {/* Village Grid */}
        <div className="mt-12 space-y-6">
          {villages.map((vil, idx) => (
            <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-extrabold text-stone-950 text-lg">{vil.name}</h3>
                <p className="text-xs text-stone-400">Elevation: {vil.elev}</p>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">
                  <strong>Highlights:</strong> {vil.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Village Ethics */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Responsible Travel in Mountain Villages</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Stay Local:</strong> Support community lodges and homestays. Your expenses directly fund schools and health centers.</li>
            <li><strong>Minimize Plastic:</strong> Villages along the loop do not have commercial plastic recycling. Carry water purification systems and avoid buying single-use bottled water.</li>
            <li><strong>Cultural Sensitivity:</strong> Dress modestly (covering shoulders and knees) when walking through villages. Ask permission before entering yards.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We cooperate directly with village development committees to monitor environmental impacts and maintain safety codes across all settlements.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Multi-Village Loop Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Explore these traditional villages with our licensed local guides. Secure your permit-inclusive packages with our local team.
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
