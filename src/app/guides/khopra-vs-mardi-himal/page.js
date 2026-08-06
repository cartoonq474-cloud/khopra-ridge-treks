import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge vs Mardi Himal Trek: Which Annapurna Trek Should You Choose?",
  description:
    "Comparing Khopra Ridge and Mardi Himal? We break down cost, difficulty, views, crowds, and season by season so you can pick the right Annapurna trek for you.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/khopra-vs-mardi-himal",
  },
  openGraph: {
    title: "Khopra Ridge vs Mardi Himal Trek: Which Annapurna Trek Should You Choose?",
    description:
      "Comparing Khopra Ridge and Mardi Himal? We break down cost, difficulty, views, crowds, and season by season so you can pick the right Annapurna trek for you.",
    url: "https://khopraridgetrek.com/guides/khopra-vs-mardi-himal",
    type: "article",
  },
};

export default function KhopraVsMardiHimalPage() {
  const quickStats = [
    { label: "Khopra Duration", value: "8 – 9 Days (60–70 km)" },
    { label: "Mardi Duration", value: "4 – 6 Days (35–40 km)" },
    { label: "Max Elevation", value: "Khopra: 4,660m | Mardi: 4,500m" },
    { label: "Lodge Model", value: "Community Lodges vs Private Teahouses" },
  ];

  const comparisonRows = [
    { metric: "Duration", khopra: "8–9 days", mardi: "4–6 days" },
    { metric: "Distance", khopra: "Roughly 60–70 km round trip", mardi: "Roughly 35–40 km round trip" },
    { metric: "Maximum Altitude", khopra: "4,660 m (Ridge); 4,700 m with Khayer Lake", mardi: "4,500 m (Mardi Viewpoint)" },
    { metric: "Daily Walking Hours", khopra: "5–7 hours / day", mardi: "4–6 hours / day" },
    { metric: "Difficulty", khopra: "Moderate to moderately challenging", mardi: "Moderate" },
    { metric: "Crowd Levels", khopra: "Very low to quiet", mardi: "Moderate to high in peak season" },
    { metric: "Accommodation", khopra: "Community-owned lodges", mardi: "Independent teahouses" },
    { metric: "Guided Cost Range", khopra: "Higher (due to longer duration)", mardi: "Lower (due to shorter duration)" },
    { metric: "Signature Views", khopra: "Dhaulagiri I, Annapurna South, Nilgiri", mardi: "Machhapuchhre (Fishtail) up close" },
    { metric: "Best Seasons", khopra: "Spring (Mar-May) & Autumn (Sep-Nov)", mardi: "Spring (Mar-May) & Autumn (Sep-Nov)" },
    { metric: "Best For", khopra: "Travelers seeking depth, community lodges, and quiet trails", mardi: "Travelers seeking a short, scenic, fast-paced trek" },
  ];

  const recommendationMatrix = [
    { type: "First-time trekker with limited time (under 7 days)", fit: "Mardi Himal Trek" },
    { type: "Traveler with 9+ days who wants deep culture & quiet", fit: "Khopra Ridge Trek" },
    { type: "Photographer chasing one iconic close-up shot (Fishtail)", fit: "Mardi Himal Trek" },
    { type: "Photographer wanting 360° panoramic multi-peak range", fit: "Khopra Ridge Trek" },
    { type: "Eco-conscious traveler prioritizing community impact", fit: "Khopra Ridge Trek" },
    { type: "Solo trekker wanting a busy social trail", fit: "Mardi Himal Trek" },
    { type: "Traveler seeking genuine solitude & peace", fit: "Khopra Ridge Trek" },
  ];

  const faqs = [
    {
      q: "Is Khopra Ridge harder than Mardi Himal Trek?",
      a: "Khopra Ridge is generally considered more demanding, mainly because of its longer duration (8-9 days vs 4-6 days) and greater cumulative walking distance (60-70 km vs 35-40 km).",
    },
    {
      q: "Which trek has better mountain views?",
      a: "Khopra Ridge offers a broader, multi-peak panorama including Dhaulagiri I, Annapurna South, and Nilgiri. Mardi Himal offers closer, more dramatic views of iconic Machhapuchhre (Fishtail).",
    },
    {
      q: "Is Mardi Himal Trek suitable for beginners?",
      a: "Yes. Its shorter length and moderate daily walking hours (4-6 hrs) make it a very accessible introduction to Himalayan trekking for beginners with decent fitness.",
    },
    {
      q: "Is Khopra Ridge less crowded than Mardi Himal?",
      a: "Yes. Khopra Ridge sits off the main tourist corridor and sees far fewer trekkers than Mardi Himal, which has experienced heavy crowd surges in High Camp during peak autumn weeks.",
    },
    {
      q: "Which trek is cheaper?",
      a: "Mardi Himal is generally less expensive overall, primarily because its shorter duration requires fewer days of guide, porter, and accommodation costs.",
    },
    {
      q: "Can I do the Khopra Ridge Trek without a guide?",
      a: "We strongly recommend trekking with a licensed guide on both routes, and especially on Khopra Ridge, given its quieter trails and patchier mobile coverage beyond Dobato.",
    },
    {
      q: "Which trek is better in October?",
      a: "Both treks feature clear autumn skies in October. However, Khopra Ridge stays noticeably quiet, whereas Mardi Himal lodges at High Camp fill up quickly.",
    },
    {
      q: "Is Khayer Lake worth adding to the Khopra Ridge Trek?",
      a: "Yes! For fit trekkers, adding Khayer Lake (4,660m) adds two days and leads to an untouched, sacred glacial lake right beneath Annapurna South.",
    },
    {
      q: "Which trek is better for photography?",
      a: "Choose Khopra Ridge for broad, sweeping 360° multi-peak panoramas, or Mardi Himal for an iconic close-up portrait of Machhapuchhre.",
    },
    {
      q: "Can I combine Mardi Himal and Khopra Ridge in one trip?",
      a: "Yes, for travelers with 2 to 3 weeks in Nepal. However, most trekkers choose one route based on their available schedule.",
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
            <span className="text-emerald-400">Khopra vs Mardi Himal</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Trek Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge vs Mardi Himal Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Which Annapurna trek should you choose? We break down duration, difficulty, cost, views, crowds, and local community impact.
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
                ⚖️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Local Operator Comparison Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides regularly operate both Khopra Ridge and Mardi Himal departures.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you have narrowed your Nepal trip down to two short Annapurna treks, you have probably landed on the same shortlist most travelers do: Khopra Ridge or Mardi Himal. Both sit inside the Annapurna Conservation Area, can be done under two weeks, and promise big mountain views without the commitment of Annapurna Base Camp.
              </p>
              <p>
                However, these two treks serve different traveler profiles. Mardi Himal is fast, accessible, and delivers close-ups of Machhapuchhre in 4–6 days. Khopra Ridge is longer (8–9 days), quieter, and built around a community-lodge system that takes you deep into Magar and Gurung village life with an option to visit sacred Khayer Lake (4,660m).
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs Mardi Himal at a Glance
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Factor</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge Trek</th>
                      <th className="py-4 px-4 sm:px-6">Mardi Himal Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.metric}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.khopra}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.mardi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Quick Answer */}
            <div id="quick-answer" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Answer: Which Trek Should You Choose?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-3">
                  <h3 className="font-bold text-emerald-950 text-lg">⛰️ Choose Khopra Ridge If...</h3>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    You have at least 9–10 days in Nepal, want a quiet trail with minimal crowds, prefer staying in community lodges that fund local schools/clinics, and want the option to visit sacred Khayer Lake (4,660m).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🏔️ Choose Mardi Himal If...</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Your time in Nepal is limited (under 7 days), you want a fast trailhead access from Pokhara, and you are drawn to iconic, close-up portraits of Machhapuchhre (Fishtail) Peak.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Deep Dives (Views, Lodges, Community) */}
            <div id="detailed-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Detailed Breakdown of Key Differences
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏠 Accommodation &amp; Community Impact</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> operates on a 100% community-owned cooperative lodge model. Profit from room stays directly funds teacher salaries in Swanta and medical supplies in Nangi. <strong>Mardi Himal</strong> relies on independently owned private teahouses, where profit goes to individual operators.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">📸 Mountain Views &amp; Photography</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> offers a sweeping, 360° multi-peak panorama including Dhaulagiri I (8,167m), Annapurna South, Nilgiri, and the deep Kali Gandaki Gorge. <strong>Mardi Himal</strong> offers an intimate, close-up portrait of Machhapuchhre (Fishtail) rising right ahead of High Camp.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">👥 Trail Traffic &amp; Crowds</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> sees only 15–25 trekkers a day even in peak October, keeping trails quiet. <strong>Mardi Himal</strong> has grown very busy due to Instagram popularity, with High Camp lodges experiencing crowd surges in autumn.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Recommendation Matrix Table */}
            <div id="recommendation-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Final Recommendation Matrix by Traveler Profile
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Traveler Profile</th>
                      <th className="py-4 px-4 sm:px-6">Recommended Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {recommendationMatrix.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{item.type}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800 bg-emerald-50/30">{item.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  Annapurna Trekking Experts
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Book Your Annapurna Trek?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). We organize guided departures on both Khopra Ridge and Mardi Himal with custom itineraries.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Treks
                  </Link>
                  <Link
                    href="/tours/khopra-mohare-danda-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Khopra &amp; Mohare Tour
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
                  • At a Glance Table
                </a>
                <a href="#quick-answer" className="block hover:text-emerald-600 transition">
                  • Quick Selection Guide
                </a>
                <a href="#detailed-breakdown" className="block hover:text-emerald-600 transition">
                  • Key Differences Breakdown
                </a>
                <a href="#recommendation-matrix" className="block hover:text-emerald-600 transition">
                  • Recommendation Matrix
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
                    <Link href="/guides/khopra-vs-annapurna-circuit" className="hover:text-emerald-700 underline">
                      Khopra vs Annapurna Circuit
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/khopra-vs-mohare-danda" className="hover:text-emerald-700 underline">
                      Khopra vs Mohare Danda
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra Is Less Crowded
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
