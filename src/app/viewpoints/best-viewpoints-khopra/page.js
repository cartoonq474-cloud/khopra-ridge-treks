import React from "react";
import Link from "next/link";

export default function Page() {
  const viewpoints = [
    {
      name: "Khopra Ridge",
      elevation: "3,660 m",
      crowd: "Extremely Low",
      highlights: "Direct Kali Gandaki Valley exposure, front-row Dhaulagiri I, Annapurna South backdrop."
    },
    {
      name: "Muldai Viewpoint",
      elevation: "3,637 m",
      crowd: "Low",
      highlights: "360-degree clear sweep, sunrise view of Annapurna massif, cleaner composition than Poon Hill."
    },
    {
      name: "Dobato Viewpoint",
      elevation: "3,420 m",
      crowd: "Low",
      highlights: "Beautiful tree line transitions, quiet forest clearing views of Annapurna South."
    },
    {
      name: "Poon Hill (Optional)",
      elevation: "3,210 m",
      crowd: "High (300+ people daily)",
      highlights: "Classic lookout point. Highly crowded, accessed on the route descent variation."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparison</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Best Viewpoints on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Where are the ultimate visual lookouts? Compare heights, crowd factors, and highlights of the key viewpoints along the circuit.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Viewpoint Comparison Hub</h2>
          <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Viewpoint</th>
                  <th className="px-6 py-4">Elevation</th>
                  <th className="px-6 py-4">Crowds</th>
                  <th className="px-6 py-4">Key Highlight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs text-stone-600">
                {viewpoints.map((vp, i) => (
                  <tr key={i} className="hover:bg-stone-50/50">
                    <td className="px-6 py-4 font-bold text-stone-900">{vp.name}</td>
                    <td className="px-6 py-4">{vp.elevation}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-600">{vp.crowd}</td>
                    <td className="px-6 py-4">{vp.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Muldai vs Poon Hill */}
        <div className="mt-16 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Why We Prefer Muldai Viewpoint Over Poon Hill</h3>
          <p>While Poon Hill is world-famous, it is heavily commercialized and crowded. Trekkers stand shoulder-to-shoulder with hundreds of others. Muldai Viewpoint, located just a 30-minute walk from Dobato, offers similar or better angles of the Annapurna and Dhaulagiri ranges with a fraction of the foot traffic. 
          </p>
          <p>Muldai provides a more natural, wild, and quiet sunrise experience, making it a favorite for photography and peaceful reflection.
          </p>
        </div>

        {/* Detailed Viewpoint & Photography Guides */}
        <div className="mt-16 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Detailed Viewpoint &amp; Photography Guides</h3>
          <p className="text-stone-600 text-sm leading-relaxed">Read our deep-dives on when to hike, how to photograph, and what safety checks to keep in mind at these lookouts:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-emerald-600">
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Khopra Ridge Viewpoint Guide
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/viewpoints/sunrise-at-khopra-ridge" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Sunrise at Khopra Ridge (Timing &amp; Alpenglow)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/viewpoints/sunset-at-khopra-ridge" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Sunset at Khopra Ridge (Valley Shadows)
              </Link>
            </li>
            <li className="p-4 bg-white border border-stone-200 rounded-2xl hover:shadow-sm transition">
              <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 transition flex items-center gap-2">
                &rarr; Best Photography Spots &amp; Gear Tips
              </Link>
            </li>
          </ul>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Discover Quiet Lookouts</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Join our guided departures to explore the quieter viewpoints of the Annapurnas. Book your secure permit-inclusive package today.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
