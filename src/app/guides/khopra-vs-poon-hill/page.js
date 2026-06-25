import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonRows = [
    {
      metric: "Crowd Levels",
      khopra: "Extremely low. Peace and solitude on the trails.",
      poonhill: "Very high. Thousands of tourists climb Poon Hill for sunrise daily."
    },
    {
      metric: "Maximum Elevation",
      khopra: "3,660m (Khopra Ridge) / 4,660m (Khayer Lake side hike).",
      poonhill: "3,210m (Poon Hill summit)."
    },
    {
      metric: "Trek Duration",
      khopra: "Normally 6 to 9 days to complete the loop.",
      poonhill: "Short 3 to 4 days trek."
    },
    {
      metric: "Lodge Model",
      khopra: "Community co-op lodges (funding schools/clinics).",
      poonhill: "Commercial private tea houses with advanced menus."
    },
    {
      metric: "Dhaulagiri Views",
      khopra: "Direct, eye-level sightline across the deepest Kali Gandaki gorge.",
      poonhill: "Distant panoramic view of the Dhaulagiri range."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparisons</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge vs. Poon Hill Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Compare crowd densities, altitude differences, trail configurations, and lodge models between Poon Hill and the uncrowded Khopra Ridge.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Seclusion vs. Popularity</h2>
          <p className="text-stone-600 leading-relaxed">The **Poon Hill Trek** is Nepal&apos;s most popular short circuit. While it offers a spectacular sunrise over the Dhaulagiri and Annapurna massifs, its accessibility makes it extremely crowded during high seasons. The **Khopra Ridge Trek** serves as the ultimate alternative—offering closer mountain vistas, higher elevations, and complete trail peace.
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
                  <th className="px-6 py-4">Poon Hill Trek</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                    <td className="px-6 py-4">{row.khopra}</td>
                    <td className="px-6 py-4">{row.poonhill}</td>
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
              <h4 className="font-extrabold text-stone-950 text-base">1. Mountain Proximity &amp; Views</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Poon Hill (3,210m) offers a broad, sweeping panorama of the Himalayas, but the peaks are relatively far away. Khopra Ridge (3,660m) positions you right on the edge of a steep ridge directly facing Annapurna South and Dhaulagiri, giving you a dramatic, vertical, and close-up perspective of the snow walls.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">2. Trail Demands &amp; Physical Fitness</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Poon Hill is an entry-level trek suitable for children and seniors, following well-marked stone steps with frequent teahouses. Khopra Ridge requires solid stamina to handle the steep climb from Chhistibung (3,000m) to the Ridge (3,660m), and the challenging day hike to Khayer Lake (4,660m).
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">3. Social Responsibility &amp; Lodging</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Poon Hill has highly commercialized, privately owned lodges with electric blankets, Western menus, and heavy crowds. Khopra Ridge features community-owned lodges with basic amenities where 100% of profits fund local primary school salaries and rural wireless projects.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides walk both the Poon Hill and Khopra Ridge loops weekly. This comparison is maintained to help hikers pick routes matching their stamina and crowd tolerances.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book the Khopra Alternative Route</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to skip the crowds at Poon Hill and experience the raw wilderness of Khopra Ridge? Secure your permit-inclusive packages with our local team.
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
