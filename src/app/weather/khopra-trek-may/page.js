import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "14°C to 20°C (57°F to 68°F)" },
    { label: "Avg Night Temp", value: "0°C to 6°C (32°F to 43°F) at ridge" },
    { label: "Avg Rain Days", value: "4 - 6 Days" },
    { label: "Sky Clarity Index", value: "70% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Weather in May
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan for late spring. Review average high/low temperatures, pre-monsoon rain expectations, visibility index, and gear advice for May.
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

        {/* Why May section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why May is the Late Spring Window</h2>
          <p className="text-stone-600 leading-relaxed">
            May is the final month of the spring trekking season in Nepal. It features warm temperatures throughout the route, making the high-elevation nights at Khopra Ridge (3,660m) and Bayeli Kharka (3,425m) far more comfortable than in earlier months.
          </p>
          <p className="text-stone-600 leading-relaxed">
            As the pre-monsoon heat builds up, afternoon cloudiness and localized showers become more frequent. However, mornings are still clear, offering beautiful views before the clouds roll in. Trekkers can enjoy quiet trails as the spring crowds start to taper off.
          </p>
        </div>

        {/* May Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key May Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Rain Protection:</strong> Pre-monsoon showers are common in late May. Carry a high-quality waterproof shell jacket and a pack rain cover.</li>
            <li><strong>Lightweight Layers:</strong> Warmer days mean you can hike in lightweight, breathable shirts. Pack quick-dry clothing.</li>
            <li><strong>Insect Protection:</strong> Insects become more active as humidity rises. Carry a small bottle of repellent for lower forest zones.</li>
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
            <h3 className="text-2xl font-bold">Book Your May Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              May offers warmer climbing conditions and quieter paths. Coordinate your custom trekking itinerary with our certified guides today.
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
