import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherStats = [
    { label: "Avg Daytime Temp", value: "14°C to 18°C (57°F to 64°F)" },
    { label: "Avg Night Temp", value: "4°C to 8°C (39°F to 46°F) at ridge" },
    { label: "Avg Rain/Snow Days", value: "12 - 15 Days" },
    { label: "Sky Clarity Index", value: "45% Morning Clarity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weather Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Weather in June
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan for early monsoon. Review average high/low temperatures, rainfall expectations, visibility index, and gear advice for June.
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

        {/* Why June section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why June is the Pre-Monsoon Transition Month</h2>
          <p className="text-stone-600 leading-relaxed">June marks the start of the summer and monsoon season in Nepal. The first half of June is a shoulder period where the weather is warm and humid, while the second half of the month typically brings the full arrival of monsoon rain.
          </p>
          <p className="text-stone-600 leading-relaxed">Trekking in June requires careful preparation for wet conditions. Lower sections of the trail, especially the forested paths between Birethanti, Ghandruk, Swanta, and Tadapani, become humid and are populated by leeches.
          </p>
          <p className="text-stone-600 leading-relaxed">While mountain visibility is lower due to building cloud cover, June is a beautiful time for lush green landscapes and roaring waterfalls along the trails. Morning views can still clear up occasionally, but afternoon rain is very common.
          </p>
        </div>

        {/* June Packing Additions */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key June Gear Additions</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Waterproof Shells:</strong>High-quality rain jacket and rain pants are absolutely essential.</li>
            <li><strong>Leech Protection:</strong>Pack salt, insect repellent, or specialized leech socks for the forest segments.</li>
            <li><strong>Pack Covers:</strong>A heavy-duty waterproof cover for your backpack is critical to keep your gear dry.</li>
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
            <h3 className="text-2xl font-bold">Book Your June Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">June is suitable for trekkers who enjoy lush, green scenery and quiet paths. Secure your permit-inclusive booking packages with our local team.
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
