import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Machhapuchhre Views from the Trail: Best Viewpoints Across Annapurna Trekking Routes",
  description:
    "Discover the best places, times, and trekking routes to see Machhapuchhre (Fishtail Mountain) clearly — from Ghandruk to Khopra Ridge and Muldai Viewpoint.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/machhapuchhre-views",
  },
  openGraph: {
    title: "Machhapuchhre Views from the Trail: Best Viewpoints Across Annapurna Trekking Routes",
    description:
      "Discover the best places, times, and trekking routes to see Machhapuchhre (Fishtail Mountain) clearly — from Ghandruk to Khopra Ridge and Muldai Viewpoint.",
    url: "https://khopraridgetrek.com/mountains/machhapuchhre-views",
    type: "article",
  },
};

export default function MachhapuchhreViewsPage() {
  const stats = [
    { label: "Peak Name", value: "Machhapuchhre (Fishtail Peak)" },
    { label: "Elevation", value: "6,993 m (22,943 ft)" },
    { label: "Climbing Status", value: "Unclimbed / Strictly Sacred Peak" },
    { label: "Top Viewpoints", value: "Ghandruk, Tadapani, Muldai & Khopra" },
  ];

  const viewpointsTable = [
    {
      name: "Ghandruk Village",
      distance: "Close - Medium",
      bestFor: "Cultural + foreground slate roof composition",
      crowd: "High",
      link: "/nodes/ghandruk-village-guide",
    },
    {
      name: "Tadapani",
      distance: "Medium",
      bestFor: "Forest-framed sunrise balcony views",
      crowd: "Moderate",
      link: "/nodes/tadapani-guide",
    },
    {
      name: "Dobato",
      distance: "Medium - Wide",
      bestFor: "Multi-peak mountain system context",
      crowd: "Low - Moderate",
      link: "/nodes/dobato-guide",
    },
    {
      name: "Muldai Viewpoint",
      distance: "Medium",
      bestFor: "Clearest 360° full Himalayan panorama",
      crowd: "Low - Moderate",
      link: "/viewpoints/muldai-viewpoint-guide",
    },
    {
      name: "Khopra Ridge",
      distance: "Distant",
      bestFor: "Dramatic sea-of-clouds scale & solitude",
      crowd: "Low",
      link: "/viewpoints/khopra-ridge-viewpoint",
    },
  ];

  const faqs = [
    {
      q: "Where can I see Machhapuchhre clearly in Nepal?",
      a: "Machhapuchhre is visible from multiple vantage points across the Annapurna trekking network, including Ghandruk, Tadapani, Dobato, Muldai Viewpoint, and Khopra Ridge. Each location offers a completely distinct angle, distance, visual scale, and level of atmospheric clarity.",
    },
    {
      q: "Which trek has the absolute best view of Fishtail Mountain?",
      a: "It depends on your priority: Khopra Ridge offers the most dramatic scale and floating-peak effect above cloud inversion layers; Mardi Himal provides the closest direct proximity; and Muldai Viewpoint offers the clearest, most balanced 360-degree Himalayan panorama.",
    },
    {
      q: "Is Machhapuchhre visible from Khopra Ridge?",
      a: "Yes, Machhapuchhre is clearly visible to the east from Khopra Ridge (3,660m). At dawn, it appears to rise dramatically above a dense ocean of valley clouds covering the Modi Khola valley below.",
    },
    {
      q: "What is the best time of day to see Machhapuchhre clearly?",
      a: "Early morning—specifically before 9:00 AM or 10:00 AM—delivers the crispest visibility. Overnight cooling stabilizes the atmosphere and suppresses cloud formation before solar heating lifts valley moisture after mid-morning.",
    },
    {
      q: "Which viewpoint is best for Machhapuchhre mountain photography?",
      a: "Muldai Viewpoint is widely regarded by landscape photographers as the single strongest photography hub on the circuit due to its unobstructed 360-degree horizon and pristine early morning light angles.",
    },
    {
      q: "Can you see Machhapuchhre from Pokhara?",
      a: "Yes. On clear mornings, Machhapuchhre's pointed peak is visible from Pokhara's Lakeside and Sarangkot. However, trekking up into trail viewpoints like Ghandruk, Muldai, or Khopra brings you dramatically closer with far richer details.",
    },
    {
      q: "Why is Machhapuchhre often covered in clouds by afternoon?",
      a: "As the sun warms the low valleys of the Modi Khola and Kali Gandaki, thermal updrafts carry moisture up the steep mountain slopes. By 11:00 AM or midday, condensation forms thick cumulus clouds wrapping around the summit pyramid.",
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
            <span className="text-emerald-400">Machhapuchhre Views</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Annapurna Horizon Corridor
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Machhapuchhre Views from the Trail
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Best viewpoints, optimal sunrise timing, and trail positioning across Ghandruk, Tadapani, Muldai, and Khopra Ridge.
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
          {/* Main Article Body */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by <strong>EMD Treks</strong> (Nepal Tourism Operator License #8928-091), headquartered in Pokhara and Kathmandu. We regularly guide groups along the Ghandruk-Muldai-Khopra corridor and continuously update route weather patterns and viewpoint conditions.
                </p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most trekkers come to the Annapurna region hoping for one view — Machhapuchhre (6,993m / 22,943ft) rising above the valley, its twin summit catching the first gold of morning light. What surprises many people once they are actually on the trail is that this view does not come from a single fixed spot. It changes shape, distance, and mood at almost every ridge and village along the route.
              </p>
              <p>
                We have guided trekkers past Machhapuchhre for years, from the terraced stone rooftops of <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 hover:underline font-semibold">Ghandruk</Link> to the wind-scoured ridgelines of <Link href="/viewpoints/khopra-ridge-viewpoint" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge</Link>. In that time, we have learned that <em>&quot;where can I see Machhapuchhre&quot;</em> is really several different questions: where is it closest, where is it clearest, where does it photograph best, and where does it simply feel the most overwhelming to stand in front of?
              </p>
              <p>
                This guide maps out the exact points along the Annapurna trekking network where Machhapuchhre (Fishtail Mountain) comes into view, what each viewpoint actually offers, and when to be there to see it at its absolute best.
              </p>
            </div>

            {/* Section 1: Corridor Concept */}
            <div id="viewing-corridor" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Understanding the Machhapuchhre Viewing Corridor in Annapurna
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Machhapuchhre is not visible the same way from everywhere in the Annapurna region. Trekkers often expect one dramatic reveal, but in practice, the mountain builds itself into view gradually — first as a distant shape between forest gaps, then as a sharp, unmistakable fishtail-shaped summit dominating the skyline. We call this progression the <strong>Machhapuchhre viewing corridor</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg mb-2">Distance & Visual Perspective Shift</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    From lower villages like Ghandruk, you look up at Machhapuchhre framed by terraced fields, prayer flags, and slate roofs, giving the view human scale and cultural richness. Climb higher onto open ridgelines like Dobato or Khopra, and the foreground drops away entirely — revealing direct, eye-level sweeps of the peak with no competing ridges blocking your field of view.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-lg mb-2">Fishtail Split vs. Single Spire Angle</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Machhapuchhre&apos;s famous double summit (the distinct &quot;fishtail&quot; split) is only visually obvious from specific angles, such as Ghandruk, Tadapani, and Pokhara. From higher northwest ridgelines like Khopra, the peak rotates visually, appearing more like a single sharp, monolithic spearhead piercing the clouds.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 space-y-2">
                <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
                  <span>⏱️</span> Why Morning Timing Rules Himalayan Visibility
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Annapurna weather follows a strict thermodynamic rhythm. Overnight cooling stabilizes mountain air, ensuring crystal-clear sky conditions at pre-dawn. By 10:00 AM, solar heating causes moist air in the deep Modi Khola and Kali Gandaki gorges to evaporate and rise, creating cumulus cloud caps that obscure mountain summits by early afternoon. <strong>Always schedule mountain viewing before 9:00 AM.</strong>
                </p>
              </div>
            </div>

            {/* Section 2: Trail Viewpoint Breakdown */}
            <div id="trail-viewpoints" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Machhapuchhre Views Along the Trek Route
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Here is how the viewing experience unfolds sequentially as you move through the Annapurna trekking network:
              </p>

              <div className="space-y-6">
                {/* Viewpoint 1 */}
                <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-950">1. Ghandruk Village – First Cultural Framed View</h3>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">1,940m Elevation</span>
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Ghandruk is where most trekkers get their first breathtaking look at Machhapuchhre. The village&apos;s stone-paved alleys, slate roofs, and traditional Gurung architecture sit directly beneath the soaring peak, creating one of the most photographed cultural landscapes in Nepal.
                  </p>
                  <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-lg flex items-center gap-2">
                    <strong className="text-stone-800 font-semibold">Visibility Profile:</strong> Close-to-medium range, highly photogenic, framed by stone courtyards and fluttering prayer flags.
                  </div>
                </div>

                {/* Viewpoint 2 */}
                <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-950">2. Tadapani – Forest Balcony Sunrise View</h3>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">2,630m Elevation</span>
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Tadapani sits on a high forest clearing surrounded by dense rhododendron and oak woodlands. Sunrise here feels intimate: waking up before dawn to stand on teahouse balconies as Machhapuchhre glows pink and gold through forest canopy silhouettes.
                  </p>
                  <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-lg flex items-center gap-2">
                    <strong className="text-stone-800 font-semibold">Visibility Profile:</strong> Elevated partial panorama, framed by forest edges, positioned directly alongside <Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline">Annapurna South</Link> and Hiunchuli.
                  </div>
                </div>

                {/* Viewpoint 3 */}
                <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-950">3. Dobato – Ridge-Level Expansion of the Skyline</h3>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">3,420m Elevation</span>
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Dobato marks the transition where the trail emerges above the tree line onto alpine ridge country. Here, Machhapuchhre stops being an isolated mountain and integrates into a vast, unbroken Himalayan wall alongside Annapurna South and Dhaulagiri.
                  </p>
                  <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-lg flex items-center gap-2">
                    <strong className="text-stone-800 font-semibold">Visibility Profile:</strong> Wide-angle mountain system view; exceptional for observing regional Himalayan topography.
                  </div>
                </div>

                {/* Viewpoint 4 */}
                <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-950">4. Muldai Viewpoint – 360° Panorama & Photography Hub</h3>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">3,637m Elevation</span>
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Muldai Viewpoint is widely recognized as the single best overall panoramic vantage point in the region. Reaching the hill for sunrise requires a short 30-minute pre-dawn climb from Dobato, rewarding you with an unmatched 360-degree sweep containing over 25 Himalayan peaks with zero crowd clutter.
                  </p>
                  <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-lg flex items-center gap-2">
                    <strong className="text-stone-800 font-semibold">Visibility Profile:</strong> Pristine morning clarity, 360° unobstructed horizon, optimal for wide-angle landscape photography.
                  </div>
                </div>

                {/* Viewpoint 5 */}
                <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-950">5. Khopra Ridge – Dramatic Floating Mountain Effect</h3>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">3,660m Elevation</span>
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Khopra Ridge offers the emotional high point of the trek. Looking east across the deep Modi Khola gulf, Machhapuchhre appears to float on top of an ocean of white valley clouds. The extreme solitude and vast open horizon create an unforgettable sense of scale.
                  </p>
                  <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-lg flex items-center gap-2">
                    <strong className="text-stone-800 font-semibold">Visibility Profile:</strong> Distant but immensely dramatic scale, secluded, cloud-inversion phenomenon.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Comparison Matrix Table */}
            <div id="viewpoint-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Machhapuchhre Viewpoint Comparison Matrix
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Compare how each major viewpoint across the Annapurna circuit balances distance, framing, photography quality, and crowd density:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Viewpoint</th>
                      <th className="py-4 px-4 sm:px-6">Distance to Peak</th>
                      <th className="py-4 px-4 sm:px-6">Best For</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {viewpointsTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">
                          <Link href={row.link} className="hover:text-emerald-700 underline">
                            {row.name}
                          </Link>
                        </td>
                        <td className="py-4 px-4 sm:px-6">{row.distance}</td>
                        <td className="py-4 px-4 sm:px-6">{row.bestFor}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs ${
                            row.crowd === 'High' ? 'bg-amber-100 text-amber-800' :
                            row.crowd === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                            'bg-stone-100 text-stone-800'
                          }`}>
                            {row.crowd}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Comparison Insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Closest vs. Clearest</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Ghandruk offers the closest cultural framing, while <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 underline">Muldai Viewpoint</Link> delivers the absolute clearest 360-degree panoramic breakdown.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Khopra vs. Poon Hill vs. Mardi</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Poon Hill is accessible but heavily crowded. Mardi Himal gets closest to the base of Fishtail. Khopra Ridge trades proximity for uncrowded, peaceful floating-ridge drama.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">For First-Time Trekkers</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Ghandruk and Tadapani allow beginners to enjoy classic Fishtail views without requiring high-altitude acclimatization above 3,000 meters.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Sunrise, Sunset & Seasons */}
            <div id="visibility-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Machhapuchhre Sunrise, Sunset & Seasonal Visibility Guide
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Timing determines image quality and mountain clarity far more than camera equipment:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">🍂 Autumn (Oct – Nov)</span>
                  <h3 className="font-bold text-stone-900 text-base">Peak Visibility Season</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Post-monsoon scrubbing leaves air crisp and dry. Offers near 100% morning visibility with deep blue sky contrast and sharp mountain edges.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">🌸 Spring (Mar – Apr)</span>
                  <h3 className="font-bold text-stone-900 text-base">Rhododendron Bloom</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Clear mornings combined with red, pink, and white rhododendron flowers framing the mountain. Afternoon haze can build up slightly earlier.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">🌧️ Monsoon (Jun – Sep)</span>
                  <h3 className="font-bold text-stone-900 text-base">Low & Variable Visibility</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Heavy rains and persistent clouds obscure the peaks. Mountain views are unpredictable and brief, requiring patience between storm clearing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Photography & Framing */}
            <div id="photography-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Machhapuchhre Photography Guide for Trekkers
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Framing Techniques Across Viewpoints</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                  <li><strong>Ghandruk:</strong> Incorporate traditional slate rooflines, carved wooden windows, and local Gurung culture in the lower third for context.</li>
                  <li><strong>Tadapani:</strong> Use forest edge silhouettes and mossy oak branches as natural framing arches around the morning sunrise peak.</li>
                  <li><strong>Muldai & Khopra:</strong> Use wide-angle lenses (16-35mm equivalent) to capture the vast expanse of clouds filling the valley below.</li>
                </ul>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Common Himalayan Photography Pitfalls</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-900">
                    <strong>Overexposed Snow Summits:</strong> Direct morning sun reflects intensely off glaciers. Dial exposure compensation down by -0.3 to -0.7 EV to preserve highlight detail.
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-900">
                    <strong>Late Viewpoint Arrival:</strong> Arriving after 9:30 AM usually means shooting into thick valley haze or rising thermal clouds.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Surrounding Peaks */}
            <div id="surrounding-peaks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Mountains Surround Machhapuchhre in the Panorama
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Machhapuchhre rarely stands alone in the sky. From Muldai and Khopra Ridge, it is flanked by key giants of the central Himalayas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="p-5 rounded-xl border border-stone-200 bg-white">
                  <h4 className="font-bold text-stone-900 mb-1">Annapurna South (7,219m)</h4>
                  <p className="text-xs text-stone-600">Sits directly adjacent to the west, creating a massive, ice-draped wall framing Machhapuchhre.</p>
                </div>
                <div className="p-5 rounded-xl border border-stone-200 bg-white">
                  <h4 className="font-bold text-stone-900 mb-1">Hiunchuli (6,441m)</h4>
                  <p className="text-xs text-stone-600">The southern buttress of the Annapurna Sanctuary, forming a steep rock extension of Machhapuchhre.</p>
                </div>
                <div className="p-5 rounded-xl border border-stone-200 bg-white">
                  <h4 className="font-bold text-stone-900 mb-1">Dhaulagiri (8,167m)</h4>
                  <p className="text-xs text-stone-600">Visible across the Kali Gandaki Gorge to the west, providing breathtaking two-giant panorama contrast.</p>
                </div>
              </div>
            </div>

            {/* Section 7: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Machhapuchhre Views
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
                  Book Your Machhapuchhre Circuit
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to See Machhapuchhre with Your Own Eyes?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  As a licensed Nepal trekking operator (License #8928-091) based in Pokhara and Kathmandu, we customize Khopra Ridge and Annapurna viewpoint itineraries around optimal sunrise timing and photography conditions.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Contact Our Local Guides
                  </Link>
                  <Link
                    href="/tours/khopra-poon-hill-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore 9-Day Itinerary
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
                <a href="#viewing-corridor" className="block hover:text-emerald-600 transition">
                  • Viewing Corridor Concept
                </a>
                <a href="#trail-viewpoints" className="block hover:text-emerald-600 transition">
                  • Best Trail Viewpoints
                </a>
                <a href="#viewpoint-comparison" className="block hover:text-emerald-600 transition">
                  • Viewpoint Matrix Table
                </a>
                <a href="#visibility-guide" className="block hover:text-emerald-600 transition">
                  • Sunrise, Sunset & Seasons
                </a>
                <a href="#photography-guide" className="block hover:text-emerald-600 transition">
                  • Photography Tips
                </a>
                <a href="#surrounding-peaks" className="block hover:text-emerald-600 transition">
                  • Surrounding Mountains
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Guides</span>
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
                    <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 underline">
                      Best Photography Spots
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
