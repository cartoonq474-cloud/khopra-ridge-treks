import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/tours/khayer-lake-trek",
  },
  title: "Sacred Khayer Lake Pilgrimage Trek | Nepal Trek Guide",
  description: "Discover the Sacred Khayer Lake Pilgrimage Trek — a 9-day journey to Nepal's holy alpine lake at 4,660m beneath Annapurna South. Complete guide to route.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Spiritual &amp; Pilgrimage Himalayan Route
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Sacred Khayer Lake Pilgrimage Trek in Nepal
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">A 9-day journey to Nepal&apos;s holy alpine lake at 4,660m resting directly beneath the towering face of Annapurna South. Access deep spiritual heritage and unmatched ridge panoramas without the mainstream tourist crowds.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Lake Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Base of Annapurna South</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Style</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Community Loop</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Local cooperative run</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Duration</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">9 Days</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Pokhara to Pokhara</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Strenuous</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Prior altitude exp helpful</span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN CONTENT LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        
        {/* STICKY TOC SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Navigation
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Overview
              </a>
              <a href="#sacredness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Spiritual Heritage
              </a>
              <a href="#highlights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Highlights
              </a>
              <a href="#route-map" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route &amp; Trail Map
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Difficulty
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Go
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodges &amp; Food
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Required Permits
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Packing Checklist
              </a>
              <a href="#pricing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Cost &amp; Inclusions
              </a>
              <a href="#why-local" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek with Local Guides
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Customize
              </a>
            </div>
          </div>
        </aside>

        {/* EDITORIAL CONTENT */}
        <main className="lg:col-span-3 space-y-16">

          {/* OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <p className="text-stone-600 leading-relaxed text-base">There are Himalayan treks that take you through beautiful landscapes, and then there are treks that take you somewhere far more significant — places where the mountains, the water, and the spiritual world meet. The Sacred Khayer Lake Pilgrimage Trek is one of those journeys.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Sitting at 4,660 metres in the heart of the Annapurna Conservation Area, Khayer Lake rests directly beneath the towering south face of Annapurna South. For centuries, Hindu and Buddhist pilgrims have made the journey to these cold, clear waters. For modern trekkers, the route offers something increasingly rare in Nepal: a trail that is genuinely remote, dramatically scenic, and deeply meaningful.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This trek is most often completed as part of the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link> — a community-lodge circuit that threads through traditional villages, rhododendron forests, and high ridge paths with sweeping views of Dhaulagiri, Nilgiri, Tukuche Peak, and Baraha Shikhar. You do not share the trail with thousands of other hikers. You share it with pilgrims, local herders, and the mountains.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">If you are searching for a pilgrimage trek in Nepal that combines authentic Himalayan culture with world-class mountain scenery and far fewer crowds, this is the page to read in full before you plan.
            </p>

            <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-3xl flex items-center justify-between gap-4 mt-6">
              <p className="text-xs text-stone-600 font-medium">Ready to start planning? Our local guides based in Kathmandu run fully customizable Sacred Khayer Lake Trek packages.
              </p>
              <Link 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-sm transition whitespace-nowrap"
              >Customize Itinerary →
              </Link>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 mt-8">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Where Is Khayer Lake Located?</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Khayer Lake sits in Myagdi District, within the protected boundaries of the Annapurna Conservation Area (ACAP). The lake is positioned at approximately 4,660 metres above sea level, at the base of Annapurna South — one of the most dramatic mountain faces in the entire Annapurna region.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-3">The nearest large town is Pokhara, which serves as the starting and ending point for the trek. The trailhead is typically reached by a jeep or local bus from Pokhara, taking between two and four hours depending on road conditions and your chosen entry point.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mt-3">The lake itself is a high-altitude alpine body of water fed by glacial melt. In spring, the snowmelt keeps the water icy cold. In autumn, the lake often reflects the surrounding peaks on calm mornings — a view that leaves most trekkers speechless regardless of their religious background.
              </p>
            </div>

            {/* Quick stats table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 mt-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-950 mb-4">Sacred Khayer Lake Trek Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Duration", value: "9 Days" },
                  { label: "Maximum Altitude", value: "4,660 m (Khayer Lake)" },
                  { label: "Difficulty", value: "Strenuous" },
                  { label: "Start / End Point", value: "Pokhara" },
                  { label: "Trek Style", value: "Community Lodge Circuit" },
                  { label: "Best Seasons", value: "Spring (March–May), Autumn (September–November)" },
                  { label: "Required Permit", value: "Annapurna Conservation Area Permit (ACAP)" },
                  { label: "Trek Type", value: "Pilgrimage + Scenic Himalayan Trek" },
                  { label: "Daily Walking", value: "5–7 hours (varies by day)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-stone-100 text-sm">
                    <span className="font-bold text-stone-500">{item.label}</span>
                    <span className="font-black text-stone-950">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-6">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Why Travelers Choose This Trek</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Most trekkers who find their way to Khayer Lake are looking for the same thing: everything Nepal is famous for, without the crowds. The Annapurna Base Camp and Poon Hill treks are magnificent routes, but they attract thousands of visitors every season. The Khayer Lake route via Khopra Ridge carries far fewer trekkers. Trails feel open. Lodges feel personal. Villages feel lived-in rather than built for tourism.
              </p>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">What makes this route stand apart beyond the solitude is the combination of spiritual significance, ridge-line panoramas, and community-based accommodation. These three elements working together create a trekking experience that feels richer than a standard itinerary hike. You are walking a pilgrimage route, not just a trail.
              </p>
            </div>
          </article>

          {/* SACREDNESS */}
          <article id="sacredness" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Khayer Lake Is One of Nepal&apos;s Most Sacred Himalayan Lakes
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Khayer Lake is not simply a scenic alpine lake — it is a sacred site that holds deep religious importance for both Hindu and Buddhist communities across Nepal and beyond. Understanding this significance changes the way you experience the entire trek.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Hindu Religious Significance</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">For Hindu pilgrims, Khayer Lake is considered a holy tirtha — a crossing point between the earthly and divine realms. The lake is believed to be the abode of Baraha, a manifestation of the Hindu god Vishnu. Bathing in or making offerings at the lake is believed to cleanse sins and bring spiritual merit.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2 font-medium">During the full moon of Baisakh (April–May) and in Shrawan (July–August), pilgrims climb to the lake for puja ceremonies. Many walk barefoot, carrying flowers, rice, and bells.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Buddhist Spiritual Significance</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The lake holds deep meaning within Tibetan Buddhist traditions. High-altitude lakes in the Himalaya are regarded as mirrors of the sky — spaces where the natural world opens into spiritual clarity. Local Buddhist communities in Myagdi and Mustang have long regarded it as a place of meditation.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Buddhist practitioners seek out the lake for its absolute isolation. Mani stones and prayer flags are found on the approach trail, left by pilgrims who made the journey.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-bold text-stone-950 text-base mt-2">Local Beliefs &amp; Pilgrimage Rules</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">For the Swanta and Khopra Ridge village communities, Khayer Lake is an inseparable part of their cultural identity. Local beliefs hold that disrespectful behavior near the lake — littering, loud noise, or disregard for the site&apos;s sanctity — can bring weather hazards and misfortune.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2 font-medium">Trekkers are expected to treat the site with high respect: removing footwear before entering the immediate lakeside, keeping voices low, and carrying out all waste. For a deeper look at the legends behind the lake, see our guide to <Link href="/planning/khayer-lake-mythology-pilgrimage" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Khayer Lake pilgrimage traditions</Link>.
                </p>
              </div>
            </div>
          </article>

          {/* HIGHLIGHTS */}
          <article id="highlights" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Highlights of the Sacred Khayer Lake Trek
            </h2>
            
            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Khopra Ridge Panoramic Views</h4>
                <p className="mt-1">At approximately 3,660 metres, the ridge commands a panoramic sweep of Himalayan peaks that ranks among the finest viewpoints in all of Nepal. On a clear morning, see Annapurna South, Hiunchuli, Machhapuchhre, Nilgiri, Dhaulagiri, and Tukuche Peak simultaneously. Most trekkers spend at least one full day and night at the ridge before the pilgrimage day hike.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Annapurna South Close-Up Views</h4>
                <p className="mt-1">You are looking directly at the southern face of one of the Annapurna massif&apos;s major peaks from a position that very few trekking routes in the region offer. The scale and closeness of Annapurna South from Khopra Ridge and from the lake itself create a genuine sense of being deep inside the high Himalaya.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Dhaulagiri and Nilgiri Mountain Panorama</h4>
                <p className="mt-1">The ridge faces the Dhaulagiri range on the western horizon, creating a high-altitude wilderness panorama that includes Dhaulagiri I (8,167 m — the world&apos;s seventh-highest peak), Tukuche Peak, Baraha Shikhar, and Nilgiri North, Central, and South. Very few locations in Nepal bridge both mountain massifs simultaneously.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Peaceful Off-the-Beaten-Path Trails</h4>
                <p className="mt-1">The trails pass through a Nepal that many international trekkers never see. Villages are small, traditional, and quiet. The trail feels exploratory rather than managed, and the encounters with local communities along the way add real texture to the experience.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Authentic Community-Lodge Experience</h4>
                <p className="mt-1">Developed as a community-based trekking route, the lodges reflect that intention. These are family-run establishments where guesthouse owners prepare meals using local ingredients and share stories. Lodge proceeds go directly into village economies to fund schools and water systems.
                </p>
              </div>
            </div>
          </article>

          {/* ROUTE OVERVIEW */}
          <article id="route-map" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Route Overview and Trek Map
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-bold text-stone-900 text-base">Starting from Pokhara</h4>
                <p className="text-xs text-stone-600 leading-relaxed">All treks begin and end in Pokhara — Nepal&apos;s second-largest city and the gateway to the Annapurna region. From Pokhara, the drive to the trailhead takes approximately two to four hours depending on which entry point is used (Siwai or Nayapul). The drive passes through lower Annapurna foothills.
                </p>
                <h4 className="font-bold text-stone-900 text-base">Through Forests, Villages, and Ridge Trails</h4>
                <p className="text-xs text-stone-600 leading-relaxed">The early days move through sub-tropical forest and terraced farming communities, climbing into oak and rhododendron forests that bloom beautifully in spring. Traditional Gurung and Magar villages appear along the route, with <Link href="/nodes/swanta-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Swanta village</Link> a notable stop. Above the villages, the trail transitions to open moorland and high windswept ridges.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-stone-900 text-base">Khopra Ridge to Khayer Lake Day Hike</h4>
                <p className="text-xs text-stone-600 leading-relaxed">The summit experience is the day hike from Khopra Danda up to Khayer Lake at 4,660 metres. Guides recommend starting before sunrise (around 5:00 AM) to reach the lake during the clearest atmospheric conditions. The trail gains significant altitude, becoming rocky and exposed.
                </p>
                <h4 className="font-bold text-stone-900 text-base">Return Route Options</h4>
                <p className="text-xs text-stone-600 leading-relaxed">Most groups return via Swanta and climb back to rejoin the Ghorepani network. This allows for a different return through Ghorepani, adding the famous Poon Hill sunrise to the itinerary, adding one or two days to the loop but enhancing the view value.
                </p>
              </div>
            </div>
          </article>

          {/* ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Detailed 9-Day Sacred Khayer Lake Trek Itinerary
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  days: "Day 1-2",
                  title: "Kathmandu / Pokhara to Trailhead",
                  details: [
                    "Day 1: Arrive in Pokhara. Rest, acclimatize, collect permits, and meet your guide. Evening briefing covers route, safety, and altitude rules.",
                    "Day 2: Drive from Pokhara to the trailhead (approx 2–4 hours). Begin trekking through lower villages and farmland. Gentle first day of walking."
                  ]
                },
                {
                  days: "Day 3-5",
                  title: "Trek to Khopra Ridge",
                  details: [
                    "Day 3: Trek continues upward through mixed forest. Villages become smaller. Altitude gain is steady but manageable. (Overnight: Swanta Village or nearby lodge)",
                    "Day 4: A longer walking day through dense rhododendron forest and open ridge approaches. First dramatic close-up views of Annapurna South emerge. (Overnight: Community Lodge near Chhistibung)",
                    "Day 5: Arrive at Khopra Danda / Khopra Ridge camp (3,660m). Rest and acclimatize for the high-altitude lake day. Explore the ridge and photograph the Dhaulagiri panorama. (Overnight: Khopra Ridge Community Lodge)"
                  ]
                },
                {
                  days: "Day 6",
                  title: "Pilgrimage Hike to Khayer Lake (4,660m)",
                  details: [
                    <>Day 6: Early morning departure (5:00 AM) for the ascent to Khayer Lake. A demanding day of hiking with significant altitude gain. Allow 3–5 hours for the ascent. Take time to absorb the spiritual energy, participate respectfully in pilgrimage activities, and return to Khopra Ridge in the afternoon. (Overnight: Khopra Ridge Community Lodge) For a full breakdown of terrain and timing, see our dedicated <Link href="/planning/khayer-lake-day-hike" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Khayer Lake day hike</Link> guide.</>
                  ]
                },
                {
                  days: "Day 7-9",
                  title: "Return Trek and Drive Back",
                  details: [
                    "Day 7: Begin the descent from the ridge. Descend through forests and traditional villages. The body will welcome the descent. (Overnight: Swanta or mid-trail community lodge)",
                    "Day 8: Continue descent toward the lower trail. Walk through sub-tropical villages and terraced farms. (Overnight: Lower trail village)",
                    "Day 9: Complete the trek at the trailhead. Drive back to Pokhara (2–4 hours). Arrive in Pokhara in the afternoon. Celebrate and reflect on a life-changing pilgrimage."
                  ]
                }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                    <h3 className="font-extrabold text-stone-950 text-base">{sec.title}</h3>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/10">
                      {sec.days}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {sec.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-stone-600 leading-relaxed list-disc pl-5 ml-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          {/* DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Difficult Is the Khayer Lake Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">This is one of the most common and most important questions anyone planning this trek should ask honestly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-base">Physical Fitness Requirements</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The Khayer Lake Trek is rated strenuous. It involves multiple consecutive days of uphill walking at increasing altitude, with one high-altitude day that demands physical stamina. Trekkers should be able to walk 5–7 hours continuously before attempting this route. Regular cardio conditioning (hiking, running, cycling) in the months before departure is highly recommended. Not recommended as a first altitude trek.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-base">Daily Walking &amp; Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Expect 5 to 7 hours of active walking daily. The summit day to the lake may take longer depending on pace. Trail conditions vary: lower sections can be muddy, while higher sections become rocky and potentially icy or snow-covered. Trekking poles are strongly recommended, particularly for the lake approach and descent.
                </p>
              </div>
            </div>

            {/* AMS WARNING INFOBOX */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5"></span>
                <div>
                  <h4 className="font-black text-amber-950 text-sm tracking-wide uppercase">Altitude Challenges at 4,660m</h4>
                  <p className="mt-2 text-xs text-stone-700 leading-relaxed font-semibold">Khayer Lake sits at 4,660 metres — well above the threshold where Acute Mountain Sickness (AMS) commonly begins. Symptoms include persistent headache, nausea, dizziness, fatigue, and poor sleep. Our detailed breakdown of <Link href="/altitude/khayer-lake-altitude-risks" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Khayer Lake altitude risks</Link> covers warning signs and prevention steps specific to this ascent.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-stone-600 list-disc pl-5">
                    <li>Acclimatize properly: spend a full rest day at Khopra Ridge (3,660m) before attempting the lake ascent.</li>
                    <li>Communicate honestly: notify your guide of any symptoms immediately.</li>
                    <li>Descent protocol: if symptoms worsen, descent is the correct decision regardless of how close you are to the lake.</li>
                    <li>Drink at least 4 liters of water daily and consult a doctor about Diamox before travel.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <h4 className="font-bold text-stone-900 text-sm">Is This Trek Suitable for Beginners?</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">With honest preparation, motivated beginner trekkers with good fitness can complete this route successfully — but they should not underestimate it. A local guide is not optional on this route. For beginner trekkers especially, an experienced guide is the most important investment you can make in both safety and enjoyment.
              </p>
            </div>
          </article>

          {/* BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time for the Sacred Khayer Lake Pilgrimage Trek
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Spring — March to May</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">One of the two ideal trekking windows. Warming temperatures, rhododendron forests in peak bloom, and clear morning visibility. March and April offer the best combination of minimal snow at altitude. Pilgrimage season peaks during this period, offering chances to encounter local pilgrims.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Autumn — September to November</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Nepal&apos;s prime trekking window. The monsoon rains have cleared the atmosphere, visibility is exceptional, and temperatures are stable and comfortable. October is widely considered the best single month for sharp views. Nights are cold but manageable.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Winter — December to February</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Possible for experienced winter trekkers. Solitude is high, but temperatures drop significantly below freezing. Some community lodges operate on reduced hours, and the lake approach may require crampons or micro-spikes due to ice and packed snow.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Monsoon — June to August</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Heavy rainfall brings slippery trails, mud, leeches on lower sections, and persistent cloud cover obscuring view points. The pilgrimage experience is less accessible due to weather unpredictability. Least recommended season for trekking.
                </p>
              </div>
            </div>
          </article>

          {/* FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation, Food, and Facilities Along the Trail
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Lodges &amp; Teahouses</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Accommodation is provided by family-run lodges in villages along the route. Clean, warm, and welcoming. Shared bathrooms are typical. Blankets are provided, but a sleeping bag liner and full winter sleeping bag are recommended for comfort above 3,000 metres.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Meals &amp; Nutrition</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Dal bhat is the backbone of trail nutrition and is available at every lodge. Fried rice, noodle soup, pasta, eggs, and pancakes are widely available. Vegetarian options are consistently good, while meat is less reliable at higher elevations. Drink filter/boiled water.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Power &amp; Connectivity</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Solar power is the primary source. Charging devices is possible but may be limited in low-light conditions; a power bank is useful. Mobile signal varies significantly; expect to disconnect and embrace the digital detox.
                </p>
              </div>
            </div>
          </article>

          {/* PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permits Required for Khayer Lake Trek
            </h2>
            <div className="space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Annapurna Conservation Area Permit (ACAP)</h4>
              <p className="text-xs text-stone-600 leading-relaxed">The primary permit required for the Sacred Khayer Lake Pilgrimage Trek is the Annapurna Conservation Area Permit (ACAP). This permit covers entry into the Annapurna Conservation Area, which encompasses the entire Khopra Ridge and Khayer Lake route. ACAP permits are issued by the Nepal Tourism Board and can be obtained in Kathmandu (at the Tourism Board office in Pradarshani Marga) or in Pokhara. Two passport-sized photographs and your passport are required. Foreign nationals also typically need to obtain a TIMS card (Trekkers&apos; Information Management System) in addition to ACAP. Our complete <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-800">ACAP permit guide</Link> walks through the application steps, fees, and required documents.
              </p>
              <h4 className="font-bold text-stone-950 text-base">Current Permit Rules and Updates</h4>
              <p className="text-xs text-stone-600 leading-relaxed">Permit requirements and fees in Nepal are subject to periodic revision. Our guides monitor current permit regulations as part of our route management and will confirm the latest requirements when you inquire about booking. Permit checkpoints are positioned along the trail. Your guide will manage checkpoint documentation to ensure the process is smooth. Carrying your original passport is required at checkpoints.
              </p>
            </div>
          </article>

          {/* TRANSPORTATION */}
          <article id="transportation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Transportation and Trek Starting Point
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Kathmandu to Pokhara</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  <strong>By air:</strong>Flights take approximately 25–30 minutes, operating multiple times daily. Subject to weather cancellations.<br />
                  <strong>By road:</strong>Tourist buses take 6–8 hours depending on road conditions. comfortable and reasonably priced. Private vehicles offer more speed.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-950 text-base">Pokhara to the Trailhead</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">From Pokhara, the trailhead is reached by jeep, local bus, or private vehicle — typically a 2–4 hour drive depending on road conditions and the specific trailhead used (Siwai or Nayapul). Our guides arrange all trailhead transportation as part of the package.
                </p>
              </div>
            </div>
          </article>

          {/* PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Packing List for Khayer Lake Trek
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Clothing Layers</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Moisture-wicking base layers, mid-layer fleece or down jacket, waterproof/windproof outer shell, thermal underwear for altitude nights, trekking trousers (not jeans), warm hat, gloves, UV sunglasses, sun cap, and merino wool socks.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Trekking Gear</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Waterproof trekking boots with ankle support (break them in!), trekking poles, 30–40L daypack for the lake, 60–70L main pack/duffel, winter sleeping bag (rated to -5°C), headlamp with spare batteries, and a 2-liter water capacity system.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide border-b border-stone-100 pb-2 mb-3">Essentials &amp; Cash</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Passport original, ACAP/TIMS permits, travel insurance (with evacuation cover), cash in Nepalese Rupees, high-SPF sunscreen, lip balm, rehydration salts, hand sanitizer, and blister treatment kits.
                </p>
              </div>
            </div>
          </article>

          {/* COST / BOOKING */}
          <article id="pricing" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Trek Cost and Booking Information
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-emerald-50/50 border border-emerald-500/15 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-950 text-sm uppercase tracking-wide">What Is Included in a Guided Trek</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">Costs vary by group size, season, and add-ons — see our full <Link href="/planning/khopra-trek-cost" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Khopra trek cost breakdown</Link> for exact pricing tiers. Here&apos;s what&apos;s typically included in a guided package:
                </p>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>Local English-speaking guide for the full duration.</li>
                  <li>All accommodation in community lodges.</li>
                  <li>All meals on the trail (breakfast, lunch, and dinner).</li>
                  <li>ACAP and TIMS permit fees.</li>
                  <li>Ground transportation between Pokhara and the trailhead.</li>
                  <li>Porter services for your main luggage.</li>
                  <li>Comprehensive pre-trek briefing.</li>
                </ul>
              </div>
              <div className="bg-rose-50/40 border border-rose-500/10 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-950 text-sm uppercase tracking-wide">What Is Usually Excluded</h4>
                <ul className="mt-4 space-y-2 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                  <li>International flights to and from Nepal.</li>
                  <li>Domestic flights between Kathmandu and Pokhara.</li>
                  <li>Personal travel insurance (evacuation cover required).</li>
                  <li>Alcoholic beverages and trail snacks.</li>
                  <li>Personal trekking equipment.</li>
                  <li>Tips for guide and porter (recommended).</li>
                  <li>Costs from medical emergencies or early departure.</li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-6">
              <h4 className="font-bold text-stone-950 text-base">Private vs Group Trek Options</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-medium">
                <strong>Private treks</strong> offer maximum flexibility — departure dates chosen by you, pace set by your group, and itinerary customization options including adding Ghorepani and Poon Hill to the return. Trekkers wanting the extended loop can combine this pilgrimage with our <Link href="/tours/khopra-poon-hill-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Khopra Poon Hill trek</Link> itinerary. Private treks are ideal for families, couples, or small groups.<br /><br />
                <strong>Small group treks</strong> offer fixed departure dates, lower per-person costs, and a good option for solo trekkers who prefer company on the trail.
              </p>
            </div>
          </article>

          {/* WHY LOCAL GUIDES */}
          <article id="why-local" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Why Trek With Local Guides Based in Kathmandu
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">There is a meaningful difference between booking a trek through a large international agency and working with local guides who are based in Kathmandu, monitor the route actively, and have deep personal connections to the communities along the trail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wider">Trail &amp; Seasonal Updates</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Our guides maintain active knowledge of the route through regular trail checks. This means you receive current info about lodge status, trail conditions, snow coverage, and permit checkpoint updates.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wider">Cultural Connections</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Understanding why Khayer Lake is sacred, knowing how to behave respectfully, and communicating with lodge owners in their own language transforms the trek. Our guides explain religious practices with reverence.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm uppercase tracking-wider">Safety &amp; Customization</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Every guided trek includes comprehensive safety management — from altitude monitoring to emergency communication. We customize itineraries to match your fitness levels, pacing, and schedules.
                </p>
              </div>
            </div>
          </article>

          {/* FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About the Sacred Khayer Lake Trek
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is the altitude of Khayer Lake?",
                  a: "Khayer Lake sits at approximately 4,660 metres (15,289 feet) above sea level in the Annapurna Conservation Area of Nepal. It is one of the highest accessible lakes in the Annapurna region."
                },
                {
                  q: "Why is Khayer Lake considered sacred?",
                  a: "Khayer Lake is a holy site for both Hindu and Buddhist communities. In Hindu tradition, the lake is believed to be the dwelling place of Baraha, a manifestation of Vishnu. Pilgrims visit the lake for purification rituals and offerings. In Buddhist tradition, the lake is regarded as a place of meditation and spiritual significance."
                },
                {
                  q: "How difficult is the Khayer Lake Trek?",
                  a: "The trek is rated strenuous. It requires good physical fitness, experience with sustained uphill walking, and an honest awareness of high-altitude risks. The summit day to Khayer Lake at 4,660 m is particularly demanding and requires acclimatization days prior to the ascent."
                },
                {
                  q: "How many days are needed for the trek?",
                  a: "The standard itinerary is 9 days from Pokhara and back to Pokhara. This includes travel to and from the trailhead, community lodge nights along the route, rest and acclimatization at Khopra Ridge, the pilgrimage day hike to Khayer Lake, and the return descent."
                },
                {
                  q: "Is Khayer Lake part of the Khopra Ridge Trek?",
                  a: "Yes. Khayer Lake is the highest point on the Khopra Ridge Trek circuit. The trek to Khopra Ridge and the day hike to Khayer Lake are commonly combined as a single journey. Khopra Danda (Khopra Ridge camp) is where trekkers base themselves before the lake hike."
                },
                {
                  q: "What is the best time to visit Khayer Lake?",
                  a: "The best times are spring (March–May) and autumn (September–November). October is widely considered the optimal month for clear skies and comfortable temperatures. Spring is excellent for rhododendron blooms and pilgrimage season encounters."
                },
                {
                  q: "Do I need permits for the Khayer Lake Trek?",
                  a: "Yes. All trekkers require an Annapurna Conservation Area Permit (ACAP). Foreign nationals typically also need a TIMS (Trekkers' Information Management System) card. Our guides manage permit logistics as part of the package."
                },
                {
                  q: "Can beginners do the Khayer Lake Trek?",
                  a: "Fit and well-prepared beginners can complete this trek with a qualified guide. However, it should not be underestimated. Physical preparation before the trek is important. Beginners should be honest with their guide about their experience and physical condition at all times."
                },
                {
                  q: "What mountains can be seen from Khopra Ridge?",
                  a: "Khopra Ridge offers panoramic views of Annapurna South, Hiunchuli, Machhapuchhre (Fishtail), Nilgiri North, Nilgiri Central, Dhaulagiri I, Tukuche Peak, and Baraha Shikhar. It is one of the most impressive viewpoints in the Annapurna Conservation Area."
                },
                {
                  q: "Is a guide recommended for this trek?",
                  a: "A guide is strongly recommended and, for most sections of this route, essentially required for safe navigation. Beyond navigation, a guide provides altitude monitoring, cultural interpretation, community connections, and emergency response capability."
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

          {/* FINAL THOUGHTS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950">Final Thoughts on the Sacred Khayer Lake Pilgrimage Trek</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Sacred Khayer Lake Pilgrimage Trek is not a trek you take to tick a box. It is a trek you take to understand something — about mountains, about devotion, about your own capacity for sustained effort in a landscape that diminishes everyday concerns to near-nothing.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">The walk from Pokhara to Khopra Ridge and onward to the lake takes you through nine days of Nepal that most visitors never experience: the quiet of community lodges, the warmth of Gurung and Magar hospitality, the visual enormity of Annapurna South seen not from a well-worn viewpoint but from a high ridge where almost no one else is standing.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">And at the end of a long, cold morning of uphill walking, there is the lake itself. Khayer Lake. Icy, still, perfectly positioned at the base of a mountain that was holy long before anyone called it by a name we would recognize. Pilgrims wash their hands. Trekkers catch their breath. The mountain does not notice. That combination — the scale of the Himalaya and the smallness of human presence within it — is why people travel this far and climb this high.
            </p>
          </article>

          {/* CTA BOOKING BLOCK */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Customize Your Sacred Khayer Lake Trek With Our Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Our licensed local trekking guides based in Kathmandu run the Khopra Ridge and Khayer Lake circuit regularly. We maintain active knowledge of trail conditions, community lodge availability, and permit requirements — and we customize every itinerary to match your group&apos;s pace, interests, and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Customize Your Itinerary →
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>Free cancellation &amp; flexible shifts</span>
                  <span>Standard response within 24 hours</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTNOTE */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by licensed local trekking guides operating out of Kathmandu. Route information, permit fees, and community lodge statuses are updated based on active trail monitoring.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
