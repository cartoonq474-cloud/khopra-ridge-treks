import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/syauli-bazaar-guide",
  },
  title: "Syauli Bazaar Trailhead Guide: Routes, Access, Distance & Trekking Information",
  description: "Plan your trek from Syauli Bazaar with our complete trailhead guide — transport from Pokhara, trail distances, elevation gain, permits, routes to Ghandruk, Dobato, Mohare Danda, and Khopra Ridge, plus seasonal tips and itineraries.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Low Valley Road Trailhead
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Syauli Bazaar Trailhead Guide: Routes, Access, Distance &amp; Trekking Info
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Syauli Bazaar sits quietly on the banks of the Modi Khola, and for most travelers heading toward Ghandruk it&apos;s little more than a name on a jeep window. But for trekkers who know the region, Syauli Bazaar represents something more useful: it&apos;s the lowest point along the road where you can realistically begin walking into the Annapurna Conservation Area on foot.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,220m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">4,002 feet (Modi Khola Valley)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">First Climb</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Ghandruk</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">1,940m (+720m gain)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Hiking Time</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2.5–3.5 Hrs</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">To Ghandruk center on steps</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Route Type</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Stone Steps</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Through farmland &amp; villages</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Snapshot
              </a>
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Where is Syauli Bazaar?
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">How to Reach from Pokhara
              </a>
              <a href="#starting-point-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trailhead Comparisons
              </a>
              <a href="#trail-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trail Overview
              </a>
              <a href="#ghandruk-trek" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Syauli to Ghandruk Guide
              </a>
              <a href="#onward-routes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Onward Trekking Routes
              </a>
              <a href="#difficulty-preparation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Difficulty &amp; Prep
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Permits Required
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Visit
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Lodging &amp; Facilities
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Suggested Itineraries
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3 font-sans">Quick Facts &amp; Key Trailhead Sights
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">Many people drive straight past Syauli Bazaar, continuing up the rough river road to Kimche or even Ghandruk itself to save time. Starting at Syauli Bazaar instead means trading an hour of bumpy jeep travel for a walk through terraced fields, Gurung farm settlements, and small waterfalls — the kind of gradual entry into the mountains that sets the tone for the rest of a trek.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">This guide covers everything you need to plan a trek that begins at Syauli Bazaar: how to get there, what the trail actually involves, which routes connect from it, and how it compares to starting higher up the road.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Detail</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Elevation</td>
                    <td className="px-6 py-4 text-stone-600">1,220 m (4,002 ft)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Region</td>
                    <td className="px-6 py-4 text-stone-600">Annapurna Conservation Area, Modi Khola Valley</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Nearest City</td>
                    <td className="px-6 py-4 text-stone-600">Pokhara (approx. 2.5–5 hours away depending on transport)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">First Destination</td>
                    <td className="px-6 py-4 text-stone-600"><Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk</Link> (1,940 m), roughly 2.5–3.5 hours on foot</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Permits</td>
                    <td className="px-6 py-4 text-stone-600">ACAP Entry Permit &amp; TIMS Card</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Trek Links</td>
                    <td className="px-6 py-4 text-stone-600">Khopra Ridge Trek, Mohare Danda, Ghorepani Loop</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHERE IS SYAULI */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Syauli Bazaar and Why Is It an Important Trailhead?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Syauli Bazaar is a small riverside settlement in the lower Modi Khola Valley, on the road that connects Pokhara to Ghandruk via <Link href="/nodes/nayapul-transit-hub" className="text-emerald-700 font-bold hover:underline">Nayapul</Link>and Birethanti. It sits below <Link href="/nodes/kimche-trailhead" className="text-emerald-700 font-bold hover:underline">Kimche</Link>and well below Ghandruk village, on the same dirt road that most Annapurna-bound vehicles use.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Subtropical Valley Landscape</h4>
                <p className="text-xs text-stone-500 leading-relaxed">At 1,220 meters, Syauli Bazaar sits in a warm, subtropical river valley. The Modi Khola runs alongside the settlement, and the surrounding hillsides are covered in terraced rice and millet fields worked by local Gurung families. The landscape here feels distinctly different from the high alpine scenery further along the trek. Expect green terraces, scattered farmhouses, and patches of forest.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base font-sans">Why Trekkers Choose to Start Here</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Most independent and guided treks toward Ghandruk now start by vehicle at Kimche, which cuts out the climb from Syauli Bazaar. Trekkers who start here value the gradual transition zone — a chance to walk through working farmland, greet local families, and feel the terrain change beneath their feet. It also reduces time spent on the rough river road.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Reach Syauli Bazaar from Pokhara
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-base">Private Jeep and Taxi Options</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The most practical way to reach Syauli Bazaar is by private jeep or taxi from Pokhara. The drive takes around 2.5 hours, following the main road through Nayapul and Birethanti before continuing along the unpaved river road. Expect to pay somewhere in the range of $70–$90 USD per vehicle.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="font-bold text-stone-950 text-base">Local Bus &amp; Shared Jeep Connections</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Budget travelers can take a local bus from Pokhara toward Nayapul or Birethanti, which typically takes 4–5 hours and costs around $3–$5 USD per person. From either drop-off point, you&apos;ll need to continue to Syauli Bazaar by shared local jeep or on foot along the dirt road.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-amber-950 text-xs leading-relaxed">
              <strong>Road Conditions and Seasonal Access:</strong>The river road beyond Birethanti is unpaved, narrow, and can be rough depending on recent weather. During the dry months (autumn and spring), the road is generally passable. During the monsoon, sections of this road can become muddy, rutted, or temporarily blocked by small landslides. Confirm current road status before departure.
            </div>
          </article>

          {/* SECTION 4: COMPARISON TABLE */}
          <article id="starting-point-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Should You Start at Syauli Bazaar, Kimche, or Ghandruk?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">This is one of the most practical decisions trekkers face before setting out. Here is how the three common starting points compare:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Trailhead</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Elevation</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Road Access</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Walking to Ghandruk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Syauli Bazaar</td>
                    <td className="px-4 py-2">1,220 m</td>
                    <td className="px-4 py-2">Full vehicle access (unpaved)</td>
                    <td className="px-4 py-2 text-emerald-600 font-bold">~2.5–3.5 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Kimche</td>
                    <td className="px-4 py-2">1,640 m</td>
                    <td className="px-4 py-2">Full vehicle access (rough road)</td>
                    <td className="px-4 py-2 text-stone-600">~1–1.5 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold text-stone-900">Ghandruk</td>
                    <td className="px-4 py-2">1,940 m</td>
                    <td className="px-4 py-2">Full vehicle access (steep road)</td>
                    <td className="px-4 py-2 text-stone-500">Minimal (arrive directly)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Choose Syauli Bazaar if:</strong>You want a fuller walking experience, enjoy lower-elevation village scenery, and have an extra hour or two in your schedule.</li>
                <li><strong>Choose Kimche if:</strong>You want a shorter first day while still experiencing some of the stone-step trail.</li>
                <li><strong>Choose Ghandruk if:</strong>You&apos;re short on time, have mobility considerations, or simply want to begin your trek already inside the main village.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 5: TRAIL OVERVIEW */}
          <article id="trail-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Syauli Bazaar Trail Overview
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Understanding the path profile and navigation parameters before taking the first step helps prevent fatigue:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Distance &amp; Time</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The climb involves an elevation gain of approximately 720 meters, rising from 1,220 m to 1,940 m, and typically takes 2.5 to 3.5 hours depending on pacing and group size. It is a sustained uphill effort.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Trail Surface</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The trail surface is predominantly stone steps, a hallmark of trekking routes throughout the Annapurna foothills. These steps pass through millet and rice terraces, small clusters of Gurung farmhouses, and patches of forest.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base font-sans">Navigation</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Navigation is straightforward. The trail follows a single main path with occasional junctions near local farms. Signage is generally present, but keeping an offline map download handy is still recommended.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: SYAULI TO GHANDRUK */}
          <article id="ghandruk-trek" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Syauli Bazaar to Ghandruk Trek Guide
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">From Syauli Bazaar, the trail begins close to the river before turning uphill through a series of terraced fields. You&apos;ll pass through small farm clusters where local families grow millet, maize, and vegetables, with stone farmhouses dotting the hillside.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">As you climb, the trail enters patches of forest that offer welcome shade, particularly useful if you&apos;re walking during the warmer months. The final stretch into Ghandruk opens up into the village itself, with its characteristic stone houses, slate roofs, and views toward the Annapurna massif on clear days.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">Climb Profile Reference</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2">
                <li><strong>Starting Elevation:</strong> 1,220 m</li>
                <li><strong>Ending Elevation:</strong> 1,940 m</li>
                <li><strong>Net Elevation Gain:</strong> ~720 m</li>
                <li><strong>Average Hiking Duration:</strong> 2.5–3.5 hours</li>
                <li><strong>Sufficient Water Refills:</strong>Carry at least 2 litres; limited shops are present on the lower steps.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 7: ONWARD ROUTES */}
          <article id="onward-routes" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trekking Routes That Begin at Syauli Bazaar
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Syauli Bazaar is an entry point into a much larger network of trails across the lower Annapurna region:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Syauli Bazaar to Ghandruk and Tadapani</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">After reaching Ghandruk, most trekkers continue toward <Link href="/nodes/tadapani-guide" className="text-emerald-700 font-bold hover:underline">Tadapani</Link>, climbing further into rhododendron forest. This combination — Syauli Bazaar to Ghandruk on day one, then onward to Tadapani on day two — is a popular start.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Syauli Bazaar to Dobato and Muldai Viewpoint</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">For trekkers heading toward Dobato, Syauli Bazaar serves as a natural starting point for a multi-day route that climbs progressively higher. Dobato sits at 3,432m, providing a gateway to Muldai Viewpoint.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Syauli Bazaar to Mohare Danda</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Starting from Syauli Bazaar, trekkers can link up to the community lodge trekking network of Mohare Danda, where accommodation profits directly fund local schools and infrastructure.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Syauli Bazaar to Khopra Ridge</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">For longer itineraries, Syauli Bazaar anchors a multi-day trek toward Khopra Ridge (3,660m) via Ghandruk, Tadapani, and Dobato, offering a quieter, less commercial experience.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: DIFFICULTY & PREPARATION */}
          <article id="difficulty-preparation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Trail Difficulty, Fitness Requirements, and Trek Preparation
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Syauli Bazaar to Ghandruk section is best described as moderate. It&apos;s not technically difficult, but the sustained stone-step climb makes it more physically demanding than its short distance suggests.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">Recommended Fitness Levels</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2">
                <li><strong>Beginners:</strong>Manageable with realistic pacing and rest breaks; expect the climb to feel demanding due to the sustained step profile. You can gauge pacing via our <Link href="/planning/trekking-fitness-plan" className="text-emerald-700 font-bold hover:underline">Fitness Plan</Link>.</li>
                <li><strong>Intermediate Trekkers:</strong>Comfortable, with energy to spare for onward walking the same day if continuing toward Tadapani.</li>
                <li><strong>Experienced Trekkers:</strong>Will likely treat this as a warm-up section before tackling steeper terrain toward Dobato or Khopra Ridge.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 9: PERMITS REQUIRED */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Permits Required for Trekking from Syauli Bazaar
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Trekking through Syauli Bazaar and onward into the conservation area requires an **Annapurna Conservation Area Project (ACAP)** permit. This permit supports conservation efforts and community development across the region and is required for all trekkers.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Permit checkpoints are typically located at key entry points into the conservation area, often around Ghandruk or earlier checkpoints along the approach road. Trekkers should have permits ready for inspection. For a detailed breakdown of costs, check our <Link href="/planning/permit-fees-explained" className="text-emerald-700 font-bold hover:underline">Permit Fees Guide</Link>.
            </p>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Visit Syauli Bazaar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm font-sans font-sans">Spring (Mar–May)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Rhododendrons along higher paths bloom. Daytime temperatures in the lower valley are comfortable for walking, though afternoon haze can occur.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm font-sans font-sans font-sans">Autumn (Sep–Nov)</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">The most popular season. Clear skies, pleasant valley temperatures, and mountain views from higher points are at their best.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Winter (Dec–Feb)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Cold temperatures at higher elevations, but lower sections around Syauli Bazaar and Ghandruk remain accessible and relatively mild.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm">Monsoon (Jun–Aug)</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Monsoon trekking is possible but comes with challenges. Slippery stone steps, road access mud, and cloud cover blocking views.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation, Food, and Facilities
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Syauli Bazaar itself has very limited formal accommodation, which is part of why most trekkers treat it as a starting point rather than an overnight stop. Tea houses become consistently available from Ghandruk onward.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Lodging</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Basic but comfortable tea house rooms are available in Ghandruk and onward. Community-managed lodges prioritize simple, locally run hospitality.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Food Availability</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Tea houses serve staples: dal bhat, noodle soups, fried rice, and basic breakfast. Carry snacks for the initial Syauli to Ghandruk climb.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Connectivity &amp; Water</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Mobile signal is generally available. Charging and Wi-Fi are available from Ghandruk onward. Carry reusable filter bottles for water.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: SUGGESTED ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Suggested Trek Itineraries Starting from Syauli Bazaar
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm font-sans">Short 2-Day Trek</h4>
                <ul className="list-disc pl-5 text-[10px] text-stone-500 space-y-1">
                  <li><strong>Day 1:</strong>Drive Pokhara to Syauli Bazaar, trek to Ghandruk (2.5–3.5 hours), overnight in Ghandruk.</li>
                  <li><strong>Day 2:</strong>Explore Ghandruk village, then descend to road access for Pokhara return.</li>
                </ul>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm font-sans"> 4–5 Day Dobato and Muldai Trek</h4>
                <ul className="list-disc pl-5 text-[10px] text-stone-500 space-y-1">
                  <li><strong>Day 1:</strong>Syauli Bazaar to Ghandruk</li>
                  <li><strong>Day 2:</strong>Ghandruk to Tadapani</li>
                  <li><strong>Day 3:</strong>Tadapani to Dobato</li>
                  <li><strong>Day 4:</strong>Sunrise hike to Muldai Viewpoint, descend to Swanta</li>
                  <li><strong>Day 5:</strong>Return trek to road access and Pokhara return.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Syauli Bazaar
            </h2>

            <div className="space-y-4 mt-6 font-sans">
              {[
                {
                  q: "Where is Syauli Bazaar located?",
                  a: "Syauli Bazaar is a small riverside village in the lower Modi Khola Valley, on the road between Pokhara and Ghandruk via Nayapul and Birethanti, at an elevation of around 1,220 meters."
                },
                {
                  q: "How do I reach Syauli Bazaar from Pokhara?",
                  a: "You can reach Syauli Bazaar by private jeep or taxi (around 2.5 hours, $70–$90 USD per vehicle) or by local bus to Nayapul or Birethanti followed by a shared jeep for the remaining stretch (4–5 hours total, $3–$5 USD per person)."
                },
                {
                  q: "Can vehicles reach Syauli Bazaar?",
                  a: "Yes, Syauli Bazaar has road access via an unpaved river road, and both private and shared vehicles regularly travel this route, though conditions can vary seasonally."
                },
                {
                  q: "How difficult is the hike from Syauli Bazaar to Ghandruk?",
                  a: "The hike is moderately difficult, involving a sustained climb of approximately 720 meters via stone steps, typically taking 2.5–3.5 hours."
                },
                {
                  q: "How long does it take to trek from Syauli Bazaar to Ghandruk?",
                  a: "Most trekkers complete this section in 2.5 to 3.5 hours, depending on fitness level and the number of rest stops."
                },
                {
                  q: "What permits are required for trekking from Syauli Bazaar?",
                  a: "Trekkers need an Annapurna Conservation Area Project (ACAP) permit to enter the conservation area, with checkpoints typically located around Ghandruk or earlier along the approach."
                },
                {
                  q: "Is Syauli Bazaar suitable for beginner trekkers?",
                  a: "Yes, with realistic expectations about the climb. The trail is non-technical but involves sustained uphill walking that beginners should pace carefully."
                },
                {
                  q: "Are there tea houses in Syauli Bazaar?",
                  a: "Accommodation in Syauli Bazaar itself is very limited; most trekkers continue to Ghandruk, where tea houses and community lodges are readily available."
                },
                {
                  q: "What is the best time to visit Syauli Bazaar?",
                  a: "Spring (March–May) and autumn (September–November) offer the best trekking conditions, with clear views and comfortable temperatures."
                },
                {
                  q: "Is it better to start trekking from Syauli Bazaar or Kimche?",
                  a: "Syauli Bazaar offers a fuller walking experience with more time in village and farmland scenery, while Kimche offers a shorter first day. The right choice depends on your available time and fitness level."
                },
                {
                  q: "Can I trek to Dobato from Syauli Bazaar?",
                  a: "Yes, Syauli Bazaar can serve as the starting point for a multi-day route to Dobato via Ghandruk and Tadapani, typically as part of a 4–5 day itinerary."
                },
                {
                  q: "Can I reach Khopra Ridge starting from Syauli Bazaar?",
                  a: "Yes, Syauli Bazaar can anchor a longer 6–8 day itinerary toward Khopra Ridge, passing through Ghandruk, Tadapani, and Dobato along the way."
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
            <h2 className="text-2xl font-bold text-stone-950 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">Syauli Bazaar isn&apos;t the fastest way into the Annapurna region, but for trekkers willing to spend an extra two or three hours walking, it offers something most road-accessible trailheads can&apos;t: a genuine transition from valley life into mountain trekking, on foot, through terraced farmland and Gurung villages.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Whether your plans involve a short overnight to Ghandruk, a multi-day route toward Dobato and Muldai Viewpoint, a community lodge trek to Mohare Danda, or a longer journey to Khopra Ridge, Syauli Bazaar gives you a meaningful and scenic starting point for all of them.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans">Plan Your Trek From Syauli Bazaar</h3>
              <p className="text-stone-300 text-sm leading-relaxed">If you&apos;re putting together a trekking itinerary that starts at Syauli Bazaar, we can help with the logistics. We arrange private hotel pickups in Pokhara with comfortable jeeps driving directly to Syauli Bazaar or higher trailheads, and our local guides can help you choose the right route.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire now &rarr;
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
            <span className="text-2xl mt-0.5 font-sans"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">First-Hand Expert Insight</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and road accessibility details based on active trail checks.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
