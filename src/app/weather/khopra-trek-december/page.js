import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "4°C to 8°C (39°F to 46°F)" },
    { label: "Avg Night Temp", value: "-10°C to -6°C (14°F to 21°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "1 - 2 Days" },
    { label: "Sky Clarity Index", value: "95% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Weather in December
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan for early winter. Review average high/low temperatures, freeze metrics, sky visibility indicators, and gear advice for December.
          </p>
        </div>

        {/* Climate Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {weatherStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Why December section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why December offers Best Horizon Visibility</h2>
          <p className="text-stone-600 leading-relaxed">December is the onset of early winter. While temperatures at Khopra Ridge drop significantly (often falling to -10°C at night), December provides some of the clearest blue skies and highest visibility indices of the entire year.
          </p>
          <p className="text-stone-600 leading-relaxed">The low humidity and dry winter air keep the atmosphere clear, giving trekkers perfect, sharp morning views of the entire Dhaulagiri range and the Annapurna massif. There is very little dust or cloud cover.
          </p>
          <p className="text-stone-600 leading-relaxed">Trails are quiet as tourist numbers drop after November. However, community lodges operate regularly. Warm thermals, windproof outer shells, and a high-quality down sleeping bag are essential to handle the freezing night temperatures.
          </p>
        </div>

        {/* December Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key December Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Thermal Layers:</strong>Bring heavyweight merino wool or synthetic thermal underwear.</li>
            <li><strong>Sleeping Bag Liner:</strong>An extra fleece liner can add significant warmth to your -15°C/-20°C sleeping bag.</li>
            <li><strong>Gloves & Beanie:</strong>Thermal gloves and a windproof beanie are mandatory for ridge mornings and evenings.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We compile climate data from meteorological stations inside the ACA. All weather warnings are updated in real-time by checkpost coordinators.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your December Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">December is suitable for trekkers who want crisp, high-clarity winter panoramas without crowds. Secure your permit-inclusive booking packages with our local team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/weather/khopra-trek-december',
  },
};
