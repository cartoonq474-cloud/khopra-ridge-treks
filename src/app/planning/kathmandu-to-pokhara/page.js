import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/kathmandu-to-pokhara",
  },
  title: "Kathmandu to Pokhara Transport Guide: Best Travel Options, Costs & Travel Time",
  description: "Compare all ways to travel from Kathmandu to Pokhara — flight, tourist bus, private car, shared jeep, and taxi. Get real costs, travel times, road condition updates, and expert recommendations based on your travel style.",
};

export default function Page() {
  const comparisonData = [
    {
      option: "Domestic Flight",
      cost: "$100–$125 USD / person",
      time: "25–30 minutes",
      comfort: "High",
      bestFor: "Time-sensitive travelers, luxury preference"
    },
    {
      option: "Tourist Bus",
      cost: "$12–$25 USD / seat",
      time: "6–9 hours",
      comfort: "Moderate",
      bestFor: "Budget travelers, backpackers"
    },
    {
      option: "Private Car / Jeep",
      cost: "$120–$160 USD total",
      time: "5–7 hours",
      comfort: "High",
      bestFor: "Families, groups, flexible travelers"
    },
    {
      option: "Shared Jeep",
      cost: "$15–$30 USD / seat",
      time: "5–7 hours",
      comfort: "Moderate",
      bestFor: "Budget travelers wanting faster road option"
    },
    {
      option: "Taxi",
      cost: "$130–$180 USD total",
      time: "5–7 hours",
      comfort: "High",
      bestFor: "Solo travelers, last-minute bookings"
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
            <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Kathmandu to Pokhara</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Nepal Transit &amp; Travel Logistics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Kathmandu to Pokhara Transport Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Best Travel Options, Costs &amp; Travel Time. Compare domestic flights, tourist buses, private cars, shared jeeps, and taxis with live road condition updates.
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance &amp; Route Overview
              </a>
              <a href="#comparison-table" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Comparison
              </a>
              <a href="#flight" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Domestic Flights
              </a>
              <a href="#tourist-bus" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Tourist Buses
              </a>
              <a href="#private-car" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private Car &amp; Jeep
              </a>
              <a href="#shared-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shared Jeeps
              </a>
              <a href="#taxi" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Taxi Transfers
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Highway Road Conditions
              </a>
              <a href="#recommendation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Which Option Is Best?
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Travel Tips
              </a>
              <a href="#local-help" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Transport Assistance
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
                Inquire Travel Booking
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara Transport Guide: Travel Options, Costs &amp; Time
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Traveling from Kathmandu to Pokhara is one of the most common journeys in Nepal — and one of the most important decisions you will make before starting your trek. Whether you are heading to the Annapurna Region for the first time or returning for another adventure, choosing the right transport sets the tone for your entire trip.
              </p>
              <p>
                The good news is that you have more options than most travelers realize. You can fly and be there in under thirty minutes. You can take a comfortable tourist bus for a fraction of the flight cost. You can hire a private car and stop wherever you like along the way. Or you can share a jeep with other travelers to find a middle ground between budget and speed.
              </p>
              <p>
                This guide covers every transport option between Kathmandu and Pokhara in practical detail — including real costs, travel times, road conditions, and honest recommendations. Our licensed local team operates out of Pokhara (Nepal Tourism Operator License #8928-091), and our guides make this journey regularly.
              </p>
            </div>
          </article>

          {/* SECTION: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara Distance, Route, and Travel Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>How Far Is Pokhara From Kathmandu?</strong> The road distance between Kathmandu and Pokhara is approximately 200 kilometers. The route passes through hilly and mountainous terrain with winding roads, narrow sections, and ongoing expansion work. Overland travel takes anywhere from 5 to 9 hours depending on road conditions, traffic, and vehicle type.
              </p>
              <p>
                <strong>Route via Prithvi Highway:</strong> The primary road connection is the Prithvi Highway (Highway 16), following the Trishuli and Marsyangdi river valleys. Key towns along the way include Naubise, Mugling (the midpoint lunch stop), and Damauli.
              </p>
              <p>
                <strong>Average Travel Times by Transport Type:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Domestic Flight:</strong> 25 to 30 minutes in the air (allow extra for airport transfer).</li>
                <li><strong>Tourist Bus:</strong> 6 to 9 hours depending on highway construction and stops.</li>
                <li><strong>Private Car or Jeep:</strong> 5 to 7 hours with door-to-door flexibility.</li>
                <li><strong>Shared Jeep / Taxi:</strong> 5 to 7 hours depending on passenger counts and stops.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COMPARISON TABLE */}
          <article id="comparison-table" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Comparison of All Kathmandu to Pokhara Travel Options
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Transport Option</th>
                    <th className="px-6 py-4">Average Cost</th>
                    <th className="px-6 py-4">Travel Time</th>
                    <th className="px-6 py-4">Comfort Level</th>
                    <th className="px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.option}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.cost}</td>
                      <td className="px-6 py-4 font-semibold text-stone-700">{row.time}</td>
                      <td className="px-6 py-4 text-stone-600">{row.comfort}</td>
                      <td className="px-6 py-4 text-stone-500">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: FLIGHT */}
          <article id="flight" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara by Flight (Fastest Option)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Flight Duration and Ticket Price:</strong> The flight takes approximately 25 to 30 minutes. Ticket prices typically range from <strong>$100 to $125 USD per person one way</strong>. During peak trekking season (October–November and March–April), seats fill rapidly, so booking at least a week in advance is advisable.
              </p>
              <p>
                <strong>Airlines Operating This Route:</strong> Buddha Air (established carrier with frequent departures), Yeti Airlines (reliable option), and Shree Airlines.
              </p>
              <p>
                <strong>Airport Tips &amp; Window Seats:</strong> Departures leave from Tribhuvan International Airport (domestic terminal) in Kathmandu and arrive at Pokhara International Airport.
              </p>
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-900 font-medium text-xs leading-relaxed">
                <strong>Pro Scenic Tip:</strong> When flying from Kathmandu to Pokhara, request a seat on the <strong>right side of the aircraft</strong> for incredible views of the Ganesh Himal, Manaslu, and Annapurna ranges on a clear day!
              </div>
              <p className="text-xs text-stone-500 italic">
                Note on Weather: Early morning flights can occasionally be delayed by cloud cover or fog. Build a buffer day into your itinerary if starting your trek immediately after arrival.
              </p>
            </div>
          </article>

          {/* SECTION: TOURIST BUS */}
          <article id="tourist-bus" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara by Tourist Bus (Best Budget Option)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Schedule and Departure Points:</strong> Tourist buses depart daily between <strong>7:00 AM and 7:30 AM</strong> from Sorhakhutte / Thamel in Kathmandu. Arriving by 3:00 PM to 4:00 PM gives you time to settle into Lakeside Pokhara before evening.
              </p>
              <p>
                <strong>Ticket Prices &amp; Bus Categories:</strong> Tickets range from <strong>$12 to $25 USD per seat</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Standard Tourist Bus ($12–$15):</strong> Reclining seats, A/C, luggage compartment.</li>
                <li><strong>Luxury Tourist Bus ($16–$20):</strong> Extra legroom, cushioned seating.</li>
                <li><strong>VIP / Sofa Bus ($22–$25):</strong> Spacious 2-1 seating configuration with plush sofa seats. Recommended for long road comfort.</li>
              </ul>
              <p>
                All tourist buses include a 30 to 45-minute lunch stop along the Prithvi Highway near Mugling.
              </p>
            </div>
          </article>

          {/* SECTION: PRIVATE CAR */}
          <article id="private-car" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara by Private Car or Jeep (Most Comfortable Overland Option)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Private Car Cost and Duration:</strong> A private transfer costs <strong>$120 to $160 USD total per vehicle</strong> (not per person). For groups of 2 to 4 travelers, this provides door-to-door hotel pickup, customized departure timing, and a 5 to 7-hour journey with flexible scenic photo stops.
              </p>
              <p>
                Private transfers are ideal for families, groups with heavy trekking bags, or those wanting to avoid the rigid 7:00 AM bus departure schedule.
              </p>
            </div>
          </article>

          {/* SECTION: SHARED JEEP */}
          <article id="shared-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara by Shared Jeep
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Shared jeeps cost <strong>$15 to $30 USD per seat</strong> and depart when full from local bus stations or Gongabu. They offer a faster ride (5 to 7 hours) than large buses, but offer tighter seating and limited luggage space.
              </p>
            </div>
          </article>

          {/* SECTION: TAXI */}
          <article id="taxi" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Kathmandu to Pokhara by Taxi
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Hiring a highway taxi costs between <strong>$130 and $180 USD total</strong>. Taxis are ideal for last-minute private departures. Always confirm that fuel is included and agree on the total price before starting out.
              </p>
            </div>
          </article>

          {/* SECTION: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Current Road Conditions on Prithvi Highway
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Highway Construction Delays:</strong> Ongoing road widening work on the Prithvi Highway (especially between Naubise and Mugling) causes periodic traffic delays. Adding an hour buffer to your expected transit time is recommended.
              </p>
              <p>
                <strong>Monsoon Season Warnings (June to August):</strong> Heavy summer rainfall brings landslide risks along river valleys. If traveling during monsoon, flying is strongly recommended to avoid multi-hour road blockages.
              </p>
            </div>
          </article>

          {/* SECTION: RECOMMENDATION */}
          <article id="recommendation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Kathmandu to Pokhara Transport Option Is Best for You?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Budget Travelers:</strong> Standard or VIP Tourist Bus ($12–$25 USD).</li>
                <li><strong>Time-Sensitive / Luxury:</strong> Domestic Flight ($100–$125 USD).</li>
                <li><strong>Families &amp; Groups:</strong> Private SUV/Jeep Transfer ($120–$160 USD total).</li>
                <li><strong>Trek-Ready Visitors:</strong> Fly if starting your trek the next morning; take a private car or VIP bus if you have a rest day scheduled in Pokhara.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Travel Tips Before Leaving Kathmandu
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Book Early:</strong> Flights and peak-season buses (October–November, March–April) should be booked 3–7 days in advance.</li>
                <li><strong>Carry NPR Cash:</strong> Highway restaurants and roadside stalls do not accept credit cards.</li>
                <li><strong>Pack a Light Layer &amp; Power Bank:</strong> Morning bus departures can be chilly, and charging options on standard buses are limited.</li>
                <li><strong>Highway Safety:</strong> Choose reputable transport operators and avoid traveling by night bus on mountain roads.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: LOCAL HELP */}
          <article id="local-help" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Need Help Planning Transport and Trekking in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As a Pokhara-based licensed operator (Tourism Operator License #8928-091), our team arranges complete transport connections from Kathmandu to Pokhara — including flight tickets, private SUV transfers, and tourist bus bookings — as part of our guided trek packages to <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge</Link> and <Link href="/tours/khayer-lake-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khayer Lake</Link>.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Kathmandu to Pokhara Transport
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the cheapest way to travel from Kathmandu to Pokhara?",
                  a: "The cheapest option is the standard tourist bus, with ticket prices ranging from $12 to $25 USD per seat. Buses depart daily from Thamel in Kathmandu and include a lunch stop along the Prithvi Highway. Travel time is typically 6 to 9 hours."
                },
                {
                  q: "How long does it take to get from Kathmandu to Pokhara?",
                  a: "It depends on your transport. A domestic flight takes 25 to 30 minutes. Overland travel by tourist bus, private car, or shared jeep takes 5 to 9 hours depending on traffic, road conditions, and stops. During monsoon season, road travel can take longer due to construction delays and landslide clearance."
                },
                {
                  q: "Is flying from Kathmandu to Pokhara worth it?",
                  a: "For most travelers, yes — especially if your time is limited or your itinerary is tight. At $100 to $125 USD per person, it is significantly more expensive than the bus, but it saves a full day of travel and the physical fatigue that comes with a long mountain road journey."
                },
                {
                  q: "How much is bus fare from Kathmandu to Pokhara?",
                  a: "Standard tourist bus tickets cost between $12 and $25 USD per seat depending on the bus type. Standard buses are at the lower end of the range, while VIP sofa buses cost more and offer wider, more comfortable seating."
                },
                {
                  q: "Can I book tourist bus tickets online?",
                  a: "Some tourist bus operators offer online booking through their own websites. In practice, most travelers book through their hotel in Thamel or through a local travel agency in Kathmandu."
                },
                {
                  q: "Are there night buses from Kathmandu to Pokhara?",
                  a: "Night buses do operate, but we generally advise against night bus travel on mountain highways in Nepal due to reduced visibility and safety concerns. A daytime departure on an established tourist bus is the safer choice."
                },
                {
                  q: "Is the road from Kathmandu to Pokhara safe?",
                  a: "The Prithvi Highway is Nepal's most traveled highway and is used by millions of passengers annually. Choosing a reputable bus operator, avoiding night travel, and building schedule flexibility will significantly reduce any risk or stress."
                },
                {
                  q: "Can I hire a private car from Kathmandu to Pokhara?",
                  a: "Yes. Private car and jeep transfers cost between $120 and $160 USD for the vehicle. They offer door-to-door service, flexible departure timing, and the ability to stop wherever you choose along the route."
                },
                {
                  q: "Which is better, bus or flight from Kathmandu to Pokhara?",
                  a: "It depends on your priorities. The flight wins on time and comfort (25 mins). The bus wins on cost ($12-$25 USD) and overland scenery. If short on time or traveling during monsoon, fly."
                },
                {
                  q: "Can I travel during monsoon season?",
                  a: "Yes, but overland travel carries a higher risk of delays due to landslides on the Prithvi Highway during June to August. Flying is recommended during peak monsoon months."
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
              Traveling from Kathmandu to Pokhara is one of the most well-worn journeys in Nepal, and you have excellent options across every budget and travel style. Fly if you want speed and mountain views. Take the tourist bus if budget is your priority. Choose a private car or jeep if traveling with family or a small group.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Planning a Trek After Reaching Pokhara?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local team can arrange your Kathmandu to Pokhara transport, coordinate your ACAP and TIMS permits, guide your trek from start to finish, and handle every logistical detail along the way. We are a licensed Nepal trekking operator with years of on-ground experience in the Annapurna Region.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Start Planning &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Ghandruk transit &amp; jeep guide
                  </Link>
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Find out how to reach the Kimche trailhead from Pokhara
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
                This transport &amp; highway advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
