import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Ghandruk Village: Complete Guide to Annapurna's Gurung Cultural Capital",
  description: "Discover Ghandruk Village, Nepal's Gurung cultural heart. Get the best time to visit, things to do, trekking routes, homestay tips, and how to reach Ghandruk.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Cultural Capital Gateway
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Ghandruk Village: Complete Guide to Annapurna&apos;s Gurung Cultural Capital
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Perched on a steep hillside in the Annapurna foothills, Ghandruk Village is a sprawling settlement of stone houses, slate roofs, and paved lanes that has quietly become one of the most rewarding cultural hubs in Nepal.
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
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Trek Starter</span>
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Facts
              </a>
              <a href="#why-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Visit Ghandruk?
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Location &amp; Geography
              </a>
              <a href="#history-culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">History &amp; Gurung Culture
              </a>
              <a href="#things-to-do" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Things to Do
              </a>
              <a href="#mountain-views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Mountain Views
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach It
              </a>
              <a href="#trekking-connections" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trekking Connections
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Homestays &amp; Lodging
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#travel-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Travel Tips
              </a>
              <a href="#khopra-gateway" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Khopra Ridge Gateway
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Ghandruk Village Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">If you ask trekkers and travelers in Pokhara where to find the most authentic Gurung village in Nepal, the answer is almost always the same: Ghandruk. Perched on a steep hillside in the Annapurna region, Ghandruk Village is a sprawling settlement of stone houses, slate roofs, and paved lanes that has quietly become one of the most rewarding places to visit in the entire Annapurna Conservation Area.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">What makes Ghandruk stand out isn&apos;t just its size or its views, though both are impressive. It&apos;s the way the village has managed to stay genuinely lived-in. Families still farm the terraced fields below the houses, prayer flags move in the wind above stone courtyards, and the Gurung community that calls this place home has deep, generations-old ties to the Gurkha regiments that shaped so much of Nepal&apos;s modern history.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">For trekkers, Ghandruk also happens to sit at a strategic crossroads. It&apos;s a common starting point for routes toward Tadapani, Ghorepani, and the Khopra Ridge, and it connects directly to the broader Annapurna Base Camp trail. So whether you&apos;re coming for the culture, the mountain views, or the trekking access, Ghandruk tends to deliver on all three.
            </p>

            {/* Quick Facts Grid */}
            <div className="mt-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">Quick Facts About Ghandruk Village
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Elevation", value: "1,940 m (6,364 ft)" },
                  { label: "Location", value: "Annapurna Conservation Area, Modi Khola Valley" },
                  { label: "Primary ethnicity", value: "Gurung (Gurkha heritage)" },
                  { label: "Distance from Pokhara", value: "Roughly 3 hours by jeep" },
                  { label: "Best season", value: "Autumn (September–November) and Spring (March–May)" },
                  { label: "Trekking significance", value: "Gateway to Tadapani, Ghorepani, Khopra Ridge, and ABC routes" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 2: WHY VISIT */}
          <article id="why-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Visit Ghandruk Village?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">What Makes Ghandruk Different From Other Annapurna Villages</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Most villages along Annapurna trekking routes are small clusters of teahouses built primarily to serve passing trekkers. Ghandruk is different. It&apos;s one of the largest Gurung settlements in Nepal, with a permanent population that lives, farms, and raises families here regardless of the trekking season.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The architecture reinforces this sense of permanence. Tightly packed stone houses with slate roofs line cobbled paths that wind up and down the hillside, creating a layout that feels closer to a small hill town than a trail stop. Many of these buildings have stood for generations.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Accessibility is another major difference. While many high-altitude villages in the region are reachable only on foot, Ghandruk can be reached by jeep from Pokhara in a few hours, making it realistic for travelers who want a taste of mountain village life without committing to a multi-day trek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Ghandruk Is Famous in Nepal</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This village is considered one of the cultural centers of the Gurung community, a group with a long and well-documented history of service in the British and Indian Gurkha regiments.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">That history is visible in the village itself. Many homes display military memorabilia, photographs, and medals passed down through families, and the local museum dedicates significant space to this Gurkha legacy alongside broader Gurung traditions. Beyond its cultural significance, Ghandruk is also famous simply for its setting. On clear mornings, the view across the valley toward Annapurna South and Machhapuchhre is one of the most photographed panoramas in the region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Who Should Visit Ghandruk?</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ghandruk works well for a wide range of travelers, which is part of why it has become such a popular stop:
                </p>
                <ul className="list-disc pl-5 text-xs text-stone-600 space-y-2 mt-2">
                  <li><strong>Trekkers</strong>heading toward Tadapani, Ghorepani, Khopra Ridge, or Annapurna Base Camp, who want a comfortable, culturally rich first or last night on the trail.</li>
                  <li><strong>Cultural travelers</strong>interested in Gurung and Gurkha history who may not want to trek at all.</li>
                  <li><strong>Families and beginners</strong>looking for a mountain village experience without demanding altitude or distance.</li>
                  <li><strong>Photographers</strong>chasing sunrise views of Annapurna South and Machhapuchhre without a multi-day approach.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 3: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Ghandruk Village Located?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Location Within the Annapurna Region</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ghandruk sits inside the Annapurna Conservation Area, Nepal&apos;s largest protected area and the same region that contains Annapurna Base Camp, Poon Hill, and the Khopra Ridge. It&apos;s located in the Modi Khola Valley, on the western side of the Annapurna massif, in Kaski District. Geographically, Ghandruk acts almost like a hub. From the village, trails branch out toward Chhomrong and Annapurna Base Camp to the north, toward Tadapani and Ghorepani to the west, and toward Pokhara via jeep road to the south.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Elevation, Landscape, and Natural Setting</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">At 1,940 meters (6,364 feet), Ghandruk sits at a comfortable mid-altitude. This is high enough to deliver genuinely impressive mountain views, but low enough that altitude sickness is rarely a concern. The village itself is built directly into the hillside, with houses stacked on terraces that step down toward the Modi Khola river below. Surrounding the village, you&apos;ll find a patchwork of farmland, forest, and grazing land.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Ghandruk Is a Key Trekking Gateway</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ghandruk&apos;s position in the Modi Khola Valley puts it within reach of several of the Annapurna region&apos;s most popular routes. Because Ghandruk is one of the few villages in the area accessible by jeep, it&apos;s also a natural starting and ending point for treks. Many itineraries are built around driving to Ghandruk, spending a night there, and then trekking onward — which is exactly how the Khopra Ridge route typically begins.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: HISTORY & CULTURE */}
          <article id="history-culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The History and Gurung Culture of Ghandruk Village
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">The Gurung Community and Their Heritage</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Gurung people are one of Nepal&apos;s prominent indigenous ethnic groups, with a long history rooted in the hills of the Annapurna region. Ghandruk is considered one of the largest and most culturally intact Gurung settlements. Daily life in Ghandruk still revolves heavily around agriculture and livestock, alongside tourism-related work like running homestays and guiding services.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Ghandruk&apos;s Connection to Gurkha History</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Gurung community&apos;s connection to the Gurkha regiments is one of the defining threads of Ghandruk&apos;s identity. For generations, men from this village have served in Gurkha units within the British Army and the Indian Army, a tradition that continues today. Many families have relatives who served, and it&apos;s not unusual to see military photographs and medals displayed in homes.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Traditional Architecture and Village Design</h4>
                <p className="text-xs text-stone-500 leading-relaxed">One of the first things visitors notice is Ghandruk&apos;s cohesive architecture. Houses are built from local stone, topped with slate roofs that have a distinctive grey-blue tone, and connected by a network of stone-paved paths. Small details reflect this traditional design: covered porches, carved wooden window frames, and small courtyards.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Festivals, Traditions, and Everyday Life</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Gurung communities in Ghandruk observe several important cultural festivals throughout the year, many tied to the agricultural calendar. Everyday life follows rhythms shaped by farming and the seasons. Mornings start early, with villagers heading to fields or tending livestock before tourism-related work begins.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: THINGS TO DO */}
          <article id="things-to-do" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Things to Do in Ghandruk Village
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Visit the Gurung Cultural Museum</h4>
                <p className="mt-1">The Gurung Cultural Museum is Ghandruk&apos;s signature attraction, covering traditional clothing, tools, household items, and artifacts. A significant portion of the museum is dedicated to Gurkha history, with displays on military service. Some museums also allow visitors to try on traditional Gurung attire, which makes for a memorable way to engage.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Walk Through the Traditional Stone-Paved Streets</h4>
                <p className="mt-1">Simply walking through Ghandruk is one of the best things to do. The stone-paved lanes wind between houses, past small shops and courtyards, offering constant photo opportunities. You&apos;ll see locals carrying goods, children walking to school, and animals being herded along the paths.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Experience Local Gurung Culture</h4>
                <p className="mt-1">Some guesthouses and community groups occasionally organize cultural programs, including traditional dance performances, for visitors. Staying in a homestay naturally opens the door to cultural exchange.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Enjoy Mountain Photography Opportunities</h4>
                <p className="mt-1">Ghandruk is a prime photography location. Annapurna South and Machhapuchhre dominate the skyline on clear days, and the contrast between traditional stone rooftops and snow-capped mountains makes for striking compositions. Early morning is the best time for photography here.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Try Traditional Gurung Food</h4>
                <p className="mt-1">Most guesthouses serve Dal Bhat — Nepal&apos;s staple meal — often made with ingredients grown locally. Depending on where you stay, you may also try regional Gurung specialties, locally made pickles, dairy products, and seasonal vegetables.
                </p>
              </div>
            </div>

            {/* Quick Links to Ghandruk Directories */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Specialized Ghandruk Guides</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/ghandruk-things-to-do" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Things to Do in Ghandruk</span>
                  <span>→</span>
                </Link>
                <Link href="/nodes/ghandruk-gurung-culture" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Gurung Culture &amp; Heritage</span>
                  <span>→</span>
                </Link>
                <Link href="/nodes/ghandruk-accommodation-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Lodging &amp; Accommodation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 6: MOUNTAIN VIEWS */}
          <article id="mountain-views" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Mountain Views From Ghandruk Village
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Ghandruk sits in a highly photogenic valley position that delivers beautiful mountain visibility.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Annapurna South</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Annapurna South (7,219 m) dominates the northern skyline on clear days. Its sharp, pyramidal shape makes it instantly recognizable and a favorite subject for photographers.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Machhapuchhre</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Machhapuchhre (6,993 m), often called Fishtail Mountain, is another major highlight. Ghandruk offers a closer, more detailed perspective of the peak than Pokhara.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Hiunchuli &amp; More</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Hiunchuli (6,441 m) and several smaller peaks form part of the broader panorama. Together, these mountains create a near-360-degree backdrop visible from various points in the village.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-6">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Best Sunrise and Sunset Photography Spots</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">For the best mountain views, head to the upper sections of the village, near the museum or the highest guesthouses. Sunrise tends to offer the clearest visibility, particularly during autumn and spring. Sunset can also be rewarding when soft evening light hits the slate rooftops in the foreground against the mountains behind.
              </p>
            </div>
          </article>

          {/* SECTION 7: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Ghandruk Village
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Traveling From Pokhara to Ghandruk</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Pokhara is the main gateway to Ghandruk. The distance is relatively short by Nepalese mountain road standards, but travel times can vary depending on road conditions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">Reaching Ghandruk by Jeep</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">The most common way to reach Ghandruk is by jeep from Pokhara, a journey that typically takes around three hours. Jeeps can be hired privately or shared. The route winds through hill villages before climbing. Sturdy 4x4 vehicles and experienced drivers make a real difference in comfort.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-950 text-base">Public Transportation Options</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">For travelers on a tighter budget, local buses and shared jeeps operate on routes toward Ghandruk, though schedules are less predictable. These options usually involve a bus journey to a nearby hub followed by a jeep or walking segment into the village.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Trekking Into Ghandruk</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">For those who prefer to arrive on foot, several trails lead into Ghandruk from nearby villages and trailheads (like Kimche or Nayapul). These walking routes typically take a few hours and pass through forests and farmland, offering a gentle introduction to the trekking experience.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: TREKKING CONNECTIONS */}
          <article id="trekking-connections" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Ghandruk Village Trekking Routes and Trail Connections
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Due to its strategic location, Ghandruk links directly to several major trails in the region.
            </p>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>Ghandruk to Tadapani Trek:</strong>The route from Ghandruk to Tadapani is one of the more popular onward treks, typically taking 3 to 4 hours. The trail climbs through beautiful rhododendron and oak forest, gaining elevation steadily.
              </p>
              <p>
                <strong>Ghandruk to Ghorepani Route:</strong>From Tadapani, trekkers can continue to Ghorepani and Poon Hill. This connection is part of several classic Annapurna itineraries, combining Ghandruk&apos;s cultural experience with Poon Hill&apos;s sunrise.
              </p>
              <p>
                <strong>Ghandruk on the Annapurna Base Camp Trek:</strong>Trekkers heading toward ABC sometimes pass through Ghandruk on their way to or from Chhomrong, adding cultural depth to their itinerary.
              </p>
              <p>
                <strong>Ghandruk as the Starting Point for the Khopra Ridge Trek:</strong>For travelers heading to the Khopra Ridge, Ghandruk typically serves as the first night&apos;s stop. After arriving by jeep, trekkers spend the afternoon exploring Ghandruk before setting out the next morning.
              </p>
            </div>
          </article>

          {/* SECTION 9: ACCOMMODATION & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Ghandruk Village Homestay Experience and Accommodation Guide
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Gurung Homestays</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Staying in a community-run homestay places you directly within a local Gurung family&apos;s home. You get traditional meals, clean accommodation, and a chance for genuine cultural exchange, sharing conversations about history over Dal Bhat.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Teahouses &amp; Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Ghandruk features a wide range of guesthouses and lodges, many of which are considerably more comfortable than those at higher-altitude stops, making Ghandruk a great spot to enjoy a relaxed first or last night.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Facilities &amp; Comfort</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Accommodations generally offer hot showers, reliable electricity, and Wi-Fi. Many dining rooms face directly toward Annapurna South and Machhapuchhre, and rooms come with proper beds and cozy bedding.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Ghandruk Village
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (March to May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Rhododendron forests in the surrounding hills bloom during this period, adding vivid color to the landscape. Daytime temperatures are mild and mountain visibility is good, especially early in the day.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (September to November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Autumn is widely considered the best time for mountain views. Skies are typically clear, offering reliable views of Annapurna South, Machhapuchhre, and Hiunchuli. Trails are busier during this peak season.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter (December to February)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Winter brings colder temperatures in the mornings and evenings, but also some of the clearest skies of the year. For travelers who want a quieter experience with fewer crowds, winter is a peaceful option.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Monsoon (June to August)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Monsoon brings frequent rain and clouds obscuring mountain views. However, the hillsides become green and lush. Road conditions can be affected by rain, and trails are muddier.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-6 space-y-4">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Weather and Climate Overview</h4>
              <p className="text-xs text-stone-600 leading-relaxed">Ghandruk&apos;s mid-altitude location means it experiences a relatively temperate climate. Daytime temperatures are comfortable for most of the year. Early mornings and evenings are cool. Autumn offers the most consistent views, while spring morning views are also clear. Monsoon is the least reliable for views.
              </p>
            </div>
          </article>

          {/* SECTION 11: TRAVEL TIPS */}
          <article id="travel-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Travel Tips for Visiting Ghandruk
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">What to Pack</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Layered clothing for varying temperatures, warm jacket, comfortable walking shoes for cobbled paths, rain protection for spring/monsoon, and a camera or phone for viewpoints.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Power &amp; Cash</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Electricity is generally reliable, and Wi-Fi is widely available (speeds vary). ATMs are not reliably available in the village, so carry sufficient cash in Nepalese Rupees.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Responsible Tourism</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Choose community-run homestays or locally owned guesthouses. Minimize plastic waste, respect local custom (ask before photographing), and support local shops.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: GATEWAY TO KHOPRA */}
          <article id="khopra-gateway" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Ghandruk Is the Perfect Gateway to the Khopra Ridge Trek
            </h2>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>Cultural Benefits:</strong>Starting in Ghandruk gives trekkers a meaningful cultural introduction. Spending an afternoon in the village — visiting the museum, walking the lanes, and staying with a family — provides context that&apos;s hard to get once the trek moves into more remote areas.
              </p>
              <p>
                <strong>Scenic Advantages:</strong>The trek begins with some of the region&apos;s best mountain views, giving trekkers a strong visual introduction to Annapurna South and Machhapuchhre right from the start.
              </p>
              <p>
                <strong>Trek Logistics &amp; Planning:</strong>Ghandruk&apos;s road access makes it a practical starting point. Trekkers can drive from Pokhara, explore, and start hiking the next morning already acclimatized to the 1,940-meter elevation. This also provides a gradual increase in difficulty.
              </p>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Ghandruk Village
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is Ghandruk Village famous for?",
                  a: "Ghandruk is best known as one of Nepal's largest and most culturally intact Gurung villages, with deep ties to Gurkha military history. It's also famous for its traditional stone-and-slate architecture and its close-up views of Annapurna South and Machhapuchhre."
                },
                {
                  q: "Is Ghandruk worth visiting?",
                  a: "Yes. Ghandruk combines an authentic Gurung cultural experience, comfortable accommodation, and some of the most accessible mountain views in the Annapurna region — making it worthwhile whether you're trekking onward or visiting on its own."
                },
                {
                  q: "How do I get to Ghandruk from Pokhara?",
                  a: "The most common way is by jeep from Pokhara, which takes roughly three hours. Shared jeeps and local buses are also available for budget travelers, and several trekking routes lead into the village on foot."
                },
                {
                  q: "Can I visit Ghandruk without trekking?",
                  a: "Yes. Because Ghandruk is accessible by jeep, many visitors reach the village without doing any significant trekking, spending one or more nights exploring the museum, streets, and viewpoints before returning to Pokhara."
                },
                {
                  q: "What is the best time to visit Ghandruk Village?",
                  a: "Autumn (September to November) generally offers the clearest mountain views, while spring (March to May) adds rhododendron blooms and mild weather. Both seasons are considered the best times to visit."
                },
                {
                  q: "How many days should I spend in Ghandruk?",
                  a: "A single overnight stay is enough to explore the museum, walk through the village, and enjoy sunrise views. Travelers continuing on a trek often spend one night here before heading toward Tadapani, Ghorepani, or Khopra Ridge."
                },
                {
                  q: "Are there homestays in Ghandruk Village?",
                  a: "Yes. Ghandruk offers community-run Gurung homestays alongside standard teahouses and guesthouses, giving visitors the option of a more immersive, family-based stay."
                },
                {
                  q: "What mountains can I see from Ghandruk?",
                  a: "On clear days, Ghandruk offers views of Annapurna South, Machhapuchhre (Fishtail Mountain), and Hiunchuli, along with surrounding peaks that form a wide Himalayan panorama."
                },
                {
                  q: "Is Ghandruk suitable for beginners and families?",
                  a: "Yes. Ghandruk's road access, moderate elevation, and comfortable accommodations make it one of the more accessible mountain villages in the Annapurna region for families and first-time visitors."
                },
                {
                  q: "Is Ghandruk part of the Annapurna Base Camp Trek?",
                  a: "Ghandruk lies along one of the access routes used by some Annapurna Base Camp itineraries, often serving as an overnight stop on the way to or from Chhomrong."
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
            <p className="text-stone-600 leading-relaxed text-sm">Ghandruk Village earns its reputation as the cultural capital of the Annapurna region through more than just its setting. It&apos;s the combination of a living Gurung community, generations of Gurkha heritage, traditional stone architecture, and some of the most accessible Himalayan views in Nepal that makes this village stand apart from a typical trekking stop.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you&apos;re planning a short visit by jeep, building Ghandruk into a longer route toward Tadapani, Ghorepani, or Annapurna Base Camp, or using it as your starting point for the Khopra Ridge Trek, the village offers a rare blend of cultural depth, comfort, and scenery in one place.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If a visit to Ghandruk has you thinking about what comes next, the Khopra Ridge Trek is one of the most natural ways to extend the experience — combining everything you&apos;ve just discovered in the village with several more days of remote Himalayan trekking.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Khopra Ridge Trek From Ghandruk</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Ready to take your Ghandruk experience further? Our local guides handle all permits, logistics, accommodation, and route planning for the Khopra Ridge Trek — starting right here in Ghandruk Village.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Book Today &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>Based in Pokhara, Nepal</span>
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Ghandruk Village guide is reviewed by certified local guides based in Pokhara. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
