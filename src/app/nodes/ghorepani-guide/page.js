import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Ghorepani Village: Poon Hill Sunrise Trek Hub in the Annapurna Region",
  description: "Discover Ghorepani Village, the Annapurna region's trekking hub for the Poon Hill sunrise hike. Routes, rhododendron forests, teahouses, and Khopra Ridge links.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🌅 Trekking Sunrise Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ghorepani Village: Poon Hill Sunrise Trek Hub in the Annapurna Region
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            If you ask any guide in Pokhara where to catch the best sunrise in the Annapurna region, most will point you toward Ghorepani Village. Sitting at 2,860 meters on a centuries-old trade route, Ghorepani has become one of the busiest and most important trekking villages in Nepal — not because it&apos;s a final destination, but because of what it connects to.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,860m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">9,383 feet (cool mountain air)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Primary Viewpoint</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Poon Hill</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">3,210m (sunrise panorama)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Accommodation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">30+ Lodges</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Magar &amp; Gurung teahouses</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Connecting Trail</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Swanta Loop</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Gateway to Khopra Ridge</span>
            </div>
          </div>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Facts
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Location &amp; Geography
              </a>
              <a href="#reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reach It
              </a>
              <a href="#poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Poon Hill Hike
              </a>
              <a href="#routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Route Options
              </a>
              <a href="#hub" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Hub Role
              </a>
              <a href="#rhododendrons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Rhododendron Bloom
              </a>
              <a href="#villagelife" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse Experience
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Prep
              </a>
              <a href="#besttime" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Visit
              </a>
              <a href="#summary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Perfect Hub
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire &amp; Book
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Ghorepani Village Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              This is the launching point for the famous Poon Hill sunrise hike, where Dhaulagiri, Nilgiri, and the Annapurna range catch the first light of day. It&apos;s also a trail junction, where routes split toward Tadapani, Ghandruk, Swanta, Tatopani, and eventually Khopra Ridge. In spring, the surrounding hills turn into one of the world&apos;s largest rhododendron canopies.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              In this guide, we&apos;ll cover where Ghorepani is, how to get there from Pokhara, what the Poon Hill sunrise hike actually involves, the route options that branch out from the village, and how Ghorepani fits into a longer Annapurna trekking plan — including the connection to our Khopra Ridge trek.
            </p>
          </article>

          {/* SECTION 2: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where is Ghorepani Village Located?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Ghorepani in the Annapurna Conservation Area</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Ghorepani sits inside the Annapurna Conservation Area, Nepal&apos;s largest protected area and one of the most biodiverse trekking regions in the Himalayas. The village rests at roughly 2,860 meters (9,383 feet), high enough for cool mountain air and clear forest views, but low enough to remain accessible to trekkers of most fitness levels.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Geographically, Ghorepani occupies a saddle point between two ridgelines. This position is exactly why it became a trade pass centuries ago, and exactly why it works so well as a trekking hub today — trails arrive from the south and continue north, east, and west in several directions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Ghorepani is a Trekking Hub</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  A &quot;hub&quot; village isn&apos;t just a stop along a trail. It&apos;s a place where multiple route options converge, giving trekkers a choice of where to go next. Ghorepani fits this description better than almost any other village in the Annapurna foothills.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  From Ghorepani, you can hike up to Poon Hill for sunrise, then continue east toward Tadapani and Ghandruk, or descend west toward Swanta and Tatopani. From Swanta, a trail climbs toward Chhistibung and Khopra Danda. Few villages at this elevation offer this much route flexibility, which is why so many multi-day itineraries are built around it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Cultural Identity of Ghorepani</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Ghorepani sits in an area shaped by both Magar and Gurung communities, two of the ethnic groups most closely associated with trekking guide and porter work in Nepal. Many of the teahouses here are family-run, often for generations, and the architecture, food, and daily rhythm of the village reflect mountain life rather than tourist infrastructure built from scratch.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: HOW TO REACH IT */}
          <article id="reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Ghorepani from Pokhara
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Pokhara to Nayapul Trailhead</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Every standard route to Ghorepani begins in Pokhara, the gateway city for Annapurna treks. From Pokhara, most trekkers travel by local bus, shared jeep, or private vehicle to Nayapul, a roughly 1.5 to 2-hour drive depending on road conditions and traffic. Nayapul is the entry point into the Annapurna Conservation Area trail network.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">🥾 Nayapul to Ghorepani Trekking Route</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    From Nayapul, the trail follows the Modi Khola river valley before climbing steadily toward the village of Tikhedhunga. The real climb begins after Tikhedhunga, at Ulleri. Here, the trail turns into a long stone staircase — locally famous, and not always loved — that climbs roughly 1,500 steps up a steep hillside.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">⏱️ Trek Duration and Difficulty</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Most itineraries split this approach into two days: Day 1 from Nayapul to Tikhedhunga or Ulleri (3–4 hours), and Day 2 from Ulleri to Ghorepani (3–4 hours, mostly uphill). Combined, you are looking at 6–8 hours of walking, with a total elevation gain of around 1,400 meters.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 4: POON HILL */}
          <article id="poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Ghorepani to Poon Hill Sunrise Hike
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl">🌅</span>
                <h4 className="font-bold text-stone-950 text-base">Early Morning Ascent</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekkers typically leave their teahouse between 4:30 and 5:00 AM, walking by headlamp along a stone-paved trail. The climb from Ghorepani to Poon Hill covers about 450 meters of elevation gain over roughly 45 minutes to an hour.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl">⛰️</span>
                <h4 className="font-bold text-stone-950 text-base">Sunrise Panorama</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  At 3,210 meters, Poon Hill&apos;s viewing platform opens onto a complete panorama: Dhaulagiri (8,167m), the Annapurna range including Annapurna South and Annapurna I, Nilgiri, Machhapuchhre, and Hiunchuli.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl">📸</span>
                <h4 className="font-bold text-stone-950 text-base">World-Famous Viewpoint</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Poon Hill&apos;s reputation comes down to accessibility vs. reward. Unlike high-altitude viewpoints that demand days of acclimatization, Poon Hill is reachable on a short pre-dawn hike from a comfortable teahouse.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: ROUTE OPTIONS */}
          <article id="routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Ghorepani Trek Routes and Trail Options
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🌲 Ghorepani to Tadapani Route</h4>
                <p className="mt-1">
                  After the Poon Hill sunrise, many trekkers continue east toward Tadapani. This route winds through dense rhododendron and oak forest, with several ridge sections offering ongoing views of the Annapurna range. The walk typically takes 5–6 hours. From Tadapani, trails continue toward Ghandruk.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🏞️ Ghorepani to Swanta and Tatopani Descent</h4>
                <p className="mt-1">
                  Alternatively, trekkers heading west descend through forest toward Swanta Village, and onward to Tatopani, known for its natural hot springs beside the Kali Gandaki river. This route trades forest ridgelines for a steady descent into the river valley.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🏔️ Ghorepani to Khopra Ridge Extension</h4>
                <p className="mt-1">
                  Ghorepani connects directly into the Khopra Ridge system. The route runs from Ghorepani down to Swanta, then climbs through Chhistibung toward Khopra Danda. This extension turns a 3–4 day Poon Hill trip into a longer Annapurna adventure, typically adding 4–5 days.
                </p>
              </div>
            </div>

            {/* Quick Links to Related Nodes */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Related Annapurna Trail Nodes</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/swanta-village-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Swanta Village Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/nodes/tadapani-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Tadapani Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/nodes/ulleri-village-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Ulleri Village Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 6: TREKKING HUB ROLE */}
          <article id="hub" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Ghorepani as a Trekking Hub in the Annapurna System
            </h2>

            <div className="space-y-6 text-stone-600 text-sm">
              <p>
                <strong>Junction of Multiple Trekking Circuits:</strong> Few villages in the Annapurna region sit at the intersection of as many trail systems as Ghorepani. It connects the Poon Hill loop, the Ghorepani–Ghandruk–Tadapani circuit, and the longer Khopra Ridge and Mohare Danda routes. This means the same starting point can lead to dramatically different trekking experiences.
              </p>
              <p>
                <strong>Why Trekkers Stop in Ghorepani:</strong> Beyond its role as a junction, Ghorepani is a practical place to rest. With more than 30 teahouses, it has one of the highest concentrations of accommodation in the region at this elevation. It is also positioned at exactly the right distance from Poon Hill.
              </p>
              <p>
                <strong>Role in Multi-Route Itineraries:</strong> Because of its connectivity, Ghorepani rarely appears as a trek&apos;s endpoint in itineraries. It&apos;s almost always a midpoint — the place where a short Poon Hill trip can be extended into a longer Annapurna circuit, or where a Khopra Ridge trek begins its approach.
              </p>
            </div>
          </article>

          {/* SECTION 7: RHODODENDRONS */}
          <article id="rhododendrons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Rhododendron Forest Experience in Ghorepani
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌸 Spring Bloom</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  During March and April, the hillsides surrounding the village turn shades of deep red, pink, and white. Nepal&apos;s national flower blankets the trails during this window. Late March through mid-April is the most reliable period.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🦜 Forest Environment</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Lower sections near Tikhedhunga are subtropical, while higher up, rhododendron and oak forest takes over. This forest is part of a wider habitat supporting numerous bird species, making it popular with birdwatchers.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">📸 Photography</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The combination of a forest in full bloom and a Himalayan sunrise is rare. Photographers often time their visit specifically for the rhododendron season, using the sunrise as the headline shot.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: VILLAGE LIFE & TEAHOUSE EXPERIENCE */}
          <article id="villagelife" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Ghorepani Village Life and Teahouse Experience
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Teahouse and Mountain Lodge System</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  With more than 30 teahouses, Ghorepani has one of the densest concentrations of lodging in the Annapurna foothills. Most operate on the standard teahouse model: simple twin rooms, shared bathrooms (though attached bathrooms are increasingly common), and a communal dining hall heated by a central stove. Hot showers, charging points, and Wi-Fi are usually available for a small fee.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Food and Trekking Hospitality</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Teahouse menus in Ghorepani follow the familiar Annapurna pattern: dal bhat (lentils, rice, and vegetable curry), noodle and pasta dishes, soups, and basic breakfast items like porridge, eggs, and Tibetan bread. Many lodges also serve fresh apple pie, a regional specialty that has become a tradition along this route.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Local Culture of Magar and Gurung Communities</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  The people who run Ghorepani&apos;s teahouses are part of a longer tradition of mountain hospitality rooted in Magar and Gurung culture. Many families have worked in trekking tourism for decades, and that experience shows in how smoothly the village handles its busiest periods.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: DIFFICULTY & PREPARATION */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Difficulty Level and Trek Preparation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">⚖️ Moderate Difficulty</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The trek is moderate, requiring no technical skills or previous high-altitude experience. Trekkers comfortable walking 4–6 hours a day with a daypack typically manage without issues.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">🧗 Ulleri Staircase</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Climbing roughly 1,500 steps in succession is the steepest sustained climb on the route. The key to managing it is pacing — a slow, steady rhythm works far better than fast bursts.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">⚠️ Altitude &amp; Safety</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  At 2,860 meters, Ghorepani sits below the altitude where AMS becomes a major concern. The bigger practical concerns are temperature (Poon Hill mornings are cold) and physical fatigue.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="besttime" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Ghorepani Village
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌸 Spring (Mar–Apr)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Spring is best for the rhododendron bloom. The forest canopy comes alive, and daytime temperatures are comfortable, though trails and teahouses can be busy.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🍁 Autumn (Oct–Nov)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Autumn is widely considered the best season for mountain visibility. Post-monsoon skies tend to be very clear, giving the sharpest views of Dhaulagiri and Annapurna.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">❄️ Winter (Dec–Feb)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Winter brings colder temperatures and snow. Trails are quieter, teahouses are easier to book, and views can be exceptionally crisp — though mornings are very cold.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: WHY PERFECT HUB */}
          <article id="summary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why Ghorepani is the Perfect Trekking Hub
            </h2>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>Strategic Location:</strong> Ghorepani&apos;s value is in where it sits. Few villages let you experience a world-class sunrise viewpoint, a major rhododendron forest, and a multi-directional trail junction within the same short stay.
              </p>
              <p>
                <strong>Gateway to Poon Hill:</strong> The short, well-marked climb to Poon Hill makes this pairing one of the most efficient mountain experiences in the Himalayas.
              </p>
              <p>
                <strong>Connection Point for Khopra Ridge:</strong> For trekkers with more time, Ghorepani is where a short trip becomes a longer one. The route through Swanta and Chhistibung toward Khopra Danda extends the journey into less-crowded territory.
              </p>
            </div>
          </article>

          {/* SECTION 12: PLAN YOUR TREK */}
          <article id="plan" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Plan Your Ghorepani &amp; Poon Hill Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              If you&apos;re putting together a trekking itinerary in the Annapurna region, Ghorepani is one of the most useful villages to build around. Whether your plan is a short 3–4 day Poon Hill trip or a longer route extending toward Khopra Ridge, the logistics — access from Pokhara, the Ulleri climb, teahouse availability, and onward route options — all come together here.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Our guides are based locally in Pokhara and manage permits, lodging, and route planning for treks through this region, including our 9-Day Khopra Ridge trek, which uses Ghorepani and the Poon Hill sunrise as its opening highlight before continuing toward Khopra Danda.
            </p>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghorepani Village
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How difficult is the Ghorepani trek?",
                  a: "The Ghorepani trek is rated moderate. It involves sustained uphill walking, especially the stone staircase above Ulleri, but requires no technical skills and is manageable for trekkers with average fitness."
                },
                {
                  q: "How long does it take to reach Poon Hill from Ghorepani?",
                  a: "The hike from Ghorepani to Poon Hill takes roughly 45 minutes to an hour, covering about 450 meters of elevation gain on a well-maintained stone trail."
                },
                {
                  q: "Can beginners do the Ghorepani Poon Hill trek?",
                  a: "Yes. It's one of the most popular treks for first-time Himalayan visitors because it offers genuine mountain scenery and a sunrise viewpoint without requiring previous high-altitude experience."
                },
                {
                  q: "What is the best time to visit Ghorepani Village?",
                  a: "Spring (March–April) is best for the rhododendron bloom, while autumn (October–November) offers the clearest mountain views. Both are peak seasons, so early planning helps with teahouse availability."
                },
                {
                  q: "What mountains can be seen from Poon Hill?",
                  a: "From Poon Hill's summit at 3,210 meters, you can see Dhaulagiri, Annapurna South, Annapurna I, Nilgiri, Machhapuchhre, and Hiunchuli, among other peaks."
                },
                {
                  q: "How many days is the Ghorepani trek from Pokhara?",
                  a: "A standard Poon Hill trek via Ghorepani takes around 3–4 days round trip from Pokhara, including the Nayapul approach, the sunrise hike, and the return or loop route through Tadapani and Ghandruk."
                },
                {
                  q: "Can Ghorepani be combined with the Khopra Ridge Trek?",
                  a: "Yes. Ghorepani connects directly to the Khopra Ridge route via Swanta and Chhistibung, allowing trekkers to extend a short Poon Hill trip into a longer 7–9 day Annapurna adventure."
                },
                {
                  q: "Is Ghorepani crowded during peak season?",
                  a: "During spring and autumn, Ghorepani sees significant foot traffic, particularly around the Poon Hill sunrise hike. With 30+ teahouses, accommodation is generally available, but arriving earlier in the day during peak weeks is recommended."
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

          {/* SECTION 14: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Ghorepani Village earns its place at the center of Annapurna trekking not by being a destination in itself, but by being the point where everything connects. It&apos;s the launch pad for the Poon Hill sunrise, a passage through one of the world&apos;s great rhododendron forests, and a junction leading toward Tadapani, Swanta, Tatopani, and the Khopra Ridge system.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you&apos;re planning a short sunrise trip or building a longer Annapurna itinerary, understanding how Ghorepani fits into this wider trail network is the key to getting the most out of your trek.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to plan your Ghorepani and Poon Hill trek?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local guides handle permits, lodging, and route planning across the Annapurna region — including the 9-Day Khopra Ridge trek, which begins with the Poon Hill sunrise from Ghorepani.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Book Today &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>📍 Based in Pokhara, Nepal</span>
                  <span>💬 Free cancellation &amp; flexible changes</span>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This Ghorepani Village guide is reviewed by certified local guides based in Pokhara. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
