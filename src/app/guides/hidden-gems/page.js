import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Hidden Gems of the Khopra Ridge Trek | Nepal Trek Guide",
  description: "Discover the hidden gems of the Khopra Ridge Trek — secret viewpoints, remote Gurung and Magar villages, community lodges, wildlife, and Khayer Lake's sacred.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/hidden-gems",
  },
  openGraph: {
    title: "Hidden Gems of the Khopra Ridge Trek: Secret Viewpoints, Villages & Scenic Trails",
    description:
      "Discover the hidden gems of the Khopra Ridge Trek — secret viewpoints, remote Gurung and Magar villages, community lodges, wildlife, and Khayer Lake's sacred side.",
    url: "https://khopraridgetrek.com/guides/hidden-gems",
    type: "article",
  },
};

export default function HiddenGemsPage() {
  const summarySpecs = [
    { label: "Top Sunrise View", value: "Muldai Viewpoint (3,637m)" },
    { label: "Cultural Highlight", value: "Cliff Honey Harvesting in Swanta" },
    { label: "Alpine Pastures", value: "Bansi Kharka Meadows" },
    { label: "Sacred Landmark", value: "Khayer Baraha Shrine (4,660m)" },
  ];

  const hiddenGemsList = [
    {
      category: "Secret Viewpoint",
      name: "Muldai Viewpoint (3,637m)",
      location: "Above Dobato Node",
      description: "A 45-minute pre-dawn climb from Dobato delivering an uncrowded 360° panorama of Dhaulagiri (8,167m), Annapurna South, Machhapuchhre, Nilgiri, and Hiunchuli without Poon Hill's crowds.",
    },
    {
      category: "Cultural Village",
      name: "Swanta Village & Cliff Honey",
      location: "Lower Swanta Valley",
      description: "A serene Magar settlement known for traditional wild cliffside honey harvesting using rope ladders. Explore stone houses and sample organic wild mountain honey.",
    },
    {
      category: "Alpine Meadow",
      name: "Bansi Kharka Pastures",
      location: "Between Tadapani & Bayeli",
      description: "Quiet high pastures used for seasonal livestock grazing. Ideal for peaceful mid-day picnic stops, birdwatching, and spotting the Himalayan Monal.",
    },
    {
      category: "Sacred Pilgrimage",
      name: "Khayer Baraha Shrine",
      location: "Khayer Lake Shore (4,660m)",
      description: "A tranquil stone shrine dedicated to Lord Vishnu (Baraha avatar) on the turquoise shore of high-altitude Khayer Lake, revered by Hindu & Buddhist pilgrims.",
    },
    {
      category: "Remote Settlement",
      name: "Chhistibung Community Node",
      location: "Below Khopra Ridge",
      description: "A quiet mountain stop run on traditional agrarian rhythms — firewood collecting, yak herding, and authentic community lodge hospitality.",
    },
    {
      category: "Forest Canopy",
      name: "Spring Rhododendron Wilds",
      location: "Tadapani to Dobato Trail",
      description: "Dense mossy oak and giant rhododendron forests that bloom in vibrant shades of red, pink, and white between March and April.",
    },
  ];

  const faqs = [
    {
      q: "What are the hidden gems of the Khopra Ridge Trek?",
      a: "Key hidden gems include Muldai Viewpoint's 360° sunrise, Swanta's cliff honey harvesting tradition, Bansi Kharka alpine pastures, sacred Khayer Baraha shrine at Khayer Lake (4,660m), and uncrowded community lodges.",
    },
    {
      q: "Is Khopra Ridge less crowded than Poon Hill?",
      a: "Yes. Khopra Ridge sees a small fraction of Poon Hill's foot traffic, offering silent trails, uncrowded teahouses, and peaceful mountain viewing without tourist bottlenecks.",
    },
    {
      q: "Which viewpoint is better: Muldai Viewpoint or Poon Hill?",
      a: "Muldai Viewpoint (3,637m) delivers a comparable or superior 360° mountain panorama of Dhaulagiri and Annapurna South, but with 90% fewer people than Poon Hill.",
    },
    {
      q: "What hidden places can be visited near Khayer Lake?",
      a: "Beyond the main trail junction, you can explore the sacred Khayer Baraha shrine, quiet reflective shoreline corners, and local pilgrimage trail paths.",
    },
    {
      q: "Which villages should trekkers explore on the Khopra route?",
      a: "Swanta (wild honey traditions), Chhistibung (agrarian mountain life), and Paudwar (traditional stone/timber architecture) are standouts for cultural depth.",
    },
    {
      q: "What wildlife can be seen on the Khopra Ridge Trek?",
      a: "Trekkers frequently spot the Himalayan Monal (Danfe), Himalayan Griffon vultures, blue sheep (bharal) on high ridges, and musk deer in lower forests.",
    },
    {
      q: "Is the Khopra Ridge Trek good for photography?",
      a: "Exceptional. Muldai Viewpoint and Khopra Ridge offer uncrowded golden-hour photography of Dhaulagiri, Annapurna South, and Fishtail Peak.",
    },
    {
      q: "Are community lodges available along the trek?",
      a: "Yes. Most lodges along this loop are community-owned, directly funding local Magar and Gurung village schools, health clinics, and infrastructure.",
    },
    {
      q: "When is the best season to visit Khopra's hidden attractions?",
      a: "Spring (March–April) for blooming rhododendron canopy, and Autumn (September–November) for crisp mountain clarity and stable blue skies.",
    },
    {
      q: "Can beginners explore the lesser-known parts of the Khopra Trek?",
      a: "Yes, with proper pacing and a licensed local guide. Most hidden viewpoints and villages are easily accessible with moderate fitness.",
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
            <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition">Guides</Link>
            <span>/</span>
            <span className="text-emerald-400">Hidden Gems</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Offbeat Exploration Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Hidden Gems of the Khopra Ridge Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Secret viewpoints, traditional Gurung &amp; Magar villages, high alpine pastures, wildlife, and the sacred side of Khayer Lake.
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
                💎
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Offbeat Trail Verification</h4>
                <p>
                  Maintained and verified by licensed Pokhara operator <strong>EMD Treks</strong> (License #8928-091). We take trekkers off the crowded main corridors to explore authentic community villages and unmarked Himalayan viewpoints.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most trekkers in the Annapurna region hear the same names: Poon Hill, Annapurna Base Camp, Ghorepani. The Khopra Ridge Trek rarely gets the same tourist spotlight — and that is exactly what makes it special.
              </p>
              <p>
                From Muldai Viewpoint&apos;s uncrowded 360-degree sunrise to the wild cliff honey harvesters of Swanta and the sacred stone shrine at 4,660m Khayer Lake, this guide reveals the secret highlights along the loop.
              </p>
            </div>

            {/* Section 1: Hidden Gems Directory Table */}
            <div id="gems-directory" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top Hidden Gems of the Khopra Circuit
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Category</th>
                      <th className="py-4 px-4 sm:px-6">Hidden Landmark</th>
                      <th className="py-4 px-4 sm:px-6">Trail Location</th>
                      <th className="py-4 px-4 sm:px-6">Offbeat Experience &amp; Highlights</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {hiddenGemsList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Viewpoints & Culture Deep-Dive */}
            <div id="offbeat-highlights" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Exploring Secret Viewpoints &amp; Cultural Villages
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">1. Muldai Viewpoint Sunrise vs. Poon Hill</h3>
                <p className="text-sm sm:text-base">
                  Muldai Viewpoint (3,637m) sits directly above Dobato. While hundreds of trekkers gather on Poon Hill&apos;s viewing tower, Muldai offers a far quieter sunrise with an unobstructed panorama of Dhaulagiri (8,167m), Annapurna South, Fishtail, and Nilgiri.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">2. Wild Honey Harvesting in Swanta Village</h3>
                <p className="text-sm sm:text-base">
                  Nestled on the lower slopes, Swanta is home to ancestral Magar families who harvest wild mountain honey from vertical cliffs using hand-woven rope ladders. Visitors can learn about honey traditions and taste fresh honeycomb in local community lodges.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">3. Sacred Khayer Baraha Shrine (4,660m)</h3>
                <p className="text-sm sm:text-base">
                  Perched on the glacial shore of Khayer Lake under the steep wall of Annapurna South, this stone shrine is dedicated to Lord Vishnu. Visiting during early morning offers still turquoise reflections and sacred tranquility.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">4. Community Eco-Lodge Model</h3>
                <p className="text-sm sm:text-base">
                  Unlike commercialized teahouses on main routes, lodges along Khopra Ridge are owned collectively by local Magar and Gurung villages. 100% of accommodation profits directly fund village primary schools, healthcare clinics, and clean water systems.
                </p>
              </div>
            </div>

            {/* Section 3: FAQ Accordion */}
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
                  Offbeat Trek Specialists
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Hidden Gems Expedition
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Discover secret viewpoints, sacred lakes, and authentic Magar villages with local experts <strong>EMD Treks</strong> (NTB License #8928-091). Contact us to customize your offbeat Annapurna itinerary.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan Hidden Gems Trip
                  </Link>
                  <Link
                    href="/guides/best-offbeat-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Offbeat Treks Guide
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
                <a href="#gems-directory" className="block hover:text-emerald-600 transition">
                  • Hidden Gems Directory
                </a>
                <a href="#offbeat-highlights" className="block hover:text-emerald-600 transition">
                  • Viewpoints &amp; Culture
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Offbeat Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-700 underline">
                      Muldai Viewpoint Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Heritage &amp; Culture
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Model
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra is Less Crowded
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
