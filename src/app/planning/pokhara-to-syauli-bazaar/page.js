import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/pokhara-to-syauli-bazaar",
  },
  title: "Pokhara to Syauli Bazaar Transport Guide: Bus, Jeep, Taxi, Cost, Distance & Route",
  description: "Planning your journey from Pokhara to Syauli Bazaar? Compare all transport options — local bus, shared jeep, private transfer, and taxi — with real costs, travel times, road conditions, and trekking trailhead advice.",
};

export default function Page() {
  const comparisonData = [
    {
      transportType: "Local Bus",
      cost: "NPR 300–500 / $2–4 per person",
      time: "3–4 hours",
      comfort: "Basic",
      bestFor: "Solo budget travellers"
    },
    {
      transportType: "Shared Jeep",
      cost: "NPR 400–600 / $3–5 per person",
      time: "2.5–3.5 hours",
      comfort: "Moderate",
      bestFor: "Independent trekkers"
    },
    {
      transportType: "Taxi",
      cost: "NPR 5,000–8,000 / $35–60 total",
      time: "2–2.5 hours",
      comfort: "Good",
      bestFor: "Couples, flexible travellers"
    },
    {
      transportType: "Private Jeep",
      cost: "$90–110 USD total",
      time: "2–2.5 hours",
      comfort: "Best",
      bestFor: "Groups, guided trekkers, gear-heavy"
    }
  ];

  const quickRef = [
    { label: "Distance", val: "Approx. 42–46 km by road" },
    { label: "Average Travel Time", val: "2 to 4 hours depending on transport" },
    { label: "Cheapest Option", val: "Local bus (NPR 300–500 / ~$2–4 USD)" },
    { label: "Fastest Option", val: "Private jeep or taxi (2 to 2.5 hours)" },
    { label: "Best Option for Trekkers", val: "Private jeep transfer" },
    { label: "Route", val: "Via Nayapul and Birethanti" }
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
            <span className="text-emerald-400">Pokhara to Syauli Bazaar</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Lower Trailhead &amp; Transit Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara to Syauli Bazaar Transport Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Bus, Jeep, Taxi, Cost, Distance &amp; Route. Compare all transport options from Pokhara to Syauli Bazaar with real fare estimates and road condition updates.
          </p>
        </div>
      </section>

      {/* QUICK REFERENCE AT A GLANCE CARD */}
      <section className="mx-auto max-w-7xl px-6 -mt-10 relative z-20 w-full">
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {quickRef.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[11px] font-black uppercase text-stone-400 tracking-wider block">{item.label}</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug block">{item.val}</span>
            </div>
          ))}
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
              <a href="#where-is-syauli-bazaar" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where Is Syauli Bazaar?
              </a>
              <a href="#distance-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance &amp; Travel Time
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#private-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private Jeep Transfer
              </a>
              <a href="#local-bus" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Bus Option
              </a>
              <a href="#shared-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shared Jeep Service
              </a>
              <a href="#taxi-private-car" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Taxi &amp; Private Car
              </a>
              <a href="#cost-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Cost Comparison
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Road Conditions &amp; Monsoon
              </a>
              <a href="#after-reaching" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                After Reaching Syauli Bazaar
              </a>
              <a href="#traveler-types" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Option for You
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Travel Tips
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
                Inquire Transport Booking
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Syauli Bazaar Transport Guide (Bus, Jeep, Taxi &amp; Private Transfer)
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Syauli Bazaar sits quietly beside the Modi Khola river at roughly 1,220 metres, but for trekkers heading into the Annapurna foothills, it is anything but a quiet stop. It is one of the key trailhead access points for routes leading toward Ghandruk, Tadapani, and ultimately the Khopra Ridge Trek — a community-owned trekking circuit that remains one of the most rewarding off-the-beaten-path experiences in the entire Annapurna Conservation Area.
              </p>
              <p>
                Getting there from Pokhara is straightforward, but only if you know what to expect. The road is mountain terrain, services are limited once you leave the city, and your choice of transport directly affects how your first trekking day begins. This guide explains every option clearly — local bus, shared jeep, private jeep, and taxi — so you can plan your journey before you leave Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE IS SYAULI BAZAAR */}
          <article id="where-is-syauli-bazaar" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Syauli Bazaar and Why Do Trekkers Travel There?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Where Is Syauli Bazaar Located?</strong> Syauli Bazaar is a small settlement in Kaski District, Gandaki Province. It lies along the western bank of the Modi Khola river, downstream from Birethanti. At approximately 1,220 metres above sea level, it sits at a lower elevation than higher trailhead destinations, making it a direct road-accessible entry point along the Modi Khola corridor.
              </p>
              <p>
                <strong>Why Trekkers Use Syauli Bazaar as a Trailhead:</strong> Trekkers who start from Syauli Bazaar follow the Modi Khola valley northward, gaining elevation gradually through forested trails before ascending to Ghandruk (1,940m).
              </p>
              <p>
                Compared to starting from Kimche (reachable higher up by jeep), starting from Syauli Bazaar adds approximately 3 hours of stone staircase walking to your first day. This river-valley approach is favored by trekkers who want a full walking day or are building altitude acclimatization gradually.
              </p>
              <p>
                <strong>Connection to Khopra Ridge Trek:</strong> Syauli Bazaar is one of the lowest entry points into the Khopra Ridge circuit network. A typical itinerary moves from Syauli Bazaar up to Ghandruk, Tadapani, Bayeli Kharka, Chhistibung, and Khopra Ridge, with optional extensions to sacred Khayer Lake (4,500m).
              </p>
            </div>
          </article>

          {/* SECTION: DISTANCE & TIME */}
          <article id="distance-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Syauli Bazaar Distance and Travel Time
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Total Distance:</strong> The driving distance from central Pokhara to Syauli Bazaar is approximately <strong>42 to 46 kilometres</strong> by road.
              </p>
              <p>
                <strong>Average Travel Time by Vehicle:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Private Jeep or Taxi:</strong> 2 to 2.5 hours</li>
                <li><strong>Shared Jeep:</strong> 2.5 to 3.5 hours</li>
                <li><strong>Local Bus:</strong> 3 to 4 hours</li>
              </ul>
              <p>
                <strong>Factors Affecting Travel Time:</strong> Monsoon season rains (June–September) can make unpaved sections slippery, peak trekking season traffic near Nayapul (October–November and March–April) causes minor delays, and ongoing road widening can add 30 to 60 minutes.
              </p>
            </div>
          </article>

          {/* SECTION: ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Syauli Bazaar Route Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Route via Nayapul &amp; Birethanti:</strong> Vehicles leave Pokhara heading west along the Baglung Highway to Nayapul (~32 km), then follow the Modi Khola river past Birethanti (~2 km) to reach Syauli Bazaar.
              </p>
              <p>
                <strong>Checkpoints:</strong> The ACAP permit checkpoint is located near Birethanti. Ensure your ACAP permit and TIMS card are purchased in Pokhara beforehand.
              </p>
              <p>
                <strong>Current Road Conditions:</strong> Paved highway for most of the distance from Pokhara, transitioning to narrow gravel and dirt tracks near Syauli Bazaar. 4WD jeeps handle this final stretch smoothly.
              </p>
            </div>
          </article>

          {/* SECTION: PRIVATE JEEP */}
          <article id="private-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Jeep Transfer From Pokhara to Syauli Bazaar
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Private Jeep Cost:</strong> Costs between <strong>$90 and $110 USD total per vehicle</strong> (not per person). For groups of 3 to 4 trekkers splitting the cost, per-person rates are highly competitive.
              </p>
              <p>
                <strong>Duration &amp; Comfort:</strong> Covers the route in <strong>2 to 2.5 hours</strong>. Offers hotel pickup in Pokhara, flexible departure times, and full space for trekking packs.
              </p>
              <p>
                <strong>Who Should Choose Private Jeep:</strong> Groups of 2–6 trekkers, families, trekkers carrying full packs or camera equipment, and guided trek clients.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL BUS */}
          <article id="local-bus" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Local Bus From Pokhara to Syauli Bazaar
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Departure Point &amp; Fare:</strong> Buses depart from <strong>Pokhara Baglung Bus Park</strong> starting early morning (7:00 AM to 8:00 AM). Fare is approximately <strong>NPR 300 to 500 per person (~$2 to $4 USD)</strong>.
              </p>
              <p>
                <strong>Duration &amp; Experience:</strong> Takes <strong>3 to 4 hours</strong> due to frequent roadside passenger stops. Cheapest option for solo budget travelers, though seating is basic and luggage space is limited.
              </p>
            </div>
          </article>

          {/* SECTION: SHARED JEEP */}
          <article id="shared-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Shared Jeep Service to Syauli Bazaar
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Fare &amp; Schedule:</strong> Shared jeeps operate from Pokhara Baglung Bus Park and local jeep stands, costing <strong>NPR 400 to 600 per seat (~$3 to $5 USD)</strong>.
              </p>
              <p>
                <strong>Duration:</strong> Takes <strong>2.5 to 3.5 hours</strong>. Faster and more direct than local buses, making it the practical middle-ground choice for independent solo trekkers.
              </p>
            </div>
          </article>

          {/* SECTION: TAXI & PRIVATE CAR */}
          <article id="taxi-private-car" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Taxi and Private Car Options From Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Taxi Fare Estimate:</strong> Hiring a highway taxi costs <strong>NPR 5,000 to NPR 8,000 total (~$35 to $60 USD)</strong>. Confirm total fare before leaving Pokhara.
              </p>
              <p>
                Taxis provide 2 to 2.5 hour transit for couples or pairs who want private schedule flexibility without hiring a full 4WD vehicle.
              </p>
            </div>
          </article>

          {/* SECTION: COST COMPARISON */}
          <article id="cost-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transport Cost Comparison: Bus vs Jeep vs Taxi vs Private Transfer
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Transport Type</th>
                    <th className="px-6 py-4">Approx. Cost</th>
                    <th className="px-6 py-4">Travel Time</th>
                    <th className="px-6 py-4">Comfort Level</th>
                    <th className="px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.transportType}</td>
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

          {/* SECTION: ROAD CONDITIONS & MONSOON */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Road Conditions and Seasonal Travel Considerations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dry Season (Oct–Nov &amp; Mar–May):</strong> Reliable road conditions, minimal delays, predictable jeep schedules.
              </p>
              <p>
                <strong>Monsoon Season (June–September):</strong> Heavy rainfall causes slippery dirt roads and rockfall risks near riverbanks. Depart early morning and use 4WD private jeeps for maximum safety.
              </p>
            </div>
          </article>

          {/* SECTION: AFTER REACHING SYAULI BAZAAR */}
          <article id="after-reaching" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Happens After Reaching Syauli Bazaar?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Checkpoints &amp; Permits:</strong> Present ACAP and TIMS permits at Birethanti checkpoint.
              </p>
              <p>
                <strong>Hike to Ghandruk:</strong> Stone staircase climb from Syauli Bazaar (1,220m) up to Ghandruk (1,940m) takes approximately <strong>3 hours of sustained uphill walking</strong>. Pace yourself, carry cash, and adjust pack straps before stepping onto the trail.
              </p>
            </div>
          </article>

          {/* SECTION: BEST OPTION FOR YOU */}
          <article id="traveler-types" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Transport Option Is Best for Different Travelers?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Budget Solo Travelers:</strong> Local bus (NPR 300–500) or shared jeep (NPR 400–600).</li>
                <li><strong>Independent Solo Trekkers:</strong> Shared jeep from Baglung Bus Park for speed and savings.</li>
                <li><strong>Groups &amp; Families:</strong> Private jeep ($90–$110 USD total) for schedule control and luggage security.</li>
                <li><strong>Gear-Heavy Trekkers:</strong> Private jeep to keep backpacks and gear safe.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Travel Tips Before Leaving Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Withdraw NPR Cash in Pokhara:</strong> No ATMs exist past Pokhara along this route.</li>
                <li><strong>Leave Early Morning:</strong> Depart by 7:00 AM–8:00 AM to maximize daylight for your hike to Ghandruk.</li>
                <li><strong>Offline Maps &amp; SIM:</strong> Download offline maps (Maps.me) and use Ncell SIMs for rural valley reception.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Pokhara to Syauli Bazaar Transport
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How far is Syauli Bazaar from Pokhara?",
                  a: "Syauli Bazaar is approximately 42 to 46 kilometres from central Pokhara by road via Nayapul."
                },
                {
                  q: "Is there a direct bus from Pokhara to Syauli Bazaar?",
                  a: "Local buses run from Pokhara Baglung Bus Park toward Nayapul/Birethanti. Some local jeeps continue directly to Syauli Bazaar. Confirm destination with your driver before boarding."
                },
                {
                  q: "How much does a private jeep cost from Pokhara to Syauli Bazaar?",
                  a: "A private jeep costs between $90 and $110 USD total for the full vehicle."
                },
                {
                  q: "Can I hire a taxi from Pokhara to Syauli Bazaar?",
                  a: "Yes. Highway taxis cost between NPR 5,000 and NPR 8,000 ($35–$60 USD) total."
                },
                {
                  q: "Which transport option is cheapest?",
                  a: "The local bus is cheapest at NPR 300 to 500 per person ($2–$4 USD)."
                },
                {
                  q: "Which option is fastest?",
                  a: "Private jeep and taxi are fastest, taking 2 to 2.5 hours."
                },
                {
                  q: "Is the road safe during monsoon season?",
                  a: "Monsoon travel carries landslide risks near steep road cuts. Private 4WD jeeps and early morning departures are strongly recommended."
                },
                {
                  q: "Can I begin trekking directly from Syauli Bazaar?",
                  a: "Yes. Syauli Bazaar is a functional trailhead. The stone staircase climb to Ghandruk takes about 3 hours."
                },
                {
                  q: "Do I need trekking permits after arriving?",
                  a: "Yes. ACAP permits and TIMS cards are verified at the Birethanti checkpoint. Obtain permits in Pokhara beforehand."
                },
                {
                  q: "Should I book transport in advance?",
                  a: "Advance booking is recommended for private jeeps during peak seasons (Oct–Nov and Mar–Apr)."
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
              The journey from Pokhara to Syauli Bazaar is short by Nepal travel standards, but choosing the right transport sets the tone for your entire trek. Budget travelers will find the local bus or shared jeep adequate, while groups and guided trekkers benefit from private jeep transfers. Carry cash, depart early morning, and make sure your ACAP permit is ready!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Start Your Khopra Ridge Trek?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a licensed Nepal trekking operator (Nepal Tourism Operator License #8928-091) based in Pokhara. We handle private jeep transfers, ACAP permit &amp; TIMS registrations, community lodge bookings, and certified guide services.
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
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare the Pokhara to Kimche jeep trailhead transport
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the complete Pokhara to Ghandruk transit guide
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
                This transit &amp; trailhead advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
