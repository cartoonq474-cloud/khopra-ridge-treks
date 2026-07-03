import React from "react";
import Link from "next/link";
import ElevationProfile from "@/components/ElevationProfile";

export const metadata = {
  alternates: {
    canonical: "/guides/khayer-lake-ultimate-guide",
  },
  title: "Khayer Lake Guide: Complete Trekking Guide to Nepal's Sacred High-Altitude Lake",
  description: "Plan your Khayer Lake trek with this complete guide. Covers route, itinerary, altitude, best time to visit, trek cost, accommodation, permits, and the lake's sacred significance in the Annapurna region.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Complete Destination Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khayer Lake Guide: Complete Trekking Guide to Nepal&apos;s Sacred High-Altitude Lake
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Tucked high into the Annapurna foothills and cradled beneath the ice-draped flanks of Annapurna South, Khayer Lake is one of Nepal&apos;s most rewarding — and least visited — high-altitude destinations.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Max Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">15,289 feet above sea level</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Duration</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">7 - 10 Days</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Depending on chosen route</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Challenging</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Requires good basic fitness</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Best Seasons</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Oct - Nov</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">March - May</span>
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
              <a href="#why-special" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why It Is Special
              </a>
              <a href="#what-is" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">What is Khayer Lake?
              </a>
              <a href="#why-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Why Visit?
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach It
              </a>
              <a href="#route-explained" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route Explained
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Recommended Itineraries
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Difficulty
              </a>
              <a href="#altitude-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Altitude &amp; Safety
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#weather-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Weather &amp; Trail
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodges &amp; Food
              </a>
              <a href="#cost-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Cost Breakdown
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Required Permits
              </a>
              <a href="#sacred-significance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Sacred Significance
              </a>
              <a href="#packing-list" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Packing Checklist
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Practical Tips
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
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Guide: Ultimate High-Altitude Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Tucked high into the Annapurna foothills and cradled beneath the ice-draped flanks of Annapurna South, Khayer Lake is one of Nepal&apos;s most rewarding — and least visited — high-altitude destinations. It sits at 4,660 metres above sea level, far above the teahouse trail, far above the crowds, and far above almost everything that makes a Himalayan trek feel ordinary.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Most trekkers reach Khayer Lake as the dramatic highlight of the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>. After days of walking through rhododendron forests, stepping into Magar villages, and watching the mountains grow larger with every climb, the lake appears like a reward earned rather than simply visited. The water is still and cold. The shrine at the shoreline is ancient. The silence at that altitude is absolute.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This guide covers everything you need to plan a successful Khayer Lake trek. Whether you are researching the route for the first time or finalising your itinerary, you will find answers to every practical question here — from how to reach the lake, what the trail is really like, and what altitude risks to prepare for, to costs, permits, seasonal conditions, and the deep spiritual traditions that have made this lake a place of pilgrimage for centuries.
            </p>

            {/* Quick Summary Grid */}
            <div className="mt-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">Essential Facts About Khayer Lake
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Elevation", value: "4,660 metres (15,289 feet)" },
                  { label: "Region", value: "Annapurna Conservation Area, Gandaki Province" },
                  { label: "Trek Duration", value: "7 to 10 days (depending on route)" },
                  { label: "Difficulty", value: "Moderate to Challenging" },
                  { label: "Best Seasons", value: "Spring (March–May) and Autumn (September–November)" },
                  { label: "Starting Point", value: "Pokhara or Ghandruk" },
                  { label: "Trek Type", value: "Teahouse / Community Lodge Trek" },
                  { label: "Permit Required", value: "ACAP (Annapurna Conservation Area Permit)" },
                  { label: "Day Hike from Base", value: "7–8 hours round trip from Khopra Ridge" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 2: WHY SPECIAL */}
          <article id="why-special" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Khayer Lake Is Special
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Khayer Lake is not a destination that appears in most Nepal trekking brochures. It does not have the name recognition of Everest Base Camp or the foot traffic of the Annapurna Circuit. That is precisely what makes it remarkable.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">The lake sits in one of the Annapurna region&apos;s quietest corridors, framed by some of the most dramatic mountain scenery in Nepal. It carries sacred significance for both Hindus and Buddhists, and every year during the August full moon festival of Janai Purnima, hundreds of pilgrims make the ascent to pray at its shore. For trekkers, it offers something increasingly rare in the Himalayas: a genuine sense of arrival somewhere that feels untouched.
            </p>
          </article>

          {/* SECTION 3: WHAT IS */}
          <article id="what-is" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Is Khayer Lake?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Location Within the Annapurna Conservation Area</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Khayer Lake lies within the Annapurna Conservation Area (ACAP), the largest protected area in Nepal, covering more than 7,600 square kilometres of mountains, forests, and river valleys. The lake sits on the southern slopes of the Annapurna massif, in the area above Khopra Ridge (also called Khopra Danda), at an elevation where few casual trekkers venture.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">It is positioned roughly 35 to 40 kilometres northeast of Pokhara as the crow flies, though the trekking route winds considerably longer through the hills. The lake falls within the territory of the Magar communities that have inhabited this area for generations — communities whose culture, language, and traditions remain closely tied to the mountain landscape around them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Khayer Lake Altitude and Geography</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">At 4,660 metres, Khayer Lake sits well into the high-altitude zone. The terrain at this elevation is exposed and rocky, with alpine meadows giving way to scree and bare ridgeline as you approach. Snow is common at the lake for much of the year, and the temperature can drop well below freezing even during the day in winter months.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The lake itself is small but striking — a dark, still body of water reflecting the surrounding peaks when conditions allow. It is fed primarily by snowmelt from the slopes above. The shoreline holds the ancient shrine of Khayer Baraha, a small stone structure that has been a site of worship for longer than living memory.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why Khayer Lake Is Considered a Hidden Gem</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Despite its natural and spiritual significance, Khayer Lake receives a fraction of the visitors who trek the more famous Annapurna routes. The Khopra Ridge trail it sits above does not appear in most mainstream trekking packages. The communities along it — Ghandruk, Tadapani, Dobato, Chistibung, Bayeli Kharka, Swanta, Khopra — are authentic, not commercialised.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">This means fewer tea stalls, fewer lodges catering to international tastes, and considerably more solitude. For trekkers who have walked the Annapurna Circuit or the Poon Hill loop and want something that feels genuinely off the beaten path, Khayer Lake is one of the strongest options in the entire region.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: WHY VISIT */}
          <article id="why-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Visit Khayer Lake?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Spectacular Views of Annapurna South, Dhaulagiri, and Nilgiri</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The mountain panorama from the Khopra Ridge area — and especially from the approaches to Khayer Lake — is extraordinary. Annapurna South dominates the view directly above, its south face rising in a wall of ice and rock that feels impossibly close. Dhaulagiri, the world&apos;s seventh-highest mountain, fills the western horizon. Nilgiri&apos;s triple summits appear to the north. Machhapuchhre (Fishtail) rises behind you to the south.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">The final stretch from Khopra Ridge to the lake takes you above the treeline and into wide-open alpine terrain where the full scale of the Himalayas becomes visible in every direction. Clear mornings offer photography that rivals anything available on the more crowded Annapurna routes.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">A Sacred Pilgrimage Destination</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Khayer Lake is not simply a beautiful alpine lake. It is a place of deep religious meaning for the Magar, Hindu, and Buddhist communities of the surrounding region. The shrine of Khayer Baraha sits at the water&apos;s edge, and the lake itself is considered sacred — a site where rituals carry particular spiritual power.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">For trekkers, this adds a dimension to the visit that is genuinely difficult to replicate elsewhere. Arriving at Khayer Lake is not just about completing a physical challenge or reaching an altitude target. It is about stepping into a place that has held meaning for people long before modern trekking began.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">One of Nepal&apos;s Best Off-the-Beaten-Path Treks</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Khopra Ridge Trek and its culmination at Khayer Lake represent the Annapurna region&apos;s best answer to overcrowding on the main trails. While the Poon Hill loop sees tens of thousands of trekkers every season, the Khopra Danda route remains quiet, community-managed, and distinctly local.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">The network of community lodges along the trail — owned and operated by Magar villages rather than outside investors — means that your trek fees go directly into local schools, health posts, and village infrastructure. This is responsible trekking in a very real and tangible sense.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Wildlife, Forests, and Alpine Landscapes</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The lower sections of the Khayer Lake route pass through some of the finest rhododendron forests in Nepal. In spring, the hillsides above Ghandruk and Tadapani turn red and pink as the trees come into full bloom — a spectacle that makes the lower elevation stages as rewarding as the high-altitude sections.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">Higher up, beyond the treeline, the trail crosses broad alpine meadows grazed by yaks in the warmer months. The area supports populations of Himalayan tahr, monal pheasant (Nepal&apos;s national bird), and a range of smaller highland species. The contrast between the dense forest below and the open alpine terrain above gives the trek a satisfying variety of landscape that sustains interest across every day of walking.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Khayer Lake and How Do You Reach It?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Getting to Pokhara</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Pokhara is the gateway city for the Khayer Lake trek. It is easily reached from Kathmandu by either a short domestic flight (approximately 25 minutes) or an overland journey by tourist bus or private vehicle (roughly 6 to 7 hours depending on road conditions).
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Most trekkers flying internationally arrive in Kathmandu first and then connect to Pokhara either immediately or after a day of acclimatisation and preparation. Pokhara itself is a pleasant city with good accommodation, gear shops, and trek preparation facilities — a practical and enjoyable place to spend a night or two before the trek begins.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Pokhara to Ghandruk</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">From Pokhara, the trek typically begins with a drive to Kimche or Nayapul, followed by a hike up to Ghandruk — one of Nepal&apos;s most celebrated Gurung villages and a well-established trekking hub. Jeeps and local buses serve this route, and the drive takes approximately 1.5 to 2 hours depending on the trailhead used.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Ghandruk sits at around 1,940 metres and is a natural first-night destination for trekkers starting the Khopra Ridge route. The village has a solid selection of accommodation, several viewpoints, and an ACAP information centre where permits can be checked on entry to the conservation area.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Khayer Lake Trek Route Overview</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2 font-medium">The general trekking route from Ghandruk to Khayer Lake follows the ridge trail northeast and upward through a sequence of forested ridgelines and small mountain communities. The key staging points are:
                </p>
                <div className="p-5 bg-stone-100 rounded-3xl border border-stone-200 mt-4 text-center text-sm font-extrabold text-emerald-800 tracking-wider">Ghandruk &rarr; Tadapani &rarr; Dobato &rarr; Chistibung &rarr; Bayeli Kharka &rarr; Khopra Ridge &rarr; Khayer Lake
                </div>
                <p className="text-stone-600 leading-relaxed text-sm mt-4">The route gains significant altitude progressively, allowing the body to adjust before the final push to the lake. Most trekkers spend their penultimate night at Khopra Ridge (3,660m) before making the day hike up to Khayer Lake (4,660m) and returning to Khopra Ridge the same afternoon.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ROUTE EXPLAINED */}
          <article id="route-explained" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Trek Route Explained Day by Day
            </h2>

            <div className="space-y-8">
              {[
                {
                  day: "Stage 1",
                  title: "Ghandruk to Tadapani",
                  elev: "2,620m",
                  desc: "This first major stage climbs steadily through rhododendron and oak forest, gaining around 1,000 metres of elevation over a trail that takes approximately 4 to 5 hours. Tadapani serves as a classic mountain viewpoint — on clear mornings, Annapurna South fills the sky directly above the village rooftops. The forest section between Ghandruk and Tadapani is particularly beautiful in spring. The rhododendrons can reach tree height here, and the combination of dense canopy and mountain glimpses makes for exceptional walking. This stage is also where you begin to leave the more heavily trafficked Ghorepani–Poon Hill trail behind and enter the quieter Khopra corridor."
                },
                {
                  day: "Stage 2",
                  title: "Tadapani to Dobato",
                  elev: "3,400m",
                  desc: "Continuing northeast from Tadapani, the trail climbs further through thinning forest to the ridgeline settlement of Dobato, sitting at approximately 3,400 metres. This stage takes around 4 to 5 hours and begins the true high-altitude phase of the trek. Dobato is a small cluster of lodges set on an exposed ridge with wide views back across the Annapurna foothills and south toward the plains of the Pokhara valley. At this elevation, temperatures drop noticeably at night, and the sense of the high Himalayas begins to assert itself fully."
                },
                {
                  day: "Stage 3",
                  title: "Dobato to Chistibung",
                  elev: "3,600m",
                  desc: "The trail from Dobato to Chistibung continues along the ridge, passing through changing terrain as the forest gives way progressively to scrub and open ground. Chistibung sits at around 3,600 metres and is one of the community lodge nodes managed by local Magar villages. This stage takes roughly 3 to 4 hours. The lodges at Chistibung are simple but comfortable, run by local families whose warm hospitality is a consistent highlight. The village itself is small, but the views from the surrounding area — particularly toward Annapurna South and Machhapuchhre — are excellent."
                },
                {
                  day: "Stage 4",
                  title: "Chistibung to Khopra Ridge",
                  elev: "3,660m",
                  desc: "From Chistibung, the trail climbs through Bayeli Kharka — a high-altitude grazing meadow that signals the transition into true alpine terrain — before arriving at Khopra Ridge (Khopra Danda) at 3,660 metres. This is the main base for the Khayer Lake day hike. Khopra Ridge has a cluster of community lodges run by Swanta village, one of the Magar communities that pioneered the community-owned ecotourism model in this area. The views from the ridge are among the finest on the entire trek — a sweep of Himalayan giants from Dhaulagiri in the west to Annapurna South directly above, with Machhapuchhre rising behind you to the south. Most trekkers spend at least one full night here before attempting the lake hike, giving the body time to adjust."
                },
                {
                  day: "Stage 5",
                  title: "Khopra Ridge to Khayer Lake (Day Hike)",
                  elev: "4,660m",
                  desc: "The day hike from Khopra Ridge to Khayer Lake is the trek&apos;s most demanding and most rewarding stretch. Trekkers leave early — typically by 5:30 AM — carrying a daypack with water, snacks, extra warm layers, and rain gear. The trail climbs steeply from the ridge, gaining 1,000 metres of altitude over approximately 3 to 4 hours. The terrain is rocky and exposed, with sections of loose scree and — depending on the season — patches of ice or snow. There are no teahouses, no shops, and no shelter between Khopra Ridge and the lake, which is why a guide is strongly recommended. The arrival at Khayer Lake is genuinely emotional. After hours of steep climbing, the lake appears quietly — its dark water set against a bowl of rock and snow, the little shrine of Khayer Baraha sitting at the shoreline, and the south face of Annapurna South looming immediately above. The descent returns to Khopra Ridge in 2 to 3 hours, completing a round trip of 7 to 8 hours."
                }
              ].map((stage, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 relative pl-8 border-l border-emerald-500/30 ml-4 pb-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-stone-50 text-emerald-800 font-black text-xs shadow-sm">
                    {idx + 1}
                  </span>
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2 mb-3">
                      <h4 className="font-extrabold text-stone-950 text-base">{stage.day}: {stage.title}</h4>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-600/10">
                        {stage.elev}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 7: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Recommended Khayer Lake Trek Itineraries
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Depending on your available timeframe and physical fitness levels, choose between the rapid 7-day loop or our highly-recommended 9-day balanced acclimatisation itinerary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Shortened Option</span>
                <h4 className="font-bold text-stone-950 mt-1 text-lg">7-Day Khayer Lake Trek</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">A 7-day itinerary is the minimum realistic option for trekkers with limited time. It moves at a steady pace and allows for the Khayer Lake day hike but does not include significant rest days. Suitable for fit trekkers with no significant altitude complications.
                </p>
                <div className="mt-4 space-y-2 border-t border-stone-100 pt-3">
                  {[
                    { d: "Day 1", path: "Pokhara to Ghandruk (1,940m)" },
                    { d: "Day 2", path: "Ghandruk to Tadapani (2,620m)" },
                    { d: "Day 3", path: "Tadapani to Dobato (3,400m)" },
                    { d: "Day 4", path: "Dobato to Khopra Ridge (3,660m)" },
                    { d: "Day 5", path: "Khopra Ridge to Khayer Lake and back (4,660m)" },
                    { d: "Day 6", path: "Khopra Ridge to Ghandruk (1,940m)" },
                    { d: "Day 7", path: "Ghandruk to Pokhara" }
                  ].map((dayItem, dIdx) => (
                    <div key={dIdx} className="flex justify-between items-center text-xs">
                      <span className="font-bold text-stone-400">{dayItem.d}</span>
                      <span className="font-semibold text-stone-700 text-right">{dayItem.path}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:shadow-md transition duration-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">Highly Recommended</span>
                <h4 className="font-bold text-stone-950 mt-1 text-lg">9-Day Khopra Ridge and Khayer Lake Trek</h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">The 9-day itinerary is the one we recommend most frequently. It adds a proper acclimatisation day at Khopra Ridge, allows slower trekking days between stages, and significantly reduces altitude risks, making the overall experience far more enjoyable.
                </p>
                <div className="mt-4 space-y-2 border-t border-emerald-500/10 pt-3">
                  {[
                    { d: "Day 1", path: "Pokhara to Ghandruk (1,940m)" },
                    { d: "Day 2", path: "Ghandruk to Tadapani (2,620m)" },
                    { d: "Day 3", path: "Tadapani to Dobato (3,400m)" },
                    { d: "Day 4", path: "Dobato to Chistibung (3,600m)" },
                    { d: "Day 5", path: "Chistibung to Khopra Ridge (3,660m)" },
                    { d: "Day 6", path: "Acclimatisation day at Khopra Ridge (3,660m)" },
                    { d: "Day 7", path: "Khopra Ridge to Khayer Lake and back (4,660m)" },
                    { d: "Day 8", path: "Khopra Ridge to Tadapani (2,620m)" },
                    { d: "Day 9", path: "Tadapani to Ghandruk to Pokhara" }
                  ].map((dayItem, dIdx) => (
                    <div key={dIdx} className="flex justify-between items-center text-xs">
                      <span className="font-bold text-emerald-600">{dayItem.d}</span>
                      <span className="font-semibold text-stone-700 text-right">{dayItem.path}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-6">
              <h3 className="text-lg font-bold text-stone-950 mb-3">Extended Trek Variations</h3>
              <ul className="space-y-3 text-xs text-stone-600">
                <li>
                  <strong>Poon Hill Extension:</strong>Many trekkers combine the Khopra Ridge &amp; Khayer Lake trek with a loop through Ghorepani and Poon Hill. This creates a 10 to 12-day circuit that covers two of the region&apos;s finest viewpoints in a single continuous route.
                </li>
                <li>
                  <strong>Mohare Danda Offbeat Trek:</strong>The Mohare Danda ridge — another community-managed trail — can be accessed from the Muldai area and combined with Khopra Ridge for a longer and more remote off-the-beaten-path experience.
                </li>
                <li>
                  <strong>Full Annapurna Foothills Circuit:</strong>For trekkers with two weeks, the full network of community trails connecting Ghandruk, Tadapani, Khopra, Muldai, and Mohare Danda can be walked as a continuous loop.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <ElevationProfile />
            </div>
          </article>

          {/* SECTION 8: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Difficult Is the Khayer Lake Trek?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Physical Fitness Requirements</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Khayer Lake trek is rated moderate to challenging. It does not require technical mountaineering skills or prior Himalayan experience, but it does demand a reasonable level of physical fitness and mental readiness for consecutive days of uphill hiking. Trekkers who exercise regularly will find the daily stages manageable.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Daily Walking Hours</h4>
                <p className="text-xs text-stone-500 leading-relaxed">On most days of the trek, expect to walk between 4 and 6 hours. The Khayer Lake day hike is the longest and most demanding single day, requiring 7 to 8 hours of walking with no teahouse stops along the route. Trekkers should start mornings early to make the most of clear weather.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">The Challenge of the Khayer Lake Day Hike</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">The hike from Khopra Ridge to Khayer Lake is a serious undertaking. The elevation gain of 1,000 metres at altitudes between 3,660m and 4,660m means the trail is steep and the air noticeably thin. The path is rocky, can be icy or snow-covered depending on the season, and has no shelter from wind or weather once you leave the ridge. Starting very early — before sunrise — is strongly recommended.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Is the Trek Suitable for Beginners?</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">The Khayer Lake trek is not ideal for first-time trekkers with no hiking experience. However, it is absolutely achievable for beginners who prepare properly, travel with a knowledgeable guide, and allow enough days for comfortable pacing. Trekkers who pace well and listen to their guide will have a rewarding experience.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: ALTITUDE & SAFETY */}
          <article id="altitude-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Altitude, Acclimatisation, and Safety
            </h2>

            {/* AMS WARNING CALLOUT BOX */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5"></span>
                <div>
                  <h4 className="font-black text-amber-950 text-sm tracking-wide uppercase">Understanding Altitude Risks at 4,660m</h4>
                  <p className="mt-2 text-xs text-stone-700 leading-relaxed font-semibold">At 4,660 metres, the atmosphere above Khayer Lake contains approximately 57% of the oxygen available at sea level. The body responds to this reduction with a range of symptoms collectively known as Acute Mountain Sickness (AMS).
                  </p>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">Mild AMS symptoms include headache, nausea, dizziness, fatigue, and disrupted sleep. These are common at high altitude and manageable with rest and hydration. More severe forms — High Altitude Pulmonary Oedema (HAPE) or High Altitude Cerebral Oedema (HACE) — are medical emergencies requiring immediate descent.
                  </p>
                  <p className="mt-2 text-xs text-stone-700 font-bold">Never ascend to sleep at a higher altitude if you are experiencing AMS symptoms. Rest, hydrate, and descend if symptoms worsen.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Acclimatising at Khopra Ridge</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Our recommended 9-day itinerary includes a full acclimatisation day at Khopra Ridge (3,660m) before attempting the Khayer Lake day hike. This day is the most important safety investment in the entire trek.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">During the acclimatisation day, we recommend short walks to higher elevations (if you feel well) and early evening return to the lodge. Drink warm garlic soup and plenty of water. Avoid alcohol. Sleep as well as you can. If you wake with a headache that does not clear, rest further before attempting the lake.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Safety Tips for Trekking to Khayer Lake</h4>
                <ul className="space-y-2 text-xs text-stone-500 leading-relaxed mt-2 list-disc pl-5">
                  <li><strong>Start early:</strong>Leave Khopra Ridge by 5:30 AM at the latest to beat afternoon weather changes.</li>
                  <li><strong>Hire a guide:</strong>The trail to the lake is unmarked in sections and can be obscured by snow. A local guide is essential.</li>
                  <li><strong>Layer up:</strong>Temperatures at Khayer Lake can drop below freezing. Pack a windproof outer shell, thermal base layers, warm gloves, and a hat.</li>
                  <li><strong>Stay hydrated:</strong>Dehydration accelerates altitude symptoms. Drink steadily throughout the hike.</li>
                  <li><strong>Know when to turn back:</strong>If worsening symptoms develop, the correct decision is immediate descent. No lake view is worth a medical emergency.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Khayer Lake
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (March to May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Spring is one of the two peak trekking seasons and arguably the most visually spectacular. The rhododendron forests between Ghandruk and Tadapani burst into color in March and April. Higher up, snow from winter may still cover sections in March, but by April conditions are typically excellent. Skies are often clear in the early morning. May brings slightly warmer temperatures and the beginning of pre-monsoon cloud, but the first weeks of the month remain very trekable.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (September to November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Autumn is the most popular and most reliable trekking season in Nepal. Following the monsoon rains, the Himalayas emerge washed clear, vegetation is lush and green, and skies are exceptionally clear for extended periods. October in particular offers the finest mountain views of the entire year. The air is crisp, temperatures are comfortable at lower elevations, and cold but manageable at Khopra Ridge.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter (December to February)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Winter trekking on the Khopra Ridge route is possible but demanding. Temperatures at Khopra Ridge and above drop sharply — nights can reach -10°C or colder — and snow covers the upper trail for much of December through February. The Khayer Lake day hike becomes significantly more challenging in winter, and some years the trail is impassable without mountaineering equipment.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Monsoon (June to August)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The monsoon season brings heavy rainfall to the Annapurna region from roughly mid-June through early September. Trails become muddy and slippery, leeches are common at lower elevations, and cloud frequently obscures the mountain views. The significant exception is Janai Purnima in August, when hundreds of local pilgrims ascend to Khayer Lake.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: WEATHER & CONDITIONS */}
          <article id="weather-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Weather and Trail Conditions
            </h2>

            {/* Weather overview table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-hidden">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Monthly Weather &amp; Trail Condition Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Month</th>
                      <th className="py-3 px-4 font-bold">Temp Range (Khopra 3,660m)</th>
                      <th className="py-3 px-4 font-bold">Trail Conditions</th>
                      <th className="py-3 px-4 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { m: "January", t: "-8°C to 4°C", c: "Heavy snow possible", n: "Cold, quiet, challenging" },
                      { m: "February", t: "-6°C to 6°C", c: "Snow likely", n: "Cold, fewer trekkers" },
                      { m: "March", t: "-2°C to 10°C", c: "Mixed conditions", n: "Rhododendrons begin" },
                      { m: "April", t: "2°C to 14°C", c: "Good", n: "Peak rhododendron season" },
                      { m: "May", t: "5°C to 16°C", c: "Good to pre-monsoon", n: "Warm, some cloud" },
                      { m: "June", t: "8°C to 14°C", c: "Wet", n: "Monsoon begins" },
                      { m: "July", t: "9°C to 15°C", c: "Very wet", n: "Janai Purnima pilgrimage" },
                      { m: "August", t: "9°C to 15°C", c: "Very wet", n: "Full moon pilgrimage" },
                      { m: "September", t: "6°C to 14°C", c: "Improving", n: "Post-monsoon clearing" },
                      { m: "October", t: "2°C to 12°C", c: "Excellent", n: "Best month overall" },
                      { m: "November", t: "-2°C to 8°C", c: "Good to cold", n: "Late-season, clear skies" },
                      { m: "December", t: "-6°C to 4°C", c: "Snow possible", n: "Cold, quiet" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-900">{row.m}</td>
                        <td className="py-3 px-4 text-stone-600 font-semibold">{row.t}</td>
                        <td className="py-3 px-4 text-stone-500">{row.c}</td>
                        <td className="py-3 px-4 text-stone-500">{row.n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Snow, Rain, and Visibility Conditions</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">At the elevation of Khayer Lake (4,660m), snow can appear at any time of year, even in summer months following cold fronts. In winter, the lake area may be under a metre or more of snow for weeks at a time.
              </p>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Afternoon cloud is a year-round feature of the Himalayan weather pattern. Clear mornings are the norm in autumn and spring, but cloud typically builds from late morning onward. This is why early starts are essential — both for safety and for views. Trekkers who leave Khopra Ridge before 6 AM will almost always reach the lake in good visibility; those who leave mid-morning may find the peaks obscured before they arrive.
              </p>
            </div>
          </article>

          {/* SECTION 12: ACCOMMODATION & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation and Food on the Khayer Lake Trek
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Community Lodges &amp; Teahouses</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The Khopra Ridge Trek uses a network of community lodges rather than the standard teahouse model found on the main Annapurna routes. These lodges are owned collectively by Magar villages — Ghandruk, Swanta, and others along the route — and the proceeds fund local schools, health clinics, and infrastructure. Rooms are clean, simple, and warm, offering twin beds and shared toilets.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Food Available on the Trail</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Trail food is nutritious, locally sourced, and genuinely good. The standard Nepali Dal Bhat (rice, lentil soup, curry, pickles) is available at every lodge and remains the best meal on the trail. Menus at lower elevations also include pasta, noodle soups, pancakes, eggs, and momos (Nepali dumplings). Garlic soup is worth ordering regularly at altitude.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Facilities and Connectivity</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Solar charging for devices is available at most lodges. Carry a power bank for the Khayer Lake day hike, as there are no charging facilities between Khopra Ridge and the lake. Boiled or filtered water is available at all lodges. Carry at least 2 litres for the lake hike. Hot bucket showers are available for a small fee. Wifi is limited to Ghandruk and Tadapani.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 13: COST BREAKDOWN */}
          <article id="cost-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Trek Cost Breakdown
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Independent Cost Table */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-stone-950 mb-4">Independent Trek Costs (per person/day)</h3>
                <div className="space-y-3">
                  {[
                    { label: "Accommodation (community lodge)", value: "$5–$10 per night" },
                    { label: "Meals (3 meals per day)", value: "$10–$15 per day" },
                    { label: "Bottled / boiled water", value: "$2–$4 per day" },
                    { label: "Total daily estimate", value: "$17–$29 per day" }
                  ].map((costItem, cIdx) => (
                    <div key={cIdx} className="flex justify-between items-center text-xs py-2 border-b border-stone-100">
                      <span className="font-bold text-stone-500">{costItem.label}</span>
                      <span className="font-black text-stone-950 text-right">{costItem.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-400 mt-4 leading-relaxed">For a 9-day trek, total independent accommodation and food costs typically run between $150 and $260 USD, excluding permits and transport.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 space-y-4">
                <div>
                  <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Guided Trek Cost</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">Hiring a local guide and porter is the recommended approach for Khayer Lake, particularly for the high-altitude day hike. A guide typically costs $25–35 USD per day, and a porter $18–25 USD per day.
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">Organised trekking packages — which include guide, porter, accommodation, meals, permits, and transport from Pokhara — typically run from $800 to $1,400 USD for a 9-day trek, depending on group size.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wide">Budgeting Tips</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600 mt-1">
                    <li>Book community lodges in advance during peak season (October, April) as capacity is limited at higher elevations.</li>
                    <li>Carry sufficient Nepali rupees in cash. ATMs are not available on the trek route.</li>
                    <li>Tips for guides and porters are customary. A fair guideline is 10–15% of the total trek cost.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 14: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permits Required for the Khayer Lake Trek
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Annapurna Conservation Area Permit (ACAP)</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">All trekkers entering the Annapurna Conservation Area — which includes the entire Khopra Ridge and Khayer Lake route — are required to hold a valid ACAP permit. This permit funds conservation work, trail maintenance, and community development within the protected area.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The current ACAP fee for international trekkers is NPR 3,000 (approximately $22–25 USD). The permit can be obtained at the Nepal Tourism Board offices in Kathmandu or Pokhara, or at the ACAP checkpost in Birethanti near the trek start. You will need to show your passport and a passport-sized photograph.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Current Trekking Regulations</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">In addition to the ACAP permit, trekkers are required to carry a valid TIMS card (Trekkers&apos; Information Management System) card for most Annapurna region routes. Check current requirements with your trekking agency or the Nepal Tourism Board before departure, as regulations and fees are periodically updated.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">All trekkers should register their permit at checkposts along the route. Keep your permit accessible throughout the trek, as it will be checked at multiple points.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 15: SACRED SIGNIFICANCE */}
          <article id="sacred-significance" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The Sacred Significance of Khayer Lake
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">The Legend of Khayer Baraha</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">At the shoreline of Khayer Lake stands the ancient stone shrine of Khayer Baraha — a manifestation of the goddess Baraha, one of the sacred forms of the divine feminine in both Hindu and certain Buddhist traditions of Nepal.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2 font-medium">Local belief holds that Khayer Baraha is a powerful and protective goddess who presides over the lake and the surrounding mountains. She is understood to be an emanation of cosmic energy rooted in the earth and water, and the lake itself is considered her sacred dwelling.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Janai Purnima Pilgrimage</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Once a year, during the full moon of Janai Purnima (late July or August), hundreds of pilgrims make the ascent to Khayer Lake. Among those who make the pilgrimage are couples praying to Goddess Baraha for the blessing of children.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2 font-medium">The belief that bathing in or receiving the water of Khayer Lake during Janai Purnima can grant fertility is deeply held and draws devotees year after year despite the physical challenge of the ascent.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base">Religious Importance</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">While Khayer Lake is primarily venerated within Hindu tradition through the Baraha deity, it carries significance in Buddhist traditions as well. The Annapurna region has a long history of religious overlap and coexistence, and natural features are often venerated across both traditions.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">For trekkers, respect is key: move clockwise around the shrine, do not enter the water, do not disturb offerings, and speak quietly.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 16: PACKING LIST */}
          <article id="packing-list" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Essential Packing List for the Khayer Lake Trek
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Clothing (High Altitudes)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The single most important principle is layering. Base layer (moisture-wicking merino top/bottom), Mid layer (fleece or down jacket for warmth), Outer layer (waterproof and windproof shell jacket/trousers). Also pack warm hat, neck gaiter, gloves, trekking trousers, and sun hat.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Gear &amp; Equipment</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Broken-in trekking boots with ankle support, trekking poles, daypack (20–25 litres) for the lake day hike, headlamp with spare batteries (essential for 5:30 AM starts), UV-protection sunglasses, SPF 50+ sunscreen, 2L water bottles/bladder, and purification tablets.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Health &amp; Safety</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Personal first aid kit (blister care, pain relief, rehydration salts), Diamox (acetazolamide) — consult your doctor, hand sanitiser, toilet paper, and comprehensive travel insurance documentation covering high-altitude trekking and emergency helicopter evacuation.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 17: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Practical Trekking Tips for First-Time Visitors
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-950 text-base">Training Before the Trek</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">The most common mistake trekkers make is arriving in Nepal without adequate preparation. Consistent aerobic exercise (running, hiking with a loaded pack, stair climbing, cycling) for 6 to 8 weeks before departure makes a real difference. If you can complete a day hike of 1,000 metres elevation gain in good shape before you leave home, you will handle the route comfortably.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-950 text-base">Responsible Trekking Practices</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">The Annapurna Conservation Area depends on responsible visitor behaviour. Carry all plastic waste out of the trek — do not leave wrappers, bottles, or packaging. Use refillable water bottles. Stay on marked trails to prevent erosion. Support the community lodges that sustain the local economy.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-950 text-base">Respecting Local Culture and Traditions</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">Dress modestly when in villages. Remove your shoes before entering lodges and homes. Ask before photographing people. Learn a few words of Nepali — namaste (greeting), dhanyabad (thank you). At Khayer Lake, conduct yourself respectfully as you would at any place of worship.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-950 text-base">Hiring a Guide vs Trekking Independently</h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">For the lower sections of the route, an experienced trekker may feel comfortable walking with a map. For the Khayer Lake day hike, a local guide is strongly recommended regardless of experience level. The trail above Khopra Ridge is unmarked in sections, affected by seasonal snow, and genuinely remote. A guide provides safety, route knowledge, altitude monitoring, and cultural context.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 18: IS IT WORTH IT */}
          <article id="worth-visiting" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is Khayer Lake Worth Visiting?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Who Will Love This Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Khayer Lake is ideal for trekkers who want a meaningful Himalayan experience rather than just a mountain checkbox. If you value solitude over social teahouse culture, authentic community interaction over tourist infrastructure, and a destination with genuine spiritual depth alongside natural beauty, then Khayer Lake will exceed your expectations.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Who May Prefer Other Annapurna Treks</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Trekkers with limited time (fewer than 7 days) would be better served by the Poon Hill loop. Those who require reliable WiFi, Western food, or frequent medical facilities may find the Khopra Ridge corridor less comfortable. Trekkers with serious altitude anxiety or cardiovascular concerns should consult a physician before committing.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Final Verdict</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-2">Khayer Lake is worth every step of the climb. In our experience of guiding trekkers through the Annapurna region, few moments compare to standing at the shore of the lake on a clear morning, with Annapurna South rising directly above and the little shrine of Khayer Baraha catching the early light. The lake has a quality that photographs struggle to capture — a stillness and a remoteness that makes the effort of reaching it feel entirely right. If you are considering the Khopra Ridge Trek and wondering whether to include the Khayer Lake extension, the answer is always yes.
              </p>
            </div>
          </article>

          {/* SECTION 19: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Khayer Lake
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Khayer Lake located?",
                  a: "Khayer Lake is located within the Annapurna Conservation Area in Gandaki Province, Nepal. It sits on the high ridge above Khopra Danda (Khopra Ridge), south of Annapurna South, at approximately 4,660 metres above sea level. The nearest major city is Pokhara, roughly 35 to 40 kilometres to the southwest."
                },
                {
                  q: "How high is Khayer Lake?",
                  a: "Khayer Lake sits at an elevation of 4,660 metres (approximately 15,289 feet) above sea level. This places it firmly in the high-altitude zone, where oxygen levels are roughly 57% of those at sea level."
                },
                {
                  q: "How difficult is the Khayer Lake trek?",
                  a: "The overall trek is rated moderate to challenging. The daily stages between Ghandruk and Khopra Ridge are manageable for reasonably fit trekkers. The Khayer Lake day hike — from Khopra Ridge (3,660m) to the lake (4,660m) and back — is the most demanding section, with steep terrain, high altitude, and 7 to 8 hours of walking with no teahouse facilities en route."
                },
                {
                  q: "How many days does the trek take?",
                  a: "A realistic minimum is 7 days. The recommended duration is 9 days, which allows for comfortable pacing, an acclimatisation day at Khopra Ridge, and a safer approach to the high-altitude day hike. Extended options combining the route with Poon Hill or Mohare Danda run to 10 to 14 days."
                },
                {
                  q: "What is the best time to visit Khayer Lake?",
                  a: "The best times to trek to Khayer Lake are autumn (September to November) and spring (March to May). October offers the clearest skies, best mountain views, and ideal trail conditions. April is particularly beautiful for the rhododendron season in the lower forest sections. Winter is possible for experienced cold-weather trekkers; monsoon season is not generally recommended."
                },
                {
                  q: "Do I need a guide for the Khayer Lake trek?",
                  a: "A guide is not legally mandatory on the Khopra Ridge route, but one is very strongly recommended — particularly for the Khayer Lake day hike. The upper trail is unmarked in sections, can be snow-covered, and is genuinely remote. A local guide provides route safety, altitude management, cultural context, and emergency decision-making."
                },
                {
                  q: "How much does the Khayer Lake trek cost?",
                  a: "Independent trekkers should budget approximately $17–29 USD per day for accommodation and food on the trail, plus permit fees. A guided 9-day all-inclusive package typically costs $800 to $1,400 USD depending on group size. The ACAP permit fee for international trekkers is approximately $22–25 USD."
                },
                {
                  q: "Can beginners trek to Khayer Lake?",
                  a: "Khayer Lake is achievable for beginners who prepare adequately, allow enough days for proper pacing, and travel with a guide. It is not recommended for people with no hiking experience whatsoever. A focused aerobic fitness programme in the months before departure makes a significant difference."
                },
                {
                  q: "What permits are required for Khayer Lake?",
                  a: "All trekkers require an Annapurna Conservation Area Permit (ACAP), which costs approximately NPR 3,000 ($22–25 USD) for international visitors. A TIMS card is also generally required. Both can be obtained at Nepal Tourism Board offices in Kathmandu or Pokhara."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "Yes. Khayer Lake is one of the most rewarding high-altitude destinations in the Annapurna region, combining exceptional mountain scenery, genuine remoteness, deep spiritual significance, and a community-run trekking experience that benefits local Magar villages directly."
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

          {/* SECTION 20: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Khayer Lake does not compete for attention the way the most famous Himalayan destinations do. It does not appear on most bucket lists. It does not have a hashtag that trends in October. What it has instead is something considerably more valuable: authenticity.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">From the first forested ridges above Ghandruk to the final steep climb above Khopra, every section of this trek earns its place. The landscapes change, the altitude builds, the villages become quieter and smaller, and eventually you arrive at a cold dark lake at the foot of Annapurna South — a place where pilgrims have come for generations, where the silence is complete, and where the effort of getting there is the whole point.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether you are a first-time trekker researching your first Himalayan adventure or an experienced trekker looking for the Annapurna region&apos;s finest alternative route, the Khopra Ridge Trek and Khayer Lake is one of the best decisions you can make. Start early. Go slowly. Bring warm layers. And when you reach the lake — rest a while before turning back.
            </p>
          </article>

          {/* SECTION 21: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Khopra Ridge &amp; Khayer Lake Trek With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Our team of experienced local guides has been leading treks to Khayer Lake for years. We handle every detail — permits, trail safety, acclimatisation pacing, community lodge bookings, and transport from Pokhara — so you can focus entirely on the experience.
              </p>
              <p className="text-emerald-400 font-bold text-xs">All accommodation profits fund Magar village schools, health clinics, and local infrastructure. When you trek with us, your journey gives back directly to the communities you walk through.
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This ultimate planner is curated by certified guides based in Kathmandu. We walk the Khopra circuit monthly to monitor trail degradation, water supplies, and teahouse conditions.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
