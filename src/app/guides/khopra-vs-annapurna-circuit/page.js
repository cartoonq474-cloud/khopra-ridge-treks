import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge vs Annapurna Circuit: Which Trek Should You Choose in Nepal?",
  description:
    "Comparing Khopra Ridge and Annapurna Circuit? We break down difficulty, altitude, cost, views, and crowds to help you choose the right Annapurna trek for you.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/khopra-vs-annapurna-circuit",
  },
  openGraph: {
    title: "Khopra Ridge vs Annapurna Circuit: Which Trek Should You Choose in Nepal?",
    description:
      "Comparing Khopra Ridge and Annapurna Circuit? We break down difficulty, altitude, cost, views, and crowds to help you choose the right Annapurna trek for you.",
    url: "https://khopraridgetrek.com/guides/khopra-vs-annapurna-circuit",
    type: "article",
  },
};

export default function KhopraVsAnnapurnaCircuitPage() {
  const quickStats = [
    { label: "Khopra Duration", value: "6 – 9 Days (Road-Free)" },
    { label: "Circuit Duration", value: "12 – 18 Days (High Pass)" },
    { label: "Max Elevation", value: "Khopra: 4,660m | Circuit: 5,416m" },
    { label: "Lodge Model", value: "Community Lodges vs Private Teahouses" },
  ];

  const comparisonRows = [
    { metric: "Typical Duration", khopra: "6–9 days", circuit: "12–18 days" },
    { metric: "Maximum Altitude", khopra: "~4,660 m (Khayer Lake)", circuit: "5,416 m (Thorong La Pass)" },
    { metric: "Difficulty", khopra: "Moderate", circuit: "Moderate to Strenuous" },
    { metric: "Daily Walking Hours", khopra: "4–7 hours / day", circuit: "5–7 hours / day" },
    { metric: "Trail Type", khopra: "100% Road-free forest & ridge trail", circuit: "Mixed trail with jeep road sections" },
    { metric: "Crowd Level", khopra: "Low to moderate", circuit: "Moderate to high in peak season" },
    { metric: "Accommodation", khopra: "Community-owned lodges", circuit: "Privately owned teahouses" },
    { metric: "Approximate Cost", khopra: "Lower daily & overall trip cost", circuit: "Higher total cost due to length" },
    { metric: "Mountain Views", khopra: "Dhaulagiri I, Annapurna South, Fishtail, Nilgiri", circuit: "Annapurna II, III, IV, Gangapurna, Thorong Peak" },
    { metric: "Best Season", khopra: "Autumn, Spring & clear Winter days", circuit: "Spring & Autumn (Pass closes in severe winter)" },
    { metric: "Permits Required", khopra: "ACAP Entry Permit", circuit: "ACAP Permit & TIMS Card" },
    { metric: "Best Suited For", khopra: "1–2 week trips, beginners, road-free trails", circuit: "2–3 week trips, bucket-list high pass challenge" },
  ];

  const decisionCards = [
    {
      title: "Choose Khopra Ridge Trek If...",
      points: [
        "You have 1 to 2 weeks total vacation time in Nepal.",
        "You prefer road-free wilderness paths with zero vehicle noise or dust.",
        "You want lower maximum altitude (~4,660m) with lower AMS risk.",
        "You care about staying in community-owned lodges that fund local schools and clinics.",
        "You prefer peaceful trails with very few other trekkers.",
      ],
      tag: "Best for 1-2 Week Trips & Road-Free Trails",
    },
    {
      title: "Choose Annapurna Circuit If...",
      points: [
        "You have 2 to 3+ weeks available for a long-distance expedition.",
        "Crossing a 5,416m Himalayan pass (Thorong La) is on your bucket list.",
        "You want dramatic ecological contrast from subtropical green valleys to alpine desert.",
        "You enjoy high-energy, social teahouse atmospheres with international hikers.",
        "You are prepared for sustained multi-week endurance hiking.",
      ],
      tag: "Best for 2-3 Week Expedition & High Pass Challenge",
    },
  ];

  const faqs = [
    {
      q: "Is Khopra Ridge easier than the Annapurna Circuit?",
      a: "Yes, in most respects. Khopra Ridge is shorter (6-9 days vs 12-18 days), reaches a lower maximum altitude (4,660m vs 5,416m), and involves fewer consecutive high-altitude days, making it far more approachable for first-timers.",
    },
    {
      q: "Is the Annapurna Circuit still worth doing after road construction?",
      a: "Yes. While motor roads have touched lower sections, the core high-altitude trek through Manang, Thorong La Pass (5,416m), and Muktinath remains largely road-free. Operators use alternative high trails to bypass roads.",
    },
    {
      q: "Which trek is better for beginners in Nepal?",
      a: "Khopra Ridge is significantly better suited for beginners due to its shorter length, moderate daily walking demands, lower AMS risk, and forgiving itinerary.",
    },
    {
      q: "Which trek has better mountain views?",
      a: "Khopra Ridge offers close-up, 360° panoramas of Dhaulagiri I, Annapurna South, and Fishtail from an open ridge. The Annapurna Circuit offers dramatic landscape diversity across multiple valleys and alpine desert zones.",
    },
    {
      q: "Which trek is less crowded?",
      a: "Khopra Ridge sees a fraction of the trekker traffic found on the Annapurna Circuit, providing a peaceful, quiet trail even during peak autumn months.",
    },
    {
      q: "Which trek is cheaper overall?",
      a: "Khopra Ridge is less expensive overall simply because it takes about half the duration of the Annapurna Circuit, requiring fewer days of guide, porter, and accommodation costs.",
    },
    {
      q: "Which trek has a lower risk of altitude sickness (AMS)?",
      a: "Khopra Ridge carries a lower AMS risk because its highest point is ~4,660m (Khayer Lake), whereas the Annapurna Circuit climbs to 5,416m at Thorong La Pass.",
    },
    {
      q: "Can solo trekkers do both routes safely?",
      a: "Solo trekkers can complete both routes with a licensed guide, as required by Annapurna Conservation Area regulations. Khopra Ridge's quieter trails make having a guide especially beneficial.",
    },
    {
      q: "How difficult is Thorong La Pass on the Annapurna Circuit?",
      a: "Thorong La Pass is a strenuous, high-altitude crossing at 5,416 meters requiring an early pre-dawn start, solid cold-weather gear, and proper acclimatization in Manang.",
    },
    {
      q: "Is Khopra Ridge a good alternative to the Annapurna Circuit?",
      a: "Yes! For trekkers short on time or seeking road-free trails and community-based lodging, Khopra Ridge is a premier stand-alone alternative.",
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
            <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition">Guides Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra vs Annapurna Circuit</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Route Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge vs Annapurna Circuit
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Which trek should you choose in Nepal? We compare duration, altitude, difficulty, road impacts, cost, and community benefits.
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
                🧭
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Local Operator Comparison Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara and Kathmandu, our team regularly operates both Khopra Ridge and Annapurna Circuit departures.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;re weighing Khopra Ridge against the Annapurna Circuit, you&apos;ve narrowed your Nepal options to two very different experiences. One is a quieter, road-free ridge walk through community-owned lodges. The other is a long-distance classic that crosses Thorong La Pass (5,416m), one of the highest trekking passes in the world.
              </p>
              <p>
                The right choice depends on your timeframe, fitness, altitude comfort, budget, and preference for road-free trails versus long-distance expedition variety.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs Annapurna Circuit Side-by-Side
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Factor</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge Trek</th>
                      <th className="py-4 px-4 sm:px-6">Annapurna Circuit Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.metric}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.khopra}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.circuit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Decision Framework */}
            <div id="decision-framework" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Which Trek Fits Your Goals Best?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {decisionCards.map((card, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <h3 className="font-bold text-stone-950 text-xl">{card.title}</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600 list-disc pl-5 leading-relaxed">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Key Differences (Roads, AMS, Lodges) */}
            <div id="key-differences" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Deep Dive: Trails, Altitude &amp; Community Impact
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🛣️ Road Impacts &amp; Trail Authenticity</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> remains 100% road-free. From Ghandruk to Khopra Danda, you walk on pure stone pathways with no vehicle traffic or dust. The <strong>Annapurna Circuit</strong> has seen jeep roads built along parts of the Marsyangdi and Kali Gandaki valleys, though high alternative trails still allow hikers to bypass vehicle roads.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏔️ Altitude &amp; AMS Risk Profile</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> tops out at ~4,660m at sacred Khayer Lake, with ridge overnight stays at 3,660m. The <strong>Annapurna Circuit</strong> climbs to 5,416m at Thorong La Pass, requiring mandatory acclimatization rest days in Manang and carrying a higher risk of Acute Mountain Sickness (AMS).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏘️ Community Lodges vs Private Teahouses</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> is built on a village cooperative lodge system. All accommodation profits fund local high schools in Swanta and medical posts in Nangi. The <strong>Annapurna Circuit</strong> relies on private commercial teahouses where revenue goes to individual owners.
                  </p>
                </div>
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
                  Licensed Local Operators
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Choose Your Annapurna Trek?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trip with licensed local specialists <strong>EMD Treks</strong> (NTB License #8928-091). We organize custom guided departures on both Khopra Ridge and the Annapurna Circuit.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Request Custom Itinerary
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View 9-Day Khopra Tour
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
                  • Side-by-Side Table
                </a>
                <a href="#decision-framework" className="block hover:text-emerald-600 transition">
                  • Selection Framework
                </a>
                <a href="#key-differences" className="block hover:text-emerald-600 transition">
                  • Trails, Altitude &amp; Lodges
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Comparison Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/khopra-vs-poon-hill" className="hover:text-emerald-700 underline">
                      Khopra vs Poon Hill
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/khopra-vs-mardi-himal" className="hover:text-emerald-700 underline">
                      Khopra vs Mardi Himal
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra Is Less Crowded
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/which-annapurna-trek-to-choose" className="hover:text-emerald-700 underline">
                      Which Annapurna Trek to Choose
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
