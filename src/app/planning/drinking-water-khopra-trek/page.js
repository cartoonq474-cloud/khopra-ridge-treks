import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/drinking-water-khopra-trek",
  },
  title: "Ultimate Drinking Water & Hydration Guide for the Khopra Ridge Trek",
  description: "Planning the Khopra Ridge Trek? Our complete hydration guide covers safe drinking water, the plastic bottle ban, purification methods, costs, and how to avoid dehydration at altitude.",
};

export default function Page() {
  const methodComparison = [
    {
      method: "UV Purification",
      safety: "High",
      cost: "Low–Moderate (NPR 80–150/L)",
      speed: "Fast",
      convenience: "High (where available)",
      bestUse: "Villages & lodges with UV stations (Ghandruk, Ghorepani)"
    },
    {
      method: "Boiled Water",
      safety: "High",
      cost: "Moderate (NPR 150–300/L)",
      speed: "Slow (requires cooling)",
      convenience: "Moderate",
      bestUse: "Cold weather, high ridge lodges, evening thermos prep"
    },
    {
      method: "Portable Filter",
      safety: "High",
      cost: "One-time gear cost",
      speed: "Fast",
      convenience: "High",
      bestUse: "Independent trekkers, daily stream & lodge tap filtering"
    },
    {
      method: "Purification Tablets",
      safety: "Moderate–High",
      cost: "Low",
      speed: "Slow (30+ min wait)",
      convenience: "High (lightweight)",
      bestUse: "Emergency backup when filters fail or UV stations are absent"
    }
  ];

  const checklistItems = [
    "Durable reusable water bottle (1L+ capacity, ideally insulated)",
    "Portable hollow-fiber water filter (Sawyer, LifeStraw, or Katadyn)",
    "Aquatabs / Chlorine purification tablets as lightweight emergency backup",
    "Electrolyte powder packets or Oral Rehydration Salts (ORS)",
    "Small thermos or insulated jacket sleeve for cold morning starts"
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
            <span className="text-emerald-400">Drinking Water Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Safe Water &amp; Hydration Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ultimate Drinking Water &amp; Hydration Guide for the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Safe drinking water, ACAP plastic bottle ban details, purification options, costs, and daily hydration requirements for the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#why-hydration-matters" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Hydration Matters
              </a>
              <a href="#water-availability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Water Availability
              </a>
              <a href="#plastic-bottle-ban" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Plastic Bottle Ban
              </a>
              <a href="#purification-methods" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Purification Methods
              </a>
              <a href="#water-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Water Cost Breakdown
              </a>
              <a href="#daily-water-intake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Water Volume
              </a>
              <a href="#recognizing-dehydration" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Avoiding Dehydration
              </a>
              <a href="#essential-equipment" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Essential Gear
              </a>
              <a href="#guide-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Guide Advice
              </a>
              <a href="#quick-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hydration Checklist
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
                Inquire Guided Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ultimate Drinking Water &amp; Hydration Guide for the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Hydration is one of the most overlooked parts of trekking preparation, yet it directly affects how safely and comfortably you experience the Khopra Ridge Trek. As you climb from the warm lower valleys near Ghandruk toward the exposed ridgeline above Dobato and Khopra, your body loses water faster than it does at sea level, while your options for replacing it become more limited and more expensive.
              </p>
              <p>
                This guide brings together everything you need to know about drinking water on the Khopra Ridge Trek: where to find it, how to purify it safely, what it costs, how much you should be drinking each day, and how local trekking guides manage hydration on the trail. We&apos;ll also explain the region&apos;s plastic bottle ban, since it changes how most trekkers need to prepare. Whether you&apos;re trekking independently or with a guide, this is the practical, destination-specific reference you need before you set off.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHY HYDRATION MATTERS */}
          <article id="why-hydration-matters" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Proper Hydration Matters on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>High Altitude Fluid Loss:</strong> Thin, dry mountain air causes rapid moisture loss with every breath. Cold weather blunts thirst, making trekkers under-drink without realizing it.
              </p>
              <p>
                <strong>Body Temperature &amp; Recovery:</strong> Proper hydration maintains blood circulation, delivers oxygen to muscles, supports kidney function, and speeds up overnight physical recovery.
              </p>
              <p>
                <strong>Hydration vs Acute Mountain Sickness (AMS):</strong> Hydration does not prevent AMS (caused by reduced oxygen pressure), but dehydration severely worsens AMS symptoms like headaches, dizziness, and fatigue.
              </p>
            </div>
          </article>

          {/* SECTION 2: WATER AVAILABILITY */}
          <article id="water-availability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drinking Water Availability Along the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Villages &amp; Community Lodges:</strong> Lower stops (Ghandruk, Ghorepani) have established UV stations and boiled water. High lodges (<Link href="/nodes/dobato-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Dobato</Link>, Bayeli Kharka, Chhistibung, Khopra Danda) offer boiled and UV-treated water, though supplies depend on seasonal snow melt.
              </p>
              <p>
                <strong>Springs &amp; Streams:</strong> Untreated mountain streams carry livestock bacteria and parasites. Never drink untreated stream water.
              </p>
              <p>
                <strong>Refill Routine &amp; Khayer Lake:</strong> Refill at every lodge pass. The day hike to <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khayer Lake</Link> (4,660m) is long and exposed with no lodges — carry at least 3 liters of water.
              </p>
            </div>
          </article>

          {/* SECTION 3: PLASTIC BOTTLE BAN */}
          <article id="plastic-bottle-ban" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding the Plastic Bottle Ban
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <h3 className="font-bold text-base">ACAP Single-Use Plastic Bottle Restriction</h3>
                <p className="text-xs mt-2 leading-relaxed">
                  The Annapurna Conservation Area Project (ACAP) bans the sale of single-use plastic mineral water bottles beyond Ghandruk and Ghorepani to protect pristine alpine forests from plastic pollution. Trekkers MUST carry reusable bottles or hydration bladders.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: PURIFICATION METHODS */}
          <article id="purification-methods" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safe Water Purification Methods Compared
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Safety</th>
                    <th className="px-6 py-4">Cost</th>
                    <th className="px-6 py-4">Speed</th>
                    <th className="px-6 py-4">Best Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {methodComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.method}</td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">{row.safety}</td>
                      <td className="px-6 py-4 text-stone-700">{row.cost}</td>
                      <td className="px-6 py-4 text-stone-600">{row.speed}</td>
                      <td className="px-6 py-4 text-stone-600">{row.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 5: WATER COSTS */}
          <article id="water-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drinking Water Costs Along the Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>UV-Treated Water:</strong> NPR 80–150 per liter.
              </p>
              <p>
                <strong>Boiled Water:</strong> NPR 150–300 per liter at higher ridge lodges (Khopra Danda) due to wood/gas transport costs.
              </p>
              <p>
                <strong>Money-Saving Tip:</strong> Carry a portable hollow-fiber filter (Sawyer/Katadyn) to filter lodge tap water for free.
              </p>
            </div>
          </article>

          {/* SECTION 6: DAILY WATER INTAKE */}
          <article id="daily-water-intake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Water Should You Drink While Trekking?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>3 to 4 Liters Daily:</strong> Drink steadily throughout the day: 1L before walking, 1L during morning trail breaks, 1L at lunch, and 1L at the overnight teahouse. Add <strong>electrolytes / ORS sachets</strong> to replace minerals lost through heavy sweating.
              </p>
            </div>
          </article>

          {/* SECTION 7: AVOIDING DEHYDRATION */}
          <article id="recognizing-dehydration" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Recognizing and Preventing Dehydration
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Early Indicators:</strong> Dry mouth, mild headache, fatigue, dark yellow urine (pale yellow is the target).
              </p>
              <p>
                <strong>Prevention Habits:</strong> Drink on a schedule, monitor urine color, and take electrolytes after steep ascents.
              </p>
            </div>
          </article>

          {/* SECTION 8: ESSENTIAL EQUIPMENT */}
          <article id="essential-equipment" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Water &amp; Hydration Equipment
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>2x Reusable 1L Bottles:</strong> Insulated bottles prevent freezing at Khopra Danda.</li>
                <li><strong>Hydration Bladder (2L):</strong> Easy sipping while walking inside daypack.</li>
                <li><strong>Hollow-Fiber Filter &amp; Tablets:</strong> Primary filtration + backup Aquatabs.</li>
                <li><strong>Small Thermos:</strong> Keeps morning boiled tea warm on cold ridges.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 9: GUIDE TIPS */}
          <article id="guide-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Hydration Tips from Our Local Trekking Guides
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Our guides recommend drinking a full bottle before leaving the teahouse every morning. In winter, store water bottles inside your sleeping bag or daypack core to prevent freezing.
              </p>
            </div>
          </article>

          {/* SECTION 10: QUICK CHECKLIST */}
          <article id="quick-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Hydration Checklist Before You Start
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
              <ul className="space-y-2 text-xs text-stone-600">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Drinking Water on Khopra Trek
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can I drink tap water on the Khopra Ridge Trek?",
                  a: "No. Tap water is untreated and must be purified using UV treatment, boiling, filtering, or purification tablets."
                },
                {
                  q: "Is bottled water available above Ghandruk or Ghorepani?",
                  a: "No. Single-use plastic bottled water is restricted under ACAP's plastic bottle ban. Trekkers must carry reusable bottles."
                },
                {
                  q: "What is the safest way to purify water on this trek?",
                  a: "Boiled water and UV stations are safest. A portable filter (Katadyn/Sawyer) with backup Aquatabs works best for independent trekkers."
                },
                {
                  q: "Do I need a water filter if I'm staying in teahouses?",
                  a: "Not strictly required if buying UV/boiled water, but a filter saves money and guarantees safe water if lodges run low."
                },
                {
                  q: "How much water should I drink each day while trekking?",
                  a: "Drink 3 to 4 liters daily, increasing on steep climbs and the Khayer Lake day hike."
                },
                {
                  q: "Are purification tablets enough for Himalayan trekking?",
                  a: "Tablets are effective but require a 30+ minute wait. Best used as a lightweight emergency backup."
                },
                {
                  q: "Can dehydration increase the risk of altitude sickness?",
                  a: "Dehydration doesn't cause AMS, but it severely exacerbates headache and fatigue symptoms."
                },
                {
                  q: "Where can I refill my water bottle along the route?",
                  a: "At lodges in Ghandruk, Ghorepani, Dobato, Bayeli Kharka, Chhistibung, and Khopra Danda."
                },
                {
                  q: "How much does safe drinking water cost during the trek?",
                  a: "UV water costs NPR 80–150/L; boiled water costs NPR 150–300/L at high ridge nodes."
                },
                {
                  q: "Should I carry electrolyte powder or ORS?",
                  a: "Yes. Electrolytes restore essential salts lost during heavy climbing exertion."
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
              Proper hydration makes all the difference on Khopra Ridge. Bring reusable bottles, use a reliable filter or UV station, drink 3 to 4 liters daily, and enjoy safe trekking in the Annapurna mountains!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Trek With Confidence &amp; Safe Water
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to trek the Khopra Ridge with confidence? Our experienced local guides handle the logistics of safe water, purification, and altitude planning every day on this route — so you can focus on the trail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Explore Guided Khopra Trek Itineraries &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/vegetarian-food-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the complete Vegetarian Food guide
                  </Link>
                  <Link href="/planning/vegan-food-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the dedicated Vegan Trekking guide
                  </Link>
                  <Link href="/altitude/khopra-ridge-elevation" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check Khopra Ridge elevation &amp; altitude profile
                  </Link>
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
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
                This hydration &amp; water safety guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
