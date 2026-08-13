import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Weather & Seasonal Visibility | Khopra Ridge Tre",
  description: "Planning a trek to Khayer Lake? Get a season-by-season and month-by-month breakdown of Khayer Lake weather, temperature, wind, snowfall, and visibility —.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-weather",
  },
  openGraph: {
    title: "Khayer Lake Weather & Seasonal Visibility: Best Time to Visit (Climate Guide)",
    description:
      "Planning a trek to Khayer Lake? Get a season-by-season and month-by-month breakdown of Khayer Lake weather, temperature, wind, snowfall, and visibility — plus expert safety tips.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-weather",
    type: "article",
  },
};

export default function KhayerLakeWeatherPage() {
  const stats = [
    { label: "Lake Altitude", value: "4,660 m (15,288 ft)" },
    { label: "Peak Clear Month", value: "October (Autumn)" },
    { label: "Coldest Night Temp", value: "-20°C (Winter)" },
    { label: "Lake Freeze Cycle", value: "Dec Thru Mid-April" },
  ];

  const seasons = [
    {
      name: "Autumn (September – November)",
      rating: "★★★★★ (Best Overall)",
      tempDay: "2°C to 8°C",
      tempNight: "-12°C to -4°C",
      desc: "Peak season. Post-monsoon dry air brings the clearest skies of the year. Golden sunrises on Annapurna South almost daily. Cold nights & freezing ridge wind gusts require heavy winter gear.",
    },
    {
      name: "Spring (March – May)",
      rating: "★★★★☆ (Strong Alternative)",
      tempDay: "5°C to 12°C",
      tempNight: "-8°C to -2°C",
      desc: "Clear, calm mornings with thawing turquoise lake ice by mid-April. Rhododendrons bloom on lower trails. Afternoon clouds and light snow showers build rapidly after midday.",
    },
    {
      name: "Winter (December – February)",
      rating: "★★☆☆☆ (Experienced Only)",
      tempDay: "-5°C to 3°C",
      tempNight: "-20°C to -10°C",
      desc: "Frozen lake under deep snow. High winds and sub-zero freeze risks. Demanding trail-finding and cold exposure. Requires technical winter gear and local guide support.",
    },
    {
      name: "Monsoon (June – August)",
      rating: "★☆☆☆☆ (Not Recommended)",
      tempDay: "8°C to 15°C",
      tempNight: "2°C to 6°C",
      desc: "Warmest temperatures but thick persistent fog, daily rains, and mudslide/leech hazards on lower Swanta trails. Rare lake visibility; navigation is treacherous.",
    },
  ];

  const monthlyBreakdown = [
    { month: "January – February", status: "Deep Winter", details: "Lake completely frozen solid under snow. Extreme cold (-20°C). Experienced winter trekkers only." },
    { month: "March", status: "Early Spring", details: "Snow begins softening; cold nights remain. Clear early morning windows before afternoon haze." },
    { month: "April", status: "Peak Spring", details: "Lake ice thaws revealing turquoise water. Blooming rhododendrons along trail. Excellent morning clarity." },
    { month: "May", status: "Late Spring", details: "Warmest spring month. Pre-monsoon humidity increases afternoon cloud cover." },
    { month: "June", status: "Monsoon Onset", details: "Humidity spikes, rain begins, visibility drops sharply across the basin." },
    { month: "July – August", status: "Peak Monsoon", details: "Heavy rain, thick whiteout fog, slippery trails, high leech activity lower down. Avoid." },
    { month: "September", status: "Post-Monsoon", details: "Monsoon rains subside mid-month. Fresh green landscapes with rapidly clearing autumn skies." },
    { month: "October", status: "Prime Autumn", details: "Widely regarded as the #1 best month for crystal-clear panoramas, dry trails, and mountain photography." },
    { month: "November", status: "Late Autumn", details: "Exceptional sky clarity continues. Nighttime temperatures drop significantly toward freezing." },
    { month: "December", status: "Early Winter", details: "First heavy snowfall arrives. Lake begins its annual winter freeze cycle." },
  ];

  const faqs = [
    {
      q: "What is the weather like at Khayer Lake?",
      a: "Khayer Lake has a high-alpine climate at 4,660m with thin air, cold temperatures, strong wind chill, and rapid shifts between morning clarity and afternoon cloud cover.",
    },
    {
      q: "What is the best time to visit Khayer Lake?",
      a: "Autumn (September to November), specifically October, offers the most stable weather, dry trails, and crystal-clear mountain visibility.",
    },
    {
      q: "How cold does Khayer Lake get?",
      a: "Nighttime temperatures range from 6°C in monsoon down to -20°C in peak winter (Jan/Feb). Daytime temperatures range from -5°C in winter to 15°C in monsoon.",
    },
    {
      q: "Does Khayer Lake freeze in winter?",
      a: "Yes. The sacred lake typically freezes over by early December and stays iced until thawing begins in mid-April.",
    },
    {
      q: "Does it snow at Khayer Lake?",
      a: "Snowfall is heaviest from December through February, though light spring snow showers can occur in March and early April.",
    },
    {
      q: "Is Khayer Lake safe during the monsoon?",
      a: "Monsoon (June to August) is not recommended due to dense fog, poor trail visibility, slippery paths, and landslide risks on lower sections.",
    },
    {
      q: "Which season has the clearest mountain views?",
      a: "Autumn (September to November) provides the sharpest post-monsoon atmospheric clarity and best photo conditions for Annapurna South and Dhaulagiri.",
    },
    {
      q: "How windy is Khayer Lake?",
      a: "Wind builds steadily through the morning, reaching peak gusts along exposed high ridge sections by early to mid-afternoon.",
    },
    {
      q: "What time of day offers the best visibility?",
      a: "Early morning (6:00 AM to 11:00 AM) is consistently best. Rising afternoon thermal currents push cloud cover into the high basin after 12:00 PM.",
    },
    {
      q: "How reliable are online weather forecasts for Khayer Lake?",
      a: "Standard weather apps rely on low-elevation data and miss localized alpine shifts. Local guide advice and real-time morning observations are far more accurate.",
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
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Weather Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              High Alpine Climate &amp; Visibility Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake Weather &amp; Seasonal Visibility
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Planning a trek to Khayer Lake (4,660m)? Season-by-season and month-by-month temperature, wind, freeze cycles, and visibility breakdown.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
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
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We monitor high-altitude weather shifts from Khopra Ridge (3,660m) to Khayer Lake (4,660m) and provide daily safety advisories.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khayer Lake sits at 4,660 meters (15,288 feet), tucked directly beneath Annapurna South inside the Annapurna Conservation Area. At this elevation, weather isn&apos;t a background detail of your trek — it is the single biggest factor deciding whether you&apos;ll stand beside clear turquoise water under a bright Himalayan sky, or turn back through fog without ever seeing the lake.
              </p>
              <p>
                This guide breaks down Khayer Lake weather and seasonal visibility in complete detail: what to expect by season, by month, and by time of day. We&apos;ve built it from years of guiding trekkers up from <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge Lodge</Link>, watching how conditions shift the moment you gain that final 1,000 meters of altitude.
              </p>
            </div>

            {/* Section 1: Unique Alpine Climate */}
            <div id="alpine-climate" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Understanding the Climate at Khayer Lake
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Why Khayer Lake Has a Unique Climate</h3>
                <p>
                  At 4,660m, Khayer Lake is 1,000 meters higher than Khopra Ridge (3,660m). At this altitude, air pressure drops, oxygen thins, and heat radiation dissipates rapidly. Sitting in a high glacial basin surrounded by bare rock and ice with no forest buffer, weather here can swing violently within an hour.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Temperature, Wind Chill &amp; Intense UV</h3>
                <p>
                  Direct morning sunlight can feel mild, but shaded rocks retain overnight frost. Wind chill compounds cold air drastically — a 5°C morning with moderate ridge gusts feels below 0°C. Furthermore, intense high-altitude UV radiation requires strong sun protection even on cloudy days.
                </p>
              </div>
            </div>

            {/* Section 2: Seasonal Breakdown Table & Cards */}
            <div id="seasonal-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khayer Lake Weather by Season
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seasons.map((season, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-stone-950 text-lg">{season.name}</h3>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full">
                      {season.rating}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-600 bg-stone-50 p-3 rounded-xl">
                      <div>Day: <strong className="text-stone-900">{season.tempDay}</strong></div>
                      <div>Night: <strong className="text-stone-900">{season.tempNight}</strong></div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{season.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Month-by-Month Weather Matrix */}
            <div id="monthly-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Climate &amp; Visibility Matrix
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Month</th>
                      <th className="py-4 px-4 sm:px-6">Climate Status</th>
                      <th className="py-4 px-4 sm:px-6">Visibility &amp; Trail Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {monthlyBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.month}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-700">{row.status}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Daily Visibility Cycle & Strategy */}
            <div id="daily-visibility" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Daily Visibility Cycle &amp; Departure Strategy
              </h2>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                <h3 className="font-bold text-stone-900 text-lg">Why Early Starts (4:30 AM – 5:00 AM) Are Mandatory</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Across every season, early morning air is cold and atmospheric convection has not yet begun. Between 6:00 AM and 11:00 AM, the sky over Khayer Lake remains crisp and clear.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  After 12:00 PM, solar heating causes valley thermal air to rise, pushing thick cloud cover into the 4,660m basin within 45 minutes. Guided groups always aim to summit before 11:00 AM and descend back to <Link href="/routes/khopra-ridge-to-khayer-lake" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge</Link> before afternoon cloud buildup.
                </p>
              </div>
            </div>

            {/* Section 5: Weather Safety Tips */}
            <div id="weather-safety" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential Weather Safety &amp; Gear Checklist
              </h2>
              
              <ul className="list-disc pl-6 space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
                <li><strong>3-Layer System:</strong> Moisture-wicking base layer, insulating fleece/down mid-layer, windproof &amp; waterproof outer shell.</li>
                <li><strong>Extreme UV Protection:</strong> Category 3 or 4 glacier sunglasses and high-SPF sunscreen to block intense high-altitude rays.</li>
                <li><strong>Hydration Protection:</strong> Insulated water bottle sleeves to prevent drinking water from freezing solid on cold autumn/spring mornings.</li>
                <li><strong>Whiteout Protocol:</strong> If dense fog or sudden snow cuts trail visibility, turn back immediately towards Khopra Ridge.</li>
              </ul>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Weather
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
                  Plan Guided Khayer Lake Climb
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Trek Khayer Lake in Optimal Weather?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Trek safely with licensed operator <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides monitor real-time weather, carry satellite comms, and ensure ideal summit timing.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Departure Dates
                  </Link>
                  <Link
                    href="/tours/khayer-lake-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Sacred Lake Package
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
                <a href="#alpine-climate" className="block hover:text-emerald-600 transition">
                  • Unique Alpine Climate
                </a>
                <a href="#seasonal-breakdown" className="block hover:text-emerald-600 transition">
                  • Seasonal Weather Cards
                </a>
                <a href="#monthly-matrix" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Matrix
                </a>
                <a href="#daily-visibility" className="block hover:text-emerald-600 transition">
                  • Daily Visibility Cycle
                </a>
                <a href="#weather-safety" className="block hover:text-emerald-600 transition">
                  • Weather Safety &amp; Gear
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Planning Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/routes/khopra-ridge-to-khayer-lake" className="hover:text-emerald-700 underline">
                      Khayer Lake Day Hike Route
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-packing-list" className="hover:text-emerald-700 underline">
                      Khayer Lake Packing List
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khayer-lake-altitude-risks" className="hover:text-emerald-700 underline">
                      Altitude Risks &amp; AMS Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/october-weather-guide" className="hover:text-emerald-700 underline">
                      October Weather Guide
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
