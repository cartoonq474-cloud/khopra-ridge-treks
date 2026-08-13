import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in June | Nepal Trek Guide",
  description: "Planning a June trek? Get a complete breakdown of Khopra Ridge weather in June — temperature, rainfall, visibility, trail conditions, and honest advice on.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-june",
  },
  openGraph: {
    title: "Khopra Ridge Weather in June: Temperature, Rainfall, Trail Conditions & Trekking Guide",
    description:
      "Planning a June trek? Get a complete breakdown of Khopra Ridge weather in June — temperature, rainfall, visibility, trail conditions, and honest advice on whether it's the right month for you.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-june",
    type: "article",
  },
};

export default function KhopraTrekJunePage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "10°C to 15°C (50°F – 59°F)" },
    { label: "Ridge Nighttime Temp", value: "2°C to 7°C (36°F – 45°F)" },
    { label: "Monsoon Onset Phase", value: "Transition (Early Dry vs Late Wet)" },
    { label: "Morning Sky Clarity", value: "60% Clear Window (6 AM – 9:30 AM)" },
  ];

  const elevTemps = [
    { location: "Ghandruk & Low Valleys", elev: "1,940 m", day: "18°C – 23°C", night: "10°C – 14°C", trail: "Humid, lush green, afternoon rain" },
    { location: "Tadapani Forests", elev: "2,630 m", day: "16°C – 21°C", night: "8°C – 12°C", trail: "Shaded canopy, active leeches" },
    { location: "Chhistibung", elev: "2,950 m", day: "14°C – 19°C", night: "5°C – 9°C", trail: "Swelling streams, wet stone steps" },
    { location: "Bayeli Kharka", elev: "3,425 m", day: "12°C – 16°C", night: "4°C – 8°C", trail: "Alpine grass, cloud buildup" },
    { location: "Khopra Ridge", elev: "3,660 m", day: "10°C – 15°C", night: "2°C – 7°C", trail: "Exposed ridge, sharp rain bursts" },
    { location: "Khayer Lake", elev: "4,660 m", day: "8°C – 13°C", night: "0°C – 4°C", trail: "High pastures, boggy melt paths" },
  ];

  const faqs = [
    {
      q: "Is June a good time for the Khopra Ridge Trek?",
      a: "Yes, particularly in the first half of the month. Expect far fewer trekkers, lush green forest scenery, and generally manageable weather, alongside a higher chance of afternoon rain compared to peak season.",
    },
    {
      q: "Can beginners trek Khopra Ridge in June?",
      a: "Beginners can complete the trek in June, though the muddy, sometimes slippery trail sections make it a bit more physically demanding than during drier months. Trekking with a local guide is especially recommended.",
    },
    {
      q: "Does it rain every day at Khopra Ridge in June?",
      a: "Not every day, but rain — usually in the afternoon or evening — becomes increasingly common as June progresses, especially once the monsoon arrives in the region by mid-to-late June.",
    },
    {
      q: "What is the temperature at Khopra Ridge in June?",
      a: "Daytime temperatures on the ridge typically range from 10°C to 15°C, dropping to 2°C to 7°C overnight. Lower villages like Ghandruk and Tadapani stay warmer, often 18°C to 23°C during the day.",
    },
    {
      q: "Are mountain views possible in June?",
      a: "Yes, especially in the early morning before clouds build up (6:00 AM – 9:30 AM). Full, unobstructed views become less consistent as the month goes on and monsoon moisture increases.",
    },
    {
      q: "Are there leeches on the Khopra Ridge Trek in June?",
      a: "Leeches are present in the lower, shaded forest sections in June due to rising humidity. Carrying leech socks, gaiters, and insect repellent makes them easy to manage.",
    },
    {
      q: "Is Khayer Lake accessible in June?",
      a: "Yes, Khayer Lake remains accessible in June. Early morning starts (5:00 AM departure from Khopra Ridge) are recommended for better visibility and firmer trail conditions before afternoon rain.",
    },
    {
      q: "What clothes should I pack for the trek in June?",
      a: "A waterproof jacket and rain pants, quick-dry base layers, a light insulating mid-layer, waterproof trekking boots, gaiters, and dry bags for electronics cover June conditions.",
    },
    {
      q: "Are teahouses open in June?",
      a: "Yes, teahouses and the Khopra Ridge Community Lodge operate normally in June, offering quiet accommodations with far less competition for rooms than in peak autumn.",
    },
    {
      q: "Is June better than July for trekking in Nepal?",
      a: "June generally offers drier conditions than July, since the monsoon is typically still building rather than fully established. Early June, in particular, tends to be more favorable than any point in July.",
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
            <span className="text-emerald-400">June Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Early Monsoon Transition Profile (June)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in June
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Early monsoon dynamics, elevation temperature shifts, morning mountain visibility windows, wet trail strategies, and quiet community lodge experiences.
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
                🌧️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">June Monsoon Safety &amp; Local Guide Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides provide real-time updates on rain cycles, swollen stream crossings, and morning visibility windows along Khopra Ridge.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                June marks the turning point between Nepal&apos;s dry spring season and the arrival of the summer monsoon. On the Khopra Ridge Trek, that shift shows up in almost everything you&apos;ll experience on the trail — warmer days, thicker cloud cover, unpredictable afternoon showers, and forests that turn a deeper, richer green with every passing week.
              </p>
              <p>
                Early June retains much of spring&apos;s morning clarity, while late June brings regular monsoon rain. Planning your hardest hiking segments for early morning (6:00 AM – 10:00 AM) is key.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="june-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                June Temperatures &amp; Trail Conditions by Elevation
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Daytime High</th>
                      <th className="py-4 px-4 sm:px-6">Nighttime Low</th>
                      <th className="py-4 px-4 sm:px-6">Trail &amp; Vegetation State</th>
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

            {/* Section 2: Early June vs Late June Dynamics */}
            <div id="early-vs-late-june" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Early June vs. Late June Comparison
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    Early June (1st – 15th)
                  </span>
                  <h3 className="font-bold text-emerald-950 text-lg">Pre-Monsoon Stability &amp; Good Views</h3>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Carries residual late-spring dryness. Morning skies are clear (60%+ clarity), trails are mostly firm, and afternoon rain is brief. Recommended for trekkers wanting quiet paths and mountain photos.
                  </p>
                  <span className="block text-xs font-semibold text-emerald-950">Recommended Window for Best Conditions</span>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    Late June (16th – 30th)
                  </span>
                  <h3 className="font-bold text-amber-950 text-lg">Active Monsoon Rain &amp; Lush Scenery</h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Monsoon onset brings frequent afternoon and evening rain, higher humidity, and muddy forest trails. Mountain views become mist-veiled, while waterfalls run at peak volume.
                  </p>
                  <span className="block text-xs font-semibold text-amber-950">Best For: Solitude lovers &amp; landscape photographers</span>
                </div>
              </div>
            </div>

            {/* Section 3: Essential June Wet-Weather Packing List */}
            <div id="june-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential June Wet-Weather Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Waterproof Shell Jacket &amp; Rain Pants</h4>
                  <p className="text-xs text-stone-600">A breathable waterproof outer layer (20,000mm rating) is essential for afternoon downpours. Avoid non-breathable ponchos.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧦 Leech Socks, Gaiters &amp; Repellent</h4>
                  <p className="text-xs text-stone-600">Leech socks or tight gaiters coated with insect repellent prevent leeches in moist lower forest zones below Tadapani.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🎒 Waterproof Dry Bags &amp; Rucksack Cover</h4>
                  <p className="text-xs text-stone-600">Seal electronics, spare base layers, and sleeping bags inside dry bags within your rucksack to protect against heavy rain.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">👢 Boots with Grippy Lug Tread &amp; Poles</h4>
                  <p className="text-xs text-stone-600">Waterproof boots with deep rubber lugs handle slick stone staircases. Trekking poles ensure 4-point stability.</p>
                </div>
              </div>
            </div>

            {/* Section 4: June vs May vs September vs October */}
            <div id="june-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                June vs. May vs. September vs. October
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌿 May</h4>
                  <p className="text-xs text-stone-600">Late spring. Warmest daytime hiking (14–20°C), 70% morning clarity, light pre-monsoon showers.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌧️ June</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Monsoon transition. Deep green forests, swelling waterfalls, empty teahouses, afternoon rain.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 October</h4>
                  <p className="text-xs text-stone-600">Peak post-monsoon. Maximum sky clarity, dry trails, highest trail crowd volume.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: June Weather
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
                  June Monsoon Departure Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in June with Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your June trek with experienced local guides from <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We provide real-time weather tracking, rain-safe routing, and quiet community lodge stays.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About June Treks
                  </Link>
                  <Link
                    href="/weather/summer-monsoon-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Monsoon Season Hub
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
                <a href="#june-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#early-vs-late-june" className="block hover:text-emerald-600 transition">
                  • Early vs Late June
                </a>
                <a href="#june-packing" className="block hover:text-emerald-600 transition">
                  • Essential Packing List
                </a>
                <a href="#june-comparison" className="block hover:text-emerald-600 transition">
                  • May vs Jun vs Oct
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
                    <Link href="/weather/khopra-trek-may" className="hover:text-emerald-700 underline">
                      May Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-july" className="hover:text-emerald-700 underline">
                      July Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/summer-monsoon-khopra" className="hover:text-emerald-700 underline">
                      Summer Monsoon Hub
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
