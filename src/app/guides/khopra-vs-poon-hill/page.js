import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge vs. Poon Hill Trek | Nepal Trek Guide",
  description: "Comparing Khopra Ridge and Poon Hill treks? We break down cost, difficulty, altitude, views, and crowds so you can choose the right Annapurna trek for you.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/khopra-vs-poon-hill",
  },
  openGraph: {
    title: "Khopra Ridge vs. Poon Hill Trek: Which Annapurna Trek Is Right for You?",
    description:
      "Comparing Khopra Ridge and Poon Hill treks? We break down cost, difficulty, altitude, views, and crowds so you can choose the right Annapurna trek for you.",
    url: "https://khopraridgetrek.com/guides/khopra-vs-poon-hill",
    type: "article",
  },
};

export default function KhopraVsPoonHillPage() {
  const quickStats = [
    { label: "Poon Hill Duration", value: "3 – 5 Days (30–35 km)" },
    { label: "Khopra Duration", value: "6 – 9 Days (55–65 km)" },
    { label: "Max Elevation", value: "Poon Hill: 3,210m | Khopra: 3,660m / 4,660m" },
    { label: "Crowd Contrast", value: "High Sunrise Crowds vs Quiet Ridgelines" },
  ];

  const comparisonRows = [
    { feature: "Duration", poonhill: "3–5 days", khopra: "6–9 days" },
    { feature: "Max Altitude", poonhill: "3,210 m (Poon Hill summit)", khopra: "3,660 m (Ridge); 4,660 m (Khayer Lake)" },
    { feature: "Total Distance", poonhill: "Roughly 30–35 km", khopra: "Roughly 55–65 km" },
    { feature: "Difficulty", poonhill: "Easy to moderate", khopra: "Moderate to challenging" },
    { feature: "Daily Walking Hours", poonhill: "4–6 hours / day", khopra: "5–7 hours / day" },
    { feature: "Accommodation", poonhill: "Commercial teahouses", khopra: "Community-owned lodges" },
    { feature: "Cost (Guided)", poonhill: "Lower (shorter trip, high operator competition)", khopra: "Higher (longer trip, specialized logistics)" },
    { feature: "Best Season", poonhill: "Spring & Autumn", khopra: "Spring & Autumn" },
    { feature: "Crowd Levels", poonhill: "High, especially at October sunrise", khopra: "Low to moderate" },
    { feature: "Best Suited For", poonhill: "First-timers, families, short 4-day trips", khopra: "Photographers, solitude seekers, fit hikers" },
  ];

  const prosCons = [
    {
      name: "Poon Hill Trek",
      pros: ["Short 3–5 day trip fits tight itineraries", "Highly accessible for beginners & families", "Iconic sunrise panorama over Dhaulagiri", "Extensive commercial teahouse amenities"],
      cons: ["Extremely crowded at sunrise platform", "Less cultural immersion due to commercialization", "Short 3,210m peak without high-altitude depth"],
    },
    {
      name: "Khopra Ridge Trek",
      pros: ["Peaceful trails with 95% fewer crowds", "Multi-day open ridgeline mountain views", "100% community-owned lodge model supporting schools", "Optional sacred Khayer Lake (4,660m) side trip"],
      cons: ["Requires 6–9 days & higher stamina", "Higher overall guided package cost", "Patchier cell service and simpler lodge menus"],
    },
  ];

  const faqs = [
    {
      q: "Which trek is better, Khopra Ridge or Poon Hill?",
      a: "Neither is objectively better — Poon Hill suits shorter 3-5 day trips and beginners, while Khopra Ridge suits trekkers with 6-9 days who want quieter trails and community lodge stays.",
    },
    {
      q: "Is Khopra Ridge harder than Poon Hill?",
      a: "Yes. Khopra Ridge involves more walking days (6-9 days vs 3-5 days), longer total distance (55-65 km vs 30-35 km), and higher elevation (3,660m ridge / 4,660m lake vs 3,210m).",
    },
    {
      q: "How many days do you need for each trek?",
      a: "Poon Hill typically takes 3 to 5 days, while Khopra Ridge usually takes 6 to 9 days (depending on whether you add the Khayer Lake side trip).",
    },
    {
      q: "Which trek has better mountain views?",
      a: "Poon Hill offers one concentrated 45-minute sunrise viewpoint moment. Khopra Ridge offers sustained, changing 360° panoramas across several days of ridge walking.",
    },
    {
      q: "Is Poon Hill suitable for beginners?",
      a: "Yes. Poon Hill is one of Nepal's most beginner-friendly treks and is well-suited to first-time hikers and families with a basic fitness level.",
    },
    {
      q: "Is Khopra Ridge less crowded than Poon Hill?",
      a: "Yes, significantly. Khopra Ridge sees only 15–25 hikers per day compared to hundreds gathered at Poon Hill's viewing tower every autumn morning.",
    },
    {
      q: "Is the Khayer Lake extension worth it?",
      a: "For fit trekkers comfortable with altitude, yes — Khayer Lake (4,660m) leads to a sacred high-altitude glacial lake right beneath Annapurna South.",
    },
    {
      q: "Which trek is cheaper overall?",
      a: "Poon Hill is generally more affordable overall simply because it takes fewer days, resulting in lower total accommodation, food, and guide costs.",
    },
    {
      q: "Can families and children do these treks?",
      a: "Poon Hill is very suitable for families with children due to shorter days and lower elevation. Khopra Ridge is better suited to older children or teens with prior hiking experience.",
    },
    {
      q: "What is the best season for both treks?",
      a: "Spring (March to May) for rhododendron blooms and Autumn (September to November) for the clearest mountain skies are ideal for both routes.",
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
            <span className="text-emerald-400">Khopra vs Poon Hill</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Classic vs Offbeat Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge vs. Poon Hill Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Which Annapurna trek is right for you? We break down duration, altitude, difficulty, views, crowds, and local lodge impact.
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
                ⛰️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Local Operator Trail Insights</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local guides lead trips across both Poon Hill and Khopra Ridge circuits.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Both the Khopra Ridge Trek and the Poon Hill Trek start in the same corner of the Annapurna Conservation Area, and both promise sweeping Himalayan panoramas without the time or altitude demands of a full Annapurna Circuit. That is usually where the similarities end.
              </p>
              <p>
                Poon Hill is short, accessible, and delivers a famous 3,210m sunrise view. Khopra Ridge trades convenience for solitude — multi-day open ridge walks, 95% fewer hikers, and village-owned community lodges.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs Poon Hill Side-by-Side
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Poon Hill Trek</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.feature}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.poonhill}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.khopra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Key Differences Breakdown */}
            <div id="key-differences" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Deep Dive: Key Differences
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🌄 Sunrise Viewpoint vs Multi-Day Open Ridge</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Poon Hill</strong> centers on a single 45-minute pre-dawn climb to a crowded 3,210m viewing tower. <strong>Khopra Ridge</strong> provides continuous, unobstructed multi-peak vistas (Dhaulagiri, Annapurna South, Nilgiri, Fishtail) along an elevated ridge for days.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏃 Stairs vs Ridge Endurance</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Poon Hill</strong>&apos;s primary effort is 3,300+ stone stairs through Ulleri on a 3-5 day itinerary. <strong>Khopra Ridge</strong> requires 6-9 days of sustained walking (5-7 hrs/day) climbing up to 3,660m at Khopra Danda and up to 4,660m at Khayer Lake.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏡 Private Teahouses vs Community Lodges</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Poon Hill</strong> relies on commercially operated private teahouses. <strong>Khopra Ridge</strong> operates on a village cooperative model where stay fees fund Magar village schools, clinics, and solar Wi-Fi infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Pros & Cons Comparison */}
            <div id="pros-cons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Pros &amp; Cons Comparison
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {prosCons.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-xl">{item.name}</h3>
                    
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">✓ Key Advantages</span>
                      <ul className="space-y-1 text-xs text-stone-600 list-disc pl-4">
                        {item.pros.map((p, pIdx) => (
                          <li key={pIdx}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700">✗ Trade-Offs</span>
                      <ul className="space-y-1 text-xs text-stone-600 list-disc pl-4">
                        {item.cons.map((c, cIdx) => (
                          <li key={cIdx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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
                  Trek Poon Hill or Khopra Ridge with EMD Treks
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your guided trek with licensed local specialists <strong>EMD Treks</strong> (NTB License #8928-091). We offer tailored itineraries combining Poon Hill and Khopra Ridge into one seamless loop.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Treks
                  </Link>
                  <Link
                    href="/tours/khopra-poon-hill-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Combined Poon Hill &amp; Khopra Tour
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
                <a href="#key-differences" className="block hover:text-emerald-600 transition">
                  • Key Differences
                </a>
                <a href="#pros-cons" className="block hover:text-emerald-600 transition">
                  • Pros &amp; Cons Comparison
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Comparison Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/khopra-vs-mardi-himal" className="hover:text-emerald-700 underline">
                      Khopra vs Mardi Himal
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/khopra-vs-annapurna-circuit" className="hover:text-emerald-700 underline">
                      Khopra vs Annapurna Circuit
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra Is Less Crowded
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/khopra-vs-poon-hill-views" className="hover:text-emerald-700 underline">
                      Khopra vs Poon Hill Views
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
