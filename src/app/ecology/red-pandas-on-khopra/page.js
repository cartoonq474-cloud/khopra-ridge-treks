import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Red Pandas on the Khopra Ridge Trail: Habitat, Wildlife & Conservation Guide",
  description:
    "Are there red pandas on the Khopra Ridge Trail? Explore their habitat, behavior, and the conservation efforts protecting Nepal's rarest Himalayan mammal.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/red-pandas-on-khopra",
  },
  openGraph: {
    title: "Red Pandas on the Khopra Ridge Trail: Habitat, Wildlife & Conservation Guide",
    description:
      "Are there red pandas on the Khopra Ridge Trail? Explore their habitat, behavior, and the conservation efforts protecting Nepal's rarest Himalayan mammal.",
    url: "https://khopraridgetrek.com/ecology/red-pandas-on-khopra",
    type: "article",
  },
};

export default function RedPandasPage() {
  const quickStats = [
    { label: "IUCN Status", value: "Endangered (Ailurus fulgens)" },
    { label: "Habitat Elevation", value: "2,200m – 3,500m" },
    { label: "Dietary Staples", value: "98% Bamboo Shoots & Leaves" },
    { label: "Key Corridor Nodes", value: "Swanta, Dobato & Chhistibung" },
  ];

  const pandaCorridors = [
    { zone: "Swanta Forest Canopy", elev: "2,200m – 2,600m", details: "Mixed broadleaf oak & dense bamboo understory providing essential low-elevation feeding grounds." },
    { zone: "Dobato Remote Corridors", elev: "2,600m – 3,200m", details: "Quiet old-growth rhododendron forest with minimal human noise, ideal for nesting and daytime canopy resting." },
    { zone: "Chhistibung Wildlife Link", elev: "3,000m – 3,400m", details: "Critical altitudinal transition corridor linking upper subalpine bamboo stands to high alpine pastures." },
  ];

  const RedPandaFacts = [
    { trait: "Family Ailuridae", desc: "Red pandas are not closely related to giant pandas; they belong to their own unique evolutionary family." },
    { trait: "Crepuscular Activity", desc: "Most active at dawn and dusk. During the day, they rest curled up in high oak and rhododendron branches." },
    { trait: "Camouflage & Adaptation", desc: "Rust-red fur blends with reddish-brown tree moss, while thick ringed tails provide thermal insulation against freezing nights." },
    { trait: "Strict Bamboo Specialization", desc: "Simple digestive tracts require them to feed constantly on tender young bamboo shoots and leaves." },
  ];

  const faqs = [
    {
      q: "Can you see red pandas on the Khopra Ridge Trek?",
      a: "It's possible but uncommon. Suitable habitat exists in the forests around Swanta, Dobato, and Chhistibung, but red pandas are shy, solitary, and most active at dawn and dusk, so sightings should be treated as a rare bonus rather than an expectation.",
    },
    {
      q: "Where do red pandas live in Nepal?",
      a: "Red pandas live in temperate and subalpine forests across parts of eastern and central Nepal, generally between about 2,200 and 3,500 meters elevation, wherever oak and rhododendron forests support a dense bamboo understory.",
    },
    {
      q: "Are red pandas endangered in the Annapurna region?",
      a: "Yes. Red pandas are classified as Endangered on the IUCN Red List, and their populations face pressure from habitat fragmentation, grazing, and climate change, including within parts of the Annapurna Conservation Area.",
    },
    {
      q: "What do red pandas eat in the wild?",
      a: "Red pandas primarily eat bamboo shoots and leaves, supplemented with fruit, acorns, and occasionally insects or small eggs. Their limited digestive efficiency means they need to feed frequently on young, nutrient-rich bamboo.",
    },
    {
      q: "Which forests near Khopra Ridge support red pandas?",
      a: "The mixed oak, rhododendron, and bamboo forests around Swanta, Dobato, and Chhistibung offer the elevation, canopy cover, and food sources red pandas need, functioning as habitat corridors rather than isolated viewing spots.",
    },
    {
      q: "What other wildlife can trekkers see on this route?",
      a: "Beyond red pandas, the Khopra region supports Himalayan black bears, Himalayan thar, musk deer, leopard cats, Himalayan langurs, yellow-throated martens, and birdlife including the Danphe, Nepal's national bird.",
    },
    {
      q: "What is the best season for wildlife watching on Khopra Ridge?",
      a: "Spring and autumn generally offer the best balance of wildlife activity and trekking conditions, though winter and monsoon can bring quieter trails with fewer trekkers and less predictable weather.",
    },
    {
      q: "How can trekkers help protect red panda habitats?",
      a: "Trekking with local guides, respecting quiet wildlife-watching practices, avoiding flash photography, and supporting community-based tourism all help fund and reinforce the conservation work protecting these forests.",
    },
    {
      q: "Is flash photography allowed if a red panda is spotted?",
      a: "No. Flash photography startles crepuscular and nocturnal animals and causes severe distress. Trekkers should use telephoto lenses or binoculars from a respectful distance.",
    },
    {
      q: "How does ACAP protect red pandas?",
      a: "ACAP works with local community forestry user groups to restrict illegal timber cutting, manage livestock grazing in bamboo understories, and organize community anti-poaching patrols.",
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Wildlife</Link>
            <span>/</span>
            <span className="text-emerald-400">Red Pandas</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Endangered Himalayan Species Profile
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Red Pandas on Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Habitat corridors, bamboo dependence, crepuscular behavior, and community conservation protecting Nepal&apos;s rarest mammal.
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
                🐾
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Ethical Wildlife Tracking &amp; Conservation</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides enforce strict ethical wildlife watching standards and support community anti-poaching initiatives.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Somewhere in the moss-draped oak and rhododendron forests below Khopra Ridge, one of the Himalayas&apos; shyest mammals moves quietly through the canopy. The <strong>red panda</strong> (<em>Ailurus fulgens</em>) is rarely seen, easily missed, and almost never photographed by casual trekkers — yet its presence says something important about the health of this landscape.
              </p>
              <p>
                Suitable red panda habitat exists in the quiet forest corridors around Swanta, Dobato, and Chhistibung, where dense bamboo understories flourish beneath ancient oak canopies.
              </p>
            </div>

            {/* Section 1: Meet the Himalayan Red Panda */}
            <div id="meet-red-panda" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Meet the Himalayan Red Panda
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RedPandaFacts.map((fact, idx) => (
                    <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                      <h4 className="font-bold text-stone-950 text-base">🦊 {fact.trait}</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">{fact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Red Panda Habitat Corridors Table */}
            <div id="habitat-corridors" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Key Habitat Corridors Along the Khopra Loop
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Forest Zone</th>
                      <th className="py-4 px-4 sm:px-6">Elevation Range</th>
                      <th className="py-4 px-4 sm:px-6">Ecological Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {pandaCorridors.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.zone}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-emerald-800 text-xs">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Threats & Ethical Watching Guidelines */}
            <div id="ethical-watching" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Ethical Wildlife Watching Guidelines
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🤫 Move Quietly &amp; Pause</h4>
                  <p className="text-xs text-stone-600">Keep group voices low in bamboo forest sections around Swanta and Dobato. Red pandas retreat at loud human noises.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🚫 Strict No-Flash Rule</h4>
                  <p className="text-xs text-stone-600">Flash camera lights severely disorient nocturnal/crepuscular animals. Use telephoto lenses or binoculars from a distance.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🏡 Support Community Forests</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Trekking with local guides and staying at community lodges funds village anti-poaching patrols and bamboo protection.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📋 Report Sighting Activity</h4>
                  <p className="text-xs text-stone-600">Report any confirmed sightings or bamboo feeding marks to ACAP checkpoints to help researchers track corridor health.</p>
                </div>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Red Pandas on Khopra
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
                  Ethical Wildlife Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with Certified Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience the quiet forest corridors of Annapurna with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides bring deep knowledge of forest ecology and ethical wildlife observation.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Wildlife Treks
                  </Link>
                  <Link
                    href="/ecology/wildlife-khopra-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Khopra Wildlife Guide
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
                <a href="#meet-red-panda" className="block hover:text-emerald-600 transition">
                  • Meet the Red Panda
                </a>
                <a href="#habitat-corridors" className="block hover:text-emerald-600 transition">
                  • Key Habitat Corridors
                </a>
                <a href="#ethical-watching" className="block hover:text-emerald-600 transition">
                  • Ethical Watching Rules
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/birds-of-annapurna" className="hover:text-emerald-700 underline">
                      Birds of Annapurna Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/conservation-efforts" className="hover:text-emerald-700 underline">
                      ACAP Conservation Efforts
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/flora-of-khopra" className="hover:text-emerald-700 underline">
                      Flora &amp; Bamboo Canopy
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
