import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Hiunchuli Views from the Trail: Best Viewpoints on the Khopra Ridge Trek",
  description:
    "Discover the best Hiunchuli views from the trail — where to see this Annapurna Sanctuary peak, the finest viewpoints along Khopra Ridge, and when to go for sunrise, sunset, and clear panoramas.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/hiunchuli-views",
  },
  openGraph: {
    title: "Hiunchuli Views from the Trail: Best Viewpoints on the Khopra Ridge Trek",
    description:
      "Discover the best Hiunchuli views from the trail — where to see this Annapurna Sanctuary peak, the finest viewpoints along Khopra Ridge, and when to go for sunrise, sunset, and clear panoramas.",
    url: "https://khopraridgetrek.com/mountains/hiunchuli-views",
    type: "article",
  },
};

export default function HiunchuliViewsPage() {
  const stats = [
    { label: "Peak Name", value: "Hiunchuli Peak" },
    { label: "Elevation", value: "6,441 m (21,132 ft)" },
    { label: "Role", value: "Annapurna Sanctuary Gateway Guard" },
    { label: "Visual Feature", value: "Dark Angular Rock & Hanging Glaciers" },
  ];

  const seasonsTable = [
    {
      season: "Autumn (Oct–Nov)",
      visibility: "Excellent",
      conditions: "Clear skies, dry air, highly stable weather",
      bestFor: "Most reliable long-range views & sharp photography",
    },
    {
      season: "Spring (Mar–Apr)",
      visibility: "Good",
      conditions: "Occasional haze, blooming rhododendron forests",
      bestFor: "Vibrant floral foregrounds & warm morning light",
    },
    {
      season: "Winter (Dec–Feb)",
      visibility: "Very Good",
      conditions: "Crisp freezing air, fresh snow coverage",
      bestFor: "Sharpest mountain contrast & zero trail crowds",
    },
    {
      season: "Monsoon (Jun–Sep)",
      visibility: "Poor",
      conditions: "Heavy cloud cover, frequent rain and fog",
      bestFor: "Not recommended for mountain panorama trekking",
    },
  ];

  const faqs = [
    {
      q: "Where is Hiunchuli located in the Annapurna range?",
      a: "Hiunchuli sits at the southern edge of the Annapurna Massif within the Annapurna Conservation Area. It lies just southwest of Annapurna South, acting as one of the guardian gatepost peaks flanking the entry into the Annapurna Sanctuary.",
    },
    {
      q: "Is Hiunchuli visible from Khopra Ridge?",
      a: "Yes. Khopra Ridge (3,660m) is widely considered one of the single best viewpoints for Hiunchuli, offering an unobstructed, eye-level panorama alongside Annapurna South, Annapurna I, Nilgiri, and Dhaulagiri.",
    },
    {
      q: "What is the official elevation of Hiunchuli?",
      a: "Hiunchuli rises to an elevation of approximately 6,441 meters (21,132 feet).",
    },
    {
      q: "Which trekking route offers the best views of Hiunchuli?",
      a: "The Khopra Ridge Trek offers the most complete progression of Hiunchuli views, starting from village rooftops at Ghandruk, moving through Tadapani and Bayeli Kharka, and culminating at Khopra Ridge.",
    },
    {
      q: "Can you see Hiunchuli from Poon Hill?",
      a: "Poon Hill faces primarily west toward Dhaulagiri and north toward Annapurna I. Hiunchuli is far less prominent from Poon Hill compared to the direct vistas visible from Khopra Ridge or Ghandruk.",
    },
    {
      q: "What is the best season to see Hiunchuli clearly?",
      a: "Autumn (October–November) offers the most consistent clear skies. Winter (December–February) provides exceptionally sharp, haze-free views, while Spring (March–April) pairs clear mornings with blooming rhododendrons.",
    },
    {
      q: "Why does Hiunchuli appear connected to Annapurna South?",
      a: "Hiunchuli and Annapurna South share a high physical saddle ridge. From many viewing angles, Hiunchuli appears as the darker, sharper foreground peak, while Annapurna South sits directly behind it as a taller, snowier wall.",
    },
    {
      q: "Is Hiunchuli suitable for mountain photography?",
      a: "Extremely so. Its dark exposed rock face and hanging glaciers create high-contrast shadows at sunrise and sunset, especially when framed against valley cloud inversions from Khopra Ridge.",
    },
    {
      q: "Can non-climbers and beginners see Hiunchuli without technical gear?",
      a: "Yes! All viewpoints mentioned in this guide—including Ghandruk, Tadapani, Bayeli Kharka, and Khopra Ridge—are accessed on foot via standard trekking trails without any climbing required.",
    },
    {
      q: "What nearby peaks can be seen in the same frame as Hiunchuli?",
      a: "Annapurna South (7,219m), Machhapuchhre (6,993m), Nilgiri (7,061m), and Dhaulagiri (8,167m) are all visible alongside Hiunchuli from Khopra Ridge.",
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
            <span className="text-emerald-400">Hiunchuli Views</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Sanctuary Sentinel Peak
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Hiunchuli Views from the Trail
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Best viewpoints, sunrise timing, and photography spots across the Khopra Ridge trekking circuit.
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

      {/* Main Content & Sidebar */}
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
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091), based in Pokhara and Kathmandu. We guide groups through this exact terrain season after season and continuously update viewpoint conditions and trail advisories.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most trekkers heading into the Annapurna Sanctuary have heard of Annapurna South and Machhapuchhre long before they have heard of Hiunchuli (6,441m). Yet once the trail climbs above Ghandruk, it is often Hiunchuli&apos;s steep, glacier-streaked wall that dominates the skyline first.
              </p>
              <p>
                Hiunchuli rises directly alongside <Link href="/mountains/annapurna-south-views" className="text-emerald-700 hover:underline font-semibold">Annapurna South</Link>, close enough that the two mountains appear fused into a single massive ridge from many angles. This guide is built to help you identify Hiunchuli on the trail, choose the best viewpoints along Khopra Ridge, and plan your trekking photography around ideal sunrise and weather windows.
              </p>
            </div>

            {/* Section 1: Hiunchuli at a Glance */}
            <div id="hiunchuli-at-a-glance" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Hiunchuli at a Glance
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Where Is Hiunchuli Located?</h3>
                <p>
                  Hiunchuli sits at the southern edge of the Annapurna Massif within the Annapurna Conservation Area (ACAP). It lies just southwest of Annapurna South, guarding the narrow southern gateway leading into the high glacial basin of the Annapurna Sanctuary.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Height, Landscape, and Silhouette</h3>
                <p>
                  Reaching an elevation of roughly 6,441 meters (21,132 feet), Hiunchuli is lower than its 7,000m and 8,000m neighbors. However, its steep southern face drops sheerly toward lower valleys, giving it a dramatic, vertical presence. The face features exposed dark rock bands intertwined with hanging glaciers.
                </p>

                <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 space-y-2">
                  <h4 className="font-bold text-amber-900 text-base">How to Tell Hiunchuli Apart from Annapurna South</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Look for height and rock texture: <strong>Annapurna South (7,219m)</strong> is taller, broader, and draped in continuous white snowfields behind. <strong>Hiunchuli (6,441m)</strong> is the sharper, darker foreground peak sitting slightly closer to you, with visible black rock ribs breaking through its hanging glaciers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Trail Viewpoints */}
            <div id="trail-viewpoints" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Places to See Hiunchuli Along the Trail
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Follow the sequential progression of Hiunchuli viewpoints as you climb along the Khopra circuit:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold">1,940m Elevation</span>
                  <h3 className="text-lg font-bold text-stone-950">1. Ghandruk Village</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    First clear look. Framed beautifully between slate roofs, stone alleys, and terraced fields, giving an early sense of mountain scale.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold">2,630m Elevation</span>
                  <h3 className="text-lg font-bold text-stone-950">2. Tadapani</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Shift in perspective. Visible through gaps in ancient rhododendron and oak forests, glowing pink at pre-dawn.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold">3,420m Elevation</span>
                  <h3 className="text-lg font-bold text-stone-950">3. Bayeli Kharka</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Alpine posture. The trail emerges into high pastures where Hiunchuli fills a massive portion of the eastern sky.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">3,660m Elevation</span>
                  <h3 className="text-lg font-bold text-stone-950">4. Khopra Ridge</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The ultimate viewpoint. Sits directly across open space from Hiunchuli with zero forest or ridge obstruction.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Khopra Ridge Vantage */}
            <div id="khopra-ridge-advantage" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Hiunchuli from Khopra Ridge
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Khopra Ridge (3,660m) offers an unparalleled viewpoint for Hiunchuli. Because you are perched on a narrow, elevated ridge, the mountain looms directly in front of you alongside Annapurna South and Machhapuchhre.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Sunrise Light Sequence</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Pre-dawn blue light shifts quickly into golden alpenglow, illuminating Hiunchuli&apos;s upper rock ribs while lower gullies remain cast in deep purple shadow.
                  </p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Cloud Inversion Phenomenon</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    On clear autumn mornings, thick cloud layers fill the valley floors below, making Hiunchuli appear to rise directly out of a sea of white clouds.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Photography Guide */}
            <div id="photography-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Photography Guide for Hiunchuli
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Recommended Gear & Framing</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                  <li><strong>Wide-Angle Lens (16–24mm equivalent):</strong> Ideal for framing Hiunchuli together with Annapurna South and Machhapuchhre in one panorama.</li>
                  <li><strong>Telephoto Lens (70–200mm):</strong> Great for zooming into the intricate hanging glacier structures on Hiunchuli&apos;s south face.</li>
                  <li><strong>Foreground Elements:</strong> Incorporate local stone chortens or ridge prayer flags to give photos depth and scale.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: Best Seasons Table */}
            <div id="best-seasons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Seasons to View Hiunchuli
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Seasonal visibility matrix for planning your trek around optimal mountain clarity:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Season</th>
                      <th className="py-4 px-4 sm:px-6">Visibility</th>
                      <th className="py-4 px-4 sm:px-6">Trail Conditions</th>
                      <th className="py-4 px-4 sm:px-6">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {seasonsTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.season}</td>
                        <td className="py-4 px-4 sm:px-6">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            row.visibility === 'Excellent' ? 'bg-emerald-100 text-emerald-800' :
                            row.visibility === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                            row.visibility === 'Good' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {row.visibility}
                          </span>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-xs">{row.conditions}</td>
                        <td className="py-4 px-4 sm:px-6 text-xs">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: Surrounding Peaks */}
            <div id="nearby-peaks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Nearby Himalayan Peaks Visible with Hiunchuli
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 underline">Annapurna South (7,219m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 underline">Machhapuchhre (6,993m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/nilgiri-views" className="hover:text-emerald-700 underline">Nilgiri (7,061m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">Dhaulagiri (8,167m)</Link>
                </div>
              </div>
            </div>

            {/* Section 7: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Hiunchuli Views
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
                  Book Guided Khopra Ridge Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to See Hiunchuli Up Close?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your trek with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Let our local guides organize your permits, community lodges, and optimal viewpoint timing.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Contact Local Guides
                  </Link>
                  <Link
                    href="/tours/khopra-poon-hill-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Trek Packages
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
                <a href="#hiunchuli-at-a-glance" className="block hover:text-emerald-600 transition">
                  • Hiunchuli at a Glance
                </a>
                <a href="#trail-viewpoints" className="block hover:text-emerald-600 transition">
                  • Trail Viewpoints
                </a>
                <a href="#khopra-ridge-advantage" className="block hover:text-emerald-600 transition">
                  • Khopra Ridge Advantage
                </a>
                <a href="#photography-guide" className="block hover:text-emerald-600 transition">
                  • Photography Tips
                </a>
                <a href="#best-seasons" className="block hover:text-emerald-600 transition">
                  • Seasonal Visibility Table
                </a>
                <a href="#nearby-peaks" className="block hover:text-emerald-600 transition">
                  • Nearby Peaks
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Mountain Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
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
                    <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">
                      Dhaulagiri Views Guide
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
