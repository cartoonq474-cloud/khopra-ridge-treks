import React from "react";
import Link from "next/link";

export default function Page() {
  const segmentStats = [
    { label: "Segment Distance", value: "~9.5 km / 5.9 mi" },
    { label: "Est. Hiking Time", value: "5 - 6 hours" },
    { label: "Elevation Loss", value: "-1,460m / 4,790ft" },
    { label: "Terrain Profile", value: "Steep Dirt Forest Trails, Terrace Fields" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Segment Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge to Swanta Village Route Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Descend into the traditional valley. Read our guide covering segment distance, the steep downhill forest trails, joint strain prevention, and Swanta village lodges.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {segmentStats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-2 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Detail Description */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Segment Trail Details</h2>
          <p className="text-stone-600 leading-relaxed">The hike from Khopra Ridge (3,660m) to Swanta Village (2,200m) is a long, continuous descent. Leaving the barren alpine ridge behind, you head straight down the steep slopes and re-enter the lush forests. Pacing and trekking poles are highly recommended on this segment to prevent joint strain on your knees.
          </p>
          <p className="text-stone-600 leading-relaxed">As you descend lower, you will cross several small forest streams and open pastures before arriving at the traditional terraced agricultural fields of Swanta. This beautiful Magar village offers excellent community lodges that directly fund the local high school, providing a heartwarming stop after a challenging descent.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides walk the Khopra-Swanta descent trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan Your Trek Segments</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our core 9-day package. We arrange private jeeps to the trailhead and handle all community lodge accommodations along the quiet ridge trail.
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
