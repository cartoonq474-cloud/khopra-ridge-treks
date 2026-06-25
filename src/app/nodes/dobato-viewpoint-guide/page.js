import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Muldai Viewpoint Guide (Dobato): Sunrise Trek, Route & Mountain Views",
  description: "Plan your Muldai Viewpoint trek from Dobato with our complete guide — route, sunrise timing, mountain views, difficulty, best season, and how it compares to Poon Hill.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Scenic Sunrise Panorama Peak
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl font-sans">Muldai Viewpoint Guide (Dobato): Complete Sunrise Trek &amp; Route Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">If you&apos;re planning a sunrise hike in the Annapurna foothills and keep hearing two names — Poon Hill and Muldai — this guide is for you. Muldai Viewpoint sits at 3,637m above the village of Dobato, and for many trekkers and photographers, it has quietly become the better choice.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block font-sans">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,637m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">11,932 feet (Alpine Ridge)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block font-sans">Gateway Node</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block font-sans">Dobato</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">3,432m overnight base</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block font-sans">Climb Time</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">30–45 Mins</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">From Dobato teahouses</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block font-sans">Crowd Level</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Under 20 visitors daily</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Overview &amp; Scope
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Where Is Muldai?
              </a>
              <a href="#reach-muldai" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Step-by-Step Route
              </a>
              <a href="#sunrise-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sunrise Experience
              </a>
              <a href="#mountains-visible" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Visible Mountains
              </a>
              <a href="#difficulty-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Difficulty &amp; Safety
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#muldai-vs-poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Muldai vs Poon Hill
              </a>
              <a href="#itinerary-integration" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Integration
              </a>
              <a href="#photography-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Photography Guide
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint: The Premium Sunrise Experience
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">This Muldai Viewpoint guide covers everything you need before you climb: where the viewpoint is, exactly how to get there from Dobato, what the sunrise actually looks like, which mountains you&apos;ll see, how hard the trek is, and when to go. We&apos;ll also walk through how Muldai compares to Poon Hill, so you can decide which sunrise climb fits your trip.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Whether you&apos;re adding Muldai to a <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 font-bold hover:underline">Khopra Ridge Trek</Link>, a Ghorepani–Poon Hill loop, or planning it as a standalone highlight, you&apos;ll find the practical details here to prepare with confidence.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Feature</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Muldai Viewpoint Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Elevation</td>
                    <td className="px-6 py-4 text-stone-600">3,637 m (11,932 ft)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Gateway Village</td>
                    <td className="px-6 py-4 text-stone-600"><Link href="/nodes/dobato-guide" className="text-emerald-700 font-bold hover:underline">Dobato</Link> (3,432 m)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Climb Duration</td>
                    <td className="px-6 py-4 text-stone-600">30 to 45 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Trail Distance</td>
                    <td className="px-6 py-4 text-stone-600">Approximately 1.5 to 2 km</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Summit Landmark</td>
                    <td className="px-6 py-4 text-stone-600">Wooden viewing tower</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Key Sights</td>
                    <td className="px-6 py-4 text-stone-600">Dhaulagiri I, Annapurna I, Machhapuchhre, Nilgiri (25+ peaks)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHERE IS MULDAI */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Muldai Viewpoint Located?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Muldai Viewpoint sits on a high ridge above Dobato, a small trekking settlement in the Annapurna Conservation Area. It&apos;s part of the same trail network that connects <Link href="/nodes/ghorepani-guide" className="text-emerald-700 font-bold hover:underline">Ghorepani</Link>, <Link href="/nodes/tadapani-guide" className="text-emerald-700 font-bold hover:underline">Tadapani</Link>, and the Khopra Ridge trek, which makes it easy to combine with other popular routes in the region.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Geographic Positioning</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Geographically, Muldai stands further north and at a higher elevation than Poon Hill, putting it noticeably closer to the main Himalayan wall. Where Poon Hill offers a wide-angle view from a forested hilltop, Muldai&apos;s position on an open ridge gives you a more direct line of sight toward the Dhaulagiri and Annapurna massifs. This captures a unique angle on peaks that many trekkers have already seen from other viewpoints.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Dobato: The Overnight Gateway</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Dobato is the overnight base for the Muldai sunrise climb. It&apos;s a small cluster of teahouse lodges set among rhododendron forest, typically reached as part of a multi-day loop. Staying in Dobato the night before means you&apos;re already positioned at the trailhead — there&apos;s no early transport or long approach walk before the climb begins. You simply wake up and start walking.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <h4 className="font-bold text-emerald-950 text-sm">Why Muldai&apos;s Altitude Matters for the Views</h4>
              <p className="text-xs text-emerald-900 leading-relaxed mt-2">At 3,637m (11,932ft), Muldai Viewpoint sits about 427 metres higher than Poon Hill (3,210m). The extra elevation lifts you above some of the haze and tree cover that can soften views from lower viewpoints, and it shortens the visual distance to peaks like Dhaulagiri I and Annapurna I. For photographers in particular, this height advantage is one of the clearest reasons Muldai stands out.
              </p>
            </div>
          </article>

          {/* SECTION 3: HOW TO REACH */}
          <article id="reach-muldai" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Muldai Viewpoint from Dobato (Step-by-Step Route)
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The climb from Dobato to Muldai Viewpoint is short but steep, done entirely in the dark on the way up. Here is exactly what to expect, step by step:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "Step 1: Early Wakeup & Layer Up",
                  desc: "Wake up early at your Dobato lodge. Most groups start between 4:30 AM and 5:00 AM, depending on the season and sunrise time. Dress in thermal layers, a windproof shell, warm gloves, and a hat — temperatures at this hour can sit well below freezing, even outside winter."
                },
                {
                  step: "Step 2: Start the Trail Directly",
                  desc: "Switch on your headlamp and leave the lodge. The trail begins right from the Dobato teahouse area, so there&apos;s no transfer or approach walk needed."
                },
                {
                  step: "Step 3: Climb the Rhododendron Forest",
                  desc: "The first section of trail winds upward through dwarf rhododendron and mixed alpine forest. The path is narrow and rocky in places, so a steady pace and good footwear matter more than speed."
                },
                {
                  step: "Step 4: Emerge onto the Open Ridge",
                  desc: "As you climb higher, the forest thins out into open alpine slopes. This is where the trail becomes more exposed to wind, and where you&apos;ll start to feel the change in temperature and air."
                },
                {
                  step: "Step 5: Reach the Summit Tower",
                  desc: "The trail ends at a wooden observation tower at 3,637m. This structure marks the official Muldai Viewpoint and gives you an elevated platform above the surrounding ridge line. Arrive with enough buffer time (at least 15–20 minutes) before sunrise to settle in."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-stone-950 text-sm sm:text-base">{item.step}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl text-stone-600 text-xs">
              <strong>Total time and difficulty:</strong>The climb from Dobato to Muldai Viewpoint takes 30 to 45 minutes for most trekkers, covering roughly 1.5 to 2 kilometres with a steady, sustained gradient. It&apos;s classified as easy to moderate — short enough for most fitness levels, but steep enough that you&apos;ll be breathing hard by the top, especially in the cold, thin air.
            </div>
          </article>

          {/* SECTION 4: SUNRISE EXPERIENCE */}
          <article id="sunrise-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Sunrise Experience at Muldai Viewpoint
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The sunrise is the entire reason most people make this climb in the dark, and Muldai delivers a noticeably different atmosphere than the more crowded viewpoints nearby.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base font-sans">Pre-Sunrise Atmosphere</h4>
                <p className="text-xs text-stone-500 leading-relaxed">In the minutes before sunrise, the summit is cold, still, and quiet. Unlike Poon Hill, where the viewing platform can feel packed with tour groups, Muldai&apos;s tower and surrounding ridge rarely host more than a couple of dozen people, even in peak season. This quieter setting gives you room to move around, change positions for photos, and simply take in the view.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base font-sans font-sans">Alpenglow Peak Progression</h4>
                <p className="text-xs text-stone-500 leading-relaxed">As the sky begins to lighten, the western and central Himalayan peaks catch the first colour — usually a soft pink or orange glow that spreads across the snow-covered summits. Dhaulagiri and the peaks to the west tend to light up first, followed by the Annapurna range and Machhapuchhre to the east. Watching this sequence unfold across more than 25 visible peaks is the highlight of the entire trek.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-amber-950 text-xs">
              <strong>Why Muldai feels more exclusive than Poon Hill:</strong>The difference in crowd size has a real effect on the experience. Poon Hill can see up to 1,000 visitors on a single autumn morning, while Muldai&apos;s summit typically hosts fewer than twenty. That means more space at the railing, less noise, and a sunrise that feels personal rather than like a shared spectator event.
            </div>
          </article>

          {/* SECTION 5: MOUNTAINS VISIBLE */}
          <article id="mountains-visible" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Mountains Visible from Muldai Viewpoint
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Part of what makes Muldai worth the early wake-up is the sheer range of peaks visible from a single spot:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Dhaulagiri Range</h4>
                <p className="text-xs text-stone-500 leading-relaxed">To the west, the Dhaulagiri range dominates the skyline. This includes Dhaulagiri I, the world&apos;s seventh-highest mountain at 8,167m, along with Tukuche Peak, Gurja Peak, and Dhampus Peak. It appears as a massive, jagged wall of ice and rock.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Annapurna Massif</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Turning toward the east, the Annapurna range fills much of the horizon. Annapurna South and Annapurna I (8,091m) are the most prominent, with Hiunchuli, Annapurna II, III, and IV forming a long ridge of connected summits.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Machhapuchhre (Fishtail)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Machhapuchhre (6,993m) rises sharply between the Annapurna peaks and the foreground hills. It is considered a sacred mountain and has never been officially climbed, standing as a clean, dramatic spike apart from the broader ranges.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl text-xs text-stone-600">
              <strong>Other Peaks:</strong>Nilgiri and Hiunchuli sit opposite the main viewing platform. Together with the Dhaulagiri and Annapurna ranges, the full sweep from Muldai takes in more than 25 named peaks — a wider spread than most viewpoints in the Annapurna foothills can offer.
            </div>
          </article>

          {/* SECTION 6: DIFFICULTY & SAFETY */}
          <article id="difficulty-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Difficulty Level, Safety &amp; Trekking Conditions
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Before you commit to the early wake-up, it helps to know exactly what kind of physical effort and conditions you&apos;re dealing with.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Fitness Requirement</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">The Muldai climb is short — 30 to 45 minutes — but it&apos;s a sustained uphill push from the moment you leave the lodge. There&apos;s no flat warm-up section. If you can comfortably manage a steep 30-minute hike at altitude, you&apos;ll be fine. Trekkers who have already spent a few days walking through the Annapurna foothills will generally find the climb manageable.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Altitude Awareness at 3,637m</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">At 3,637m, mild altitude effects such as shortness of breath or a faster heart rate are normal, especially during a steep climb in the dark. Serious altitude sickness is uncommon at this height for trekkers who&apos;ve already acclimatised over the previous days, but it&apos;s still worth pacing yourself. If you&apos;re feeling unusually unwell (persistent headache, nausea), let your guide know. You can estimate trekking fatigue using our <Link href="/planning/difficulty-calculator" className="text-emerald-700 font-bold hover:underline">Trek Difficulty Calculator</Link>.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Trail Conditions &amp; Night Safety</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Because the climb happens before dawn, a reliable headlamp is essential — not optional. The trail surface includes rocky and root-covered sections in the forest, and a loose, dusty path on the open ridge. In winter, sections can be icy or have light snow cover, which makes proper footwear and trekking poles useful. Walking with a guide is recommended for this section.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Muldai Viewpoint
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Rhododendron forests bloom in full color. Pleasant day temperatures, morning visibility is generally excellent.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Autumn (Oct–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Clearest post-monsoon visibility. Crisp morning skies with sharp views, making Muldai&apos;s quiet summit highly appealing.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Winter (Dec–Feb)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Cold mornings below freezing, but crisp and dry air produces some of the clearest panoramas. Snow may cover upper trail sections.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Monsoon (Jun–Sep)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Cloud cover and rain make sunrise views unreliable. Trails can be slippery. Generally not recommended for a dedicated sunrise climb.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: MULDAI VS POON HILL */}
          <article id="muldai-vs-poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint vs Poon Hill
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Both viewpoints offer sunrise views of the Annapurna and Dhaulagiri ranges, but the experience of reaching and standing at each one is quite different.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Feature</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Muldai Viewpoint</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Poon Hill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 font-semibold">Elevation</td>
                    <td className="px-4 py-2">3,637 m (11,932 ft)</td>
                    <td className="px-4 py-2">3,210 m (10,531 ft)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Average Crowds</td>
                    <td className="px-4 py-2 text-emerald-600 font-bold">Low (10–20 people)</td>
                    <td className="px-4 py-2 text-red-600 font-bold">Very High (up to 1,000 people)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Closeness to Peaks</td>
                    <td className="px-4 py-2 font-semibold text-emerald-600">Closer, more direct view</td>
                    <td className="px-4 py-2 text-stone-500">More distant, wide-angle view</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Access Requirements</td>
                    <td className="px-4 py-2 text-stone-600">Overnight at Dobato</td>
                    <td className="px-4 py-2 text-stone-600">Overnight at Ghorepani</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Photography Space</td>
                    <td className="px-4 py-2 text-emerald-600 font-bold">Abundant space, low congestion</td>
                    <td className="px-4 py-2 text-red-600 font-bold">Highly congested at observation platform</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs leading-relaxed space-y-2">
              <p>
                <strong>Crowd &amp; Experience:</strong>Poon Hill is the better-known name, and during peak season it draws massive numbers of visitors to a single viewing tower. Muldai, by contrast, rarely sees more than a couple of dozen people at sunrise.
              </p>
              <p>
                <strong>Photography Advantage:</strong>For photographers, Muldai offers more room to move, fewer people in the frame, and a wider compositional sweep across more than 25 peaks. Poon Hill&apos;s tower can become crowded enough that finding an unobstructed angle takes effort.
              </p>
              <p>
                <strong>Bottom Line:</strong>If you can only do one and want the most well-known, accessible option, Poon Hill remains a solid choice. If you&apos;ve already seen Poon Hill, prefer a quieter atmosphere, or are planning your trip around photography, Muldai from Dobato is the stronger pick.
              </p>
            </div>
          </article>

          {/* SECTION 9: ITINERARY & INTEGRATION */}
          <article id="itinerary-integration" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Muldai Viewpoint Itinerary and Trek Integration
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Muldai isn&apos;t usually a standalone destination — it&apos;s most often climbed as part of a multi-day route through the Annapurna foothills:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Overnight in Dobato</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The simplest way to include Muldai is a one-night stay at a Dobato teahouse, with the sunrise climb scheduled for the following morning before breakfast. After the climb, most groups return to the lodge, eat, and continue on to their next stop.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Khopra Ridge Trek Connection</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Dobato sits along the route used for the Khopra Ridge trek, which means Muldai can be added with minimal detour for anyone already following this circuit. Guided loops commonly build in a dedicated sunrise climb to Muldai.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Ghorepani &amp; Tadapani integration</h4>
                <p className="text-xs text-stone-500 leading-relaxed">For trekkers on the classic Ghorepani–Poon Hill–Tadapani loop, Dobato (and Muldai) can be added as a variation or extension, offering a second sunrise viewpoint with a different angle on the same mountain ranges.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: PHOTOGRAPHY GUIDE */}
          <article id="photography-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Photography Guide for Muldai Sunrise
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">If you&apos;re bringing a camera, a little planning goes a long way at this viewpoint.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Best Positioning at the Wooden Tower</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">The wooden viewing tower gives you an elevated platform above the immediate ridge, which helps reduce foreground clutter in your shots. Arriving early lets you choose a spot along the railing with a clear, unobstructed line toward the peaks rather than scrambling for space once the light starts changing.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Timing the Light Changes</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">The most dramatic light typically occurs in the 15–20 minutes before and after sunrise itself, as the sky shifts from deep blue to pink and gold. Set up early and keep shooting through this window — the colours and contrast change quickly, and the best frame often isn&apos;t the moment the sun appears, but the minutes just before.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Capturing Dhaulagiri &amp; Annapurna Together</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Because Dhaulagiri sits to the west and the Annapurna range and Machhapuchhre sit to the east, a wide-angle lens or a panoramic shot can capture both sides of the horizon in a single composition. Prioritise the moment both ranges are lit with morning colour simultaneously.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-emerald-950 text-sm">Is Muldai Viewpoint Worth It?</h4>
              <p className="text-xs text-emerald-900 leading-relaxed mt-2">If you&apos;re weighing whether to add an extra night and an early wake-up to your itinerary, the answer is: for most trekkers already passing through the Annapurna foothills, yes. The combination of higher elevation, a wider mountain panorama, and a fraction of the crowds makes Muldai stand out even for travellers who&apos;ve already done a sunrise hike elsewhere in the region.
              </p>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Muldai Viewpoint
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How difficult is the Muldai Viewpoint trek from Dobato?",
                  a: "It&apos;s a short but steep climb, taking 30 to 45 minutes from Dobato to the summit. It&apos;s rated easy to moderate — manageable for most trekkers who have already spent a few days walking in the Annapurna foothills, though the cold and altitude make it feel more demanding than the distance suggests."
                },
                {
                  q: "How long does it take to reach Muldai Viewpoint?",
                  a: "Most trekkers reach the wooden viewing tower at Muldai Viewpoint in 30 to 45 minutes from the Dobato lodges, covering around 1.5 to 2 kilometres of steady uphill trail."
                },
                {
                  q: "Is Muldai Viewpoint better than Poon Hill?",
                  a: "It depends on what you are looking for. Muldai is higher (3,637m vs 3,210m), offers a wider panorama of over 25 peaks, and sees far fewer visitors than Poon Hill, which can host close to 1,000 people on a busy autumn morning. Poon Hill remains the more iconic, accessible option, but Muldai is often preferred by photographers and repeat visitors for its quieter, closer views."
                },
                {
                  q: "What mountains can be seen from Muldai Viewpoint?",
                  a: "From the summit, you can see the Dhaulagiri range (including Dhaulagiri I at 8,167m, Tukuche Peak, Gurja Peak, and Dhampus Peak), the Annapurna massif (Annapurna I, South, II, III, and IV, plus Hiunchuli), Machhapuchhre (Fishtail), and Nilgiri Himal — more than 25 peaks in total across a near-360-degree sweep."
                },
                {
                  q: "Do I need a guide for the Muldai Viewpoint trek?",
                  a: "While the trail is short, it&apos;s climbed in the dark and includes uneven, rocky sections through forest and open ridge. A guide helps with route-finding before dawn and adds a layer of safety, especially in winter when sections of the trail can be icy."
                },
                {
                  q: "What is the best time to visit Muldai Viewpoint?",
                  a: "Autumn (October–November) offers the clearest skies and best mountain visibility. Spring (March–May) adds blooming rhododendrons along the lower trail. Winter can deliver crisp, clear views but with freezing temperatures. Monsoon season (June–September) is best avoided due to cloud cover and slippery trail conditions."
                },
                {
                  q: "Is Muldai Viewpoint suitable for beginners?",
                  a: "Yes, for most beginners who are already on a multi-day trek and have had a few days to adjust to walking at altitude. The climb is short, but it&apos;s steep and done in cold, pre-dawn conditions, so a reasonable level of fitness and proper warm clothing are important."
                },
                {
                  q: "Is Muldai Viewpoint part of the Khopra Ridge Trek?",
                  a: "Yes, Dobato — the starting point for the Muldai climb — sits along the Khopra Ridge trek route, and the Muldai sunrise climb is commonly included as part of guided itineraries that pass through this area."
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

          {/* SECTION 12: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Muldai Viewpoint offers something increasingly rare in the Annapurna foothills: a genuinely quiet sunrise above 3,600m, with a panorama that rivals or exceeds the region&apos;s most famous viewpoint. The short, steep climb from Dobato rewards you with close-up views of Dhaulagiri, Annapurna, and Machhapuchhre — and a summit you&apos;ll likely share with fewer than twenty other people.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If you&apos;re planning a trek through Ghorepani, Tadapani, or the Khopra Ridge route, building in a night at Dobato for this sunrise climb is one of the simplest ways to add a standout moment to your itinerary.
            </p>
          </article>

          {/* SECTION 13: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to add Muldai Viewpoint to your Annapurna trek?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Our guided loops through Dobato include a dedicated sunrise climb to Muldai, with hot tea served at the summit. Get in touch to discuss a custom itinerary, community lodge availability, and guided trek options tailored to your schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire about bookings &rarr;
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
              <h4 className="font-bold text-stone-900 text-sm font-sans">First-Hand Expert Insight</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks to ensure our information remains the gold standard.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
