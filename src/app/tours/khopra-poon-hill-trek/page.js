import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge & Poon Hill Combination Trek: Complete 10-Day Itinerary, Cost & Guide",
  description: "Plan the perfect Khopra Ridge & Poon Hill Combination Trek. Explore the full 10-day itinerary, route overview, difficulty, permits, cost, and the optional Khayer Lake extension with local expert insights.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🏔️ Premier Trekking Combination Loop
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge &amp; Poon Hill Combination Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Bring together the classic, iconic sunrise viewpoint of Poon Hill with the quiet, panoramic wilderness of Khopra Ridge in one seamless 10-day Himalayan adventure.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Max Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m / 4,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Khayer Lake optional Peak</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Duration</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">10 Days</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Ideal pacing schedule</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Style</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Teahouse &amp; Lodge</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Community cooperative loops</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Moderate</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Accessible first Himalaya hike</span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN CONTENT LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        
        {/* STICKY TOC SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Navigation
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Overview
              </a>
              <a href="#why-combine" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Choose This Combo?
              </a>
              <a href="#suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is This Trek Right for You?
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Map Overview
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Steps
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Permits
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse vs Lodging
              </a>
              <a href="#cost" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost &amp; Budget Guide
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What to Pack
              </a>
              <a href="#scenic" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Highlights
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
                Book This Combo
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Introduction
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Khopra Ridge &amp; Poon Hill Combination Trek brings together two of the Annapurna region&apos;s most rewarding trekking experiences into one seamless, 10-day Himalayan adventure.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              Most trekkers who visit Nepal know Poon Hill. It is one of the most iconic sunrise viewpoints in the entire Himalayas, drawing thousands of visitors each year for its dramatic panoramas of Annapurna South, Dhaulagiri, and Machhapuchhre. But far fewer make it to Khopra Ridge — and that is exactly what makes this combination so special.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              Where Poon Hill is accessible and well-known, Khopra Ridge (3,660m) is quieter, wilder, and genuinely off the beaten path. The trail beyond Ghorepani leads through rhododendron forests, open meadows, and remote village settlements until the ridge opens up into one of the most complete Himalayan panoramas you will find anywhere in the Annapurna region.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              Together, these two destinations create a trek that offers the best of both worlds: the classic Nepal trekking experience and something far more personal, authentic, and memorable.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              For those who want to go further, the optional Khayer Lake extension adds a sacred glacial lake at 4,660m, revered by both Hindus and Buddhists and visited as a pilgrimage destination for centuries.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              This guide covers everything you need to plan the trek — from route details and daily itinerary to permits, costs, accommodation, and packing essentials. We maintain and regularly update this resource based on active trail checks from our licensed local guides operating out of Pokhara.
            </p>

            {/* Quick Summary Grid */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 mt-8 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">
                📋 Trek Highlights at a Glance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Duration", value: "10 Days" },
                  { label: "Maximum Elevation", value: "3,660m (Khopra Ridge) / 4,660m optional Khayer Lake" },
                  { label: "Starting Point", value: "Pokhara" },
                  { label: "Ending Point", value: "Pokhara" },
                  { label: "Trek Style", value: "Tea house and community lodge" },
                  { label: "Difficulty Level", value: "Moderate" },
                  { label: "Best Seasons to Trek", value: "March to May (spring) and September to November (autumn)" },
                  { label: "Start and End Locations", value: "Pokhara" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* WHY COMBINE */}
          <article id="why-combine" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why Choose the Khopra Ridge &amp; Poon Hill Combination Trek?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🌄 Experience the Famous Poon Hill Sunrise</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Poon Hill (3,210m) has earned its reputation for good reason. The pre-dawn climb from Ghorepani is one of Nepal&apos;s most photographed moments — torches flickering in the dark, the air sharp and cold, and then a skyline that ignites with colour as the sun crests the ridge and illuminates Annapurna South, Dhaulagiri I, Hiunchuli, Nilgiri, and Machhapuchhre all at once. Including Poon Hill ensures you start the trek with one of Nepal&apos;s greatest moments.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🔇 Trek Beyond the Crowds to Khopra Ridge</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  After Ghorepani, most Poon Hill trekkers turn back toward Nayapul. This itinerary continues forward, and within a day&apos;s walk you will notice how quickly the crowds thin out. The trail to Khopra Ridge leads through traditional villages, dense forests, and open alpine terrain that most visitors never reach. By the time you arrive at the ridge itself, the sense of space and solitude is striking compared to the busy teahouses lower on the route.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🏔️ Some of the Best Views in Annapurna</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Standing on the ridge, you can see Annapurna South directly ahead, Dhaulagiri filling the western horizon, and a long chain of summits stretching north and east — Nilgiri, Machhapuchhre, Hiunchuli, and deeper range peaks. The perspective is completely different from Poon Hill, and many trekkers argue that Khopra Ridge offers a more intimate and sustained encounter with the mountain scenery.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🏡 Stay in Traditional Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Khopra Ridge section is served by a network of community-run lodges owned and operated by local villages, channeling income directly into the local economy. Rooms are simple and clean, the food is local and freshly cooked, and the interaction with lodge owners and village families feels genuinely warm and unscripted. It represents a highly rewarding form of community-based tourism.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">🏔️ Add the Sacred Khayer Lake Extension</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                For those with the time and energy, Khayer Lake (4,660m) is one of the most compelling additions to any trekking itinerary in the Annapurna region. The lake is sacred in both Hindu and Buddhist traditions, drawing pilgrims as well as trekkers during the summer festival season. The trail from Khopra Ridge to the lake is steep and demanding, but the reward — a glacial lake surrounded by near-vertical mountain walls — is unlike anything else on this route.
              </p>
            </div>
          </article>

          {/* SUITABILITY */}
          <article id="suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Is This Trek Right for You?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              Before committing to any trek, it helps to know honestly whether it matches your fitness level, travel style, and goals. Here is a practical breakdown.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">🏔️ First-Time Trekkers</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Well-suited to first-time trekkers who want a genuine mountain experience without the extreme altitude or technical demands of routes like ABC or the Everest region. The trails are established, lodges are comfortable, and the scenery rewards every hour.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">📸 Photographers &amp; Nature Lovers</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The combination of Poon Hill sunrise, blooming rhododendron forests, and sustained ridge viewpoints makes this one of the strongest visual itineraries in Nepal. Morning light on the Annapurna South face is extraordinary.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">🥾 Solitude Seekers</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  If you have looked at the Poon Hill short circuit and thought it might feel too busy, this route gives you what you are looking for. The trail beyond Tadapani sees dramatically fewer trekkers, and the community lodge circuit has a quiet, exploratory atmosphere.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl">
              <h4 className="font-bold text-amber-900 text-sm">Who May Prefer Another Trek Instead</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Trekkers looking for very high altitude (above 5,000m), glacier travel, or a technical route may prefer Annapurna Base Camp or the Thorong La crossing on the Annapurna Circuit. If your goal is maximum altitude, Khopra Ridge may not fully satisfy that ambition — though the optional Khayer Lake extension pushes the experience significantly higher.
              </p>
            </div>
          </article>

          {/* ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge &amp; Poon Hill Trek Route Overview
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Pokhara to Nayapul and the Annapurna Trailhead</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    The trek begins with a drive from Pokhara to Nayapul, taking 1.5 to 2 hours by road. Nayapul sits at the meeting point of Modi Khola and Bhurungdi Khola. From here, the trail climbs steadily through Birethanti toward Tikhedhunga and Ghorepani.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Ghorepani and the Poon Hill Sunrise</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    Ghorepani (2,860m) is the staging point for the pre-dawn climb to Poon Hill (3,210m). The climb takes 45 minutes to one hour, offering sunset-like orange and red reflections on Annapurna South, Dhaulagiri I, Hiunchuli, Nilgiri, and Machhapuchhre.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Tadapani and Forest Trails</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    After Poon Hill, the trail heads east to Tadapani (2,630m), crossing one of the finest rhododendron forests in the Annapurna Conservation Area.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Bayeli Kharka and Chistibung</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    From Tadapani, the trail climbs toward Bayeli Kharka and Chistibung — two small settlements marking the transition from the forest zone into high-altitude terrain. The landscape becomes remote and the sense of exploration increases.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Reaching Khopra Ridge</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    Khopra Ridge (Khopra Danda) sits at 3,660m. The community lodge is well-run, and trekkers typically spend two nights here — one for rest/acclimatization and one for the optional Khayer Lake excursion.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Optional Route to Khayer Lake</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mt-1">
                    From Khopra Ridge, a demanding day hike climbs to Khayer Lake (4,660m). The trail is steep and exposed, and the additional altitude should not be underestimated. Recommended for well-acclimatised trekkers.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Detailed 10-Day Khopra Ridge and Poon Hill Trek Itinerary
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  day: "Day 1",
                  title: "Arrival and Drive to Nayapul — Trek to Tikhedhunga",
                  elev: "1,540m",
                  time: "3–4 hours walking | 1.5-2 hours drive",
                  desc: "After arriving in Pokhara, transfer to Nayapul by road. Begin trekking through Birethanti and follow the Modi Khola upstream before climbing to Tikhedhunga. This first day is a warm-up — the trail is well-established and the walking is moderate."
                },
                {
                  day: "Day 2",
                  title: "Tikhedhunga to Ghorepani",
                  elev: "2,860m",
                  time: "5–6 hours walking",
                  desc: "This is one of the most demanding days on the trek, involving a steep climb from Tikhedhunga to Ulleri (1,960m) — a staircase of over 3,000 stone steps — followed by a more gradual ascent through rhododendron forest to Ghorepani. The effort is real, but the forest is beautiful and the arrival into Ghorepani brings immediate reward."
                },
                {
                  day: "Day 3",
                  title: "Poon Hill Sunrise — Trek to Tadapani",
                  elev: "2,630m (3,210m at Poon Hill)",
                  time: "5–6 hours walking",
                  desc: "Wake before dawn and climb to Poon Hill for one of Nepal's most celebrated sunrises. After returning to Ghorepani for breakfast, continue east along the ridge toward Tadapani. The trail crosses through dense forest with occasional clearings offering mountain views."
                },
                {
                  day: "Day 4",
                  title: "Tadapani to Bayeli Kharka",
                  elev: "3,100m",
                  time: "4–5 hours walking",
                  desc: "A quieter, more meditative day. The trail climbs gradually through forest and pastureland to Bayeli Kharka, a small settlement used primarily by yak herders in summer. The landscape begins to open up, and mountain views become more sustained."
                },
                {
                  day: "Day 5",
                  title: "Bayeli Kharka to Chistibung",
                  elev: "3,386m",
                  time: "3–4 hours walking",
                  desc: "A shorter walking day that allows proper acclimatisation as the altitude increases. Chistibung is a small cluster of community lodges set in open terrain with excellent views of the surrounding ridges and peaks. Spend the afternoon resting and exploring."
                },
                {
                  day: "Day 6",
                  title: "Chistibung to Khopra Ridge",
                  elev: "3,660m",
                  time: "3–4 hours walking",
                  desc: "The final climb to Khopra Ridge is steady and rewarding. As the trail emerges above the treeline onto the open ridge, the panorama begins to reveal itself — Annapurna South directly to the north, Dhaulagiri to the west, and a long chain of Himalayan summits filling the horizon."
                },
                {
                  day: "Day 7",
                  title: "Explore Khopra Ridge — Rest and Acclimatisation",
                  elev: "3,660m",
                  time: "2–3 hours optional walks",
                  desc: "A full rest day at Khopra Ridge allows thorough acclimatisation before the Khayer Lake extension. Spend the morning exploring the ridge at leisure — sunrise over the Annapurna range from this elevation is outstanding — and the afternoon resting."
                },
                {
                  day: "Day 8",
                  title: "Optional Khayer Lake Excursion",
                  elev: "4,660m",
                  time: "6–8 hours return",
                  desc: "An early start is essential. The trail to Khayer Lake climbs steeply from the ridge, gaining approximately 1,000m in elevation. The lake sits in a high glacial cirque surrounded by towering rock walls. Return to Khopra Ridge by afternoon."
                },
                {
                  day: "Day 9",
                  title: "Khopra Ridge to Swanta Village",
                  elev: "1,880m",
                  time: "5–6 hours walking",
                  desc: "A long descent on a less-trekked trail route through alpine scrub, forest, and terraced farmland leads to Swanta village. The change in environment is dramatic and deeply satisfying. Swanta is a traditional village with a community lodge operated by local families."
                },
                {
                  day: "Day 10",
                  title: "Swanta to Nayapul — Drive to Pokhara",
                  elev: "1,070m",
                  time: "3–4 hours walking | 1.5-2 hours drive",
                  desc: "The final morning of the trek follows a pleasant trail through lower-altitude farmland to Beni or Nayapul, where transport back to Pokhara is arranged. Arrive in Pokhara by early to mid-afternoon."
                }
              ].map((d, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 relative pl-8 border-l border-emerald-500/30 ml-4 pb-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-stone-50 text-emerald-800 font-black text-xs shadow-sm">
                    {idx + 1}
                  </span>
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2 mb-3">
                      <h4 className="font-extrabold text-stone-950 text-base">{d.day}: {d.title}</h4>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-600/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-bold text-stone-400 mb-2 uppercase tracking-wide">Duration: {d.time}</span>
                    <p className="text-xs text-stone-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Khayer Lake Extension details box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 mt-8">
              <h3 className="text-lg font-bold text-emerald-950 mb-3">🏔️ Optional Khayer Lake Extension</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Khayer Lake deserves more than a footnote in any Khopra Ridge itinerary. It is a genuinely significant destination in its own right, and for many trekkers who include it, the lake becomes the defining memory of the entire journey.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2 font-medium">
                At 4,660m, the lake sits high above the ridge in a deep glacial bowl. The lake holds considerable pilgrimage importance to local communities, drawing hundreds during the Janai Purnima festival in August.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">
                The excursion adds a full day to the itinerary. The trail is steep and physically demanding, gaining 1,000m from the ridge. Trekkers must be well-rested, properly acclimatised, and free of any symptoms before attempting it. For most trekkers, the combination of glacial scenery and altitude achievement is worth it without hesitation.
              </p>
            </div>
          </article>

          {/* DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Khopra Ridge &amp; Poon Hill Combination Trek is rated moderate overall, but it is worth understanding what that means in practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Daily Walking Hours</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  On most days, you will walk between 3 and 6 hours. The longest days — typically the climb to Ghorepani and the descent from Khopra Ridge — approach 6 hours of actual trekking time. Rest stops, photography, and teahouse breaks typically add 1 to 2 additional hours to each day&apos;s schedule.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Elevation &amp; Altitude</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The maximum elevation is 3,660m at Khopra Ridge (4,660m at the lake). These are below severe altitude thresholds, but mild symptoms — slight headache, reduced appetite, disrupted sleep — are common. Manage them with rest and hydration. The itinerary allows gradual acclimatisation.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Physical Challenges &amp; Steps</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                The stone staircase climb from Tikhedhunga to Ulleri on Day 2 is consistently reported as the most demanding section. It involves over 3,000 steps with significant elevation gain and can feel relentless. Beyond this, the route involves consistent but manageable climbs and descents. Cold temperatures at the ridge — particularly at night — require warm layering.
              </p>
              <h4 className="font-bold text-stone-950 text-base mt-4">Tips for a Successful Trek</h4>
              <ul className="mt-2 space-y-1 text-xs text-stone-600 list-disc pl-5">
                <li>Start early each day to avoid afternoon cloud build-up.</li>
                <li>Stay well-hydrated — you lose more fluid than you realize at altitude.</li>
                <li>Listen to your body on rest days; do not rush the ridge climb.</li>
                <li>Pack layers: temperatures on the ridge can drop dramatically after sunset.</li>
              </ul>
            </div>
          </article>

          {/* BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time for the Khopra Ridge &amp; Poon Hill Trek
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Spring</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">March to May</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Warming temperatures, excellent trail conditions, and rhododendron forests in full bloom. March and April are the strongest months for reliable weather and clear views.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Autumn</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Sept to Nov</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Best season for mountain visibility. Post-monsoon air is washed clear, producing blue skies. October delivers the clearest views. Nights are colder, falling below freezing on the ridge.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-amber-600 block">Winter</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Dec to Feb</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Possible but demanding. Snow can affect higher trail sections, and upper lodges may be closed. Offers incredible solitude and crisp, clear days for well-equipped winter hikers.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-rose-600 block">Monsoon</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">June to August</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Heavy rain, mud, and leeches in forests. Cloud cover regularly obscures mountains. Not recommended, except for the pilgrimage festival in August.
                </p>
              </div>
            </div>
          </article>

          {/* PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Permits Required for the Trek
            </h2>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Annapurna Conservation Area Permit (ACAP)</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mandatory for all trekkers on this route. Permit fees are used to fund conservation and community development programs within the Annapurna Conservation Area.
              </p>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex justify-between items-center text-xs font-bold">
                <span className="text-stone-500">ACAP Fee:</span>
                <span className="text-stone-900">NPR 3,000 (~USD 22–25)</span>
              </div>
              <h4 className="font-bold text-stone-950 text-base pt-2">TIMS / Single Permit Registry Update</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                As of recent updates, the TIMS card requirement has been integrated into a single permit registry system. Permits can be obtained at the Nepal Tourism Board office in Kathmandu or Pokhara Damside. Processing is straightforward (bring your passport and photos).
              </p>
            </div>
          </article>

          {/* ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Food on the Trail
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Khopra Ridge &amp; Poon Hill Combination Trek is a fully supported teahouse and community lodge trek. No camping is required, and accommodation is available every night of the itinerary.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Teahouses vs Community Lodges</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Lower sections (Nayapul to Tadapani) are served by established, commercial teahouses. Rooms are twin bed, hot showers are available for a fee, and menus are extensive. From Tadapani onward, accommodation shifts to community lodges. These are simpler but offer a genuine connection to the local community, with home-cooked meals and warm hospitality.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Meals &amp; Water</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  The standard menu features dal bhat (rice, lentil soup, curry), noodles, fried rice, porridge, eggs, and pancakes. Prices increase slightly at higher altitudes. Carry purification tablets or filters to treat tap water, reducing plastic waste and saving cost on bottled water.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Charging, Wi-Fi, and Mobile Connectivity</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Charging facilities are available at most teahouses on the lower route for a small fee (NPR 100–200). Community lodges higher up may have solar-powered charging but this is not guaranteed; a power bank is highly useful. Wi-Fi becomes unreliable or absent beyond Tadapani. Mobile signal (NTC/Ncell) is patchy at Khopra Ridge elevation.
              </p>
            </div>
          </article>

          {/* COST */}
          <article id="cost" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge &amp; Poon Hill Trek Cost Guide
            </h2>
            
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4">💰 Independent Trek Costs (Approximate Daily Breakdown)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: "Accommodation", value: "USD 5–15 per night" },
                  { label: "Meals (3 per day)", value: "USD 15–25 per day" },
                  { label: "Permits (ACAP)", value: "USD 22–25 one-time" },
                  { label: "Transport (Pokhara-Nayapul return)", value: "USD 10–20 total" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 text-center">
                    <span className="text-xs text-stone-400 font-bold block">{item.label}</span>
                    <span className="text-sm font-black text-stone-900 mt-1 block">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-4 text-center">
                For a 10-day independent trek, budget approximately <strong>USD 300–500 total</strong>.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-emerald-50/50 border border-emerald-500/15 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-950 text-sm uppercase tracking-wide">What Is Included in a Guided Package</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Airport or hotel pickups.</li>
                  <li>All necessary ACAP permits and registration fees.</li>
                  <li>A licensed, English-speaking local trekking guide.</li>
                  <li>Professional porter services.</li>
                  <li>All teahouse and community lodge accommodations.</li>
                  <li>Three daily meals (breakfast, lunch, dinner) on the trail.</li>
                  <li>Transportation to and from the trailheads.</li>
                </ul>
              </div>
              <div className="bg-rose-50/40 border border-rose-500/10 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-950 text-sm uppercase tracking-wide">Additional Expenses to Budget For</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Mandatory travel insurance (must cover up to 4,700m).</li>
                  <li>Domestic flights or transport to Pokhara.</li>
                  <li>Tips for guide and porter (standard is USD 5-10/day).</li>
                  <li>Hot shower and device charging fees at lodges.</li>
                  <li>Personal snacks, alcoholic drinks, and souvenirs.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              What to Pack for the Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              Packing well means the difference between a comfortable trek and an uncomfortable one. Here is what to bring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">🏔️ Clothing</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Moisture-wicking base layers (2 sets), fleece mid-layer, down jacket, waterproof/windproof outer shell, trekking trousers (non-cotton), warm hat, gloves, buff, sun hat, and camp shoes for evenings.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">🎒 Gear &amp; Footwear</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Sturdy trekking boots (broken in!), trekking poles, 20–30L daypack for essentials, sleeping bag liner (warm bag recommended for shoulder seasons), headlamp (essential for Poon Hill dawn), and power bank.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">🩹 Health &amp; Safety</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  First-aid kit, Diamox (consult your doctor), water purification tablets, high-SPF sunscreen, lip balm, rehydration salts, and blister treatment kit.
                </p>
              </div>
            </div>
          </article>

          {/* SCENIC */}
          <article id="scenic" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Mountain Views and Scenic Highlights
            </h2>
            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Annapurna South (7,219m)</h4>
                <p className="mt-1">
                  Dominates the view from both Poon Hill and Khopra Ridge. From the ridge, it feels close enough to study the details of its southern face — the seracs, ridgelines, and glaciers visible in outstanding clarity.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dhaulagiri (8,167m)</h4>
                <p className="mt-1">
                  The world&apos;s seventh-highest mountain stands dramatically to the west. From Khopra Ridge, the views of Dhaulagiri&apos;s enormous pyramid face are unobstructed and humbling.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Nilgiri (7,061m) &amp; Machhapuchhre (6,993m)</h4>
                <p className="mt-1">
                  Nilgiri rises to the north as a wall of ice. Machhapuchhre (Fishtail) stands with its twin-summit pyramid profile anchoring the eastern end of the mountain panorama throughout the route.
                </p>
              </div>
            </div>

            {/* Comparison segment */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm mt-8">
              <h3 className="text-lg font-bold text-stone-950 mb-3">⚖️ Khopra Ridge vs Poon Hill: Why Combine Both?</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The standard Poon Hill circuit is one of Nepal&apos;s most popular short treks, but it can feel crowded. By continuing east toward Khopra Ridge, the crowds drop sharply and you gain the trail to yourself. Poon Hill delivers an outstanding panorama for sunrise, whereas Khopra Ridge provides sustained, multi-directional mountain views across two days at higher elevation.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">
                <strong>Why combination is better:</strong> It uses the most celebrated moment of the Poon Hill trek as a launching pad rather than a destination, then continues into quiet wilderness and community-managed lodges that offer a more intimate connection with local life.
              </p>
            </div>
          </article>

          {/* FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Khopra Ridge &amp; Poon Hill Trek
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "How difficult is the Khopra Ridge & Poon Hill Combination Trek?",
                  a: "The trek is rated moderate. It involves daily walks of 3 to 6 hours on mountain terrain, reaches a maximum elevation of 3,660m on the standard route (4,660m with Khayer Lake), and does not require technical climbing or prior high-altitude experience. The most physically demanding section is the steep stone staircase climb from Tikhedhunga to Ulleri on Day 2."
                },
                {
                  q: "Can beginners complete this trek?",
                  a: "Yes. The Khopra Ridge & Poon Hill Combination Trek is one of the most suitable routes in Nepal for first-time trekkers. The trail is well-marked on its lower sections, the daily distances are manageable, and the community lodges provide reliable accommodation throughout. We recommend basic cardio fitness preparation."
                },
                {
                  q: "How many days do I need for the trek?",
                  a: "The standard itinerary is 10 days. This includes the Poon Hill sunrise, the full Khopra Ridge experience, and the optional Khayer Lake extension on Day 8. A shorter 7-day version is possible by skipping the Khayer Lake day, but we recommend the full 10 days for the most complete experience."
                },
                {
                  q: "What is the highest altitude reached?",
                  a: "On the standard route without the Khayer Lake extension, the highest point is Khopra Ridge at 3,660m. With the Khayer Lake day included, the highest elevation reached is 4,660m. Neither altitude requires prior acclimatisation in the Himalayas."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "For most trekkers: yes. The lake is visually extraordinary — a high glacial lake at 4,660m surrounded by dramatic mountain terrain — and its cultural and religious significance adds meaningful depth. It requires a long, strenuous day hike from Khopra Ridge, but trekkers who are well-rested find the effort well rewarded."
                },
                {
                  q: "What permits are required?",
                  a: "The essential permit is the Annapurna Conservation Area Permit (ACAP), which costs approximately NPR 3,000 (USD 22–25) for foreign nationals. SAARC nationals pay a reduced rate. If you trek with a registered agency, these are typically handled on your behalf."
                },
                {
                  q: "How much does the trek cost?",
                  a: "Independent trekking costs approximately USD 300–500 for 10 days when including accommodation, meals, transport, and permits. A fully guided package from a local Pokhara-based agency typically ranges from USD 700–1,200 depending on group size, season, and service level."
                },
                {
                  q: "What is the best season for the Khopra Ridge trek?",
                  a: "The two prime seasons are spring (March to May) and autumn (September to November). Autumn delivers the clearest mountain views; spring brings the rhododendron bloom and warming temperatures. October is consistently the most popular and most rewarding single month for the trek."
                },
                {
                  q: "Can I trek Khopra Ridge independently?",
                  a: "Yes. The route is not restricted, and independent trekking is possible. However, the trail from Tadapani onward is less clearly marked than the main Poon Hill circuit, and community lodge locations require local knowledge. We recommend hiring at least a local guide from Pokhara."
                },
                {
                  q: "Is altitude sickness a concern?",
                  a: "At 3,660m, mild altitude symptoms — slight headache, reduced appetite, disrupted sleep — are common and manageable. Serious altitude sickness is uncommon at this elevation if you follow gradual pacing. At 4,660m for the lake extension, symptoms can be more pronounced; the extension should only be attempted by well-acclimatised trekkers."
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

          {/* CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950 font-sans tracking-tight">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge &amp; Poon Hill Combination Trek offers what few trekking itineraries can genuinely deliver: two distinct, world-class experiences in a single journey, connected by trails that become quieter and more rewarding with every day.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              You begin with one of Nepal&apos;s most famous mornings — the Poon Hill sunrise, the full Annapurna panorama, the feeling of being exactly where you imagined Nepal would look like. Then you continue into something rarer — the community lodge circuit, the open ridge, the mountains seen not as a backdrop but as a surrounding presence, and an optional extension to a sacred glacial lake that most Nepal visitors never find.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              This route combines the familiar and the unknown, the iconic and the undiscovered, in a proportion that feels exactly right for 10 days of trekking in the Himalayas.
            </p>
          </article>

          {/* CTA BOOKING BLOCK */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Khopra Ridge &amp; Poon Hill Adventure</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Every trekker arrives with a different fitness level, schedule, and set of goals. We can adjust the itinerary — shorter or longer, with or without Khayer Lake, group or private — to match exactly what you are looking for. Just tell us your travel dates and we will build the right plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Customize Your Khopra Ridge Trek →
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>📍 Standard local response within 24 hours</span>
                  <span>💬 No sales pressure, just honest guidance</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTNOTE */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is maintained and reviewed by licensed local trekking guides operating out of Pokhara. Route information, permit fees, and community lodge statuses are updated based on active trail monitoring.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
