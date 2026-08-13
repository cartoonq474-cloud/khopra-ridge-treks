import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Sustainable Tourism on the Khopra Ridge Trail | Nepal",
  description: "Discover how sustainable tourism on the Khopra Ridge Trail supports local communities, protects the Annapurna region, and offers a genuinely responsible way.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/sustainable-tourism-khopra",
  },
  openGraph: {
    title: "Sustainable Tourism on the Khopra Ridge Trail: Responsible Trekking in Nepal",
    description:
      "Discover how sustainable tourism on the Khopra Ridge Trail supports local communities, protects the Annapurna region, and offers a genuinely responsible way to trek in Nepal.",
    url: "https://khopraridgetrek.com/community/sustainable-tourism-khopra",
    type: "article",
  },
};

export default function SustainableTourismKhopraPage() {
  const quickStats = [
    { label: "Community Ownership", value: "100% Village-Managed Lodges" },
    { label: "Conservation Zone", value: "Annapurna Conservation Area (ACAP)" },
    { label: "Primary Energy Source", value: "Solar Power & Micro-Hydro" },
    { label: "Porter Welfare", value: "Ethical Wages & 20kg Max Load" },
  ];

  const checklistItems = [
    {
      category: "🌱 Environmental Responsibility",
      items: [
        "Carry a reusable water bottle & use lodge filtration stations rather than single-use plastic bottles",
        "Pack out all non-biodegradable waste (batteries, wrappers, plastic) above 3,000 meters",
        "Stay strictly on marked trails to prevent soil erosion & protect alpine flora",
        "Choose lodges utilizing solar power & gas heating over firewood consumption",
      ],
    },
    {
      category: "🤝 Community & Economic Support",
      items: [
        "Choose community-owned lodges over private commercial chains whenever available",
        "Buy snacks, meals, and handcrafted souvenirs directly from local village vendors",
        "Hire local guides & porters through licensed operators committed to fair wages & insurance",
        "Tip fairly and respect porter load limits (capped strictly at 20kg)",
      ],
    },
    {
      category: "🙏 Cultural Respect & Heritage",
      items: [
        "Ask permission before photographing villagers, lodge staff, or religious Baraha shrines",
        "Dress modestly when passing through traditional Gurung and Magar villages",
        "Learn basic Nepali greetings (Namaste, Dhanyabad) to connect with local hosts",
        "Respect local sacred customs around Khayer Lake and mountain shrines",
      ],
    },
  ];

  const faqs = [
    {
      q: "What makes the Khopra Ridge Trek sustainable?",
      a: "The trek's sustainability comes from its community lodge model, where villages collectively own and manage accommodation, reinvesting lodge profits into local schools, health posts, and trail infrastructure under ACAP oversight.",
    },
    {
      q: "How do community lodges work in Nepal?",
      a: "Community lodges are owned and managed by a village or group of villages rather than a single family. Profits are pooled into a shared community development fund rather than kept as private income.",
    },
    {
      q: "Is Khopra Ridge an eco-friendly trekking destination?",
      a: "Yes. Khopra Ridge performs better than high-traffic routes on measures like solar energy adoption, farm-to-table local food sourcing, and lower overall trail congestion.",
    },
    {
      q: "What is community-based tourism in Nepal?",
      a: "Community-based tourism is a model where local residents own and operate tourism infrastructure, ensuring that trekking income directly supports mountain village economies.",
    },
    {
      q: "How does trekking support local villages on this route?",
      a: "Trekking supports villages through direct lodge employment, local food purchasing from farmers, and community funds used for school teacher salaries, health posts, and trail repairs.",
    },
    {
      q: "What role does ACAP play in conservation on Khopra Ridge?",
      a: "The Annapurna Conservation Area Project (ACAP) oversees environmental regulations, permit fee reinvestments, habitat protection for wildlife (red pandas, Himalayan black bears), and trail maintenance.",
    },
    {
      q: "How can trekkers reduce their environmental impact on Khopra Ridge?",
      a: "Trekkers can reduce impact by carrying reusable water bottles, packing out non-biodegradable waste, staying on marked trails, and choosing solar-heated lodges.",
    },
    {
      q: "Is Khopra Ridge more sustainable than other treks in Nepal?",
      a: "Compared to congested routes like Everest Base Camp or Annapurna Base Camp, Khopra Ridge sees significantly fewer visitors, resulting in lower pressure on water, forest, and waste infrastructure.",
    },
    {
      q: "Can tourism help preserve local culture in the Annapurna region?",
      a: "Yes. Trekking income provides viable livelihoods that allow younger generations to stay in their home villages, helping sustain Magar and Gurung cultural traditions.",
    },
    {
      q: "What should responsible travelers bring on the trek?",
      a: "Bring a reusable water bottle, purification tablets, a small waste carry-out bag, modest clothing for village visits, and a willingness to purchase meals and goods locally.",
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
            <span className="text-emerald-400">Sustainable Tourism</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Responsible Eco-Trekking Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Sustainable Tourism on the Khopra Ridge Trail
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              How responsible trekking on Khopra Ridge protects ACAP ecosystems, funds Magar &amp; Gurung village schools, and creates a working model for eco-tourism in Nepal.
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
                <h4 className="font-bold text-stone-900 text-base">Eco-Tourism &amp; Community Model Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, we strictly follow ACAP conservation regulations, Leave No Trace guidelines, and ethical local employment standards.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khopra Ridge sits away from the crowded trails of the Annapurna region, and that quiet position has shaped it into something increasingly rare in Nepal&apos;s trekking industry: a route where tourism genuinely benefits the people who live along it.
              </p>
              <p>
                In this guide, we explain what sustainable tourism on the Khopra Ridge Trail looks like in practice — from community-owned lodges and ACAP forest protection to cultural preservation and practical Leave No Trace principles.
              </p>
            </div>

            {/* Section 1: What is Sustainable Tourism in the Himalayas? */}
            <div id="what-is-sustainable" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Is Sustainable Tourism in a Trekking Destination?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">⚖️ Balancing 3 Core Pillars</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Sustainable tourism balances local economic benefits, cultural respect, and environmental protection without allowing one priority to undermine the others.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🏔️ Fragile Mountain Ecosystems</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    At 3,000+ meters, high-altitude rhododendron and oak forests take decades to regenerate, water is scarce, and waste does not decompose naturally.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Community Lodges & Village Reinvestment */}
            <div id="community-model" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How the Community Lodge Model Drives Sustainability
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">100% Village Economic Reinvestment</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Unlike traditional commercial circuits where profits flow to outside urban owners, lodges along Khopra Ridge (Swanta, Nangi, Chhistibung, Bayeli) are collectively owned by the villages. Accommodation fees fund schoolteacher salaries, health clinic supplies, and monsoon trail maintenance.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold text-emerald-800">
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Swanta High School Support</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Nangi Health Clinic</span>
                  <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">• Trail Repair Funds</span>
                </div>
              </div>
            </div>

            {/* Section 3: Conservation Efforts in ACAP */}
            <div id="acap-conservation" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Conservation Efforts in the Annapurna Conservation Area
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🎟️ ACAP Permit Reinvestment</h4>
                  <p className="text-xs text-stone-600">Your ACAP permit fee directly funds ranger patrols, reforestation initiatives, and habitat protection for red pandas and Himalayan black bears.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☀️ Solar Energy &amp; Micro-Hydro</h4>
                  <p className="text-xs text-stone-600">Lodges prioritize solar panels for lighting and hot showers, drastically reducing dependence on firewood and diesel generators.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">💧 Gravity-Fed Water Systems</h4>
                  <p className="text-xs text-stone-600">Water is sourced from clean mountain streams via gravity-fed systems, with filtered water stations available to eliminate single-use plastic bottles.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌸 Rhododendron Forest Protection</h4>
                  <p className="text-xs text-stone-600">Community forestry committees regulate timber harvesting, protecting old-growth rhododendron &amp; oak canopies from Tadapani to Dobato.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Responsible Trekker Checklist */}
            <div id="responsible-checklist" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Responsible Trekker Action Checklist
              </h2>

              <div className="space-y-6">
                {checklistItems.map((group, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                    <h3 className="font-bold text-stone-950 text-base sm:text-lg">{group.category}</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600 list-disc pl-5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Why Khopra Emerges as a Sustainable Model */}
            <div id="khopra-model-spotlight" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Emerges as a Model in Nepal
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏞️ Controlled Trail Traffic</h4>
                  <p className="text-xs text-stone-600">Sees a fraction of ABC or Poon Hill crowds, preventing trail erosion and preserving peaceful mountain stillness.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🏡 Magar &amp; Gurung Heritage</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Tourism income allows youth to find viable mountain livelihoods, preventing rapid rural-to-urban village depopulation.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📦 Transparent Supply Chain</h4>
                  <p className="text-xs text-stone-600">Lodge dining relies on village organic farms, reducing fuel-heavy freight transport while boosting farmer income.</p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Sustainable Tourism
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
                  Responsible Eco-Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge Responsibly with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your sustainable trek with licensed Nepal operator <strong>EMD Treks</strong> (NTB License #8928-091). We provide ethical local guides, support community-owned lodges, and strictly follow Leave No Trace principles.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Responsible Treks
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
                <a href="#what-is-sustainable" className="block hover:text-emerald-600 transition">
                  • What Is Sustainable Tourism?
                </a>
                <a href="#community-model" className="block hover:text-emerald-600 transition">
                  • Community Reinvestment
                </a>
                <a href="#acap-conservation" className="block hover:text-emerald-600 transition">
                  • ACAP Conservation
                </a>
                <a href="#responsible-checklist" className="block hover:text-emerald-600 transition">
                  • Responsible Trekker Checklist
                </a>
                <a href="#khopra-model-spotlight" className="block hover:text-emerald-600 transition">
                  • Why Khopra Leads Model
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
                    <Link href="/community/what-is-community-lodge" className="hover:text-emerald-700 underline">
                      What is a Community Lodge?
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
