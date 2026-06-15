"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const comparison = [
    {
      name: "Khopra Ridge Trek",
      duration: "6 - 9 Days",
      altitude: "3,660m (Lake: 4,660m)",
      crowds: "Very Low",
      highlights: "Direct Dhaulagiri & Annapurna views, sacred lake hike, local community-owned lodge network."
    },
    {
      name: "Poon Hill Trek",
      duration: "4 - 5 Days",
      altitude: "3,210m",
      crowds: "Extremely High",
      highlights: "Short loop, sunrise panoramic views, well-developed tea houses, very accessible for beginners."
    },
    {
      name: "Mardi Himal Trek",
      duration: "5 - 7 Days",
      altitude: "4,500m",
      crowds: "Moderate to High",
      highlights: "Ridge walk directly below Machhapuchhre (Fishtail), cozy forest settings, rapid altitude profile."
    },
    {
      name: "Annapurna Base Camp",
      duration: "10 - 12 Days",
      altitude: "4,130m",
      crowds: "High",
      highlights: "Deep sanctuary bowl hike, walk below 8,000m walls, historic and highly classic trail."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Route Overview</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Intelligence</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Route Overview
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand the geographical setting, regional context, and unique design features of the offbeat Khopra Ridge community trail.
          </p>
        </div>

        {/* Geographical Context */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Geographical Position</h2>
          <p>
            The Khopra Ridge Trek lies in the heart of the Annapurna Conservation Area Project (ACAP) region in north-central Nepal. The ridge itself sits directly opposite the massive Dhaulagiri range, separated by the Kali Gandaki Gorge—the deepest gorge in the world.
          </p>
          <p>
            Unlike the valley trails that lead to Annapurna Base Camp, Khopra is a high-elevation ridge trek. It offers a unique perspective of Annapurna South, which towers directly above the trail, and Nilgiri, Varaha Shikhar, and Dhaulagiri across the valley.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">How Khopra Compares to Other Annapurna Treks</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4">Trek Route</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Max Altitude</th>
                  <th className="px-6 py-4">Traffic Level</th>
                  <th className="px-6 py-4">Key Highlight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-500">
                {comparison.map((c, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-bold text-stone-900">{c.name}</td>
                    <td className="px-6 py-4">{c.duration}</td>
                    <td className="px-6 py-4">{c.altitude}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.crowds === "Very Low" 
                          ? "bg-emerald-50 text-emerald-700" 
                          : c.crowds === "Moderate to High"
                            ? "bg-amber-50 text-amber-700"
                            : c.crowds === "High"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-red-50 text-red-700"
                      }`}>
                        {c.crowds}
                      </span>
                    </td>
                    <td className="px-6 py-4 leading-relaxed">{c.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Features */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Distinct Features of the Khopra Circuit</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Community Lodge Network:</strong> All lodges along the Khopra Ridge circuit (except Ghandruk and Ghorepani) are owned and operated by local village communities. All profits are funnelled directly into local high schools, trail building, and health clinics.
            </li>
            <li>
              <strong>Pristine Rhododendron Ecosystem:</strong> The sections between Tadapani, Dobato, and Swanta boast some of the oldest and largest rhododendron forests in Nepal, turning the landscape pink, red, and white during spring (March/April).
            </li>
            <li>
              <strong>Stunning Sunrise Angles:</strong> Because you sleep directly on the high ridge (3,660m), you do not need to wake up at 4:00 AM to climb to a viewpoint. You can view the golden sunrise over Dhaulagiri and Nilgiri directly from the community dining hall windows.
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
            <h3 className="text-2xl font-bold">Plan an Off-the-Beaten-Path Adventure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Choose the Khopra Ridge Trek to experience the majestic mountains of Nepal without the tourist traffic. Contact us to design a custom trekking layout.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Get started
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
