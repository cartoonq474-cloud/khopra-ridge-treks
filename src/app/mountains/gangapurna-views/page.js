import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Gangapurna Views from Muldai & Khopra Ridge: Best Viewpoints, Seasons & Photography Guide",
  description:
    "Can you see Gangapurna from Khopra Ridge or Muldai Viewpoint? Here's where to look, when to go, and how to photograph one of the Annapurna region's most striking peaks.",
  alternates: {
    canonical: "https://khopraridgetrek.com/mountains/gangapurna-views",
  },
  openGraph: {
    title: "Gangapurna Views from Muldai & Khopra Ridge: Best Viewpoints, Seasons & Photography Guide",
    description:
      "Can you see Gangapurna from Khopra Ridge or Muldai Viewpoint? Here's where to look, when to go, and how to photograph one of the Annapurna region's most striking peaks.",
    url: "https://khopraridgetrek.com/mountains/gangapurna-views",
    type: "article",
  },
};

export default function GangapurnaViewsPage() {
  const stats = [
    { label: "Peak Name", value: "Gangapurna" },
    { label: "Elevation", value: "7,455 m (24,457 ft)" },
    { label: "Mountain Range", value: "Annapurna Massif" },
    { label: "Visual Profile", value: "Fluted Snow Dome & Hanging Glaciers" },
  ];

  const comparisonTable = [
    {
      factor: "Elevation",
      muldai: "~3,630 m",
      khopra: "~3,660 m+",
    },
    {
      factor: "Gangapurna Visibility",
      muldai: "Good, partially framed by Annapurna South",
      khopra: "Broader, more upper glaciated face visible",
    },
    {
      factor: "Panorama Width",
      muldai: "Wide sweep from Dhaulagiri to Annapurna",
      khopra: "Extremely wide, includes Khayer Lake side peaks",
    },
    {
      factor: "Photography Quality",
      muldai: "Excellent pre-dawn & sunrise light",
      khopra: "Outstanding sunrise & warm sunset options",
    },
    {
      factor: "Crowd Levels",
      muldai: "Very low, day hike from Dobato",
      khopra: "Extremely quiet community circuit",
    },
    {
      factor: "Accessibility",
      muldai: "Shorter side trip from Ghandruk/Dobato",
      khopra: "Requires full multi-day Khopra Ridge itinerary",
    },
  ];

  const faqs = [
    {
      q: "Can you see Gangapurna from Khopra Ridge?",
      a: "Yes. On clear days, Gangapurna (7,455m) is visible from Khopra Ridge looking northeast, appearing as a fluted snow dome alongside Annapurna South and Nilgiri in the panorama.",
    },
    {
      q: "Is Gangapurna visible from Muldai Viewpoint?",
      a: "Yes, Gangapurna is visible from Muldai Viewpoint. It sits slightly behind Annapurna South to the northeast, taking a keen eye to spot among the closer peaks.",
    },
    {
      q: "What is the best season to see Gangapurna clearly?",
      a: "Autumn (September through November) offers the most consistent clear skies, crisp post-monsoon visibility, and minimal morning clouds.",
    },
    {
      q: "Which viewpoint has the better view: Muldai or Khopra Ridge?",
      a: "Khopra Ridge generally offers a broader, less obstructed view thanks to its higher elevation and direct eye-level position, though Muldai Viewpoint is a fantastic shorter alternative.",
    },
    {
      q: "Why is Gangapurna partly hidden from lower trail viewpoints?",
      a: "Gangapurna's geographical position behind Nilgiri and Annapurna South means lower-elevation forest trails block the view; higher viewpoints like Khopra Ridge and Muldai clear these intervening ridges.",
    },
    {
      q: "How can I identify Gangapurna in the Annapurna skyline?",
      a: "Look northeast of Annapurna South for a peak featuring vertical snow flutings and hanging glaciers, sitting slightly behind the broader face of Annapurna South.",
    },
    {
      q: "Is Gangapurna best viewed at sunrise or sunset?",
      a: "Sunrise is the absolute best time. The early low-angle morning sun rakes across Gangapurna's vertical snow flutings, casting high-contrast shadows before valley clouds form.",
    },
    {
      q: "What other mountains can you see alongside Gangapurna?",
      a: "You can see Annapurna South (7,219m), Nilgiri (7,061m), Machhapuchhre (6,993m), Hiunchuli (6,441m), and Dhaulagiri I (8,167m) in the same sweep.",
    },
    {
      q: "Do I need to hike all the way to Khayer Lake to see Gangapurna?",
      a: "No. Gangapurna is fully visible from both Muldai Viewpoint and Khopra Ridge without completing the high-altitude day hike to Khayer Lake.",
    },
    {
      q: "Is Gangapurna part of the Annapurna Massif?",
      a: "Yes. Gangapurna is a major 7,000m+ peak within the Annapurna Massif, famous on its northern side for towering above Manang village on the Annapurna Circuit.",
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
            <span className="text-emerald-400">Gangapurna Views</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              7,000m+ Himalayan Massif Peak
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Gangapurna Views from Muldai &amp; Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Where to look, best seasons, sunrise timing, and photography tips for viewing Gangapurna (7,455m).
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
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We guide groups across Muldai Viewpoint and Khopra Ridge and provide real-time viewpoint advisories and mountain identification guides.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Gangapurna does not get talked about as much as Annapurna I or Machhapuchhre, but once you spot its fluted snow dome rising above the ridgeline, it is hard to look away. At 7,455 meters (24,457 ft), it is one of the quiet giants of the Annapurna Massif — and two of the finest viewpoints to observe it are Muldai Viewpoint and Khopra Ridge.
              </p>
              <p>
                This guide walks through where Gangapurna appears in the skyline, how its view differs between <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 hover:underline font-semibold">Muldai Viewpoint</Link> and <Link href="/viewpoints/khopra-ridge-viewpoint" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge</Link>, when visibility is at its peak, and how to photograph its intricate ice flutings.
              </p>
            </div>

            {/* Section 1: Gangapurna at a Glance */}
            <div id="gangapurna-at-a-glance" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Gangapurna at a Glance
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Where Is Gangapurna Located?</h3>
                <p>
                  Gangapurna sits in the main Annapurna Massif within the Annapurna Conservation Area, positioned northeast of Khopra Ridge. While most famous as the backdrop towering over Manang village on the Annapurna Circuit, viewing it from Khopra and Muldai offers a rare southern perspective across the range.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Distinctive Features: Fluted Snow &amp; Hanging Glaciers</h3>
                <p>
                  Gangapurna is recognized by its deep vertical snow flutings and dramatic hanging glaciers. Because it sits tucked behind Nilgiri and Annapurna South on lower forest trails, it remains hidden until you reach high open ridgelines.
                </p>
              </div>
            </div>

            {/* Section 2: Muldai Viewpoint */}
            <div id="muldai-viewpoint" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Can You See Gangapurna from Muldai Viewpoint?
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Yes — on a clear morning, Gangapurna is visible looking northeast from Muldai Viewpoint (~3,630m).
              </p>

              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">Where to Look on Muldai&apos;s Skyline</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Look toward the northeast horizon. Gangapurna&apos;s fluted summit sits slightly behind and to the side of the closer <Link href="/mountains/annapurna-south-views" className="text-emerald-700 hover:underline font-semibold">Annapurna South</Link> wall. Arriving before dawn ensures clear air before thermal clouds build in the valley below.
                </p>
              </div>
            </div>

            {/* Section 3: Khopra Ridge Vantage */}
            <div id="khopra-ridge" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Gangapurna Views from Khopra Ridge
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Khopra Ridge (3,660m+) provides an even broader vista. The additional elevation clears more of the intervening ridges, revealing a larger portion of Gangapurna&apos;s glaciated upper dome.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Sunrise Alpenglow</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Low-angle sunrise light rakes across Gangapurna&apos;s vertical snow flutings, casting sharp shadows that highlight its 7,455m texture.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                  <h4 className="font-bold text-stone-900 text-base">Sunset Reflection</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Evening light casts a soft pink-orange hue across the eastern horizon, ideal for long-exposure evening mountain photography.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Viewpoint Comparison Table */}
            <div id="viewpoint-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Muldai Viewpoint vs. Khopra Ridge Comparison
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Comparing the two top Gangapurna viewpoints along the circuit:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Factor</th>
                      <th className="py-4 px-4 sm:px-6">Muldai Viewpoint</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.factor}</td>
                        <td className="py-4 px-4 sm:px-6 text-xs">{row.muldai}</td>
                        <td className="py-4 px-4 sm:px-6 text-xs">{row.khopra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5: Identification Guide */}
            <div id="identification-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How to Identify Gangapurna in the Skyline
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
                <li><strong>Locate Annapurna South (7,219m):</strong> It is the dominant, closer white wall. Gangapurna sits further back to the northeast.</li>
                <li><strong>Look for Vertical Snow Flutings:</strong> Gangapurna&apos;s hallmark is its deeply grooved snow flutings running vertically down the summit dome.</li>
                <li><strong>Triangulate with Machhapuchhre:</strong> <Link href="/mountains/machhapuchhre-views" className="text-emerald-700 hover:underline font-semibold">Machhapuchhre (Fishtail)</Link> sits further along to the east, providing a distinct landmark boundary.</li>
              </ul>
            </div>

            {/* Section 6: Photography Guide */}
            <div id="photography-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Photography Tips for Gangapurna
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                  <li><strong>Telephoto Lens (100mm–300mm):</strong> Highly recommended for cropping into Gangapurna&apos;s glaciated textures from Khopra Ridge.</li>
                  <li><strong>Foreground Depth:</strong> Frame shots with alpine grass, stone chortens, or prayer flags to emphasize the extreme distance and scale.</li>
                  <li><strong>Golden Hour Timing:</strong> Focus your shoot on the first 30 to 45 minutes after sunrise when shadows inside the flutings are deepest.</li>
                </ul>
              </div>
            </div>

            {/* Section 7: Surrounding Mountains */}
            <div id="surrounding-mountains" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Other Mountains Visible Alongside Gangapurna
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-700 underline">Annapurna South (7,219m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/nilgiri-views" className="hover:text-emerald-700 underline">Nilgiri (7,061m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-700 underline">Machhapuchhre (6,993m)</Link>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white font-bold text-stone-900">
                  <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-700 underline">Dhaulagiri (8,167m)</Link>
                </div>
              </div>
            </div>

            {/* Section 8: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Gangapurna Views
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
                  Ready to See Gangapurna &amp; the Annapurna Skyline?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Trek Khopra Ridge and Muldai Viewpoint with licensed operator <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Let our local guides organize your permits, eco-lodges, and viewpoint timing.
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
                <a href="#gangapurna-at-a-glance" className="block hover:text-emerald-600 transition">
                  • Gangapurna at a Glance
                </a>
                <a href="#muldai-viewpoint" className="block hover:text-emerald-600 transition">
                  • Muldai Viewpoint Visibility
                </a>
                <a href="#khopra-ridge" className="block hover:text-emerald-600 transition">
                  • Khopra Ridge Vantage
                </a>
                <a href="#viewpoint-comparison" className="block hover:text-emerald-600 transition">
                  • Muldai vs Khopra Comparison
                </a>
                <a href="#identification-guide" className="block hover:text-emerald-600 transition">
                  • How to Identify Peak
                </a>
                <a href="#photography-guide" className="block hover:text-emerald-600 transition">
                  • Photography Tips
                </a>
                <a href="#surrounding-mountains" className="block hover:text-emerald-600 transition">
                  • Surrounding Mountains
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
