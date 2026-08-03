import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-solo",
  },
  title: "Solo Trekking to Khopra Ridge: Complete Independent Trek Planning Guide",
  description: "Planning solo trekking to Khopra Ridge? Learn about Nepal's trekking regulations, route details, safety risks, permit costs, itinerary options, and whether you need a guide — complete planning guide for independent trekkers.",
};

export default function Page() {
  const elevationGain = [
    { day: "1", segment: "Pokhara to Ghandruk", start: "820m", end: "1,940m" },
    { day: "2", segment: "Ghandruk to Tadapani", start: "1,940m", end: "2,630m" },
    { day: "3", segment: "Tadapani to Dobato", start: "2,630m", end: "3,360m" },
    { day: "4", segment: "Dobato to Khopra Ridge", start: "3,360m", end: "3,660m" },
    { day: "5", segment: "Khopra Ridge to Khayer Lake", start: "3,660m", end: "4,500m" },
    { day: "6", segment: "Khayer Lake to Swanta", start: "4,500m", end: "2,200m" },
    { day: "7", segment: "Swanta to Ghandruk", start: "2,200m", end: "1,940m" }
  ];

  const itinerary7Day = [
    { day: "Day 1", route: "Pokhara to Ghandruk (Jeep & short walk)" },
    { day: "Day 2", route: "Ghandruk to Tadapani" },
    { day: "Day 3", route: "Tadapani to Dobato" },
    { day: "Day 4", route: "Dobato to Khopra Ridge" },
    { day: "Day 5", route: "Khopra Ridge to Swanta" },
    { day: "Day 6", route: "Swanta to Ghandruk" },
    { day: "Day 7", route: "Ghandruk to Pokhara" }
  ];

  const itinerary9Day = [
    { day: "Day 1", route: "Pokhara to Ghandruk" },
    { day: "Day 2", route: "Ghandruk — Acclimatization and village exploration" },
    { day: "Day 3", route: "Ghandruk to Tadapani" },
    { day: "Day 4", route: "Tadapani to Dobato" },
    { day: "Day 5", route: "Dobato to Khopra Ridge" },
    { day: "Day 6", route: "Khopra Ridge — Rest and views" },
    { day: "Day 7", route: "Khopra Ridge to Swanta" },
    { day: "Day 8", route: "Swanta to Ghandruk" },
    { day: "Day 9", route: "Ghandruk to Pokhara" }
  ];

  const itinerary11Day = [
    { day: "Day 1", route: "Pokhara to Ghandruk" },
    { day: "Day 2", route: "Ghandruk — Acclimatization" },
    { day: "Day 3", route: "Ghandruk to Tadapani" },
    { day: "Day 4", route: "Tadapani to Dobato" },
    { day: "Day 5", route: "Dobato to Khopra Ridge" },
    { day: "Day 6", route: "Khopra Ridge — Rest and acclimatization" },
    { day: "Day 7", route: "Khopra Ridge to Khayer Lake (4,500m) & return" },
    { day: "Day 8", route: "Khopra Ridge to Swanta" },
    { day: "Day 9", route: "Swanta to Ghandruk" },
    { day: "Day 10", route: "Ghandruk to Pokhara" }
  ];

  const transportCosts = [
    { route: "Kathmandu → Pokhara", option: "Tourist bus", cost: "USD 10–15" },
    { route: "Kathmandu → Pokhara", option: "Domestic flight", cost: "USD 90–120" },
    { route: "Pokhara → Ghandruk", option: "Shared jeep", cost: "USD 4–6" },
    { route: "Pokhara → Ghandruk", option: "Private jeep", cost: "USD 25–40 (split)" },
    { route: "Ghandruk → Pokhara (return)", option: "Shared jeep", cost: "USD 4–6" }
  ];

  const budgetDaily = [
    { type: "Budget independent trekker", cost: "USD 25–35 per day" },
    { type: "Standard independent trekker", cost: "USD 40–55 per day" },
    { type: "Trekker with licensed guide", cost: "USD 65–90 per day" }
  ];

  const monthConditions = [
    { month: "January", cond: "Cold, snow above 3,000m, very quiet", rec: "Experienced winter trekkers only" },
    { month: "February", cond: "Cold, improving, rhododendrons beginning", rec: "With preparation — yes" },
    { month: "March", cond: "Excellent — clear views, rhododendrons blooming", rec: "Highly recommended" },
    { month: "April", cond: "Very good — warm lower, clear upper", rec: "Highly recommended" },
    { month: "May", cond: "Pre-monsoon cloud building", rec: "Good early May, caution late May" },
    { month: "June", cond: "Monsoon begins, wet and slippery", rec: "Not recommended" },
    { month: "July", cond: "Heavy monsoon, poor visibility", rec: "Not recommended" },
    { month: "August", cond: "Monsoon continuing", rec: "Not recommended" },
    { month: "September", cond: "Monsoon clearing, trails green and fresh", rec: "Good from mid-September" },
    { month: "October", cond: "Prime season — clear skies, perfect conditions", rec: "Highest recommendation" },
    { month: "November", cond: "Excellent — clear and cool, fewer crowds", rec: "Highly recommended" },
    { month: "December", cond: "Cooling, early snow possible above 3,500m", rec: "With preparation — yes" }
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
            <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Solo Trekking Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Independent Trek Planning Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Solo Trekking to Khopra Ridge
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Complete independent trek planning guide. Learn about Nepal&apos;s trekking regulations, route details, safety risks, permit costs, itinerary options, and whether you need a guide.
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
              <a href="#can-you-do-solo" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Can You Trek Solo?
              </a>
              <a href="#safety-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety &amp; Altitude Risks
              </a>
              <a href="#trek-difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Fitness
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview &amp; Villages
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Recommended Itineraries
              </a>
              <a href="#cost-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Complete Cost Breakdown
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation &amp; Food
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Season for Solo Trekking
              </a>
              <a href="#solo-female" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solo Female Trekking Advice
              </a>
              <a href="#independent-vs-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Independent vs Hiring a Guide
              </a>
              <a href="#packing-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
              </a>
              <a href="#emergency-planning" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Emergency &amp; Rescue Planning
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
                Inquire Solo Assistance
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Solo Trekking to Khopra Ridge: Complete Independent Trek Planning Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Solo trekking to Khopra Ridge is one of the most rewarding decisions you can make as an independent traveler in Nepal. The route leads through traditional Gurung villages, ancient rhododendron forests, and high alpine ridges with unobstructed views of Annapurna South, Dhaulagiri, and Machhapuchhre — all on a trail that sees a fraction of the foot traffic compared to Poon Hill or Annapurna Base Camp.
              </p>
              <p>
                But before you pack your bag and head for Pokhara, you need clear answers to the questions that matter most. Can you legally trek Khopra Ridge alone? Do you need a licensed guide? Is the route safe for independent travel? How much will the full trek cost?
              </p>
              <p>
                This guide answers all of it. We have organized this page specifically for travelers who are planning to do this trek independently — covering current regulations, safety realities, route details, costs, seasonal conditions, and the practical information that generic trekking blogs leave out.
              </p>
            </div>
          </article>

          {/* SECTION: CAN YOU DO SOLO */}
          <article id="can-you-do-solo" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Do Solo Trekking to Khopra Ridge?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Is Solo Trekking Allowed in Nepal?</strong> Solo trekking in Nepal is permitted on most open routes, including the Khopra Ridge circuit. However, Nepal&apos;s trekking regulations shift periodically. Check current guidelines with the Nepal Tourism Board or a licensed local operator before departure.
              </p>
              <p>
                <strong>Do You Need a Licensed Guide for the Khopra Ridge Trek?</strong> Khopra Ridge does not fall under strict restricted area permit zones (like Upper Mustang). Independent trekkers with valid <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP</Link> and <Link href="/planning/tims-card-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">TIMS</Link> permits can access the trail. However, many solo hikers choose to hire a local guide from Ghandruk or Tadapani for the less-marked upper sections between Dobato and Khopra Ridge.
              </p>
              <p>
                <strong>What &quot;Solo Trekking&quot; Means on This Route:</strong> On Khopra Ridge, solo trekking means self-guided teahouse trekking — sleeping in community lodges each night, buying meals, and carrying a light daypack rather than carrying camping gear and cooking equipment.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY RISKS */}
          <article id="safety-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Khopra Ridge Safe for Solo Trekkers?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Trail Safety &amp; Navigation:</strong> Lower sections from Pokhara to Ghandruk and Tadapani are well-marked. Past Tadapani toward Dobato and Khopra Danda, trail markers become sparse and foot traffic drops. Downloading offline maps (Maps.me or Gaia GPS) in Pokhara is mandatory.
              </p>
              <p>
                <strong>Altitude Risks &amp; AMS:</strong> Khopra Ridge sits at 3,660 metres and Khayer Lake sits at 4,500 metres. Acute Mountain Sickness (AMS) can affect unacclimatized hikers. Follow proper pacing and never ascend with symptoms.
              </p>
              <p>
                <strong>Emergency Rescue &amp; Evacuation:</strong> Ground evacuations are slow in remote areas. Helicopter evacuation costs USD 1,500–3,000. <strong>Comprehensive travel insurance covering high-altitude trekking above 4,000m and helicopter rescue is essential.</strong>
              </p>
              <p>
                <strong>Mobile Network Coverage:</strong> Signal (NTC / Ncell) becomes weak or nonexistent past Dobato. Community lodge Wi-Fi is unreliable. Bring a fully charged power bank.
              </p>
            </div>
          </article>

          {/* SECTION: TREK DIFFICULTY */}
          <article id="trek-difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is rated as a moderate to challenging trek requiring 5 to 8 hours of daily hiking over an 80 to 100 km loop.
              </p>

              {/* Table: Elevation Gain */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Day</th>
                      <th className="px-6 py-4">Route Segment</th>
                      <th className="px-6 py-4">Start Elevation</th>
                      <th className="px-6 py-4">End Elevation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {elevationGain.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.day}</td>
                        <td className="px-6 py-4 text-stone-700 font-medium">{row.segment}</td>
                        <td className="px-6 py-4 text-stone-600">{row.start}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.end}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 italic">
                Note: Elevations are approximate. Actual conditions vary by specific trail variant chosen.
              </p>
            </div>
          </article>

          {/* SECTION: ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Khopra Ridge Trekking Route Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Kathmandu to Pokhara:</strong> Take a tourist bus (6–7 hrs, $10–$15 USD) or domestic flight (25 mins, $90–$120 USD).
              </p>
              <p>
                <strong>Pokhara to Ghandruk:</strong> <Link href="/planning/pokhara-to-ghandruk" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Pokhara to Ghandruk transport</Link> via shared jeep ($4–$6 USD) or private jeep ($25–$40 USD split).
              </p>
              <p>
                <strong>Village Breakdown:</strong> Ghandruk (1,940m) &rarr; Tadapani (2,630m) &rarr; Bayeli Kharka (3,100m) &rarr; Chhistibung (3,380m) &rarr; Dobato (3,360m) &rarr; Khopra Ridge (3,660m) &rarr; Swanta (2,200m).
              </p>
              <p>
                <strong>Optional Khayer Lake Side Trip (4,500m):</strong> High-altitude glacial lake excursion adding 1–2 days. Requires strong fitness and zero AMS symptoms.
              </p>
            </div>
          </article>

          {/* SECTION: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Recommended Khopra Trek Itineraries for Solo Travelers
            </h2>
            <div className="space-y-6">
              {/* 7-Day Itinerary */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-2">1. 7-Day Fast Itinerary (Experienced Hikers)</h3>
                <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                        <th className="px-6 py-4">Day</th>
                        <th className="px-6 py-4">Route Segment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      {itinerary7Day.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="px-6 py-4 font-bold text-stone-900">{row.day}</td>
                          <td className="px-6 py-4 text-stone-700">{row.route}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 9-Day Itinerary */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-2">2. 9-Day Standard Itinerary (Recommended for Most Solo Hikers)</h3>
                <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                        <th className="px-6 py-4">Day</th>
                        <th className="px-6 py-4">Route Segment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      {itinerary9Day.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="px-6 py-4 font-bold text-stone-900">{row.day}</td>
                          <td className="px-6 py-4 text-stone-700">{row.route}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 10-11 Day Itinerary */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-2">3. 10–11 Day Extended Khayer Lake Itinerary</h3>
                <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                        <th className="px-6 py-4">Day</th>
                        <th className="px-6 py-4">Route Segment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      {itinerary11Day.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="px-6 py-4 font-bold text-stone-900">{row.day}</td>
                          <td className="px-6 py-4 text-stone-700">{row.route}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: COST BREAKDOWN */}
          <article id="cost-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Khopra Ridge Trek Cost Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Required Permits:</strong> ACAP Permit (NPR 3,000 / ~$25 USD) + TIMS Card (NPR 2,000 / ~$15 USD).
              </p>
              <p>
                <strong>Accommodation &amp; Meals:</strong> Lodge rooms cost NPR 300–600 ($2–$5 USD) per night. Daily meals cost NPR 1,500–2,500 ($11–$19 USD).
              </p>
              <p>
                <strong>Optional Staff Hire:</strong> Licensed Guide ($25–$35/day), Porter ($18–$25/day), or Guide-Porter ($22–$28/day).
              </p>
              
              {/* Daily Budget Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Traveler Type</th>
                      <th className="px-6 py-4">Estimated Daily Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {budgetDaily.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.type}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Food on the Khopra Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Community-run lodges provide basic twin rooms, dining halls with wood stoves, Dal Bhat, noodle soups, eggs, and hot drinks. Solar charging (NPR 100–200/device) and Wi-Fi are available at most lodges. Arrive early afternoon during peak months to secure private rooms at Dobato and Khopra Danda.
              </p>
            </div>
          </article>

          {/* SECTION: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time for Solo Trekking to Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Autumn (October–November):</strong> Peak season with crystal-clear mountain visibility.
              </p>
              <p>
                <strong>Spring (March–May):</strong> Rhododendron blooms and mild temperatures.
              </p>

              {/* Month by Month Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Month</th>
                      <th className="px-6 py-4">Conditions</th>
                      <th className="px-6 py-4">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {monthConditions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.month}</td>
                        <td className="px-6 py-4 text-stone-700">{row.cond}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: SOLO FEMALE */}
          <article id="solo-female" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Solo Female Trekking on Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is safe for solo female trekkers. Local Gurung and Magar villages are welcoming and respectful. Practical tips: dress modestly (covering shoulders/knees in villages), share your daily itinerary with guesthouse hosts, and consider hiking upper sections with fellow travelers or a local guide.
              </p>
            </div>
          </article>

          {/* SECTION: INDEPENDENT VS GUIDE */}
          <article id="independent-vs-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Independent Trek vs Hiring a Local Guide
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Independent Trek:</strong> Full flexibility, lower cost, rewarding self-reliance. Recommended for experienced alpine hikers.
              </p>
              <p>
                <strong>Hiring a Guide:</strong> Navigation ease, cultural insight, emergency radio dispatch, and seamless lodge bookings. Recommended for first-time high-altitude trekkers.
              </p>
            </div>
          </article>

          {/* SECTION: PACKING CHECKLIST */}
          <article id="packing-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing Checklist for Solo Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Clothing:</strong> Thermal base layers, mid-fleece/down jacket, waterproof shell, warm hat &amp; gloves, trekking boots, wool socks.</li>
                <li><strong>Gear:</strong> 40–50L backpack, trekking poles, headlamp, sleeping bag liner.</li>
                <li><strong>Health:</strong> First aid kit, Diamox, water purification tablets/SteriPen, sunscreen SPF 50+.</li>
                <li><strong>Electronics:</strong> Power bank (10,000mAh+), downloaded Maps.me offline maps.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: EMERGENCY PLANNING */}
          <article id="emergency-planning" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Emergency Planning and Safety Preparation
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Prevent AMS by ascending slowly. If symptoms appear (headache, nausea), descend immediately. Ensure your travel insurance covers helicopter rescue above 4,000m. In case of emergency, notify lodge hosts to contact rescue dispatch.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Solo Trekking to Khopra Ridge
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can I trek Khopra Ridge without a guide?",
                  a: "Yes, independent trekking with valid ACAP and TIMS permits is allowed. However, hiring a local guide from Ghandruk is recommended for the remote upper sections."
                },
                {
                  q: "Is solo trekking legal in Nepal right now?",
                  a: "Solo trekking remains legal on open routes in the Annapurna Conservation Area. Always verify current rules before travel."
                },
                {
                  q: "How difficult is the Khopra Ridge trek?",
                  a: "Rated moderate to challenging, with 5–8 hours of daily hiking over an 80–100 km circuit up to 3,660m (4,500m for Khayer Lake)."
                },
                {
                  q: "How much does the Khopra Ridge trek cost?",
                  a: "Budget $25 to $55 per day for lodges and meals. Permits cost approx. $37 to $40 total."
                },
                {
                  q: "How many days do I need for the Khopra Ridge trek?",
                  a: "7 days minimum for a fast itinerary, 9 days standard, or 10–11 days to include Khayer Lake."
                },
                {
                  q: "Is altitude sickness common on Khopra Ridge?",
                  a: "AMS is a risk above 3,000m, particularly on the 4,500m Khayer Lake day trip. Follow proper acclimatization."
                },
                {
                  q: "Is Khopra Ridge safe for solo female travelers?",
                  a: "Yes. Local Gurung/Magar communities are welcoming and safe. Standard sensible travel precautions apply."
                },
                {
                  q: "What permits do I need for the Khopra trek?",
                  a: "An ACAP Permit ($25 USD) and TIMS Card ($15 USD), available in Pokhara or Kathmandu."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "Yes! Sacred glacial Khayer Lake (4,500m) offers stunning high-altitude views for fit, acclimatized trekkers."
                },
                {
                  q: "What is the best season for Khopra Ridge trek?",
                  a: "October–November (autumn) for crystal-clear skies, and March–April (spring) for blooming rhododendrons."
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
              Solo trekking to Khopra Ridge is genuinely achievable for prepared travelers. It offers quiet trails, authentic Gurung &amp; Magar hospitality, and world-class Himalayan panoramas. Prepare thoroughly, respect altitude, carry insurance, and enjoy the journey!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a licensed Nepal trekking operator based in Pokhara (Nepal Tourism Operator License #8928-091). Whether you need permit logistics, jeep transfers, or a licensed local guide for your solo trek, our team is ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Plan Your Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/acap-permit-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check complete ACAP permit requirements
                  </Link>
                  <Link href="/planning/tims-card-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the complete TIMS card guide
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Ghandruk transit guide
                  </Link>
                  <Link href="/planning/jeep-vs-bus-for-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare local jeep vs local bus transport
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
                This solo trekking advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
