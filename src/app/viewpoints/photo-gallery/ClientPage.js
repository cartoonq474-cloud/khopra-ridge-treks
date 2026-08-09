"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState("all");

  const galleryItems = [
    {
      title: "Golden Sunrise over Annapurna South",
      category: "panoramas",
      tag: "Mountain Panorama",
      elevation: "3,660m (Khopra Ridge)",
      desc: "First morning light hitting the vertical face of Annapurna South (7,219m), turning glacier ice into radiant gold.",
      spot: "Khopra Ridge Viewpoint",
    },
    {
      title: "Dhaulagiri I Sunset Glow",
      category: "panoramas",
      tag: "8,000m Peak",
      elevation: "3,660m (Khopra Ridge)",
      desc: "Dhaulagiri I (8,167m) holding rich crimson light across the Kali Gandaki gorge as dusk settles over the western horizon.",
      spot: "Western Ridge Outlook",
    },
    {
      title: "Mirror Reflection of Sacred Khayer Lake",
      category: "khayer",
      tag: "Sacred Alpine Water",
      elevation: "4,660m (Khayer Lake)",
      desc: "Pristine, still turquoise waters reflecting the surrounding Annapurna peaks in early morning windless conditions.",
      spot: "Khayer Lake Shoreline",
    },
    {
      title: "Machhapuchhre (Fishtail) Above Rhododendron Canopy",
      category: "panoramas",
      tag: "Sacred Icon",
      elevation: "3,180m (Muldai Viewpoint)",
      desc: "The sharp double-pointed summit of Machhapuchhre framing spring rhododendron forests in bloom.",
      spot: "Muldai Peak Lookout",
    },
    {
      title: "Traditional Stone Terraces of Swanta Village",
      category: "culture",
      tag: "Magar Heritage",
      elevation: "2,200m (Swanta)",
      desc: "Organic potato and barley terraces built into steep slopes below stone-roofed Magar farmhouses.",
      spot: "Swanta Upper Ridge",
    },
    {
      title: "Gurung Architecture & Cobblestone Lanes in Ghandruk",
      category: "culture",
      tag: "Cultural Village",
      elevation: "1,940m (Ghandruk)",
      desc: "Preserved stone architecture and slate alleyways framed by Annapurna South in the background.",
      spot: "Ghandruk Cultural Precinct",
    },
    {
      title: "Spring Rhododendron Canopy Trail",
      category: "nature",
      tag: "Flora & Forest",
      elevation: "2,850m (Dobato-Tadapani Forest)",
      desc: "Corridors of deep red and pink national flower blooms filtering morning sunlight along misty forest trails.",
      spot: "Tadapani Ridge Forest",
    },
    {
      title: "High Alpine Grazing Meadow at Bayeli Kharka",
      category: "nature",
      tag: "Alpine Meadow",
      elevation: "3,450m (Bayeli)",
      desc: "Open pastureland where yak and mule herds graze beneath sweeping 360-degree mountain horizons.",
      spot: "Bayeli High Pastures",
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const summarySpecs = [
    { label: "Gallery Categories", value: "4 Distinct Visual Themes" },
    { label: "Key Locations", value: "Khopra Ridge, Khayer & Villages" },
    { label: "Seasonal Highlights", value: "Spring Blooms & Autumn Skies" },
    { label: "Elevation Range", value: "1,940m to 4,660m" },
  ];

  const faqs = [
    {
      q: "What are the best photo spots on the Khopra Ridge Trek?",
      a: "The main Khopra Ridge viewpoint, Khayer Lake (4,660m), Muldai Viewpoint, Bayeli Kharka alpine meadow, and the rhododendron forests between Ghandruk and Swanta are the standout spots.",
    },
    {
      q: "Is Khopra Ridge Trek good for photography?",
      a: "Yes. Its wide 360-degree mountain panoramas, sacred high-altitude lake reflections, traditional Magar villages, and quiet trails offer far superior composition freedom compared to crowded routes like Poon Hill.",
    },
    {
      q: "Which mountains can you photograph from Khopra Ridge?",
      a: "Annapurna South (7,219m), Dhaulagiri I (8,167m), Machhapuchhre (6,993m), Nilgiri North (7,061m), Hiunchuli, and Tukuche Peak are visible in a single panoramic sweep.",
    },
    {
      q: "Can you see Dhaulagiri from Khopra Ridge?",
      a: "Yes, Dhaulagiri I is clearly visible directly to the west. It holds warm sunset light longer than eastern peaks, making it an exceptional subject for evening photography.",
    },
    {
      q: "What is the best season for Khopra Ridge photography?",
      a: "Autumn (October–November) offers the clearest air and sharpest mountain visibility. Spring (March–May) brings vibrant red rhododendron blooms throughout the forest sections.",
    },
    {
      q: "Is Khayer Lake worth photographing?",
      a: "Yes. At 4,660m, its sacred turquoise waters create near-perfect mirror reflections of the Annapurna peaks on calm early mornings.",
    },
    {
      q: "Where can I take sunrise photos on Khopra Ridge?",
      a: "The main viewpoint above Khopra Danda lodge is the premier sunrise location, offering front-row views of the first light hitting Annapurna South.",
    },
    {
      q: "Can I use a drone on the Khopra Ridge Trek?",
      a: "Drone flight is regulated within the Annapurna Conservation Area (ACAP). Trekkers must obtain official permission from the ACAP and Civil Aviation Authority offices before flying.",
    },
    {
      q: "What camera equipment should I bring for Khopra Ridge?",
      a: "A lightweight body with a versatile zoom lens (e.g. 24-70mm or 24-105mm), spare batteries stored warm inside your jacket, and a compact tripod for sunrise bracketed exposures.",
    },
    {
      q: "Is Khopra Ridge better for photography than Poon Hill?",
      a: "Khopra Ridge has significantly fewer trekkers, providing clean horizons without tripod crowds, eye-level mountain proximity, and access to sacred Khayer Lake.",
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
            <span className="text-emerald-400">Photo Gallery</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Real Trail Photography
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek Photography Gallery
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Explore real images of Annapurna South, Dhaulagiri, sacred Khayer Lake, traditional Magar villages, and rhododendron trail ecosystems captured along Nepal&apos;s finest offbeat circuit.
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
                📷
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Authentic Trail Photography &amp; Field Insights</h4>
                <p>
                  All photography showcases actual departures organized by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We assist photographers with lighting timing, custom rest stops, and permit logistics.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khopra Ridge sits in a quiet corner of the Annapurna region, away from crowded teahouse queues. This photography gallery brings together authentic trail moments — mountain panoramas, sacred alpine waters, blooming forests, and traditional villages.
              </p>
              <p>
                Every collection below highlights specific photography spots and ideal lighting windows along the trail.
              </p>
            </div>

            {/* Section 1: Interactive Gallery Category Tabs & Cards */}
            <div id="gallery-grid" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  Curated Photography Collections
                </h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveTab("all")}
                    className={`px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                      activeTab === "all" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    All Collections
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("panoramas")}
                    className={`px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                      activeTab === "panoramas" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    Himalayan Peaks
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("khayer")}
                    className={`px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                      activeTab === "khayer" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    Khayer Lake (4,660m)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("culture")}
                    className={`px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                      activeTab === "culture" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    Villages &amp; Culture
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("nature")}
                    className={`px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                      activeTab === "nature" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-stone-600 border-stone-200"
                    }`}
                  >
                    Forests &amp; Meadows
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {filteredItems.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <span className="text-xs font-bold text-emerald-700 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-semibold text-stone-400">{item.elevation}</span>
                      </div>
                      <h3 className="font-extrabold text-stone-950 text-lg sm:text-xl leading-snug">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-[10px] uppercase font-bold text-stone-400">Photo Location</span>
                      <span className="font-bold text-stone-900">{item.spot}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Best Photo Spots Breakdown */}
            <div id="photo-spots" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Prime Photography Spots Along the Circuit
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🌅 Khopra Ridge Sunrise Viewpoint</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Offers an uninterrupted 180-degree panorama spanning Dhaulagiri to Machhapuchhre. Arrive 30 minutes before dawn to shoot gold peak reflections.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏞️ Sacred Khayer Lake Shoreline (4,660m)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Surrounded by stark alpine glacial basins. Early morning hours offer calm waters ideal for sharp mountain reflection compositions.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🏡 Swanta &amp; Ghandruk Terraced Villages</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Capture organic farming terraces, traditional slate roofing, and daily Magar and Gurung village life framed by high Himalayan peaks.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🌺 Dobato &amp; Tadapani Rhododendron Canopies</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Spring turns misty forest trails into vibrant red and pink flower tunnels, framing distant views of Fishtail and Annapurna South.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Seasonal Photography Guide */}
            <div id="seasonal-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Photography Conditions
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900">Autumn (October–November): Maximum Sky Clarity</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  The premier window for crisp landscape panoramas. Dry post-monsoon air provides crisp visibility stretching dozens of kilometers across the range.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900">Spring (March–May): Wildflower Canopies &amp; Warm Light</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Rhododendron forests explode in red and pink blooms. Mild temperatures create beautiful morning lighting conditions through lower forest sections.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900">Winter (December–February): Dramatic Snow Scenes</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Snow coats the high ridge and Khayer Lake basin. Demands extra battery care, but rewards with stark, quiet, high-contrast mountain imagery.
                </p>
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
                  Custom Photography Departures
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Khopra Ridge Photography Expedition
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book with local Pokhara operator <strong>EMD Treks</strong> (NTB License #8928-091) for custom itineraries tailored around sunrise shoots, Khayer Lake reflection timing, and porter gear support.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Book Photography Trek
                  </Link>
                  <Link
                    href="/viewpoints/best-photography-spots"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Best Photography Spots Guide
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
                <a href="#gallery-grid" className="block hover:text-emerald-600 transition">
                  • Photo Collections
                </a>
                <a href="#photo-spots" className="block hover:text-emerald-600 transition">
                  • Prime Photo Spots
                </a>
                <a href="#seasonal-guide" className="block hover:text-emerald-600 transition">
                  • Seasonal Conditions
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Photo Resources</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 underline">
                      Best Photography Spots
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-photography-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Photo Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/sunrise-at-khopra-ridge" className="hover:text-emerald-700 underline">
                      Sunrise at Khopra Ridge
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers
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
