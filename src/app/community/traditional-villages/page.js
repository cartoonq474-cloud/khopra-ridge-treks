import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Traditional Villages of the Khopra Circuit: Gurung & Magar Culture Guide",
  description:
    "Discover the traditional villages of the Khopra Circuit, from Gurung Ghandruk to Magar Swanta. A complete cultural guide to Annapurna's mountain communities.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/traditional-villages",
  },
  openGraph: {
    title: "Traditional Villages of the Khopra Circuit: Gurung & Magar Culture Guide",
    description:
      "Discover the traditional villages of the Khopra Circuit, from Gurung Ghandruk to Magar Swanta. A complete cultural guide to Annapurna's mountain communities.",
    url: "https://khopraridgetrek.com/community/traditional-villages",
    type: "article",
  },
};

export default function TraditionalVillagesPage() {
  const quickStats = [
    { label: "Gurung Capital", value: "Ghandruk (1,940m)" },
    { label: "Magar Farming Hub", value: "Swanta Village (2,214m)" },
    { label: "High Alpine Outpost", value: "Dobato & Muldai (3,432m)" },
    { label: "Panoramic Ridge", value: "Khopra Danda (3,660m)" },
  ];

  const villagesList = [
    {
      name: "Ghandruk Village (1,940m)",
      culture: "Gurung Heritage Capital",
      desc: "The cultural anchor of the trek. Slate-paved streets, traditional stone houses, Gurung Museum, handwoven textiles, and direct views of Annapurna South.",
      link: "/nodes/ghandruk-village-guide",
    },
    {
      name: "Tadapani (2,630m)",
      culture: "Rhododendron Forest Junction",
      desc: "Nestled in dense oak and rhododendron forests beneath Machhapuchhre. Functions as a key trailhead connecting Ghandruk, Ghorepani, and Dobato.",
      link: "/nodes/tadapani-guide",
    },
    {
      name: "Dobato (3,432m)",
      culture: "Alpine Pasture & Muldai Gateway",
      desc: "Exposed high-altitude outpost built to support trekkers ascending Muldai Viewpoint. Features quiet, community-managed stone lodges.",
      link: "/nodes/dobato-guide",
    },
    {
      name: "Bayeli Kharka & Chhistibung",
      culture: "High Pasture Grazing Settlements",
      desc: "Seasonal grazing pastures and quiet forest lodges where local herders graze livestock and wildlife like Himalayan black bears inhabit nearby woods.",
      link: "/nodes/bayeli-kharka-guide",
    },
    {
      name: "Khopra Danda (3,660m)",
      culture: "Ridge Community Lodges",
      desc: "Spectacular ridge settlement overlooking Dhaulagiri and Nilgiri Himal, established specifically for sustainable community-owned trekking.",
      link: "/nodes/khopra-ridge-lodge",
    },
    {
      name: "Swanta Village (2,214m)",
      culture: "Magar Agricultural Center",
      desc: "Quiet farming valley renowned for stepped millet and potato terraces, organic beekeeping, traditional copper mills, and warm family homestays.",
      link: "/nodes/swanta-village-guide",
    },
    {
      name: "Ghorepani (2,860m)",
      culture: "Historic Trade & Poon Hill Hub",
      desc: "Busiest settlement on the circuit with blue-roofed teahouses along the ridge, serving as the main access node for Poon Hill sunrise vistas.",
      link: "/nodes/ghorepani-guide",
    },
  ];

  const faqs = [
    {
      q: "Which villages are included on the Khopra Circuit Trek?",
      a: "Main settlements include Ghandruk, Tadapani, Dobato, Bayeli Kharka, Chhistibung, Khopra Danda, Swanta, and Ghorepani, each offering distinct elevations, architecture, and cultural heritage.",
    },
    {
      q: "What ethnic communities live along the Khopra route?",
      a: "The route passes primarily through Gurung villages (Ghandruk, Tadapani) and Magar villages (Swanta, Paudwar), exposing trekkers to two distinct Himalayan cultures.",
    },
    {
      q: "What is special about Swanta Village?",
      a: "Swanta is the cultural center of Magar life on this trek, known for organic terraced farming, wild honey harvesting, copper mills, and community homestays that fund the village school.",
    },
    {
      q: "Which is the most traditional village on the Khopra Circuit?",
      a: "Ghandruk is the most historically significant Gurung village, while Swanta offers the most authentic Magar agricultural experience.",
    },
    {
      q: "Are there community lodges on the Khopra Trek?",
      a: "Yes. Most lodges along the loop are owned and managed by village development committees, with profits directly reinvested into local schools and health clinics.",
    },
    {
      q: "Can trekkers stay in local homestays?",
      a: "Yes, particularly in Swanta village, where family-run homestays offer close contact with Magar household cooking and daily farm routines.",
    },
    {
      q: "What are traditional houses in Annapurna villages made from?",
      a: "Older homes are constructed from locally quarried stone with hand-cut slate roof tiles, materials chosen for thermal insulation and monsoon weather durability.",
    },
    {
      q: "Is the Khopra Circuit less crowded than Annapurna Base Camp?",
      a: "Yes. The Khopra Circuit sees a fraction of the foot traffic of ABC or Poon Hill, preserving a peaceful, community-focused village environment.",
    },
    {
      q: "What food can trekkers expect in these villages?",
      a: "Dal bhat (rice, lentils, seasonal curry) is standard, alongside local organic specialties like millet dhindo, gundruk, and farm-fresh goat cheese.",
    },
    {
      q: "When is the best time to experience village life on the Khopra Circuit?",
      a: "Autumn (Oct-Nov) brings harvest activity and crystal-clear skies, while Spring (Mar-May) offers blooming rhododendrons and active field planting.",
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
            <span className="text-emerald-400">Traditional Villages</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Village-by-Village Cultural Map
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Traditional Villages of the Khopra Circuit
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A cultural journey through Gurung and Magar mountain communities — from slate-roofed Ghandruk to the terraced farming fields of Swanta.
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
                🏘️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Village-to-Village Route Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Our local guides are native to Annapurna villages, ensuring respectful homestays and authentic cultural exchange.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most people who search for information on the Khopra Circuit look for mountain views and elevation charts. What they often miss is the reason the route feels so special: the villages.
              </p>
              <p>
                The traditional villages of the Khopra Circuit are living Gurung and Magar communities where stone houses, terrace farms, and community-run lodges have shaped daily life for generations.
              </p>
            </div>

            {/* Section 1: Why Khopra Offers Authentic Village Trekking */}
            <div id="why-authentic" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Circuit Offers Authentic Village Trekking
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">⚖️ Contrast With Busy Corridors</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Unlike high-turnover commercialized routes (ABC or Poon Hill), Khopra threads through smaller settlements where lodges are managed directly by local families.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🏫 Community Reinvestment</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Accommodation fees fund Swanta High School teacher salaries and Nangi Village medical health post supplies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Village-by-Village Breakdown */}
            <div id="village-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Village-by-Village Guide to the Khopra Circuit
              </h2>

              <div className="space-y-4">
                {villagesList.map((v, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-2">
                      <h3 className="font-bold text-stone-950 text-lg">{v.name}</h3>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
                        {v.culture}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{v.desc}</p>
                    <div className="pt-2 text-xs font-semibold text-emerald-800">
                      <Link href={v.link} className="hover:underline">
                        View Node &amp; Village Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Architecture & Mountain Science */}
            <div id="architecture-science" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Traditional Architecture &amp; Mountain Adaptation
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">Quarried Stone &amp; Slate Roof Tiles</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Homes along the trail are built from stacked locally quarried stone with hand-cut slate roof tiles. Stone retains solar heat effectively during freezing nights, while heavy slate tiles withstand torrential monsoon rains and winter snow without requiring annual thatch replacement.
                </p>
              </div>
            </div>

            {/* Section 4: Responsible Travel Etiquette */}
            <div id="responsible-travel" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Responsible Travel in Mountain Villages
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🙏 Respectful Dress &amp; Greetings</h4>
                  <p className="text-xs text-stone-600">Dress modestly in village centers and greet residents with a polite &quot;Namaste&quot;.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📷 Photo Permissions</h4>
                  <p className="text-xs text-stone-600">Always ask permission before photographing villagers, private courtyards, or religious shrines.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">💧 Plastic Reduction</h4>
                  <p className="text-xs text-stone-600">Use lodge water filtration stations and reusable bottles to prevent plastic accumulation in remote villages.</p>
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
                  Community-Owned Village Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Through Traditional Gurung &amp; Magar Villages
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Guided village stays in Ghandruk, Swanta, and Khopra Danda where your accommodation directly funds local village education and healthcare.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Village Treks
                  </Link>
                  <Link
                    href="/nodes"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    All Village Nodes
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
                <a href="#why-authentic" className="block hover:text-emerald-600 transition">
                  • Why Khopra Circuit is Authentic
                </a>
                <a href="#village-guide" className="block hover:text-emerald-600 transition">
                  • Village-by-Village Guide
                </a>
                <a href="#architecture-science" className="block hover:text-emerald-600 transition">
                  • Architecture &amp; Stone Science
                </a>
                <a href="#responsible-travel" className="block hover:text-emerald-600 transition">
                  • Responsible Travel Etiquette
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Cultural Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/gurung-culture" className="hover:text-emerald-700 underline">
                      Gurung Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-700 underline">
                      Ghandruk Village Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/swanta-village-guide" className="hover:text-emerald-700 underline">
                      Swanta Village Guide
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
