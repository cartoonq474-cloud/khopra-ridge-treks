import React from "react";
import Link from "next/link";

export default function Page() {
  const segments = [
    {
      title: "Stage 1: The Ridge Flank Traverse",
      details: "Hike along the open, grassy ridge flank from the community lodge. The trail is relatively flat for the first 2 kilometers, offering clear views of the valley below.",
      distance: "2.5 km",
      time: "1 Hour"
    },
    {
      title: "Stage 2: The Scree & Moraine Climb",
      details: "Enter the rocky glacial moraine fields. The trail climbs steadily, crossing several minor streams and loose shale scree slopes. Trail markers consist of stone cairns—look out for them.",
      distance: "3.5 km",
      time: "2.5 Hours"
    },
    {
      title: "Stage 3: The Steep Valley Ascent",
      details: "The final, steepest push up the valley flank to the lake plateau. The terrain is rocky and exposed, with stone stairs built into the final grassy slopes.",
      distance: "2.0 km",
      time: "1.5 Hours"
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
          <span className="text-stone-800">Route Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Navigation</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Lake Route & Trail Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Step-by-step route mapping. Learn how to navigate the alpine terrain, stream crossings, and moraine scree slopes from Khopra Ridge to the lake.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Navigating the High Plateau Trail</h2>
          <p>
            The route from Khopra Ridge to Khayer Lake is a demanding, high-altitude day hike. It covers a round-trip distance of 16 kilometers (9.9 miles) with a net elevation gain of 1,000 meters. The trail is rustic and lacks the heavy signage found on the main Poon Hill route.
          </p>
          <p>
            Because the trail climbs through remote pastureland and glacial moraines, understanding the distinct stages of the route is essential for safety, timing, and navigation.
          </p>
        </div>

        {/* Route Stages */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">The Three Main Trail Stages</h3>
          <div className="space-y-6">
            {segments.map((seg, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{seg.title}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {seg.distance} | {seg.time}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">{seg.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tips */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Critical Navigation Tips</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-404 space-y-3">
            <li>
              <strong>Look for Cairns:</strong> In the rocky moraine sections, the dirt trail can fade. Follow the stacked stone towers (cairns) placed by local guides.
            </li>
            <li>
              <strong>Offline GPS Mapping:</strong> Carry an offline GPS app (such as Maps.me or Gaia GPS) with pre-loaded maps of the Annapurna conservation area. Fog can drop visibility to under 10 meters, making navigation extremely difficult without GPS coordinates.
            </li>
            <li>
              <strong>Hire a Guide:</strong> If you are hiking during the shoulder season (early spring or late winter) when snow covers the path, hiring a local guide is mandatory for safety.
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
            <h3 className="text-2xl font-bold">Trek with Certified Navigators</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guides are trained local residents who know every corner, shortcut, and seasonal weather warning on the Khayer Lake trail.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
