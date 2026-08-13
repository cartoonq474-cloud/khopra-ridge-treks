import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/group-trek-cost",
  },
  title: "Khopra Ridge Trek Group Cost & Shared Package Pricing Guide",
  description: "Discover the real Khopra Ridge Trek group cost. See the full cost breakdown per person, what shared trek packages include, how group departures save you up.",
};

export default function Page() {
  const groupStats = [
    { label: "Typical Group Size", value: "4 to 10 Trekkers" },
    { label: "Price Range", value: "$450 to $650 USD / person" },
    { label: "Porter Ratio", value: "1 Porter per 2 Trekkers" },
    { label: "Transfer Style", value: "Shared tourist bus or shared 4WD jeep" }
  ];

  const costBreakdown = [
    { component: "Annapurna Conservation Area Permit (ACAP)", cost: "$30 USD" },
    { component: "TIMS Card", cost: "$20 USD" },
    { component: "Community Lodge Accommodation (6 nights)", cost: "$60–90 USD" },
    { component: "Meals — Breakfast, Lunch, Dinner (7 days)", cost: "$100–130 USD" },
    { component: "Shared Guide Cost (split across group)", cost: "$35–60 USD" },
    { component: "Shared Porter Cost (1 porter per 2 trekkers)", cost: "$30–50 USD" },
    { component: "Shared Jeep Transfer — Pokhara to trailhead", cost: "$20–35 USD" },
    { component: "Agency Handling & Logistics", cost: "$25–40 USD" }
  ];

  const comparisonTable = [
    { item: "Trekking Guide (6 days)", privateCost: "$210", groupCost: "$30–45" },
    { item: "Porter Service (6 days)", privateCost: "$120–150", groupCost: "$60–75" },
    { item: "Jeep Transfer (return)", privateCost: "$120–160", groupCost: "$20–35" },
    { item: "Permits (ACAP + TIMS)", privateCost: "$50", groupCost: "$50" },
    { item: "Accommodation (6 nights)", privateCost: "$60–90", groupCost: "$60–90" },
    { item: "Meals (7 days)", privateCost: "$105–140", groupCost: "$105–140" },
    { item: "Agency Handling", privateCost: "$40–60", groupCost: "$25–40" }
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
            <span className="text-emerald-400">Group Cost</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Group Departures &amp; Shared Logistics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Group Trek Cost &amp; Shared Packaging
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover the real Khopra Ridge Trek group cost. Learn how shared departures save you up to 35%, what packages include, and how to budget.
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
              <a href="#total-cost" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How Much Does It Cost?
              </a>
              <a href="#cost-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Detailed Cost Breakdown
              </a>
              <a href="#shared-expenses" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Expenses Are Shared?
              </a>
              <a href="#private-vs-group" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private vs Group Comparison
              </a>
              <a href="#whats-included" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Is Included / Excluded
              </a>
              <a href="#hidden-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hidden Trekking Expenses
              </a>
              <a href="#why-cheaper" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Fixed Departures?
              </a>
              <a href="#reduce-budget" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Reduce Your Budget Further
              </a>
              <a href="#choose-private-group" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private vs Group Trek
              </a>
              <a href="#departures-info" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Upcoming Departure Dates
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
                Inquire Departure Schedules
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Group Cost &amp; Shared Package Pricing Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Joining a group departure is the most affordable way to experience the Khopra Ridge Trek. When you share the cost of a licensed guide, jeep transfer, porter service, and community lodge accommodation across four to ten trekkers, the per-person price drops significantly compared to booking a private trek.
              </p>
              <p>
                Most trekkers on a shared package spend between $450 and $650 USD per person for the full Khopra Ridge experience — permits, accommodation, guide, porter, and transport included. That is a saving of up to 35% compared to organizing the same trek independently.
              </p>
              <p>
                This guide gives you a full, transparent cost breakdown. You will see exactly what you pay for, what is included, what you need to budget separately, and why a fixed group departure is often the smartest financial decision for travelers visiting Nepal&apos;s Annapurna region.
              </p>
            </div>
          </article>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 shadow-sm">
            {groupStats.map((stat, i) => (
              <div key={i}>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
                <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* SECTION: TOTAL COST */}
          <article id="total-cost" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Does the Khopra Ridge Trek Cost in a Group?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Average Group Trek Cost Per Person:</strong> A fully packaged Khopra Ridge Trek group departure typically costs between $450 and $650 USD per person. This range covers the core services: trekking permits, accommodation in community lodges, meals (breakfast, lunch, and dinner), a licensed guide, a shared porter, and shared transport from Pokhara to the trailhead and back.
              </p>
              <p>
                <strong>Standard Group Size:</strong> Khopra Ridge Trek group departures typically operate with four to ten trekkers. Smaller groups preserve the community lodge experience and trail atmosphere, while larger groups create meaningful cost-sharing across shared logistics.
              </p>
              <p>
                <strong>What Factors Affect the Final Trek Cost?</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Season:</strong> Peak season departures in October, November, March, and April are slightly more expensive.</li>
                <li><strong>Group size:</strong> Smaller groups (four to five trekkers) cost more per person than larger groups.</li>
                <li><strong>Route variation:</strong> Adding the Khayer Lake extension or extra acclimatization nights adds to the total.</li>
                <li><strong>Transport type:</strong> A shared tourist bus from Pokhara costs less than a shared 4WD jeep but takes longer.</li>
                <li><strong>Accommodation standard:</strong> Twin-share community lodge rooms are standard; private rooms cost extra.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COST BREAKDOWN */}
          <article id="cost-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Khopra Ridge Trek Cost Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding the full cost breakdown is the most important step in planning your trek budget. The table below gives you a realistic picture of what the individual components cost:
              </p>

              {/* TABLE: Cost Breakdown */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Cost Component</th>
                      <th className="px-6 py-4">Estimated Cost (Per Person)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {costBreakdown.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.component}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Trekking Permit Costs:</strong> Two government-issued permits are mandatory. The Annapurna Conservation Area Permit (ACAP) costs $30 USD per person and the TIMS Card (Trekkers&apos; Information Management System) costs $20 USD per person.
              </p>
              <p>
                <strong>Accommodation Costs:</strong> The Khopra Ridge route passes through community lodges managed by Magar villages. Standardized twin-sharing rooms cost between $8–15 USD per room when booked independently, which is included in the group package.
              </p>
              <p>
                <strong>Daily Food and Meal Expenses:</strong> Daily meals on the Khopra Ridge trail run between $15–20 USD per day when eating independently. A package covers standard meals, while extra tea, coffee, or snacks are purchased separately.
              </p>
              <p>
                <strong>Transportation Costs:</strong> Shared 4WD jeep transfers Pokhara to trailhead and return drop the per-person cost to $20–35 USD. Kathmandu–Pokhara travel must be budgeted separately if arriving directly at the capital.
              </p>
              <p>
                <strong>Guide and Porter Costs:</strong> On a private trek, the guide cost of $30–40 USD per day falls entirely on one trekker ($210 USD for a 6-day trek). In a group of eight, this drops to just $26 USD per person. Porters carry up to 20–25 kg and earn $20–25 USD per day, split on a 1:2 ratio.
              </p>
            </div>
          </article>

          {/* SECTION: SHARED EXPENSES */}
          <article id="shared-expenses" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Trek Expenses Are Shared in a Group Package?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The cost-saving logic of group trekking is straightforward:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Shared Guide Wages:</strong> Split evenly among all group members.</li>
                <li><strong>Shared Porter Service Ratio:</strong> Split on a 1:2 ratio, balancing comfort and affordability.</li>
                <li><strong>Shared Transportation Costs:</strong> Jeeps are filled to capacity, dropping transport fees per person significantly.</li>
                <li><strong>Shared Accommodation:</strong> Twin-share arrangements halve lodging room base costs.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRIVATE VS GROUP */}
          <article id="private-vs-group" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Trek vs Group Trek Cost Comparison
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Compare the estimated expenses per person side-by-side:
              </p>

              {/* TABLE: Private vs Group */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Expense</th>
                      <th className="px-6 py-4">Private Trek</th>
                      <th className="px-6 py-4">Group Trek (per person)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {comparisonTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.item}</td>
                        <td className="px-6 py-4 text-rose-600 font-semibold">{item.privateCost}</td>
                        <td className="px-6 py-4 text-emerald-600 font-semibold">{item.groupCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>How Much Money Can You Save by Joining a Group?</strong> Joining a group trek saves the average trekker between $250–400 USD (roughly a 30–45% saving) compared to organizing a private trek with the same services.
              </p>
            </div>
          </article>

          {/* SECTION: WHATS INCLUDED */}
          <article id="whats-included" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Included in a Shared Trek Package?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm mb-3">Services Typically Included:</h4>
                  <ul className="space-y-2 text-stone-600 list-disc pl-5">
                    <li>ACAP Permit &amp; TIMS Card</li>
                    <li>Licensed trekking guide for the duration</li>
                    <li>Shared porter service (1:2 ratio)</li>
                    <li>Lodge accommodation in community lodges</li>
                    <li>Meals: breakfast, lunch, and dinner</li>
                    <li>Shared jeep transport from Pokhara</li>
                    <li>First aid kit &amp; agency logistics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm mb-3">Costs Usually Excluded:</h4>
                  <ul className="space-y-2 text-stone-600 list-disc pl-5">
                    <li>International flights and Nepal visas</li>
                    <li>Travel insurance (essential and required)</li>
                    <li>Trekking gear &amp; rentals</li>
                    <li>Tips for your guide and porter</li>
                    <li>Extra drinks (soda, beer, bottled water)</li>
                    <li>WiFi, device charging, and hot showers</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: HIDDEN COSTS */}
          <article id="hidden-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Hidden Trekking Costs Many Travelers Forget
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>WiFi Tokens:</strong> $1–3 USD per session where available.</li>
                <li><strong>Device Charging:</strong> $1–2 USD per charge, solar dependent at upper camps.</li>
                <li><strong>Hot Showers:</strong> $2–4 USD per shower.</li>
                <li><strong>Boiled/Bottled Water:</strong> $1–2 USD per litre. Purification tablets help mitigate this.</li>
                <li><strong>Personal Expenses:</strong> Trail snacks, tea, souvenirs, and tips commonly cost around $10–15 USD per day.</li>
                <li><strong>Insurance Contingency:</strong> Evacuations cost $3,000–5,000 USD out-of-pocket if not covered by a specialized high-altitude policy.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHY CHEAPER */}
          <article id="why-cheaper" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Fixed Departure Group Treks Are Usually Cheaper
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Bulk Operations:</strong> Scheduled fixed departure dates allow agencies to bulk-reserve lodges and coordinate guide schedules, reducing operational overheads.
              </p>
              <p>
                <strong>Pre-negotiated Rates:</strong> Established operators secure lower rates from community lodges and local transport cooperatives.
              </p>
              <p>
                <strong>Solo Traveler Advantages:</strong> Solo travelers escape paying the entire private guide or porter premium, receiving high-value services for just a fraction of the cost.
              </p>
            </div>
          </article>

          {/* SECTION: REDUCE BUDGET */}
          <article id="reduce-budget" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reduce Your Khopra Ridge Trek Budget Even Further
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Travel During Shoulder Season:</strong> Late November or early February offers lower rates on both group packages and flights.
                </li>
                <li>
                  <strong>Join Larger Departures:</strong> Economy fixed departures with 8–10 trekkers minimize per-person costs.
                </li>
                <li>
                  <strong>Stick to Shared Transport:</strong> Shared public buses or local shared jeeps cost a fraction of private transfers.
                </li>
                <li>
                  <strong>Maintain Porter Share:</strong> Stick to the default 1:2 porter ratio to avoid paying extra for private porter services.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: CHOOSE PRIVATE GROUP */}
          <article id="choose-private-group" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Should You Choose a Private Trek or Group Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>When Private Trekking Makes Sense:</strong> Choose private trekking if you need a flexible itinerary, prefer to set your own daily walking pace, or are traveling with a private party of friends who want an exclusive experience.
              </p>
              <p>
                <strong>When Group Trekking Is the Better Option:</strong> Group trekking is perfect for solo travelers, budget-conscious hikers, and travelers who enjoy meeting other hikers.
              </p>
              <p>
                <strong>Our Recommendation:</strong> For most independent travelers on a moderate budget, joining a fixed group departure delivers the best combination of safety, affordability, and rich community experience.
              </p>
            </div>
          </article>

          {/* SECTION: DEPARTURES INFO */}
          <article id="departures-info" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Upcoming Group Departure Packages for the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                We operate direct departures from Pokhara every two to three weeks during peak seasons:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Spring departures:</strong> March through May</li>
                <li><strong>Autumn departures:</strong> September through November</li>
                <li><strong>Off-season:</strong> December, January, and February (upon request)</li>
              </ul>
              <p>
                Our Pokhara-based operation manages all logistics locally. We hold Nepal Tourism Operator License #8928-091 and guarantee industry-standard wages for our local guides and porters. Group spots fill fast during peak seasons; booking four to six weeks in advance is recommended.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Group Trek Costs
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does the Khopra Ridge Trek cost in a group?",
                  a: "A fully packaged Khopra Ridge Trek group departure typically costs between $450 and $650 USD per person. This includes permits, accommodation, all meals, a licensed guide, a shared porter, and transport from Pokhara to the trailhead and back."
                },
                {
                  q: "Is group trekking cheaper than private trekking in Nepal?",
                  a: "Yes, significantly. A private Khopra Ridge Trek with equivalent services costs $700–860 USD per person. Group trekking saves $250–400 USD primarily through shared guide fees, shared porter costs, and shared transport."
                },
                {
                  q: "What is included in a shared trekking package?",
                  a: "Most packages include trekking permits (ACAP and TIMS), all accommodation, all meals, a licensed guide, shared porter service, and shared jeep transport. Travel insurance, tips, personal snacks, and lodge extras like WiFi and charging are excluded."
                },
                {
                  q: "Can solo travelers join fixed departure treks?",
                  a: "Yes, and solo travelers benefit most from fixed departures. Instead of bearing the full cost of a private guide and porter alone, solo trekkers contribute only their share of the group's shared expenses — reducing their total trek cost by 35% or more."
                },
                {
                  q: "How much does a porter cost on the Khopra Ridge Trek?",
                  a: "Porters on the Khopra Ridge Trek earn approximately $20–25 USD per day. With the standard ratio of one porter per two trekkers, your share of the porter cost over a six-day trek is roughly $60–75 USD."
                },
                {
                  q: "Are trekking permits included in the package cost?",
                  a: "Yes. The Annapurna Conservation Area Permit (ACAP) and TIMS Card are included in all our group packages. Permit processing is handled by our team before your departure."
                },
                {
                  q: "What hidden costs should I budget for during the trek?",
                  a: "Plan for $100–150 USD in personal spending. This covers WiFi, charging fees, hot showers, extra drinks and snacks, personal medication, and any small purchases at village shops. Budget separately for travel insurance and tips for your guide and porter."
                },
                {
                  q: "Is accommodation shared during group trekking?",
                  a: "Yes. Twin-sharing rooms are standard on community lodge and tea house treks in Nepal. Two trekkers share one room, which keeps accommodation costs low and is consistent across the entire route."
                },
                {
                  q: "How much money can I save by joining a group trek?",
                  a: "Compared to a private trek covering the same services, joining a group departure saves most trekkers $250–400 USD — a reduction of 30–45% driven primarily by shared guide, porter, and transport costs."
                },
                {
                  q: "Are fixed departure treks safe for solo travelers?",
                  a: "Yes. All our group departures are led by a licensed, experienced local guide. Groups are small (four to ten trekkers), which means personalized attention, manageable pacing, and strong collective safety awareness on the trail."
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
              The Khopra Ridge Trek is one of Nepal&apos;s finest mid-range trekking routes — a community-owned circuit through Magar villages, rhododendron forests, and high ridgelines with unobstructed views of Dhaulagiri and the Annapurna massif. It does not have to be expensive.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              A group departure brings your total per-person cost to $450–650 USD — fully inclusive of permits, accommodation, meals, guide, porter, and transport. The savings are real, the quality is comparable, and the shared logistics remove the planning burden from your plate entirely.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Join an Upcoming Group Departure?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Join an upcoming Khopra Ridge Trek group departure and reduce your trekking cost by up to 35%. Our Pokhara-based team handles permits, logistics, accommodation, and safety so you can focus entirely on the trail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Reserve Your Spot Now &rarr;
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
                This group cost review is updated seasonally based on transport tariffs and ACA forest permit rates. NTB licensed operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
