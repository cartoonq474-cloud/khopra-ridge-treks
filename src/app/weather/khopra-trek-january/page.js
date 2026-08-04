import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in January: Temperature, Snowfall & Trekking Conditions",
  description:
    "Planning a winter trek? Here's what January weather at Khopra Ridge really feels like — temperatures, snowfall, trail conditions, gear, and safety tips from our local team.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/khopra-trek-january",
  },
  openGraph: {
    title: "Khopra Ridge Weather in January: Temperature, Snowfall & Trekking Conditions",
    description:
      "Planning a winter trek? Here's what January weather at Khopra Ridge really feels like — temperatures, snowfall, trail conditions, gear, and safety tips from our local team.",
    url: "https://khopraridgetrek.com/weather/khopra-trek-january",
    type: "article",
  },
};

export default function KhopraTrekJanuaryPage() {
  const quickStats = [
    { label: "Ridge Daytime Temp", value: "2°C to 5°C (35°F – 41°F)" },
    { label: "Ridge Nighttime Temp", value: "-8°C to -15°C (5°F – 17°F)" },
    { label: "Morning Visibility", value: "95% Clear Sky Index" },
    { label: "Traction Equipment", value: "Microspikes Mandatory" },
  ];

  const elevTemps = [
    { location: "Ghandruk & Low Villages", elev: "~1,940 m", day: "10°C – 14°C", night: "0°C – 4°C", trail: "Dry & clear" },
    { location: "Tadapani & Chhistibung", elev: "~2,630m – 3,000m", day: "5°C – 9°C", night: "-4°C – 0°C", trail: "Frosty mornings" },
    { location: "Bayeli Kharka", elev: "~3,410 m", day: "3°C – 7°C", night: "-8°C – -4°C", trail: "Snow patches & ice" },
    { location: "Khopra Ridge", elev: "~3,660 m", day: "2°C – 5°C", night: "-12°C – -8°C", trail: "Packed snow & wind chill" },
    { location: "Khayer Lake", elev: "~4,660 m", day: "-2°C – 3°C", night: "-18°C – -12°C", trail: "Deep snow & frozen lake" },
  ];

  const faqs = [
    {
      q: "How cold does Khopra Ridge get in January?",
      a: "Daytime temperatures at Khopra Ridge typically range from 2°C to 5°C, while nighttime lows commonly fall between -8°C and -12°C, with occasional colder snaps below -15°C.",
    },
    {
      q: "Does it snow on the Khopra Ridge Trek in January?",
      a: "Yes. Snow becomes increasingly likely from Bayeli Kharka upward, and Khopra Ridge itself often holds a snow layer for much of the month.",
    },
    {
      q: "Is January a good time to visit Khopra Ridge?",
      a: "January is a strong choice for trekkers who want clear mountain views and quiet trails and don't mind cold temperatures and the possibility of snow on the upper route.",
    },
    {
      q: "Are teahouses open in January?",
      a: "Most community lodges along the route stay open through January, though a few of the higher, more basic options may run reduced services during the quietest weeks.",
    },
    {
      q: "Can beginners trek to Khopra Ridge in winter?",
      a: "It's possible, but January is better suited to trekkers with some prior high-altitude or cold-weather hiking experience, given the extreme overnight temperatures and potential ice.",
    },
    {
      q: "Is Khayer Lake accessible in January?",
      a: "Yes, though the extension sees the heaviest snow accumulation on the route and can take longer than usual, sometimes requiring a guide's judgment on conditions.",
    },
    {
      q: "What clothes should I pack for January trekking?",
      a: "A three-layer system with a moisture-wicking base, insulating mid-layer, and windproof outer shell, along with a heavyweight down jacket, insulated gloves, and thermal base layers.",
    },
    {
      q: "Are microspikes necessary on the trail?",
      a: "Yes, particularly above Bayeli Kharka, where frost and packed snow regularly create icy, slippery sections in the early morning.",
    },
    {
      q: "What mountains can you see from Khopra Ridge in January?",
      a: "On a clear day, you can see Dhaulagiri, Annapurna South, Nilgiri, Machhapuchhre (Fishtail), and Hiunchuli, often with unusually sharp winter clarity.",
    },
    {
      q: "Is January colder than December?",
      a: "Yes, January nights are typically colder than December's, though January often delivers clearer skies once a storm system has passed through.",
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
            <span className="text-emerald-400">January Weather</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-900/60 text-blue-300 border border-blue-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Deep Winter Monthly Profile (January)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Weather in January
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Temperature breakdowns by elevation, snowfall patterns, black ice hazards, microspike requirements, and crystal-clear winter visibility.
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
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800 font-bold text-xl flex items-center justify-center shrink-0">
                🌡️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">January Trail &amp; Climate Monitoring</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides track real-time January snow depths, ridge wind shifts, and community teahouse heating operations.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                January is the coldest month on the Khopra Ridge Trek, but it is also one of the clearest. While lowland villages like Ghandruk stay mild enough for a warm fleece, temperatures at Khopra Ridge (3,660m) regularly drop well below freezing after dark. What makes January worth considering is the payoff: dry trails, empty teahouses, and some of the sharpest mountain views of the entire year.
              </p>
            </div>

            {/* Section 1: Temperature by Elevation Table */}
            <div id="january-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                January Temperatures &amp; Trail Conditions by Elevation
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Daytime Range</th>
                      <th className="py-4 px-4 sm:px-6">Nighttime Range</th>
                      <th className="py-4 px-4 sm:px-6">Trail &amp; Snow Condition</th>
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

            {/* Section 2: Snowfall & Black Ice Hazards */}
            <div id="january-snow-ice" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Snowfall Patterns, Black Ice &amp; Footing Safety
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌨️ Defined Storm Cycles</h4>
                  <p className="text-xs text-stone-600">January snow arrives in 1-to-2 day storm windows, followed by 4–5 consecutive days of cloudless, razor-sharp morning skies.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧊 Black Ice on Shaded Switchbacks</h4>
                  <p className="text-xs text-stone-600">Overnight meltwater freezes on shaded north-facing forest trails above Chhistibung. Microspikes are required for early starts.</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-blue-950">🏔️ Khayer Lake Extension Hazard</h4>
                  <p className="text-xs text-blue-900 leading-relaxed">The high trail to Khayer Lake (4,660m) accumulates deep snow drifts. Always consult local teahouse owners before setting out.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">⏰ Shorter 10.5-Hour Daylight Windows</h4>
                  <p className="text-xs text-stone-600">Days are short in January. Start walking by 7:00 AM to reach high teahouses before sunset temperatures plunge.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Essential January Packing Gear */}
            <div id="january-gear" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential January Packing Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Sub-Zero Down Jacket &amp; Thermals</h4>
                  <p className="text-xs text-stone-600">Heavyweight down coat rated for -15°C is mandatory for unheated lodge bedrooms and sunrise viewing.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛌 Sleeping Bag (-15°C to -20°C)</h4>
                  <p className="text-xs text-stone-600">Bring a 4-season down sleeping bag. Lodge dining room stoves go out by 8:30 PM, after which rooms freeze.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">⛓️ Microspikes &amp; Insulated Boots</h4>
                  <p className="text-xs text-stone-600">Waterproof insulated boots paired with slip-on microspikes prevent slipping on hard-packed ice.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🔋 Battery Warmth &amp; Insulated Bottles</h4>
                  <p className="text-xs text-stone-600">Store camera batteries and phones inside your sleeping bag overnight. Insulated water flasks prevent freezing.</p>
                </div>
              </div>
            </div>

            {/* Section 4: January vs December vs February */}
            <div id="january-comparison" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                January vs. December vs. February Comparison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ December</h4>
                  <p className="text-xs text-stone-600">Milder early winter conditions (-5°C to -8°C night). Minimal snow on lower trails, quiet teahouses.</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-blue-950">🧊 January</h4>
                  <p className="text-xs text-blue-900 leading-relaxed">Coldest &amp; sharpest month (-12°C to -15°C night). Deepest snow risk on upper passes; highest optical clarity.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌤️ February</h4>
                  <p className="text-xs text-stone-600">Gradual warming transition. High snow remains on upper passes while lower valleys warm up.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: January Weather
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
                  January Trek Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in January with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your January winter trek with certified local guides from <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We provide real-time snow checks, microspike assistance, and open teahouse reservations.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About January Treks
                  </Link>
                  <Link
                    href="/weather/winter-season-khopra"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Full Winter Guide
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
                <a href="#january-temperatures" className="block hover:text-emerald-600 transition">
                  • Temperature by Elevation
                </a>
                <a href="#january-snow-ice" className="block hover:text-emerald-600 transition">
                  • Snowfall &amp; Black Ice
                </a>
                <a href="#january-gear" className="block hover:text-emerald-600 transition">
                  • January Packing Gear
                </a>
                <a href="#january-comparison" className="block hover:text-emerald-600 transition">
                  • Dec vs Jan vs Feb
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
                    <Link href="/weather/khopra-trek-december" className="hover:text-emerald-700 underline">
                      December Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-february" className="hover:text-emerald-700 underline">
                      February Weather Guide
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
