import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Best Time to Do the Khopra Ridge Trek | Nepal Trek Guide",
  description: "Find the best time to do the Khopra Ridge Trek. Compare spring, autumn, winter, and monsoon weather, visibility, rhododendron blooms, and monthly trail.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/best-time-to-trek",
  },
  openGraph: {
    title: "Best Time to Do the Khopra Ridge Trek: Seasons, Weather & Month-by-Month Guide",
    description:
      "Find the best time to do the Khopra Ridge Trek. Compare spring, autumn, winter, and monsoon weather, visibility, rhododendron blooms, and monthly trail conditions.",
    url: "https://khopraridgetrek.com/weather/best-time-to-trek",
    type: "article",
  },
};

export default function BestTimeToTrekPage() {
  const quickStats = [
    { label: "Best Overall Season", value: "Autumn (Late Sept – Nov)" },
    { label: "Peak Flower Season", value: "Late March – Mid-April" },
    { label: "Clearest Visibility", value: "October & Early November" },
    { label: "Quiet Solitude Window", value: "December – February" },
  ];

  const seasonsOverview = [
    {
      name: "Autumn (September – November)",
      rating: "⭐ 5.0 (Best Overall)",
      temp: "10°C to 18°C (Day) | -5°C to 5°C (Night)",
      visibility: "Crystal Clear (Post-Monsoon)",
      summary: "Scrubbed air after monsoon rains gives razor-sharp views of Dhaulagiri and Annapurna. Dry trails and stable daytime weather.",
      pro: "Unmatched mountain panoramas & reliable weather.",
      con: "Highest lodge occupancy of the year (book early).",
    },
    {
      name: "Spring (March – May)",
      rating: "🌸 4.8 (Best for Flowers)",
      temp: "12°C to 20°C (Day) | -2°C to 8°C (Night)",
      visibility: "Good (Afternoon Clouding)",
      summary: "Rhododendron canopy blooms in deep red, pink, and white across Tadapani and Bayeli Kharka. Pleasant, warm daytime hiking.",
      pro: "Vibrant flower colors & comfortable temperatures.",
      con: "Afternoon haze and building pre-monsoon humidity.",
    },
    {
      name: "Winter (December – February)",
      rating: "❄️ 3.8 (Snow & Solitude)",
      temp: "2°C to 10°C (Day) | -15°C to -5°C (Night)",
      visibility: "Exceptional Morning Clarity",
      summary: "Empty trails, snowbound high pastures, and freezing ridge nights. Rewarding for well-equipped, experienced winter trekkers.",
      pro: "Quiet trails, sharp morning air, dramatic snowscapes.",
      con: "Sub-zero nights; Khayer Lake access requires winter gear.",
    },
    {
      name: "Monsoon (June – August)",
      rating: "🌧️ 2.0 (Not Recommended)",
      temp: "15°C to 22°C (Day) | 5°C to 12°C (Night)",
      visibility: "Poor (Heavy Cloud Cover)",
      summary: "Heavy daily downpours, high humidity, slippery forest trails, and leeches. Peaks remain shrouded in clouds most days.",
      pro: "Lush green forests and empty lodges.",
      con: "Muddy trails, high leech activity, zero peak views.",
    },
  ];

  const monthTable = [
    { month: "January", visibility: "Exceptional", trail: "Snow possible >3,000m", crowds: "Very Low" },
    { month: "February", visibility: "Exceptional", trail: "Snow on high passes", crowds: "Very Low" },
    { month: "March", visibility: "Good", trail: "Drying; early bloom", crowds: "Moderate" },
    { month: "April", visibility: "Good", trail: "Dry; peak rhododendrons", crowds: "High" },
    { month: "May", visibility: "Fair", trail: "Warm; humid haze", crowds: "Moderate" },
    { month: "June", visibility: "Poor", trail: "Early rain & mud", crowds: "Low" },
    { month: "July", visibility: "Poor", trail: "Heavy rain & leeches", crowds: "Very Low" },
    { month: "August", visibility: "Poor", trail: "Wet & slippery", crowds: "Very Low" },
    { month: "September", visibility: "Fair – Good", trail: "Drying out mid-month", crowds: "Low – Moderate" },
    { month: "October", visibility: "Exceptional", trail: "Dry & stable", crowds: "Very High" },
    { month: "November", visibility: "Exceptional", trail: "Dry & cooling", crowds: "High" },
    { month: "December", visibility: "Exceptional", trail: "Early winter snow", crowds: "Low" },
  ];

  const faqs = [
    {
      q: "What is the best month to do the Khopra Ridge Trek?",
      a: "October is generally considered the best month, thanks to stable weather, minimal rainfall, and the clearest mountain visibility of the year.",
    },
    {
      q: "Is October the best time for the Khopra Ridge Trek?",
      a: "Yes, October is peak season for good reason — dry trails, excellent visibility of Annapurna South and Dhaulagiri I, and comfortable daytime temperatures. The trade-off is busier lodges, so book ahead.",
    },
    {
      q: "Can beginners trek Khopra Ridge in winter?",
      a: "It's possible but not recommended for first-timers. Winter trekking involves sub-zero nights, possible snow on the trail, and a more technical approach to Khayer Lake, so it suits trekkers with prior high-altitude experience.",
    },
    {
      q: "When do rhododendrons bloom on the Khopra trail?",
      a: "Rhododendrons typically bloom from early March through early May, with peak flowering in late March and early April around Tadapani and Bayeli Kharka.",
    },
    {
      q: "Does it snow on Khopra Ridge?",
      a: "Yes. Snowfall is most reliable from December through February, with occasional light snow possible in late November and March at higher elevations.",
    },
    {
      q: "Is the Khopra Ridge Trek possible during monsoon?",
      a: "It's technically possible, but we don't recommend it for most trekkers. Monsoon (June–August) brings heavy rain, muddy trails, leeches, and mountain views that are obscured by cloud cover most days.",
    },
    {
      q: "Which season has the clearest mountain views?",
      a: "Autumn, specifically October and early November, offers the most consistent mountain visibility of the year, followed closely by winter mornings.",
    },
    {
      q: "Can I visit Khayer Lake year-round?",
      a: "Khayer Lake is most reliably accessible from September to November and in April. Winter snow and monsoon rain can each complicate the final approach, so check current conditions with your guide before planning a winter or monsoon visit.",
    },
    {
      q: "What temperatures should I expect on the Khopra Ridge Trek?",
      a: "Expect roughly 10–18°C during autumn days at the ridge, 12–20°C in spring, 2–10°C in winter, and 15–22°C in monsoon, with nights considerably colder in every season, especially winter.",
    },
    {
      q: "Which season has the fewest crowds?",
      a: "Winter, particularly December and January, sees the lowest trekker numbers of the year, followed by the monsoon months.",
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
            <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-400 transition">Trek Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Best Time to Trek</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Seasonal &amp; Weather Planning Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Best Time to Do the Khopra Ridge Trek
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Season-by-season and month-by-month breakdown of weather, mountain visibility, rhododendron blooms, and trail conditions.
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
                ☀️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Real-Time Trail Weather Tracking</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Our local guides monitor ridge wind, snow levels, and seasonal lodge operations year-round out of Pokhara and Kathmandu.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Choosing the best time to do the Khopra Ridge Trek comes down to what you prioritize on the trail: <strong>Autumn</strong> gives you the clearest skies and most reliable weather of the year; <strong>Spring</strong> surrounds you in blooming rhododendron canopy; <strong>Winter</strong> offers quiet solitude and razor-sharp snowbound morning vistas.
              </p>
              <p>
                Because the route climbs quickly from Ghandruk (1,940m) to Khopra Ridge (3,660m) and sacred Khayer Lake (4,660m), weather and temperature change dramatically within a single afternoon.
              </p>
            </div>

            {/* Section 1: Seasonal Breakdown Cards */}
            <div id="seasonal-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Guide to Khopra Ridge
              </h2>
              
              <div className="space-y-6">
                {seasonsOverview.map((s, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                      <h3 className="font-bold text-stone-950 text-lg">{s.name}</h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                        {s.rating}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-medium">
                      <p><strong>🌡️ Temperature:</strong> {s.temp}</p>
                      <p><strong>🏔️ Mountain Visibility:</strong> {s.visibility}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.summary}</p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs">
                      <span className="text-emerald-700 font-semibold">👍 Pro: {s.pro}</span>
                      <span className="text-amber-800 font-semibold">⚠️ Note: {s.con}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Month-by-Month Weather Matrix Table */}
            <div id="month-matrix" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Weather &amp; Trail Conditions
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Month</th>
                      <th className="py-4 px-4 sm:px-6">Visibility</th>
                      <th className="py-4 px-4 sm:px-6">Trail &amp; Weather Conditions</th>
                      <th className="py-4 px-4 sm:px-6">Crowd Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {monthTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.month}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-800 font-semibold">{row.visibility}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.trail}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-900 font-medium">{row.crowds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Seasonal Recommendations by Trekker Goal */}
            <div id="trekker-recommendations" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Which Month Fits Your Trekking Goal?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥾 Best for First-Time Trekkers</h4>
                  <p className="text-xs text-stone-600"><strong>October:</strong> Stable dry weather, mild day temperatures, and forgiving trail conditions make October the most dependable month.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📷 Best for Mountain Photographers</h4>
                  <p className="text-xs text-stone-600"><strong>October to Early November:</strong> Crisp post-monsoon air gives maximum optical clarity for Dhaulagiri and Annapurna South.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌺 Best for Rhododendron Blooms</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed"><strong>Late March to Mid-April:</strong> Peak canopy flowering across Tadapani, Chhistibung, and Dobato forests.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ Best for Snow &amp; Solitude</h4>
                  <p className="text-xs text-stone-600"><strong>January:</strong> Crowd-free trails, snow-covered ridges, and quiet community teahouses for experienced cold-weather hikers.</p>
                </div>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Weather &amp; Seasons
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
                  Seasonal Trek Departure Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Departure with Certified Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your ideal departure window with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We monitor real-time weather, secure community lodge bookings, and optimize itineraries for peak mountain visibility.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Departure Dates
                  </Link>
                  <Link
                    href="/planning/khopra-trek-itinerary"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Official 9-Day Itinerary
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
                <a href="#seasonal-guide" className="block hover:text-emerald-600 transition">
                  • Seasonal Overview
                </a>
                <a href="#month-matrix" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Matrix
                </a>
                <a href="#trekker-recommendations" className="block hover:text-emerald-600 transition">
                  • Best Months by Goal
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Weather Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/weather/autumn-season-khopra" className="hover:text-emerald-700 underline">
                      Autumn Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/spring-season-khopra" className="hover:text-emerald-700 underline">
                      Spring Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/winter-season-khopra" className="hover:text-emerald-700 underline">
                      Winter Season Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/summer-monsoon-khopra" className="hover:text-emerald-700 underline">
                      Monsoon Season Guide
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
