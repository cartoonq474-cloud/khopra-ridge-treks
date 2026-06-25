import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Kimche: The Jeep Road Trailhead for Ghandruk and Annapurna Treks",
  description: "Kimche is the highest jeep-accessible point on the road from Pokhara toward Ghandruk. Learn why trekkers choose Kimche as their starting point, how to get here, road conditions, hiking times, and how it connects to Annapurna Base Camp and Khopra Ridge Trek routes.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
             Highest Jeep Terminus Node
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Kimche: The Jeep Road Trailhead for Ghandruk and Annapurna Treks
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            If you are planning a trek into the Annapurna region and looking for the fastest, most scenic way to begin, Kimche is where your walk starts. Sitting at 1,640 metres above sea level, Kimche is the highest point a vehicle can reach on the mountain road that climbs up from Nayapul. From here, the jeep stops, the road ends, and the stone staircase begins.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,640m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">5,380 feet (Lower Foothills)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek to Ghandruk</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1 – 1.5 Hours</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Direct stone staircase ascent</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Access Road</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4WD Jeep</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Unpaved mountain dirt road</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">First Stop</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Ghandruk</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Hub for Khopra &amp; ABC routes</span>
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
                Quick Overview
              </a>
              <a href="#where-is-kimche" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where is Kimche?
              </a>
              <a href="#why-start-here" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Start Here?
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reach
              </a>
              <a href="#road-conditions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Road Conditions
              </a>
              <a href="#hike-to-ghandruk" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hike to Ghandruk
              </a>
              <a href="#kimche-vs-nayapul" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Kimche vs Nayapul
              </a>
              <a href="#trekking-routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Routes
              </a>
              <a href="#facilities-services" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Facilities &amp; Services
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Start
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Pre-Trek Tips
              </a>
              <a href="#local-guide-insights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Guide Insights
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
              The Jeep Road Trailhead for Ghandruk
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              Most experienced trekkers today choose to travel directly to Kimche by private 4WD jeep from Pokhara rather than walking the lower road section from Nayapul. That decision saves roughly three to four hours on the first day and puts you on proper mountain trails almost immediately. For routes heading toward Ghandruk, Annapurna Base Camp, or the Khopra Ridge Trek, Kimche is where the real trekking experience begins.
            </p>
          </article>

          {/* SECTION 2: WHERE IS KIMCHE */}
          <article id="where-is-kimche" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where Is Kimche?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Kimche&apos;s Location in the Annapurna Conservation Area</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Kimche sits within the Annapurna Conservation Area, the largest protected trekking region in Nepal. It lies northeast of <Link href="/nodes/nayapul-transit-hub" className="text-emerald-700 font-bold hover:underline">Nayapul</Link> along the unpaved mountain road that follows the Modi Khola river valley toward Ghandruk. As a physical location, Kimche is not a full village in the traditional sense — it is a road terminus and trailhead point where vehicles stop and trekkers begin their ascent on foot. Every trekker who takes a jeep from Pokhara toward Ghandruk will pass through or terminate at Kimche.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Elevation, Landscape, and Surroundings</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">
                  Kimche sits at 1,640 metres, placing it in the lower foothills of the Annapurna range. The landscape here is characterized by terraced hillside farms, scattered tea plantations, and the steep river gorge that cuts through the valley below. The surroundings feel unmistakably Himalayan — the air is cooler and cleaner than Pokhara, the gradient is sharp, and the trail rising toward Ghandruk is immediately visible from the jeep drop-off point. At this elevation, the treeline begins to fill in, and trekkers often catch their first clear views of the surrounding peaks on good weather days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Distance from Pokhara, Nayapul, and Ghandruk</h3>
                <ul className="list-disc pl-5 text-stone-600 text-sm space-y-2 mt-2">
                  <li><strong>Pokhara to Kimche:</strong> Approximately 42 kilometres by road, typically 1.5 to 2 hours by 4WD jeep depending on road conditions.</li>
                  <li><strong>Nayapul to Kimche:</strong> Around 5 to 6 kilometres further along the mountain road, adding roughly 20 to 30 minutes of driving.</li>
                  <li><strong>Kimche to Ghandruk:</strong> 1 to 1.5 hours of uphill trekking on stone staircases.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 3: WHY START HERE */}
          <article id="why-start-here" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why Trekkers Start Their Journey at Kimche
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Starting at Kimche represents a modern approach to planning treks in the Annapurna Conservation Area, maximizing time spent on scenic trails.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base"> Skip Dusty Road Walking</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The traditional starting point was Nayapul, but much of that lower section follows the same unpaved road that vehicles use — bringing dust, noise, and limited scenery. Taking a jeep to Kimche skips this entirely.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base"> Save 3–4 Hours of Time</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Walking from Nayapul to Kimche takes roughly 3 to 4 hours. Starting at Kimche instead saves significant energy on the first day, which makes a meaningful difference to shorter or compact itineraries.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🏞️ Start on Scenic Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The moment you step out of the jeep at Kimche, you are already on the stone staircase path leading up to Ghandruk village. There is no transition period — you begin climbing through terraces immediately.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Kimche from Pokhara
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Getting to Kimche from Pokhara Lakeside requires booking private mountain transport due to the rough terrain of the foothills.
            </p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2"> Private Jeep Transportation</h4>
                <p className="mt-1">
                  The standard and most reliable way to reach Kimche is by private 4WD jeep from Pokhara. This is the option used by the large majority of guided trekkers as well as experienced independent travelers. A private jeep gives you flexibility over departure time, direct drop-off at the Kimche trailhead, and the ability to carry trekking luggage without restriction.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">⏱️ Travel Time and Route Overview</h4>
                <p className="mt-1">
                  The jeep route from Pokhara follows the main highway west before turning onto the mountain road that climbs toward Nayapul and beyond. The full journey from Pokhara to Kimche typically takes between 1.5 and 2 hours under normal conditions. Road quality varies significantly by season: dry months are reasonably comfortable, while rain can slow progress considerably.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2"> Typical Jeep Costs and Sharing</h4>
                <p className="mt-1">
                  A private 4WD jeep from Pokhara to Kimche generally costs in the range of 7,000 to 9,000 NPR for the whole vehicle. This cost is typically the same whether you are one person or a group of four to five, making it very reasonable when split between trekking companions.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-emerald-950 text-sm"> Guide Recommendation: Early Morning Starts</h4>
              <p className="text-xs text-emerald-900 leading-relaxed mt-1">
                An early departure from Pokhara — ideally between 6:00 and 7:30 in the morning — allows you to reach Kimche and begin the climb to Ghandruk during the cooler morning hours. Arriving at Ghandruk before midday also gives you time to settle in, eat lunch with views of the Annapurna range, and rest before the afternoon.
              </p>
            </div>
          </article>

          {/* SECTION 5: ROAD CONDITIONS */}
          <article id="road-conditions" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Road Conditions Between Nayapul and Kimche
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The road between Nayapul and Kimche is an unpaved mountain dirt road. It follows narrow ledges above the Modi Khola gorge, crosses small seasonal streams, and passes through hillside settlements. It requires a driver with experience and a vehicle with proper ground clearance.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Dry Season Conditions</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  During spring (March to May) and autumn (September to November), the road is generally in its best condition. The surface is firmer, stream crossings are easier to manage, and the risk of unexpected closures is lower.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">🌧️ Monsoon Challenges</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  From June through September, heavy and sustained rainfall can trigger minor landslides, wash out stream crossings, and make sections of the road temporarily impassable. If trekking in monsoon, check statuses daily with our Pokhara coordinator.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-amber-950 text-sm">⚠️ High-Clearance 4WD is Mandatory</h4>
              <p className="text-xs text-amber-950 leading-relaxed mt-1">
                A standard sedan or minivan is not suitable for this road in any season. The unpaved surface, combined with steep gradients and seasonal debris, requires a high-clearance 4WD vehicle with good traction. Do not accept low-clearance vehicle alternatives regardless of what a local transport tout may suggest.
              </p>
            </div>
          </article>

          {/* SECTION 6: THE KIMCHE TO GHANDRUK TREK */}
          <article id="hike-to-ghandruk" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              The Kimche to Ghandruk Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The walk from the trailhead up to Ghandruk is short but involves a steady climb on stone steps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Distance &amp; Elevation Gain</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  The climb covers a modest horizontal distance but gains roughly 500 metres in altitude, taking about 1 to 1.5 hours at a comfortable pace.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Stone Staircase Trail</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  The trail is exceptionally well-maintained, following hand-carved stone staircases. It is well-marked and easy to navigate with no major junctions.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base"> Valley &amp; Farm Vistas</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  The path winds through agricultural terraces and tea plantations. On clear mornings, Annapurna South, Hiunchuli, and Machhapuchhre peaks emerge above the ridge.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">
              Upon reaching Ghandruk, you will enter a large Gurung village with teahouses, restaurants, a cultural museum, and stunning views of the Annapurna range. From Ghandruk, paths branch north toward Annapurna Base Camp and west toward Tadapani, Ghorepani, and the Khopra Ridge circuit. Learn more in our <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk Village Guide</Link>.
            </p>
          </article>

          {/* SECTION 7: KIMCHE VS NAYAPUL */}
          <article id="kimche-vs-nayapul" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Kimche vs Nayapul: Which Is the Better Trekking Start?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              For the majority of trekkers — especially those on guided treks, shorter itineraries, or first-time visits to the Annapurna region — Kimche is the better starting point.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Feature</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Nayapul Start</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Kimche Start</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Transport cost from Pokhara</td>
                    <td className="px-6 py-4 text-stone-600">Lower (local bus option available)</td>
                    <td className="px-6 py-4 text-stone-600">Higher (private jeep recommended)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Walking time to Ghandruk</td>
                    <td className="px-6 py-4 text-stone-600">4 to 5.5 hours total</td>
                    <td className="px-6 py-4 text-stone-600">1 to 1.5 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Road walking required</td>
                    <td className="px-6 py-4 text-stone-600">Yes (3–4 hrs on unpaved dirt road)</td>
                    <td className="px-6 py-4 text-stone-600">None</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Scenic quality from start</td>
                    <td className="px-6 py-4 text-stone-600">Moderate</td>
                    <td className="px-6 py-4 text-stone-600">High (starts on mountain trail)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Recommended for most trekkers</td>
                    <td className="px-6 py-4 text-stone-600">No</td>
                    <td className="px-6 py-4 text-stone-600 font-bold text-emerald-600">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 8: TREKKING ROUTES */}
          <article id="trekking-routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trekking Routes That Begin Through Kimche
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Kimche serves as the primary gateway for several major routes:
            </p>

            <ul className="list-disc pl-5 text-stone-600 text-sm space-y-3">
              <li><strong>Kimche to Ghandruk and Annapurna Base Camp:</strong> After reaching Ghandruk, trekkers continue north through Chhomrong, Bamboo, Himalaya, and Deurali before arriving at Annapurna Base Camp (4,130m). Starting from Kimche gives you an efficient entry.</li>
              <li><strong>Starting Point for the Khopra Ridge Trek:</strong> By starting at Kimche, trekkers join the loop at Ghandruk and continue west to Tadapani, then to <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 font-bold hover:underline">Bayeli Kharka</Link>, <Link href="/nodes/chhistibung-guide" className="text-emerald-700 font-bold hover:underline">Chhistibung</Link>, and <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta Village</Link> before reaching Khopra Danda (3,660m) and Khayer Lake. Read the <Link href="/planning/khopra-trek-itinerary" className="text-emerald-700 font-bold hover:underline">Khopra Trek Itinerary</Link> for path structures.</li>
              <li><strong>Connections to Tadapani, Ghorepani, and Beyond:</strong> Trekkers can continue west from Ghandruk to Tadapani, then to Ghorepani and Poon Hill, creating a classic Annapurna loop.</li>
            </ul>
          </article>

          {/* SECTION 9: FACILITIES & SERVICES */}
          <article id="facilities-services" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Facilities and Services Available at Kimche
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Kimche&apos;s trailhead area is modest. It is a functional stopping point rather than a developed tourist hub. The jeep drops you off at the base of the stone staircase, where the trail to Ghandruk begins clearly.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base"> Trailhead Area &amp; Shops</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  There are no formal facilities such as luggage storage or tourism offices at the trailhead itself. A small number of local shops and tea stops are accessible near the road terminus, adequate for a cup of tea or water, but they are not reliable sources for trekking gear or snacks. Purchase these in Pokhara Lakeside first.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base"> Mobile Network &amp; Prep</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Mobile network coverage at Kimche is limited. NCell and Nepal Telecom signals can be intermittent at the trailhead but improve once you reach Ghandruk village. Carry sufficient drinking water and snacks from Pokhara to last the climb to Ghandruk.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Best Time of Year to Start a Trek from Kimche
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm"> Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                  Rhododendron forests bloom in red and pink. Mornings offer excellent peak visibility, and road access is generally stable.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm"> Autumn (Sep–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                  Peak visibility. Post-monsoon air is clear, mountain views are sharp, and road access to Kimche is highly reliable.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">❄️ Winter (Dec–Feb)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                  Colder weather but very clear skies. Lower trail to Ghandruk remains open, though morning frost is common on the road.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">🌧️ Monsoon (Jun–Sep)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                  Highest risk. Continuous rain makes the unpaved road mud-prone and landslides can temporarily block vehicle access.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Practical Tips Before Starting at Kimche
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base"> Permits Required</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  All trekkers must hold valid ACAP permits and TIMS cards, which must be obtained in Pokhara or Kathmandu beforehand. There is no permit office at the Kimche trailhead, and trekking without them is not allowed. Check our <Link href="/planning/acap-permit-guide" className="text-emerald-700 font-bold hover:underline">ACAP Permit Guide</Link> for details.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base"> Cash &amp; Porter Logistics</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  There are no ATMs at Kimche. Carry sufficient Nepali Rupees for your entire trek. Pack your day bag with essentials: water, snacks, rain jacket, sunscreen, and medications. Your main luggage can be transferred by a porter.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: LOCAL GUIDE INSIGHTS */}
          <article id="local-guide-insights" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Local Guide Insights for Starting at Kimche
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Our certified local guides recommend Kimche to improve the overall quality of the first day, replacing a dusty road walk with an active mountain climb.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-stone-600 text-sm">
              <h4 className="font-bold text-amber-950 text-base">⚠️ Common Mistakes Trekkers Make</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-amber-900 mt-2">
                <li>Assuming permits can be purchased at the trailhead (they cannot).</li>
                <li>Underestimating the drive time (allow at least two full hours from Pokhara).</li>
                <li>Not carrying enough water for the climb to Ghandruk.</li>
                <li>Booking low-clearance vehicles that cannot handle the unpaved mountain road.</li>
                <li>Arriving at Kimche after midday, starting the climb late.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Kimche Trailhead
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Kimche located in Nepal?",
                  a: "Kimche is located in the Annapurna Conservation Area of western Nepal. It sits on the mountain road northeast of Nayapul at 1,640 metres, functioning as the walking trailhead for trekkers heading toward Ghandruk."
                },
                {
                  q: "How far is Kimche from Pokhara?",
                  a: "Kimche is approximately 42 kilometres from Pokhara by road. The drive typically takes 1.5 to 2 hours in a 4WD jeep depending on traffic and road conditions."
                },
                {
                  q: "Can a jeep reach Kimche year-round?",
                  a: "In dry seasons (spring and autumn), jeep access is reliable. During the monsoon (June to September), heavy rain triggers landslides and mudslides, occasionally blocking the unpaved road. Same-day statuses should always be checked."
                },
                {
                  q: "How much does a jeep from Pokhara to Kimche cost?",
                  a: "A private 4WD jeep typically costs between 7,000 and 9,000 NPR for the full vehicle, which can be split among a small group."
                },
                {
                  q: "How long does it take to walk from Kimche to Ghandruk?",
                  a: "The uphill trek takes approximately 1 to 1.5 hours at a steady pace. The path gains around 500 metres of elevation on a series of stone staircases."
                },
                {
                  q: "Is Kimche better than Nayapul for starting a trek?",
                  a: "Yes. Starting at Kimche saves three to four hours of dusty road-walking from Nayapul, placing you directly on the stone staircase climb through agricultural terraces."
                },
                {
                  q: "Is the road to Kimche safe during monsoon season?",
                  a: "The unpaved road is narrow and sits along steep gorges, meaning flooding and mudslides are common during heavy monsoon rains. Sturdy 4WD vehicles and experienced local drivers are essential."
                },
                {
                  q: "Can I start the Annapurna Base Camp trek from Kimche?",
                  a: "Yes. Ascending to Ghandruk from Kimche connects you directly to the classic Annapurna Base Camp route through Chhomrong and the sanctuary corridor."
                },
                {
                  q: "Can I start the Khopra Ridge Trek from Kimche?",
                  a: "Yes. Kimche is the standard starting trailhead for the 9-day Khopra Ridge Trek. Trekkers walk to Ghandruk, then follow the loop toward Tadapani, Bayeli Kharka, and Khopra Danda."
                },
                {
                  q: "What permits do I need before trekking from Kimche?",
                  a: "You require a valid ACAP permit and a TIMS card, both of which must be purchased in advance in Pokhara or Kathmandu."
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
            <p className="text-stone-600 leading-relaxed text-sm">
              Kimche has quietly become the most practical starting point for trekkers heading into the southern Annapurna region. Its position as the highest jeep-accessible point means you trade dusty road walking for a rewarding stone staircase ascent through agricultural terraces, tea plantations, and opening mountain views.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether your destination is Ghandruk, Annapurna Base Camp, or the Khopra Ridge circuit, Kimche is where your trek properly begins. Getting everything right before you arrive — permits, transport, guides, and accommodation — takes local knowledge and reliable coordination.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Trek from Kimche with Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We manage every detail of your Annapurna journey — from arranging a high-clearance jeep to Kimche and organising your ACAP permits, to booking teahouse accommodation and providing certified local guides who know every section of this trail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire &amp; Book Today &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span> Based in Pokhara, Nepal</span>
                  <span> Free cancellation &amp; flexible changes</span>
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
                This Kimche trailhead guide is reviewed by certified local guides based in Pokhara. Trail access routes, transport conditions, and trailhead details are updated regularly based on active field checks and local coordinator reports.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
