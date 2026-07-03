import React from "react";
import Link from "next/link";

export default function Page() {
  const seasons = [
    {
      name: "Spring (March - May)",
      details: "Day: 5°C to 12°C | Night: -8°C to -2°C",
      visibility: "Excellent morning skies. Afternoon clouds build rapidly, occasionally bringing light snow showers. The lake ice typically thaws by mid-April, exposing the clear turquoise water."
    },
    {
      name: "Autumn (September - November)",
      details: "Day: 2°C to 8°C | Night: -12°C to -4°C",
      visibility: "Peak visibility. Dry, stable atmosphere. Golden sunrises illuminate the south face of Annapurna South. Freezing wind gusts are common along the exposed ridge routes."
    },
    {
      name: "Monsoon (June - August)",
      details: "Day: 8°C to 15°C | Night: 2°C to 6°C",
      visibility: "Thick fog regularly blankets the lake, making path navigation dangerous. Rain showers are constant, and mudslides are possible along the lower Swanta segments. Sighting the lake is rare."
    },
    {
      name: "Winter (December - February)",
      details: "Day: -5°C to 3°C | Night: -20°C to -10°C",
      visibility: "The lake is completely frozen and covered in deep snow. High winds and sub-zero temperatures make the route highly challenging and only suitable for mountaineering expeditions."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Weather</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Alpine Climate</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khayer Lake Weather & Seasonal Visibility
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan your alpine climb. A complete guide to freezing temperatures, visibility cycles, and monsoon fog patterns at the 4,660m glacial lake.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Harsh High-Altitude Climate</h2>
          <p>Sitting at 4,660 meters (15,288 feet) at the immediate base of Annapurna South, Khayer Lake experiences a high-alpine climate. The weather here is significantly colder, windier, and more unpredictable than at the overnight ridge lodge (3,660m).
          </p>
          <p>Because there are no settlements, shops, or escape shelters between the ridge and the lake, check the local weather forecast and start early in the morning to avoid high afternoon winds and sudden whiteouts.
          </p>
        </div>

        {/* Weather seasons */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Seasonal Weather Profiles</h3>
          <div className="space-y-6">
            {seasons.map((se, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{se.name}</h4>
                <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{se.details}</span>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{se.visibility}</p>
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
            <h3 className="text-2xl font-bold">Plan a Guided Summit Day</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides study real-time weather forecasts and carry satellite communicators to ensure a safe, successful summit day at Khayer Lake.
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

export const metadata = {
  alternates: {
    canonical: '/planning/khayer-lake-weather',
  },
};
