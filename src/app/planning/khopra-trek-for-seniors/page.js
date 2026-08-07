import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Seniors: Difficulty, Safety & Itinerary Guide",
  description:
    "Can seniors do the Khopra Ridge Trek? We break down the real difficulty, altitude, fitness needs, itinerary, and safety support for trekkers over 55.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-trek-for-seniors",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Seniors: Difficulty, Safety & Itinerary Guide",
    description:
      "Can seniors do the Khopra Ridge Trek? We break down the real difficulty, altitude, fitness needs, itinerary, and safety support for trekkers over 55.",
    url: "https://khopraridgetrek.com/planning/khopra-trek-for-seniors",
    type: "article",
  },
};

export default function KhopraTrekForSeniorsPage() {
  const summarySpecs = [
    { label: "Max Elevation", value: "3,660m (4,660m Optional Lake)" },
    { label: "Daily Walking", value: "4 to 6 Hours (Relaxed Pace)" },
    { label: "Recommended Itinerary", value: "9 Days (With Rest Buffers)" },
    { label: "Essential Support", value: "Licensed Guide & Porter Team" },
  ];

  const fitnessBenchmarks = [
    { test: "Flat-Ground Walking", standard: "8–10 km comfortably without extreme fatigue." },
    { test: "Stair Climbing", standard: "30 minutes continuous climbing at a steady pace." },
    { test: "Hill Walking", standard: "Weekly hiking with 300m+ moderate elevation gain." },
    { test: "Daypack Carrying", standard: "Comfortably carrying 5–7 kg daypack for several hours." },
    { test: "Next-Day Recovery", standard: "Able to walk again the next day without severe joint soreness." },
  ];

  const seniorItineraryRows = [
    { day: "Day 1", route: "Drive Pokhara to Ghandruk (1,940m)", hours: "1.5 hr drive + 1 hr walk", details: "Gentle orientation walk through Gurung stone village." },
    { day: "Day 2", route: "Ghandruk to Tadapani (2,630m)", hours: "5 hrs", details: "Steady uphill walk through shaded rhododendron forest." },
    { day: "Day 3", route: "Tadapani to Dobato (3,420m)", hours: "5–6 hrs", details: "Scenic ridgeline climb with expanding Annapurna South views." },
    { day: "Day 4", route: "Dobato to Bayeli Kharka (3,432m)", hours: "3–4 hrs", details: "Short, gentle alpine meadow walk for acclimatization." },
    { day: "Day 5", route: "Bayeli Kharka to Khopra Ridge (3,660m)", hours: "3–4 hrs", details: "Arrive at high ridge lodge for golden hour sunset over Dhaulagiri." },
    { day: "Day 6", route: "Rest & Exploration Day at Khopra Ridge", hours: "Rest Day", details: "Optional gentle hike or rest at lodge (Khayer Lake optional)." },
    { day: "Day 7", route: "Khopra Ridge to Swanta Village (2,200m)", hours: "5 hrs", details: "Descend through alpine pastures and farmland to Magar village." },
    { day: "Day 8", route: "Swanta to Roadhead & Drive to Pokhara", hours: "4 hrs walk + drive", details: "Final descent to jeep station and return drive to Pokhara." },
    { day: "Day 9", route: "Buffer Day for Weather / Rest", hours: "Flex Day", details: "Essential contingency buffer for weather or extra rest." },
  ];

  const comparisons = [
    { route: "Khopra Ridge Trek", alt: "~3,660m (4,660m Optional)", difficulty: "Moderate (Gentler Elevation)", crowd: "Low / Peaceful", suitability: "Excellent for Active Seniors" },
    { route: "Poon Hill Trek", alt: "~3,210m", difficulty: "Easy to Moderate", crowd: "Very High", suitability: "Good for Short Trips" },
    { route: "Annapurna Base Camp", alt: "~4,130m", difficulty: "Moderate to Hard", crowd: "High", suitability: "Requires Higher Fitness" },
  ];

  const faqs = [
    {
      q: "Can seniors over 60 complete the Khopra Ridge Trek?",
      a: "Yes. Many active seniors in their 60s and 70s complete the trek successfully every season. Success depends on a relaxed 9-day itinerary, steady pacing, and porter support.",
    },
    {
      q: "Is there an age limit for the Khopra Ridge Trek?",
      a: "No official age limit exists. What matters is overall cardiovascular fitness, joint health, and medical clearance from a doctor prior to travel.",
    },
    {
      q: "Can a 70-year-old do the Khopra Ridge Trek?",
      a: "Yes. Fit 70-year-olds regularly complete this route when using a licensed guide, hiring a porter to carry main bags, and maintaining a slow 'bistari' pace.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek for older adults?",
      a: "The trek is moderately difficult. Daily walking averages 4 to 6 hours over forest paths and stone staircases. Trekking poles are strongly recommended to protect knees on descents.",
    },
    {
      q: "What is the maximum altitude of the Khopra Ridge Trek?",
      a: "The main lodge at Khopra Ridge sits at 3,660 meters. The optional day hike to sacred Khayer Lake reaches 4,660 meters.",
    },
    {
      q: "How many hours do seniors walk each day?",
      a: "On a senior-tailored itinerary, daily walking is kept to 4 to 6 hours with generous rest stops for lunch and tea.",
    },
    {
      q: "Do seniors need a guide and porter?",
      a: "We strongly recommend both. A licensed guide monitors altitude health and pacing, while a porter removes the 12-15kg physical load from your back.",
    },
    {
      q: "Are teahouses comfortable for older travelers?",
      a: "Teahouses offer basic twin rooms with clean mattresses and warm dining halls. We recommend bringing a cold-rated sleeping bag (-10°C) and requesting hot water bags at night.",
    },
    {
      q: "Is the Khayer Lake side trip recommended for seniors?",
      a: "Khayer Lake (4,660m) is optional. We recommend it only for seniors who feel energetic and well-acclimatized at Khopra Ridge; skipping it does not lessen the core experience.",
    },
    {
      q: "How much does the Khopra Ridge Trek cost for seniors?",
      a: "Guided senior packages typically range from $40 to $65 per day, bundling ACAP/TIMS permits, private jeep transport, lodge meals, guide, and dedicated porter.",
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
            <span className="text-emerald-400">Khopra for Seniors</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Senior &amp; Active Older Adult Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Seniors
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete safety, difficulty &amp; planning guide for trekkers over 55. Real altitude advice, fitness benchmarks, 9-day relaxed itinerary, and porter support.
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
                🛡️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Senior Safety &amp; Pace Commitment</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We specialize in senior departures featuring 9-day relaxed pacing, daily pulse oximeter checks, dedicated porters, and emergency helicopter coverage.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Yes, many trekkers in their 60s and 70s complete the Khopra Ridge Trek successfully every season. What determines success isn&apos;t age — it is pacing, acclimatization, and the right support on the trail.
              </p>
              <p>
                The route avoids the extreme altitude pushes of Everest Base Camp while delivering eye-level mountain views of Dhaulagiri and Annapurna South. This guide provides an honest, safety-first breakdown for active older adults.
              </p>
            </div>

            {/* Section 1: Fitness Benchmarks */}
            <div id="fitness-benchmarks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Fitness Benchmarks for Senior Trekkers
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {fitnessBenchmarks.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950 w-1/3">{row.test}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600 font-medium">{row.standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Recommended 9-Day Senior Itinerary */}
            <div id="senior-itinerary" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Recommended 9-Day Senior Itinerary
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Day</th>
                      <th className="py-4 px-4 sm:px-6">Route &amp; Overnight Stop</th>
                      <th className="py-4 px-4 sm:px-6">Walking / Drive Hours</th>
                      <th className="py-4 px-4 sm:px-6">Senior Safety &amp; Comfort Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {seniorItineraryRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.day}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.hours}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Route Comparison Matrix */}
            <div id="comparisons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Senior Route Comparison Matrix
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Route</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Physical Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Density</th>
                      <th className="py-4 px-4 sm:px-6">Senior Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisons.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.alt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.difficulty}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowd}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.suitability}</td>
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
                  Senior Trek Specialists
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Senior Trek With Local Support
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  We specialize in senior departures featuring relaxed 9-day pacing, dedicated porters, and experienced guides trained in high-altitude monitoring. Contact <strong>EMD Treks</strong> (NTB License #8928-091) for a custom itinerary.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan Senior Itinerary
                  </Link>
                  <Link
                    href="/safety/is-khopra-trek-safe"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Safety Protocols
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
                <a href="#fitness-benchmarks" className="block hover:text-emerald-600 transition">
                  • Fitness Benchmarks
                </a>
                <a href="#senior-itinerary" className="block hover:text-emerald-600 transition">
                  • 9-Day Senior Itinerary
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
                    <Link href="/planning/khopra-for-families" className="hover:text-emerald-700 underline">
                      Khopra for Families
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-couples" className="hover:text-emerald-700 underline">
                      Khopra for Couples
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-budget-travelers" className="hover:text-emerald-700 underline">
                      Khopra for Budget Travelers
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
