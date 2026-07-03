import React from "react";
import Link from "next/link";
import TeahouseFinder from "./TeahouseFinder";

export const metadata = {
  alternates: {
    canonical: "/planning/teahouse-locator",
  },
  title: "Khopra Ridge Teahouse Locator: Complete Lodge Directory, Map & Accommodation Guide",
  description: "Find every teahouse on the Khopra Ridge Trek. Compare lodge prices, facilities, contacts, and community-owned stays across Swanta, Bayeli, Dobato, Khopra Danda, and more.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Lodging &amp; Stays
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Ridge Teahouse Locator
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">If you&apos;re planning the Khopra Ridge Trek, one question comes up before almost anything else: where will you actually sleep each night? Unlike the busier Annapurna circuits, the Khopra Ridge route runs through smaller villages where lodge numbers are limited, and knowing what&apos;s available before you go makes a real difference to your trip.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Community Ratio</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4 of 6 Lodges</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Cooperative village ownership</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Twin Room Rates</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,200 - 2,500 NPR</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Approx. $9 - $19 USD / night</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Highest Overnight Node</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660 Meters</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Khopra Danda Ridge Lodge</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Best Booking Season</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Spring &amp; Autumn</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Highly advise advance booking</span>
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
              <a href="#locator-tool" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Teahouse Finder
              </a>
              <a href="#glance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Stays at a Glance
              </a>
              <a href="#map-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Route Map &amp; Overview
              </a>
              <a href="#directory" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Complete Directory
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation Matrix
              </a>
              <a href="#community-network" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Community Network
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Accommodation Costs
              </a>
              <a href="#booking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Booking Guides
              </a>
              <a href="#stops" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Recommended Stops
              </a>
              <a href="#khayer-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Near Khayer Lake
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Seasonal Availability
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/tours"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book Tours
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* SECTION 1: SEARCH WIDGET */}
          <article id="locator-tool" className="scroll-mt-12 space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">Lodge Directory &amp; Finder Tool
              </h2>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">Use the interactive tool below to search lodge pricing, review available amenities, check contact details, and evaluate which community health clinics or school projects are supported by your overnight stay.
              </p>
            </div>
            
            {/* Interactive database search component */}
            <TeahouseFinder />
          </article>

          {/* SECTION 2: ACCOMMODATION AT A GLANCE */}
          <article id="glance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Accommodation at a Glance
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge teahouse locator is built to help you map out exactly where to stay, from Ghorepani all the way to Khopra Danda and the Khayer Lake side trip. We&apos;ve organized everything by village and trekking order, so you can plan your itinerary stop by stop rather than scrolling through a long, unsorted list.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">Typical Room Prices</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Twin-shared rooms range from 1,200 NPR (~$9 USD) to 2,500 NPR (~$19 USD) per night. Room rates are quoted separately from meals; teahouses expect guests to eat dinner and breakfast at the lodge.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">Overnights stops</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Key overnight nodes include Ghorepani, Tadapani, Dobato, Bayeli Kharka, Chhistibung, Khopra Ridge (Khopra Danda), Swanta, and Ghara.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm">Facilities &amp; Wi-Fi</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed font-medium">Lower altitude lodges offer electric showers, attached bathrooms, and Wi-Fi. Higher community lodges utilize solar systems, common bathrooms, and hot water bottle warmers.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: MAP & ROUTE OVERVIEW */}
          <article id="map-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Teahouse Map &amp; Route Overview
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Understanding where lodges sit along the trail helps you plan realistic daily distances and avoid arriving at a village only to find it&apos;s not actually an overnight stop on your route. A common route progression looks like this: Ghorepani or Tadapani &rarr; Dobato &rarr; Bayeli Kharka / Chhistibung &rarr; Khopra Ridge (Khopra Danda) &rarr; Swanta &rarr; Ghara.
            </p>

            <div className="overflow-x-auto bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">Village Accommodation Locations</h4>
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Village</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Approximate Altitude</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Typical Role in Itinerary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {[
                    { village: "Swanta", alt: "2,200m", role: "Lower-altitude rest stop, often near the end of a loop" },
                    { village: "Tadapani", alt: "2,630m", role: "Common starting or connecting point" },
                    { village: "Ghorepani", alt: "2,860m", role: "Larger village, often combined with Poon Hill" },
                    { village: "Chhistibung", alt: "2,975m", role: "Mid-route stop before the final climb" },
                    { village: "Bayeli Kharka", alt: "3,425m", role: "High-altitude stop close to Khopra Ridge" },
                    { village: "Khopra Ridge (Khopra Danda)", alt: "3,660m", role: "Highest overnight stop, base for Khayer Lake" }
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2.5 font-semibold text-stone-900">{item.village}</td>
                      <td className="px-4 py-2.5">{item.alt}</td>
                      <td className="px-4 py-2.5">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 4: COMPLETE DIRECTORY DESCRIPTION */}
          <article id="directory" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Complete Lodge Directory
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">This is the village-by-village breakdown of lodge names, rates, contact details, and what each one offers.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Tadapani Lodges</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  <strong>Tadapani Guest House</strong>sits at the Tadapani junction at around 2,630m. A twin-shared room runs about 2,000 NPR per night (Contact: +977-984-602981). Facilities include Wi-Fi, a solar shower, and a common bathroom. This lodge is privately owned and supports local loaders working out of the Tadapani junction.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Dobato &amp; Bayeli Kharka Lodges</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">Dobato teahouses typically range between 1,200–1,800 NPR with basic solar setup. Further up sits <strong>Bayeli Kharka Community Lodge</strong> (3,425m), costing around 1,500 NPR per night (+977-980-871234). Features solar charging, hot showers, common bathrooms, and a warm dining room. Revenues directly support the Nangi community health post and local midwife program.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Chhistibung &amp; Khopra Ridge Lodges</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  <strong>Chhistibung Community Lodge</strong> (2,975m) offers twin rooms for ~1,500 NPR (+977-981-992384), supporting local wildlife conservation patrols. At the peak, <strong>Khopra Ridge Community Lodge</strong> (3,660m) offers rooms for ~1,800 NPR (+977-984-722101). Facilities include Wi-Fi, solar charging, hot water bottles, and panoramic dining room views. Margins support the local Nangi High School and valley Wi-Fi expansion.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base">Swanta, Ghorepani &amp; Ghara Lodges</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  <strong>Swanta Community Lodge</strong> (2,200m) offers twin rooms for ~1,200 NPR (+977-984-762891), featuring Wi-Fi, attached bathrooms, local yak cheese, and funding the local high school teacher salaries. <strong>Hotel Snowland Ghorepani</strong> (2,860m) is privately owned at ~2,500 NPR (+977-61-460122) featuring electric hot showers, internal heating, and attached bathrooms. Ghara village lodges down the descent offer similar facilities to Swanta.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: COMPARISON TABLE */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation Comparison Table
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">This table summarizes the verified lodges in our directory so you can compare at a glance before building your itinerary.
            </p>

            <div className="overflow-x-auto bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Lodge</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Village</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Altitude</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Twin Rate (NPR)</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Wi-Fi</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Hot Shower</th>
                    <th className="px-4 py-2 text-left font-bold text-stone-900">Ownership</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {[
                    { name: "Swanta Community Lodge", village: "Swanta", alt: "2,200m", rate: "~1,200", wifi: "Yes", shower: "Yes", owner: "Community" },
                    { name: "Tadapani Guest House", village: "Tadapani", alt: "2,630m", rate: "~2,000", wifi: "Yes", shower: "Solar shower", owner: "Private" },
                    { name: "Hotel Snowland Ghorepani", village: "Ghorepani", alt: "2,860m", rate: "~2,500", wifi: "Yes", shower: "Electric", owner: "Private" },
                    { name: "Chhistibung Community Lodge", village: "Chhistibung", alt: "2,975m", rate: "~1,500", wifi: "No", shower: "Yes", owner: "Community" },
                    { name: "Bayeli Kharka Community Lodge", village: "Bayeli Kharka", alt: "3,425m", rate: "~1,500", wifi: "No", shower: "Yes", owner: "Community" },
                    { name: "Khopra Ridge Community Lodge", village: "Khopra Danda", alt: "3,660m", rate: "~1,800", wifi: "Yes", shower: "Hot water bottles", owner: "Community" }
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 font-semibold text-stone-900">{item.name}</td>
                      <td className="px-4 py-3">{item.village}</td>
                      <td className="px-4 py-3">{item.alt}</td>
                      <td className="px-4 py-3 font-bold text-stone-850">{item.rate}</td>
                      <td className="px-4 py-3">{item.wifi}</td>
                      <td className="px-4 py-3">{item.shower}</td>
                      <td className="px-4 py-3">{item.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="space-y-2">
                <h4 className="font-bold text-stone-905 text-sm">Facility vs Altitude Rates</h4>
                <p className="text-[11px] leading-relaxed text-stone-550">Ghorepani offers the most expensive stays because it supports electric heaters and showers, which are more expensive to run than the solar heating and hot water bottles utilized at the community-owned lodges higher up the ridge.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-905 text-sm">Peak Reservation Strategy</h4>
                <p className="text-[11px] leading-relaxed text-stone-550">Because room counts at Khopra Ridge Lodge and Bayeli Kharka Lodge are low and alternatives at those altitudes do not exist, prioritizing advance bookings for those two high points is critical.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: COMMUNITY LODGE NETWORK */}
          <article id="community-network" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Community Lodge Network on Khopra Ridge
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">One of the things that sets the Khopra Ridge Trek apart from many other teahouse routes in Nepal is the density of community-owned lodges along a relatively short stretch of trail.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">How the Community Model Works</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Revenues from room bookings and dining logs are directed straight back into the local villages. This helps fund teacher salaries (at Swanta Secondary School), medical midwife systems and clinics (at Nangi community health posts via Bayeli Lodge), and environmental protection patrols (funded by Chhistibung Lodge). Trekkers get a unique cultural interaction, and communities retain direct economic tourism benefits.
              </p>
            </div>
          </article>

          {/* SECTION 7: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Much Does Accommodation Cost?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Lodge room rates remain flat during low and peak seasons because community lodges charge fixed rates. However, dining costs typically scale up at higher altitudes because food items must be carried up by porters and mules. Always budget for the combined &quot;bed plus board&quot; daily cost since teahouses expect guests to dine on-site.
            </p>
          </article>

          {/* SECTION 8: BOOKING */}
          <article id="booking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Booking Lodges on the Khopra Ridge Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Walk-in reservations work for lower villages, but the highest points at Khopra Danda and Bayeli Kharka can fill up completely during peak months (Spring/Autumn). Independent trekkers should call ahead from the previous village using the contact numbers in our locator tool or start walking early to secure a room before the late afternoon rush.
            </p>
          </article>

          {/* SECTION 9: STOPS */}
          <article id="stops" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Overnight Stops on the Khopra Ridge Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm"> 4-Day Rapid Pace</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Day 1: Tadapani &bull; Day 2: Bayeli Kharka &bull; Day 3: Khopra Ridge &bull; Day 4: Swanta (and exit). Best for fit trekkers.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm"> 5-Day Comfort Loop</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Day 1: Tadapani &bull; Day 2: Dobato &bull; Day 3: Bayeli Kharka &bull; Day 4: Khopra Ridge &bull; Day 5: Swanta/Ghara. Spreads acclimatization evenly.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm">Khayer Lake Stay</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">Add an extra night at Khopra Ridge Community Lodge to use as a base for the high-altitude day hike up to the sacred lake.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: ACCOMMODATION NEAR KHAYER LAKE */}
          <article id="khayer-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Accommodation Near Khayer Lake
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">There is no overnight accommodation directly at Khayer Lake (4,660m). The closest lodge is <strong>Khopra Ridge Community Lodge</strong> (3,660m), located a 5 to 6-hour walk below. Trekkers use it as their base, starting the lakeside day-hike early in the morning and returning to the same lodge for their second night.
            </p>
          </article>

          {/* SECTION 11: SEASONAL AVAILABILITY */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Seasonal Lodge Availability
            </h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>Spring &amp; Autumn:</strong>High visitor count. Stays must be booked in advance as lodges operate at maximum capacity.</li>
              <li><strong>Winter:</strong>Extremely cold. Stays have high room availability, but solar water and heating systems are less reliable, and some lodges may close.</li>
              <li><strong>Monsoon:</strong>Heavy rain. Stays are quiet with high availability, but trails can be muddy and supplies limited.</li>
            </ul>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Teahouses
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where should I stay on the Khopra Ridge Trek?",
                  a: "It depends on your itinerary, but the main overnight stops are Tadapani, Dobato, Bayeli Kharka or Chhistibung, Khopra Ridge (Khopra Danda), and Swanta or Ghara. Most trekkers spread these across four to five days, using the higher-altitude stops as acclimatization points before reaching Khopra Ridge itself."
                },
                {
                  q: "How much do Khopra Ridge lodges cost?",
                  a: "Twin-shared rooms generally range from about 1,200 NPR (around $9 USD) to 2,500 NPR (around $19 USD) per night, depending on the village and facilities. Meals are usually charged separately and often add more to your daily total than the room itself."
                },
                {
                  q: "Do I need to book accommodation in advance on Khopra Ridge?",
                  a: "For most of the route, walk-in accommodation is common. However, during peak season (spring and autumn), advance arrangement is strongly recommended for the higher-altitude stops at Khopra Ridge and Bayeli Kharka, where room numbers are limited and alternatives are scarce."
                },
                {
                  q: "Are Khopra Ridge lodges community-owned?",
                  a: "Many are. Lodges in Swanta, Bayeli Kharka, Chhistibung, and Khopra Ridge itself operate under a community ownership model, with profits reinvested into local schools, health posts, conservation patrols, or infrastructure like Wi-Fi access."
                },
                {
                  q: "Is Wi-Fi available at Khopra Ridge teahouses?",
                  a: "Wi-Fi availability is inconsistent. It's present at lodges in Swanta, Ghorepani, and Khopra Ridge itself, but generally unavailable at the community lodges in Bayeli Kharka and Chhistibung. If staying connected matters, plan around these gaps rather than assuming coverage."
                },
                {
                  q: "Can I stay overnight at Khayer Lake?",
                  a: "Not directly. There's no dedicated accommodation at Khayer Lake itself — instead, trekkers base themselves at Khopra Ridge Community Lodge and visit the lake as an early-morning day hike, returning to the same lodge afterward."
                },
                {
                  q: "Which village has the best accommodation on the trek?",
                  a: "Ghorepani offers the most developed facilities, including electric hot showers and internal heating, though it's also the most expensive stop in this directory. For a balance of comfort, community impact, and value, Swanta and Khopra Ridge Community Lodge both stand out for their facility lists relative to price."
                },
                {
                  q: "What facilities should I expect at Khopra Ridge teahouses?",
                  a: "Expect a twin-shared room, a communal dining area, and either an attached or common bathroom depending on the lodge. Solar charging is widespread, hot showers are common but not guaranteed at every stop, and Wi-Fi is available at some lodges but not all."
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
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge Trek doesn&apos;t have the dense lodge networks you&apos;ll find on busier Annapurna routes, but what it does have is a tightly connected chain of community-run teahouses where your accommodation choice genuinely supports the villages you&apos;re passing through. From the affordable, locally funded lodges in Swanta and Bayeli Kharka to the higher-comfort options in Ghorepani, this directory gives you a realistic picture of what to expect, what it costs, and how to plan your overnight stops in trekking order.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">The key practical takeaway is this: most of the route is flexible, but the highest-altitude stops at Khopra Ridge and Bayeli Kharka deserve advance attention, especially if you&apos;re trekking during spring or autumn. Build your itinerary around these pinch points first, and the rest of your accommodation plan tends to fall into place naturally.
            </p>
          </article>

          {/* SECTION 14: CTA & CONTINUE PLANNING */}
          <section id="booking-cta" className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need help reserving lodges along the Khopra Ridge route?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Skip the phone calls and let our local team arrange your accommodation in advance — especially useful for the high-altitude stops at Khopra Ridge and Bayeli Kharka during peak season.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Book Your Package &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This accommodation directory is regularly compiled and verified by our field operators and cooperative community lodge managers on Khopra Ridge. Contact numbers and pricing are monitored seasonal bases to ensure maximum reliability for planning.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
