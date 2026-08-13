import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/pokhara-to-kimche",
  },
  title: "Pokhara to Kimche Trailhead Transport Guide (Jeep, Bus",
  description: "Planning your Annapurna trek? Learn how to travel from Pokhara to Kimche trailhead — compare private jeep, shared jeep, and bus options, with real fare.",
};

export default function Page() {
  const comparisonData = [
    {
      factor: "Estimated Cost",
      privateJeep: "$100–$130 USD (vehicle)",
      sharedJeep: "NPR 500–700/seat (~$4–$5)",
      bus: "NPR 200–300 (to Nayapul only)"
    },
    {
      factor: "Travel Time (Dry Season)",
      privateJeep: "2.5–3 hours",
      sharedJeep: "3.5–4.5 hours",
      bus: "4+ hours (to Nayapul only)"
    },
    {
      factor: "Luggage Space",
      privateJeep: "Comfortable",
      sharedJeep: "Limited",
      bus: "Very limited"
    },
    {
      factor: "Departure Flexibility",
      privateJeep: "On your schedule",
      sharedJeep: "Fixed (early morning)",
      bus: "Fixed schedule"
    },
    {
      factor: "Comfort Level",
      privateJeep: "High",
      sharedJeep: "Moderate / Low",
      bus: "Low"
    },
    {
      factor: "Reaches Kimche Directly",
      privateJeep: "Yes",
      sharedJeep: "Yes",
      bus: "No"
    },
    {
      factor: "Monsoon Reliability",
      privateJeep: "Good (4WD)",
      sharedJeep: "Variable",
      bus: "Poor"
    }
  ];

  const seasonalTime = [
    { season: "Dry Season (Oct–May)", privateJeep: "2.5 to 3 hours", sharedJeep: "3.5 to 4.5 hours" },
    { season: "Monsoon Season (Jun–Sep)", privateJeep: "3 to 4 hours", sharedJeep: "4.5 to 6+ hours" }
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
            <span className="text-emerald-400">Pokhara to Kimche</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Annapurna Trailhead Transport (2026)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara to Kimche Trailhead Transport Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn how to travel from Pokhara to Kimche trailhead — compare private jeep, shared jeep, and bus options with updated fares, road conditions, and travel times.
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
              <a href="#where-is-kimche" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where Is Kimche?
              </a>
              <a href="#distance-route" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance &amp; Route Overview
              </a>
              <a href="#private-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private Jeep (Recommended)
              </a>
              <a href="#shared-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shared Local Jeep
              </a>
              <a href="#local-bus" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Public Bus Option?
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Road Conditions
              </a>
              <a href="#transport-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Comparison Matrix
              </a>
              <a href="#after-reaching-kimche" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Kimche to Ghandruk Hike
              </a>
              <a href="#booking-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Tips for Booking Transport
              </a>
              <a href="#local-support" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Trek Logistics
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
                Inquire Jeep Transfer
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Kimche Trailhead Transport Guide (Jeep, Bus, Cost &amp; Route)
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Getting from Pokhara to Kimche is the first practical step of any Ghandruk or Khopra Ridge Trek — and how you handle that journey sets the tone for the entire adventure. The good news is that the route is well-established, the options are clear, and with a little planning, you will arrive at the trailhead fresh and ready to walk.
              </p>
              <p>
                Most trekkers reach Kimche by private 4WD jeep or shared local jeep. A bus option technically exists but is rarely practical. The drive from Pokhara takes between 2.5 and 4.5 hours depending on which vehicle you choose, and the final section of the road — a steep, rough dirt track climbing above Birethanti — is the reason a capable off-road vehicle makes a genuine difference.
              </p>
              <p>
                In this guide, we break down every transport option available, give you honest fare estimates, explain the road conditions you will encounter, and tell you exactly why starting your trek from Kimche beats the old Nayapul route in almost every situation.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE IS KIMCHE */}
          <article id="where-is-kimche" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Kimche and Why Do Trekkers Start From Here?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Where Is Kimche Located?</strong> Kimche sits at approximately 1,640 metres above sea level in the foothills of the Annapurna Conservation Area, in Kaski District. It lies east of Birethanti along a steep switchback dirt road. The parking area at the top of the road has become one of the most important trekking access points in the Annapurna region.
              </p>
              <p>
                From Kimche, a well-maintained stone staircase path climbs roughly 300 metres in elevation to reach the main village centre of Ghandruk (1,940m) — typically a 45 to 60-minute walk at a comfortable pace.
              </p>
              <p>
                <strong>Why Kimche Has Become a Popular Trailhead:</strong> A decade ago, most trekkers heading to Ghandruk started their walk at Nayapul or Birethanti. As the jeep track expanded to Kimche, it cut several hours off the first trekking day. The trailhead at Kimche includes a permit checkpost (ACAP &amp; TIMS verification), a small tea stall, and a jeep parking area.
              </p>
              <p>
                <strong>Why Trekkers Skip Nayapul:</strong> Starting from Nayapul or Birethanti involves hours of road walking through dusty, vehicle-congested stretches. Starting from Kimche removes that road-walking section entirely. You step out of your jeep directly onto a scenic mountain trail.
              </p>
            </div>
          </article>

          {/* SECTION: DISTANCE & ROUTE */}
          <article id="distance-route" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Distance From Pokhara to Kimche and Route Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Total Distance:</strong> The driving distance from central Pokhara to Kimche is approximately 42 to 46 kilometres.
              </p>
              <p>
                <strong>Route Breakdown:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Pokhara &rarr; Nayapul (~32 km):</strong> Paved highway through Phewa Lake corridor and Seti River valley. Smooth, reasonable pace.</li>
                <li><strong>Nayapul &rarr; Birethanti (~2 km):</strong> Narrowing road near the Modi Khola river crossing. Gateway into ACAP checkpoint territory.</li>
                <li><strong>Birethanti &rarr; Kimche (~8–10 km):</strong> Steep, unpaved gravel and dirt track requiring 4WD ground clearance. A standard sedan will struggle here.</li>
              </ul>

              {/* TABLE: Seasonal Duration */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Season</th>
                      <th className="px-6 py-4">Private Jeep</th>
                      <th className="px-6 py-4">Shared Jeep</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {seasonalTime.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.season}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.privateJeep}</td>
                        <td className="px-6 py-4 text-stone-700">{row.sharedJeep}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: PRIVATE JEEP */}
          <article id="private-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Jeep From Pokhara to Kimche (Best Option for Most Trekkers)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cost and Current Fare Estimate:</strong> A private 4WD jeep costs between <strong>$100 and $130 USD total per vehicle</strong>. Seats 4 to 6 passengers comfortably alongside luggage.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>Solo traveler hiring private jeep: $100–$130 USD</li>
                <li>Two trekkers splitting cost: $50–$65 USD / person</li>
                <li>Group of four splitting cost: $25–$33 USD / person</li>
              </ul>
              <p>
                <strong>Travel Time &amp; Comfort:</strong> Takes <strong>2.5 to 3 hours</strong> in dry season. Offers door-to-door hotel pickup in Pokhara, flexible departure times, and smooth handling over the rough Birethanti–Kimche dirt climb.
              </p>
              <p>
                <strong>Who Should Choose Private Jeep:</strong> Pairs/groups, travelers with heavy trekking packs or camera gear, families, and anyone trekking during monsoon season.
              </p>
            </div>
          </article>

          {/* SECTION: SHARED JEEP */}
          <article id="shared-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Shared Jeep From Pokhara to Kimche (Best Budget Option)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Departure Point &amp; Schedule:</strong> Shared jeeps depart from <strong>Hari Chowk in central Pokhara</strong> between 6:00 AM and 9:00 AM. Vehicles depart once full.
              </p>
              <p>
                <strong>Fare Per Person:</strong> Costs <strong>NPR 500 to NPR 700 per seat (~$3.75 to $5.25 USD)</strong>.
              </p>
              <p>
                <strong>Pros &amp; Cons:</strong> Very cheap and authentic local experience, but seating can be cramped, luggage space is limited, and travel time is longer (3.5 to 4.5 hours) due to local stops.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL BUS */}
          <article id="local-bus" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Take a Bus From Pokhara to Kimche?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>No direct public bus service reaches Kimche.</strong> The dirt road from Birethanti to Kimche is too steep and narrow for standard buses.
              </p>
              <p>
                Local buses only run from Pokhara to Nayapul / Birethanti. Taking a bus to Nayapul and then looking for onward jeeps or walking adds 3 to 4 hours of unnecessary hassle. For budget travelers, the shared jeep from Hari Chowk is significantly better.
              </p>
            </div>
          </article>

          {/* SECTION: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Road Conditions Between Pokhara and Kimche
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Paved Section (Pokhara to Birethanti):</strong> Smooth 34 km drive passing through farmland and Seti River valley settlements.
              </p>
              <p>
                <strong>Off-Road Dirt Section (Birethanti to Kimche):</strong> 8–10 km of steep, uneven gravel switchbacks. Requires 4WD capability and high ground clearance.
              </p>
              <p>
                <strong>Monsoon Season (June to September):</strong> Muddy roads and occasional small landslides can extend travel time to 4.5–6+ hours. Early morning departures are vital.
              </p>
            </div>
          </article>

          {/* SECTION: TRANSPORT COMPARISON */}
          <article id="transport-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Transport Option Is Best? (Private Jeep vs Shared Jeep vs Bus)
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Factor</th>
                    <th className="px-6 py-4">Private Jeep</th>
                    <th className="px-6 py-4">Shared Jeep</th>
                    <th className="px-6 py-4">Local Bus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.factor}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.privateJeep}</td>
                      <td className="px-6 py-4 text-stone-700">{row.sharedJeep}</td>
                      <td className="px-6 py-4 text-stone-500">{row.bus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: AFTER REACHING KIMCHE */}
          <article id="after-reaching-kimche" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Happens After Reaching Kimche? (Hike to Ghandruk)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Walking From Kimche to Ghandruk Village:</strong> When your jeep drops you at Kimche parking area (1,640m), the trekking begins. A well-maintained stone staircase climbs 3.5 to 4 km through terraced fields to reach Ghandruk (1,940m).
              </p>
              <p>
                The climb takes <strong>45 to 60 minutes</strong> at a relaxed pace with approximately 300 metres of elevation gain. This stone staircase walk provides a scenic, gentle warm-up for the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link> or Poon Hill circuit.
              </p>
            </div>
          </article>

          {/* SECTION: BOOKING TIPS */}
          <article id="booking-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Tips for Booking Transport to Kimche
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Book Advance in Peak Seasons:</strong> During October–November and March–May, private jeeps should be reserved 1–2 days in advance.</li>
                <li><strong>Carry NPR Cash:</strong> Trailhead checkposts and local drivers require cash in Nepalese rupees.</li>
                <li><strong>Pack Rain Gear Accessibly:</strong> Keep waterproof coats at the top of your pack during monsoon season.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: LOCAL SUPPORT */}
          <article id="local-support" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Need Help Organising Your Trek Logistics?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As a licensed Nepal operator (Tourism Operator License #8928-091), our team coordinates direct private jeep transfers from your Pokhara hotel to Kimche, arranges ACAP &amp; TIMS permit registrations, and assigns experienced local guides.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Pokhara to Kimche Transport
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How do I get from Pokhara to Kimche?",
                  a: "The two main options are private 4WD jeep ($100–$130 USD, 2.5–3 hours) or shared local jeep from Hari Chowk (NPR 500–700 per seat, 3.5–4.5 hours). There is no direct public bus service to Kimche."
                },
                {
                  q: "How much does a private jeep from Pokhara to Kimche cost?",
                  a: "A private jeep costs between $100 and $130 USD for the full vehicle. Groups splitting the cost pay $25–$65 per person depending on party size."
                },
                {
                  q: "Is there a shared jeep from Pokhara to Kimche?",
                  a: "Yes. Shared jeeps depart from Hari Chowk in Pokhara between 6:00 AM and 9:00 AM. Fares are approximately NPR 500 to NPR 700 ($4–$5 USD) per seat."
                },
                {
                  q: "Can I take a local bus to Kimche?",
                  a: "No direct bus service reaches Kimche. Buses only run to Nayapul or Birethanti, requiring extra transport or hours of walking up dirt tracks."
                },
                {
                  q: "How long does it take to reach Kimche from Pokhara?",
                  a: "Private jeep takes 2.5 to 3 hours in dry season. Shared jeep takes 3.5 to 4.5 hours. Monsoon conditions can add 1 to 3 hours."
                },
                {
                  q: "Is Kimche better than Nayapul for starting a trek to Ghandruk?",
                  a: "Yes. Starting from Kimche eliminates dusty road walking between Nayapul and Birethanti and delivers you directly to the stone staircase trail leading up to Ghandruk."
                },
                {
                  q: "How far is Ghandruk from Kimche?",
                  a: "Approximately 3.5 to 4 kilometres by trail, with 300 metres of elevation gain. The stone staircase climb takes 45 to 60 minutes at a relaxed pace."
                },
                {
                  q: "Is the road from Pokhara to Kimche safe during monsoon?",
                  a: "The paved section to Birethanti is safe year-round. The upper Birethanti to Kimche dirt road is challenging during monsoon due to mud and rockfall. Early morning 4WD departures are essential."
                },
                {
                  q: "Can solo travellers use shared jeep transport?",
                  a: "Yes. Solo travellers regularly use shared jeeps from Hari Chowk. It is an affordable option if you are comfortable with local travel and flexible timing."
                },
                {
                  q: "Should I book transport before arriving in Pokhara?",
                  a: "During peak trekking seasons (October–November and March–May), advance booking for private jeep transport is strongly recommended to secure reliable vehicles."
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
              The Pokhara to Kimche transport decision comes down to a simple equation: if you are travelling in a group or prioritize comfort and schedule control, a private 4WD jeep is the right choice. If you are a solo budget traveler with flexible timing, the shared jeep from Hari Chowk is the practical alternative. Starting from Kimche rather than Nayapul gives you the best possible start to your trek — cleaner trail, better views, and none of the dusty road walking.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek With Local Support
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Transport is just the beginning. If you are planning a Khopra Ridge Trek and want everything — transport from Pokhara, ACAP and TIMS permits, certified local guides, community lodge accommodation bookings, and full route coordination — handled by an experienced local operator, we are ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Book Jeep Transport &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Ghandruk transit &amp; jeep guide
                  </Link>
                  <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore the Ghandruk village guide &amp; cultural hubs
                  </Link>
                  <Link href="/planning/jeep-vs-bus-for-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare local jeep vs local bus options on mountain roads
                  </Link>
                  <Link href="/planning/return-transport-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Plan return transport options after finishing your trek
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
                This trailhead &amp; jeep transport advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
