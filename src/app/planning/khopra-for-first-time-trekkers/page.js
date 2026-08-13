import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for First-Time Trekkers | Nepal Trek Guide",
  description: "Planning your first Himalayan trek? Our complete guide to the Khopra Ridge Trek covers difficulty, cost, itinerary, altitude, and packing for beginners.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-for-first-time-trekkers",
  },
  openGraph: {
    title: "Khopra Ridge Trek for First-Time Trekkers: The Complete Beginner's Guide",
    description:
      "Planning your first Himalayan trek? Our complete guide to the Khopra Ridge Trek covers difficulty, cost, itinerary, altitude, and packing for beginners.",
    url: "https://khopraridgetrek.com/planning/khopra-for-first-time-trekkers",
    type: "article",
  },
};

export default function KhopraForFirstTimeTrekkersPage() {
  const quickStats = [
    { label: "Max Altitude", value: "3,660m (Khopra Ridge Viewpoint)" },
    { label: "Daily Trek Hours", value: "5 – 7 Hours (Gentle Pace)" },
    { label: "Beginner Fitness Level", value: "Moderate (Weekend Hiker / Active)" },
    { label: "Recommended Pace", value: "7 – 9 Days (With Rest Buffers)" },
  ];

  const beginnerComparisonRows = [
    { route: "Khopra Ridge Trek", maxAlt: "3,660m", duration: "7–9 Days", crowds: "Low / Peaceful", difficulty: "Moderate (Ideal for Active Beginners)" },
    { route: "Poon Hill Trek", maxAlt: "3,210m", duration: "4–5 Days", crowds: "Very High", difficulty: "Easy – Moderate (Shortest Route)" },
    { route: "Annapurna Base Camp", maxAlt: "4,130m", duration: "10–12 Days", crowds: "High", difficulty: "Moderate – Strenuous" },
    { route: "Everest Base Camp", maxAlt: "5,364m", duration: "12–14 Days", crowds: "Extremely High", difficulty: "Strenuous (Extreme Altitude)" },
  ];

  const beginnerRules = [
    { rule: "1. Hire a Licensed Local Guide", desc: "For your first Himalayan trek, a licensed guide manages navigation, teahouse bookings, TIMS/ACAP checks, and monitors early AMS symptoms." },
    { rule: "2. Walk 'Bistarai, Bistarai'", desc: "The golden rule in Nepal is to walk slowly ('slowly, slowly'). Rushing leads to rapid fatigue and raises Acute Mountain Sickness (AMS) risks." },
    { rule: "3. Break In Your Boots Early", desc: "Never wear brand-new boots straight out of the box. Buy waterproof hiking boots 4 to 6 weeks before your trip and wear them on weekend walks." },
    { rule: "4. Hire a Local Porter", desc: "A porter carries your main 12-15kg bag, allowing you to hike with a light 15-20L daypack. This vastly improves daily comfort for first-timers." },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek suitable for complete beginners?",
      a: "Yes. Most reasonably fit beginners with no prior high-altitude experience can complete the Khopra Ridge Trek, provided they prepare with light cardio and walk at an unhurried pace.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek?",
      a: "It is moderately difficult, involving 5–7 hours of walking per day on forest trails and stone steps. It is physical, but far more forgiving than Everest Base Camp or the Annapurna Circuit.",
    },
    {
      q: "How many days does the Khopra Ridge Trek take?",
      a: "A standard beginner itinerary takes 7 to 9 days round-trip from Pokhara, which includes rest buffers and optional side hikes like Muldai Viewpoint or Khayer Lake.",
    },
    {
      q: "What is the highest altitude on the trek?",
      a: "The Khopra Ridge viewpoint and lodge sit at 3,660 meters (12,000 feet). The optional day hike to Khayer Lake reaches 4,660 meters (15,288 feet).",
    },
    {
      q: "Do beginners need a guide for the Khopra Ridge Trek?",
      a: "We strongly recommend a licensed local guide for first-time Himalayan trekkers. A guide provides safety, navigation security, altitude monitoring, and cultural connection.",
    },
    {
      q: "How much does the Khopra Ridge Trek cost?",
      a: "Independent backpackers spend roughly $15–$25 per day on-trail. Guided beginner packages generally run $35–$55 per day, which includes permits, accommodation, meals, guide, and porter.",
    },
    {
      q: "What permits are required?",
      a: "You need an ACAP permit (Annapurna Conservation Area Permit) and a TIMS card (Trekkers' Information Management System), which can be issued in Pokhara or Kathmandu.",
    },
    {
      q: "What is the best time to do the trek?",
      a: "Spring (March to May) features blooming rhododendron forests. Autumn (September to November) offers crystal-clear skies and crisp mountain clarity.",
    },
    {
      q: "Is the Khayer Lake side trip worth it for beginners?",
      a: "It is a rewarding high-altitude day hike (4,660m), but it is optional. Beginners feeling tired or unacclimatized can skip it and still enjoy the full Khopra Ridge panorama.",
    },
    {
      q: "Can older travelers and teenagers complete the trek?",
      a: "Yes. Active seniors and families with teenagers regularly complete this trek safely, provided daily walking distances are kept to 4–6 hours.",
    },
    {
      q: "Is Khopra Ridge safer than Everest Base Camp for first-timers?",
      a: "Yes. The lower maximum altitude (3,660m vs 5,364m) significantly reduces AMS risks, and road access from Pokhara makes logistics simpler.",
    },
    {
      q: "What footwear and gear should I pack?",
      a: "Pack broken-in waterproof hiking boots, moisture-wicking layers, a fleece, a down jacket, a rain shell, trekking poles, a headlamp, and a warm beanie.",
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
            <span className="text-emerald-400">Khopra for Beginners</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Beginner Field Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for First-Time Trekkers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              The complete beginner&apos;s guide. Everything you need to know about difficulty, altitude safety, itineraries, packing, permits, and cost.
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
                🏔️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Beginner-Focused Local Guidance</h4>
                <p>
                  Maintained and verified by licensed Pokhara operator <strong>EMD Treks</strong> (License #8928-091). We specialize in first-time Himalayan departures with patient pacing, porter assistance, and 24/7 altitude safety monitoring.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you are researching your first trek in Nepal, you have probably run into the same issue: most guides assume you already know high-altitude terminology and skip basic practical advice. This guide is different.
              </p>
              <p>
                The short answer is yes: most reasonably fit beginners can complete the Khopra Ridge Trek with proper preparation. It delivers soaring mountain views of Dhaulagiri and Annapurna South, warm community lodges, and quiet forest trails without the extreme altitude or crowds of Everest Base Camp.
              </p>
            </div>

            {/* Section 1: Beginner Trek Comparison Table */}
            <div id="route-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs. Other Nepal Beginner Routes
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Level</th>
                      <th className="py-4 px-4 sm:px-6">Beginner Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {beginnerComparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.route}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.maxAlt}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowds}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Essential Golden Rules for First-Timers */}
            <div id="golden-rules" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                4 Golden Rules for First-Time Himalayan Trekkers
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {beginnerRules.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-lg">{item.rule}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
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
                  First-Time Trek Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your First Himalayan Trek With Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Have questions about altitude, training, or hiring a guide? Contact local specialists <strong>EMD Treks</strong> (NTB License #8928-091) for friendly, step-by-step guidance tailored to first-time trekkers.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Speak with a Trekking Guide
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Beginner Itineraries
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
                <a href="#route-comparison" className="block hover:text-emerald-600 transition">
                  • Route Comparison Table
                </a>
                <a href="#golden-rules" className="block hover:text-emerald-600 transition">
                  • 4 Golden Rules for Beginners
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
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
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers
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
