import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/weather/best-time-to-trek" className="hover:text-emerald-600 transition-colors">Weather Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Winter Season</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cold Season</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Winter Trekking on Khopra Ridge (Dec - Feb)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Snowy summits and crowd-free trails. A detailed guide to winter safety, freezing ridge nights, required down gear, and clear morning views.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Quiet, Frozen Wonderland</h2>
          <p>Winter (running from December through February) brings freezing temperatures and heavy snowfalls to the high ridges of the Annapurna conservation area. Pushing up to Khopra Ridge (3,660m) and Khayer Lake (4,660m) during this time is physically demanding, requiring cold-weather gear and careful safety planning.
          </p>
          <p>However, for experienced and fit hikers, winter offers spectacular advantages: the morning skies are incredibly blue and clear, there are no crowds on the paths, and you can enjoy the ultimate experience of wilderness isolation.
          </p>
        </div>

        {/* Monthly breakdown */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Winter Month-by-Month Profile</h3>
          <div className="space-y-4 text-xs text-stone-600">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">December: Crisp and Dry Cold</h4>
              <p className="mt-2 leading-relaxed">Early winter. Trails are typically dry and clear of heavy snow drift. Night temperatures drop to -10°C on the ridge. Morning visibility is outstanding.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">January: Deep Winter & Heavy Snow</h4>
              <p className="mt-2 leading-relaxed">The coldest month. High risk of heavy snow drift blockades on the trail between Chhistibung and the ridge. Microspikes are required. Temperatures can plummet to -15°C at night.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">February: Late Winter Transitions</h4>
              <p className="mt-2 leading-relaxed">High winds and snow remain on the heights, but lower elevations start warming up. Great month for clear mountain panoramas, though trails remain quiet.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Winter Gear */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Essential Winter Gear List</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-404 space-y-2.5">
            <li><strong>Four-Season Sleeping Bag:</strong>Rated down to -20°C. High-altitude community lodges are unheated at night, making a warm bag critical.</li>
            <li><strong>Heavy Down Jacket:</strong>A high-loft down coat to wear during evenings at the ridge.</li>
            <li><strong>Microspikes & Gaiters:</strong>Mandatory for walking on icy or snowy trail sections safely without slipping.</li>
            <li><strong>Thermal Undergarments:</strong>Multi-layer merino wool thermals for sleeping and climbing.</li>
          </ul>
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
            <h3 className="text-2xl font-bold">Plan a Secure Winter Climb</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We employ professional guides equipped with snow safety gear, GPS trackers, and local rescue plans to coordinate winter departures.
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
    canonical: '/weather/winter-season-khopra',
  },
};
