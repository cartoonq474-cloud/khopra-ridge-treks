import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-via-ghandruk",
  },
  title: "Khopra Trek via Ghandruk: Complete Route Guide, Itinerary, Cost & Travel Tips",
  description: "Planning the Khopra Trek via Ghandruk? Get the full route, day-by-day itinerary, cost, permits, difficulty rating, and best season — written by local guides.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "7 Days" },
    { label: "Max Altitude", value: "3,660m (4,660m with Lake)" },
    { label: "Difficulty Grade", value: "Moderate" },
    { label: "Lodging Style", value: "Community Lodges" }
  ];

  const advantages = [
    {
      title: "Traditional Gurung Culture",
      desc: "Stay in Ghandruk, the largest Gurung settlement in the Annapurna region, filled with stone slate-roofed houses, cultural museums, and hospitable communities."
    },
    {
      title: "Better Acclimatization Profile",
      desc: "Starting at 1,940m creates a gradual ascent curve before pushing above 3,000m, lowering the incidence of acute mountain sickness (AMS)."
    },
    {
      title: "Scenic Walking & Blooms",
      desc: "Hike through lush oak and rhododendron forest tracks that burst into vivid spring colors, mixed with terraced farmlands."
    },
    {
      title: "Epic Machhapuchhre & South Views",
      desc: "Capture clean, stunning perspectives of Machhapuchhre (Fishtail) and Annapurna South rising directly behind Ghandruk village."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara to Ghandruk",
      elev: "1,940m",
      time: "2 - 2.5 hr drive + 1.5 - 2 hr hike",
      desc: "Drive from Pokhara to Kimche by private jeep or bus, then ascend stone steps to Ghandruk village. Overnight in a comfortable Gurung teahouse with solar hot showers and WiFi."
    },
    {
      day: 2,
      title: "Ghandruk to Tadapani",
      elev: "2,630m",
      time: "5 - 6 hours",
      desc: "Climb through ancient oak and mossy rhododendron forests. This is the first proper test of hiking stamina, presenting steady elevation gains."
    },
    {
      day: 3,
      title: "Tadapani to Dobato",
      elev: "3,350m",
      time: "6 - 7 hours",
      desc: "Push higher through thick forest cover as the trail splits off from the main Annapurna circuit. The forest thins as you climb closer to Dobato."
    },
    {
      day: 4,
      title: "Dobato to Bayeli Kharka",
      elev: "3,432m",
      time: "3 - 4 hours",
      desc: "A shorter, gentle day walking along high alpine ridgelines. Excellent acclimatization day featuring clean views of the massive Dhaulagiri."
    },
    {
      day: 5,
      title: "Bayeli Kharka to Khopra Ridge",
      elev: "3,660m",
      time: "4 - 5 hours",
      desc: "The main climb. Walk high alpine meadows to reach Khopra Ridge itself. Experience dramatic, 360-degree panoramas of Dhaulagiri, Annapurna South, and Nilgiri."
    },
    {
      day: 6,
      title: "Optional Khayer Lake Excursion",
      elev: "4,660m",
      time: "7 - 8 hours roundtrip",
      desc: "A challenging but highly rewarding day hike up to the sacred alpine lake of Khayer Lake at the foot of Annapurna South. Highly recommended if well acclimatized."
    },
    {
      day: 7,
      title: "Return Trek or Alternative Exit Route",
      elev: "Descent to Pokhara",
      time: "6 - 7 hours + drive",
      desc: "Descend the ridge via Swanta village or Chhistibung, heading down to the road for private transfer back to Pokhara. Can also combine with Ghorepani/Poon Hill."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Ghandruk Entry Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek via Ghandruk: Complete Route Planning Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            If you&apos;re researching the Khopra Trek via Ghandruk, you&apos;re looking at the smartest way to enter this route. Starting from Ghandruk gives you the gentlest acclimatization curve, the richest cultural introduction, and some of the best early mountain views on the entire trail.
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Is The Trek?
              </a>
              <a href="#why-ghandruk" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Start in Ghandruk?
              </a>
              <a href="#route-nodes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day-by-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Altitude
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Season to Trek
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation &amp; Food
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits &amp; Regulations
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Breakdown
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#guided-vs-independent" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guided vs Independent
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
                Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Khopra Trek via Ghandruk?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <h3 className="text-lg font-bold text-stone-900">Where Khopra Ridge Is Located</h3>
              <p>
                Khopra Danda sits at roughly 3,660 meters in the Annapurna Conservation Area, in Myagdi district, west of the more heavily trafficked Annapurna Base Camp trail. It&apos;s a ridge-top viewpoint rather than a single peak, which is part of why the views are so wide — you&apos;re looking across the valley at Dhaulagiri on one side and the Annapurna range and Machhapuchhre on the other, without another ridge blocking the line of sight.
              </p>
              <p>
                The trek connects to the broader Annapurna trail network, which means permits, regulations, and trailheads follow the same Annapurna Conservation Area Permit (ACAP) system used across the region.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">Why This Trek Has Become Popular Among International Trekkers</h3>
              <p>
                Khopra has grown in popularity precisely because it isn&apos;t Poon Hill or ABC. Trekkers who&apos;ve already done the famous routes — or who specifically want to avoid the crowds — come here for a quieter, slower trail with comparable or better mountain views. The lodges are smaller and family-run, the trail is genuinely peaceful, and the route passes through forest and farmland that feels far more lived-in than purely scenic.
              </p>
              <p>
                It&apos;s also a strong choice for trekkers who want real cultural contact, not just a postcard view. Ghandruk, the gateway village, anchors that experience.
              </p>

              <h3 className="text-lg font-bold text-stone-900 mt-6">Why Starting from Ghandruk Is the Best Route Choice</h3>
              <p>
                There are a few ways to approach Khopra Ridge, but entering via Ghandruk is the configuration most experienced local guides recommend, and it&apos;s the one we run as our standard itinerary. It front-loads the trek with a full cultural day, spreads the altitude gain more evenly across the week, and sets up a more comfortable first night than routes that push straight toward higher elevation on day one.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHY START FROM GHANDRUK */}
          <article id="why-ghandruk" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Start the Khopra Trek from Ghandruk?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {advantages.map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-900 text-base">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: ROUTE NODES */}
          <article id="route-nodes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Khopra Trek Route Overview
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Pokhara to Kimche Drive – Starting the Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The trek begins with a drive from Pokhara to Kimche, the trailhead village. This takes roughly 2 to 2.5 hours by private jeep or local bus, depending on road conditions, and covers the most direct overland access point into the Ghandruk side of the Annapurna foothills. Private jeep transfers are more comfortable and considerably faster than the public bus, which makes multiple stops.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Kimche to Ghandruk – First Hiking Section</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  From Kimche, the trail climbs via stone steps up to Ghandruk village — a steady but manageable 1.5 to 2-hour ascent that serves as a good warm-up for the days ahead. It&apos;s a popular day-hike route on its own, so don&apos;t be surprised to share the steps with other trekkers and porters in the early stretch.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Ghandruk to Tadapani Through Forest Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Leaving Ghandruk, the trail heads into forest cover almost immediately, climbing through oak and rhododendron toward Tadapani. This section is longer and more demanding than the previous day, with real elevation gain, but the forest canopy keeps it shaded and pleasant for most of the year.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Tadapani to Dobato and Bayeli Kharka</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This is where the trek properly leaves the well-worn Annapurna trails behind. From Tadapani, the route to Dobato climbs further through high-altitude forest before opening into ridgeline terrain. Continuing on to Bayeli Kharka (3,432m), trees thin out and the views begin to open dramatically — this is usually the first point on the trek where Dhaulagiri comes fully into view.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Chhistibung to Khopra Ridge Final Ascent</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The final push from Chhistibung up to Khopra Ridge is the steepest and most exposed section of the trail. There&apos;s no forest cover here, just open alpine terrain and a direct, sustained climb to the ridge at roughly 3,660 meters. It&apos;s also, unsurprisingly, the most rewarding stretch — the panorama from the top spans Dhaulagiri, Annapurna South, and Machhapuchhre in a single sweep.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Detailed Day-by-Day Khopra Ridge Trek Itinerary
            </h2>

            <div className="space-y-6">
              {itinerary.map((d) => (
                <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                    {d.day}
                  </span>
                  <div className="w-full bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-stone-955 text-base">Day {d.day} – {d.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Estimated Time: {d.time}</span>
                    <p className="text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 5: DIFFICULTY & ALTITUDE */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty, Distance and Altitude Profile
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <p>
                Most days on this itinerary run between 3 and 7 hours of walking, with the longest, most demanding days falling in the middle of the trek (Tadapani to Dobato, and Dobato to Bayeli Kharka). Daily distances vary more by terrain difficulty than by raw kilometers — a shorter day with steep elevation gain can feel harder than a longer day on flatter ground.
              </p>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Fitness Level Required for the Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This is classified as a moderate trekking route — harder than Poon Hill alone, but more manageable than Annapurna Base Camp or anything in the Everest region above 5,000 meters. You don&apos;t need technical climbing experience, but you do need a reasonable baseline of cardiovascular fitness and some prior experience with multi-day hiking. Trekkers who regularly hike, run, or do sustained cardio training typically handle this route comfortably.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Altitude Acclimatization and Safety Considerations</h4>
                <p className="text-xs text-stone-500 leading-relaxed text-stone-600">
                  The highest point on the standard itinerary is Khopra Ridge at 3,660m, with the optional Khayer Lake extension reaching roughly 4,660m. Both are within a range where altitude sickness is a real possibility, though the gradual ascent profile through Ghandruk significantly reduces the risk compared to faster routes.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2 text-stone-600">
                  Standard precautions apply: ascend gradually, stay hydrated, avoid alcohol at altitude, and don&apos;t push through symptoms like persistent headache, nausea, or dizziness. If symptoms appear, the safest response is to stop ascending or descend — this is one of the clearest benefits of trekking with an experienced local guide who can read early symptoms and adjust the plan.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: BEST SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Do the Khopra Trek in Nepal
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Spring (Mar - May)</span>
                <h4 className="font-bold text-stone-900">Spring Season</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Spring is one of the two peak windows for this trek, largely because of the rhododendron forests that line the Ghandruk-to-Tadapani section. Forests bloom in shades of red, pink, and white through March and April, and daytime temperatures are comfortable for hiking even at altitude.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Autumn (Sep - Nov)</span>
                <h4 className="font-bold text-stone-900">Autumn Season</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Autumn is the other peak season, and for many trekkers the better one — post-monsoon skies are typically clearer, giving the best odds of unobstructed mountain views from Khopra Ridge. Temperatures are cool but stable, and trail conditions are generally dry.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-500/10 uppercase">Winter (Dec - Feb)</span>
                <h4 className="font-bold text-stone-900">Winter Trekking Conditions</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Winter is doable but considerably colder, especially at Bayeli Kharka and Khopra Ridge, where overnight temperatures regularly drop below freezing. Snow is possible on the higher sections. This is a viable season for experienced winter trekkers but requires proper cold-weather gear.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-500/10 uppercase">Monsoon (Jun - Aug)</span>
                <h4 className="font-bold text-stone-900">Monsoon Season Challenges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  June through August brings heavy rain, slippery stone trails, leeches in the lower forest sections, and frequently obscured mountain views. It&apos;s the least recommended window for this particular route, though the forest is at its most lush if that&apos;s a priority over visibility.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: ACCOMMODATION & FOOD */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation, Food and Teahouse Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Tea Houses</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Accommodation follows the standard Annapurna teahouse model — simple guesthouses with twin rooms, shared bathrooms in most locations, and basic but functional facilities. Ghandruk has the most developed lodges on the route, with hot solar showers and reasonably comfortable rooms. As you move higher toward Dobato, Bayeli Kharka, and Khopra itself, facilities get simpler and more basic, which is typical for less-trafficked high-altitude routes.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Meals</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Dal bhat — lentils, rice, and vegetable curry — is the trekking staple here, and for good reason: it&apos;s filling, it&apos;s usually refillable, and it&apos;s what most lodge kitchens are best equipped to prepare well. Menus also typically include noodle dishes, fried rice, soups, and simple breakfast options like porridge, eggs, and pancakes. Don&apos;t expect much variety at the higher lodges; the further you get from road access, the more limited the kitchen options become.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Utilities</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Ghandruk has reliable electricity and WiFi. Above Tadapani, expect charging fees at most lodges, slower or absent WiFi, and a general shift toward more basic infrastructure. Bottled or treated water is available to purchase along the route, though bringing a filter or purification tablets is a smart backup, especially for the higher, more remote sections.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits Required for Khopra Trek via Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Two main permits are mandatory to access the trails. Planning this before you arrive in Pokhara is highly recommended:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Annapurna Conservation Area Permit (ACAP)</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Because the entire route falls within the Annapurna Conservation Area, every trekker needs an ACAP permit. This can be arranged in Kathmandu, Pokhara, or through a registered trekking agency before you start.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">TIMS Card &amp; Regulations</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    A TIMS (Trekkers&apos; Information Management System) card is also required for this region. Regulations around independent trekking in Nepal have shifted in recent years, so it&apos;s worth confirming current rules with a licensed operator or the Nepal Tourism Board before you travel.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl text-emerald-950 text-xs">
                <strong>Guide Requirements:</strong> Current Nepal trekking regulations increasingly require foreign trekkers to be accompanied by a licensed guide in many Annapurna-region routes, including less-developed trails like Khopra. Even where it isn&apos;t strictly mandatory, a local guide is strongly advisable here — the upper sections of this trek are far less signposted and far less trafficked than the main Annapurna circuit, and route-finding mistakes carry real consequences at this altitude.
              </div>
            </div>
          </article>

          {/* SECTION 9: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Cost Breakdown
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Independent Trekking Estimates</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Trekking independently keeps costs lowest, covering permits, teahouse accommodation, and meals along the route. Budget trekkers can expect daily costs to run noticeably lower than guided packages, though this route&apos;s permit and guide requirements limit how fully &quot;independent&quot; a trek here can realistically be.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Guided Trek Estimates</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    A guided trek adds the cost of a licensed guide and typically a porter, plus logistics support like transport arrangements and lodge bookings. This is the more common way to do this particular route, both because of current regulations and because of the navigational complexity above Tadapani.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                <h4 className="font-bold text-stone-900 mb-4">Cost Element Summaries</h4>
                <div className="grid gap-4 md:grid-cols-2 text-xs text-stone-550 leading-relaxed">
                  <div>
                    <strong>Daily Food &amp; Lodging:</strong> Lodge rooms along this route are generally inexpensive on their own — the real cost driver is meals, since most teahouses expect you to eat where you sleep. Costs rise gradually the higher you climb, reflecting the difficulty of transporting supplies.
                  </div>
                  <div>
                    <strong>Transport &amp; Permits:</strong> Budget for the Pokhara–Kimche jeep transfer in both directions, plus ACAP and TIMS permit fees. Private jeep transfers cost more than public buses but save significant time and discomfort.
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 10: PACKING LIST */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing List for the Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Warm fleece or mid-layer (down)</li>
                    <li>Waterproof/windproof outer shell</li>
                    <li>Warm hat &amp; gloves for elevation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Trekking Gear</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sturdy, broken-in trekking boots</li>
                    <li>Adjustable trekking poles</li>
                    <li>Reliable headlamp</li>
                    <li>Warm sleeping bag (&lt; 0°C rated)</li>
                    <li>Daypack for Khayer Lake side trip</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Health &amp; Emergency</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Basic first-aid kit</li>
                    <li>Altitude sickness medication</li>
                    <li>Water purification tablets / filter</li>
                    <li>Sunscreen &amp; lip balm (high UV)</li>
                    <li>High-altitude travel insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 11: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek vs Other Popular Annapurna Treks
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">vs Poon Hill Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Poon Hill is shorter, more crowded, and significantly more developed in terms of infrastructure — it&apos;s a 3,210m viewpoint reachable in just a few days, popular precisely because it&apos;s accessible. Khopra Ridge sits higher, takes longer to reach, and delivers a comparably wide mountain panorama with a fraction of the foot traffic. If you&apos;ve already done Poon Hill or specifically want to avoid it, Khopra is the natural next step.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">vs Mardi Himal Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Mardi Himal has grown rapidly in popularity over the past several years and now sees considerably more trekkers than Khopra, particularly in peak season. Both routes offer similarly dramatic close-up mountain views, but Khopra remains the quieter, less commercialized option of the two, with a stronger cultural component thanks to the Ghandruk entry route.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-800 text-xs">
              <strong>Why Khopra Is One of Nepal&apos;s Best Offbeat Treks:</strong> What sets Khopra apart isn&apos;t just lower crowd numbers — it&apos;s the combination of genuine cultural immersion in Ghandruk, a well-paced acclimatization profile, and a 360-degree mountain panorama from the ridge that rivals routes requiring far more time, altitude, and technical difficulty to reach.
            </div>
          </article>

          {/* SECTION 12: GUIDED VS INDEPENDENT */}
          <article id="guided-vs-independent" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Guided Trek vs Independent Trekking
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">Benefits of a Local Guide</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                    A local guide brings route knowledge that matters most exactly where the trail gets least developed — above Tadapani, where signage thins out and weather can shift conditions quickly. Guides also manage lodge bookings, monitor your acclimatization, and can make real-time calls about pace or rest days.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">Can You Trek Independently?</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                    Technically, sections of the lower route (Ghandruk to Tadapani) are walkable independently by experienced trekkers. The sections above that — particularly Dobato through Khopra Ridge and the Khayer Lake extension — are far less marked and increasingly fall under guide requirements set by current Nepal trekking regulations.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">Why Prefer Local Operators</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                    Beyond the regulatory and safety angle, working with a local operator means real-time updates on trail and lodge conditions, which change more on this route than on the heavily trafficked Annapurna trails simply because fewer people are walking it and reporting back.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-4">
                <h4 className="font-bold text-stone-900">Why We Recommend This Route for First-Time Trekkers in Nepal</h4>
                <div className="grid gap-4 md:grid-cols-3 text-xs text-stone-500 leading-relaxed">
                  <div>
                    <strong>Local Knowledge &amp; Updates:</strong> We maintain and update this guide based on active trail checks from our guides, who work this route regularly out of Pokhara. Weather patterns, lodge availability, and trail conditions on Khopra shift more noticeably between seasons than on the main Annapurna circuit.
                  </div>
                  <div>
                    <strong>Community-Based Tourism:</strong> This trek runs through Magar and Gurung communities that depend directly on trekking income. Choosing teahouse accommodation and local guiding services along this route puts revenue directly into village economies — funding schools, clinics, and basic infrastructure.
                  </div>
                  <div>
                    <strong>Safer Route Planning:</strong> The combination of altitude, route complexity above Tadapani, and limited rescue infrastructure in this part of the Annapurna region makes experienced guiding a genuine safety asset, not just a convenience.
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghandruk Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How many days does Khopra Trek via Ghandruk take?",
                  a: "The standard itinerary runs 6–7 days, including a buffer day at Bayeli Kharka and an optional extension to Khayer Lake. Trekkers combining Khopra with Ghorepani and Poon Hill on the return leg should plan for 8–9 days."
                },
                {
                  q: "Is Khopra Trek difficult for beginners?",
                  a: "It's rated as a moderate trek — more demanding than Poon Hill, but less technical and less extreme in altitude than Annapurna Base Camp or Everest region trails. Trekkers with reasonable cardiovascular fitness and some prior multi-day hiking experience generally manage it without major difficulty."
                },
                {
                  q: "What is the highest point on the trek?",
                  a: "Khopra Ridge itself sits at approximately 3,660 meters. The optional Khayer Lake side trip reaches roughly 4,660 meters."
                },
                {
                  q: "Is Khayer Lake included in the trek?",
                  a: "Khayer Lake is an optional extension, not part of the core itinerary. It adds roughly one extra day (3–4 hours each way) and is worth including if your schedule and acclimatization allow it."
                },
                {
                  q: "What permits are required for Khopra Trek?",
                  a: "You need an Annapurna Conservation Area Permit (ACAP) and a TIMS card, both of which can be arranged in Pokhara, Kathmandu, or through a licensed trekking agency before departure."
                },
                {
                  q: "Can I do Khopra Trek without a guide?",
                  a: "Current Nepal trekking regulations increasingly require licensed guides for routes like this, and the upper sections above Tadapani are sparsely marked, which makes independent trekking risky in practice even where it's technically permitted. We strongly recommend a guide for this route."
                },
                {
                  q: "How much does Khopra Trek cost?",
                  a: "Costs vary depending on whether you trek independently or with a guided package, and scale with the number of days, transport choices, and accommodation standard. Guided treks include permit handling, guide and porter fees, and logistics support on top of base trekking costs."
                },
                {
                  q: "What is the best season for Khopra Trek?",
                  a: "Spring (March–May) and autumn (September–November) are the two recommended seasons, offering the clearest skies and most stable trail conditions. Spring also brings blooming rhododendron forests on the Ghandruk-to-Tadapani section."
                },
                {
                  q: "Is Khopra Trek better than Poon Hill Trek?",
                  a: "\"Better\" depends on what you're after. Poon Hill is shorter, easier, and more accessible — ideal for a quick taste of Annapurna views. Khopra takes longer and climbs higher but rewards that effort with a wider panorama and a much quieter trail."
                },
                {
                  q: "Is WiFi available on the trek?",
                  a: "Ghandruk has reliable WiFi. Coverage becomes patchy or unavailable above Tadapani, and most higher lodges either lack WiFi entirely or charge a small fee for limited access."
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

          {/* SECTION 14: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Entering the Khopra Ridge Trek through Ghandruk isn&apos;t just one option among several — it&apos;s the configuration that gives you the best of everything this trek offers: a genuine cultural introduction in Nepal&apos;s largest Gurung village, a sensible acclimatization curve, and mountain views that start building from day one instead of arriving all at once on the final climb.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              What you get at the end is a 3,660-meter ridge with Dhaulagiri on one side and the Annapurna massif on the other, reached on a trail that&apos;s still genuinely quiet compared to almost everywhere else in the region. If you&apos;re weighing this against Poon Hill or Mardi Himal, the deciding factor usually comes down to how much you value solitude on the trail — and on that measure, Khopra via Ghandruk is hard to beat.
            </p>
          </article>

          {/* SECTION 15: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Book Your Khopra Trek via Ghandruk With Experienced Local Trekking Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We run this exact itinerary regularly out of Pokhara, with private jeep transfers from Pokhara to Kimche, licensed local guides who know the route above Tadapani in every season, and lodge arrangements built around community-based teahouses.
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Need a custom itinerary — shorter, longer, or combined with Poon Hill? Contact our local team and we&apos;ll build it around your dates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now &rarr;
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
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This Ghandruk route and itinerary is reviewed by our licensed local Annapurna mountain guides. Acclimatization guidelines and transport logistics are updated monthly to ensure safe transitions above the tree line.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
