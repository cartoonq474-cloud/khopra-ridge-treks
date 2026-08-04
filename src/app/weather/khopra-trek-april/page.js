import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in April: Temperature, Trail Conditions & Trekking Guide",
  description:
    "Planning to trek in April? Here's what Khopra Ridge weather really feels like — temperatures, rainfall, rhododendron season, trail conditions, and what to pack.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-april",
  },
  openGraph: {
    title: "Khopra Ridge Weather in April: Temperature, Trail Conditions & Trekking Guide",
    description:
      "Planning to trek in April? Here's what Khopra Ridge weather really feels like — temperatures, rainfall, rhododendron season, trail conditions, and what to pack.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-april",
    type: "article",
  },
};

export default function KhopraTrekAprilPage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "8°C to 14°C (46°F – 57°F)" },
    { label: "Ridge Nighttime Temp", value: "-4°C to 2°C (25°F – 36°F)" },
    { label: "Rhododendron Status", value: "Peak Red & Pink Canopy Bloom" },
    { label: "Rainfall Profile", value: "Moderate Afternoon Showers (2-3 Days)" },
  ];

  const elevTemps = [
    { location: "Ghandruk & Lower Valleys", elev: "1,940 m", day: "14°C – 18°C", night: "5°C – 8°C", trail: "Warm, spring-like, dry" },
    { location: "Tadapani Forests", elev: "2,630 m", day: "12°C – 15°C", night: "2°C – 5°C", trail: "Dense blooming rhododendron canopy" },
    { location: "Chhistibung", elev: "2,900 m", day: "9°C – 13°C", night: "0°C – 3°C", trail: "Cool alpine forest, dry footing" },
    { location: "Bayeli Kharka", elev: "3,410 m", day: "7°C – 11°C", night: "-2°C – 1°C", trail: "Open meadows, cool breeze" },
    { location: "Khopra Ridge", elev: "3,660 m", day: "6°C – 11°C", night: "-4°C – 2°C", trail: "Exposed ridge, panoramic skies" },
    { location: "Khayer Lake", elev: "4,660 m", day: "2°C – 7°C", night: "-10°C – -4°C", trail: "Leftover snow patches on high pass" },
  ];

  const faqs = [
    {
      q: "Is April a good time for the Khopra Ridge Trek?",
      a: "Yes. April combines mild daytime temperatures, mostly dry trails, strong morning mountain visibility, and peak rhododendron bloom, making it one of the strongest overall months for this trek.",
    },
    {
      q: "How cold does Khopra Ridge get in April?",
      a: "Daytime temperatures are generally comfortable for hiking (8°C–14°C), but nights at Khopra Ridge and Khopra Danda can drop close to or slightly below freezing (-4°C to 2°C).",
    },
    {
      q: "Does it snow on Khopra Ridge in April?",
      a: "Fresh snowfall is uncommon by April, though leftover snow patches can still appear on shaded or higher sections of the trail, particularly near Khayer Lake.",
    },
    {
      q: "Can you visit Khayer Lake in April?",
      a: "Yes, Khayer Lake is generally accessible in April, though trekkers should expect colder temperatures and possible leftover snow compared to Khopra Ridge itself.",
    },
    {
      q: "Are rhododendrons in bloom in April?",
      a: "Yes, April is peak rhododendron season on this route, with forests around Ghandruk and Tadapani showing the fullest red, pink, and white bloom canopy.",
    },
    {
      q: "How many rainy days does Khopra Ridge receive in April?",
      a: "Rain in April is moderate and usually limited to short afternoon or evening showers rather than sustained rainfall, with mornings typically staying dry and clear.",
    },
    {
      q: "What clothes should I pack for Khopra Ridge in April?",
      a: "A layering system with a base layer, insulating mid-layer, warm down jacket for ridge nights, waterproof shell, and accessories like gloves and a warm hat covers April's mix.",
    },
    {
      q: "Is April better than October for the Khopra Ridge Trek?",
      a: "It depends on priorities — October offers more consistent all-day visibility, while April adds peak rhododendron blooms and generally quieter trails.",
    },
    {
      q: "Are teahouses and community lodges crowded in April?",
      a: "April sees steady trekker traffic and can get busy during peak bloom weeks, so booking lodges and guides in advance through local operators is recommended.",
    },
    {
      q: "Is the Khopra Ridge Trek suitable for beginners in April?",
      a: "Yes, April's moderate temperatures and mostly dry trail conditions make it one of the more forgiving and approachable months for first-time Himalayan trekkers.",
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
            <span className="text-emerald-400">April Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Peak Spring &amp; Floral Bloom (April)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in April
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Peak rhododendron bloom, mild hiking weather, elevation temperatures, afternoon cloud patterns, and spring packing strategies.
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
                🌺
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Peak Spring Operations &amp; Community Reservations</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local team secures priority community teahouse accommodation in Swanta, Chhistibung, and Khopra Danda during April peak bloom.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                April is one of the most rewarding months to trek Khopra Ridge. Days are mild and sunny, nights stay cool at higher elevations, and the forests along the trail turn brilliant shades of crimson red, pink, and white as the national flower — the rhododendron — reaches full bloom.
              </p>
              <p>
                Trails are dry and forgiving, morning mountain panoramas are clear, and the overall trekking experience feels comfortable without the heavy trail traffic of peak autumn.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="april-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                April Temperatures &amp; Trail Conditions by Elevation
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

            {/* Section 2: Rhododendron Season Highlights */}
            <div id="rhododendron-bloom" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Peak Rhododendron Bloom &amp; Spring Photography
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌺 Tadapani to Swanta Canopy</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Dense oak and rhododendron forests around Tadapani and Swanta burst into full bloom, creating tunnels of red, pink, and ivory white flowers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌅 Golden Hour Sunrise Light</h4>
                  <p className="text-xs text-stone-600">Combine morning golden-hour light hitting Dhaulagiri I and Annapurna South with blooming forest foregrounds for iconic photography.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☁️ Afternoon Cloud Rhythm</h4>
                  <p className="text-xs text-stone-600">Valley thermal moisture creates afternoon cloud build-up around 1:00 PM. Start daily hikes by 7:00 AM for maximum mountain clarity.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏔️ Visible Himalayan Peaks</h4>
                  <p className="text-xs text-stone-600">Panoramic morning sightlines to Annapurna South, Dhaulagiri I, Nilgiri Himal, Machhapuchhre, Hiunchuli, and Gurja Himal.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Essential April Packing List */}
            <div id="april-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential April Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 3-Layer Versatile Clothing</h4>
                  <p className="text-xs text-stone-600">Moisture-wicking daytime shirt, fleece mid-layer, and a warm down jacket for ridge nights when temps drop near 0°C.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌧️ Waterproof Rain Shell</h4>
                  <p className="text-xs text-stone-600">Lightweight packable rain shell protects against short, localized pre-monsoon afternoon showers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☀️ Sun &amp; UV Protection</h4>
                  <p className="text-xs text-stone-600">High SPF 50+ sunscreen, wide-brim sun hat, and UV sunglasses prevent intense high-altitude solar glare burns.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">👢 Boots &amp; Trekking Poles</h4>
                  <p className="text-xs text-stone-600">Broken-in trekking boots handle dry trails and muddy forest patches. Poles ease knee stress on steep stair sections.</p>
                </div>
              </div>
            </div>

            {/* Section 4: April vs March vs October vs November */}
            <div id="april-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                April vs. March vs. October Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌸 March</h4>
                  <p className="text-xs text-stone-600">Transition month. Early floral buds, colder nights (-5°C), leftover snow on high passes, quiet trails.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌺 April</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Peak spring bloom. Full rhododendron canopy, mild hiking days (8–14°C), dry trails, steady trekker traffic.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 October</h4>
                  <p className="text-xs text-stone-600">Peak post-monsoon autumn. Highest all-day sky clarity, no floral blooms, highest overall lodge demand.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: April Weather
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
                  April Bloom Departures
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in April with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Secure your peak spring departure with licensed Nepal trekking operator <strong>EMD Treks</strong> (NTB License #8928-091). We guarantee community teahouse reservations, ACAP permits, and experienced local guide services.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About April Treks
                  </Link>
                  <Link
                    href="/weather/spring-season-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Explore Spring Season Hub
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
                <a href="#april-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#rhododendron-bloom" className="block hover:text-emerald-600 transition">
                  • Rhododendron Season
                </a>
                <a href="#april-packing" className="block hover:text-emerald-600 transition">
                  • Essential Packing List
                </a>
                <a href="#april-comparison" className="block hover:text-emerald-600 transition">
                  • Mar vs Apr vs Oct
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
                    <Link href="/weather/spring-season-khopra" className="hover:text-emerald-700 underline">
                      Spring Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-march" className="hover:text-emerald-700 underline">
                      March Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-may" className="hover:text-emerald-700 underline">
                      May Weather Guide
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
