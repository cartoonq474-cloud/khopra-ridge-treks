"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const differences = [
    {
      title: "Community Lodge Co-operative Model",
      desc: "Unlike standard trails where private teahouses compete for profits, the lodges along this loop are built, owned, and run collectively by local villagers, directly funding local primary school teacher salaries."
    },
    {
      title: "High-Altitude Ridge Walking",
      desc: "Most classic treks climb up river gorges and valleys. The Khopra trail ascends quickly onto a high, open ridge (3,660m) that runs parallel to the Annapurna wall, offering dramatic panoramas on both sides."
    },
    {
      title: "Sacred Glacial Destination (Khayer Lake)",
      desc: "The trek features an optional day hike up to the high alpine, sacred lake of Khayer (4,660m) right at the base of the Annapurna South face, a holy pilgrimage site with unique spiritual energy."
    },
    {
      title: "Pristine Nature and Solitude",
      desc: "With very low visitor counts compared to Poon Hill or Mardi Himal, you walk in silent, uncrowded rhododendron forests and high pastures, offering a deep connection with nature."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            What Makes the Khopra Ridge Trek Different?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the unique features that set Khopra Ridge apart from all other trekking loops in Nepal, from lodging cooperatives to high-altitude ridge paths.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Trekking Experience Like No Other</h2>
          <p className="text-stone-600 leading-relaxed">
            With dozens of trekking options in the Himalayas, finding a trail that offers raw beauty, authentic culture, and a positive environmental footprint is critical. The **Khopra Ridge Trek** stands out as a unique community project that combines strenuous high-altitude walking with strong social support.
          </p>
        </div>

        {/* Differences List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Distinct Features</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {differences.map((diff, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{diff.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are active members of the local community cooperative. We share these comparisons to highlight the social and environmental values of the trail.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Unique Community Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Ready to experience this spectacular, secluded alternative? Secure your permit-inclusive booking packages with our local team.
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
