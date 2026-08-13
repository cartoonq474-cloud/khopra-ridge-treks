import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge vs. Mohare Danda Trek | Nepal Trek Guide",
  description: "Comparing Khopra Ridge and Mohare Danda treks? We break down difficulty, altitude, views, and community culture to help you pick the right Annapurna trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/khopra-vs-mohare-danda",
  },
  openGraph: {
    title: "Khopra Ridge vs. Mohare Danda Trek: Which Annapurna Trek Should You Choose?",
    description:
      "Comparing Khopra Ridge and Mohare Danda treks? We break down difficulty, altitude, views, and community culture to help you pick the right Annapurna trek.",
    url: "https://khopraridgetrek.com/guides/khopra-vs-mohare-danda",
    type: "article",
  },
};

export default function KhopraVsMohareDandaPage() {
  const quickStats = [
    { label: "Khopra Duration", value: "6 – 8 Days (45–55 km)" },
    { label: "Mohare Duration", value: "4 – 5 Days (25–35 km)" },
    { label: "Max Elevation", value: "Khopra: 3,660m / 4,660m | Mohare: 3,300m" },
    { label: "Community Model", value: "Village Co-op Lodges vs Homestays" },
  ];

  const comparisonRows = [
    { feature: "Typical Duration", khopra: "6–8 days", mohare: "4–5 days" },
    { feature: "Approximate Distance", khopra: "45–55 km round trip", mohare: "25–35 km round trip" },
    { feature: "Highest Altitude", khopra: "3,660 m (Ridge); 4,660 m (Khayer Lake)", mohare: "3,300 m (Mohare Danda Peak)" },
    { feature: "Daily Walking Hours", khopra: "5–7 hours / day", mohare: "3–5 hours / day" },
    { feature: "Difficulty", khopra: "Moderate to challenging", mohare: "Easy to moderate" },
    { feature: "Accommodation", khopra: "Community co-op lodges", mohare: "Community homestays & eco-lodges" },
    { feature: "Best Season", khopra: "March–May, Sept–Nov", mohare: "Year-round (Best Mar–May, Sept–Nov)" },
    { feature: "Mountain Highlights", khopra: "Dhaulagiri I, Annapurna South, Nilgiri", mohare: "Dhaulagiri, Annapurna Range, Fishtail" },
    { feature: "Trail Type", khopra: "Open ridge walk, forest, high pasture", mohare: "Forest trail, terraced farmland, ridge viewpoint" },
    { feature: "Ideal For", khopra: "Experienced hikers, photographers, longer trips", mohare: "Beginners, families, seniors, short breaks" },
  ];

  const decisionCards = [
    {
      title: "Choose Khopra Ridge If...",
      points: [
        "You want higher altitude and a bigger physical challenge.",
        "You are comfortable with 5–7 hour trekking days.",
        "You want the option to extend to sacred Khayer Lake (4,660m).",
        "You have 6 or more days available in your schedule.",
        "You want fewer crowds and a stronger sense of high-alpine remoteness.",
      ],
      tag: "Best for Experienced Hikers & Panoramic Scale",
    },
    {
      title: "Choose Mohare Danda If...",
      points: [
        "You are a beginner, traveling with family, or short on time.",
        "You want a strong mountain payoff without demanding terrain.",
        "You prefer authentic homestay-style cultural immersion in Nangi.",
        "You have 4–5 days available for a short break.",
        "You want a lower-altitude trek with minimal AMS concerns.",
      ],
      tag: "Best for Beginners, Families & Short Homestay Trips",
    },
  ];

  const faqs = [
    {
      q: "Which trek is better, Khopra Ridge or Mohare Danda?",
      a: "Neither is universally better — it depends on your fitness, schedule, and goals. Khopra Ridge suits experienced trekkers seeking higher altitude and bigger views, while Mohare Danda suits beginners, families, and shorter trips.",
    },
    {
      q: "Is Mohare Danda easier than Khopra Ridge?",
      a: "Yes. Mohare Danda involves shorter daily distances (25-35 km vs 45-55 km), lower altitude (3,300m vs 3,660m/4,660m), and gentler terrain, making it more accessible for first-time trekkers.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek?",
      a: "Khopra Ridge is a moderate to challenging trek, with steep ascents, longer trekking days (5-7 hrs), and exposed ridge sections. Reasonable fitness and hiking experience are recommended.",
    },
    {
      q: "Which trek has better mountain views?",
      a: "Both offer strong Annapurna panoramas. Khopra Ridge sits closer to Dhaulagiri I and Annapurna South with an open ridge view, while Mohare Danda offers a wider sweep including Machhapuchhre.",
    },
    {
      q: "Is altitude sickness a concern on either trek?",
      a: "Altitude sickness risk is minimal on Mohare Danda (max 3,300m). Khopra Ridge carries slightly more risk, particularly if you extend to Khayer Lake at 4,660m, where proper pacing matters.",
    },
    {
      q: "How many days does the Mohare Danda Trek take?",
      a: "Most Mohare Danda itineraries run 4 to 5 days, covering roughly 25 to 35 kilometers round trip from Pokhara.",
    },
    {
      q: "Which trek is better for beginners?",
      a: "Mohare Danda is the better choice for beginners, thanks to its gentler terrain, shorter walking days (3-5 hrs), and lower elevation profile.",
    },
    {
      q: "Are Mohare Danda and Khopra Ridge crowded?",
      a: "Both are far less crowded than Poon Hill or Annapurna Base Camp, though Khopra Ridge generally sees fewer trekkers due to its longer, more demanding itinerary.",
    },
    {
      q: "Which trek offers the best sunrise views?",
      a: "Khopra Ridge's open plateau delivers a more dramatic, unobstructed sunrise over Dhaulagiri. Mohare Danda's viewpoint offers a similarly rewarding sunrise with a shorter pre-dawn climb.",
    },
    {
      q: "Can I combine Mohare Danda and Khopra Ridge in one itinerary?",
      a: "Yes! Many trekkers link the two via Ghorepani for a 10-day-plus itinerary that captures both the ridge scenery of Khopra and the community homestay culture of Mohare Danda.",
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
            <span className="text-emerald-400">Khopra vs Mohare Danda</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Community Eco-Trek Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge vs. Mohare Danda Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Which Annapurna trek should you choose? We compare difficulty, altitude, views, community culture, and itinerary options.
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
                🌱
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Community Eco-Tourism Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We guide departures across both Khopra Ridge and Mohare Danda community networks.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;ve been researching the Annapurna region beyond the crowded Poon Hill trail, you&apos;ve probably come across two names again and again: Khopra Ridge and Mohare Danda. Both are community-run treks. Both promise mountain panoramas without the crowds. And both routes wind through Magar and Gurung villages that run their own lodges.
              </p>
              <p>
                Khopra Ridge climbs higher (3,660m / 4,660m), pushes harder, and rewards you with a wide-open ridge walk facing Dhaulagiri. Mohare Danda stays lower (3,300m), moves at a gentler pace, and leans into its role as a family-friendly community-homestay showcase.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khopra Ridge vs Mohare Danda Side-by-Side
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Feature</th>
                      <th className="py-4 px-4 sm:px-6">Khopra Ridge Trek</th>
                      <th className="py-4 px-4 sm:px-6">Mohare Danda Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.feature}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800 bg-emerald-50/30">{row.khopra}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.mohare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Decision Framework */}
            <div id="decision-framework" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Decision Framework: Which Trek Fits You Best?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {decisionCards.map((card, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <h3 className="font-bold text-stone-950 text-xl">{card.title}</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600 list-disc pl-5 leading-relaxed">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Deep Dives (Culture, Views, Altitude) */}
            <div id="deep-dives" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Deep Dive: Accommodation, Altitude &amp; Views
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏘️ Homestays vs Community Co-op Lodges</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Mohare Danda</strong> pioneered community-based homestays in Nangi Village (driven by Mahabir Pun&apos;s wireless project). <strong>Khopra Ridge</strong> operates on a village cooperative lodge system where stay revenues fund local primary schools and health clinics in Swanta and Paudwar.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🏔️ Dhaulagiri Proximity vs Panoramic Sweep</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Khopra Ridge</strong> sits face-to-face with Dhaulagiri I (8,167m) across the deep Kali Gandaki Gorge. <strong>Mohare Danda</strong> offers a wider panorama including Dhaulagiri, Annapurna South, and Machhapuchhre (Fishtail) from a gentler 3,300m summit.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-lg">🔗 Combining Both Routes into One Trek</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    If you have 10+ days, you don&apos;t have to choose! We frequently link Mohare Danda and Khopra Ridge via Ghorepani, giving trekkers both the homestay culture of Nangi and the high-alpine ridge walk to Khayer Lake (4,660m).
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
                  Community Eco-Trek Operators
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Experience Community Eco-Tourism?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your guided trek with licensed local specialists <strong>EMD Treks</strong> (NTB License #8928-091). We organize custom departures for Khopra Ridge, Mohare Danda, or combined multi-community loops.
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
                    Combined Khopra &amp; Mohare Tour
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
                <a href="#decision-framework" className="block hover:text-emerald-600 transition">
                  • Selection Framework
                </a>
                <a href="#deep-dives" className="block hover:text-emerald-600 transition">
                  • Homestays, Altitude &amp; Combining
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
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
