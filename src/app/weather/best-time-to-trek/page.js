import React from "react";
import Link from "next/link";

export default function Page() {
  const seasons = [
    {
      name: "Autumn (Sept - Nov)",
      rating: "Best Season (5/5)",
      temp: "10°C to 18°C (Day) | -5°C to 5°C (Night)",
      desc: "Brilliant clear blue skies, dry trails, and peak mountain visibility. Ideal conditions for photography and high climbs, though lodges are busy."
    },
    {
      name: "Spring (March - May)",
      rating: "Highly Recommended (4.5/5)",
      temp: "12°C to 20°C (Day) | -2°C to 8°C (Night)",
      desc: "Mild climbing temperatures and the spectacular rhododendron canopy bloom. Warm hiking days with occasional afternoon clouds."
    },
    {
      name: "Winter (Dec - Feb)",
      rating: "For Fit/Experienced (3/5)",
      temp: "2°C to 10°C (Day) | -15°C to -5°C (Night)",
      desc: "Freezing night temperatures and potential snow blocks on high ridges. However, mornings are crystal-clear and trails are completely crowd-free."
    },
    {
      name: "Monsoon (June - Aug)",
      rating: "Not Recommended (1.5/5)",
      temp: "15°C to 22°C (Day) | 5°C to 12°C (Night)",
      desc: "Heavy downpours, muddy trails, high humidity, and leeches in the forest sections. Mountain views are rare due to constant cloud cover."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-stone-800">Best Time to Trek</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Season Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Best Time to Do the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Find your perfect window. A detailed seasonal comparison of weather, trail conditions, mountain views, and flowering blooms.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Choosing Your Trekking Window</h2>
          <p>The Khopra Ridge Trek is a high-altitude loop that reaches 3,660 meters at the ridge and climbs to 4,660 meters at Khayer Lake. Because you sleep on high, exposed ridges, your trekking experience is highly dependent on seasonal weather patterns.
          </p>
          <p>Whether you prioritize clear mountain visibility, mild hiking temperatures, rhododendron blossoms, or crowd-free trails, check out our seasonal summary below to find the layout that fits your travel style.
          </p>
        </div>

        {/* Seasons comparison */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Seasonal Performance Index</h3>
          <div className="space-y-6">
            {seasons.map((se, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{se.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {se.rating}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Averages:</strong> {se.temp}</p>
                  <p><strong>Trail Summary:</strong> {se.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Links Directory */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Detailed Monthly Weather Guides</h3>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/weather/khopra-trek-january" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>January</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-february" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>February</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-march" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>March</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-april" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>April</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-may" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>May</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-june" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>June</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-july" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>July</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-august" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>August</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-september" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>September</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-october" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>October</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-november" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>November</span>
              <span>→</span>
            </Link>
            <Link href="/weather/khopra-trek-december" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>December</span>
              <span>→</span>
            </Link>
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
            <h3 className="text-2xl font-bold">Secure Your Departure Date</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Ready to plan your trek? Contact our team to match your calendar availability with the most stable meteorological weather windows.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Consult weather team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/weather/best-time-to-trek',
  },
};
