import React from "react";
import Link from "next/link";

export default function Page() {
  const budgetTips = [
    {
      title: "Use Public Buses & Shared Jeeps",
      desc: "Private jeeps from Pokhara to Kimche cost $60-$70 USD. Instead, take a local bus from Baglung Bus Park to Nayapul ($3 USD) and catch a local shared jeep up to Ghandruk ($5 USD) to save significantly."
    },
    {
      title: "Filter Your Own Water",
      desc: "Bottled mineral water costs $1-$3 USD at high elevations, which adds up. Bring water purification tablets (chlorine/iodine) or a filtering bottle (like LifeStraw) to get free water from village taps."
    },
    {
      title: "Stick to Local Food (Dal Bhat)",
      desc: "Dal Bhat (traditional lentil soup with rice and vegetables) is nutritious, filling, and comes with free refills of rice and soup, making it the most cost-effective meal on the trail."
    },
    {
      title: "Bring a Power Bank & Toiletries",
      desc: "Lodge charging slots cost $1-$2 USD per hour. Bring a high-capacity power bank and purchase all soap, toilet paper, and snacks in Pokhara to avoid high high-altitude prices."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Persona Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek for Budget Travelers
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trek on a budget. Explore money-saving strategies for transport, food, water purification, and community lodge stays.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Affordable Himalayan Trekking</h2>
          <p className="text-stone-600 leading-relaxed">
            The Khopra Ridge Trek is a great option for budget-conscious independent travelers. Because it operates on a community lodge cooperative model, lodging prices are standardized, and there are no expensive flights (unlike the Everest region).
          </p>
          <p className="text-stone-600 leading-relaxed">
            However, high-altitude services like Wi-Fi, battery charging, hot showers, and snacks are paid directly to lodges and can add up if not managed carefully. Below is a breakdown of how to keep your expenses low.
          </p>
        </div>

        {/* Budget tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Top Money-Saving Tips</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {budgetTips.map((tip, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{tip.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We compile pricing records from community lodges across the loop annually to ensure accurate cost calculations for independent backpackers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan Your Budget Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want a permit-only booking package with budget-friendly local shared transport and community lodges? Get in touch with our team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
