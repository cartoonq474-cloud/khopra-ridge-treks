import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/weather/khopra-trek-october",
  },
  title: "Khopra Ridge Weather in October: Temperature & Trek Guide",
  description: "Planning a Khopra Ridge Trek in October? Get accurate temperature, rainfall, and visibility data, plus expert packing tips for the trail and ridge nights.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Daytime Temperature", value: "12°C to 15°C" },
    { label: "Nighttime Temperature", value: "-2°C to 4°C" },
    { label: "Rainy Days Average", value: "1 to 2 Days" },
    { label: "Morning Sky Clarity", value: "95% Clear Index" }
  ];

  const altitudeConditions = [
    { zone: "Lower villages (Ghandruk, Tadapani, Swanta)", conditions: "Mild, pleasant autumn climate. Trails are dry and forested cover moderates daily temperature swings." },
    { zone: "High-altitude section (Bayeli to Khopra Ridge)", conditions: "Exposed grassland zone. Significant wind exposure, fast temperature drops, and zero vegetation shelter." }
  ];

  const comparisons = [
    { month: "October", strength: "Peak post-monsoon clarity, 95% views", bestFor: "Trekkers prioritizing high-contrast photos & dry trails" },
    { month: "September", strength: "Monsoon tail end, lush green scenery", bestFor: "Trekkers who don't mind rain showers to avoid crowds" },
    { month: "November", strength: "Crisp dry air, quieter trail paths", bestFor: "Trekkers preparing for colder sub-zero nights" }
  ];

  const packingEssentials = [
    {
      category: " Clothing & Layering Essentials",
      items: [
        "Merino wool thermal base layers (essential for ridge nights)",
        "Breathable daytime trekking shirt & light fleece mid-layer",
        "Heavyweight down jacket (mandatory for ridge evenings and mornings)",
        "Windproof outer shell jacket (handles fast temperature drop)",
        "Warm insulated gloves, winter beanie, and thick wool socks"
      ]
    },
    {
      category: " Sun & Weather Protection",
      items: [
        "High-protection sunscreen (SPF 50+) & lip balm",
        "UV protective sunglasses & wide-brimmed sun hat",
        "Neck gaiter or dust buff for exposed high ridge sections",
        "Packable lightweight rain shell (just in case of micro-showers)"
      ]
    },
    {
      category: " High-Altitude Stays & Accessories",
      items: [
        "4-season sleeping bag (rated to around -10°C; rooms are unheated)",
        "Spare battery packs or power banks (cold drains electronics fast)",
        "Trekking poles to navigate dry, uneven scree sections",
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
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Monthly Weather Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Ridge Weather in October
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">October is the most popular month to trek <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge</Link>. With post-monsoon rains gone, expect dry trails, 95% sky clarity, and clear sunrise views of Annapurna and Dhaulagiri.
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Overview &amp; Climate
              </a>
              <a href="#why-october" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Trek in October?
              </a>
              <a href="#temperature" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">October Temperatures
              </a>
              <a href="#rain-stability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Rainfall &amp; Stability
              </a>
              <a href="#visibility" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sky Clarity &amp; Views
              </a>
              <a href="#daily-shifts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Weather Daily Shifts
              </a>
              <a href="#altitudes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Conditions by Altitude
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">What to Pack for October
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">October vs Other Months
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Weather Overview in October
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>October sits in the heart of Nepal&apos;s post-monsoon autumn season. By the start of the month, the monsoon system has retreated from the Annapurna foothills, taking the heavy humidity and daily downpours with it. What is left behind is dry, stable air that holds very little dust or haze.
              </p>
              <p>This shift matters more on Khopra Ridge than almost anywhere else on a standard Annapurna circuit. Because the ridge sits well above the tree line, weather conditions there are far more sensitive to seasonal changes than the lower trekking villages. When the monsoon clears, the difference at altitude is dramatic — what was a fogged-in ridge in August becomes a wide-open balcony over the Himalayas by October.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHY TREK IN OCTOBER */}
          <article id="why-october" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why October Is One of the Best Months for Khopra Ridge Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">Completely Dried Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">The mud and monsoon leeches are entirely gone by October. The trails underfoot dry out completely, providing a stable, firm walking surface through both dense forest paths and high pasture sections.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">Perfect Hiking Temperatures</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">Warm sun combined with crisp, low-humidity air makes for extremely comfortable trekking conditions. You won&apos;t experience the sweat-soaked hiking days of summer or the biting daytime winds of winter.
                </p>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mt-4">This combination is also why October is the busiest month on the trail — community lodges fill up and trekking groups multiply, a trade-off worth knowing about before you commit to your trip dates.
            </p>
          </article>

          {/* SECTION 3: TEMPERATURE */}
          <article id="temperature" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Temperature in October
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">Temperature is the single biggest variable trekkers underestimate before arriving at Khopra Ridge. The trek climbs from warm, terraced villages around 1,700–2,000m up to the ridge at 3,660m, and that elevation gain changes the temperature far more than the calendar does.
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">Daytime Ridge Temp (12°C to 15°C / 54°F to 59°F)</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">While walking during daylight hours, expect mild temperatures at the ridge, with warmer conditions in the lower villages. Direct sun on exposed sections can make it feel several degrees warmer, while shaded forest stretches near Bayeli Kharka stay noticeably cooler. Most trekkers are comfortable in a base layer with a light fleece or softshell.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">Nighttime Ridge Temp (-2°C to 4°C / 28°F to 39°F)</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">Once the sun drops, temperatures at Khopra Ridge fall quickly. This isn&apos;t a gradual cooling; it&apos;s a sharp drop driven by the open, exposed terrain and lack of tree cover. Community lodge rooms are unheated, so the indoor temperature is close to the outdoor reading. A heavyweight down jacket and sleeping bag rated for sub-zero conditions are essential.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: RAIN & STABILITY */}
          <article id="rain-stability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Rainfall in October and Weather Stability
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>By October, the monsoon rainfall pattern that defines Nepal&apos;s summer has almost entirely broken down. Across the month, the Annapurna region typically sees only 1 to 2 rainy days, usually as short, localized showers rather than sustained monsoon-style downpours.
              </p>
              <p>This doesn&apos;t mean the weather is risk-free. Himalayan ridgelines generate their own microclimates, and a clear morning can give way to cloud buildup by early afternoon, especially in the second half of October as the season transitions toward winter. Carrying a lightweight rain shell is still worth doing — not because rain is likely, but because mountain weather can shift faster than a forecast can account for.
              </p>
            </div>
          </article>

          {/* SECTION 5: VISIBILITY & VIEWS */}
          <article id="visibility" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Visibility and Mountain Views from Khopra Ridge in October
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>This is the main reason why October fills up faster than any other month. With the monsoon haze gone, sky clarity at Khopra Ridge averages around 95%, which translates into some of the clearest, most consistent mountain views available anywhere in the Annapurna region.
              </p>
              <p>From the ridge, you get an unobstructed panorama that includes the Dhaulagiri massif to the west and the Annapurna range to the east, with the route past Khayer Lake offering some of the most dramatic vantage points along the way. Sunrise is the best window for photography, before any midday cloud has a chance to build up over the peaks.
              </p>
            </div>
          </article>

          {/* SECTION 6: DAILY SHIFTS */}
          <article id="daily-shifts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Weather Conditions During the Trek
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">Weather on this trek doesn&apos;t stay the same from sunrise to sunset. Knowing how conditions shift through the day helps you plan layers, timing, and rest stops more effectively.
            </p>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <span className="text-xs font-black uppercase text-stone-400 tracking-wider">Mornings</span>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">Mornings are cold and crisp, often the clearest part of the day. Frost is common on exposed ground at the ridge, and you&apos;ll want a warm layer on hand before sunrise even if you expect to shed it within the hour.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <span className="text-xs font-black uppercase text-stone-400 tracking-wider">Afternoons</span>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">By midday, temperatures climb to their daytime peak and direct sun makes hiking genuinely comfortable. This is also when occasional cloud buildup is most likely, particularly on longer October days, so it&apos;s worth reaching higher viewpoints earlier rather than later.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <span className="text-xs font-black uppercase text-stone-400 tracking-wider">Evenings &amp; Nights</span>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">Once the sun dips behind the ridgeline, the temperature drop is fast and noticeable — often a swing of 15°C or more within an hour. This is the window where wind chill becomes a real factor, and where having your down jacket already packed at the top of your bag, rather than buried at the bottom, makes a real difference.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: CONDITIONS BY ALTITUDE */}
          <article id="altitudes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Weather by Altitude
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">Because this trek gains significant elevation, &quot;Khopra Ridge weather&quot; actually describes several distinct microclimates strung along one trail.
            </p>

            {/* Altitude Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Elevation Band</th>
                      <th className="p-4">October Microclimate Conditions</th>
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

          {/* SECTION 8: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">What to Pack for Khopra Ridge Trek in October
            </h2>
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
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs sm:text-sm mt-4">
              <h4 className="font-bold mb-1">Essential Cold Weather Gear for October Nights</h4>
              <p className="leading-relaxed">If you only prioritize a few items, make it these three: a sleeping bag rated well below freezing (comfortable to -10°C), thermal base layers you can sleep in, and a windproof shell for the walk between the lodge and the ridge viewpoint at dawn. These cover the coldest, most exposed moments of the trek.
              </p>
            </div>
          </article>

          {/* SECTION 9: COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">October vs Other Months for Khopra Ridge Trek
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">While October is widely considered the peak season month, compare it side-by-side with September and November to select the exact window that fits your trekking style.
            </p>

            {/* Comparisons Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Month</th>
                      <th className="p-4">Typical Climate &amp; Visibility</th>
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

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About October Weather
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is October a good month for Khopra Ridge Trek?",
                  a: "Yes. October offers some of the most stable weather of the year on Khopra Ridge, with dry trails, low rainfall, and consistently clear mountain views. The main trade-off is that it's also the busiest month, so accommodation should be booked in advance."
                },
                {
                  q: "What is the temperature of Khopra Ridge in October?",
                  a: "Daytime temperatures typically range from 12°C to 15°C (54°F to 59°F), while nighttime temperatures at the ridge drop to between -2°C and 4°C (28°F to 39°F)."
                },
                {
                  q: "How cold does Khopra Ridge get at night in October?",
                  a: "Nights regularly fall below freezing at the ridge, sometimes down to around -2°C. Because lodge rooms are unheated, the effective indoor temperature is close to the outdoor reading, so a proper sleeping bag and thermal layers are essential."
                },
                {
                  q: "Does it rain in Khopra Ridge during October?",
                  a: "Rain is uncommon in October, with the region typically seeing only 1 to 2 rainy days across the month. Most precipitation, if it occurs, comes as brief, localized showers rather than sustained downpours."
                },
                {
                  q: "What should I pack for Khopra Ridge Trek in October?",
                  a: "Pack for both warm afternoons and freezing nights: a heavyweight down jacket, merino wool thermal layers, a windproof shell, a sleeping bag rated to around -10°C, warm gloves, and a lightweight rain shell for occasional showers."
                },
                {
                  q: "Are mountain views clear from Khopra Ridge in October?",
                  a: "Yes — October has the highest sky clarity of the year, averaging around 95%. This gives trekkers consistently clear views of the Annapurna and Dhaulagiri ranges, particularly around sunrise."
                },
                {
                  q: "Is October better than November for Khopra Ridge Trek?",
                  a: "Both months offer clear skies and dry conditions. October has milder temperatures and busier trails, while November is colder, especially at night, but generally quieter. The right choice depends on whether you prioritize warmth or fewer crowds."
                },
                {
                  q: "What are the weather conditions like on the Khopra Ridge trail?",
                  a: "Conditions vary significantly by elevation and time of day. Lower villages stay mild and forested, while the high-altitude ridge section is colder, windier, and more exposed — especially in the early morning and after sunset."
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

          {/* SECTION 11: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">October gives Khopra Ridge trekkers the best version of this trail: dry conditions, minimal rain, and some of the clearest Himalayan views available at any time of year. The trade-off is straightforward — daytime hiking is comfortable, but nights at 3,660m demand real cold-weather preparation, and the season&apos;s popularity means lodge space disappears fast.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If you pack properly for the temperature swing between midday sun and ridge-level cold, and you secure your accommodation early, October is hard to beat as a trekking month.
            </p>
          </article>

          {/* SECTION 12: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Book Your October Khopra Ridge Trek Departure</h3>
              <p className="text-stone-300 text-sm leading-relaxed">October lodge beds along the route are limited, and demand peaks early in the month. Secure your room reservations and trekking support now to lock in this season&apos;s best weather window.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire Now &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our weather statistics and logs are verified by licensed ACA guide networks. High-altitude temperatures are checked monthly to adjust recommended sleeping bags and gear ratings.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
