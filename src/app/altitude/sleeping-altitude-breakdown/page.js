import React from "react";
import Link from "next/link";

export default function Page() {
  const sleepingNodes = [
    {
      day: "Night 1",
      node: "Ghandruk Village",
      elevation: "1,940m (6,365ft)",
      risk: "Negligible",
      note: "Comfortable night in a large Gurung village. Perfect warm-up sleep."
    },
    {
      day: "Night 2",
      node: "Tadapani Junction",
      elevation: "2,630m (8,628ft)",
      risk: "Very Low",
      note: "Located inside a forest clearing. Standard height, well below the AMS threshold."
    },
    {
      day: "Night 3",
      node: "Bayeli Kharka / Dobato",
      elevation: "3,432m (11,260ft)",
      risk: "Moderate",
      note: "Your first high-altitude sleep above the tree line. Expect cold nights and deep star views."
    },
    {
      day: "Night 4",
      node: "Chhistibung Forest",
      elevation: "2,975m (9,760ft)",
      risk: "Low",
      note: "A strategic 'step-down' sleep. Dropping to 2,975m allows your body to recover before climbing higher."
    },
    {
      day: "Night 5 & 6",
      node: "Khopra Ridge Eco-Lodge",
      elevation: "3,660m (12,007ft)",
      risk: "Significant",
      note: "Two nights spent on the high ridge. Necessary to adapt before the Khayer Lake day hike."
    },
    {
      day: "Night 7",
      node: "Swanta Village",
      elevation: "2,214m (7,263ft)",
      risk: "Negligible",
      note: "Deep descent day. Dropping to 2,214m restores thick oxygen and aids muscle recovery."
    },
    {
      day: "Night 8",
      node: "Ghorepani Village",
      elevation: "2,860m (9,383ft)",
      risk: "Very Low",
      note: "Final mountain sleep before descending to Nayapul the next day."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sleep Logistics</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Sleeping Altitude Breakdown
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Where do you sleep each night? Review our comprehensive night-by-night lodging elevations, risk ratings, and strategic sleeping tips.
          </p>
        </div>

        {/* Why Sleeping Altitude is Key */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why Sleeping Altitude is the Critical Metric</h2>
          <p className="text-stone-600 leading-relaxed">In high-altitude mountaineering, the rule is **&quot;Climb high, sleep low&quot;**. Your body performs the vast majority of its altitude adaptation (such as adjusting blood pH and red blood cell production) while you are asleep. 
          </p>
          <p className="text-stone-600 leading-relaxed">The highest point you stand on during a day is less important for AMS risk than the altitude at which you lay your head to rest at night. If you sleep at high elevations too quickly, your oxygen saturation can drop significantly during the night, leading to headaches, insomnia, and morning fatigue.
          </p>
        </div>

        {/* Node Breakdown */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Night-by-Night Altitude & Risk Profile</h2>
          <div className="space-y-6">
            {sleepingNodes.map((node, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="md:w-1/3">
                  <span className="text-xs font-bold text-stone-400 block">{node.day}</span>
                  <span className="text-sm font-extrabold text-stone-950 block mt-1">{node.node}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block">{node.elevation}</span>
                </div>
                <div className="md:w-2/3 space-y-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    node.risk === "Negligible" || node.risk === "Very Low" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                    node.risk === "Moderate" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                    "bg-rose-50 text-rose-700 border border-rose-100"
                  }`}>AMS Sleep Risk: {node.risk}
                  </span>
                  <p className="text-xs text-stone-500 leading-relaxed">{node.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We arrange permit-inclusive community lodge bookings in advance. Securing bed spaces at Bayeli and Khopra is essential due to limited lodge capacity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Secure Your Lodge Bookings</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our guided packages. Our team handles all lodge reservations, logistics, permits, and guides to ensure a safe and comfortable trip.
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
