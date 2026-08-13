import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/budget-khopra-trek",
  },
  title: "Budget Khopra Trek Guide | Nepal Trek Guide",
  description: "Planning a Khopra Ridge Trek on a budget? Get exact permit fees, daily food costs, teahouse prices, transport options, guide rates, and money-saving tips.",
};

export default function Page() {
  const averageTotalBudget5Day = [
    { traveler: "Ultra-budget backpacker (sharing guide)", cost: "$170 – $210" },
    { traveler: "Standard independent trekker", cost: "$220 – $280" },
    { traveler: "Comfortable independent trekker", cost: "$310 – $380" }
  ];

  const averageTotalBudget6Day = [
    { traveler: "Ultra-budget backpacker", cost: "$200 – $250" },
    { traveler: "Standard independent trekker", cost: "$260 – $330" },
    { traveler: "Comfortable independent trekker", cost: "$360 – $430" }
  ];

  const averageTotalBudget7Day = [
    { traveler: "Ultra-budget backpacker", cost: "$230 – $290" },
    { traveler: "Standard independent trekker", cost: "$300 – $380" },
    { traveler: "Comfortable independent trekker", cost: "$400 – $500" }
  ];

  const budgetComparison = [
    { category: "Permits", ultra: "$38", standard: "$38", comfortable: "$38" },
    { category: "Transport (Pokhara roundtrip)", ultra: "$12", standard: "$18", comfortable: "$30+" },
    { category: "Accommodation (per night)", ultra: "$5 – $6", standard: "$6 – $8", comfortable: "$8 – $12" },
    { category: "Meals (per day)", ultra: "$12 – $14", standard: "$15 – $18", comfortable: "$20 – $25" },
    { category: "Guide (shared or without)", ultra: "$0 – $15", standard: "$20 – $30", comfortable: "$35 – $50" },
    { category: "Water (purification tablets)", ultra: "$2 total", standard: "$5 – $10", comfortable: "$10 – $15" }
  ];

  const transportFromKathmandu = [
    { option: "Tourist bus (Kathmandu–Pokhara)", cost: "$8 – $12", time: "7 – 8 hours" },
    { option: "Local public bus", cost: "$5 – $7", time: "8 – 9 hours" },
    { option: "Domestic flight", cost: "$80 – $120", time: "25 minutes" }
  ];

  const transportFromPokhara = [
    { option: "Shared local jeep", dest: "Ghandruk", cost: "$8 – $12 per person" },
    { option: "Private jeep", dest: "Ghandruk", cost: "$45 – $65 per vehicle" },
    { option: "Local bus to Nayapul", dest: "Nayapul", cost: "$2 – $4" },
    { option: "Private taxi", dest: "Nayapul", cost: "$20 – $30" }
  ];

  const foodAndWaterExpenses = [
    { meal: "Breakfast", options: "Porridge, eggs, chapati, tea", cost: "$3 – $5" },
    { meal: "Lunch", options: "Noodle soup, fried rice, momos", cost: "$4 – $6" },
    { meal: "Dinner", options: "Dal Bhat, pasta, vegetable curry", cost: "$5 – $8" },
    { meal: "Black tea / milk tea", options: "—", cost: "$0.50 – $1" }
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
            <span className="text-emerald-400">Budget Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Cost Optimization &amp; Financial Planning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Budget Khopra Trek Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Complete cost breakdown for independent travelers. Learn exact permit fees, daily food costs, transport options, guide rates, and money-saving tips.
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
              <a href="#total-budget" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Total Budget Summary
              </a>
              <a href="#permit-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Requirements
              </a>
              <a href="#transportation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transportation Costs
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Prices
              </a>
              <a href="#food-water" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Water Budget
              </a>
              <a href="#guides-porters" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guides &amp; Porters
              </a>
              <a href="#budget-itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cheapest Itineraries
              </a>
              <a href="#hidden-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hidden Expenses
              </a>
              <a href="#cash-management" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cash Guidelines
              </a>
              <a href="#money-saving-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Money-Saving Tips
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Cost Comparison
              </a>
              <a href="#package-value" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is a Package Worth It?
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
                Inquire Budget Packages
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Budget Khopra Trek Guide: Complete Cost Breakdown for Independent Travelers
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers are surprised to discover how affordable the Khopra Ridge Trek really is. While the Annapurna Base Camp trek can cost a solo trekker $600 to $900 or more over 10 to 12 days, a well-planned Khopra Ridge Trek can be completed for as little as $170 to $260 USD over five to six days — including permits, accommodation, food, and transport.
              </p>
              <p>
                This is one of the most budget-friendly routes in the entire Annapurna Conservation Area. Because every lodge along the route is community-owned and operated by local Magar villages, pricing is standardized, transparent, and significantly lower than the commercial teahouse routes.
              </p>
              <p>
                This budget Khopra Trek guide gives you real numbers, not estimates pulled from outdated forum posts. Our team of licensed local guides operates this route regularly out of Pokhara, and every cost figure in this guide reflects what trekkers are actually spending during the current trekking season.
              </p>
              <p>
                Whether you are planning an independent trek, considering a shared group departure, or simply trying to figure out how much cash to carry — this is your complete financial planning resource.
              </p>
            </div>
          </article>

          {/* SECTION: TOTAL BUDGET */}
          <article id="total-budget" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Does the Khopra Trek Cost in Total?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before breaking down every individual expense, here is the honest answer most people searching this page actually want.
              </p>
              <p>
                <strong>Average Total Budget for a 5-Day Khopra Trek:</strong> A five-day trek covering the standard Khopra Ridge circuit — starting from Ghandruk and returning to Pokhara — costs the following depending on your travel style:
              </p>

              {/* TABLE: 5-Day */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Traveler Type</th>
                      <th className="px-6 py-4">Estimated Total Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {averageTotalBudget5Day.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.traveler}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Average Total Budget for a 6-Day Trek:</strong> Adding one extra day — typically used to spend more time at Khopra Ridge viewpoint or make an easier summit push — increases the total by approximately $30 to $45 USD, depending primarily on food and lodge choices.
              </p>

              {/* TABLE: 6-Day */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Traveler Type</th>
                      <th className="px-6 py-4">Estimated Total Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {averageTotalBudget6Day.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.traveler}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Average Total Budget for a 7-Day Trek With Khayer Lake Extension:</strong> If you extend the trek to include the sacred Khayer Lake — which sits at approximately 4,500 metres and is one of the most rewarding parts of the entire route — the total rises by $35 to $60 USD over the standard circuit.
              </p>

              {/* TABLE: 7-Day */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Traveler Type</th>
                      <th className="px-6 py-4">Estimated Total Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {averageTotalBudget7Day.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.traveler}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Budget Comparison by Traveler Type:</strong> Understanding what drives the cost difference between traveler types helps you plan honestly.
              </p>

              {/* COMPARISON TABLE */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Expense Category</th>
                      <th className="px-6 py-4">Ultra-Budget</th>
                      <th className="px-6 py-4">Standard</th>
                      <th className="px-6 py-4">Comfortable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {budgetComparison.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.category}</td>
                        <td className="px-6 py-4 text-stone-600">{item.ultra}</td>
                        <td className="px-6 py-4 text-stone-600">{item.standard}</td>
                        <td className="px-6 py-4 text-emerald-600 font-bold">{item.comfortable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: PERMIT COSTS */}
          <article id="permit-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permit Costs Required for Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Two mandatory permits are required before you enter the Khopra Ridge trekking area. Budget for these before anything else.
              </p>
              <p>
                <strong>ACAP Permit Cost:</strong> The Annapurna Conservation Area Project (ACAP) permit is required for all trekkers entering the Annapurna region.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>International trekkers: NPR 3,000 (approximately $23 USD)</li>
                <li>SAARC nationals: NPR 200</li>
              </ul>
              <p>
                This is a one-time fee covering your entire time in the Annapurna Conservation Area. It is not charged per day.
              </p>
              <p>
                <strong>TIMS Card Cost:</strong> The Trekkers&apos; Information Management System (TIMS) card is a trekking registration document for safety and official tracking.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Individual trekker: NPR 2,000 (approximately $15 USD)</li>
                <li>Trekkers with a guide: NPR 1,000</li>
              </ul>
              <p>
                Combined permit total for most international independent trekkers: approximately $38 USD. Both permits can be obtained at the Nepal Tourism Board (NTB) office in Kathmandu or the Trekking Agencies&apos; Association of Nepal (TAAN) office in Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION: TRANSPORTATION */}
          <article id="transportation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transportation Cost to Reach the Khopra Trek Trailhead
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Getting to the trailhead is one of the most controllable parts of your budget. Choosing public transport over private transfers can save you $20 to $40 USD.
              </p>
              <p>
                <strong>Travel Cost From Kathmandu to Pokhara:</strong>
              </p>

              {/* TABLE: Kathmandu to Pokhara */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Option</th>
                      <th className="px-6 py-4">Cost (USD)</th>
                      <th className="px-6 py-4">Travel Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {transportFromKathmandu.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.option}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                        <td className="px-6 py-4 text-stone-600">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Cost From Pokhara to the Trailhead:</strong>
              </p>

              {/* TABLE: Pokhara to Trailhead */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Option</th>
                      <th className="px-6 py-4">Destination</th>
                      <th className="px-6 py-4">Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {transportFromPokhara.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.option}</td>
                        <td className="px-6 py-4 text-stone-600">{item.dest}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Cheapest Transportation Option for Budget Travelers:</strong> The shared jeep from Pokhara to Ghandruk is by far the best value option. These jeeps depart from the jeep stand near Pokhara&apos;s Lakeside area each morning. The journey takes approximately two to three hours.
              </p>
              <p>
                Taking the local bus to Nayapul and walking from there adds a full extra day of trekking but reduces transport cost to under $5 USD — a worthwhile trade-off for some budget backpackers.
              </p>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation Cost on the Khopra Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The community-owned lodge system keeps costs predictable and fair throughout the trail. Standardized rates apply across Ghandruk, Tadapani, Chhistibung, Bayeli Kharka, Swanta, and Khopra Ridge.
              </p>
              <p>
                <strong>Community Lodge Prices Along the Route:</strong> Unlike the Annapurna Base Camp route — where private lodge competition has pushed pricing upward in popular stops — the Khopra Ridge lodges are operated collectively by Magar community villages. Revenue goes directly back into local schools, clinics, and village infrastructure.
              </p>
              <p>
                Average room cost: $5 to $8 USD per person per night on a twin-share basis. Most teahouse-style rooms are basic — two single beds, blankets, shared toilet and washing facilities.
              </p>
              <p>
                During the winter months (December to February) and the monsoon season (June to August), accommodation can drop to $3 to $5 USD per person per night at some lodges, though trail realities require careful consideration.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD & WATER */}
          <article id="food-water" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Water Expenses During the Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Food is typically the largest daily variable in any trekker&apos;s trail budget. On the Khopra route, eating smartly can reduce this cost significantly.
              </p>
              <p>
                <strong>Average Cost of Breakfast, Lunch, and Dinner:</strong>
              </p>

              {/* TABLE: Food & Water */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Meal</th>
                      <th className="px-6 py-4">Typical Options</th>
                      <th className="px-6 py-4">Estimated Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {foodAndWaterExpenses.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.meal}</td>
                        <td className="px-6 py-4 text-stone-600">{item.options}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Why Dal Bhat Is the Cheapest Meal Choice:</strong> Dal Bhat is Nepal&apos;s national dish: steamed rice served with lentil soup, vegetable curry, pickles, and sometimes a small portion of meat or egg. At virtually every teahouse on the Khopra route, a full plate of Dal Bhat costs between $4 and $6 USD. The key budget advantage is the free refill policy on rice, dal, and curry at most lodges, making it the single most effective way to stay full and fueled.
              </p>
              <p>
                <strong>How to Save Money on Drinking Water:</strong> Sealed mineral water bottles at lower elevations cost around $1 to $1.50 USD. At higher elevations near Khopra Ridge and Khayer Lake, the same bottle can cost $2 to $3 USD. The solution is simple: carry water purification tablets or a UV pen filter to bring your water cost to nearly zero.
              </p>
            </div>
          </article>

          {/* SECTION: GUIDES & PORTERS */}
          <article id="guides-porters" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Guide and Porter Cost Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Hiring a guide is not legally required for the Khopra Ridge Trek — but it is highly recommended, especially for first-time trekkers. A licensed guide costs $25 to $35 USD per day for a private guide, while a porter charges approximately $18 to $25 USD per day.
              </p>
              <p>
                <strong>How to Split Guide Costs With Other Travelers:</strong> The most effective budget strategy is a shared guide arrangement. When two or three trekkers split the daily guide cost, the per-person expense drops to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>$10 to $15 USD per person per day (shared between two trekkers)</li>
                <li>$8 to $12 USD per person per day (shared between three trekkers)</li>
              </ul>
              <p>
                This is also one of the main advantages of joining a shared departure group trek through a local operator, where the guide cost is distributed across all group members.
              </p>
            </div>
          </article>

          {/* SECTION: BUDGET ITINERARIES */}
          <article id="budget-itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Cheapest Khopra Trek Itinerary Options
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cheapest 5-Day Khopra Trek Itinerary (without guide):</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Day 1: Pokhara → Ghandruk (shared jeep)</li>
                <li>Day 2: Ghandruk → Tadapani (rhododendron forest)</li>
                <li>Day 3: Tadapani → Chhistibung (Magar highlands)</li>
                <li>Day 4: Chhistibung → Khopra Ridge (Summit viewpoint)</li>
                <li>Day 5: Khopra Ridge → Ghandruk → Pokhara (Return jeep)</li>
              </ul>
              <p>Estimated 5-day independent budget: $170 – $240 USD</p>

              <p>
                <strong>Best Budget-Friendly 6-Day Itinerary (without guide):</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Day 1: Pokhara → Ghandruk</li>
                <li>Day 2: Ghandruk → Tadapani</li>
                <li>Day 3: Tadapani → Chhistibung</li>
                <li>Day 4: Chhistibung → Bayeli Kharka</li>
                <li>Day 5: Bayeli Kharka → Khopra Ridge</li>
                <li>Day 6: Khopra Ridge → Swanta → Pokhara</li>
              </ul>
              <p>Estimated 6-day independent budget: $210 – $300 USD</p>

              <p>
                <strong>7-Day Itinerary With Khayer Lake Extension (without guide):</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Day 1: Pokhara → Ghandruk</li>
                <li>Day 2: Ghandruk → Tadapani</li>
                <li>Day 3: Tadapani → Chhistibung</li>
                <li>Day 4: Chhistibung → Bayeli Kharka</li>
                <li>Day 5: Bayeli Kharka → Khopra Ridge</li>
                <li>Day 6: Khopra Ridge → Khayer Lake (4,660m) → Khopra Ridge</li>
                <li>Day 7: Khopra Ridge → Swanta → Pokhara</li>
              </ul>
              <p>Estimated 7-day independent budget: $250 – $360 USD</p>
            </div>
          </article>

          {/* SECTION: HIDDEN COSTS */}
          <article id="hidden-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Hidden Costs Most Trekkers Forget to Budget For
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These expenses do not appear on standard summaries but add up:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Charging Electronics:</strong> Teahouses charge $1 to $2 per charge for phones or camera batteries.</li>
                <li><strong>WiFi Fees:</strong> WiFi access (where available) costs $1 to $3 per session or day. It is mostly unavailable on the upper trail.</li>
                <li><strong>Hot Showers:</strong> Hot showers cost $2 to $4 per shower.</li>
                <li><strong>Trail Snacks &amp; Specialty Drinks:</strong> Packaged snacks (chocolate, biscuits) cost $1 to $3 per item at altitude. Buying them in Pokhara before you start saves money.</li>
                <li><strong>Emergency Jeep exit:</strong> An emergency jeep from Ghandruk to Pokhara costs $60 to $100 USD. Travel insurance covering helicopter evacuation is highly recommended.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: CASH MANAGEMENT */}
          <article id="cash-management" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Cash Should You Carry for the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>No ATMs on the Trail:</strong> There are no ATMs along the route once you leave Pokhara. All payments along the trail are cash only in Nepali Rupees (NPR).
              </p>
              <p>
                <strong>Recommended Cash to Carry (USD equivalent in NPR):</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Ultra-budget (5 days, no guide): $200</li>
                <li>Standard (6 days, shared guide): $300</li>
                <li>Comfortable (7 days, private guide): $450</li>
              </ul>
              <p>
                Always carry 20 to 30 percent more cash than your projected minimum to cover contingency buffers and tips.
              </p>
            </div>
          </article>

          {/* SECTION: MONEY SAVING TIPS */}
          <article id="money-saving-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Money-Saving Tips for Budget Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Use Public Transportation:</strong> Take shared jeeps to Ghandruk ($8–$12) rather than private transfers ($45–$65).</li>
                <li><strong>Avoid Bottled Water &amp; Snacks:</strong> Using purification tablets and carrying snacks from Pokhara saves $25 to $45 USD.</li>
                <li><strong>Share Guide and Accommodation Costs:</strong> Split guide costs drop by up to 50 percent when traveling in partnerships.</li>
                <li><strong>Travel During Shoulder Season:</strong> Late November or early March offers slightly reduced room rates (20–30% discount) at some community lodges.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Cost Compared to Other Annapurna Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Khopra Trek vs Annapurna Base Camp (ABC):</strong> The ABC Trek takes 10 to 12 days and costs most independent trekkers $326 to $448 USD, whereas Khopra Ridge costs $186 to $228 USD for 6 days due to community-owned standardized lodge pricing and shorter duration.
              </p>
              <p>
                <strong>Khopra Trek vs Poon Hill:</strong> Poon Hill is shorter (3–4 days) and costs $120 to $170 USD. Khopra Ridge offers a much more remote, crowd-free experience for only a moderate budget increase.
              </p>
              <p>
                <strong>Khopra Trek vs Mardi Himal:</strong> Mardi Himal is a comparable alternative ($200–$380 USD), but Khopra Ridge offers the unique community lodge system benefit.
              </p>
            </div>
          </article>

          {/* SECTION: PACKAGE VALUE */}
          <article id="package-value" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Booking a Budget Khopra Trek Package Worth It?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Independent Trekking Cost:</strong> For a solo trekker, a 5-day independent budget is $170 to $240 USD. This does not include guide support or safety navigation above Chhistibung, where trail markings are less consistent.
              </p>
              <p>
                <strong>Guided Trek Packages:</strong> A budget guided trek package from a licensed local operator in Pokhara costs approximately $350 to $500 USD per person. This covers permits, accommodation, meals, guide fees, and return transport. When you calculate the true independent cost including a guide, the difference is minimal, and a package handler adds significant safety value.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Budgeting
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does the Khopra Ridge Trek cost in total?",
                  a: "A budget independent trekker can complete the Khopra Ridge Trek in five to six days for approximately $170 to $300 USD, including permits, accommodation, food, and shared transport from Pokhara."
                },
                {
                  q: "Can I do the Khopra Trek under $200?",
                  a: "Yes. Trek five days, use public shared transport, eat Dal Bhat, use water purification tablets, and trek without a guide to complete the trek at or just below $200 USD."
                },
                {
                  q: "Is the Khopra Trek cheaper than Annapurna Base Camp?",
                  a: "Significantly. Annapurna Base Camp Trek costs independent trekkers $326 to $448 USD over 10 to 12 days, not including guide fees. Khopra Ridge Trek is around half that cost."
                },
                {
                  q: "Do I need a guide for the Khopra Trek?",
                  a: "A guide is not legally required, but it is strongly recommended for safety and navigation, particularly above Chhistibung where trail markings are less consistent."
                },
                {
                  q: "How expensive are teahouses on the Khopra route?",
                  a: "Community lodge rooms cost $5 to $8 USD per person per night on a twin-share basis throughout the Khopra trail. This is standardized by the community project."
                },
                {
                  q: "Are there ATMs on the Khopra Trek route?",
                  a: "No. There are no functioning ATMs along the trail after Pokhara. All payments on the route are cash only in Nepali Rupees (NPR)."
                },
                {
                  q: "What permits are required for the Khopra Trek?",
                  a: "Two permits are required: the ACAP permit at NPR 3,000 (~$23 USD) and the TIMS card at NPR 2,000 (~$15 USD). Total permit cost: approximately $38 USD."
                },
                {
                  q: "What is the cheapest time of year to trek Khopra Ridge?",
                  a: "The shoulder seasons — late November to early December and late February to mid-March — offer the best balance of reduced pricing and acceptable trail conditions."
                },
                {
                  q: "Is the Khayer Lake extension expensive?",
                  a: "The Khayer Lake extension adds approximately $35 to $60 USD to your total budget over an extra one to two days, covering extra nights of food and accommodation."
                },
                {
                  q: "Can beginners do the Khopra Trek on a budget?",
                  a: "Yes. Khopra Ridge is beginner-accessible with proper acclimatization planning and a conservative itinerary. Hiring a guide for safety and navigation is advisable."
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
              The Khopra Ridge Trek stands out as one of the most genuinely affordable multi-day trekking experiences available in Nepal. The combination of community-owned lodges, standardized pricing, and a route length that fits comfortably into five to seven days makes it uniquely accessible for budget backpackers and independent travelers.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The key to keeping costs down is straightforward: use shared transport, eat Dal Bhat, carry purification tablets, share guide costs where possible, and travel in shoulder season if your schedule allows. Carry more cash than you think you need, budget a contingency for emergencies, and invest in proper travel insurance before you leave home.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Budget Khopra Trek With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We operate the Khopra Ridge Trek full-time out of Pokhara as a licensed Nepal trekking operator. If you want local pricing on permits, guides, shared transport, and community lodge bookings — without the markup of a large agency — our team can help you plan the most affordable version of this trek.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Our Local Team for Packages &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the baseline physical fitness requirements guide
                  </Link>
                  <Link href="/planning/can-beginners-do-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Find out if beginners can do the Khopra Ridge Trek safely
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
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
                This cost guide is compiled and verified by our local operators. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>. Pokhara &amp; Swanta, Nepal.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
