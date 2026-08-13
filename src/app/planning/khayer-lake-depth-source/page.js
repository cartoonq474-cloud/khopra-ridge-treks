import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Glacial Source & Depth Guide | Khopra Ridge Trek",
  description: "Discover how Khayer Lake formed, where its glacial water comes from, and how deep it really is. A complete geography, hydrology, and safety guide to this.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-depth-source",
  },
  openGraph: {
    title: "Khayer Lake Glacial Source & Depth Guide: Geography, Altitude & Water Origin",
    description:
      "Discover how Khayer Lake formed, where its glacial water comes from, and how deep it really is. A complete geography, hydrology, and safety guide to this sacred Annapurna lake.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-depth-source",
    type: "article",
  },
};

export default function KhayerLakeDepthSourcePage() {
  const stats = [
    { label: "Lake Elevation", value: "4,660 m (15,288 ft)" },
    { label: "Estimated Depth", value: "12 – 18 m (40 – 60 ft)" },
    { label: "Water Temperature", value: "1°C – 4°C (Autumn/Spring)" },
    { label: "Primary Water Source", value: "Annapurna South Glacial Melt" },
  ];

  const summarySpecs = [
    { label: "Elevation", value: "4,660 m (15,288 ft) above sea level" },
    { label: "Lake Classification", value: "Glacial cirque lake" },
    { label: "Primary Water Source", value: "Glacier runoff & snowmelt from Annapurna South (7,219m)" },
    { label: "Estimated Maximum Depth", value: "12 – 18 meters (40 – 60 feet) at center" },
    { label: "Geographic Location", value: "Myagdi District, Gandaki Province, Nepal" },
    { label: "Protected Status", value: "Annapurna Conservation Area (ACAP)" },
    { label: "Dominant Backdrop Peak", value: "Annapurna South (7,219 m) south face wall" },
    { label: "Water Temperature", value: "1°C to 4°C in trekking season; frozen solid Dec–Feb" },
  ];

  const faqs = [
    {
      q: "How deep is Khayer Lake?",
      a: "Local estimates place Khayer Lake's maximum depth at approximately 12 to 18 meters (40 to 60 feet) at its center. Because no formal bathymetric sonar survey exists, this figure is an estimate based on local guide knowledge.",
    },
    {
      q: "Is Khayer Lake a glacial lake?",
      a: "Yes. Khayer Lake is a glacial cirque lake, formed inside an amphitheater-shaped rock basin carved by ancient glacial erosion at the base of Annapurna South.",
    },
    {
      q: "What is the source of Khayer Lake's water?",
      a: "Khayer Lake is fed primarily by glacial meltwater runoff and seasonal snowmelt from the south wall glaciers of Annapurna South (7,219m), along with alpine basin precipitation.",
    },
    {
      q: "Where is Khayer Lake located in Nepal?",
      a: "Khayer Lake is located in Myagdi District, Gandaki Province, Nepal, inside the Annapurna Conservation Area, situated directly beneath Annapurna South.",
    },
    {
      q: "What is the elevation of Khayer Lake?",
      a: "Khayer Lake sits at 4,660 meters (15,288 feet) above sea level on an exposed high alpine plateau.",
    },
    {
      q: "Does Khayer Lake freeze in winter?",
      a: "Yes. Khayer Lake freezes completely solid during winter months (December through February), as glacial melt inflow slows and air temperatures remain well below freezing.",
    },
    {
      q: "Can visitors swim or bathe in Khayer Lake?",
      a: "No. Swimming or bathing in Khayer Lake is strictly discouraged. Water temperatures stay at near-freezing 1°C to 4°C, posing severe hypothermia risks, and the lake is considered sacred.",
    },
    {
      q: "Why is Khayer Lake considered sacred?",
      a: "The lake is associated with Khayer Baraha, a local deity worshipped by Gurung and Magar communities. Pilgrims visit during August Janai Purnima festivals.",
    },
    {
      q: "Which mountains surround Khayer Lake?",
      a: "Annapurna South (7,219m) towers directly above the lake. Along the trail, Dhaulagiri I (8,167m), Nilgiri Himal (7,061m), Hiunchuli, and Machhapuchhre are visible.",
    },
    {
      q: "Is Khayer Lake inside the Annapurna Conservation Area?",
      a: "Yes. Khayer Lake falls within ACAP, Nepal's largest protected conservation area, managed for environmental preservation and community tourism.",
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
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Depth &amp; Source Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Geological &amp; Hydrological Analysis
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake: Glacial Source &amp; Depth Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Explore how Khayer Lake formed, its glacial meltwater sources, estimated 12–18m depth, water temperature cycles, and high-altitude geography.
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
                <h4 className="font-bold text-stone-900 text-base">Direct Geographical &amp; Hydrological Insight</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We compile firsthand field knowledge and regional geological context for the Annapurna massif.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khayer Lake sits at 4,660 meters in a glacial cirque beneath the southern wall of Annapurna South (7,219m), making it one of the least-documented alpine lakes in Nepal&apos;s Annapurna region. Most articles focus strictly on the trekking route. Few explain what the lake actually is: where its water comes from, how it was carved out of solid rock, and how deep it really goes.
              </p>
              <p>
                This guide answers those questions directly, drawing on field observations from our local trekking guides alongside geological and hydrological data for the Annapurna massif.
              </p>
            </div>

            {/* Section 1: Khayer Lake at a Glance Table */}
            <div id="lake-summary" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khayer Lake at a Glance: Geographical Summary
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Geographical Feature</th>
                      <th className="py-4 px-4 sm:px-6">Hydrological Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {summarySpecs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{spec.label}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Glacial Origin & Formation */}
            <div id="glacial-formation" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Type of Lake Is Khayer Lake?
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Glacial Cirque Formation</h3>
                <p>
                  Khayer Lake is a classic <strong>glacial cirque lake</strong>. A cirque is an amphitheater-shaped basin carved into a mountainside by glacial ice over thousands of years. As the ancient glacier eroded rock through plucking and abrasion, it excavated a deep depression. When the ice retreated, meltwater filled the rock basin to create Khayer Lake.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Water Origin &amp; Catchment System</h3>
                <p>
                  The lake is fed directly by <strong>glacial runoff and seasonal snowmelt</strong> flowing off Annapurna South&apos;s hanging glaciers. Inflow surges during spring and monsoon months, then drops dramatically in winter when glacial sources freeze solid. Outflow feeds down into the Myagdi River watershed.
                </p>
              </div>
            </div>

            {/* Section 3: Depth & Measurement Challenges */}
            <div id="lake-depth" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How Deep Is Khayer Lake? (12m – 18m Estimate)
              </h2>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                <h4 className="font-bold text-stone-950 text-lg">Local Knowledge vs. Formal Bathymetry</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Local estimates place Khayer Lake&apos;s maximum depth at approximately <strong>12 to 18 meters (40 to 60 feet)</strong> at its center. This figure comes from generations of local herder and guide observations.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Because of its remote elevation (4,660m) and difficult access, no formal bathymetric sonar survey has been conducted on Khayer Lake by scientists. Therefore, depth numbers remain working estimates rather than laboratory-verified data.
                </p>
              </div>
            </div>

            {/* Section 4: Water Temperature & Hypothermia Safety */}
            <div id="water-temperature" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Water Temperature &amp; Hypothermia Warnings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">Near-Freezing Temperatures (1°C – 4°C)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Even on warm sunny spring days, the water remains 1°C to 4°C because it is fed directly by glacial snowmelt. In winter (Dec–Feb), the lake freezes solid.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 space-y-2">
                  <h4 className="font-bold text-amber-950 text-base">⚠️ Swimming Strictly Discouraged</h4>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Swimming or entering the lake is strictly forbidden for safety and cultural reasons. Full-body immersion at 1°C causes cold-shock hypothermia within two minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Sacred Significance & Cultural Respect */}
            <div id="sacred-aspects" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Sacred Significance of Khayer Baraha
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                <p className="text-sm text-stone-600 leading-relaxed">
                  Khayer Lake is a sacred pilgrimage site for local Gurung and Magar communities. The shrine of <Link href="/planning/khayer-baraha-temple-guide" className="text-emerald-700 hover:underline font-semibold">Khayer Baraha Temple</Link> sits on its shores, drawing devotees during August Janai Purnima festivals. Visitors are expected to show full cultural respect, maintaining quiet and avoiding water pollution.
                </p>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Depth &amp; Source
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
                  Book Guided Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek to Khayer Lake with Certified Local Navigators
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience the sacred glacial cirque of Khayer Lake with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides provide route safety, altitude monitoring, and cultural context.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/khayer-lake-route-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Route Guide
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
                <a href="#lake-summary" className="block hover:text-emerald-600 transition">
                  • Geographical Summary Table
                </a>
                <a href="#glacial-formation" className="block hover:text-emerald-600 transition">
                  • Glacial Origin &amp; Water Source
                </a>
                <a href="#lake-depth" className="block hover:text-emerald-600 transition">
                  • Estimated Depth (12m–18m)
                </a>
                <a href="#water-temperature" className="block hover:text-emerald-600 transition">
                  • Water Temp &amp; Safety
                </a>
                <a href="#sacred-aspects" className="block hover:text-emerald-600 transition">
                  • Sacred Khayer Baraha
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Planning Resources</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khayer-lake-route-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Route Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-weather" className="hover:text-emerald-700 underline">
                      Khayer Lake Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/is-khayer-lake-worth-it" className="hover:text-emerald-700 underline">
                      Is Khayer Lake Worth It?
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-baraha-temple-guide" className="hover:text-emerald-700 underline">
                      Khayer Baraha Temple Guide
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
