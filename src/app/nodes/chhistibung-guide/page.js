import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Chhistibung Forest Trek Guide (2,975m) – Forest Camp on the Khopra Ridge Trek",
  description: "Discover Chhistibung Forest, the key 2,975m forest camp on the Khopra Ridge Trek. Get route details, altitude tips, lodge info, wildlife, and seasonal advice.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🌲 Forest Transition Node
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Chhistibung Forest Trek Guide (2,975m) – Forest Camp on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            If you&apos;re planning a trek through the Annapurna region, Chhistibung Forest is a name worth knowing well before you set out. Sitting at 2,975 meters, this dense pocket of sub-alpine forest marks one of the most memorable stretches of the Khopra Ridge Trek — a place where the trail quietly shifts character before the climb toward Khopra Danda begins.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,975m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">9,760 feet (mid-altitude belt)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Forest Type</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Oak &amp; Bamboo</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Dense layered sub-alpine canopy</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Wildlife Spotting</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Himalayan Monal</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Langur monkeys &amp; diverse birds</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Route Position</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Breather Stop</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Staging for Khopra Danda climb</span>
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
              <a href="#altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude &amp; Difficulty
              </a>
              <a href="#route" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Route Breakdown
              </a>
              <a href="#atmosphere" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Forest Atmosphere
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodge &amp; Night Info
              </a>
              <a href="#wildlife" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Wildlife &amp; Birdlife
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Conditions
              </a>
              <a href="#decision" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Stay vs Continue?
              </a>
              <a href="#planning" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Planning Tips
              </a>
              <a href="#transition" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transition Point
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
              Chhistibung Forest Settlement
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              For most trekkers, Chhistibung is the last proper forest camp on the route. Beyond this point, the trees thin out, the air gets sharper, and the landscape opens into the high alpine terrain that Khopra Ridge is known for. That shift makes Chhistibung more than just a rest stop — it&apos;s a transition zone, both physically and in terms of how the trek feels underfoot.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              In this guide, we&apos;ll walk you through exactly where Chhistibung sits on the route, what the trail and forest are like, what accommodation you can expect, the wildlife you might spot, and how to decide whether to stay overnight here or push on toward Khopra Danda.
            </p>
          </article>

          {/* SECTION 2: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where is Chhistibung Forest Located?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Chhistibung Forest sits within the Annapurna Conservation Area, on the trail section connecting Bayeli Kharka to Khopra Danda. It&apos;s one of several forested rest points along the Khopra Ridge Trek, a route that branches off from the more popular Ghorepani–Poon Hill circuit and heads into quieter, less-crowded territory.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Chhistibung in the Annapurna Region Trekking Map</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Geographically, Chhistibung falls in the mid-altitude forest belt of the Annapurna foothills — high enough to feel remote, but still low enough to support thick tree cover. It&apos;s part of the broader network of community-run lodges that make the Khopra Ridge Trek possible without needing to camp.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Within the Annapurna Conservation Area, this section of forest acts as a buffer zone between the lower villages and the exposed ridge terrain further up. Trekkers moving through here are firmly on the offbeat side of Annapurna trekking, away from the busier Poon Hill crowds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Route Sequence: Bayeli Kharka → Chhistibung → Khopra Danda</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  The typical progression on this part of the Khopra Ridge Trek runs from Bayeli Kharka, through Chhistibung Forest, and up to Khopra Danda. Bayeli Kharka serves as the staging point — a cluster of lodges where trekkers often spend the night before tackling this section.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Chhistibung sits in between as a natural breather. Many trekkers pass through during the day, while others choose to stop here overnight depending on pace, weather, and how their bodies are handling the altitude gain so far.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: ALTITUDE & DIFFICULTY */}
          <article id="altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Chhistibung Forest Altitude (2,975m) and Trek Difficulty
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              At 2,975 meters, Chhistibung sits at an altitude where most trekkers start noticing real changes — thinner air, cooler temperatures, and a slightly slower pace becomes normal.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">📈 How Altitude Affects Your Experience</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Around the 2,975m mark, oxygen levels are lower than at lower elevations, leaving trekkers feeling slightly more breathless. Nights also get cold, dropping several degrees below daytime temps. Stopping at Chhistibung fits naturally into a gradual acclimatization schedule.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🧗 Difficulty Level of the Trail</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The trail is moderate, with steady forest paths and root-covered, uneven sections. There are short, steep stretches near the points where the trail transitions in or out of the forest, demanding focus, especially when wet.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ROUTE BREAKDOWN */}
          <article id="route" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Chhistibung Trekking Route Breakdown
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🌲 Bayeli Kharka to Chhistibung Forest Trail</h4>
                <p className="mt-1">
                  Leaving Bayeli Kharka, the trail eases into forest fairly quickly. The terrain here is a mix of soil paths, exposed tree roots, and patches of leaf litter — typical of the sub-alpine oak forest. Rhododendron trees start appearing more frequently in slightly more open sections. Elevation changes are gradual.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">⛰️ Chhistibung to Khopra Danda Ascent</h4>
                <p className="mt-1">
                  The climb from Chhistibung toward Khopra Danda involves a steadier, more sustained ascent as the forest begins to thin and the terrain opens up toward the ridge. It is highly recommended to start this climb early in the morning to avoid afternoon cloud cover and make the most of cooler temperatures.
                </p>
              </div>
            </div>

            {/* Quick Links to Related Routes */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Chhistibung Trails &amp; Lodging</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/chhistibung-accommodation" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Chhistibung Lodging Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/bayeli-kharka-to-chhistibung" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Bayeli to Chhistibung</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/chhistibung-to-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Chhistibung to Khopra</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 5: FOREST ATMOSPHERE */}
          <article id="atmosphere" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              What the Chhistibung Forest Trail Feels Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🌸 Dense Rhododendron and Oak Forests</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The forest is a mix of sub-alpine oak and rhododendron, creating a layered canopy that filters light in a beautiful, green-tinted tone. Spring rhododendron blooms add splashes of red and pink. Moss-covered branches and gnarled trunks offer a unique, quiet atmosphere.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🎋 Bamboo Groves and Silent Paths</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  In certain pockets, the forest shifts into bamboo groves, where the trail narrows and the surroundings feel noticeably quieter. The rustling leaves and cracking bamboo stalks create a distinct wilderness feel, away from the typical tourist trails.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Accommodation in Chhistibung Forest (Forest Camp Experience)
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Teahouses and Basic Lodges Overview</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  The lodges in Chhistibung are simple — typically twin-share rooms with basic bedding, shared bathrooms, and a common dining area where meals are served. Don&apos;t expect luxury here; this is classic teahouse trekking, focused on warmth, food, and a place to sleep. These lodges are community-run, meaning your stay contributes directly to the local Magar villages in the valleys below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">What Trekkers Should Expect at Night</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Once the sun goes down, temperatures drop quickly, and evenings are spent mostly around the dining area near the wood stove. Extra layers are essential. Food options are simple but filling: dal bhat, noodles, soups, and hot drinks. Device charging may be limited or require a small fee.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: WILDLIFE */}
          <article id="wildlife" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Wildlife and Biodiversity of Chhistibung Forest
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🦜 Himalayan Monal and Birdlife</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  The Himalayan Monal — Nepal&apos;s national bird, known for its iridescent plumage — has been spotted in this forest. Early morning is the best time for birdwatching when the forest is calm and active.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🐒 Langur Monkeys and Mammals</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Langur monkeys are occasionally seen moving through the canopy, particularly in the denser oak and bamboo sections. This biodiversity reflects the healthy ecosystem supported by the Annapurna Conservation Area.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Conditions and Best Time to Visit Chhistibung Forest
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌸 Spring &amp; Autumn</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Best times to walk. Trails are drier, visibility is excellent, and spring brings rhododendron blooms. Autumn offers clear blue skies for the climb to Khopra.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">❄️ Winter Cold</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Snow accumulates closer to Khopra Danda, making the ascent more demanding. Lodges remain open, but temperatures are very cold, and ice patches are common.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌧️ Monsoon Rain</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Trails become slippery and leeches are a major nuisance. Visibility is low due to heavy cloud cover and mist. Most trekkers avoid the trail during monsoon.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: STAY VS CONTINUE */}
          <article id="decision" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Should You Stay in Chhistibung or Continue to Khopra Danda?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">When to Stay in Chhistibung</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Stay overnight if you are arriving later in the day, feeling fatigued, or if weather ahead looks uncertain. Breaking the journey here gives your body extra time to adjust to the altitude before the steeper climb to Khopra Danda.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">When to Push to Khopra Danda</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  If you arrive early, feel strong, and the weather is stable, continuing to Khopra Danda the same day works well. Starting the ascent with energy in reserve makes for a much more manageable climb.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: PLANNING */}
          <article id="planning" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trekking Tips for Chhistibung Forest Trail
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">🎒 Gear Requirements</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  Layering is key — moisture-wicking base layers, warm mid-layers, and waterproof shells. Sturdy, broken-in hiking boots with good grip are essential for root-covered paths. A headlamp is needed for early starts.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base">⚠️ Safety &amp; Altitude Pacing</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  Pacing yourself matters. Walk at a steady, comfortable pace to cope with reduced oxygen. Stay hydrated throughout the day to prevent altitude-related fatigue.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: TRANSITION POINT */}
          <article id="transition" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why Chhistibung Forest is a Key Transition Point
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Chhistibung&apos;s real significance on the Khopra Ridge Trek isn&apos;t just its scenery — it&apos;s the role this forest plays in the overall journey. This is the point where the trek shifts from forested mid-altitude terrain into the more exposed alpine environment around Khopra Danda.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              That transition matters practically as well as scenically. It&apos;s the last section where you&apos;re walking under substantial tree cover, the last reliable forest camp before the ridge, and often the natural point where trekkers reassess pace, energy levels, and acclimatization before the final push higher.
            </p>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Chhistibung Forest
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is Chhistibung Forest in the Khopra Ridge Trek?",
                  a: "Chhistibung Forest is a forested rest stop and community lodge settlement located on the Khopra Ridge Trek, between Bayeli Kharka and Khopra Danda. It serves as the last major forest camp before the trail opens into alpine terrain."
                },
                {
                  q: "What is the altitude of Chhistibung Forest?",
                  a: "Chhistibung Forest sits at approximately 2,975 meters above sea level."
                },
                {
                  q: "How difficult is the Chhistibung forest trail?",
                  a: "The trail is generally moderate, with steady forest walking and some root-covered terrain. Short steep sections appear near the transitions in and out of the forest, particularly toward Khopra Danda."
                },
                {
                  q: "Is there accommodation in Chhistibung?",
                  a: "Yes, Chhistibung has a small cluster of community-run lodges offering basic teahouse-style accommodation, including twin-share rooms and a common dining area."
                },
                {
                  q: "How long is the trek from Bayeli Kharka to Chhistibung?",
                  a: "The walk from Bayeli Kharka to Chhistibung is a gentle to moderate forest trail with gradual elevation changes, typically forming part of a day's trekking itinerary rather than a standalone full-day stage."
                },
                {
                  q: "Can beginners stay overnight in Chhistibung?",
                  a: "Yes, beginners can stay overnight in Chhistibung, and doing so can actually help with acclimatization before the steeper climb to Khopra Danda. It's a reasonable choice for trekkers wanting extra rest at altitude."
                },
                {
                  q: "What wildlife can be seen in Chhistibung Forest?",
                  a: "Chhistibung Forest is known for sightings of the Himalayan Monal, Nepal's national bird, as well as langur monkeys and various other bird species typical of the Annapurna region's mid-altitude forests."
                },
                {
                  q: "What comes after Chhistibung on the trek?",
                  a: "After Chhistibung, the trail ascends toward Khopra Danda, marking the transition from forested terrain into more open, alpine landscape on the Khopra Ridge."
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
            <p className="text-stone-600 leading-relaxed text-sm">
              Chhistibung Forest may not be the most talked-about stop on the Annapurna trekking map, but for anyone walking the Khopra Ridge Trek, it plays a quietly important role. It&apos;s the last deep forest you&apos;ll pass through, a place to catch your breath — literally and figuratively — before the alpine terrain around Khopra Danda takes over.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you choose to stay overnight here or push on toward Khopra Danda the same day, understanding what this section involves — the altitude, the trail conditions, the lodge realities, and the seasonal shifts — helps you plan a smoother, more enjoyable trek through this part of the Annapurna region.
            </p>
          </article>

          {/* SECTION 14: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to Experience the Khopra Ridge Trek for Yourself?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Skip the guesswork and let our local guides take you through the community lodge circuit — from Chhistibung Forest all the way to sacred Khayer Lake. Our 9-day all-inclusive package covers permits, lodges, and expert guidance every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Customize Itinerary &rarr;
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
                This Chhistibung Forest guide is reviewed by certified local guides based in Pokhara. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
