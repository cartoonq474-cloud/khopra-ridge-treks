import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/ghandruk-village-guide",
  },
  title: "Ghandruk Village Nepal: Complete Guide to Annapurna's Gurung Cultural Capital",
  description: "Plan your trip to Ghandruk Village with our complete guide — how to reach it from Pokhara, trekking routes, Gurung culture, permits, costs, and the best time to visit.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Cultural Capital Gateway
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ghandruk Village Nepal: Complete Guide to Annapurna&apos;s Gurung Cultural Capital
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Perched on a steep, terraced hillside in the Annapurna foothills, Ghandruk is a living Gurung settlement that bridges traditional farming life with spectacular mountain viewpoints.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,940m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">6,364 feet (comfortable height)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Access Road</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Jeep Route</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Roughly 3 hours from Pokhara</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Primary Ethnicity</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Gurung</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Rich Gurkha military heritage</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Gateway Role</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Trek Gateway</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Khopra, Poon Hill &amp; ABC</span>
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
              <a href="#why-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Visit Ghandruk?
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where is it Located?
              </a>
              <a href="#reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reach
              </a>
              <a href="#worth-it" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is it Worth Visiting?
              </a>
              <a href="#things-to-do" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Things to Do
              </a>
              <a href="#mountain-views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Views
              </a>
              <a href="#trekking-routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Connections
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Guide
              </a>
              <a href="#costs-permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Costs &amp; Permits
              </a>
              <a href="#culture-history" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Culture &amp; History
              </a>
              <a href="#best-season" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Visit
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sample Itineraries
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Ghandruk vs Others
              </a>
              <a href="#travel-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Travel Tips
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Trek With Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION: INTRODUCTION */}
          <article id="why-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Visit Ghandruk Village?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Ghandruk Village sits on a steep, terraced hillside in the Annapurna foothills, roughly three hours by jeep from Pokhara. It&apos;s one of the largest Gurung settlements in Nepal, and unlike many trekking-route villages built mainly to serve passing hikers, Ghandruk is a real, permanent community — families farm the land, children walk to school along stone-paved lanes, and the architecture reflects generations of Gurung life rather than recent tourism infrastructure.
              </p>
              <p>
                For travelers researching Nepal, Ghandruk tends to come up for three reasons. It&apos;s one of the most accessible places to experience authentic Gurung culture and Gurkha heritage. It offers some of the clearest close-range views of Annapurna South and Machhapuchhre anywhere in the region. And it functions as a practical gateway into longer treks — toward Ghorepani and Poon Hill, toward Annapurna Base Camp, or toward the quieter Khopra Ridge route.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mt-6">What Makes Ghandruk Different From Other Annapurna Villages</h3>
              <p>
                Most villages along Annapurna trekking routes exist primarily to serve trekkers — a handful of teahouses clustered around a trail junction, largely empty outside peak season. Ghandruk works differently. It&apos;s a genuine hill town, with a year-round population that farms terraced fields, raises livestock, and runs daily life independent of tourism.
              </p>
              <p>
                That permanence shows up in the built environment. Tightly packed stone houses with slate roofs line cobbled paths that climb and drop with the hillside, and many of these buildings have stood for generations. The result feels less like a trail stop and more like a small, self-contained hill town you happen to be passing through.
              </p>
              <p>
                Accessibility sets Ghandruk apart too. While many villages at similar or higher elevations in the Annapurna region are reachable only on foot, Ghandruk can be reached directly by jeep. That makes it realistic for travelers who want a genuine taste of mountain village life without committing to a multi-day trek.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mt-6">Why Ghandruk Is Famous in Nepal</h3>
              <p>
                Ghandruk is widely regarded as one of the cultural centers of the Gurung community, a group with a long, well-documented history of service in the British and Indian Gurkha regiments. That history is visible the moment you start walking through the village — many homes display military photographs and medals passed down through families, and the local museum dedicates significant space to this Gurkha legacy alongside broader Gurung traditions.
              </p>
              <p>
                The village is equally well known for its setting. On clear mornings, the view across the valley toward Annapurna South and Machhapuchhre is one of the most photographed panoramas in the Annapurna region, rivaling views from much higher and harder-to-reach viewpoints.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mt-6">Who Should Visit Ghandruk Village</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Trekkers</strong> heading toward Tadapani, Ghorepani, Khopra Ridge, or Annapurna Base Camp who want a comfortable, culturally rich first or last night on the trail</li>
                <li><strong>Cultural travelers</strong> interested in Gurung and Gurkha history who may not want to trek at all</li>
                <li><strong>Families and first-time trekkers</strong> looking for a mountain village experience without demanding altitude or distance</li>
                <li><strong>Photographers</strong> chasing close-up sunrise views of Annapurna South and Machhapuchhre without a multi-day approach</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHERE IS IT LOCATED */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Ghandruk Village Located?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h3 className="text-lg font-bold text-stone-900">Ghandruk&apos;s Location in the Annapurna Region</h3>
              <p>
                Ghandruk sits inside the Annapurna Conservation Area, Nepal&apos;s largest protected area and home to Annapurna Base Camp, Poon Hill, and the Khopra Ridge. The village is located in the Modi Khola Valley, on the western side of the Annapurna massif, in Kaski District.
              </p>
              <p>
                Geographically, Ghandruk functions almost like a hub. Trails branch out from the village toward Chhomrong and Annapurna Base Camp to the north, toward Tadapani and Ghorepani to the west, and back toward Pokhara via jeep road to the south. Few villages in the region offer this kind of multi-directional trekking access.
              </p>
              <p>
                <strong>Distance From Pokhara:</strong> Ghandruk is roughly 35–40 km from Pokhara by road, though the exact distance varies slightly depending on the route taken. In practical terms, that translates to about three hours by jeep, since the final stretch of road climbs steeply through hill terrain rather than running flat.
              </p>
              <p>
                <strong>Altitude, Geography, and Landscape:</strong> At 1,940 meters (6,364 feet), Ghandruk sits at a comfortable mid-altitude — high enough to deliver genuinely impressive mountain views, but low enough that altitude sickness is rarely a concern for visitors. The village is built directly into the hillside, with houses stacked on terraces that step down toward the Modi Khola river below. Surrounding Ghandruk, you&apos;ll find a patchwork of farmland, forest, and grazing land that defines much of the Annapurna foothills.
              </p>
            </div>
          </article>

          {/* SECTION: HOW TO REACH */}
          <article id="reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Ghandruk From Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h3 className="text-lg font-bold text-stone-900">Traveling by Private or Shared Jeep</h3>
              <p>
                The most common way to reach Ghandruk is by jeep from Pokhara, a journey that typically takes around three hours. The route winds through hill villages before climbing steadily toward Ghandruk itself, and a sturdy 4x4 vehicle with an experienced local driver makes a real difference in comfort on the rougher sections.
              </p>
              <p>
                You can hire a jeep privately or join a shared jeep heading the same direction. Private jeeps cost more but run on your schedule; shared jeeps are cheaper but depart only once they&apos;re sufficiently full, so timing can be less predictable.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Public Transportation Options</h3>
              <p>
                For travelers on a tighter budget, local buses and shared jeeps operate on routes toward Ghandruk, though schedules are less fixed than a private hire. These options usually involve a bus journey to a nearby hub, followed by a jeep or a short walking segment into the village itself. It&apos;s a workable option if you&apos;re flexible with timing, but not the fastest way in.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Trekking Into Ghandruk on Foot</h3>
              <p>
                For those who prefer to arrive on foot, several trails lead into Ghandruk from nearby trailheads, most commonly Nayapul and Kimche. These walking routes typically take a few hours and pass through forest and farmland, offering a gentle introduction to Annapurna trekking before you&apos;ve even reached your first overnight stop.
              </p>
            </div>
          </article>

          {/* SECTION: IS IT WORTH IT? */}
          <article id="worth-it" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Ghandruk Worth Visiting?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-xs">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Gurung Culture</h4>
                <p className="leading-relaxed text-stone-500">
                  Few places in the Annapurna region let you witness genuinely lived-in Gurung culture this easily. Ghandruk isn&apos;t a recreation or a museum piece — it&apos;s a working village where farming, Gurkha family heritage, and tourism coexist day to day.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Easier Access</h4>
                <p className="leading-relaxed text-stone-500">
                  Many villages at comparable elevations in Nepal are reachable only after a full day or more of walking. Ghandruk&apos;s jeep road access removes that barrier, which is a genuine advantage if your time in Nepal is limited.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Low-Risk Altitude</h4>
                <p className="leading-relaxed text-stone-500">
                  Ghandruk&apos;s moderate altitude, road access, and comfortable lodges make it a low-risk way to experience mountain village life in Nepal. You get real cultural depth and real mountain views without the physical demands.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: THINGS TO DO */}
          <article id="things-to-do" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Things to Do in Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h3 className="text-lg font-bold text-stone-900">Visit the Gurung Cultural Museum</h3>
              <p>
                The Gurung Cultural Museum is Ghandruk&apos;s signature attraction, covering traditional clothing, tools, household items, and artifacts tied to daily Gurung life. A significant portion of the museum is dedicated to Gurkha history, with displays on military service that bring real context to what you&apos;ll see in homes around the village. Some museums in the area allow visitors to try on traditional Gurung attire, which makes for a memorable way to engage with the culture.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Walk Through the Traditional Stone-Paved Streets</h3>
              <p>
                Simply walking through Ghandruk is one of the best things to do here. The stone-paved lanes wind between houses, past small shops and courtyards, offering constant opportunities to see daily life as it actually happens — locals carrying goods, children walking to school, animals being herded along the paths.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Experience Authentic Gurung Culture</h3>
              <p>
                Some guesthouses and community groups occasionally organize cultural programs for visitors, including traditional dance performances. Staying in a homestay naturally opens the door to this kind of exchange — conversations over a meal often reveal more about Gurung life than any formal display.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Try Traditional Local Food</h3>
              <p>
                Most guesthouses serve Dal Bhat, Nepal&apos;s staple meal, often made with vegetables and grains grown locally. Depending on where you stay, you may also get the chance to try regional Gurung specialties, homemade pickles, and dairy products that don&apos;t typically appear on menus elsewhere in Nepal.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Shop for Local Handicrafts</h3>
              <p>
                Small shops scattered through the village sell handmade goods — woven items, local crafts, and other products made by Gurung artisans. Buying directly here puts money straight into the local economy rather than into a tourist supply chain.
              </p>
            </div>

            {/* Quick Links to Ghandruk Directories */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Specialized Ghandruk Guides</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/ghandruk-things-to-do" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Things to Do in Ghandruk</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/nodes/ghandruk-gurung-culture" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Gurung Culture &amp; Heritage</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/nodes/ghandruk-accommodation-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Lodging &amp; Accommodation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION: MOUNTAIN VIEWS */}
          <article id="mountain-views" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Mountain Views and Photography From Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Ghandruk sits in a highly photogenic valley position that delivers exceptional mountain visibility without requiring a multi-day approach.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Annapurna South Views:</strong> Annapurna South dominates the northern skyline on clear days. Its sharp, pyramidal shape makes it instantly recognizable and a favorite subject for photographers visiting the village.</li>
                <li><strong>Machhapuchhre View:</strong> Machhapuchhre, often called Fishtail Mountain for its distinctive twin-peaked summit, is another major highlight. Ghandruk offers a closer, more detailed perspective of the peak than you&apos;d get from Pokhara.</li>
                <li><strong>Best Sunrise and Sunset Spots:</strong> For the clearest mountain views, head to the upper sections of the village, near the museum or the highest guesthouses. Sunrise tends to offer the best visibility, particularly during autumn and spring mornings before haze builds up later in the day. Sunset can be rewarding too, especially when soft evening light catches the slate rooftops in the foreground against the mountains behind.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: TREKKING CONNECTIONS */}
          <article id="trekking-routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ghandruk Trekking Routes and Trail Connections
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Ghandruk&apos;s location at a trail crossroads is one of its biggest practical advantages. Several major Annapurna routes either start here or pass directly through.
              </p>
              <p>
                <strong>Ghandruk to Tadapani Trek:</strong> The route from Ghandruk to Tadapani is one of the more popular onward treks, typically taking 3 to 4 hours. The trail climbs steadily through rhododendron and oak forest, gaining elevation gradually rather than in one steep push.
              </p>
              <p>
                <strong>Ghandruk to Ghorepani and Poon Hill Route:</strong> From Tadapani, trekkers can continue on to Ghorepani and Poon Hill. This connection forms part of several classic Annapurna itineraries, pairing Ghandruk&apos;s cultural depth with Poon Hill&apos;s famous sunrise panorama in a single trip.
              </p>
              <p>
                <strong>Ghandruk on the Annapurna Base Camp Trek:</strong> Trekkers heading toward Annapurna Base Camp sometimes route through Ghandruk on their way to or from Chhomrong, adding a layer of cultural context to an otherwise purely scenic trek.
              </p>
              <p>
                <strong>Why Ghandruk Is the Gateway to the Khopra Ridge Trek:</strong> For travelers heading to the Khopra Ridge, Ghandruk typically serves as the first night&apos;s stop. After arriving by jeep, you spend the afternoon exploring the village — the museum, the lanes, maybe a homestay dinner — before setting out the next morning already acclimatized to the elevation and oriented to the trail system.
              </p>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation in Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h3 className="text-lg font-bold text-stone-900">Traditional Gurung Homestays</h3>
              <p>
                Staying in a community-run homestay places you directly inside a local Gurung family&apos;s home. You get traditional meals, clean accommodation, and a genuine chance for cultural exchange — conversations about history and daily life shared over Dal Bhat tend to leave a stronger impression than anything in a guidebook.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Teahouses and Trekking Lodges</h3>
              <p>
                Ghandruk also offers a wide range of standard guesthouses and lodges, many of which are noticeably more comfortable than what you&apos;ll find at higher-altitude stops further along Annapurna trails. That makes Ghandruk a good place to enjoy a relaxed first or last night before or after a longer trek.
              </p>
              <p>
                <strong>Accommodation Price Range:</strong> Budget rooms in Ghandruk generally run cheaper than mid-range lodges with private bathrooms and hot showers, and homestays typically fall somewhere in between once meals are factored in. Expect most accommodations to include hot showers, reliable electricity, and Wi-Fi — comforts that aren&apos;t guaranteed once you trek higher into the Annapurna Sanctuary. Exact rates shift with season and demand, so it&apos;s worth confirming current pricing before booking.
              </p>
            </div>
          </article>

          {/* SECTION: COSTS & PERMITS */}
          <article id="costs-permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ghandruk Travel Costs and Permit Guide
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Transportation Costs:</strong> A private jeep from Pokhara to Ghandruk costs more than a shared jeep, but runs on your own schedule. Shared jeeps and local buses are the cheaper alternative, with the trade-off being less predictable departure times.
              </p>
              <p>
                <strong>Guide and Porter Costs:</strong> If you&apos;re continuing onward, hiring a local guide is worth factoring into your budget — Nepal&apos;s trekking regulations require a licensed guide for many Annapurna routes.
              </p>
              <h3 className="text-lg font-bold text-stone-900 mt-6">Permits Required for Visiting Ghandruk</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Annapurna Conservation Area Permit (ACAP):</strong> Anyone trekking in or around Ghandruk needs a valid ACAP. As of 2026, the standard fee is NPR 3,000 for foreign nationals and NPR 1,000 for SAARC nationals. The permit is checked at checkpoints, and funds go directly toward conservation work.
                </li>
                <li>
                  <strong>TIMS Card for Trekkers:</strong> The TIMS (Trekkers&apos; Information Management System) card is required alongside ACAP for Annapurna treks, with a fee around NPR 2,000. Since requirements can shift, confirm status with your agency before you travel.
                </li>
              </ul>
              <div className="bg-stone-900 border border-stone-850 p-6 rounded-3xl text-stone-300 text-xs">
                <strong>Important Permit Tips:</strong> Both permits can be arranged in Kathmandu or Pokhara, and most trekking agencies can handle the paperwork on your behalf. Carry your passport and passport-sized photos when applying. A licensed guide is required for most Annapurna treks.
              </div>
            </div>
          </article>

          {/* SECTION: CULTURE & HISTORY */}
          <article id="culture-history" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Gurung Culture and History of Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>The Gurung Community and Local Heritage:</strong> The Gurung people are one of Nepal&apos;s prominent indigenous ethnic groups, with a long history rooted in the hills of the Annapurna region. Ghandruk is considered one of the largest and most culturally intact Gurung settlements in the country. Daily life here still revolves heavily around agriculture and livestock, alongside tourism-related work.
              </p>
              <p>
                <strong>Ghandruk&apos;s Connection to Gurkha Military History:</strong> The Gurung community&apos;s connection to the Gurkha regiments is one of the defining threads of Ghandruk&apos;s identity. For generations, men from this village have served in Gurkha units within the British Army and the Indian Army, a tradition that continues today. It&apos;s not unusual to see military photographs and medals displayed in homes throughout the village.
              </p>
              <p>
                <strong>Traditional Architecture and Village Lifestyle:</strong> One of the first things visitors notice is Ghandruk&apos;s cohesive architecture. Houses are built from local stone and topped with slate roofs that carry a distinctive grey-blue tone, connected by a network of stone-paved paths. Details reflect generations of refinement: covered porches, carved wooden window frames, and tucked-away courtyards.
              </p>
            </div>
          </article>

          {/* SECTION: BEST SEASON */}
          <article id="best-season" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Ghandruk Village
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-xs leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Spring (March to May)</h4>
                <p className="text-stone-500">Rhododendron forests bloom in the hills, adding color to the landscape. Daytime temperatures are mild, and mountain visibility is good, especially early in the day.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Autumn (September to November)</h4>
                <p className="text-stone-500">Widely considered the best season for mountain views. Skies are clear, offering reliable sightlines to Annapurna South and Machhapuchhre. This is peak trekking season.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Winter (December to February)</h4>
                <p className="text-stone-500">Winter brings cold mornings and evenings, but also some of the clearest skies of the year. Peaceful option with fewer crowds if you don&apos;t mind cooler temperatures.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Monsoon (June to August)</h4>
                <p className="text-stone-500">Frequent rain and clouds obscure mountain views. However, the hills turn green and lush. Road conditions can be affected by heavy rain, and trails turn muddier.</p>
              </div>
            </div>
          </article>

          {/* SECTION: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sample Ghandruk Trek Itinerary Options
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-stone-600">
                <div className="sm:w-1/3 font-bold text-stone-900">One-Day Ghandruk Trip</div>
                <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">Drive from Pokhara to Ghandruk in the morning, explore the museum and lanes, take in mountain views, and return to Pokhara the same day or next morning.</div>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-stone-600">
                <div className="sm:w-1/3 font-bold text-stone-900">Two-Day Overnight Experience</div>
                <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">Drive in on day one, explore and settle into a homestay for the night. Wake early for sunrise views of Annapurna South and Machhapuchhre, then head back to Pokhara.</div>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-stone-600">
                <div className="sm:w-1/3 font-bold text-stone-900">Multi-Day Trek Starter</div>
                <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">Use Ghandruk as your first night, then continue on foot toward Tadapani, Ghorepani/Poon Hill, or further into the Annapurna Sanctuary toward Base Camp or Khopra Ridge.</div>
              </div>
            </div>
          </article>

          {/* SECTION: COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ghandruk vs Other Annapurna Villages
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Ghandruk vs Landruk:</strong> Landruk sits on the opposite side of the valley and offers similar views with a quieter, smaller-village feel. Ghandruk is larger, has more cultural infrastructure, and is easier to reach by road.
              </p>
              <p>
                <strong>Ghandruk vs Ghorepani:</strong> Ghorepani is built primarily around the Poon Hill sunrise viewpoint, with less of a standalone cultural identity. Ghandruk offers a deeper cultural experience and road access, while Ghorepani requires more walking but delivers a different view.
              </p>
              <p>
                <strong>Which Village is Best for Beginners?</strong> For travelers who want maximum cultural depth with minimum physical demand, Ghandruk is the stronger choice thanks to its road access and moderate altitude. For those prioritizing the classic sunrise panorama experience and willing to walk, Ghorepani remains a better fit.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghandruk Village
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Ghandruk worth visiting in Nepal?",
                  a: "Yes. Ghandruk combines genuine, lived-in Gurung culture, close-range views of Annapurna South and Machhapuchhre, and comfortable road access — a combination few other Annapurna villages offer in one place."
                },
                {
                  q: "How far is Ghandruk from Pokhara?",
                  a: "Ghandruk is roughly 35–40 km from Pokhara, which translates to about three hours by jeep due to the steep, winding hill roads."
                },
                {
                  q: "Can I drive directly to Ghandruk?",
                  a: "Yes. Ghandruk is one of the few villages at this elevation in the Annapurna region accessible by jeep road, making it reachable without trekking on foot."
                },
                {
                  q: "Is the Ghandruk trek difficult?",
                  a: "Trekking routes to and from Ghandruk are generally moderate, with gradual elevation gain through forest and farmland. The village itself, reached by jeep, requires no trekking at all."
                },
                {
                  q: "Is Ghandruk suitable for beginners?",
                  a: "Yes. Its moderate altitude, road access, and comfortable lodges make it one of the most beginner-friendly mountain villages in the Annapurna region."
                },
                {
                  q: "Do I need permits to visit Ghandruk?",
                  a: "Yes. An Annapurna Conservation Area Permit (ACAP) is mandatory for anyone trekking in or around Ghandruk. TIMS card requirements have varied in enforcement recently, so confirm current status with your trekking agency."
                },
                {
                  q: "What mountains can I see from Ghandruk?",
                  a: "Annapurna South, Machhapuchhre (Fishtail Mountain), and Hiunchuli are all visible from various points in the village on clear days."
                },
                {
                  q: "How many days should I spend in Ghandruk?",
                  a: "A one- or two-day visit is enough to experience the village and its views. If you're continuing onward to Tadapani, Ghorepani, or the Khopra Ridge, plan for Ghandruk as your first overnight stop in a longer itinerary."
                },
                {
                  q: "Are homestays available in Ghandruk Village?",
                  a: "Yes. Community-run Gurung homestays are widely available alongside standard teahouses and lodges, and they tend to offer the deepest cultural experience."
                },
                {
                  q: "What is the best time to visit Ghandruk?",
                  a: "Autumn (September–November) offers the most reliable mountain views, while spring (March–May) adds rhododendron blooms to the scenery. Winter is quieter with clear skies but cooler temperatures, and monsoon (June–August) is the least reliable for visibility."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
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

          {/* SECTION: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Ghandruk Village earns its reputation as the cultural capital of the Annapurna region through more than just its setting. It&apos;s the combination of a living Gurung community, generations of Gurkha heritage, traditional stone architecture, and some of the most accessible Himalayan views in Nepal that sets this village apart from a typical trekking stop.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you&apos;re planning a short visit by jeep, building Ghandruk into a longer route toward Tadapani, Ghorepani, or Annapurna Base Camp, or using it as your starting point for the Khopra Ridge Trek, the village offers a rare blend of cultural depth, comfort, and scenery in one place.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek From Ghandruk
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to take your Ghandruk experience further? Our local guides handle all permits, logistics, accommodation, and route planning for the Khopra Ridge Trek — starting right here in Ghandruk Village.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Book Today &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This Ghandruk Village guide is reviewed by certified local guides based in Kathmandu. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
