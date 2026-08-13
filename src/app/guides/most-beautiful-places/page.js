import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Most Beautiful Places on the Khopra Ridge Trek | Nepal Trek",
  description: "Discover the most beautiful places on the Khopra Ridge Trek, from Khayer Lake and Muldai Viewpoint to hidden forests, alpine meadows, and sweeping Himalayan.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/most-beautiful-places",
  },
  openGraph: {
    title: "Most Beautiful Places on the Khopra Ridge Trek: Viewpoints & Landscapes",
    description:
      "Discover the most beautiful places on the Khopra Ridge Trek, from Khayer Lake and Muldai Viewpoint to hidden forests, alpine meadows, and sweeping Himalayan panoramas.",
    url: "https://khopraridgetrek.com/guides/most-beautiful-places",
    type: "article",
  },
};

export default function MostBeautifulPlacesPage() {
  const summarySpecs = [
    { label: "Iconic Ridge View", value: "Khopra Danda (3,660m)" },
    { label: "High Alpine Lake", value: "Sacred Khayer Lake (4,660m)" },
    { label: "360° Panorama", value: "Muldai Viewpoint (3,637m)" },
    { label: "Cultural Valley", value: "Swanta Magar Terraced Village" },
  ];

  const beautifulPlacesList = [
    {
      rank: "#1",
      name: "Khopra Danda Ridge (3,660m)",
      type: "Panoramic Ridgeline",
      highlights: "Direct close-up face of Dhaulagiri (8,167m) & Annapurna South. Golden-hour sunsets right outside the lodge door and misty valley cloud inversions at sunrise.",
      bestTime: "Golden hour sunset & early sunrise",
    },
    {
      rank: "#2",
      name: "Sacred Khayer Lake (4,660m)",
      type: "High Altitude Glacial Lake",
      highlights: "Stark, turquoise glacial waters sitting directly beneath the towering 7,219m wall of Annapurna South. Home to the sacred Khayer Baraha shrine.",
      bestTime: "Early morning calm reflections",
    },
    {
      rank: "#3",
      name: "Muldai Viewpoint Deck (3,637m)",
      type: "360° Mountain Outlook",
      highlights: "A pre-dawn 45-minute climb above Dobato delivering an uncrowded panorama framing both Dhaulagiri and Annapurna ranges in a single frame.",
      bestTime: "Pre-dawn sunrise glow",
    },
    {
      rank: "#4",
      name: "Dobato & Tadapani Rhododendron Forests",
      type: "Ancient Moss Canopy",
      highlights: "Moss-covered oak and rhododendron woodlands. Sunlight filtering through giant blooming canopy in March–April turns hillsides vibrant red and pink.",
      bestTime: "Spring bloom (March to April)",
    },
    {
      rank: "#5",
      name: "Swanta Terraced Magar Valley",
      type: "Cultural Mountain Village",
      highlights: "Neat stone & timber houses surrounded by cascading millet and barley terraces, mountain streams, and suspension bridges.",
      bestTime: "Late afternoon golden light",
    },
    {
      rank: "#6",
      name: "Bansi Kharka Alpine Pastures",
      type: "High Pasture Clearing",
      highlights: "Quiet alpine grasslands between Tadapani and Bayeli where seasonal cattle herds graze against backdrop views of Fishtail Peak.",
      bestTime: "Mid-day picnic & birdwatching",
    },
  ];

  const quickComparison = [
    { category: "Best Sunrise Viewpoint", location: "Khopra Danda (3,660m)", reason: "Panoramic mountain wall with valley cloud inversions" },
    { category: "Best Sunset Viewpoint", location: "Khopra Ridge Lodge", reason: "Zero hiking needed; golden hour directly outside lodge" },
    { category: "Best Photography Spot", location: "Muldai Viewpoint Deck", reason: "Broadest single frame capturing Dhaulagiri & Annapurna" },
    { category: "Best Hidden Cultural Gem", location: "Swanta Magar Village", reason: "Terraced farming, wild honey tradition, quiet valley" },
    { category: "Best Dramatic Landscape", location: "Sacred Khayer Lake (4,660m)", reason: "Turquoise glacial water under vertical Annapurna South face" },
  ];

  const faqs = [
    {
      q: "What is the most beautiful place on the Khopra Ridge Trek?",
      a: "Khopra Danda (3,660m) is widely considered the signature highlight, offering close-up views of Dhaulagiri and Annapurna South with dramatic sunrise cloud inversions and golden sunsets.",
    },
    {
      q: "Which viewpoint offers the best mountain panorama?",
      a: "Muldai Viewpoint (3,637m) delivers a 360-degree panorama framing both the Dhaulagiri massif to the west and the Annapurna range to the east in a single sweep.",
    },
    {
      q: "Is Khayer Lake worth visiting for its scenery?",
      a: "Yes. Reaching the sacred turquoise waters at 4,660m directly beneath the vertical south face of Annapurna South offers one of the most dramatic high-alpine landscapes in Nepal.",
    },
    {
      q: "Which mountains can you see from Khopra Ridge?",
      a: "You can see Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri, Hiunchuli, Tukuche Peak, and Machhapuchhre (Fishtail Peak).",
    },
    {
      q: "Where can you watch sunrise on the Khopra Ridge Trek?",
      a: "Khopra Danda and Muldai Viewpoint are the two premier sunrise spots, both offering wide panoramas without the crowds found at Poon Hill.",
    },
    {
      q: "Is Muldai Viewpoint better than Poon Hill?",
      a: "Many trekkers rate Muldai Viewpoint superior to Poon Hill because it captures a broader sweep of peaks with 90% fewer people.",
    },
    {
      q: "What is the best season for photography on Khopra Ridge?",
      a: "Autumn (October–November) offers crystal-clear skies and peak mountain visibility. Spring (March–April) adds vibrant red and pink rhododendron blossoms to the forest floor.",
    },
    {
      q: "Are the rhododendron forests worth seeing?",
      a: "Yes. The ancient forests between Tadapani, Dobato, and Bayeli Kharka turn into a sea of red, pink, and white blossoms during spring peak bloom.",
    },
    {
      q: "Which village is the most scenic on the route?",
      a: "Swanta Village stands out for its terraced farmland, traditional Magar timber houses, mountain streams, and warm community hospitality.",
    },
    {
      q: "How many days do you need to experience all the best places?",
      a: "A 7 to 9 day itinerary allows ample time to enjoy Khopra Ridge, Khayer Lake, Muldai Viewpoint, Swanta, and forest trails without rushing acclimatization.",
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
            <span className="text-emerald-400">Most Beautiful Places</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Visual Highlights Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Most Beautiful Places on the Khopra Ridge Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              From sacred Khayer Lake and Muldai Viewpoint to mossy rhododendron forests, alpine pastures, and golden-hour mountain panoramas.
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
                🏞️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Scenic Photography Guide</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We guide photography trips across Annapurna and share the exact locations, sunrise times, and visual highlights along Khopra Ridge.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Few trails in the Annapurna region pack as much visual variety into one route as the Khopra Ridge Trek. In the space of a week, we walk through terraced farmland, mossy oak forests, open alpine ridgelines, and a sacred glacial lake tucked beneath Annapurna South.
              </p>
              <p>
                Below is our curated guide to the most beautiful places on the Khopra Ridge Trek — iconic viewpoints, sacred landscapes, hidden forests, and terraced valleys.
              </p>
            </div>

            {/* Section 1: Most Beautiful Places Directory Table */}
            <div id="scenic-places" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top Photogenic Locations &amp; Scenic Highlights
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Rank</th>
                      <th className="py-4 px-4 sm:px-6">Location Name</th>
                      <th className="py-4 px-4 sm:px-6">Landscape Type</th>
                      <th className="py-4 px-4 sm:px-6">Scenic Highlights &amp; Visual Appeal</th>
                      <th className="py-4 px-4 sm:px-6">Best Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {beautifulPlacesList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800">{row.rank}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.type}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.highlights}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.bestTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Quick Scenic Comparison */}
            <div id="scenic-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Comparison: Best Scenic Spots by Category
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Category</th>
                      <th className="py-4 px-4 sm:px-6">Winning Location</th>
                      <th className="py-4 px-4 sm:px-6">Why It Wins</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {quickComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Detailed Landscape Breakdown */}
            <div id="landscape-breakdown" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Exploring Khopra&apos;s Most Beautiful Landscapes
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">1. Khopra Danda Viewpoint (3,660m)</h3>
                <p className="text-sm sm:text-base">
                  Khopra Danda is the trek&apos;s signature viewpoint. Sitting high above the Kali Gandaki Gorge, it provides an uninterrupted front-row seat to Dhaulagiri I (8,167m) and Annapurna South (7,219m). At sunrise, cloud inversions fill the valley floor below while mountain peaks glow in early morning light.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">2. Sacred Khayer Lake (4,660m)</h3>
                <p className="text-sm sm:text-base">
                  A high-alpine glacial lake sitting in a secluded stone basin at 4,660 meters. The vertical ice-clad wall of Annapurna South rises directly above the turquoise water. Early mornings bring glassy reflections and a peaceful spiritual atmosphere around the stone Khayer Baraha shrine.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">3. Muldai Viewpoint (3,637m)</h3>
                <p className="text-sm sm:text-base">
                  Located above Dobato, Muldai Viewpoint offers one of the broadest 360-degree panoramas in the Annapurna Conservation Area. It captures both Dhaulagiri and Annapurna ranges in a single frame, making it a quieter, superior alternative to Poon Hill.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">4. Swanta Magar Terraced Farmland</h3>
                <p className="text-sm sm:text-base">
                  Below the high ridge lies Swanta Village, surrounded by green and golden terraced barley fields, mountain streams, and traditional Magar timber architecture. It offers a warm cultural contrast to the high-altitude ridgelines.
                </p>
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
                  Scenic Photography Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Experience These Landscapes First-Hand
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book a photography-focused Khopra Ridge trek with Pokhara local specialists <strong>EMD Treks</strong> (NTB License #8928-091). We build custom itineraries tailored for maximum sunrise views and scenic perfection.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan Scenic Trek
                  </Link>
                  <Link
                    href="/guides/hidden-gems"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Hidden Gems Guide
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
                <a href="#scenic-places" className="block hover:text-emerald-600 transition">
                  • Scenic Places Directory
                </a>
                <a href="#scenic-comparison" className="block hover:text-emerald-600 transition">
                  • Best Spot by Category
                </a>
                <a href="#landscape-breakdown" className="block hover:text-emerald-600 transition">
                  • Landscape Breakdown
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Visual Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 underline">
                      Best Photography Spots
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/sunrise-at-khopra-ridge" className="hover:text-emerald-700 underline">
                      Khopra Ridge Sunrise Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-700 underline">
                      Muldai Viewpoint Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/hidden-gems" className="hover:text-emerald-700 underline">
                      Hidden Gems of Khopra
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
