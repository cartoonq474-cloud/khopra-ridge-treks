import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Nilgiri Views from Khopra Ridge: Complete Mountain & Photography Guide",
  description:
    "Discover the Nilgiri Views from Khopra Ridge — the three summits, best sunrise and sunset spots, photography tips, and the seasons that offer the clearest Himalayan panorama.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/nilgiri-views",
  },
  openGraph: {
    title: "Nilgiri Views from Khopra Ridge: Complete Mountain & Photography Guide",
    description:
      "Discover the Nilgiri Views from Khopra Ridge — the three summits, best sunrise and sunset spots, photography tips, and the seasons that offer the clearest Himalayan panorama.",
    url: "https://khopraridgetrek.com/mountains/nilgiri-views",
    type: "article",
  },
};

export default function NilgiriViewsPage() {
  const stats = [
    { label: "Nilgiri North", value: "7,061 m (23,166 ft)" },
    { label: "Nilgiri Central", value: "6,940 m (22,769 ft)" },
    { label: "Nilgiri South", value: "6,839 m (22,437 ft)" },
    { label: "Gorge Drop", value: "6,000m+ Vertical Drop to Kali Gandaki" },
  ];

  const faqs = [
    {
      q: "Can you see all three Nilgiri peaks from Khopra Ridge?",
      a: "Yes. Nilgiri North, Central, and South are all clearly visible from Khopra Ridge. Nilgiri South is the closest of the three and displays the sharpest, most intricate ice-fluted details.",
    },
    {
      q: "Which Nilgiri summit is closest to Khopra Ridge?",
      a: "Nilgiri South (6,839m) sits closest to Khopra Ridge. Its impressive vertical ice flutings and glaciated southwest face dominate the northern vista.",
    },
    {
      q: "Why is Nilgiri so famous among mountain photographers?",
      a: "Nilgiri's fame comes from how dramatically it rises directly out of the deep Kali Gandaki Gorge, combined with its vertical ice flutings that catch alpenglow differently at sunrise and sunset.",
    },
    {
      q: "What is the elevation of Nilgiri South?",
      a: "Nilgiri South stands at 6,839 meters (22,437 feet), making it the lowest in absolute altitude of the three Nilgiri peaks, but visually the most striking and prominent from Khopra Ridge.",
    },
    {
      q: "What is the best time of day to view Nilgiri from Khopra Ridge?",
      a: "Sunrise generally offers the crispest atmosphere as golden alpenglow sweeps across all three summits from Nilgiri North down to South. Sunset provides a warmer, softer glow against evening clouds.",
    },
    {
      q: "Which season offers the clearest mountain views of Nilgiri?",
      a: "Autumn (September through November) typically offers the highest visibility, followed closely by winter. Spring is also excellent, particularly in the mornings before thermal clouds build up.",
    },
    {
      q: "Is Khopra Ridge better than Poon Hill for viewing Nilgiri?",
      a: "Yes. Khopra Ridge sits higher (3,660m), brings you much closer to Nilgiri across the open sky, and offers a quiet, uncrowded atmosphere compared to the busy viewing platform at Poon Hill.",
    },
    {
      q: "What other mountains can you see alongside Nilgiri from Khopra?",
      a: "Alongside Nilgiri, you can view Dhaulagiri (8,167m), Annapurna South (7,219m), Machhapuchhre (6,993m), Hiunchuli, Tukuche Peak, and Fang Peak (Varaha Shikhar).",
    },
    {
      q: "Is Nilgiri easy to photograph from Khopra Ridge?",
      a: "Yes. The unobstructed ridgeline allows for easy framing with standard wide-angle lenses (16-35mm equivalent). A telephoto lens (70-200mm) is ideal for isolating the vertical ice flutings of Nilgiri South.",
    },
    {
      q: "Do you need a guide to enjoy the Khopra Ridge viewpoint?",
      a: "While the trail is clear, a local guide ensures safety along remote ridge stretches, manages community lodge bookings, and provides expert insight into mountain weather windows.",
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
            <span className="text-emerald-400">Nilgiri Views</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Peak Profile
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Nilgiri Views from Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete mountain, photography, and seasonal guide to the ice-fluted wall of the Nilgiri Massif.
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

      {/* Main Article Body & Sidebar */}
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
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We guide groups along the Khopra Ridge community circuit year-round and regularly publish trail advisories, weather updates, and mountain photography guides.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                When you crest the final grassy switchback onto Khopra Ridge, the northern skyline stops you mid-step. A wall of ice-fluted rock rises directly ahead, so close it feels almost within reach — this is Nilgiri, one of the most striking mountain massifs in the Annapurna region, and the reason many trekkers say Khopra Ridge offers the finest panorama on the whole circuit.
              </p>
              <p>
                We have guided trekkers to this ridge for years, and the reaction is always the same: silence, then a scramble for cameras. In this guide, we will walk you through everything that makes the Nilgiri views from Khopra Ridge so exceptional — the three summits that make up the massif, why this particular viewpoint beats out busier alternatives, when to come for the clearest skies, and how to photograph the mountain properly.
              </p>
            </div>

            {/* Section 1: Geography & Kali Gandaki */}
            <div id="geography-and-location" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Where Is Nilgiri and Why Is It So Prominent from Khopra Ridge?
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">The Nilgiri Massif in the Annapurna Himal</h3>
                <p>
                  Nilgiri sits at the western edge of the Annapurna Himal, forming a massive natural wall between the main Annapurna range and the <Link href="/mountains/dhaulagiri-views-khopra" className="text-emerald-700 hover:underline font-semibold">Kali Gandaki Valley</Link>. Geographically, it belongs to the same mountain system as Annapurna South and Dhaulagiri, though it is often overlooked in general trekking content because it does not carry a base camp trek of its own.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">The Role of the Kali Gandaki Gorge</h3>
                <p>
                  Directly below Nilgiri&apos;s northern face runs the Kali Gandaki Gorge, one of the deepest river valleys on Earth. The dramatic drop from summit to gorge floor — well over 6,000 vertical meters in places — is part of why Nilgiri feels so massive from Khopra Ridge. There is no gentle foothill buildup softening the scale; the mountain simply rises straight out of the canyon, ice and rock exposed the entire way up.
                </p>

                <div className="rounded-xl bg-stone-100 p-5 border border-stone-200 text-sm text-stone-700 space-y-2">
                  <h4 className="font-bold text-stone-900">Open Sky Viewing Perspective</h4>
                  <p>
                    From Khopra Ridge (3,660m), trekkers face roughly north-northwest toward the Nilgiri massif across completely open space. Because Khopra sits high above the forest canopy with no intervening hills breaking the sightline, you view Nilgiri in direct eye-level proximity.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Three Nilgiri Peaks */}
            <div id="three-peaks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Meet the Three Nilgiri Peaks
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Nilgiri is not a single summit — it is a massif made up of three connected peaks, each with a distinct profile along the skyline:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold">7,061 m (23,166 ft)</span>
                  <h3 className="text-lg font-bold text-stone-950">Nilgiri North</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The highest of the three summits, sitting furthest to the north. It appears as a sharp, ice-armored spire that catches the first pre-dawn golden light before neighboring peaks.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold">6,940 m (22,769 ft)</span>
                  <h3 className="text-lg font-bold text-stone-950">Nilgiri Central</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Connects North and South through a heavily glaciated ridge wall. It acts as the high-altitude bridge unifying the massif into a continuous curtain of snow and ice.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">6,839 m (22,437 ft)</span>
                  <h3 className="text-lg font-bold text-stone-950">Nilgiri South</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The closest summit to Khopra Ridge and the star of the view. Its vertical ice flutings cut sharp grooves down the face, visible in crisp detail without telephoto gear.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Why Khopra Ridge Superior */}
            <div id="khopra-viewpoint-advantage" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Offers the Best Nilgiri Views
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">Elevated Ridge (3,660m)</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Khopra Ridge sits well above the forest line. At this altitude, there are no ridgelines creeping in front of Nilgiri, giving you a 100% clean horizon from summit down into the valley cloud layer.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">Uncrowded Community Solitude</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Because Khopra is part of a community-owned Magar lodge circuit, you share the sunrise view with a handful of fellow trekkers instead of the hundreds crowding Poon Hill each morning.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Visual Features (Ice Flutings) */}
            <div id="ice-flutings" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Makes Nilgiri Visually Unique?
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Ice Flutings and Glacier Formations</h3>
                <p>
                  The most distinctive feature of Nilgiri, especially Nilgiri South, is its ice fluting — long, vertical grooves carved into the snowpack by repeated freeze-thaw cycles and wind erosion. These flutings reflect morning and evening light differently, making the mountain appear to shift in texture throughout the day.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Massive Ridge Scale</h3>
                <p>
                  What surprises most first-time visitors is how wide and wall-like the massif appears. Rather than a solitary pyramid, Nilgiri forms a continuous 180-degree white curtain across the northern skyline.
                </p>
              </div>
            </div>

            {/* Section 5: Sunrise vs Sunset */}
            <div id="sunrise-sunset" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Sunrise vs. Sunset Views of Nilgiri
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">🌅 Sunrise Alpenglow</span>
                  <h3 className="text-lg font-bold text-stone-900">Golden Peak Transition</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Pre-dawn blue hour transitions into vibrant gold as light hits Nilgiri North first, before sweeping down to Nilgiri South. The entire ridge turns brilliant pink-orange for 15-20 minutes.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">🌇 Sunset Reflection</span>
                  <h3 className="text-lg font-bold text-stone-900">Soft Glacier Shadow Contrast</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Because the sun sets behind the trekker in the west, Nilgiri stays lit long after lower valleys fall dark, creating deep, dramatic shadows inside the vertical ice flutings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Photography Guide */}
            <div id="photography-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Nilgiri Photography Guide for Trekkers
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Recommended Gear Setup</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                  <li><strong>Wide-Angle Lens (16–35mm):</strong> Essential for capturing the full Nilgiri wall alongside neighboring Dhaulagiri and Annapurna South.</li>
                  <li><strong>Telephoto Lens (70–200mm):</strong> Perfect for isolating the intricate vertical ice flutings of Nilgiri South.</li>
                  <li><strong>Tripod:</strong> Critical for low-light blue hour shots prior to pre-dawn alpenglow.</li>
                </ul>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Composition Tips</h3>
                <p>
                  Incorporate foreground elements like the rocky ridge line, stone chortens, or prayer flags to give photos depth and a true sense of Himalayan scale.
                </p>
              </div>
            </div>

            {/* Section 7: Panorama Mountain List */}
            <div id="panorama-peaks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Mountains Visible Alongside Nilgiri
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Nilgiri anchor-points a complete 360-degree mountain amphitheater from Khopra Ridge:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">Dhaulagiri (8,167m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 underline">Annapurna South (7,219m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 underline">Machhapuchhre (6,993m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  Hiunchuli (6,441m)
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  Tukuche Peak (6,920m)
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  Fang Peak (7,647m)
                </div>
              </div>
            </div>

            {/* Section 8: Seasons */}
            <div id="best-seasons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Seasons for Clear Nilgiri Views
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">🍂 Autumn (Oct – Nov)</span>
                  <h4 className="font-bold text-stone-900 text-base">Clear Skies & High Visibility</h4>
                  <p className="text-xs text-stone-600">The single best season. Stable air, minimal clouds, and sharp mountain contrast.</p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">🌸 Spring (Mar – May)</span>
                  <h4 className="font-bold text-stone-900 text-base">Rhododendron Blooms</h4>
                  <p className="text-xs text-stone-600">Great morning clarity with blooming flowers on forest trails below.</p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">❄️ Winter (Dec – Feb)</span>
                  <h4 className="font-bold text-stone-900 text-base">Fresh Snow & Crisp Air</h4>
                  <p className="text-xs text-stone-600">Freezing temperatures but exceptionally clear morning photography windows.</p>
                </div>
              </div>
            </div>

            {/* Section 9: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Nilgiri Views
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
                  Book Guided Nilgiri Panorama Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Stand in Front of the Nilgiri Wall?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your Khopra Ridge Trek with licensed operator <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We handle all permits, community eco-lodge stays, and local guide arrangements.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Trek Dates
                  </Link>
                  <Link
                    href="/tours/khayer-lake-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Sacred Lake Itinerary
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
                <a href="#geography-and-location" className="block hover:text-emerald-600 transition">
                  • Location & Kali Gandaki
                </a>
                <a href="#three-peaks" className="block hover:text-emerald-600 transition">
                  • The Three Nilgiri Peaks
                </a>
                <a href="#khopra-viewpoint-advantage" className="block hover:text-emerald-600 transition">
                  • Khopra Viewpoint Advantage
                </a>
                <a href="#ice-flutings" className="block hover:text-emerald-600 transition">
                  • Ice Flutings & Texture
                </a>
                <a href="#sunrise-sunset" className="block hover:text-emerald-600 transition">
                  • Sunrise vs Sunset Views
                </a>
                <a href="#photography-guide" className="block hover:text-emerald-600 transition">
                  • Photography Guide
                </a>
                <a href="#panorama-peaks" className="block hover:text-emerald-600 transition">
                  • Surrounding Mountains
                </a>
                <a href="#best-seasons" className="block hover:text-emerald-600 transition">
                  • Best Seasons
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Mountain Pages</span>
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
                      Machhapuchhre Views Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-700 underline">
                      Khopra Ridge Viewpoint Hub
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
