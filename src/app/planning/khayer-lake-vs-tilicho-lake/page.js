import React from "react";
import Link from "next/link";

export default function Page() {
  const comparison = [
    {
      metric: "Elevation",
      khayer: "4,660 m / 15,288 ft",
      tilicho: "4,919 m / 16,138 ft"
    },
    {
      metric: "Trail Difficulty",
      khayer: "Strenuous day-hike along grassy and rocky moraine ridges from Khopra Ridge.",
      tilicho: "Extremely challenging trail crossing active landslide and screen zones from Tilicho Base Camp."
    },
    {
      metric: "Crowd Density",
      khayer: "Very Low. You will often have the lake and shoreline temple entirely to yourself.",
      tilicho: "High. Located along the busy Annapurna Circuit trail, hosting hundreds of hikers daily in autumn."
    },
    {
      metric: "Lodge Proximity",
      khayer: "Sleep at Khopra Ridge (3,660m) - 4 hours walk from the lake.",
      tilicho: "Sleep at Tilicho Base Camp (4,150m) - 3 to 4 hours walk from the lake."
    },
    {
      metric: "Primary Views",
      khayer: "Close-up south face of Annapurna South, Nilgiri, Dhaulagiri ranges.",
      tilicho: "Tilicho Peak, Grande Barriere, and surrounding dry Manang valleys."
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
          <span className="text-stone-800">VS Tilicho Lake</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Lake Comparison</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake vs. Tilicho Lake Comparison
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Evaluate high-altitude destinations. Compare trail safety, elevations, landscape vistas, and crowd traffic between the Annapurna region&apos;s primary alpine lakes.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Two High Lakes: Different Worlds</h2>
          <p>
            For trekkers exploring the Annapurna conservation region, both Khayer Lake and Tilicho Lake stand out as premium high-altitude detours. While they share similar characteristics (both are sacred glacial lakes fed by towering peaks), the experience of getting to them and the trails themselves are completely different.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Feature-by-Feature Matrix</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Khayer Lake (Khopra)</th>
                  <th className="px-6 py-4">Tilicho Lake (Annapurna Circuit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-500">
                {comparison.map((comp, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-bold text-stone-900">{comp.metric}</td>
                    <td className="px-6 py-4 leading-relaxed">{comp.khayer}</td>
                    <td className="px-6 py-4 leading-relaxed">{comp.tilicho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Differences */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Which High Lake Should You Choose?</h3>
          <p>
            Your choice depends on your itinerary, group preferences, and physical comfort levels:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Choose Khayer Lake if:</strong> You want to avoid crowd congestion, prioritize community-run lodging networks, and prefer a progressive ridge hike with zero active landslide zones.
            </li>
            <li>
              <strong>Choose Tilicho Lake if:</strong> You are already planning the complete 14-day Annapurna Circuit, want to see a larger lake body, and are comfortable navigating exposed landslip scree areas.
            </li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Plan Your Custom Mountain Trail</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Contact our trip designers to customize your route. We specialize in mapping out offbeat loops tailored to your hiking history.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Consult a planner
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
