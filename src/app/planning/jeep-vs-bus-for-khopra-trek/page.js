import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/jeep-vs-bus-for-khopra-trek",
  },
  title: "Jeep vs Bus for the Khopra Trek: Which Transport Option Should You Choose? (2026 Guide)",
  description: "Comparing jeep vs bus for the Khopra Trek? Read our local expert guide covering cost, travel time, road conditions, comfort, and which option is best for your travel style.",
};

export default function Page() {
  const comparisonData = [
    {
      metric: "Approximate Cost",
      privateJeep: "$100–$130 per vehicle",
      sharedJeep: "$20–$25 per seat",
      bus: "$4–$6 per seat"
    },
    {
      metric: "Travel Duration",
      privateJeep: "2.5–3 hours",
      sharedJeep: "2.5–3 hours",
      bus: "4.5–6 hours"
    },
    {
      metric: "Road Handling",
      privateJeep: "Excellent — high clearance 4WD",
      sharedJeep: "Excellent — same vehicle type",
      bus: "Poor — low clearance, limited traction"
    },
    {
      metric: "Comfort Level",
      privateJeep: "High — personal space, sealed windows",
      sharedJeep: "Good — shared but comfortable",
      bus: "Low — crowded, open windows"
    },
    {
      metric: "Dust Exposure",
      privateJeep: "Minimal",
      sharedJeep: "Minimal",
      bus: "High"
    },
    {
      metric: "Departure Flexibility",
      privateJeep: "Full flexibility",
      sharedJeep: "Waits for enough passengers",
      bus: "Fixed schedule, frequent stops"
    },
    {
      metric: "Best For",
      privateJeep: "Groups, comfort travelers",
      sharedJeep: "Most trekkers — best overall value",
      bus: "Budget backpackers only"
    },
    {
      metric: "Luggage Space",
      privateJeep: "Generous",
      sharedJeep: "Adequate",
      bus: "Limited and shared"
    },
    {
      metric: "Monsoon Suitability",
      privateJeep: "High",
      sharedJeep: "High",
      bus: "Low"
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
            <span className="text-emerald-400">Jeep vs Bus Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Annapurna Transit &amp; Transport Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Jeep vs Bus for the Khopra Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Which transport option should you choose? Compare travel time, real cost breakdowns, mountain road conditions, dust exposure, and comfort levels updated for 2026.
          </p>
        </div>
      </section>

      {/* QUICK ANSWER SUMMARY BOX */}
      <section className="mx-auto max-w-7xl px-6 -mt-10 relative z-20 w-full">
        <div className="bg-emerald-950 text-white border border-emerald-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
          <span className="text-xs font-black uppercase text-emerald-400 tracking-wider block">
            Quick Answer &amp; Expert Advice
          </span>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
            <strong>For most trekkers, a shared jeep from Pokhara offers the best balance of cost, comfort, and speed ($20–$25 USD/seat).</strong> A local public bus is significantly cheaper ($4–$6 USD) but adds hours to your journey, exposes you to fine road dust, and inflicts heavy physical fatigue before your first climb. A private jeep ($100–$130 total) is the most comfortable option and worth it for groups of 4 to 6.
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
              <a href="#where-trek-starts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where Does the Trek Start?
              </a>
              <a href="#transport-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Options Available
              </a>
              <a href="#full-comparison-table" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Full Comparison Table
              </a>
              <a href="#travel-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Travel Time Comparison
              </a>
              <a href="#cost-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Comparison &amp; Hidden Fees
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Road Conditions
              </a>
              <a href="#seasonal-factors" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Factors
              </a>
              <a href="#comfort-impact" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Comfort &amp; Physical Impact
              </a>
              <a href="#best-for-travelers" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Recommendations by Traveler Type
              </a>
              <a href="#our-recommendation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Our Final Recommendation
              </a>
              <a href="#arrange-jeep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Arranging Jeep Transport
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
              Jeep vs Bus for the Khopra Trek: Which Transport Option Should You Choose?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The decision you make about transport before starting the Khopra Trek matters more than most trekkers expect. It is not just about saving money or arriving a little faster. It is about how you feel when you finally step out of the vehicle and begin walking.
              </p>
              <p>
                Choosing the wrong transport option can mean arriving at the trailhead already tired, dusty, and sore. Choosing the right one means you step off feeling fresh, comfortable, and ready to climb.
              </p>
              <p>
                In this guide, we compare jeep vs bus for the Khopra Trek in detail — covering actual travel time, real cost breakdowns, road conditions, seasonal factors, and honest recommendations based on traveler type. Whether you are a solo backpacker watching every dollar or a group of six sharing a comfortable 4WD jeep, this guide will help you make the right call.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE TREK STARTS */}
          <article id="where-trek-starts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Does the Khopra Trek Start and How Do You Get There?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Pokhara to Trailhead Road Access:</strong> The Khopra Ridge Trek starts in the Annapurna Conservation Area, and Pokhara is the central transport hub. Every traveler — whether arriving from Kathmandu by flight or tourist bus — will organize their trailhead transfer from Pokhara.
              </p>
              <p>
                <strong>Main Road Access Points:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Kimche (~37 km from Pokhara):</strong> The most common starting point for direct hikes to Ghandruk. The final stretch is a steep, unpaved gravel road.</li>
                <li><strong>Ghandruk (~1,940m):</strong> Traditional Gurung village trailhead. Shares the same rough mountain road approach as Kimche.</li>
                <li><strong>Nayapul &amp; Birethanti &amp; Syauli Bazaar:</strong> Lower transit nodes along the Modi Khola valley where road travel meets walking trails.</li>
              </ul>
              <p>
                Understanding road access is vital: these mountain roads are narrow, unpaved, and steep in sections — which is why 4WD jeeps handle them very differently from standard public buses.
              </p>
            </div>
          </article>

          {/* SECTION: TRANSPORT OPTIONS */}
          <article id="transport-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Transport Options Are Available for the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>1. Private Jeep Option:</strong> Exclusive vehicle for your group, departing on your schedule, stopping whenever needed. High-clearance 4WD vehicles handle dirt switchbacks effortlessly. Ideal for groups of 4 to 6.
              </p>
              <p>
                <strong>2. Shared Jeep Option:</strong> Pay per seat ($20–$25 USD). Operates similarly to a shared taxi, departing when full. Offers 4WD road capability and comfort at a fraction of private vehicle cost. <strong>Our top recommendation for most trekkers.</strong>
              </p>
              <p>
                <strong>3. Local Public Bus Option:</strong> Cheapest upfront ticket cost ($4–$6 USD), but stops frequently, carries heavy passenger loads, operates open windows on dusty roads, and travels much slower.
              </p>
              <p>
                <strong>4. Tourist Bus Note:</strong> Tourist buses operate primarily on the Kathmandu–Pokhara highway and do not serve the steep mountain dirt roads to Kimche or Ghandruk.
              </p>
            </div>
          </article>

          {/* SECTION: FULL COMPARISON TABLE */}
          <article id="full-comparison-table" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Jeep vs Bus for the Khopra Trek: Full Comparison Table
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Metric</th>
                    <th className="px-6 py-4">Private 4WD Jeep</th>
                    <th className="px-6 py-4">Shared 4WD Jeep</th>
                    <th className="px-6 py-4">Local Public Bus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.privateJeep}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700">{row.sharedJeep}</td>
                      <td className="px-6 py-4 text-stone-500">{row.bus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: TRAVEL TIME */}
          <article id="travel-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Travel Time Comparison Between Jeep and Bus
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Jeep Duration (2.5 to 3 Hours):</strong> Direct journey from Pokhara to Kimche/Ghandruk. Departs early morning, delivering you to the trailhead before midday for a full afternoon of relaxed hiking.
              </p>
              <p>
                <strong>Bus Duration (4.5 to 6 Hours):</strong> Stops constantly for local passengers, cargo loading, and narrow road passes. A morning bus departure often arrives late afternoon, reducing day-one hiking daylight.
              </p>
            </div>
          </article>

          {/* SECTION: COST COMPARISON */}
          <article id="cost-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Cost Comparison — Is a Jeep Worth the Extra Money?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Private Jeep:</strong> $100–$130 USD total per vehicle (approx. $20–$32 USD/person for a group of 4–6).</li>
                <li><strong>Shared Jeep:</strong> $20–$25 USD per seat (best value point for solo/pairs).</li>
                <li><strong>Local Public Bus:</strong> $4–$6 USD per seat.</li>
              </ul>
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-900 font-medium text-xs leading-relaxed">
                <strong>Hidden Costs of Taking the Bus:</strong> Open-window bus travel on gravel roads exposes you to hours of fine mountain dust, causing throat irritation before climbing to high altitudes (Khopra Ridge at 3,660m &amp; Khayer Lake at 4,500m). The physical fatigue from rough bus suspension can compromise your day-one climbing energy.
              </div>
            </div>
          </article>

          {/* SECTION: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Road Conditions on the Route to the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Lower road sections from Pokhara are paved, transitioning to steep gravel switchbacks near Birethanti and Kimche. High ground-clearance 4WD jeeps handle loose gravel, soft dirt, and steep inclines comfortably, while standard public buses rattle heavily and travel slowly.
              </p>
            </div>
          </article>

          {/* SECTION: SEASONAL FACTORS */}
          <article id="seasonal-factors" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Road Conditions That Affect Your Transport Choice
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Monsoon Season (June to September):</strong> Muddy roads and small landslides favor 4WD jeeps significantly over buses, which frequently get stuck or face severe delays.
              </p>
              <p>
                <strong>Dry Season (October–November &amp; March–April):</strong> Roads are firm and dry, but dust levels peak. Jeeps offer sealed windows while buses expose passengers to dust clouding.
              </p>
            </div>
          </article>

          {/* SECTION: COMFORT IMPACT */}
          <article id="comfort-impact" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Comfort Comparison — How Your Journey Affects the Trek Itself
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                High-altitude trekking success requires adequate sleep, hydration, and physical readiness. Arriving at Kimche after a 2.5-hour jeep ride leaves your legs fresh and respiratory system clear, whereas a 6-hour bus ride causes back stiffness and airway irritation before taking your first step on the mountain.
              </p>
            </div>
          </article>

          {/* SECTION: BEST FOR TRAVELERS */}
          <article id="best-for-travelers" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Transport Option Is Best for Different Types of Travelers?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Solo Travelers &amp; Couples:</strong> Shared 4WD jeep ($20–$25 USD/seat) for speed and comfort.</li>
                <li><strong>Budget Backpackers:</strong> Local bus ($4–$6 USD) during dry season only.</li>
                <li><strong>Groups of 4 to 6 Trekkers:</strong> Private 4WD jeep ($100–$130 USD total) — per-person cost matches shared jeep with full exclusive flexibility.</li>
                <li><strong>Comfort &amp; Luxury Trekkers:</strong> Private 4WD jeep for a stress-free start.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: OUR RECOMMENDATION */}
          <article id="our-recommendation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Our Recommendation — What Most Khopra Trek Travelers Should Choose
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Choose a shared 4WD jeep from Pokhara.</strong> It delivers 4WD mountain road capability, 2.5–3 hour travel time, and minimal dust exposure for just $20 to $25 USD per person — preserving your energy for the climb ahead.
              </p>
            </div>
          </article>

          {/* SECTION: ARRANGE JEEP */}
          <article id="arrange-jeep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can We Arrange Private Jeep Transport for Your Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes. As a licensed operator (Nepal Tourism Operator License #8928-091), EMD Treks coordinates private and shared 4WD jeep transfers from Pokhara directly to Kimche or Ghandruk, bundled with ACAP/TIMS permit processing and community lodge bookings.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Transport for the Khopra Trek
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is a jeep better than a bus for the Khopra Trek?",
                  a: "Yes. A 4WD jeep offers 2.5–3 hour travel time, sealed windows against road dust, and superior mountain road traction compared to a 4.5–6 hour bus ride."
                },
                {
                  q: "How much does a jeep cost from Pokhara to the Khopra Trek starting point?",
                  a: "A private jeep costs $100–$130 USD total per vehicle. A shared jeep seat costs $20–$25 USD per person."
                },
                {
                  q: "Can I take a local bus to Ghandruk?",
                  a: "Yes, local buses run from Pokhara to Ghandruk/Nayapul, taking 4.5–6 hours with frequent stops. It is slower and bumpier."
                },
                {
                  q: "Is shared jeep transport available for the Khopra Trek?",
                  a: "Yes. Shared jeeps depart regularly from Pokhara (Hari Chowk / Bus Park) to Kimche and Ghandruk."
                },
                {
                  q: "Which transport option is cheapest for the Khopra Trek?",
                  a: "The local public bus is cheapest at $4–$6 USD per seat, though it involves longer travel times and heavy dust exposure."
                },
                {
                  q: "Are roads dangerous during monsoon season?",
                  a: "Monsoon rains make mountain gravel roads muddy and slippery. 4WD jeeps are strongly recommended over buses during June–September."
                },
                {
                  q: "Can solo trekkers join a shared jeep?",
                  a: "Yes. Solo trekkers regularly buy single seats in shared jeeps leaving Pokhara."
                },
                {
                  q: "Which transport option is safest?",
                  a: "A 4WD jeep with high ground clearance and mountain suspension is safer on steep gravel switchbacks than a standard bus."
                },
                {
                  q: "Is a private jeep worth the extra cost?",
                  a: "For groups of 4 to 6, yes — per-person pricing matches shared jeeps while providing full vehicle exclusivity."
                },
                {
                  q: "What is the fastest way to reach the Khopra Trek trailhead?",
                  a: "A private or shared 4WD jeep takes 2.5 to 3 hours, compared to 4.5 to 6 hours on a public bus."
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
              The transport decision before starting the Khopra Trek is worth taking seriously. A shared 4WD jeep at $20 to $25 per seat is our top recommendation for most trekkers, providing 2.5–3 hour travel time, minimal dust exposure, and proper mountain road handling to ensure you start your trek fresh and ready to climb.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek Transport With Us
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Planning your Khopra Ridge Trek and need help organizing transport from Pokhara? We arrange private 4WD jeep transfers, shared jeep bookings, and complete guided trek packages including permits and community lodge bookings.
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
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Kimche jeep transport guide
                  </Link>
                  <Link href="/planning/pokhara-to-syauli-bazaar" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Syauli Bazaar transit guide
                  </Link>
                  <Link href="/planning/return-transport-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Plan return transport options after finishing your trek
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
                This transport advisory is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
