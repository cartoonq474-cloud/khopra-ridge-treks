import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Spring Trekking on Khopra Ridge (March–May) | Nepal Trek Guide",
  description: "Planning spring trekking on Khopra Ridge? Get our complete March–May guide to weather, rhododendron blooms, trail conditions, mountain views, and packing tips.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/spring-season-khopra",
  },
  openGraph: {
    title: "Spring Trekking on Khopra Ridge (March–May): Complete Seasonal Guide",
    description:
      "Planning spring trekking on Khopra Ridge? Get our complete March–May guide to weather, rhododendron blooms, trail conditions, mountain views, and packing tips.",
    url: "https://khopraridgetrek.com/weather/spring-season-khopra",
    type: "article",
  },
};

export default function SpringSeasonKhopraPage() {
  const quickStats = [
    { label: "Season Window", value: "March – May (Pre-Monsoon)" },
    { label: "Peak Flower Canopy", value: "Late March – Mid-April" },
    { label: "Daytime Temp Range", value: "10°C to 20°C (Mid-Elevations)" },
    { label: "Khayer Lake Access", value: "Open (Lingering Snow in March)" },
  ];

  const tempTable = [
    { location: "Ghandruk", elev: "~1,940 m", dayMarch: "14–17°C", dayMay: "20–23°C", nightMarch: "3–6°C", nightMay: "9–12°C" },
    { location: "Tadapani", elev: "~2,630 m", dayMarch: "10–13°C", dayMay: "16–19°C", nightMarch: "0–3°C", nightMay: "6–9°C" },
    { location: "Bayeli Kharka", elev: "~3,410 m", dayMarch: "6–9°C", dayMay: "12–15°C", nightMarch: "-4–0°C", nightMay: "2–5°C" },
    { location: "Khopra Ridge", elev: "~3,660 m", dayMarch: "4–7°C", dayMay: "10–13°C", nightMarch: "-6–(-2)°C", nightMay: "0–3°C" },
    { location: "Khayer Lake", elev: "~4,660 m", dayMarch: "0–3°C", dayMay: "6–9°C", nightMarch: "-10–(-6)°C", nightMay: "-3–0°C" },
  ];

  const monthBreakdown = [
    {
      month: "March (Early Spring)",
      theme: "Quiet Trails & Lingering Snow",
      desc: "Winter cold retreats. Lower forests near Ghandruk begin blooming in late March. Lingering snow patches near Khopra Ridge and Khayer Lake.",
      bestFor: "Trekkers seeking quiet trails who don't mind crisp high-altitude nights.",
    },
    {
      month: "April (Peak Bloom)",
      theme: "Classic Flower Canopy & Clear Mornings",
      desc: "The premier spring trekking month. Entire hillsides between Tadapani, Swanta, and Bayeli turn deep red and pink. Stable trails and clear sunrise panoramas.",
      bestFor: "First-time trekkers, photographers, and flower lovers.",
    },
    {
      month: "May (Late Spring)",
      theme: "Warm Days & Pre-Monsoon Transition",
      desc: "Warmest spring month across all elevations. Lush green forests as flower blooms taper off. Afternoon clouds and pre-monsoon haze build by midday.",
      bestFor: "Trekkers who prefer mild temperatures and lush green landscapes.",
    },
  ];

  const faqs = [
    {
      q: "Is spring the best season for the Khopra Ridge Trek?",
      a: "Spring is one of the two best seasons for this trek, alongside autumn. It's the stronger choice if you want to see rhododendron forests in bloom and active birdlife, while autumn offers slightly more stable weather overall.",
    },
    {
      q: "What is the weather like on Khopra Ridge in March?",
      a: "March brings mild daytime temperatures at lower elevations, cold nights above 3,000 meters, and possible lingering snow on higher sections of the trail near the ridge and Khayer Lake.",
    },
    {
      q: "Is April the best month to trek Khopra Ridge?",
      a: "April is generally considered the strongest month, combining peak rhododendron bloom with clear, stable trekking conditions across the whole route.",
    },
    {
      q: "Can I visit Khayer Lake during spring?",
      a: "Yes, Khayer Lake is typically accessible from Khopra Ridge throughout spring, though March trekkers should be prepared for possible snow at that altitude, with April and May usually offering clearer conditions.",
    },
    {
      q: "When do rhododendrons bloom on Khopra Ridge?",
      a: "Blooming begins at lower elevations in March, reaches its peak across the trail in April, and gradually tapers off through May, with exact timing shifting slightly from year to year.",
    },
    {
      q: "Does snow remain on the trail in spring?",
      a: "Some snow can linger on higher sections near Khopra Ridge and Khayer Lake in early March, but most of the trail is fully clear by mid-to-late April.",
    },
    {
      q: "What should I pack for a spring trek?",
      a: "A layering system covering a base layer, insulating mid-layer, and waterproof shell, along with sturdy trekking boots, sun protection, a headlamp, and rain gear, since conditions can shift from cold mornings to warm afternoons.",
    },
    {
      q: "Is spring better than autumn for the Khopra Ridge Trek?",
      a: "Spring offers blooming forests and stronger wildlife activity, while autumn tends to have more consistently stable weather. Neither is universally better — the right choice depends on what you value most.",
    },
    {
      q: "Are community lodges and teahouses crowded in April?",
      a: "April sees the highest trekker numbers of the spring months, so lodges can be busier than in March or May, though the route remains far less crowded than popular routes like Poon Hill or the Annapurna Circuit.",
    },
    {
      q: "What wildlife can I see during spring?",
      a: "The Himalayan monal (Danphe) is one of the most notable sightings, along with a range of other bird species that become more active as temperatures warm through the Annapurna Conservation Area.",
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
            <span className="text-emerald-400">Spring Season</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Pre-Monsoon Trekking Guide (March–May)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Spring Trekking on Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete guide to March, April, and May: rhododendron forest blooms, elevation temperatures, mountain panoramas, and packing essentials.
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
                🌸
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Spring Trail Operations &amp; Flower Tracking</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides track real-time spring snowmelt, rhododendron bloom levels, and community lodge availability.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Spring is one of the two peak trekking seasons in Nepal, and on Khopra Ridge it is arguably the more rewarding one. Between March and May, the trail climbs through forests that shift from winter dormancy into a vibrant canopy of blooming rhododendrons, while high ridgelines open onto clear morning panoramas of Dhaulagiri and Annapurna South.
              </p>
              <p>
                Unlike busier Annapurna circuits, Khopra Ridge stays noticeably quieter even during peak April bloom, offering an intimate Himalayan experience.
              </p>
            </div>

            {/* Section 1: Temperature Table by Elevation */}
            <div id="spring-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spring Temperatures by Elevation
              </h2>
              
              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Daytime (March)</th>
                      <th className="py-4 px-4 sm:px-6">Daytime (May)</th>
                      <th className="py-4 px-4 sm:px-6">Night (March)</th>
                      <th className="py-4 px-4 sm:px-6">Night (May)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {tempTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs text-stone-500">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-800">{row.dayMarch}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800">{row.dayMay}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-800">{row.nightMarch}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800">{row.nightMay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Month-by-Month Breakdown */}
            <div id="spring-months" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Spring Breakdown
              </h2>

              <div className="space-y-4">
                {monthBreakdown.map((m, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-2 gap-1">
                      <h3 className="font-bold text-stone-950 text-lg">{m.month}</h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
                        {m.theme}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{m.desc}</p>
                    <p className="text-xs font-semibold text-emerald-700">🎯 Recommended for: {m.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Flora, Wildlife & Views */}
            <div id="flora-views" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spring Blooms, Wildlife &amp; Panorama Photography
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌺 Rhododendron Canopies</h4>
                  <p className="text-xs text-stone-600">Forests between Tadapani, Swanta, and Bayeli Kharka turn crimson, magenta, and white from late March to mid-April.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🐦 Active Himalayan Birdlife</h4>
                  <p className="text-xs text-stone-600">The Himalayan monal (Danphe) and forest songbirds are highly active along the subalpine forest edges as temperatures warm.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌄 Sunrise Panorama Views</h4>
                  <p className="text-xs text-stone-600">Early morning light illuminates Annapurna South, Dhaulagiri I, Nilgiri, and Machhapuchhre before afternoon clouds form.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📸 Photography Gear Tip</h4>
                  <p className="text-xs text-stone-600">Cold spring mornings drain batteries quickly at 3,660m. Keep spare camera batteries warm inside your jacket pocket.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Spring vs Autumn Comparison */}
            <div id="spring-vs-autumn" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spring vs. Autumn Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌸 Why Choose Spring?</h4>
                  <ul className="text-xs text-emerald-900 leading-relaxed space-y-1 list-disc pl-4">
                    <li>Rhododendron forests in vibrant bloom</li>
                    <li>Active Himalayan wildlife and birdlife</li>
                    <li>Slightly warmer daytime hiking temperatures</li>
                    <li>Fewer overall crowds than peak October</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 Why Choose Autumn?</h4>
                  <ul className="text-xs text-stone-600 leading-relaxed space-y-1 list-disc pl-4">
                    <li>Crisp, dust-free post-monsoon mountain clarity</li>
                    <li>Minimal afternoon cloud cover or rain risk</li>
                    <li>Dry, firm trail conditions across all passes</li>
                    <li>Golden grassland contrast with snow peaks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Spring Trekking
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
                  Spring Departure Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Book Your Spring Trek on Khopra Ridge
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Trek during peak rhododendron season with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We handle community lodge reservations, private transfers, and experienced local guide services.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Spring Treks
                  </Link>
                  <Link
                    href="/ecology/spring-rhododendron-bloom"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Rhododendron Timeline Guide
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
                <a href="#spring-temperatures" className="block hover:text-emerald-600 transition">
                  • Elevation Temperatures
                </a>
                <a href="#spring-months" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Breakdown
                </a>
                <a href="#flora-views" className="block hover:text-emerald-600 transition">
                  • Blooms &amp; Panoramas
                </a>
                <a href="#spring-vs-autumn" className="block hover:text-emerald-600 transition">
                  • Spring vs. Autumn
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Seasonal Guides</span>
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
                    <Link href="/weather/khopra-trek-april" className="hover:text-emerald-700 underline">
                      April Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/spring-rhododendron-bloom" className="hover:text-emerald-700 underline">
                      Rhododendron Bloom Guide
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
