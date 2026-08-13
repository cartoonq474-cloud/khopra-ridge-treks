import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Beginners | Nepal Trek Guide",
  description: "Wondering if you can handle the Khopra Ridge Trek as a first-timer? We break down real difficulty, altitude, cost, permits, and a 10-week training plan.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-trek-for-beginners",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Beginners: Difficulty, Itinerary, Cost & Preparation Guide",
    description:
      "Wondering if you can handle the Khopra Ridge Trek as a first-timer? We break down real difficulty, altitude, cost, permits, and a 10-week training plan.",
    url: "https://khopraridgetrek.com/planning/khopra-trek-for-beginners",
    type: "article",
  },
};

export default function KhopraTrekForBeginnersPage() {
  const summarySpecs = [
    { label: "Difficulty Grade", value: "Moderate (Novice Friendly)" },
    { label: "Daily Walking", value: "5 to 7 Hours" },
    { label: "Max Elevation", value: "3,660m (Ridge) / 4,660m (Lake)" },
    { label: "Best Seasons", value: "Autumn (Sep-Nov) & Spring (Mar-May)" },
  ];

  const elevationTableRows = [
    { day: "Day 1", stop: "Pokhara to Ghandruk", alt: "~1,940m", hours: "4–5 hrs", terrain: "Drive to Kimche, stone staircases up to Gurung village." },
    { day: "Day 2", stop: "Ghandruk to Tadapani", alt: "~2,630m", hours: "5–6 hrs", terrain: "Uphill through dense rhododendron & mossy oak forests." },
    { day: "Day 3", stop: "Tadapani to Dobato", alt: "~3,420m", hours: "6–7 hrs", terrain: "Exposed ridgeline climb with expanding mountain views." },
    { day: "Day 4", stop: "Dobato to Khopra Ridge", alt: "~3,660m", hours: "3–4 hrs", terrain: "Alpine ridge walk ending at community lodge wall." },
    { day: "Day 5", stop: "Khopra to Khayer Lake (Optional)", alt: "~4,660m", hours: "6–7 hrs RT", terrain: "High-altitude glacial basin day hike (sacred shrine)." },
    { day: "Day 6–7", stop: "Descent via Swanta / Ghorepani", alt: "Varies", hours: "5–6 hrs/day", terrain: "Descend through terraced farms to Pokhara roadhead." },
  ];

  const trainingRoutine = [
    { week: "Weeks 1–4 (Cardio Foundation)", focus: "Stairmaster & Fast Walking", desc: "Build cardiovascular baseline. Hike local hills or use a stairmaster for 45 minutes, three times a week, while carrying a light 5kg backpack to start adapting your body to load-bearing movement." },
    { week: "Weeks 5–8 (Strength & Endurance)", focus: "Leg Strength & Carrying Load", desc: "Increase your training pack weight to 8kg and add squats, lunges, and calf raises to build the leg strength that protects your knees on long descents. Take longer weekend hikes of 4 to 6 hours." },
    { week: "Weeks 9–10 (Trek Simulation & Recovery)", focus: "HIIT & Back-to-Back Hikes", desc: "Incorporate high-intensity interval training to improve lung capacity and practice slow, rhythmic breathing. Stretch daily and run one back-to-back weekend hike simulation before joint rest." }
  ];

  const comparisonRows = [
    { route: "Poon Hill Trek", duration: "2–4 Days", alt: "3,210m", crowd: "Very High", difficulty: "Easy – Moderate" },
    { route: "Mardi Himal Trek", duration: "5–6 Days", alt: "4,500m", crowd: "Moderate", difficulty: "Moderate (Steep Ridgelines)" },
    { route: "Khopra Ridge Trek", duration: "7–9 Days", alt: "3,660m / 4,660m", crowd: "Low (Uncrowded)", difficulty: "Moderate (Novice Friendly)" },
    { route: "Annapurna Circuit", duration: "12–16 Days", alt: "5,416m", crowd: "High", difficulty: "Strenuous (High Pass)" },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek suitable for complete beginners?",
      a: "Yes. Most reasonably active beginners with basic cardio training can complete the Khopra Ridge Trek. It is a non-technical walking route with clear trails and community lodges.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek?",
      a: "It is rated moderate — noticeably harder than Poon Hill due to longer daily walks (5-7 hrs) and higher altitude (3,660m), but easier and safer than Everest Base Camp or the Annapurna Circuit.",
    },
    {
      q: "How many days does the Khopra Ridge Trek take?",
      a: "Most itineraries run 7 to 9 days round-trip from Pokhara. We recommend the 9-day version for first-time Himalayan trekkers to allow conservative acclimatization.",
    },
    {
      q: "What is the highest altitude on the trek?",
      a: "The main community lodge on Khopra Ridge sits at 3,660m (12,000 ft). The optional day hike to sacred Khayer Lake reaches 4,660m (15,288 ft).",
    },
    {
      q: "Can beginners hike to Khayer Lake?",
      a: "Yes, provided you feel well-acclimatized and energetic on Day 5. However, Khayer Lake is optional, so beginners can choose to rest at Khopra Ridge instead.",
    },
    {
      q: "Do I need a guide for the Khopra Ridge Trek?",
      a: "Yes. Current TIMS regulations require trekkers in this region to trek with a licensed local guide. Hiring a guide also provides vital safety, altitude monitoring, and lodge arrangements.",
    },
    {
      q: "How much does the Khopra Ridge Trek cost?",
      a: "Guided packages typically cost $35–$55 per day, covering ACAP/TIMS permits, lodge accommodation, 3 daily meals, a licensed guide, and porter gear support.",
    },
    {
      q: "What permits are required for the Khopra Ridge Trek?",
      a: "You need an ACAP (Annapurna Conservation Area Permit) and a TIMS card (Trekkers' Information Management System), both arranged by registered agencies in Pokhara.",
    },
    {
      q: "Is there Wi-Fi and electricity on the Khopra Ridge Trek?",
      a: "Yes. Most lodges offer solar charging and Wi-Fi for small per-use fees ($1–$3), though signal strength becomes weaker at higher elevation stops like Bayeli and Khopra.",
    },
    {
      q: "What is the best time to do the Khopra Ridge Trek?",
      a: "Autumn (September to November) offers the crispest mountain clarity. Spring (March to May) features blooming red rhododendron forests with mild temperatures.",
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
            <span className="text-emerald-400">Khopra Trek for Beginners</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive First-Timer Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Beginners
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete difficulty, itinerary, cost &amp; preparation guide. Real altitude breakdown, permits, and a 10-week pre-trek training plan.
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
                🥾
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified First-Timer Trail Operations</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We design 7 to 9-day beginner itineraries with conservative ascents, licensed guides, and porter gear support.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you have never done a Himalayan trek before, the Khopra Ridge Trek is one of the first names that came up in your research — usually followed by the phrase &quot;beginner-friendly.&quot; That label is fair, but it deserves clear context.
              </p>
              <p>
                The trail climbs from 1,940m to 3,660m over several days, with an optional day hike push to 4,660m at Khayer Lake. It is a non-technical walking route with regular community lodges, making it ideal for active first-timers who prepare properly.
              </p>
            </div>

            {/* Section 1: Route Elevation Table */}
            <div id="elevation-profile" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Day-by-Day Elevation &amp; Route Profile
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Day &amp; Stop</th>
                      <th className="py-4 px-4 sm:px-6">Approx. Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Walking Hours</th>
                      <th className="py-4 px-4 sm:px-6">Terrain Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {elevationTableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.day}: {row.stop}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.alt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.hours}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.terrain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: 10-Week Beginner Training Plan */}
            <div id="training-plan" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                10-Week Pre-Trek Training Routine
              </h2>

              <div className="space-y-4">
                {trainingRoutine.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{item.week}</span>
                    <h3 className="font-bold text-stone-950 text-lg">{item.focus}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Trek Comparison Table */}
            <div id="comparisons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs. Other Nepal Treks
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Density</th>
                      <th className="py-4 px-4 sm:px-6">Overall Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.alt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowd}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  Plan Your Beginner Khopra Trek Today
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  We specialize in guided beginner-friendly departures with permit handling, patient pacing, and porter gear support. Contact <strong>EMD Treks</strong> (NTB License #8928-091) to start planning.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire for Beginner Packages
                  </Link>
                  <Link
                    href="/planning/khopra-for-first-time-trekkers"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read First-Timer Guide
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
                <a href="#elevation-profile" className="block hover:text-emerald-600 transition">
                  • Elevation &amp; Route Profile
                </a>
                <a href="#training-plan" className="block hover:text-emerald-600 transition">
                  • 10-Week Training Plan
                </a>
                <a href="#comparisons" className="block hover:text-emerald-600 transition">
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
                    <Link href="/planning/khopra-for-families" className="hover:text-emerald-700 underline">
                      Khopra for Families
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-couples" className="hover:text-emerald-700 underline">
                      Khopra for Couples
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
