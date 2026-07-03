import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/nayapul-transit-hub",
  },
  title: "Nayapul: The Trailhead Gateway to the Annapurna Region",
  description: "Nayapul is the main trailhead gateway to the Annapurna Region. Learn how to get there, which treks start here, permit requirements, and what to expect before you begin.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Trailhead Gateway Node
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Nayapul: The Trailhead Gateway to the Annapurna Region
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">If you&apos;re heading into the Annapurna Conservation Area on foot, there&apos;s a good chance your journey begins in a small roadside town called Nayapul. It sits where the paved highway from Pokhara ends and the trekking trails begin, making it the de facto starting line for some of Nepal&apos;s most popular hikes.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,070m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">3,510 feet (Sub-tropical zone)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Drive from Pokhara</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">42 km</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">1.5 to 2 hours by road</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Key Checkpoint</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">ACAP &amp; TIMS</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Located at Birethanti Bridge</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Access Routes</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4 Major Loops</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Ghandruk, Ghorepani, Khopra</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Overview &amp; Introduction
              </a>
              <a href="#at-a-glance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Nayapul at a Glance
              </a>
              <a href="#gateway-importance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">The Trailhead Gateway
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach
              </a>
              <a href="#what-happens" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">What Happens on Arrival
              </a>
              <a href="#trekking-routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trekking Routes
              </a>
              <a href="#permits-checkpoints" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Permits &amp; Checkpoints
              </a>
              <a href="#facilities-services" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Facilities &amp; Services
              </a>
              <a href="#preparation-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Preparation Tips
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Trek
              </a>
              <a href="#local-guide-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Local Guide Advice
              </a>
              <a href="#gateway-value" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Continued Importance
              </a>
              <a href="#expert-support" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Expert Planning Support
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The Starting Line for Annapurna Trekking
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">This guide covers everything you need to know about Nayapul as a trailhead gateway: how to get here from Pokhara, which permits you&apos;ll need, which routes start from this point, what facilities are available, and how to prepare for the first steps of your trek.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Whether you&apos;re heading to Ghandruk, Ghorepani and Poon Hill, or beginning the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>, Nayapul is where your trekking adventure officially starts. It represents the transition from paved highway to the rugged dirt roads and ancient stone steps that define the Nepalese Himalayas.
            </p>
          </article>

          {/* SECTION 2: AT A GLANCE */}
          <article id="at-a-glance" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Nayapul at a Glance
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Where Is Nayapul Located?</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Nayapul sits along the Pokhara-Baglung Highway, in the foothills of the Annapurna Range. It&apos;s positioned right at the edge of the Annapurna Conservation Area, which makes it a natural transition point between road travel and trekking trails.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Geographically, the town occupies a strategic spot. The Modi Khola river runs nearby, and the surrounding hills mark the beginning of the terrain that leads up toward Ghandruk, Ghorepani, and beyond. For most Annapurna treks departing from the Pokhara side, this is the last stretch of paved road before trekkers switch to walking.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Elevation, Distance, and Key Facts</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Nayapul became an important trekking hub largely because of road development. As the highway extended closer to the mountains, this town became the most practical drop-off point for trekkers heading toward the Ghandruk and Ghorepani trail systems, shortening what used to be longer approach walks from Pokhara itself.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">Quick Fact Snapshot</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600"></span>
                    <span><strong>Elevation:</strong> 1,070 m (3,510 ft)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600"></span>
                    <span><strong>Distance from Pokhara:</strong>Approx. 42 km</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600"></span>
                    <span><strong>Typical Travel Time:</strong> 1.5 to 2 hours by road</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600"></span>
                    <span><strong>Key Checkpoint:</strong>ACAP and TIMS registration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Trekkers Pass Through Nayapul</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Nearly every trekker heading toward Ghandruk, Ghorepani, Poon Hill, or the Khopra Ridge Trek will pass through Nayapul at some point, whether at the start of the trip or on the way back. It functions as a hiking trail entrance where the organized part of the journey — permits, registration, last-minute supplies — happens before you commit to the trail.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For independent trekkers, Nayapul is often the first place they&apos;ll interact with local checkpoint staff and get a feel for how trekking logistics work in this region. For those on guided treks, it&apos;s typically where the group assembles, gear gets a final check, and the trek leader confirms the day&apos;s route.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: WHY NAYAPUL IS KNOWN AS GATEWAY */}
          <article id="gateway-importance" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Nayapul Is Known as the Trailhead Gateway
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Calling Nayapul &quot;the trailhead gateway&quot; isn&apos;t just a marketing phrase — it reflects how the town actually functions.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Main Annapurna Entrance</h4>
                <p className="text-xs text-stone-500 leading-relaxed">It&apos;s the entrance to the trekking region for a large portion of Annapurna&apos;s most-visited routes, particularly those on the western and southern sides of the conservation area. Trekker traffic has been steady for years because the routes it connects to remain classic favorites.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Road-to-Trail Hand-off</h4>
                <p className="text-xs text-stone-500 leading-relaxed">What makes Nayapul distinct from a typical highway town is the clean handoff it provides between vehicle transport and foot travel. You arrive by road, complete your registration, and within a short walk you&apos;re on an actual trekking trail.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">This setup matters for route planning. Because Nayapul connects directly to several trailheads near Birethanti, trekkers can choose their route relatively late — deciding, for instance, whether to head toward Ghandruk first or take the more direct line toward Tikhedhunga and Ulleri, depending on their itinerary and pace.
            </p>
          </article>

          {/* SECTION 4: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Nayapul from Pokhara
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Multiple transportation options connect Pokhara Lakeside to the Nayapul trailhead, catering to different budgets and speed preferences.
            </p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Private Jeep Transfers</h4>
                <p className="mt-1">Private 4WD jeeps are the most common way trekkers — especially those on guided trips — get to Nayapul. Arranged in advance through a trekking agency or hotel, a private jeep takes around 1.5 to 2 hours depending on road conditions and the time of departure. The main advantage is convenience: door-to-door pickup, no waiting for other passengers, and flexibility on timing.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Shared Taxis and Local Transportation</h4>
                <p className="mt-1">Shared taxis offer a middle ground between private transport and public buses. They&apos;re typically arranged informally — either through your guesthouse in Pokhara or by negotiating directly at a taxi stand — and cost less than a private vehicle while still being faster than a bus.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Public Bus Services</h4>
                <p className="mt-1">Budget travelers can reach Nayapul by public bus from Pokhara&apos;s Baglung Bus Park. Buses run regularly along the Pokhara-Baglung Highway and will drop passengers at Nayapul on request. This is the least expensive option, but it comes with trade-offs: less comfort, no guaranteed seating, and a schedule that depends on the bus filling up or following its normal route timing.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">Monsoon Road Conditions</h4>
              <p className="text-xs text-amber-900 leading-relaxed mt-1">During the monsoon season (roughly June through September), expect the journey to take longer due to slower driving conditions and occasional delays from landslides or road repairs. Plan to arrive in Nayapul with enough daylight left to register at the checkpoint and begin walking toward your first overnight stop.
              </p>
            </div>
          </article>

          {/* SECTION 5: WHAT HAPPENS ON ARRIVAL */}
          <article id="what-happens" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Happens When You Arrive in Nayapul
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Understanding the sequence of events upon arriving in Nayapul helps you avoid common logistical delays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> 1. Debarking &amp; Setup</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Upon arriving, you will notice the town is built around trekker traffic. Use this time to sort your gear, put on sunscreen, check water supplies, and double-check your permits.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> 2. Crossing to Birethanti</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">A short walk leads to a suspension bridge that crosses toward Birethanti. This bridge marks the end of the paved road and the entrance of the actual trekking trail network.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> 3. The First Hour</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Once through the checkpoints, the trail follows the Modi Khola river valley. The path is relatively gentle at this stage — well-trodden, mostly flat, and lined with terraced fields.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: TREKKING ROUTES */}
          <article id="trekking-routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trekking Routes Accessible from Nayapul
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Nayapul serves as the starting point for multiple legendary trekking routes in the Annapurna Conservation Area.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Nayapul to Ghandruk</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The route to Ghandruk is one of the most popular paths from Nayapul, partly because Ghandruk itself is a large, well-developed Gurung village with excellent teahouse facilities and views of Annapurna South and Hiunchuli. The trail climbs steadily through forest and terraced farmland, typically taking most of a day. Learn more in our <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk Village Guide</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Nayapul to Tikhedhunga and Ulleri</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For trekkers heading toward Ghorepani and Poon Hill, the route through Tikhedhunga and Ulleri is the classic approach. Ulleri is known for its long stone staircase — thousands of steps climbing steeply through the hillside — which is often the first real physical challenge of the trek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Nayapul to Ghorepani and Poon Hill</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Combining the Tikhedhunga-Ulleri approach with the continued climb to Ghorepani, this route leads to one of Nepal&apos;s most famous viewpoints. Poon Hill offers sweeping panoramas of the Annapurna and Dhaulagiri ranges, and the Ghorepani area has a wide range of teahouse accommodation. For details, view our <Link href="/nodes/ghorepani-guide" className="text-emerald-700 font-bold hover:underline">Ghorepani Guide</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Access to the Khopra Ridge Trek</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For trekkers heading toward the Khopra Ridge Trek, Nayapul is the standard starting point. The route progresses through Tikhedhunga, Ghorepani, and then branches toward <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta Village</Link>and <Link href="/nodes/chhistibung-guide" className="text-emerald-700 font-bold hover:underline">Chhistibung</Link>before reaching the Khopra Ridge area — a less-crowded alternative to Poon Hill with closer views of Dhaulagiri and the Annapurna massif.
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-stone-950 text-sm">Trail Connectivity Advantage</h4>
              <p className="text-xs text-stone-500 leading-relaxed mt-1">Because multiple trails converge near Nayapul and Birethanti, trekkers aren&apos;t locked into a single route from day one. It&apos;s common to adjust plans based on weather or fitness — switching from a Ghandruk loop to a longer Khopra Ridge itinerary, for example, without needing to backtrack to Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION 7: PERMITS & CHECKPOINTS */}
          <article id="permits-checkpoints" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permit and Checkpoint Information
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Skipping permit registration is not an option; trekking without proper registration can lead to complications later on the trail or at subsequent checkpoints.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">ACAP Permit Requirements</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Every trekker entering the Annapurna Conservation Area needs a valid Annapurna Conservation Area Permit (ACAP). This permit supports conservation efforts in the region and is checked at the entry points near Nayapul and Birethanti.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">TIMS Card Registration</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Alongside the ACAP, trekkers need a Trekking Information Management System (TIMS) card. This system helps track trekker movements for safety purposes and is a standard requirement for the Annapurna region.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-amber-950 text-sm">Local Guide Checkpoint Advice</h4>
              <ul className="list-disc pl-5 text-xs text-amber-900 space-y-2 leading-relaxed mt-2">
                <li>Carry printed copies of both your ACAP and TIMS cards (digital copies on phones aren&apos;t always accepted).</li>
                <li>Have your passport details and itinerary ready, as checkpoint staff may ask for them.</li>
                <li>Arrive during daylight hours when checkpoint staff are reliably present.</li>
                <li>Keep permits accessible rather than buried in the bottom of your pack.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 8: FACILITIES & SERVICES */}
          <article id="facilities-services" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Facilities and Services Available in Nayapul
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Nayapul provides essential services for trekkers starting or concluding their journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Supplies &amp; Pharmacies</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Small general stores carry snacks, bottled water, toilet paper, and minor essentials. Pharmacies can cover basic needs like pain relievers, altitude medication, and blister treatment. Do not rely on Nayapul for technical gear or specialized prescriptions — purchase these in Pokhara Lakeside first.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Cash &amp; Mobile Coverage</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Cash availability becomes extremely limited on the trail, and Nayapul is the last point with normal highway services. There is no guarantee of ATM access here, so withdraw enough Nepali Rupees in Pokhara to cover the entire trek. NTC and Ncell mobile coverage is functional here but fades as you go higher.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: HOW TO PREPARE */}
          <article id="preparation-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Prepare Before Leaving Nayapul
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Final Gear Double-Check</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">Before setting off, take a few minutes to do a real check of your gear. Confirm your boots are laced properly, your pack is adjusted to sit comfortably, and anything you&apos;ll need quick access to — like rain jackets or sunscreen — is easy to reach.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base">Water and Hydration Systems</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">Fill your water bottles or hydration bladder in Nayapul, and pick up any last-minute snacks you want for the trail. Having your own supply for the first stretch means you&apos;re not immediately searching for an open shop.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Start a Trek from Nayapul
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Rhododendron forests along routes like Ghorepani and Tadapani bloom. Comfortable walking temps, though mornings are cool.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Autumn (Oct–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Peak season. Clear skies offer the best visibility for viewpoints like Poon Hill and Khopra. Expect busy trails.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Winter (Dec–Feb)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Cold temperatures, but lower trails from Nayapul remain open and quiet. Clear winter days offer sharp views.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Monsoon (Jun–Sep)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">Rain-related road delays, muddy trails, and leeches. Quiet trails and lush green forests, but requires rain gear.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: LOCAL GUIDE TIPS */}
          <article id="local-guide-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Local Guide Tips for First-Time Trekkers
            </h2>

            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <h4 className="font-bold text-stone-900 text-base">Common Mistakes to Avoid in Nayapul</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Arriving without printed permit copies, assuming digital phone versions will work at checkpoints.</li>
                <li>Underestimating cash needs and expecting ATM access along the trail.</li>
                <li>Skipping breakfast in Nayapul and starting the hike hungry.</li>
                <li>Not confirming the day&apos;s route before setting off, leading to confusion at the Birethanti trail junction.</li>
              </ul>

              <h4 className="font-bold text-stone-900 text-base mt-6">Recommended Departure Times</h4>
              <p className="text-xs text-stone-500">Aim to arrive in Nayapul early enough to register at the checkpoint and start walking by mid-morning at the latest. An early start means more daylight for your first day&apos;s trek, cooler walking temperatures, and a buffer in case the checkpoint registration takes longer than expected.
              </p>
            </div>
          </article>

          {/* SECTION 12: WHY NAYAPUL REMAINS IMPORTANT */}
          <article id="gateway-value" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Nayapul Remains an Important Gateway
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Road construction has changed trekking access points across Nepal over the years, occasionally shifting where certain routes begin. Despite this, Nayapul has retained its role as a primary gateway because of its central position relative to the Ghandruk, Ghorepani, and Khopra Ridge trail systems.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re navigating permits and transport on your own or traveling with a guided group, Nayapul accommodates both approaches. For all the route options, seasonal variations, and logistical details covered in this guide, the core point is simple: Nayapul works as a dependable starting point that connects reliably to the routes most trekkers come to the Annapurna region to experience.
            </p>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Nayapul
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Nayapul located in Nepal?",
                  a: "Nayapul is located along the Pokhara-Baglung Highway in the foothills of the Annapurna Range, approximately 42 km from Pokhara. It sits at the edge of the Annapurna Conservation Area, making it the main road-to-trail transition point for several popular treks."
                },
                {
                  q: "How far is Nayapul from Pokhara?",
                  a: "Nayapul is about 42 km from Pokhara, and the road journey typically takes 1.5 to 2 hours depending on traffic, road conditions, and the time of year."
                },
                {
                  q: "What treks start from Nayapul?",
                  a: "Nayapul serves as the starting point for several major Annapurna routes, including the trek to Ghandruk, the Ghorepani and Poon Hill circuit via Tikhedhunga and Ulleri, and the Khopra Ridge Trek via Swanta Village and Chhistibung."
                },
                {
                  q: "Do I need an ACAP permit in Nayapul?",
                  a: "Yes. An Annapurna Conservation Area Permit (ACAP) is required to enter the conservation area, and it's checked at the checkpoint near Nayapul and Birethanti. It's best arranged in advance in Pokhara or Kathmandu."
                },
                {
                  q: "Is TIMS registration required for trekking in the Annapurna Region?",
                  a: "Yes, a TIMS (Trekking Information Management System) card is required alongside the ACAP permit. Both should be arranged before arriving in Nayapul to avoid delays at the checkpoint."
                },
                {
                  q: "Can I reach Nayapul by public bus?",
                  a: "Yes. Public buses depart from Pokhara's Baglung Bus Park and stop at Nayapul. This is the most budget-friendly option, though it's less comfortable and predictable than a private jeep or shared taxi."
                },
                {
                  q: "Are there hotels or tea houses in Nayapul?",
                  a: "Nayapul has small guesthouses and teahouses, though most trekkers pass through quickly rather than staying overnight, since the first proper overnight stops are typically further along the trail toward Ghandruk or Tikhedhunga."
                },
                {
                  q: "What facilities are available before starting a trek?",
                  a: "Nayapul has general stores for basic snacks and supplies, small pharmacies for minor essentials, teashops and restaurants for meals, and a permit checkpoint. It's not the place to buy technical gear or specialized medications — those should be sourced in Pokhara or Kathmandu beforehand."
                },
                {
                  q: "Is Nayapul suitable for independent trekkers?",
                  a: "Yes. Independent trekkers regularly use Nayapul as a starting point. With ACAP and TIMS permits arranged in advance, the checkpoint registration process is straightforward, and the trail network from here is well-marked and well-traveled."
                },
                {
                  q: "Can I start the Khopra Ridge Trek from Nayapul?",
                  a: "Yes, Nayapul is the standard starting point for the Khopra Ridge Trek. The route progresses through Tikhedhunga and Ghorepani before branching toward Swanta Village and Chhistibung en route to Khopra Ridge."
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
            <p className="text-stone-600 leading-relaxed text-sm">Nayapul earns its reputation as the trailhead gateway to the Annapurna Region not through scenery alone, but through function. It&apos;s where the road ends, where permits get checked, where last-minute preparations happen, and where the trail toward Ghandruk, Ghorepani, Poon Hill, or Khopra Ridge truly begins.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re trekking independently with permits sorted in advance, or traveling with a guided group that&apos;s already handled the logistics, understanding what Nayapul offers — and what it doesn&apos;t — helps you start your trek with confidence rather than uncertainty.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Start Your Khopra Ridge Trek with Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Planning a trek from Nayapul involves coordinating permits, transportation, and accommodation — details that are easy to manage with local support but can add stress when handled entirely on your own, especially for first-time visitors to Nepal.
              </p>
              <ul className="list-disc pl-5 text-stone-300 text-xs space-y-1">
                <li><strong>Permit, Transport, and Accommodation Support:</strong>We coordinate all logistics from Pokhara Lakeside so you can focus on the trail itself.</li>
                <li><strong>Guided Trekking Advantages:</strong>Trekking with experienced local guides means better route knowledge and safety support on less-traveled paths like the Khopra Ridge route.</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire About Your Trek Today &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Nayapul trailhead gateway guide is reviewed by certified local guides based in Kathmandu. We regularly inspect road conditions, checkpoint procedures, and route availability to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
