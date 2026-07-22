import React from "react";
import Link from "next/link";

export const metadata = {
  title: "What Mountains Can You See from Khopra Ridge? Complete Himalayan Peak Guide",
  description:
    "Discover every mountain visible from Khopra Ridge, including Dhaulagiri, Annapurna South, Machhapuchhre, and Nilgiri. Expert identification tips, seasonal advice, and photography guidance included.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/what-mountains-visible",
  },
  openGraph: {
    title: "What Mountains Can You See from Khopra Ridge? Complete Himalayan Peak Guide",
    description:
      "Discover every mountain visible from Khopra Ridge, including Dhaulagiri, Annapurna South, Machhapuchhre, and Nilgiri. Expert identification tips, seasonal advice, and photography guidance included.",
    url: "https://khopraridgetrek.com/mountains/what-mountains-visible",
    type: "article",
  },
};

export default function WhatMountainsVisiblePage() {
  const stats = [
    { label: "Panorama Width", value: "360° Dual Massif Sweep" },
    { label: "Highest Visible Peak", value: "Dhaulagiri I (8,167 m)" },
    { label: "Key Ranges", value: "Dhaulagiri, Annapurna & Nilgiri" },
    { label: "Viewpoint Altitude", value: "3,660 m (12,007 ft)" },
  ];

  const mountainRanges = [
    {
      title: "Dhaulagiri Massif (Western Skyline)",
      description: "Dominating the western horizon across the Kali Gandaki Gorge:",
      peaks: [
        {
          name: "Dhaulagiri I",
          height: "8,167 m (26,795 ft)",
          slug: "/mountains/dhaulagiri-views-khopra",
          desc: "The 7th-highest mountain on earth. A massive white pyramid towering directly across the world's deepest gorge.",
        },
        {
          name: "Tukuche Peak",
          height: "6,920 m (22,703 ft)",
          slug: "/mountains/tukuche-peak-views",
          desc: "A broad glaciated snow dome sitting immediately north-adjacent to Dhaulagiri I.",
        },
        {
          name: "Dhaulagiri II, III, IV & V",
          height: "7,200m – 7,751m",
          slug: "/mountains/dhaulagiri-views-khopra",
          desc: "A massive, continuous wall of connected 7,000m+ icy peaks extending northwest along the horizon.",
        },
      ],
    },
    {
      title: "Annapurna Massif (Eastern Panorama)",
      description: "Framing the eastern sky in a dramatic wall of ice and sheer rock:",
      peaks: [
        {
          name: "Annapurna South",
          height: "7,219 m (23,684 ft)",
          slug: "/mountains/annapurna-south-views",
          desc: "The closest, most imposing 7,000m wall rising directly east above the Khopra ridgeline.",
        },
        {
          name: "Hiunchuli",
          height: "6,441 m (21,132 ft)",
          slug: "/mountains/hiunchuli-views",
          desc: "Steep, glacier-streaked peak forming the southern rampart of the Annapurna Sanctuary.",
        },
        {
          name: "Machhapuchhre (Fishtail)",
          height: "6,993 m (22,943 ft)",
          slug: "/mountains/machhapuchhre-views",
          desc: "Nepal's iconic sacred peak with its unmistakable double-pronged summit spire.",
        },
        {
          name: "Gangapurna",
          height: "7,455 m (24,457 ft)",
          slug: "/mountains/gangapurna-views",
          desc: "High fluted snow dome and hanging glaciers visible further northeast beyond Nilgiri.",
        },
      ],
    },
    {
      title: "Nilgiri Range (Northern Skyline)",
      description: "Forming an icy wall framing the northern reach toward Mustang:",
      peaks: [
        {
          name: "Nilgiri North",
          height: "7,061 m (23,166 ft)",
          slug: "/mountains/nilgiri-views",
          desc: "The highest Nilgiri summit, displaying massive ice flanks visible in sharp morning light.",
        },
        {
          name: "Nilgiri South",
          height: "6,839 m (22,437 ft)",
          slug: "/mountains/nilgiri-views",
          desc: "Characterized by intricate, vertical ice flutings dropping into the Kali Gandaki basin.",
        },
        {
          name: "Baraha Shikhar & Gurja Himal",
          height: "7,647 m / 7,193 m",
          slug: "/mountains/dhaulagiri-views-khopra",
          desc: "Distant high peaks visible on exceptionally clear autumn and winter mornings.",
        },
      ],
    },
  ];

  const faqs = [
    {
      q: "What mountains can you see from Khopra Ridge?",
      a: "From Khopra Ridge (3,660m), you can see Dhaulagiri I, II, III, IV, and V, Tukuche Peak, Nilgiri North and South, Annapurna South, Hiunchuli, Machhapuchhre (Fishtail), and Gangapurna, with Baraha Shikhar and Gurja Himal visible on exceptionally clear days.",
    },
    {
      q: "Is Dhaulagiri visible from Khopra Ridge?",
      a: "Yes! Dhaulagiri I (8,167m) dominates the western horizon directly across the Kali Gandaki Valley. It is one of the closest and most dramatic 8,000m mountain views in Nepal.",
    },
    {
      q: "Can you see Annapurna South from Khopra Ridge?",
      a: "Yes. Annapurna South (7,219m) stands directly to the east of Khopra Ridge, close enough that its glaciers and snowfields fill the horizon.",
    },
    {
      q: "Is Machhapuchhre (Fishtail) visible from Khopra Ridge?",
      a: "Yes. Machhapuchhre (6,993m) is clearly visible along the eastern skyline. Its iconic fishtail double summit makes it the easiest mountain to identify on the ridge.",
    },
    {
      q: "Which is the highest mountain visible from Khopra Ridge?",
      a: "Dhaulagiri I, at 8,167 meters (26,795 ft), is the highest peak visible from Khopra Ridge and the 7th-highest mountain in the world.",
    },
    {
      q: "How many Himalayan peaks can be seen from Khopra Ridge?",
      a: "On a clear morning, you can identify roughly a dozen major named peaks across the Dhaulagiri, Annapurna, and Nilgiri ranges from a single vantage point.",
    },
    {
      q: "What is the best season for mountain views from Khopra Ridge?",
      a: "Autumn (late September through November) provides the sharpest, most reliable crystal-clear morning skies, followed by spring (March to May) before afternoon clouds form.",
    },
    {
      q: "Where is the best viewpoint on Khopra Ridge?",
      a: "The open ridge directly above the Khopra Community Lodge offers an unbroken 360-degree panorama of both the Dhaulagiri and Annapurna massifs without needing to trek further.",
    },
    {
      q: "Is Khopra Ridge better than Poon Hill for mountain scenery?",
      a: "Khopra Ridge offers a much wider dual-range panorama (both Dhaulagiri and Annapurna massifs up close) with zero crowds, whereas Poon Hill leans heavily toward the Annapurna side and is often heavily crowded.",
    },
    {
      q: "Can you see sunrise over the Annapurna Range from Khopra Ridge?",
      a: "Yes. Sunrise is the absolute highlight at Khopra Ridge. Early morning sun rays strike the summit of Dhaulagiri I and Annapurna South in vivid golden alpenglow tones.",
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
            <Link href="/mountains/what-mountains-visible" className="hover:text-emerald-400 transition">Mountains</Link>
            <span>/</span>
            <span className="text-emerald-400">Peak Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Himalayan Peak Identification
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              What Mountains Can You See from Khopra Ridge?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Standing on Khopra Ridge at 3,660 meters, you get something very few treks in Nepal can offer: a single, unbroken sweep of Himalayan giants from two major ranges at once.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
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
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We guide trekkers along Khopra Ridge year-round and provide comprehensive mountain identification guides based on direct trail checks.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Standing on Khopra Ridge at 3,660 meters, you get something very few treks in Nepal can offer: a single, unbroken sweep of Himalayan giants from two different mountain ranges at once. On one side, the Dhaulagiri massif rises in a wall of ice and rock. On the other, the Annapurna range unfolds peak after peak, with Machhapuchhre&apos;s unmistakable fishtail summit cutting into the sky between them.
              </p>
              <p>
                We&apos;ve guided trekkers along this ridge for years, and the question we hear most often is simple: <em>which mountains am I actually looking at?</em> This guide answers that question in full. We&apos;ll walk you through every major peak visible from Khopra Ridge, where each sits on the horizon, how to tell them apart, and when visibility is at its sharpest.
              </p>
            </div>

            {/* Section 1: Why Khopra Ridge Offers Exceptional Views */}
            <div id="why-khopra-views" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Offers Some of Nepal&apos;s Best Mountain Views
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Unique Position Between Annapurna &amp; Dhaulagiri</h3>
                <p>
                  Khopra Ridge sits almost exactly between two of Nepal&apos;s largest Himalayan massifs. Look west and the Dhaulagiri range fills the skyline. Look east and the Annapurna range takes over, with Machhapuchhre marking the boundary between them. Most viewpoints in the region favor one range over the other; Khopra Ridge gives you front-row seats to both.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">The Kali Gandaki Gorge Advantage</h3>
                <p>
                  The Kali Gandaki Valley, separating Dhaulagiri and Annapurna, is one of the deepest river gorges on earth. That depth keeps the land between Khopra Ridge and the peaks low and open, ensuring no intervening hills or ridges block your sightline to the 7,000m and 8,000m giants.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Treeless Ridgeline Clearance</h3>
                <p>
                  Running along an open spine above the tree line at 3,660m, Khopra Ridge provides an unobstructed 180° to 360° panorama with zero forest canopy interference.
                </p>
              </div>
            </div>

            {/* Section 2: Complete Range-by-Range Peak Directory */}
            <div id="peak-directory" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Complete Mountain Directory: Peak by Peak
              </h2>

              {mountainRanges.map((rangeGroup, idx) => (
                <div key={idx} className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-950 border-b border-stone-100 pb-3">
                    {rangeGroup.title}
                  </h3>
                  <p className="text-sm text-stone-600 italic mb-4">{rangeGroup.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rangeGroup.peaks.map((peak, pIdx) => (
                      <div key={pIdx} className="rounded-xl border border-stone-100 bg-stone-50/80 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <Link href={peak.slug} className="font-bold text-stone-900 text-base hover:text-emerald-700 transition underline decoration-stone-300">
                            {peak.name}
                          </Link>
                          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                            {peak.height}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">{peak.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 3: How to Identify Each Mountain */}
            <div id="identification-tips" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How to Identify Each Mountain from the Ridge
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">1. Shape &amp; Profile</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Start with <Link href="/mountains/machhapuchhre-views" className="text-emerald-700 hover:underline font-semibold">Machhapuchhre</Link>—its twin-pronged fishtail summit is instant to recognize and serves as your eastern anchor.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">2. Scale &amp; Dominance</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    To the west, look for the massive pyramid of <Link href="/mountains/dhaulagiri-views-khopra" className="text-emerald-700 hover:underline font-semibold">Dhaulagiri I (8,167m)</Link>. Its sheer bulk dwarfs neighboring peaks.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">3. Triangulation</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <Link href="/mountains/annapurna-south-views" className="text-emerald-700 hover:underline font-semibold">Annapurna South</Link> sits east of Khopra, with <Link href="/mountains/hiunchuli-views" className="text-emerald-700 hover:underline font-semibold">Hiunchuli</Link> tucked to its right and <Link href="/mountains/gangapurna-views" className="text-emerald-700 hover:underline font-semibold">Gangapurna</Link> behind.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Best Time & Seasons for Clear Visibility */}
            <div id="seasons-visibility" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Seasons &amp; Times for Mountain Visibility
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg">Autumn (Sept – Nov) ★★★★★</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Post-monsoon autumn brings the clearest, crispest mountain skies of the year with virtually zero atmospheric haze.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg">Spring (March – May) ★★★★☆</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Spring brings vibrant rhododendron blooms along lower trails. Early mornings deliver clear vistas before thermal cloud cover builds.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg">Winter (Dec – Feb) ★★★★☆</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Cold, crisp winter air offers pin-sharp clarity for photography. Requires warm gear for freezing morning temperatures.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg">Sunrise vs Sunset Light</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Sunrise is the single best time. Low-angle golden light strikes Dhaulagiri I and Annapurna South while air is still and cloudless.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Viewpoint Comparisons */}
            <div id="viewpoint-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs. Poon Hill &amp; Muldai Viewpoint
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge (3,660m)</th>
                      <th className="py-4 px-4 sm:px-6">Poon Hill (3,210m)</th>
                      <th className="py-4 px-4 sm:px-6">Muldai Viewpoint (3,630m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Panorama Scope</td>
                      <td className="py-4 px-4 sm:px-6 text-emerald-700 font-bold">Dual Massif (Annapurna &amp; Dhaulagiri)</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Annapurna dominant</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Wide 360° sweep</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Dhaulagiri Proximity</td>
                      <td className="py-4 px-4 sm:px-6 text-emerald-700 font-bold">Direct eye-level across gorge</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Distant angle</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Good, but lower angle</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Crowd Levels</td>
                      <td className="py-4 px-4 sm:px-6 text-emerald-700 font-bold">Near Zero (Quiet Community Lodge)</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Heavy (300+ daily trekkers)</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Low to Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khopra Ridge Mountains
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
                  Book Guided Community Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to See the Dual Himalayan Panorama in Person?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Join licensed operator <strong>EMD Treks</strong> (Nepal Tourism Operator License #8928-091) on a guided Khopra Ridge community circuit. Let our local guides lead you to the finest viewpoints.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Departures
                  </Link>
                  <Link
                    href="/tours/khopra-poon-hill-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Packages
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
                <a href="#why-khopra-views" className="block hover:text-emerald-600 transition">
                  • Why Khopra Ridge Views
                </a>
                <a href="#peak-directory" className="block hover:text-emerald-600 transition">
                  • Complete Peak Directory
                </a>
                <a href="#identification-tips" className="block hover:text-emerald-600 transition">
                  • Mountain Identification Tips
                </a>
                <a href="#seasons-visibility" className="block hover:text-emerald-600 transition">
                  • Best Seasons &amp; Times
                </a>
                <a href="#viewpoint-comparison" className="block hover:text-emerald-600 transition">
                  • Viewpoint Comparison Table
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Individual Mountain Profiles</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">
                      Dhaulagiri Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 underline">
                      Annapurna South Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 underline">
                      Machhapuchhre Views
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/nilgiri-views" className="hover:text-emerald-700 underline">
                      Nilgiri Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/tukuche-peak-views" className="hover:text-emerald-700 underline">
                      Tukuche Peak Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/mountains/gangapurna-views" className="hover:text-emerald-700 underline">
                      Gangapurna Views Guide
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
