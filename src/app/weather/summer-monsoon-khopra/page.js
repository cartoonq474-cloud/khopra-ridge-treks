import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Summer & Monsoon Trekking on Khopra Ridge (June–August): Weather, Safety & Trail Guide",
  description:
    "Planning to trek Khopra Ridge in June, July, or August? Get honest, month-by-month weather, trail conditions, safety tips, and packing advice from our local guides.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/summer-monsoon-khopra",
  },
  openGraph: {
    title: "Summer & Monsoon Trekking on Khopra Ridge (June–August): Weather, Safety & Trail Guide",
    description:
      "Planning to trek Khopra Ridge in June, July, or August? Get honest, month-by-month weather, trail conditions, safety tips, and packing advice from our local guides.",
    url: "https://khopraridgetrek.com/weather/summer-monsoon-khopra",
    type: "article",
  },
};

export default function SummerMonsoonPage() {
  const quickStats = [
    { label: "Season Window", value: "June – August (Monsoon)" },
    { label: "Wettest Month", value: "July (Heavy Rain & Leeches)" },
    { label: "Daytime Temp Range", value: "14°C to 20°C (High Ridge)" },
    { label: "Special Event", value: "Janai Purnima Festival (August)" },
  ];

  const seasonComparison = [
    { factor: "Crowd Levels", monsoon: "Very Light (Quiet Trails)", autumn: "Heavy (Full Lodges)" },
    { factor: "Trek Cost & Rates", monsoon: "Lower (Off-Season Discounts)", autumn: "Higher (Peak Rates)" },
    { factor: "Trail Conditions", monsoon: "Muddy & Slippery Stone Steps", autumn: "Firm, Dry & Stable" },
    { factor: "Mountain Views", monsoon: "Intermittent / Cloud-Covered", autumn: "Consistently Clear" },
    { factor: "Forest Scenery", monsoon: "Lush, Deep Green & Waterfalls", autumn: "Dry, Golden & Clear" },
    { factor: "Hiking Difficulty", monsoon: "Higher (Mud, Leeches, Rain)", autumn: "Moderate" },
    { factor: "Leech Activity", monsoon: "High in Subalpine Forests", autumn: "Rare to None" },
  ];

  const monthTable = [
    { month: "June", dayTemp: "15–20°C", nightTemp: "5–10°C", rain: "Moderate, Increasing", vis: "Fair to Poor", trail: "Damp, Mostly Stable" },
    { month: "July", dayTemp: "15–19°C", nightTemp: "6–11°C", rain: "Heaviest of Year", vis: "Poor", trail: "Muddy, Landslide-Prone" },
    { month: "August", dayTemp: "14–19°C", nightTemp: "5–10°C", rain: "Heavy, More Breaks", vis: "Fair, Improving Late", trail: "Muddy, Gradually Firming" },
  ];

  const faqs = [
    {
      q: "Is Khopra Ridge safe during the monsoon season?",
      a: "It's manageable with the right preparation, gear, and ideally a local guide, but it carries more risk than dry-season trekking due to landslides and slippery trail conditions.",
    },
    {
      q: "Does it rain every day in June, July, and August?",
      a: "Not all day, but rain is frequent, especially in July. The typical pattern is clearer mornings followed by afternoon and evening showers.",
    },
    {
      q: "Which month has the heaviest rainfall on Khopra Ridge?",
      a: "July consistently sees the heaviest and most sustained rainfall of the three months.",
    },
    {
      q: "Can beginners do the Khopra Ridge Trek during monsoon?",
      a: "It's possible but not ideal. First-time trekkers generally have a smoother, more rewarding experience in October–November or March–April.",
    },
    {
      q: "Are teahouses open during the rainy season?",
      a: "Most community lodges along the route stay open, though some smaller teahouses may reduce services or close briefly during the heaviest rain. Confirming ahead with a local operator is recommended.",
    },
    {
      q: "How bad are leeches on the Khopra Ridge Trek?",
      a: "Leeches are present in the forest sections between Tadapani and Chistibung, particularly in July. They're a nuisance rather than a danger, and gaiters plus salt or repellent spray handle them well.",
    },
    {
      q: "Can I still see Annapurna South and Dhaulagiri in summer?",
      a: "Occasionally, mostly in brief early-morning windows, but consistent mountain views aren't realistic during this season.",
    },
    {
      q: "Is trekking insurance necessary during monsoon?",
      a: "Yes. Given the higher chance of weather-related delays and the possibility of grounded rescue helicopters, comprehensive insurance covering high-altitude trekking and evacuation is strongly recommended.",
    },
    {
      q: "Can I visit Khayer Lake in August?",
      a: "Yes, and August is actually a notable time to go, since it typically coincides with the Janai Purnima festival at the lake.",
    },
    {
      q: "Should I hire a guide for monsoon trekking?",
      a: "We'd recommend it. Local guides bring real-time trail knowledge that matters more during monsoon than any other season, particularly around landslide-prone sections and river crossings.",
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
            <span className="text-emerald-400">Summer &amp; Monsoon</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Off-Season Weather &amp; Safety Guide (June–August)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Summer &amp; Monsoon Trekking on Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Honest month-by-month weather analysis, landslide risks, leech protection, lush green landscapes, and Janai Purnima festival insights.
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
              <div className="rounded-xl bg-amber-100 p-3 text-amber-800 font-bold text-xl flex items-center justify-center shrink-0">
                🌧️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Honest Local Off-Season Safety Guidance</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We provide real-time trail checks for landslide zones around Nayapul and Birethanti, river levels, and teahouse operations during monsoon months.
                </p>
              </div>
            </div>

            {/* Introduction & Caution */}
            <div className="space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                June through August is Nepal&apos;s off-season for trekking. The monsoon rolls in from the Bay of Bengal, soaks the trail, and turns autumn crowds into a trickle. That scares most travelers away — and for many, that&apos;s the right call.
              </p>
              
              <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-6 space-y-3 text-amber-900">
                <h4 className="font-extrabold text-base flex items-center gap-2">
                  <span>⚠️</span> Important Caution for Monsoon Trekkers
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Monsoon trekking brings heavy afternoon downpours, slippery stone steps, leech infestation in forest sections between Tadapani and Chhistibung, and dirt road landslide delays past Birethanti. First-time Himalayan trekkers seeking guaranteed clear mountain panoramas should choose October–November or March–April.
                </p>
              </div>
            </div>

            {/* Section 1: Monsoon vs Autumn Comparison Table */}
            <div id="monsoon-vs-autumn" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Monsoon vs. Autumn Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trekking Factor</th>
                      <th className="py-4 px-4 sm:px-6">Monsoon (June – August)</th>
                      <th className="py-4 px-4 sm:px-6">Autumn (Oct – Nov)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {seasonComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.factor}</td>
                        <td className="py-4 px-4 sm:px-6 text-amber-800 font-medium">{row.monsoon}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-800 font-medium">{row.autumn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: June, July & August Weather Breakdown */}
            <div id="monthly-weather" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Monsoon Weather Breakdown
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Month</th>
                      <th className="py-4 px-4 sm:px-6">Day Temp</th>
                      <th className="py-4 px-4 sm:px-6">Night Temp</th>
                      <th className="py-4 px-4 sm:px-6">Rainfall Pattern</th>
                      <th className="py-4 px-4 sm:px-6">Visibility</th>
                      <th className="py-4 px-4 sm:px-6">Trail Condition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {monthTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.month}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs">{row.dayTemp}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs">{row.nightTemp}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.rain}</td>
                        <td className="py-4 px-4 sm:px-6 text-amber-800 font-medium">{row.vis}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.trail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Unexpected Rewards & Pilgrimage Highlights */}
            <div id="monsoon-rewards" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Unexpected Rewards of Summer Trekking
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌾 Lush Agricultural Terraces</h4>
                  <p className="text-xs text-stone-600">Terraced fields around Swanta and Ghandruk burst into deep emerald green with growing crops of millet and barley.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🐑 Shepherd (*Gothalas*) Encounters</h4>
                  <p className="text-xs text-stone-600">Local shepherds bring large sheep flocks up to graze the high alpine meadows near Khopra Danda during high summer.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🪔 Janai Purnima Pilgrimage (August)</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">The sacred full moon festival draws Hindu and Buddhist pilgrims to Khayer Lake for ritual baths at Khayer Baraha Shrine.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🤫 Complete Solitude</h4>
                  <p className="text-xs text-stone-600">Trails are virtually empty, giving you exclusive access to quiet community teahouses and serene mist-shrouded ridge walks.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Monsoon Packing & Safety Essentials */}
            <div id="monsoon-gear" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Monsoon Gear Checklist &amp; Safety Rules
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Waterproof Poncho &amp; Dry Bags</h4>
                  <p className="text-xs text-stone-600">Full-coverage ponchos fit over backpacks. Seal electronics and thermal clothing inside airtight dry bags.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥾 Deep-Lug Boots &amp; Gaiters</h4>
                  <p className="text-xs text-stone-600">Sturdy soles provide traction on wet stone steps. Long gaiters keep water and forest leeches out of boots.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧂 Leech Repellent &amp; Trekking Poles</h4>
                  <p className="text-xs text-stone-600">Carry salt packets or leech spray for the Tadapani-to-Chhistibung forest. Poles stabilize slippery descents.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">⏰ Early Starts &amp; Buffer Days</h4>
                  <p className="text-xs text-stone-600">Start hiking by 6:00 AM to beat afternoon cloud buildup. Add 2 buffer days for dirt road landslide delays.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Monsoon Trekking
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
                  Guided Off-Season Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Safely in Monsoon with Local Trail Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Navigate off-season trails safely with certified local guides from <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We monitor real-time landslide reports, secure open teahouse beds, and guide you to Khayer Lake for Janai Purnima.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Consult Monsoon Trail Team
                  </Link>
                  <Link
                    href="/weather/best-time-to-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Compare All Trekking Seasons
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
                <a href="#monsoon-vs-autumn" className="block hover:text-emerald-600 transition">
                  • Monsoon vs. Autumn
                </a>
                <a href="#monthly-weather" className="block hover:text-emerald-600 transition">
                  • Monthly Weather Matrix
                </a>
                <a href="#monsoon-rewards" className="block hover:text-emerald-600 transition">
                  • Unexpected Rewards
                </a>
                <a href="#monsoon-gear" className="block hover:text-emerald-600 transition">
                  • Gear &amp; Safety Checklist
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
                    <Link href="/weather/khopra-trek-july" className="hover:text-emerald-700 underline">
                      July Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-august" className="hover:text-emerald-700 underline">
                      August Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-mythology-pilgrimage" className="hover:text-emerald-700 underline">
                      Janai Purnima Festival
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
