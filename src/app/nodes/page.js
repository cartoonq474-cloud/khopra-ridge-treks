import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes",
  },
  title: "Khopra Ridge Trail Village Nodes: Complete Route Guide to Every Stop",
  description: "Every village node on the Khopra Ridge Trail, mapped in order — elevation, walking hours, accommodation, and route logic for each stop from Birethanti to Khopra Danda.",
};

export default function Page() {
  const villages = [
    {
      name: "Birethanti Checkpoint",
      altitude: "1,025m",
      type: "Official Permit Entry",
      lodging: "Local Guest Houses",
      href: "/nodes/birethanti-guide",
      desc: "Tim card and ACAP permits registration checkpoint at the confluence of the Modi and Bhurungdi rivers."
    },
    {
      name: "Syauli Bazaar",
      altitude: "1,220m",
      type: "Lower River Trailhead",
      lodging: "Basic Teahouses",
      href: "/nodes/syauli-bazaar-guide",
      desc: "Lowest road-access trailhead along the Modi Khola riverbed. Gradual start for Ghandruk climbing."
    },
    {
      name: "Kimche Trailhead",
      altitude: "1,640m",
      type: "Upper Road Trailhead",
      lodging: "Small Homestays",
      href: "/nodes/kimche-trailhead",
      desc: "Highest jeep point on Ghandruk side. Cuts day 1 hiking down to a comfortable 1-2 hour climb."
    },
    {
      name: "Ghandruk Village",
      altitude: "1,940m",
      type: "Gurung Cultural Hub",
      lodging: "Comfortable Lodges & Hotels",
      href: "/nodes/ghandruk-village-guide",
      desc: "Largest Gurung settlement in the region. Features slate roofs, stone pathways, and rich local museums."
    },
    {
      name: "Tadapani",
      altitude: "2,630m",
      type: "Forest Junction",
      lodging: "Standard Teahouses",
      href: "/nodes/tadapani-guide",
      desc: "Dense forest ridge split connecting Ghandruk and Ghorepani with the offbeat high-altitude trail."
    },
    {
      name: "Dobato Pastures",
      altitude: "3,432m",
      type: "High Overnight Stop",
      lodging: "Community Lodge",
      href: "/nodes/dobato-guide",
      desc: "Acclimatization clearing below Muldai Hill. Main launch point for early morning sunrise panoramas."
    },
    {
      name: "Bayeli Kharka",
      altitude: "3,425m",
      type: "High Mountain Pasture",
      lodging: "Community Lodge",
      href: "/nodes/bayeli-kharka-guide",
      desc: "Isolated high alpine meadow sitting directly opposite the massive vertical face of Annapurna South."
    },
    {
      name: "Chhistibung Node",
      altitude: "2,975m",
      type: "Forest Sanctuary",
      lodging: "Community Lodge",
      href: "/nodes/chhistibung-guide",
      desc: "Forest hollow rich in biological diversity. Excellent zone for Himalayan Monal and Langur spotting."
    },
    {
      name: "Khopra Ridge (Khopra Danda)",
      altitude: "3,660m",
      type: "Trek Ridge Summit",
      lodging: "Main Community Lodge",
      href: "/nodes/khopra-ridge-lodge-guide",
      desc: "Trek's highest overnight point. Massive 360-degree views looking straight at the Dhaulagiri wall."
    },
    {
      name: "Swanta Village",
      altitude: "2,200m",
      type: "Magar Farming Valley",
      lodging: "Homestays & Lodges",
      href: "/nodes/swanta-village-guide",
      desc: "Terraced agricultural valley known for honey beehives and a cooperative organic cheese factory."
    },
    {
      name: "Ghorepani Hub",
      altitude: "2,860m",
      type: "Trail Junction",
      lodging: "Developed Teahouses & Hotels",
      href: "/nodes/ghorepani-guide",
      desc: "Busiest junction rejoining the classic route. Launchpad for Poon Hill sunrise climbs."
    },
    {
      name: "Ulleri Village",
      altitude: "2,050m",
      type: "Hillside Settlement",
      lodging: "Traditional Teahouses",
      href: "/nodes/ulleri-village-guide",
      desc: "Famous hillside Magar village. Sits above the steep 3,200 stone-step staircase of Tikhedhunga."
    }
  ];

  const timings = [
    { segment: "Birethanti to Syauli Bazaar", time: "2 - 3 Hours" },
    { segment: "Syauli Bazaar / Kimche to Ghandruk", time: "1 - 4 Hours" },
    { segment: "Ghandruk to Tadapani", time: "4 - 5 Hours" },
    { segment: "Tadapani to Dobato", time: "5 - 7 Hours" },
    { segment: "Dobato to Bayeli Kharka", time: "1 - 2 Hours" },
    { segment: "Bayeli Kharka to Chistibung", time: "2 - 3 Hours" },
    { segment: "Chistibung to Khopra Ridge", time: "3 - 5 Hours" },
    { segment: "Khopra Ridge to Khayer Lake (one-way)", time: "3.5 - 4 Hours" },
    { segment: "Khopra Ridge to Swanta", time: "4 - 5 Hours" },
    { segment: "Swanta to Ghorepani", time: "4 - 5 Hours" },
    { segment: "Ghorepani to Ulleri (via Poon Hill)", time: "4 - 5 Hours" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Trail Infrastructure Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trail Village Nodes
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Explore the complete route stop by stop. Learn about elevations, daily timings, lodging types, and strategic roles of Birethanti, Ghandruk, Dobato, Swanta, and more.
          </p>
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
                Trek Overview
              </a>
              <a href="#planning-why" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Planning Matters
              </a>
              <a href="#nodes-grid" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Interactive Grid
              </a>
              <a href="#sequence" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Flow
              </a>
              <a href="#breakdowns" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Node-by-Node Details
              </a>
              <a href="#timings" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Walk Hours
              </a>
              <a href="#lodging" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Guide
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Segment Difficulty
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Pace Factors
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
                Inquire with Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION & OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Overview of the Khopra Ridge Trek Route
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trek guides tell you what the Khopra Ridge Trek is. Far fewer explain how the route actually unfolds — which village follows which, how high you climb between them, and why each stop exists where it does. That gap is what this guide closes.
              </p>
              <p>
                The Khopra Ridge Trail is built from a sequence of village nodes: permit checkpoints, trailheads, overnight lodges, and junctions where the route splits toward different destinations. Understanding these nodes — not just their names, but their elevation, their role in the route, and what waits for you there — is what separates a trekker who plans well from one who finds out the hard way that today&apos;s stage involves a 600-metre climb above the treeline.
              </p>
              <p>
                <strong>Where is the Trek Located?</strong> The Khopra Ridge Trek sits inside the Annapurna Conservation Area in western Nepal, reached by road from Pokhara. The route climbs from the Modi Khola riverbed near Birethanti, through Gurung villages on the lower slopes, into Magar farming country, and finally onto an exposed ridge above 3,600 metres facing the Dhaulagiri and Annapurna ranges directly.
              </p>
              <p>
                <strong>Distance and Elevation range:</strong> Most itineraries cover the full circuit in 6 to 9 days, depending on the entry/exit points and whether the Khayer Lake extension is included. Total trekking distance across the loop generally falls between 50 and 70 km. You start around 1,000–1,100 m at the lowest road-access points, and the trail&apos;s high point at Khopra Ridge sits at roughly 3,660 m. If you extend to Khayer Lake, that climbs further to around 4,500–4,600 m.
              </p>
            </div>
          </article>

          {/* SECTION: WHY PLANNING MATTERS */}
          <article id="planning-why" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Route Planning Matters on the Khopra Ridge Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Two things make node-by-node planning genuinely useful here, rather than just nice to have.
              </p>
              <p>
                First, <strong>lodge spacing is uneven</strong>. Some stages are short and gentle; others — particularly Tadapani to Dobato and the approach to Khopra Ridge — involve 5 to 7 hours of steady climbing with limited bail-out points. Knowing this before you start changes how you pace your days.
              </p>
              <p>
                Second, <strong>several of the high-altitude nodes have only one or two lodges each</strong> (Dobato, Bayeli Kharka, Chistibung, Khopra Ridge). There&apos;s no &quot;if this one&apos;s full, try the place next door.&quot; Understanding the route structure helps you plan realistic overnight stops rather than guessing.
              </p>
            </div>
          </article>

          {/* SECTION: INTERACTIVE NODE GRID */}
          <article id="nodes-grid" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Village Node Directory &amp; Guide Links
            </h2>
            <p className="text-stone-600 text-xs font-semibold leading-relaxed">
              Below is the comprehensive catalog of nodes. Click &quot;Explore Node&quot; to open the dedicated cultural, accommodation, and route planning guide for each location.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              {villages.map((v, i) => (
                <div 
                  key={i} 
                  className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">{v.type}</span>
                    <h3 className="text-lg font-black text-stone-950 mt-1">{v.name}</h3>
                    <div className="mt-2 text-xs space-y-1 text-stone-500">
                      <div>Elevation: <strong className="text-stone-700">{v.altitude}</strong></div>
                      <div>Accommodations: <strong className="text-stone-700">{v.lodging}</strong></div>
                    </div>
                    <p className="mt-3 text-xs text-stone-400 leading-relaxed">{v.desc}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-400">Node Guide</span>
                    <Link
                      href={v.href}
                      className="rounded-full bg-stone-950 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                    >
                      Explore Node
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* MID ARTICLE CTA */}
          <section className="bg-emerald-950 border border-emerald-800 p-6 rounded-3xl text-white my-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-base">Plan Your Khopra Ridge Trek With Local Experts</h4>
                <p className="text-xs text-emerald-200/80">Connect with local guides based in Pokhara and Swanta for route customisation.</p>
              </div>
              <Link 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition duration-200 shrink-0 text-center"
              >
                Get Started &rarr;
              </Link>
            </div>
          </section>

          {/* SECTION: SEQUENCE */}
          <article id="sequence" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Sequence Overview From Start to Finish
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h4 className="font-bold text-stone-900">Standard Route Sequence</h4>
              <p className="text-xs text-stone-500">
                Birethanti &rarr; Syauli Bazaar or Kimche &rarr; Ghandruk &rarr; Tadapani &rarr; Dobato &rarr; Bayeli Kharka &rarr; Chistibung &rarr; Khopra Ridge &rarr; (optional: Khayer Lake) &rarr; Swanta Village &rarr; Ghorepani &rarr; Ulleri &rarr; Birethanti.
              </p>
              <p>
                This forms a rough loop. You climb steadily through the first half via Ghandruk and Tadapani, spend two to three days working through the high pasture and forest nodes around Dobato and Bayeli Kharka, reach the trek&apos;s high point at Khopra Ridge, then descend through Swanta on the way back out.
              </p>
              <h4 className="font-bold text-stone-900 mt-4">Alternative Return Route Options</h4>
              <p>
                Not every itinerary follows the same exit. After Khopra Ridge, trekkers choose between:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>The Swanta route:</strong> Descending through Magar farming country, slower-paced and quieter, then rejoining the main trail at Ghorepani.</li>
                <li><strong>The Ghorepani–Poon Hill route:</strong> A more direct descent that adds the well-known Poon Hill sunrise viewpoint before exiting via Ulleri&apos;s stone steps.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: VILLAGE BREAKDOWN DETAILS */}
          <article id="breakdowns" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Village-by-Village Breakdown of Every Stop
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900">Birethanti — Official Trek Entry Point</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 1,025m. Point of registration for TIMS cards and ACAP permits. Small local houses, shops, and the final road trailhead.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Syauli Bazaar — Lower River Trailhead</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At around 1,220m. Lowest road-accessible trailhead sitting along the Modi Khola riverbed. basic teahouses.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Kimche — Upper Road Trailhead</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 1,640m. Jeep roadhead. Cuts down Day 1 hiking time to a comfortable 1-2 hour walk.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Ghandruk — Cultural Gateway of the Trek</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At around 1,940m. Largest Gurung settlement. Slate roofs, Gurung cultural museums, hotels, and views of Annapurna South and Machhapuchhre.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Tadapani — Forest Junction on the Route</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 2,630m. Rhododendron and oak forest junction. Trails split toward Ghorepani in one direction and Dobato in the other.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Dobato — High Forest Overnight Stop</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At approximately 3,420–3,490m. Launchpad for Muldai Viewpoint sunrise hike (30-60 minutes RT). Single community lodge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Bayeli Kharka — High Alpine Meadow Stop</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At around 3,425–3,460m. High mountain pasture facing the vertical wall of Annapurna South. Single community lodge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Chistibung — Forest Sanctuary Node</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 2,975–3,030m. Descending stage back into forest. Known for Himalayan Monal pheasants and Langur monkeys. Single lodge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Khopra Ridge (Khopra Danda) — Highest Main Node</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At approximately 3,660m. Grassy ridge plateau with 360-degree views of Dhaulagiri and Nilgiri ranges. Main community lodge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Khayer Lake — Optional High-Altitude Extension</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 4,500–4,600m. Barren alpine terrain. Pilgrimage shrine. Hard 8-10 hour round trip from Khopra Ridge. No lodges.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Swanta Village — Magar Farming Valley</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At around 2,200–2,215m. Terraced agricultural Magar community, honey hives, and community cheese cooperative.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Ghorepani — Major Route Junction</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At roughly 2,860m. Large, well-developed trailhead rejoining the main Poon Hill trail. Multiple hotels and teahouses.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Ulleri — Final Descent Exit Point</h4>
                <p className="text-xs text-stone-500 mt-1">
                  At around 2,050m. Hillside village above the infamous 3,200 stone steps staircase to Tikhedhunga. Traditional lodging.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: TIMINGS */}
          <article id="timings" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Daily Timings and Segment Walking Hours
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-stone-50 text-stone-700 font-bold uppercase border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Trek Route Segment</th>
                    <th className="px-6 py-4 text-right">Typical Walking Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                  {timings.map((t, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-6 py-4 font-bold text-stone-900">{t.segment}</td>
                      <td className="px-6 py-4 text-right">{t.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              * Note: Tadapani to Dobato and the climb from Chistibung to Khopra Ridge represent the hardest climbs on the route, requiring deep pacing above 3,000m.
            </p>
          </article>

          {/* SECTION: LODGING & FACILITIES */}
          <article id="lodging" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Facilities Across the Entire Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Tea Houses, Community Lodges, and Homestays:</strong> Accommodation styles shift as you climb. Lower nodes (Ghandruk, Ghorepani) have conventional teahouses and proper hotels. Higher nodes (Dobato, Bayeli, Chistibung, Khopra) are limited to single community lodges operated as local cooperatives.
              </p>
              <p>
                <strong>Food and Facilities:</strong> Basic meals (Dal Bhat, noodles) are available at all lodges. Charging is paid by the hour at higher elevations, and mobile signal becomes patchy to nonexistent. Boiled or treated water has a small cost at upper nodes; carrying water filters is recommended.
              </p>
            </div>
          </article>

          {/* SECTION: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Difficulty by Trekking Segment
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The lower stages (Birethanti to Ghandruk) are moderate. The middle stages (Tadapani to Dobato, Chistibung to Khopra) are hard sustained climbs. The Khayer Lake excursion is strenuous, demanding high-altitude endurance.
              </p>
              <p>
                <strong>Is the trek suitable for beginners?</strong> Yes, with reasonable fitness. First-time trekkers should add an acclimatization night at Ghandruk and treat the Khayer Lake day hike as optional.
              </p>
              <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-850 text-xs">
                <strong>Best Scenic overnight stops:</strong> Khopra Ridge itself is the most scenic (lodge overlooks Dhaulagiri), with Dobato close behind due to Muldai Viewpoint.
              </div>
            </div>
          </article>

          {/* SECTION: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Conditions Across the Route
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Spring (Mar-May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Rhododendron blooms through the forest nodes. Mild temperatures, though snow can linger above 3,500m.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Autumn (Sep-Nov)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Best mountain visibility and dry paths. Nights are cold at Dobato, Bayeli, and Khopra Ridge.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Winter &amp; Monsoon</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Winter brings heavy snow, occasionally closing higher lodges. Monsoon brings slippery paths and leeches.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Village Nodes
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How many villages are on the Khopra Ridge trek?",
                  a: "Most itineraries pass through around 11 to 13 distinct nodes, from the Birethanti checkpoint through to the final descent at Ulleri, depending on whether the Khayer Lake extension and both return-route villages (Swanta and Ghorepani) are included."
                },
                {
                  q: "Which village is the highest point on the Khopra Ridge route?",
                  a: "Khopra Ridge itself, at approximately 3,660 m, is the highest standard overnight stop. If the Khayer Lake extension is included, that pushes the trek's true high point to roughly 4,500–4,600 m."
                },
                {
                  q: "Where do trekkers stay during the Khopra Ridge trek?",
                  a: "Accommodation ranges from conventional teahouses and small hotels in the lower villages (Ghandruk, Ghorepani) to single community lodges at the higher, more remote nodes (Dobato, Bayeli Kharka, Chistibung, Khopra Ridge)."
                },
                {
                  q: "Is Swanta Village part of the Khopra Ridge route?",
                  a: "Yes — Swanta is the typical descent village immediately after Khopra Ridge on most itineraries, before the trail rejoins the main corridor at Ghorepani."
                },
                {
                  q: "Can beginners do the Khopra Ridge trek?",
                  a: "Generally yes, with reasonable fitness and preparation, since it's classified as a moderate trek. That said, several stages involve 5 to 7 hours of climbing above 3,000 m, so it's not a casual first-time hike — building in acclimatization time matters."
                },
                {
                  q: "How difficult is the route from Tadapani to Dobato?",
                  a: "This is widely considered one of the two hardest stages on the trek, typically taking 5 to 7 hours with sustained ascent through forest before breaking above the treeline near Dobato."
                },
                {
                  q: "Can you visit Khayer Lake during the Khopra Ridge trek?",
                  a: "Yes, as an optional extension from Khopra Ridge, usually requiring one extra day. The hike is considerably more demanding than the rest of the route due to the altitude and exposed terrain above 4,000 m."
                },
                {
                  q: "Which villages have the best accommodation on this trek?",
                  a: "Ghandruk and Ghorepani offer the most comfortable, best-equipped lodging on the route, with proper hotels and more reliable electricity than the higher community lodges."
                },
                {
                  q: "Is the Khopra Ridge route harder than the Poon Hill trek?",
                  a: "Yes, in most respects. The standard Poon Hill trek tops out around 3,210 m over a shorter route, while Khopra Ridge climbs further (to roughly 3,660 m, or higher with the Khayer Lake extension) over more remote terrain with fewer accommodation choices at each stop."
                },
                {
                  q: "What is the best return route after Khopra Ridge?",
                  a: "Most trekkers descend via Swanta Village toward Ghorepani, which allows the route to rejoin the Poon Hill corridor for the final stages. Some itineraries shorten this by heading more directly to Ghorepani without the Swanta detour."
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
              The Khopra Ridge Trail isn&apos;t one continuous climb — it&apos;s a sequence of distinct nodes, each with its own elevation, its own accommodation realities, and its own reason for existing on the route. Understanding that structure, rather than just the trek&apos;s overall difficulty rating, is what actually helps you plan well.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you are planning this route independently or considering a guided trek, the village-by-village logic above should give you a realistic picture of what each day actually involves — not just where you are sleeping, but why.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Planning your Khopra Ridge Trek?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local trekking team can help you build a route and itinerary suited to your fitness level and timeframe, from independent planning support to a fully guided trek.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan Your Trek With Local Experts &rarr;
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
                This guide is created and kept active by our team of local guides and travel planners based in Pokhara Lakeside and Swanta. We regularly check trail accessibility, jeep track conditions, and local permit regulations.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
