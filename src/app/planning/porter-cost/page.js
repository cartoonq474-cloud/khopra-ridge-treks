import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/porter-cost",
  },
  title: "Porter Cost & Weight Limits in Nepal: Complete Trekking Guide for 2026",
  description: "Learn how much trekking porters cost in Nepal, standard weight limits, shared porter pricing, tipping culture, insurance inclusions, and ethical hiring standards before your Himalayan trek.",
};

export default function Page() {
  const stats = [
    { label: "Daily Wage Range", value: "$20 to $25 USD / day" },
    { label: "Max Weight Limit", value: "15 to 18 kg (33 to 40 lbs)" },
    { label: "Shared Ratio", value: "1 Porter shared between 2 Trekkers" },
    { label: "Tipping Standard", value: "10% to 15% of total wage (Recommended)" }
  ];

  const regionalCosts = [
    { region: "Annapurna Region (including Khopra Ridge)", cost: "$20 – $25 USD" },
    { region: "Everest Region (Khumbu)", cost: "$22 – $28 USD" },
    { region: "Langtang Region", cost: "$18 – $23 USD" },
    { region: "Remote/High Altitude Routes", cost: "$25 – $35 USD" }
  ];

  const privateVsShared = [
    { arrangement: "Private Porter", dailyCost: "$20 – $25 USD", perTrekker: "$20 – $25 USD", allowance: "Up to 15–18 kg" },
    { arrangement: "Shared Porter (2 trekkers)", dailyCost: "$20 – $25 USD", perTrekker: "$10 – $12.50 USD", allowance: "Up to 7.5–9 kg" }
  ];

  const cost3Day = [
    { item: "Daily porter rate (shared, per person)", cost: "$10 – $12.50 USD" },
    { item: "Total porter cost over 3 days", cost: "$30 – $37.50 USD per person" },
    { item: "Tip (10–15% of total wage)", cost: "$6 – $11 USD" },
    { item: "Estimated Total", cost: "$36 – $48 USD per person" }
  ];

  const cost6Day = [
    { item: "Daily porter rate (shared, per person)", cost: "$10 – $12.50 USD" },
    { item: "Total porter cost over 6 days", cost: "$60 – $75 USD per person" },
    { item: "Tip (10–15% of total wage)", cost: "$12 – $22 USD" },
    { item: "Estimated Total", cost: "$72 – $97 USD per person" }
  ];

  const costLonger = [
    { duration: "10-day trek", sharedCost: "$100 – $125 USD", tip: "$20 – $37 USD", total: "$120 – $162 USD" },
    { duration: "14-day trek", sharedCost: "$140 – $175 USD", tip: "$28 – $52 USD", total: "$168 – $227 USD" },
    { duration: "21-day trek", sharedCost: "$210 – $262 USD", tip: "$42 – $78 USD", total: "$252 – $340 USD" }
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
            <span className="text-emerald-400">Porter Cost</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Porter Welfare &amp; Weight Limits
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Porter Cost &amp; Weight Limits
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn how much trekking porters cost in Nepal. Review standard weight limits, shared packages, tipping culture, and ethical hiring standards.
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
              <a href="#how-much" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Porter Cost in Nepal
              </a>
              <a href="#weight-limits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Standard Weight Limits
              </a>
              <a href="#whats-included" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is Included?
              </a>
              <a href="#private-vs-shared" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private vs Shared Cost
              </a>
              <a href="#multi-day-budgets" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Multi-Day Porter Budgets
              </a>
              <a href="#khopra-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra Trek Breakdown
              </a>
              <a href="#porter-vs-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Porter vs Guide Roles
              </a>
              <a href="#tipping" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Tipping Culture
              </a>
              <a href="#ethical-welfare" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Ethical Welfare Standards
              </a>
              <a href="#how-to-hire" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hiring Responsibly
              </a>
              <a href="#common-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Mistakes
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
                Inquire Porter Services
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Porter Cost &amp; Weight Limits in Nepal Trekking
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Hiring a local porter is one of the smartest decisions a trekker can make in Nepal. It lightens your pack, protects your knees on steep mountain trails, and directly supports local employment in communities that depend on trekking for their income.
              </p>
              <p>
                But before you hire, you need clear numbers, realistic expectations, and an understanding of what ethical porter hiring actually looks like on the ground.
              </p>
              <p>
                Here is what you need to know: trekking porters in Nepal typically cost between $20 and $25 USD per day. The standard maximum carrying weight is 15 to 18 kilograms. Two trekkers can share one porter, splitting both the load and the cost. And yes — food, accommodation, and mountain insurance are included in a properly arranged porter package.
              </p>
              <p>
                This guide covers all of it: daily rates, weight limits, what is included in porter fees, shared vs private arrangements, route-specific costs, tipping culture, ethical standards, and how to hire responsibly. By the time you finish reading, you will know exactly what to budget and what to expect.
              </p>
              <p>
                Planning your Khopra Ridge trek? Our local team based in Pokhara arranges licensed, insured, and ethically supported porter services as part of every trekking package.
              </p>
            </div>
          </article>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 shadow-sm">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
                <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* SECTION: PORTER COST IN NEPAL */}
          <article id="how-much" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Does a Trekking Porter Cost in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The cost of hiring a porter in Nepal is one of the most common questions we hear. The standard daily porter wage in Nepal ranges from $20 to $25 USD per day. This is the going rate for a licensed, insured porter arranged through a reputable local trekking agency.
              </p>
              <p>
                This daily fee typically covers the porter&apos;s wage, their food and accommodation along the trail, and basic mountain insurance. It does not include tips, which are customary and expected at the end of the trek.
              </p>
              <p>
                For trekkers on a budget, sharing a porter between two people reduces the cost to roughly $10 to $12.50 USD per person per day — one of the best cost-saving strategies available for multi-day treks.
              </p>
              <p>
                <strong>Why Porter Prices Vary Between Treks:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>Trek difficulty and altitude:</strong> Porters on high-altitude routes like Khopra Ridge or treks approaching Khayer Lake (4,500m+) carry loads through more demanding terrain, reflecting in higher rates.
                </li>
                <li>
                  <strong>Peak season demand:</strong> Peak season demand (Oct–Nov, Mar–Apr) can push prices slightly higher as experienced porters become sought after.
                </li>
                <li>
                  <strong>Agency service quality:</strong> Agencies following ethical hiring standards — providing insurance, proper clothing, and safe lodging — charge more. This directly impacts porter welfare.
                </li>
                <li>
                  <strong>Trek duration:</strong> Longer routes may negotiate slightly different daily structures.
                </li>
              </ul>

              <p>
                <strong>Average Porter Charges by Trekking Region:</strong>
              </p>

              {/* TABLE: Regional Costs */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Trekking Region</th>
                      <th className="px-6 py-4">Estimated Porter Cost Per Day</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {regionalCosts.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.region}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: STANDARD WEIGHT LIMITS */}
          <article id="weight-limits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Weight Limit for Trekking Porters?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Weight limits for porters in Nepal are not arbitrary. They exist to protect the physical health of workers who carry loads across high-altitude mountain terrain every single day.
              </p>
              <p>
                <strong>Standard Carrying Capacity:</strong> The internationally recognised maximum carrying weight for a trekking porter in Nepal is 15 to 18 kilograms (33 to 40 pounds). This is the limit recognised by the International Porter Protection Group (IPPG) and adopted by responsible operators.
              </p>
              <p>
                <strong>Weight Limit Per Trekker When Sharing:</strong> When two trekkers share one porter, each person may place 7.5 to 9 kilograms of gear into a shared duffel bag.
              </p>
              <p>
                You carry your daypack yourself — typically 3 to 5 kg containing water, snacks, layers, rain gear, and camera. Your heavier items go into the shared duffel that the porter carries.
              </p>
              <p>
                <strong>Why Ethical Weight Limits Matter:</strong> Porters are local workers from farming communities in the Annapurna foothills supporting their families. An injury sustained from overloading does not come with sick pay, medical insurance, or a safety net. We enforce the IPPG 18kg maximum strictly on every trek we operate.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT IS INCLUDED */}
          <article id="whats-included" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Included in Porter Service Cost?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Porter Daily Wage:</strong> The core daily wage ($20–25 USD) is paid fairly by reputable agencies, protecting porters from arbitrary deductions.
                </li>
                <li>
                  <strong>Food and Accommodation on the Trail:</strong> Safe meals and teahouse lodging are standard. Porters stay in the same teahouses as groups, sharing dormitory rooms and eating local trail food.
                </li>
                <li>
                  <strong>Porter Insurance and Emergency Coverage:</strong> Active rescue insurance covering helicopter evacuations is mandatory. At high elevations near Khopra Ridge Camp (3,660m) and Khayer Lake (4,500m), altitude sickness can affect anyone. Without insurance, helicopter evacuations can cost $3,000–$10,000 USD out of pocket.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRIVATE VS SHARED COST */}
          <article id="private-vs-shared" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Porter vs Shared Porter Cost Comparison
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The choice between a private or shared porter arrangement is primarily a comfort and budget decision:
              </p>

              {/* TABLE: Private vs Shared */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Arrangement</th>
                      <th className="px-6 py-4">Daily Porter Cost</th>
                      <th className="px-6 py-4">Cost Per Trekker Per Day</th>
                      <th className="px-6 py-4">Carrying Allowance Per Trekker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {privateVsShared.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.arrangement}</td>
                        <td className="px-6 py-4 text-stone-600">{item.dailyCost}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.perTrekker}</td>
                        <td className="px-6 py-4 text-stone-600">{item.allowance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Shared Porter Benefits:</strong> Sharing a porter splits the load and daily rates between two hikers. This works comfortably for most international trekkers and reduces overall trek expenses by $60 to $100 USD per person.
              </p>
            </div>
          </article>

          {/* SECTION: MULTI-DAY PORTER BUDGETS */}
          <article id="multi-day-budgets" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Porter Cost for Multi-Day Treks in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 3-Day Cost */}
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <h4 className="font-extrabold text-stone-900 text-sm mb-4">Estimated 3-Day Porter Cost (Shared)</h4>
                  <ul className="space-y-2 text-xs divide-y divide-stone-100 text-stone-600">
                    {cost3Day.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-2">
                        <span>{item.item}</span>
                        <span className="font-bold text-emerald-600">{item.cost}</span>
                      </div>
                    ))}
                  </ul>
                </div>

                {/* 6-Day Cost */}
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <h4 className="font-extrabold text-stone-900 text-sm mb-4">Estimated 6-Day Porter Cost (Shared)</h4>
                  <ul className="space-y-2 text-xs divide-y divide-stone-100 text-stone-600">
                    {cost6Day.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-2">
                        <span>{item.item}</span>
                        <span className="font-bold text-emerald-600">{item.cost}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 font-bold text-stone-900 text-sm">Estimated Porter Cost for Longer Himalayan Treks (Shared):</p>

              {/* TABLE: Longer Costs */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Trek Duration</th>
                      <th className="px-6 py-4">Total Porter Cost (Shared, Per Person)</th>
                      <th className="px-6 py-4">Tip Budget</th>
                      <th className="px-6 py-4">Estimated Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {costLonger.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.duration}</td>
                        <td className="px-6 py-4 text-stone-600">{item.sharedCost}</td>
                        <td className="px-6 py-4 text-stone-600">{item.tip}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: KHOPRA TREK BREAKDOWN */}
          <article id="khopra-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Porter Cost Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The standard Khopra Ridge Trek runs 6 days, starting and ending in Pokhara and passing through Ghandruk, Tadapani, Bayeli Kharka, Chhistibung, and Khopra Ridge Camp before descending through Swanta Village.
              </p>
              <p>
                At the shared rate, the porter cost per trekker breaks down as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Daily shared porter rate (per person):</strong> $10 – $12.50 USD</li>
                <li><strong>Trek duration:</strong> 6 days</li>
                <li><strong>Total porter wage (shared, per person):</strong> $60 – $75 USD</li>
                <li><strong>Porter tip (end of trek):</strong> $12 – $22 USD</li>
                <li><strong>Total estimated porter budget:</strong> $72 – $97 USD per person</li>
              </ul>
              <p>
                We recommend shared porter arrangements for this route as standard. The trail is well-established, the teahouses are comfortable, and the elevation profile — while challenging — does not require specialised gear that would push individual luggage beyond 9 kg.
              </p>
            </div>
          </article>

          {/* SECTION: PORTER VS GUIDE ROLES */}
          <article id="porter-vs-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Porter vs Trekking Guide Cost Comparison
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What a Porter Does:</strong> Carry gear. They transport the shared duffel bag from one teahouse to the next along the established trekking route. Porters are not guides; they do not navigate, manage emergency situations, or communicate in fluent English as a default.
              </p>
              <p>
                <strong>What a Guide Does:</strong> Manage the entire trekking experience. They navigate, monitor group health, handle local logistics, translate, provide cultural context, and coordinate emergency responses. Guide fees range from $30 to $50 USD per day.
              </p>
              <p>
                <strong>Should You Hire a Porter, Guide, or Both?</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Porter only ($10–$12.50 shared):</strong> Best for trekkers with strong route knowledge and local language comfort.</li>
                <li><strong>Guide only ($30–$50):</strong> Best for trekkers who pack light but want safety and navigation support.</li>
                <li><strong>Guide + Porter ($40–$62.50 shared porter):</strong> Best for most international trekkers — the recommended setup.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: TIPPING CULTURE */}
          <article id="tipping" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Porter Tipping Culture in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Tipping is expected in Nepal&apos;s trekking industry. It is a meaningful part of a porter&apos;s total income and a well-established custom that every trekker should budget for.
              </p>
              <p>
                <strong>Standard Porter Tipping Percentage:</strong> The standard recommendation is 10 to 15% of total porter wages earned over the course of the trek. For a 6-day Khopra Ridge trek, this works out to approximately $12 to $22 USD total per porter.
              </p>
              <p>
                <strong>When and How To Tip:</strong> Hand cash tips directly to the porter on the final day of the trek before the group returns to Pokhara. Sincere verbal acknowledgment and a handshake alongside the tip are highly appreciated.
              </p>
            </div>
          </article>

          {/* SECTION: ETHICAL WELFARE STANDARDS */}
          <article id="ethical-welfare" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ethical Porter Welfare Standards We Follow
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Nepal&apos;s trekking industry has a history of porter welfare abuses: overloading, inadequate clothing, poor accommodation, and no insurance. This is why we follow International Porter Protection Group (IPPG) guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Fair Wage Standards:</strong> We pay porters the agreed daily wage in full before the trek begins, meeting or exceeding IPPG recommended minimums.
                </li>
                <li>
                  <strong>Safe Load Management:</strong> No porter carries more than 18 kg total. Duffel bag weights are verified before departure.
                </li>
                <li>
                  <strong>Clothing and Equipment Standards:</strong> Every porter receives a warm windproof jacket, proper trekking boots, rain gear, and high-altitude sunglasses.
                </li>
                <li>
                  <strong>Insurance and Emergency Protection:</strong> Every porter carries active mountain rescue insurance covering helicopter evacuations if required.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: HOW TO HIRE */}
          <article id="how-to-hire" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Hire a Licensed Trekking Porter in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Hiring Through a Local Trekking Agency (Recommended):</strong> Arranging porter support through a registered trekking agency guarantees verified identities, active mountain rescue insurance, fair wage structures, and replacement backup if illness occurs.
              </p>
              <p>
                <strong>Independent Porter Hiring Risks:</strong> Arranging a porter independently on local streets can seem cheaper, but carries significant risks: no insurance coverage, no load accountability, no backup support, and no welfare monitoring.
              </p>
              <p>
                Our Pokhara-based team holds Nepal Tourism Operator License #8928-091, ensuring all porters we engage are pre-vetted, insured, and ethically supported.
              </p>
            </div>
          </article>

          {/* SECTION: COMMON MISTAKES */}
          <article id="common-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Mistakes Trekkers Make When Hiring Porters
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Overpacking:</strong> Arriving at the trailhead with bags exceeding 15 kg. Pack only what is needed; leave extra gear in Pokhara.</li>
                <li><strong>Choosing the Cheapest Rate:</strong> Budgeting at the lowest street rate usually means porters working without insurance or fair wages.</li>
                <li><strong>Ignoring Insurance:</strong> Failing to verify active rescue coverage before heading above 3,000m.</li>
                <li><strong>Failing to Follow Ethical Standards:</strong> Overloading bags and neglecting tip allocations at the end of the trek.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Porter Costs
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does a porter cost in Nepal per day?",
                  a: "Trekking porters in Nepal typically cost between $20 and $25 USD per day when arranged through a licensed trekking agency. This rate usually includes the porter's daily wage, food and accommodation on the trail, and mountain rescue insurance. If two trekkers share one porter, each person pays approximately $10 to $12.50 USD per day."
                },
                {
                  q: "What is the maximum weight a porter can carry?",
                  a: "The internationally recognised maximum carrying weight for a trekking porter in Nepal is 15 to 18 kilograms (33 to 40 pounds). This is the standard enforced by the International Porter Protection Group (IPPG) and adopted by responsible trekking agencies."
                },
                {
                  q: "Can two trekkers share one porter?",
                  a: "Yes. Sharing a porter between two trekkers is standard practice on Nepal trekking routes and is the arrangement we recommend for most Khopra Ridge itineraries. Each trekker places up to 7.5–9 kg of gear into a shared duffel bag that the porter carries."
                },
                {
                  q: "Does porter cost include accommodation and meals?",
                  a: "With a reputable trekking agency, yes. A properly arranged porter package includes the porter's meals and teahouse accommodation along the full trekking route. Porters who are not fed and sheltered properly cannot perform safely in mountain conditions."
                },
                {
                  q: "Should I tip a porter in Nepal?",
                  a: "Yes. Tipping is expected and appropriate. The standard recommendation is 10 to 15% of the total porter wages paid over the course of the trek. For a 6-day trek at the shared rate, this works out to approximately $12 to $22 USD per porter, paid in cash."
                },
                {
                  q: "Can I hire a porter independently in Nepal?",
                  a: "It is possible to hire a porter independently at trailheads or in villages like Ghandruk. However, independent hire typically comes without insurance coverage, without enforceable weight limits, and without wage accountability."
                },
                {
                  q: "Is porter insurance included in trekking packages?",
                  a: "With registered trekking agencies following IPPG standards, yes. Mountain rescue insurance covering helicopter evacuation should be included in any properly arranged porter package."
                },
                {
                  q: "What is the difference between a porter and a guide?",
                  a: "A porter carries gear. A guide manages the trekking experience — navigation, safety monitoring, local logistics, altitude awareness, and emergency response. Guides in Nepal typically cost $30 to $50 USD per day depending on experience and route."
                },
                {
                  q: "Is hiring a porter worth it for the Khopra Ridge trek?",
                  a: "For the majority of trekkers, yes. Carrying a heavy pack at altitude significantly increases fatigue, slows pace, and reduces enjoyment of the high sections. At $10 to $12.50 USD per person per day for a shared porter, it is one of the best value investments."
                },
                {
                  q: "How much does a porter cost for a 7-day trek in Nepal?",
                  a: "At the shared rate of $10 to $12.50 USD per person per day, a 7-day trek totals approximately $70 to $87.50 USD per person for porter wages. Adding a recommended tip of 10 to 15% brings the total estimated porter budget to roughly $80 to $100 USD per person."
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
              Hiring a trekking porter in Nepal is one of the most practical, affordable, and locally impactful decisions you can make before heading into the Annapurna hills.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The weight limit is non-negotiable at 15 to 18 kilograms maximum, the tipping standard is 10 to 15% of total wages, and ethical hiring — through a licensed agency that enforces welfare standards, pays fair wages, and provides proper equipment and insurance — is the standard baseline.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek With Ethical Porter Support
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Contact our local team in Pokhara to arrange a licensed, insured trekking package with pre-arranged porter service. We hold Nepal Tourism Operator License #8928-091 and operate every trek in compliance with IPPG porter welfare standards.
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
                This porter pricing and load advisory is updated in accordance with the International Porter Protection Group (IPPG) standards. NTB licensed operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
