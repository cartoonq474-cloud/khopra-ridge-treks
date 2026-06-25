import React from "react";
import Link from "next/link";
import ElevationProfile from "@/components/ElevationProfile";

export const metadata = {
  title: "Ultimate Khopra Ridge Guide: Itinerary, Cost, Permits, Difficulty & Best Time",
  description: "Plan your Khopra Ridge Trek with confidence. This complete guide covers the full route, day-by-day itinerary, altitude profile, permits, cost, best time to go, and what to expect on the trail — everything you need before you book.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Expert Certified Route Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Ultimate Khopra Ridge Guide: Itinerary, Cost, Permits, Difficulty &amp; Best Time
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Plan your Khopra Ridge Trek with confidence. This complete guide covers the full route, day-by-day itinerary, altitude profile, permits, cost, best time to go, and what to expect on the trail — everything you need before you book.
          </p>
          
          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Max Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Khayer Lake Peak</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Standard Duration</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">9 Days</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">7-11 Day Variations</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Moderate+</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">No technical climbing</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Best Seasons</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Oct - Nov</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">March - April</span>
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
              <a href="#different" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Khopra is Different
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Standard Itinerary
              </a>
              <a href="#map-details" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route Map Overview
              </a>
              <a href="#difficulty-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Altitude &amp; Safety
              </a>
              <a href="#best-season" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Season window
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Required Permits
              </a>
              <a href="#cost" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Cost Details
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodge Accommodation
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Gear Packing List
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Comparisons
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Book This Trek
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Ultimate Khopra Ridge Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The Khopra Ridge Trek — also known as Khopra Danda — is one of the most rewarding trekking routes in Nepal&apos;s Annapurna region. It is quieter than Annapurna Base Camp, more demanding than Poon Hill, and offers mountain views that few trails in the Himalayas can match at a comparable altitude.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This guide was put together by our team of certified guides who walk the Khopra circuit regularly and know the trail in every season. We have organized everything you need to plan, prepare, and book the trek — from the day-by-day itinerary and altitude profile to permits, costs, weather windows, and what to pack.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Whether you are still comparing treks or ready to start planning, this Khopra Ridge Guide gives you the complete picture.
            </p>

            {/* Quick Summary Grid */}
            <div className="mt-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">Khopra Ridge Trek at a Glance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Trek Type", value: "Community Lodge Circuit" },
                  { label: "Duration", value: "7 to 11 days (9 days recommended)" },
                  { label: "Difficulty", value: "Moderate to Moderately Difficult" },
                  { label: "Max Altitude", value: "3,660m (Ridge) / 4,660m (Khayer Lake)" },
                  { label: "Best Season", value: "Oct–Nov and Mar–Apr" },
                  { label: "Starting Point", value: "Pokhara (via Ghandruk)" },
                  { label: "Permits Required", value: "ACAP Permit + TIMS Card" },
                  { label: "Accommodation", value: "Community Lodges and Teahouses" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Glance Details */}
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Trek Type, Duration &amp; Difficulty</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">The Khopra Ridge Trek is a community lodge circuit inside the Annapurna Conservation Area. The standard and most commonly recommended version runs nine days, starting and ending in Kathmandu. It is classified as moderate to moderately difficult: the trails involve long daily ascents, some steep and exposed sections, and a demanding high-altitude day hike to Khayer Lake. No technical climbing is required at any point.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Highest Point &amp; Altitude Profile</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">The ridge itself sits at 3,660 meters, which makes it a realistic goal for any trekker with a solid fitness base and proper pacing. The optional side trip to Khayer Lake takes the altitude to 4,660 meters — a significant jump that requires careful acclimatization. Most trekkers who include the lake plan to spend two nights at Khopra Ridge before attempting the hike.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Best Season &amp; Trail Conditions</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">The two best windows are October to November and March to April. These periods offer clear mountain visibility, stable temperatures, and firm trail conditions. Above the tree line, sections of the trail can be exposed to wind and cold even in peak season — good gear is always worth carrying.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Why Trekkers Choose Khopra</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">The main draw is the combination of exceptional mountain views and a quieter trail experience. From the ridge, you are standing almost eye-to-eye with Dhaulagiri (8,167m) — the world&apos;s seventh-highest mountain — alongside Annapurna South (7,219m), Nilgiri, and Machhapuchhre. You are also sleeping in community-managed lodges in traditional Gurung and Magar villages, walking terrain that most Annapurna trekkers never see.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 2: WHY DIFFERENT */}
          <article id="different" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Khopra Ridge Is Different from Other Annapurna Treks
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The Annapurna region has no shortage of excellent routes. What makes Khopra Ridge worth choosing over the more popular alternatives is not one single thing — it is the whole experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg mb-4"></div>
                <h4 className="font-bold text-stone-900 text-base">Less Crowded Than Mainstream Treks</h4>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">The Annapurna Circuit and the ABC route together receive tens of thousands of trekkers each year. Poon Hill is genuinely busy during peak months. Khopra Ridge draws a fraction of that traffic. The trail is quieter, the lodges are calmer, and the experience is more personal. You are not sharing the ridge at sunrise with hundreds of other people. You are watching the light hit Dhaulagiri in near-silence.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg mb-4"></div>
                <h4 className="font-bold text-stone-900 text-base">Strong Mountain Views, Low Logistics</h4>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">The ridge sits in a rare position on the landscape: directly facing Dhaulagiri on one side and the Annapurna massif on the other. You do not need a multi-week expedition or a technical permit to access these views. The route is practical, well-paced, and the views from the ridge are sustained over two nights rather than a single sunrise stop.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg mb-4"></div>
                <h4 className="font-bold text-stone-900 text-base">Community Lodge &amp; Local Character</h4>
                <p className="mt-3 text-xs text-stone-500 leading-relaxed">The Khopra Ridge circuit is served by community-managed lodges operated by local Gurung and Magar families. Staying at these lodges puts income directly into the hands of trail communities, supports Annapurna Conservation Area maintenance, and gives the trek a grounded, local character that feels very different from the more commercialized teahouse strips on the ABC approach.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Itinerary
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">We offer this trek in different durations depending on how much time you have and whether you want to include Khayer Lake. Here is how each option works.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Shortened Option</span>
                <h4 className="font-bold text-stone-950 mt-1">7-Day Rapid Trail</h4>
                <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">Tightens transit days and skips the high-altitude day hike to Khayer Lake. Best for hikers on limited timelines who still want the dramatic ridge views and community lodges.
                </p>
              </div>
              <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">Highly Recommended</span>
                <h4 className="font-bold text-stone-950 mt-1">9-Day Balanced Loop</h4>
                <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">The ultimate default option. Includes the full circuit, the Khayer Lake high-altitude day hike, and closes with the classic Poon Hill sunrise loop at the end.
                </p>
              </div>
              <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Extended Option</span>
                <h4 className="font-bold text-stone-950 mt-1">10-11 Day Pace</h4>
                <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">Adds an extra rest and exploration day on Khopra Ridge before attempting the lake. Offers the safest acclimatization strategy for absolute safety at 4,660m.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-stone-950 mb-6">Interactive Route Elevation Path</h3>
              <ElevationProfile />
            </div>

            {/* Day by Day summary lists */}
            <div className="space-y-8 mt-12">
              <h3 className="text-xl font-bold text-stone-950">Day-by-Day Route Summary (9-Day Loop)</h3>
              
              {[
                {
                  day: "Day 1",
                  title: "Arrival in Kathmandu",
                  elev: "1,400m",
                  desc: "Arrive at Tribhuvan International Airport. Our representative will transfer you to your hotel in Thamel. The evening includes a pre-trek briefing covering gear, permits, and daily logistics. 1–2 hours total travel."
                },
                {
                  day: "Day 2",
                  title: "Fly to Pokhara | Drive to Ghandruk | Trek to Tadapani",
                  elev: "2,630m",
                  desc: "A morning flight to Pokhara is followed by a three-hour drive to the Gurung village of Ghandruk. From here the trek begins in earnest — a climb through oak and rhododendron forest toward Tadapani, with the first clear views of Annapurna South appearing above the tree line. 5–6 hours walking."
                },
                {
                  day: "Day 3",
                  title: "Tadapani to Bayeli Kharka",
                  elev: "3,425m",
                  desc: "This is the day the trail becomes your own. Leaving the popular Annapurna trekking route behind, the trail climbs through moss-draped rhododendron forests into open pasture land at Bayeli Kharka. The forest is quieter, greener, and deeply atmospheric. 5–6 hours walking."
                },
                {
                  day: "Day 4",
                  title: "Bayeli Kharka to Chhistibung",
                  elev: "2,975m",
                  desc: "A descent into a silent valley is followed by a climb through bamboo meadows. This is one of the best stretches for spotting wildlife — including the Himalayan Monal, Nepal's national bird — and the views begin to open up as the trail gains and loses elevation. 4–5 hours walking."
                },
                {
                  day: "Day 5",
                  title: "Chhistibung to Khopra Ridge / Khopra Danda",
                  elev: "3,660m",
                  desc: "A steep and fully rewarding final climb brings you above the tree line and onto the ridge. Arrive in time for sunset over Dhaulagiri and the Annapurna range. The community lodge at the ridge is well-positioned for the view, and this evening is one of the most memorable on the entire trek. 3–4 hours walking."
                },
                {
                  day: "Day 6",
                  title: "Day Hike to Sacred Khayer Lake",
                  elev: "4,660m",
                  desc: "The most physically demanding day of the trip. The round-trip hike from Khopra Ridge to Khayer Lake gains roughly 1,000 meters of altitude and involves steep, exposed terrain in the higher sections. Start before 6am, carry extra water and snacks, and turn around without hesitation if you or anyone in your group develops altitude sickness symptoms. The lake itself, tucked beneath Annapurna South at the edge of the glacier, is sacred to local communities and visually spectacular. 7–8 hours round trip."
                },
                {
                  day: "Day 7",
                  title: "Khopra Ridge to Swanta Village",
                  elev: "2,200m",
                  desc: "The descent from the ridge is steep and long. The trail drops through valley walls before reaching Swanta, a traditional Magar village surrounded by carefully terraced farming fields. The change in landscape from high ridge to working farmland is striking. 5–6 hours walking."
                },
                {
                  day: "Day 8",
                  title: "Swanta to Ghorepani",
                  elev: "2,860m",
                  desc: "Cross the suspension bridge and climb back up to rejoin the main trekking network at Ghorepani — a well-known lodge village on the classic Poon Hill circuit. 4–5 hours walking."
                },
                {
                  day: "Day 9",
                  title: "Poon Hill Sunrise | Trek to Nayapul | Drive to Pokhara | Fly to Kathmandu",
                  elev: "1,400m",
                  desc: "Rise before dawn for the sunrise from Poon Hill (3,210m), one of the most celebrated sunrise viewpoints in Nepal. Descend to Nayapul, transfer by road to Pokhara, and take an afternoon or evening flight back to Kathmandu. 7–8 hours total with travel."
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
                    <p className="text-xs text-stone-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 4: MAP OVERVIEW */}
          <article id="map-details" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Route and Map Overview
            </h2>
            <div className="space-y-6 text-stone-600 text-base leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Starting Point and Access from Pokhara</h4>
                <p className="mt-2 text-sm leading-relaxed">The trekking section begins from Ghandruk village, reached by road from Pokhara in approximately three hours. Pokhara is the main access hub for the Annapurna region, connected to Kathmandu by a 25-minute flight or a seven to eight-hour road journey. Almost all Khopra Ridge trek packages begin and end in Kathmandu, with domestic flights to Pokhara included.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Main Trail Stops on the Way Up</h4>
                <p className="mt-2 text-sm leading-relaxed">From Ghandruk, the route moves through Tadapani, then climbs off the main tourist trail into the quieter terrain of Bayeli Kharka and Chhistibung before the final ascent to the ridge. Each stop has its own character — from the forest camping feel of Bayeli to the open meadow descent into Chhistibung — and the gradual altitude gain across these days allows the body time to adjust before reaching the ridge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Khopra Ridge to Khayer Lake Side Trip</h4>
                <p className="mt-2 text-sm leading-relaxed">Khayer Lake sits at 4,660 meters beneath Annapurna South. The lake is considered sacred by local communities and visited by pilgrims during religious festivals. The hiking distance is significant, and the trail is steep and exposed in the upper section. The reward is a high alpine environment that few trekkers outside the Annapurna region ever see. The lake day should always be planned with a stable weather forecast and a full, early start.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">Return Route Options</h4>
                <p className="mt-2 text-sm leading-relaxed">The descent from Khopra Ridge moves through Swanta village and climbs back to Ghorepani to rejoin the popular Poon Hill network. This closing loop is logical and practical: it lets trekkers end with the Poon Hill sunrise before descending to Nayapul for the road transfer to Pokhara. The Swanta section of the descent is the least-traveled and most scenic part of the return.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: SAFETY */}
          <article id="difficulty-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Altitude, Difficulty, and Safety
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The route is not technically difficult. But the altitude and daily walking demands make it a serious physical commitment — particularly if the Khayer Lake hike is included.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Altitude Gains &amp; Sleeping Elevations</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Sleeping altitude climbs steadily from around 2,630 meters at Tadapani to 3,425 meters at Bayeli Kharka, with a slight descent to Chhistibung at 2,975 meters before the final rise to Khopra Ridge at 3,660 meters. The jump from ridge-level sleeping to the lake at 4,660 meters on Day 6 is the most significant altitude exposure of the entire route. This is why spending two nights at Khopra Ridge before the lake is strongly recommended.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">How Difficult the Trek Really Is</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">This trek suits trekkers with a reasonable base fitness level and some prior experience on uneven terrain. You do not need to be an athlete or a seasoned mountaineer. But you should be comfortable with five to seven hours of walking on mixed trail surfaces for multiple consecutive days, and you should expect tired legs by the Swanta descent. The Khayer Lake day is significantly harder than any other day on the route.
                </p>
              </div>
            </div>

            {/* AMS ALERT WARNING BOX */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-6 mt-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5"></span>
                <div>
                  <h4 className="font-black text-amber-900 text-sm tracking-wide uppercase">Critical AMS Awareness &amp; Safety Rules</h4>
                  <p className="mt-2 text-xs text-amber-900 leading-relaxed font-semibold">Acute Mountain Sickness can affect anyone at altitude, regardless of how fit they are. The rules that matter most on this route are:
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700 list-disc pl-5">
                    <li>Do not increase your sleeping altitude by more than 500 meters per day above 3,000 meters.</li>
                    <li>Drink a minimum of four liters of water per day to prevent dehydration.</li>
                    <li>Spend two nights at Khopra Ridge before attempting the Khayer Lake hike.</li>
                    <li>If a headache, dizziness, or nausea develops and does not resolve with rest, descend immediately.</li>
                  </ul>
                  <p className="mt-4 text-xs text-stone-500 leading-relaxed">Carrying a basic first-aid kit and a portable pulse oximeter is strongly recommended, particularly for the Khayer Lake day. If you are prescribed Diamox by your doctor as an altitude precaution, carry it as directed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">When Khayer Lake Becomes a Serious Challenge</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">The lake hike is not a casual add-on. In cold or wet conditions, the upper trail can become icy, and the altitude at the lake is high enough that a swift deterioration in weather can create a genuinely risky descent. The cardinal rule is to start early — before 6am — and to turn back without compromise if conditions change or someone in your group shows AMS symptoms. Pride is not worth a medical evacuation at 4,000 meters.
              </p>
            </div>
          </article>

          {/* SECTION 6: BEST TIME */}
          <article id="best-season" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time for Khopra Ridge Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Timing has a significant impact on the quality of the experience. Above 3,500 meters, weather and altitude conditions can shift quickly and unexpectedly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Optimal Choice</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Autumn (Oct - Nov)</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">The monsoon ends in late September, leaving clear skies, stable temperatures, and outstanding visibility across the ranges. October typically produces the clearest views.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-emerald-600 block">Floral Bloom</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Spring (Mar - Apr)</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">Rhododendron forests bloom along lower sections. Visually diverse with warm ridge temperatures, although spring can bring pre-monsoon cloud build-up and slight haze.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-amber-600 block">Cold &amp; Dry</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Winter (Dec - Feb)</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">Sunny but cold. Temperatures drop below zero at night. High trails can be icy or snow-covered. Requires proper cold gear, and lake hike may be unsafe.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl">
                <span className="text-xs font-black text-rose-600 block">Avoid Season</span>
                <h4 className="font-bold text-stone-950 text-sm mt-1">Monsoon (Jun - Sep)</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-2">Persistent heavy rain, leeches, slippery trails, and minimal visibility. Not recommended. June is the least impacted month if you absolutely must go.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Permits
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The Khopra Ridge trail runs entirely within the Annapurna Conservation Area (ACA), and all foreign nationals must hold two permits before entering the trail. These permits must be arranged before you begin trekking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">ACAP Permit (Conservation Area)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The entry permit for the Annapurna Conservation Area, issued by the Nepal Tourism Board. Conservation fees collected support trail maintenance, wildlife protection, and community development.
                </p>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 mt-4 flex justify-between items-center text-xs font-bold">
                  <span className="text-stone-500">ACA Fee:</span>
                  <span className="text-stone-900">~3,000 NPR (approx. USD 23)</span>
                </div>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">TIMS Card (Trekker Registry)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Registers your trekking information with Nepali authorities, which supports safety tracking and search-and-rescue coordination. If registered through an agency, it is often processed as part of your package.
                </p>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 mt-4 flex justify-between items-center text-xs font-bold">
                  <span className="text-stone-500">TIMS Fee:</span>
                  <span className="text-stone-900">~2,000 NPR (approx. USD 15)</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Where Permits Are Arranged</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Both permits are issued at Nepal Tourism Board offices in Kathmandu (Bhrikutimandap, Pradarshani Marg) and Pokhara (Damside). You will need passport photographs and a photocopy of your passport. If you are trekking through a registered agency, the guide and operator will typically handle permit registration before departure.
              </p>
              <h4 className="font-bold text-stone-950 text-base mt-4">What Travelers Should Verify Before Departure</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Permit fees, entry requirements, and guide regulations in Nepal can and do change between trekking seasons. The Nepal Tourism Board has revised trekking rules in recent years, including guidance on licensed guide accompaniment in certain zones. Always confirm current requirements directly with the NTB or a registered Kathmandu-based trekking agency before your trip.
              </p>
            </div>
          </article>

          {/* SECTION 8: COST */}
          <article id="cost" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Cost
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The total cost of the trek depends on several factors: whether you travel independently or with a guided package, which season you choose, your group size, and how many extra days you add.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-emerald-50/50 border border-emerald-500/15 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-900 text-sm uppercase tracking-wide">What a Trek Package Typically Includes</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Airport transfers in Kathmandu.</li>
                  <li>Domestic flights (Kathmandu–Pokhara return).</li>
                  <li>A licensed, English-speaking trekking guide.</li>
                  <li>A trekking porter.</li>
                  <li>All trekking permits (ACAP and TIMS).</li>
                  <li>Teahouse and community lodge accommodation.</li>
                  <li>Daily breakfast and dinner on the trail.</li>
                </ul>
              </div>
              <div className="bg-rose-50/40 border border-rose-500/10 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-900 text-sm uppercase tracking-wide">What Is Usually Excluded</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>International airfare and Nepal visa.</li>
                  <li>Travel insurance (helicopter evacuation cover required).</li>
                  <li>Personal trekking gear and equipment.</li>
                  <li>Tips for guide and porter.</li>
                  <li>Trail lunch and bottled beverages.</li>
                  <li>Teahouse Wi-Fi and hot shower fees.</li>
                  <li>Personal spending in Kathmandu and Pokhara.</li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Budget, Standard, and Guided Options</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-medium">Budget-conscious trekkers can complete the circuit independently for less by managing permits, accommodation, and food directly. However, the Khayer Lake day in particular — with its altitude exposure and navigational demands above the tree line — is significantly safer and more enjoyable with a local guide who knows the terrain, weather patterns, and emergency descent routes. For most trekkers, a guided package is the most practical, safe, and ultimately satisfying option. Get in touch for a current, personalized cost estimate based on your group size and travel dates.
              </p>
            </div>
          </article>

          {/* SECTION 9: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Accommodation
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Accommodation on the trail is community-managed, locally-run, and deliberately simple. This is not a luxury lodge route. It is a community lodge circuit, and that distinction matters for how you prepare.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Community Lodges &amp; Teahouses</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Served by community-managed lodges and teahouses at Tadapani, Bayeli Kharka, Chhistibung, Khopra Ridge, Swanta, and Ghorepani. Rooms are twin or double bed with shared bathrooms. Blankets and pillows are provided. Charging facilities and hot showers are available at most lodges, usually for a small additional fee.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Room, Food, &amp; Facility Expectations</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Food menu follows standard Himalayan teahouse patterns: dal bhat (rice, lentils, veg), noodles, pasta, fried rice, omelettes, and porridge. Warm and calorie-appropriate. Above 3,500m, menu options narrow and costs increase slightly. Expect honest, warm hospitality rather than polished service.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Booking Advice in Peak Season</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">During October and March, the Ghorepani lodges on the closing section of the route can fill quickly. If you are trekking during these peak months, confirm lodge availability in advance through your guide or operator. The Khopra Ridge community lodges themselves are generally quieter than the main circuit and rarely fully booked during any season.
              </p>
            </div>
          </article>

          {/* SECTION 10: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What to Pack for the Khopra Ridge Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Good packing is the difference between a comfortable trek and a miserable one. The key is covering a wide temperature range without carrying more than you can manage on a long uphill day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2 mb-3">Clothing</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Moisture-wicking base layers, warm mid-layer fleece, a down jacket (essential for the cold ridge nights and the early lake hike), waterproof/windproof outer shell, sturdy trekking trousers, warm hiking socks, and thermals. A hat, gloves, and neck gaiter are mandatory above the tree line.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2 mb-3">Footwear</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Waterproof trekking boots with good ankle support. Break them in before you arrive. Trekking poles are highly recommended to save knees on the steep descent from Khopra Ridge down to Swanta.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2 mb-3">Safety &amp; Health</h4>
                <p className="text-xs text-stone-500 leading-relaxed">First-aid kit, personal medications, altitude sickness medication (Diamox if prescribed), lip balm, high-SPF sunscreen, rehydration salts, and water purification tablets or light filter. (Bottled water is expensive and generates plastic waste).
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider border-b border-stone-100 pb-2 mb-3">Accessories</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Quality headlamp with extra batteries (crucial for early starts), reusable water bottles, dry bags for documents/passport, and sufficient cash in Nepali Rupees. (There are no ATMs on the trail after Pokhara).
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge vs Poon Hill vs Annapurna Base Camp
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Many trekkers come to the Annapurna region and face a straightforward question: which route is the right one? Here is a direct comparison based on real differences.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse text-sm rounded-2xl overflow-hidden border border-stone-200">
                <thead>
                  <tr className="bg-stone-900 text-white text-xs font-bold uppercase tracking-wider">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Poon Hill</th>
                    <th className="p-4">Annapurna Base Camp</th>
                    <th className="p-4">Khopra Ridge (with Lake)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Crowd Level</td>
                    <td className="p-4 text-xs text-stone-500">Very High (Hundreds daily)</td>
                    <td className="p-4 text-xs text-stone-500">High (Consistent trail flow)</td>
                    <td className="p-4 text-xs text-stone-900 font-bold">Low (Secluded, off-corridor)</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Highest Point</td>
                    <td className="p-4 text-xs text-stone-500">3,210m (Viewpoint)</td>
                    <td className="p-4 text-xs text-stone-500">4,130m (Base Camp)</td>
                    <td className="p-4 text-xs text-stone-900 font-bold">4,660m (Khayer Lake)</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Difficulty</td>
                    <td className="p-4 text-xs text-stone-500">Easy to Moderate</td>
                    <td className="p-4 text-xs text-stone-500">Moderate</td>
                    <td className="p-4 text-xs text-stone-900 font-bold">Moderate to Difficult</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold text-stone-900">Duration</td>
                    <td className="p-4 text-xs text-stone-500">3 - 4 Days</td>
                    <td className="p-4 text-xs text-stone-500">9 - 12 Days</td>
                    <td className="p-4 text-xs text-stone-900 font-bold">7 - 11 Days</td>
                  </tr>
                  <tbody className="divide-y divide-stone-100 bg-stone-50/20">
                    <tr>
                      <td className="p-4 font-bold text-stone-900">Best Fits Whom</td>
                      <td className="p-4 text-[11px] text-stone-500">First-timers looking for a short entry hike</td>
                      <td className="p-4 text-[11px] text-stone-500">Trekkers seeking classic sanctuary views</td>
                      <td className="p-4 text-[11px] text-stone-900 font-bold">Trekkers seeking peace, ridge panoramas, and alpine lakes</td>
                    </tr>
                  </tbody>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions
            </h2>
            
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Khopra Ridge Trek difficult?",
                  a: "Khopra Ridge is rated moderate to moderately difficult. The daily walking hours are manageable for most reasonably fit trekkers, but the sustained multi-day commitment, altitude above 3,000 meters, and the demanding Khayer Lake day make this more than a beginner trek. Good pacing and proper altitude management matter more than raw fitness."
                },
                {
                  q: "How many days does Khopra Ridge Trek take?",
                  a: "The standard recommended itinerary is nine days, starting and ending in Kathmandu. A shorter seven-day version is possible by omitting Khayer Lake. A more relaxed version with full acclimatization at the ridge takes ten to eleven days."
                },
                {
                  q: "What is the highest point on Khopra Ridge Trek?",
                  a: "The ridge itself sits at 3,660 meters. With the Khayer Lake side trip included, the highest point of the trek is 4,660 meters."
                },
                {
                  q: "Is Khayer Lake included in the standard itinerary?",
                  a: "Yes, Khayer Lake is included in our nine-day standard itinerary. It can be removed for trekkers with limited time or fitness concerns. However, the lake hike is the most memorable single day of the circuit and is worth planning for if your health and schedule allow."
                },
                {
                  q: "What permits are needed for Khopra Ridge Trek?",
                  a: "Two permits are required: the ACAP permit for the Annapurna Conservation Area and a TIMS card for trekker registration. Both are issued by the Nepal Tourism Board and can be arranged at their offices in Kathmandu or Pokhara, or through a registered trekking agency. Always verify current fees and requirements before departure, as these can change between seasons."
                },
                {
                  q: "How much does Khopra Ridge Trek cost?",
                  a: "Total cost depends on the itinerary, season, group size, and whether you trek independently or with a guided package. A guided package typically includes permits, accommodation, meals on the trail, a licensed guide, and a porter. Contact us for a current, personalized quote based on your travel dates and group."
                },
                {
                  q: "What is the best time for Khopra Ridge Trek?",
                  a: "October to November and March to April are the two optimal windows. Autumn delivers the clearest mountain views and most stable conditions. Spring adds rhododendron blooms and warmer trail temperatures. Avoid the monsoon months (June to September). Winter is possible for experienced cold-weather trekkers, but the Khayer Lake day becomes significantly more challenging."
                },
                {
                  q: "Can I do Khopra Ridge Trek from Pokhara?",
                  a: "Yes. Pokhara is the practical starting point for the trekking section. Most packages include a domestic flight from Kathmandu to Pokhara, followed by a road transfer to Ghandruk where the trail begins. Independent trekkers can also reach Pokhara by road from Kathmandu."
                },
                {
                  q: "Is Khopra Ridge better than Poon Hill?",
                  a: "It depends entirely on what you want from the experience. Poon Hill is shorter, more accessible, and world-famous for a reason. Khopra Ridge takes longer and requires more fitness — but delivers significantly more time in the high mountains, quieter trails, and a more complete trekking experience. For travelers who can commit to the days, Khopra Ridge consistently offers more."
                },
                {
                  q: "Is Khopra Ridge a good alternative to Annapurna Base Camp?",
                  a: "Yes, particularly for trekkers who want Annapurna-scale views without the full length of the ABC route. Khopra Ridge provides a more intimate setting, a less-traveled trail, and views of both the Annapurna massif and Dhaulagiri from a dramatic ridge position. For those who want something quieter, more community-focused, and with the option of a high alpine lake experience, it is an excellent alternative."
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
            <p className="text-stone-600 leading-relaxed text-sm">Khopra Ridge consistently surprises people. The views are genuinely exceptional — not just good for a moderate trek, but exceptional by any standard. The trail is quiet enough that the experience stays personal. The community lodges have a warmth and simplicity that polished trekking infrastructure cannot replicate. And the Khayer Lake hike, for those who go prepared, is one of the most memorable days you can have in the Annapurna region.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you are a first-time Himalayan trekker looking for a route with real mountain character, or an experienced trekker searching for a quieter alternative to the standard circuits, Khopra Ridge belongs on your list. The key is a well-planned itinerary, the right permits arranged in advance, disciplined altitude pacing, and ideally a licensed local guide who knows the terrain, the weather, and when the conditions are right for the lake.
            </p>
          </article>

          {/* SECTION 14: CTA BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Book Your Khopra Ridge Trek</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Request a Custom Itinerary and Package Quote. Tell us your travel dates, group size, experience level, and whether you would like to include the Khayer Lake hike. We will put together a complete, personalized Khopra Ridge Trek plan with transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Get in Touch &amp; Request Quote
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This ultimate planner is curated by certified guides based in Kathmandu. We walk the Khopra circuit monthly to monitor trail degradation, water supplies, and teahouse conditions.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
