import React from "react";
import Link from "next/link";

export default function Page() {
  const ghandrukAdvantages = [
    {
      title: "1. Cultural Immersion",
      desc: "Ghandruk is the largest Gurung village in the Annapurna region. You can visit the traditional Gurung museum, walk stone alleys, and stay in comfortable tea houses with hot solar showers."
    },
    {
      title: "2. Gradual Acclimatization",
      desc: "Starting at Ghandruk (1,940m) instead of climbing straight to high nodes gives your lungs an extra day to adjust, ensuring a safer ascent to Bayeli (3,432m)."
    },
    {
      title: "3. Direct View of Machhapuchhre",
      desc: "Ghandruk offers one of the cleanest angles of Machhapuchhre (Fishtail) and Annapurna South. Photographers will love framing the slate roofs against the peaks."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Variations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Trek via Ghandruk
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">The classic entry configuration. Learn why entering the circuit via the Gurung cultural capital of Ghandruk provides optimal pacing and rich heritage experiences.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Standard Entry Route</h2>
          <p>Entering the Khopra Ridge Trek via Ghandruk is the most popular route configuration. After driving from Pokhara to the trailhead at Kimche, you hike up stone steps to Ghandruk village. From there, the trail leads up through dense oak and rhododendron forests to Tadapani and Dobato, gradually introducing your body to higher elevations.
          </p>
        </div>

        {/* Advantages list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Why We Recommend the Ghandruk Entry</h3>
          <div className="space-y-6">
            {ghandrukAdvantages.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Start Your Ghandruk Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided 9-day Ghandruk-entry package. We arrange private jeep transfers from Pokhara directly to Kimche to maximize your comfort.
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

export const metadata = {
  alternates: {
    canonical: '/planning/khopra-trek-via-ghandruk',
  },
};
