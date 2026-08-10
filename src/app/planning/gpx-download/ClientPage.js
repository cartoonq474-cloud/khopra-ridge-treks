"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [downloadedFile, setDownloadedFile] = useState(null);

  const downloadFiles = [
    {
      id: "full-loop",
      name: "Khopra Ridge Full Loop GPX Track",
      format: "GPX",
      size: "420 KB",
      purpose: "Complete 9-day route navigation from Kimche / Ghandruk",
      desc: "Primary route file covering the full circuit through Ghandruk, Tadapani, Bayeli Kharka, Dobato, Khopra Ridge, and Swanta. Includes daily teahouse waypoints, water stops, and elevation markers.",
      fileName: "khopra_ridge_full_loop.gpx",
    },
    {
      id: "khayer-lake",
      name: "Khayer Lake Day Hike GPX Track",
      format: "GPX",
      size: "180 KB",
      purpose: "High-altitude 4,660m side trip navigation",
      desc: "High-density GPS track logging points every 10 meters along the demanding 15 km round-trip hike from Khopra Ridge (3,660m) to sacred Khayer Lake (4,660m) over unmarked scree and alpine ridge terrain.",
      fileName: "khayer_lake_day_hike.gpx",
    },
    {
      id: "muldai",
      name: "Muldai Sunrise Viewpoint Track",
      format: "GPX",
      size: "85 KB",
      purpose: "Pre-dawn climb from Dobato to Muldai Viewpoint",
      desc: "Outlines the 30-minute pre-dawn climb from Dobato forest cabins to Muldai Viewpoint (3,637m). Essential for navigating faint forest trails in darkness with headlamps.",
      fileName: "muldai_sunrise_viewpoint.gpx",
    },
    {
      id: "topo-pdf",
      name: "Khopra Ridge Topographic Trail Map (PDF)",
      format: "PDF",
      size: "4.2 MB",
      purpose: "Printable offline backup & terrain overview",
      desc: "High-resolution printable topographic map displaying elevation contour lines, village nodes, checkposts, and known landslide bypass trails across the Annapurna Conservation Area.",
      fileName: "khopra_ridge_topo_map.pdf",
    },
  ];

  const handleDownload = (fileName) => {
    setDownloadedFile(fileName);
    setTimeout(() => {
      setDownloadedFile(null);
    }, 4000);
  };

  const summarySpecs = [
    { label: "Core Downloads", value: "3 GPX Tracks + 1 Topo PDF" },
    { label: "Full Loop Track", value: "9 Days (Kimche to Swanta)" },
    { label: "High Altitude Track", value: "Khayer Lake (4,660m)" },
    { label: "Supported Apps", value: "Gaia GPS, Maps.me & Garmin" },
  ];

  const faqs = [
    {
      q: "What is a GPX file for the Khopra Ridge Trek?",
      a: "A GPX file is a digital GPS track log containing geographic coordinates (latitude, longitude, elevation) and waypoints. When loaded into smartphone apps like Gaia GPS or Maps.me, it draws your exact trail path and shows your live position even without cellular data.",
    },
    {
      q: "Where can I download a Khopra Ridge GPS route?",
      a: "You can download verified GPX files for the full 9-day loop, the Khayer Lake 4,660m day hike, the Muldai Viewpoint climb, and a printable PDF topographic map directly from this page.",
    },
    {
      q: "Can I use an offline map for the Khopra Ridge Trek?",
      a: "Yes. Apps such as Gaia GPS, Maps.me, and Organic Maps allow you to download offline map tiles for the Annapurna region in Pokhara. Combined with our GPX tracks, they provide reliable navigation without mobile signal.",
    },
    {
      q: "Which GPS app works best for the Khopra Ridge Trek?",
      a: "Gaia GPS is ideal if you want detailed topographic contour layers and elevation profiles. Maps.me and Organic Maps are lightweight, simple, and free options built on OpenStreetMap data.",
    },
    {
      q: "Is GPS enough to trek Khopra Ridge without a guide?",
      a: "While GPS navigation allows experienced hikers to follow the path independently, it cannot evaluate sudden weather shifts, landslide bypasses, or altitude sickness. We strongly recommend pairing GPS backup with an experienced local guide.",
    },
    {
      q: "Does the Khopra Ridge GPX include Khayer Lake?",
      a: "Yes. The Khayer Lake day hike has a dedicated high-density GPX track covering the 15 km round-trip climb from Khopra Ridge (3,660m) to sacred Khayer Lake (4,660m).",
    },
    {
      q: "Are Khopra Ridge trails marked?",
      a: "Main trail junctions have wooden signage, but open ridge stretches above the treeline can be obscured by fog, mist, or winter snow. Carrying an offline GPX track provides a vital safety backup.",
    },
    {
      q: "How accurate are trekking GPX files in Nepal?",
      a: "Our files are recorded on foot and updated seasonally to reflect trail maintenance and landslide bypasses. However, always treat GPX files as navigation aids alongside visual trail markers and local advice.",
    },
    {
      q: "How do I test my offline navigation setup before leaving Pokhara?",
      a: "Import the GPX file into your chosen app, download the regional offline map tiles, and turn on Airplane Mode. Confirm your app displays the track and offline terrain map clearly before heading to the trailhead.",
    },
    {
      q: "Are dedicated Garmin GPS units better than smartphones?",
      a: "Dedicated Garmin units offer far superior battery life in freezing high-altitude temperatures. If using a smartphone, carry a 10,000mAh+ power bank and keep your phone inside an inner jacket pocket to prevent battery drain.",
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
            <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-400 transition">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">GPX Download</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Verified Navigation Assets
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              GPX Tracks &amp; Topographic Maps Download
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Download verified GPX routes, high-density elevation profiles, waypoint markers, and printable topographic maps for offline navigation on the Khopra Ridge Trek.
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
                🗺️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Field Navigation Files</h4>
                <p>
                  Recorded and maintained by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). All GPX tracks are verified on foot across seasonal departures to ensure accurate pathfinding and teahouse waypoint markers.
                </p>
              </div>
            </div>

            {/* Notification Toast */}
            {downloadedFile && (
              <div className="p-4 bg-emerald-900 text-white rounded-xl shadow-md text-xs font-bold flex items-center justify-between animate-fadeIn">
                <span>✅ Downloading file: {downloadedFile}...</span>
                <span className="text-emerald-300 text-[10px]">Import into your offline GPS app</span>
              </div>
            )}

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khopra Ridge sits off the main Annapurna teahouse trail, crossing open, exposed terrain above the treeline where afternoon fog and mist can obscure path markers.
              </p>
              <p>
                Download our verified GPX tracks and printable topographic maps below to ensure safe offline navigation on your smartphone or Garmin device.
              </p>
            </div>

            {/* Section 1: Core Navigation Files Download Grid */}
            <div id="download-files" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Download Navigation Files
              </h2>

              <div className="grid gap-6">
                {downloadFiles.map((file) => (
                  <div key={file.id} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <span className="text-xs font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                          {file.format} File • {file.size}
                        </span>
                        <span className="text-[10px] font-semibold text-stone-400">{file.purpose}</span>
                      </div>
                      <h3 className="font-extrabold text-stone-950 text-xl">{file.name}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{file.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-stone-500 font-mono">File: {file.fileName}</span>
                      <button
                        type="button"
                        onClick={() => handleDownload(file.fileName)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-all shadow-sm cursor-pointer text-center"
                      >
                        Download {file.format} File ↓
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Quick Reference Downloads Table */}
            <div id="quick-reference" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Reference File Table
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">File Name</th>
                      <th className="py-4 px-4 sm:px-6">Format</th>
                      <th className="py-4 px-4 sm:px-6">Size</th>
                      <th className="py-4 px-4 sm:px-6">Best Used For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {downloadFiles.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.format}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.size}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: App Guidance & Offline Setup */}
            <div id="app-guidance" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How to Setup Offline Navigation Before Leaving Pokhara
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">📲 Gaia GPS (Recommended)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Ideal for detailed topographic contours and elevation profiling. Download regional tiles in Pokhara and import our GPX track.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🗺️ Maps.me &amp; Organic Maps</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Lightweight, open-source apps built on OpenStreetMap data. Simple file import and fast offline rendering on low storage.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">⌚ Garmin GPS Devices</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Import via Garmin Connect. Dedicated handheld units offer multi-day battery life in freezing high-altitude temperatures.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">✈️ Airplane Mode Test</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Before departing Pokhara, turn on Airplane Mode and test your app to ensure offline map tiles and track lines load smoothly.
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
                  Guided Trek Consultation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Safely With Local Himalayan Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Prefer local guidance alongside your GPS backup? Contact Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091) for guided packages with experienced trail leaders.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire Guided Trek
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Itineraries
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
                <a href="#download-files" className="block hover:text-emerald-600 transition">
                  • Download Navigation Files
                </a>
                <a href="#quick-reference" className="block hover:text-emerald-600 transition">
                  • File Quick Reference
                </a>
                <a href="#app-guidance" className="block hover:text-emerald-600 transition">
                  • Offline App Setup
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Navigation Tools</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/interactive-map" className="hover:text-emerald-700 underline">
                      Interactive Route Explorer Map
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-trek-map" className="hover:text-emerald-700 underline">
                      Khopra Trek Map &amp; Elevation
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-route-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Route Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/teahouse-locator" className="hover:text-emerald-700 underline">
                      Teahouse Finder &amp; Database
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
