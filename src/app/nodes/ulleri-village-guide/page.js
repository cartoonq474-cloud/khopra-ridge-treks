import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Ulleri: The Traditional Magar Ridge Village on the Annapurna Trek",
  description: "Discover Ulleri, the famous Magar ridge village on the Annapurna trekking route. Learn about its 3,200 stone steps, culture, altitude, views, and how to plan your trek.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Traditional Magar Ridge Settlement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Ulleri: The Traditional Magar Ridge Village
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Few villages on the Annapurna trekking routes leave as strong an impression as Ulleri. Perched dramatically on a steep ridge at 2,050 meters, this traditional Magar settlement is best known for one thing: a punishing, legendary staircase of roughly 3,200 stone steps that climbs straight up from the river below.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,050m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">6,725 feet (Ridge setting)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Key Challenge</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,200 Steps</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Relentless stone staircase</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Ethnic Community</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Magar</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">One of Nepal&apos;s oldest groups</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Peak Vistas</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Annapurna S.</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Including Hiunchuli panoramas</span>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Overview
              </a>
              <a href="#location-geography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Location &amp; Geography
              </a>
              <a href="#quick-facts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Facts Table
              </a>
              <a href="#why-famous" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Ulleri is Famous
              </a>
              <a href="#staircase-trek" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Staircase Explained
              </a>
              <a href="#trekking-through" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trekking Through
              </a>
              <a href="#magar-culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Magar Culture
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation &amp; Food
              </a>
              <a href="#mountain-views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Mountain Views
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Ulleri vs Ghandruk/Ghorepani
              </a>
              <a href="#trekking-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Essential Trekking Tips
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">More Than Just a Legendary Climb
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">But reducing Ulleri to &quot;the village with the steps&quot; misses most of what makes it worth visiting. We&apos;ve guided trekkers through this region for years, and Ulleri consistently stands out — not just for the climb, but for its weathered stone houses, terraced fields, and some of the clearest ridge-top views of Annapurna South and Hiunchuli you&apos;ll find anywhere on the route.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Whether you&apos;re trekking the classic route toward Ghorepani and Poon Hill, or passing through on a longer Annapurna itinerary, this guide covers everything you need: where Ulleri is, what the staircase is really like, how the village fits into your route, and why many trekkers wish they&apos;d planned an overnight stay here.
            </p>
          </article>

          {/* SECTION 2: LOCATION AND GEOGRAPHY */}
          <article id="location-geography" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Ulleri Village Located?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Ulleri Altitude and Geographic Setting</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ulleri sits at an elevation of 2,050 meters (6,725 feet), perched on a steep ridge above the Bhurungdi Khola valley. The village occupies a commanding position on the hillside, with houses stacked along the slope in tiers connected by stone pathways. This ridge-top setting is part of why Ulleri feels so dramatic on arrival: the terrain suddenly opens up, and the village spreads out across the slope with terraced fields framing it on every side.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Ulleri in the Annapurna Conservation Area</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ulleri lies within the Annapurna Conservation Area, Nepal&apos;s largest protected area and one of the most biodiverse regions in the country. This designation means the trails, forests, and farmland around the village are managed with conservation in mind, and trekkers passing through need a valid ACAP permit. This also means the surrounding rhododendron forests and ridge landscapes are protected from unchecked development — which is why the views here remain so unspoiled.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Distance From Pokhara and Major Trekking Gateways</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Most trekkers reach Ulleri as part of a multi-day route starting from Pokhara. The typical sequence runs from Pokhara to <Link href="/nodes/nayapul-transit-hub" className="text-emerald-700 font-bold hover:underline">Nayapul</Link>by road, then on foot through Tikhedhunga before the climb to Ulleri begins. Tikhedhunga, the small settlement at the base of the staircase, marks the official start of the ascent. From there, it&apos;s a steep but steady climb to Ulleri — one of the most physically demanding short stretches on this part of the Annapurna trekking network.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: QUICK FACTS */}
          <article id="quick-facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Quick Facts About Ulleri
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Detail</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Elevation</td>
                    <td className="px-6 py-4 text-stone-600">2,050 m (6,725 ft)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Ethnic community</td>
                    <td className="px-6 py-4 text-stone-600">Magar</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Key feature</td>
                    <td className="px-6 py-4 text-stone-600">Approx. 3,200 stone steps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Route position</td>
                    <td className="px-6 py-4 text-stone-600">Between Tikhedhunga and Banthanti/Ghorepani</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Conservation area</td>
                    <td className="px-6 py-4 text-stone-600">Annapurna Conservation Area</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">Ulleri is a large village by trekking-route standards, and it has a solid number of teahouses offering standard private rooms. Most lodges provide basic amenities — a bed, blankets, a shared bathroom in many cases, and a dining hall where meals are served. Wi-Fi and device charging are usually available, though sometimes for a small fee. Hot showers are common but may carry an extra charge, particularly outside the peak season.
            </p>
          </article>

          {/* SECTION 4: WHY FAMOUS */}
          <article id="why-famous" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Ulleri Is Famous Among Trekkers
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">People visit Ulleri for three main reasons: the challenge of the stone staircase, the chance to experience genuine Magar village life, and the ridge views that open up once you&apos;ve made the climb.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">The 3,200 Steps</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Ulleri&apos;s reputation rests largely on its staircase — a long, hand-carved stone stairway that climbs from the Bhurungdi Khola near Tikhedhunga up to the village. It gains significant elevation in a short horizontal distance, making it the first real test of the trip.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Magar Culture</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Belonging to the Magar community, one of Nepal&apos;s oldest indigenous groups, Ulleri features traditional stone houses painted in white and ochre lining the hillside, surrounded by terraced plots growing barley, potatoes, and millet.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Ridge Viewpoint</h4>
                <p className="text-xs text-stone-500 leading-relaxed">On clear mornings, Ulleri offers direct, unobstructed views of Annapurna South (7,219 m) and Hiunchuli (6,441 m). Because the village sits on an open ridge rather than tucked into a forested slope, these views are rarely blocked.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: STAIRCASE TREK EXPLAINED */}
          <article id="staircase-trek" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The Ulleri Stone Staircase Trek Explained
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The staircase is commonly cited as having around 3,200 stone steps, climbing from the riverside at Tikhedhunga to the village of Ulleri. While exact counts vary slightly depending on the source and any trail maintenance over the years, the figure gives trekkers a realistic sense of just how long and steep this section is.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">How Difficult Is the Ulleri Climb?</h4>
              <p className="text-xs text-stone-500 leading-relaxed">For a reasonably fit trekker, the climb from Tikhedhunga to Ulleri typically takes between 1.5 and 2.5 hours, depending on pace, weather, and how many breaks are taken. It&apos;s rated as moderately to highly strenuous — not technical, but relentless in its steepness. The difficulty comes less from any single section and more from the sheer consistency of the climb. There&apos;s very little flat ground to recover on, which is why pacing matters so much here.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <h4 className="font-bold text-emerald-950 text-sm">Tips for Climbing the Stone Staircase</h4>
              <ul className="list-disc pl-5 text-xs text-emerald-900 space-y-2 leading-relaxed mt-2">
                <li><strong>Take small, deliberate steps:</strong>Long strides on stone steps waste energy and increase strain on the knees.</li>
                <li><strong>Keep a slow, steady tempo:</strong>Rushing the climb leads to early exhaustion; a slower pace you can sustain beats a fast pace you can&apos;t.</li>
                <li><strong>Hydrate regularly:</strong>Short, frequent sips work better than large gulps during breaks.</li>
                <li><strong>Use trekking poles:</strong>They reduce the load on your knees and improve balance on uneven stone surfaces.</li>
                <li><strong>Take breaks on flat steps:</strong>This keeps the trail clear for other trekkers and local porters carrying loads.</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-stone-600 text-sm">
              <h4 className="font-bold text-amber-950 text-base">Common Mistakes First-Time Trekkers Make</h4>
              <p className="mt-2 text-xs text-amber-900 leading-relaxed">The most frequent mistake is starting too fast. Adrenaline and fresh legs at Tikhedhunga often lead trekkers to set an unsustainable pace, which catches up with them halfway up. Carrying too much weight in daypacks and underestimating hydration needs are also common issues, even on cooler days.
              </p>
            </div>
          </article>

          {/* SECTION 6: TREKKING THROUGH */}
          <article id="trekking-through" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trekking Through Ulleri Village
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Ulleri sits at a key junction point along the lower trail, acting as a portal to high-altitude loops.
            </p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Nayapul to Ulleri Trek</h4>
                <p className="mt-1">The journey to Ulleri typically begins at <Link href="/nodes/nayapul-transit-hub" className="text-emerald-700 font-bold hover:underline">Nayapul</Link>, the common trailhead reached by road from Pokhara. From Nayapul, the trail follows the Modi Khola valley through small settlements before reaching Tikhedhunga, where the stone staircase to Ulleri begins. This first stage is relatively gentle compared to what follows.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Ulleri to Banthanti</h4>
                <p className="mt-1">Beyond Ulleri, the trail continues climbing — though at a noticeably gentler gradient than the staircase below — through forested terrain toward Banthanti. This stretch passes through rhododendron and oak forest, which is particularly striking during spring flowering season.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Ulleri to Ghorepani Trek</h4>
                <p className="mt-1">From Ulleri, most trekkers continue toward Ghorepani, the village best known as the base for the Poon Hill sunrise viewpoint. This stage generally takes between 2.5 and 3.5 hours, passing through Banthanti and climbing steadily through forest. Read more details in our <Link href="/nodes/ghorepani-guide" className="text-emerald-700 font-bold hover:underline">Ghorepani Guide</Link>.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">Ulleri also serves as a key stage for trekkers heading toward the Khopra Ridge region, or for those approaching from longer Annapurna circuits. For multi-day itineraries, Ulleri often functions as either a first significant overnight stop or a transitional point between lower-altitude valleys and the higher ridge routes ahead.
            </p>
          </article>

          {/* SECTION 7: MAGAR CULTURE */}
          <article id="magar-culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Magar Culture and Daily Life in Ulleri
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Magar ethnic group brings a unique culture, language, and architectural style that distinguishes Ulleri from neighboring towns.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Stone Houses &amp; Village Architecture</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The houses in Ulleri are built from local stone, with walls typically finished in white and ochre paint. They&apos;re arranged in tight clusters along the ridge, connected by narrow stone paths and steps. Stone construction provides insulation against temperature swings and has proven durable across generations.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Farming &amp; Rural Mountain Livelihoods</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Around the village, terraced fields cut into the hillside grow barley, potatoes, and millet. These terraces represent generations of agricultural adaptation to steep terrain. For trekkers, walking through these fields offers a glimpse of subsistence farming that has sustained mountain communities here long before trekking tourism arrived.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">Unlike many trekking villages that have been substantially rebuilt around tourism, Ulleri retains a strong sense of being a working village first — tourism exists alongside, not in place of, traditional life. Trekkers passing through during festival periods may notice increased activity in the village — communal gatherings, music, or visible preparations.
            </p>
          </article>

          {/* SECTION 8: ACCOMMODATION & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation and Food in Ulleri
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Ulleri offers a good selection of standard private teahouses — more than many smaller villages further along the route.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Teahouses and Lodges in Ulleri</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Rooms are typically simple: twin beds, a small table, and shared or attached bathroom facilities depending on the lodge. Given the village&apos;s size and its position right after the demanding staircase climb, many trekkers choose to stop here for the night rather than push on immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">What Food Can Trekkers Expect?</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Standard teahouse menus apply in Ulleri, with dal bhat (lentils, rice, and vegetable curry) as the most common and often best-value option. Other typical choices include noodle dishes, fried rice, soups, and basic breakfast items like porridge, eggs, and pancakes. Hot tea, ginger lemon honey drinks, and coffee are widely available.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Is Ulleri Worth Staying Overnight?</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Yes — and this is one of the most overlooked decisions on this route. Many trekkers, having just completed the staircase climb, are tempted to push on to Banthanti or Ghorepani the same day. But staying overnight in Ulleri has real advantages: the morning views of Annapurna South and Hiunchuli are often clearest right after sunrise. An overnight stay also gives you time to walk through the village, observe daily Magar life, and recover properly.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: MOUNTAIN VIEWS */}
          <article id="mountain-views" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The Best Mountain Views From Ulleri
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Because of its open ridge position, the views from the upper levels of Ulleri are wide and uninterrupted.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Annapurna South (7,219m)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Annapurna South is one of the most prominent peaks visible from Ulleri on clear days. Its position relative to the village means it&apos;s often one of the first major peaks trekkers see clearly after the climb from Tikhedhunga.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Hiunchuli (6,441m)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Hiunchuli sits directly alongside Annapurna South in the view from Ulleri&apos;s ridge. Together, these peaks frame the upper end of the valley and give a sense of scale that&apos;s hard to appreciate from lower, more enclosed sections of the trail.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">Beyond the high peaks, Ulleri&apos;s ridge position offers wide views back down the Bhurungdi valley toward Pokhara. The combination of terraced fields in the foreground, forested slopes in the middle distance, and snow peaks beyond creates one of the more complete mountain panoramas on this section of the route.
            </p>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Ulleri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Rhododendron forests between Ulleri and Banthanti bloom in red, pink, and white. Stable weather and great views.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Autumn (Sep–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Peak season. Clear skies, dry trails, comfortable climbing temperatures, and the sharpest peak visibility.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Winter (Dec–Feb)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Cold mornings and evenings, but crystal-clear blue skies. Quieter trails are a fair trade-off for the cold.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Monsoon (Jun–Aug)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Heavy rain. Stone steps become slippery and leeches are common. Trekking poles are essential.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Ulleri
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The classic approach remains the most rewarding way to experience the transition from low-elevation valleys to the high ridges of Annapurna.
            </p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Traditional Walking Route</h4>
                <p className="mt-1">The standard route starts with road transport from Pokhara to Nayapul, followed by trekking through Tikhedhunga and up the stone staircase. This combination of road and trail access makes Ulleri reachable within a day from Pokhara for most trekkers. Walking preserves the classic trekking experience and the sense of achievement.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Jeep Access to Ulleri</h4>
                <p className="mt-1">In recent years, unpaved jeep roads have extended further into parts of the Annapurna foothills, and some sections near Ulleri may be accessible by jeep depending on current road conditions. However, road conditions in this region can change with seasonal landslides and monsoon washouts, so this option should always be confirmed locally.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Ulleri vs Other Villages on the Annapurna Trek
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Ulleri vs Ghandruk</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk</Link>is a larger, more tourism-developed village known primarily for its Gurung heritage and panoramic Annapurna views from a gentler approach. Ulleri, by contrast, offers a steeper, more physically demanding arrival and a distinctly Magar cultural identity.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Ulleri vs Ghorepani</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Ghorepani is larger and serves primarily as the base for the Poon Hill sunrise hike, with a correspondingly busier, more tourist-oriented atmosphere. Ulleri feels more like a working village, with the staircase climb serving as a natural filter that gives it a quieter, more grounded character.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 13: ESSENTIAL TIPS */}
          <article id="trekking-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Trekking Tips for Visiting Ulleri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Fitness and Preparation</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">The climb to Ulleri is one of the more demanding short stretches on the Ghorepani-Poon Hill route, so some baseline fitness — regular walking, stair climbing, or hiking in the weeks before your trip — makes a noticeable difference. You don&apos;t need technical climbing experience, but cardiovascular endurance helps.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base font-sans">What to Pack for the Climb</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">A few items are particularly useful: trekking poles, a hydration system that&apos;s easy to access without stopping, layered clothing for temperature changes between the valley and the ridge, and footwear with good grip for wet stone steps.
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm mt-4">
              <h4 className="font-bold text-stone-950 text-sm">Safety and Responsible Trekking</h4>
              <p className="text-xs text-stone-500 leading-relaxed mt-2">Stick to the main trail, especially on the staircase, where shortcuts can be unstable. Yield to porters and pack animals on narrow sections, and be mindful that the stone steps double as the main route for local residents — not just trekkers.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Ulleri
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Ulleri village located in Nepal?",
                  a: "Ulleri is located in the Annapurna foothills, within the Annapurna Conservation Area, between Tikhedhunga and Banthanti on the route toward Ghorepani."
                },
                {
                  q: "What is the altitude of Ulleri?",
                  a: "Ulleri sits at an elevation of 2,050 meters (6,725 feet)."
                },
                {
                  q: "Why is Ulleri famous?",
                  a: "Ulleri is best known for its approximately 3,200 stone steps climbing up from Tikhedhunga, its traditional Magar culture, and its panoramic views of Annapurna South and Hiunchuli."
                },
                {
                  q: "How many stone steps are there in Ulleri?",
                  a: "The staircase is commonly cited as having around 3,200 hand-carved stone steps, though exact counts can vary slightly."
                },
                {
                  q: "How difficult is the Ulleri staircase trek?",
                  a: "The climb is rated moderately to highly strenuous, typically taking 1.5 to 2.5 hours for a reasonably fit trekker, with little flat ground to break up the ascent."
                },
                {
                  q: "How long does it take to trek from Ulleri to Ghorepani?",
                  a: "The trek from Ulleri to Ghorepani generally takes between 2.5 and 3.5 hours, passing through Banthanti along forested trails."
                },
                {
                  q: "Can vehicles reach Ulleri?",
                  a: "Jeep access to parts of this region has expanded in recent years, but road conditions vary seasonally. Most trekkers still reach Ulleri on foot via the traditional route from Nayapul and Tikhedhunga."
                },
                {
                  q: "What ethnic group lives in Ulleri?",
                  a: "Ulleri is a traditional Magar village, one of Nepal's oldest indigenous communities."
                },
                {
                  q: "Is Ulleri worth staying overnight?",
                  a: "Yes. An overnight stay allows trekkers to recover after the staircase climb, experience village life, and catch clear morning views of Annapurna South and Hiunchuli before clouds build."
                },
                {
                  q: "What mountains can be seen from Ulleri?",
                  a: "On clear days, Ulleri offers direct views of Annapurna South (7,219 m) and Hiunchuli (6,441 m), along with the valley stretching back toward Pokhara."
                },
                {
                  q: "When is the best time to visit Ulleri?",
                  a: "Autumn (September–November) and spring (March–May) offer the most stable weather and best visibility, with spring also bringing rhododendron blooms along the trail toward Banthanti."
                },
                {
                  q: "Is Ulleri part of the Annapurna Conservation Area?",
                  a: "Yes, Ulleri lies within the Annapurna Conservation Area, and trekkers passing through need a valid ACAP permit."
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

          {/* SECTION 15: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Ulleri rewards those willing to earn the view. The climb from Tikhedhunga is one of the toughest short stretches on the Ghorepani-Poon Hill route, but it leads to a village that offers far more than a place to catch your breath — traditional Magar architecture, terraced fields, and some of the clearest ridge views of Annapurna South and Hiunchuli anywhere on this trail.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re tackling the classic Poon Hill loop, continuing toward Khopra Ridge, or simply curious about one of the Annapurna region&apos;s most distinctive villages, Ulleri deserves more than a passing glance — and ideally, more than a passing visit.
            </p>
          </article>

          {/* SECTION 16: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Annapurna Trek With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Ready to experience Ulleri and the wider Annapurna region for yourself? Our local guides handle every detail — permits, lodging, transport, and route planning — so you can focus on the trek itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Get in Touch with our Local Trekking Team &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>Based in Ekata Basti Marg, Kathmandu 44600, Nepal</span>
                  <span>Free cancellation &amp; flexible changes</span>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Ulleri village guide is reviewed by certified local guides based in Kathmandu. We regularly inspect road conditions, staircase maintenance status, and village lodge rosters to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
