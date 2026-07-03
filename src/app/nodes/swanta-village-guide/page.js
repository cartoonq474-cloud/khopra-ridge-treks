import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/swanta-village-guide",
  },
  title: "Swanta Village Trek Guide: Khopra Ridge Descent, Homestays & Culture",
  description: "Discover Swanta Village (2,200m) on the Khopra Ridge trek—a Magar community known for terraced farms, yak cheese, homestays, and a forest descent from Khopra Danda.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Magar Community Node
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Swanta Village Trek Guide: Khopra Ridge Descent, Homestays &amp; Culture
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">After days of cold winds and open ridgeline trails, Swanta Village feels like stepping into a different world. Tucked into a quiet side-valley below <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge</Link>, this Magar farming community marks the point where alpine trekking gives way to terraced fields, warm lodges, and village life.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,200m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">7,217 feet (mild temperate)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Primary Ethnicity</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Magar</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Traditional farming culture</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Local Economy</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Yak Cheese</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Organic community factory</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Route Role</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Descent Node</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Reset point after Danda</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Facts
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Location &amp; Geography
              </a>
              <a href="#descent" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Khopra to Swanta Route
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodging &amp; Homestays
              </a>
              <a href="#culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Magar Culture &amp; Life
              </a>
              <a href="#why-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Stay Here?
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Itinerary Integration
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Village Comparisons
              </a>
              <a href="#scenery" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sunrise &amp; Beauty
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Swanta Village Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">For trekkers descending from Khopra Danda, Swanta Village is more than a place to sleep. It&apos;s a working example of how community-run tourism in the Annapurna region directly funds local schools and supports rural livelihoods. In this guide, we&apos;ll cover exactly where Swanta sits on the route, what the descent is like, what to expect from homestays and teahouses, and why so many trekkers consider it one of the most memorable stops on the Khopra Ridge trek.
            </p>
          </article>

          {/* SECTION 2: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where is Swanta Village Located in the Annapurna Region?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Swanta Village sits in a sheltered side-valley beneath Khopra Ridge, within the broader Annapurna region of west-central Nepal. It&apos;s part of a small cluster of Magar and Gurung villages that support the Khopra Ridge and Mohare Danda trekking circuits.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Swanta Village in Nepal and Its Altitude (2,200m)</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Swanta Village sits at approximately 2,200 m (7,217 ft). This altitude places it firmly in the temperate forest zone, well below the exposed, cold terrain of Khopra Ridge.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For trekkers, this matters in a practical way. After a night or two at higher elevation, the drop to Swanta usually brings noticeably milder temperatures, denser forest cover, and easier breathing. It&apos;s a natural recovery point built into the trek&apos;s geography.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Position of Swanta in the Khopra Ridge Trek Route</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Swanta is reached on the descent leg of the Khopra Ridge trek, typically after trekkers have spent time at Khopra Danda or the high camp near Khayer Lake. From Swanta, trails continue toward lower villages such as Ghorepani, linking it into the wider Ghorepani Poon Hill trek network.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This makes Swanta a connector village—part of the trail system that ties Khopra Ridge to other major Annapurna routes, rather than an isolated stop.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: DESCENT LEG */}
          <article id="descent" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge to Swanta Village Trekking Route
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The walk from Khopra Danda down to Swanta is one of the more dramatic transitions on the entire trek. It&apos;s where the landscape—and the feel of the trip—changes the most.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Descent from Khopra Danda</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Leaving Khopra Danda, the trail drops steadily through open ridge terrain before entering thick forest. As you lose elevation, rhododendron and oak trees gradually replace the bare alpine slopes, and the path narrows into a shaded forest track. The final stretch opens up into terraced fields and scattered lodges.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Duration, Distance &amp; Difficulty</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The descent typically takes around 3 to 5 hours. While it is a downhill stretch overall, the terrain includes steep, sometimes slippery sections—particularly through forested switchbacks. Tired knees can make this feel more demanding. Trekking poles and a steady pace are highly useful here.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-6">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Trail Environment: Rhododendron Forests</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">One of the highlights of this section is the forest itself. In spring, the rhododendron forest along this descent bursts into red, pink, and white blooms, turning the trail into one of the most photographed sections of the route. The shift from rocky foothills to dense green forest is a welcome contrast.
              </p>
            </div>

            {/* Quick Links to Related Routes */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Swanta Trails &amp; Lodging</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/swanta-village-lodge-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Swanta Lodging Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/khopra-ridge-to-swanta-village" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Khopra to Swanta</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/swanta-village-to-ghorepani" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Swanta to Ghorepani</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 4: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Swanta Village Accommodation and Homestays
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Magar Homestays</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Staying with a local Magar family offers a cozy, authentic experience. Rooms are basic with twin beds and warm blankets, but clean and well-kept. Hosts often share details about daily life and agricultural routines.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Teahouse Facilities</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Lodges offer comfortable twin rooms, wood-stove warmed dining halls, hot meals featuring organic local vegetables, basic device charging, and hot showers.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Community Support</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Swanta played a key role in launching the community lodge system. Profits from lodge stays directly fund Swanta High School teacher salaries, keeping secondary education accessible.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: CULTURE */}
          <article id="culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Life in Swanta Village (Culture, Farming &amp; Community)
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2"> Magar Community and Rural Lifestyle</h4>
                <p className="mt-1">Swanta is primarily home to the Magar community, one of the indigenous ethnic groups of Nepal&apos;s hill regions. Daily life revolves around farming, livestock, and seasonal agricultural tasks. Swanta retains a quieter, more traditional atmosphere than busier hubs.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Terraced Farming and Agricultural Landscape</h4>
                <p className="mt-1">The hillsides are shaped by terraced farming, with fields cut into the slopes to grow potatoes, barley, and maize. These terraces are one of the most visually striking features of the village, reflecting generations of mountain adaptation.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Yak Cheese Factory and Local Economy</h4>
                <p className="mt-1">Swanta is home to a community-run yak cheese factory. The cheese is sold locally and along the trekking route, providing a diversified income stream beyond farming and supporting the local economy.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Community Development and Education</h4>
                <p className="mt-1">The community-run lodge network revenue covers the local high school teacher salaries, eliminating the need for kids to walk hours to Ghorepani. This successful model has become a reference point for nearby villages.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: WHY STAY */}
          <article id="why-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Stay in Swanta Village on the Khopra Ridge Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Some trekkers consider pushing straight through to the next village. However, staying in Swanta is usually worth the extra time.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">After a steep, tiring descent from Khopra Danda, Swanta offers a genuine rest point with comfortable beds, hot food, and milder temperatures. It is one of the best places on the route to experience authentic village culture directly. Over-nighting supports the community lodge system that funds Swanta&apos;s school — a highly rewarding stop.
            </p>
          </article>

          {/* SECTION 7: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Swanta Village Trek Itinerary Integration
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Swanta typically fits into the descent phase of a longer Khopra Ridge itinerary, usually on day 6 or 7 of an 8–10 day trek.
            </p>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-3 text-xs text-stone-600">
              <p><strong>A common sequence looks like this:</strong></p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>High Camp or Khopra Danda (ridge exploration, Khayer Lake side trip)</li>
                <li>Descent to Swanta Village (overnight stay)</li>
                <li>Onward to Bayeli Kharka or toward Ghorepani</li>
              </ul>
              <p className="mt-3">This positioning makes Swanta a natural &quot;reset&quot; point between the high-altitude section of the trek and the lower-elevation villages further along the route.</p>
            </div>
          </article>

          {/* SECTION 8: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Swanta Village vs Other Trekking Stops
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Swanta vs Ghorepani Poon Hill</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Ghorepani is busier, more developed, and geared heavily toward sunrise views from Poon Hill. Swanta, by contrast, offers a quieter, more community-focused experience with fewer crowds and a stronger sense of local life. Solitude and culture lovers prefer Swanta.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Swanta vs Tadapani</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Tadapani sits at higher elevation and is known for closer mountain views and denser forest. Swanta, lower and more agricultural, trades some of those views for terraced farmland and a more relaxed village atmosphere. Both are excellent stops.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: SCENERY */}
          <article id="scenery" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Swanta Village Sunrise and Natural Beauty
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">While Swanta isn&apos;t primarily known as a sunrise viewpoint in the way Poon Hill is, mornings here have their own appeal. Soft light over the terraced fields, mist settling in the valley, and the surrounding forested hills create a calm, photogenic start to the day.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">In spring, this is enhanced further by blooming rhododendron on the surrounding slopes, adding color to the early morning views.
            </p>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Swanta Village
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Swanta Village located in Nepal?",
                  a: "Swanta Village is located in the Annapurna region of west-central Nepal, in a side-valley below Khopra Ridge, along the descent route toward Ghorepani."
                },
                {
                  q: "What is the altitude of Swanta Village?",
                  a: "Swanta Village sits at approximately 2,200 m (7,217 ft) above sea level."
                },
                {
                  q: "How difficult is the trek from Khopra Danda to Swanta?",
                  a: "The descent is moderately challenging—mostly downhill over 3 to 5 hours, with some steep, forested sections that can be tiring after several days of high-altitude trekking."
                },
                {
                  q: "Is Swanta Village worth staying overnight?",
                  a: "Yes. Swanta offers comfortable homestays, hot meals, and a chance to experience Magar village culture, making it one of the most rewarding overnight stops on the Khopra Ridge trek."
                },
                {
                  q: "What accommodation is available in Swanta Village?",
                  a: "Swanta offers teahouse and homestay-style lodges with private or shared rooms, dining halls, hot meals, and basic charging facilities."
                },
                {
                  q: "How long does it take to reach Swanta from Khopra Ridge?",
                  a: "Most trekkers take 3 to 5 hours to descend from Khopra Danda to Swanta Village, depending on pace and trail conditions."
                },
                {
                  q: "What makes Swanta Village special in the Annapurna region?",
                  a: "Swanta is known for its terraced farms, community-run yak cheese factory, and a community lodge system that directly funds the local high school—making it a standout example of community-based tourism."
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

          {/* SECTION 11: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Swanta Village isn&apos;t just a stop on the map—it&apos;s where the Khopra Ridge trek shifts from high-altitude wilderness into genuine community life. Between the forested descent, terraced farmland, yak cheese production, and a lodge system that funds local education, Swanta offers trekkers a rare combination of comfort, culture, and meaning.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re planning a full Khopra Ridge itinerary or simply researching where to spend your descent night, Swanta Village deserves a place on your route—not just as a rest stop, but as one of the trek&apos;s most memorable experiences.
            </p>
          </article>

          {/* SECTION 12: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to experience Swanta Village for yourself?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Our 9-Day Khopra Ridge trek includes an overnight stay in Swanta Village, with all permits, lodging, and local guides arranged for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Book Today &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Swanta Village guide is reviewed by certified local guides based in Kathmandu. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
