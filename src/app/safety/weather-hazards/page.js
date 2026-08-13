import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/safety/weather-hazards",
  },
  title: "Weather Hazards on the Khopra Trek | Nepal Trek Guide",
  description: "Understand the real weather hazards on the Khopra Trek — from monsoon landslides and ridge winds to trail ice, whiteouts, and lightning.",
};

export default function Page() {
  const weatherHazards = [
    {
      title: "1. Afternoon White-Outs",
      desc: "In spring and autumn, clouds often roll in around 1:00 PM, dropping visibility to less than 20 meters. On exposed ridgelines like Khopra, this can lead to orientation loss. Always hike with your group."
    },
    {
      title: "2. Ridge Winds and Hypothermia",
      desc: "Khopra Ridge (3,660m) acts as a high weather wall. Strong, freezing winds sweep the ridge, especially after sunset. A windproof shell and fleece layers are essential to prevent rapid cooling."
    },
    {
      title: "3. Ice on Forest Trails",
      desc: "During late autumn and winter, the shady forest trail segments (especially Tadapani to Bayeli) freeze. Water runoff turns into sheet ice, making sections slippery and requiring microspikes."
    },
    {
      title: "4. Summer Monsoon Landslides",
      desc: "From June to August, heavy monsoon rains trigger landslides and wash away bridges, specifically along the lower trails near Swanta. Trekking is not recommended in this season."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/safety/is-khopra-trek-safe" className="hover:text-emerald-400 transition-colors">Safety</Link>
            <span>/</span>
            <span className="text-emerald-400">Weather Hazards</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Seasonal Safety &amp; Climate Management
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Weather Hazards on the Khopra Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand seasonal microclimates, ridge whiteouts, hypothermia triggers, winter trail ice, and lightning safety inside the Annapurna Conservation Area.
          </p>
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
              <a href="#microclimates" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Weather Changes Fast
              </a>
              <a href="#climate-year" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Climate Throughout the Year
              </a>
              <a href="#biggest-hazards" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Biggest Weather Hazards
              </a>
              <a href="#affected-sections" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Most Vulnerable Sections
              </a>
              <a href="#monsoon-trekking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Monsoon Risks
              </a>
              <a href="#winter-trekking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Winter Snow &amp; Cold
              </a>
              <a href="#temperature-matrix" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Temperature Matrix
              </a>
              <a href="#safety-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                On-Trail Safety Tips
              </a>
              <a href="#when-to-cancel" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                When to Turn Back
              </a>
              <a href="#safest-season" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safest Season Comparison
              </a>
              <a href="#guide-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Guides Matter
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
                Inquire Weather Updates
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weather Hazards on the Khopra Trek: Complete Seasonal Safety Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Mountain weather in the Himalayas does not follow a calendar. On the Khopra Ridge Trek, conditions that look stable at sunrise can turn dangerous by early afternoon. Clouds build without warning. Temperatures drop faster than most trekkers expect. Trails that are dry and firm in the morning can become slippery and icy by the time you reach camp.
              </p>
              <p>
                Understanding the weather hazards on the Khopra Trek is not optional preparation — it is the foundation of safe trekking planning. Unlike valley routes such as the Annapurna Base Camp trail, the Khopra route climbs across open ridgelines and exposed high-altitude terrain where there is little shelter from wind, rain, or sudden temperature shifts.
              </p>
              <p>
                This guide covers everything you need to know about Khopra Trek weather conditions before you go. We break down seasonal risks, identify the most dangerous trail sections, explain the hazards in practical terms, and help you plan the safest possible trip — whatever season you choose.
              </p>
            </div>
          </article>

          {/* SECTION: WHY WEATHER CHANGES FAST */}
          <article id="microclimates" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Weather Changes So Quickly on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Weather unpredictability is one of the defining characteristics of trekking in the Annapurna Conservation Area. But on the Khopra route specifically, the exposure is more severe than most trekkers anticipate.
              </p>
              <p>
                <strong>Himalayan Mountain Microclimates:</strong> The Himalayas generate their own weather systems. Warm, moist air rises from the low-lying valleys, hits the cold mountain air at altitude, and creates highly localized weather events. You can be walking in clear sunshine at 2,800 metres while a storm system is already forming at 3,500 metres ahead of you. Conditions can shift from clear to dangerous within 30 to 60 minutes.
              </p>
              <p>
                <strong>Elevation Effects:</strong> Temperature drops approximately 6&deg;C for every 1,000 metres of elevation gained. From Ghandruk (1,940m) to Khopra Ridge (3,660m), you gain over 1,700 vertical metres. That is a substantial shift in temperature and weather exposure over a relatively short horizontal distance.
              </p>
              <p>
                <strong>Ridge Exposure Sensitivity:</strong> Large sections of the trail run along or near exposed ridgelines with minimal tree cover and no natural windbreaks. Khopra Ridge acts as a weather barrier. Cold systems moving in from the northwest hit the ridge directly. Wind speeds on exposed sections can be dramatically higher than forecasts suggest.
              </p>
            </div>
          </article>

          {/* SECTION: CLIMATE YEAR */}
          <article id="climate-year" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Khopra Trek Climate Throughout the Year
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring (March to May):</strong> Mornings are typically clear, visibility is good, and rhododendron forests are in full bloom. However, as May progresses, pre-monsoon storm systems develop in the afternoons. Cloud cover builds from around 1:00 PM. Brief but intense rain or hail events can occur on exposed ridge sections. Early starts are essential.
              </p>
              <p>
                <strong>Summer and Monsoon (June to August):</strong> Heavy, sustained rainfall affects the entire trail corridor. Trails become waterlogged and slippery. Lower trail sections near Swanta are vulnerable to landslides, bridge washouts, and severe erosion. Visibility is poor, and clouds sit low on the ridges. Trekking during this period is not recommended.
              </p>
              <p>
                <strong>Autumn (September to November):</strong> The peak season. Post-monsoon skies clear dramatically from late September. Visibility reaches its annual peak, offering clear views of Dhaulagiri and the Annapurna massif. Temperatures are cool but manageable, rainfall is low, and trail conditions are stable. October is the single best month for weather stability.
              </p>
              <p>
                <strong>Winter (December to February):</strong> Winter trekking is possible for experienced trekkers but carries significant risks. Snow falls regularly above 3,000 metres, and nighttime temperatures at Khopra Ridge can drop to between -10&deg;C and -15&deg;C. Morning trails are often covered in ice. High-altitude sections near Khayer Lake may be blocked.
              </p>
            </div>
          </article>

          {/* SECTION: BIGGEST WEATHER HAZARDS */}
          <article id="biggest-hazards" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Biggest Weather Hazards on the Khopra Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Several weather hazards can occur across multiple seasons and deserve individual attention:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Afternoon Whiteouts and Sudden Visibility Loss:</strong> Whiteouts occur when dense cloud descends rapidly onto exposed ridgelines. On trail sections between Chhistibung and Khopra Ridge, whiteouts can make it difficult to identify the trail path. reach camp before 1:00 PM to mitigate this.
                </li>
                <li>
                  <strong>Strong Ridge Winds and Wind Chill:</strong> Wind exposure on Khopra Ridge can make upright walking difficult. An air temperature of 0&deg;C with a 30 km/h wind produces a wind chill equivalent to -8&deg;C on exposed skin, accelerating heat loss.
                </li>
                <li>
                  <strong>Hypothermia Risk from Rain and Wind:</strong> The dangerous combination is not necessarily extreme cold alone — it is wet clothing in the wind at altitude. Always carry an insulating layer even when you start the day in sunshine.
                </li>
                <li>
                  <strong>Lightning Storms on Exposed Ridges:</strong> Lightning is a danger on exposed sections during pre-monsoon storm systems in late April and May. If caught, immediately descend to lower ground, drop trekking poles, and move away from isolated trees.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: AFFECTED SECTIONS */}
          <article id="affected-sections" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Sections Most Affected by Dangerous Weather
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Not every part of the Khopra route carries equal weather risk:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Icy Forest Sections (Tadapani to Bayeli Kharka):</strong> Shaded by dense forest canopy, these sections receive little direct sunlight. Water runoff freezes overnight and does not thaw fully during winter. Crampons/microspikes are required in winter.
                </li>
                <li>
                  <strong>Landslide Risk (Near Swanta Village):</strong> Lower trail sections around Swanta sit in a zone with significant landslide exposure during monsoon season. Steep valley sides are destabilized by heavy rain.
                </li>
                <li>
                  <strong>Extreme Wind and Storm Exposure (Khopra Ridge):</strong> Khopra Ridge (3,660m) is highly exposed. There are no terrain features that shelter the lodge area. Plan to arrive at the lodge before late afternoon.
                </li>
                <li>
                  <strong>Severe Weather Exposure (Khayer Lake Approach):</strong> Khayer Lake sits at approximately 4,500m (with the sacred basin at ~4,660m). The entire route to the lake is above treeline with no shelter. Snow, wind, and freezing rain can develop rapidly.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: MONSOON TREKKING */}
          <article id="monsoon-trekking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking During Monsoon Season — Risks You Must Understand
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Monsoon season risks are qualitatively different from other seasons:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Heavy Rainfall:</strong> Continuous rain is common. Trails become muddy channels rather than walking surfaces.</li>
                <li><strong>Narrow Trails &amp; Low Visibility:</strong> Cloud cover sits low on the ridges, dropping visibility to a few metres.</li>
                <li><strong>Landslides and Floods:</strong> Streams swell dramatically. Bridges can wash out, and landslide debris slides block trails.</li>
              </ul>
              <p>
                For these reasons, the Khopra route is not suitable for most trekkers during July and August. Monsoon trekking requires daily route assessment and total flexibility to change plans.
              </p>
            </div>
          </article>

          {/* SECTION: WINTER TREKKING */}
          <article id="winter-trekking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking During Winter — Snow, Ice, and Freezing Temperatures
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Winter brings sustained cold, overnight ice, and snow that blocks trail sections without warning:
              </p>
              <p>
                <strong>Snowfall Trail Closure:</strong> Snowfall above 3,000m begins in December. Heavy events (30cm+ overnight) are common. After snowfall, trails are hard to identify. Check current trail statuses with local guides.
              </p>
              <p>
                <strong>Frozen Morning Trails:</strong> Water runoff freezes overnight, creating sheet ice. Slipping on morning ice is the most common cause of injury. Consider waiting until 8:00 or 9:00 AM for temperatures to rise before walking icy sections.
              </p>
              <p>
                <strong>How Cold Does It Get?</strong> Overnight temperatures at Khopra Ridge regularly fall to -10&deg;C to -15&deg;C. Inside lodges, rooms are unheated. Daytime temperatures on the ridge reach 2&deg;C to 6&deg;C, but feel colder with wind. A sleeping bag rated to -15&deg;C is essential.
              </p>
            </div>
          </article>

          {/* SECTION: TEMPERATURE MATRIX */}
          <article id="temperature-matrix" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Temperature Breakdown by Elevation on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The following table shows estimated average temperature ranges at key points on the Khopra route.
              </p>

              {/* TABLE */}
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-2">Location</th>
                      <th className="py-3 px-2">Elevation</th>
                      <th className="py-3 px-2">Season</th>
                      <th className="py-3 px-2">Daytime Temp</th>
                      <th className="py-3 px-2">Nighttime Temp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Ghandruk</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">1,940 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">12&deg;C – 18&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">4&deg;C – 8&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">6&deg;C – 12&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-2&deg;C – 2&deg;C</td>
                    </tr>

                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Tadapani</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">2,630 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">8&deg;C – 14&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">1&deg;C – 5&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">2&deg;C – 8&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-6&deg;C – -2&deg;C</td>
                    </tr>

                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Bayeli Kharka</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">3,100 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">5&deg;C – 10&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">-2&deg;C – 2&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">-1&deg;C – 5&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-10&deg;C – -5&deg;C</td>
                    </tr>

                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Chhistibung</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">3,300 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">4&deg;C – 9&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">-3&deg;C – 0&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">-2&deg;C – 4&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-11&deg;C – -6&deg;C</td>
                    </tr>

                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Khopra Ridge</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">3,660 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">2&deg;C – 7&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">-5&deg;C – -2&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">-4&deg;C – 2&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-15&deg;C – -10&deg;C</td>
                    </tr>

                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900" rowSpan="2">Khayer Lake</td>
                      <td className="py-3 px-2 text-stone-500" rowSpan="2">~4,500 m</td>
                      <td className="py-3 px-2 text-stone-700">Autumn (Oct–Nov)</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">-1&deg;C – 5&deg;C</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">-8&deg;C – -4&deg;C</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 text-stone-700">Winter (Dec–Feb)</td>
                      <td className="py-3 px-2 text-stone-500">-8&deg;C – -2&deg;C</td>
                      <td className="py-3 px-2 text-stone-500">-18&deg;C – -12&deg;C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: SAFETY TIPS */}
          <article id="safety-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weather Safety Tips Every Khopra Trekker Should Follow
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Start Early:</strong> Start walking before 7:00 AM. Morning conditions are the most stable. By starting early, you reach exposed ridgeline sections before afternoon cloud systems develop, and arrive at camp in daylight before temperatures drop.
              </p>
              <p>
                <strong>Essential Weather Gear:</strong> Waterproof shell jacket (fully waterproof breathable membrane), down jacket, waterproof overpants, insulated waterproof gloves (to handle trekking poles), microspikes, and backpack rain cover.
              </p>
              <p>
                <strong>Daily Weather Monitoring:</strong> Check conditions before leaving each morning. Ask lodge owners and teahouse managers about the sections ahead. They have direct communication with staff at higher camps.
              </p>
            </div>
          </article>

          {/* SECTION: WHEN TO CANCEL */}
          <article id="when-to-cancel" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              When Should You Cancel or Turn Back Because of Weather?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Signs That Conditions Are Becoming Unsafe:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Rapid cloud build-up before noon (earlier than the normal afternoon pattern).</li>
                <li>Thunder audible in the distance (lightning threat on exposed ridges).</li>
                <li>Sudden wind speed increase on a ridge accompanied by dropping temperature.</li>
                <li>Heavy snowfall beginning above 3,500m where trail markers are hard to see.</li>
                <li>Visibility dropping below 20 metres.</li>
              </ul>
              <p>
                <strong>Situations Where Continuing is Genuinely Dangerous:</strong> An active lightning storm on a ridgeline demands immediate descent. Ice-covered trails without traction gear are a high fall risk. If a trail has been reported washed out or landslide-blocked, do not attempt it.
              </p>
            </div>
          </article>

          {/* SECTION: SAFEST SEASON COMPARISON */}
          <article id="safest-season" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Season Has the Safest Weather for the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Comparing Seasonal Conditions:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Autumn (September–November):</strong> Excellent weather stability and visibility. Temperatures are cool but manageable. Safest season. Recommend: October.
                </li>
                <li>
                  <strong>Spring (March–May):</strong> Moderate weather stability. Good morning visibility. Rising temperatures. Recommend: March–April.
                </li>
                <li>
                  <strong>Winter (December–February):</strong> Moderate stability but very cold temperatures (-15&deg;C at night) and high risk of snow closures. Recommend: Experienced only.
                </li>
                <li>
                  <strong>Monsoon (June–August):</strong> Poor stability, poor visibility, high risk of landslides, mud, and trail washouts. Not recommended.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: GUIDE SAFETY */}
          <article id="guide-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Trekking With Local Guides Improves Weather Safety
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Microclimate Knowledge:</strong> Experienced local guides develop an intuitive understanding of weather patterns. They know which ridge sections are hit first by incoming cloud systems.
              </p>
              <p>
                <strong>Decisive Actions:</strong> When weather changes on a ridge, the window is short. A guide makes the decision to hold, shelter, or descend without delay, preventing group hesitation.
              </p>
              <p>
                <strong>Real-Time Updates:</strong> Our guides communicate directly with lodge operators ahead of each group. We receive real-time information about trail conditions and weather events before committing to the day&apos;s route.
              </p>
            </div>
          </article>

          {/* SECTION: HAZARDS CARD DETAILS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Key Climate Risks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weatherHazards.map((hazard, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-955 text-sm">{hazard.title}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{hazard.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Weather
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the weather like on the Khopra Trek?",
                  a: "Weather varies significantly by season and elevation. Autumn (October to November) has clear, cold mornings and low rainfall — the most reliable conditions. Spring (March to April) is also good. Monsoon (June to August) brings heavy rain and high risk. Winter (December to February) is very cold with regular snow above 3,000m."
                },
                {
                  q: "Is the Khopra Trek safe during monsoon season?",
                  a: "Monsoon season is not recommended. Heavy rainfall creates landslide risks on lower trails, floods stream crossings, and makes trails slippery. Visibility on ridgelines drops to near zero."
                },
                {
                  q: "Does it snow on the Khopra Ridge Trek?",
                  a: "Yes. Snowfall occurs regularly above 3,000 metres from December through February, and occasionally in late November or early March. Khopra Ridge (3,660 m) typically receives snow multiple times per winter. The approach to Khayer Lake (4,660 m) can be heavily snow-covered."
                },
                {
                  q: "Which month has the best weather for the Khopra Trek?",
                  a: "October is widely considered the best month. Post-monsoon skies are clear, visibility is excellent, temperatures are cool but manageable, and trails are dry. Late September and early November are also strong options."
                },
                {
                  q: "How cold does Khopra Ridge get at night?",
                  a: "Nighttime temperatures typically fall to between -5°C and -8°C in autumn. During winter (December to February), overnight temperatures at the ridge regularly drop to -10°C to -15°C. Rooms are unheated, so a quality sleeping bag rated to at least -10°C is essential."
                },
                {
                  q: "Can bad weather force trail closures on the Khopra Trek?",
                  a: "Weather can make specific trail sections temporarily impassable (landslides in monsoon, heavy snow in winter). Information about current conditions is communicated via lodge owners, local guides, and other trekkers."
                },
                {
                  q: "Is winter trekking possible on the Khopra route?",
                  a: "Yes, for experienced cold-weather trekkers with appropriate gear. Challenges include overnight freezing, trail ice in forest sections, snow blocking trail markers, and reduced lodge availability. Autumn or spring are safer and more comfortable for most."
                },
                {
                  q: "Do I need a guide during unstable weather conditions?",
                  a: "A guide is not a formal requirement, but unstable weather is the strongest argument for one. Guides communicate directly with lodge operators, make rapid decisions, and understand localized microclimate behavior."
                },
                {
                  q: "What gear is essential for cold and wet weather on the Khopra Trek?",
                  a: "A fully waterproof shell jacket, insulating down jacket or fleece, waterproof overpants, insulated waterproof gloves, microspikes, trekking poles, pack rain cover, and a sleeping bag rated to at least -10°C."
                },
                {
                  q: "Is weather at Khayer Lake more dangerous than at Khopra Ridge?",
                  a: "Yes. Khayer Lake sits at approximately 4,660 metres, and the entire route above Khopra Ridge is above treeline with no shelter. Snow, severe winds, and freezing rain can develop rapidly at this elevation."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
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

          {/* SECTION: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The weather hazards on the Khopra Trek are real, specific, and directly connected to the route&apos;s character as an exposed high-altitude ridgeline trek. This is not a walk that punishes trekkers for being unprepared — it rewards those who understand the environment before they arrive.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The sections of trail that carry the highest weather risk — Khopra Ridge, the Khayer Lake approach, and the icy forest sections between Tadapani and Bayeli Kharka in winter — are manageable with the right knowledge and the right gear. What makes the difference between a safe trek and a dangerous one is not luck. It is preparation, local knowledge, and the willingness to make conservative decisions when the mountain requires it.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek With Local Experts Who Know This Route
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Weather conditions on the Khopra route change day by day, section by section, and season by season. The safest way to navigate that variability is to trek with guides who walk this trail regularly and maintain real-time communication with lodge operators along the route.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Guided Khopra Ridge Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the baseline physical fitness requirements guide
                  </Link>
                  <Link href="/planning/can-beginners-do-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Find out if beginners can do the Khopra Ridge Trek safely
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This climate report is compiled by Pokhara-based meteorology advisors and ACAP guides with over 15 years of Annapurna field experience. Licensed Nepal Tourism Operator #8928-091. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
