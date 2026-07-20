import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/vegetarian-food-khopra-trek",
  },
  title: "Ultimate Vegetarian Food Guide for Khopra Trek: Safe Meals, Teahouse Food & Vegan Options",
  description: "Planning the Khopra Ridge Trek? Learn what vegetarian and vegan food is available, which meals are safest, what teahouses serve, and how to eat well at altitude.",
};

export default function Page() {
  const menuCategories = [
    { cat: "Rice & Dal Meals", items: "Dal Bhat (unlimited refills of rice, lentil soup, curry, pickles)" },
    { cat: "Noodle & Pasta", items: "Veg Chow Mein, Fried Noodles, Veg Pasta with tomato/cheese sauce" },
    { cat: "Potato Preparations", items: "Boiled, fried, mashed, roasted, or cheese-baked local potatoes" },
    { cat: "Breads & Breakfast", items: "Tibetan bread, Chapati, Toast, Porridge, Pancakes" },
    { cat: "Soups & Hydration", items: "Sherpa Garlic Soup, Veg Noodle Soup, Ginger-Lemon-Honey Tea" }
  ];

  const priceTiers = [
    { item: "Breakfast (Porridge, Toast, Tibetan Bread)", lowerPrice: "NPR 250–350", highPrice: "NPR 350–450 ($2.50–$3.50 USD)" },
    { item: "Lunch / Dinner (Dal Bhat Set)", lowerPrice: "NPR 450–600", highPrice: "NPR 600–750 ($4.50–$5.50 USD)" },
    { item: "Noodle / Rice / Pasta Dishes", lowerPrice: "NPR 400–550", highPrice: "NPR 550–650 ($4.00–$5.00 USD)" },
    { item: "Hot Drinks (Ginger Tea, Coffee, Lemon)", lowerPrice: "NPR 100–150", highPrice: "NPR 150–250 ($1.00–$2.00 USD)" }
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
            <span className="text-emerald-400">Vegetarian Food Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Trail Dining &amp; Food Safety Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ultimate Vegetarian Food Guide for Khopra Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Safe meals, teahouse food expectations, high-altitude energy, and vegan options across every overnight stop on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#why-vegetarian" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Go Vegetarian?
              </a>
              <a href="#how-teahouse-dining-works" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How Teahouse Dining Works
              </a>
              <a href="#breakfast-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Breakfast Meals
              </a>
              <a href="#lunch-dinner-meals" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lunch &amp; Dinner Staples
              </a>
              <a href="#energy-recovery" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Energy &amp; Recovery Food
              </a>
              <a href="#garlic-soup" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sherpa Garlic Soup
              </a>
              <a href="#vegan-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Vegan Trekking Options
              </a>
              <a href="#food-prices" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food Cost Breakdown
              </a>
              <a href="#food-safety-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food Safety &amp; Hygiene
              </a>
              <a href="#trail-snacks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trail Snacks to Carry
              </a>
              <a href="#food-by-stop" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food Availability by Stop
              </a>
              <a href="#common-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mistakes to Avoid
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
                Inquire Guided Meal Plans
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ultimate Vegetarian Food Guide for Khopra Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Food is one of the biggest unknowns for first-time trekkers heading into the Annapurna foothills. You already know the trail will test your legs. What most people don&apos;t plan for is how much a good — or bad — meal can affect the rest of their trek.
              </p>
              <p>
                This guide covers exactly what vegetarian and vegan trekkers can expect to eat on the Khopra Ridge Trek: what teahouses actually serve, why we recommend skipping meat on this route, which meals give you the most energy, and what food costs as you climb higher. Everything here comes from what we see on the trail season after season, not from generic advice written for Nepal trekking in general.
              </p>
              <p>
                By the end of this guide, you&apos;ll know exactly what to order at each stop, what to avoid, and how to keep your energy up all the way to Khopra Danda.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHY VEGETARIAN */}
          <article id="why-vegetarian" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why We Strongly Recommend Vegetarian Food on Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Meat Transportation Risks:</strong> There are no roads to most lodges past Ghandruk. Meat is carried up on porter backs or mules from Pokhara or Nayapul over full-day walks in warm, humid conditions.
              </p>
              <p>
                <strong>Lack of Cold Storage Chains:</strong> High lodges operate on limited solar power or generators without commercial refrigeration. Meat is stored in cool rooms over several days, making it the #1 cause of stomach illness on trail.
              </p>
              <p>
                <strong>Fresh Local Produce:</strong> Vegetables (potatoes, greens, cabbage) are harvested fresh in villages like Ghandruk and Swanta. Lentils, rice, and spices are dry goods stored safely. A plate of Dal Bhat at 3,660m is far fresher and safer than meat curry.
              </p>
            </div>
          </article>

          {/* SECTION 2: HOW TEAHOUSE DINING WORKS */}
          <article id="how-teahouse-dining-works" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Teahouse Dining Works on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Meals are cooked to order in a single family kitchen. Menus in Ghandruk feature pasta, pizza, and fresh veggies, while higher nodes (Bayeli, Chhistibung, Khopra Danda) narrow options down to core staples: rice, lentils, potatoes, and noodle soups.
              </p>

              {/* Menu Categories Box */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3 my-6">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider border-b border-stone-100 pb-2">
                  Typical Teahouse Menu Categories
                </h3>
                <ul className="space-y-2 text-xs text-stone-600">
                  {menuCategories.map((cat, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-50 pb-1.5">
                      <strong className="text-stone-900 font-semibold">{cat.cat}:</strong>
                      <span className="text-stone-600">{cat.items}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 3: BREAKFAST OPTIONS */}
          <article id="breakfast-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Vegetarian Breakfast Options on Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Breads:</strong> Tibetan bread (fried flatbread with honey/jam/peanut butter), Chapati, or plain toast.
              </p>
              <p>
                <strong>Hot Cereals:</strong> Porridge (easy to digest at altitude) or pancakes.
              </p>
              <p>
                <strong>Hot Drinks:</strong> Black tea, milk tea, instant coffee, and soothing <strong>ginger-lemon-honey tea</strong>.
              </p>
            </div>
          </article>

          {/* SECTION 4: LUNCH & DINNER MEALS */}
          <article id="lunch-dinner-meals" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Vegetarian Lunch and Dinner Meals Available on the Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dal Bhat (The Ultimate Power Meal):</strong> Steamed rice, lentil soup, vegetable curry, and pickles. Comes with <strong>free refills</strong> of rice, dal, and veggies, offering unmatched carbohydrate and protein energy.
              </p>
              <p>
                <strong>Noodles &amp; Stir-Fries:</strong> Veg chow mein and veg fried rice cooked with fresh cabbage, carrots, and onions.
              </p>
              <p>
                <strong>Local Potatoes:</strong> Grown in Ghandruk and Swanta; served boiled, fried, mashed, or cheese-baked.
              </p>
              <p>
                <strong>Soups &amp; Momos:</strong> Steamed veg momos and warm vegetable soups for lighter evening dining.
              </p>
            </div>
          </article>

          {/* SECTION 5: ENERGY & RECOVERY */}
          <article id="energy-recovery" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Foods for Energy and Recovery During Multi-Day Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Carbohydrate Fueling:</strong> Eat high-carbohydrate meals at both lunch and dinner to replenish depleted glycogen.
              </p>
              <p>
                <strong>Plant Protein Sources:</strong> Lentils in Dal Bhat, eggs, cheese, and brought peanut butter/nuts.
              </p>
              <p>
                <strong>Hydration &amp; Slow Digestion:</strong> Digestion slows above 3,000m. Choose lighter evening meals (soups, dal bhat) and drink water continuously with electrolyte powder.
              </p>
            </div>
          </article>

          {/* SECTION 6: SHERPA GARLIC SOUP */}
          <article id="garlic-soup" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sherpa Garlic Soup and High Altitude Benefits
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Himalayan Altitude Remedy:</strong> Sherpa Garlic Soup is a thin broth loaded with fresh garlic. Local tradition holds that garlic aids blood circulation and helps alleviate mild AMS symptoms. It is hydrating, warming, and easy on the stomach.
              </p>
            </div>
          </article>

          {/* SECTION 7: VEGAN OPTIONS */}
          <article id="vegan-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Vegan Food Options on Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Naturally Vegan Meals:</strong> Dal Bhat without ghee, vegetable rice, veg chow mein, veg soup, and plain boiled/fried potatoes.
              </p>
              <p>
                <strong>Ingredients to Watch:</strong> Butter, ghee, cheese, milk powder, eggs. Request: <em>&quot;No butter, no ghee, no cheese, no egg&quot;</em> when ordering.
              </p>
            </div>
          </article>

          {/* SECTION 8: FOOD PRICES */}
          <article id="food-prices" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Typical Food Prices on Khopra Trek
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Meal Category</th>
                    <th className="px-6 py-4">Lower Elevation (Ghandruk)</th>
                    <th className="px-6 py-4">High Elevation (Khopra 3,660m)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {priceTiers.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.item}</td>
                      <td className="px-6 py-4 text-stone-700">{row.lowerPrice}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.highPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 9: FOOD SAFETY TIPS */}
          <article id="food-safety-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food Safety Tips Every Trekker Should Follow
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Skip Meat Completely:</strong> Avoid meat on remote trail sections to prevent food poisoning.</li>
                <li><strong>Boiled &amp; Treated Water Only:</strong> Drink boiled water or treated water; avoid unboiled tap water.</li>
                <li><strong>Avoid Raw Salads:</strong> Skip raw unwashed salads, unpasteurized dairy, and reheated oily dishes late at night.</li>
              </ul>

              {/* Mid-Article CTA Banner */}
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-900 my-6">
                <h4 className="font-bold text-base">Local Guide Support</h4>
                <p className="text-xs mt-2 leading-relaxed">
                  Our local trekking guides work directly with teahouse owners along the route to help trekkers access safe, hygienic vegetarian meals throughout the journey.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: TRAIL SNACKS */}
          <article id="trail-snacks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Snacks to Carry for Extra Energy
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Pack energy bars, mixed nuts, dried fruits, dark chocolate, peanut butter, and electrolyte powders to refuel on steep climbs.
              </p>
            </div>
          </article>

          {/* SECTION 11: FOOD BY STOP */}
          <article id="food-by-stop" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food Availability Across Different Stops on the Khopra Trek Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Ghandruk:</strong> Widest menu selection (pizzas, bakeries, pastas, momos).
              </p>
              <p>
                <strong>Tadapani &amp; Dobato:</strong> Solid mid-range menus (Dal Bhat, chow mein, fried rice, porridge).
              </p>
              <p>
                <strong>Chhistibung &amp; Khopra Danda:</strong> Simple, repetitive, high-altitude staples (Dal Bhat, instant noodles, potatoes, garlic soup).
              </p>
            </div>
          </article>

          {/* SECTION 12: COMMON MISTAKES */}
          <article id="common-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Mistakes Trekkers Make When Choosing Food
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>Skipping breakfast or lunch during long hiking days.</li>
                <li>Eating heavy, oily meals late in the evening at high altitude.</li>
                <li>Not drinking enough water due to cold morning temperatures.</li>
                <li>Ordering unverified meat dishes at remote lodges.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Vegetarian Food on Khopra Trek
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is vegetarian food easily available on Khopra Trek?",
                  a: "Yes. Vegetarian food is the default at every teahouse, with Dal Bhat, veg curry, noodles, and potatoes served from Ghandruk to Khopra Danda."
                },
                {
                  q: "Can vegan travelers complete the Khopra Ridge Trek comfortably?",
                  a: "Yes. Core dishes like Dal Bhat, vegetable curry, and noodles are naturally vegan. Request 'no butter, ghee, or cheese'."
                },
                {
                  q: "Is meat safe to eat while trekking in Nepal?",
                  a: "We recommend avoiding meat on remote routes because it is carried long distances without refrigeration, creating food safety risks."
                },
                {
                  q: "How much does food cost during the Khopra Trek?",
                  a: "Breakfast costs NPR 250–450; lunch/dinner costs NPR 450–750, rising gradually with altitude."
                },
                {
                  q: "Is Dal Bhat enough for full-day trekking?",
                  a: "Yes. Dal Bhat provides carbohydrates, protein, and minerals, with free refills ensuring maximum energy."
                },
                {
                  q: "What foods help with altitude sickness?",
                  a: "Sherpa Garlic Soup supports circulation, while continuous hydration and ginger tea soothe the stomach."
                },
                {
                  q: "Can I request custom meals in teahouses?",
                  a: "Yes. Ask for custom changes ('no egg', 'no butter') when placing your initial order."
                },
                {
                  q: "Are eggs available during the trek?",
                  a: "Yes, eggs are available at lower and mid-altitude lodges as a protein add-on."
                },
                {
                  q: "What foods should I avoid during Himalayan trekking?",
                  a: "Avoid meat, raw unwashed salads, unpasteurized dairy, and heavy oily fried food late at night."
                },
                {
                  q: "What snacks should I carry personally?",
                  a: "Pack energy bars, mixed nuts, dried fruit, dark chocolate, peanut butter, and electrolyte powders."
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
              Eating well on the Khopra Ridge Trek is simple and rewarding. Stick to fresh vegetarian staples like Dal Bhat, Sherpa Garlic Soup, and local potatoes to stay healthy, energized, and ready for every mountain trail!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Trek With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Planning your Khopra Ridge Trek? Contact us and our local guides will help you organize your route, accommodation, permits, and vegetarian or vegan meal planning — every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Plan Your Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/vegan-food-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the dedicated Vegan Trekking guide
                  </Link>
                  <Link href="/planning/drinking-water-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check safe drinking water &amp; filtration guide
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
                This food safety &amp; dining guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
