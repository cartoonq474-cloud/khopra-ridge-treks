import React from "react";
import Link from "next/link";
import InteractiveChecklist from "./InteractiveChecklist";

export const metadata = {
  alternates: {
    canonical: "/planning/packing-checklist",
  },
  title: "Interactive Trek Packing Checklist: Smart Packing Guide for Every Trekking Season",
  description: "Use our interactive trek packing checklist to build a custom gear list by season and trekking style. Track your progress, print it, and pack smarter for your trek.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800 print:bg-white print:text-black print:py-8 print:border-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)] print:hidden" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 print:hidden">Gear &amp; Equipment
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl print:text-black print:text-3xl">Interactive Trek Packing Checklist
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium print:text-stone-700">Packing for a trek is not the same as packing for a regular holiday. The right gear keeps you warm, dry, and safe on the trail, while the wrong gear adds weight you will regret carrying by day two. This interactive trek packing checklist is built to take the guesswork out of that process.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl print:hidden">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Porter Pack Weight</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">5 - 8 kg</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Daypack personal load</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Solo Pack Weight</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">10 - 15 kg</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Full weight on self-carry</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Layering System</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3 Core Layers</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Base, mid, and outer shell</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Rental Options</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Available</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Sleeping bags &amp; downs in Pokhara</span>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1 print:py-4 print:gap-4 print:px-0">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1 print:hidden">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#interactive-tool" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Interactive Checklist
              </a>
              <a href="#how-to-use" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Use the Tool
              </a>
              <a href="#core-essentials" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Core Essentials
              </a>
              <a href="#seasonal-recommendations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Seasonal Recommendations
              </a>
              <a href="#guided-vs-solo" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Guided vs Solo Differences
              </a>
              <a href="#high-altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Altitude &amp; Safety
              </a>
              <a href="#lightweight-strategies" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lightweight Strategies
              </a>
              <a href="#gear-rental" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Gear Rental vs Buying
              </a>
              <a href="#packing-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Common Mistakes to Avoid
              </a>
              <a href="#forgotten-items" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Forgotten Items
              </a>
              <a href="#expert-advice" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Expert Guides Advice
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/tours"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Explore Tour Packages
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16 print:space-y-8">
          
          {/* SECTION 1: INTERACTIVE CHECKLIST WIDGET */}
          <article id="interactive-tool" className="scroll-mt-12 space-y-6">
            <div className="border-b border-stone-200 pb-3 print:hidden">
              <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">Customize &amp; Pack Your Gear
              </h2>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">Instead of working from a generic list, you can customize your gear list based on the season you are trekking in and whether you have porter support. As you go, check off items, track your progress, and print the final list for offline use on the trail.
              </p>
            </div>
            
            {/* The interactive client component */}
            <InteractiveChecklist />
          </article>

          {/* SECTION 2: HOW TO USE */}
          <article id="how-to-use" className="scroll-mt-12 space-y-6 print:hidden">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Use This Interactive Trek Packing Checklist
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The sections below walk through exactly how to use the tool, what each gear category includes, and how your packing should change depending on the season, your trekking style, and the altitude you will be reaching. Whether this is your first multi-day trek or your tenth, this checklist is designed to help you pack with confidence.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-base">Select Your Trekking Season</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Your trekking season has the biggest impact on what you need to pack. Selecting the correct season adjusts the checklist automatically, so items like heavy down jackets or waterproof covers only appear when they are actually relevant.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-base">Choose Your Trekking Style</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Decide whether you are trekking with guided porter support or carrying your own gear as a solo trekker. This changes how much weight you personally need to manage and which items move from &quot;essential&quot; to &quot;optional.&quot;
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-base">Track Your Packing Progress</h4>
                <p className="text-xs text-stone-500 leading-relaxed">As you check off items, the progress bar updates in real time. Aiming to reach 100% before you leave home gives you a clear, visual confirmation that nothing essential has been missed.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-base">Print Your Checklist for Offline Use</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Once your list is finalized, you can print it directly from the page using Ctrl+P, or save it for offline reference. This is especially helpful in areas with limited internet access on the trail.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: CORE ESSENTIALS */}
          <article id="core-essentials" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Trekking Packing List for Every Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Regardless of season or trekking style, certain categories of gear form the foundation of any trekking packing list. These are the core items the checklist organizes into five groups: clothing and layers, footwear and socks, technical gear, medical and hygiene, and documents and cash.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Clothing and Layering Essentials</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Trekking clothing works best as a system of layers rather than a few bulky items. A typical layering system includes a base layer, a mid layer, and an outer shell, each serving a different purpose. Moisture-wicking thermal clothing is preferred over cotton because it manages sweat. Fleece jackets provide insulation, down jackets provide thermal warmth in cold evenings, and waterproof shells shield you from mountain winds and rain.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Footwear and Trekking Socks</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Footwear is one area where it pays to invest in quality and proper fit. Sturdy trekking shoes or hiking boots with good ankle support are essential for uneven trails, loose rocks, and steep descents. Make sure your boots are well broken-in before departure to avoid trail-stopping blisters. Pair them with moisture-wicking cushioned wool trekking socks and lightweight liner socks.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Technical Trekking Gear</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Trekking poles reduce joint impact, particularly on long descents, while a headlamp is essential for early starts and moving around teahouses after dark. Keep a high-capacity power bank packed to recharge electronics, and carry sturdy wide-mouth water bottles or a hydration bladder to support your daily hydration goals.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Sleeping Equipment and Comfort Items</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">While blankets are typically provided at mountain teahouses, they might not be sufficient during colder months. Bringing your own sleeping bag rated to the conditions ensures you stay comfortable. Combine it with a breathable sleeping bag liner for hygiene and an extra thermal layer.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Medical, Hygiene, Documents &amp; Cash</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Pack a basic first aid kit, water purification tablets, high SPF sunscreen, hand sanitizer, and altitude sickness medication. Most importantly, keep your original passport, ACAP and TIMS permits, insurance policy documents, and cash in Nepalese Rupees secured in a waterproof document pouch. Card readers and ATMs are nonexistent on the trail.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: SEASONAL RECOMMENDATIONS */}
          <article id="seasonal-recommendations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Seasonal Trek Packing Recommendations
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">While the core packing list applies year-round, the specific items you prioritize should shift depending on the season.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Spring &amp; Autumn</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Expect clear skies and moderate trekking temperatures. Focus on a versatile layering system that handles hot days and chilly nights, with a midweight down jacket for cold ridge evenings.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Winter Season</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Requires advanced thermal insulation. Heavy down jackets, thermal beanies, fleece pants, sub-zero sleeping bags, insulated gloves, and winter gaiters are essential.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Monsoon Season</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Heavy rain protection is key. Waterproof shell jackets, rain pants, a waterproof pack cover, dry bags, hiking gaiters, and footwear with superior grip are required.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: GUIDED VS SOLO */}
          <article id="guided-vs-solo" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Guided Trek vs Solo Trek Packing Differences
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you are trekking with porter support or carrying everything yourself has a direct impact on how much gear you can realistically bring and how it should be organized.
            </p>

            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-base">Guided Trekking (With Porter)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Porters carry the main weight (in a duffel bag, typically capped around 10-15kg per trekker). You only carry a lightweight daypack (5-8kg) containing your immediate items like water, layer modifications, camera, and sunscreen.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-base">Solo Trekking (Self-Carry)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Solo trekkers must be extremely disciplined. Pack weight must stay within 10-15kg. You will require a heavier, properly fitted internal frame backpack (50L-65L) and must carry your own sleeping bag and winter clothes.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: HIGH ALTITUDE SAFETY */}
          <article id="high-altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">High-Altitude Trekking Gear and Safety Essentials
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Treks that climb to higher elevations introduce additional considerations beyond the standard packing list. Temperature swings, stronger UV exposure, and the effects of altitude all call for specific preparation.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Wind &amp; Cold Layering</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Wind chill at Khopra Ridge (3,660m) or Khayer Lake (4,660m) can drop temperatures instantly. Keep a windproof layer accessible.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">UV &amp; Glare Protection</h4>
                <p className="text-xs text-stone-500 leading-relaxed">UV rays are much stronger at high altitude. Carry high quality UV sunglasses, SPF 50+ sunscreen, and lip balm.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Hydration &amp; Filtration</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Dehydration worsens altitude sickness. Bring water bottles/bladders and chlorine dioxide tablets or filters.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Emergency Backup Items</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Carry spare headlamp batteries, altitude medications (Diamox), and extra thermal socks.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: LIGHTWEIGHT STRATEGIES */}
          <article id="lightweight-strategies" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Lightweight Trekking Gear Strategies
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Once you have your essential gear list sorted, the next step is making sure you are not carrying more than necessary.
            </p>

            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>How to Avoid Overpacking:</strong>Limit base layers and socks to 2-3 sets total and rotate/air them out. Try removing one item from each gear pile before packing.</li>
              <li><strong>Multi-Purpose Gear:</strong>Use items like a buff (neck gaiter, sunband, cap) or convertible zip-off pants to save weight.</li>
              <li><strong>Smart Packing:</strong>Use packing cubes and dry bags to organize items. Distribute heavier items closer to your back and lower in the pack to improve balance.</li>
            </ul>
          </article>

          {/* SECTION 8: GEAR RENTAL */}
          <article id="gear-rental" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Gear Rental vs Bringing Your Own Equipment
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Not every item on this checklist needs to be purchased before your trek.
            </p>

            <div className="overflow-x-auto bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Category</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Bring From Home</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Rent in Pokhara / Kathmandu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-stone-900">Personal Fit</td>
                    <td className="px-4 py-3">Hiking boots (needs to be broken-in), socks, base layers, and prescription meds.</td>
                    <td className="px-4 py-3 text-red-650 font-medium">Do not rent (risk of blisters / low hygiene).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-stone-900">Bulky Gear</td>
                    <td className="px-4 py-3">Bring if you already own high quality lightweight versions.</td>
                    <td className="px-4 py-3 text-emerald-650 font-bold">Sleeping bags (-10°C or colder), heavy down jackets, and trekking poles.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 9: COMMON MISTAKES */}
          <article id="packing-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Common Trek Packing Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>Packing Too Many Clothes:</strong>You do not need a new outfit for every day. Quick-drying garments are meant to be worn multiple times.</li>
              <li><strong>Ignoring Seasonal Conditions:</strong>Avoid packing too light without rain or heavy cold backups. Weather changes quickly in the mountains.</li>
              <li><strong>Carrying Unnecessary Electronics:</strong>Keep devices minimal. Teahouse charging comes with fees and battery power drains fast in cold weather.</li>
              <li><strong>Forgetting Documents and Cash:</strong>Always carry cash in local currency; card payments are not accepted on the route. Keep permits in waterproof packets.</li>
              <li><strong>Underestimating High-Altitude Conditions:</strong>Even if elevation seems moderate, wind chill and UV index are amplified. Always prepare safety backups.</li>
            </ul>
          </article>

          {/* SECTION 10: FORGOTTEN ITEMS */}
          <article id="forgotten-items" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Forgotten Trekking Items
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-905 text-sm">Small Items, Big Help</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Buff (neck gaiter), earplugs for noisy wooden rooms, and moisturizing lip balm with UV block.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-905 text-sm">Comfort Essentials</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Light camp shoes (sandals or slip-ons), a quick-dry microfiber towel, and organizing packing cubes.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-905 text-sm">Guides Backup Picks</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Water purification tablets backup, a spare pair of gloves, and dry thermal socks.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: EXPERT ADVICE */}
          <article id="expert-advice" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Expert Packing Advice From Himalayan Trek Guides
            </h2>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
              <p className="text-xs text-stone-500 leading-relaxed">Our guides consistently report that first-time trekkers arrive with double the clothing volume they actually use. At altitude, cold hits hard after sunset, so prioritized insulation is critical.
              </p>
              <p className="text-xs text-stone-500 leading-relaxed font-semibold text-emerald-700">Guide Philosophy: Safety first, pack light, and prioritize essentials. Never compromise first-aid, hydration, and thermal protection to save weight.
              </p>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Packing
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What should I pack for a multi-day trek?",
                  a: "A multi-day trek requires a layering system for clothing, sturdy footwear, technical gear like a headlamp and trekking poles, a basic first aid kit, sleeping gear, and documents including permits, insurance, and cash. The interactive checklist above organizes all of these into categories based on your season and trekking style."
                },
                {
                  q: "How heavy should my trekking backpack be?",
                  a: "As a general guide, a daypack used with porter support typically falls between 5 and 8 kilograms, while a full pack for solo trekkers carrying their own gear often falls between 10 and 15 kilograms, depending on the season and trip length."
                },
                {
                  q: "Do I need a sleeping bag for teahouse trekking?",
                  a: "While teahouses usually provide blankets, these are not always warm enough, particularly during winter or at higher elevations. A sleeping bag, ideally paired with a sleeping bag liner, adds a reliable layer of warmth and comfort."
                },
                {
                  q: "What are the most important trekking essentials?",
                  a: "The most important trekking essentials include a layering system of clothing, well broken-in footwear, a properly fitted backpack, a headlamp, a first aid kit, sun protection, and your key documents and cash. These form the core of the checklist's five main categories."
                },
                {
                  q: "What shoes are best for trekking?",
                  a: "Sturdy trekking shoes or hiking boots with good ankle support are best for most multi-day treks, particularly on rocky or uneven terrain. Trail runners can work for shorter, drier, lower-altitude treks, but offer less protection in challenging conditions."
                },
                {
                  q: "How does a winter trekking packing list differ from a spring checklist?",
                  a: "Winter trekking requires heavier insulation, including a warmer down jacket, insulated gloves, a sub-zero rated sleeping bag, and additional gear like gaiters. Spring and autumn checklists focus more on a flexible layering system to handle variable daytime and evening temperatures."
                },
                {
                  q: "Can I rent trekking gear instead of bringing my own?",
                  a: "Yes, bulkier seasonal items such as sleeping bags, down jackets, and trekking poles are commonly available to rent in trekking hubs. Personal items like footwear, socks, and medications are generally better brought from home."
                },
                {
                  q: "What should be included in a trekking first aid kit?",
                  a: "A trekking first aid kit should cover blister treatment, minor cuts and scrapes, headache and stomach remedies, and any personal medications you take regularly, packed with a few extra days' supply as a buffer."
                },
                {
                  q: "How do I pack light for a mountain trek?",
                  a: "Packing light involves choosing multi-purpose items like a buff, limiting clothing to two or three versatile sets, using packing cubes and dry bags for organization, and reviewing your pack to remove 'just in case' items before departure."
                },
                {
                  q: "Is this checklist suitable for trekking in Nepal?",
                  a: "Yes, this checklist is designed with Himalayan trekking conditions in mind, including teahouse trekking, high-altitude gear, and seasonal variations relevant to Nepal's Annapurna region and similar trekking areas."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
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

          {/* SECTION 13: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Packing well for a trek comes down to a few core principles: build a flexible layering system, choose footwear you trust, prepare for the season and altitude you will actually experience, and avoid unnecessary weight wherever possible. This interactive trek packing checklist brings all of these elements together in one customizable, printable tool.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Before your next trek, take a few minutes to select your season and trekking style, work through each category, and aim to reach 100% on your packing progress. A few minutes spent here now can mean a noticeably more comfortable, confident experience once you are on the trail.
            </p>
          </article>

          {/* SECTION 14: CTA & CONTINUE PLANNING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden print:hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready for the Trek?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Explore our guided Khopra Ridge Trek packages and let our local guides help you plan the rest of your trip, from permits and route timing to accommodation along the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/tours"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >View All Tours &amp; Packages &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/altitude/khopra-trek-altitude-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Review the elevation and altitude chart for your route
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4 print:hidden">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This packing guide and interactive checklist has been compiled and vetted by licensed Kathmandu-based guides and mountain rescue specialists. We regularly adjust specifications based on seasonal weather profiles to keep packs safe and light.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
