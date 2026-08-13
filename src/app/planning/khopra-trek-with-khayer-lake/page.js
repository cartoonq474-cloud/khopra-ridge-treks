import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-with-khayer-lake",
  },
  title: "Khopra Ridge Trek with Khayer Lake | Nepal Trek Guide",
  description: "Planning the Khopra Ridge Trek with Khayer Lake? Get the full itinerary, difficulty rating, cost breakdown, permits, best season, and expert local trekking.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "7 - 9 Days" },
    { label: "Max Altitude", value: "4,660m (Khayer Lake)" },
    { label: "Difficulty Grade", value: "Moderate to Challenging" },
    { label: "Overnight Max", value: "3,660m (Khopra Ridge)" }
  ];

  const advantages = [
    {
      title: "Spiritual Pilgrimage Site",
      desc: "Khayer Lake is a holy alpine sanctuary for Hindu and Buddhist pilgrims. Small shrines and prayer flags sit at the water&apos;s edge under Annapurna South."
    },
    {
      title: "Close-Range Peak Views",
      desc: "Get incredibly close to the south face of Annapurna South, along with unobstructed vistas of Dhaulagiri and Nilgiri Himal further west."
    },
    {
      title: "Pristine Trail Solitude",
      desc: "Infrastructure is solid enough to be comfortable (community lodges, marked paths) but crowd density is a fraction of popular Annapurna Base Camp."
    },
    {
      title: "Climb High, Sleep Low",
      desc: "Your highest overnight stop is Khopra Ridge (3,660m), providing an ideal acclimatization buffer after hiking to the lake at 4,660m."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara to Ghandruk",
      elev: "1,940m",
      time: "2 - 3 hours drive + 1 - 2 hours walk",
      desc: "Drive to Kimche, then take a short, steep climb into Ghandruk, one of the largest Gurung villages in the region. Easy day designed to introduce you to the local lifestyle."
    },
    {
      day: 2,
      title: "Ghandruk to Dobato",
      elev: "3,432m",
      time: "6 - 7 hours hike",
      desc: "A long climbing day through dense rhododendron and oak forest. Pass through Tadapani before ascending to the high meadow lodges of Dobato."
    },
    {
      day: 3,
      title: "Dobato to Khopra Ridge",
      elev: "3,660m",
      time: "4 - 5 hours hike",
      desc: "Hike along open ridge pasture, dropping briefly to Chhistibung before climbing back up to the community lodge at Khopra Ridge. Early arrival helps you rest."
    },
    {
      day: 4,
      title: "Khopra Ridge to Khayer Lake and Return",
      elev: "4,660m",
      time: "8 - 10 hours round trip",
      desc: "The defining push. Gain 1,000m over a 16km round trip. Walk through unshaded rocky glacial basins to the sacred lake directly under Annapurna South, then return to the ridge."
    },
    {
      day: 5,
      title: "Khopra Ridge to Swanta",
      elev: "2,214m",
      time: "6 hours hike",
      desc: "A long, sustained descent through thick bamboo forest to the quiet Magar village of Swanta. Recover from yesterday&apos;s high-altitude effort."
    },
    {
      day: 6,
      title: "Swanta to Ghorepani",
      elev: "2,860m",
      time: "5 - 6 hours hike",
      desc: "Drop to a river suspension bridge before climbing back up to Ghorepani. Rejoin the classic Poon Hill trail network and its larger teahouses."
    },
    {
      day: 7,
      title: "Ghorepani to Poon Hill to Nayapul to Pokhara",
      elev: "3,210m / 820m",
      time: "5 - 6 hours hike + drive",
      desc: "Climb to Poon Hill for sunrise. Complete the long descent down the stone steps to Nayapul, and catch your private vehicle transfer back to Pokhara Lakeside."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Alpine Pilgrimage Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trek with Khayer Lake: Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            While some simple itineraries skip it to save a day, the side trip up to Khayer Lake (4,660m) directly beneath the south face of Annapurna South is the true highlight of the route.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
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
                What Is The Trek?
              </a>
              <a href="#why-special" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Khayer Lake?
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Fitness
              </a>
              <a href="#altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude &amp; Safety
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Breakdown
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodging &amp; Food
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits Required
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons to Go
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra vs Poon Hill
              </a>
              <a href="#guides" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hiring local Guides
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
          {/* SECTION 1: WHAT IS THE TREK */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Khopra Ridge Trek with Khayer Lake?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The Khopra Ridge Trek with Khayer Lake is a moderate-to-challenging trekking route in the Annapurna Conservation Area that links the villages of Ghandruk, Tadapani, and Swanta with the high pastures of Khopra Ridge and the sacred alpine lake above it. It&apos;s sometimes listed under its older name, the Khopra Danda Trek, but the version that includes Khayer Lake is the more complete and rewarding of the two.
              </p>
              <h3 className="text-lg font-bold text-stone-900 mt-6">Where Is Khopra Ridge Located?</h3>
              <p>
                Khopra Ridge sits inside the Annapurna Conservation Area in western Nepal, roughly a day&apos;s drive and three days&apos; walk from Pokhara. The ridge itself sits at around 3,660 meters, on a grassy plateau with uninterrupted views toward Dhaulagiri, Annapurna South, and the Annapurna Sanctuary.
              </p>
              <h3 className="text-lg font-bold text-stone-900 mt-6">Why This Trek Is Less Crowded</h3>
              <p>
                The standard Poon Hill loop sees heavy foot traffic, especially during October and November. The Khopra and Khayer Lake route shares only its final two days with that trail. For most of the week, you&apos;ll be walking through forest and ridge pasture with just your group and the occasional herder.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHY KHAYER LAKE */}
          <article id="why-special" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Khayer Lake Makes This Trek Special
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {advantages.map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-900 text-base">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Route Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The trek begins with a drive from Pokhara to Kimche, taking roughly 2 to 3 hours. From Kimche, a short uphill walk brings you to Ghandruk where the trail officially starts.
              </p>
              <p>
                <strong>Main Stops:</strong> Ghandruk (Gurung cultural center), Tadapani (forest ridge), Dobato (high pasture camps), Khopra Ridge (central base lodge), Khayer Lake (high-altitude turning point), Swanta (Magar valley village), Ghorepani, and Nayapul (exit town).
              </p>
              <p>
                Across the loop, you will cover roughly 60 to 65 kilometers, climbing from 1,000m to 4,660m. This massive vertical swing is what makes the trek physically demanding.
              </p>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Detailed 7-Day Khopra Trek Itinerary
            </h2>

            <div className="space-y-6">
              {itinerary.map((d) => (
                <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                    {d.day}
                  </span>
                  <div className="w-full bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-stone-955 text-base">Day {d.day} – {d.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Estimated Time: {d.time}</span>
                    <p className="text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 5: DIFFICULTY & FITNESS */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty and Fitness Level Required
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <p>
                The Khopra Ridge Trek with Khayer Lake sits in the moderate to challenging category. It is harder than the standard Poon Hill loop because of the Khayer Lake side trip, but it doesn&apos;t require technical mountaineering skills or ropes.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Daily Physical Demands</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Most days involve 4 to 7 hours of walking, with Day 4 standing out at 8 to 10 hours. Trails alternate between forest switchbacks and steep, unshaded ascents.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">The Khayer Lake Day Hike Challenge</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Gaining 1,000 meters in one day at altitude with no facilities along the way demands a slow, steady pace and good pacing discipline. Weather can shift quickly.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Is This Trek Suitable for Beginners?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekkers with no prior high-altitude experience can complete this route, but it is not an ideal first trek. It suits hikers who already have some multi-day trekking or strenuous hiking experience.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ALTITUDE & SAFETY */}
          <article id="altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude, Acclimatization, and Safety Considerations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khayer Lake, at 4,660 meters, is the highest point on the route. Above 3,500 meters, Acute Mountain Sickness (AMS) becomes a real possibility. Common early symptoms include headache, nausea, dizziness, and disrupted sleep.
              </p>
              <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-850 text-xs space-y-2">
                <h5 className="font-bold text-stone-900">How to Stay Safe During the Trek:</h5>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Drink at least 3–4 liters of water daily, especially on the Khayer Lake day.</li>
                  <li>Pace yourself on ascents rather than rushing to keep up with faster hikers.</li>
                  <li>Watch for AMS symptoms and descend immediately if they worsen.</li>
                  <li>Trek with a licensed guide, especially above Khopra Ridge, where trails can be obscured by fog or early snow.</li>
                  <li>Carry a headlamp, basic first aid, and weatherproof layers at all times.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 7: COST BREAKDOWN */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Cost Breakdown
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                <thead>
                  <tr className="text-stone-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Cost Item</th>
                    <th className="pb-3">Independent Trekker</th>
                    <th className="pb-3 text-right">Guided Trek (Per Person)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-medium">
                  <tr>
                    <td className="py-2 font-bold text-stone-900">ACAP Permit</td>
                    <td className="py-2 text-stone-500">~$25–30 USD</td>
                    <td className="py-2 text-right text-emerald-600">Included</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">TIMS Card</td>
                    <td className="py-2 text-stone-500">~$10–20 USD</td>
                    <td className="py-2 text-right text-emerald-600">Included</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Licensed Guide</td>
                    <td className="py-2 text-stone-500">N/A</td>
                    <td className="py-2 text-right text-emerald-600">~$25–35 USD / day</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Porter Services</td>
                    <td className="py-2 text-stone-500">N/A</td>
                    <td className="py-2 text-right text-emerald-600">~$20–25 USD / day</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Lodging &amp; Meals</td>
                    <td className="py-2 text-stone-500">~$30–45 USD / day</td>
                    <td className="py-2 text-right text-emerald-600">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Independent Budget Estimate</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekking independently is cheaper, typically running USD 300–450 for a 7-day trip once permits, basic teahouses, and meals are factored in. The trade-off is navigating yourself.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Guided Package Estimate</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Guided packages run USD 600–900 per person. This adds a meaningful safety margin on the trek&apos;s hardest day, and covers all permit logistics, lodging booking, and porters.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: LODGING & FOOD */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Food during the Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Lodging is simple. Expect twin beds and shared bathrooms. Clean and well-maintained. Lodge profits directly fund school teacher salaries and infrastructure in Swanta and Magar villages.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Hearty Meals</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Menus offer standard items: dal bhat (rice, lentils, curry), noodles, fried rice, chapati bread, soups, and basic pastas. Hot lemon and teas are available. Prices rise with altitude.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Power &amp; Network</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Most lodges charge a small fee for device charging (solar is common). Mobile network is patchy above Dobato and largely absent around Khopra Ridge and Khayer Lake.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits Required for the Khopra Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-stone-600 leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">ACAP Permit</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Since the entire route falls within the Annapurna Conservation Area, every trekker needs an ACAP permit, which contributes to conservation and community development.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">TIMS Card</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  A Trekkers&apos; Information Management System card is also required. Ensure you verify the latest guide regulations, as independent trekking rules have shifted in recent years.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Do the Khopra Ridge Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-stone-600">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Spring (March to May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Vivid rhododendron forests bloom in reds and pinks along the Ghandruk-to-Dobato stretch. Daytime temperatures are comfortable for hiking.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Autumn (September to November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Considered the best season overall, with the clearest skies and the most reliable mountain visibility from Khopra Ridge and Khayer Lake.
                </p>
              </div>
            </div>
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-800 text-xs">
              <strong>Winter &amp; Monsoon Note:</strong> Winter is cold and snow can block the trail to Khayer Lake. Monsoon (June-August) is muddy, has leeches in the forest, and poor visibility.
            </div>
          </article>

          {/* SECTION 11: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing List for the Khayer Lake Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Insulated mid-layer (fleece/down)</li>
                    <li>Windproof, waterproof shell jacket</li>
                    <li>Warm beanie, thermal gloves &amp; neck gaiter</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Essential Gear</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sturdy, broken-in trekking boots</li>
                    <li>Adjustable trekking poles</li>
                    <li>Headlamp with spare batteries</li>
                    <li>Power bank &amp; first-aid kit</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Food &amp; Water</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Minimum 3 liters of water capacity</li>
                    <li>Water purification tablets/filter</li>
                    <li>High-energy snacks (nuts, bars)</li>
                    <li>Thermal water flask</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 12: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek vs. Poon Hill Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Mountain Views</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Poon Hill gives a classic sunrise look. Khopra Ridge and Khayer Lake get you significantly closer to Annapurna South, providing massive Nilgiri and Dhaulagiri vistas.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Beginner Friendliness</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Poon Hill is easier, shorter, lower, and well-supported. Khopra Ridge is best for hikers who have some multi-day experience and want a challenging, rewarding route.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Crowd Levels</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Khopra Ridge wins here clearly. Outside the final days which rejoin Poon Hill, the route sees a fraction of the foot traffic, offering a quiet wilderness experience.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 13: GUIDES */}
          <article id="guides" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Should You Hire a Guide for the Khayer Lake Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                A licensed local guide brings route knowledge that is hard to replace, particularly above Khopra Ridge, where the trail to Khayer Lake can become difficult to follow in fog, early snow, or low visibility.
              </p>
              <p>
                <strong>Safety Margin:</strong> Local operators now equip guides with pulse oximeters and satellite communicators for the Khayer Lake section, where there is no mobile coverage and no quick way to call for help. A guide adds a crucial layer of safety.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khayer Lake Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How difficult is the Khopra Ridge Trek with Khayer Lake?",
                  a: "It's a moderate-to-challenging trek. Most days involve 4–7 hours of walking, but the Khayer Lake day stands apart, with an 8–10 hour round trip and a 1,000-meter elevation gain. No technical climbing skills are needed, but solid fitness and proper acclimatization are essential."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "Yes. Khayer Lake is widely considered the highlight of the entire route — a sacred, turquoise alpine lake at 4,660 meters with close-up views of Annapurna South. Skipping it means missing the trek's most distinctive feature."
                },
                {
                  q: "How many days does the Khopra Ridge Trek take?",
                  a: "The standard itinerary takes 7 days, from Pokhara back to Pokhara, though some trekkers add a buffer day for weather or extra acclimatization before the Khayer Lake push."
                },
                {
                  q: "What is the altitude of Khayer Lake?",
                  a: "Khayer Lake sits at approximately 4,660 meters, making it the highest point on the entire Khopra Ridge Trek route."
                },
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Beginners can complete it, but it's not an ideal first trek in Nepal. It suits hikers with some prior multi-day hiking experience and reasonable fitness; first-time trekkers are often better served starting with the standard Poon Hill loop."
                },
                {
                  q: "How much does the Khopra Ridge Trek cost?",
                  a: "Independent trekking typically costs $300–450 USD for 7 days, while a guided package with permits, accommodation, and meals included generally runs $600–900 USD per person."
                },
                {
                  q: "What permits are required for the Khopra Trek?",
                  a: "You'll need an Annapurna Conservation Area Permit (ACAP) and a TIMS card, both of which can be arranged in Pokhara, Kathmandu, or in advance through a licensed trekking agency."
                },
                {
                  q: "Is the Khopra Ridge Trek better than the Poon Hill Trek?",
                  a: "It depends on your priorities. Poon Hill is shorter, easier, and more accessible; Khopra Ridge with Khayer Lake is longer, more demanding, and significantly less crowded, with closer mountain views."
                },
                {
                  q: "Do I need a guide for the Khayer Lake Trek?",
                  a: "A guide isn't strictly mandatory, but it's strongly recommended, especially for the Khayer Lake day, where trails can become hard to follow in poor weather and there's no mobile coverage if something goes wrong."
                },
                {
                  q: "What is the best season for this trek?",
                  a: "Autumn (September to November) offers the clearest mountain views, while spring (March to May) adds blooming rhododendron forests. Winter brings snow risk near Khayer Lake, and monsoon season brings slippery, leech-prone trails."
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

          {/* SECTION 15: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek with Khayer Lake isn&apos;t just another Annapurna itinerary — it&apos;s one of the few routes in the region that still delivers genuine solitude alongside serious mountain views. The climb to Khayer Lake is demanding, but it&apos;s also what separates this trek from every shortcut version that skips it to save a day.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              If you&apos;ve made it this far, you likely have what you need to decide whether this route fits your fitness level, timeline, and trekking goals. The next step is making sure you&apos;re prepared.
            </p>
          </article>

          {/* SECTION 16: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khayer Lake Trek with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guides are based in Pokhara and Swanta, carry pulse oximeters and satellite communicators for the Khayer Lake section, and check trail and weather conditions year-round. Talk to a local guide before you book.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Guided Trek &rarr;
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
                This guide is managed and reviewed by licensed local trekking guides operating out of Pokhara. We regularly update routes, weather warnings, and community lodge statuses based on active trail checks.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
