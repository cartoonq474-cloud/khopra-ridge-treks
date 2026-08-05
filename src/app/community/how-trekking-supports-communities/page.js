import React from "react";
import Link from "next/link";

export const metadata = {
  title: "How Trekking Supports Local Communities in Nepal: Economic, Cultural & Environmental Benefits",
  description:
    "Discover how trekking supports local communities in Nepal — from guide and porter wages to community lodges, schools, and conservation. Learn how to trek responsibly on Khopra Ridge.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/how-trekking-supports-communities",
  },
  openGraph: {
    title: "How Trekking Supports Local Communities in Nepal: Economic, Cultural & Environmental Benefits",
    description:
      "Discover how trekking supports local communities in Nepal — from guide and porter wages to community lodges, schools, and conservation. Learn how to trek responsibly on Khopra Ridge.",
    url: "https://khopraridgetrek.com/community/how-trekking-supports-communities",
    type: "article",
  },
};

export default function HowTrekkingSupportsCommunitiesPage() {
  const quickStats = [
    { label: "Primary Beneficiaries", value: "Myagdi & Kaski Households" },
    { label: "Economic Channel", value: "Direct Wages & Farm Sourcing" },
    { label: "Social Reinvestment", value: "Swanta Schools & Nangi Clinics" },
    { label: "Protection Standard", value: "Porter Welfare & Fair Wages" },
  ];

  const supportPillars = [
    {
      title: "💼 Direct Wage Employment for Local Staff",
      desc: "Trekking directly employs local guides, porters, cooks, and lodge managers, creating career progression within mountain districts rather than forcing youth into overseas labor migration.",
    },
    {
      title: "🌾 Farm-to-Table Supply Chain Sourcing",
      desc: "Community lodges purchase seasonal vegetables, potatoes, eggs, and dairy directly from nearby family farms in Swanta and Ghandruk, benefiting households not directly employed in hospitality.",
    },
    {
      title: "🔄 The Tourism Multiplier Effect",
      desc: "Spending ripples through the village: guide wages fund local grocery purchases, shop owners pay transport operators, and earnings support mountain health posts.",
    },
    {
      title: "👩‍🌾 Women's Empowerment & Handicrafts",
      desc: "Lodge management and handicraft cooperatives (producing nettle fiber textiles and wool garments) provide women with independent household income streams.",
    },
  ];

  const faqs = [
    {
      q: "How does trekking support local communities in Nepal?",
      a: "Trekking provides direct employment for guides, porters, and lodge staff, creates a market for local farm produce, generates income for community-owned lodges, and indirectly funds schools, healthcare, and forest conservation.",
    },
    {
      q: "What is community-based trekking?",
      a: "It is a model where local residents — rather than outside investors — own and manage the lodges, services, and tourism infrastructure along a trail, ensuring revenue stays within the local economy.",
    },
    {
      q: "How do community lodges benefit mountain villages?",
      a: "Community lodges pool accommodation profits through village cooperatives to fund local teacher salaries, medical health clinics, drinking water infrastructure, and trail repairs.",
    },
    {
      q: "Does trekking income stay within local communities?",
      a: "On community-based routes like Khopra Ridge, most income stays local. On commercial routes dominated by city-owned hotels, a significant portion exits through tourism leakage.",
    },
    {
      q: "How does trekking create jobs in rural Nepal?",
      a: "It creates direct jobs as licensed guides, porters, lodge managers, and cooks, alongside indirect employment in mule transport, farming, tea stalls, and handicraft production.",
    },
    {
      q: "How does tourism support schools and healthcare?",
      a: "Lodge profits directly pay teacher salaries in Swanta and Nangi. Furthermore, trekking-driven infrastructure like medical helicopter rescue access benefits local villagers during health emergencies.",
    },
    {
      q: "How can travelers support local businesses while trekking?",
      a: "By hiring local guides and porters, staying in community-owned lodges, buying fresh produce and handicrafts from village sellers, and choosing licensed NTB operators with fair wage practices.",
    },
    {
      q: "Why are local guides and porters important?",
      a: "Local guides bring essential route safety, language skills, and cultural context. Hiring local staff keeps wage income directly within mountain communities in Myagdi and Kaski.",
    },
    {
      q: "How does tourism help preserve local culture?",
      a: "Tourism gives traditional Gurung and Magar architecture, dress, food, and folk dances ongoing economic value, encouraging communities to maintain living traditions.",
    },
    {
      q: "What makes the Khopra Ridge community lodge system unique?",
      a: "It is served by a network of village-managed lodges coordinated through local tourism committees, spreading economic benefits broadly across many households rather than concentrating profits in commercial hotel chains.",
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
            <span className="text-emerald-400">How Trekking Supports Communities</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Economic, Cultural &amp; Environmental Impact
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              How Trekking Supports Local Communities in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              From guide and porter wages to community lodges, village schools, and forest conservation — how your trek directly empowers Himalayan mountain communities.
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
                🌱
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Porter Welfare &amp; Fair Wage Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We enforce strict porter load limits (max 20kg), provide warm clothing and medical insurance, and prioritize local guides from Myagdi and Kaski districts.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Trekking in Nepal is often described in terms of mountain views and physical achievement. But behind every itinerary is a much quieter story: where the money goes once a trekker laces up their boots.
              </p>
              <p>
                Every permit fee, every night in a community lodge, every meal, and every guide or porter hired connects directly to the livelihoods of families living in the Annapurna foothills.
              </p>
            </div>

            {/* Section 1: Economic Multiplier Effect */}
            <div id="economic-multiplier" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Tourism Multiplier Effect in Mountain Villages
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">📈 Beyond Direct Hospitality</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A trekker&apos;s spend doesn&apos;t stop at the lodge desk. Guide wages fund local grocery purchases, shop owners pay local mule transporters, and farm sales support terrace cultivation.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🛡️ Preventing Youth Migration</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Seasonal trekking employment provides young mountain residents with a viable local career path, reducing the pressure for overseas labor migration.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Impact Pillars */}
            <div id="impact-pillars" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Channels of Local Economic &amp; Social Support
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {supportPillars.map((pillar, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900">{pillar.title}</h4>
                    <p className="text-xs text-stone-600">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Social & Infrastructure Benefits */}
            <div id="social-infrastructure" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Social &amp; Infrastructure Reinvestment
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">Schools, Health Clinics &amp; Emergency Rescue</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Lodge profits pay teacher salaries in Swanta and Paudwar, allowing children to be educated in their home villages. Additionally, medical rescue infrastructure and helicopter access developed for trekking routes serve local villagers during critical health emergencies.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-800">
                  <Link href="/community/community-tourism-khopra" className="hover:underline">
                    Read Community Tourism &amp; School Funding Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 4: Responsible Trekker Action Checklist */}
            <div id="responsible-action" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Responsible Trekker Action Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🙋‍♂️ Hire Local Guides &amp; Porters</h4>
                  <p className="text-xs text-stone-600">Choose licensed operators that hire staff native to Myagdi and Kaski districts and enforce fair wage &amp; insurance standards.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏠 Stay in Community Lodges</h4>
                  <p className="text-xs text-stone-600">Select community-owned accommodation in Swanta, Dobato, and Khopra Danda where profits are pooled for village welfare.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛍️ Support Village Producers</h4>
                  <p className="text-xs text-stone-600">Buy fresh farm snacks, organic wild honey, and handwoven nettle/wool items directly from village craft groups.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
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
                  Ethical &amp; Responsible Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with a Licensed Local Operator
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed Pokhara operator <strong>EMD Treks</strong> (NTB License #8928-091). We guarantee local guide &amp; porter employment, fair wages, porter medical insurance, and community lodge stays.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Responsible Treks
                  </Link>
                  <Link
                    href="/planning/guide-cost"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Guide &amp; Porter Rates
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
                <a href="#economic-multiplier" className="block hover:text-emerald-600 transition">
                  • Tourism Multiplier Effect
                </a>
                <a href="#impact-pillars" className="block hover:text-emerald-600 transition">
                  • Support Channels
                </a>
                <a href="#social-infrastructure" className="block hover:text-emerald-600 transition">
                  • Schools &amp; Health Clinics
                </a>
                <a href="#responsible-action" className="block hover:text-emerald-600 transition">
                  • Responsible Action Checklist
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
                    <Link href="/community/community-lodge-vs-teahouse" className="hover:text-emerald-700 underline">
                      Community Lodge vs Teahouse
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/traditional-villages" className="hover:text-emerald-700 underline">
                      Traditional Villages Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/guide-cost" className="hover:text-emerald-700 underline">
                      Guide &amp; Porter Cost Guide
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
