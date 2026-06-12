"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const seniorTips = [
    {
      title: "1. Gentle, Custom Pace Allocation",
      desc: "Our itineraries are designed with moderate walking times (4 to 5 hours daily). Senior trekkers can walk at a slow, comfortable pace ('bistari' in Nepali) to keep their heart rates stable and ensure safety."
    },
    {
      title: "2. Porter Support & Daypack Trekking",
      desc: "We recommend senior hikers use porter support. A porter carries your main duffle bag (up to 12.5kg per trekker), leaving you to carry only a light daypack containing water, medications, and extra layers to prevent joint strain."
    },
    {
      title: "3. Health and Altitude Monitoring",
      desc: "High altitude (staying at 3,660m on the ridge) requires careful monitoring. Guides carry pulse oximeters and first-aid kits, checking oxygen saturation levels daily to ensure everyone is acclimatizing safely."
    },
    {
      title: "4. Emergency Evacuation Infrastructure",
      desc: "While the trail is offbeat, emergency helicopter evacuation is highly organized within the Annapurna Conservation Area. In the event of health issues, our guides coordinate directly with your travel insurance to arrange emergency rescue."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Seniors Trekking Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek for Seniors
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Planning a trip to the Himalayas later in life? Read our expert safety advice, pacing recommendations, and support details for senior trekkers.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Is the Khopra Route Suitable for Seniors?</h2>
          <p className="text-stone-600 leading-relaxed">
            Absolutely. While the Khopra Ridge Trek reaches high elevations, the relatively short daily distances and the warmth of the community lodges make it an excellent choice for active seniors. There are no technical sections, and the trails consist mainly of dirt pathways and stone steps.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The key to a successful trek is a **flexible itinerary** and **extra support**. We advise seniors to choose a guided tour with dedicated porters, and to take the hike to the high-altitude Khayer Lake (4,660m) as a completely optional excursion—meaning you can relax and enjoy the 360-degree views from the ridge lodge at 3,660m instead.
          </p>
        </div>

        {/* Guidelines for Seniors */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Senior Comfort &amp; Safety Guidelines</h2>
          <div className="space-y-6">
            {seniorTips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Preparations */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Recommended Preparation and Gear</h3>
          <ul className="space-y-3 text-xs leading-relaxed list-disc pl-5">
            <li>
              <strong>Use Trekking Poles:</strong> Poles are essential for reducing impact on your knees and hips by up to 25%, particularly during the steep descent from Khopra Ridge down to Swanta village.
            </li>
            <li>
              <strong>Prior Medical Clearance:</strong> Consult your doctor beforehand, especially if you have pre-existing cardiovascular or joint conditions, and secure travel insurance covering medical evacuation up to 5,000m.
            </li>
            <li>
              <strong>Pack Warm Layers:</strong> Mountain temperatures drop quickly at night. Bring high-quality thermals, a down jacket, and a sleeping bag rated to -10°C to stay comfortable in the lodges.
            </li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We specialize in guiding multi-generational groups. Our itineraries include built-in rest periods and custom pacing to ensure senior trekkers can walk safely and comfortably.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan a Comfortable Mountain Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Contact us today to customize a 9-day Khopra Ridge itinerary with extra rest stops, personal porters, and experienced guides.
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
