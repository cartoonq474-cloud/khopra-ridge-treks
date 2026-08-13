import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Best Short Treks in Nepal",
  description: "Only have 3–7 days in Nepal? Compare Khopra Ridge, Poon Hill, Mardi Himal, Mohare Danda, and more to find the best short trek for your time, fitness, and.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/best-short-trek",
  },
  openGraph: {
    title: "Best Short Treks in Nepal: Compare the Top Annapurna Alternatives",
    description:
      "Only have 3–7 days in Nepal? Compare Khopra Ridge, Poon Hill, Mardi Himal, Mohare Danda, and more to find the best short trek for your time, fitness, and travel style.",
    url: "https://khopraridgetrek.com/guides/best-short-trek",
    type: "article",
  },
};

export default function BestShortTrekPage() {
  const quickStats = [
    { label: "Trip Durations", value: "1 to 7 Days (From Pokhara)" },
    { label: "Top Recommendation", value: "Khopra Ridge (Best Hidden Gem)" },
    { label: "Beginner Choice", value: "Poon Hill (3–4 Days)" },
    { label: "Scenic Ridge Choice", value: "Mardi Himal (4–5 Days)" },
  ];

  const comparisonRows = [
    { name: "Khopra Ridge", duration: "5–6 days", altitude: "~3,660 m / 4,660 m", difficulty: "Moderate", crowds: "Low", season: "Mar–May, Sep–Nov", bestFor: "Mountain views, fewer crowds, community lodges" },
    { name: "Poon Hill", duration: "3–4 days", altitude: "~3,210 m", difficulty: "Easy–Moderate", crowds: "High", season: "Oct–Nov, Mar–Apr", bestFor: "Beginners, classic sunrise views" },
    { name: "Mardi Himal", duration: "4–5 days", altitude: "~4,500 m", difficulty: "Moderate–Challenging", crowds: "Moderate", season: "Mar–May, Sep–Nov", bestFor: "Dramatic Fishtail close-up scenery" },
    { name: "Mohare Danda", duration: "4–5 days", altitude: "~3,300 m", difficulty: "Easy–Moderate", crowds: "Low", season: "Mar–May, Sep–Nov", bestFor: "Eco-trekking, village homestays" },
    { name: "Panchase Trek", duration: "2–3 days", altitude: "~2,517 m", difficulty: "Easy", crowds: "Low", season: "Year-round (Oct–Apr best)", bestFor: "Short, gentle forest hikes near Pokhara" },
    { name: "Kapuche Lake", duration: "4–5 days", altitude: "~3,700 m", difficulty: "Moderate–Challenging", crowds: "Very Low", season: "Mar–May, Sep–Nov", bestFor: "Glacial lake adventure, off-trail feel" },
    { name: "Khumai Danda", duration: "3–4 days", altitude: "~3,050 m", difficulty: "Easy–Moderate", crowds: "Very Low", season: "Year-round", bestFor: "Newer, uncrowded ridge viewpoints" },
    { name: "Australian Camp / Dhampus", duration: "1–2 days", altitude: "~2,100 m", difficulty: "Easy", crowds: "Moderate", season: "Year-round", bestFor: "Families, very limited time (1-2 days)" },
  ];

  const travelerProfiles = [
    { category: "Best for Beginners", winner: "Poon Hill (3–4 Days)", reason: "Well-established trail, predictable teahouses, manageable elevation." },
    { category: "Best Hidden Gem", winner: "Khopra Ridge (5–6 Days)", reason: "Spectacular 360° panoramas with 90% fewer crowds than Poon Hill." },
    { category: "Best Mountain Scenery", winner: "Mardi Himal (4–5 Days)", reason: "Stunning, narrow ridgeline walking directly under Machhapuchhre." },
    { category: "Best Eco-Trek", winner: "Mohare Danda (4–5 Days)", reason: "Community homestay model directly benefiting Nangi village schools." },
    { category: "Best Under 3 Days", winner: "Panchase or Australian Camp", reason: "Quick 1-3 day forest loops starting right from Lakeside Pokhara." },
    { category: "Best Glacial Offbeat", winner: "Kapuche Lake (4–5 Days)", reason: "Lowest-elevation glacial lake in Nepal with pristine wilderness." },
  ];

  const faqs = [
    {
      q: "What is the best short trek in Nepal for beginners?",
      a: "Poon Hill (3-4 days) is generally the best choice for first-time trekkers. It is shorter, lower in altitude (3,210m), and features well-maintained stone trails and frequent teahouses.",
    },
    {
      q: "Which Annapurna trek can be completed in less than a week?",
      a: "Nearly all top Annapurna alternative treks fit within a week, including Khopra Ridge (5-6 days), Poon Hill (3-4 days), Mardi Himal (4-5 days), and Mohare Danda (4-5 days).",
    },
    {
      q: "Is Khopra Ridge less crowded than Mardi Himal?",
      a: "Yes. Khopra Ridge consistently sees far fewer trekkers than Mardi Himal because it sits farther from commercial trail hubs and relies on a community lodge network.",
    },
    {
      q: "What is the easiest trek near Pokhara?",
      a: "Australian Camp & Dhampus (1-2 days) and Panchase Trek (2-3 days) are the easiest options near Pokhara, featuring gentle elevation gains suitable for families.",
    },
    {
      q: "Which short trek offers the best mountain views?",
      a: "Khopra Ridge offers the widest multi-peak panorama (taking in Dhaulagiri I, Annapurna South, and Nilgiri), while Mardi Himal offers the closest view of Fishtail (Machhapuchhre).",
    },
    {
      q: "Can beginners do the Khopra Ridge Trek?",
      a: "Yes, with reasonable hiking fitness. Khopra Ridge is rated moderate and is very achievable for fit beginners, especially with standard 5-6 day pacing.",
    },
    {
      q: "What is the best short trek in Nepal during winter?",
      a: "Khopra Ridge and Mardi Himal both offer crystal-clear skies and crisp visibility in winter (Dec-Feb), with significantly fewer hikers on the trail.",
    },
    {
      q: "Do I need permits for short treks in Nepal?",
      a: "Yes. Most short treks in the Annapurna region require an Annapurna Conservation Area Permit (ACAP) and a TIMS card, which can be arranged in Pokhara or Kathmandu.",
    },
    {
      q: "Which trek is better: Poon Hill or Mardi Himal?",
      a: "Poon Hill is easier, shorter, and better suited for first-timers. Mardi Himal offers more dramatic ridge walking and closer alpine views for hikers with basic fitness.",
    },
    {
      q: "What is the best hidden-gem trek in the Annapurna region?",
      a: "Khopra Ridge is widely considered the top hidden-gem trek, combining serious mountain views with quiet, uncrowded community-owned lodges.",
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
            <span className="text-emerald-400">Best Short Treks in Nepal</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Trail Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Best Short Treks in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Only have 3 to 7 days in Nepal? Compare Khopra Ridge, Poon Hill, Mardi Himal, Mohare Danda, and top Annapurna alternatives.
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
                🗺️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Annapurna Trek Comparisons</h4>
                <p>
                  Maintained and updated by licensed Pokhara trekking operator <strong>EMD Treks</strong> (License #8928-091). We guide short-duration departures across every route in the Annapurna Sanctuary.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;re searching for the best short trek in Nepal, you&apos;ve probably already discovered the problem: most famous routes are built for people with two or three weeks to spare. The good news is that you don&apos;t need that much time to see the Himalayas up close.
              </p>
              <p>
                The Annapurna region offers half a dozen short treks that pack in dramatic mountain views, quiet forest trails, and village life in under a week. Easy road access from Pokhara makes these 3–7 day itineraries highly reliable and stress-free.
              </p>
            </div>

            {/* Section 1: Quick Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top 8 Short Annapurna Treks Compared
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Crowds</th>
                      <th className="py-4 px-4 sm:px-6">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className={`hover:bg-stone-50 transition ${row.name.includes("Khopra") ? "bg-emerald-50/40" : ""}`}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.altitude}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.difficulty}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowds}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Traveler Category Recommendations */}
            <div id="traveler-profiles" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Selection Guide by Traveler Profile
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {travelerProfiles.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{item.category}</span>
                    <h3 className="font-bold text-stone-950 text-lg">{item.winner}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Deep Dives into Top 4 Short Treks */}
            <div id="top-treks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Detailed Analysis of the Top Short Treks
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl text-emerald-800">1. Khopra Ridge Trek (5–6 Days) — #1 Hidden Gem</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Khopra Ridge is our top pick for travelers seeking big mountain views without trail congestion. It combines village-owned co-op lodges in Ghandruk and Swanta with an elevated ridge walk at 3,660m directly facing Dhaulagiri I (8,167m). Fit trekkers can add the day hike to sacred Khayer Lake (4,660m).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">2. Poon Hill Trek (3–4 Days) — Classic Beginner Route</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Poon Hill is Nepal&apos;s most popular short circuit. Reaching 3,210m at sunrise, it offers a legendary mountain panorama. It is highly accessible with frequent commercial teahouses, though trail traffic during peak October/November can be heavy.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">3. Mardi Himal Trek (4–5 Days) — Dramatic Ridge Scenery</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Mardi Himal takes you up a narrow forest and alpine ridge to High Camp (~3,580m) and Viewpoint (~4,500m), placing you directly under Machhapuchhre (Fishtail). It is ideal for hikers wanting steep, thrilling ridge terrain in 4-5 days.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">4. Mohare Danda Trek (4–5 Days) — Eco &amp; Homestay Alternative</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Mohare Danda (3,300m) offers similar sunrise views to Poon Hill with a fraction of the crowds. It operates on a community homestay model anchored in Nangi village, directly funding local primary schools and health posts.
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
                  Licensed Pokhara Operators
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Find Your Perfect Short Trek in Nepal
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Not sure which short trek fits your schedule? Contact local Pokhara specialists <strong>EMD Treks</strong> (NTB License #8928-091) for personalized route recommendations based on your days, budget, and fitness.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Get Route Advice
                  </Link>
                  <Link
                    href="/tours"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Browse Short Trek Packages
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
                  • 8 Short Treks Compared
                </a>
                <a href="#traveler-profiles" className="block hover:text-emerald-600 transition">
                  • Selection by Traveler Type
                </a>
                <a href="#top-treks" className="block hover:text-emerald-600 transition">
                  • Top Trek Deep Dives
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Trek Comparisons</span>
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
