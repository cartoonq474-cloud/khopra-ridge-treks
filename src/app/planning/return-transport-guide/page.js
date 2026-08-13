import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/return-transport-guide",
  },
  title: "Return Transport Guide | Khopra Ridge Trek Guide",
  description: "Finished the Khopra Ridge Trek and need to return to Pokhara? Compare every transport option — taxi, private jeep, shared jeep, and public bus — with real.",
};

export default function Page() {
  const comparisonData = [
    {
      transportType: "Private taxi",
      exitPoint: "Nayapul",
      cost: "USD 30–40 total",
      time: "~1.5 hours",
      comfort: "High",
      bestFor: "Speed and convenience"
    },
    {
      transportType: "Private car",
      exitPoint: "Nayapul",
      cost: "USD 35–45 total",
      time: "~1.5 hours",
      comfort: "High",
      bestFor: "Comfort, groups of 3–4"
    },
    {
      transportType: "Private 4WD jeep",
      exitPoint: "Tatopani",
      cost: "USD 140–170 total",
      time: "~4–5 hours",
      comfort: "Medium",
      bestFor: "Remote exit, reliability"
    },
    {
      transportType: "Shared jeep + bus",
      exitPoint: "Tatopani via Beni",
      cost: "~USD 7–9 per person",
      time: "~5–6 hours",
      comfort: "Low–Medium",
      bestFor: "Budget travelers"
    },
    {
      transportType: "Public bus",
      exitPoint: "Beni",
      cost: "~USD 3–4 per person",
      time: "~3 hours from Beni",
      comfort: "Low",
      bestFor: "Ultra-budget, flexible timelines"
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
            <span className="text-emerald-400">Return Transport Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Annapurna Exit &amp; Return Logistics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Return Transport Guide: How to Get Back to Pokhara
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            After finishing the Khopra Ridge Trek, compare taxis, private 4WD jeeps, shared jeeps, and public buses from Nayapul, Tatopani, and Beni back to Pokhara Lakeside.
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
              <a href="#why-planning-matters" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Planning Matters
              </a>
              <a href="#main-exit-points" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Main Trail Exit Points
              </a>
              <a href="#nayapul-return" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Returning from Nayapul
              </a>
              <a href="#tatopani-return" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Returning from Tatopani
              </a>
              <a href="#beni-return" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cheapest Route via Beni
              </a>
              <a href="#which-option-best" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Which Option Is Best?
              </a>
              <a href="#comparison-table" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Comparison Table
              </a>
              <a href="#seasonal-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Road Conditions
              </a>
              <a href="#safety-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Safety Tips
              </a>
              <a href="#why-prebooking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Pre-Booking Helps
              </a>
              <a href="#local-advice" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Expert Advice
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
                Inquire Return Transport
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Return Transport Guide: How to Get Back to Pokhara After Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers put weeks of thought into planning how to reach the Khopra Ridge Trail — permits, teahouse bookings, gear, and pacing schedules. Yet many of those same trekkers step off the trail at Nayapul or Tatopani with no clear plan for getting back to Pokhara Lakeside.
              </p>
              <p>
                That gap in planning creates real problems. Finding reliable transport from remote trail exit points is harder than it sounds, especially during peak trekking season. Prices spike, vehicles run scarce, and exhausted trekkers end up waiting in roadside villages with heavy backpacks and limited options.
              </p>
              <p>
                This guide changes that. We cover every return transport route available after finishing the Khopra Ridge Trek — from the quickest taxi transfer at Nayapul to the budget-friendly shared jeep and bus combination through Beni Bazaar. You will find real cost estimates, honest travel time expectations, road condition notes, and practical booking advice drawn from years of operating guided treks in this region.
              </p>
            </div>
          </article>

          {/* SECTION: WHY PLANNING MATTERS */}
          <article id="why-planning-matters" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Planning Your Return Transport Matters After Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                When your legs are tired and your pack feels heavier than ever, the last thing you want is a transport problem. Return logistics seem like a small detail until you are standing at a trail exit with no vehicle in sight and a flight out of Kathmandu in 36 hours.
              </p>
              <p>
                <strong>Why Exit Points Change Your Options:</strong> Nayapul sits directly on the main highway connecting the Annapurna foothills to Pokhara, which means taxis and private cars are easy to find. Tatopani, on the other hand, is a remote hot spring village deep in the Kali Gandaki gorge, reachable only by rough mountain roads where transport availability is genuinely limited.
              </p>
              <p>
                <strong>Common Problems Trekkers Face:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Limited vehicles at remote exits:</strong> In Tatopani, 4WD jeeps run scarce in peak seasons as drivers get booked out early.</li>
                <li><strong>Inflated last-minute pricing:</strong> Drivers at trail exits recognize tired trekkers and negotiate aggressively.</li>
                <li><strong>Weather disruptions:</strong> Mountain roads face landslide blockages, especially during summer monsoon months.</li>
                <li><strong>Afternoon transport cutoffs:</strong> Shared jeeps from mountain villages typically depart in the morning only.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: MAIN EXIT POINTS */}
          <article id="main-exit-points" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Your Main Exit Points Before Returning to Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>1. Main Exit at Nayapul:</strong> Most frequently used exit point. Located at the highway junction, offering paved road access directly to Pokhara. Taxis, private cars, and shared jeeps operate frequently.
              </p>
              <p>
                <strong>2. Tatopani Hot Spring Route:</strong> Famous hot spring village along the Kali Gandaki River. Beautiful descent, but transport is limited to rough dirt road transfers by 4WD jeep.
              </p>
              <p>
                <strong>3. Beni Bazaar Transit Hub:</strong> Regional town between Tatopani and Pokhara. Serves as a budget transfer hub where trekkers switch from mountain shared jeeps to public buses or shared taxis heading to Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION: NAYAPUL RETURN */}
          <article id="nayapul-return" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Returning to Pokhara from Nayapul (Fastest and Easiest Option)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Taxi and Private Car Options:</strong> Taxis and private cars are readily available at the highway junction in Nayapul. Most are comfortable saloon cars suitable for 2 to 4 passengers with trekking packs.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Travel Time:</strong> Approximately 1.5 hours on paved highway.</li>
                <li><strong>Taxi Cost:</strong> $30 to $40 USD total per vehicle.</li>
                <li><strong>Private Car Cost:</strong> $35 to $45 USD total.</li>
                <li><strong>Road Quality:</strong> Fully paved, good year-round condition.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: TATOPANI RETURN */}
          <article id="tatopani-return" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Returning to Pokhara from Tatopani (Remote Mountain Road Route)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Hiring a Private 4WD Jeep from Tatopani:</strong> Tatopani lies in the Kali Gandaki River gorge, roughly 100 km from Pokhara. The road requires a high-clearance 4WD jeep due to unpaved dirt switchbacks, gravel, and river crossings.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Travel Time:</strong> 4 to 5 hours depending on road status.</li>
                <li><strong>Private Jeep Cost:</strong> $140 to $170 USD total per vehicle.</li>
                <li><strong>Key Challenge:</strong> Mountain gravel sections that become slippery after rain; pre-booking is strongly recommended during peak seasons (Oct–Nov &amp; Mar–May).</li>
              </ul>
            </div>
          </article>

          {/* SECTION: BENI RETURN */}
          <article id="beni-return" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Cheapest Return Option Through Beni Bazaar
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For budget travelers, combining a shared jeep and public bus through Beni keeps return costs under $10 USD per person.
              </p>
              <p>
                <strong>Leg 1: Shared Jeep Tatopani &rarr; Beni:</strong> Departs 7:00 AM–9:00 AM. Takes 1.5 hours. Costs NPR 500–700 ($4–$5 USD) per person.
              </p>
              <p>
                <strong>Leg 2: Public Bus Beni &rarr; Pokhara:</strong> Departs throughout morning/afternoon. Takes 3 hours on paved highway. Costs NPR 400–600 ($3–$4 USD) per person.
              </p>
              <p>
                <strong>Total Cost:</strong> ~NPR 900 to 1,300 ($7 to $9 USD) total per person. Requires roughly 5 to 6 hours total transit.
              </p>
            </div>
          </article>

          {/* SECTION: WHICH OPTION IS BEST */}
          <article id="which-option-best" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Transport Option Is Best for You?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Best for Budget Travelers:</strong> Shared jeep Tatopani &rarr; Beni + public bus Beni &rarr; Pokhara ($7–$9 USD total).</li>
                <li><strong>Best for Comfort &amp; Speed:</strong> Private taxi/car from Nayapul ($30–$45 USD, 1.5 hrs) or private 4WD jeep from Tatopani ($140–$170 USD, 4–5 hrs).</li>
                <li><strong>Best for Solo Travelers &amp; Small Groups:</strong> Split a private jeep cost with fellow trekkers in Tatopani or join a shared taxi at Nayapul.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COMPARISON TABLE */}
          <article id="comparison-table" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transport Comparison Table for Returning to Pokhara
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Transport Type</th>
                    <th className="px-6 py-4">Exit Point</th>
                    <th className="px-6 py-4">Approx. Cost</th>
                    <th className="px-6 py-4">Travel Time</th>
                    <th className="px-6 py-4">Comfort</th>
                    <th className="px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.transportType}</td>
                      <td className="px-6 py-4 text-stone-700">{row.exitPoint}</td>
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

          {/* SECTION: SEASONAL CONDITIONS */}
          <article id="seasonal-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Road Conditions That Affect Return Transport
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Monsoon Season (June to September):</strong> Heavy rainfall causes landslide risks along the Kali Gandaki River valley. Road blockages can stretch a 4-hour drive to 8+ hours.
              </p>
              <p>
                <strong>Peak Seasons (October–November &amp; March–April):</strong> Clear skies and dry roads, but transport demand is at its absolute annual peak. Vehicles at Tatopani get booked out early morning.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY TIPS */}
          <article id="safety-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safety Tips Before Booking Transport Back to Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Agree on Total Fare First:</strong> Confirm whether the price is per person or total per vehicle before getting inside.</li>
                <li><strong>Consult Guesthouse Hosts:</strong> Ask local teahouse hosts for standard market rates before accepting quotes from unsolicited drivers.</li>
                <li><strong>Use 4WD Jeeps for Tatopani:</strong> Never take standard sedans or city taxis on the unpaved dirt stretches out of Tatopani.</li>
                <li><strong>Secure Luggage:</strong> Verify that backpacks on jeep roof racks are tied down securely with straps.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHY PREBOOKING */}
          <article id="why-prebooking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Pre-Booking Return Transport Is Often the Better Option
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Pre-arranging your return transfer through a licensed operator guarantees vehicle availability during peak October–November months, locks in fixed pricing, and eliminates roadside stress when stepping off the trail.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL ADVICE */}
          <article id="local-advice" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Local Expert Advice from Guides Who Regularly Operate This Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Our licensed guides regularly manage return logistics for Khopra Ridge Trek groups. We recommend locking in your exit point (Nayapul vs Tatopani) before departing Pokhara so your vehicle is already scheduled when you finish walking.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Returning to Pokhara
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How do I get back to Pokhara after completing the Khopra Ridge Trek?",
                  a: "From Nayapul, take a private taxi ($30–$40 USD total, 1.5 hrs). From Tatopani, take a private 4WD jeep ($140–$170 USD total, 4–5 hrs) or a shared jeep to Beni + public bus to Pokhara ($7–$9 USD per person)."
                },
                {
                  q: "How much does a taxi from Nayapul to Pokhara cost?",
                  a: "A taxi from Nayapul to Pokhara Lakeside costs approximately $30 to $40 USD for the full vehicle."
                },
                {
                  q: "Is there a direct jeep from Tatopani to Pokhara?",
                  a: "Yes. A private 4WD jeep can drive directly from Tatopani to Pokhara in 4 to 5 hours for $140 to $170 USD total."
                },
                {
                  q: "What is the cheapest way to return to Pokhara after trekking?",
                  a: "Taking a shared jeep from Tatopani to Beni ($4–$5 USD) and transferring to a local bus to Pokhara ($3–$4 USD) brings total cost under $10 USD per person."
                },
                {
                  q: "Can I take a public bus from Beni to Pokhara?",
                  a: "Yes. Public buses run regularly between Beni Bazaar and Pokhara throughout the day for NPR 400 to 600 ($3–$4 USD)."
                },
                {
                  q: "Is transport easy to find during peak trekking season?",
                  a: "Transport from Nayapul is easy year-round. Transport from Tatopani gets booked out quickly in October–November; pre-booking is advised."
                },
                {
                  q: "Should I pre-book transport before starting the trek?",
                  a: "Yes, especially if descending via Tatopani or trekking during peak autumn/spring seasons."
                },
                {
                  q: "Are roads from Tatopani to Pokhara safe during monsoon season?",
                  a: "Monsoon rains cause landslide risks along Kali Gandaki gorge. Allow extra buffer time and use experienced 4WD jeep drivers."
                },
                {
                  q: "Which return route is best for solo travelers?",
                  a: "Solo travelers exiting at Nayapul can share taxis. Solo travelers at Tatopani can take the shared jeep + bus route via Beni or split a private jeep with fellow hikers."
                },
                {
                  q: "Can local trekking agencies arrange return transportation?",
                  a: "Yes. Licensed local operators like EMD Treks arrange return transfers as part of guided trek packages or standalone services."
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
              Your return journey to Pokhara Lakeside deserves the same planning as the trek itself. Nayapul exits are fast and simple by taxi ($30–$40 USD), Tatopani exits are best handled by pre-booked 4WD jeep ($140–$170 USD), and budget travelers can combine shared jeeps and buses via Beni ($7–$9 USD). Decide your exit point before you start walking for a smooth finish!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Finish Your Trek Without Transport Stress?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Book your Khopra Ridge Trek with us and let our local team handle every logistical detail — ACAP and TIMS permits, teahouse coordination, licensed guides, and guaranteed return transfers to Pokhara waiting at your trailhead exit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Guided Trek Packages &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare the Pokhara to Kimche jeep trailhead transport
                  </Link>
                  <Link href="/planning/pokhara-to-syauli-bazaar" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Syauli Bazaar transport guide
                  </Link>
                  <Link href="/planning/jeep-vs-bus-for-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare local jeep vs local bus options on mountain roads
                  </Link>
                  <Link href="/planning/acap-permit-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check complete ACAP &amp; TIMS permit requirements
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
                This return transport advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
