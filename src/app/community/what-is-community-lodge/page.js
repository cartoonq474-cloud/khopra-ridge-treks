import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Community Lodge vs Teahouse in Nepal: Complete Trekking Accommodation Comparison",
  description:
    "Community lodge vs teahouse: compare ownership, cost, comfort, and sustainability in Nepal trekking, and see why Khopra Ridge Trek uses a community lodge model.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/what-is-community-lodge",
  },
  openGraph: {
    title: "Community Lodge vs Teahouse in Nepal: Complete Trekking Accommodation Comparison",
    description:
      "Community lodge vs teahouse: compare ownership, cost, comfort, and sustainability in Nepal trekking, and see why Khopra Ridge Trek uses a community lodge model.",
    url: "https://khopraridgetrek.com/community/what-is-community-lodge",
    type: "article",
  },
};

export default function WhatIsCommunityLodgePage() {
  const quickStats = [
    { label: "Ownership Model", value: "Village Collective vs Private Family" },
    { label: "Profit Destination", value: "100% Reinvested in Village Infrastructure" },
    { label: "Food Sourcing", value: "Organic Farm-to-Table Village Produce" },
    { label: "Key Flagship Circuit", value: "Khopra Ridge & Mohare Danda" },
  ];

  const comparisonRows = [
    {
      feature: "Ownership",
      community: "Owned collectively by the village or community committee",
      teahouse: "Owned by an individual entrepreneur or single family",
    },
    {
      feature: "Management",
      community: "Managed by an elected local village committee",
      teahouse: "Managed directly by the proprietor / family head",
    },
    {
      feature: "Profit Destination",
      community: "100% reinvested in Magar schools, clinics & trail infrastructure",
      teahouse: "Kept as private household income for the owning family",
    },
    {
      feature: "Staffing",
      community: "Rotated local village residents earning direct tourism wages",
      teahouse: "Family members or hired external seasonal workers",
    },
    {
      feature: "Food Sourcing",
      community: "Mostly local, organic village-grown produce & yak cheese",
      teahouse: "Mix of local produce and imported packaged goods",
    },
    {
      feature: "Environmental Strategy",
      community: "Coordinated trail-wide eco & waste management policies",
      teahouse: "Managed individually by each lodge proprietor",
    },
    {
      feature: "Primary Routes",
      community: "Khopra Ridge, Mohare Danda, Nangi, Swanta",
      teahouse: "Annapurna Circuit, EBC, ABC, Langtang",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between a community lodge and a teahouse in Nepal?",
      a: "A community lodge is owned collectively by a village and managed through a local committee, with profits reinvested into community schools, clinics, and infrastructure. A teahouse is owned and run by an individual or family, with profits kept as private household income.",
    },
    {
      q: "Are community lodges more expensive than teahouses?",
      a: "Generally, no. Pricing is driven by altitude and remoteness rather than ownership type. Room and meal rates at community lodges on Khopra Ridge are comparable to traditional teahouses on similar elevation routes.",
    },
    {
      q: "Is Khopra Ridge Trek a community lodge trek?",
      a: "Yes. The Khopra Ridge Trek uses a pioneer community lodge network built and managed by the Magar villages of Swanta and Nangi, ensuring tourism revenue stays 100% within local communities.",
    },
    {
      q: "Are community lodges comfortable for trekkers?",
      a: "Yes. On established community-tourism trails like Khopra Ridge, lodges offer twin-sharing rooms, heated communal dining halls, comfortable mattresses, and reasonably reliable hot showers and solar charging facilities.",
    },
    {
      q: "Do community lodges support local villages?",
      a: "Yes. Because profits are shared across the village rather than kept by one owner, community lodges support broader local employment, skill development, and village-level reinvestments in education and health.",
    },
    {
      q: "Are teahouses still the most common accommodation in Nepal?",
      a: "Yes. Teahouses remain the dominant accommodation model across most of Nepal's high-traffic trekking routes, including Everest Base Camp, the Annapurna Circuit, and Annapurna Base Camp.",
    },
    {
      q: "Which trekking accommodation is better for sustainable travel?",
      a: "Community lodges generally offer a stronger, more distributed social impact, as income is shared across an entire village rather than concentrated in a single household. Teahouses still support local families directly.",
    },
    {
      q: "Can solo trekkers stay in community lodges?",
      a: "Yes. Solo trekkers are warmly welcomed at community lodges just as they are at teahouses. Booking ahead or trekking with a licensed operator ensures room availability during peak autumn and spring seasons.",
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
            <Link href="/community/community-tourism-khopra" className="hover:text-emerald-400 transition">Community Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Community Lodge vs Teahouse</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Accommodation Models Explained
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Community Lodge vs Teahouse in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Understanding ownership, economic impact, food sourcing, facilities, and sustainability on Nepal&apos;s trekking trails.
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
                🏡
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Community Model Verification &amp; Local Impact</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, we work directly with Magar community committees in Swanta, Nangi, and Khopra to support sustainable eco-tourism.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                When you plan a trek in Nepal, you&apos;re not just choosing a route and a season. You&apos;re also choosing where you&apos;ll sleep every night, and that choice matters more than most trekkers realize.
              </p>
              <p>
                For decades, the teahouse has been the backbone of Nepal trekking accommodation. In recent years, a different model has grown alongside it: the community lodge, where accommodation is owned and managed by the village itself. The Khopra Ridge Trek is one of the clearest examples of this model in action.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Community Lodge vs Teahouse: Detailed Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Community Lodge</th>
                      <th className="py-4 px-4 sm:px-6">Traditional Teahouse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.feature}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.community}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.teahouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 text-sm text-emerald-950 font-medium">
                <strong>The Core Difference in One Sentence:</strong> A community lodge is collectively owned by the village, so income supports wider community schools and clinics. A teahouse is privately owned, so income directly supports the individual family running it.
              </div>
            </div>

            {/* Section 2: What is a Community Lodge & How it Works */}
            <div id="what-is-community-lodge" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Is a Community Lodge in Nepal Trekking?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🏛️ Committee Management</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Managed through elected local village committees. Representatives oversee staffing, maintenance, pricing, and transparent profit distribution to local public infrastructure.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">💡 Combating Economic Leakage</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Designed to prevent tourism revenue from leaking out to city agencies. By keeping ownership local, 100% of accommodation spend stays within the mountain village economy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Facilities, Comfort & Food Experience */}
            <div id="comfort-and-food" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Comfort, Facilities &amp; Food Experience
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛏️ Modern Room Facilities</h4>
                  <p className="text-xs text-stone-600">Khopra Ridge community lodges feature solid wooden twin beds, warm mattresses, heated dining halls, and solar hot showers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥗 Farm-to-Table Village Dining</h4>
                  <p className="text-xs text-stone-600">Community lodge menus lean heavily on organic village-grown produce, local grains, fresh vegetables, and famous Swanta yak cheese.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">💵 Transparent Fair Pricing</h4>
                  <p className="text-xs text-stone-600">Prices are fixed and set by the committee. Meal costs reflect altitude transport logistics, matching standard teahouse rates.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🤝 Authentic Village Hospitality</h4>
                  <p className="text-xs text-stone-600">Staff are local Magar residents. Staying in a community lodge feels like being welcomed by the whole village.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Khopra Ridge & Swanta-Nangi Model Spotlight */}
            <div id="khopra-spotlight" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Community Model on the Khopra Ridge Trek
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">Stewardship by Swanta &amp; Nangi Villages</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Khopra Ridge sits off the crowded commercial circuits. To develop sustainable tourism without sacrificing local control, the Magar villages of Swanta and Nangi built a shared lodge network. Profits directly fund Mahabir Pun&apos;s wireless internet project, high school teacher salaries, and village health posts.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold text-emerald-800">
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• 100% Village Reinvestment</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Magar Cultural Heritage</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Zero Commercial Leakage</span>
                </div>
              </div>
            </div>

            {/* Section 5: Decision Guide - Which Should You Choose? */}
            <div id="decision-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Decision Guide: Which Model Fits Your Trek?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-950 text-base">Choose a Community Lodge If You Want:</h4>
                  <ul className="text-xs text-stone-600 space-y-2 list-disc pl-4">
                    <li>Your trekking spend to directly benefit an entire village community</li>
                    <li>To experience organic farm-to-table dining and Magar culture</li>
                    <li>To trek offbeat, sustainable trails like Khopra Ridge &amp; Mohare Danda</li>
                    <li>Transparent, committee-regulated eco-tourism management</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-950 text-base">Choose a Teahouse If You Want:</h4>
                  <ul className="text-xs text-stone-600 space-y-2 list-disc pl-4">
                    <li>The widest route availability across classic trails (EBC, ABC, Annapurna Circuit)</li>
                    <li>A close personal bond with one hosting family throughout your stay</li>
                    <li>Broad international menus (pizza, pasta, bakery items)</li>
                    <li>High flexibility for spontaneous route adjustments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
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
                  Community-Owned Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Experience Khopra Ridge Community Lodges Firsthand
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Stay in community-owned lodges in Swanta and Khopra where 100% of accommodation profits support Magar village development.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Book Community Trek
                  </Link>
                  <Link
                    href="/community/community-tourism-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Community Tourism Hub
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
                <a href="#comparison-table" className="block hover:text-emerald-600 transition">
                  • Quick Comparison Table
                </a>
                <a href="#what-is-community-lodge" className="block hover:text-emerald-600 transition">
                  • What Is a Community Lodge?
                </a>
                <a href="#comfort-and-food" className="block hover:text-emerald-600 transition">
                  • Comfort &amp; Dining
                </a>
                <a href="#khopra-spotlight" className="block hover:text-emerald-600 transition">
                  • Khopra &amp; Swanta Model
                </a>
                <a href="#decision-guide" className="block hover:text-emerald-600 transition">
                  • Which Should You Choose?
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Community Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/how-trekking-supports-communities" className="hover:text-emerald-700 underline">
                      How Trekking Supports Villages
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/sustainable-tourism-khopra" className="hover:text-emerald-700 underline">
                      Sustainable Tourism Overview
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
