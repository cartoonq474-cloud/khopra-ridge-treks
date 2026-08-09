"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedVideo, setSelectedVideo] = useState("drone");

  const videoLibrary = {
    drone: {
      title: "Khopra Ridge Aerial Drone Compilation",
      duration: "4 min 12 sec",
      category: "Aerial & Landscape Scale",
      focus: "Ridge exposure, mountain panoramas & valley fog",
      desc: "High-definition aerial drone footage sweeping across the narrow Khopra ridge walk (3,660m), valley fog clouds, and the massive west face wall of Annapurna South (7,219m) and Dhaulagiri (8,167m).",
      keyInsights: [
        "Reveals narrow ridge exposure above the treeline not captured in standard photos",
        "Shows scale of morning cloud inversions in Kali Gandaki valley",
        "Demonstrates 360-degree panoramic vantage point above Khopra Danda lodge",
      ],
    },
    pov: {
      title: "First-Person Trail Walkthrough Experience",
      duration: "8 min 45 sec",
      category: "Real Walking Pace",
      focus: "Footing, switchbacks & trail gradients",
      desc: "Chest-mounted POV camera footage following actual walking speed from forested paths below Tadapani up to the rocky alpine ridge ascents near Chhistibung and Khopra Danda.",
      keyInsights: [
        "Unfiltered view of stone step ascents and switchback gradients",
        "Transition from damp oak forest paths to loose alpine scree",
        "Real-time pacing demonstration for personal fitness self-assessment",
      ],
    },
    khayer: {
      title: "Khopra Ridge to Khayer Lake (4,660m) Day Hike",
      duration: "12 min 30 sec",
      category: "High Altitude Extension",
      focus: "Suspension bridges & 1,000m vertical climb",
      desc: "Full walkthrough covering the round-trip day hike from Khopra Ridge lodge to sacred Khayer Lake (4,660m), crossing high mountain streams and stark glacial basins.",
      keyInsights: [
        "Shows actual terrain conditions for the 8-10 hour high altitude day hike",
        "Exposes weather shifts and cloud roll-in timing above 4,000m",
        "Detailed view of Khayer Baraha sacred temple and mirror lake shoreline",
      ],
    },
    lodges: {
      title: "Community Lodge & Teahouse Tour",
      duration: "6 min 15 sec",
      category: "Accommodation & Dining",
      focus: "Rooms, dining halls & local hospitality",
      desc: "Walkthrough of community-owned teahouses along the Khopra circuit — private twin-share rooms, communal wood-stove dining halls, hot shower setups, and organic Magar meals.",
      keyInsights: [
        "Realistic preview of twin bed setups, blankets, and electrical charging outlets",
        "Inside view of dining hall warmth and evening social atmosphere",
        "Explanation of how lodge profits directly fund local village schools",
      ],
    },
  };

  const selectedData = videoLibrary[selectedVideo];

  const stageBreakdown = [
    {
      stage: "Stage 1: Ghandruk to Tadapani",
      duration: "3–4 Hours Walking",
      terrain: "Subtropical Rhododendron Forest",
      highlights: "Gurung cultural villages, stone stairs, mossy forest trails.",
    },
    {
      stage: "Stage 2: Tadapani to Dobato",
      duration: "4–5 Hours Walking",
      terrain: "Upper Montane & Alpine Transition",
      highlights: "Muldai Viewpoint approach, thinned tree cover, early Annapurna vistas.",
    },
    {
      stage: "Stage 3: Dobato to Chhistibung",
      duration: "4–5 Hours Walking",
      terrain: "Remote Ridge Descent & Forest Base",
      highlights: "Quiet offbeat forest paths, birdlife, remote community lodge.",
    },
    {
      stage: "Stage 4: Chhistibung to Khopra Ridge",
      duration: "3–4 Hours Walking",
      terrain: "Steep Alpine Ascent (3,660m)",
      highlights: "Clearing treeline, eye-level Dhaulagiri panoramas, ridge lodge arrival.",
    },
  ];

  const summarySpecs = [
    { label: "Video Modules", value: "4 Comprehensive Walkthroughs" },
    { label: "Footage Types", value: "4K Drone, POV & Lodge Tours" },
    { label: "Stages Covered", value: "Ghandruk to Khayer Lake 4,660m" },
    { label: "Planning Utility", value: "Fitness, Footing & Lodge Preview" },
  ];

  const faqs = [
    {
      q: "What does a Khopra Ridge Trek video show?",
      a: "Our walkthrough videos cover real trail conditions, steep switchback gradients, ridge exposure, community teahouse interiors, and 360-degree mountain panoramas from Ghandruk to Khayer Lake.",
    },
    {
      q: "Does the Khopra Ridge video include the Khayer Lake route?",
      a: "Yes. A dedicated 12-minute walkthrough covers the high-altitude day hike from Khopra Ridge lodge (3,660m) to sacred Khayer Lake (4,660m).",
    },
    {
      q: "Can videos help me understand Khopra Ridge Trek difficulty?",
      a: "Yes. First-person POV footage shows real-time walking speed, stone stair step height, and loose rock terrain, making it the most accurate tool to evaluate your fitness before booking.",
    },
    {
      q: "What mountains can I see in Khopra Ridge videos?",
      a: "The footage showcases Annapurna South (7,219m), Dhaulagiri I (8,167m), Nilgiri North (7,061m), Hiunchuli, and Machhapuchhre (Fishtail).",
    },
    {
      q: "Is Khopra Ridge Trek suitable for beginners?",
      a: "Beginners with reasonable cardio fitness and some hiking experience manage well. It is more demanding than Poon Hill due to ridge elevation and stone ascents.",
    },
    {
      q: "What accommodation is shown in Khopra Ridge walkthrough videos?",
      a: "Videos show clean community cooperative lodges featuring twin-share rooms, communal wood-burning stove dining halls, and home-cooked meals.",
    },
    {
      q: "When is the best time to see clear views in Khopra Ridge videos?",
      a: "Autumn (September to November) provides crystal-clear mountain visibility, while spring (March to May) features blooming rhododendron forests.",
    },
    {
      q: "How does Khopra Ridge compare to Poon Hill in the videos?",
      a: "Videos reveal significantly quieter trails, fewer crowds at viewpoints, higher ridge walking, and authentic community-run teahouses compared to commercial Poon Hill circuits.",
    },
    {
      q: "Are trekking poles recommended based on the video terrain?",
      a: "Yes. Video walkthroughs clearly show sustained stone stair descents and loose alpine gravel where trekking poles reduce knee impact significantly.",
    },
    {
      q: "How can I book a guided trek based on these videos?",
      a: "Contact our Pokhara local team at EMD Treks (License #8928-091) to customize your itinerary based on the stages shown in the walkthroughs.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 transition">Viewpoints</Link>
            <span>/</span>
            <span className="text-emerald-400">Video Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Real Motion Walkthroughs
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Video Walkthroughs
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Explore the complete Khopra Ridge circuit on video: aerial drone panoramas, first-person trail walkthroughs, community teahouse tours, and the Khayer Lake high-altitude day hike.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summarySpecs.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🎥
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Field Walkthrough Video Library</h4>
                <p>
                  Produced and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). All footage is recorded during real seasonal departures to give you an accurate picture of trail gradients, teahouses, and mountain vistas.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Booking a Himalayan trek from photos alone is a leap of faith. You know the paper specs, but you don&apos;t know how the trail feels underfoot, what teahouses look like at dusk, or how exposed the ridge gets above the treeline.
              </p>
              <p>
                Our video walkthrough library below gives you an authentic preview of what to expect at every stage of the circuit.
              </p>
            </div>

            {/* Section 1: Interactive Video Selector Widget */}
            <div id="video-library" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Select Video Walkthrough Module
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Selector Buttons */}
                <div className="md:col-span-1 p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Video Library</span>
                  {Object.keys(videoLibrary).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedVideo(key)}
                      className={`w-full text-left p-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        selectedVideo === key
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {videoLibrary[key].title}
                    </button>
                  ))}
                </div>

                {/* Inspected Video Details Card */}
                <div className="md:col-span-2 p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Module Briefing</span>
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">{selectedData.duration}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Category</span>
                      <h3 className="text-2xl font-black text-stone-950 mt-1">{selectedData.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Focus Area</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedData.focus}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Module Tag</span>
                        <span className="text-xs font-bold text-emerald-800 mt-1 block">{selectedData.category}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Walkthrough Overview</span>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">{selectedData.desc}</p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Key Planning Insights</span>
                      <ul className="mt-2 space-y-1.5 text-xs text-stone-700 list-disc list-inside">
                        {selectedData.keyInsights.map((insight, i) => (
                          <li key={i}>{insight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Day-by-Day Stage Breakdown */}
            <div id="stage-walkthroughs" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Day-by-Day Route Walkthrough Stages
              </h2>

              <div className="grid gap-6">
                {stageBreakdown.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                      <h3 className="font-extrabold text-stone-950 text-lg sm:text-xl">{item.stage}</h3>
                      <span className="text-xs font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                        {item.duration}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Terrain Character</span>
                        <span className="font-semibold text-stone-900 mt-0.5 block">{item.terrain}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Key Video Highlights</span>
                        <span className="font-semibold text-stone-700 mt-0.5 block">{item.highlights}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Terrain & Lodge Insights */}
            <div id="terrain-insights" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Practical Insights Revealed by Video Walkthroughs
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🥾 Footing &amp; Switchback Gradients</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Packed earth lower trails give way to steep stone staircases and loose alpine scree. Seeing real walking speed helps select appropriate footwear and trekking poles.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏡 Community Teahouse Reality</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Lodge tours demonstrate clean twin-share bedrooms, communal dining hall stoves, and local Magar family hospitality without misleading marketing fluff.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏔️ Ridge Exposure &amp; Altitude Progression</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Drone footage shows how the ridge opens up above the treeline at 3,660m, preparing you mentally for windy conditions and high-altitude pacing.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🍂 Seasonal Visibility Differences</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Autumn video clips show dry ground and sharp mountain clarity, while spring clips highlight lush rhododendron forests and mild morning cloud layers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Guided Trek Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Turn Video Insights Into Your Himalayan Trek
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Ready to walk the route shown in these walkthroughs? Contact local Pokhara operator <strong>EMD Treks</strong> (NTB License #8928-091) to book your permit-inclusive Khopra Ridge trek.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Now →
                  </Link>
                  <Link
                    href="/planning/khopra-loop-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Khopra Loop Itinerary
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#video-library" className="block hover:text-emerald-600 transition">
                  • Video Walkthrough Modules
                </a>
                <a href="#stage-walkthroughs" className="block hover:text-emerald-600 transition">
                  • Stage-by-Stage Route
                </a>
                <a href="#terrain-insights" className="block hover:text-emerald-600 transition">
                  • Practical Terrain Insights
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Visual Resources</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/viewpoints/photo-gallery" className="hover:text-emerald-700 underline">
                      Photography Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/interactive-map" className="hover:text-emerald-700 underline">
                      Interactive Route Explorer Map
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-700 underline">
                      Khopra Ridge Viewpoint Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-700 underline">
                      Muldai Viewpoint Hub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
