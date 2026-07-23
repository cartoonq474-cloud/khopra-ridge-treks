import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Annapurna Conservation Area (ACA) Guide: Permits, Routes, Rules & Conservation Explained",
  description:
    "Everything trekkers need to know about the Annapurna Conservation Area: ACAP permits and fees, checkpoints, trekking routes, wildlife, and rules — explained clearly by local trekking experts.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/annapurna-conservation-area-guide",
  },
  openGraph: {
    title: "Annapurna Conservation Area (ACA) Guide: Permits, Routes, Rules & Conservation Explained",
    description:
      "Everything trekkers need to know about the Annapurna Conservation Area: ACAP permits and fees, checkpoints, trekking routes, wildlife, and rules — explained clearly by local trekking experts.",
    url: "https://khopraridgetrek.com/ecology/annapurna-conservation-area-guide",
    type: "article",
  },
};

export default function AnnapurnaConservationAreaGuidePage() {
  const quickStats = [
    { label: "Established Year", value: "1986 (Nepal's 1st ACA)" },
    { label: "Total Protected Area", value: "7,629 sq km" },
    { label: "Elevation Range", value: "790 m – 8,091 m" },
    { label: "ACAP Permit Fee", value: "NPR 3,000 (~$23 USD)" },
  ];

  const acaFactsTable = [
    { detail: "Established", figure: "1986" },
    { detail: "Total area", figure: "7,629 sq km" },
    { detail: "Altitude range", figure: "790 m – 8,091 m (Annapurna I)" },
    { detail: "Districts covered", figure: "Kaski, Manang, Mustang, Lamjung, Myagdi" },
    { detail: "Managing bodies", figure: "ACAP / NTNC" },
    { detail: "Population inside ACA", figure: "100,000+ residents across 5 districts" },
  ];

  const permitSummaryTable = [
    { category: "Foreign Nationals", fee: "NPR 3,000", notes: "Single entry, valid for full trek duration" },
    { category: "SAARC Nationals", fee: "NPR 1,000", notes: "Requires valid SAARC passport" },
    { category: "Children Under 10", fee: "Free", notes: "Must be accompanied by parent/guardian" },
  ];

  const trekComparisonTable = [
    { trek: "Ghorepani Poon Hill", duration: "4–5 days", maxAlt: "~3,210 m", diff: "Easy–Moderate" },
    { trek: "Mardi Himal Trek", duration: "5–7 days", maxAlt: "~4,500 m", diff: "Moderate" },
    { trek: "Khopra Ridge Trek", duration: "6–8 days", maxAlt: "~4,660 m", diff: "Moderate" },
    { trek: "Annapurna Base Camp", duration: "7–12 days", maxAlt: "~4,130 m", diff: "Moderate–Challenging" },
    { trek: "Annapurna Circuit", duration: "12–18 days", maxAlt: "~5,416 m (Thorong La)", diff: "Challenging" },
    { trek: "Tilicho Lake (Add-on)", duration: "+2–3 days", maxAlt: "~4,919 m", diff: "Challenging" },
  ];

  const checkpointsList = [
    { location: "Nayapul & Birethanti", desc: "Main entry point for southern routes starting near Pokhara (Poon Hill, Khopra Ridge, ABC)." },
    { location: "Ghorepani", desc: "Key ridge checkpoint along the Poon Hill and Khopra Ridge corridor." },
    { location: "Chhomrong", desc: "Major security checkpoint for anyone entering the inner Annapurna Sanctuary toward ABC." },
    { location: "Besisahar", desc: "Primary entry checkpoint for the eastern approach of the Annapurna Circuit." },
  ];

  const faqs = [
    {
      q: "What is the Annapurna Conservation Area (ACA)?",
      a: "ACA is Nepal's largest protected area, covering 7,629 square kilometers across five districts in central Nepal. Established in 1986 and managed by ACAP under the NTNC, it protects the ecosystems surrounding the Annapurna Massif while allowing local communities to continue living and running tourism businesses inside its boundaries.",
    },
    {
      q: "Is Annapurna Conservation Area a national park?",
      a: "No. ACA is a conservation area, a distinct legal designation that permits human settlement and community-based management, unlike a national park. You may see 'Annapurna National Park' used online, but that's a common misnomer — the correct designation is Annapurna Conservation Area.",
    },
    {
      q: "Do I need an ACAP permit to trek in Annapurna?",
      a: "Yes. ACAP is mandatory for every trekker entering the conservation area, regardless of which specific route you're taking. It's checked at multiple checkpoints along the trail.",
    },
    {
      q: "What is the difference between ACAP and TIMS?",
      a: "ACAP is the conservation area entry permit and is consistently required. TIMS (Trekkers' Information Management System) is a separate trekker registration system whose requirements have shifted over recent years and vary by region, so it's worth confirming current TIMS status directly with ACAP or a licensed operator before you travel.",
    },
    {
      q: "Where can I get an Annapurna Conservation Area permit?",
      a: "At the ACAP/Nepal Tourism Board offices in Kathmandu or Pokhara, through NTNC's online e-permit system, or arranged on your behalf by a licensed trekking agency.",
    },
    {
      q: "How much does the ACAP permit cost?",
      a: "NPR 3,000 for foreign nationals and NPR 1,000 for SAARC nationals. Children under 10 are exempt from the fee.",
    },
    {
      q: "How long is an ACAP permit valid?",
      a: "It's a single-entry permit valid for the full duration of your trek inside the conservation area. Leaving and re-entering ACA generally requires a new permit.",
    },
    {
      q: "Can foreigners trek Annapurna without a guide?",
      a: "No. Current regulations require a licensed trekking guide for foreign trekkers on Annapurna's major routes — independent, unguided trekking is no longer permitted here.",
    },
    {
      q: "What wildlife lives inside ACA?",
      a: "Snow leopard, musk deer, and blue sheep are among the notable mammal species, alongside hundreds of recorded bird species including the Himalayan monal. Rare high-altitude wildlife sightings are uncommon on standard routes, since these species avoid trafficked trails.",
    },
    {
      q: "Which trekking routes are inside the Annapurna Conservation Area?",
      a: "Annapurna Base Camp, the Annapurna Circuit, Mardi Himal, Ghorepani Poon Hill, Khopra Ridge, and Tilicho Lake all fall within ACA's boundaries and require an ACAP permit.",
    },
    {
      q: "What happens if I trek without a permit?",
      a: "Checkpoints throughout the region check for valid ACAP permits. Trekking without one can result in fines, being turned back at a checkpoint, or being required to return to the nearest permit office before continuing.",
    },
    {
      q: "When is the best time to visit ACA?",
      a: "Spring (March–May) and autumn (late September–November) offer the clearest views and most stable trekking weather. Winter suits lower-elevation routes, while monsoon season is generally avoided due to rain and obscured views.",
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Conservation</Link>
            <span>/</span>
            <span className="text-emerald-400">ACA Master Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Official Conservation &amp; Permit Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Annapurna Conservation Area (ACA) Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Permits, fees, checkpoints, trekking routes, rules, wildlife, and community conservation explained by local Nepal trekking experts.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickStats.map((stat, idx) => (
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
                <h4 className="font-bold text-stone-900 text-base">Direct Field Operational Knowledge</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Operating out of Pokhara, our licensed guides navigate ACAP checkpoints and community lodges every season.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Almost every classic trek in central Nepal — Annapurna Base Camp, the Annapurna Circuit, Mardi Himal, Poon Hill, Khopra Ridge, Tilicho Lake — passes through the same protected landscape: the <strong>Annapurna Conservation Area (ACA)</strong>. It&apos;s easy to treat this as a formality, a permit you buy and forget about. But ACA is the reason these trails exist in their current form at all.
              </p>
              <p>
                This guide explains how ACA actually works, from the ground up: what it is, how it&apos;s managed, what permits and fees apply today, where the checkpoints are, which treks fall inside its boundaries, and what conservation and cultural rules you&apos;re expected to follow.
              </p>
            </div>

            {/* Section 1: What is ACA & National Park vs Conservation Area */}
            <div id="what-is-aca" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Is the Annapurna Conservation Area?
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Established in 1986, the Annapurna Conservation Area spans 7,629 square kilometers, making it Nepal&apos;s largest protected area. Unlike traditional national parks that exclude human habitation, ACA was designed as a <strong>community-managed conservation area</strong>. Over 100,000 residents across five districts continue to live, farm, and run teahouses inside its borders.
                </p>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">Why ACA Is NOT a National Park</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    National parks in Nepal (like Sagarmatha National Park around Everest) are managed directly by government wildlife departments with strict restrictions on land ownership. ACA is governed by the <strong>Annapurna Conservation Area Project (ACAP)</strong> under the <strong>National Trust for Nature Conservation (NTNC)</strong>, utilizing local conservation committees where tourism revenue stays directly in the local villages.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Districts & Geography */}
            <div id="geography-districts" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Geography, Districts &amp; Ecosystems
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">Kaski District</h4>
                  <p className="text-xs text-stone-600">Gateway from Pokhara; encompasses Ghandruk, Poon Hill, and Mardi Himal routes.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">Myagdi District</h4>
                  <p className="text-xs text-stone-600">Home to Khopra Ridge, Khayer Lake, and Tatopani hot springs; famous for offbeat community lodges.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">Mustang District</h4>
                  <p className="text-xs text-stone-600">Trans-Himalayan high desert rain shadow, Kali Gandaki gorge, Muktinath temple.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">Manang &amp; Lamjung</h4>
                  <p className="text-xs text-stone-600">Eastern flank of the Annapurna Circuit, Marshyangdi River valley, Thorong La Pass.</p>
                </div>
              </div>
            </div>

            {/* Section 3: ACAP Permit Breakdown & Fees */}
            <div id="permit-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Annapurna Conservation Area Permit (ACAP) Guide
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trekker Category</th>
                      <th className="py-4 px-4 sm:px-6">ACAP Permit Fee</th>
                      <th className="py-4 px-4 sm:px-6">Key Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {permitSummaryTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-700">{row.fee}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-3">
                <h4 className="font-extrabold text-emerald-950 text-base">ACAP vs TIMS vs Mandatory Guide Policy</h4>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  While ACAP is the entry permit for the conservation area, <strong>foreign trekkers are required by Nepal government regulations to trek with a licensed guide</strong>. Independent unguided solo trekking on major routes is prohibited. Your agency will typically secure both your ACAP permit and TIMS registration prior to your departure.
                </p>
              </div>
            </div>

            {/* Section 4: Checkpoints & Verification */}
            <div id="checkpoints" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Entry Checkpoints &amp; Trail Verification
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checkpointsList.map((cp, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-950 text-base">📍 {cp.location}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{cp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Trek Comparison Table */}
            <div id="trek-routes" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Trekking Routes Inside ACA: Overview &amp; Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trekking Route</th>
                      <th className="py-4 px-4 sm:px-6">Typical Duration</th>
                      <th className="py-4 px-4 sm:px-6">Max Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {trekComparisonTable.map((t, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{t.trek}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{t.duration}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-700">{t.maxAlt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{t.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: ACA Facts Table */}
            <div id="aca-facts" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Annapurna Conservation Area at a Glance
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">ACA Detail</th>
                      <th className="py-4 px-4 sm:px-6">Fact / Figure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {acaFactsTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.detail}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.figure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Annapurna Conservation Area
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
                  Licensed Local Operator
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Annapurna Trek With Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  We are a Pokhara-based trekking operator (NTB License #8928-091) working inside the Annapurna Conservation Area every season. We arrange ACAP permits, licensed guides, and seamless logistics.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Contact Local Team
                  </Link>
                  <Link
                    href="/planning/acap-permit-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    ACAP Permit Details
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
                <a href="#what-is-aca" className="block hover:text-emerald-600 transition">
                  • What Is ACA?
                </a>
                <a href="#geography-districts" className="block hover:text-emerald-600 transition">
                  • Geography &amp; Districts
                </a>
                <a href="#permit-guide" className="block hover:text-emerald-600 transition">
                  • ACAP Permit &amp; Fees
                </a>
                <a href="#checkpoints" className="block hover:text-emerald-600 transition">
                  • Entry Checkpoints
                </a>
                <a href="#trek-routes" className="block hover:text-emerald-600 transition">
                  • Trekking Routes Comparison
                </a>
                <a href="#aca-facts" className="block hover:text-emerald-600 transition">
                  • ACA Facts &amp; Figures
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/acap-permit-guide" className="hover:text-emerald-700 underline">
                      ACAP Permit Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/rhododendron-forests" className="hover:text-emerald-700 underline">
                      Rhododendron Forests
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Annapurna Wildlife Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Model
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
