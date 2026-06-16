import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tadapani Trail Junction Guide: Routes, Altitude & Trek Decisions in Annapurna",
  description: "Discover Tadapani — the key trekking junction in the Annapurna region where routes split toward Ghorepani and Khopra Ridge. Altitude, lodges, trail conditions, and route decisions explained by local guides.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🧭 Route Junction Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Tadapani Trail Junction Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Every trekker in the Annapurna region eventually arrives at a fork in the trail. At Tadapani, that fork is one of the most consequential decisions of your entire trek.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,630m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">8,628 feet (cool forest belt)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Primary Forest</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Rhododendron</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Vibrant spring canopy</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trail Access</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3-Way Split</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Ghandruk, Ghorepani, Bayeli</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Key Views</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Machhapuchhre</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Direct sightlines to peaks</span>
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
                Junction Significance
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Location &amp; Geography
              </a>
              <a href="#routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Routes
              </a>
              <a href="#decision" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Decision Guide
              </a>
              <a href="#environment" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Forest &amp; Environment
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodge Stay Guide
              </a>
              <a href="#views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Scenic Highlights
              </a>
              <a href="#forecasting" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Forecasting
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Cross
              </a>
              <a href="#culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cultural Experience
              </a>
              <a href="#safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety &amp; Nav Advice
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
              Tadapani in the Annapurna Trekking Network (Why This Junction Matters)
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              Sitting at 2,630 metres inside the Annapurna Conservation Area, Tadapani is not just a quiet mountain village — it is a genuine trekking junction where the routes either lead toward the popular, well-worn path to Ghorepani or branch off into the wilder, more rewarding terrain of Bayeli Kharka and Khopra Ridge. Three major trails intersect here, and the direction you choose defines the character of everything that follows.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">A Key Route-Splitting Point in Annapurna</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Tadapani sits at the intersection of three distinct trekking corridors within the Annapurna Conservation Area. Arrive from Ghandruk to the south, and you face a choice the moment you reach the village: continue northwest toward Ghorepani and the famous Poon Hill sunrise viewpoint, or turn southeast onto the quieter ridge trail descending toward Bayeli Kharka and eventually Khopra Ridge.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  This is what makes Tadapani uniquely important in the Annapurna trekking network. It is not a dead end, a detour, or a side trip. It is the branching point from which two very different Himalayan experiences begin. Most route maps show it as a dot on a line, but on the ground, it functions more like a decision engine — one that separates the mainstream Annapurna circuit from the offbeat eco-lodge circuit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Trekkers Must Understand This Junction</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  The wrong route choice at Tadapani is not dangerous — but it is consequential. A trekker intending to reach Khopra Ridge who takes the Ghorepani path will add days to their itinerary and potentially need to retrace their steps. Similarly, someone unprepared for the solitude and more rugged conditions of the Bayeli Kharka trail should be aware of what that route involves before committing.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 2: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where is Tadapani Located on the Trek Map?
            </h2>

            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Connection Between Ghandruk, Ghorepani, and Khopra Ridge:</strong> Tadapani lies roughly between Ghandruk and Ghorepani along the classic Annapurna foothills circuit. From Ghandruk, it sits approximately 4 to 5 hours north along a forest trail that climbs steadily through dense rhododendron and oak. From Ghorepani, it is roughly a 4-hour descent to the east through the same forest canopy.
              </p>
              <p>
                The Khopra Ridge route branches south and east from Tadapani, descending toward Bayeli Kharka before climbing again to the community lodges perched on Khopra Ridge itself. Spatially, think of Tadapani as the apex of a triangle whose three points are Ghandruk (south), Ghorepani (northwest), and Bayeli Kharka (southeast).
              </p>
              <p>
                <strong>Tadapani Altitude (2,630 m) and Its Impact:</strong> At 2,630 metres, Tadapani is high enough to feel the cool thinning of mountain air — especially in the evenings and early mornings — but low enough that altitude sickness is uncommon. Temperatures can drop sharply after dark. Above 2,400 metres, the trail transitions from subtropical vegetation to the rhododendron-dominant zone.
              </p>
            </div>
          </article>

          {/* SECTION 3: TREKKING ROUTES */}
          <article id="routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Tadapani Trekking Routes Explained
            </h2>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🌲 Ghandruk to Tadapani Forest Ascent</h4>
                <p className="mt-1">
                  The trail climbs north through terraced farmland before entering the forest zone at around 2,200 metres. From that point, the path winds upward through increasingly dense rhododendron trees. The elevation gain is approximately 690 metres over 7–9 kilometres of trail, taking 4 to 5 hours. The climb is steady rather than steep.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🌄 Tadapani to Ghorepani Mainstream Route</h4>
                <p className="mt-1">
                  This trail runs northwest through a continuous forest corridor, crossing several ridgelines before arriving at Ghorepani village at 2,860 metres. The trek takes 4 to 5 hours. This is the mainstream trekking corridor, shared with many trekkers completing the Poon Hill loop. It gives access to Deurali, a small settlement serving as a rest stop.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">🏔️ Tadapani to Bayeli Kharka and Khopra Ridge Offbeat Route</h4>
                <p className="mt-1">
                  The Khopra Ridge route descends southeast through oak forest toward Bayeli Kharka (approx. 3,100m). From Bayeli Kharka, the trail climbs steadily to the Khopra Ridge community lodges at 3,660 metres — a base from which Khayer Lake (4,500m) and dramatic panoramic views of Dhaulagiri and Annapurna South become accessible.
                </p>
              </div>
            </div>

            {/* Quick Links to Related Resources */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Specialized Tadapani Resources</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
                <Link href="/nodes/tadapani-accommodation" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Tadapani Lodges Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/nodes/tadapani-weather" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Tadapani Weather Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/ghandruk-to-tadapani" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Ghandruk to Tadapani</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/tadapani-to-bayeli-kharka" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Tadapani to Bayeli</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 4: ROUTE DECISION */}
          <article id="decision" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Tadapani Route Decision Guide (Ghorepani vs Khopra Ridge)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">⚖️ Which Route is Easier?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Tadapani to Ghorepani trail involves a net elevation gain of around 230 metres over a longer distance, with no particularly demanding technical sections, making it the easier option. The Bayeli Kharka route involves more descending initially, followed by a steeper climb toward the ridge camps.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">👥 Crowd vs Solitude Experience</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Ghorepani attracts hundreds of trekkers per day, offering a sociable environment. The Bayeli Kharka and Khopra Ridge trail is a different environment entirely. You can walk for hours without encountering another trekker, enjoying a quieter, slower, and more grounded experience.
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Recommended Route Based on Trekker Type</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600 leading-relaxed">
                <div>
                  <p className="font-bold text-stone-900 mb-1">Choose Ghorepani if you:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Are on a shorter itinerary (5–7 days)</li>
                    <li>Want the Poon Hill sunrise experience</li>
                    <li>Prefer well-maintained trails and frequent lodge stops</li>
                    <li>Are newer to trekking in Nepal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">Choose Khopra Ridge if you:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Have 8–10 days for your trek</li>
                    <li>Want genuine mountain solitude</li>
                    <li>Are interested in community-managed eco-tourism</li>
                    <li>Want to visit Khayer Lake and reach higher elevations</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 5: ENVIRONMENT */}
          <article id="environment" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trail Conditions, Forests, and Natural Environment
            </h2>

            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Rhododendron Forest Trail Experience:</strong> The forest above Ghandruk and surrounding Tadapani is one of the most spectacular natural environments in the Annapurna Conservation Area. Rhododendron arboreum grows here in its tree form, reaching heights of 10 to 15 metres. In spring (March to early May), the canopy burns with red, pink, and white blossoms.
              </p>
              <p>
                <strong>Oak Forest and Himalayan Terrain:</strong> Interspersed with rhododendron, oak trees add a different texture. Roots are exposed across the trail, creating a challenging stone surface. The forest supports populations of Himalayan tahr, langur monkeys, and a wide range of bird species.
              </p>
              <p>
                <strong>Weather and Visibility Conditions:</strong> Tadapani is positioned where cloud and fog develop quickly — particularly in the afternoons. Morning is reliably the clearest period. In autumn, visibility is at its peak. Winter brings cold conditions and possible snow above 2,500 metres.
              </p>
            </div>
          </article>

          {/* SECTION 6: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Tadapani Lodge Stay Guide
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Teahouse Facilities</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Tadapani has a small cluster of teahouses. Lodges are basic but solid: twin or dormitory rooms, shared or attached bathrooms, and a common dining area. Hot showers and device charging are available for a small fee.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Stay or Pass Through?</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Commonly used as an overnight stop on the Ghandruk–Ghorepani circuit. For trekkers starting the Khopra Ridge route, an overnight stay is essential to prepare for the long hike to Bayeli Kharka.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Food &amp; Comfort</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  Lodge menus cover standard trekking fare: dal bhat, noodles, pasta, omelettes, and Tibetan bread. Dal bhat is the recommended choice — nutritious, freshly prepared, and filling.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: VIEWS */}
          <article id="views" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Views and Scenic Highlights from Tadapani
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Machhapuchhre (Fishtail Mountain) Views</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Tadapani sits in a position that offers some of the closest and most striking views of Machhapuchhre (6,993 m) available from any accessible trail in the Annapurna region. The distinctive twin-peaked summit appears dramatically close from the clearings near the village. Morning is the optimal viewing time, typically between 6:00 and 8:00 am.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Annapurna South Panorama</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Annapurna South (7,219 m) is the other dominant peak in the Tadapani skyline. From here, it presents as a broad, glacier-covered massif rising to the north. On clear autumn mornings, both Machhapuchhre and Annapurna South are visible simultaneously, making Tadapani a highly photogenic spot.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: FORECASTING */}
          <article id="forecasting" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              What Happens After Tadapani (Route Forecasting Guide)
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              From Tadapani, you have three primary onward directions for your next day:
            </p>

            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 text-xs text-stone-600">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Northwest to Ghorepani (4–5 hours):</strong> The mainstream route. A forest trail with moderate ups and downs, multiple rest stops, and arrival in Ghorepani for the following morning&apos;s Poon Hill sunrise.</li>
                <li><strong>Southeast toward Bayeli Kharka (5–6 hours):</strong> The Khopra Ridge offbeat route. A descending forest trail that opens into high-altitude meadow terrain. Requires solid fitness.</li>
                <li><strong>South back to Ghandruk (4–5 hours):</strong> The return route, usually taken only if plans have changed.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 9: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Cross Tadapani Junction
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌸 Spring Bloom (Mar-May)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Rhododendron forests are in full bloom, transforming the trails into red, pink, and white canopies. Temperatures are warm and comfortable during the day.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🍁 Autumn Views (Oct-Nov)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Post-monsoon skies bring maximum visibility, sharp mountain profiles, and deep blue skies. Ideal walking temperatures make this peak season.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">❄️ Winter &amp; Monsoon</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  Winter brings cold nights and snow above 2,500m. Monsoon (June-Sep) is lush but paths are wet, slippery, and leeches are common.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: CULTURE */}
          <article id="culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Cultural Experience in Tadapani
            </h2>

            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Gurung Village Influence:</strong> The Annapurna foothills are home to Gurung communities. Tadapani and nearby Ghandruk are Gurung settlements. Trekkers staying overnight encounter the quiet rhythms of village life: women weaving in courtyards, children walking to school, and smoke rising from kitchen chimneys.
              </p>
              <p>
                <strong>Mountain Lodge Lifestyle:</strong> Teahouses are family-run. At Tadapani, the lodges are small and personal — you are a guest in a mountain home. Tipping local staff and purchasing meals locally supports the community.
              </p>
            </div>
          </article>

          {/* SECTION 11: SAFETY */}
          <article id="safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Safety, Navigation, and Trail Advice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">🧭 Avoid Confusion</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Ghorepani route departs from the northwest and is obvious. The Bayeli Kharka route departs to the southeast and can be easily missed. Confirm your direction before heading out.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">⚠️ Trail Risks</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Afternoon thunderstorms can develop quickly. Start walking by 7:00 am and arrive early. Forest trails are slippery when wet. Trekking poles are highly recommended.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">👨‍✈️ Need a Guide?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  For the mainstream Ghorepani trail, independent navigation is viable. For the Khopra Ridge and Bayeli Kharka route, we strongly recommend a licensed local guide.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Tadapani Junction
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Tadapani located in the Annapurna trek?",
                  a: "Tadapani is located at 2,630 metres in the Annapurna Conservation Area of Nepal, approximately midway between Ghandruk village to the south and Ghorepani to the northwest. It also marks the entry point for the Khopra Ridge offbeat route toward Bayeli Kharka."
                },
                {
                  q: "What is the altitude of Tadapani in Nepal?",
                  a: "Tadapani sits at 2,630 metres above sea level. This places it in the rhododendron and oak forest zone of the Annapurna foothills, above the subtropical vegetation of the lower valleys but below the alpine terrain of higher ridges."
                },
                {
                  q: "Is Tadapani a good place to stay overnight?",
                  a: "Yes. Tadapani is one of the recommended overnight stops on both the Ghorepani loop and the Khopra Ridge trek. Staying here gives access to morning views of Machhapuchhre and Annapurna South before cloud builds, and allows a sensible rest day between the ascent from Ghandruk and the onward route."
                },
                {
                  q: "Which route is better from Tadapani: Ghorepani or Khopra Ridge?",
                  a: "It depends on your goals. Ghorepani and Poon Hill are better for shorter itineraries and iconic sunrise views on a well-supported trail. Khopra Ridge is better for mountain solitude, community eco-tourism, higher elevation experience, and access to Khayer Lake. For trekkers who have already done Poon Hill, Khopra Ridge is the clear recommendation."
                },
                {
                  q: "How far is Tadapani from Ghandruk?",
                  a: "The trail distance is approximately 7–9 kilometres, with a walking time of 4 to 5 hours for most trekkers. The route involves a sustained climb of around 690 metres through rhododendron and oak forest."
                },
                {
                  q: "Can I go to Khopra Ridge directly from Tadapani?",
                  a: "Yes. The Khopra Ridge route departs Tadapani in a southeast direction toward Bayeli Kharka. From Bayeli Kharka, you continue to Khopra Ridge community lodges on the following day. The full Tadapani-to-Khopra section takes approximately two walking days."
                },
                {
                  q: "Is Tadapani part of the Annapurna Circuit?",
                  a: "Tadapani is not part of the classic Annapurna Circuit (which loops around the full Annapurna massif and crosses Thorung La pass). It is part of the Annapurna Sanctuary and Poon Hill approach trails, and sits firmly within the Annapurna Conservation Area."
                },
                {
                  q: "Are there lodges available in Tadapani?",
                  a: "Yes. Tadapani has a small cluster of teahouses offering accommodation, meals, and basic facilities. During peak trekking seasons (October–November and March–April), early arrival and advance notice are recommended as beds fill quickly."
                },
                {
                  q: "Is the Tadapani trail difficult?",
                  a: "The Ghandruk to Tadapani ascent is classified as moderate — accessible to reasonably fit trekkers with no technical climbing required, but demanding enough that good preparation matters. The onward routes to Ghorepani and Bayeli Kharka are also moderate, with the Khopra Ridge extension involving more sustained effort over multiple days."
                },
                {
                  q: "Do I need a guide for Tadapani junction routes?",
                  a: "For the Ghorepani route, experienced independent trekkers generally manage well with a good map and clear weather. For the Khopra Ridge and Bayeli Kharka route, we strongly recommend a local guide, particularly for first-time visitors to this section of the trail network."
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
              Tadapani is one of those places on a trek that quietly defines the entire experience. On the surface, it is a small cluster of mountain lodges in a forest clearing at 2,630 metres. In practice, it is the junction where your itinerary either follows the well-travelled road to Ghorepani and Poon Hill or takes a less-travelled turn toward one of the Annapurna region&apos;s finest offbeat destinations.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Understanding Tadapani as a route decision point — not just a scenic overnight stop — is what allows you to plan accurately, choose the trail that fits your goals, and arrive at this junction with confidence rather than confusion. The Ghorepani path is beautiful, but the Khopra Ridge route leads somewhere genuinely special.
            </p>
          </article>

          {/* SECTION 14: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to Plan Your Trek Through Tadapani?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a licensed local trekking team based in Pokhara, operating community-managed eco-lodge circuits in the Annapurna foothills. Our 9-day Khopra Ridge package covers the full route from Ghandruk through Tadapani to Khopra Ridge and Khayer Lake — all meals, accommodation, and guidance included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Customize Your Itinerary &rarr;
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
                This Tadapani Trail Junction guide is reviewed by certified local guides based in Pokhara. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
