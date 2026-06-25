import React from "react";
import Link from "next/link";

export default function Page() {
  const permitRequirements = [
    { label: "Permit Name", value: "Annapurna Conservation Area Project (ACAP) Permit" },
    { label: "Foreigner Fee", value: "NPR 3,000 (~$23 USD) per person" },
    { label: "SAARC National Fee", value: "NPR 1,000 (~$8 USD) per person" },
    { label: "Documents Needed", value: "Copy of passport, 2 passport-sized photos, cash in NPR" },
    { label: "Validity", value: "Single entry, valid for the duration of the trek" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Permit Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">ACAP Permit Guide (2026 Rules)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Essential entry requirements for the Annapurna Conservation Area. Learn how to secure your ACAP permit, locations of government offices, and required paperwork.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          {permitRequirements.map((stat, i) => (
            <div key={i} className="first:col-span-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Why Do You Need an ACAP Permit?</h2>
          <p>The Khopra Ridge Trek lies entirely inside the Annapurna Conservation Area (ACA), which is the largest protected area in Nepal. The conservation project is managed by the National Trust for Nature Conservation (NTNC). Permit fees directly fund environmental preservation, trail repairs, local community school operations, and checkpost administration.
          </p>
          <p>You must obtain this permit **before starting the trek** at the Nepal Tourism Board offices in either Kathmandu or Pokhara. You cannot purchase the permit at trailheads like Birethanti without paying a double penalty fee.
          </p>
        </div>

        {/* Checkpoints list */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Key Checkpoint Verification Locations</h3>
          <p className="text-xs leading-relaxed">Your ACAP permit is stamped and registered at several checking stations along the loop to track visitor safety. Ensure you keep your permit in a waterproof pocket and register at:
          </p>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5 font-semibold">
            <li>Birethanti Checkpost (Trail Entry)</li>
            <li>Ghandruk Village Checkpoint</li>
            <li>Ghorepani Checkpost (Trail Exit)</li>
          </ul>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Avoid Bureaucratic Hassles</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided community trek. We manage all permit logistics, TIMS cards, and local registration checkposts for you.
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
