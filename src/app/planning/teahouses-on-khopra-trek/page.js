import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/teahouses-on-khopra-trek",
  },
  title: "Teahouses on the Khopra Ridge Trek: Complete Lodge Guide for Every Overnight Stop",
  description: "Planning the Khopra Ridge Trek? Discover every teahouse, lodge, room type, food options, pricing, bathrooms, WiFi, charging facilities, and accommodation expectations for every overnight stop on the route.",
};

export default function Page() {
  const systemComparison = [
    {
      feature: "Location",
      commercial: "Ghandruk, Tadapani, Ghorepani",
      community: "Bayeli Kharka, Chhistibung, Khopra Danda, Swanta"
    },
    {
      feature: "Room cost",
      commercial: "$8–$15 USD/night",
      community: "$5–$8 USD/night"
    },
    {
      feature: "Bathroom",
      commercial: "Attached or corridor (western)",
      community: "Shared squat toilet (separate annex)"
    },
    {
      feature: "Shower",
      commercial: "Hot gas or solar shower",
      community: "Bucket shower or hot water bottle"
    },
    {
      feature: "Electricity",
      commercial: "Stable, room sockets available",
      community: "Dining hall only, solar-dependent"
    },
    {
      feature: "WiFi",
      commercial: "Available (quality varies)",
      community: "Unavailable or very weak"
    },
    {
      feature: "Food variety",
      commercial: "Good (pasta, pizza, bakery)",
      community: "Basic but sufficient (dal bhat, soup)"
    },
    {
      feature: "Crowd level",
      commercial: "Busy in peak seasons",
      community: "Quieter, fewer trekkers"
    }
  ];

  const comfortByElevation = [
    { stop: "Ghandruk", elevation: "~1,940m", comfort: "High" },
    { stop: "Tadapani", elevation: "~2,630m", comfort: "High" },
    { stop: "Bayeli Kharka", elevation: "~2,960m", comfort: "Medium" },
    { stop: "Chhistibung", elevation: "~3,020m", comfort: "Basic" },
    { stop: "Khopra Danda", elevation: "~3,660m", comfort: "Very Basic" },
    { stop: "Swanta", elevation: "~2,200m", comfort: "Medium" },
    { stop: "Ghorepani", elevation: "~2,860m", comfort: "High" }
  ];

  const roomPrices = [
    { village: "Ghandruk", price: "$10–$15 USD", type: "Commercial teahouse" },
    { village: "Tadapani", price: "$8–$12 USD", type: "Commercial teahouse" },
    { village: "Bayeli Kharka", price: "$5–$8 USD", type: "Community lodge" },
    { village: "Chhistibung", price: "$5–$8 USD", type: "Community lodge" },
    { village: "Khopra Danda", price: "$5–$8 USD", type: "Community lodge" },
    { village: "Swanta", price: "$5–$8 USD", type: "Community guesthouse" },
    { village: "Ghorepani", price: "$10–$15 USD", type: "Commercial teahouse" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Teahouses Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Complete Accommodation Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Teahouses on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover every teahouse, lodge, room type, food option, price, bathroom facility, and accommodation expectation for every overnight stop on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
                Teahouse Overview
              </a>
              <a href="#commercial-vs-community" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Commercial vs Community Lodges
              </a>
              <a href="#village-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Village-by-Village Teahouses
              </a>
              <a href="#altitude-shift" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Comfort vs Altitude
              </a>
              <a href="#room-standards" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Room &amp; Bedding Standards
              </a>
              <a href="#food-dining" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Dining Halls
              </a>
              <a href="#bathrooms-showers" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Toilets &amp; Hot Showers
              </a>
              <a href="#tech-connectivity" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Power, WiFi &amp; Cell Signal
              </a>
              <a href="#pricing-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Prices
              </a>
              <a href="#advance-booking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Do You Need to Book Ahead?
              </a>
              <a href="#packing-list" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse Packing List
              </a>
              <a href="#route-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra vs EBC &amp; Annapurna
              </a>
              <a href="#local-management" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Lodge Management
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
                Inquire Lodge Bookings
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION & OVERVIEW */}
          <article id="overview" className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Teahouses on the Khopra Ridge Trek: Complete Accommodation Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                One of the most practical questions trekkers ask before heading into the Annapurna Conservation Area is simple: where exactly will I sleep?
              </p>
              <p>
                The teahouses on the Khopra Ridge Trek range from well-developed tourist lodges with attached bathrooms and fiber WiFi to remote community-owned mountain shelters with shared bucket showers and no mobile signal. Both types exist on the same route — sometimes just a half-day&apos;s walk apart. Understanding that transition before you leave is what separates a comfortable, well-prepared trek from an unnecessarily difficult one.
              </p>
              <p>
                This guide maps out every overnight stop on the route, explains what facilities to expect at each one, and gives you a realistic picture of how comfort levels shift as you gain altitude. Whether you are planning to trek independently or working with a local operator, the information here will help you pack correctly, budget accurately, and set the right expectations before you step onto the trail.
              </p>
            </div>
          </article>

          {/* SECTION: COMMERCIAL VS COMMUNITY */}
          <article id="commercial-vs-community" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Commercial Teahouses vs Community-Owned Mountain Lodges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge Trek features two distinct lodging models:
              </p>
              <p>
                <strong>1. Commercial Teahouses:</strong> Located in Ghandruk, Tadapani, and Ghorepani. Offer attached/western toilets, hot gas/solar showers, room electricity sockets, fiber/fast Wi-Fi, diverse menus (pasta, pizza, bakery), and cost $8–$15 USD/night.
              </p>
              <p>
                <strong>2. Community-Managed Lodges:</strong> Located in Bayeli Kharka, Chhistibung, Khopra Danda, and Swanta. Offer shared squat toilets in annexes, bucket showers or hot water bottles, solar dining hall charging only, no Wi-Fi, simple hearty menus (Dal Bhat, noodle soups), and cost $5–$8 USD/night with lodge dining requirements. Profits directly fund Magar village schools, health posts, and wildlife conservation.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Feature</th>
                      <th className="px-6 py-4">Commercial Teahouses</th>
                      <th className="px-6 py-4">Community Lodges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {systemComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.feature}</td>
                        <td className="px-6 py-4 text-stone-700">{row.commercial}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-700">{row.community}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: VILLAGE-BY-VILLAGE GUIDE */}
          <article id="village-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Village-by-Village Teahouse Guide for Every Overnight Stop
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Ghandruk (~1,940m) — Comfort: High</h3>
                <p>
                  Major Gurung village with multiple commercial lodges. Attached bathrooms, hot gas showers, fiber Wi-Fi, reliable electricity, broad menus (pasta, pizza, momos).
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Tadapani (~2,630m) — Comfort: High</h3>
                <p>
                  Rhododendron forest junction. Comfortable lodges, hot solar/gas showers (200–300 NPR fee), Wi-Fi available. Busy in peak season.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Bayeli Kharka (~2,960m) — Comfort: Medium</h3>
                <p>
                  Quiet community settlement. Simple twin rooms, shared squat toilets, bucket showers depending on water supply, solar dining hall charging.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Chhistibung (~3,020m) — Comfort: Basic</h3>
                <p>
                  Remote alpine stop. Simple wooden twin rooms, shared squat toilets, solar dining hall charging, no Wi-Fi. Night temperatures drop near freezing.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3 border-l-4 border-l-emerald-600">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Khopra Danda (~3,660m) — Comfort: Very Basic</h3>
                <p>
                  Highest overnight stop on the trail, base for Khayer Lake. Very basic wooden rooms, shared squat toilets, solar power in dining hall, hot water bottles for bed warmth. Unobstructed Dhaulagiri sunrise view.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Swanta Village (~2,200m) — Comfort: Medium</h3>
                <p>
                  Peaceful Magar village on descent. Clean twin rooms, shared/attached bathrooms, homestay-like hospitality, local yak cheese.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">Ghorepani (~2,860m) — Comfort: High</h3>
                <p>
                  Poon Hill junction village. Dozens of commercial lodges, attached bathrooms, electric hot showers, fast Wi-Fi, broad menus. Highly crowded in October/November.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: ALTITUDE SHIFT */}
          <article id="altitude-shift" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Accommodation Comfort Changes as You Gain Altitude
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Overnight Stop</th>
                      <th className="px-6 py-4">Elevation</th>
                      <th className="px-6 py-4">Comfort Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {comfortByElevation.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.stop}</td>
                        <td className="px-6 py-4 text-stone-600">{row.elevation}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.comfort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: ROOM STANDARDS */}
          <article id="room-standards" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Room Standards and Sleeping Conditions in Khopra Ridge Lodges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Rooms feature two twin beds with foam mattresses, pillows, and woolen blankets. Unheated timber walls allow cold air drafts. <strong>Trekking Tip:</strong> Place your -5°C sleeping bag inside the teahouse bed, then layer the provided blanket on top.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD & DINING */}
          <article id="food-dining" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Dining Experience in Khopra Ridge Teahouses
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Menus feature Dal bhat (unlimited refills), fried noodles, garlic soup (helps acclimatization), Tibetan bread, pancakes, and tea. The dining hall wood stove is the social center. Order dinner upon arrival to avoid waiting.
              </p>
            </div>
          </article>

          {/* SECTION: BATHROOMS & SHOWERS */}
          <article id="bathrooms-showers" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Toilets, Bathrooms, and Shower Facilities
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Lower villages offer sit-down flush toilets &amp; gas/solar hot showers (200–400 NPR fee). Remote lodges use shared squat toilets in annexes with bucket flushing. Bring toilet paper, hand sanitizer, and wet wipes.
              </p>
            </div>
          </article>

          {/* SECTION: TECH & CONNECTIVITY */}
          <article id="tech-connectivity" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Electricity, Charging, WiFi, and Mobile Network Availability
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Commercial teahouses offer room charging sockets and Wi-Fi. Community lodges use solar power in dining halls (100–200 NPR charging fee). NTC SIM cards have better coverage than Ncell; expect dead zones past Tadapani. Carry a high-capacity power bank.
              </p>
            </div>
          </article>

          {/* SECTION: PRICING & COSTS */}
          <article id="pricing-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation Prices on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Village</th>
                      <th className="px-6 py-4">Room Price (per night)</th>
                      <th className="px-6 py-4">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {roomPrices.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.village}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.price}</td>
                        <td className="px-6 py-4 text-stone-600">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: ADVANCE BOOKING */}
          <article id="advance-booking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Do You Need to Book Teahouses in Advance?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                In peak season (October–November and March–April), Ghorepani and Tadapani fill quickly. Pre-booking via a local operator ensures secured rooms. Remote community lodges are rarely full, but notifying them of arrival dates helps them prepare food supplies.
              </p>
            </div>
          </article>

          {/* SECTION: PACKING LIST */}
          <article id="packing-list" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What to Pack for Staying in Khopra Ridge Teahouses
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Sleeping Bag (-5°C minimum):</strong> Essential for high community lodges.</li>
                <li><strong>High-Capacity Power Bank:</strong> Bridge charging gaps.</li>
                <li><strong>Hygiene Supplies:</strong> Toilet paper, hand sanitizer, wet wipes.</li>
                <li><strong>Lodge Comfort:</strong> Earplugs, headlamp, flip flops, water purification tablets/SteriPen.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: ROUTE COMPARISON */}
          <article id="route-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Khopra Ridge Accommodation Is Different From Other Nepal Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Unlike Everest Base Camp (bakeries, electric heating) or Annapurna Circuit (road access), Khopra Ridge remote sections are foot-access only, offering authentic wilderness solitude and community ownership.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL MANAGEMENT */}
          <article id="local-management" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Our Experience Managing Accommodation Across the Khopra Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Our licensed local guides maintain direct relationships with community lodge managers across the circuit, pre-arranging full circuit bookings, confirming food supplies, and adapting swiftly to weather changes.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Teahouses on the Khopra Ridge Trek
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Are there teahouses on the entire Khopra Ridge Trek?",
                  a: "Yes. Confirmed teahouses operate at Ghandruk, Tadapani, Bayeli Kharka, Chhistibung, Khopra Danda, Swanta, and Ghorepani. Camping is not required."
                },
                {
                  q: "Are private rooms available on the Khopra Trek?",
                  a: "Yes, twin-bed private rooms are the standard format. Shared dorms are rare on this circuit."
                },
                {
                  q: "How much do teahouses cost on the Khopra Ridge Trek?",
                  a: "Rooms cost $5–$8 USD at community lodges and $10–$15 USD at commercial teahouses."
                },
                {
                  q: "Do Khopra Ridge lodges have hot showers?",
                  a: "Available in Ghandruk, Tadapani, and Ghorepani ($1.50–$3 USD). Limited/unavailable at remote higher lodges."
                },
                {
                  q: "Is WiFi available on the Khopra Ridge Trek?",
                  a: "Available in lower commercial villages; absent or very weak at remote high-altitude lodges."
                },
                {
                  q: "Can I charge my phone in Khopra Ridge lodges?",
                  a: "Yes. Commercial lodges have room sockets; remote lodges offer solar dining hall charging (100–200 NPR fee)."
                },
                {
                  q: "Are blankets provided in mountain lodges?",
                  a: "Yes, blankets are provided, but carrying a -5°C sleeping bag is recommended for higher nodes."
                },
                {
                  q: "Which lodge is the most basic on the route?",
                  a: "Khopra Danda Community Lodge (3,660m) is the most basic yet most memorable night."
                },
                {
                  q: "Do I need to book accommodation in advance?",
                  a: "Strongly recommended during peak October/November and March/April for Ghorepani, Tadapani, and Khopra Danda."
                },
                {
                  q: "Is Khopra Ridge accommodation suitable for beginners?",
                  a: "Yes, provided you carry a good sleeping bag and have realistic expectations about simple mountain amenities."
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
              The accommodation network on the Khopra Ridge Trek is a unique mix of developed commercial teahouses and remote community lodges. Understanding this transition ensures a well-prepared, enjoyable Himalayan journey!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Arrange Your Khopra Ridge Trek Accommodation?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Contact our local team to manage your complete accommodation network, match your itinerary to the right lodges, and ensure warm rooms and hot meals throughout your trek.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Book Your Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                  <Link href="/planning/community-lodges-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Learn more about community-owned eco lodges
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check complete Khopra Ridge trek costs
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    View complete trek packing checklist
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Guides</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is maintained by our licensed local trekking guides based in Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
