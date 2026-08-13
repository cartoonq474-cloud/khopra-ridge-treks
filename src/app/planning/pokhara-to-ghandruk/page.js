import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/pokhara-to-ghandruk",
  },
  title: "Pokhara to Ghandruk Transportation Guide | Khopra Ridge Trek",
  description: "Planning to travel from Pokhara to Ghandruk? Compare private jeep, shared jeep, local bus, and taxi options with real costs, route details, road conditions.",
};

export default function Page() {
  const glanceTable = [
    { type: "Private Jeep", cost: "NPR 7,000–10,000 (full vehicle)", time: "2.5–3.5 hours" },
    { type: "Shared Jeep", cost: "NPR 800–1,200 per seat", time: "3–4 hours" },
    { type: "Local Bus", cost: "NPR 400–600 per person", time: "4–5 hours" },
    { type: "Taxi", cost: "NPR 6,000–9,000 (one way)", time: "2.5–3.5 hours" },
    { type: "Private Vehicle Rental", cost: "NPR 8,000–12,000 (full day)", time: "3–4 hours" }
  ];

  const travelerMatrix = [
    { type: "Solo trekker on a budget", option: "Shared Jeep", reason: "Affordable, reasonably fast, available daily" },
    { type: "Couple", option: "Private Jeep (split cost)", reason: "Comfortable, flexible, not much more than shared" },
    { type: "Family with children", option: "Private Jeep", reason: "Most comfortable, direct, no waiting" },
    { type: "Trekking group (4–6 people)", option: "Private Jeep", reason: "Cost-effective when split" },
    { type: "Budget backpacker", option: "Local Bus", reason: "Cheapest option available" },
    { type: "Flexible schedule traveler", option: "Private Vehicle Rental", reason: "Full day flexibility" }
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
            <span className="text-emerald-400">Pokhara to Ghandruk</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Annapurna Trailhead Logistics (2026)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara to Ghandruk Transportation Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Jeep, Bus, Taxi &amp; Travel Costs. Compare private 4WD jeeps, shared jeeps, local buses, and taxis with updated route details and road condition tips.
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
              <a href="#at-a-glance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pokhara to Ghandruk at a Glance
              </a>
              <a href="#where-is-ghandruk" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where Is Ghandruk?
              </a>
              <a href="#all-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                All Transport Options
              </a>
              <a href="#private-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private Jeep (Best Choice)
              </a>
              <a href="#shared-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shared Jeep Option
              </a>
              <a href="#local-bus" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Bus Option
              </a>
              <a href="#taxi-rental" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Taxi &amp; Vehicle Rental
              </a>
              <a href="#route-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Breakdown
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Road Conditions &amp; Monsoon
              </a>
              <a href="#transport-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Comparison Matrix
              </a>
              <a href="#how-to-book" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Book Transport
              </a>
              <a href="#returning-to-pokhara" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Returning to Pokhara
              </a>
              <a href="#important-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Important Travel Tips
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
              Pokhara to Ghandruk Transportation Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Traveling from Pokhara to Ghandruk is straightforward once you understand your options. The journey covers roughly 45–55 kilometres by road and takes anywhere from 2.5 to 5 hours depending on which transport you choose and road conditions on the day. A private jeep is the fastest and most comfortable option, while a local bus is the cheapest. Shared jeeps offer a middle ground for budget-conscious travelers who don&apos;t want to wait for a bus.
              </p>
              <p>
                Ghandruk is one of the most important trailheads in the Annapurna region. Trekkers heading to the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>, the Annapurna Base Camp Trek, and several other popular routes all pass through or begin their journeys at Ghandruk Village. Getting your transport right from Pokhara is the first real logistics decision of your trek — and this guide covers everything you need to make it confidently.
              </p>
            </div>
          </article>

          {/* SECTION: AT A GLANCE */}
          <article id="at-a-glance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara to Ghandruk at a Glance
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Distance:</strong> The road distance from Pokhara to Ghandruk is approximately 45–55 kilometres. The route follows the Baglung Highway out of Pokhara before turning onto mountain roads toward Nayapul, Birethanti, Kimche, and finally Ghandruk Village.
              </p>
              <p>
                <strong>Average Travel Time:</strong> Expect a travel time of 2.5 to 5 hours depending on transport type and road conditions. Private jeeps complete the drive in 2.5 to 3.5 hours, whereas local buses take considerably longer.
              </p>
              
              {/* TABLE: Glance summary */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Transport Type</th>
                      <th className="px-6 py-4">Approximate Cost</th>
                      <th className="px-6 py-4">Travel Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {glanceTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.type}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.cost}</td>
                        <td className="px-6 py-4 font-semibold text-stone-700">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 italic">
                Note: Prices are approximate and may vary by season, fuel costs, and negotiation. Always confirm pricing before departure.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE IS GHANDRUK */}
          <article id="where-is-ghandruk" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Ghandruk and Why Do Travelers Go There
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Ghandruk Village Overview:</strong> Ghandruk is a large traditional Gurung village situated at approximately 1,940 metres above sea level in the Annapurna Conservation Area. It sits above the Modi Khola River valley and offers dramatic mountain views, including close-range sightlines toward Annapurna South, Hiunchuli, and Machhapuchhre.
              </p>
              <p>
                <strong>Trekking Gateway:</strong> Ghandruk is both a cultural destination in its own right and a critical junction for multiple trekking routes. Trekkers beginning the Khopra Ridge Trek move through Ghandruk early in their itinerary. Reaching Ghandruk efficiently from Pokhara directly affects how much energy you have for the actual trail.
              </p>
            </div>
          </article>

          {/* SECTION: ALL OPTIONS */}
          <article id="all-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              All Transport Options from Pokhara to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Private Jeep:</strong> Reliable 4WD vehicle, hired exclusively for your group, departing on your schedule.</li>
                <li><strong>Shared Jeep:</strong> Departs from Hari Chowk when full. Cheaper than private hire with reasonable speed.</li>
                <li><strong>Local Bus:</strong> Departs from Baglung Bus Park. Lowest ticket price, but slowest and most crowded.</li>
                <li><strong>Taxi:</strong> Highway taxis take you to Nayapul or Kimche, but standard saloon cars struggle on the final dirt climb.</li>
                <li><strong>Private Vehicle Rental:</strong> Full-day rental with driver for families or combined sightseeing.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRIVATE JEEP */}
          <article id="private-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Jeep from Pokhara to Ghandruk (Best Option for Most Travelers)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cost &amp; Duration:</strong> A private 4WD jeep costs approximately <strong>NPR 7,000 to NPR 10,000 for the whole vehicle</strong> ($55–$75 USD). Covers the route in <strong>2.5 to 3.5 hours</strong>.
              </p>
              <p>
                <strong>Why 4WD Jeeps Are Recommended:</strong> The road from Kimche onward to Ghandruk involves steep gradients and unpaved gravel tracks. A high-clearance 4WD jeep handles loose terrain and monsoon mud safely.
              </p>
              <p>
                <strong>Who Should Choose Private Jeep:</strong> Families, trekking groups of 3 to 6 splitting costs, travelers carrying heavy gear, and anyone on a fixed trekking schedule.
              </p>
            </div>
          </article>

          {/* SECTION: SHARED JEEP */}
          <article id="shared-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Shared Jeep from Pokhara to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cost &amp; Departure Point:</strong> Seats cost <strong>NPR 800 to NPR 1,200 per person</strong>. Depart from <strong>Hari Chowk in Pokhara</strong> between 6:00 AM and 9:00 AM once full.
              </p>
              <p>
                <strong>Pros &amp; Limitations:</strong> Great value for solo travelers, though waiting for passengers to fill seats can add 30 to 60 minutes before departure.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL BUS */}
          <article id="local-bus" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Local Bus from Pokhara to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cost &amp; Departure Point:</strong> Tickets cost <strong>NPR 400 to NPR 600 per person</strong>. Departs early morning from <strong>Baglung Bus Park in Pokhara</strong>.
              </p>
              <p>
                <strong>Experience:</strong> Takes <strong>4 to 5 hours</strong> due to frequent stops and slower speeds. Best suited for ultra-budget backpackers traveling light.
              </p>
            </div>
          </article>

          {/* SECTION: TAXI & RENTAL */}
          <article id="taxi-rental" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Taxi and Private Vehicle Options
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Taxis (NPR 6,000–9,000):</strong> Taxis from Lakeside provide quick transit, but standard saloon cars usually stop at Kimche due to steep dirt tracks above Birethanti.
              </p>
              <p>
                <strong>Private Vehicle Rental (NPR 8,000–12,000):</strong> Full-day vehicle hire with driver for families or combined sightseeing excursions.
              </p>
            </div>
          </article>

          {/* SECTION: ROUTE BREAKDOWN */}
          <article id="route-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Breakdown from Pokhara to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Pokhara &rarr; Nayapul (~42 km):</strong> Paved Baglung Highway drive taking 1 to 1.5 hours.</li>
                <li><strong>Nayapul &rarr; Birethanti (~2 km):</strong> ACAP permit checkpoint stop along the Modi Khola river.</li>
                <li><strong>Birethanti &rarr; Kimche (~1,640m):</strong> Steep, unpaved mountain track climb.</li>
                <li><strong>Kimche &rarr; Ghandruk (~1,940m):</strong> Final stretch covered by 4WD jeep in dry weather or a 1 to 1.5-hour stone staircase climb on foot.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Road Conditions and Seasonal Travel Advice
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring &amp; Autumn (Peak Season):</strong> Best road conditions, clear skies, low landslide risk. Advance jeep booking is recommended.
              </p>
              <p>
                <strong>Monsoon Season (June–September):</strong> Heavy rainfall causes landslides and road washouts. 4WD jeeps are essential, and build extra schedule buffer for potential delays.
              </p>
            </div>
          </article>

          {/* SECTION: TRANSPORT COMPARISON */}
          <article id="transport-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transport Comparison — Which Option Is Best for You
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Traveler Type</th>
                    <th className="px-6 py-4">Best Option</th>
                    <th className="px-6 py-4">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {travelerMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.type}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.option}</td>
                      <td className="px-6 py-4 text-stone-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: HOW TO BOOK */}
          <article id="how-to-book" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Book Transport from Pokhara to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Book through Pokhara hotel reception, local Lakeside agencies, or directly through licensed trekking operators. During peak months (October–November and March–April), reserve private jeeps 1 to 2 days in advance.
              </p>
              <p>
                <strong>Questions to Ask Before Booking:</strong> Confirm vehicle type (4WD jeep), exact drop-off point (Kimche vs Ghandruk), departure time, total price vs per-seat fare, and landslide backup plans.
              </p>
            </div>
          </article>

          {/* SECTION: RETURNING TO POKHARA */}
          <article id="returning-to-pokhara" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Returning from Ghandruk to Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Shared jeeps returning to Pokhara from Kimche/Ghandruk depart between 6:00 AM and 9:00 AM daily. Private jeep return trips can be pre-arranged with your driver or guesthouse. Day trips from Pokhara are possible by private jeep, though most visitors prefer staying overnight.
              </p>
            </div>
          </article>

          {/* SECTION: IMPORTANT TIPS */}
          <article id="important-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Important Travel Tips Before Leaving Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Start Early:</strong> Depart Pokhara by 7:00 AM to avoid afternoon rain and cloud cover.</li>
                <li><strong>Withdraw NPR Cash:</strong> No ATMs exist in Ghandruk or along the trail network.</li>
                <li><strong>Confirm Drop-off Point:</strong> Confirm whether your vehicle stops at Kimche or continues up to Ghandruk.</li>
                <li><strong>Prepare Rain Gear:</strong> Keep waterproof clothing accessible in your daypack.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Pokhara to Ghandruk Transportation
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How do I get from Pokhara to Ghandruk?",
                  a: "Options include private jeep (NPR 7,000–10,000, 2.5–3.5 hrs), shared jeep from Hari Chowk (NPR 800–1,200 per seat, 3–4 hrs), local bus from Baglung Bus Park (NPR 400–600, 4–5 hrs), or taxi."
                },
                {
                  q: "Is there a bus from Pokhara to Ghandruk?",
                  a: "Yes. Local buses run from Baglung Bus Park to Nayapul and Kimche in the early morning for NPR 400–600. You hike the final step from Kimche to Ghandruk."
                },
                {
                  q: "How much does a jeep cost from Pokhara to Ghandruk?",
                  a: "A private 4WD jeep costs NPR 7,000 to NPR 10,000 total. A shared jeep seat costs NPR 800 to NPR 1,200 per person."
                },
                {
                  q: "Can a jeep go directly to Ghandruk village?",
                  a: "In dry spring and autumn weather, 4WD jeeps can reach Ghandruk village. During monsoon, roads terminate at Kimche, requiring a 1 to 1.5-hour hike."
                },
                {
                  q: "Is shared jeep available daily from Pokhara to Ghandruk?",
                  a: "Yes. Shared jeeps depart daily from Hari Chowk in Pokhara during trekking season, leaving once full in the morning."
                },
                {
                  q: "Is the road from Pokhara to Ghandruk safe?",
                  a: "The road is safe during dry season in a 4WD jeep. Monsoon travel increases landslide risk on mountain sections."
                },
                {
                  q: "Can I hire a taxi to Ghandruk?",
                  a: "Standard saloon taxis only go as far as Nayapul or Kimche due to low ground clearance. 4WD vehicles are needed above Birethanti."
                },
                {
                  q: "Is private vehicle rental available in Pokhara?",
                  a: "Yes. Full-day rental with driver costs NPR 8,000 to NPR 12,000 for families or small groups."
                },
                {
                  q: "Can I visit Ghandruk as a day trip from Pokhara?",
                  a: "Yes. A private jeep can take you to Ghandruk in the morning and return late afternoon, though staying overnight offers much better mountain views."
                },
                {
                  q: "Do I need to book transport in advance?",
                  a: "Advance booking (1–2 days) for private jeeps is strongly recommended during peak October–November and March–April seasons."
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
              The journey from Pokhara to Ghandruk is manageable, well-served, and a practical first step into the Annapurna region. A private 4WD jeep offers the best combination of comfort, reliability, and time efficiency for groups, while solo trekkers will find shared jeeps from Hari Chowk an affordable and convenient alternative. Depart early, carry cash, and make sure your ACAP permit is ready!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]"></div>
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Need Reliable Transport from Pokhara to Ghandruk?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We arrange private 4WD jeep transfers for trekkers entering the Annapurna Conservation Area, operated under Nepal Tourism Operator License #8928-091. Our local team knows the road conditions, departure times, and exact drop-off points to get your trek started right.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Arrange Transfer &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare Pokhara to Kimche jeep transport options
                  </Link>
                  <Link href="/planning/pokhara-to-syauli-bazaar" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Syauli Bazaar transit guide
                  </Link>
                  <Link href="/planning/jeep-vs-bus-for-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare local jeep vs local bus options on mountain roads
                  </Link>
                  <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore the complete Ghandruk village guide
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
                This transport advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
