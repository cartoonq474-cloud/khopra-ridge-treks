import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/muldai-viewpoint-guide",
  },
  title: "Muldai Viewpoint Guide: Trek Route, Sunrise Views, Itinerary & Travel Tips",
  description: "Discover everything you need to know about Muldai Viewpoint — one of Nepal's best hidden sunrise viewpoints in the Annapurna region. Trek routes, itineraries, mountain views, best season, permits, and Poon Hill comparison all in one complete guide.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Expert Viewpoint Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Muldai Viewpoint Guide: Complete Trek Route, Sunrise Views &amp; Travel Information
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">While Poon Hill draws hundreds of trekkers every morning for its famous sunrise, Muldai Viewpoint sits quietly at 3,637 metres above Dobato, offering closer mountain views, cleaner air, and absolute stillness.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,637m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">11,932 feet above sea level</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Moderate</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Suitable for most trekkers</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Nearest Node</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Dobato</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">45-60 min morning hike</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Crowd Level</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Off the beaten path</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek at a Glance
              </a>
              <a href="#what-is" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">What is Muldai?
              </a>
              <a href="#why-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Visit?
              </a>
              <a href="#mountains-visible" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Visible Mountains
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach It
              </a>
              <a href="#route-explained" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route Explained
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Recommended Itineraries
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#sunrise-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sunrise Experience
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodges &amp; Food
              </a>
              <a href="#difficulty-fitness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Difficulty &amp; Fitness
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Required Permits
              </a>
              <a href="#vs-poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Muldai vs Poon Hill
              </a>
              <a href="#photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Photography Guide
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Practical Tips
              </a>
              <a href="#worth-visiting" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Is It Worth It?
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint Trek Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Most trekkers who visit the Annapurna region never hear about Muldai Viewpoint until they are already there — and that is exactly what makes it special.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">While Poon Hill draws hundreds of trekkers every morning for its famous sunrise, Muldai Viewpoint sits quietly at 3,637 metres on a ridge above Dobato, rewarding those who find it with closer mountain views, cleaner air, and a level of stillness that has largely disappeared from the more popular trails nearby. It is one of Nepal&apos;s genuinely underrated trekking destinations, and among Annapurna&apos;s best hidden sunrise viewpoints.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This guide covers everything you need to plan a visit: where Muldai is, how to get there, what you will see, when to go, where to sleep, and how it compares to Poon Hill. Whether you are trekking independently or exploring the Khopra Ridge route with a guide, you will find a practical, honest answer to every question you have about this remarkable viewpoint.
            </p>

            {/* Quick Summary Grid */}
            <div className="mt-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">Quick Facts: Muldai Viewpoint
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Elevation", value: "3,637 m (11,932 ft)" },
                  { label: "Location", value: "Above Dobato, Annapurna foothills" },
                  { label: "Trek Difficulty", value: "Moderate" },
                  { label: "Best Season", value: "Spring (March–May) and Autumn (Sept–Nov)" },
                  { label: "Sunrise Views", value: "Excellent" },
                  { label: "Required Permit", value: "ACAP (Annapurna Conservation Area Permit)" },
                  { label: "Nearest Village", value: "Dobato" },
                  { label: "Starting Point", value: "Pokhara" },
                  { label: "Connects To", value: "Khopra Ridge Trek, Khayer Lake" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-3xl flex items-center justify-between gap-4 mt-6">
              <p className="text-xs text-stone-600 font-medium">Planning a Muldai and Khopra Ridge trek? Our local trekking team can help you design a route, arrange permits, and arrange accommodation.
              </p>
              <Link 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-sm transition whitespace-nowrap"
              >Inquire &amp; Customize &rarr;
              </Link>
            </div>
          </article>

          {/* SECTION 2: WHAT IS */}
          <article id="what-is" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Is Muldai Viewpoint?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Where Is Muldai Viewpoint Located?</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Muldai Viewpoint sits within the Annapurna Conservation Area in the Myagdi and Kaski districts of Nepal&apos;s Gandaki Province. It lies on a high ridge above the settlement of Dobato, roughly southeast of the Dhaulagiri massif and directly north of Ghandruk — one of the most well-known villages on the Annapurna trail network.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The viewpoint is positioned at the convergence of several trekking routes. Trekkers coming from Ghorepani pass through Dobato on their way to Khopra Ridge. Those arriving from the Ghandruk side ascend through Tadapani before reaching Dobato. In either case, Muldai is a short morning hike from Dobato&apos;s teahouses — the kind of early rise that pays for itself within minutes of reaching the ridge.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">In terms of broader geography, Muldai sits roughly 50 to 60 kilometres northeast of Pokhara by road and trail. It is not an isolated peak requiring technical climbing — it is a high viewpoint on a trekking ridge that anyone with reasonable fitness can reach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Elevation, Geography, and Landscape</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Muldai Viewpoint stands at 3,637 metres above sea level. This puts it higher than Poon Hill (3,210 m) and higher than most teahouse stops on the standard Ghorepani circuit, while still remaining accessible without acclimatisation concerns for most healthy trekkers.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The ridge itself is a mix of open grassland at the top and dense rhododendron forest below. In spring, the trail through this forest is extraordinary — the rhododendrons bloom in deep reds and pinks, and the contrast between the flower-lined trail below and the white Himalayan panorama above is one of the most striking visual experiences in the Annapurna foothills.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The terrain near the summit is open and exposed, which is exactly what makes the sunrise views so dramatic. There are no buildings or trees blocking the northern and western horizons.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Muldai Viewpoint Is Becoming More Popular</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For years, Muldai remained almost entirely off the standard tourist circuit. It was known mainly to the communities running lodges along the Khopra Ridge route and to trekkers who had already explored the more established Annapurna trails and were looking for something different.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">That is beginning to change. As overtourism on trails like the Poon Hill circuit has become impossible to ignore — with hundreds of trekkers queuing at the viewpoint before dawn — a growing number of travellers are actively searching for alternatives. Muldai offers the mountain views, the sunrise experience, and the trekking atmosphere that Poon Hill once provided before it became famous. It also integrates naturally with the Khopra Ridge Trek, which is itself one of the most rewarding offbeat trekking routes in the entire Annapurna region.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: WHY VISIT */}
          <article id="why-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Visit Muldai Viewpoint?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">One of Nepal&apos;s Best Sunrise Viewpoints</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Annapurna region has no shortage of dramatic sunrises, but Muldai Viewpoint consistently ranks among the most rewarding. Because the ridge faces northeast and the terrain opens fully at the summit, there is nothing to interrupt the light as it breaks across the Himalayan range to the north.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">On a clear morning, the sequence unfolds slowly. The sky transitions from deep blue to pale gold to orange, and the first light catches the high snowfields of Annapurna South and Dhaulagiri before anything below is illuminated.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Closer Himalayan Views Than Many Viewpoints</h4>
                <p className="text-xs text-stone-500 leading-relaxed">One of the most common observations trekkers make at Muldai is how close the mountains appear to feel. This is due to the ridge&apos;s geometry — the viewpoint faces directly toward the Annapurna and Dhaulagiri massifs without the lateral distance that affects viewpoints positioned further south or east.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">Annapurna South, in particular, appears almost close enough to touch. The Dhaulagiri range fills the western sky in a way that surprises people who have only seen it from Pokhara or from lower-elevation trails.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">A Peaceful Alternative to Poon Hill</h4>
                <p className="text-xs text-stone-500 leading-relaxed">If you have visited Poon Hill in recent years, you will understand what overtourism does to a sunrise. The path up is often crowded from 4:00 a.m. onwards, with trekkers competing for space near the viewing tower.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">Muldai is different. The trail from Dobato to the viewpoint is quiet. On most mornings, you will share it with only a handful of other trekkers. The summit itself is spacious, and the silence is one of the things returning trekkers mention most often.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Ideal for Photography and Nature Lovers</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The combination of high elevation, open ridgeline, and multi-directional panorama makes Muldai one of the best photography destinations in the Annapurna foothills. The lack of visual obstruction makes it exceptionally photogenic.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">For nature lovers, the surrounding landscape adds additional appeal. The rhododendron forests on the approach are among the most beautiful in Nepal. Bird life is abundant, and the ridge itself hosts a variety of high-altitude plant species.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: MOUNTAINS VISIBLE */}
          <article id="mountains-visible" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Mountains Can You See From Muldai Viewpoint?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The panorama from Muldai Viewpoint is one of the widest and most rewarding in the Annapurna region. On a clear day, the horizon is almost completely filled with major Himalayan peaks.
            </p>

            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Annapurna South and Hiunchuli</h4>
                <p className="mt-1">Annapurna South (7,219 m) dominates the view to the north and northeast. Its massive triangular profile is one of the most recognisable shapes in Nepalese trekking, and from Muldai it is extraordinarily prominent. Hiunchuli (6,441 m), which sits just to its south, adds a dramatic companion peak to the same view. These two peaks form the visual centrepiece of the Muldai sunrise.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Dhaulagiri and the Western Himalayas</h4>
                <p className="mt-1">Dhaulagiri I (8,167 m), one of the world&apos;s highest mountains, is visible to the northwest. Its enormous mass fills the western section of the panorama, and in clear conditions its full profile from base to summit is visible. The surrounding Dhaulagiri massif includes several satellite peaks that create a continuous wall of snow and rock.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Machhapuchhre (Fishtail Mountain)</h4>
                <p className="mt-1">Machhapuchhre (6,993 m), Nepal&apos;s iconic and sacred Fishtail Mountain, is visible to the east. Its distinctive twin-peaked silhouette is one of the most recognisable shapes in Himalayan photography. From Muldai, it appears in a slightly different angle than from Pokhara.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Other Peaks Visible on Clear Days</h4>
                <p className="mt-1">On exceptionally clear mornings — most common in late October, November, and early spring — trekkers have also reported views of Nilgiri (7,061 m) to the north and glimpses of Annapurna I (8,091 m) through the range.
                </p>
              </div>
            </div>

            {/* Visibility by season table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-hidden mt-6">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Mountain Visibility by Season</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Season</th>
                      <th className="py-3 px-4 font-bold">Visibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { s: "Spring (March–May)", v: "Good to excellent; morning clarity before afternoon haze builds" },
                      { s: "Autumn (Sept–Nov)", v: "Best overall; sharp skies, excellent definition on all peaks" },
                      { s: "Winter (Dec–Feb)", v: "Variable; spectacular on clear days but cloud and cold can limit views" },
                      { s: "Monsoon (June–Aug)", v: "Generally poor; cloud cover obscures most peaks most days" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-900 whitespace-nowrap">{row.s}</td>
                        <td className="py-3 px-4 text-stone-600">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 5: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Muldai Viewpoint
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Getting to the Trailhead From Pokhara</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">All Muldai treks begin in Pokhara, the gateway city for the Annapurna region. From Pokhara, you have two main options for reaching the trailhead:
                </p>
                <ul className="list-disc pl-5 text-xs text-stone-600 space-y-2 mt-2">
                  <li><strong>Option 1 — Via Nayapul and Ghandruk:</strong>Take a drive or local bus from Pokhara to Nayapul (approximately 1.5 to 2 hours), then trek up to Ghandruk village. This is the most popular access route.</li>
                  <li><strong>Option 2 — Via Beni and Ghorepani:</strong>Drive from Pokhara to Beni (2 to 3 hours), then trek up through Tatopani and Ghorepani. This option is longer but allows you to combine the Poon Hill circuit with a Muldai extension.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Route Through Ghandruk and Tadapani</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This is the most direct and commonly used approach for Muldai Viewpoint. From Ghandruk, the trail climbs steadily through rhododendron and oak forests to Tadapani (2,520 m), a small village with several teahouses. From Tadapani, the route continues upward through increasingly dramatic terrain to Dobato (3,480 m). The section from Tadapani to Dobato is one of the most beautiful forest walks in the Annapurna region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Route Through Ghorepani and Dobato</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Trekkers who have already visited Poon Hill or who are approaching from the Mustang side often reach Muldai via Ghorepani. From Ghorepani, the route heads east toward Deurali and continues along the ridge line to Dobato. This route offers beautiful ridge walking with consistent mountain views.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Final Sunrise Hike From Dobato to Muldai</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The final climb from Dobato to Muldai Viewpoint is not technical but it does require an early start. Most trekkers leave their lodges between 4:30 and 5:00 a.m. to reach the summit before the sun clears the horizon. The trail climbs steeply at first through open hillside terrain before reaching the exposed ridge. The full climb takes 45 to 60 minutes for most trekkers walking at a steady pace.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ROUTE EXPLAINED */}
          <article id="route-explained" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint Trek Route Explained
            </h2>

            <div className="space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Trail Conditions and Terrain</h4>
              <p className="text-xs text-stone-600 leading-relaxed">The trail to Muldai Viewpoint is a combination of packed earth paths, stone steps, and open ridgeline. The stone steps are well-maintained in the lower sections through village terrain. Above Dobato, the trail becomes less formal and more like a high mountain path — clear and easy to follow, but steeper and more exposed. In winter, the trail above Dobato can have ice and snow, requiring care.
              </p>
            </div>

            {/* Estimated Hiking Times Table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-hidden">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Estimated Walking Times</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Segment</th>
                      <th className="py-3 px-4 font-bold">Estimated Walking Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { s: "Pokhara to Nayapul (by vehicle)", t: "1.5 – 2 hours" },
                      { s: "Nayapul to Ghandruk", t: "3 – 4 hours" },
                      { s: "Ghandruk to Tadapani", t: "3 – 4 hours" },
                      { s: "Tadapani to Dobato", t: "3 – 4 hours" },
                      { s: "Dobato to Muldai Viewpoint", t: "45 – 60 minutes" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-900">{row.s}</td>
                        <td className="py-3 px-4 text-stone-600 font-semibold">{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Forest Sections, Ridge Trails, and Scenic Areas</h4>
              <p className="text-xs text-stone-600 leading-relaxed">The most beautiful sections of the route are the forest paths between Ghandruk and Tadapani and between Tadapani and Dobato. These sections pass through mixed rhododendron, oak, and bamboo forest that changes dramatically with the season. In spring, the rhododendron blooms create a tunnel of colour. The ridge section approaching Dobato opens the view dramatically, revealing the Annapurna South massif.
              </p>
              <h4 className="font-bold text-stone-950 text-base">Navigation and Route Tips</h4>
              <p className="text-xs text-stone-600 leading-relaxed">The route is well-signed in the lower sections. Above Dobato, the trail to Muldai is not always marked, so it is worth confirming the route with your lodge owner or guide the evening before. In dark early morning conditions, even a clear trail can feel uncertain without local knowledge.
              </p>
            </div>
          </article>

          {/* SECTION 7: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Recommended Muldai Trek Itineraries
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Short Option</span>
                <h4 className="font-bold text-stone-950 mt-1 text-lg">3–4 Day Muldai Viewpoint Trek</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">This option suits trekkers with limited time who want to experience Muldai without a longer Annapurna circuit. It is compact, achievable, and delivers the full Muldai sunrise experience.
                </p>
                <div className="mt-4 space-y-2 border-t border-stone-100 pt-3">
                  {[
                    { d: "Day 1", path: "Pokhara → Nayapul → Ghandruk (3-4h)" },
                    { d: "Day 2", path: "Ghandruk → Tadapani → Dobato (6-7h)" },
                    { d: "Day 3", path: "Pre-dawn Muldai Sunrise → Ghandruk descent" },
                    { d: "Day 4", path: "Return to Nayapul → Drive to Pokhara" }
                  ].map((dayItem, dIdx) => (
                    <div key={dIdx} className="flex justify-between items-center text-xs">
                      <span className="font-bold text-stone-400">{dayItem.d}</span>
                      <span className="font-semibold text-stone-700 text-right">{dayItem.path}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Extended Option</span>
                <h4 className="font-bold text-stone-950 mt-1 text-lg">5–7 Day Annapurna Foothills Trek</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">Allows for a more relaxed pace, additional day hikes, and thorough exploration of Gurung villages like Ghandruk. Provides excellent gradual acclimatisation.
                </p>
                <div className="mt-4 space-y-2 border-t border-stone-100 pt-3">
                  {[
                    { d: "Day 1", path: "Pokhara → Nayapul → Hile" },
                    { d: "Day 2", path: "Hile → Ghandruk (explore village)" },
                    { d: "Day 3", path: "Ghandruk → Tadapani" },
                    { d: "Day 4", path: "Tadapani → Dobato" },
                    { d: "Day 5", path: "Muldai Sunrise → Explore Dobato" },
                    { d: "Day 6-7", path: "Return via Tadapani & Ghandruk to Pokhara" }
                  ].map((dayItem, dIdx) => (
                    <div key={dIdx} className="flex justify-between items-center text-xs">
                      <span className="font-bold text-stone-400">{dayItem.d}</span>
                      <span className="font-semibold text-stone-700 text-right">{dayItem.path}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-6 space-y-4">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Combined Routes</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Combining Muldai With Khopra Ridge Trek:</strong>This is the most rewarding way to experience Muldai Viewpoint. The Khopra Ridge Trek is one of the best offbeat routes in the region, and Muldai sits naturally within it. A combined itinerary typically runs 7 to 10 days, starting in Ghandruk and continuing from Dobato to Khopra Danda before descending.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Combining Muldai With Khayer Lake:</strong>Khayer Lake (4,660 m) is a high-altitude glacial lake above Khopra Danda that adds exceptional value to the loop. Trekkers who want to combine Muldai with Khayer Lake should allow at least 9 to 12 days for the full circuit.
              </p>
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow-sm transition"
                >Request a Custom Trek Plan &rarr;
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 8: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Muldai Viewpoint
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (March–May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Spring is arguably the most visually spectacular season. The rhododendron forests are in full bloom between late February and April, transforming the approach trail. Mountain views are generally good to excellent, particularly in the early morning before afternoon haze builds.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (September–November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Autumn is the single best season for mountain views. The monsoon clears in late September, leaving exceptionally clean, dry air. Visibility on clear autumn mornings can be breathtaking. October and November offer comfortable temperatures and clear skies.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter (December–February)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Winter trekking is possible and can be spectacular, but requires cold-weather preparation. Temperatures drop sharply at night, and snow is possible on the trail from Dobato to the viewpoint. On clear winter mornings, the snow-covered ridge creates an otherworldly sunrise view.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Monsoon (June–August)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Monsoon is generally not recommended due to persistent cloud cover, heavy rainfall, slippery trails, and active leeches. If you visit during monsoon, sunrise views are likely to disappoint.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-6">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Which Season Offers the Best Sunrise Views?</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-1">Autumn, specifically October and early November, offers the best combination of clear mountain views, comfortable temperatures, and reliable sunrise conditions. Spring is the most beautiful season for blooming trail scenery but is slightly less reliable for consistent mountain visibility than autumn.
              </p>
            </div>
          </article>

          {/* SECTION 9: SUNRISE EXPERIENCE */}
          <article id="sunrise-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Sunrise Experience at Muldai Viewpoint
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">What Time Should You Start the Hike?</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Sunrise at Muldai Viewpoint occurs between approximately 5:45 a.m. and 6:30 a.m. depending on the season. Most trekkers leave their lodges in Dobato between 4:30 and 5:00 a.m. to reach the summit comfortably before the light changes.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The climb from Dobato takes 45 to 60 minutes. Starting at 4:30 gives you time to arrive without rushing. Bring a reliable headlamp and extra batteries. The trail is manageable in the dark but involves steeper sections where a good light source is necessary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">What to Expect During Sunrise</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The experience begins with cold. Muldai at pre-dawn is noticeably colder than Dobato, particularly with wind on the exposed ridge. A down jacket, hat, and gloves are essential.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">As the sky begins to lighten, the silhouettes of Annapurna South, Dhaulagiri, and Machhapuchhre appear first as darker shapes against a gradually brightening sky. The transition from dark blue to pale gold to deep orange happens relatively quickly — usually over 20 to 30 minutes — and the first direct sunlight on the high snowfields arrives before it touches anything below. The full sequence takes about 45 to 60 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Weather and Visibility Factors</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Clear skies are not guaranteed. Cloud can move in overnight and obscure the horizon by morning, particularly during transitional shoulder seasons. The best strategy is to plan for two nights in Dobato so that if your first morning is cloudy, you have a second attempt. Strong winds are common at the summit in spring.
                </p>
              </div>
            </div>

            {/* Local Guide Tips box */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 mt-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5"></span>
                <div>
                  <h4 className="font-black text-emerald-950 text-sm tracking-wide uppercase">Local Guide Tips for the Best Experience</h4>
                  <ul className="mt-3 space-y-1.5 text-xs text-stone-600 list-disc pl-5">
                    <li>Go on your second morning in Dobato. By then your body is adjusted to the elevation, and you will move faster and feel better.</li>
                    <li>Check the evening sky before you sleep. A clear, star-filled sky the night before is the strongest indicator of a clear sunrise.</li>
                    <li>Bring more layers than you think you need. It is always colder at the summit than it feels in the teahouse.</li>
                    <li>Stay until the full light arrives. Many trekkers leave too early, after the initial colour, and miss the period when the full mountain panorama is most clearly illuminated.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 10: ACCOMMODATION & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation and Food on the Muldai Trek
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Lodges in Dobato</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Dobato is the base for the sunrise hike, and accommodation has improved significantly. Several community lodges operate, offering basic but comfortable twin rooms, hot meals, and shared bathrooms. Solar-powered electricity is standard, and advance booking is recommended during peak seasons.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Food &amp; Drink Availability</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Teahouse menus follow a familiar pattern: Dal Bhat (rice, lentil, curry), noodles, pasta, soups, eggs, and hot drinks. Dal Bhat remains the best option for sustained energy. Filtered or boiled water is available at most lodges; avoid buying single-use plastic bottles.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Facilities &amp; Connectivity</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Facilities are basic. Hot showers are available for a small additional charge. Mobile signal is highly variable and often weak above Tadapani. Wi-Fi is available at some Dobato lodges but should not be relied upon for heavy usage.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: DIFFICULTY & FITNESS */}
          <article id="difficulty-fitness" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trek Difficulty, Fitness Level, and Altitude Considerations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Trek Difficulty</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Muldai Viewpoint trek is classified as moderate. It does not require technical climbing, ropes, or specialist equipment. The main demands are sustained uphill walking over multiple days and the early morning climb from Dobato to the summit. The most challenging day is the ascent from Tadapani to Dobato (3 to 4 hours of consistent climbing).
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Fitness Requirements</h4>
                <p className="text-xs text-stone-500 leading-relaxed">You do not need to be an athlete, but a reasonable baseline of cardiovascular fitness is helpful. If you can walk uphill for 4 to 5 hours without significant distress, you are ready. Useful preparation includes regular walking, stair climbing, and day hikes before your trip.
                </p>
              </div>
            </div>

            {/* Altitude Warning Callout Box */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5"></span>
                <div>
                  <h4 className="font-black text-amber-950 text-sm tracking-wide uppercase">Altitude Safety at 3,637m</h4>
                  <p className="mt-2 text-xs text-stone-700 leading-relaxed font-semibold">Muldai Viewpoint sits at 3,637 metres. This is within the range where mild altitude sickness (AMS) can occur.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-stone-600 list-disc pl-5">
                    <li>Ascend gradually: Do not rush the climb from Pokhara to Dobato in a single day.</li>
                    <li>Stay hydrated: Drink plenty of water and eat regular, warm meals.</li>
                    <li>Recognise symptoms: Headaches, fatigue, and slight breathlessness are early signs. Descend immediately if symptoms worsen.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <h4 className="font-bold text-stone-950 text-base">Can Beginners Complete the Trek?</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">Yes — with appropriate preparation and reasonable pacing. The Muldai trek is a good first Himalayan trekking experience because it is structured, well-served by teahouses, and rewarding at every stage. Trekking with a local guide is particularly valuable for beginners to help manage pace and monitor altitude symptoms.
              </p>
            </div>
          </article>

          {/* SECTION 12: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permits Required for Muldai Viewpoint
            </h2>

            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <h4 className="font-bold text-stone-950 text-base">Annapurna Conservation Area Permit (ACAP)</h4>
              <p className="text-xs leading-relaxed">To trek in the Muldai Viewpoint area, you will need an Annapurna Conservation Area Permit (ACAP). This permit covers the entire Annapurna Conservation Area, including all the trail networks accessed via Ghandruk, Ghorepani, Dobato, and surrounding areas.
              </p>
              <p className="text-xs leading-relaxed">The ACAP can be obtained through the Nepal Tourism Board in Kathmandu or Pokhara and should be arranged before you begin trekking. TIMS cards may also be required depending on current local regulations — confirm the latest requirements before departure. Checkpoints are active along the trail.
              </p>

              <h4 className="font-bold text-stone-950 text-base">Responsible Trekking Practices</h4>
              <ul className="list-disc pl-5 text-xs space-y-1.5">
                <li>Use designated trails to avoid erosion</li>
                <li>Carry out all non-biodegradable waste</li>
                <li>Use boiled or filtered water rather than single-use plastic bottles</li>
                <li>Respect local communities and cultural sites</li>
                <li>Support local teahouses rather than bringing excessive external supplies</li>
              </ul>
            </div>
          </article>

          {/* SECTION 13: MULDAI VS POON HILL */}
          <article id="vs-poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint vs Poon Hill
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">For many trekkers planning an Annapurna foothills experience, the key question is: which viewpoint should I choose — or is it possible to visit both?
            </p>

            {/* Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-hidden">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Viewpoint Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Factor</th>
                      <th className="py-3 px-4 font-bold">Muldai Viewpoint</th>
                      <th className="py-3 px-4 font-bold">Poon Hill</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { f: "Elevation", m: "3,637 m", p: "3,210 m" },
                      { f: "Annapurna South View", m: "Excellent, very close", p: "Good" },
                      { f: "Dhaulagiri View", m: "Excellent, clear profile", p: "Good" },
                      { f: "Machhapuchhre View", m: "Visible to the east", p: "Excellent" },
                      { f: "Overall Panorama", m: "Wider, more immersive", p: "Strong but more distant" },
                      { f: "View Style", m: "Intimate, surrounding", p: "Classic, postcard-style" },
                      { f: "Crowd Levels", m: "Very Low (Quiet, peaceful)", p: "High (Hundreds of trekkers daily)" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-900">{row.f}</td>
                        <td className="py-3 px-4 text-stone-600 font-semibold">{row.m}</td>
                        <td className="py-3 px-4 text-stone-500">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                <h4 className="font-bold text-stone-950 text-sm">Trekking Experience &amp; Crowds</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-2">Poon Hill is shorter, more accessible, and easier to reach but experiences heavy crowd congestion. Muldai requires more walking and higher elevations, but offers deep solitude, allowing you to watch the sunrise in silence.
                </p>
              </div>
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                <h4 className="font-bold text-stone-950 text-sm">Photography Opportunities</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-2">Poon Hill offers iconic, well-known pictures. Muldai provides original, uncrowded viewpoint landscape photography. You can compose your shots without crowds in the foreground.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 rounded-3xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base mb-3">Which Viewpoint Is Better for You?</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-stone-600">
                <div>
                  <p className="font-bold text-emerald-800 uppercase tracking-wider mb-2">Choose Poon Hill if:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You have 3 days or fewer from Pokhara</li>
                    <li>You want the most accessible Himalayan sunrise</li>
                    <li>You prefer well-developed trail infrastructure</li>
                    <li>You are combining with Annapurna Base Camp</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-emerald-800 uppercase tracking-wider mb-2">Choose Muldai if:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You want fewer crowds and a more immersive experience</li>
                    <li>You prioritise mountain views over accessibility</li>
                    <li>You have 4 or more days available</li>
                    <li>You are interested in the Khopra Ridge Trek</li>
                    <li>You want original viewpoint images</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 14: PHOTOGRAPHY GUIDE */}
          <article id="photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Photography Guide for Muldai Viewpoint
            </h2>

            <div className="space-y-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Best Photography Locations</h4>
                <p className="mt-1">
                  <strong>West-facing positions:</strong>Best for Dhaulagiri, particularly during the first light sequence when the western peaks are illuminated before those to the north.<br />
                  <strong>North-facing positions:</strong>Optimal for Annapurna South and Hiunchuli. The perspective from the northern edge of the summit provides the most direct and visually powerful view.<br />
                  <strong>Ridgeline positions:</strong>Shooting along the ridge itself, with trekkers silhouetted against the brightening sky, produces outstanding atmospheric landscape images.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base">Sunrise Photography Tips</h4>
                <ul className="list-disc pl-5 space-y-1.5 mt-1">
                  <li>Arrive 20 to 30 minutes before sunrise to capture the blue hour.</li>
                  <li>Shoot in RAW format to handle the extreme dynamic range between dark foreground and glowing snow fields.</li>
                  <li>Use a tripod or steady rock surface to avoid camera shake in the cold pre-dawn air.</li>
                  <li>Bracket your exposures to capture both peak highlight detail and shadow definition.</li>
                  <li>Keep spare batteries inside your jacket to prevent cold temperatures from draining them.</li>
                </ul>
              </div>
            </div>

            {/* Seasonal light quality table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-hidden mt-6">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Seasonal Photography Conditions</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Season</th>
                      <th className="py-3 px-4 font-bold">Light Quality</th>
                      <th className="py-3 px-4 font-bold">Background</th>
                      <th className="py-3 px-4 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { s: "Spring", l: "Warm, slightly hazy", b: "Rhododendron bloom", f: "Trail photography, colour" },
                      { s: "Autumn", l: "Sharp, clear", b: "Snow-capped peaks", f: "Mountain panoramas" },
                      { s: "Winter", l: "Cold, dramatic", b: "Snow on ridgeline", f: "Dramatic atmospheric shots" },
                      { s: "Monsoon", l: "Diffuse, soft", b: "Lush green valley", f: "Forest and landscape" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-900">{row.s}</td>
                        <td className="py-3 px-4 text-stone-600">{row.l}</td>
                        <td className="py-3 px-4 text-stone-500">{row.b}</td>
                        <td className="py-3 px-4 text-stone-500">{row.f}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 15: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Practical Tips for Visiting Muldai Viewpoint
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Packing Essentials</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Insulated down jacket, fleece layer, waterproof outer shell, warm hat/gloves, thermal layers for cold ridge stays, sturdy broken-in boots, trekking poles, headlamp with extra batteries, sunscreen/sunglasses, and personal first-aid kits.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Safety &amp; Weather</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Never hike alone in the dark before sunrise. Check local weather conditions with Dobato lodge hosts before leaving. Stay hydrated at altitude, and keep your schedule flexible enough to allow a second sunrise attempt if needed.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Culture &amp; Respect</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Support locally-owned community lodges. Bring reusable water filters rather than purchasing single-use bottles. Ask before photographing villagers, dress modestly, and pack out all plastic and non-biodegradable waste.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 16: IS IT WORTH IT */}
          <article id="worth-visiting" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is Muldai Viewpoint Worth Visiting?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The short answer is yes — enthusiastically. Muldai Viewpoint offers one of the most genuine Himalayan sunrise experiences available today, combining elevation, panorama, and trail solitude.
            </p>

            <div className="space-y-4 text-xs text-stone-600">
              <p>
                <strong>Who Will Enjoy Muldai Most?</strong>Ideal for trekkers seeking a quieter alternative to Poon Hill, photographers wanting clean mountain profiles without crowds, nature lovers, and anyone looking to integrate a quiet viewpoint into the longer Khopra Ridge &amp; Khayer Lake circuit.
              </p>
              <p>
                <strong>When It May Not Be the Best Choice:</strong>Muldai requires more time and walking. If you have only 2 to 3 days, Poon Hill remains the most practical choice. If you have 4 or more days, Muldai is worth the extra effort.
              </p>
            </div>
          </article>

          {/* SECTION 17: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Muldai Viewpoint
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Muldai Viewpoint located?",
                  a: "Muldai Viewpoint is located in the Annapurna Conservation Area in Nepal's Gandaki Province. It sits on a ridge above the settlement of Dobato, within the trekking network that connects Ghandruk, Tadapani, and the Khopra Ridge route. The nearest major city is Pokhara, approximately 50–60 kilometres to the south."
                },
                {
                  q: "How high is Muldai Viewpoint?",
                  a: "Muldai Viewpoint sits at an elevation of 3,637 metres (11,932 feet) above sea level. This makes it significantly higher than Poon Hill (3,210 m) and higher than most teahouse stops on the standard Annapurna circuit."
                },
                {
                  q: "How difficult is the Muldai Viewpoint trek?",
                  a: "The trek is rated moderate in difficulty. It does not require technical skills or specialist equipment, but it involves sustained uphill walking over multiple days and an early morning climb from Dobato to the summit. Reasonable cardiovascular fitness is recommended."
                },
                {
                  q: "What mountains can be seen from Muldai Viewpoint?",
                  a: "On a clear day, Muldai Viewpoint offers views of Annapurna South (7,219 m), Hiunchuli (6,441 m), Dhaulagiri I (8,167 m), Machhapuchhre (6,993 m), and Nilgiri (7,061 m). The panorama is exceptionally wide, spanning from Dhaulagiri to Machhapuchhre."
                },
                {
                  q: "Is Muldai Viewpoint better than Poon Hill?",
                  a: "Both viewpoints are exceptional, but they offer different experiences. Muldai sits higher, provides closer views of Annapurna South and Dhaulagiri, and sees far fewer trekkers. Poon Hill is more accessible and requires less time. For trekkers with 4 or more days who prioritises mountain views and solitude, Muldai is the stronger choice."
                },
                {
                  q: "What is the best time to visit Muldai Viewpoint?",
                  a: "Autumn (September to November) offers the best mountain visibility, with October being the most popular month. Spring (March to May) is excellent for rhododendron scenery and generally good morning views."
                },
                {
                  q: "How long does it take to hike from Dobato to Muldai?",
                  a: "The hike from Dobato to Muldai Viewpoint takes approximately 45 to 60 minutes at a moderate walking pace. Most trekkers depart between 4:30 and 5:00 a.m. to arrive at the summit before sunrise."
                },
                {
                  q: "Do I need permits for the Muldai trek?",
                  a: "Yes. Trekkers require an Annapurna Conservation Area Permit (ACAP) to trek in this area. Permits can be obtained in Pokhara or Kathmandu before beginning the trek."
                },
                {
                  q: "Can beginners visit Muldai Viewpoint?",
                  a: "Yes, with appropriate preparation. The trek is achievable for beginners who have a reasonable level of fitness and allow adequate time. Pacing and gradual acclimatisation are the key requirements."
                },
                {
                  q: "Can Muldai Viewpoint be combined with Khopra Ridge Trek?",
                  a: "Yes — and this is highly recommended. The Khopra Ridge Trek passes through Dobato, making Muldai a natural addition. A combined trek typically takes 7 to 10 days and can include Khayer Lake (4,660 m)."
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

          {/* SECTION 18: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Muldai Viewpoint is, simply put, one of the best things the Annapurna region has to offer — and one of the least crowded.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">At 3,637 metres, with a panorama that stretches from Dhaulagiri in the west to Machhapuchhre in the east, and with a sunrise experience that unfolds without the noise and crowds of more famous viewpoints, Muldai represents the Annapurna at its quietest and most rewarding.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you visit Muldai as a standalone sunrise destination, as part of a Khopra Ridge itinerary, or as an extension of a longer Annapurna circuit, the investment in getting there — the extra days, the sustained climbing, the early morning alarm — pays back many times over on that ridge above Dobato, watching the first light find the snowfields of Annapurna South.
            </p>
          </article>

          {/* SECTION 19: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Muldai Viewpoint &amp; Khopra Ridge Trek With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Our team has been guiding trekkers through the Annapurna foothills for years. We know the Muldai route, the best lodges in Dobato, the optimal seasons, and how to combine Muldai with the Khopra Ridge Trek and Khayer Lake for the most complete experience possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire About a Customized Trek &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This viewpoint planner is curated by certified guides based in Kathmandu. We walk the Khopra circuit and Dobato routes monthly to monitor trail safety, weather profiles, and community lodge operations.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
