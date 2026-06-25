import React from "react";
import Link from "next/link";

export default function Page() {
  const menuCategories = [
    {
      name: "Breakfast Items",
      icon: "",
      items: [
        { name: "Buckwheat Porridge (Tsampa)", desc: "Slow-release energy crop grown locally in the Swanta valley." },
        { name: "Tibetan Bread", desc: "Deep-fried local flatbread served with forest honey." },
        { name: "Organic Farm Eggs", desc: "Fresh eggs sourced directly from Magar village co-ops." }
      ]
    },
    {
      name: "Lunch & Dinner",
      icon: "",
      items: [
        { name: "Dal Bhat (Classic)", desc: "Rice, lentil soup, curried local greens (Saag), and spicy pickles. Unlimited refills." },
        { name: "Garlic Soup", desc: "Thin local garlic broth highly recommended by guides to combat altitude sickness." },
        { name: "Swanta Yak Cheese Platter", desc: "Rich local cheese produced at the community yak cheese farm in Swanta." }
      ]
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Guides &amp; Vibe</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Local Food &amp; Dining on the Khopra Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trek fueled by organic ingredients. Explore the teahouse menus, local delicacies, and nutritional advice for high-altitude trekking.
          </p>
        </div>

        {/* Sourcing Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">100% Locally Sourced Mountain Cuisine</h2>
          <p className="text-stone-600 leading-relaxed">
            Unlike major commercial routes in Nepal where packaged processed foods are imported by helicopter or mule, the community lodges along the Khopra Ridge circuit rely heavily on **local organic farming**. The vegetables are harvested from gardens situated right next to the lodges, the barley is ground locally, and the yak cheese is manufactured at the Swanta community cheese factory.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="mt-12 space-y-10">
          {menuCategories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl font-black text-stone-950 flex items-center gap-2.5 pb-2 border-b border-stone-200">
                <span className="text-2xl">{cat.icon}</span>
                {cat.name}
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                    <h4 className="font-extrabold text-stone-950 text-sm">{item.name}</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dietary and Hydration Guidance */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Dietary Guidelines for High Elevations</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Eat Carbohydrates:</strong> Dal Bhat is the ultimate fuel. The lentils provide proteins, and the rice/greens supply complex carbs for 7 hours of hiking.</li>
            <li><strong>Hydrate with Soups:</strong> Sip hot garlic soup or ginger lemon honey tea at night. Garlic helps dilate blood vessels, aiding oxygenation at 3,600m+.</li>
            <li><strong>Dietary Accommodations:</strong> All community lodges can easily accommodate vegetarian (veg Dal Bhat is standard), vegan, and gluten-free (buckwheat/rice-based) diets. Just notify your guide beforehand.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We audit lodge kitchens monthly for sanitation and nutritional quality. Our guides ensure food is prepared freshly and hot.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Taste the Authentic Himalayas</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our core 9-day itinerary to experience community lodge meals and farm-fresh organic hospitality.
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
