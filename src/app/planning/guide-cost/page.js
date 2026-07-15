import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/guide-cost",
  },
  title: "Trekking Guide Cost in Nepal: Daily Rates, Payouts & Value on the Trail",
  description: "Wondering how much a trekking guide costs in Nepal? Get a full breakdown of daily rates, guide wages, what your fee actually covers, tipping standards, and whether hiring a licensed guide is worth the price.",
};

export default function Page() {
  const guideStats = [
    { label: "Daily Wage Range", value: "$25 to $35 USD / day" },
    { label: "Permit Clearance", value: "Registered under TAAN / NTB" },
    { label: "First-Aid Training", value: "Wilderness Medical Responder Certified" },
    { label: "Tipping Standard", value: "15% to 20% of total wage (Recommended)" }
  ];

  const guidePricesBySeason = [
    { season: "Autumn (Oct–Nov)", price: "$30–35 USD" },
    { season: "Spring (Mar–Apr)", price: "$28–33 USD" },
    { season: "Winter (Dec–Feb)", price: "$23–28 USD" },
    { season: "Monsoon (Jun–Sep)", price: "$20–25 USD" }
  ];

  const privateVsGroupValues = [
    { option: "Private (solo)", rate: "$30", totalCost: "$210" },
    { option: "Private (couple, split)", rate: "$30", totalCost: "$105 each" },
    { option: "Small group (4 people)", rate: "$30", totalCost: "$52.50 each" },
    { option: "Organized group departure", rate: "$30", totalCost: "~$35–45 each" }
  ];

  const guidePorterCombinedPackage = [
    { role: "Guide only", rate: "$25–35" },
    { role: "Porter only", rate: "$18–22" },
    { role: "Guide + Porter (combined)", rate: "$45–55" }
  ];

  const wageDistribution = [
    { cost: "Guide's take-home salary", share: "$15–22" },
    { cost: "Food and teahouse accommodation", share: "$8–12" },
    { cost: "Insurance premium contribution", share: "$1–2" },
    { cost: "Agency administration fee", share: "$3–6" }
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
            <span className="text-emerald-400">Guide Cost</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Guide Wages &amp; Professional Standards
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Trekking Guide Cost in Nepal
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Daily rates, payouts, and professional value on the trail. Get a complete breakdown of wages, tipping standards, and licensing details.
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
                Guide Rates &amp; Wages
              </a>
              <a href="#what-covers" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What the Fee Covers
              </a>
              <a href="#price-differences" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Prices Vary
              </a>
              <a href="#licensed-vs-freelance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Licensed vs Freelance
              </a>
              <a href="#private-vs-group" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private vs Group Sharing
              </a>
              <a href="#guide-porter-packages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Porter-Guide Combinations
              </a>
              <a href="#distribution" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where the Money Goes
              </a>
              <a href="#is-it-worth" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is a Guide Worth It?
              </a>
              <a href="#tipping" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Tipping Standards
              </a>
              <a href="#responsible-tourism" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Responsible Travel Wages
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
                Inquire Guide Services
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Guide Cost in Nepal: Daily Rates, Payouts &amp; Value on the Trail
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Hiring a trekking guide in Nepal typically costs between $25 and $35 USD per day. But that number alone tells you almost nothing. It doesn&apos;t explain where the money actually goes, why pricing shifts depending on the route and season, or whether paying for a guide genuinely improves your trekking experience.
              </p>
              <p>
                Most trekkers approach this decision backwards — they look at the daily rate, assume it&apos;s self-explanatory, and either book cheap or skip the guide altogether. That choice often leads to frustration on the trail: wrong turns, missed permits, altitude risks handled poorly, and no one to help when something goes wrong.
              </p>
              <p>
                This guide gives you the full picture. We break down exactly what the guide fee covers, how guide salaries and agency fees are structured, what separates a licensed guide from a freelance one, and whether paying for a guide genuinely improves your chances of a safe, successful trek.
              </p>
            </div>
          </article>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 shadow-sm">
            {guideStats.map((stat, i) => (
              <div key={i}>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
                <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* SECTION: HOW MUCH */}
          <article id="how-much" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Does a Trekking Guide Cost in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Average Daily Trekking Guide Rate:</strong> The standard daily rate for a licensed, English-speaking guide in Nepal ranges from $25 to $35 USD per day. This is the widely accepted industry benchmark set by the Trekking Agencies&apos; Association of Nepal (TAAN) and the Nepal Tourism Board (NTB).
              </p>
              <p>
                Within that range, the actual figure depends on the guide&apos;s experience level, route complexity, and the trekking agency managing the booking. A senior guide commands $32–35 or more.
              </p>
              <p>
                <strong>Trekking Guide Prices by Season:</strong> Demand peaks in autumn (October–November) and spring (March–April), which pushes daily rates toward the higher end of the range:
              </p>

              {/* TABLE: Season Prices */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Season</th>
                      <th className="px-6 py-4">Typical Daily Guide Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {guidePricesBySeason.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.season}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>How Route Difficulty Changes Guide Pricing:</strong> Popular, well-marked routes like the Poon Hill circuit sit at the standard rate. More remote or technically demanding routes — including sections toward Khayer Lake or higher reaches of the Annapurna Conservation Area — carry a premium. Remote routes require more physical endurance, specialized route knowledge, stronger emergency response skills, and valid altitude insurance above 4,500m.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT COVERS */}
          <article id="what-covers" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Does Your Trekking Guide Fee Actually Cover?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                When you pay $30 a day for a guide, that amount covers multiple operational expenses:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Daily Guide Wage and Salary:</strong> The guide&apos;s actual take-home wage typically falls between $15 and $22 USD per day, depending on commission structures. The remainder covers operational overheads.
                </li>
                <li>
                  <strong>Food and Teahouse Accommodation:</strong> Trail food and accommodation typically cost $8–12 USD per day per person, which is bundled in the guide fee. Your guide stays in the same lodges and eats at the same teahouses.
                </li>
                <li>
                  <strong>Insurance and Safety Coverage:</strong> Licensed guides carry insurance covering accidents, injury, and emergency evacuation. Unlicensed guides almost always lack this coverage.
                </li>
                <li>
                  <strong>Agency Fees and Administrative Costs:</strong> Registered agencies retain 15–25% of the fee to cover administration, permit coordination (ACAP/TIMS Card), and emergency backing.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: PRICE DIFFERENCES */}
          <article id="price-differences" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Trekking Guide Prices Are Not Always the Same
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Experience Level and Professional Training:</strong> Guides with wilderness first aid certifications and multiple seasons of experience command a premium. On higher-altitude treks, their experience is crucial.
              </p>
              <p>
                <strong>Language Skills and Communication Ability:</strong> Basic English gets you directions. Strong English or fluency in German/French gets you safety briefings, altitude explanations, and cultural interpretation, justifying higher rates.
              </p>
              <p>
                <strong>Route Complexity:</strong> Remote routes above 4,000m require specialized knowledge of acclimatization protocols and early signs of Acute Mountain Sickness (AMS), warranting a higher fee.
              </p>
            </div>
          </article>

          {/* SECTION: LICENSED VS FREELANCE */}
          <article id="licensed-vs-freelance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Licensed Trekking Guide vs Freelance Guide Cost Comparison
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What Makes a Licensed Guide Different:</strong> Licensed guides have completed formal training accredited by the Nepal Tourism Board and carry government-issued ID cards. They are trained in altitude safety and emergency response.
              </p>
              <p>
                <strong>Cost and Risk Parameters:</strong> A licensed guide at $30/day is insured, trained, and accountable. A freelance guide at $15/day carries no insurance or safety safeguards. If a medical crisis occurs, the lack of backing poses genuine safety and financial risks.
              </p>
            </div>
          </article>

          {/* SECTION: PRIVATE VS GROUP */}
          <article id="private-vs-group" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Private Guide Cost vs Group Guide Cost
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Private Guide:</strong> Solo or couple travelers bear the full daily cost, giving complete flexibility in schedule and pacing.
              </p>
              <p>
                <strong>Shared Group Guide:</strong> Shared departures split the daily fee across multiple trekkers, reducing costs significantly.
              </p>

              {/* TABLE: Private vs Group */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Option</th>
                      <th className="px-6 py-4">Guide Daily Rate</th>
                      <th className="px-6 py-4">7-Day Cost Per Person</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {privateVsGroupValues.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.option}</td>
                        <td className="px-6 py-4 text-stone-600">{item.rate}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.totalCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: GUIDE PORTER PACKAGES */}
          <article id="guide-porter-packages" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Guide and Porter Package Cost in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Compare daily service rates on the trail:
              </p>

              {/* TABLE: Guide Porter combined */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Daily Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {guidePorterCombinedPackage.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.role}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Guide &amp; Porter Combination:</strong> Porters carry 20–25kg and earn $18–22 per day. The combination package of guide + porter at $45–55 per day total is the most practical choice for loaded multi-day trekking.
              </p>
            </div>
          </article>

          {/* SECTION: DISTRIBUTION */}
          <article id="distribution" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Does the Money You Pay Actually Go?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding where your guide fee is distributed is important. Here is a typical breakdown for a professional booking:
              </p>

              {/* TABLE: Distribution */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Cost Component</th>
                      <th className="px-6 py-4">Approximate Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {wageDistribution.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.cost}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Fair Guide Wages:</strong> Mountain communities depend heavily on trekking income. When travelers push prices below standard rates, they directly reduce wages for local families. Paying standard certified rates ensures fair, ethical compensation.
              </p>
            </div>
          </article>

          {/* SECTION: IS IT WORTH */}
          <article id="is-it-worth" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Hiring a Trekking Guide Actually Worth the Cost?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Route Navigation &amp; Trail Safety:</strong> Even on standard routes, missing signage or landslides can disrupt navigation. Guides ensure you stay on path.
                </li>
                <li>
                  <strong>Emergency Response Coordination:</strong> Guides are trained in wilderness first aid and coordinate helicopter rescues immediately if a medical crisis arises.
                </li>
                <li>
                  <strong>Altitude and Acclimatization Monitoring:</strong> Guides track early warning signs of AMS (headache, loss of coordination) and manage ascent profiles safely.
                </li>
                <li>
                  <strong>Cultural Knowledge:</strong> Guides open doors to local Magar and Gurung village cultures, explaining local customs and teahouse operations.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: TIPPING */}
          <article id="tipping" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Guide Tipping Standards in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Recommended Tipping Percentage:</strong> The industry standard is 15–20% of the total guide wages. For a 7-day private booking ($210 wages), a tip of $31–$42 USD is typical.
              </p>
              <p>
                <strong>How to Tip:</strong> Hand cash tips directly to your guide in an envelope at the end of the final trekking day. On group departures, tips are commonly pooled and presented collectively.
              </p>
            </div>
          </article>

          {/* SECTION: RESPONSIBLE TOURISM */}
          <article id="responsible-tourism" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Paying Fair Guide Wages Supports Responsible Tourism
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekking wages are primary income sources for mountain families in the Annapurna Conservation Area. Booking through registered agencies that guarantee fair pay, provide insurance, and coordinate with community lodges cycles revenue directly back into local schools, clinics, and infrastructure.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Guide Costs
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does a trekking guide cost in Nepal per day?",
                  a: "A licensed, English-speaking trekking guide in Nepal costs between $25 and $35 USD per day. This rate covers the guide's salary, food, accommodation on the trail, insurance contributions, and agency administrative fees."
                },
                {
                  q: "Is hiring a trekking guide mandatory in Nepal?",
                  a: "In most of the Annapurna region, hiring a guide is not legally mandatory for independent trekkers. However, certain restricted areas of Nepal do require a licensed guide by law. Even where it's optional, hiring a guide is highly recommended for safety and logistics."
                },
                {
                  q: "What is included in trekking guide fees?",
                  a: "The guide fee covers the guide's daily wage, trail food, teahouse accommodation, trekking insurance, and agency administration costs. Permits (TIMS Card and ACAP Permit) are typically billed separately."
                },
                {
                  q: "How much should I tip a trekking guide in Nepal?",
                  a: "The standard tip recommendation is 15–20% of the total guide wage for the trek. On a 7-day guide booking at $30/day, that means a tip of $31–42 USD, presented in cash."
                },
                {
                  q: "Can I hire a guide without a trekking agency?",
                  a: "Technically yes, but independent guides lack agency backup: they often carry no professional insurance, have no permit processing capability, and offer no accountability if issues arise."
                },
                {
                  q: "Is a licensed trekking guide safer than a freelance guide?",
                  a: "Yes. Licensed guides undergo formal training in navigation, first aid, altitude safety, and emergency response accredited by the Nepal Tourism Board, and carry valid accident insurance."
                },
                {
                  q: "What is the difference between a guide and a porter?",
                  a: "A guide manages navigation, safety, permits, and communication. A porter carries your main bag (up to 20-25kg). Both roles are distinct and can be hired as a combined package."
                },
                {
                  q: "How much does a guide and porter package cost?",
                  a: "A guide and porter combined package typically runs $45–55 USD per day total: $25–35 for the guide and $18–22 for the porter, including their food and accommodation."
                },
                {
                  q: "Do trekking guides carry first aid equipment?",
                  a: "Licensed guides carry a basic first aid kit and are trained in Wilderness Medical Responder standards. They also coordinate emergency helicopter rescues directly."
                },
                {
                  q: "Is hiring a trekking guide worth the money?",
                  a: "Yes. Evaluated against the safety and logistical risks of navigating high-altitude trails, remote weather changes, and medical emergencies alone, the guide fee is highly cost-effective."
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
              Trekking guide costs in Nepal are often misunderstood. The $25–35 daily rate isn&apos;t just a wage — it&apos;s the cost of a trained, insured, licensed professional who takes responsibility for your safety, navigation, and trail experience from the first day to the last.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Choose a licensed guide, tip fairly, and book through a registered agency. That combination delivers better safety, a better trail experience, and direct support for the local mountain communities that make these routes possible.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Trek With Licensed Local Guides
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a licensed Nepal trekking operator based in Pokhara (Nepal Tourism Operator License #8928-091), running the Khopra Ridge circuit with experienced, locally-based licensed guides. All our guides are certified, insured, and active on the trail year-round.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Our Team to Discuss Guided Treks &rarr;
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
                This pricing guide is compiled in accordance with TAAN guide wage guidelines and Nepal Tourism Board protocols. Pokhara safety operations office. Operator license #8928-091. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
