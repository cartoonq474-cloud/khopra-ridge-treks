import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-route-overview",
  },
  title: "Khopra Ridge Route Overview: Trail Map, Villages & Trek Route Guide",
  description: "A complete Khopra Ridge route overview: trail map, village-by-village breakdown, elevation profile, Khayer Lake extension, and how it compares to Poon Hill, Mardi Himal, and ABC.",
};

export default function Page() {
  const quickSpecs = [
    { label: "Region", value: "Annapurna Conservation Area (ACAP)" },
    { label: "Duration", value: "6 - 9 Days" },
    { label: "Highest Trek Point", value: "Khopra Ridge (3,660m)" },
    { label: "Optional Highest Point", value: "Khayer Lake (4,660m)" },
    { label: "Route Type", value: "Point-to-point, with loop variations" },
    { label: "Typical Starting Area", value: "Ghandruk or Nayapul side" },
    { label: "Difficulty", value: "Moderate" },
    { label: "Trail Traffic", value: "Very Low" }
  ];

  const comparisons = [
    {
      name: "Khopra Ridge Trek",
      duration: "6 - 9 Days",
      altitude: "3,660m (Lake: 4,660m)",
      crowds: "Very Low",
      highlights: "Direct Dhaulagiri & Annapurna views, sacred lake hike, community-owned lodges"
    },
    {
      name: "Poon Hill Trek",
      duration: "4 - 5 Days",
      altitude: "3,210m",
      crowds: "Extremely High",
      highlights: "Short loop, sunrise panorama, accessible for beginners"
    },
    {
      name: "Mardi Himal Trek",
      duration: "5 - 7 Days",
      altitude: "4,500m",
      crowds: "Moderate to High",
      highlights: "Ridge walk below Machhapuchhre, forest camps, rapid altitude profile"
    },
    {
      name: "Annapurna Base Camp",
      duration: "10 - 12 Days",
      altitude: "4,130m",
      crowds: "High",
      highlights: "Deep sanctuary hike below 8,000m walls, classic route"
    }
  ];

  const villages = [
    {
      name: "Ghandruk",
      type: "Traditional Gateway Village",
      desc: "One of the largest Gurung villages in the Annapurna region. Well developed with stone-paved paths, local museums, and views of Annapurna South and Machhapuchhre."
    },
    {
      name: "Tadapani",
      type: "Forest Ridge Transition",
      desc: "Sits inside dense rhododendron and oak forest. Marks the transition point where trails branch off the busy Ghandruk pathways into quieter areas."
    },
    {
      name: "Dobato",
      type: "High Forest & Ridge Access",
      desc: "A high-altitude hub offering viewpoints over Dhaulagiri and Machhapuchhre. Serves as a gauge for altitude acclimatization."
    },
    {
      name: "Bayeli Kharka",
      type: "Open Alpine Pastures",
      desc: "The forest clears into open pasturelands. Panoramic views expand sharply as you begin the true ridge walking sections."
    },
    {
      name: "Chhistibung",
      type: "Community Lodge Stop",
      desc: "A smaller clearing in the pasture forest featuring community-run lodges. Income supports local schools and healthcare."
    },
    {
      name: "Khopra Ridge",
      type: "The Main Destination",
      desc: "A stunning grassy plateau at 3,660m. Offers direct, head-on perspectives of Dhaulagiri and close-up views of Annapurna South."
    },
    {
      name: "Swanta Village",
      type: "Cultural Descent Route",
      desc: "A tranquil Magar farming village in the valley. Features organic cheese production and community lodges."
    },
    {
      name: "Ghorepani",
      type: "Optional Route Connection",
      desc: "The classic junction point connecting back to the Poon Hill sunrise trail and the main route out to Nayapul."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Trail Infrastructure Overview
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Route Overview: Complete Trail &amp; Villages Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand how the Khopra Ridge trail works — where it starts, which villages it passes through, where the route splits, and how it compares to popular alternatives.
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
              <a href="#quick-reference" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Reference
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Location &amp; Geography
              </a>
              <a href="#flow" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Flow
              </a>
              <a href="#map-junctions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Junctions &amp; Map
              </a>
              <a href="#villages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Village Breakdown
              </a>
              <a href="#terrain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Terrain &amp; Elevation
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake extension
              </a>
              <a href="#variations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Variations
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#unique" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Makes It Unique
              </a>
              <a href="#profile" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Ideal Trekker Profile
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
                Plan Custom Route
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-4 text-stone-600 leading-relaxed text-sm">
            <p>
              Most people researching the Annapurna region end up reading the same five treks over and over. The Khopra Ridge Trek rarely makes that list, which is exactly why it is worth understanding properly before you write it off or book it blind.
            </p>
            <p>
              This page is a route overview, not a day-by-day itinerary. We are not here to tell you what time to wake up on Day 4. We are here to explain how the Khopra Ridge trail actually works — where it starts, which villages it passes through, how the elevation builds, where the route splits, and how it stacks up against treks like Poon Hill, Mardi Himal, and Annapurna Base Camp.
            </p>
            <p>
              By the end of this guide, you will understand the geography, the trail structure, the optional Khayer Lake extension, and whether this is the right route for the kind of trekking experience you want.
            </p>
          </article>

          {/* SECTION 1: QUICK REFERENCE */}
          <article id="quick-reference" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek — Quick Reference
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-stone-50 text-stone-700 font-bold uppercase border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Route Feature</th>
                    <th className="px-6 py-4 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                  {quickSpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-6 py-4 font-bold text-stone-900">{spec.label}</td>
                      <td className="px-6 py-4 text-right">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: LOCATION & GEOGRAPHY */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is the Khopra Ridge Trek Located?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge Trek sits inside the Annapurna Conservation Area Project (ACAP), Nepal&apos;s largest protected area and the same region that hosts Poon Hill, Mardi Himal, and the Annapurna Base Camp trail. But Khopra branches off from the well-worn paths into a quieter corner of the conservation area, on the western side of the Annapurna massif.
              </p>
              <p>
                Most Annapurna treks funnel trekkers toward a single sanctuary or base camp. Khopra does something different — it follows a high ridge, which changes the entire character of the walk. You are not hiking up into a valley; you are walking along the top of one, with open views in multiple directions at once.
              </p>
              <h3 className="text-lg font-bold text-stone-900 mt-6">The Dhaulagiri–Annapurna Mountain Landscape</h3>
              <p>
                What makes Khopra&apos;s location genuinely unusual is what sits on either side of it. To the west, across the Kali Gandaki Gorge — the deepest gorge in the world — rises the Dhaulagiri range. To the east, Annapurna South towers directly above the trail. Nilgiri is visible further along the ridge.
              </p>
              <p>
                This positioning is the reason Khopra exists as a distinct route rather than just a side trail off Poon Hill or ABC. You get a head-on view of Dhaulagiri, a mountain most Annapurna treks only glimpse from an angle, alongside close-up views of Annapurna South that rival anything on the classic sanctuary route.
              </p>
              <h3 className="text-lg font-bold text-stone-900 mt-6">How Trekkers Reach the Trail From Pokhara</h3>
              <p>
                Pokhara is the gateway for every version of this trek. From there, a road journey of roughly 1.5 to 2 hours gets you to the trailhead area near Ghandruk or Nayapul, depending on which route variation you are following. From that point, everything is on foot.
              </p>
            </div>
          </article>

          {/* SECTION 3: ROUTE FLOW */}
          <article id="flow" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Route Overview at a Glance
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The standard Khopra Ridge route follows this general progression:
              </p>
              <div className="bg-stone-100 p-6 rounded-3xl text-stone-850 font-mono text-xs flex flex-wrap items-center gap-2">
                <span>Pokhara</span> &rarr; <span>Ghandruk</span> &rarr; <span>Tadapani</span> &rarr; <span>Dobato</span> &rarr; <span>Bayeli Kharka</span> &rarr; <span>Chhistibung</span> &rarr; <span>Khopra Ridge</span> &rarr; <span>Swanta</span> &rarr; <span>Ghorepani</span>
              </div>
              <p>
                Each stop represents both a trail section and an overnight village, and the route is designed so you gain elevation gradually before reaching the ridge itself. This is not a there-and-back trail — it is a progression through distinct ecological and cultural zones, from forest villages to high alpine pasture and back down through a different valley.
              </p>
              <p>
                <strong>Trek Duration, Distance &amp; Elevation:</strong> Most itineraries run 6 to 9 days depending on pacing, rest days, and whether the Khayer Lake extension is included. The trek climbs from Pokhara&apos;s roughly 820m elevation up to Khopra Ridge at 3,660m, with the optional push to Khayer Lake at 4,660m.
              </p>
            </div>
          </article>

          {/* SECTION 4: MAP & JUNCTIONS */}
          <article id="map-junctions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Route Map &amp; Key Junctions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                If you picture the Khopra route on a map, it looks less like a straight line and more like a ridge-walking arc. The trail climbs out of the Modi Khola valley near Ghandruk, cuts through dense forest toward Tadapani, then bends northwest toward Dobato and onto the high ground leading to Khopra Ridge.
              </p>
              <p>
                A few points on the trail function as genuine decision points:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Tadapani:</strong> Where routes toward Ghorepani/Poon Hill split from the path continuing toward Dobato and Khopra.</li>
                <li><strong>Dobato:</strong> Connects to Mohare Danda for trekkers taking that variation, in addition to continuing toward Bayeli Kharka.</li>
                <li><strong>Swanta &amp; Ghorepani:</strong> Offer a choice between descending directly or extending the trip to include Poon Hill&apos;s sunrise viewpoint.</li>
              </ul>
              <p>
                <strong>Loop Routes vs Return Routes:</strong> Because the trail connects back through Ghorepani rather than returning the way it came, most Khopra itineraries are effectively loop treks. You walk through new villages and terrain almost every day, rather than repeating the same trail.
              </p>
            </div>
          </article>

          {/* SECTION 5: VILLAGES */}
          <article id="villages" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Village-by-Village Breakdown of the Khopra Route
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              {villages.map((v, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">{v.type}</span>
                  <h4 className="font-bold text-stone-900">{v.name}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 6: TERRAIN & ELEVATION */}
          <article id="terrain" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Elevation Profile &amp; Trail Conditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The trek climbs steadily from around 820m in Pokhara to 3,660m at Khopra Ridge, with the steepest sustained gains occurring between Tadapani and Dobato, and again between Bayeli Kharka and the ridge itself. Itineraries allow gradual acclimatization, making altitude-related issues uncommon.
              </p>
              <p>
                The trail moves through three distinct terrain types: dense rhododendron and oak forest in the lower sections, open ridge walking through Bayeli Kharka and toward Khopra, and exposed alpine terrain near the highest points.
              </p>
              <p>
                <strong>Difficulty Level:</strong> Khopra is generally rated moderate. It involves consistent daily walking of 5 to 7 hours, some steep sections, and one genuine high-altitude push if you add Khayer Lake. It is a step up from Poon Hill but doesn&apos;t demand the altitude conditioning that ABC or Mardi Himal require.
              </p>
            </div>
          </article>

          {/* SECTION 7: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Khayer Lake Extension Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khayer Lake is considered a sacred site by local communities, and it sits well above the main ridge trail at 4,660m. It is an optional extension for trekkers who want to push higher and add a pilgrimage element to their trip.
              </p>
              <p>
                The walk to Khayer Lake from Khopra Ridge typically takes a full day round trip (8 to 10 hours), climbing through increasingly sparse alpine terrain. Most trekkers do this as an out-and-back day hike from the Khopra Ridge lodge, returning to the same accommodation that night.
              </p>
              <p>
                Adding Khayer Lake means gaining another 1,000 meters above Khopra Ridge in a single day, which is a meaningfully harder push than anything else on the route.
              </p>
            </div>
          </article>

          {/* SECTION 8: VARIATIONS */}
          <article id="variations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Variations and Trek Options
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Trek via Ghandruk</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This is the standard, most commonly walked version of the route, starting from Ghandruk and following the loop. It is the version most lodges and local guides are set up to support.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Trek via Poon Hill</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekkers who want to combine two of the region&apos;s best viewpoints often link Khopra with Poon Hill, usually by routing through Ghorepani at one end of the trip.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Trek via Mohare Danda</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Mohare Danda variation branches off near Dobato and leans further into the community-tourism side. It is a good fit for trekkers drawn to the local-lodge model.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Loop Trek Options</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Because the trail naturally forms a loop through Ghandruk, Khopra, Swanta, and Ghorepani, most itineraries are built as loop treks by default. This gives you new scenery essentially every day.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Khopra Compares to Other Annapurna Treks
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-stone-50 text-stone-700 font-bold uppercase border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Trek Route</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4 text-emerald-600">Max Altitude</th>
                    <th className="px-6 py-4">Traffic Level</th>
                    <th className="px-6 py-4 text-right">Key Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                  {comparisons.map((c, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-6 py-4 font-bold text-stone-900">{c.name}</td>
                      <td className="px-6 py-4">{c.duration}</td>
                      <td className="px-6 py-4 text-emerald-600">{c.altitude}</td>
                      <td className="px-6 py-4">{c.crowds}</td>
                      <td className="px-6 py-4 text-right text-[10px] text-stone-500 leading-relaxed">{c.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed mt-6">
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Ridge vs Poon Hill</h4>
                <p className="text-xs text-stone-500">
                  Poon Hill is shorter, busier, and built around a single sunrise viewpoint. Khopra takes longer but trades the crowds for several days of comparable or better mountain views without the early-morning queue.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Ridge vs Mardi Himal</h4>
                <p className="text-xs text-stone-500">
                  Mardi Himal is also a ridge trek, but it climbs higher and faster, with a steeper altitude profile in its final stages. Khopra&apos;s gain is more gradual, and its ridge walking is spread across more days.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Ridge vs Annapurna Base Camp</h4>
                <p className="text-xs text-stone-500">
                  ABC takes you deep into a mountain sanctuary surrounded by peaks on all sides; Khopra keeps you on an open ridge looking across at them. ABC is longer, busier, and arguably more dramatic at its endpoint.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Ridge vs Mohare Danda</h4>
                <p className="text-xs text-stone-500">
                  These two routes overlap significantly and share the same community-lodge philosophy. Mohare Danda is shorter and can function as a standalone trek, while Khopra extends further and reaches a higher viewpoint.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: UNIQUE CHARACTERISTICS */}
          <article id="unique" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Makes the Khopra Ridge Trail Unique?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Community-Owned Lodge Network:</strong> Every lodge along the Khopra circuit is owned and operated by local village communities. Profits go directly into local schools, trail maintenance, and health clinics — a structure that is uncommon even among Nepal&apos;s other community-tourism trails.
              </p>
              <p>
                <strong>Low Crowds and Offbeat Experience:</strong> Where Poon Hill and ABC can feel crowded during peak season, Khopra sees a fraction of the traffic. You will share the trail with far fewer trekkers, and lodges rarely feel packed even in October or April.
              </p>
              <p>
                <strong>Exceptional Dhaulagiri and Annapurna Views:</strong> Few trails in the region offer a direct, sustained view of Dhaulagiri across the Kali Gandaki Gorge alongside close-range views of Annapurna South. Because you are walking a ridge rather than climbing into a valley, these views stay with you for days.
              </p>
              <p>
                <strong>Cultural Connections:</strong> The route moves through Gurung villages like Ghandruk and Magar villages like Swanta, giving trekkers a broader cultural cross-section than most single-valley treks offer.
              </p>
            </div>
          </article>

          {/* SECTION 11: IDEAL PROFILE */}
          <article id="profile" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Ridge Trek Right for You?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Ideal Trekker Profiles:</strong> This route tends to suit photographers chasing uncrowded mountain views, nature-focused hikers who want forest-to-alpine terrain variety, and experienced trekkers looking for something beyond the standard Annapurna circuit. It also works well for first-time Nepal trekkers who want a moderate challenge.
              </p>
              <p>
                <strong>Who May Prefer Another Trek?</strong> If your priority is the highest possible altitude, Mardi Himal or ABC will get you higher. If you only have 4 to 5 days, Poon Hill is the more realistic fit. And if you want heavily developed infrastructure with frequent resupply options, Khopra&apos;s quieter villages may feel sparse.
              </p>
              <p>
                <strong>Best Time of Year:</strong> Spring (March–April) brings rhododendrons into bloom. Autumn (October–November) is the most stable season for visibility and trail conditions. Winter is possible but cold, and monsoon brings mud and leeches.
              </p>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is the Khopra Ridge Trek located?",
                  a: "The Khopra Ridge Trek is located in the Annapurna Conservation Area in north-central Nepal, on a high ridge facing the Dhaulagiri range across the Kali Gandaki Gorge, with Annapurna South rising directly above the trail."
                },
                {
                  q: "How long is the Khopra Ridge Trek?",
                  a: "Most itineraries run 6 to 9 days, depending on your starting point, pacing, and whether you add the Khayer Lake extension."
                },
                {
                  q: "What is the highest point on the route?",
                  a: "Khopra Ridge itself sits at 3,660m. Trekkers who add the Khayer Lake extension climb to 4,660m."
                },
                {
                  q: "Is Khayer Lake included in the standard trek?",
                  a: "No. Khayer Lake is an optional side trip from Khopra Ridge, usually added as an extra day for trekkers who want to reach a higher altitude and visit the sacred lake."
                },
                {
                  q: "How difficult is the Khopra Ridge Trek?",
                  a: "The trek is generally rated moderate, with 5 to 7 hours of daily walking and a gradual elevation profile. It's more demanding than Poon Hill but doesn't require the altitude conditioning needed for Mardi Himal's upper sections or Annapurna Base Camp."
                },
                {
                  q: "Which villages are on the Khopra route?",
                  a: "The standard route passes through Ghandruk, Tadapani, Dobato, Bayeli Kharka, Chhistibung, Khopra Ridge, Swanta, and Ghorepani."
                },
                {
                  q: "Is Khopra Ridge less crowded than Poon Hill?",
                  a: "Yes, significantly. Poon Hill sees very high trail traffic, while Khopra Ridge remains one of the least crowded routes in the Annapurna region."
                },
                {
                  q: "Can beginners complete the Khopra Ridge Trek?",
                  a: "Trekkers with reasonable fitness and some hiking experience generally manage it well. First-time trekkers with no hiking background may find it more comfortable to build up with a shorter route first."
                },
                {
                  q: "What is the best season for the Khopra Ridge Trek?",
                  a: "Spring (March–April) and autumn (October–November) offer the best trail conditions and mountain visibility. Spring also brings rhododendron forests into bloom."
                },
                {
                  q: "Is the Khopra Ridge Trek worth it?",
                  a: "For trekkers who want strong Dhaulagiri and Annapurna views, low crowds, and a route that supports community-owned lodges, Khopra is a strong alternative to the busier classic treks in the region."
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

          {/* SECTION 13: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge route isn&apos;t a shortcut version of Annapurna Base Camp or a quieter Poon Hill — it&apos;s its own trail, built around a ridge-walking design that few other routes in the region replicate. You move through Gurung and Magar villages, climb gradually from forest into alpine terrain, and end up on a ridge with Dhaulagiri on one side and Annapurna South on the other, with the option to push further to Khayer Lake.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              What sets it apart isn&apos;t just the views. It&apos;s the community-owned lodge network funding local schools and clinics, the near-total absence of crowds, and the flexibility to combine it with Poon Hill or Mohare Danda depending on what kind of trip you want.
            </p>
          </article>

          {/* SECTION 14: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Ideal Khopra Ridge Trek With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Not sure which route variation fits your schedule and fitness level — standard, Khayer Lake, or combined with Poon Hill? Contact us and our Pokhara-based guides will help you build the right Khopra Ridge itinerary for your trip.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact our planners &rarr;
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
