import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/vegan-food-khopra-trek",
  },
  title: "Ultimate Vegan & Plant-Based Food Guide for Trekking in Nepal",
  description: "Planning a vegan trek in Nepal? Discover what plant-based food is really available, which local dishes to avoid, and how to stay fully vegan on the Khopra.",
};

export default function Page() {
  const nepaliPhrases = [
    { phrase: "Ghee-bina Dal Bhat", meaning: "Dal Bhat without clarified butter (ghee)" },
    { phrase: "Ghee-bina pakaunuhos", meaning: "Please cook it without ghee / butter" },
    { phrase: "Dudh-bina ko Kalo Chiya", meaning: "Black tea without milk" },
    { phrase: "Ma Masu, Anda, ra Dudh ko chij haru khanna", meaning: "I do not eat meat, eggs, or dairy products" }
  ];

  const mealPlan = [
    { meal: "Breakfast", options: "Chapati or Tibetan bread (confirm no milk dough), boiled/fried potatoes, water-cooked porridge, black tea" },
    { meal: "Morning Snack", options: "Handful of roasted almonds/walnuts, dried figs, or vegan protein bar" },
    { meal: "Lunch", options: "Ghee-free Dal Bhat (rice, lentil soup, spinach/cauliflower curry, tomato chutney) + free refills" },
    { meal: "Afternoon Snack", options: "Peanut butter on chapati, dark chocolate, electrolyte water" },
    { meal: "Dinner", options: "Ghee-free Veg Noodle Soup / Veg Chow Mein / Veg Fried Rice + Sherpa Garlic Soup" }
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
            <span className="text-emerald-400">Vegan Food Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Plant-Based Trekking Nepal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ultimate Vegan &amp; Plant-Based Food Guide for Trekking in Nepal
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover what plant-based food is really available, which local dishes to avoid, and how to stay fully vegan on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#can-you-trek-vegan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Can You Trek Vegan?
              </a>
              <a href="#kitchen-operations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse Kitchen Reality
              </a>
              <a href="#naturally-vegan-foods" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Naturally Vegan Dishes
              </a>
              <a href="#foods-to-avoid" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Foods &amp; Dairy to Avoid
              </a>
              <a href="#plant-based-nutrition" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Plant-Based Nutrition
              </a>
              <a href="#pre-trek-snacks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pre-Trek Vegan Snacks
              </a>
              <a href="#communicating-requirements" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Nepali Language Phrases
              </a>
              <a href="#sample-meal-plan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sample Daily Meal Plan
              </a>
              <a href="#guided-trek-benefits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guided Trek Benefits
              </a>
              <a href="#prep-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pre-Trek Preparation Tips
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
                Inquire Vegan Trek Plan
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ultimate Vegan &amp; Plant-Based Food Guide for Trekking in Nepal
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you follow a vegan or plant-based diet, the idea of trekking through remote Nepal can feel daunting. You&apos;re heading into mountain villages with limited supply routes, small kitchens, and a food culture built around dairy staples like ghee and butter tea. It&apos;s a fair concern.
              </p>
              <p>
                The good news is that vegan trekking in Nepal is entirely achievable — you just need to understand the local food culture, know which dishes to avoid, and plan ahead. This guide walks you through exactly what to expect on routes like the Khopra Ridge Trek, from the meals you&apos;ll actually be served to the phrases that help you order them correctly.
              </p>
              <p>
                We&apos;ve built this guide around real trail conditions rather than general plant-based diet theory, because trekking nutrition and city-based vegan eating are two very different challenges.
              </p>
            </div>
          </article>

          {/* SECTION 1: CAN YOU TREK VEGAN */}
          <article id="can-you-trek-vegan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Successfully Trek in Nepal While Following a Vegan Diet?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Vegetarian Roots in Nepal:</strong> Hindu and Buddhist traditions make Nepal one of the world&apos;s most vegetarian-friendly countries. Kitchens understand meat-free cooking naturally. Rice, lentils, and potatoes are universal staples.
              </p>
              <p>
                <strong>Understanding the Ghee &amp; Dairy Distinction:</strong> While <em>&quot;vegetarian&quot;</em> is universally understood, <em>&quot;vegan&quot;</em> is a newer term in remote mountain lodges. Dairy (ghee, milk tea, butter) is widely used out of habit, not malice. Being explicit about excluding ghee and milk ensures a 100% plant-based meal.
              </p>
            </div>
          </article>

          {/* SECTION 2: KITCHEN OPERATIONS */}
          <article id="kitchen-operations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding How Food Is Prepared in Himalayan Community Lodges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Family-run kitchens cook to order using gas or wood burners. Ghee is often drizzled over dal bhat or rice right before serving as a finishing touch for calories and flavor. Politely asking cooks to leave ghee out when placing your order makes the dish instantly vegan.
              </p>
            </div>
          </article>

          {/* SECTION 3: NATURALLY VEGAN FOODS */}
          <article id="naturally-vegan-foods" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Naturally Vegan Foods Available During Trekking in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Dal Bhat (Ghee-Free):</strong> Steamed rice, lentil soup, vegetable curry, and spicy pickles. Comes with <strong>free refills</strong>.</li>
                <li><strong>Vegetable Chow Mein &amp; Fried Rice:</strong> Stir-fried with cabbage, carrots, and onions (confirm oil used, not ghee).</li>
                <li><strong>Potato Dishes:</strong> Plain boiled, pan-fried, or curried local potatoes.</li>
                <li><strong>Breads &amp; Snacks:</strong> Chapati flatbread, steamed vegetable momos (confirm dairy-free dough), and plain rice.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 4: FOODS TO AVOID */}
          <article id="foods-to-avoid" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Foods Vegan Travelers Should Avoid on Nepal Trekking Routes
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Hidden Dairy:</strong> Ghee drizzled on rice/dal, butter added to soups/curries, milk powder in instant drinks.
              </p>
              <p>
                <strong>Common Missteps:</strong> Ordering standard milk tea or Tibetan butter tea (always request <strong>black tea</strong>), cheese-filled momos, yogurt sides, or egg noodles. Never assume &quot;vegetarian&quot; menu items are dairy-free automatically.
              </p>
            </div>
          </article>

          {/* SECTION 5: PLANT-BASED NUTRITION */}
          <article id="plant-based-nutrition" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Plant-Based Nutrition Requirements During High Altitude Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekking burns 3,000–4,500+ calories daily. Combining rice + lentils creates a complete amino acid protein profile. Hydrate constantly with water and electrolyte tablets to aid muscle recovery.
              </p>
            </div>
          </article>

          {/* SECTION 6: PRE-TREK SNACKS */}
          <article id="pre-trek-snacks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Vegan Snacks to Buy Before Starting Your Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Stock up at Thamel (Kathmandu) supermarkets or Lakeside (Pokhara) health shops before departing. Essential supplies: vegan protein bars, roasted almonds/walnuts, chia seeds, dried figs/dates, peanut butter jars, and electrolyte powders.
              </p>
            </div>
          </article>

          {/* SECTION 7: COMMUNICATING REQUIREMENTS */}
          <article id="communicating-requirements" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Communicate Your Vegan Dietary Requirements in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="bg-stone-900 text-stone-100 border border-stone-850 rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider border-b border-stone-800 pb-2">
                  Essential Nepali Dining Phrases for Vegans
                </h3>
                <div className="space-y-3 text-xs">
                  {nepaliPhrases.map((item, idx) => (
                    <div key={idx} className="border-b border-stone-800/60 pb-2">
                      <strong className="text-emerald-300 font-bold block text-sm font-mono">{item.phrase}</strong>
                      <span className="text-stone-300 italic">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 8: SAMPLE MEAL PLAN */}
          <article id="sample-meal-plan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sample Vegan Meal Plan for a Typical Trekking Day
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Time / Meal</th>
                    <th className="px-6 py-4">Plant-Based Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {mealPlan.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.meal}</td>
                      <td className="px-6 py-4 text-stone-700">{row.options}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 9: GUIDED TREK BENEFITS */}
          <article id="guided-trek-benefits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Guided Treks Make Vegan Travel Easier in Remote Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Our licensed guides coordinate directly with teahouse kitchen staff in advance, double-checking ingredients in Nepali before food is served. This removes accidental ghee exposure and guarantees stress-free dining.
              </p>
            </div>
          </article>

          {/* SECTION 10: PREP TIPS */}
          <article id="prep-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Tips for Vegan Travelers Preparing for Trekking in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>Plan your daily protein and calorie requirements before departure.</li>
                <li>Carry backup snacks (bars, nuts, dried fruit) for high remote nodes.</li>
                <li>Inform your trekking agency of vegan restrictions upon booking.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Vegan Trekking in Nepal
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can vegans successfully trek in Nepal?",
                  a: "Yes. Staples like rice, lentils, and vegetables are naturally vegan once ordered without ghee or butter."
                },
                {
                  q: "Is Dal Bhat vegan by default?",
                  a: "Not always — cooks often finish it with a spoonful of ghee. Ask for 'Ghee-bina Dal Bhat' when ordering."
                },
                {
                  q: "Is Nepal a vegan-friendly destination for trekkers?",
                  a: "Nepal's strong vegetarian culture makes it very friendly, provided you communicate dairy restrictions clearly."
                },
                {
                  q: "Are trekking lodges able to prepare vegan meals?",
                  a: "Yes. Core ingredients (rice, lentils, potatoes, cabbage) are already vegan."
                },
                {
                  q: "What vegan snacks should I bring from Kathmandu?",
                  a: "Pack vegan protein bars, nuts, seeds, dried figs/dates, and peanut butter from Thamel or Lakeside Pokhara."
                },
                {
                  q: "Does Nepali tea usually contain milk?",
                  a: "Yes, milk tea is standard. Order black tea ('Dudh-bina ko Kalo Chiya') or ginger-lemon tea."
                },
                {
                  q: "Can I get enough protein while trekking in Nepal?",
                  a: "Yes. Combining lentils (dal) and rice provides a complete amino acid protein profile."
                },
                {
                  q: "Are guides necessary for vegan travelers?",
                  a: "A local guide simplifies kitchen communication in Nepali and prevents accidental ghee or dairy usage."
                },
                {
                  q: "Is butter commonly used in trekking meals?",
                  a: "Ghee and butter are common finishing touches in curries and soups, so clear ordering requests are essential."
                },
                {
                  q: "What should I avoid eating on Himalayan treks if I'm vegan?",
                  a: "Avoid ghee-finished dal/rice, milk tea, butter tea, cheese momos, yogurt sides, and egg noodles."
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
              Vegan trekking in Nepal is achievable, healthy, and deeply rewarding. By understanding kitchen habits, avoiding hidden ghee, and packing energy-dense snacks, you will stay strong and energized all the way to Khopra Danda!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Book Your Guided Vegan Trek
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local guides know the kitchens along the Khopra Ridge Trek and can coordinate your vegan meal requirements with each lodge before you even arrive. Book your guided trek with us and let us handle the food logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Your Guided Trek With Us &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/vegetarian-food-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the complete Vegetarian Food guide
                  </Link>
                  <Link href="/planning/drinking-water-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check safe drinking water &amp; purification guide
                  </Link>
                  <Link href="/guides/local-food-on-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore local food culture on Khopra Trek
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
                This plant-based dining guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
