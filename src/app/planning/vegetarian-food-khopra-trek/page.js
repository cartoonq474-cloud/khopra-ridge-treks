import React from "react";
import Link from "next/link";

export default function Page() {
  const dishes = [
    {
      name: "Nepalese Dal Bhat",
      desc: "The national dish of Nepal. Composed of steamed rice (Bhat), lentil soup (Dal), vegetable curry (Tarkari), and pickles (Achar). It is served with free refills, making it the most cost-effective and energy-dense meal on the trail."
    },
    {
      name: "Sherpa Garlic Soup",
      desc: "An essential high-altitude soup. Garlic is believed by local communities to expand blood vessels and aid oxygen circulation, helping prevent symptoms of Acute Mountain Sickness (AMS)."
    },
    {
      name: "Potato Variations",
      desc: "Grown locally in Swanta and Ghandruk, potatoes are a trail staple. You can order them boiled, fried, mashed, or baked with cheese and spices."
    },
    {
      name: "Pasta & Noodles",
      desc: "Vegetable chow mein (fried noodles) and vegetable pasta with cheese are readily available at all lodges, providing high carbohydrate loads for climbing."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Vegetarian Food</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Dining</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Vegetarian Food Guide (Khopra Trek)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Dal Bhat power and beyond. Learn why choosing vegetarian dining is the safest, most hygienic, and most energetic option in high-altitude lodges.
          </p>
        </div>

        {/* Safety Recommendation */}
        <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Why We Recommend Going Vegetarian</h3>
          <p className="text-xs leading-relaxed font-medium">In the high nodes of the Annapurna conservation area, meat is transported up on the backs of mules or porters from lower market towns without refrigeration. Due to the lack of cold storage chains, meat can spoil rapidly, posing a high risk of food poisoning or stomach bugs. Eating a fresh vegetarian diet is the single best way to ensure you stay healthy and active on the trail.
          </p>
        </div>

        {/* Dishes list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Top Vegetarian Options at the Lodges</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {dishes.map((dish, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-extrabold text-stone-950 text-base mt-2">{dish.name}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Stay Healthy on the Trail</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides collaborate directly with lodge cooks to ensure all vegetarian meals are prepared hygienically using clean, boiled water.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
