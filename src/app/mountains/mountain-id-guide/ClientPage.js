"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [filter, setFilter] = useState("all");

  const peaks = [
    {
      name: "Dhaulagiri I",
      height: "8,167 m (26,795 ft)",
      category: "8000m",
      shape: "Massive white pyramid",
      diff: "Easy",
      viewpoint: "Khopra Ridge Lodge & Muldai Viewpoint",
      profile:
        "The 7th highest mountain in the world. Dominates the western horizon with a massive pyramid profile and heavy glacial ice falls on lower slopes.",
    },
    {
      name: "Annapurna South",
      height: "7,219 m (23,684 ft)",
      category: "7000m",
      shape: "Long steep snow wall",
      diff: "Easy",
      viewpoint: "Khopra Ridge (Directly Opposite)",
      profile:
        "Forms a towering vertical wall of rock and snow. Directly faces the community lodge at Khopra Ridge and anchors the eastern side of the skyline.",
    },
    {
      name: "Nilgiri North",
      height: "7,061 m (23,166 ft)",
      category: "7000m",
      shape: "Jagged saw-toothed ridge",
      diff: "Moderate",
      viewpoint: "Khopra Ridge & Chhistibung",
      profile:
        "A prominent, rugged peak situated between Dhaulagiri and Annapurna South. Distinctive for its jagged, saw-toothed summit ridge line.",
    },
    {
      name: "Machhapuchhre (Fishtail)",
      height: "6,993 m (22,943 ft)",
      category: "sacred",
      shape: "Double summit ('Fishtail')",
      diff: "Easy",
      viewpoint: "Poon Hill, Muldai, Ghandruk & Tadapani",
      profile:
        "Nepal's most iconic sacred peak. Instantly recognizable by its sharp double summit that resembles a fish's tail. Sacred to Lord Shiva and unclimbed.",
    },
    {
      name: "Hiunchuli",
      height: "6,441 m (21,132 ft)",
      category: "6000m",
      shape: "Glaciated slope beside Annapurna South",
      diff: "Moderate",
      viewpoint: "Ghandruk, Tadapani & Dobato",
      profile:
        "A steep, glaciated peak flanking Annapurna South on the eastern side. Often serves as a key reference point when scanning the sanctuary wall.",
    },
    {
      name: "Tukuche Peak",
      height: "6,920 m (22,703 ft)",
      category: "6000m",
      shape: "Sharp rocky summit",
      diff: "Difficult",
      viewpoint: "Muldai Viewpoint & Khopra Ridge",
      profile:
        "Positioned adjacent to Dhaulagiri I. Presents a sharp, rocky summit that requires panorama charts to distinguish from surrounding ridges.",
    },
    {
      name: "Gangapurna",
      height: "7,455 m (24,458 ft)",
      category: "7000m",
      shape: "Broad glaciated massif",
      diff: "Difficult",
      viewpoint: "Muldai Viewpoint (Clear Dawn)",
      profile:
        "A broad, heavily glaciated peak sitting farther back in the Annapurna massif. Most clearly visible during early morning dawn light from Muldai.",
    },
  ];

  const filteredPeaks = peaks.filter((peak) => {
    if (filter === "all") return true;
    if (filter === "8000m") return peak.category === "8000m";
    if (filter === "7000m") return peak.category === "7000m";
    if (filter === "sacred") return peak.category === "sacred";
    return true;
  });

  const summarySpecs = [
    { label: "Identification Method", value: "Silhouette, Height & Viewpoint" },
    { label: "Primary Massifs", value: "Dhaulagiri & Annapurna Ranges" },
    { label: "Signature Peak", value: "Machhapuchhre (Fishtail)" },
    { label: "Best Panorama Deck", value: "Khopra Ridge (3,660m)" },
  ];

  const faqs = [
    {
      q: "How can I identify Himalayan peaks while trekking?",
      a: "Focus on shape and silhouette first — pyramid peaks (Dhaulagiri), double summits (Machhapuchhre), and snow walls (Annapurna South) are the fastest visual indicators. Use elevation differences and compass direction to confirm.",
    },
    {
      q: "Which mountains are visible from Khopra Ridge?",
      a: "Khopra Ridge offers unobstructed close-up views of Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri North (7,061m), Hiunchuli, and Tukuche Peak.",
    },
    {
      q: "What is the easiest Himalayan mountain to recognize?",
      a: "Machhapuchhre (Fishtail Peak, 6,993m) is the easiest peak to identify due to its unique double-pointed summit that looks like a fishtail from Pokhara and Poon Hill.",
    },
    {
      q: "How do I identify Machhapuchhre (Fishtail)?",
      a: "Look for its sharp, isolated double peak standing independently off the main Annapurna ridge. From Poon Hill or Ghandruk, its fishtail profile is unmistakable.",
    },
    {
      q: "Which app helps identify Himalayan mountains?",
      a: "Offline mountain apps like PeakFinder or PeakVisor use your phone's GPS and compass to label peaks in real time. We recommend photographing teahouse panorama boards as an additional reference.",
    },
    {
      q: "What mountains can I see from Poon Hill?",
      a: "Poon Hill offers wide sunrise panoramas of the Dhaulagiri massif (Dhaulagiri I), Annapurna I, Annapurna South, Machhapuchhre, and Nilgiri.",
    },
    {
      q: "Why do some Himalayan peaks look similar?",
      a: "Heavy snow cover hides underlying rock features, and atmospheric haze compresses distance. Closer 6,000m peaks can also appear larger than 8,000m peaks farther away.",
    },
    {
      q: "Can weather affect mountain visibility?",
      a: "Yes. Monsoon season (June–August) brings heavy clouds, while autumn (October–November) and winter offer crystal-clear morning visibility.",
    },
    {
      q: "Can beginners learn Himalayan mountain identification?",
      a: "Yes. By starting with distinct landmarks like Machhapuchhre and Dhaulagiri, beginners quickly learn to orient themselves along the horizon.",
    },
    {
      q: "What is the best season for clear mountain views in Nepal?",
      a: "Autumn (October to November) delivers the sharpest visibility and clearest morning skies across the Himalayas.",
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
            <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-400 transition">Mountains</Link>
            <span>/</span>
            <span className="text-emerald-400">Mountain ID Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Field Identification Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Himalayan Mountain Identification Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Learn how to identify Nepal&apos;s most famous peaks by silhouette, elevation, position, and viewpoint. A practical guide covering Dhaulagiri, Annapurna South, Machhapuchhre, and Nilgiri.
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
                🏔️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Mountain Identification Field Guide</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). Our guides spend hundreds of days on Khopra Ridge and Poon Hill, interpreting Himalayan peaks for trekkers and photographers.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Stand at Khopra Ridge or Poon Hill at sunrise, and you will see something that stops most travelers mid-step: a wall of snow peaks stretching across the horizon. It is breathtaking — and completely disorienting if you do not know what you are looking at.
              </p>
              <p>
                This guide breaks down how experienced trekking guides identify Himalayan peaks by shape, elevation, position, and viewpoint angle.
              </p>
            </div>

            {/* Section 1: Interactive Filter & Mountain Directory Cards */}
            <div id="peak-directory" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  Major Peaks &amp; Field Profiles
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${
                      filter === "all" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    All Peaks
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("8000m")}
                    className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${
                      filter === "8000m" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    8,000m+ Giants
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("7000m")}
                    className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${
                      filter === "7000m" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    7,000m+ Peaks
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("sacred")}
                    className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${
                      filter === "sacred" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    Sacred Peaks
                  </button>
                </div>
              </div>

              <div className="grid gap-6">
                {filteredPeaks.map((peak, idx) => (
                  <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                      <h3 className="font-extrabold text-stone-950 text-xl">{peak.name}</h3>
                      <span className="text-xs font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                        {peak.height}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Signature Shape</span>
                        <span className="font-semibold text-stone-900 mt-0.5 block">{peak.shape}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">ID Difficulty</span>
                        <span className="font-bold text-emerald-700 mt-0.5 block">{peak.diff}</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Best Viewpoint</span>
                        <span className="font-semibold text-stone-800 mt-0.5 block">{peak.viewpoint}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {peak.profile}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Mountain Identification Chart Table */}
            <div id="mountain-chart" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick-Reference Mountain Comparison Chart
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Peak Name</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Signature Shape</th>
                      <th className="py-4 px-4 sm:px-6">ID Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Best Viewpoint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {peaks.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.height}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.shape}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-stone-900">{row.diff}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.viewpoint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Field Identification Techniques */}
            <div id="field-techniques" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How to Identify Peaks Like a Local Guide
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🔺 Pyramid vs. Wall vs. Fishtail</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Dhaulagiri I is a symmetrical pyramid. Annapurna South is a long vertical snow wall. Machhapuchhre is a sharp fishtail twin-summit.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📐 Relative Height &amp; Distance</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Dhaulagiri I (8,167m) is ~1,000m taller than Annapurna South (7,219m). However, perspective distortion can make closer 6,000m peaks look taller.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🌅 Sunrise &amp; Lighting Angles</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    First morning light hits east-facing peaks first (Annapurna South and Machhapuchhre) before turning golden across Dhaulagiri to the west.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📱 Panorama Boards &amp; Offline Apps</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Photograph physical panorama charts at teahouses in Dobato and Khopra Ridge. Use PeakFinder offline to confirm questionable peaks.
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
                  Guided Mountain Photography
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek With Himalayan Panorama Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Ready to see these iconic peaks in person? Book a guided photography trek with Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091) for expert real-time mountain identification on the trail.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan Photography Trek
                  </Link>
                  <Link
                    href="/mountains/dhaulagiri-views-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Dhaulagiri Views Guide
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
                <a href="#peak-directory" className="block hover:text-emerald-600 transition">
                  • Major Peak Directory
                </a>
                <a href="#mountain-chart" className="block hover:text-emerald-600 transition">
                  • Mountain Comparison Chart
                </a>
                <a href="#field-techniques" className="block hover:text-emerald-600 transition">
                  • Field ID Techniques
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Mountain Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">
                      Dhaulagiri Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 underline">
                      Annapurna South Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 underline">
                      Machhapuchhre Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 underline">
                      Best Photography Spots
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
