import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "4°C to 8°C (39°F to 46°F)" },
    { label: "Avg Night Temp", value: "-12°C to -8°C (10°F to 18°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "3 - 4 Days" },
    { label: "Sky Clarity Index", value: "85% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in February
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for late winter. Review average high/low temperatures, snow expectations, visibility index, and gear advice for February.
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

        {/* Why February section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why February is the Late Winter Transition</h2>
          <p className="text-stone-600 leading-relaxed">
            February represents the transition from deep winter to early spring. High-altitude ridges like Khopra Ridge (3,660m) are still very cold, with night temperatures well below freezing, but daytime hiking temperatures become slightly more comfortable as the month progresses.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The mornings are generally crystal-clear, offering spectacular panoramas of the Dhaulagiri and Annapurna ranges. However, afternoon winds can pick up on the exposed ridge, bringing sudden drops in temperature.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Towards the end of the month, early rhododendron flowers may begin to bloom at lower elevations like Birethanti and Swanta. Upper sections still require warm winter sleeping gear and microspikes for safe snow/ice passage.
          </p>
        </div>

        {/* February Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key February Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Insulated Down Layer:</strong> Critical for early mornings and late afternoons on the ridge.</li>
            <li><strong>Windproof Outer Shell:</strong> A high-quality windproof jacket is essential for the gusty ridge conditions.</li>
            <li><strong>Trail Spikes:</strong> Essential for crossing shady, frozen trail segments between Chhistibung and Khopra.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile climate data from meteorological stations inside the ACA. All weather warnings are updated in real-time by checkpost coordinators.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your February Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              February offers beautiful winter visibility with fewer trekkers on the route. Secure your permit-inclusive booking packages with our local team.
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
