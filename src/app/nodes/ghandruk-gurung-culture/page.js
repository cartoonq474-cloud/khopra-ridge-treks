"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const elements = [
    {
      name: "Gurung Clan Structure",
      desc: "Ghandruk is populated by the Char Jat (four clans) and Sora Jat (sixteen clans) of the Gurung community. Each family group plays specific historical and social roles within the village structure."
    },
    {
      name: "Rodhi Ghar Traditions",
      desc: "Historically, young Gurung boys and girls gathered at the Rodhi Ghar (a communal house) to sing, dance, socialize, and weave textiles after a long day of working in the fields."
    },
    {
      name: "Festivals & Celebrations",
      desc: "Major local festivals include Lhosar (Gurung New Year) in late December/early January, characterized by traditional dance performances (like Ghatu and Sorathi) in full ethnic costumes."
    },
    {
      name: "Military Connection",
      desc: "Ghandruk is widely known as a breeding ground for the famous British Gurkha soldiers. You will find many households home to retired military officers who have returned to run village tea houses."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Gurung Culture</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cultural Heritage</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Gurung Culture & Heritage in Ghandruk
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand the traditions. A deep-dive guide to the rich lifestyle, social structures, and history of Ghandruk&apos;s indigenous Gurung community.
          </p>
        </div>

        {/* Culture Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Who Are the Gurung People?</h2>
          <p>
            The Gurungs (also known as Tamu) are an ethnic group indigenous to the hills and mountains of western Nepal. Known for their distinct Tibeto-Burman language, unique culinary practices, animistic and Buddhist spiritual traditions, and legendary military bravery, the Gurungs form the cultural foundation of the Annapurna conservation region.
          </p>
        </div>

        {/* Cultural Elements List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Traditions and Heritage Pillars</h3>
          <div className="space-y-6">
            {elements.map((el, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{el.name}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Support Local Gurung Communities</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              By staying in local Gurung teahouses, booking resident guides, and dining at local establishments, you directly contribute to preserving Ghandruk&apos;s cultural heritage.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Book guided trek
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
