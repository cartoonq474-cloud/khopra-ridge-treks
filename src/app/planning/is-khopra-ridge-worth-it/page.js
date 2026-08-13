import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Is the Khopra Ridge Trek Worth It? An Honest Review of",
  description: "Wondering if the Khopra Ridge Trek is worth your time and money? We break down the views, difficulty, costs, and comfort honestly — plus how it compares to.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/is-khopra-ridge-worth-it",
  },
  openGraph: {
    title: "Is the Khopra Ridge Trek Worth It? An Honest Review of Nepal's Hidden Gem",
    description:
      "Wondering if the Khopra Ridge Trek is worth your time and money? We break down the views, difficulty, costs, and comfort honestly — plus how it compares to Poon Hill and Mardi Himal.",
    url: "https://khopraridgetrek.com/planning/is-khopra-ridge-worth-it",
    type: "article",
  },
};

export default function IsKhopraRidgeWorthItPage() {
  const quickStats = [
    { label: "Overall Verdict", value: "Yes (High Value for View & Quiet Lovers)" },
    { label: "Mountain Views", value: "9 / 10 (Close-Range 180° Panorama)" },
    { label: "Crowd Density", value: "9 / 10 (High Solitude / Uncrowded)" },
    { label: "Accommodation", value: "6 / 10 (Simple Community Lodges)" },
  ];

  const scorecardRows = [
    { category: "Mountain Views", score: "9 / 10", notes: "Direct close-up sightlines of Dhaulagiri I (8,167m) & Annapurna South (7,219m)." },
    { category: "Crowd Solitude", score: "9 / 10", notes: "Significantly quieter than Poon Hill or ABC; walk hours without tour groups." },
    { category: "Cultural Experience", score: "8 / 10", notes: "Authentic Gurung & Magar village interactions and community-owned lodges." },
    { category: "Value for Money", score: "9 / 10", notes: "High scenery-to-cost ROI; zero flight fees required from Pokhara." },
    { category: "Physical Difficulty", score: "7 / 10", notes: "Moderate climbing; steep stone staircase push from Chhistibung to Khopra." },
    { category: "Lodge & Comforts", score: "6 / 10", notes: "Clean, functional eco-lodges; simple twin rooms & shared bathrooms." },
  ];

  const comparisons = [
    { route: "Khopra Ridge Trek", views: "180° Ridge Panorama", crowds: "Low / Peaceful", comfort: "Simple Community Lodges", duration: "7–9 Days", verdict: "Best overall value for quiet & views" },
    { route: "Poon Hill Trek", views: "Sunrise Over Dhaulagiri", crowds: "Very High (Hundreds of Trekkers)", comfort: "Developed Teahouses", duration: "4–5 Days", verdict: "Best for short, easy beginner trips" },
    { route: "Mardi Himal Trek", views: "Fishtail Ridgeline Views", crowds: "Moderate to High", comfort: "Standard Teahouses", duration: "5–6 Days", verdict: "Good short ridge alternative" },
    { route: "Annapurna Base Camp", views: "Inside Sanctuary Amphitheater", crowds: "High", comfort: "Commercial Teahouses", duration: "10–12 Days", verdict: "Classic bucket-list trek; busier" },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek worth it for beginners?",
      a: "Yes. For reasonably fit beginners who prepare with basic cardio and hiking, Khopra Ridge is worth every step. It offers better mountain panoramas and far fewer crowds than Poon Hill.",
    },
    {
      q: "Is the Khayer Lake side trip worth the extra hike?",
      a: "If you have an extra day in your itinerary and feel well-acclimatized, yes — sacred Khayer Lake (4,660m) offers a rugged glacial experience. However, skipping it does not lessen the core Khopra Ridge views.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek?",
      a: "It is rated moderate — harder than Poon Hill, but easier than the Annapurna Circuit or Everest Base Camp. The steepest push is from Chhistibung to Khopra Ridge (+685m elevation gain).",
    },
    {
      q: "Is Khopra Ridge less crowded than Mardi Himal?",
      a: "Yes. Mardi Himal has grown significantly in popularity over recent years. Khopra Ridge remains one of the most peaceful, uncrowded trails in the Annapurna Conservation Area.",
    },
    {
      q: "Is Khopra Ridge better than Poon Hill?",
      a: "For scenery, quiet, and authenticity, yes. Poon Hill is shorter and easier, but you share sunrise with hundreds of tourists. Khopra Ridge delivers eye-level mountain views in near solitude.",
    },
    {
      q: "How much does the Khopra Ridge Trek cost?",
      a: "Independent backpackers spend roughly $15–$25/day on-trail. Guided packages run $35–$55/day, covering permits, private transport, meals, guide, and porter support.",
    },
    {
      q: "Are the community lodges comfortable?",
      a: "Lodges are simple, clean, and functional with twin-share rooms and shared bathrooms. Dining rooms are heated by stoves, though bedrooms are unheated, so a good sleeping bag is recommended.",
    },
    {
      q: "What is the best month to trek Khopra Ridge?",
      a: "Autumn (September to November) offers crisp sky clarity. Spring (March to May) features blooming red rhododendron forests with mild temperatures.",
    },
    {
      q: "Can you do the Khopra Ridge Trek without a guide?",
      a: "Current TIMS regulations require trekkers in this region to hike with a licensed local guide. Hiring a guide also provides vital safety, altitude monitoring, and lodge support.",
    },
    {
      q: "How many days do you need for the Khopra Ridge Trek?",
      a: "Most itineraries take 7 to 9 days round-trip from Pokhara, which includes travel time, rest buffers, and optional side hikes.",
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
            <Link href="/planning/khopra-loop-trek" className="hover:text-emerald-400 transition">Planning Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Is Khopra Ridge Worth It?</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Honest Trail Review &amp; Scorecard
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Is the Khopra Ridge Trek Worth It?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              An honest review of Nepal&apos;s hidden gem. We break down the mountain views, difficulty, costs, lodge comfort, and how it compares to Poon Hill &amp; Mardi Himal.
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
                <h4 className="font-bold text-stone-900 text-base">Unbiased Local Trail Evaluation</h4>
                <p>
                  Maintained and verified by licensed Pokhara operator <strong>EMD Treks</strong> (License #8928-091). We guide hundreds of trekkers annually across Annapurna and share an honest assessment of Khopra Ridge&apos;s real trade-offs.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Nepal has more trekking routes than any one lifetime can cover, and choosing the wrong one wastes vacation days you can&apos;t get back. Is the Khopra Ridge Trek actually worth it, or is it just another trail riding on &quot;hidden gem&quot; marketing?
              </p>
              <p>
                Our overall verdict: <strong>Yes, the Khopra Ridge Trek is worth it</strong> — if you value close-up mountain panoramas, uncrowded trails, and authentic community village life more than five-star lodge luxuries.
              </p>
            </div>

            {/* Section 1: Khopra Scorecard */}
            <div id="scorecard" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge Trek Scorecard: Effort vs. Reward
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Evaluation Category</th>
                      <th className="py-4 px-4 sm:px-6">Rating</th>
                      <th className="py-4 px-4 sm:px-6">Trail Reality &amp; Justification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {scorecardRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800">{row.score}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Route Comparison */}
            <div id="route-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How Khopra Ridge Compares to Other Annapurna Treks
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Mountain Views</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Levels</th>
                      <th className="py-4 px-4 sm:px-6">Lodge Comfort</th>
                      <th className="py-4 px-4 sm:px-6">Overall Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisons.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.views}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowds}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.comfort}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: FAQ Accordion */}
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
                  Book Your Khopra Ridge Expedition
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Ready to experience Nepal&apos;s best offbeat mountain circuit? Speak to local specialists <strong>EMD Treks</strong> (NTB License #8928-091) for permit guidance, custom itineraries, and licensed guide bookings.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Trips
                  </Link>
                  <Link
                    href="/guides/which-annapurna-trek-to-choose"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Compare All Annapurna Treks
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
                <a href="#scorecard" className="block hover:text-emerald-600 transition">
                  • Khopra Trek Scorecard
                </a>
                <a href="#route-comparison" className="block hover:text-emerald-600 transition">
                  • Route Comparisons
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khopra-for-first-time-trekkers" className="hover:text-emerald-700 underline">
                      Khopra for First-Time Trekkers
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-budget-travelers" className="hover:text-emerald-700 underline">
                      Khopra for Budget Travelers
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-seniors" className="hover:text-emerald-700 underline">
                      Khopra for Seniors
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
