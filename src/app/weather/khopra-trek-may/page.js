import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in May | Nepal Trek Guide",
  description: "Planning a May trek? Get the full Khopra Ridge weather picture — temperatures, rainfall, visibility, snow, and what to pack from local trekking experts.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-may",
  },
  openGraph: {
    title: "Khopra Ridge Weather in May: Temperature, Rainfall and Trekking Conditions Guide",
    description:
      "Planning a May trek? Get the full Khopra Ridge weather picture — temperatures, rainfall, visibility, snow, and what to pack from local trekking experts.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-may",
    type: "article",
  },
};

export default function KhopraTrekMayPage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "14°C to 20°C (57°F – 68°F)" },
    { label: "Ridge Nighttime Temp", value: "0°C to 6°C (32°F – 43°F)" },
    { label: "Rainy Days Average", value: "4 to 6 Days (Pre-Monsoon)" },
    { label: "Morning Sky Clarity", value: "70% Clear Index (Before 10 AM)" },
  ];

  const elevTemps = [
    { location: "Ghandruk & Low Valleys", elev: "1,940 m", day: "18°C – 24°C", night: "8°C – 12°C", trail: "Warm, lush green, dry" },
    { location: "Tadapani Forests", elev: "2,630 m", day: "17°C – 22°C", night: "5°C – 9°C", trail: "Green canopy, seed pods" },
    { location: "Chhistibung", elev: "2,950 m", day: "15°C – 20°C", night: "3°C – 8°C", trail: "Wildflower meadows, firm path" },
    { location: "Bayeli Kharka", elev: "3,425 m", day: "13°C – 18°C", night: "2°C – 7°C", trail: "Alpine grass, cool breezes" },
    { location: "Khopra Ridge", elev: "3,660 m", day: "14°C – 20°C", night: "0°C – 6°C", trail: "Clear main path, thermal afternoon wind" },
    { location: "Khayer Lake", elev: "4,660 m", day: "5°C – 10°C", night: "-5°C – 0°C", trail: "Isolated shaded snow pockets" },
  ];

  const faqs = [
    {
      q: "Is May a good month for the Khopra Ridge Trek?",
      a: "Yes. May offers warm daytime temperatures, good morning mountain visibility, green alpine meadows, and thinner crowds than peak spring, making it a solid choice for most trekkers, especially in early-to-mid May.",
    },
    {
      q: "How cold does Khopra Ridge get in May?",
      a: "Nighttime temperatures at Khopra Ridge typically range from 0°C to 6°C (32°F to 43°F), while daytime temperatures reach a comfortable 14°C to 20°C (57°F to 68°F).",
    },
    {
      q: "Does it rain every day in May?",
      a: "No. May typically sees only 4 to 6 rain days across the entire month, usually occurring as short localized afternoon showers rather than sustained rainfall.",
    },
    {
      q: "Are mountain views clear in May?",
      a: "Morning views are generally excellent, with around 70% sky clarity before 10 AM. Afternoon cloud cover reduces visibility, so early 6 AM starts are recommended for the best panoramas.",
    },
    {
      q: "Can I visit Khayer Lake in May?",
      a: "Yes. The Khayer Lake side trip is fully accessible in May, though early-month visitors may encounter occasional snow patches or soft ground near the lake itself.",
    },
    {
      q: "Is there snow on Khopra Ridge in May?",
      a: "Continuous snow cover has generally melted by May on the main trail, though isolated patches can remain in shaded areas, particularly near Khayer Lake, in the first half of the month.",
    },
    {
      q: "What clothes should I pack for the Khopra Ridge Trek in May?",
      a: "Pack lightweight breathable layers for daytime, an insulated down jacket for cold nights, a waterproof shell for pre-monsoon afternoon rain, insect repellent, and sun protection.",
    },
    {
      q: "Is May warmer than April on Khopra Ridge?",
      a: "Yes, May is noticeably warmer than April both day and night, though it also brings a higher chance of afternoon rain and rising humidity toward late May.",
    },
    {
      q: "What time does the sun rise and set on Khopra Ridge in May?",
      a: "Sunrise falls around 5:00 AM and sunset around 6:45 PM, giving trekkers close to 13 hours of daylight.",
    },
    {
      q: "Is late May too close to the monsoon season?",
      a: "Late May sits at the edge of the pre-monsoon transition, with more frequent and sometimes heavier rain than early May. Treks still run successfully during this period, but building extra buffer days is recommended.",
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
            <span className="text-emerald-400">May Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Late Spring &amp; Pre-Monsoon Guide (May)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in May
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Warm daytime hiking, pre-monsoon rain dynamics, elevation temperature shifts, lush alpine meadows, and late spring packing strategies.
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
                🌿
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">ACA Climate Data &amp; Pre-Monsoon Monitoring</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our field team collects climate data inside the Annapurna Conservation Area to monitor pre-monsoon cloud movement and Khayer Lake pass access.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                May is the last month of Nepal&apos;s spring trekking season, and on Khopra Ridge that means one thing above all: change. Early May still feels like a continuation of April&apos;s clear, flower-filled trails, while late May starts to carry the first real signals of the approaching monsoon.
              </p>
              <p>
                Days are warm (14°C to 20°C), alpine meadows burst into green, and mornings deliver sharp views of Dhaulagiri I and Annapurna South before afternoon clouds set in.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="may-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                May Temperatures &amp; Trail Conditions by Elevation
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

            {/* Section 2: Early May vs Late May Breakdown */}
            <div id="early-vs-late-may" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Early May vs. Late May Comparison
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    Early May (1st – 15th)
                  </span>
                  <h3 className="font-bold text-emerald-950 text-lg">Stable Pre-Monsoon &amp; Clear Skies</h3>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Holds onto April&apos;s dry stability. Mornings are reliably clear (70%+ clarity), afternoon cloud buildup is light, and rain showers are brief. Excellent for high-pass photos and Khayer Lake hikes.
                  </p>
                  <span className="block text-xs font-semibold text-emerald-950">Recommended Window for All Trekkers</span>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    Late May (16th – 31st)
                  </span>
                  <h3 className="font-bold text-amber-950 text-lg">Pre-Monsoon Humidity &amp; Rain</h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Rising humidity and earlier afternoon clouds (1:00 PM). Rain showers occur more frequently (4–6 days total). Demands early 6 AM starts and packable rain shells.
                  </p>
                  <span className="block text-xs font-semibold text-amber-950">Best For: Experienced trekkers seeking solitude</span>
                </div>
              </div>
            </div>

            {/* Section 3: Essential May Packing List */}
            <div id="may-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential May Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">👕 Light Daytime &amp; Warm Night Layers</h4>
                  <p className="text-xs text-stone-600">Lightweight breathable synthetic shirts for daytime hiking (14–20°C), plus an insulated down jacket for cold ridge nights (0–6°C).</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌧️ Waterproof Shell &amp; Pack Cover</h4>
                  <p className="text-xs text-stone-600">Pre-monsoon afternoon showers require a reliable waterproof outer jacket and a rain cover for your main rucksack.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☀️ High UV &amp; Sun Protection</h4>
                  <p className="text-xs text-stone-600">High-SPF sunscreen, wide-brim sun hat, and UV sunglasses prevent intense high-altitude solar reflection near Khayer Lake.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🦟 Insect Repellent &amp; Trekking Poles</h4>
                  <p className="text-xs text-stone-600">Insect repellent for humid lower forest trails; trekking poles maintain stability on slick mud patches after rain.</p>
                </div>
              </div>
            </div>

            {/* Section 4: May vs April vs June Comparison */}
            <div id="may-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                May vs. April vs. June Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌺 April</h4>
                  <p className="text-xs text-stone-600">Peak spring bloom. Full rhododendron canopy, cooler nights (-4°C), dry trails, steady crowds.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌿 May</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Late spring transition. Warmest daytime hiking (14–20°C), green alpine meadows, 70% morning clarity, fewer crowds.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌧️ June</h4>
                  <p className="text-xs text-stone-600">Monsoon onset. High rainfall, heavy cloud cover, humid trails, leeches in lower forests.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: May Weather
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
                  May Departure Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in May with Certified Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your May trek with local experts from <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We monitor real-time pre-monsoon cloud patterns and secure comfortable community teahouse stays.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About May Treks
                  </Link>
                  <Link
                    href="/weather/best-time-to-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View All Seasonal Weather
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
                <a href="#may-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#early-vs-late-may" className="block hover:text-emerald-600 transition">
                  • Early vs Late May
                </a>
                <a href="#may-packing" className="block hover:text-emerald-600 transition">
                  • Essential Packing List
                </a>
                <a href="#may-comparison" className="block hover:text-emerald-600 transition">
                  • Apr vs May vs Jun
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
                    <Link href="/weather/khopra-trek-april" className="hover:text-emerald-700 underline">
                      April Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/summer-monsoon-khopra" className="hover:text-emerald-700 underline">
                      Monsoon Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-june" className="hover:text-emerald-700 underline">
                      June Weather Guide
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
