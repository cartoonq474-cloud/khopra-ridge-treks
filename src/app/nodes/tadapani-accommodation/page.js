import React from "react";
import Link from "next/link";

export default function Page() {
  const lodgeInfo = [
    {
      label: "Room Configuration",
      value: "Mainly twin-bed wood-paneled rooms. Walls are thin, so earplugs are recommended for a quiet night."
    },
    {
      label: "Average Cost",
      value: "$5 - $8 USD per night for a double room (conditional upon eating dinner and breakfast at the lodge)."
    },
    {
      label: "Heating System",
      value: "No room heaters. The main dining hall features a wood-burning iron stove lit every evening at 6:00 PM."
    },
    {
      label: "Bathroom Standards",
      value: "Mostly shared bathrooms on a corridor basis. Cold tap water; hot buckets are available for $2-$3 USD."
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
          <span className="text-stone-800">Tadapani Accommodation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Forest Node lodging</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Tadapani Accommodation Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Guide to the forest teahouses. Learn what to expect regarding pricing, heating systems, and facilities in the dense forests of Tadapani.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Rustic Forest Lodging at Tadapani</h2>
          <p>Perched at 2,630 meters inside deep rhododendron and oak canopy forests, Tadapani is a key junction connecting trails to Ghorepani, Ghandruk, and the offbeat paths to Dobato. Because of its forest setting, lodging here is more rustic and simple compared to Ghandruk.
          </p>
          <p>Lodges in Tadapani are designed to support early departures. The main attraction is the central dining hall, which fills with warmth in the evenings as trekkers gather around the fireplace to share trail stories and eat piping-hot Dal Bhat.
          </p>
        </div>

        {/* Lodge Info Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Accommodation Specifications</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200 bg-white">
            <div className="divide-y divide-stone-100 text-xs">
              {lodgeInfo.map((info, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="sm:w-1/3 font-bold text-stone-950 uppercase tracking-wider">{info.label}</div>
                  <div className="sm:w-2/3 text-stone-500 leading-relaxed">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important notices */}
        <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important: High Season Room Availability</h3>
          <p className="text-xs leading-relaxed font-medium">Tadapani is a major hub on the classic Annapurna trail loops. During the peak seasons (October/November and March/April), rooms can sell out by early afternoon. We highly recommend booking through an agency or having your guide phone ahead from Ghandruk to ensure you secure a room before arrival.
          </p>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Secure Pre-Booked Forest Lodges</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Skip the stress of high-season room rushes. We manage advance booking for the cleanest, best-positioned teahouses in Tadapani.
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
