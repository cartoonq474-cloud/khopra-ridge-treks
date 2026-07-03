import React from "react";
import Link from "next/link";

export default function Page() {
  const ghorepaniDetails = [
    {
      title: "Poon Hill Sunrise First",
      desc: "Entering via Ghorepani allows you to climb Poon Hill (3,210m) on Day 3 of the trek, checking off this classic Himalayan lookout before heading to the quieter Khopra trails."
    },
    {
      title: "The Ghorepani-to-Swanta Descent",
      desc: "After Ghorepani, you descend a steep forest valley to the Swanta River, arriving at the Magar village of Swanta (2,214m). This drop provides a comfortable breathing break."
    },
    {
      title: "The Reverse Climb to Khopra",
      desc: "From Swanta, the trail climbs straight up to Chhistibung and Khopra Ridge. This is a sustained, steep uphill climb that requires solid leg endurance."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Variations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Trek via Ghorepani
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">The classic lookout entry. Explore the reverse route configuration entering via the major teahouse hub of Ghorepani before heading onto the quieter community circuit.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Entering via the Poon Hill Gateway</h2>
          <p>Trekkers who wish to combine the famous sunrise at Poon Hill with the wild seclusion of Khopra Ridge often choose the Ghorepani entry route. You start hiking at Nayapul, climbing the famous stone steps of Ulleri to Ghorepani. After watching the sunrise from Poon Hill, you bypass the standard return loop, heading north down into the valley towards Swanta village and up to the high ridge eco-lodge.
          </p>
        </div>

        {/* Details list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Route Features</h3>
          <div className="space-y-6">
            {ghorepaniDetails.map((item, i) => (
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
            <h3 className="text-2xl font-bold">Plan Your Ghorepani Entry</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided 9-day Ghorepani-entry package today. We guarantee your room bookings and permits for a safe, comfortable experience.
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
    canonical: '/planning/khopra-trek-via-ghorepani',
  },
};
