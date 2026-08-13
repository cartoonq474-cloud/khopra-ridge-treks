import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Which Annapurna Trek Should You Choose? A Complete",
  description: "Comparing Annapurna Base Camp, Circuit, Khopra Ridge, Mardi Himal, Poon Hill, and Mohare Danda? We break down difficulty, altitude, crowds, and cost to help.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/which-annapurna-trek-to-choose",
  },
  openGraph: {
    title: "Which Annapurna Trek Should You Choose? A Complete Comparison Guide",
    description:
      "Comparing Annapurna Base Camp, Circuit, Khopra Ridge, Mardi Himal, Poon Hill, and Mohare Danda? We break down difficulty, altitude, crowds, and cost to help you choose.",
    url: "https://khopraridgetrek.com/guides/which-annapurna-trek-to-choose",
    type: "article",
  },
};

export default function WhichAnnapurnaTrekToChoosePage() {
  const quickStats = [
    { label: "Major Routes Compared", value: "6 Annapurna Circuits" },
    { label: "Quiet Panorama Choice", value: "Khopra Ridge (6–9 Days)" },
    { label: "Classic High Pass", value: "Annapurna Circuit (5,416m)" },
    { label: "Shortest Beginner Choice", value: "Poon Hill (3–4 Days)" },
  ];

  const comparisonRows = [
    { name: "Annapurna Base Camp (ABC)", duration: "7–10 days", difficulty: "Moderate", altitude: "4,130 m", crowds: "High", season: "Mar–May, Sep–Nov", idealFor: "First-timers wanting the classic mountain amphitheater" },
    { name: "Annapurna Circuit", duration: "10–15 days", difficulty: "Strenuous", altitude: "5,416 m (Thorong La)", crowds: "Moderate–High", season: "Mar–May, Sep–Nov", idealFor: "Trekkers wanting a long, climatically diverse pass crossing" },
    { name: "Khopra Ridge (with Khayer Lake)", duration: "6–9 days", difficulty: "Challenging", altitude: "4,660 m", crowds: "Very Low", season: "Mar–May, Sep–Dec", idealFor: "Fit hikers wanting solitude and panoramic ridge views" },
    { name: "Mardi Himal", duration: "4–5 days", difficulty: "Moderate", altitude: "4,500 m", crowds: "High", season: "Mar–May, Sep–Nov", idealFor: "Trekkers with limited days wanting a steep, dramatic ridge" },
    { name: "Poon Hill", duration: "3–4 days", difficulty: "Easy–Moderate", altitude: "3,210 m", crowds: "Very High", season: "Year-round (Oct–Mar best)", idealFor: "Beginners, families, and travelers on a tight schedule" },
    { name: "Mohare Danda", duration: "5–7 days", difficulty: "Moderate", altitude: "3,300 m", crowds: "Low", season: "Mar–May, Sep–Nov", idealFor: "Travelers wanting village culture and eco-lodge trekking" },
  ];

  const quickPicks = [
    { target: "Classic Mountain Amphitheater", choice: "Annapurna Base Camp (ABC)", note: "Close-up 360° peak views inside the Sanctuary." },
    { target: "High Pass & Diverse Landscapes", choice: "Annapurna Circuit", note: "Cross Thorong La (5,416m) from subtropical to high desert." },
    { target: "Solitude + Unmatched Panoramas", choice: "Khopra Ridge Trek", note: "Direct Dhaulagiri views with 90% fewer crowds & co-op lodges." },
    { target: "Short & Steep High-Altitude Ridge", choice: "Mardi Himal Trek", note: "Reach 4,500m under Machhapuchhre in just 4-5 days." },
    { target: "Family-Friendly & Shortest Time", choice: "Poon Hill Trek", note: "Manageable 3,210m elevation with famous sunrise panorama." },
    { target: "Eco-Lodges & Slow Culture", choice: "Mohare Danda Trek", note: "Village homestay model benefiting rural schools in Nangi." },
  ];

  const faqs = [
    {
      q: "Which Annapurna trek is best for beginners?",
      a: "Poon Hill is the best starting point for beginners, with short daily stages, low altitude (3,210m), and well-established tea houses. Annapurna Base Camp (ABC) is a solid second option for beginners with a bit more time.",
    },
    {
      q: "Which Annapurna trek has the best mountain views?",
      a: "Annapurna Base Camp offers the closest, most immersive views inside the sanctuary. Khopra Ridge and Mardi Himal offer the widest panoramic ridge views, and Poon Hill delivers the best single sunrise viewpoint.",
    },
    {
      q: "What is the easiest trek in the Annapurna region?",
      a: "Poon Hill is the easiest of the six major routes, with a maximum altitude of 3,210 meters and gentle daily walking stages suited to most fitness levels.",
    },
    {
      q: "Which Annapurna trek is the hardest?",
      a: "The Annapurna Circuit is the most demanding overall due to its length (10-15 days) and the 5,416m Thorong La pass crossing. Khopra Ridge is the most physically demanding of the shorter routes.",
    },
    {
      q: "Is Annapurna Base Camp better than Mardi Himal?",
      a: "Neither is objectively better — they suit different priorities. ABC offers more time in the mountains and closer sanctuary views for trekkers with 7-10 days, while Mardi Himal delivers a similar high-altitude payoff in 4-5 days.",
    },
    {
      q: "Is Khopra Ridge less crowded than Poon Hill?",
      a: "Yes, significantly. Poon Hill is one of the busiest trails in the Annapurna region, while Khopra Ridge sees very light foot traffic even during peak October and November months.",
    },
    {
      q: "How many days do you need for an Annapurna trek?",
      a: "It depends on the route: 3–4 days for Poon Hill, 4–5 for Mardi Himal, 5–7 for Mohare Danda, 6–9 for Khopra Ridge, and 7–15 days for ABC or the Annapurna Circuit.",
    },
    {
      q: "Which Annapurna trek is best for families?",
      a: "Poon Hill is the best fit for families thanks to its short duration, low altitude, and comfortable tea houses. Mohare Danda is a great alternative for families wanting a quieter, village-focused trek.",
    },
    {
      q: "Do you need a guide for Annapurna trekking?",
      a: "It isn't legally required on every route, but we strongly recommend a guide for Khopra Ridge, Mohare Danda, and the Annapurna Circuit where trails are less marked and help is farther away.",
    },
    {
      q: "Which Annapurna trek has the lowest risk of altitude sickness?",
      a: "Poon Hill and Mohare Danda carry the lowest altitude sickness risk, since both stay under 3,300 meters throughout the trek.",
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
            <span className="text-emerald-400">Which Annapurna Trek to Choose</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Ultimate Regional Route Finder
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Which Annapurna Trek Should You Choose?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Comparing ABC, Annapurna Circuit, Khopra Ridge, Mardi Himal, Poon Hill, and Mohare Danda? We break down difficulty, altitude, crowds, and costs.
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
                <h4 className="font-bold text-stone-900 text-base">Firsthand Trail Experience</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local guides lead departures across all six Annapurna circuits.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                The Annapurna region is home to more trekking routes than any other part of Nepal, and that variety is exactly what makes choosing so difficult. A first-time visitor can spend hours comparing blog posts and itineraries without knowing whether to walk to Annapurna Base Camp, cross Thorong La, or head up Khopra Ridge.
              </p>
              <p>
                There is no single &quot;best Annapurna trek.&quot; The right route depends on your available days, fitness level, crowd tolerance, and what you want to see. This guide compares all six major Annapurna routes side-by-side.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                6 Major Annapurna Treks Compared Side-by-Side
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Max Alt.</th>
                      <th className="py-4 px-4 sm:px-6">Crowds</th>
                      <th className="py-4 px-4 sm:px-6">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className={`hover:bg-stone-50 transition ${row.name.includes("Khopra") ? "bg-emerald-50/40" : ""}`}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.difficulty}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.altitude}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.crowds}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.idealFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Quick Pick Matrix */}
            <div id="quick-picks" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Which Annapurna Trek Fits You at a Glance?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {quickPicks.map((pick, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">If You Want: {pick.target}</span>
                    <h3 className="font-bold text-stone-950 text-lg">👉 Choose {pick.choice}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{pick.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Detailed Route Overviews */}
            <div id="route-details" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Detailed Analysis of the 6 Annapurna Routes
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl text-emerald-800">Khopra Ridge Trek (6–9 Days) — Seclusion &amp; Panoramic Scale</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Khopra Ridge sits above the standard ABC corridor, offering direct eye-level sightlines to Dhaulagiri I and Annapurna South. It operates on 100% village-owned community co-op lodges funding local Magar primary schools. Fit trekkers can extend to sacred Khayer Lake (4,660m).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">Annapurna Base Camp (7–10 Days) — Classic Peak Amphitheater</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    ABC climbs through Modi Khola gorge to a 4,130m natural amphitheater surrounded by Annapurna South, Hiunchuli, and Fishtail. Highly popular with well-developed teahouse amenities.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">Annapurna Circuit (10–15 Days) — High Pass Expedition</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The classic long-distance pass crossing over Thorong La (5,416m), shifting from lush subtropical river valleys to arid Mustang high desert.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">Mardi Himal (4–5 Days) — Compact Ridge Walk</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Fast elevation gain along a forest ridge leading to High Camp (3,580m) and Viewpoint (4,500m) directly underneath Fishtail peak.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">Poon Hill (3–4 Days) — Entry-Level Sunrise View</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Short 3,210m circuit featuring Ghorepani stone stair climbs and a famous pre-dawn sunrise viewpoint over Dhaulagiri and Annapurna South.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">Mohare Danda (5–7 Days) — Eco &amp; Homestay Circuit</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Gentle 3,300m eco-trail focused on community homestays in Nangi and Swanta with low crowd density.
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
                  Licensed Pokhara Local Operators
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Need Help Choosing Your Annapurna Route?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Talk to our locally based planning team at <strong>EMD Treks</strong> (NTB License #8928-091). We will help you select the exact Annapurna route matching your fitness, available days, and travel style.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Get Personal Route Advice
                  </Link>
                  <Link
                    href="/tours"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Annapurna Packages
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
                  • 6 Routes Comparison Table
                </a>
                <a href="#quick-picks" className="block hover:text-emerald-600 transition">
                  • Quick Pick Selection Matrix
                </a>
                <a href="#route-details" className="block hover:text-emerald-600 transition">
                  • Detailed Route Overviews
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Route Comparisons</span>
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
                    <Link href="/guides/khopra-vs-annapurna-circuit" className="hover:text-emerald-700 underline">
                      Khopra vs Annapurna Circuit
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/khopra-vs-mohare-danda" className="hover:text-emerald-700 underline">
                      Khopra vs Mohare Danda
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
