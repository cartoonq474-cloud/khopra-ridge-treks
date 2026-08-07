import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Budget Travelers: Complete Cost Guide & Money-Saving Tips",
  description:
    "Planning the Khopra Ridge Trek on a budget? Get real cost breakdowns, permit fees, transport tips, and money-saving strategies from local trekking experts.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-for-budget-travelers",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Budget Travelers: Complete Cost Guide & Money-Saving Tips",
    description:
      "Planning the Khopra Ridge Trek on a budget? Get real cost breakdowns, permit fees, transport tips, and money-saving strategies from local trekking experts.",
    url: "https://khopraridgetrek.com/planning/khopra-for-budget-travelers",
    type: "article",
  },
};

export default function KhopraForBudgetTravelersPage() {
  const quickStats = [
    { label: "Independent Budget", value: "$15–$25 / Day (On-Trail Spend)" },
    { label: "Guided / Mid-Range Budget", value: "$35–$55 / Day (With Guide/Porter)" },
    { label: "Flight Requirement", value: "$0 (Road Access from Pokhara)" },
    { label: "Top Value Meal", value: "Dal Bhat (Free Rice/Lentil Refills)" },
  ];

  const costBreakdownRows = [
    { category: "ACAP Permit", estimate: "$25 – $30", notes: "Annapurna Conservation Area Permit (Issued in Pokhara/KTM)." },
    { category: "TIMS Card", estimate: "$10 – $20", notes: "Trekkers' Information Management System registration." },
    { category: "KTM – Pokhara Transport", estimate: "$15 – $40", notes: "Round-trip tourist bus or local bus option." },
    { category: "Pokhara – Trailhead Transport", estimate: "$15 – $30", notes: "Round-trip shared local bus or shared jeep to Kimche/Nayapul." },
    { category: "Accommodation (5–7 Nights)", estimate: "$0 – $35", notes: "Nominal room rates when eating all meals at the community lodge." },
    { category: "Food & Meals (5–7 Days)", estimate: "$70 – $140", notes: "Dal bhat, pancakes, vegetable noodles & hot tea." },
    { category: "Hidden Costs", estimate: "$10 – $25", notes: "Solar charging, Wi-Fi, hot showers & toilet paper." },
    { category: "Emergency Buffer", estimate: "$30 – $50", notes: "Recommended cash cushion carried in Nepalese Rupees." },
  ];

  const moneySavingTips = [
    { title: "1. Take Shared Local Transport", desc: "Private jeeps to Kimche cost $60-$70. Instead, take a local bus from Pokhara Baglung Bus Park to Nayapul ($3) and a shared local jeep to Kimche ($5) to save significantly." },
    { title: "2. Carry Water Purification", desc: "Bottled water costs $1-$3 per bottle at altitude. Bringing chlorine tablets or a LifeStraw filter bottle provides free water from clean village taps." },
    { title: "3. Eat Dal Bhat for Fuel", desc: "Dal bhat (rice, lentil soup, curry, pickles) comes with unlimited free refills of rice and soup, offering the best calorie-to-cost ratio on the trail." },
    { title: "4. Buy Snacks & Toiletries in Pokhara", desc: "Trail shops markup toilet paper, snacks, and batteries by 200%. Buy your supplies at Lakeside supermarkets before heading to the trailhead." },
  ];

  const faqs = [
    {
      q: "How much does the Khopra Ridge Trek cost?",
      a: "A budget independent trekker spends roughly $100–$175 on-trail over 5 to 7 days, plus permits ($35–$50) and transport ($30–$70). Guided or mid-range trips typically cost $35–$55/day overall.",
    },
    {
      q: "Can I do the Khopra Ridge Trek without a guide?",
      a: "Yes. The trail is well-marked and manageable for independent trekkers with good navigation apps. However, hiring a local guide or porter-guide adds safety and supports the local community.",
    },
    {
      q: "Is the Khopra Ridge Trek cheaper than Annapurna Base Camp?",
      a: "Generally, yes. Lower trekker volume keeps community lodge room and meal prices lower, and there are fewer commercial markups compared to the ABC trail.",
    },
    {
      q: "What permits do I need for the Khopra Ridge Trek?",
      a: "You need an ACAP permit (Annapurna Conservation Area Permit) and a TIMS card. Both can be issued at the Nepal Tourism Board office in Pokhara or Kathmandu.",
    },
    {
      q: "How much money should I carry on the trek?",
      a: "We recommend carrying at least 20,000 to 30,000 Nepalese Rupees in cash per person. There are zero ATMs past Pokhara, so all trail expenses must be paid in cash.",
    },
    {
      q: "Are there ATMs along the Khopra Ridge route?",
      a: "No. Pokhara is the last location with working ATMs. Always withdraw your complete trekking cash before taking transport to the trailhead.",
    },
    {
      q: "What is the cheapest way to get from Pokhara to the Khopra trailhead?",
      a: "Taking a local bus to Nayapul or a shared jeep to Kimche/Ghandruk is the most budget-friendly transport option, costing roughly $5 to $8 per seat.",
    },
    {
      q: "Is Khayer Lake worth the extra cost?",
      a: "For active budget travelers, yes — adding 1-2 days for Khayer Lake (4,660m) costs very little extra in daily food/lodging while delivering high-altitude glacial views.",
    },
    {
      q: "Can I rent gear in Pokhara instead of buying?",
      a: "Yes. Pokhara has dozens of gear shops where you can rent sleeping bags ($1–$2/day), down jackets ($1–$2/day), and trekking poles ($1/day).",
    },
    {
      q: "What hidden costs should I expect on the trail?",
      a: "Expect small fees for device charging ($1–$2/hr), Wi-Fi ($2–$3/day), hot solar showers ($2–$3), and extra hot drinking water at high lodges.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/planning/khopra-loop-trek" className="hover:text-emerald-400 transition">Planning Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra for Budget Travelers</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Budget &amp; Cost Control Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Budget Travelers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete cost guide &amp; money-saving tips. Real expense breakdowns, permit fees, shared transport advice, and community lodge budgeting.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                💰
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Honest Local Cost Transparency</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We offer transparent, budget-friendly guided departures and support independent backpackers with permit &amp; transport logistics.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you have been comparing prices for Everest Base Camp or Annapurna Base Camp and wondering whether Himalayan trekking is out of reach for a modest budget, we have good news. The Khopra Ridge Trek delivers world-class mountain views (Dhaulagiri, Annapurna South, Nilgiri) at a fraction of the cost.
              </p>
              <p>
                Because you reach the trailhead entirely by road from Pokhara, you eliminate expensive Lukla mountain flights. Community co-op lodges along the trail keep room and food pricing fair and grounded in local economics.
              </p>
            </div>

            {/* Section 1: Estimated Cost Breakdown Table */}
            <div id="cost-breakdown" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Complete Khopra Trek Budget Breakdown
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Budget Category</th>
                      <th className="py-4 px-4 sm:px-6">Estimated Cost (USD)</th>
                      <th className="py-4 px-4 sm:px-6">Money-Saving Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {costBreakdownRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800">{row.estimate}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Top Money-Saving Strategies */}
            <div id="saving-tips" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top 4 Money-Saving Strategies on the Trail
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {moneySavingTips.map((tip, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-lg">{tip.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Fair Budget Packages
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge on Your Budget
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Need help arranging permits, shared jeeps, or hiring a porter-guide? Contact local Pokhara team <strong>EMD Treks</strong> (NTB License #8928-091) for honest, budget-friendly advice.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Get Budget Trek Advice
                  </Link>
                  <Link
                    href="/planning/khopra-trek-cost"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Use Trek Cost Calculator
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#cost-breakdown" className="block hover:text-emerald-600 transition">
                  • Complete Cost Breakdown
                </a>
                <a href="#saving-tips" className="block hover:text-emerald-600 transition">
                  • Money-Saving Tips
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khopra-for-couples" className="hover:text-emerald-700 underline">
                      Khopra for Couples
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-families" className="hover:text-emerald-700 underline">
                      Khopra for Families
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-beginners" className="hover:text-emerald-700 underline">
                      Khopra for Beginners
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
