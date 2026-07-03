import React from "react";
import Link from "next/link";

export default function CultureFoodSection() {
  const foodTips = [
    "Order hot, freshly cooked food rather than anything that has been sitting out.",
    "Skip meat above 3,000 m, where refrigeration is unreliable.",
    "Choose dal bhat when in doubt; most teahouses offer free refills.",
    "Eat at every meal stop, even a small one, to keep your energy up for the climbs.",
    "Pack nuts, dried fruit, and energy bars as backup snacks for long days."
  ];

  const waterTips = [
    "Drink 4 liters (135 fl oz) of water a day, plus any tea, coffee, or soft drinks.",
    "Bring a reusable bottle, since single-use plastic bottles are banned inside the Annapurna Conservation Area."
  ];

  return (
    <section className="py-24 bg-[#0e1e1a] text-white border-t border-emerald-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Culture & Wildlife */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1.5 rounded-full inline-block mb-4 border border-emerald-900/50">Experience</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 text-white">
              Unique Culture and Wildlife on the Khopra Ridge Trek
            </h2>
            <p className="text-stone-300 leading-relaxed">
              The trail passes through Magar and Gurung villages where Hindu and Buddhist traditions exist side by side. Community-run lodges in villages like Swanta give trekkers direct contact with local family life. The Annapurna Conservation Area supports 105 species of mammals and 518 species of birds. Watch the forested sections for the Himalayan Monal, Nepal's colorful national bird, along with musk deer and langurs. Higher pastures near Dobato and Khopra Ridge are seasonal grazing ground for yaks and water buffalo herded by local families.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-900/50 rounded-3xl p-6 border border-emerald-900/30 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-emerald-400 block text-2xl mb-1">518</span>
              <span className="text-xs text-stone-400 uppercase tracking-widest">Bird Species</span>
            </div>
            <div className="bg-stone-900/50 rounded-3xl p-6 border border-emerald-900/30 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-emerald-400 block text-2xl mb-1">105</span>
              <span className="text-xs text-stone-400 uppercase tracking-widest">Mammal Species</span>
            </div>
            <div className="bg-stone-900/50 rounded-3xl p-6 border border-emerald-900/30 flex flex-col items-center justify-center text-center col-span-2">
              <span className="font-bold text-emerald-400 block text-xl mb-1">Magar & Gurung</span>
              <span className="text-xs text-stone-400 uppercase tracking-widest">Local Communities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent mb-24"></div>

        {/* Food & Water section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1.5 rounded-full inline-block mb-4 border border-emerald-900/50">Nutrition & Hydration</span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            What to Expect: Food on Khopra Ridge Trek
          </h2>
          <p className="mt-6 text-stone-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Teahouse kitchens on this trek serve a mix of Nepali, Tibetan, and simple Western dishes, with breakfast and dinner included at your overnight stop and lunch taken at a teahouse along the trail.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="bg-stone-950/40 rounded-3xl p-8 border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Meals on the Trek
            </h3>
            <p className="text-stone-300 leading-relaxed text-sm">
              Breakfast options include porridge, toast, eggs, pancakes, and rice dishes. Lunch and dinner center on dal bhat, a plate of rice, lentils, and vegetables eaten across Nepal, along with momo dumplings, fried noodles, fried rice, and noodle soup. Drinks on offer include black and milk tea, coffee, hot chocolate, soft drinks, and bottled or boiled water.
            </p>
          </div>
          
          <div className="bg-stone-950/40 rounded-3xl p-8 border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Dietary Restrictions
            </h3>
            <p className="text-stone-300 leading-relaxed text-sm">
              Vegetarians eat well on this route, since dal bhat is a vegetable-based meal by default and meat is reserved mainly for festivals. Vegan trekkers should pack protein bars, since plant-based protein options are limited at altitude. Tell us about any allergy or dietary restriction before booking so we can brief the teahouses in advance.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16 items-start">
          <div className="bg-emerald-950/30 rounded-3xl p-8 border border-emerald-900/50 h-full">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-emerald-900/50 pb-4">Tips on Food</h3>
            <ul className="space-y-4">
              {foodTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-stone-300 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="bg-stone-950/40 rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Water on the Trek
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm">
                Treat all water before drinking it, including tap and spring water, since herds or settlements upstream can contaminate the source. Bring purification tablets or a filter bottle and wait 30 minutes after treating water before drinking it.
              </p>
            </div>
            
            <div className="bg-blue-950/30 rounded-3xl p-8 border border-blue-900/50">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-blue-900/50 pb-4">Tips on Water</h3>
              <ul className="space-y-4">
                {waterTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-stone-300 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
