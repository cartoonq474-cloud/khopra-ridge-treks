import React from "react";
import Link from "next/link";

export default function Page() {
  const options = [
    {
      mode: "1. Domestic Flight (Fastest)",
      duration: "25 to 30 minutes",
      cost: "$100 to $125 USD / way",
      pros: "Saves a full day of driving. Incredible views of the Langtang, Manaslu, and Annapurna ranges. (Tip: Sit on the right side when flying to Pokhara)."
    },
    {
      mode: "2. Private Car / Jeep (Comfortable)",
      duration: "5 to 7 hours",
      cost: "$120 to $160 USD total",
      pros: "Comfortable door-to-door service. Allows you to stop for photos, lunch, and restroom breaks along the Prithvi Highway."
    },
    {
      mode: "3. Tourist Bus (Budget-Friendly)",
      duration: "6 to 9 hours",
      cost: "$12 to $25 USD / seat",
      pros: "Standard and luxury (sofa seat) buses operate daily at 7:00 AM. Includes lunch stops and air conditioning."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transport Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Kathmandu to Pokhara Transport Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">How to travel between Nepal&apos;s capital and the lakeside gateway. Compare domestic flight details, private car transfers, and tourist bus options.
          </p>
        </div>

        {/* Options list */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Travel Options Compared</h2>
          <div className="space-y-6">
            {options.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-extrabold text-stone-400 block uppercase tracking-wider">{item.mode}</span>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-emerald-600">
                  <span>Duration: {item.duration}</span>
                  <span>•</span>
                  <span>Cost: {item.cost}</span>
                </div>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">{item.pros}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highway details */}
        <div className="mt-16 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Prithvi Highway Road Conditions</h3>
          <p>The distance between Kathmandu and Pokhara is approximately 200 kilometers. However, due to ongoing highway expansion works and mountainous terrain, driving times can vary significantly. During the summer monsoon (June-August), landslide delays are common along the highway.
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
            <h3 className="text-2xl font-bold">Plan Your Internal Transfers</h3>
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

export const metadata = {
  alternates: {
    canonical: '/planning/kathmandu-to-pokhara',
  },
};
