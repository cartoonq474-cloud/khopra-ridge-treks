import React from "react";
import Link from "next/link";

export default function Page() {
  const poonHillSteps = [
    {
      title: "The Sunrise Climb",
      desc: "From Ghorepani (2,860m), you wake up at 5:00 AM to climb stone staircases for 45 minutes to reach Poon Hill (3,210m) just before the sun breaks over the horizon."
    },
    {
      title: "View Comparison (Poon Hill vs Muldai)",
      desc: "Poon Hill offers a wider, classic view of Annapurna I (8,091m) and Machhapuchhre. However, Muldai Viewpoint (3,637m) is higher, less crowded, and provides a closer angle of the Annapurna South faces."
    },
    {
      title: "Gear Checklist for the Lookout",
      desc: "A bright headlamp is essential for the pre-dawn climb. Bring thermal gloves, a beanie, a windproof shell jacket, and some cash to buy hot coffee or tea at the top."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Variations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Trek via Poon Hill
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">How to integrate the famous sunrise lookout into your itinerary. Compare visual perspectives, trail pacing, and pre-dawn preparation tips.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Integrating Poon Hill</h2>
          <p>If you want to experience the classic Poon Hill sunrise while enjoying the quiet forest paths of the community loop, you can easily integrate Poon Hill into your Khopra itinerary. This is typically done on the final days of the loop (coming down from Swanta to Ghorepani) or at the very beginning of the trek.
          </p>
        </div>

        {/* Details list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Poon Hill Details</h3>
          <div className="space-y-6">
            {poonHillSteps.map((item, i) => (
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
            <h3 className="text-2xl font-bold">Plan Your Scenic Route</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided 9-day Poon Hill and Khopra combo package. We secure your lodge spaces, permits, and provide experienced local pacing.
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
