"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [selectedTrek, setSelectedTrek] = useState("khopraridge");

  const trekData = {
    khopraridge: {
      name: "Khopra Ridge Community Trek",
      duration: "7–9 Days",
      maxAlt: "3,660m (Ridge) / 4,660m (Khayer Lake)",
      difficulty: "Moderate to Challenging",
      budget: "$35–$50 / day",
      crowds: "Very Low (Quiet Solitude)",
      lodges: "Community-Owned Cooperative",
      scenery: "Eye-level panoramas of Dhaulagiri & Annapurna South; sacred turquoise glacial lake.",
      social: "100% community profit reinvestment funding village primary schools & health posts.",
    },
    poonhill: {
      name: "Poon Hill Sunrise Trek",
      duration: "3–5 Days",
      maxAlt: "3,210m (Poon Hill Tower)",
      difficulty: "Easy to Moderate",
      budget: "$25–$40 / day",
      crowds: "Very High (Crowded Trails)",
      lodges: "Commercial Private Teahouses",
      scenery: "Classic morning sunrise panorama over Annapurna and Dhaulagiri massifs.",
      social: "Individual private lodge business model.",
    },
    mardihimal: {
      name: "Mardi Himal Trek",
      duration: "5–7 Days",
      maxAlt: "4,500m (Mardi Base Camp)",
      difficulty: "Moderate to Challenging",
      budget: "$30–$45 / day",
      crowds: "Moderate to High",
      lodges: "Private Teahouses",
      scenery: "Spectacular close-up ridge views directly beneath Machhapuchhre (Fishtail).",
      social: "Individual private business model.",
    },
    annapurna_base: {
      name: "Annapurna Base Camp (ABC)",
      duration: "7–10 Days",
      maxAlt: "4,130m (ABC Sanctuary)",
      difficulty: "Moderate to Strenuous",
      budget: "$40–$60 / day",
      crowds: "High (Heavy Season Traffic)",
      lodges: "Commercial Teahouses",
      scenery: "Immersive high-altitude mountain amphitheater surrounded by 7,000m+ walls.",
      social: "ACAP regulated lodge zone.",
    },
    everest_base: {
      name: "Everest Base Camp (EBC)",
      duration: "12–14 Days",
      maxAlt: "5,364m (EBC) / 5,545m (Kala Patthar)",
      difficulty: "Challenging / Strenuous",
      budget: "$70–$120 / day",
      crowds: "Very High",
      lodges: "Teahouses + Lukla Flight",
      scenery: "Iconic Khumbu Icefall, Mount Everest, Nuptse, and Sherpa cultural hubs.",
      social: "Commercial mountain tourism corridor.",
    },
    langtang: {
      name: "Langtang Valley Trek",
      duration: "7–10 Days",
      maxAlt: "4,984m (Kyanjin Ri)",
      difficulty: "Moderate",
      budget: "$35–$55 / day",
      crowds: "Moderate",
      lodges: "Tamang Community Teahouses",
      scenery: "U-shaped glacial valley, Langtang Lirung views, and Tamang heritage.",
      social: "Direct support for post-earthquake community recovery.",
    },
    annapurna_circuit: {
      name: "Annapurna Circuit Trek",
      duration: "12–18 Days",
      maxAlt: "5,416m (Thorong La Pass)",
      difficulty: "Challenging",
      budget: "$40–$65 / day",
      crowds: "High",
      lodges: "Teahouses",
      scenery: "Trans-Himalayan desert landscapes, Manang valley, and Thorong La Pass.",
      social: "Diverse multi-cultural hill communities.",
    },
    manaslu: {
      name: "Manaslu Circuit Trek",
      duration: "12–16 Days",
      maxAlt: "5,106m (Larke Pass)",
      difficulty: "Challenging",
      budget: "$65–$95 / day",
      crowds: "Low (Restricted Area)",
      lodges: "Remote Teahouses",
      scenery: "Unspoiled Nubri valley, Mount Manaslu (8,163m), and high Tibetan pass.",
      social: "Restricted permit system supporting remote valley conservation.",
    },
  };

  const selectedData = trekData[selectedTrek];

  const summarySpecs = [
    { label: "Routes Compared", value: "8 Major Nepal Treks" },
    { label: "Duration Range", value: "3 to 18 Days" },
    { label: "Elevation Range", value: "3,210m to 5,416m" },
    { label: "Budget Range", value: "$25 to $120 / day" },
  ];

  const comparisonMatrix = [
    { name: "Khopra Ridge", duration: "7–9 Days", alt: "3,660m / 4,660m", diff: "Moderate-Challenging", budget: "$35–$50", crowds: "Very Low", lodge: "Community Cooperative" },
    { name: "Poon Hill", duration: "3–5 Days", alt: "3,210m", diff: "Easy-Moderate", budget: "$25–$40", crowds: "Very High", lodge: "Private Teahouse" },
    { name: "Mardi Himal", duration: "5–7 Days", alt: "4,500m", diff: "Moderate-Challenging", budget: "$30–$45", crowds: "Moderate-High", lodge: "Private Teahouse" },
    { name: "Annapurna Base Camp", duration: "7–10 Days", alt: "4,130m", diff: "Moderate-Strenuous", budget: "$40–$60", crowds: "High", lodge: "Private Teahouse" },
    { name: "Everest Base Camp", duration: "12–14 Days", alt: "5,364m", diff: "Challenging", budget: "$70–$120", crowds: "Very High", lodge: "Teahouse + Flight" },
    { name: "Langtang Valley", duration: "7–10 Days", alt: "4,984m", diff: "Moderate", budget: "$35–$55", crowds: "Moderate", lodge: "Tamang Teahouse" },
    { name: "Annapurna Circuit", duration: "12–18 Days", alt: "5,416m", diff: "Challenging", budget: "$40–$65", crowds: "High", lodge: "Private Teahouse" },
    { name: "Manaslu Circuit", duration: "12–16 Days", alt: "5,106m", diff: "Challenging", budget: "$65–$95", crowds: "Low", lodge: "Restricted Permit" },
  ];

  const faqs = [
    {
      q: "Which Nepal trek is best for beginners?",
      a: "Poon Hill is the most accessible beginner trek (3–5 days, 3,210m). For beginners wanting a longer, quieter route with similar ease, Khopra Ridge (7–9 days) is an excellent alternative.",
    },
    {
      q: "Which trek is the cheapest in Nepal?",
      a: "Poon Hill, Mardi Himal, and Khopra Ridge are the most budget-friendly ($25–$50/day) as they require no domestic flights and lower permit fees.",
    },
    {
      q: "Is Everest Base Camp harder than Annapurna Base Camp?",
      a: "Yes. EBC is longer (12–14 days vs 7–10), reaches higher altitude (5,364m vs 4,130m), requires a flight to Lukla, and demands stricter acclimatization.",
    },
    {
      q: "How does Khopra Ridge compare with Poon Hill?",
      a: "Poon Hill is shorter and busier. Khopra Ridge is longer, slightly higher, and far less crowded, offering superior 360-degree Dhaulagiri panoramas and community-owned lodges.",
    },
    {
      q: "Which Nepal trek has the best mountain views?",
      a: "Mardi Himal offers the closest views of Fishtail (Machhapuchhre). Khopra Ridge offers the broadest Dhaulagiri & Annapurna South panoramas. EBC offers grand scale.",
    },
    {
      q: "Which trek is best for solo travelers?",
      a: "Annapurna Base Camp, Mardi Himal, and Khopra Ridge are well-supported with reliable lodges and welcoming community hospitality for solo hikers paired with a guide.",
    },
    {
      q: "Which trek requires the highest fitness level?",
      a: "Everest Base Camp, Annapurna Circuit, and Manaslu Circuit require advanced endurance to handle 5,000m+ passes and 12–18 days of high-altitude walking.",
    },
    {
      q: "Are teahouse treks better than camping treks?",
      a: "For 95% of trekkers, yes. Teahouse treks provide warm meals, beds, and hot tea without requiring heavy camping equipment or support crews.",
    },
    {
      q: "Which Nepal trek can be completed in one week?",
      a: "Poon Hill (3-5 days), Mardi Himal (5-7 days), Khopra Ridge (6-8 days), and Langtang Valley (7 days) fit well within a one-week holiday window.",
    },
    {
      q: "How do I choose the right trek in Nepal?",
      a: "Filter by your timeframe, budget, fitness level, and crowd tolerance. Use our comparison matrix above to match your exact parameters.",
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
            <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-400 transition">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Trek Comparison Tool</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Interactive Route Selector
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Interactive Nepal Trek Comparison Tool
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Compare Nepal&apos;s premier trekking routes side-by-side — difficulty, daily budget, maximum altitude, crowd density, and accommodation models.
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
                ⚖️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Unbiased Local Operator Comparisons</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We guide routes across Annapurna, Everest, and Langtang, providing honest trade-offs so you select the trek that fits your goals.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Nepal has more incredible trekking routes than any one trip can cover. Everest Base Camp, Annapurna Base Camp, Langtang Valley, Khopra Ridge, Mardi Himal — each one demands a different budget, fitness level, and timeline.
              </p>
              <p>
                Our interactive comparison tool below allows you to evaluate Nepal&apos;s top routes side-by-side across key parameters before finalizing your reservation.
              </p>
            </div>

            {/* Section 1: Interactive Route Selector Widget */}
            <div id="interactive-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Select Route to Inspect Detailed Profile
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Selector Buttons */}
                <div className="md:col-span-1 p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Trek Options</span>
                  {Object.keys(trekData).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedTrek(key)}
                      className={`w-full text-left p-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        selectedTrek === key
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {trekData[key].name}
                    </button>
                  ))}
                </div>

                {/* Inspected Route Profile Card */}
                <div className="md:col-span-2 p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Selected Route Inspection</span>
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">{selectedData.duration}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Trek Name</span>
                      <h3 className="text-2xl font-black text-stone-950 mt-1">{selectedData.name}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Max Altitude</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedData.maxAlt}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Difficulty Rating</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedData.difficulty}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Daily Budget</span>
                        <span className="text-xs font-bold text-emerald-800 mt-1 block">{selectedData.budget}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Crowd Density</span>
                        <span className="text-xs font-bold text-stone-900 mt-1 block">{selectedData.crowds}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Lodging Model</span>
                      <span className="text-xs font-semibold text-stone-800 mt-1 block">{selectedData.lodges}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Scenic Highlight</span>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">{selectedData.scenery}</p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Community &amp; Social Model</span>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">{selectedData.social}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Full Comparison Table Matrix */}
            <div id="comparison-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Complete Nepal Trek Comparison Matrix
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Route</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Daily Budget</th>
                      <th className="py-4 px-4 sm:px-6">Crowds</th>
                      <th className="py-4 px-4 sm:px-6">Lodge Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonMatrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-stone-900">{row.alt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.diff}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-700">{row.budget}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowds}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.lodge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Head-to-Head Comparisons */}
            <div id="head-to-head" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Popular Head-to-Head Comparisons
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">Khopra Ridge vs. Poon Hill</h3>
                <p className="text-sm sm:text-base">
                  Poon Hill is shorter (3-5 days), lower (3,210m), and very crowded. Khopra Ridge (7-9 days) reaches 3,660m (with a 4,660m Khayer Lake option), offers wider 360° panoramas, quiet trails, and community-owned lodges that fund local schools.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">Annapurna Base Camp vs. Mardi Himal</h3>
                <p className="text-sm sm:text-base">
                  ABC takes 7-10 days into a high-altitude sanctuary amphitheater at 4,130m. Mardi Himal takes 5-7 days along a narrow ridge topping at 4,500m right under Machhapuchhre (Fishtail). Choose ABC for classic sanctuary depth; choose Mardi for quick ridge drama.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">Everest Base Camp vs. Langtang Valley</h3>
                <p className="text-sm sm:text-base">
                  EBC requires 12-14 days, Lukla flights, 5,364m altitude, and $70-$120/day. Langtang Valley takes 7-10 days, overland transport from Kathmandu, 4,984m altitude, and $35-$55/day with rich Tamang cultural immersion.
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
                  Customized Nepal Itineraries
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Request a Custom Trekking Consultation
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Still comparing routes? Contact Pokhara local team <strong>EMD Treks</strong> (NTB License #8928-091) for expert advice on matching your timeframe, fitness level, and budget to the ideal Nepal trek.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Request Custom Itinerary
                  </Link>
                  <Link
                    href="/planning/khopra-loop-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Khopra Loop Details
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
                <a href="#interactive-comparison" className="block hover:text-emerald-600 transition">
                  • Route Selector Widget
                </a>
                <a href="#comparison-matrix" className="block hover:text-emerald-600 transition">
                  • Complete Comparison Matrix
                </a>
                <a href="#head-to-head" className="block hover:text-emerald-600 transition">
                  • Head-to-Head Comparisons
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Decision Tools</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/which-annapurna-trek-to-choose" className="hover:text-emerald-700 underline">
                      Which Annapurna Trek to Choose
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/difficulty-calculator" className="hover:text-emerald-700 underline">
                      Trek Difficulty Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-700 underline">
                      Trek Cost Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/khopra-vs-poon-hill" className="hover:text-emerald-700 underline">
                      Khopra vs Poon Hill Deep Dive
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
