import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in November: Temperature, Trek Conditions & Mountain Views",
  description:
    "Planning a November trek to Khopra Ridge? Get real temperature ranges, trail conditions, snow risk, altitude-by-altitude weather, and a packing list built for this month.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-november",
  },
  openGraph: {
    title: "Khopra Ridge Weather in November: Temperature, Trek Conditions & Mountain Views",
    description:
      "Planning a November trek to Khopra Ridge? Get real temperature ranges, trail conditions, snow risk, altitude-by-altitude weather, and a packing list built for this month.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-november",
    type: "article",
  },
};

export default function KhopraTrekNovemberPage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "8°C to 12°C (46°F – 54°F)" },
    { label: "Ridge Nighttime Temp", value: "-6°C to 0°C (21°F – 32°F)" },
    { label: "Rainy Days Total", value: "0 to 1 Days (Stable High)" },
    { label: "Morning Sky Clarity", value: "98% Yearly Peak Index" },
  ];

  const elevTemps = [
    { location: "Ghandruk & Swanta Villages", elev: "1,940 m", day: "12°C – 18°C", night: "4°C – 8°C", trail: "Mild, forest-sheltered, comfortable walking" },
    { location: "Tadapani Forests", elev: "2,630 m", day: "10°C – 14°C", night: "2°C – 6°C", trail: "Crisp air, dry canopy, morning ground mist" },
    { location: "Chhistibung", elev: "2,950 m", day: "8°C – 12°C", night: "0°C – 4°C", trail: "Cold mornings, firm dry woodland paths" },
    { location: "Bayeli Kharka", elev: "3,410 m", day: "6°C – 10°C", night: "-3°C – 1°C", trail: "Grassland zone, sharp ridge breezes" },
    { location: "Khopra Danda", elev: "3,660 m", day: "8°C – 12°C", night: "-6°C – 0°C", trail: "Biting wind, sharp freeze, 98% sky clarity" },
    { location: "Khayer Lake", elev: "4,500 m", day: "2°C – 7°C", night: "-8°C – -12°C", trail: "Coldest point, light snow potential late month" },
  ];

  const faqs = [
    {
      q: "Is November the best month for the Khopra Ridge Trek?",
      a: "It is one of the top two months alongside October. November typically offers the clearest skies of the year (98% clarity index), though nights are colder and high-altitude teahouses remain busy.",
    },
    {
      q: "How cold does Khopra Ridge get in November?",
      a: "Daytime temperatures generally range from 8°C to 12°C in the sun, while nighttime temperatures at Khopra Danda drop to -6°C to 0°C, falling lower at Khayer Lake (-8°C to -12°C).",
    },
    {
      q: "Does it snow at Khopra Ridge in November?",
      a: "Snow is uncommon but possible, particularly in late November at higher elevations like Khopra Danda and Khayer Lake. When it falls, it is typically a light dusting that melts within a day.",
    },
    {
      q: "Can beginners trek Khopra Ridge in November?",
      a: "Yes. Dry, firm trails make November one of the most approachable months for first-time high-altitude trekkers, provided you pack proper cold-weather gear for unheated lodge rooms.",
    },
    {
      q: "Is Khayer Lake accessible in November?",
      a: "Yes, though it is the coldest point on the route (-8°C to -12°C night), with a higher chance of light snow late in the month. Full cold-weather gear is required for this day hike extension.",
    },
    {
      q: "Are teahouses open in November?",
      a: "Yes, teahouses along the entire route operate fully during peak November season. Advance room booking through a local operator is recommended due to high trekker volume.",
    },
    {
      q: "How crowded is Khopra Ridge during November?",
      a: "November is one of the two busiest months on this circuit. Expect shared trail sections and lively teahouses, though early morning starts allow you to enjoy quiet sunrise viewpoints.",
    },
    {
      q: "What clothes should I pack for November?",
      a: "Pack a 4-layer system: moisture-wicking thermals, fleece mid-layer, heavy down jacket (-10°C rated), windproof outer shell, insulated gloves, beanie, and a -10°C to -15°C sleeping bag.",
    },
    {
      q: "Which mountains can I see from Khopra Ridge in November?",
      a: "On a clear November morning, expect sweeping 360° views of Dhaulagiri I, Annapurna South, Nilgiri Himal, Hiunchuli, and Tukuche Peak.",
    },
    {
      q: "Is November better than October for the Khopra Ridge Trek?",
      a: "November generally offers slightly higher sky clarity (98% vs 95%), while October brings marginally milder nighttime temperatures. Both deliver peak post-monsoon trekking conditions.",
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
            <span className="text-emerald-400">November Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Peak Mountain Clarity Profile (November)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in November
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Yearly peak mountain clarity (98%), crisp post-monsoon atmosphere, dry firm trails, sub-zero ridge nights, and cold-weather gear essentials.
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
                <h4 className="font-bold text-stone-900 text-base">Peak Sky Clarity Verification &amp; Trail Ops</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides monitor high-altitude ridge freezes, early morning frost hazards, and peak-season lodge allocations.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;re weighing up a November trek to Khopra Ridge, you will get some of the clearest mountain views of the entire year, dry and stable trails, and genuinely cold nights once the sun goes down.
              </p>
              <p>
                Daytime temperatures on the trail typically sit between 8°C and 12°C. Once you reach Khopra Danda after dark, that number drops fast to -6°C or lower. Rain is rare (0 to 1 day), sky clarity hits 98%, and sunrise light over Dhaulagiri I and Annapurna South is unmatched.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="november-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                November Temperatures &amp; Trail Conditions by Elevation
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Daytime High</th>
                      <th className="py-4 px-4 sm:px-6">Nighttime Low</th>
                      <th className="py-4 px-4 sm:px-6">Trail &amp; Weather Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {elevTemps.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs text-stone-500">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-800">{row.day}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-blue-700">{row.night}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.trail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Early vs Mid vs Late November Breakdown */}
            <div id="november-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Early vs. Mid vs. Late November Weather Breakdown
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Early Nov (1st – 10th)
                  </span>
                  <h4 className="font-bold text-stone-900 mt-1">Mildest Autumn Nights</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Mildest nights of the month (-2°C to 0°C at ridge). Last autumn foliage colors on lower forest sections near Swanta.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                    Mid Nov (11th – 20th)
                  </span>
                  <h4 className="font-bold text-emerald-950 mt-1">Peak 98% Sky Clarity Window</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Driest air, maximum high-pressure weather stability, razor-sharp panoramas of Dhaulagiri and Annapurna South.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Late Nov (21st – 30th)
                  </span>
                  <h4 className="font-bold text-stone-900 mt-1">Winter Edge &amp; Light Snow</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Nights get noticeably colder (-6°C to -10°C). Small chance of light high-altitude snow dustings above 3,000m.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Essential November Packing List */}
            <div id="november-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential November Cold-Weather Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Heavy Down Jacket &amp; 4 Layers</h4>
                  <p className="text-xs text-stone-600">Moisture-wicking thermals, fleece mid-layer, heavy down jacket (-10°C rated), and windproof outer shell for ridge gusts.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛌 Four-Season Sleeping Bag (-10°C)</h4>
                  <p className="text-xs text-stone-600">Unheated teahouse bedrooms on Khopra Danda drop below freezing; a sub-zero rated sleeping bag is essential.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🦯 Poles for Frosty Morning Steps</h4>
                  <p className="text-xs text-stone-600">Trekking poles provide crucial stability against early morning black ice and frost on exposed stone stairs.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍾 Insulated Reusable Flask &amp; Power Bank</h4>
                  <p className="text-xs text-stone-600">Prevents drinking water from freezing overnight. Keep camera batteries inside your sleeping bag to preserve charge.</p>
                </div>
              </div>
            </div>

            {/* Section 4: November vs October vs December Comparison */}
            <div id="november-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                November vs. October vs. December Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☀️ October</h4>
                  <p className="text-xs text-stone-600">Peak post-monsoon. Slightly milder nights (-2°C to -8°C), 95% clarity, highest teahouse crowd volume.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🏔️ November</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Peak sky clarity (98%). Colder nights (-6°C to 0°C), razor-sharp mountain panoramas, dry firm paths.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ December</h4>
                  <p className="text-xs text-stone-600">Early winter. Quiet empty trails, colder sub-zero nights (-10°C+), higher snow risk at Khayer Lake.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: November Weather
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
                  November Departure Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in November with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Reserve your November trek with licensed Nepal operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange permits, guide support, and advance community lodge bookings for peak November dates.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About November Treks
                  </Link>
                  <Link
                    href="/weather/autumn-season-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Autumn Season Hub
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
                <a href="#november-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#november-breakdown" className="block hover:text-emerald-600 transition">
                  • Early vs Mid vs Late Nov
                </a>
                <a href="#november-packing" className="block hover:text-emerald-600 transition">
                  • Essential Packing List
                </a>
                <a href="#november-comparison" className="block hover:text-emerald-600 transition">
                  • Oct vs Nov vs Dec
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
                    <Link href="/weather/autumn-season-khopra" className="hover:text-emerald-700 underline">
                      Autumn Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-october" className="hover:text-emerald-700 underline">
                      October Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-december" className="hover:text-emerald-700 underline">
                      December Weather Guide
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
