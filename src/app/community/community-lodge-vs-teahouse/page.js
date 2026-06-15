import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonData = [
    {
      feature: "Ownership Structure",
      community: "100% owned by the local village committee. Managed collectively.",
      teahouse: "Privately owned by individuals, often absentee city businessmen."
    },
    {
      feature: "Profit Destination",
      community: "All net profits are reinvested in village schools, clinics, and agriculture.",
      teahouse: "Profits are pocketed by the owner or transferred out of the mountains."
    },
    {
      feature: "Local School Support",
      community: "Directly funds teacher salaries and classroom repairs in Swanta & Nangi.",
      teahouse: "No systematic funding for public schools or educational infrastructure."
    },
    {
      feature: "Produce Sourcing",
      community: "Prioritizes organic vegetables, barley, and yaks sourced from local farmers.",
      teahouse: "Often imports cheaper canned foods and packaged city goods."
    },
    {
      feature: "Porter & Guide Wages",
      community: "Strict minimum wage scales and mandatory health coverage.",
      teahouse: "Rates vary widely, often lower pay scale with no health margins."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Silo Hub</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Community Lodge vs. Teahouse Model
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the economic difference. Learn how the community lodge model revolutionized trekking in the Annapurna foothills by keeping resources inside the valley.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Revolution in Mountain Tourism</h2>
          <p className="text-stone-600 leading-relaxed">
            For decades, trekking in Nepal followed the traditional **teahouse model**—private businesses where owners set pricing and keep profits. While teahouses provide lodging, they rarely invest directly back into the community. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            Pioneered by local social entrepreneur Mahabir Pun alongside Swanta and Nangi village committees, the **community lodge model** ensures that 100% of profit margins are pooled into community funds.
          </p>
        </div>

        {/* Financial Flow Section */}
        <div className="mt-12 p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-stone-950">How Your Money is Distributed</h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            When you stay in a community lodge on the Khopra Ridge route, your lodging and meal fees are divided systematically to fund essential local operations:
          </p>
          
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
              <span className="text-2xl">🎓</span>
              <h4 className="font-bold text-stone-950 text-xs mt-2">School Funding (45%)</h4>
              <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                Pays for teacher salaries, textbook purchases, and science equipment at Swanta Secondary School.
              </p>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
              <span className="text-2xl">🏥</span>
              <h4 className="font-bold text-stone-950 text-xs mt-2">Health Clinics (30%)</h4>
              <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                Directly funds salaries for village health nurses, medicine restocking, and ambulance jeeps.
              </p>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl">
              <span className="text-2xl">📡</span>
              <h4 className="font-bold text-stone-950 text-xs mt-2">Local Development (25%)</h4>
              <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                Supports community agricultural projects, yak paper production, and trail preservation.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Side-by-Side Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Community Lodge</th>
                  <th className="px-6 py-4">Standard Teahouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonData.map((d, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{d.feature}</td>
                    <td className="px-6 py-4">{d.community}</td>
                    <td className="px-6 py-4">{d.teahouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We audit financial allocations yearly alongside Swanta village headmasters to ensure transparency. Our guides participate directly in community school boards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Support Sustainable Tourism</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our core 9-day itinerary to directly fund Swanta community schools and local medical projects while exploring Annapurna's uncrowded high ridges.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book This Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
