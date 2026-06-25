import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonData = [
    {
      metric: "Travel Duration",
      jeep: "2.5 to 3 Hours",
      bus: "4.5 to 6 Hours"
    },
    {
      metric: "Approx. Cost",
      jeep: "$100 to $130 USD (Per Vehicle)",
      bus: "$4 to $6 USD (Per Seat)"
    },
    {
      metric: "Road Traction (4WD)",
      jeep: "High clearance, handles mud and dirt switchbacks easily",
      bus: "Low traction, struggles on steep gravel gradients"
    },
    {
      metric: "Comfort & Dust",
      jeep: "Sealed windows with air conditioning, personal space",
      bus: "Open windows, high dust exposure, crowded seating"
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transport Clusters</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Jeep vs Bus for the Khopra Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Which transport mode should you choose from Pokhara? A detailed comparative analysis of travel speed, off-road capabilities, costs, and comfort factors.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Transport Comparison Matrix</h2>
          <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Private 4WD Jeep</th>
                  <th className="px-6 py-4">Local Public Bus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs text-stone-600">
                {comparisonData.map((item, i) => (
                  <tr key={i} className="hover:bg-stone-50/50">
                    <td className="px-6 py-4 font-bold text-stone-900">{item.metric}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-600">{item.jeep}</td>
                    <td className="px-6 py-4">{item.bus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Our Recommendation: The Group Shared Jeep</h3>
          <p>While a private jeep is expensive for a solo traveler, sharing it among a group of 4 to 6 people represents the best balance of cost and comfort (approx. **$20 to $25 USD per person**). 
          </p>
          <p>Bypassing the dusty open-window local buses is not just a comfort decision, but a health decision. Mountain dust can irritate your throat and lungs before you start climbing to high altitude zones like Khopra.
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
            <h3 className="text-2xl font-bold">Secure Your Jeep Transfers</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We arrange private 4WD jeep transfers for all our tour groups. Inquire today to secure your permit-inclusive guided package.
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
