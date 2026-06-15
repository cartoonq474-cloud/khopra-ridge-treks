"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const steps = [
    {
      title: "1. Early Morning Wakeup",
      desc: "Wake up at 4:30 AM or 5:00 AM (depending on the season). Put on your thermal layers, windproof shell, warm gloves, and turn on your headlamp."
    },
    {
      title: "2. The Forest Climb",
      desc: "Follow the dirt path leading out of the Dobato lodges. The trail climbs steadily through dwarf rhododendrons and open alpine slopes, taking 30 to 45 minutes."
    },
    {
      title: "3. Arrival at the Tower",
      desc: "Reach the wooden viewing tower at 3,637m (11,932ft). Find a spot to settle down and watch the first light illuminate the western and central Himalaya."
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
          <span className="text-stone-800">Muldai Viewpoint Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Viewpoint Spotlight</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Muldai Viewpoint Guide (Dobato)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Climbing the premium sunrise peak. A step-by-step guide to the climb from Dobato to the 3,637m Muldai panoramic viewpoint.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Why Muldai Outshines Poon Hill</h2>
          <p>
            While Poon Hill is the most famous viewpoint in the Annapurna foothills, Muldai Viewpoint (3,637m) is increasingly preferred by photography purists and trail guides. Situated higher than Poon Hill (3,210m) and located further north, Muldai brings you closer to the massive faces of the high mountains, offering a wider 360-degree sweep of over 25 peaks.
          </p>
          <p>
            Best of all, Muldai remains peaceful. While Poon Hill can host up to 1,000 tourists on a single autumn morning, you will often share the Muldai summit with fewer than twenty hikers.
          </p>
        </div>

        {/* Climb steps */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">The Sunrise Climb Walkthrough</h3>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{step.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panorama peak guide */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Visible Mountain Peaks</h3>
          <p>
            From the summit of Muldai Viewpoint, the following mountain ranges dominate the horizon:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Dhaulagiri Range:</strong> Dhaulagiri I (8,167m), Tukuche Peak, Gurja Peak, and Dhampus Peak.</li>
            <li><strong>Annapurna Range:</strong> Annapurna South, Annapurna I (8,091m), Hiunchuli, and Annapurna II, III, and IV.</li>
            <li><strong>Fishtail / Machhapuchhre:</strong> The double-fissured holy peak rises sharply to the east.</li>
            <li><strong>Nilgiri & Hiunchuli:</strong> Standing directly opposite the view saddle.</li>
          </ul>
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
            <h3 className="text-2xl font-bold">Watch Sunrise Over the Peaks</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              All our guided loops that stop in Dobato include a dedicated sunrise climb to Muldai with hot tea served at the summit.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire about bookings
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
