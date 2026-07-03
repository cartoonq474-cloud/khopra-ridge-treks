import React from "react";
import Link from "next/link";

export default function Page() {
  const downloads = [
    {
      name: "Khopra Ridge Full 9-Day Loop (GPX File)",
      size: "420 KB",
      desc: "Contains absolute route tracks, daily teahouse waypoints, water stops, and elevation markers for the complete loop starting from Kimche."
    },
    {
      name: "Sacred Khayer Lake Day Hike GPX Track",
      size: "180 KB",
      desc: "High-density GPS track mapping the demanding 15.0 km day hike from Khopra Ridge (3,660m) to Khayer Lake (4,660m)."
    },
    {
      name: "Muldai Sunrise Viewpoint Track",
      size: "85 KB",
      desc: "GPS track outlining the early morning climb from Dobato forest cabins to Muldai Viewpoint (3,637m)."
    },
    {
      name: "Khopra Ridge Topographic Trail Map (PDF)",
      size: "4.2 MB",
      desc: "Printable high-resolution topographic map showing contour lines, village nodes, landslide bypass trails, and checkposts."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Assets</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">GPX Tracks &amp; Topographic Maps Download
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Download navigation files. Access offline GPX tracks, elevation contours, waypoint guides, and printable trail maps for offline smartphone navigation.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Offline Navigation Security</h2>
          <p className="text-stone-600 leading-relaxed">While local trails are generally well-marked, high-altitude ridges are subject to sudden mist, fog, and snow cover that can make pathfinding extremely difficult. Carrying offline navigation files on your smartphone (using apps like maps.me, Gaia GPS, or OnX) is highly recommended for independent hikers.
          </p>
        </div>

        {/* Download items */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Available Navigation Assets</h3>
          <div className="space-y-6">
            {downloads.map((dl, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{dl.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">File Size: {dl.size}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">
                  {dl.desc}
                </p>
                <div className="mt-4">
                  <span className="text-xs font-bold text-stone-900 bg-stone-100 px-4 py-2 rounded-xl hover:bg-stone-200 cursor-pointer inline-block transition">Download File ↓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides record and update these GPX trails seasonally using high-precision Garmin satellite receivers to verify bypass paths around active landslides.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Supported Tour Loop</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to skip the navigation stress entirely? Our packages include professional licensed local guides to navigate the trail safely.
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
    canonical: '/planning/gpx-download',
  },
};
