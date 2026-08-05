import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Community Lodge vs Teahouse Model in Nepal Trekking: Which Accommodation Is Better?",
  description:
    "Compare the community lodge vs teahouse model in Nepal trekking — ownership, cost, comfort, and local impact — plus how Khopra Ridge puts community lodges into practice.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/community-lodge-vs-teahouse",
  },
  openGraph: {
    title: "Community Lodge vs Teahouse Model in Nepal Trekking: Which Accommodation Is Better?",
    description:
      "Compare the community lodge vs teahouse model in Nepal trekking — ownership, cost, comfort, and local impact — plus how Khopra Ridge puts community lodges into practice.",
    url: "https://khopraridgetrek.com/community/community-lodge-vs-teahouse",
    type: "article",
  },
};

export default function CommunityLodgeVsTeahousePage() {
  const quickStats = [
    { label: "Community Lodges", value: "Village Cooperative Trusts" },
    { label: "Traditional Teahouses", value: "Private Family Businesses" },
    { label: "Main Revenue Beneficiary", value: "Magar Schools & Village Clinics" },
    { label: "Pioneer Trail Example", value: "Khopra Ridge & Mohare Danda" },
  ];

  const snapshotRows = [
    {
      feature: "Ownership Structure",
      community: "Village or community committee",
      teahouse: "Individual family or private owner",
    },
    {
      feature: "Main Beneficiary",
      community: "Shared community fund (schools, clinics, infrastructure)",
      teahouse: "The owning family household",
    },
    {
      feature: "Route Availability",
      community: "Specific eco-routes (Khopra Ridge, Mohare Danda, Nangi)",
      teahouse: "Widely available on almost all major Nepal routes",
    },
    {
      feature: "Best Suited For",
      community: "Travelers prioritizing direct local impact & offbeat paths",
      teahouse: "Travelers wanting maximum itinerary flexibility",
    },
    {
      feature: "Example Routes",
      community: "Khopra Ridge Trek, Mohare Danda Circuit",
      teahouse: "Everest Base Camp, Annapurna Circuit, Langtang",
    },
  ];

  const structuralRows = [
    {
      factor: "Owner",
      community: "Village committee, collectively held",
      teahouse: "Individual or single family",
    },
    {
      factor: "Management",
      community: "Elected or appointed local committee",
      teahouse: "Owner or family members",
    },
    {
      factor: "Decision-Making",
      community: "Group-based, tied to village development priorities",
      teahouse: "Individual owner's discretion",
    },
    {
      factor: "Accountability",
      community: "Reports transparently to the village community",
      teahouse: "Answers only to the owner household",
    },
  ];

  const experienceRows = [
    {
      aspect: "Room Comfort",
      community: "Basic twin beds, simple insulation (often newer village construction)",
      teahouse: "Basic twin beds, simple insulation (varies by building age)",
    },
    {
      aspect: "Food Sourcing",
      community: "Locally grown vegetables, local yak & barley farm produce",
      teahouse: "Mix of local ingredients and city-imported packaged supplies",
    },
    {
      aspect: "Hot Showers",
      community: "Usually gas or solar-heated, small added fee",
      teahouse: "Usually gas or solar-heated, small added fee",
    },
    {
      aspect: "Power & Charging",
      community: "Paid solar/micro-hydro charging, patchy above 3,000m",
      teahouse: "Paid hydro or solar charging, patchy above 3,500m",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between a community lodge and a teahouse in Nepal?",
      a: "A teahouse is privately owned and run by a single family, keeping whatever profit the business generates. A community lodge is collectively owned by the village and managed by a local committee, with profits pooled into a shared fund for schools, clinics, and infrastructure.",
    },
    {
      q: "Are community lodges more expensive than teahouses in Nepal?",
      a: "Not typically. Community lodges tend to charge a standardized, fair regional rate, while teahouse pricing varies by owner and location. Overall costs are comparable, with altitude and remoteness affecting price more than ownership model.",
    },
    {
      q: "Are community lodges more comfortable than traditional teahouses?",
      a: "Not necessarily. Comfort depends mainly on a lodge's construction, maintenance, and altitude rather than who owns it. Some community lodges on newer routes like Khopra Ridge have recent construction, but well-maintained teahouses on popular circuits can be just as comfortable.",
    },
    {
      q: "Does staying at a teahouse support local communities?",
      a: "It can, but there's no built-in mechanism guaranteeing it. Teahouse profits go directly to the owning family, and what happens after that depends on individual choices. Community lodges guarantee that a fixed share is reinvested in village public goods.",
    },
    {
      q: "How do community lodges work in Nepal?",
      a: "A village committee owns and manages the lodge, overseeing staffing, pricing, and daily operations. Profits are pooled into a community fund and typically allocated toward local schools, health posts, and infrastructure projects like trail maintenance.",
    },
    {
      q: "Is Khopra Ridge Trek a community lodge trek?",
      a: "Yes. Lodges along the Khopra Ridge route, including those in Swanta Village and Nangi, are owned and managed by local community committees rather than private operators.",
    },
    {
      q: "Where do trekkers stay while trekking in Nepal?",
      a: "Most trekkers stay in teahouses — small, privately run guesthouses found along major routes. On specific routes like Khopra Ridge and Mohare Danda, trekkers stay in community lodges instead.",
    },
    {
      q: "Which accommodation is better for responsible trekking in Nepal?",
      a: "Community lodges are generally the stronger choice for trekkers prioritizing responsible tourism, since their revenue-sharing structure is built specifically to benefit the wider village rather than a single business.",
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
            <span className="text-emerald-400">Community Lodge vs Teahouse Model</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Comparison Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Community Lodge vs Teahouse Model in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Compare ownership, cost, comfort, and local impact — plus how the Khopra Ridge Trek puts community lodges into working practice.
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
                <h4 className="font-bold text-stone-900 text-base">Local Trail Operator &amp; Model Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, we partner with community lodge committees across Swanta, Nangi, and Khopra to ensure transparent local economic impact.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Every night on a Nepal trek, you make a choice that goes beyond comfort. You decide, whether you realize it or not, who your money supports once you check out.
              </p>
              <p>
                Two accommodation systems dominate Nepal&apos;s trekking trails. The traditional teahouse model is privately owned, family-run, and decades old. The community lodge model is newer and works differently: villages own and manage the lodge together, and the income is shared rather than pocketed by one household.
              </p>
            </div>

            {/* Section 1: Quick Snapshot Table */}
            <div id="quick-snapshot" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Comparison Snapshot
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Community Lodge Model</th>
                      <th className="py-4 px-4 sm:px-6">Traditional Teahouse Model</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {snapshotRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.feature}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.community}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.teahouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Origins & Structural Differences */}
            <div id="structural-differences" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Understanding Ownership &amp; Structural Differences
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">☕ Traditional Teahouse Origins</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Developed in the 1960s–70s as independent trekking grew. Privately owned family guesthouses where the proprietor sets room rates, manages the menu, and keeps household profits.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌲 Community Lodge Origins</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Pioneered by social entrepreneur Mahabir Pun and Myagdi village committees to combat tourism revenue leakage. Lodges are village-owned assets with profits pooled into community funds.
                  </p>
                </div>
              </div>

              {/* Structural Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm mt-6">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Governance Factor</th>
                      <th className="py-4 px-4 sm:px-6">Community Lodge</th>
                      <th className="py-4 px-4 sm:px-6">Traditional Teahouse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {structuralRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.factor}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.community}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.teahouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Revenue Destination & Cost Comparison */}
            <div id="revenue-and-cost" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Where Does Your Money Go? Pricing &amp; Economic Impact
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🎓 School &amp; Education Funding</h4>
                  <p className="text-xs text-stone-600">Lodge profits directly pay salaries for teachers in Swanta and Nangi villages, keeping remote high schools open and fully staffed.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏥 Healthcare &amp; Visiting Clinics</h4>
                  <p className="text-xs text-stone-600">Community funds restock medicine in mountain health posts and support emergency transport for remote Magar villagers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥦 Local Farm Support</h4>
                  <p className="text-xs text-stone-600">Community lodges buy produce, dairy, and grains from neighboring village farmers, circulating money locally rather than importing city goods.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">💵 Comparable Regional Rates</h4>
                  <p className="text-xs text-stone-600">Room and meal prices match standard regional rates; room markups go toward village funds rather than private owner profit.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Accommodation Experience Comparison */}
            <div id="accommodation-experience" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                On-the-Ground Trekker Experience Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Experience Aspect</th>
                      <th className="py-4 px-4 sm:px-6">Community Lodge</th>
                      <th className="py-4 px-4 sm:px-6">Traditional Teahouse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {experienceRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.aspect}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.community}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.teahouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5: Khopra Ridge Working Model Spotlight */}
            <div id="khopra-working-example" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge Trek: A Real Example of Community Tourism
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">The Swanta &amp; Nangi Village Cooperative Model</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Along the Khopra Ridge route, community lodges in Swanta, Chhistibung, and Khopra Danda are owned and managed by village development committees. Every night stayed directly funds local education, health post medicine, and trail upkeep, demonstrating how community-based tourism works in practice.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold text-emerald-800">
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Mahabir Pun Initiative</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Offbeat Quiet Trail</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• 100% Local Reinvestment</span>
                </div>
              </div>
            </div>

            {/* Section 6: Decision Matrix - Which Should You Choose? */}
            <div id="decision-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Which Accommodation Option Should You Choose?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-950 text-base">Choose a Community Lodge If You Value:</h4>
                  <ul className="text-xs text-stone-600 space-y-2 list-disc pl-4">
                    <li>Directly supporting local Magar schools, clinics, and village infrastructure</li>
                    <li>Trekking an offbeat, uncrowded route like Khopra Ridge or Mohare Danda</li>
                    <li>Knowing your lodging money is managed transparently by village committees</li>
                    <li>Organic village farm produce and authentic cultural hospitality</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-950 text-base">Choose a Teahouse If You Prefer:</h4>
                  <ul className="text-xs text-stone-600 space-y-2 list-disc pl-4">
                    <li>Maximum route flexibility across classic circuits (EBC, Annapurna Circuit, ABC)</li>
                    <li>The widest selection of guesthouses and menus along high-traffic routes</li>
                    <li>Personal host relationships with individual family proprietors</li>
                    <li>Spontaneous daily trekking distance adjustments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7: FAQ Accordion */}
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
                  Trek Khopra Ridge with Local Community Support
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your Khopra Ridge Trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Experience community lodges in Swanta and Khopra where your accommodation directly funds local village education and healthcare.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Book Community Trek
                  </Link>
                  <Link
                    href="/community/what-is-community-lodge"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    What Is a Community Lodge
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
                <a href="#quick-snapshot" className="block hover:text-emerald-600 transition">
                  • Quick Snapshot Table
                </a>
                <a href="#structural-differences" className="block hover:text-emerald-600 transition">
                  • Structural Differences
                </a>
                <a href="#revenue-and-cost" className="block hover:text-emerald-600 transition">
                  • Revenue &amp; Cost
                </a>
                <a href="#accommodation-experience" className="block hover:text-emerald-600 transition">
                  • Trekker Experience
                </a>
                <a href="#khopra-working-example" className="block hover:text-emerald-600 transition">
                  • Khopra Working Example
                </a>
                <a href="#decision-matrix" className="block hover:text-emerald-600 transition">
                  • Decision Matrix
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Community Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/what-is-community-lodge" className="hover:text-emerald-700 underline">
                      What is a Community Lodge?
                    </Link>
                  </li>
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
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
