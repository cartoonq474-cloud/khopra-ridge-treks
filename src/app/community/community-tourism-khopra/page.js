import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Community Tourism on the Khopra Ridge Trek | Nepal Trek Guide",
  description: "Discover how community tourism on the Khopra Ridge Trek funds schools, clinics, and conservation in the Annapurna region — and how your trek supports local.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/community-tourism-khopra",
  },
  openGraph: {
    title: "Community Tourism on the Khopra Ridge Trek: How Local Communities Benefit from Trekking",
    description:
      "Discover how community tourism on the Khopra Ridge Trek funds schools, clinics, and conservation in the Annapurna region — and how your trek supports local Himalayan villages.",
    url: "https://khopraridgetrek.com/community/community-tourism-khopra",
    type: "article",
  },
};

export default function CommunityTourismKhopraPage() {
  const quickStats = [
    { label: "Ownership Model", value: "100% Village Cooperatives" },
    { label: "Pioneer Visionary", value: "Mahabir Pun (Magsaysay Awardee)" },
    { label: "Primary Reinvestment", value: "Swanta School & Nangi Clinic" },
    { label: "Conservation Zone", value: "Annapurna Conservation Area (ACAP)" },
  ];

  const impactPillars = [
    {
      title: "🏫 Funding Local Schools & Teacher Salaries",
      desc: "Lodge profits directly pay teacher salaries in Swanta, Paudwar, and Nangi, ensuring children receive quality education in their home villages without being sent to expensive Pokhara boarding schools.",
    },
    {
      title: "🏥 Village Medical Health Clinics",
      desc: "Cooperative revenue funds medical health posts and basic medicine supplies in remote settlements where the nearest hospital is a multi-hour walk away.",
    },
    {
      title: "📶 Broadband Wi-Fi & Telemedicine",
      desc: "Pioneered under Mahabir Pun's Nepal Wireless Networking Project, tourism income maintains wireless internet for digital school resources and doctor consultations.",
    },
    {
      title: "🌱 Agricultural Subsidies & Women Employment",
      desc: "Profits fund greenhouse plastics, modern beehives, and organic tools, while creating year-round hospitality management roles for Magar & Gurung women.",
    },
  ];

  const faqs = [
    {
      q: "What is community tourism on the Khopra Ridge Trek?",
      a: "It is a model where local village cooperatives — not private owners or urban agencies — own and manage the lodges along the route, reinvesting accommodation profits into schools, health clinics, and village infrastructure.",
    },
    {
      q: "Who owns the community lodges on the Khopra route?",
      a: "Lodges in villages such as Swanta, Chhistibung, Bayeli Kharka, Dobato, and Khopra Danda are owned collectively by local village cooperatives representing Magar and Gurung communities.",
    },
    {
      q: "How does trekking revenue support local villages?",
      a: "Profits from lodge accommodation and meals pay local schoolteacher salaries, fund medical health post supplies, maintain wireless internet, and support local farming initiatives.",
    },
    {
      q: "What is the difference between community lodges and private teahouses?",
      a: "Private teahouses are individually owned, with profits retained by a single owner. Community lodges pool profits through a cooperative to fund shared village priorities like schools and health posts.",
    },
    {
      q: "Which communities benefit from tourism on the Khopra Ridge Trek?",
      a: "Magar and Gurung villages including Swanta, Paudwar, Nangi, Chhistibung, Bayeli Kharka, and Dobato benefit directly from lodge income and cooperative reinvestment.",
    },
    {
      q: "Who is Mahabir Pun, and what role did he play in Khopra's model?",
      a: "Mahabir Pun is a Magsaysay Award-winning social entrepreneur from Nangi village who pioneered rural wireless internet and established community lodges to generate funds for mountain schools and clinics.",
    },
    {
      q: "Is the Khopra Ridge Trek considered sustainable tourism?",
      a: "Yes. Controlled trekker volumes, village cooperative ownership, ACAP conservation oversight, and local farm-to-table food sourcing make it one of Nepal's most sustainable trekking routes.",
    },
    {
      q: "How can trekkers support local communities on this route?",
      a: "By booking through licensed local operators who work with village cooperatives, staying in community lodges or homestays, hiring local guides/porters, and respecting local customs.",
    },
    {
      q: "Are community lodges more basic than commercial teahouses?",
      a: "Generally yes. Community lodges prioritize warmth, cleanliness, and local sourcing over luxury amenities, providing comfortable twin rooms, shared bathrooms, and farm-fresh dal bhat.",
    },
    {
      q: "Why is Khopra Ridge considered an ethical trekking destination?",
      a: "Because your trekking spending is transparently reinvested into specific, traceable village outcomes — schools, clinics, and local livelihoods — rather than urban agency profits.",
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
            <span className="text-emerald-400">Community Tourism</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Pioneering Ethical Eco-Tourism
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Community Tourism on the Khopra Ridge Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              How local Magar and Gurung village cooperatives own the trail, fund mountain schools and clinics, and shape an ethical trekking experience.
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
                🤝
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Community Cooperative Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We work directly with village committees in Swanta, Chhistibung, and Nangi to ensure 100% of lodge fees support local Himalayan communities.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most trekking routes in Nepal funnel a large share of tourism income to urban hotel chains and city-based operators. The Khopra Ridge Trek works differently: here, the lodges, the trails, and the local economy are owned and run by the villagers themselves.
              </p>
              <p>
                Every lodge you sleep in, every meal you eat, and every local guide or porter you hire is part of a cooperative system built by the Magar and Gurung communities of the Annapurna foothills.
              </p>
            </div>

            {/* Section 1: What is Community-Based Tourism? */}
            <div id="what-is-cbt" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Is Community-Based Tourism (CBT)?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🏠 Village Ownership &amp; Accountability</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    CBT ensures that local residents own and operate tourism infrastructure. Profits stay within the village cooperative and are allocated by elected committees toward schools and clinics.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🔍 Transparent Economic Impact</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Trekkers can see in concrete terms where their money goes: accommodation fees directly fund high school teacher salaries in Swanta and health post supplies in Nangi.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Mahabir Pun's Vision */}
            <div id="mahabir-pun-vision" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Mahabir Pun &amp; the Origins of the Cooperative Model
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">The Nepal Wireless &amp; Rural Tourism Vision</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Magsaysay Award winner Mahabir Pun from Nangi village pioneered community lodges in the early 2000s to combat rural youth depopulation. By building lodges through communal labor and linking them with wireless broadband Wi-Fi, the project created self-reliant mountain economies.
                </p>
              </div>
            </div>

            {/* Section 3: Impact Pillars */}
            <div id="impact-pillars" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How Your Trekking Dollars Reinvest in Villages
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {impactPillars.map((pillar, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900">{pillar.title}</h4>
                    <p className="text-xs text-stone-600">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Community Lodges vs Teahouses */}
            <div id="lodge-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Community Lodges vs Traditional Teahouses
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Community Lodge (Khopra)</th>
                      <th className="py-4 px-4 sm:px-6">Private Teahouse (ABC / EBC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Ownership</td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">Village Cooperative Trust</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Individual Family / Commercial Owner</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Profit Destination</td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">Swanta School, Nangi Health Post</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Private Household Income</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Staff Sourcing</td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">100% Local Magar &amp; Gurung Villagers</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">Mix of Local &amp; Imported Labor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pt-2 text-xs font-semibold text-emerald-800">
                <Link href="/community/community-lodge-vs-teahouse" className="hover:underline">
                  Read Full Community Lodge vs Teahouse Comparison →
                </Link>
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
                  Community-Owned Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with Local Community Support
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Experience community lodges in Swanta and Khopra where accommodation directly funds local village education and healthcare.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Community Treks
                  </Link>
                  <Link
                    href="/community/sustainable-tourism-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Sustainable Tourism Guide
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
                <a href="#what-is-cbt" className="block hover:text-emerald-600 transition">
                  • What is Community Tourism?
                </a>
                <a href="#mahabir-pun-vision" className="block hover:text-emerald-600 transition">
                  • Mahabir Pun&apos;s Vision
                </a>
                <a href="#impact-pillars" className="block hover:text-emerald-600 transition">
                  • Reinvestment Pillars
                </a>
                <a href="#lodge-comparison" className="block hover:text-emerald-600 transition">
                  • Community vs Teahouse
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Community Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/community-lodge-vs-teahouse" className="hover:text-emerald-700 underline">
                      Community Lodge vs Teahouse
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/what-is-community-lodge" className="hover:text-emerald-700 underline">
                      What is a Community Lodge?
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/sustainable-tourism-khopra" className="hover:text-emerald-700 underline">
                      Sustainable Tourism Guide
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
