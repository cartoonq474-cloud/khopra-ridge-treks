"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const communityImpacts = [
    {
      title: "Funding Local Schools",
      desc: "Lodge profits pay the salaries of primary and secondary teachers in Swanta, Paudwar, and Nangi. This allows remote villages to maintain schools locally rather than sending children to boarding schools in Pokhara."
    },
    {
      title: "Village Health Clinics",
      desc: "Cooperative funds support health checkposts and medical clinics in the valley, providing basic healthcare services, vaccines, and emergency medicines to local residents free of charge."
    },
    {
      title: "Broadband Wi-Fi & Connectivity",
      desc: "Pioneered by social entrepreneur Mahabir Pun, the network setup brings wireless internet to remote clinics and schoolhouses, allowing for digital education and telemedicine."
    },
    {
      title: "Agricultural Subsidies",
      desc: "Profits are reinvested in local farming co-ops, helping Magar farmers purchase greenhouse plastics, modern beehives, and organic tools, keeping young villagers engaged in agriculture."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sustainable Travel</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Community Tourism on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Learn about the community lodge model, how it differs from standard tourism, and how your trek directly funds mountain schools and clinics.
          </p>
        </div>

        {/* The Co-operative Model */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Model of Self-Reliance</h2>
          <p className="text-stone-600 leading-relaxed">
            The Khopra Ridge Trek is unique because it operates on a community-based cooperative tourism model. Instead of private hotel owners keeping all profits or sending them back to Kathmandu, the lodges at Swanta, Chhistibung, Bayeli, Dobato, and Khopra Ridge are collectively owned and operated by local villagers.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Pioneered by local community developer and Magsaysay award winner Mahabir Pun, this project was designed to combat rural depopulation. By building lodges with communal effort and sourcing all labor and food locally, the communities have created a sustainable economy that funds critical social services.
          </p>
        </div>

        {/* Impact Areas */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">How Your Expenses are Reinvested</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {communityImpacts.map((imp, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{imp.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{imp.desc}</p>
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
              We cooperate directly with Nangi and Swanta village development committees. We track donation records and lodge audits to verify transparency in community allocations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Community-Owned Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Support the cooperative by booking our 9-Day all-inclusive packages. We prioritize village-run lodges and local Magar/Gurung trail staff.
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
