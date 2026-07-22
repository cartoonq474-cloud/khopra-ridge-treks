import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Route & Trail Guide: Complete Trekking Route from Khopra Ridge",
  description:
    "Our complete Khayer Lake Route & Trail Guide covers distance, elevation, trail stages, navigation tips, and safety advice for the hike from Khopra Ridge.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-route-guide",
  },
  openGraph: {
    title: "Khayer Lake Route & Trail Guide: Complete Trekking Route from Khopra Ridge",
    description:
      "Our complete Khayer Lake Route & Trail Guide covers distance, elevation, trail stages, navigation tips, and safety advice for the hike from Khopra Ridge.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-route-guide",
    type: "article",
  },
};

export default function KhayerLakeRouteGuidePage() {
  const stats = [
    { label: "Round-Trip Distance", value: "16 km (9.9 miles)" },
    { label: "Net Elevation Gain", value: "~1,000 m" },
    { label: "Total Hiking Time", value: "8 – 10 Hours Round Trip" },
    { label: "Trail Difficulty", value: "Strenuous Alpine Hike" },
  ];

  const stages = [
    {
      stage: "Stage 1: Khopra Ridge to Ridge Flank Traverse",
      dist: "2.5 km",
      time: "Approx. 1 Hour",
      terrain: "Grassy ridge, flat-to-gentle incline",
      desc: "Begins directly behind the Khopra Community Lodge. Follows the open, grassy ridge flank northward. Easy walking on stable ground with sweeping valley views. Settle into a steady pace here.",
    },
    {
      stage: "Stage 2: Bayeli Kharka & Glacial Moraine Section",
      dist: "3.5 km",
      time: "Approx. 2.5 Hours",
      terrain: "Loose shale scree, rocky moraine, stream crossings",
      desc: "Crosses past Bayeli Kharka pasture into wild glacial moraine fields. Dirt path thins out; stacked stone cairns become your primary visual guide. Watch your footing on loose scree slopes.",
    },
    {
      stage: "Stage 3: Final Ascent to Khayer Lake Plateau",
      dist: "2.0 km",
      time: "Approx. 1.5 Hours",
      terrain: "Steep rocky valley flank, built stone stairs, alpine meadow",
      desc: "The steepest, highest push of the day. Climbs up the valley wall to the 4,660m lake basin. Built stone steps help on the final grassy slopes, opening up to prayer flags at sacred Khayer Barah Temple.",
    },
  ];

  const terrainBreakdown = [
    { type: "Grassland & Open Ridge", feature: "Stable, exposed to wind. Requires windproof outer shells." },
    { type: "Glacial Moraine & Scree", feature: "Loose shale, ankle-roll hazards. Trekking poles highly recommended." },
    { type: "Stream Crossings", feature: "Minor snowmelt streams. Waterproof boots keep feet dry." },
    { type: "Snow & Ice (Shoulder Season)", feature: "Early spring / winter snow hides cairns and paths. Guide required." },
  ];

  const faqs = [
    {
      q: "How do you reach Khayer Lake from Khopra Ridge?",
      a: "The route follows an open ridge traverse, then a glacial moraine field past Bayeli Kharka, before a final steep ascent to the lake plateau — a 16 km round trip with roughly 1,000 meters of elevation gain.",
    },
    {
      q: "How long is the Khayer Lake hike?",
      a: "Most trekkers complete the full round trip in 8 to 10 hours, depending on fitness, acclimatization, and weather conditions on the day.",
    },
    {
      q: "What is the distance from Khopra Ridge to Khayer Lake?",
      a: "The round-trip distance is 16 kilometers (9.9 miles), broken into three main stages of 2.5 km, 3.5 km, and 2 km each way.",
    },
    {
      q: "How difficult is the Khayer Lake trail?",
      a: "It is a strenuous high-altitude day hike with loose scree, stream crossings, and a steep final ascent, best suited to trekkers with prior high-altitude hiking experience.",
    },
    {
      q: "Can beginners hike to Khayer Lake?",
      a: "Yes, but beginners should be realistic about the physical demands and should strongly consider hiring a local guide, particularly outside the autumn peak season.",
    },
    {
      q: "Do I need a guide for the Khayer Lake trek?",
      a: "A guide isn't strictly mandatory in clear autumn conditions for experienced hikers, but is genuinely recommended in shoulder season or winter when snow covers the trail and cairns.",
    },
    {
      q: "Is the Khayer Lake trail well marked?",
      a: "No — the trail relies on stone cairns rather than official signboards, and the ground path can disappear entirely in the moraine section, making navigation tools essential.",
    },
    {
      q: "What is the elevation of Khayer Lake?",
      a: "The route gains approximately 1,000 meters from Khopra Ridge (3,660m), with Khayer Lake sitting at 4,660 meters (15,288 ft) on an exposed high plateau.",
    },
    {
      q: "What is the best season to hike to Khayer Lake?",
      a: "Autumn offers the clearest visibility and most stable trail conditions, with spring as a solid second option once early-season snow patches have cleared.",
    },
    {
      q: "Can Khayer Lake be completed as a day hike?",
      a: "Yes, it is designed and typically completed as a single long day hike from Khopra Ridge, with an early morning departure (6:00 AM) and return by evening.",
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
            <span className="text-emerald-400">Route Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Trail Navigation &amp; Stage Breakdown
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake Route &amp; Trail Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete stage-by-stage guide for the 16km round-trip day hike from Khopra Ridge (3,660m) to sacred Khayer Lake (4,660m).
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
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Our local guides walk this 16km alpine day hike regularly, tracking cairn locations, snow conditions, and stream crossings.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khayer Lake is one of the most rewarding high-altitude day hikes in the Khopra Ridge area, and also one of the least forgiving if you don&apos;t know the route. This Khayer Lake route and trail guide walks you through the entire journey from Khopra Ridge (Khopra Danda) to the sacred alpine lake and back, stage by stage.
              </p>
              <p>
                Unlike the well-signed Poon Hill circuit, the Khayer Lake trail is rustic. Trail markers are limited to stacked stone cairns, terrain shifts from grassy ridge to glacial moraine to steep stone stairs, and fog can reduce visibility to almost nothing within minutes. That combination is why an accurate route guide matters more here than on lower-altitude trails.
              </p>
            </div>

            {/* Section 1: Route Overview & Metrics */}
            <div id="route-overview" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khayer Lake Route Overview
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Trailhead Departure &amp; Recommended Start Time</h3>
                <p>
                  The trail starts directly behind the <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge Lodge</Link> complex at 3,660m. Most guides recommend departing no later than <strong>6:00 AM – 6:30 AM</strong>. An early start ensures you reach the lake plateau before afternoon clouds build across the Annapurna South face.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Metric</th>
                      <th className="py-4 px-4 sm:px-6">Route Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Round-Trip Distance</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">16 km (9.9 miles)</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Elevation Gain / Loss</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">+1,000 m ascent / -1,000 m descent</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Elevation Spectrum</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Start 3,660 m → High Point 4,660 m</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Hiking Duration</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">8 to 10 Hours Round Trip</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Stage-by-Stage Trail Breakdown */}
            <div id="stage-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Stage-by-Stage Khayer Lake Trekking Route
              </h2>

              <div className="space-y-6">
                {stages.map((st, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <h3 className="font-extrabold text-stone-950 text-lg">{st.stage}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">
                          {st.dist}
                        </span>
                        <span className="px-2.5 py-0.5 bg-stone-100 text-stone-700 font-bold text-xs rounded-full">
                          {st.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700">Terrain: {st.terrain}</p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Terrain & Footing Conditions */}
            <div id="terrain-conditions" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Trail Terrain &amp; Walking Conditions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {terrainBreakdown.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">{item.type}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Navigation & GPS Guidance */}
            <div id="navigation-tips" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Navigation Strategy &amp; Fog Protocol
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base">
                  <li><strong>Stone Cairns over Signage:</strong> Standard trail signboards are non-existent past Bayeli Kharka. Rely on stacked stone cairns left by local herders and guides.</li>
                  <li><strong>Pre-load Offline Maps:</strong> Mobile signal is zero along the route. Download offline GPX or Maps.me / Gaia GPS maps at Khopra Ridge Lodge before departing.</li>
                  <li><strong>Fog Protocol:</strong> If thick mountain fog drops visibility under 10 meters, stop and check your offline GPS location. Do not wander off-trail into scree fields.</li>
                  <li><strong>Turnaround Time Rule:</strong> Establish a strict 12:00 PM turnaround time. If you have not reached the lake by noon, turn back immediately to return safely before dark.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: Sacred Significance & Cultural Respect */}
            <div id="sacred-lake" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Sacred Significance of Khayer Barah Temple
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                <p className="text-sm text-stone-600 leading-relaxed">
                  Khayer Lake is a sacred pilgrimage site for local Gurung and Magar communities. The small shrine at the lake shore, <Link href="/planning/khayer-baraha-temple-guide" className="text-emerald-700 hover:underline font-semibold">Khayer Baraha Temple</Link>, holds immense spiritual importance. Pilgrims travel here during the August Janai Purnima festival. Trekkers are asked to maintain quiet respect, avoid littering, and refrain from swimming in the sacred waters.
                </p>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Route
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
                  Book Guided Alpine Hike
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khayer Lake with Certified Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Join licensed operator <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides know every cairn, weather pattern, and safety protocol along the 16km high-altitude trail.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/gpx-download"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Download GPX Trail Map
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
                <a href="#route-overview" className="block hover:text-emerald-600 transition">
                  • Route Overview &amp; Metrics
                </a>
                <a href="#stage-breakdown" className="block hover:text-emerald-600 transition">
                  • Stage-by-Stage Breakdown
                </a>
                <a href="#terrain-conditions" className="block hover:text-emerald-600 transition">
                  • Trail Terrain &amp; Conditions
                </a>
                <a href="#navigation-tips" className="block hover:text-emerald-600 transition">
                  • Navigation &amp; Fog Protocol
                </a>
                <a href="#sacred-lake" className="block hover:text-emerald-600 transition">
                  • Sacred Temple Significance
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Planning Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khayer-lake-weather" className="hover:text-emerald-700 underline">
                      Khayer Lake Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-packing-list" className="hover:text-emerald-700 underline">
                      Khayer Lake Packing List
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khayer-lake-altitude-risks" className="hover:text-emerald-700 underline">
                      Altitude Risks &amp; AMS
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/gpx-download" className="hover:text-emerald-700 underline">
                      Download Offline GPX Map
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
