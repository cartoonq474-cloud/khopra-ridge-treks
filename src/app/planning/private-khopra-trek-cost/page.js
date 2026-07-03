import React from "react";
import Link from "next/link";

export default function Page() {
  const costFactors = [
    {
      factor: "Private 4WD Jeep Transfers",
      cost: "$120 to $150 USD per way",
      note: "Highly recommended over local buses. Saves 3 hours of bumpy road transit and drops you directly at trailheads like Kimche or Syauli."
    },
    {
      factor: "Dedicated English-Speaking Guide",
      cost: "$25 to $35 USD / day",
      note: "Includes the guide's wage, food, accommodation, and medical insurance on the mountain."
    },
    {
      factor: "Private Porter Service",
      cost: "$20 to $25 USD / day",
      note: "Carries up to 15kg of luggage. Includes porter's wage, insurance, and lodging food."
    },
    {
      factor: "Lodge & Full Board Meals",
      cost: "$25 to $35 USD / night",
      note: "Standard twin-share rooms and three hot meals daily in the community lodges."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cost Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Private Khopra Trek Cost Breakdown
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the expenses of booking a private guided trek. Review costs for private 4WD jeeps, dedicated local guides, private porters, and full-board pricing.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Is a Private Tour Worth It?</h2>
          <p>For a customized, private guided trek, packages generally range from **$650 to $950 USD per person** for a 9-day duration (excluding international flights). This price varies based on the number of hikers in your private group, hotel standard in Pokhara, and transport style.
          </p>
          <p>Private treks provide absolute flexibility in pacing (allowing you to rest if you feel altitude adjustments) and a dedicated guide who coordinates all checkpost paperwork and guarantees your room spaces.
          </p>
        </div>

        {/* Cost Factors list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Primary Cost Components</h3>
          <div className="space-y-6">
            {costFactors.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-extrabold text-stone-400 block uppercase tracking-wider">{item.factor}</span>
                <span className="text-xs font-bold text-emerald-600 block mt-1">Cost range: {item.cost}</span>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">{item.note}</p>
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
            <h3 className="text-2xl font-bold">Customize Your Private Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Enjoy custom itineraries, private 4WD jeeps, and dedicated guides. Get in touch with our team to customize your private trek today.
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
    canonical: '/planning/private-khopra-trek-cost',
  },
};
