import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Winter Trekking on Khopra Ridge (Dec–Feb) | Nepal Trek Guide",
  description: "Planning a Khopra Ridge winter trek? Get month-by-month weather, snow conditions, Khayer Lake access, gear checklists, and safety advice from our local.",
  alternates: {
    canonical: "https://khopraridgetrek.com/weather/winter-season-khopra",
  },
  openGraph: {
    title: "Winter Trekking on Khopra Ridge (Dec–Feb): Weather, Snow, Safety & Trail Guide",
    description:
      "Planning a Khopra Ridge winter trek? Get month-by-month weather, snow conditions, Khayer Lake access, gear checklists, and safety advice from our local Pokhara-based team.",
    url: "https://khopraridgetrek.com/weather/winter-season-khopra",
    type: "article",
  },
};

export default function WinterSeasonKhopraPage() {
  const quickStats = [
    { label: "Season Window", value: "December – February (Winter)" },
    { label: "Coldest Month", value: "January (-10°C to -15°C Ridge Night)" },
    { label: "Mountain Visibility", value: "Exceptional / Sharpest Clarity" },
    { label: "Traction Requirement", value: "Microspikes & Gaiters Recommended" },
  ];

  const winterTemps = [
    { zone: "Ghandruk (~1,940m)", day: "8°C – 14°C", night: "0°C – 4°C", snowRisk: "Minimal / Rare frost" },
    { zone: "Tadapani (~2,630m)", day: "5°C – 10°C", night: "-2°C – 2°C", snowRisk: "Occasional light dusting" },
    { zone: "Bayeli Kharka (~3,410m)", day: "2°C – 7°C", night: "-8°C – -3°C", snowRisk: "Moderate snow patches" },
    { zone: "Khopra Ridge (~3,660m)", day: "0°C – 5°C", night: "-12°C – -6°C", snowRisk: "Consistent snow & wind" },
    { zone: "Khayer Lake (~4,660m)", day: "-3°C – 2°C", night: "-18°C – -10°C", snowRisk: "Deep snow & frozen lake" },
  ];

  const monthProfiles = [
    {
      month: "December (Early Winter)",
      badge: "Mildest Winter Month",
      summary: "Early December inherits autumn's stability with lower crowds. Ridge daytime temperatures reach 5–8°C in direct sunlight, while nights dip to -8°C. Snow dustings begin late in the month.",
      pro: "Crisp blue skies, minimal snow on lower trail, quiet teahouses.",
      con: "Shaded trail switchbacks can turn icy near the ridge.",
    },
    {
      month: "January (Deep Winter)",
      badge: "Coldest & Sharpest Air",
      summary: "The coldest month of the year. Daytime temperatures hover near freezing and night lows plummet to -15°C. Snow accumulation above Chhistibung requires microspikes.",
      pro: "Sharpest mountain clarity of the year, absolute trail solitude.",
      con: "Freezing night temperatures; requires 4-season bag & microspikes.",
    },
    {
      month: "February (Late Winter Transition)",
      badge: "Photographer Favorite",
      summary: "Lower elevations begin warming up by late February while higher ridges retain snow. Photographers favor February for its high-contrast snow-capped peak compositions.",
      pro: "Longer daylight hours, stable dry air, dramatic snowscapes.",
      con: "Lingering ice patches on north-facing switchbacks above Chhistibung.",
    },
  ];

  const faqs = [
    {
      q: "Is Khopra Ridge open during winter?",
      a: "Yes, the trek remains open and accessible from December through February. Trails stay walkable throughout the season, though upper sections above Chhistibung may require traction gear during and after snowfall.",
    },
    {
      q: "How cold does Khopra Ridge get in January?",
      a: "January is the coldest month, with daytime highs near the ridge often close to 0°C and nighttime lows regularly dropping to -10°C or below, especially with wind chill factored in.",
    },
    {
      q: "Does Khopra Ridge receive heavy snowfall?",
      a: "Snowfall is generally light and comes in short spells rather than prolonged storms, with January typically seeing the most accumulation. Snow tends to concentrate on the upper trail above Chhistibung rather than the lower forest sections.",
    },
    {
      q: "Can beginners do the Khopra Ridge trek in winter?",
      a: "Beginners can complete the trek, but winter conditions add real difficulty through cold temperatures and occasional ice, so we generally recommend spring or autumn for a first-time high-altitude trek.",
    },
    {
      q: "Can you reach Khayer Lake in December, January, and February?",
      a: "Khayer Lake is often reachable throughout winter, though the approach trail becomes more demanding after heavy snowfall. Checking current conditions with a local guide before attempting it is essential.",
    },
    {
      q: "Are community lodges open during winter?",
      a: "Most lodges along the route stay open through winter, though some smaller options may reduce capacity or close briefly during the coldest stretches of January. Confirming ahead of your trip is recommended.",
    },
    {
      q: "What winter gear is essential for Khopra Ridge?",
      a: "A proper layering system, waterproof insulated boots, a four-season sleeping bag, microspikes for icy sections, and cold-weather accessories like gloves, a warm hat, and a power bank are all essential.",
    },
    {
      q: "Do you need microspikes for the trek?",
      a: "Microspikes aren't required for the lower forest sections but are strongly recommended for the trail above Chhistibung, particularly in January and February when ice is more common on shaded switchbacks.",
    },
    {
      q: "Is a guide recommended during winter?",
      a: "Yes, especially for first-time winter trekkers or anyone planning to extend the trek to Khayer Lake. Guides bring current, on-the-ground knowledge of snow and trail conditions that's difficult to get otherwise.",
    },
    {
      q: "Is Khopra Ridge one of the best winter treks in Nepal?",
      a: "Khopra Ridge is a strong winter trekking choice within the Annapurna region, known for its clear mountain visibility, quiet trails, and moderate altitude compared to higher winter routes in the Everest or Manaslu regions.",
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
            <span className="text-emerald-400">Winter Season</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Cold Season Trekking Guide (Dec–Feb)
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Winter Trekking on Khopra Ridge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Snowy ridgelines, freezing night safety, microspike requirements, Khayer Lake frozen access, and crowd-free Himalayan solitude.
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
                ❄️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Winter Trail Verification &amp; Snow Safety</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides monitor high-ridge snow drifts, teahouse stove fuel stocks, and microspike trail conditions across Chhistibung and Khopra Danda.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Between December and February, Khopra Ridge transforms into a quiet, frozen wonderland. The rhododendron forests stand dormant, the ridge line collects snow dustings, and the crowds that fill the trail in October disappear. What remains is a crisp, crystal-clear version of one of the Annapurna region&apos;s best viewpoints.
              </p>
              <p>
                Winter trekking requires serious preparation: freezing sub-zero nights, microspikes for icy switchbacks, and a 4-season sleeping bag are non-negotiable.
              </p>
            </div>

            {/* Section 1: Winter Elevation Temperature Matrix */}
            <div id="winter-temperatures" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Winter Temperatures by Elevation
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Elevation Zone</th>
                      <th className="py-4 px-4 sm:px-6">Average Day Temp</th>
                      <th className="py-4 px-4 sm:px-6">Average Night Temp</th>
                      <th className="py-4 px-4 sm:px-6">Snow &amp; Ice Hazard Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {winterTemps.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.zone}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs">{row.day}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs text-blue-700 font-semibold">{row.night}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.snowRisk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Month-by-Month Breakdown */}
            <div id="winter-months" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Month-by-Month Winter Breakdown
              </h2>

              <div className="space-y-6">
                {monthProfiles.map((m, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-2 gap-2">
                      <h3 className="font-bold text-stone-950 text-lg">{m.month}</h3>
                      <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{m.summary}</p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs">
                      <span className="text-emerald-700 font-semibold">👍 Pro: {m.pro}</span>
                      <span className="text-amber-800 font-semibold">⚠️ Note: {m.con}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Khayer Lake Winter Access & Frozen Lake */}
            <div id="khayer-lake-winter" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Reaching Frozen Khayer Lake (4,660m) in Winter
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧊 Partially Frozen Alpine Lake</h4>
                  <p className="text-xs text-stone-600">Khayer Lake freezes over in mid-winter, offering dramatic ice-encrusted scenery beneath Dhaulagiri and Annapurna South.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🕒 Early 5:00 AM Departure Required</h4>
                  <p className="text-xs text-stone-600">Winter days are shorter. Depart Khopra Ridge by 5:00 AM to complete the 15km round trip before afternoon winds intensify.</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-blue-950">⛓️ Microspikes &amp; Trekking Poles</h4>
                  <p className="text-xs text-blue-900 leading-relaxed">Exposed ridgeline sections contain hard-packed snow and ice. Microspikes are mandatory for footing safety.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🚩 Know When to Turn Back</h4>
                  <p className="text-xs text-stone-600">If high winds or heavy cloud cover roll in along the ridge, turning back to the safety of Khopra Ridge Lodge is the right call.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Winter Gear Checklist */}
            <div id="winter-gear" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential Winter Gear Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🛌 4-Season Sleeping Bag (-10°C Rating)</h4>
                  <p className="text-xs text-stone-600">Teahouse bedrooms are unheated. A cold-rated bag paired with a fleece liner ensures warm, restful sleep.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🧥 Heavy Down Jacket &amp; Thermals</h4>
                  <p className="text-xs text-stone-600">A high-fill down coat is mandatory for unheated dining rooms and sunrise viewing at 3,660m.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">⛓️ Microspikes &amp; Deep Gaiters</h4>
                  <p className="text-xs text-stone-600">Lightweight slip-on spikes provide traction on ice. Gaiters block snow from entering boots.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🔋 Power Banks &amp; Insulated Flasks</h4>
                  <p className="text-xs text-stone-600">Freezing air drains batteries fast. Keep phones inside jacket pockets. Insulated flasks prevent water freezing.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Winter Trekking
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
                  Guided Winter Departures
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge in Winter with Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience winter solitude safely with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides monitor snow conditions, provide microspike gear assistance, and ensure open teahouse reservations.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Winter Treks
                  </Link>
                  <Link
                    href="/weather/best-time-to-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Compare All Seasons
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
                <a href="#winter-temperatures" className="block hover:text-emerald-600 transition">
                  • Elevation Temperatures
                </a>
                <a href="#winter-months" className="block hover:text-emerald-600 transition">
                  • Month-by-Month Guide
                </a>
                <a href="#khayer-lake-winter" className="block hover:text-emerald-600 transition">
                  • Frozen Khayer Lake Access
                </a>
                <a href="#winter-gear" className="block hover:text-emerald-600 transition">
                  • Essential Winter Gear
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
                    <Link href="/weather/khopra-trek-january" className="hover:text-emerald-700 underline">
                      January Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/khopra-trek-december" className="hover:text-emerald-700 underline">
                      December Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/weather/autumn-season-khopra" className="hover:text-emerald-700 underline">
                      Autumn Season Guide
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
