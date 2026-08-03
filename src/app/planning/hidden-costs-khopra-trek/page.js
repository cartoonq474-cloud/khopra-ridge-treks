import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/hidden-costs-khopra-trek",
  },
  title: "Hidden Costs of the Khopra Trek: Complete Budget Guide for Unexpected Expenses",
  description: "Planning the Khopra Trek? Discover every hidden expense most trekkers miss — permit fees, porter costs, tea house charges, gear rental, tipping, emergency funds, and more. Plan your real budget here.",
};

export default function Page() {
  const hiddenOnTrailCosts = [
    {
      item: "Hot Showers",
      cost: "NPR 200 to NPR 700 per shower",
      note: "Lodges charge to heat water via gas geyser or firewood, especially at high nodes like Chhistibung and Khopra Ridge."
    },
    {
      item: "Device Charging",
      cost: "NPR 200 to NPR 600 per device",
      note: "Charging phone batteries, power banks, and cameras. Rates are higher at high altitudes where solar power is limited."
    },
    {
      item: "Wi-Fi & Internet",
      cost: "NPR 300 to NPR 600 per session / day",
      note: "Satellite Wi-Fi cards are available at some lodges but can be slow. Connection quality is unreliable above 3,000m."
    },
    {
      item: "Snacks, Chocolate & Beverages",
      cost: "$5 to $10 USD / day (optional)",
      note: "Soft drinks, chocolate bars, and beer are hauled up by porters and horses. A bottle of beer at Khopra costs up to NPR 1,000."
    }
  ];

  const budgetBreakdown = [
    { category: "Trek Package / Guide", budget: "$350", midRange: "$550", premium: "$750" },
    { category: "Permits (ACAP)", budget: "$25", midRange: "$25", premium: "$25" },
    { category: "Transport (both ways)", budget: "$30", midRange: "$50", premium: "$80" },
    { category: "Porter Cost (shared/full)", budget: "$0–$80", midRange: "$100", premium: "$150" },
    { category: "Tips (guide + porter)", budget: "$60", midRange: "$100", premium: "$150" },
    { category: "Food and drinks (extras)", budget: "$50", midRange: "$80", premium: "$120" },
    { category: "Hot showers", budget: "$15", midRange: "$30", premium: "$50" },
    { category: "Charging + WiFi", budget: "$15", midRange: "$25", premium: "$35" },
    { category: "Gear rental", budget: "$30", midRange: "$50", premium: "$0 (owned)" },
    { category: "Travel insurance", budget: "$60", midRange: "$80", premium: "$100" },
    { category: "Emergency cash buffer", budget: "$50", midRange: "$100", premium: "$150" },
    { category: "Currency / ATM fees", budget: "$15", midRange: "$20", premium: "$25" }
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
            <span className="text-emerald-400">Hidden Costs</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Cost Optimization &amp; Hidden Fees
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Hidden Costs of the Khopra Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover every hidden expense most trekkers miss — permit fees, porter costs, tea house charges, gear rentals, tipping guidelines, and emergency reserves.
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
                Total Budget Baseline
              </a>
              <a href="#permit-fees" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Requirements
              </a>
              <a href="#transportation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transportation Leg Costs
              </a>
              <a href="#guide-porter" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guides &amp; Porters
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Tea House Room Prices
              </a>
              <a href="#food-drinks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Drink Markups
              </a>
              <a href="#daily-extras" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shower &amp; Charging Extras
              </a>
              <a href="#gear-rentals" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Gear Rentals
              </a>
              <a href="#emergency" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Emergency Contingencies
              </a>
              <a href="#pre-arrival" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                ATM &amp; Exchange Losses
              </a>
              <a href="#budget-matrix" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Real-World Budget Matrix
              </a>
              <a href="#reduce-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reduce Costs
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
                Inquire Budget Planning
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Hidden Costs of the Khopra Trek: Every Unexpected Expense You Should Budget For
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers arrive in Nepal with a budget based on the advertised package price. Within a few days on trail, they realise that number was never the full picture.
              </p>
              <p>
                The hidden costs of the Khopra Trek are not mysterious or unusual — they are simply the everyday expenses that trekking agencies rarely mention upfront. Permits, transport, tips, hot showers, charging your phone, an extra night in Pokhara because of rain — these add up fast, and there are no ATMs once you leave the city.
              </p>
              <p>
                This guide covers every expense you should budget for before, during, and after the Khopra Ridge Trek. Whether you are booking a guided package or trekking independently, understanding the real cost means no surprises on the trail.
              </p>
            </div>
          </article>

          {/* SECTION: TOTAL BUDGET */}
          <article id="total-budget" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Does the Khopra Trek Actually Cost in Total?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before diving into hidden expenses, it helps to anchor yourself with a realistic baseline. The advertised price and the total price are two different numbers.
              </p>
              <p>
                <strong>Average Guided Khopra Trek Package Cost:</strong> Most guided Khopra Ridge Trek packages are priced between USD 450 and USD 750 per person for an 8 to 10-day trek. This typically includes a licensed guide, tea house accommodation, three meals per day, and basic logistics.
              </p>
              <p>
                What it usually does not include: permits, transport from Kathmandu, tips, personal snacks, drinks beyond meals, hot showers, gear rental, and travel insurance. That list is where the hidden costs begin.
              </p>
              <p>
                <strong>Independent Trekking Cost Estimate:</strong> Independent trekkers tend to spend less on guide and porter fees but often spend more than expected on transport, gear, and logistics they did not plan for. A realistic independent budget runs between USD 350 and USD 600 for the same 8 to 10-day duration, depending on comfort level and how efficiently expenses are managed.
              </p>
              <p>
                <strong>Why Advertised Trek Prices Are Often Misleading:</strong> Trekking agencies compete on price, and the easiest way to show a low number is to exclude costs the trekker will pay regardless. A USD 450 package sounds attractive until you add USD 50 for permits, USD 60 in transport, USD 80 in tips, and USD 40 in daily extras. The real cost of a package trek routinely lands 30 to 50 percent above the headline price.
              </p>
            </div>
          </article>

          {/* SECTION: PERMIT FEES */}
          <article id="permit-fees" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Permit Fees That Travelers Often Overlook
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Nepal requires trekkers to carry official permits to enter protected mountain areas. These are non-negotiable, and the fees are set by government authorities — not by trekking agencies.
              </p>
              <p>
                <strong>Annapurna Conservation Area Permit (ACAP):</strong> The ACAP permit is mandatory for the Khopra Trek. As of recent years, this permit costs NPR 3,000 (approximately USD 22 to 25) for international trekkers. The permit funds conservation efforts across the Annapurna region and must be carried throughout the trek.
              </p>
              <p>
                <strong>TIMS Card and Trekking Registration Costs:</strong> The Trekkers&apos; Information Management System (TIMS) card has gone through regulatory changes over the years. For trekkers in the Annapurna Conservation Area, ACAP currently functions as the primary registration requirement. However, trekking regulations in Nepal do change, and it is worth confirming the current requirements with your agency or the Nepal Tourism Board before departure.
              </p>
              <p>
                <strong>Permit Costs Included vs Excluded:</strong> Independent trekkers must arrange and pay for permits themselves, typically at the permit office in Pokhara. For guided treks, some agencies include permit fees in the package price, while others list permits as a separate line item. Always read the inclusions list carefully and ask specifically: &quot;Is the ACAP permit included?&quot;
              </p>
            </div>
          </article>

          {/* SECTION: TRANSPORTATION */}
          <article id="transportation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transportation Costs to Reach the Khopra Trek Starting Point
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Getting to the trailhead is one of the commonly underestimated parts of the Khopra Trek budget. The trek typically begins around Ghandruk, and reaching that point from Kathmandu involves multiple transport legs.
              </p>
              <p>
                <strong>Kathmandu to Pokhara Transportation Cost:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Tourist bus:</strong> NPR 800 to 1,200 (USD 6 to 9) — a 7 to 8-hour journey</li>
                <li><strong>Local bus:</strong> NPR 500 to 700 — slower but cheaper</li>
                <li><strong>Domestic flight:</strong> USD 80 to 120 one way — fast, but subject to weather delays</li>
                <li><strong>Private vehicle:</strong> USD 120 to 180 — comfortable and flexible</li>
              </ul>
              <p>
                <strong>Pokhara to Ghandruk or Trailhead:</strong> From Pokhara, most trekkers hire a jeep or take shared transport toward Nayapul or directly to Ghandruk. A shared jeep typically costs NPR 600 to 1,000 per person. A private jeep hire runs NPR 4,000 to 7,000 depending on destination and negotiation. Ghandruk sits at 1,940 meters in the Annapurna region.
              </p>
              <p>
                <strong>Transport Delays and Unexpected Expenses:</strong> Nepal&apos;s mountain roads and weather conditions create real transport uncertainty. Landslides in monsoon season, fog delays for flights, and rough jeep roads are common. Budget at least one buffer night in Pokhara in case of delays — accommodation there runs USD 10 to 25 per night for a comfortable guesthouse room.
              </p>
            </div>
          </article>

          {/* SECTION: GUIDE & PORTER */}
          <article id="guide-porter" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Guide and Porter Costs That Increase the Real Trek Budget
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Hiring a guide or porter is one of the best decisions a trekker can make. It also adds meaningful cost that many online resources underrepresent.
              </p>
              <p>
                <strong>Average Khopra Trek Guide Cost:</strong> A licensed trekking guide charges between USD 25 and USD 40 per day. For a 10-day trek, that is USD 250 to USD 400 before tips. A good guide is not just navigation support — they handle teahouse logistics, manage local transport, and assist with altitude concerns.
              </p>
              <p>
                <strong>Average Khopra Trek Porter Cost:</strong> A porter charges between USD 18 and USD 28 per day, carrying up to 25 to 30 kilograms of luggage. If trekking in a group, splitting the cost of a shared porter between two or three trekkers significantly reduces the individual expense.
              </p>
              <p>
                <strong>Tipping Expectations:</strong> Tipping is not legally mandatory, but it is deeply embedded in trekking culture:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Guide Tip:</strong> USD 5 to USD 10 per day (total for the trip)</li>
                <li><strong>Porter Tip:</strong> USD 3 to USD 5 per day (total for the trip)</li>
              </ul>
              <p>
                For a 10-day trek with one guide and one porter, budget USD 80 to USD 150 in tips as a realistic figure.
              </p>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Tea House Accommodation Costs on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Standard Room Prices:</strong> At lower elevations near Ghandruk, a basic double room runs NPR 300 to 600 (USD 2 to 5) per night. Higher on the Khopra route, prices rise to NPR 600 to 1,200 per night. Teahouses offer rooms cheaply because they expect guests to eat all meals there. If you bring outside food or skip meals, you may be charged a premium for the room.
              </p>
              <p>
                <strong>Seasonal Price Changes:</strong> October is peak trekking season across the Annapurna region, and teahouses near popular stopovers fill quickly. During this period, room prices can increase by 20 to 40 percent compared to off-season rates. Spring (March to May) also sees price increases.
              </p>
              <p>
                <strong>Extra Accommodation Charges:</strong> Private rooms with attached bathrooms cost significantly more than standard shared dormitory-style rooms. Expect to pay NPR 500 to 1,000 more per night for a private room. Additional blankets are sometimes charged separately at NPR 100 to 200 per extra blanket.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD & DRINKS */}
          <article id="food-drinks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Drink Costs That Add Up Faster Than Expected
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Food is not a hidden cost in the traditional sense — but the way prices escalate with altitude catches many trekkers off guard.
              </p>
              <p>
                <strong>Meal Costs at Tea Houses:</strong> Dal bhat — the traditional Nepali lentil and rice meal — is the most affordable and filling option on trail. At lower elevations it costs NPR 350 to 500. At higher teahouses on the Khopra route, the same meal runs NPR 600 to 900. Western options like pasta, pizza, and pancakes can reach NPR 700 to 1,200 per dish. Budget roughly NPR 1,500 to 2,500 per day for three meals.
              </p>
              <p>
                <strong>Bottled Water, Tea, Coffee, and Soft Drinks:</strong> A 1-litre water bottle that costs NPR 30 in Pokhara costs NPR 150 to 250 at teahouses above 3,000 meters. Tea and coffee run NPR 100 to 200 per cup on trail. Soft drinks typically cost NPR 200 to 400.
              </p>
              <p>
                <strong>Snacks, Chocolate, and Beer:</strong> Imported chocolate bars and energy snacks cost two to three times more on trail than in Pokhara city. A Snickers bar costs NPR 200 to 300 at a remote teahouse. Beer can reach NPR 700 to 1,000 per bottle. Carry purification tablets to avoid water costs and buy snacks in Pokhara before departure.
              </p>
            </div>
          </article>

          {/* SECTION: DAILY EXTRAS */}
          <article id="daily-extras" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Small Daily Expenses Most Trekkers Forget to Budget For
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These are the costs that individually seem trivial but collectively become one of the largest expense categories:
              </p>

              {/* TABLE: Hidden On-Trail Costs */}
              <div className="space-y-6 my-6">
                {hiddenOnTrailCosts.map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                    <div className="sm:w-1/3">
                      <span className="text-sm font-extrabold text-stone-955 block">{item.item}</span>
                      <span className="text-xs font-bold text-emerald-600 mt-1 block">{item.cost}</span>
                    </div>
                    <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                <strong>Hot Shower Charges:</strong> Hot showers are charged separately, typically NPR 200 to 400 per shower at lower elevations and NPR 400 to 700 at higher teahouses. Over a 10-day trek, daily showers add NPR 3,000 to 7,000 to the budget.
              </p>
              <p>
                <strong>Device Charging Fees:</strong> Charging a phone or camera typically costs NPR 200 to 400 per device. Charging a power bank runs NPR 400 to 600. Solar charging can be unavailable in overcast weather.
              </p>
              <p>
                <strong>WiFi and Internet Charges:</strong> Satellite WiFi passes typically cost NPR 300 to 600 per day. Mobile data networks have limited coverage. Download offline maps and save documents locally.
              </p>
            </div>
          </article>

          {/* SECTION: GEAR RENTALS */}
          <article id="gear-rentals" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Gear Rental Costs Before Starting the Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Renting equipment in Pokhara is a practical option, but is a cost that needs planning:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Sleeping Bag Rental:</strong> NPR 150 to 300 per day to rent (NPR 1,500 to 3,000 for a 10-day trek).</li>
                <li><strong>Down Jacket Rental:</strong> NPR 150 to 250 per day. Reserve early in October peak season.</li>
                <li><strong>Trekking Poles &amp; Backpack:</strong> Poles rent for NPR 100 to 200 per day per pair. Backpacks rent for NPR 100 to 200 per day.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: EMERGENCY */}
          <article id="emergency" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Emergency Costs You Must Budget For Before Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Mountain environments are unpredictable, and emergency financial preparation is non-negotiable:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Medical Treatment Contingency:</strong> Basic consultations at clinics cost USD 10 to 40. Discuss Diamox (acetazolamide) with a doctor before the trek. Budget USD 50 to 100 as a medical contingency fund.</li>
                <li><strong>Helicopter Rescue and Evacuation Insurance:</strong> Helicopter evacuation from the Annapurna region costs USD 3,000 to USD 6,000 or more. Travel insurance with emergency evacuation coverage costs USD 50 to 150 and is mandatory.</li>
                <li><strong>Weather Delays:</strong> Trail closures or flight cancellations can cause unexpected extra nights. Budget USD 15 to 40 per unplanned day, and plan two to three buffer days.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRE-ARRIVAL */}
          <article id="pre-arrival" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Financial Costs Most Travelers Forget Before Arriving in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Currency Exchange &amp; ATM Fees:</strong> Exchanging currency to NPR involves rates commissions. Airport exchange counters are less favorable than city money changers. ATMs charge NPR 300 to 500 per transaction, plus home bank fees.
              </p>
              <p>
                <strong>No ATMs on the Trail:</strong> Once you leave Pokhara, there are no ATMs on the Khopra Trek route. Carry more rupees than you expect to need. We recommend budgeting your trail expenses, adding a 25 to 30 percent emergency buffer, and carrying the total in NPR cash.
              </p>
            </div>
          </article>

          {/* SECTION: BUDGET MATRIX */}
          <article id="budget-matrix" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Realistic Khopra Trek Budget Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The following estimates cover a standard 9 to 10-day Khopra Trek including all major hidden costs (in USD):
              </p>

              {/* TABLE: Budget Breakdown */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Expense Category</th>
                      <th className="px-6 py-4">Budget Trekker</th>
                      <th className="px-6 py-4">Mid-Range Trekker</th>
                      <th className="px-6 py-4">Premium Trekker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {budgetBreakdown.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.category}</td>
                        <td className="px-6 py-4 text-stone-600">{item.budget}</td>
                        <td className="px-6 py-4 text-stone-600">{item.midRange}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Budget Backpacker ($700–$800 total):</strong> Assumes shared resources, minimal extras, and careful daily spending.</li>
                <li><strong>Mid-Range Trekker ($1,100–$1,200 total):</strong> Assumes a guided package, shared porter, appropriate tips, and moderate daily comforts.</li>
                <li><strong>Premium Guided Trek ($1,600–$1,700 total):</strong> Reflects private rooms, daily showers, quality food choices, and full guide and porter services.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: REDUCE COSTS */}
          <article id="reduce-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reduce Hidden Costs on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Book Inclusive Packages:</strong> Choose packages covering permits, transport, and equipment to avoid paying higher individual rates later.</li>
                <li><strong>Carry Essential Gear:</strong> Bring a reusable bottle with purification tablets, and a portable power bank to eliminate charging fees. Buy snacks in Pokhara before leaving.</li>
                <li><strong>Ration Daily Cash:</strong> Set aside a daily cash plan (e.g. $8–12 for budget, $15–22 for mid-range, $30–40 for premium extras) to prevent overspending.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Hidden Costs
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does the Khopra Trek cost in total?",
                  a: "The total cost varies by travel style. A budget independent trekker should plan for USD 700 to USD 850. A guided mid-range trek including all hidden costs runs USD 1,100 to USD 1,250. A premium guided experience can reach USD 1,600 to USD 1,700 or above."
                },
                {
                  q: "What hidden costs should I expect on the Khopra Trek?",
                  a: "The most commonly overlooked expenses are: permits, transport to and from the trailhead, guide and porter tips, hot shower fees, device charging fees, bottled water, gear rental, travel insurance, emergency cash reserves, and currency exchange losses."
                },
                {
                  q: "Are permits included in Khopra Trek packages?",
                  a: "It depends on the agency. Some packages include the ACAP permit; many do not. Always confirm in writing whether the permit is included before booking. Budget USD 22 to 25 separately if it is not covered."
                },
                {
                  q: "How much cash should I carry for the Khopra Trek?",
                  a: "Carry enough NPR for all estimated trail expenses plus a 25 to 30 percent emergency buffer. A mid-range trekker typically needs NPR 25,000 to 40,000 in cash for trail expenses beyond the package cost. Withdraw everything in Pokhara — there are no ATMs on the trail."
                },
                {
                  q: "Are there ATMs on the Khopra Trek route?",
                  a: "No. There are no ATMs between Pokhara and the Khopra Ridge. Once you leave the city, you are operating entirely on the cash you carry. This is one of the most important practical facts for trek budgeting."
                },
                {
                  q: "How expensive are tea houses on the Khopra Trek?",
                  a: "Room rates range from NPR 300 to 1,200 per night depending on altitude and season. Meals cost NPR 350 to 1,200 per dish depending on the menu item and elevation. Prices increase noticeably the higher you trek."
                },
                {
                  q: "Is tipping mandatory for guides and porters in Nepal?",
                  a: "Tipping is not legally required, but it is a strong cultural expectation and forms a meaningful part of guide and porter income. Budget USD 5 to 10 per day for your guide and USD 3 to 5 per day for your porter as a total tip across the full trek."
                },
                {
                  q: "Are hot showers free on the Khopra Trek?",
                  a: "No. Hot showers are almost always charged as an extra service at tea houses. Expect to pay NPR 200 to 700 per shower depending on location. Budget accordingly if daily hygiene is a priority for you."
                },
                {
                  q: "What emergency costs should trekkers prepare for?",
                  a: "The two most important emergency expenses to plan for are: helicopter evacuation (covered by travel insurance — do not skip this) and weather delay accommodation. Budget USD 50 to 100 as a medical contingency fund, and carry enough cash for two to three extra unplanned nights."
                },
                {
                  q: "Is guided trekking cheaper than independent trekking overall?",
                  a: "Not always. A guided package seems more expensive upfront, but independent trekkers often spend more than expected on logistics, permits, transport, and avoidable mistakes. When all costs are added up, a good guided package can offer comparable value — with significantly less planning stress."
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
            <h2 className="text-2xl font-bold text-stone-955 font-sans font-medium">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek is one of Nepal&apos;s most rewarding off-the-beaten-path experiences. It is also a trek where budget surprises are common — not because the trek is unusually expensive, but because the gap between advertised prices and actual spending is rarely explained clearly.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Budget for what the trek actually costs. Carry enough cash from Pokhara, secure travel insurance, and tip your guide and porter fairly. Everything else is manageable when you know what is coming.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek With Transparent Pricing
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Want to trek the Khopra Ridge without worrying about hidden expenses or surprise charges? Our locally based team in Pokhara arranges fully organised Khopra Trek packages with clear inclusions — permits, transport, accommodation, guide, and porter — so your total cost is known before you arrive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Your Trek Now &rarr;
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
                This hidden fees budget breakdown is compiled seasonally based on current local transport tariffs and park forest checkpoint rules. NTB licensed operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
