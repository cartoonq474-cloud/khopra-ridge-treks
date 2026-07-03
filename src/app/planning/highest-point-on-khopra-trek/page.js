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
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Highest Point</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Altitude Information</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Highest Point on the Khopra Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the elevations. A comprehensive breakdown of Khopra Ridge (3,660m) and the high-altitude pilgrimage site of Khayer Lake (4,660m).
          </p>
        </div>

        {/* Elevation Comparison Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Overnight High Point</span>
            <h3 className="text-2xl font-black text-stone-950 mt-2">Khopra Ridge</h3>
            <span className="text-3xl font-black text-emerald-700 mt-2 block">3,660m / 12,007ft</span>
            <p className="mt-4 text-xs text-stone-500 leading-relaxed">This is the highest elevation where you will spend the night. Acclimatization is key before arriving here, which is why we route groups through Ghandruk and Dobato first.
            </p>
          </div>
          <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600">Maximum Day Ascent</span>
            <h3 className="text-2xl font-black text-stone-950 mt-2">Khayer Lake</h3>
            <span className="text-3xl font-black text-rose-600 mt-2 block">4,660m / 15,288ft</span>
            <p className="mt-4 text-xs text-stone-500 leading-relaxed">The highest point reached on the trek. This is a challenging side-trip starting early in the morning from Khopra Ridge. You return to the ridge (3,660m) to sleep, applying the classic climb high, sleep low method.
            </p>
          </div>
        </div>

        {/* Altitude Pacing & Safety */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Preparing for the 4,660m Threshold</h2>
          <p>Reaching 4,660 meters at Khayer Lake puts you in high-altitude territory, where the effective oxygen level is roughly 57% of that at sea level. Because this is a single-day excursion, your body will feel the change in pressure and oxygen density.
          </p>
          <p>Acclimatization starts long before this day. Sleeping at Dobato (3,432m) or Bayeli (3,432m) on the nights prior prepares your respiratory system. During the hike to the lake, maintain a slow, steady pace—often referred to locally as {"\"Bistari, Bistari\""} (slowly, slowly).
          </p>
        </div>

        {/* Essential Safety Protocol */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Critical High-Altitude Safety Protocols</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-3">
            <li>
              <strong>Recognize AMS Symptoms:</strong>Mild headaches, slight dizziness, and mild loss of appetite are common warnings. If symptoms worsen to include severe vomiting, confusion, or loss of balance (Ataxia), you must descend immediately.
            </li>
            <li>
              <strong>Hydration Strategy:</strong>Drink 4 to 5 liters of water daily. Dehydration mimics and accelerates Acute Mountain Sickness (AMS). Avoid alcohol and sleeping pills while at high elevations.
            </li>
            <li>
              <strong>No Shelter:</strong>The trail between the ridge and the lake has no lodges, shops, or escape huts. If weather patterns turn bad, you must immediately turn back to Khopra Ridge.
            </li>
            <li>
              <strong>Emergency Evacuation:</strong>In the event of severe AMS, local guides will organize a manual stretcher descent to Swanta or coordinate a helicopter evacuation back to Pokhara or Kathmandu.
            </li>
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
            <h3 className="text-2xl font-bold">Secure a Safe Altitude Ascent</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book your guided trek with our experienced leaders. We carry oxygen monitors and first-aid kits, and we enforce conservative pacing models for all climbs.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire with experts
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/planning/highest-point-on-khopra-trek',
  },
};
