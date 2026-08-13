import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in December | Nepal Trek Guide",
  description: "Planning a December trek? Get real Khopra Ridge weather in December — temperatures, snowfall chances, trail conditions, mountain views, and what to pack.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-december",
  },
  openGraph: {
    title: "Khopra Ridge Weather in December: Temperature, Snowfall & Winter Trek Guide",
    description:
      "Planning a December trek? Get real Khopra Ridge weather in December — temperatures, snowfall chances, trail conditions, mountain views, and what to pack.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-december",
    type: "article",
  },
};

export default function KhopraTrekDecemberPage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "4°C to 8°C (39°F – 46°F)" },
    { label: "Ridge Nighttime Temp", value: "-10°C to -6°C (14°F – 21°F)" },
    { label: "Rain or Snow Days", value: "1 to 2 Days (Light Dusting Risk)" },
    { label: "Morning Sky Clarity", value: "95%+ Winter Horizon Clarity" },
  ];

  const elevTemps = [
    { location: "Pokhara Transit Hub", elev: "820 m", day: "15°C – 22°C", night: "5°C – 10°C", trail: "Mild, comfortable valley sun" },
    { location: "Ghandruk Village", elev: "1,940 m", day: "8°C – 15°C", night: "0°C – 5°C", trail: "Crisp autumn-to-winter transition, dry paths" },
    { location: "Tadapani Forests", elev: "2,630 m", day: "5°C – 12°C", night: "-3°C – 2°C", trail: "Cold mornings, shaded forest frost" },
    { location: "Chhistibung", elev: "2,950 m", day: "4°C – 10°C", night: "-5°C – -1°C", trail: "Freezing nights, quiet woodland trail" },
    { location: "Khopra Ridge", elev: "3,660 m", day: "4°C – 8°C", night: "-10°C – -6°C", trail: "Wind chill exposure, sub-zero freeze, 95%+ views" },
    { location: "Khayer Lake", elev: "4,500 m", day: "2°C – 6°C", night: "-12°C – -8°C", trail: "Coldest alpine pass, light snow dusting potential" },
  ];

  const faqs = [
    {
      q: "Does it snow at Khopra Ridge in December?",
      a: "Light snow is possible, particularly from mid-to-late December, though heavy or trail-blocking snowfall is uncommon this early in winter. Early mornings often feature frost on high rocks.",
    },
    {
      q: "How cold is Khopra Ridge at night in December?",
      a: "Night temperatures at Khopra Ridge typically fall between -10°C and -6°C, with Khayer Lake running even colder (-12°C to -8°C) due to higher elevation and wind exposure.",
    },
    {
      q: "What is the daytime temperature at Khopra Ridge in December?",
      a: "Daytime temperatures at the ridge generally range from 4°C to 8°C, though direct sunlight can make it feel noticeably warmer when moving.",
    },
    {
      q: "Is December a good time for the Khopra Ridge Trek?",
      a: "Yes, for trekkers prepared for cold nights and proper winter gear. December offers uncrowded trails, quiet lodges, and some of the clearest, sharpest mountain visibility of the entire year.",
    },
    {
      q: "Can beginners trek Khopra Ridge in December?",
      a: "Prepared beginners can complete this trek in December, but it demands proper winter gear (a -15°C to -20°C sleeping bag, down jacket, thermal layers) and realistic expectations about sub-zero nights.",
    },
    {
      q: "Are Khopra Ridge teahouses open in December?",
      a: "Yes, community lodges operate throughout December, with central wood stoves in dining areas. Rooms are unheated, so warm sleep gear is mandatory.",
    },
    {
      q: "Is Khayer Lake accessible during December?",
      a: "Yes, Khayer Lake is accessible in December, though shaded path sections can be icy or frosty. Trekking poles and sturdy boots with deep rubber tread are recommended.",
    },
    {
      q: "What should I pack for the Khopra Ridge Trek in December?",
      a: "Prioritize merino thermal base layers, a high-loft down jacket, a windproof shell, thermal gloves, a beanie, a headlamp, and a 4-season sleeping bag rated to -15°C or colder.",
    },
    {
      q: "Are mountain views clear at Khopra Ridge in December?",
      a: "Generally, yes. Low atmospheric humidity and minimal dust produce razor-sharp, photogenic morning views of Dhaulagiri I, Annapurna South, Nilgiri, Hiunchuli, and Machhapuchhre.",
    },
    {
      q: "Do I need a guide for Khopra Ridge Trek in December?",
      a: "A local guide is strongly recommended in December due to shorter daylight hours, sub-zero temperatures, and navigating occasional early morning icy trail patches.",
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
            <span className="text-emerald-400">December Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Early Winter &amp; Clear Horizon Profile (December)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in December
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Crystal-clear winter horizon visibility (95%+), uncrowded trails, sub-zero ridge nights (-10°C), light snow dustings, and essential winter gear.
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
                ❄️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Winter Trail Safety &amp; Operation Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our field teams manage winter lodge heating, short-day pacing, and high-ridge frost safety for December departures.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                December changes the character of the Khopra Ridge Trek. The crowds of autumn are gone, the air turns dry and sharp, and the ridge itself settles into a quiet, cold stillness that few trekkers ever see.
              </p>
              <p>
                Daytime temperatures on the ridge range from 4°C to 8°C, while nights plunge to -10°C to -6°C. In exchange, December delivers some of the crispest, most dramatic mountain panoramas of the year.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="december-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                December Temperatures &amp; Trail Conditions by Elevation
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Daytime High</th>
                      <th className="py-4 px-4 sm:px-6">Nighttime Low</th>
                      <th className="py-4 px-4 sm:px-6">Trail &amp; Winter Profile</th>
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

            {/* Section 2: Early vs Late December Dynamics */}
            <div id="early-vs-late-december" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Early December vs. Late December Comparison
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800 bg-stone-100 px-3 py-1 rounded-full border border-stone-300">
                    Early December (1st – 15th)
                  </span>
                  <h3 className="font-bold text-stone-950 text-lg">Late Autumn Resemblance</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Dry paths, frosty mornings, 4°C–8°C daytime sun. Resembles late November conditions with minimal snow risk and crisp morning view windows.
                  </p>
                  <span className="block text-xs font-semibold text-stone-950">Recommended Dry Winter Window</span>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-300">
                    Late December (16th – 31st)
                  </span>
                  <h3 className="font-bold text-blue-950 text-lg">Full Winter &amp; Snow Dustings</h3>
                  <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                    Winter firmly sets in. Night temperatures drop to -10°C at Khopra Ridge and -12°C at Khayer Lake. Increased chance of light snow dustings creating scenic white landscapes.
                  </p>
                  <span className="block text-xs font-semibold text-blue-950">Requires Sub-Zero Winter Gear</span>
                </div>
              </div>
            </div>

            {/* Section 3: Essential December Packing List */}
            <div id="december-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential December Winter Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Heavy Down Jacket &amp; 4 Layers</h4>
                  <p className="text-xs text-stone-600">Heavy merino thermals, fleece mid-layer, down jacket (-15°C rated), and a windproof shell to tackle ridge wind chill.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛌 Winter Sleeping Bag (-15°C to -20°C)</h4>
                  <p className="text-xs text-stone-600">Unheated teahouse bedrooms drop well below freezing; a 4-season winter sleeping bag plus fleece liner is essential.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🦯 Trekking Poles for Frosty Steps</h4>
                  <p className="text-xs text-stone-600">Poles provide crucial traction on early morning frozen ground and icy rocks near Khayer Lake.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🔦 Headlamp &amp; Inner Pocket Storage</h4>
                  <p className="text-xs text-stone-600">Shorter daylight hours require a headlamp. Store camera and phone batteries inside inner pockets to prevent rapid cold drain.</p>
                </div>
              </div>
            </div>

            {/* Section 4: December vs November vs January Comparison */}
            <div id="december-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                December vs. November vs. January Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏔️ November</h4>
                  <p className="text-xs text-stone-600">Peak autumn. Slightly milder nights (-6°C to 0°C), 98% sky clarity, high teahouse occupancy.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">❄️ December</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Early winter sweet spot. Quiet uncrowded trails, 95%+ horizon clarity, -10°C ridge freeze, light snow dusting potential.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌨️ January</h4>
                  <p className="text-xs text-stone-600">Deep winter. Coldest month (-12°C+ night), higher snow accumulation, occasional trail delays.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: December Weather
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
                  December Winter Departure Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in December with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your winter trek with licensed Nepal operator <strong>EMD Treks</strong> (NTB License #8928-091). We arrange ACAP/TIMS permits, winter-experienced local guides, and community lodge bookings.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About December Treks
                  </Link>
                  <Link
                    href="/weather/winter-season-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Winter Season Hub
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
                <a href="#december-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#early-vs-late-december" className="block hover:text-emerald-600 transition">
                  • Early vs Late December
                </a>
                <a href="#december-packing" className="block hover:text-emerald-600 transition">
                  • Essential Packing List
                </a>
                <a href="#december-comparison" className="block hover:text-emerald-600 transition">
                  • Nov vs Dec vs Jan
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
                    <Link href="/weather/winter-season-khopra" className="hover:text-emerald-700 underline">
                      Winter Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-november" className="hover:text-emerald-700 underline">
                      November Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-january" className="hover:text-emerald-700 underline">
                      January Weather Guide
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
