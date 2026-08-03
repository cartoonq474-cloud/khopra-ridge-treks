import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/guides/local-food-on-khopra",
  },
  title: "Ultimate Local Food & Dining on the Khopra Trail: Teahouse Meals, Local Cuisine & Dining Guide",
  description: "Wondering what you'll eat on the Khopra Ridge Trek? Explore teahouse meals, local Nepali dishes, prices, vegetarian options, and altitude nutrition tips.",
};

export default function Page() {
  const priceEstimates = [
    { category: "Breakfast (Porridge, Tibetan Bread, Eggs, Pancakes)", costRange: "NPR 300–600 ($2.50–$4.50 USD)" },
    { category: "Lunch / Dinner (Dal Bhat Set, Fried Rice, Chow Mein, Pasta)", costRange: "NPR 400–900 ($3.00–$6.50 USD)" },
    { category: "Hot Drinks (Ginger Tea, Masala Tea, Coffee, Chocolate)", costRange: "NPR 100–350 ($0.80–$2.50 USD)" },
    { category: "Snacks (Biscuits, Chocolate Bars, Popcorn, Momos)", costRange: "NPR 150–400 ($1.20–$3.00 USD)" }
  ];

  const sampleMealPlan = [
    { time: "Breakfast (6:30–7:30 AM)", item: "Buckwheat porridge / Tibetan bread with forest honey + 2 boiled eggs + Ginger Lemon Tea" },
    { time: "Lunch (12:00–1:30 PM)", item: "Classic Dal Bhat (steamed rice, lentil soup, curried Saag, tomato pickle) + free refills" },
    { time: "Afternoon Break (4:00 PM)", item: "Hot Masala Tea / Hot Chocolate with digestive biscuits or peanut butter" },
    { time: "Dinner (6:30–7:30 PM)", item: "Full Dal Bhat set or Veg Chow Mein + Sherpa Garlic Soup for altitude recovery" }
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
            <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-emerald-400">Local Food &amp; Dining</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Teahouse Meals &amp; Dining Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ultimate Local Food &amp; Dining on the Khopra Trail
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Explore teahouse meals, local Nepali dishes, prices, vegetarian options, altitude nutrition tips, and Swanta yak cheese on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#why-food-different" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Food Is Different
              </a>
              <a href="#teahouse-dining-expectations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse Dining Vibe
              </a>
              <a href="#breakfast-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Breakfast Menu Choices
              </a>
              <a href="#lunch-dinner-meals" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lunch &amp; Dinner Meals
              </a>
              <a href="#traditional-delicacies" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Traditional Delicacies
              </a>
              <a href="#drinks-hydration" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Drinks &amp; Hydration
              </a>
              <a href="#food-by-village" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food Availability by Stop
              </a>
              <a href="#prices-payment" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Meal Costs &amp; Cash Tips
              </a>
              <a href="#special-diets" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Special Diets (Veg/Vegan)
              </a>
              <a href="#altitude-nutrition" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Nutrition Tips
              </a>
              <a href="#water-food-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Water Safety
              </a>
              <a href="#sample-day-menu" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sample Daily Meal Plan
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
                Book Guided Trek Meals
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ultimate Local Food &amp; Dining on the Khopra Trail
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Food shapes the rhythm of every trekking day, and on the Khopra Ridge Trek, it becomes part of the adventure itself. Long before you reach the ridge, you&apos;ll sit down to steaming plates of dal bhat, warm buckwheat bread, and cups of ginger tea served in family-run teahouses tucked into the hills of the Annapurna region.
              </p>
              <p>
                This guide covers everything you need to know about local food on the Khopra Trek — from what teahouses actually serve and how much it costs, to vegetarian and vegan options, altitude nutrition, drinking water safety, and the traditional Magar dishes worth seeking out along the way. Whether you&apos;re planning your first trek in Nepal or comparing Khopra to busier routes like Annapurna Base Camp, this is the practical, ground-level food guide to help you prepare with confidence.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHY FOOD IS DIFFERENT */}
          <article id="why-food-different" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Food on the Khopra Trail Is Different
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Community Hospitality:</strong> Lodges along Khopra Ridge are collectively owned and operated by local Magar families. Spending on food directly empowers village schools and local farmers rather than external operators.
              </p>
              <p>
                <strong>Farm-to-Table Mountain Produce:</strong> Lower villages (Ghandruk, Swanta) cultivate seasonal greens, potatoes, barley, and buckwheat. Meals are fresh, unhurried, and tightly linked to seasonal harvests.
              </p>
              <p>
                <strong>Supporting Regional Enterprises:</strong> Products like <Link href="/nodes/swanta-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Swanta Yak Cheese</Link> are produced in community creameries, offering a direct local market for yak herders.
              </p>
            </div>
          </article>

          {/* SECTION 2: TEAHOUSE DINING EXPECTATIONS */}
          <article id="teahouse-dining-expectations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What to Expect from Teahouse Dining
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dining Hall Atmosphere:</strong> Lodges feature a central communal dining hall warmed by a central wood/dung stove. It is the social heart of every overnight stop.
              </p>
              <p>
                <strong>Daily Meal Rhythm:</strong> Breakfast at 6:30–7:30 AM; Lunch at 12:00–1:30 PM; Afternoon tea break; Dinner at 6:00–7:30 PM.
              </p>
              <p>
                <strong>Fresh Preparation &amp; Waiting Times:</strong> Meals are cooked fresh to order in single family kitchens. Expect 20–45 minute preparation times. Order dinner immediately upon afternoon check-in to avoid evening kitchen queues.
              </p>
            </div>
          </article>

          {/* SECTION 3: BREAKFAST OPTIONS */}
          <article id="breakfast-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Breakfast Options on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Options:</strong> Tibetan bread (fried flatbread with forest honey/jam), Buckwheat porridge (<em>Tsampa</em>), and Chapati.
              </p>
              <p>
                <strong>Western Options:</strong> Pancakes, toast with butter/peanut butter, eggs (fried, boiled, scrambled), muesli with hot milk, oatmeal.
              </p>
              <p>
                <strong>Morning Drinks:</strong> Black tea, milk tea, masala tea, instant coffee, hot chocolate.
              </p>
            </div>
          </article>

          {/* SECTION 4: LUNCH & DINNER MEALS */}
          <article id="lunch-dinner-meals" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Lunch and Dinner Meals on the Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dal Bhat (The Classic Fuel):</strong> Steamed rice, lentil soup, vegetable curry (Saag/Tarkari), and spicy pickle (Achar). <strong>Unlimited refills</strong> of rice, dal, and veggies are included! <em>&quot;Dal Bhat Power, 24 Hour&quot;</em> is the true slogan of Himalayan trekking.
              </p>
              <p>
                <strong>Noodles, Rice &amp; Pasta:</strong> Veg fried rice, Chow Mein, pasta with tomato/cheese sauce, veg curries, and local potatoes.
              </p>
              <p>
                <strong>Soups &amp; Momos:</strong> Sherpa Garlic Soup, vegetable noodle soup, tomato soup, and steamed vegetable momos.
              </p>
            </div>
          </article>

          {/* SECTION 5: TRADITIONAL DELICACIES */}
          <article id="traditional-delicacies" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Traditional Local Foods Worth Trying
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Swanta Yak Cheese:</strong> Made locally in Swanta Village from high-pasture yak milk; firm, mild, and savory.
              </p>
              <p>
                <strong>Buckwheat Dhido:</strong> A dense traditional mountain porridge dough made from buckwheat/millet flour, eaten with lentil soup or curry.
              </p>
              <p>
                <strong>Gundruk &amp; Local Achar:</strong> Fermented leafy greens and tangy radish/tomato pickles.
              </p>
            </div>
          </article>

          {/* SECTION 6: DRINKS & HYDRATION */}
          <article id="drinks-hydration" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drinks Available Along the Khopra Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Ginger tea, Lemon honey tea, and Masala tea provide warmth and throat comfort. Drink 2–4 liters of water daily to combat dry high-altitude air.
              </p>
            </div>
          </article>

          {/* SECTION 7: FOOD BY VILLAGE */}
          <article id="food-by-village" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food Availability by Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Lower Hubs (Ghandruk &amp; Tadapani):</strong> Broadest menus (pastas, bakeries, pizzas, fresh eggs).
              </p>
              <p>
                <strong>Mid-Trail Lodges (Dobato, Bayeli, Chhistibung):</strong> Medium selection focusing on Dal Bhat, chow mein, fried rice, and soups.
              </p>
              <p>
                <strong>Khopra Ridge &amp; Swanta:</strong> Authentic, simple mountain fare (Dal Bhat, potatoes, buckwheat, Swanta yak cheese).
              </p>
            </div>
          </article>

          {/* SECTION 8: PRICES & PAYMENT */}
          <article id="prices-payment" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Meal Prices and Payment Tips
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Item Category</th>
                    <th className="px-6 py-4">Estimated Cost (in NPR &amp; USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {priceEstimates.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.category}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.costRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-600">
              <strong>Cash Requirement:</strong> No ATMs or card machines exist on the trail past Pokhara. Carry sufficient Nepali Rupees (NPR) in small bills.
            </p>
          </article>

          {/* SECTION 9: SPECIAL DIETS */}
          <article id="special-diets" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Vegetarian, Vegan, Gluten-Free, and Allergy-Friendly Meals
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                See our dedicated guides for detailed advice:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><Link href="/planning/vegetarian-food-khopra-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Ultimate Vegetarian Food Guide for Khopra Trek</Link></li>
                <li><Link href="/planning/vegan-food-khopra-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Ultimate Vegan &amp; Plant-Based Food Guide</Link></li>
              </ul>
            </div>
          </article>

          {/* SECTION 10: ALTITUDE NUTRITION */}
          <article id="altitude-nutrition" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Nutrition Tips for High-Altitude Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Fuel climbs with high-carbohydrate grains (rice, potatoes, buckwheat). Protein from lentils (Dal) and yak cheese supports muscle recovery. Eat smaller, frequent meals if altitude suppresses your appetite.
              </p>
            </div>
          </article>

          {/* SECTION 11: WATER & FOOD SAFETY */}
          <article id="water-food-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drinking Water and Food Safety
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Drink boiled or UV-treated water. Avoid unboiled tap water and raw salads at high nodes. Read our complete <Link href="/planning/drinking-water-khopra-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Drinking Water &amp; Hydration Guide</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 12: SAMPLE DAILY MEAL PLAN */}
          <article id="sample-day-menu" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sample Daily Meal Plan on the Khopra Trek
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Recommended Meal &amp; Drink</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {sampleMealPlan.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.time}</td>
                      <td className="px-6 py-4 text-stone-700">{row.item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Food on the Khopra Trail
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What food is available on the Khopra Trail?",
                  a: "Teahouses serve traditional Nepali dishes (Dal Bhat, Tibetan bread, Dhido) alongside Western options (pancakes, fried rice, pasta, eggs)."
                },
                {
                  q: "Is the food on the Khopra Ridge Trek good?",
                  a: "Yes! Meals are freshly cooked to order using local organic vegetables and high-altitude grains."
                },
                {
                  q: "Are vegetarian meals easy to find?",
                  a: "Very easy. Vegetarian food is the default across all teahouses on the circuit."
                },
                {
                  q: "Can vegans complete the Khopra Trek comfortably?",
                  a: "Yes. Ghee-free Dal Bhat, plain rice, vegetable curries, and buckwheat dishes are naturally vegan."
                },
                {
                  q: "Are gluten-free meals available?",
                  a: "Rice and buckwheat options provide great gluten-free flexibility."
                },
                {
                  q: "How much do meals cost on the Khopra Trek?",
                  a: "Breakfast costs NPR 300–600; lunch/dinner costs NPR 400–900 depending on altitude."
                },
                {
                  q: "Is Dal Bhat unlimited?",
                  a: "Yes! Most teahouses provide free refills of rice, dal, and vegetable curry with a Dal Bhat order."
                },
                {
                  q: "Can I drink tap water on the Khopra Trail?",
                  a: "No. Tap water must be boiled, filtered, or UV-treated before drinking."
                },
                {
                  q: "Is coffee available at teahouses?",
                  a: "Instant coffee and hot chocolate are available at most lodges."
                },
                {
                  q: "What local dishes should I try during the Khopra Trek?",
                  a: "Try Swanta yak cheese, buckwheat Dhido, fermented Gundruk, and local mountain honey."
                },
                {
                  q: "Can I buy snacks along the trail?",
                  a: "Yes. Lodges sell biscuits, chocolates, popcorn, and momos, though prices rise with elevation."
                },
                {
                  q: "What if I have food allergies?",
                  a: "Inform your trekking guide and lodge hosts in advance so safe ingredient substitutions can be arranged."
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
              Food on the Khopra Ridge Trek is a genuine window into local mountain culture. Enjoy steaming Dal Bhat, sample Swanta yak cheese, and fuel your Himalayan adventure with fresh organic cuisine!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Experience Authentic Himalayan Cuisine
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to experience authentic community-run teahouses and fresh mountain cuisine for yourself? Explore our Khopra Ridge Trek itineraries and let our local guides handle the planning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Explore Guided Trek Itineraries &rarr;
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
                  <Link href="/planning/drinking-water-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check safe drinking water &amp; purification guide
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
                This food &amp; dining guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
