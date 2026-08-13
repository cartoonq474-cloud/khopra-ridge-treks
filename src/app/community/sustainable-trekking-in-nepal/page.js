import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Sustainable Trekking in Nepal",
  description: "Learn how to trek sustainably in Nepal. Our complete guide covers eco-friendly practices, community-based tourism, conservation permits, and how to choose an.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/sustainable-trekking-in-nepal",
  },
  openGraph: {
    title: "Sustainable Trekking in Nepal: A Complete Guide to Responsible Himalayan Travel",
    description:
      "Learn how to trek sustainably in Nepal. Our complete guide covers eco-friendly practices, community-based tourism, conservation permits, and how to choose an ethical trekking operator.",
    url: "https://khopraridgetrek.com/community/sustainable-trekking-in-nepal",
    type: "article",
  },
};

export default function SustainableTrekkingNepalPage() {
  const quickStats = [
    { label: "Core Principles", value: "Leave No Trace (LNT)" },
    { label: "Water Strategy", value: "Filtration & Zero Plastic" },
    { label: "Protection Zone", value: "Annapurna Conservation Area (ACAP)" },
    { label: "Operator Standard", value: "NTB License #8928-091" },
  ];

  const ecoPillars = [
    {
      title: "💧 Zero Single-Use Plastic Water Bottles",
      desc: "Carry refillable insulated bottles with UV purifiers or filtration tablets. Refill at community lodge solar stations rather than purchasing bottled mineral water that cannot be recycled in high-altitude villages.",
    },
    {
      title: "🎒 Pack Out Non-Biodegradable Waste",
      desc: "Pack out all plastic wrappers, batteries, hygiene items, and cosmetics. Biodegradable food waste takes months to decompose at high freezing elevations, so pack it out or dispose of it at designated lodge bins.",
    },
    {
      title: "☀️ Solar Power & Reduced Hot Shower Demand",
      desc: "High-altitude teahouses rely on solar panels or micro-hydro. Limit device charging and reduce hot showers (which require firewood or gas heating) to protect fragile mountain forests from deforestation.",
    },
    {
      title: "🤝 Fair Wages & Porter Welfare Protection",
      desc: "Choose operators enforcing strict porter load limits (max 20kg), supplying warm altitude gear, providing medical insurance, and paying fair daily wages to local guides from Myagdi and Kaski.",
    },
  ];

  const faqs = [
    {
      q: "What is sustainable trekking in Nepal?",
      a: "Sustainable trekking means traveling in a way that minimizes environmental damage while directly benefiting local mountain communities and economies along the trail.",
    },
    {
      q: "How can I trek responsibly in Nepal?",
      a: "Follow Leave No Trace principles, carry reusable bottles with purification methods, respect local Gurung/Magar customs, and book through licensed operators supporting community-based tourism.",
    },
    {
      q: "Is trekking in Nepal environmentally friendly?",
      a: "Trekking has a lower footprint than mass urban tourism, but high foot traffic creates plastic waste and deforestation pressure. Choosing offbeat community routes like Khopra Ridge mitigates this impact.",
    },
    {
      q: "What are the Leave No Trace principles for Himalayan trekking?",
      a: "Pack out all non-biodegradables, stay strictly on marked stone paths to prevent soil erosion, conserve firewood/electricity, respect wildlife (like red pandas), and leave cultural shrines undisturbed.",
    },
    {
      q: "How do trekking permits support conservation efforts?",
      a: "ACAP permit fees fund trail maintenance, reforestation nurseries, waste management checkposts, and community development programs across the Annapurna region.",
    },
    {
      q: "Why is hiring local guides and porters important?",
      a: "Local staff bring essential mountain safety and cultural context, while their wages channel tourism income directly into village households in Myagdi and Kaski districts.",
    },
    {
      q: "Are community lodges more sustainable than traditional teahouses?",
      a: "Yes. Community lodges pool accommodation profits through village cooperatives to fund local schools, health posts, and solar infrastructure rather than sending profits to urban owners.",
    },
    {
      q: "Which trekking routes in Nepal are the most eco-friendly?",
      a: "Routes like Khopra Ridge, Manaslu Circuit, and Langtang Valley are highly sustainable due to lower crowd density, community lodge management, and controlled permit access.",
    },
    {
      q: "How can trekkers reduce plastic waste in the Himalayas?",
      a: "Use filtered water bottles or purification tablets, avoid individually wrapped snacks, carry a dedicated waste bag, and refill at teahouse safe-drinking water stations.",
    },
    {
      q: "How do I choose an ethical trekking company in Nepal?",
      a: "Ensure the operator is licensed with the Nepal Tourism Board (NTB), publishes transparent porter welfare policies (20kg limit, insurance, warm gear), and partners directly with community lodges.",
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
            <span className="text-emerald-400">Sustainable Trekking</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Responsible Himalayan Travel
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Sustainable Trekking in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A complete guide to responsible Himalayan travel — eco-friendly practices, community-based tourism, ACAP conservation permits, and choosing an ethical operator.
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
                🌿
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Eco-Tourism &amp; Ethical Operator Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We enforce Leave No Trace protocols, use solar teahouses, provide porter insurance &amp; fair wages, and support ACAP forest protection.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Nepal draws hundreds of thousands of trekkers to its mountains every year, and that popularity comes with a cost. Trails wear down faster than they can recover, plastic waste accumulates in remote high-altitude zones, and commercialized operators don&apos;t always share revenue with local communities.
              </p>
              <p>
                Sustainable trekking isn&apos;t a marketing label — it is a practical set of habits that protects fragile alpine ecosystems and ensures mountain villages thrive for generations.
              </p>
            </div>

            {/* Section 1: The Three Pillars of Sustainability */}
            <div id="three-pillars" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Three Pillars of Sustainable Trekking
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌍 Environmental</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Zero plastic waste, Leave No Trace trail practices, solar device charging, and wildlife habitat protection inside ACAP.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">👥 Social &amp; Cultural</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Respecting Gurung and Magar village customs, modest dress, Mani wall protocol, and fair porter working conditions.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">💰 Economic Retention</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Direct spending in village-owned community lodges, funding local high schools, clinics, and hiring local guides.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Practical Eco-Pillars & Action */}
            <div id="eco-pillars" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Practical Ways to Trek Responsibly
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {ecoPillars.map((pillar, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900">{pillar.title}</h4>
                    <p className="text-xs text-stone-600">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: ACAP Permit Reinvestment & Conservation */}
            <div id="acap-permits" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Annapurna Conservation Area Project (ACAP) Permits
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">How ACAP Permit Fees Protect the Trail</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Every trekker entering the Khopra Circuit requires an ACAP Entry Permit. These funds directly finance trail maintenance, community forest nurseries, wildlife protection for red pandas and snow leopards, and trash cleanup checkposts across Myagdi and Kaski districts.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-800">
                  <Link href="/planning/acap-permit-guide" className="hover:underline">
                    Read ACAP &amp; TIMS Permit Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 4: Sustainable Trekker Pre-Departure Checklist */}
            <div id="departure-checklist" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Sustainable Pre-Departure Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🎒 Eco-Packing Essentials</h4>
                  <p className="text-xs text-stone-600">Refillable water bottle, UV purifier/tablets, biodegradable soap, reusable snack containers, dedicated trash bag.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🚶 On-Trail Etiquette</h4>
                  <p className="text-xs text-stone-600">Stay on marked stone trails to prevent erosion, pass Mani walls on the left, dress modestly, limit hot showers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🤝 Booking Verification</h4>
                  <p className="text-xs text-stone-600">Verify operator NTB licensing, porter insurance &amp; gear, 20kg load limits, and community lodge partnerships.</p>
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
                  Responsible Himalayan Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Nepal Responsibly with EMD Treks
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). We guarantee eco-friendly Leave No Trace protocols, porter welfare protections, and community lodge stays across the Khopra Circuit.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan Sustainable Trek
                  </Link>
                  <Link
                    href="/community/sustainable-tourism-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Khopra Eco-Tourism Hub
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
                <a href="#three-pillars" className="block hover:text-emerald-600 transition">
                  • Three Sustainability Pillars
                </a>
                <a href="#eco-pillars" className="block hover:text-emerald-600 transition">
                  • Practical Eco-Practices
                </a>
                <a href="#acap-permits" className="block hover:text-emerald-600 transition">
                  • ACAP Permit Protection
                </a>
                <a href="#departure-checklist" className="block hover:text-emerald-600 transition">
                  • Pre-Departure Checklist
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Sustainable Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/sustainable-tourism-khopra" className="hover:text-emerald-700 underline">
                      Khopra Eco-Tourism Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/acap-permit-guide" className="hover:text-emerald-700 underline">
                      ACAP &amp; TIMS Permit Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/drinking-water-khopra-trek" className="hover:text-emerald-700 underline">
                      Drinking Water &amp; Filtration
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
