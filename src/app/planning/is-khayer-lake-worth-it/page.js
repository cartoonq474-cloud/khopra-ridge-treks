import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Is Khayer Lake Worth It? An Honest Effort vs. Reward Guide",
  description:
    "Is Khayer Lake worth the extra effort on the Khopra Ridge Trek? We break down the difficulty, altitude, scenery, and who should (or shouldn't) make the climb.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/is-khayer-lake-worth-it",
  },
  openGraph: {
    title: "Is Khayer Lake Worth It? An Honest Effort vs. Reward Guide",
    description:
      "Is Khayer Lake worth the extra effort on the Khopra Ridge Trek? We break down the difficulty, altitude, scenery, and who should (or shouldn't) make the climb.",
    url: "https://khopraridgetrek.com/planning/is-khayer-lake-worth-it",
    type: "article",
  },
};

export default function IsKhayerLakeWorthItPage() {
  const stats = [
    { label: "Overall Value Score", value: "4.5 / 5 (High Reward)" },
    { label: "Scenery & Panorama", value: "5 / 5 (Annapurna South Wall)" },
    { label: "Solitude & Quietness", value: "5 / 5 (Uncrowded Basin)" },
    { label: "Physical Difficulty", value: "4 / 5 (16km / 1,000m Gain)" },
  ];

  const scorecard = [
    { factor: "Difficulty", score: "4 / 5", notes: "Long 8-10 hr day hike, 4,660m altitude, rough moraine terrain" },
    { factor: "Scenery & Views", score: "5 / 5", notes: "Front-row wall view of Annapurna South (7,219m) and Dhaulagiri" },
    { factor: "Trail Solitude", score: "5 / 5", notes: "Far fewer trekkers compared to standard Annapurna routes" },
    { factor: "Cultural Value", score: "4 / 5", notes: "Sacred pilgrimage site of Khayer Baraha Temple for Magar/Gurung" },
    { factor: "Photography Potential", score: "5 / 5", notes: "Stunning morning mirror reflections and high-contrast peak light" },
    { factor: "Accessibility", score: "2 / 5", notes: "Requires high fitness; non-technical but physically demanding" },
    { factor: "Overall Worth Score", score: "4.5 / 5", notes: "Definitely worth it for fit, acclimatized trekkers with clear weather" },
  ];

  const faqs = [
    {
      q: "Is Khayer Lake worth visiting?",
      a: "For most reasonably fit trekkers with clear weather, yes. The combination of remote scenery, 3,000m mountain wall, cultural significance, and solitude makes it one of the most rewarding side trips in Nepal.",
    },
    {
      q: "Is Khayer Lake worth adding an extra day to the trek?",
      a: "If your schedule and fitness allow, yes. Staying an extra night at Khopra Ridge to complete the day hike offers views and wilderness solitude you cannot get from Khopra Ridge alone.",
    },
    {
      q: "How difficult is the Khayer Lake hike?",
      a: "It is a demanding day hike involving 16km round-trip distance, 1,000 meters of elevation gain, and loose moraine terrain ending at 4,660 meters.",
    },
    {
      q: "How long does the hike take round trip?",
      a: "Most trekkers complete the round trip from Khopra Ridge in 8 to 10 hours, starting at 5:00 AM.",
    },
    {
      q: "Can beginners hike to Khayer Lake?",
      a: "Yes, with proper acclimatization and realistic pacing. However, beginners should expect a genuinely strenuous physical day rather than a casual walk.",
    },
    {
      q: "What is the elevation of Khayer Lake?",
      a: "The lake sits at 4,660 meters (15,288 feet), which is high enough for mild AMS symptoms (headache, fatigue) if not properly acclimatized.",
    },
    {
      q: "Is the hike safe?",
      a: "It is safe for prepared, acclimatized trekkers. Weather monitoring and strict 12:30 PM turnaround rules are essential due to high-altitude exposure.",
    },
    {
      q: "What if the weather is cloudy or foggy?",
      a: "Low-visibility conditions significantly diminish the experience, as the mountain panorama is the primary draw. If bad weather sets in, skipping the hike or resting at Khopra Ridge is the smarter choice.",
    },
    {
      q: "Can I skip Khayer Lake on the Khopra Ridge Trek?",
      a: "Yes! Staying at Khopra Ridge (3,660m) or visiting Muldai Viewpoint (3,637m) are outstanding alternatives if you choose not to hike to the lake.",
    },
    {
      q: "Why is Khayer Lake considered sacred?",
      a: "The lake is home to Khayer Baraha Temple, where local Gurung and Magar communities have worshipped for generations during August Janai Purnima festivals.",
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
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Is It Worth It?</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Honest Effort vs. Reward Analysis
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Is Khayer Lake Worth It?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              An honest guide breakdown of the physical demands, altitude, scenery rewards, and who should (or shouldn&apos;t) make the climb to 4,660 meters.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
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
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We provide transparent advice to help you decide whether this 10-hour alpine excursion matches your fitness and travel goals.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;re planning the Khopra Ridge Trek, you&apos;ve probably asked yourself this question: is Khayer Lake worth the extra climb? It&apos;s a fair thing to wonder. The hike to this sacred alpine lake adds a long, physically demanding day to an already challenging itinerary, and not every trekker finishes it feeling the same way about it.
              </p>
              <p>
                Our honest answer: for most reasonably fit trekkers with clear weather, Khayer Lake is one of the most rewarding side trips on the entire route. But it isn&apos;t automatically the right choice for everyone.
              </p>
            </div>

            {/* Section 1: Short Answer & Suitability */}
            <div id="short-answer" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Short Answer: Who Is It Best For?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 space-y-3">
                  <h3 className="font-extrabold text-emerald-950 text-lg">👍 YES, It Is Worth It For:</h3>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-emerald-900 space-y-2">
                    <li>Fit trekkers comfortable with 8–10 hour high-altitude days</li>
                    <li>Photographers chasing clear morning reflections of Annapurna South</li>
                    <li>Travelers seeking pristine wilderness away from heavy crowd traffic</li>
                    <li>Pilgrims drawn by the spiritual history of Khayer Baraha Temple</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 space-y-3">
                  <h3 className="font-extrabold text-amber-950 text-lg">⚠️ NO, Consider Skipping If:</h3>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-amber-900 space-y-2">
                    <li>You are experiencing active AMS symptoms (headache, nausea)</li>
                    <li>Weather is heavily overcast or foggy (erasing peak views)</li>
                    <li>You have severe knee/joint pain on steep stone step descents</li>
                    <li>You are feeling completely exhausted from earlier trek days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Effort vs Reward Scorecard */}
            <div id="scorecard" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Effort vs. Reward Scorecard Table
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Evaluation Factor</th>
                      <th className="py-4 px-4 sm:px-6">Rating</th>
                      <th className="py-4 px-4 sm:px-6">Practical Trail Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {scorecard.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.factor}</td>
                        <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-700">{row.score}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Alternatives to Khayer Lake */}
            <div id="alternatives" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Outstanding Alternatives if You Decide Not to Hike
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">1. Relaxing at Khopra Ridge (3,660m)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Khopra Ridge itself offers one of Nepal&apos;s most dramatic panoramas overlooking Dhaulagiri and the Kali Gandaki Gorge. Spending a restful day at the community lodge is a wonderful choice.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">2. Excursion to Muldai Viewpoint</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    If staying near Dobato, <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 hover:underline font-semibold">Muldai Viewpoint (3,637m)</Link> offers a 360-degree sunrise view over 25+ peaks with far less physical demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Practical Decision Checklist */}
            <div id="decision-checklist" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Night-Before Decision Checklist
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm text-sm text-stone-700">
                <p className="font-bold text-stone-950">Ask yourself these 5 questions before setting your 4:30 AM alarm:</p>
                <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-stone-600">
                  <li>Am I acclimatized, with zero lingering headache or nausea?</li>
                  <li>Is tomorrow morning&apos;s weather forecast clear?</li>
                  <li>Do I have enough physical energy after previous trekking days?</li>
                  <li>Do I have proper cold-weather layers, gloves, and 3L water capacity?</li>
                  <li>Am I comfortable walking 8–10 hours across loose moraine scree?</li>
                </ol>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Is Khayer Lake Worth It?
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
                  Personalized Trek Consultation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Need Personalized Advice for Your Trek?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Still unsure if Khayer Lake matches your fitness level? Contact <strong>EMD Treks</strong> (Nepal Tourism License #8928-091) for honest, expert advice based on your travel season.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/khayer-lake-day-hike"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Day Hike Guide
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
                <a href="#short-answer" className="block hover:text-emerald-600 transition">
                  • The Short Answer &amp; Suitability
                </a>
                <a href="#scorecard" className="block hover:text-emerald-600 transition">
                  • Effort vs. Reward Scorecard
                </a>
                <a href="#alternatives" className="block hover:text-emerald-600 transition">
                  • Recommended Alternatives
                </a>
                <a href="#decision-checklist" className="block hover:text-emerald-600 transition">
                  • Night-Before Checklist
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Excursion Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khayer-lake-day-hike" className="hover:text-emerald-700 underline">
                      Khayer Lake Day Hike Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-route-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Route Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-weather" className="hover:text-emerald-700 underline">
                      Khayer Lake Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-700 underline">
                      Muldai Viewpoint Hub
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
