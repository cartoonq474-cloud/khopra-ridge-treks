import React from "react";
import Link from "next/link";

export const metadata = {
  title: "5-Day Khopra Ridge Trek (Rapid Route): Complete Itinerary, Difficulty & Planning Guide",
  description: "Plan the 5-Day Khopra Ridge Trek (Rapid Route): full itinerary, difficulty, cost, permits, best season and community lodges. The fastest way to Khopra Ridge's mountain views.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "5 Days" },
    { label: "Total Distance", value: "~48 km / 29.8 mi" },
    { label: "Max Altitude", value: "3,660m / 12,007ft" },
    { label: "Difficulty Grade", value: "Moderate" }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Drive Pokhara to Kimche, Trek to Tadapani",
      elev: "2,630m",
      time: "5 - 6 hours",
      desc: "The trek begins with a roughly three-hour road transfer from Pokhara to Kimche, the trailhead for this route. From there, the trail climbs steadily through terraced farmland and traditional Gurung settlements before entering rhododendron and oak forest on the approach to Tadapani. Tadapani sits at a junction point on the wider Annapurna trail network, so expect a slightly busier overnight stop here than on the days that follow. It&apos;s also where most trekkers get their first clear look at Annapurna South and the southern ridgelines, weather permitting."
    },
    {
      day: 2,
      title: "Tadapani to Chhistibung",
      elev: "2,975m",
      time: "6 - 7 hours",
      desc: "This is where the route splits away from the main tourist trail. Leaving Tadapani, the path drops and climbs through dense, mossy oak forest and patches of bamboo undergrowth — noticeably quieter and more overgrown than the trail you walked the day before. It&apos;s the longest walking day of the trek and the one where the &quot;off-the-beaten-path&quot; reputation of Khopra Ridge becomes obvious. Chhistibung&apos;s community lodge is simple but comfortable, and the forest setting makes for a peaceful overnight stop before the climb to the ridge."
    },
    {
      day: 3,
      title: "Chhistibung to Khopra Ridge",
      elev: "3,660m",
      time: "3 - 4 hours",
      desc: "Shorter in distance but steeper in gradient, day three takes you above the treeline and onto open alpine slopes near Bayeli Kharka before reaching Khopra Ridge itself, typically by early afternoon. This is the shortest walking day of the trek, deliberately, to allow time to acclimatize and to be in position for sunset. Arriving early matters here: Mt. Dhaulagiri sits almost directly opposite the ridge, and the lodge&apos;s location means you don&apos;t need to go anywhere else to watch the light change over the mountain in the evening. Many trekkers consider this the single best viewpoint of the entire route."
    },
    {
      day: 4,
      title: "Khopra Ridge to Swanta Village",
      elev: "2,200m",
      time: "5 - 6 hours",
      desc: "Mornings at Khopra Ridge often bring the clearest visibility of the trek, so it&apos;s worth being up before sunrise on this day even though you&apos;re heading down. The descent is steep, dropping off the ridge and into the Swanta river valley over the course of the day. Swanta itself is a traditional Magar village — a clear cultural shift from the Gurung communities passed through earlier in the trek. Many lodges here are involved in small-scale cheese production, and it&apos;s common to see the process firsthand or sample what&apos;s been made that week."
    },
    {
      day: 5,
      title: "Swanta to Hile, Drive to Pokhara",
      elev: "1,400m",
      time: "6 - 7 hours",
      desc: "The final day moves through lower-altitude farming terrain, rejoining the main Ghorepani/Hile trail network before the trek officially ends. From Hile, a private jeep transfer takes you back to Pokhara, typically arriving in the afternoon or early evening. It&apos;s the longest day in terms of walking hours, but the descent is steady rather than technical, and the change in scenery — back into farmed valleys and village life — makes for an easier psychological close to the trek than the climb up."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Rapid Route Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            5-Day Khopra Ridge Trek (Rapid Route)
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">If you have five days in the Annapurna region and want one of the best mountain panoramas in Nepal without the crowds, the 5-Day Khopra Ridge Trek (Rapid Route) is built for exactly that. It follows the same trail as the classic Khopra Danda trek but skips the long side-hike to Khayer Lake, trimming a day of high-altitude walking.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Overview &amp; Highlights
              </a>
              <a href="#why-rapid" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Choose 5-Day?
              </a>
              <a href="#who-it-is-for" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Who This Trek is For
              </a>
              <a href="#detailed-itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Day-by-Day Itinerary
              </a>
              <a href="#route-profile" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route Map &amp; Altitude
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Difficulty &amp; Fitness
              </a>
              <a href="#lodging" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation &amp; Food
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Costs
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Seasons to Go
              </a>
              <a href="#logistics" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Permits &amp; Logistics
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Short Trek Comparisons
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Packing Checklist
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              5-Day Khopra Ridge Trek Overview
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Over five days, you&apos;ll cover roughly 48 km, climb to a maximum altitude of 3,660 m, and walk between 3 and 7 hours a day depending on the stage. The rapid route runs from Pokhara to Kimche by road, then climbs on foot through Tadapani, Chhistibung, and Khopra Ridge before descending the opposite side of the ridge into Swanta Village and out via Hile back to Pokhara. It&apos;s a loop in shape but a one-way trekking line — you walk up one valley and down another, rather than retracing your steps.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Key Highlights of the Rapid Route</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2 font-medium">
                <li>A 360-degree ridge-top panorama of Dhaulagiri (8,167 m), Annapurna South, and Machhapuchhre.</li>
                <li>Overnight stays in community-run lodges that channel profits directly into village schools and clinics.</li>
                <li>Rhododendron and oak forest trails largely untouched by the main Annapurna Base Camp traffic.</li>
                <li>A genuine cultural shift mid-trek, from Gurung farming communities to the Magar village of Swanta.</li>
                <li>A realistic, time-efficient way to see Khopra Ridge without committing to the longer 7–9 day version.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 2: WHY CHOOSE 5-DAY */}
          <article id="why-rapid" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Why Choose the 5-Day Khopra Ridge Trek?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">Skip Khayer Lake Without Missing Views</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The full Khopra Danda itinerary includes a side trip to Khayer Lake, a sacred alpine lake sitting near 4,660 m. It adds roughly eight extra hours of walking at altitude and a full extra day. The rapid route removes this side trip entirely. You still reach Khopra Ridge and get the same sunrise and Dhaulagiri views — you simply don&apos;t continue further up to the lake.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">A Less Crowded Poon Hill Alternative</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Poon Hill is the more famous short viewpoint trek, meaning it is crowded during peak weeks, with queues forming at the sunrise tower. Khopra Ridge sees a fraction of that traffic. The trail to Chhistibung branches away from the main Ghorepani corridor, so you&apos;re largely trekking through forest and pasture in quiet solitude.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: WHO IT IS FOR */}
          <article id="who-it-is-for" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Who This Trek Is Best For
            </h2>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <p className="text-xs text-stone-500 leading-relaxed">This itinerary is a strong fit if you have only 4–6 days available for trekking, have moderate fitness and some prior hiking experience, want to avoid the busiest sections of the Annapurna network, and are interested in community cooperative lodges.
              </p>
              <p className="text-xs text-stone-500 leading-relaxed font-semibold text-emerald-700">It is less ideal if you want to visit Khayer Lake specifically, want a true high-altitude challenge above 4,500 m, or have less than four days total including travel to and from Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION 4: DETAILED ITINERARY */}
          <article id="detailed-itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Detailed 5-Day Khopra Ridge Trek Itinerary
            </h2>

            <div className="space-y-6">
              {itinerary.map((d) => (
                <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                    {d.day}
                  </span>
                  <div className="w-full bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-stone-950 text-base">{d.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Walking time: {d.time}</span>
                    <p className="text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 5: ROUTE PROFILE & ALTITUDE */}
          <article id="route-profile" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Route Map, Distance and Elevation Profile
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Across the five days, the route covers approximately 48 km (29.8 mi), with daily walking times ranging from 3 hours to 7 hours. The trek&apos;s high point is Khopra Ridge at 3,660 m, reached on Day 3. From there, the route turns and descends, first gradually toward Swanta (2,200 m) and then more steeply down to Hile (1,400 m) on the final day.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs leading-relaxed">
              <strong>Lower Altitude Risk:</strong>Because the itinerary tops out at 3,660 m rather than continuing to Khayer Lake&apos;s roughly 4,660 m, the rapid route stays well below the altitude where acute mountain sickness (AMS) becomes a serious concern for most trekkers. The daily elevation gains are more gradual than on itineraries that push to the lake.
            </div>
          </article>

          {/* SECTION 6: DIFFICULTY & FITNESS */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trek Difficulty and Fitness Requirements
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-base">Physical Demands</h4>
                <p className="text-xs text-stone-500 leading-relaxed">This trek is rated moderate. The main physical demands are the steep climb on Day 3 and the long descents on Days 2 and 5, both of which involve sustained walking on uneven forest and ridge trail. No mountaineering experience is required, but comfort walking 5–7 hours a day on hilly terrain is important.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-base">Altitude &amp; Safety</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Because the trek climbs to 3,660 m, mild symptoms like headache or fatigue are possible, particularly on the ascent to Khopra Ridge. Drinking enough water, eating well, and pacing the Day 3 climb rather than rushing it are the most effective ways to avoid problems.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: LODGING & FOOD */}
          <article id="lodging" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation, Food and Facilities on the Route
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Every overnight stop on this route uses community-owned lodges rather than large commercial teahouses. Rooms are simple, usually twin-share with shared bathroom facilities.
            </p>

            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Lodge Stays</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Cooperative community lodges in Chhistibung, Khopra Ridge, and Swanta. Profits stay within the village to fund schools and clinics.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Food Options</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Standard teahouse menus: Dal Bhat, noodle soups, fried rice, momos, porridge, eggs, and hot drinks.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-955 text-sm">Electricity &amp; Wi-Fi</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Solar charging is common but becomes less reliable higher up. Wi-Fi exists at some stops but mobile signal is patchy.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: TREK COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Cost of the 5-Day Khopra Ridge Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">Independent vs Guided Costs</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Independent budget covers permits, food, and road transfers. Guided packages bundle permits, guides, accommodation, meals, and private transport. Adding a porter reduces physical strain.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Extra Expenses to Budget For</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Set aside a margin for device charging fees, hot showers (where available), bottled or treated water, snacks, and tipping for guides and porters.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: BEST SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Trek Khopra Ridge
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">Spring &amp; Autumn</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  <strong>Spring (March–May)</strong>offers blooming rhododendrons and stable climbing weather. <strong>Autumn (September–November)</strong>is peak season, bringing clear skies and crisp mountain views of Dhaulagiri.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm sm:text-base">Winter &amp; Monsoon</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  <strong>Winter (December–February)</strong>brings snow and cold temperatures. <strong>Monsoon (June–August)</strong>brings heavy rainfall, leeches in forests, and blocked views; it is generally not recommended.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: LOGISTICS & PERMITS */}
          <article id="logistics" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permits, Guides and Trek Logistics
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Two permits are required: the Annapurna Conservation Area Permit (ACAP) and a TIMS (Trekkers&apos; Information Management System) card. Both can be arranged in Pokhara or Kathmandu before departure.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">A guide isn&apos;t legally mandatory on this specific route, but it&apos;s strongly recommended once you&apos;re past Tadapani — trail markings thin out, and the Chhistibung and Khopra Ridge sections see few enough trekkers that local knowledge is highly valuable.
            </p>
          </article>

          {/* SECTION 11: SHORT TREK COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge vs Other Short Annapurna Treks
            </h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>vs Poon Hill:</strong>Poon Hill is shorter, busier, and easier. Khopra Ridge takes more effort but rewards that with a quieter trail and lodge-to-viewpoint convenience.</li>
              <li><strong>vs Mohare Danda:</strong>Mohare Danda is another community lodge trek. Khopra Ridge reaches a higher altitude and offers a closer view of Dhaulagiri, while Mohare Danda is a shorter overall commitment.</li>
            </ul>
          </article>

          {/* SECTION 12: PACKING LIST */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Packing List for the 5-Day Khopra Ridge Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Warm fleece or mid-layer</li>
                    <li>Windproof/waterproof shell</li>
                    <li>Hat and gloves for evenings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Gear &amp; Equipment</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Trekking boots with ankle support</li>
                    <li>Adjustable trekking poles</li>
                    <li>Daypack (30-40L) &amp; rain cover</li>
                    <li>Headlamp &amp; power bank</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Safety &amp; Cash</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>First-aid kit &amp; blister plasters</li>
                    <li>Sunscreen &amp; sunglasses</li>
                    <li>Water purification tablets</li>
                    <li>Cash in Nepalese Rupees</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Sustainable Trekking and Community lodge model</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Revenues from room bookings and dining logs are directed straight back into the local villages. This helps fund teacher salaries (at Swanta Secondary School) and clinics. Carry out what you carry in, avoid single-use plastic, and stick to marked trails.
              </p>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About 5-Day Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can you complete the Khopra Ridge Trek in 5 days?",
                  a: "Yes. The 5-day rapid route reaches Khopra Ridge and returns to Pokhara by skipping the Khayer Lake side trip, which is what normally extends the itinerary to 7–9 days."
                },
                {
                  q: "Is the 5-Day Khopra Ridge Trek worth it?",
                  a: "For trekkers short on time, yes — you still get the signature Khopra Ridge viewpoint and panorama of Dhaulagiri and Annapurna South, just without the extra day and altitude required to reach Khayer Lake."
                },
                {
                  q: "What is the highest point of the trek?",
                  a: "Khopra Ridge itself, at 3,660 m (12,007 ft), reached on Day 3."
                },
                {
                  q: "Is Khayer Lake included in the rapid route?",
                  a: "No. The rapid route is specifically designed to skip Khayer Lake to reduce both the time commitment and altitude-related risk. It can be added back in as an extension if you have an extra day."
                },
                {
                  q: "How difficult is the trek?",
                  a: "It&apos;s rated moderate. The terrain involves steep, sustained climbs and descents rather than technical climbing, and daily walking ranges from 3 to 7 hours."
                },
                {
                  q: "What permits are required?",
                  a: "An Annapurna Conservation Area Permit (ACAP) and a TIMS card are both required, and can be arranged in Pokhara or Kathmandu before starting the trek."
                },
                {
                  q: "Do I need a guide?",
                  a: "It&apos;s not strictly mandatory, but it&apos;s strongly recommended past Tadapani, where trail markings become less frequent and the route is less heavily trafficked."
                },
                {
                  q: "What is the best season to trek?",
                  a: "Autumn (September–November) and spring (March–May) offer the clearest mountain views and most stable trail conditions."
                },
                {
                  q: "How much does the trek cost?",
                  a: "Costs vary depending on whether you trek independently or with a guided package; independent trekking is cheaper but requires more self-sufficiency, while guided packages bundle permits, accommodation, meals, and transport."
                },
                {
                  q: "Is Khopra Ridge less crowded than Poon Hill?",
                  a: "Yes, noticeably. Once the trail splits away from the main Ghorepani corridor after Tadapani, foot traffic drops significantly compared to Poon Hill&apos;s sunrise crowds."
                },
                {
                  q: "Is there Wi-Fi and electricity on the trail?",
                  a: "Charging is available at most lodges for a small fee, though less reliable at higher elevations. Wi-Fi exists in places but shouldn&apos;t be relied on, and mobile signal is patchy above Tadapani."
                },
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Trekkers with little to no hiking experience may find the long, steep days challenging, but those with even moderate fitness and some hiking background — even outside Nepal — typically manage the route well, especially with a guide or porter."
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
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The 5-Day Khopra Ridge Trek (Rapid Route) solves a specific problem: how to see one of the Annapurna region&apos;s best, least crowded mountain panoramas without committing a full week or pushing to high altitude. By trading the Khayer Lake extension for a tighter, lower-risk itinerary, it delivers the ridge-top views, the community lodge experience, and the cultural shift from Gurung to Magar villages — all within five days that fit a standard holiday schedule.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If you&apos;re weighing this against Poon Hill or a longer Khopra itinerary, the deciding factor usually comes down to time and crowd tolerance: choose this route if you want the quieter trail and the closer mountain view, and you&apos;re working with five days rather than seven or more.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to trek Khopra Ridge?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">We help trekkers customize this itinerary — whether that means adding the Khayer Lake extension, combining it with Poon Hill, or arranging an experienced local guide and porter. Get a tailored Khopra Ridge Trek plan built around your dates, fitness level, and budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire Now &rarr;
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
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This rapid 5-day route and itinerary is reviewed by our licensed local Annapurna mountain guides. Acclimatization guidelines and transport logistics are updated monthly to ensure safe transitions above the tree line.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
