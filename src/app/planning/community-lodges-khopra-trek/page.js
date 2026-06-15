"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const impacts = [
    {
      title: "Funding High School Salaries",
      desc: "Unlike standard trails where profits enrich individual family owners, the community lodges in Swanta, Nangi, and Khopra direct 100% of their net revenue to pay the salaries of teachers at the local high schools."
    },
    {
      title: "Community Wireless Project",
      desc: "Spearheaded by Magsaysay award winner Mahabir Pun, the lodges acted as testing hubs for early long-range wireless networks, bringing internet access, tele-medicine, and online education to remote mountain villages."
    },
    {
      title: "Cooperative Projects",
      desc: "Lodging revenues have funded agricultural cooperatives, including Swanta&apos;s organic cheese factory and local paper-making workshops, diversifying the local economy beyond basic farming."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Community Lodges</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sustainable Tourism</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            The Community Lodge Network Model
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trekking with a purpose. Learn how the collective village lodge system transforms tourism revenue into education and local development.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Revolution in Himalayan Tourism</h2>
          <p>
            The Khopra Ridge Trek is famous not just for its breathtaking views of Dhaulagiri, but for its pioneering social enterprise model. Developed in the early 2000s under the leadership of local visionary Mahabir Pun and the residents of Myagdi district, this network represents a departure from traditional capitalistic trekking trails.
          </p>
          <p>
            By establishing community-owned lodges at Bayeli, Chhistibung, Swanta, and Khopra Ridge, the villagers created a system where tourists directly support regional development, wildlife conservation, and public education.
          </p>
        </div>

        {/* Impacts list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Community Initiatives</h3>
          <div className="space-y-6">
            {impacts.map((imp, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{imp.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{imp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Stewardship */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Environmental Stewardship</h3>
          <p>
            Because the local communities manage the land and the lodges collectively, they enforce strict environmental codes. These include a absolute ban on single-use plastic mineral water bottles, regular trail cleanups, and local forest protection policies to safeguard endangered wildlife like the red panda and Himalayan Monal.
          </p>
        </div>

        {/* EEAT Footnote */}
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
            <h3 className="text-2xl font-bold">Support Sustainable Himalayan Travel</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book your loop with us. We source all accommodation, foods, and logistical transfers through community network partners to maximize local economic benefit.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
