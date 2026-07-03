import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/dobato-guide",
  },
  title: "Dobato Location Hub & Guide: Routes, Elevation, Accommodation & Muldai Viewpoint",
  description: "Discover where Dobato is located, its elevation, trekking routes, tea house accommodation, and how to reach Muldai Viewpoint on the Khopra Ridge Trek. Your complete planning guide.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">High Forest Pasture Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Dobato Location Hub &amp; Guide: Routes, Elevation, Accommodation &amp; Viewpoints
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Deep inside the Annapurna Conservation Area, above the treeline where rhododendron forests give way to open ridges and unbroken Himalayan sky, sits Dobato — one of the most strategically important overnight stops on the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,432m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">11,260 feet (Sub-alpine Ridge)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Main Viewpoint</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Muldai Hill</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">3,637m sunrise panorama</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Lodge Model</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Community</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Locally owned collectives</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trail Junctions</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">5 Directions</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Tadapani, Ghorepani, Bayeli</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Snapshot
              </a>
              <a href="#where-is-dobato" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Where is Dobato?
              </a>
              <a href="#why-stay-overnight" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Stay Overnight?
              </a>
              <a href="#elevation-specs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Elevation &amp; Difficulty
              </a>
              <a href="#trekking-routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trekking Routes
              </a>
              <a href="#trail-connections" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trail Connections
              </a>
              <a href="#muldai-viewpoint" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Muldai Viewpoint
              </a>
              <a href="#accommodation-facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation &amp; Food
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sample Itineraries
              </a>
              <a href="#trekking-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Essential Tips
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Strategically Important Overnight Stop
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">At approximately 3,432 metres, Dobato is not a large village. There are no busy markets, no crowded teahouses lined wall to wall with trekkers, and no long queues for sunrise viewpoints. What Dobato offers instead is something harder to find in Nepal&apos;s increasingly popular trekking corridors: a quiet high-altitude base from which serious trekkers can access Muldai Viewpoint, connect to Khopra Ridge, and move efficiently between Tadapani, Bayeli Kharka, Chhistibung, Ghorepani, and Swanta Village.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This page is your complete Dobato location guide — covering elevation, route connections, accommodation options, trekking logistics, and everything you need to plan your visit.
            </p>

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
                    <td className="px-6 py-4 text-stone-600">Approximately 3,432 m (11,260 ft)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Region</td>
                    <td className="px-6 py-4 text-stone-600">Annapurna Conservation Area, Myagdi/Kaski district border</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Trek</td>
                    <td className="px-6 py-4 text-stone-600">Khopra Ridge Trek</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Main Viewpoint</td>
                    <td className="px-6 py-4 text-stone-600"><Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 font-bold hover:underline">Muldai Viewpoint</Link> (Muldai Hill)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Nearest Nodes</td>
                    <td className="px-6 py-4 text-stone-600"><Link href="/nodes/tadapani-guide" className="text-emerald-700 font-bold hover:underline">Tadapani</Link>, <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 font-bold hover:underline">Bayeli Kharka</Link>, <Link href="/nodes/chhistibung-guide" className="text-emerald-700 font-bold hover:underline">Chhistibung</Link></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Accommodation</td>
                    <td className="px-6 py-4 text-stone-600">Community lodges and tea houses</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Best Seasons</td>
                    <td className="px-6 py-4 text-stone-600">Spring (March–May) and Autumn (September–November)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHERE IS DOBATO */}
          <article id="where-is-dobato" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Dobato?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Dobato&apos;s Location in the Annapurna Region</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Dobato sits on a high forest ridge in the Annapurna Conservation Area, positioned between the more familiar trekking hubs of Ghorepani to the northwest and Tadapani to the northeast. It lies within the zone that connects the classic Ghorepani–Poon Hill circuit to the less-travelled Khopra Ridge route, making it a natural junction for trekkers who want to explore deeper into the Annapurna sanctuary corridor without doubling back.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Administratively, Dobato falls near the boundary of Myagdi and Kaski districts. Most trekkers pass through it as part of the Khopra Ridge Trek, often arriving from Tadapani to the east or departing toward Bayeli Kharka and Khopra Ridge to the west and south.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Dobato Elevation and Natural Setting</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Dobato sits at roughly 3,432 metres above sea level — high enough to feel the altitude on the ascent, but comfortable enough for most well-acclimatised trekkers to sleep without issue. The settlement is surrounded by dense rhododendron and oak forest, which in spring transforms the approach trail into corridors of crimson and pink bloom.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The ridge setting means Dobato enjoys open sky above and forest shelter below, giving trekkers a rare combination: forest camping atmosphere at high elevation with clear access to mountain viewpoints above the treeline.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Dobato Is an Important Trekking Hub</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Unlike single-route waypoints, Dobato functions as a genuine trail junction. From here, trekkers can branch northeast toward Tadapani, descend west toward Bayeli Kharka, push further toward Khopra Ridge and Khayer Lake, or navigate toward Ghorepani and Swanta Village via alternative paths. This multi-directional connectivity is why Dobato matters — not just as a place to sleep, but as a planning node for several different trekking circuits in the Annapurna region.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: WHY STAY OVERNIGHT */}
          <article id="why-stay-overnight" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Stay Overnight in Dobato?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">An overnight stay here unlocks unique viewing and atmospheric experiences that day-trippers completely miss.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Gateway to Muldai Viewpoint</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The single strongest reason to spend a night in Dobato is the access it gives you to Muldai Viewpoint. Rising above Dobato at approximately 3,637 metres, Muldai Hill is one of the finest sunrise panorama points in the entire Annapurna region. From Dobato, the sunrise hike to Muldai takes roughly 45 minutes to an hour, meaning you can leave your lodge at 5:00 or 5:30 AM, reach the summit as first light touches Annapurna South and Machhapuchhre, and return for breakfast.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">A Quieter Alternative to Ghorepani</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Ghorepani is beautiful, but during peak season, the trail can feel more like a managed tourist route. Dobato offers a fundamentally different experience: trekker numbers are a fraction of those at Ghorepani, lodge accommodation is run by the local community rather than commercial operators, and the atmosphere is closer to what most people imagine when they picture trekking in Nepal.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Forest Landscapes &amp; Scenery</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The trail approach to Dobato is scenically rewarding, climbing through forest that shifts from rhododendron to mixed alpine vegetation as elevation increases. Once at Dobato itself, the views open up toward the western Annapurna range, offering a rare combination of forest atmosphere and mountain panorama.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Community-Based Tourism</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Accommodation in Dobato operates under a community tourism model. The lodges here are locally owned and managed, meaning that the money you spend on your room and meals stays within the immediate community rather than flowing to outside operators.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ELEVATION & DIFFICULTY */}
          <article id="elevation-specs" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Dobato Elevation, Distance and Trekking Facts
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">At 3,432 metres, Dobato sits comfortably in the zone where altitude effects begin to be felt but rarely become a serious issue for trekkers with reasonable acclimatisation. Most people arrive at Dobato after at least two to three days of trekking at progressively higher elevations, which provides adequate preparation.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">That said, the ascent from Tadapani (approximately 2,630 m) to Dobato involves an elevation gain of around 800 metres, which is a full day&apos;s climb. Trekkers who have not been moving at altitude for several days should ascend slowly, stay hydrated, and avoid overexerting on the final section of trail before Dobato. Muldai Viewpoint at approximately 3,637 metres adds another 200-metre climb above Dobato.
            </p>

            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">Distance and Walking Time Reference</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">Route Segment</th>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">Approximate Walking Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="px-4 py-2"><strong>Tadapani &rarr; Dobato</strong></td>
                      <td className="px-4 py-2">5–6 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2"><strong>Dobato &rarr; Muldai Viewpoint</strong></td>
                      <td className="px-4 py-2">45 minutes – 1 hour (one way)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2"><strong>Dobato &rarr; Bayeli Kharka</strong></td>
                      <td className="px-4 py-2">3–4 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2"><strong>Dobato &rarr; Chhistibung</strong></td>
                      <td className="px-4 py-2">4–5 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2"><strong>Dobato &rarr; Khopra Ridge</strong></td>
                      <td className="px-4 py-2">5–6 hours (via Bayeli Kharka)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2"><strong>Dobato &rarr; Ghorepani</strong></td>
                      <td className="px-4 py-2">5–7 hours (via alternative trails)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="text-[10px] text-stone-400 mt-2 block">Walking times are estimates for trekkers of average fitness. Conditions, load, and group size all affect pace.</span>
            </div>
          </article>

          {/* SECTION 5: TREKKING ROUTES */}
          <article id="trekking-routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Dobato Trekking Route Guide
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Trekking from Tadapani to Dobato</h4>
                <p className="mt-1">The most common way to arrive at Dobato is from Tadapani, approaching from the east. The trail leaves Tadapani&apos;s cluster of lodges and climbs steadily through mixed rhododendron and oak forest, following a ridge line that gradually widens the views westward toward the Annapurna massif. The walk takes approximately five to six hours. An early start is recommended, particularly in spring and summer.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dobato to Muldai Viewpoint Route</h4>
                <p className="mt-1">The trail from Dobato to Muldai Viewpoint climbs directly up the ridge above the lodges. The path is clear and well-trodden, with a consistent ascent over approximately 200 metres of elevation gain. Walking time is 45 minutes to one hour depending on pace. Headtorches are essential for the sunrise experience.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dobato to Bayeli Kharka Route</h4>
                <p className="mt-1">From Dobato, the trail toward Bayeli Kharka descends the western side of the ridge before following a trail through high-altitude pastoral terrain. Bayeli Kharka is a traditional grazing area and lodge stop that serves as an intermediate point between Dobato and Khopra Ridge. Walking time is three to four hours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dobato to Chhistibung Route</h4>
                <p className="mt-1">Chhistibung lies below and to the south of Dobato, reached by a trail that descends through forest and pasture terrain. The walk takes approximately four to five hours. This route is used by trekkers on alternative circuits or those connecting to Swanta Village.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dobato to Khopra Ridge Route</h4>
                <p className="mt-1">The continuation from Dobato to Khopra Ridge runs via Bayeli Kharka and takes approximately five to six hours of total walking. Khopra Ridge (Khopra Danda) at approximately 3,660 metres is the centrepiece of the Khopra Ridge Trek and offers its own stunning panoramic views across the Annapurna range.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: TRAIL CONNECTIONS */}
          <article id="trail-connections" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Dobato Route Map and Trail Connections
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Dobato sits at the intersection of several trekking routes. Understanding its connections helps you plan a circuit rather than an out-and-back route:
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Main Route Connections Around Dobato</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1">
                <li><strong>East:</strong>Tadapani (5–6 hrs) — connects to the classic Ghorepani–Poon Hill circuit</li>
                <li><strong>South:</strong>Chhistibung (4–5 hrs) — connects to Swanta Village and lower circuits</li>
                <li><strong>West:</strong>Bayeli Kharka (3–4 hrs) — connects to Khopra Ridge and Khayer Lake</li>
                <li><strong>Northwest:</strong>Ghorepani (5–7 hrs) — connects to Poon Hill circuit</li>
                <li><strong>Above:</strong>Muldai Viewpoint (45 min–1 hr) — sunrise panorama hike</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <h4 className="font-bold text-emerald-950 text-sm">Suggested Route Planning Options</h4>
              <ul className="list-disc pl-5 text-xs text-emerald-900 space-y-2 leading-relaxed mt-2">
                <li><strong>Option A — Muldai Focus (Short Loop):</strong>Pokhara &rarr; Nayapul &rarr; Ghorepani &rarr; Tadapani &rarr; Dobato (overnight, sunrise at Muldai) &rarr; Chhistibung &rarr; Swanta &rarr; Nayapul &rarr; Pokhara</li>
                <li><strong>Option B — Classic Khopra Ridge Circuit:</strong>Pokhara &rarr; Nayapul &rarr; Ghorepani &rarr; Tadapani &rarr; Dobato &rarr; Bayeli Kharka &rarr; Khopra Ridge &rarr; Swanta &rarr; Ghorepani &rarr; Nayapul &rarr; Pokhara</li>
                <li><strong>Option C — Extended Khayer Lake Trek:</strong>As per Option B but continues from Khopra Ridge to Khayer Lake before descending.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 7: MULDAI VIEWPOINT */}
          <article id="muldai-viewpoint" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint from Dobato
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Muldai Viewpoint sits at approximately 3,637 metres on the ridge directly above Dobato, and it is the primary reason most trekkers make the effort to reach and stay at Dobato overnight. The views from Muldai are exceptional by any standard — wide, unobstructed, and positioned directly opposite some of the highest peaks in the Annapurna and Dhaulagiri ranges.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">What makes Muldai especially valuable is its relative obscurity. While Poon Hill near Ghorepani receives hundreds of trekkers every morning during peak season, Muldai can offer an equally spectacular or superior panorama to a fraction of the crowd.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold text-stone-950 text-base">Peaks Visible from Muldai</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-stone-500 mt-2">
                <li><strong>Annapurna South</strong> (7,219 m)</li>
                <li><strong>Machhapuchhre</strong> (6,993 m)</li>
                <li><strong>Hiunchuli</strong> (6,441 m)</li>
                <li><strong>Nilgiri</strong> (7,061 m)</li>
                <li><strong>Dhaulagiri</strong> (8,167 m)</li>
              </ul>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Factor</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Muldai Viewpoint</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Poon Hill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 font-semibold">Elevation</td>
                    <td className="px-4 py-2">~3,637 m</td>
                    <td className="px-4 py-2">~3,210 m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Crowd Level</td>
                    <td className="px-4 py-2 text-emerald-600 font-bold">Very low</td>
                    <td className="px-4 py-2 text-red-600 font-bold">Very high (peak season)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">View Quality</td>
                    <td className="px-4 py-2">Equal or superior</td>
                    <td className="px-4 py-2">Excellent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Access</td>
                    <td className="px-4 py-2">Overnight in Dobato required</td>
                    <td className="px-4 py-2">Day hike from Ghorepani</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Trekking Depth</td>
                    <td className="px-4 py-2 font-semibold">Off-the-beaten-path</td>
                    <td className="px-4 py-2">Well-established tourist route</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 8: ACCOMMODATION & FOOD */}
          <article id="accommodation-facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation and Facilities in Dobato
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Accommodation in Dobato is modest, clean, and locally operated. The lodges here follow the classic Himalayan tea house model.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Community Lodges &amp; Dining</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Rooms feature twin single beds with foam mattresses and heavy blankets (bring a sleeping bag liner for extra warmth). Menus serve standard Himalayan dishes: dal bhat, noodle soups, fried rice, and simple egg breakfast items. Ingredients are transported from below, so fresh items are limited.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Power, Bathrooms &amp; Comfort</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Solar panels supply electricity for device charging in the dining area. Bring a power bank. Bathroom facilities are shared (basic squat or sit-toilets). Solar or gas hot water is sometimes available for a small fee. Prepare for cold nights as temperatures drop sharply after sunset.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Weather and Best Time to Visit Dobato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Rhododendron forests bloom in crimson and pink. Pleasant day walking temperatures, morning views are generally excellent.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Autumn (Sep–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Best post-monsoon visibility. Skies are crisp, providing sharp sunrise landscapes. Stable temperatures and trail conditions.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Winter (Dec–Feb)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Snow builds up on the ridge, making the Muldai walk challenging. Night temps drop below freezing. Quietest trails.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Monsoon (Jun–Aug)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Heavy rain and mud. Trails become slippery and leeches are common. Views are frequently obscured by thick clouds.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: SAMPLE ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Sample Dobato Trek Itineraries
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Depending on your time and experience levels, Dobato can be structured into multiple routes:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Option 1: Classic Khopra Ridge Trek (8–10 Days)</h4>
                <ul className="list-disc pl-5 text-[10px] text-stone-500 space-y-1 mt-2">
                  <li>Day 1: Pokhara &rarr; Nayapul &rarr; Tikhedhunga</li>
                  <li>Day 2: Tikhedhunga &rarr; Ghorepani</li>
                  <li>Day 3: Ghorepani &rarr; Tadapani</li>
                  <li>Day 4: Tadapani &rarr; Dobato</li>
                  <li>Day 5: Dobato (Muldai sunrise) &rarr; Bayeli Kharka</li>
                  <li>Day 6: Bayeli Kharka &rarr; Khopra Ridge</li>
                  <li>Day 7: Khopra Ridge &rarr; Swanta Village</li>
                  <li>Day 8: Swanta &rarr; Ghorepani &rarr; Nayapul &rarr; Pokhara</li>
                </ul>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Option 2: Short Muldai Loop (5–6 Days)</h4>
                <ul className="list-disc pl-5 text-[10px] text-stone-500 space-y-1 mt-2">
                  <li>Day 1: Pokhara &rarr; Nayapul &rarr; Tikhedhunga</li>
                  <li>Day 2: Tikhedhunga &rarr; Ghorepani</li>
                  <li>Day 3: Ghorepani &rarr; Tadapani</li>
                  <li>Day 4: Tadapani &rarr; Dobato</li>
                  <li>Day 5: Muldai sunrise &rarr; Dobato &rarr; Chhistibung &rarr; Swanta</li>
                  <li>Day 6: Swanta &rarr; Nayapul &rarr; Pokhara</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 11: ESSENTIAL TIPS */}
          <article id="trekking-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Trekking Tips for Dobato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Packing Essentials</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1 mt-2">
                  <li>Warm down jacket &amp; thermal base layers.</li>
                  <li>Ankle-support hiking boots.</li>
                  <li>Headtorch with spare batteries (critical for Muldai sunrise hike).</li>
                  <li>Offline map app downloads.</li>
                  <li>Water purification tablets.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base font-sans">Altitude &amp; Safety</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">Ascend gradually. Dobato sits at 3,432m, so monitor headache or fatigue. Drink 2–3 litres of water daily, avoid alcohol, and descend immediately if symptoms worsen. Carry acetazolamide (Diamox) if prescribed by a doctor.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-amber-950 text-sm">Local Expert Tips for the Best Experience</h4>
              <ul className="list-disc pl-5 text-xs text-amber-900 space-y-1 leading-relaxed mt-2">
                <li><strong>Best sunrise timing:</strong>Reach Muldai Viewpoint 10–15 minutes before the sun clears the eastern ridge.</li>
                <li><strong>Photography:</strong>Bring a tripod for low light. Alpenglow on Annapurna South fades to daylight quickly.</li>
                <li><strong>Lodge booking:</strong>During October, lodges fill up. If trekking with a guide, ask them to call ahead the day before.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Dobato
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Dobato located in Nepal?",
                  a: "Dobato is located in the Annapurna Conservation Area of western Nepal, on the Khopra Ridge trekking route between Tadapani to the east and Bayeli Kharka to the west. It sits near the administrative boundary of Myagdi and Kaski districts."
                },
                {
                  q: "What is the elevation of Dobato?",
                  a: "Dobato sits at approximately 3,432 metres (11,260 feet) above sea level. Muldai Viewpoint, the sunrise hike destination above Dobato, sits at approximately 3,637 metres."
                },
                {
                  q: "How long does it take to hike from Dobato to Muldai Viewpoint?",
                  a: "The hike from Dobato to Muldai Viewpoint takes approximately 45 minutes to one hour one way. The trail climbs around 200 metres above the lodges. Most trekkers depart at 5:00–5:30 AM to reach the viewpoint before sunrise."
                },
                {
                  q: "Is Dobato part of the Khopra Ridge Trek?",
                  a: "Yes. Dobato is one of the key overnight stops on the Khopra Ridge Trek. It typically appears on day four or five of the circuit, serving as the staging point before the descent to Bayeli Kharka."
                },
                {
                  q: "Are there tea houses in Dobato?",
                  a: "Yes. Dobato has community-run lodges and tea houses that offer basic accommodation and meals. Rooms are simple but clean, and dining options follow the standard Himalayan trekking menu."
                },
                {
                  q: "What mountains can be seen from Dobato and Muldai Viewpoint?",
                  a: "From Muldai Viewpoint above Dobato, the panorama includes Annapurna South (7,219 m), Machhapuchhre / Fishtail (6,993 m), Hiunchuli (6,441 m), Nilgiri (7,061 m), and Dhaulagiri (8,167 m)."
                },
                {
                  q: "Is Dobato less crowded than Ghorepani?",
                  a: "Significantly less crowded. Ghorepani and Poon Hill attract hundreds of trekkers daily during peak season. Dobato typically sees a fraction of this traffic — it is an off-the-beaten-path destination by Annapurna standards."
                },
                {
                  q: "What is the best season to visit Dobato?",
                  a: "The best seasons are spring (March to May) and autumn (September to November). October offers the clearest mountain visibility and most stable trekking weather."
                },
                {
                  q: "Can beginners trek to Dobato?",
                  a: "Dobato is accessible to reasonably fit beginners who have prepared adequately. The trail from Tadapani requires a full day of uphill walking at altitude, which can be challenging for those new to mountain trekking."
                },
                {
                  q: "How many nights should I stay in Dobato?",
                  a: "One night is sufficient for the Muldai sunrise experience. Two nights allows you to acclimatise more comfortably before continuing to higher elevations at Bayeli Kharka and Khopra Ridge, and gives you a backup option if the first morning is cloudy."
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
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Dobato sits at the quiet heart of one of Nepal&apos;s most rewarding trekking routes. At 3,432 metres, surrounded by rhododendron forest and connected to Muldai Viewpoint, Khopra Ridge, Bayeli Kharka, Tadapani, and Ghorepani, it is far more than an overnight tea-house stop. It is the central hub of the upper Khopra Ridge trail network — and the best base from which to watch the sun rise over Annapurna South, Machhapuchhre, and Dhaulagiri in near-solitude.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you are planning a five-day Muldai loop or a ten-day Khopra Ridge and Khayer Lake circuit, Dobato earns its place in your itinerary.
            </p>
          </article>

          {/* SECTION 14: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to Trek Through Dobato?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Plan your Khopra Ridge Trek with local guides who know the route, the lodges, and the best season for Muldai sunrise. Get in touch to discuss a custom itinerary, community lodge availability, and guided trek options tailored to your schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Enquire &amp; Customize Itinerary &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Dobato guide is reviewed by certified local guides based in Kathmandu. We walk the Khopra circuit and Dobato routes monthly to monitor trail safety, weather profiles, and community lodge operations.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
