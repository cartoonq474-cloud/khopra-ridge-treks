"use client";

import React from "react";

export default function Page() {
  const tableData = [
    {
      feature: "Ownership",
      community: "Collective village ownership. Managed by community committee.",
      teahouse: "Private local or absentee business owners."
    },
    {
      feature: "Profit Destination",
      community: "100% reinvested in local schools, clinics, and infrastructure.",
      teahouse: "Kept as private profit for the lodge owner."
    },
    {
      feature: "Social Impact",
      community: "Directly funds schoolteacher salaries, local nurse clinics, and valley Wi-Fi.",
      teahouse: "Limited social reinvestment except for local hiring."
    },
    {
      feature: "Food Sourcing",
      community: "Heavily relies on local community organic farms and yak cheese.",
      teahouse: "Often imports packaged goods and canned items from city hubs."
    }
  ];

  return (
    <div className="bg-stone-50 font-sans text-stone-900 selection:bg-emerald-500 selection:text-white min-h-screen flex flex-col justify-between antialiased">
      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sustainable Travel</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Community Lodge vs Teahouse
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Learn how the community lodge model revolutionized trekking in the Annapurna foothills, ensuring tourism benefits stay in local valleys.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-stone-950">A Revolution in Mountain Tourism</h3>
          <p className="text-stone-600 leading-relaxed">
            Traditionally, trekking in Nepal follows the teahouse model. While teahouses provide lodging, the economic benefits often drain out of remote villages to urban hubs. The community lodge model, pioneered by local social entrepreneurs and villagers on the Khopra trail, keeps resources inside the valley.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Metric</th>
                <th className="px-6 py-4">Community Lodge</th>
                <th className="px-6 py-4">Standard Teahouse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              {tableData.map((d, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">{d.feature}</td>
                  <td className="px-6 py-4">{d.community}</td>
                  <td className="px-6 py-4">{d.teahouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* E-E-A-T AUTHOR FOOTNOTE */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides collaborate directly with Swanta and Nangi village committees to ensure lodge maintenance standards and transparent pricing metrics.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Support Community Tourism</h3>
          <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
            By booking our 9-Day Khopra Ridge itinerary, you directly fund local schools and help preserve indigenous Magar mountain agriculture.
          </p>
          <a
            href="/#book"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all"
          >
            Book Community Trek
          </a>
        </div>
      </main>
    </div>
  );
}
