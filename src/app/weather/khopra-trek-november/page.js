import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Weather in November: Temperature, Views & Trekking Guide",
  description: "Plan your Khopra Ridge Trek in November with real temperature ranges, rainfall data, visibility insights, trail conditions, and a complete cold-weather packing list.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Daytime Temperature", value: "8°C to 12°C" },
    { label: "Nighttime Temperature", value: "-6°C to 0°C" },
    { label: "Rainy Days Average", value: "0 to 1 Days" },
    { label: "Morning Sky Clarity", value: "98% Clear Index" }
  ];

  const altitudeConditions = [
    { zone: "Lower villages (Ghorepani, Swanta, Ghandruk)", conditions: "Mild, comfortable, and sheltered by forests. Days are warm, and these sections rarely experience sub-zero conditions." },
    { zone: "Khopra Ridge High-Altitude (Khopra Danda)", conditions: "Exposed high ridge zone at 3,660m. Biting winds, sharp temperature swings, and freeze potential after dark." }
  ];

  const comparisons = [
    { month: "November", strength: "98% sky clarity, peak visibility, dry paths", bestFor: "Trekkers prioritizing maximum mountain panoramas" },
    { month: "October", strength: "Milder autumn weather, busier lodges", bestFor: "Trekkers who prefer slightly warmer ridge nights" },
    { month: "March–April", strength: "Blooming spring paths, higher humidity", bestFor: "Trekkers prioritizing scenery over absolute sky clarity" }
  ];

  const packingEssentials = [
    {
      category: " Warm Clothing & Layering Essentials",
      items: [
        "High-loft down jacket (rated to at least -10°C, rooms are unheated)",
        "Merino wool thermal base layers (worn at night and early starts)",
        "Insulating fleece mid-layer (flexible for daily activity adjustments)",
        "Windproof outer shell jacket (mandatory on high exposed ridges)",
        "Insulated winter gloves, warm fleece beanie, and neck buff"
      ]
    },
    {
      category: " Cold-Weather Sleeping & Trekking Gear",
      items: [
        "Four-season sleeping bag (rated comfortably below freezing; -10°C is best)",
        "Trekking poles (essential for frosty mornings and dry switchbacks)",
        "Headlamp with spare batteries (for early morning viewpoint climbs)",
        "Insulated reusable water bottle (prevents water from freezing at night)"
      ]
    },
    {
      category: " Sun Protection & Accessories",
      items: [
        "SPF 50+ sunscreen & high-protection UV sunglasses",
        "Wide-brimmed sun hat & moisturizing lip balm",
        "Spare battery packs (cold ridge temperatures drain electronics fast)",
        "Sturdy, broken-in trekking boots with deep tread profiles"
      ]
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🌤️ Monthly Weather Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Weather in November
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            November offers dry trails, stable high-pressure skies, and 98% sky clarity. It is the peak season for trekkers seeking the most dramatic sunrise panoramas over Annapurna and Dhaulagiri.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Overview &amp; Climate
              </a>
              <a href="#temperature" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                November Temperatures
              </a>
              <a href="#views-clarity" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sky Clarity &amp; Sunrise
              </a>
              <a href="#rain-snow" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Rainfall &amp; Snow Risks
              </a>
              <a href="#trail-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                November Trail Conditions
              </a>
              <a href="#altitudes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Conditions by Altitude
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What to Pack for November
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                November vs Other Months
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Weather in November Overview
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                November falls firmly in the post-monsoon autumn season, which is widely considered the best time to trek Khopra Ridge. The monsoon clouds have cleared out, humidity has dropped, and a stable high-pressure pattern tends to settle over the Annapurna foothills. That combination is what produces the dry trails and the long-range mountain views the region is known for this time of year.
              </p>
              <p>
                Keep in mind that while daytime hiking conditions are highly stable, you must prepare for the rapid temperature swings that occur at high elevations. As the sun drops, the ridge chills down quickly, making your layering choices and sleep gear a vital component of a successful trek.
              </p>
            </div>
          </article>

          {/* SECTION 2: TEMPERATURE */}
          <article id="temperature" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Average Temperatures &amp; Cold Ridge Nights
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">☀️ Average Daytime (8°C to 12°C / 46°F to 54°F)</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Pleasant, mild temperatures for active walking. Direct sun at high altitude feels much stronger than the air temperature suggests. Most trekkers wear a moisture-wicking base layer with a light fleece, shedding outer shells during ascents.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base"> Ridge Nighttime (-6°C to 0°C / 21°F to 32°F)</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Once the sun drops, the ridge cools quickly. Biting winds can add a serious wind chill factor. Since local lodges are unheated, a heavyweight down jacket rated to -10°C and a sub-zero rated sleeping bag are mandatory for comfortable nights.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: CLARITY & SUNRISE */}
          <article id="views-clarity" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why November Offers Some of the Best Views from Khopra Ridge
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>Clear Skies and Mountain Visibility:</strong> Sky clarity at Khopra Ridge in November averages close to 98%, among the highest of any month in the Annapurna Region. Mornings are typically the clearest, with cloud sometimes building over the lower valleys by mid-afternoon. This level of visibility is the practical payoff of trekking in the post-monsoon window rather than during the hazier pre-monsoon spring months.
              </p>
              <p>
                <strong>Sunrise Views and Himalayan Panorama:</strong> Khopra Danda&apos;s sunrise is the reason many itineraries build in an extra night here. From the ridge, the panorama takes in Annapurna South, Dhaulagiri I, and Nilgiri Himal in a single uninterrupted sweep — three of the region&apos;s giants, lit gold within minutes of each other as the sun clears the eastern ridgeline.
              </p>
            </div>
          </article>

          {/* SECTION 4: RAIN & SNOW */}
          <article id="rain-snow" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Rainfall, Snow &amp; Weather Stability during November
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Rain is rarely a concern in November. The region typically sees zero to one rain day across the entire month, a sharp contrast to the daily monsoon downpours of July and August. Trails stay dry, river crossings are at their lowest and safest levels, and you can generally trust a multi-day forecast more than you could in shoulder-season months.
              </p>
              <p>
                <strong>Does Rain or Snow Affect the Ridge?</strong> Light snow at higher elevations is possible in late November as the region edges toward winter, though it&apos;s the exception rather than the rule. If it does fall, it&apos;s usually a thin dusting that melts within a day or two rather than anything that closes the trail.
              </p>
            </div>
          </article>

          {/* SECTION 5: TRAIL CONDITIONS */}
          <article id="trail-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trail Conditions in November
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Dry weather translates directly into good trail conditions. Paths that turn muddy and slippery during monsoon season firm up nicely by November, making for surer footing on the steeper switchbacks between Ghorepani and Khopra Danda.
              </p>
              <p>
                The one thing to watch for is frost. On cold, clear mornings, exposed sections of trail above 3,000 meters can carry a thin layer of frost or ice until the sun reaches them, usually by mid-morning. Trekking poles help significantly here, and a slightly later start on the coldest mornings is often more comfortable than an early one.
              </p>
            </div>
          </article>

          {/* SECTION 6: CONDITIONS BY ALTITUDE */}
          <article id="altitudes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Weather Microclimates by Altitude
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Temperatures and safety conditions change significantly depending on your altitude zone along the trail.
            </p>

            {/* Altitude Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Altitude Band</th>
                      <th className="p-4">November Weather Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {altitudeConditions.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.zone}</td>
                        <td className="p-4 text-xs text-stone-500 leading-relaxed">{item.conditions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 7: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Packing List for November
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Packing for this trek means preparing for two different climates on the same trip: comfortable daytime hiking weather and a genuinely cold high-altitude night.
            </p>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                {packingEssentials.map((cat, i) => (
                  <div key={i}>
                    <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-3">{cat.category}</h5>
                    <ul className="list-disc pl-4 space-y-1">
                      {cat.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 8: COMPARISONS */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              November Weather Compared to Other Trekking Months
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Compare November with adjacent autumn and spring months to ensure you are selecting the ideal seasonal conditions for your journey.
            </p>

            {/* October vs April Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Month</th>
                      <th className="p-4">Pros &amp; Visual Strengths</th>
                      <th className="p-4">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.month}</td>
                        <td className="p-4 font-bold text-emerald-600">{item.strength}</td>
                        <td className="p-4 text-xs text-stone-500">{item.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 9: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About November Weather
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is November a good time to trek Khopra Ridge?",
                  a: "Yes. November is widely regarded as one of the best months for this trek, thanks to dry trails, minimal rainfall, and the clearest mountain visibility of the year. The main trade-off is cold nights on the ridge, which is easily managed with the right gear."
                },
                {
                  q: "How cold is Khopra Ridge in November?",
                  a: "Daytime temperatures sit around 8°C to 12°C, comfortable for walking. At night, especially on the exposed ridge at Khopra Danda, temperatures typically drop to between -6°C and 0°C."
                },
                {
                  q: "Does Khopra Ridge get snowfall in November?",
                  a: "Snow is uncommon but possible, particularly in late November at higher elevations. When it occurs, it's usually light and melts within a day or two rather than disrupting the trek."
                },
                {
                  q: "Are mountain views clear from Khopra Ridge in November?",
                  a: "Yes, this is November's defining strength. Sky clarity averages close to 98%, giving trekkers strong odds of clear panoramic views of Annapurna South, Dhaulagiri I, and Nilgiri Himal."
                },
                {
                  q: "What should I pack for Khopra Ridge Trek in November?",
                  a: "Prioritize a high-loft down jacket, merino wool thermal base layers, warm gloves, a beanie, and a sleeping bag rated below 0°C. Daytime layers can be lighter, but night and early-morning gear should be treated as essential, not optional."
                },
                {
                  q: "Is Khopra Ridge crowded in November?",
                  a: "It's one of the busier months on this route, since November falls within peak autumn trekking season. Booking lodges ahead, particularly during the first three weeks of the month, helps avoid availability issues."
                },
                {
                  q: "How does November compare with October for Khopra Ridge trekking?",
                  a: "October has slightly warmer nights and a gentler transition out of monsoon, but can carry residual haze early on. November is typically drier and offers the clearest views of the two, at the cost of colder nighttime temperatures."
                },
                {
                  q: "Can beginners trek Khopra Ridge in November?",
                  a: "Yes, with the right preparation. The trail itself isn't technically difficult, but beginners should take the nighttime cold seriously and pace daily walking distances to allow time for acclimatization at altitude."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
                >
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base list-none">
                    <span>{faq.q}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* SECTION 10: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              November gives Khopra Ridge some of its sharpest, most rewarding mountain views of the entire year — a payoff that comes from the same dry, cool air that drops ridge temperatures well below freezing after dark. Trek it with the right expectations and the right gear, and it is hard to beat: comfortable daytime walking, dry firm trails, and a sunrise over Annapurna South and Dhaulagiri that is genuinely worth the cold morning climb.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              If you are weighing November against other months, the deciding factor usually comes down to priorities — clearer views and colder nights, or milder nights with a slightly less certain sky. For most trekkers chasing the classic Khopra Danda panorama, November is the month that delivers.
            </p>
          </article>

          {/* SECTION 11: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Book Your November Khopra Ridge Trek Departure</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to trek Khopra Ridge this November? Secure your lodge bookings and trek dates early — November is peak season, and accommodation along the route fills up quickly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Our weather statistics and logs are verified by licensed ACA guide networks. High-altitude temperatures are checked monthly to adjust recommended sleeping bags and gear ratings.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
