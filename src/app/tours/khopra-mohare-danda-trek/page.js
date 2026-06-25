import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge & Mohare Danda Eco-Trek: Complete Annapurna Community Trek Guide",
  description: "Explore the Khopra Ridge & Mohare Danda Eco-Trek — a complete guide covering the route, day-by-day itinerary, difficulty, cost, permits, community lodges, Khayer Lake, and mountain views. Trek the Annapurna region with local experts.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
             Pioneering Community Eco-Trek
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge &amp; Mohare Danda Eco-Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Trek through two extraordinary viewpoints — Mohare Danda and Khopra Ridge — all woven together through off-the-beaten-path villages where community-owned lodges support local development.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Maximum Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">~4,500m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Khayer Lake Peak</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Duration</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">10–14 Days</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">With Khayer Lake included</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Moderate</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Prior fitness recommended</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Accommodation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Local Cooperatives</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Community Lodges</span>
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
              <a href="#offbeat" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Off-the-Beaten-Path?
              </a>
              <a href="#highlights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Highlights
              </a>
              <a href="#facts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Trek Facts
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Detailed Itinerary
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake Extension
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Fitness
              </a>
              <a href="#lodging" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodges &amp; Food
              </a>
              <a href="#cost" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Costs
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits &amp; Logistics
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#mountains" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountains &amp; Views
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#impact" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sustainable Impact
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
                Inquire &amp; Plan
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
              If you&apos;re looking for a trekking experience in Nepal that goes beyond the usual trail — fewer crowds, genuine mountain hospitality, and views that stop you mid-step — the Khopra Ridge &amp; Mohare Danda Eco-Trek belongs at the top of your list.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              This is not a typical Annapurna route. It combines two extraordinary viewpoints — Mohare Danda and Khopra Ridge — with an optional extension to the sacred Khayer Lake, all woven together through off-the-beaten-path villages where community-owned lodges have transformed trekking into a force for local development.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              The trek runs through the southern Annapurna region, starting from Pokhara and weaving through Magar and Gurung villages that most travelers never see. Forests of rhododendron, towering ridgelines, and uninterrupted panoramas of Dhaulagiri, Annapurna South, Machhapuchhre, and Nilgiri unfold day by day along the route.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              It typically takes 10 to 14 days depending on your itinerary and whether you include Khayer Lake. The difficulty sits at a moderate level, making it accessible to trekkers with reasonable fitness — though the altitude and daily elevation gains deserve respect.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              In this guide, our local team walks you through everything you need to plan and enjoy this trek: the route, itinerary, difficulty, accommodation, costs, permits, best seasons, mountain views, and why this experience is fundamentally different from anything you&apos;ll find on the Poon Hill circuit.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-8">
              <h3 className="text-lg font-bold text-stone-950 mb-3"> What Is the Khopra Ridge &amp; Mohare Danda Eco-Trek?</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The Khopra Ridge &amp; Mohare Danda Eco-Trek is a community-based trekking circuit in the Annapurna region of Nepal. It connects two elevated ridgelines — Mohare Danda and Khopra Ridge — along a route that passes through remote villages, rhododendron forests, and high-altitude meadows with sweeping views of the central Himalaya.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2 font-semibold">
                Where Is the Trek Located?
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mt-1">
                The trek takes place entirely within the Annapurna Conservation Area, Nepal&apos;s largest protected region. The trailhead is accessible from Pokhara, which serves as the starting and ending point. The route runs through the Modi Khola and Kali Gandaki river valleys, climbing into the hills south of the main Annapurna massif. This position gives trekkers an unusually wide mountain panorama — including views toward both the Dhaulagiri range in the west and the Annapurna peaks to the north.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2 font-semibold">
                How the Khopra Ridge and Mohare Danda Route Works
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mt-1">
                The standard route begins with a drive from Pokhara toward Ghorepani or one of the southern entry villages, then climbs progressively through a series of traditional villages. Mohare Danda is typically reached in the first half of the trek and offers one of the most expansive sunrise viewpoints. From Mohare Danda, the route continues through village trails toward Khopra Ridge, gaining altitude and changing character as the landscape opens up. The Khayer Lake excursion is usually done as a day hike from a camp near Khopra Ridge, before descending back toward Pokhara via Ghandruk or a similar lower trail.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-2 font-semibold">
                What Makes This an Eco Trek?
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mt-1">
                The &quot;eco&quot; in this trek isn&apos;t a marketing label. The lodges along the Mohare Danda and Khopra Ridge route were built and are operated by local communities, with the majority of revenue staying within the villages. This community-based tourism model was designed to give local people a direct stake in conservation and sustainable land management. Trekkers choosing this route directly contribute to village schools, clean water infrastructure, waste management programs, and forest protection.
              </p>
            </div>
          </article>

          {/* OFFBEAT */}
          <article id="offbeat" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why This Trek Is One of Nepal&apos;s Best Off-the-Beaten-Path Adventures
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Annapurna region draws thousands of trekkers every year, but most of them follow the same well-worn paths — Poon Hill, Annapurna Base Camp, Mardi Himal. The Khopra Ridge and Mohare Danda route was intentionally developed as a quieter, more meaningful alternative.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Less Crowded Poon Hill Alternative</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Poon Hill is extraordinary, but it is also one of the busiest viewpoints in Nepal. On popular trekking dates, hundreds of hikers gather at the summit before dawn. Mohare Danda and Khopra Ridge give you the same Himalayan panorama — arguably an even better one — without the queue. On most mornings, you share the ridge with only a handful of other trekkers.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Authentic Village Life &amp; Culture</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The villages along this route are home to Magar and Gurung communities who have lived in these hills for generations. Daily life here is connected to the land — farming, herding, seasonal rhythms — and trekkers passing through are welcomed as guests. Nangi, Swanta, Banskharka, and Tikot are among the villages trekkers pass through.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Tourism That Supports Development</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The community lodge model on this route was pioneered with the specific goal of keeping tourism revenue inside the communities. Lodges here are operated by village cooperatives. Your accommodation fees directly fund local development: better-maintained trails, cleaner water systems, and children attending school.
                </p>
              </div>
            </div>
          </article>

          {/* HIGHLIGHTS */}
          <article id="highlights" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trek Highlights
            </h2>
            
            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base"> Sunrise Views from Mohare Danda</h4>
                <p className="mt-1">
                  Mohare Danda sits at approximately 3,300 metres and delivers one of the most complete Himalayan sunrise panoramas in the Annapurna region. The ridge faces east and north, which means the morning light hits the peaks in a sequence — Dhaulagiri first, then the Annapurna range emerging from shadow, then Machhapuchhre catching fire.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">🏔️ Panoramic Himalayan Views from Khopra Ridge</h4>
                <p className="mt-1">
                  At approximately 3,660 metres, Khopra Ridge extends the mountain panorama even further. From here, the full Dhaulagiri massif comes into view, along with Annapurna South, Hiunchuli, Nilgiri, and Machhapuchhre. The ridge itself is a beautiful walking environment of open alpine meadows.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base"> The Sacred Khayer Lake Excursion</h4>
                <p className="mt-1">
                  Khayer Lake sits at approximately 4,500 metres above sea level, tucked beneath a cirque of high-altitude ridges. For local Magar and Gurung communities, the lake is a sacred site tied to religious festivals. The hike from the Khopra Ridge camp takes most walkers four to six hours round trip.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base"> Rhododendron Forests and Diverse Landscapes</h4>
                <p className="mt-1">
                  The trail between the lower villages and the upper ridges passes through some of the finest rhododendron forests in the Annapurna Conservation Area. In spring (March-April), these forests bloom in deep red, pink, and white — a visual spectacle against the snow peaks.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base"> Traditional Villages and Community Lodges</h4>
                <p className="mt-1">
                  The lodges on this route are family-scale operations run by the local village cooperatives. The food is simple, warm, and freshly prepared. Staying in community lodges rather than standard tea houses creates a fundamentally different, warm relationship between the trekker and the place.
                </p>
              </div>
            </div>
          </article>

          {/* FACTS */}
          <article id="facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Quick Trek Facts at a Glance
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Trek Duration", value: "10–14 days (including Khayer Lake)" },
                  { label: "Trek Difficulty", value: "Moderate" },
                  { label: "Maximum Elevation", value: "~4,500 m (Khayer Lake)" },
                  { label: "Best Seasons", value: "Spring (Mar–May) & Autumn (Sep–Nov)" },
                  { label: "Starting Point", value: "Pokhara" },
                  { label: "Ending Point", value: "Pokhara" },
                  { label: "Accommodation", value: "Community lodges, homestays, tea houses" },
                  { label: "Permits Required", value: "ACAP Permit, TIMS Card" },
                  { label: "Trek Type", value: "Eco trek / Community-based trek" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Detailed Khopra Ridge &amp; Mohare Danda Itinerary
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The following itinerary covers the complete circuit including the Khayer Lake extension. Depending on your pace and fitness level, some days can be adjusted.
            </p>

            <div className="space-y-6">
              {[
                {
                  days: "Day 1-2",
                  title: "Pokhara to the First Trail Villages",
                  details: [
                    "Day 1: Drive from Pokhara to Nayapul or Beni, then begin trekking toward the first community lodge villages. Walk 3 to 4 hours.",
                    "Day 2: Continue uphill through rhododendron and oak forest toward Nangi or a nearby village. Gradient is steady, with early mountain views opening to the north."
                  ]
                },
                {
                  days: "Day 3-4",
                  title: "Trek to Mohare Danda",
                  details: [
                    "Day 3: Climb toward Mohare Danda (3,300m) through increasingly open terrain. Arrive by early afternoon to acclimatize and enjoy late-day mountain colors.",
                    "Day 4: Wake before dawn for the Mohare Danda sunrise. Spend the morning exploring the ridge before descending slightly to continue the route."
                  ]
                },
                {
                  days: "Day 5-6",
                  title: "Through Villages Toward Khopra Ridge",
                  details: [
                    "Day 5: Trek from Mohare Danda toward Swanta village, passing through forest trails and traditional Magar farming communities.",
                    "Day 6: Continue from Swanta through Banskharka toward the Khopra Ridge area. The trail climbs significantly, and the landscape becomes open. Arrive at the Khopra lodge area."
                  ]
                },
                {
                  days: "Day 7-8",
                  title: "Khopra Ridge Exploration",
                  details: [
                    "Day 7: Rest and explore around the Khopra Ridge camp (3,660m). This is a good acclimatization day with short walks around the ridge.",
                    "Day 8: Full day exploration of the Khopra Ridge viewpoint. Photography of the massive panorama spanning from Dhaulagiri to Machhapuchhre."
                  ]
                },
                {
                  days: "Day 9",
                  title: "Khayer Lake Side Trip",
                  details: [
                    "Day 9: Start before sunrise for the day hike to Khayer Lake (4,500m). The trail climbs steeply through barren high-altitude terrain. Allow 5 to 7 hours round trip. Return to Khopra camp."
                  ]
                },
                {
                  days: "Day 10-11",
                  title: "Descent and Return to Pokhara",
                  details: [
                    "Day 10: Begin descent from the ridge. Drop toward Ghandruk, a large Gurung village offering stone architecture and local cultural immersion.",
                    "Day 11: Final descent to a roadhead village, then jeep transfer back to Pokhara. Arrive by midday."
                  ]
                }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                    <h3 className="font-extrabold text-stone-950 text-base">{sec.title}</h3>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/10">
                      {sec.days}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {sec.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-stone-600 leading-relaxed list-disc pl-5 ml-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          {/* KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Extension: Is It Worth Adding?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The honest answer from our guides: yes, for almost everyone who attempts it. Khayer Lake is not simply an add-on — for many trekkers, it becomes the emotional high point of the entire trip.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Sacred Pilgrimage Sites</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Khayer Lake holds deep spiritual significance for Magar and Gurung communities throughout the region. Local traditions describe it as a home of the gods, and annual festivals draw pilgrims from surrounding villages for ceremonies.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Day Hike Difficulty</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The hike to Khayer Lake involves approximately 800 metres of elevation gain from the Khopra camp. The terrain is rocky and exposed, and the altitude (close to 4,500m) means the air is thin. The pace should be slow and steady.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🏔️ Glacial Stillness</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The lake is small and extraordinarily still on calm days, reflecting the peaks above like a high-altitude mirror. In spring, patches of snow ring the shoreline; in autumn, the water is clear and surrounded by golden slopes.
                </p>
              </div>
            </div>
          </article>

          {/* DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty, Distance and Fitness Requirements
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Khopra Ridge &amp; Mohare Danda Eco-Trek is rated as a moderate trek. This places it above beginner-level routes like the Poon Hill day hike, but well below technical high-altitude expeditions like Thorong La.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Daily Walking &amp; Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  On most days, trekking time ranges from four to six hours. Some days — particularly the Khayer Lake hike and the Khopra Ridge approach — involve walking times of six to eight hours. Trails are well-defined but steep, consisting of stone staircases, forested paths, and exposed ridges.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Is the Trek Suitable for Beginners?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekkers without previous Himalayan experience can complete this trek if they are in good general fitness. Cardiorespiratory preparation (cardio and hill walking for 4-6 weeks beforehand) is highly recommended. Our guides adjust pace based on comfort level.
                </p>
              </div>
            </div>

            {/* Altitude acclimatisation alert box */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5">⚠️</span>
                <div>
                  <h4 className="font-black text-amber-950 text-sm tracking-wide uppercase">Altitude and Acclimatization Considerations</h4>
                  <p className="mt-2 text-xs text-stone-700 leading-relaxed font-semibold">
                    The maximum elevation is approximately 4,500m at Khayer Lake. Altitude-related symptoms (headache, fatigue, loss of appetite) are possible.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-stone-600 list-disc pl-5">
                    <li>Stay well-hydrated throughout the trek.</li>
                    <li>Avoid ascending too quickly.</li>
                    <li>Inform guides immediately if symptoms worsen.</li>
                    <li>Consider carrying Diamox after consulting a physician.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Who This Trek Is Best For</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                First-time Nepal trekkers wanting a complete Himalayan experience, photographers seeking unobstructed panoramas, eco-conscious travelers interested in community tourism, and repeat visitors who want something less crowded than ABC. Those with mobility or severe cardiovascular conditions should consult a physician beforehand.
              </p>
            </div>
          </article>

          {/* LODGING */}
          <article id="lodging" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Accommodation, Food and Community Lodges
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              The Mohare Danda and Khopra Ridge route is served by family-run lodges and teahouses, ensuring clean, basic facilities.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Operated by village cooperatives, these lodges reinvest earnings into village infrastructure (clean water, schools, and sanitation). Rooms are basic twin bed setups with shared bathrooms.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Meals on the Trail</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Dal bhat (lentil soup, rice, veg) is the staple. Most lodges also serve noodle soups, Tibetan bread with honey, momos, porridge, and eggs. Vegetarian options are readily available.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Lodge Facilities</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Solar power is standard; device charging is possible but carrying a power bank is recommended. Wi-Fi is inconsistent and unheated rooms are standard, so layering is essential.
                </p>
              </div>
            </div>
          </article>

          {/* COST */}
          <article id="cost" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Cost of the Khopra Ridge &amp; Mohare Danda Trek
            </h2>

            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4"> Independent Trek Costs (Estimated Daily Cost)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: "Accommodation", value: "$8–$15 per night" },
                  { label: "Meals (3 per day)", value: "$12–$20 per day" },
                  { label: "Snacks & Drinks", value: "$5–$8 per day" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-center">
                    <span className="text-xs text-stone-400 font-bold block">{item.label}</span>
                    <span className="text-sm font-black text-stone-900 mt-1 block">{item.value}</span>
                  </div>
                ))}
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
                  <span className="text-xs text-emerald-600 font-bold block">Daily Total</span>
                  <span className="text-sm font-black text-emerald-950 mt-1 block">$25–$43 USD</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-emerald-50/50 border border-emerald-500/15 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-950 text-sm uppercase tracking-wide">What Is Included in Our Guided Package</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Professional, licensed local guide.</li>
                  <li>Porter services (one porter for every two trekkers).</li>
                  <li>All accommodations along the trail.</li>
                  <li>Three fresh meals per day during the trek.</li>
                  <li>All permits (ACAP and TIMS).</li>
                  <li>Pokhara–trailhead transportation.</li>
                  <li>Emergency protocol and safety coordination.</li>
                </ul>
              </div>
              <div className="bg-rose-50/40 border border-rose-500/10 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-950 text-sm uppercase tracking-wide">Additional Expenses to Consider</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Mandatory travel insurance (altitude-capable).</li>
                  <li>Tips for guide and porter.</li>
                  <li>Personal snacks, beverages, and bottled water.</li>
                  <li>Souvenirs and village purchases.</li>
                  <li>Extra nights in Pokhara before or after the trek.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Permits and Trek Logistics
            </h2>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Required Trekking Permits</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                <strong>Annapurna Conservation Area Permit (ACAP):</strong> Support wildlife and trail management. Fee is NPR 3,000 (~USD 22-25) for foreign nationals.<br /><br />
                <strong>TIMS Card (Trekkers&apos; Information Management System):</strong> Safety tracking registration. Cost is NPR 2,000 for individual trekkers.
              </p>
              <h4 className="font-bold text-stone-950 text-base pt-2">Getting to the Trailhead from Pokhara</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Most itineraries begin with a jeep or local bus transfer from Pokhara to the starting trailhead village (1.5 to 3 hours). Pokhara is reached from Kathmandu by domestic flight (25 mins) or tourist bus (6-8 hours).
              </p>
            </div>
          </article>

          {/* BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Do the Khopra Ridge &amp; Mohare Danda Trek
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Spring</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">March to May</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Visually spectacular. Rhododendron forests bloom in March and April. Stable weather with afternoon cloud build-up by May. Clear morning skies.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Autumn</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Sept to Nov</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Peak visibility. Post-monsoon air is washed clean, creating sharp views against deep skies. October is busiest; November brings cooler nights.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-amber-600 block">Winter</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Dec to Feb</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Cold but beautiful. Snow above 3,000m transforms the landscape. Minimal crowds. High trails can be icy, requiring micro-spikes.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-rose-600 block">Monsoon</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">June to August</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">
                  Not recommended. Heavy rains make trails slippery, leeches are active, and cloud cover blocks mountain views. Green hillsides are lush, however.
                </p>
              </div>
            </div>
          </article>

          {/* MOUNTAINS */}
          <article id="mountains" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Mountains and Views You Can See Along the Route
            </h2>
            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Dhaulagiri Mountain Views</h4>
                <p className="mt-1">
                  At 8,167 metres, the world&apos;s seventh-highest mountain dominates the western horizon. From Khopra Ridge, the full massif fills the sky in a profile that is immediately recognizable.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Annapurna South and Hiunchuli</h4>
                <p className="mt-1">
                  Annapurna South (7,219m) and Hiunchuli (6,441m) rise directly to the north, offering close-up details of glaciers and ridgelines on clear mornings.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Machhapuchhre (Fishtail Mountain) &amp; Nilgiri</h4>
                <p className="mt-1">
                  Fishtail Mountain (6,993m) shows its distinctive twin-peaked silhouette, while the Nilgiri range (7,061m) forms a vertical wall of rock and ice to the north.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-8">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wider"> Best Photography Locations on the Trek</h4>
              <ul className="mt-2 space-y-1 text-xs text-stone-600 list-disc pl-5">
                <li>Mohare Danda at sunrise: Wide angle panorama, best light at dawn.</li>
                <li>Khopra Ridge in late afternoon: West-facing golden hour light on Dhaulagiri.</li>
                <li>Rhododendron forests (March–April): Erupting spring colors set against snow peaks.</li>
                <li>Khayer Lake: Reflection photography in still, high-altitude glacial waters.</li>
              </ul>
            </div>
          </article>

          {/* COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs Poon Hill vs Mardi Himal Trek
            </h2>
            
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse text-sm rounded-2xl overflow-hidden border border-stone-200">
                <thead>
                  <tr className="bg-stone-900 text-white text-xs font-bold uppercase tracking-wider">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Poon Hill</th>
                    <th className="p-4">Mardi Himal</th>
                    <th className="p-4">Khopra &amp; Mohare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white text-xs">
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Crowd Level</td>
                    <td className="p-4 text-stone-500">Very High (Hundreds daily)</td>
                    <td className="p-4 text-stone-500">Moderate (Growing popularity)</td>
                    <td className="p-4 text-stone-900 font-bold">Low (Off-corridor, secluded)</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Mountain Views</td>
                    <td className="p-4 text-stone-500">Sunrise concentration viewpoint</td>
                    <td className="p-4 text-stone-500">Close Machhapuchhre proximity</td>
                    <td className="p-4 text-stone-900 font-bold">Multi-day sustained panoramas</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Cultural Experience</td>
                    <td className="p-4 text-stone-500">Commercialized teahouse track</td>
                    <td className="p-4 text-stone-500">Basic forest tea stops</td>
                    <td className="p-4 text-stone-900 font-bold">High (Community lodges &amp; homestays)</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Best For</td>
                    <td className="p-4 text-stone-500"> Hikers on very tight timelines</td>
                    <td className="p-4 text-stone-500">Trekkers seeking ridge proximity</td>
                    <td className="p-4 text-stone-900 font-bold">Hikers seeking culture and space</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* IMPACT */}
          <article id="impact" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Sustainable Trekking and Community Impact
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-bold text-stone-950 text-base">How Community-Based Tourism Works</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Income from trekkers is pooled and allocated by a village management committee. Each lodge employs local staff, sources food from local farmers, and contributes to a shared community fund. This channels spending directly into village economies.
                </p>
                <h4 className="font-bold text-stone-950 text-base">Responsible Travel Practices</h4>
                <ul className="text-xs text-stone-500 list-disc pl-5 space-y-1">
                  <li>Pack out all non-biodegradable waste.</li>
                  <li>Use refillable water bottles and purification tablets.</li>
                  <li>Respect sacred sites like Khayer Lake; keep voices low.</li>
                  <li>Pay fair prices; avoid aggressive lodge bargaining.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-stone-950 text-base">Why Sustainable Trekking Matters</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  When trekking income is managed unsustainably through trail overuse, waste accumulation, or extraction by outside operators, local communities bear the cost. Choosing the Khopra Ridge and Mohare Danda route balances ecological sensitivity with direct economic benefit.
                </p>
              </div>
            </div>
          </article>

          {/* FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Khopra Ridge &amp; Mohare Danda Eco-Trek
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is the Khopra Ridge & Mohare Danda Eco-Trek?",
                  a: "It is a community-based trekking circuit in Nepal's Annapurna region that connects two panoramic ridgelines — Mohare Danda and Khopra Ridge — passing through Magar and Gurung villages where locally-owned lodges support sustainable tourism."
                },
                {
                  q: "How difficult is the Khopra Ridge Trek?",
                  a: "The trek is rated as moderate. Trekkers should be comfortable walking four to six hours daily on steep, uneven terrain. The highest point — Khayer Lake at approximately 4,500 metres — involves a significant day hike at altitude, but no technical climbing is required."
                },
                {
                  q: "How many days does the trek take?",
                  a: "The full circuit including Khayer Lake takes 10 to 14 days from Pokhara and back. A shorter version without Khayer Lake can be completed in 8 to 10 days. Day count varies based on trekking pace and acclimatization stops."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "Yes — consistently so. Khayer Lake sits at 4,500 metres, holds deep spiritual significance for local communities, and offers a high-altitude atmosphere that is genuinely unique. The hike is demanding but not beyond moderate fitness."
                },
                {
                  q: "What is the highest point on the trek?",
                  a: "The highest point is Khayer Lake at approximately 4,500 metres above sea level. Khopra Ridge, at approximately 3,660 metres, is the highest point on the main circuit excluding the Khayer Lake extension."
                },
                {
                  q: "When is the best time to trek Khopra Ridge and Mohare Danda?",
                  a: "Spring (March to May) and autumn (September to November) are the best seasons. Spring offers rhododendron blooms and stable weather. Autumn brings the clearest mountain views after the monsoon."
                },
                {
                  q: "Can beginners complete this trek?",
                  a: "Yes, with appropriate preparation. The trek does not require previous Himalayan trekking experience, but trekkers should be fit and comfortable with extended daily walking."
                },
                {
                  q: "What permits are required?",
                  a: "Two permits are needed: the Annapurna Conservation Area Permit (ACAP) and the TIMS Card. Both are available in Pokhara. Our team arranges all permits for guided trek bookings."
                },
                {
                  q: "How much does the Khopra Ridge Trek cost?",
                  a: "Independent trekking costs approximately $25–$43 USD per day in accommodation and food. A complete guided package typically ranges from $600 to $1,200 USD per person depending on group size, duration, and itinerary."
                },
                {
                  q: "Is the trek less crowded than Poon Hill?",
                  a: "Yes, significantly. The Khopra Ridge and Mohare Danda route sees a fraction of the trekker traffic that Poon Hill receives during peak season. Even in busy October and November, the trails here feel quiet and unhurried."
                },
                {
                  q: "Are community lodges comfortable?",
                  a: "Community lodges are clean, welcoming, and simple. Expect basic twin or double rooms, shared bathrooms, and communal dining spaces. Facilities vary by elevation — higher camps are more basic."
                },
                {
                  q: "Do I need a guide for this trek?",
                  a: "A guide is not legally mandatory but is strongly recommended — particularly for first-time Nepal trekkers and for the Khayer Lake day hike. Local guides provide cultural context, safety support, and logistical coordination."
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
              The Khopra Ridge &amp; Mohare Danda Eco-Trek offers something increasingly rare in Himalayan trekking: the chance to experience extraordinary mountain views, genuine cultural immersion, and meaningful sustainable travel in a single, accessible journey.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              From the sunrise panorama at Mohare Danda to the stillness of Khayer Lake at 4,500 metres, from the warmth of a community lodge dinner to the wide, quiet ridge of Khopra with Dhaulagiri filling the western sky — this trek delivers experiences that remain vivid long after the journey ends.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              It is a less crowded alternative to Poon Hill. It is a more culturally rich experience than many standard Annapurna routes. And it is a direct way to support the villages and communities that have built something genuinely worth protecting. Whether you are a first-time Nepal trekker or a returning visitor looking for something deeper, the Khopra Ridge and Mohare Danda circuit is a trek worth taking seriously.
            </p>
          </article>

          {/* CTA BOOKING BLOCK */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Customize Your Khopra Ridge &amp; Mohare Danda Eco-Trek With Our Local Team</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guides are based in the Annapurna region and have walked this route in every season. We build itineraries around your pace, your interests, and the time you have available. Private and group treks available year-round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan My Trek →
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span> Based in Pokhara, Nepal</span>
                  <span> Standard response within 24 hours</span>
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
