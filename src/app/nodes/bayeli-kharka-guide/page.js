import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/bayeli-kharka-guide",
  },
  title: "Bayeli Kharka Guide: Altitude, Route, Lodge & Trek Information",
  description: "Discover Bayeli Kharka on the Khopra Ridge Trek — altitude, route from Tadapani, lodge details, mountain views, wildlife, costs, and itinerary tips.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Route Node Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Bayeli Kharka: Remote High-Altitude Hub on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Bayeli Kharka is a quiet forest clearing at 3,425 meters, tucked into the sub-alpine woodland of Nepal&apos;s Annapurna region. For trekkers walking the Khopra Ridge Trek, it&apos;s far more than an overnight stop — it&apos;s the place where the trail shifts from dense rhododendron forest into open, high-altitude terrain, and where your body gets a crucial chance to adjust before climbing higher.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,425m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">11,236 feet (Acclimatization Stop)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Lodge Type</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Community Lodge</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Eco-lodges supporting local Magars</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Role on Route</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Hinge Point</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Forest-to-alpine transition zone</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Visible Peaks</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Annapurna S.</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">West Face &amp; Dhaulagiri</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Facts
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Location &amp; Geography
              </a>
              <a href="#importance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Stop Here?
              </a>
              <a href="#route" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Route Guide
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodge &amp; Rooms
              </a>
              <a href="#views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Mountain Views
              </a>
              <a href="#wildlife" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Wildlife &amp; Forest
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#planning" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Planning Tips
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Itinerary Options
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
          {/* SECTION 1: OVERVIEW & QUICK FACTS */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Overview &amp; Quick Facts
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">We see Bayeli Kharka as one of the most underrated nodes on this route. It sits between Tadapani and Chistibung, offering close-up views of Annapurna South, distant glimpses of Dhaulagiri, and a community-run lodge that channels its profits straight back into local Magar villages. In this guide, we&apos;ll walk you through exactly where Bayeli Kharka is, how to get there, what to expect from accommodation and wildlife, and how to fit it into your Khopra Ridge itinerary.
            </p>

            {/* Quick Facts Grid */}
            <div className="mt-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">Quick Facts: Bayeli Kharka
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Elevation", value: "3,425 m (11,236 ft)" },
                  { label: "Location", value: "Annapurna Conservation Area, Nepal" },
                  { label: "Lodge type", value: "Community-run lodge" },
                  { label: "Role on route", value: "Acclimatization and transition stop" },
                  { label: "Visible peaks", value: "Annapurna South (West Face), Dhaulagiri" },
                  { label: "Forest type", value: "Oak, rhododendron, bamboo" },
                  { label: "Nearby nodes", value: "Tadapani (before), Chistibung (after)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 2: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Bayeli Kharka Located?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Bayeli Kharka in the Annapurna Region</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Bayeli Kharka sits inside the Annapurna Conservation Area, Nepal&apos;s largest protected area and one of the most biodiverse trekking regions in the Himalaya. It&apos;s positioned in the upper reaches of the forest belt, well above the more frequently visited villages around Ghandruk and Ghorepani.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The setting is dense and quiet — a mix of oak, rhododendron, and bamboo that thins out as you climb toward the ridge above. Unlike the busier lower villages, Bayeli Kharka has no permanent settlement beyond its single lodge, which gives it a genuinely remote feel even by Annapurna standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Position on the Khopra Ridge Trek Route</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">On the Khopra Ridge Trek, Bayeli Kharka functions as a midway node between Tadapani and Chistibung. Trekkers coming from Tadapani typically arrive at Bayeli Kharka after a forested climb, spend the night, then continue toward Chistibung the next day en route to Khopra Danda.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This positioning makes Bayeli Kharka a natural &quot;hinge point&quot; in the route — the last forested overnight stop before the trail opens up into the alpine terrain that leads to Khopra Ridge and, for those extending further, Khayer Lake.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Altitude and Terrain Overview</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">At 3,425 meters, Bayeli Kharka sits at an altitude where the forest is beginning to thin and the air noticeably cools, especially at night. The terrain around the lodge is a transition zone — dense canopy on the Tadapani side gives way to more open, exposed slopes as you head toward Chistibung and Khopra Ridge.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This gradual shift in terrain mirrors the gradual shift in altitude, which is exactly why Bayeli Kharka plays such an important role in how trekkers acclimatize on this route.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: IMPORTANCE */}
          <article id="importance" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Bayeli Kharka Is an Important Stop on the Trek
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Acclimatization Role</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Sleeping at Bayeli Kharka&apos;s 3,425 meters helps prepare your body for the higher elevations ahead — Khopra Ridge at 3,660 meters and, on extended itineraries, Khayer Lake at 4,660 meters. Rushing straight from lower villages to Khopra Ridge in a single push increases the risk of altitude-related discomfort like headaches, nausea, or poor sleep.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Landscape Transition</h4>
                <p className="text-xs text-stone-500 leading-relaxed">One of the most noticeable things about staying at Bayeli Kharka is the shift in scenery it represents. Behind you, on the Tadapani side, is thick rhododendron and oak forest. Ahead, toward Chistibung and Khopra Ridge, the landscape opens into grassy ridgelines and rocky alpine terrain.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Community Lodge Model</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The lodge at Bayeli Kharka is run entirely by the local community, and its income supports schools, clinics, and infrastructure in the Magar villages below. Staying here means your trekking spend has a direct, traceable impact on the people who maintain this stretch of trail.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ROUTE GUIDE */}
          <article id="route" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Bayeli Kharka Trek Route Guide
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Tadapani to Bayeli Kharka</h4>
                <p className="mt-1">The walk from Tadapani to Bayeli Kharka takes you deeper into rhododendron and oak forest, with a steady climb that gains noticeable elevation. The trail is well-defined but can feel quiet and isolated compared to the busier paths around Ghorepani and Poon Hill. Expect a few hours of forest walking with intermittent clearings that offer your first real previews of Annapurna South.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Bayeli Kharka to Chistibung</h4>
                <p className="mt-1">From Bayeli Kharka, the trail toward Chistibung continues the gradual transition out of dense forest. The terrain becomes more varied, with shorter tree cover and wider views opening up as you move along the ridge system. This stretch is often considered one of the more peaceful sections of the Khopra Ridge Trek — fewer trekkers, more wildlife sounds.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Bayeli Kharka to Khopra Ridge / Khopra Danda</h4>
                <p className="mt-1">Heading toward Khopra Ridge (also referred to as Khopra Danda), the trail climbs further into alpine terrain. The forest cover thins significantly, and on clear days the views expand to take in a wider sweep of the Annapurna and Dhaulagiri ranges. Having adjusted to the altitude, trekkers are better positioned to enjoy the climb.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Connection Toward Khayer Lake Trek</h4>
                <p className="mt-1">For trekkers extending their itinerary, Bayeli Kharka also sits on the approach to Khayer Lake, a sacred high-altitude lake at 4,660 meters. The route from Bayeli Kharka through Khopra Ridge toward Khayer Lake involves a significant further altitude gain, making the acclimatization night at Bayeli Kharka even more valuable.
                </p>
              </div>
            </div>

            {/* Quick Links to Related Routes & Lodging */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Specialized Bayeli Kharka Guides</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/bayeli-kharka-accommodation" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Bayeli Accommodation Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/tadapani-to-bayeli-kharka" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Tadapani to Bayeli</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/bayeli-kharka-to-chhistibung" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Bayeli to Chhistibung</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 5: ACCOMMODATION & FOOD */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation at Bayeli Kharka
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Community Lodge Overview</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">There is a single lodge at Bayeli Kharka, owned and operated by the local community. It&apos;s a simple wooden building designed for trekkers passing through on the Khopra Ridge route, with a small number of rooms and a shared dining area. Because it&apos;s the only accommodation option at this stop, beds can fill up during peak trekking seasons (especially autumn), so arriving with realistic expectations about simple, shared facilities is part of the experience.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">Rooms, Food, and Facilities</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Rooms are typically basic wooden twin rooms — functional rather than luxurious. The dining hall is the social heart of the lodge, warmed by a central stove where trekkers gather in the evening. Meals follow the standard teahouse format: dal bhat, noodle dishes, soups, and hot drinks. Menus are simpler than at lower-altitude villages.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">Eco Lodge &amp; Camping</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Profits from the lodge support schools, clinics, and village infrastructure. While the lodge is the primary option, camping is possible for groups trekking with full camping support, especially during peak seasons when lodge space is limited. Logistics should be confirmed with your guide beforehand.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 6: MOUNTAIN VIEWS */}
          <article id="views" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Mountain Views From Bayeli Kharka
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Bayeli Kharka offers excellent viewpoints due to its position on the edge of the sub-alpine forest line.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Annapurna South</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The standout view is the West Face of Annapurna South, which rises dramatically close to the lodge. The proximity here makes the mountain feel immediate and immersive, especially in the early morning.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Dhaulagiri Range</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">On clear days, Bayeli Kharka also offers glimpses of the Dhaulagiri range to the west. While not as close as Annapurna South, it adds to the sense of being surrounded by major Himalayan peaks.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Sunrise &amp; Sunset</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Sunrise and sunset produce striking contrasts — golden light hitting the snow on Annapurna South while the lodge and surrounding trees remain in shadow. Excellent photography opportunities.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: WILDLIFE */}
          <article id="wildlife" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Wildlife and Forest Environment
            </h2>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>Rhododendron and Oak Forest Zone:</strong>The forest surrounding Bayeli Kharka is a mix of oak, rhododendron, and bamboo. In spring, the rhododendron forest in this area becomes a particular highlight, with blooms adding vibrant pink and red hues to the trail.
              </p>
              <p>
                <strong>Himalayan Monal and Birdlife:</strong>Bayeli Kharka is considered one of the best spots on the Khopra Ridge route for sighting the Himalayan Monal, Nepal&apos;s vividly colored national bird. The combination of dense forest cover and low foot traffic makes this stretch highly attractive for birdwatchers.
              </p>
              <p>
                <strong>Musk Deer and Himalayan Wildlife:</strong>The surrounding forests are also part of the habitat range for musk deer, a shy, elusive species found in Himalayan forest zones. The relative quiet of this trail section improves the odds of sightings compared to busier routes.
              </p>
            </div>
          </article>

          {/* SECTION 8: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Bayeli Kharka
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (March to May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Spring brings blooming rhododendron forests that add vibrant colors. Temperatures are milder than winter, though afternoon clouds can sometimes affect mountain visibility.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (October to November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Autumn is widely considered the best season, with stable weather and the clearest views of Annapurna South and Dhaulagiri. The trail is busier, making lodge space tighter.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter Conditions</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Winter brings very cold nights to Bayeli Kharka, and snow is possible at this elevation. Trekkers should prepare for limited heating beyond the central stove and pack proper thermal layers.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Monsoon Season (June to September)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Monsoon brings frequent rain, muddy and slippery trails, and reduced visibility. Leeches are common in the forested sections during this period.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: PLANNING */}
          <article id="planning" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Bayeli Kharka Trek Planning Guide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">Permits &amp; Difficulty</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  <strong>ACAP Permit:</strong>Since Bayeli Kharka lies within the Annapurna Conservation Area, all trekkers need a valid Annapurna Conservation Area Permit (ACAP). 
                </p>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  <strong>Trek Difficulty:</strong>The climb involves sustained forest trails. The route is considered moderate to challenging due to the altitude gain, which is why intermediate stops like Bayeli are so crucial.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base">Guide &amp; Packing Tips</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  <strong>Guide vs Independent:</strong>While experienced trekkers go independently, hiring a guide is recommended for route navigation and securing space at the single community lodge.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  <strong>Packing Essentials:</strong>Pack a warm sleeping bag rated for below-freezing temperatures, layered clothing, a headlamp, and water purification methods.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Bayeli Kharka in a Khopra Ridge Trek Itinerary
            </h2>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>Standard 5–7 Day Khopra Ridge Trek Route:</strong>On most standard Khopra Ridge itineraries, Bayeli Kharka falls roughly midway through the trek — typically as the overnight stop after Tadapani and before Chistibung. This placement allows trekkers to break up the climb toward Khopra Ridge into manageable, well-acclimatized stages.
              </p>
              <p>
                <strong>Extended Khayer Lake Trek Option:</strong>For those adding the Khayer Lake extension, Bayeli Kharka becomes even more important as an acclimatization stop, since the additional altitude gain to 4,660 meters requires extra care. Itineraries that include this extension often emphasize the night at Bayeli Kharka as a key preparation point for the days ahead.
              </p>
            </div>
          </article>

          {/* SECTION 11: IS IT WORTH IT? */}
          <article id="worth-visiting" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is Bayeli Kharka Worth Visiting?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Key Advantages</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Offers close-up views of Annapurna South, a genuinely remote forest setting, strong wildlife potential, and a community-run lodge that directly supports local villages.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Possible Challenges</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Lodge facilities are basic, with limited rooms that can fill up during peak season. Nights are cold and heating is limited beyond the central stove.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Ideal Trekker</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Best suited to trekkers who value quiet, less-crowded trails, are comfortable with simple teahouse accommodation, and are interested in wildlife and forest scenery.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Bayeli Kharka
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Bayeli Kharka located?",
                  a: "Bayeli Kharka is located within the Annapurna Conservation Area in Nepal, on the Khopra Ridge Trek route between Tadapani and Chistibung."
                },
                {
                  q: "What is the altitude of Bayeli Kharka?",
                  a: "Bayeli Kharka sits at 3,425 meters (11,236 feet) above sea level."
                },
                {
                  q: "How far is Bayeli Kharka from Khopra Ridge?",
                  a: "Bayeli Kharka connects to Khopra Ridge via Chistibung, with the trail gaining further altitude to reach Khopra Ridge at 3,660 meters."
                },
                {
                  q: "Is there a lodge at Bayeli Kharka?",
                  a: "Yes, there is a single community-run lodge at Bayeli Kharka, offering basic twin rooms and a shared dining hall heated by a central stove."
                },
                {
                  q: "Can you camp at Bayeli Kharka?",
                  a: "Camping is possible for groups with full camping support, though the community lodge is the standard accommodation option for most trekkers."
                },
                {
                  q: "What mountains can be seen from Bayeli Kharka?",
                  a: "Bayeli Kharka offers close views of the West Face of Annapurna South, with Dhaulagiri visible in the distance on clear days."
                },
                {
                  q: "Is Bayeli Kharka good for acclimatization?",
                  a: "Yes, sleeping at Bayeli Kharka's 3,425 meters helps trekkers acclimatize before continuing to higher elevations like Khopra Ridge (3,660m) and Khayer Lake (4,660m)."
                },
                {
                  q: "How difficult is the trek to Bayeli Kharka?",
                  a: "The trek involves sustained forest climbs and is generally considered moderate, fitting within the overall moderate-to-challenging difficulty of the Khopra Ridge Trek."
                },
                {
                  q: "What is the best season to visit Bayeli Kharka?",
                  a: "Autumn (October–November) offers the clearest mountain views, while spring (March–May) brings blooming rhododendron forests along the trail."
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
            <p className="text-stone-600 leading-relaxed text-sm">Bayeli Kharka isn&apos;t just a place to sleep on your way to Khopra Ridge — it&apos;s where the Khopra Ridge Trek quietly shifts gears. The forest thins, the air cools, your body adjusts, and the mountains start to feel closer. Between the close-up views of Annapurna South, the community-run lodge supporting local Magar villages, and the genuine chance of spotting a Himalayan Monal or musk deer along the way, this stop earns its place in any well-planned itinerary.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If you&apos;re mapping out your route from Tadapani toward Khopra Ridge or considering the extension to Khayer Lake, Bayeli Kharka deserves more than a passing mention — it&apos;s the acclimatization stop that sets up the rest of your trek.
            </p>
          </article>

          {/* SECTION 14: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to Explore the Annapurna Region?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">We manage all the logistics — permits, lodging, transport, and safety — so you can focus on the trail. Join our next 9-Day Khopra Ridge Trek and experience Bayeli Kharka for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Book Today &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Bayeli Kharka guide is reviewed by certified local guides based in Kathmandu. We regularly inspect weather patterns, trailhead details, and village community registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
