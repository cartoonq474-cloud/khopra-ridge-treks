import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Spring Rhododendron Bloom Timeline in Nepal: Month-by-Month Guide for Annapurna Treks",
  description:
    "See exactly when rhododendrons bloom in Nepal's Annapurna region, month by month and altitude by altitude, plus the best trails to catch peak color on the Khopra Ridge Trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/spring-rhododendron-bloom",
  },
  openGraph: {
    title: "Spring Rhododendron Bloom Timeline in Nepal: Month-by-Month Guide for Annapurna Treks",
    description:
      "See exactly when rhododendrons bloom in Nepal's Annapurna region, month by month and altitude by altitude, plus the best trails to catch peak color on the Khopra Ridge Trek.",
    url: "https://khopraridgetrek.com/ecology/spring-rhododendron-bloom",
    type: "article",
  },
};

export default function SpringRhododendronBloomPage() {
  const quickStats = [
    { label: "Season Duration", value: "Late February to Early May (~10 Weeks)" },
    { label: "Peak Combined Window", value: "Mid-March to Mid-April" },
    { label: "Elevation Range", value: "1,500m to 3,500m" },
    { label: "National Flower", value: "Lali Gurans (R. arboreum)" },
  ];

  const calendarTable = [
    { period: "Late February", elev: "1,500–2,000 m", locations: "Ghandruk, Swanta", details: "First deep red blooms against terraced farmland & stone villages" },
    { period: "March", elev: "2,000–2,700 m", locations: "Tadapani, Ghorepani", details: "Peak canopy color; dense pink, magenta & white forest tunnels" },
    { period: "April", elev: "2,700–3,200 m", locations: "Dobato, Khopra Ridge", details: "Thick mid-to-high forest bloom; optimal density on quiet trails" },
    { period: "Early May", elev: "3,200–3,500 m", locations: "Bayeli Kharka, Upper Ridges", details: "Dwarf white & pale yellow alpine shrubs near the treeline" },
  ];

  const altitudeBands = [
    { band: "Lower Forest Zone (1,500–2,200m)", species: "Rhododendron arboreum (Deep Red)", desc: "Blooms alongside terraced fields and villages like Ghandruk and Swanta in late February and March." },
    { band: "Mid-Elevation Zone (2,200–3,000m)", species: "R. arboreum & sub-species (Pink, Magenta, White)", desc: "Dense, continuous canopy tunnels through Tadapani and Chhistibung in March and early April." },
    { band: "Upper Forest & Pastures (3,000–3,500m)", species: "Rhododendron campanulatum (Pale Lilac, Yellow, White)", desc: "Compact alpine shrubs blooming near Dobato and Bayeli Kharka through April and early May." },
  ];

  const faqs = [
    {
      q: "When do rhododendrons bloom in Nepal?",
      a: "Blooming generally runs from late February through early May, starting in lower valleys around 1,500 meters and moving progressively higher as the weeks pass.",
    },
    {
      q: "What is the best month to see rhododendrons in Annapurna?",
      a: "March and April together capture the widest range of blooming zones, with March favoring lower and mid-altitude forests and April favoring mid-to-high elevations like Dobato and Khopra Ridge.",
    },
    {
      q: "How long does the rhododendron blooming season last?",
      a: "The full season stretches around ten to eleven weeks from first bloom to final flowering, though any single elevation band typically shows peak color for only two to three weeks.",
    },
    {
      q: "Does altitude affect rhododendron flowering?",
      a: "Yes. Lower elevations bloom first due to warmer temperatures, while higher elevations bloom several weeks later as the season's warmth gradually climbs the mountainside.",
    },
    {
      q: "Where are the best rhododendron forests near Khopra Ridge?",
      a: "Tadapani and Dobato both offer dense, mature forest, while Ghorepani and Muldai combine flowering shrubs with strong mountain views.",
    },
    {
      q: "Are rhododendrons still blooming in May?",
      a: "By early May, blooming is generally limited to the highest pastures near Bayeli Kharka and the upper ridge, with dwarf white and pale yellow species finishing out the season.",
    },
    {
      q: "Which rhododendron species grow in Nepal?",
      a: "Rhododendron arboreum, Nepal's national flower, dominates lower elevations, while Rhododendron campanulatum and related dwarf species take over above 3,000 meters.",
    },
    {
      q: "Is March or April better for trekking?",
      a: "March tends to have denser crowds but very reliable color at Ghorepani and Tadapani, while April offers quieter trails and better timing for Dobato and Khopra Ridge.",
    },
    {
      q: "Can beginners trek during rhododendron season?",
      a: "Yes. The lower and mid-altitude sections of the route are accessible to trekkers with moderate fitness, and the moderate spring temperatures make conditions comfortable.",
    },
    {
      q: "Which Annapurna trek has the best spring flowers?",
      a: "The Khopra Ridge Trek is particularly strong for this, since it passes through all three major elevation bands — low, mid, and high — giving trekkers a chance to see the bloom at multiple stages within a single trip.",
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Forests</Link>
            <span>/</span>
            <span className="text-emerald-400">Spring Rhododendron Bloom</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Seasonal Phenology &amp; Bloom Calendar
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Spring Rhododendron Bloom Timeline
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Month-by-month and altitude-by-altitude guide to Nepal&apos;s national flower in the Annapurna region and Khopra Ridge circuit.
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
                <h4 className="font-bold text-stone-900 text-base">Seasonal Bloom Tracking by Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our team tracks the upward movement of spring blossoms every year.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Every spring, the hillsides above the Kali Gandaki and Modi Khola valleys catch fire in slow motion. <strong>Rhododendron arboreum</strong>, known across Nepal as <em>Lali Gurans</em>, is the country&apos;s national flower, and between late February and early May it turns entire mountainsides into shifting bands of red, pink, magenta, and white.
              </p>
              <p>
                This isn&apos;t a single event you can pin to one week on a calendar. The spring rhododendron bloom timeline in Annapurna is a moving process: it starts low in terraced villages and climbs steadily uphill over ten weeks.
              </p>
            </div>

            {/* Section 1: The Moving Bloom Line */}
            <div id="moving-bloom-line" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Understanding Nepal&apos;s Pre-Monsoon Phenology
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  As temperatures rise after winter, snowmelt provides soil moisture just as daylight lengthens. Colder air at higher elevations delays flowering, creating the <strong>vertical bloom wave</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌡️ Temperature Gradient</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Lower valleys warm up first in February, while high ridges near Khopra Danda remain cold until April.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🏔️ Altitude Progression</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Flowering moves steadily uphill from 1,500m in late February to 3,500m by early May.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌲 Old-Growth Canopies</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      ACAP protections preserve centuries-old rhododendron trees with trunks over a meter thick near Tadapani.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Month-by-Month Bloom Calendar Table */}
            <div id="bloom-calendar" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Bloom Calendar
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Period</th>
                      <th className="py-4 px-4 sm:px-6">Elevation Band</th>
                      <th className="py-4 px-4 sm:px-6">Key Trail Locations</th>
                      <th className="py-4 px-4 sm:px-6">What You&apos;ll See</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {calendarTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.period}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600 font-medium">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-700 font-semibold">{row.locations}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Altitude Band Breakdown */}
            <div id="altitude-bands" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Rhododendron Bloom by Altitude Band
              </h2>

              <div className="space-y-4">
                {altitudeBands.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-stone-950 text-lg">{item.band}</h3>
                      <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
                        {item.species}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Photography & Logistics */}
            <div id="photography-planning" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spring Photography &amp; Logistics Tips
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌅 Photography Window</h4>
                  <p className="text-xs text-stone-600">Early morning post-sunrise light produces vibrant red color saturation. Soft overcast lighting softens heavy canopy shadows.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏡 Lodge Availability</h4>
                  <p className="text-xs text-stone-600">Ghorepani lodges fill fast in March. Dobato and Khopra Ridge community lodges offer quieter spring lodging options.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Spring Rhododendron Bloom
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
                  Spring Bloom Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Catch Peak Rhododendron Color with Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your spring journey with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides track real-time elevation bloom lines to ensure you walk through peak flower canopy.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Spring Treks
                  </Link>
                  <Link
                    href="/ecology/rhododendron-forests"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Rhododendron Forest Guide
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
                <a href="#moving-bloom-line" className="block hover:text-emerald-600 transition">
                  • Pre-Monsoon Phenology
                </a>
                <a href="#bloom-calendar" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Calendar
                </a>
                <a href="#altitude-bands" className="block hover:text-emerald-600 transition">
                  • Altitude Band Breakdown
                </a>
                <a href="#photography-planning" className="block hover:text-emerald-600 transition">
                  • Photography &amp; Logistics
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/rhododendron-forests" className="hover:text-emerald-700 underline">
                      Rhododendron Forests Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/flora-of-khopra" className="hover:text-emerald-700 underline">
                      Flora of Khopra Trail
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/spring-season-khopra" className="hover:text-emerald-700 underline">
                      Spring Season Weather Guide
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
