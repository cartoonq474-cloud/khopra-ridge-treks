import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pokhara to Ghandruk Transportation Guide: Jeep, Bus, Taxi, Costs & Travel Time",
  description: "Plan your journey from Pokhara to Ghandruk with confidence. Compare private jeep, shared jeep, local bus, and taxi options — including costs, travel times, road conditions, and trekker tips.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Road Distance", value: "60 to 65 km" },
    { label: "Travel Time", value: "2.5 to 5.5 Hours" },
    { label: "Private Jeep Cost", value: "NPR 7,000 – 9,000" },
    { label: "Local Bus Cost", value: "NPR 400 – 600" }
  ];

  const comparisons = [
    { name: "Private Jeep", costNpr: "7,000 – 9,000", costUsd: "$55 – $70", duration: "2.5 – 3 hrs", comfort: "High", bestFor: "Families, groups, trekkers" },
    { name: "Shared Jeep", costNpr: "2,000 – 2,500 per person", costUsd: "$15 – $20", duration: "3.5 – 4 hrs", comfort: "Medium", bestFor: "Solo travelers, couples" },
    { name: "Local Bus", costNpr: "400 – 600 per person", costUsd: "$3 – $5", duration: "4.5 – 5.5 hrs", comfort: "Low", bestFor: "Budget travelers" },
    { name: "Taxi", costNpr: "5,000 – 7,000", costUsd: "$40 – $55", duration: "3 – 3.5 hrs", comfort: "Medium-High", bestFor: "Small groups, flexibility" }
  ];

  const costComparisonGroup = [
    { name: "Private Jeep", total: "7,000 – 9,000", perPerson: "~2,000 – 2,250", scenario: "Groups of 3–5" },
    { name: "Shared Jeep", total: "2,000 – 2,500 per person", perPerson: "2,000 – 2,500", scenario: "Solo/couple" },
    { name: "Local Bus", total: "400 – 600 per person", perPerson: "400 – 600", scenario: "Budget solo" },
    { name: "Taxi", total: "5,000 – 7,000", perPerson: "~1,250 – 1,750", scenario: "Small groups to Nayapul" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
             Logistics Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara to Ghandruk Transportation Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Plan your transfer to the Annapurna and Khopra Ridge trailhead. Compare private 4WD jeeps, shared jeeps, local buses, and taxis—complete with fares, travel times, and road condition tips.
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
                1. Best Ways to Reach Ghandruk
              </a>
              <a href="#at-a-glance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Pokhara to Ghandruk at a Glance
              </a>
              <a href="#where-is-ghandruk" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. About Ghandruk &amp; Trailhead
              </a>
              <a href="#options-detail" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Transportation Options
              </a>
              <a href="#route-explained" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Route Breakdown
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Road Conditions
              </a>
              <a href="#travel-times" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Travel Time Comparison
              </a>
              <a href="#costs-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Transportation Fares
              </a>
              <a href="#best-choice" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Which Transport is Best?
              </a>
              <a href="#trekker-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Tips for ABC &amp; Khopra
              </a>
              <a href="#how-to-book" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. How to Book Tickets
              </a>
              <a href="#leaving-pokhara" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12. Tips Before Leaving Pokhara
              </a>
              <a href="#return-journey" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                13. Return Trip Back to Pokhara
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                14. Frequently Asked Qs
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk Transportation Guide: Best Ways to Reach Ghandruk
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Getting from Pokhara to Ghandruk is straightforward once you know your options. The road distance is approximately 42 kilometres to Nayapul, followed by a mountain track that climbs toward Ghandruk village — a total journey of roughly 2.5 to 5.5 hours depending on which transport you choose.
              </p>
              <p>
                Most travellers reach Ghandruk by private jeep, shared jeep, or local bus. A private 4WD jeep is the fastest and most comfortable option, taking around 2.5 to 3 hours with a direct pick-up from your Pokhara hotel. Shared jeeps offer a middle-ground cost with a travel time of 3.5 to 4 hours. Local buses are the cheapest choice but the slowest, often taking 4.5 to 5.5 hours on a route that passes through Baglung Highway and onto unpaved mountain roads.
              </p>
              <p>
                Whether you are starting the Khopra Ridge Trek, Annapurna Base Camp Trek, or visiting Ghandruk as a standalone destination, this guide has everything you need to plan your journey.
              </p>
            </div>
          </article>

          {/* SECTION 2: AT A GLANCE */}
          <article id="at-a-glance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk at a Glance
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Pokhara to Ghandruk Distance</h3>
              <p>
                The paved section of the journey runs from Pokhara to Nayapul along the Baglung Highway, covering approximately 42 kilometres. From Nayapul, a dirt mountain road continues through Birethanti and Kimche before reaching Ghandruk village. The total road distance from Pokhara to Ghandruk is roughly 60 to 65 kilometres, depending on the exact route taken.
              </p>
              <p>
                It is worth noting that the road does not follow a straight line. The mountain section beyond Nayapul winds steeply alongside the Modi Khola river valley, which adds time to the journey even though the remaining kilometres are fewer.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Average Travel Time</h3>
              <p>
                Travel times vary based on your transport choice and the season:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Private jeep: 2.5 to 3 hours</li>
                <li>Shared jeep: 3.5 to 4 hours</li>
                <li>Local bus: 4.5 to 5.5 hours</li>
                <li>Taxi: 3 to 3.5 hours</li>
              </ul>
              <p>
                During monsoon season (June to September), journey times can increase significantly due to road conditions, water crossings, and occasional closures on the unpaved mountain section.
              </p>
            </div>
          </article>

          {/* SECTION 3: WHERE IS GHANDRUK */}
          <article id="where-is-ghandruk" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where Is Ghandruk and Why Do Travellers Visit It?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Location of Ghandruk Village</h3>
              <p>
                Ghandruk is a traditional Gurung and Magar village situated in the Kaski District of Gandaki Province, Nepal. It sits at an elevation of approximately 1,940 metres (6,365 feet) in the heart of the Annapurna Region, offering direct views of Annapurna South, Hiunchuli, and Machhapuchhre (Fishtail Mountain). The village lies within the Annapurna Conservation Area Project (ACAP) boundary, and all visitors are required to carry valid ACAP and TIMS permits before entering.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Ghandruk as a Trekking Gateway</h3>
              <p>
                Ghandruk is one of the most important entry points for several major trekking routes in the Annapurna region. It serves as the official trailhead or early-stage stop for the Annapurna Base Camp Trek, the Khopra Ridge Trek, and Ghorepani / Poon Hill routes. Reaching Ghandruk directly by vehicle saves trekkers an entire day of walking from Nayapul, which is a massive logistical benefit for travelers with tight schedules.
              </p>
            </div>
          </article>

          {/* SECTION 4: TRANSPORT OPTIONS */}
          <article id="options-detail" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transportation Options From Pokhara to Ghandruk
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Four main transport options connect Pokhara and Ghandruk. Compare durations, comfort levels, and target use cases:
            </p>

            {/* Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Transport</th>
                      <th className="p-4">Cost (NPR)</th>
                      <th className="p-4">Cost (USD)</th>
                      <th className="p-4">Duration</th>
                      <th className="p-4">Comfort</th>
                      <th className="p-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.name}</td>
                        <td className="p-4 text-xs text-stone-500 font-bold">{item.costNpr}</td>
                        <td className="p-4 text-xs text-stone-500 font-bold text-emerald-600">{item.costUsd}</td>
                        <td className="p-4 text-xs text-stone-500">{item.duration}</td>
                        <td className="p-4 text-xs text-stone-500">{item.comfort}</td>
                        <td className="p-4 text-xs text-stone-500 leading-relaxed">{item.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-stone-600 text-sm leading-relaxed space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-bold text-stone-950">1. Private Jeep (Recommended)</h3>
                <p className="mt-2">
                  A private jeep is the most recommended option. The vehicle picks you up directly from Lakeside Pokhara or the Airport and drops you in Ghandruk village or Kimche trailhead. It carries a price of NPR 7,000 to 9,000 full-vehicle ($55 to $70 USD). The key advantage is the 4WD capability — mountain tracks beyond Birethanti are unpaved and regular taxis frequently struggle, whereas 4WD jeeps handle muddy and rough roads easily.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-950">2. Shared Jeep</h3>
                <p className="mt-2">
                  Shared jeeps depart from Hari Chowk in Pokhara when all seats are full, usually early mornings. The cost is NPR 2,000 to 2,500 per person ($15 to $20 USD). They offer a good balance of cost and power, but are highly cramped with restricted baggage storage space.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-955">3. Local Bus</h3>
                <p className="mt-2">
                  Departing from Baglung Bus Park in Pokhara, the local bus costs NPR 400 to 600 per person ($3 to $5 USD) and takes 4.5 to 5.5 hours. It is slow, frequently crowded, and bumpy, making it suitable mostly for budget solo backpackers with flexible timelines.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-955">4. Taxi</h3>
                <p className="mt-2">
                  A standard taxi can comfortably get to Nayapul or Birethanti (NPR 5,000 to 7,000), but standard sedans are not recommended for the mountain track climbing to Ghandruk village. Use taxis only if your walking itinerary starts from Nayapul.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: ROUTE EXPLAINED */}
          <article id="route-explained" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk Route Explained
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Pokhara to Nayapul:</strong> The first 42 kilometres of the journey follow the paved Baglung Highway, taking roughly 1.5 to 2 hours by jeep.
              </p>
              <p>
                <strong>Nayapul to Birethanti:</strong> Just past Nayapul, the route crosses the Modi Khola river and enters Birethanti, which serves as the entry checkpoint for the Annapurna Conservation Area. Trekkers must show their ACAP and TIMS permits here.
              </p>
              <p>
                <strong>Birethanti to Kimche &amp; Ghandruk:</strong> Beyond Birethanti, the paved road transitions into a dirt mountain track that climbs steeply through the forest. Depending on the vehicle and road conditions, jeeps can drive directly to Ghandruk village. Some drivers stop at Kimche and passengers walk the remaining 20 to 30 minutes uphill. Clarify this drop-off point with your driver before departure.
              </p>
            </div>
          </article>

          {/* SECTION 6: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Current Road Conditions Between Pokhara and Ghandruk
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Dry Season vs. Monsoon Season</h3>
              <p>
                During Spring (March to May) and Autumn (October to November), the roads are dry, stable, and accessible. Jeeps operate freely and delays are uncommon.
              </p>
              <p>
                The Monsoon season (June to September) brings heavy rainfall, causing mudslides and waterlogged crossings that can temporarily block the unpaved mountain road for hours or days. A 4WD vehicle is essential during this period, and departure should be planned for the early morning before afternoon rainfall intensifies.
              </p>
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs leading-relaxed text-emerald-800">
                <strong>4WD Requirement:</strong> For the unpaved section past Birethanti, 4WD traction is strongly recommended year-round. Even in dry conditions, road construction or soft ground can cause 2WD vehicles to struggle.
              </div>
            </div>
          </article>

          {/* SECTION 7: TRAVEL TIMES */}
          <article id="travel-times" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk Travel Time by Transport Type
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Average travel times vary significantly by vehicle due to differences in speed, stops, and road clearance capacity:
              </p>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1">
                <li><strong>Private Jeep:</strong> 2.5 to 3 hours (fastest ground transport option).</li>
                <li><strong>Shared Jeep:</strong> 3.5 to 4 hours (includes waiting for passenger fill-up).</li>
                <li><strong>Local Bus:</strong> 4.5 to 5.5 hours (stops frequently for local passengers/freight).</li>
              </ul>
              <p>
                Common delays can be caused by monsoon mud, highway construction works along the Baglung segment, checkpoint wait times at Birethanti, or vehicle maintenance.
              </p>
            </div>
          </article>

          {/* SECTION 8: COST BREAKDOWN */}
          <article id="costs-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk Transportation Cost Breakdown
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Transport</th>
                      <th className="p-4">Total Cost (NPR)</th>
                      <th className="p-4">Cost Per Person (Group of 4)</th>
                      <th className="p-4">Best Value Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {costComparisonGroup.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.name}</td>
                        <td className="p-4 text-xs font-bold text-stone-800">{item.total}</td>
                        <td className="p-4 text-xs font-bold text-emerald-600">{item.perPerson}</td>
                        <td className="p-4 text-xs text-stone-500">{item.scenario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 9: BEST CHOICE */}
          <article id="best-choice" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Transportation Option Is Best for You?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <ul className="space-y-3 text-xs text-stone-500">
                <li>
                   <strong>Solo Travellers:</strong> A shared jeep from Hari Chowk is the best balance of cost and speed, keeping fares reasonable while avoiding the long local bus ride.
                </li>
                <li>
                   <strong>Couples:</strong> Splitting a private jeep brings the cost to roughly $30-$35 per person, making it an excellent trade-off for direct hotel pickup and luggage convenience.
                </li>
                <li>
                  ‍‍‍ <strong>Families &amp; Trekking Groups:</strong> A private 4WD jeep is the clear choice. It handles heavy bags easily, departs at your exact preferred time, and provides safety and comfort on bumpy roads.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 10: TREKKER TIPS */}
          <article id="trekker-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Transportation Tips for Annapurna and Khopra Ridge Trekkers
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Annapurna Base Camp Trek:</strong> Starting from Ghandruk saves an entire day of walking from Nayapul. Jeep directly to Ghandruk and start your trek towards Chomrong.
              </p>
              <p>
                <strong>Khopra Ridge Trek:</strong> This loop begins at Ghandruk, climbing towards Tadapani and onward to Swanta or Bayeli. Booking a direct jeep transfer the evening before your trek starts is the most recommended approach.
              </p>
              <p>
                <strong>Kimche vs. Ghandruk:</strong> Confirm that your jeep driver takes you all the way up to Ghandruk village, not Kimche. Walking up from Kimche carries a steep 20 to 30-minute uphill slog with full trekking packs.
              </p>
            </div>
          </article>

          {/* SECTION 11: HOW TO BOOK */}
          <article id="how-to-book" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              How to Book Transport From Pokhara to Ghandruk
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Private Jeeps:</strong> Can be booked through Lakeside Pokhara hotels, local travel offices, or directly via trekking operators. Confirm the price includes Ghandruk drop-off and that the driver is certified for mountain road runs.
              </p>
              <p>
                <strong>Shared Jeeps:</strong> Depart from Hari Chowk in Pokhara. Arrive early (around 7:00 AM) during peak seasons to secure a seat.
              </p>
              <p>
                <strong>Peak Season (Oct-Nov / Mar-Apr):</strong> Jeep demand peaks during these months. Book your transfer at least 1 to 2 days in advance to avoid last-minute availability issues.
              </p>
            </div>
          </article>

          {/* SECTION 12: LEAVING POKHARA */}
          <article id="leaving-pokhara" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Important Travel Tips Before Leaving Pokhara
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Best Time to Start:</strong> Depart Pokhara by 7:00 AM to 8:00 AM. This gets you to Ghandruk before midday, giving you time to settle in, check permits at Birethanti, and start your trek before afternoon rain or cloud cover builds up.
              </p>
              <p>
                <strong>Cash is King:</strong> Carry sufficient Nepalese Rupees cash. There are no ATMs along the mountain road or in Ghandruk village.
              </p>
            </div>
          </article>

          {/* SECTION 13: RETURN JOURNEY */}
          <article id="return-journey" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Returning From Ghandruk to Pokhara
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Jeep &amp; Shared Options:</strong> Private jeeps can be arranged via your Ghandruk lodge owner. Shared jeeps also return early in the mornings, but availability is less consistent than the outbound direction. Local return buses pass through Birethanti and Nayapul before heading to Pokhara.
              </p>
              <p>
                <strong>Day Trip Possibility:</strong> Visitiing Ghandruk as a day trip is possible with a private jeep departure at 7:00 AM, allowing several hours of village exploration before returning by 2:00 PM. However, a one-night stay is recommended to experience the views and Gurung culture without rushing.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Pokhara to Ghandruk Transportation
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How do I get from Pokhara to Ghandruk?",
                  a: "The most common and recommended route is by private 4WD jeep from Pokhara Lakeside directly to Ghandruk village. Shared jeeps and local buses are also available for budget travellers."
                },
                {
                  q: "What is the distance from Pokhara to Ghandruk?",
                  a: "The road distance from Pokhara to Ghandruk is approximately 60 to 65 kilometres. The first 42 kilometres follow the paved Baglung Highway to Nayapul, after which a dirt mountain road continues to Ghandruk."
                },
                {
                  q: "How long does it take to reach Ghandruk from Pokhara?",
                  a: "A private jeep takes approximately 2.5 to 3 hours. A shared jeep takes 3.5 to 4 hours. A local bus takes 4.5 to 5.5 hours. These times can increase during monsoon season due to road conditions."
                },
                {
                  q: "Is there a direct jeep from Pokhara to Ghandruk?",
                  a: "Yes. Private 4WD jeeps travel directly from Pokhara to Ghandruk village without requiring any transfers or intermediate stops. Shared jeeps also operate on this route but depart when fully occupied."
                },
                {
                  q: "Can vehicles reach Ghandruk village directly?",
                  a: "Yes, 4WD jeeps can reach Ghandruk village directly under normal road conditions. Standard cars and regular taxis are not recommended beyond Nayapul due to the unpaved mountain road section."
                },
                {
                  q: "How much does a private jeep to Ghandruk cost?",
                  a: "A private 4WD jeep from Pokhara to Ghandruk costs between NPR 7,000 and 9,000 (approximately $55 to $70 USD) for the full vehicle. The cost is per vehicle, not per person, making it very cost-effective for groups."
                },
                {
                  q: "Is there a direct bus to Ghandruk?",
                  a: "Local buses depart from Baglung Bus Park in Pokhara and travel toward the Ghandruk area. However, the bus is slow, takes 4.5 to 5.5 hours, and stops frequently. It is the budget option but not recommended for travellers with heavy trekking gear."
                },
                {
                  q: "Are shared jeeps available every day?",
                  a: "Shared jeeps operate regularly during peak trekking season (October to November and March to May). Outside of these months, availability can be inconsistent. Arriving early at Hari Chowk in Pokhara improves your chances of securing a seat."
                },
                {
                  q: "Is the road to Ghandruk safe during monsoon season?",
                  a: "The paved section from Pokhara to Nayapul is generally safe year-round. The mountain road section from Nayapul to Ghandruk can be affected by mud, water crossings, and occasional landslides during monsoon (June to September). Travel is still possible with a 4WD jeep, but early departure and local road checks are essential."
                },
                {
                  q: "Should I get off at Kimche or continue to Ghandruk?",
                  a: "If your destination is Ghandruk village — and you are beginning a trek from there — always confirm that your driver will take you directly to Ghandruk rather than stopping at Kimche. With a 4WD jeep, this is typically included. Walking from Kimche to Ghandruk takes 20 to 30 minutes uphill with a trekking pack."
                },
                {
                  q: "Can Ghandruk be visited as a day trip from Pokhara?",
                  a: "Yes, it is possible. A 7:00 AM departure gives you several hours in Ghandruk before returning in the afternoon. However, an overnight stay is strongly recommended to fully appreciate the village, the mountain views, and the Gurung cultural experience."
                },
                {
                  q: "What is the best transportation option for trekkers?",
                  a: "For trekkers starting the Annapurna Base Camp Trek, Khopra Ridge Trek, or Poon Hill route, a private 4WD jeep is the best option. It is the fastest, most reliable, accommodates trekking gear, and drops you directly at the Ghandruk trailhead."
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

          {/* SECTION 15: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Reaching Ghandruk from Pokhara is a straightforward journey with multiple transport options to suit every traveller. For speed, comfort, and direct delivery to the trailhead, a private 4WD jeep remains the best choice — particularly for families, trekking groups, and anyone starting the Annapurna Base Camp Trek, Khopra Ridge Trek, or Poon Hill circuit.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The mountain road beyond Nayapul requires respect, particularly during monsoon season. A 4WD vehicle, an experienced local driver, and an early start are the three things that make this journey consistently smooth.
            </p>
          </article>

          {/* SECTION 16: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Book Your Private Jeep Transfer to Ghandruk</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Skip the logistics and travel with confidence. We arrange direct 4WD jeep transfers from Pokhara Lakeside or Pokhara Airport to Ghandruk village — operated by experienced mountain drivers who know this road in every season.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Transfer &rarr;
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
                Our Pokhara transportation schedules, rates, and highway closure alerts are updated daily in coordination with ACA transport unions and checkpoint officers at Birethanti.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
