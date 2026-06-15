import React from "react";
import Link from "next/link";

export default function Page() {
  const guideReasons = [
    {
      title: "Official Government Regulation",
      desc: "The Nepal Tourism Board (NTB) mandates that all foreign trekkers must hire a licensed local guide when hiking in conservation zones (like the Annapurna Conservation Area)."
    },
    {
      title: "Forest Trail Navigation",
      desc: "The trails through mossy forests between Tadapani, Dobato, and Chhistibung are narrow and have few signs. Getting lost is easy, especially in cloudy afternoon weather."
    },
    {
      title: "Lodge Capacity Guarantees",
      desc: "Community lodges at Bayeli Kharka and Khopra Ridge are very small. Local guides coordinate bookings in advance, ensuring you have a room space during peak months."
    },
    {
      title: "Altitude Safety Monitoring",
      desc: "Guides monitor your pacing, check oxygen saturation levels twice daily, and coordinate emergency helicopter evacuations if severe AMS symptoms develop."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Permit Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Do You Need a Guide for the Khopra Trek?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand Nepal&apos;s guide regulations. Review official tourism rules, path-finding safety in thick forests, and high-altitude lodge booking logistics.
          </p>
        </div>

        {/* The Rules */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Short Answer: Yes, it is mandatory</h2>
          <p>
            Yes. The Nepal government officially prohibits solo, unguided trekking for international travelers in all national parks and conservation areas (including the Annapurna Conservation Area) to ensure safety and rescue efficiency.
          </p>
          <p>
            Beyond legal compliance, the remote nature of the Khopra trail makes having a professional guide a major safety asset. The path receives far less traffic than standard routes, and having an experienced local leader is crucial for handling emergency logistics.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why Trekking with a Guide is Vital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideReasons.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Footnote */}
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
            <h3 className="text-2xl font-bold">Book a Certified Guide Today</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Ensure safety and regulatory compliance. Inquire about our guided packages led by certified, first-aid trained local guides.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
