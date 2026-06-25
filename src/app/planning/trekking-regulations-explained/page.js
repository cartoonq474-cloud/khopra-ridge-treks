import React from "react";
import Link from "next/link";

export default function Page() {
  const regulations = [
    {
      rule: "1. The Licensed Guide Requirement",
      desc: "Foreign trekkers must hire a licensed local guide registered under TAAN and NTB. Independent solo trekking is prohibited inside conservation areas."
    },
    {
      rule: "2. Registration & Checkposts",
      desc: "You must present and register your ACAP permit and TIMS card at checkposts like Nayapul and Birethanti. Trekking without permits results in double-fee penalties."
    },
    {
      rule: "3. Drone Flight Restrictions",
      desc: "Flying drones in Nepal is strictly regulated. You must obtain pre-approval permits from the Civil Aviation Authority of Nepal (CAAN) and the Department of Tourism. Unauthorized flying can lead to device confiscation."
    },
    {
      rule: "4. Leave No Trace & Waste Management",
      desc: "The ACAP operates under strict zero-waste guidelines. Trekkers are required to pack out all plastic waste and batteries, and use filtered water instead of buying plastic bottles."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Permit Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Trekking Regulations Explained
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the rules of the trail. A detailed guide to drone licenses, permit rules, checkpost registrations, and environmental conservation guidelines.
          </p>
        </div>

        {/* Regulations list */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Core Mountain Rules</h2>
          <div className="space-y-6">
            {regulations.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.rule}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local support details */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important Drone Flying Note</h3>
          <p className="text-xs leading-relaxed font-medium">Many travel creators attempt to fly drones along the Khopra Ridge without permits. Checkposts are authorized to verify drone licenses, and park rangers can confiscate devices. If you plan to capture drone footage, coordinate with our office at least 4 weeks in advance to submit passport details and secure CAAN approvals.
          </p>
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
            <h3 className="text-2xl font-bold">Ensure a Hassle-Free Trek</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided community trek today. Let our local guides coordinate all permit registrations, checkposts, and guide insurance rules for you.
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
