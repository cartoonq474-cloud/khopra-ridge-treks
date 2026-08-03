import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Rhododendron Forests of Annapurna: Spring Blooms, Trekking Routes & Best Time to Visit",
  description:
    "Discover where and when Annapurna's rhododendron forests bloom. Compare Ghorepani, Tadapani, and Khopra Ridge, explore forest ecology and wildlife, and plan your spring trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/rhododendron-forests",
  },
  openGraph: {
    title: "Rhododendron Forests of Annapurna: Spring Blooms, Trekking Routes & Best Time to Visit",
    description:
      "Discover where and when Annapurna's rhododendron forests bloom. Compare Ghorepani, Tadapani, and Khopra Ridge, explore forest ecology and wildlife, and plan your spring trek.",
    url: "https://khopraridgetrek.com/ecology/rhododendron-forests",
    type: "article",
  },
};

export default function RhododendronForestsPage() {
  const quickStats = [
    { label: "Peak Blooming Season", value: "Late March – Mid April" },
    { label: "National Flower", value: "Lali Gurans (R. arboreum)" },
    { label: "Bloom Elevation Band", value: "2,000 m – 3,200 m" },
    { label: "Protected Status", value: "Annapurna Conservation Area" },
  ];

  const calendarTable = [
    { period: "Early – Mid February", status: "Lower elevation trees (below 2,200m) begin budding" },
    { period: "Late Feb – Early March", status: "First red blooms open near Ghandruk and Tikhedhunga" },
    { period: "Mid to Late March", status: "Peak bloom across 2,000–2,800m (Ghorepani & Tadapani)" },
    { period: "Early to Mid April", status: "Higher elevation forests (2,800–3,200m) reach peak (Khopra & Dobato)" },
    { period: "Late April – Early May", status: "Blooms fade at lower elevations; highest pockets remain" },
  ];

  const routeComparisonTable = [
    { route: "Ghorepani – Poon Hill", density: "Very High", views: "Excellent (Panoramic)", crowds: "High" },
    { route: "Tadapani Forest Trail", density: "Very High", views: "Good (Canopy Framed)", crowds: "Moderate" },
    { route: "Khopra Ridge Trek", density: "High", views: "Excellent (Uncrowded Sweep)", crowds: "Low" },
    { route: "Mohare Danda Trek", density: "High", views: "Good", crowds: "Low" },
  ];

  const faqs = [
    {
      q: "When do rhododendrons bloom in Annapurna?",
      a: "Blooming typically begins in late February at lower elevations and continues through mid-April at higher elevations, with peak bloom across most of the region falling between mid-March and early April.",
    },
    {
      q: "Which Annapurna trek has the most rhododendron forests?",
      a: "The Ghorepani–Poon Hill route and the Ghandruk–Tadapani trail both offer the densest, most concentrated rhododendron forest cover in the region.",
    },
    {
      q: "Is Ghorepani or Khopra Ridge better for spring trekking?",
      a: "Ghorepani offers denser forests, easier logistics, and dramatic panoramic views, but with significantly more crowds. Khopra Ridge offers quieter trails, community-run lodges, and equally strong mountain views, at the cost of a longer, higher-altitude route.",
    },
    {
      q: "Can beginners trek through Annapurna's rhododendron forests?",
      a: "Yes — routes like Ghorepani, Tadapani, and Mohare Danda are well suited to first-time trekkers with reasonable fitness. Khopra Ridge is more demanding and better suited to trekkers with some prior experience.",
    },
    {
      q: "Do rhododendrons bloom above 3,000 meters?",
      a: "Yes, though later in the season. Higher-elevation species like Rhododendron campanulatum bloom into April near routes such as Khopra Ridge and Dobato, after lower-elevation forests have already finished flowering.",
    },
    {
      q: "How long does the rhododendron season last?",
      a: "The overall season runs roughly from late February through early May, though any single elevation zone typically stays in peak bloom for only two to three weeks.",
    },
    {
      q: "What colors of rhododendrons grow in Annapurna?",
      a: "Deep red and pink dominate at lower elevations through Rhododendron arboreum, while lavender and pale pink tones from Rhododendron campanulatum appear at higher elevations.",
    },
    {
      q: "Are Annapurna's rhododendron forests protected?",
      a: "Yes, they fall within the Annapurna Conservation Area, Nepal's largest protected area, and are further supported by community forestry programs managed by local villages.",
    },
    {
      q: "Which route is best for photography?",
      a: "Khopra Ridge and Muldai Viewpoint offer the best combination of blossoms, mountain backdrops, and low crowd density, while Poon Hill offers the most iconic panoramic shot if you're willing to arrive early.",
    },
    {
      q: "Do I need permits for these treks?",
      a: "Yes, an ACAP permit is required for all routes in this guide, along with a TIMS card depending on your specific trekking plan. Both can be arranged in advance through a licensed local operator.",
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Forests</Link>
            <span>/</span>
            <span className="text-emerald-400">Rhododendron Forests</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Spring Bloom &amp; Ecology Field Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Rhododendron Forests of Annapurna
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Spring blooms, trekking route comparisons (Ghorepani, Tadapani, Khopra Ridge), elevation bloom calendars, and photography tips.
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
                <h4 className="font-bold text-stone-900 text-base">On-the-Ground Seasonal Insights</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local guides monitor spring bloom progression up the Annapurna foothills every year.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Every spring, something happens to the hills above Pokhara that no photograph quite prepares you for. Somewhere around late February, the forest canopy along the Annapurna foothills begins shifting from a flat winter brown into deep crimson, soft pink, and ivory white. This is the rhododendron season.
              </p>
              <p>
                <strong>Lali Gurans</strong>, Nepal&apos;s national flower, blankets entire ridgelines between Ghandruk, Ghorepani, Tadapani, and Khopra Ridge, with snow peaks like Annapurna South, Machhapuchhre, and Dhaulagiri rising directly behind the blossoms.
              </p>
            </div>

            {/* Section 1: Unique Ecosystem & ACA Protection */}
            <div id="unique-ecosystem" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Annapurna&apos;s Rhododendron Forests Are Unique
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  The Annapurna Conservation Area (ACA) protects Nepal&apos;s most ecologically significant temperate forest belt. These forests stabilize steep slopes against erosion, hold moisture in pre-monsoon soil, and provide critical habitat for birds like the Himalayan Monal and mammals like the Red Panda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌺 Dense Elevation Concentration</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Massive stands of blooming trees grow between 2,000m and 3,200m altitude, creating easy trekker access without requiring mountaineering gear.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🏔️ 8,000m Peak Backdrops</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Few places on earth pair intense red forest canopies directly with 8,000-meter Himalayan snow walls like Dhaulagiri and Annapurna South.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Month-by-Month Bloom Calendar Table */}
            <div id="bloom-calendar" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Rhododendron Bloom Calendar
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Time Period</th>
                      <th className="py-4 px-4 sm:px-6">Bloom Progression &amp; Trail Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {calendarTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.period}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Route Comparison Matrix */}
            <div id="route-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Trek Route Comparison: Which Trail Is Best?
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trekking Route</th>
                      <th className="py-4 px-4 sm:px-6">Bloom Density</th>
                      <th className="py-4 px-4 sm:px-6">Mountain Views</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {routeComparisonTable.map((r, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{r.route}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600 font-medium">{r.density}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-700">{r.views}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{r.crowds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">🥇 Ghorepani &amp; Poon Hill</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Most famous and continuous bloom. Short 4-5 day trek, ideal for beginners, but crowded in late March.
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950 text-base">🌿 Khopra Ridge &amp; Dobato</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Quieter trails, high-altitude species (<em>R. campanulatum</em>), community lodges, and sweeping uncrowded mountain views.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Species & Species Ecology */}
            <div id="species-ecology" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Rhododendron Species &amp; Forest Ecology
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌸 Rhododendron arboreum (Lali Gurans)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Nepal&apos;s national flower dominates the mid-elevations (2,000–2,800m). Trees can grow up to 20 meters tall, producing vibrant crimson, deep red, and pink blossoms.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌸 Rhododendron campanulatum</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A shrub-like species thriving in higher alpine conditions (2,800–3,400m) around Dobato and Khopra Ridge. Flowers bloom in delicate shades of pale pink and lavender into mid-April.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Photography Guide */}
            <div id="photography-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spring Photography Guide
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌅 Optimal Morning Light (6:30 – 9:00 AM)</h4>
                  <p className="text-xs text-stone-600">Soft early sun illuminates red canopy blossoms before afternoon thermal haze builds up.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📷 Framing Techniques</h4>
                  <p className="text-xs text-stone-600">Use red flowers as a foreground frame with Annapurna South or Dhaulagiri in the background.</p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Rhododendron Forests
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
                  Spring Trek Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Spring Rhododendron Trek
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Time your trek to peak bloom with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We arrange ACAP permits, community lodges, and experienced local guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Spring Treks
                  </Link>
                  <Link
                    href="/ecology/annapurna-conservation-area-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read ACA Conservation Guide
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
                <a href="#unique-ecosystem" className="block hover:text-emerald-600 transition">
                  • Unique Ecosystem &amp; ACA
                </a>
                <a href="#bloom-calendar" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Bloom Calendar
                </a>
                <a href="#route-comparison" className="block hover:text-emerald-600 transition">
                  • Trek Route Comparison
                </a>
                <a href="#species-ecology" className="block hover:text-emerald-600 transition">
                  • Species &amp; Forest Ecology
                </a>
                <a href="#photography-guide" className="block hover:text-emerald-600 transition">
                  • Photography Guide
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/spring-rhododendron-bloom" className="hover:text-emerald-700 underline">
                      Spring Rhododendron Bloom
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-700 underline">
                      ACA Conservation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/best-time-to-trek" className="hover:text-emerald-700 underline">
                      Best Time to Trek Guide
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
