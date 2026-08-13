import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Autumn Trekking on Khopra Ridge (Sept–Nov) | Nepal Trek Guide",
  description: "Planning an autumn trek on Khopra Ridge? Compare September, October, and November weather, mountain views, trail conditions, and packing advice from local guides.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/autumn-season-khopra",
  },
  openGraph: {
    title: "Autumn Trekking on Khopra Ridge (Sept–Nov): Weather, Views & Trail Guide",
    description:
      "Planning an autumn trek on Khopra Ridge? Compare September, October, and November weather, mountain views, trail conditions, and packing advice from local guides.",
    url: "https://khopraridgetrek.com/weather/autumn-season-khopra",
    type: "article",
  },
};

export default function AutumnSeasonKhopraPage() {
  const quickStats = [
    { label: "Season Window", value: "September – November (Post-Monsoon)" },
    { label: "Peak Month", value: "October (Clearest Weather of the Year)" },
    { label: "Daytime Temp Range", value: "10°C to 18°C (Khopra Ridge)" },
    { label: "Khayer Lake Access", value: "Optimal (Mirror Lake Reflections)" },
  ];

  const autumnComparison = [
    {
      factor: "Weather Stability",
      sept: "Improving; late monsoon rain early month",
      oct: "Most stable & predictable of the year",
      nov: "Stable & dry; colder wind fronts",
    },
    {
      factor: "Daytime Comfort",
      sept: "Warm, occasionally humid",
      oct: "Comfortable, mild walking temps",
      nov: "Crisp & cool",
    },
    {
      factor: "Nighttime Temps",
      sept: "Mild to cool (5°C to 10°C)",
      oct: "Cool; dropping (-5°C to 5°C)",
      nov: "Cold (-10°C to -2°C at ridge)",
    },
    {
      factor: "Mountain Visibility",
      sept: "Improving through the month",
      oct: "Exceptional / Flawless post-monsoon",
      nov: "Exceptional; dry cold clarity",
    },
    {
      factor: "Trail Conditions",
      sept: "Some mud early on; drying out",
      oct: "Firm, dry & well-maintained",
      nov: "Dry & firm; frosty shaded patches",
    },
    {
      factor: "Crowd Levels",
      sept: "Lighter / Moderate",
      oct: "Busiest month of the year",
      nov: "Moderate; quieter than October",
    },
    {
      factor: "Lodge Availability",
      sept: "Good; easy to secure rooms",
      oct: "Limited without advance booking",
      nov: "Good; easier than October",
    },
    {
      factor: "Best Recommended For",
      sept: "Lush greenery & fewer crowds",
      oct: "First-timers & peak photography",
      nov: "Cold-clear views & quieter trails",
    },
  ];

  const monthProfiles = [
    {
      month: "September (Post-Monsoon Clearing)",
      badge: "Lush Scenery & Quiet Trails",
      summary: "First two weeks carry residual monsoon moisture and cloud cover. By mid-to-late September, the atmosphere is scrubbed clean, offering vibrant green terraces, swollen waterfalls, and quiet community teahouses.",
      pro: "Lush post-monsoon landscapes, uncrowded lodges, easier booking.",
      con: "Occasional afternoon rain showers in early September.",
    },
    {
      month: "October (The Benchmark Gold Standard)",
      badge: "Peak Visibility & Stable Skies",
      summary: "Nepal's premier trekking month. Stable, predictable weather with virtually zero rain. Mornings deliver crystal-clear optical sightlines to Annapurna South, Dhaulagiri I, and Machhapuchhre.",
      pro: "Flawless mountain panoramas, firm dry trails, mild daytime weather.",
      con: "Highest lodge occupancy of the year (book community beds early).",
    },
    {
      month: "November (Crisp Cold & Quiet Clarity)",
      badge: "Sharpest Views & Solitude",
      summary: "Dry, cold, and exceptionally clear. As humidity drops further, atmospheric haze disappears completely. Cold fronts move through late November, bringing freezing night temperatures.",
      pro: "Uncluttered photography viewpoints, dry firm trails, lower crowds.",
      con: "Freezing night temperatures (-10°C at Khayer Lake); requires 4-season bag.",
    },
  ];

  const faqs = [
    {
      q: "Is autumn the best season for the Khopra Ridge trek?",
      a: "Yes, for most trekkers. Autumn offers the most stable weather, clearest mountain visibility, and easiest trail conditions of any season, though the exact month you choose still matters.",
    },
    {
      q: "Does it still rain in September on Khopra Ridge?",
      a: "Early September can carry occasional afternoon showers as the monsoon tapers off, but rainfall typically drops off sharply by the third week of the month.",
    },
    {
      q: "Why is October the most popular trekking month?",
      a: "October combines the year's most stable weather with excellent visibility and dry trails, making it the most reliable window for a smooth trekking experience.",
    },
    {
      q: "How cold does Khopra Ridge get in November?",
      a: "Daytime temperatures stay comfortable for walking, but nights turn cold, especially near Khayer Lake, where frost is common. A four-season sleeping bag is recommended.",
    },
    {
      q: "Can beginners trek Khopra Ridge in autumn?",
      a: "Yes. The trail doesn't require technical skill, and autumn's dry, stable conditions make it one of the more approachable seasons for first-time Himalayan trekkers.",
    },
    {
      q: "Is Khayer Lake accessible during autumn?",
      a: "Yes, and autumn is arguably the best time to visit, thanks to calm mornings that often produce clear reflections of the surrounding peaks.",
    },
    {
      q: "Are community lodges crowded in October?",
      a: "Often, yes. October is peak season, and lodges near Swanta Village and Chistibung can fill up, so booking ahead is worth doing.",
    },
    {
      q: "What mountains can you see from Khopra Ridge in autumn?",
      a: "Clear autumn days offer views of Annapurna South, Dhaulagiri I, Machhapuchhre, Nilgiri Himal, Hiunchuli, and Tukuche Peak.",
    },
    {
      q: "What permits are required for the trek?",
      a: "Trekkers need an Annapurna Conservation Area Permit (ACAP) and a TIMS card, both of which are standard requirements for this region.",
    },
    {
      q: "How early should I book an autumn trek?",
      a: "For October in particular, booking lodges and confirming your itinerary several weeks in advance is worth the effort. September and November allow more flexibility.",
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
            <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 transition">Weather Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Autumn Season</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Peak Post-Monsoon Season (Sept–Nov)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Autumn Trekking on Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete weather and planning guide: comparing September, October, and November visibility, temperatures, photography, and lodge demand.
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
                <h4 className="font-bold text-stone-900 text-base">Peak Autumn Operation &amp; Community Reservations</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our team secures priority community lodge bookings in Swanta, Chhistibung, and Khopra Ridge throughout October and November.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Autumn is the season most trekkers picture when imagining Nepal: sharp blue skies, snow-capped peaks standing out against crisp horizons, and firm, dry trails. On Khopra Ridge, post-monsoon rains scrub dust and pollution from the atmosphere, creating the single best mountain viewing window of the year.
              </p>
              <p>
                However, conditions change notably from month to month: September transitions out of monsoon, October provides peak stability, and November brings crisp cold clarity.
              </p>
            </div>

            {/* Section 1: Autumn Month Comparison Table */}
            <div id="autumn-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                September vs. October vs. November Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Planning Factor</th>
                      <th className="py-4 px-4 sm:px-6">September</th>
                      <th className="py-4 px-4 sm:px-6">October</th>
                      <th className="py-4 px-4 sm:px-6">November</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {autumnComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.factor}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.sept}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-800 font-bold">{row.oct}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-800 font-medium">{row.nov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Month-by-Month Detailed Cards */}
            <div id="autumn-months" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Autumn Guide
              </h2>

              <div className="space-y-6">
                {monthProfiles.map((m, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-2 gap-2">
                      <h3 className="font-bold text-stone-950 text-lg">{m.month}</h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{m.summary}</p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs">
                      <span className="text-emerald-700 font-semibold">👍 Pro: {m.pro}</span>
                      <span className="text-amber-800 font-semibold">⚠️ Note: {m.con}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Mountain Photography Hotspots */}
            <div id="photography-spots" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Photography &amp; Panorama Hotspots
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌅 Sunrise at Khopra Ridge (3,660m)</h4>
                  <p className="text-xs text-stone-600">First light hits Dhaulagiri I (8,167m) and Annapurna South across the Kali Gandaki Gorge, producing intense golden-hour colors.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🪞 Khayer Lake Mirror Reflections (4,660m)</h4>
                  <p className="text-xs text-stone-600">Calm autumn mornings create still, glassy lake surfaces reflecting snow peaks and the sacred Khayer Baraha Temple.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌄 Muldai Peak Alternative Viewpoint</h4>
                  <p className="text-xs text-stone-600">A 360-degree panorama spot near Dobato providing an uncrowded alternative to Poon Hill during peak October weeks.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏔️ Visible Himalayan Peaks</h4>
                  <p className="text-xs text-stone-600">Unobstructed sightlines to Annapurna South, Dhaulagiri I, Machhapuchhre, Nilgiri Himal, Hiunchuli, and Tukuche Peak.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Autumn Packing Essentials */}
            <div id="autumn-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Autumn Packing Strategy
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 September Kit</h4>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc pl-4">
                    <li>Lightweight waterproof shell</li>
                    <li>Moisture-wicking base layers</li>
                    <li>Sturdy boots for damp sections</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🍁 October Kit</h4>
                  <ul className="text-xs text-emerald-900 space-y-1 list-disc pl-4">
                    <li>Fleece mid-layer &amp; down jacket</li>
                    <li>3-season rating (-5°C) sleeping bag</li>
                    <li>UV protection &amp; sunglasses</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ November Kit</h4>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc pl-4">
                    <li>Heavy down jacket &amp; thermal layer</li>
                    <li>4-season rating (-12°C) sleeping bag</li>
                    <li>Insulated gloves &amp; fleece hat</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Autumn Trekking
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
                  Peak Season Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Book Your Autumn Trek on Khopra Ridge
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Reserve your autumn departure with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We guarantee community teahouse accommodation, ACAP permits, private transfers, and experienced local guide services.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Autumn Departures
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Official Itinerary
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
                <a href="#autumn-matrix" className="block hover:text-emerald-600 transition">
                  • Sept vs Oct vs Nov
                </a>
                <a href="#autumn-months" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Guide
                </a>
                <a href="#photography-spots" className="block hover:text-emerald-600 transition">
                  • Photography Hotspots
                </a>
                <a href="#autumn-packing" className="block hover:text-emerald-600 transition">
                  • Packing Strategy
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Weather Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/weather/best-time-to-trek" className="hover:text-emerald-700 underline">
                      Best Time to Trek Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-october" className="hover:text-emerald-700 underline">
                      October Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-november" className="hover:text-emerald-700 underline">
                      November Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/spring-season-khopra" className="hover:text-emerald-700 underline">
                      Spring Season Guide
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
