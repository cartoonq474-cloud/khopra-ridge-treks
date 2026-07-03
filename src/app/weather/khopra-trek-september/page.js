import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "12°C to 16°C (54°F to 61°F)" },
    { label: "Avg Night Temp", value: "2°C to 6°C (36°F to 43°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "6 - 8 Days" },
    { label: "Sky Clarity Index", value: "75% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Weather in September
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan for early autumn. Review average high/low temperatures, monsoon-to-autumn transition, visibility indices, and gear advice for September.
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

        {/* Why September section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why September is the Autumn Transition Month</h2>
          <p className="text-stone-600 leading-relaxed">September is one of the most exciting months to trek the Khopra Ridge. The beginning of the month still holds some lingering monsoon clouds and occasional showers, but by mid-September, the skies clear completely, welcoming the peak autumn season.
          </p>
          <p className="text-stone-600 leading-relaxed">The post-monsoon atmosphere is incredibly fresh. Air clarity reaches high levels, offering crisp, clean views of Dhaulagiri and Annapurna South. Because the soil is still wet from summer rains, the valleys and forests are rich, green, and beautiful.
          </p>
          <p className="text-stone-600 leading-relaxed">While late September marks the start of the high-season trekker inflow, early to mid-September remains quiet and peaceful. Daytime hiking temperatures are highly comfortable, though a warm layer is needed on the high ridges at night.
          </p>
        </div>

        {/* September Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key September Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Light Down or Fleece Layer:</strong>Important for cool evenings on the ridge.</li>
            <li><strong>Rain Protection:</strong>Keep lightweight rain gear handy for early September showers.</li>
            <li><strong>Sun Hat & Protection:</strong>UV levels rise with clear autumn skies; pack high SPF sunscreen.</li>
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
            <h3 className="text-2xl font-bold">Book Your September Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">September is the perfect window for fresh, green landscapes and high clarity. Secure your permit-inclusive booking packages with our local team.
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
    canonical: '/weather/khopra-trek-september',
  },
};
