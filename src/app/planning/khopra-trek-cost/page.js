import React from "react";
import Link from "next/link";
import CostCalculator from "./CostCalculator";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-cost",
  },
  title: "Khopra Trek Cost: Complete Budget Breakdown for Every Traveler",
  description: "Planning the Khopra Trek? Get a complete cost breakdown covering permits, guides, porters, food, accommodation, packages, and hidden expenses for every budget.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Pricing &amp; Budget Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Trek Cost: Complete Budget Breakdown for Every Traveler
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">If you&apos;re researching the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Trek</Link> cost, you&apos;ve probably already noticed that most guides only give you a rough package price and leave the rest to guesswork. That&apos;s not enough when you&apos;re trying to figure out whether this trip actually fits your travel budget.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Independent Budget</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">$25–$40</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Per day on trail (excluding transport)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Mid-Range (Guided)</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">$40–$70</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Per day including guide &amp; transfers</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Permit Fees</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">$45</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">TIMS Card &amp; ACAP entry total</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Hidden Surcharges</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Low</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">WiFi, showers, charging fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Estimates
              </a>
              <a href="#factors" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Cost Influence Factors
              </a>
              <a href="#breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Cost Category Breakdown
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation Rates
              </a>
              <a href="#food-drinks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Food &amp; Water Budget
              </a>
              <a href="#staff" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Guide &amp; Porter Costs
              </a>
              <a href="#independent-vs-guided" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Independent vs Guided
              </a>
              <a href="#packages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Package Prices
              </a>
              <a href="#daily-examples" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Daily Budget Scenarios
              </a>
              <a href="#hidden-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Hidden Surcharges
              </a>
              <a href="#cash-atm" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Cash Planning &amp; ATMs
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Comparison With Treks
              </a>
              <a href="#reduce-budget" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Save Money
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Much Does the Khopra Trek Cost?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">On average, trekkers spend anywhere from $25 to $120 per day depending on whether they trek independently, hire a guide, or book a full package. Over a typical 7-day Khopra Ridge Trek, that translates to a total cost somewhere between $250 and $1,200, not including international flights to Nepal.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">The exact number depends on a handful of factors: whether you hire a guide or porter, the type of accommodation you choose, how you get to and from the trailhead, and what season you&apos;re trekking in. This guide walks through every one of those costs in detail, so you can build a realistic budget before you commit.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Budget (Independent)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Independent trekkers who skip a guide, stay in basic teahouses, and eat local meals typically spend $25 to $40 per day. For a 7-day trek, that puts the total around $200 to $300, plus permit fees and transportation. This works well for experienced, self-reliant hikers.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Mid-Range (Guided)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Most travelers fall here. A mid-range budget of $40 to $70 per day typically includes a local guide, slightly better food choices, and the occasional upgrade to a private room. Over 7 days, expect to spend roughly $350 to $550.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Comfort &amp; Private</h4>
                <p className="text-xs text-stone-500 leading-relaxed">If you want a private guide, dedicated porter, private transport, and the best available rooms along the route, budget $70 to $120 per day. A 7-day trek in this style typically lands between $600 and $1,200.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Trekker Type</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Daily Cost</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">7-Day Total Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Budget (Independent)</td>
                    <td className="px-6 py-4 text-stone-600">$25–$40</td>
                    <td className="px-6 py-4 text-stone-600">$200–$300</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Mid-Range (Guided)</td>
                    <td className="px-6 py-4 text-stone-600">$40–$70</td>
                    <td className="px-6 py-4 text-stone-600">$350–$550</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Comfort / Private</td>
                    <td className="px-6 py-4 text-stone-600">$70–$120</td>
                    <td className="px-6 py-4 text-stone-600">$600–$1,200</td>
                  </tr>
                </tbody>
              </table>
              <span className="text-[10px] text-stone-400 mt-2 block">Note: These figures do not include international airfare, Nepal visa fees, or gear purchases.</span>
            </div>
          </article>

          {/* DYNAMIC CALCULATOR INSERT */}
          <section className="scroll-mt-12 bg-stone-100 p-1 border border-stone-200 rounded-3xl">
            <CostCalculator />
          </section>

          {/* SECTION 2: VARIABLES AFFECTING COST */}
          <article id="factors" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Factors Affect the Cost of the Khopra Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Two trekkers can walk the exact same route and end up with very different bills. Here&apos;s why:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Trek Duration</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Most itineraries run 5 to 9 days depending on whether side trips like Khayer Lake are included. A 5-day trek naturally costs less overall than a 9-day version, since it reduces nights of accommodation and meals, which add up quickly.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Independent vs Guided Trekking</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Trekking independently removes guide fees entirely. Guided trekking adds $20 to $35 per day but often pays for itself in time saved, reduced stress, and increased safety.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Group Size</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Solo trekkers absorb the full cost of transportation, guides, and porters on their own. Couples and small groups can split jeep fares, share a porter, and sometimes negotiate better rates on guesthouse rooms, reducing per-person costs by 15% to 25%.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Season of Travel</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Autumn (September to November) and spring (March to May) are peak seasons, when teahouse prices and transportation costs sit at the higher end of the range. Winter and monsoon months are quieter, and some lodges offer lower rates.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: COST CATEGORY BREAKDOWN */}
          <article id="breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Complete Khopra Trek Cost Breakdown
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Here is a high-level look at where your money actually goes on this trek before we break each category down:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Cost Category</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Typical Range (per trip/day)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Permits (ACAP + TIMS)</td>
                    <td className="px-4 py-2">$45 per person</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Transportation (Round Trip)</td>
                    <td className="px-4 py-2">$30–$80 per person (shared vs private jeep)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Accommodation (7 Nights)</td>
                    <td className="px-4 py-2">$35–$140 (teahouse vs community lodges)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Food and Drinks (7 Days)</td>
                    <td className="px-4 py-2">$105–$245 ($15–$35/day)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Certified Guide (Daily)</td>
                    <td className="px-4 py-2">$20–$30 (wages)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Shared Porter (Daily)</td>
                    <td className="px-4 py-2">$15–$20 (wages)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-stone-900">Miscellaneous Surcharges</td>
                    <td className="px-4 py-2">$20–$50 (charging, WiFi, hot showers)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-bold text-stone-900">Permit Costs</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Every trekker entering the Annapurna Conservation Area needs the right paperwork. The <strong>Annapurna Conservation Area Permit (ACAP)</strong>is a flat fee of approximately $30 USD (3,000 NPR) per person. Combined with the <strong>TIMS Card</strong> ($15 USD / 2,000 NPR), the total fixed permit cost is $45 USD. You can obtain permits at the Nepal Tourism Board office in Kathmandu or Pokhara.
              </p>

              <h3 className="text-xl font-bold text-stone-900">Transportation Costs to Trailhead</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Getting to the start of the trail involves at least two legs: Pokhara to the trailhead itself, and optionally Kathmandu to Pokhara.
              </p>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1.5 leading-relaxed">
                <li><strong>Kathmandu to Pokhara:</strong>A tourist bus costs $10 to $15 and takes 6 to 7 hours. Domestic flights take 25 minutes and cost $80 to $120 one way.</li>
                <li><strong>Pokhara to Nayapul / Ghandruk:</strong>A local bus to Nayapul costs around $2 to $3. A private jeep Pokhara to Nayapul typically costs $25 to $35, whereas Pokhara to Ghandruk costs $35 to $45.</li>
                <li><strong>Return Transportation:</strong>Remember to budget for the return trip from the descent village back to Pokhara ($2 to $35 depending on shared vs private jeep).</li>
              </ul>
            </div>
          </article>

          {/* SECTION 4: ACCOMMODATION COSTS */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Trek Accommodation Cost
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Accommodation along the Khopra route is simple, functional, and inexpensive compared to international standards, but prices do shift depending on altitude and season.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Teahouse Accommodation</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Most nights are spent in teahouses (basic family-run guesthouses). A standard room costs $5 to $10 per night at lower elevations, rising to $10 to $20 per night closer to the ridge where supplies are harder to bring in.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Community Lodge Costs</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Near Khopra Danda itself, accommodation is run through a community lodge system. These lodges tend to sit at the higher end of the price range — around $15 to $20 per night — because everything must be carried up by porters.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs leading-relaxed">
              <strong>Tip on Private Rooms &amp; Seasonal Pricing:</strong>Private twin rooms are widely available and usually cost only a few dollars more than shared rooms. In quieter seasons, some lodges drop prices or waive room charges entirely if you eat your meals there, which is standard practice.
            </div>
          </article>

          {/* SECTION 5: FOOD & DRINKS */}
          <article id="food-drinks" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Trek Food and Drink Cost
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Food is one of the most consistent daily expenses on this trek, and it&apos;s also where costs climb the higher you go.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Typical Meal and Drink Estimates</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2 leading-relaxed">
                <li><strong>Breakfast ($3–$7):</strong>Oatmeal, toast, eggs, porridge, pancakes, and hot coffee or tea.</li>
                <li><strong>Lunch &amp; Dinner ($3–$8):</strong>Simple noodle soups, fried rice, pasta, or local Dal Bhat. Dal Bhat offers the best value as refills are typically free.</li>
                <li><strong>Drinking Water ($0.50–$3):</strong>Water bottles cost $0.50 at the trailhead and rise to $3 near the ridge. Bringing a water purification filter bottle can reduce this cost to almost nothing.</li>
                <li><strong>Tea, Coffee, &amp; Snacks ($1–$4):</strong>Hot drinks cost $1 to $2, while imported chocolate bars or cookies cost $2 to $4.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 6: STAFF COSTS */}
          <article id="staff" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Trek Guide and Porter Cost
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Whether to hire a guide or porter is one of the biggest budget decisions you&apos;ll make, and it affects both cost and overall experience.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Licensed Guide</h4>
                <p className="text-xs text-stone-500 leading-relaxed">A certified guide typically costs $20 to $30 per day. When booked via an agency, this usually includes their wages, insurance, food, and lodging.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Shared Porter</h4>
                <p className="text-xs text-stone-500 leading-relaxed">A porter costs $15 to $20 per day and carries up to 15-20kg, which can be split between two trekkers&apos; bags.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Guide-Porter</h4>
                <p className="text-xs text-stone-500 leading-relaxed">A single guide-porter carries some gear and guides the route. This role costs $25 to $35 per day, offering a cost-effective compromise.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl text-stone-600 text-xs">
              <strong>Tipping Expectations:</strong>Tipping is customary at the end of the trek. Common guidelines are $10 to $15 per day for a guide and $8 to $10 per day for a porter, pooled by the group and given as a lump sum.
            </div>
          </article>

          {/* SECTION 7: INDEPENDENT VS GUIDED */}
          <article id="independent-vs-guided" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Independent vs Guided Khopra Trek Cost
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Here is how the budget comparison pans out for a typical 7-day trek:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Independent Trek ($195–$495)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Includes permits ($45), basic lodging ($35–$140 for 7 nights), food &amp; drinks ($105–$245), and local transport ($30–$80). Requires full self-reliance and navigating routes on your own.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base font-sans font-sans">Guided Trek ($440–$845)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Adds guide fees ($140–$210) and porter fees ($105–$140), bringing the total to $440–$845. Group splits on guide fees can bring this closer to the independent range.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: PACKAGE PRICES */}
          <article id="packages" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Trek Package Prices
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">If you&apos;d rather not piece together permits, transportation, guides, and accommodation yourself, a package handles all of it for a single price:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Budget Packages ($400–$600)</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Typically covers permits, a local guide, basic teahouse accommodation, and standard meals. Excludes porters and private transport.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base font-sans">Standard Packages ($600–$900)</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Adds a porter, slightly more comfortable accommodation choices, and sometimes private transportation to the trailhead.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Premium Packages ($900–$1,400)</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Includes a private guide and porter, the best available rooms along the route, private transportation both ways, and extras like airport pickups.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: BUDGET PERSONAS */}
          <article id="daily-examples" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Sample Khopra Trek Daily Budget Examples
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Backpacker Style</h4>
                <ul className="text-xs text-stone-500 space-y-1">
                  <li>Lodging: $6–$10</li>
                  <li>Meals: $15–$20</li>
                  <li>Snacks: $3–$5</li>
                  <li>Water: $1–$2</li>
                  <li className="font-bold text-stone-900 border-t pt-1 mt-1">Total: $25–$37/day</li>
                </ul>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Mid-Range Style</h4>
                <ul className="text-xs text-stone-500 space-y-1">
                  <li>Private Room: $8–$15</li>
                  <li>Meals: $20–$28</li>
                  <li>Guide fee: $24–$30</li>
                  <li>Snacks: $4–$6</li>
                  <li className="font-bold text-stone-900 border-t pt-1 mt-1">Total: $56–$79/day</li>
                </ul>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Comfort Style</h4>
                <ul className="text-xs text-stone-500 space-y-1">
                  <li>Premium Room: $15–$20</li>
                  <li>Meals: $25–$35</li>
                  <li>Private Guide: $30–$35</li>
                  <li>Private Porter: $18–$22</li>
                  <li className="font-bold text-stone-900 border-t pt-1 mt-1">Total: $93–$120/day</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 10: HIDDEN COSTS */}
          <article id="hidden-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Hidden Costs Many Trekkers Forget
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">These smaller expenses rarely make it into headline pricing, but they can add up to a meaningful chunk of your total budget:
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Common Trail Surcharges</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2 leading-relaxed">
                <li><strong>Travel Insurance ($50–$150):</strong>Must cover trekking up to 4,660m and medical evacuation by helicopter.</li>
                <li><strong>Gear Rental ($1–$3/day):</strong>Sleeping bags, down jackets, and poles can be rented cheaply in Pokhara.</li>
                <li><strong>Battery Charging ($1–$3/device):</strong>Surcharges apply for phone or camera charging, increasing with altitude.</li>
                <li><strong>WiFi &amp; Hot Showers ($2–$5):</strong>Where available, lodges charge extra for hot showers (gas/solar) and satellite WiFi.</li>
                <li><strong>Contingency Buffer (10–20%):</strong>Keep an emergency buffer for transport delays, weather cancellations, or minor medical needs.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: CASH & ATMS */}
          <article id="cash-atm" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Much Cash Should You Carry for the Khopra Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Cash planning matters because digital payments and credit card processors are virtually nonexistent once you leave Pokhara.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Solo Trekkers</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Carry roughly $250 to $450 in local currency (NPR) cash, covering all lodging, food, and miscellaneous expenses.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Couples</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Sharing rooms reduces room costs, so carry roughly $400 to $700 combined cash for two people over a 7-day loop.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Small Groups</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Split transport and guide fees, bringing cash requirements to about $300 to $500 per person.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-amber-950 text-xs">
              <strong>Crucial Warning:</strong>There are no ATMs on the trail. Withdraw all the cash you need in Pokhara before heading to the trailhead.
            </div>
          </article>

          {/* SECTION 12: COMPARE WITH OTHER TREKS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Trek Cost Comparison With Other Popular Treks
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Trek</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Typical Cost (7-Day Equiv.)</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Duration</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Khopra Trek</td>
                    <td className="px-4 py-2 text-emerald-600 font-bold">$250–$1,200</td>
                    <td className="px-4 py-2">5–9 days</td>
                    <td className="px-4 py-2">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Annapurna Base Camp</td>
                    <td className="px-4 py-2">$400–$1,400</td>
                    <td className="px-4 py-2">7–12 days</td>
                    <td className="px-4 py-2">Moderate–Challenging</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Mardi Himal Trek</td>
                    <td className="px-4 py-2">$300–$1,000</td>
                    <td className="px-4 py-2">5–7 days</td>
                    <td className="px-4 py-2">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Poon Hill Trek</td>
                    <td className="px-4 py-2">$150–$600</td>
                    <td className="px-4 py-2">3–5 days</td>
                    <td className="px-4 py-2">Easy–Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 13: HOW TO REDUCE BUDGET */}
          <article id="reduce-budget" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reduce Your Khopra Trek Budget
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Value Hacks</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1.5 mt-2">
                  <li><strong>Trek in Shoulder Seasons:</strong>Early spring or late autumn offers cheaper rooms.</li>
                  <li><strong>Share Jeep Transfers:</strong>Split private jeeps between 3-4 people to match bus rates.</li>
                  <li><strong>Limit Extra Purchases:</strong>Snacking and bottled water can add $15/day. Use purification tablets.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base">Booking Advice</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1.5 mt-2">
                  <li><strong>Use Shared Porters:</strong>One porter can carry bags for two people, cutting fees.</li>
                  <li><strong>Book via Local Operators:</strong>Avoid foreign agency markup by booking directly in Nepal.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Khopra Trek Costs
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does the Khopra Trek cost in total?",
                  a: "Total costs typically range from $250 for a budget independent trek to $1,200 or more for a premium guided package, depending on duration, group size, and comfort levels."
                },
                {
                  q: "What is the Khopra Trek permit cost?",
                  a: "The Annapurna Conservation Area Permit (ACAP) is a flat fee of roughly $25-$30 per person, obtainable in Kathmandu or Pokhara. If trekking independently, you also need a TIMS card ($15), bringing the total permit cost to $45."
                },
                {
                  q: "Can I do the Khopra Trek without a guide?",
                  a: "Yes, experienced trekkers can do the Khopra Trek independently, though a guide is recommended for first-time visitors for safety and navigation support."
                },
                {
                  q: "How much does a porter cost on the Khopra Trek?",
                  a: "A porter typically costs $15-$20 per day, often including their meals and accommodation when arranged through a local operator."
                },
                {
                  q: "How much cash should I carry for the trek?",
                  a: "Solo trekkers should carry roughly $250-$450 for a 7-day trek, while groups can budget $300-$500 per person, since ATMs aren&apos;t available once you leave Pokhara."
                },
                {
                  q: "Are there ATMs on the Khopra Trek route?",
                  a: "No, ATMs are only reliably available in Pokhara. Withdraw all necessary cash before heading to the trailhead."
                },
                {
                  q: "Is the Khopra Trek cheaper than Annapurna Base Camp?",
                  a: "Generally yes — Khopra tends to cost slightly less than Annapurna Base Camp due to its shorter typical duration and lower demand on accommodation pricing."
                },
                {
                  q: "What is the cheapest way to do the Khopra Trek?",
                  a: "Trekking independently during shoulder season, sharing transportation and porter costs with others, and bringing your own snacks and water filter are the most effective ways to minimize costs."
                },
                {
                  q: "Are Khopra Trek packages worth the price?",
                  a: "For travelers who want a hassle-free experience with permits, guides, accommodation, and meals arranged in advance, packages offer good value, especially for first-time visitors to Nepal."
                },
                {
                  q: "How much should I tip my guide and porter?",
                  a: "A common guideline is $10-$15 per day for a guide and $8-$10 per day for a porter, typically given as a lump sum at the end of the trek."
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
            <h2 className="text-2xl font-bold text-stone-950">Is the Khopra Trek Worth the Cost?</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Trek offers sweeping views of Annapurna South, Dhaulagiri, and Nilgiri Himal, along with the option to extend to Khayer Lake. Compared to Annapurna Base Camp or even Poon Hill, the Khopra route sees significantly fewer trekkers. For travelers prioritizing a quieter, more peaceful experience, this alone adds considerable value beyond the dollar figures.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re trekking on a tight budget of $250 or opting for a fully supported package closer to $1,200, the Khopra Trek delivers strong value for the scenery and experience it offers.
            </p>
          </article>

          {/* SECTION 16: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to Plan Your Khopra Trek?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">If you&apos;d like an accurate cost estimate based on your specific travel dates, group size, and preferred trekking style, request a personalized estimate and we&apos;ll put together a breakdown tailored to your plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Customize Itinerary &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>Based in Ekata Basti Marg, Kathmandu 44600, Nepal</span>
                  <span>Free cancellation &amp; flexible changes</span>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This pricing guide is compiled and verified by licensed Kathmandu-based guides and community lodge organizers. We audit trail costs, transportation fares, and lodge rates quarterly to provide the most transparent and accurate budget resource.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
