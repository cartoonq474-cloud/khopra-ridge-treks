import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonRows = [
    {
      metric: "Lodge Framework",
      khopra: "Community eco-lodges funded by cooperative networks.",
      mohare: "Community homestays and community-run eco-lodges."
    },
    {
      metric: "Maximum Altitude",
      khopra: "3,660m (Ridge) / 4,660m (Sacred Khayer Lake side-hike).",
      mohare: "3,300m (Mohare Danda summit)."
    },
    {
      metric: "Annapurna View Angle",
      khopra: "Direct view of Dhaulagiri, Annapurna South, and Nilgiri.",
      mohare: "Wide panorama of Annapurna range, Dhaulagiri, and Machhapuchhre."
    },
    {
      metric: "Trek Difficulty",
      khopra: "Moderate to strenuous (steep ridge climbs and high altitude).",
      mohare: "Easy to moderate (gentle terrain, family-friendly pacing)."
    },
    {
      metric: "Trail Length",
      khopra: "6 to 9 days to complete the loop.",
      mohare: "4 to 5 days short eco-loop."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparisons</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge vs. Mohare Danda Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Compare two community-based, low-crowd trekking circuits in the Annapurna to choose your perfect community eco-trail.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Battle of the Community Circuits</h2>
          <p className="text-stone-600 leading-relaxed">
            Both **Khopra Ridge** and **Mohare Danda** are community-owned eco-trekking initiatives designed to channel tourism income directly to local villages. They both avoid the heavy commercial crowd of Poon Hill. However, Mohare Danda is lower, gentler, and shorter, while Khopra Ridge is a higher, more strenuous alpine trail that goes up to 4,660m.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Comparison Matrix</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Khopra Ridge Trek</th>
                  <th className="px-6 py-4">Mohare Danda Trek</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                    <td className="px-6 py-4">{row.khopra}</td>
                    <td className="px-6 py-4">{row.mohare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed differences */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Detailed Breakdown</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">1. Elevation &amp; Acclimatization</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mohare Danda reaches a maximum elevation of 3,300m, presenting virtually no risk of Acute Mountain Sickness (AMS). It is an ideal warm-up trek. Khopra Ridge goes up to 3,660m, with a steep day climb to Khayer Lake at 4,660m, requiring proper acclimatization and hydration.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">2. Trail Scenery &amp; Vistas</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mohare Danda runs parallel to Poon Hill, offering a similar wide landscape panorama from its summit ridge. Khopra Ridge brings you much closer to the Dhaulagiri massifs and puts you right on the edge of the deep Kali Gandaki valley.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">3. Trip Pacing &amp; Group Profile</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mohare Danda is perfect for families, beginners, and senior trekkers who prefer short daily stages (3-4 hours) and comfortable homestays. Khopra Ridge is best suited for fit hikers who enjoy strenuous climbs and high-altitude challenges.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We operate community tours on both trails. This comparison is maintained in cooperation with the local village tourism networks of Swanta and Nangi.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your Eco-Trail Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to combine both circuits into a custom Mohare-Khopra super-loop? Contact our Pokhara office to customize your trekking package.
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
