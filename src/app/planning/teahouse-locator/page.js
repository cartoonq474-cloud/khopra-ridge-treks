import React from "react";
import Link from "next/link";
import TeahouseFinder from "./TeahouseFinder";

export const metadata = {
  alternates: {
    canonical: "/planning/teahouse-locator",
  },
  title: "Khopra Ridge Teahouse Locator: Complete Guide to Lodges, Prices & Accommodation",
  description: "Plan every overnight stop on the Khopra Ridge Trek with our complete teahouse locator. Compare lodge prices, facilities, booking tips, and village-by-village accommodation from Ghorepani to Khopra Danda.",
};

export default function Page() {
  const trekkingHours = [
    { segment: "Ghorepani → Tadapani", time: "3–4 hours" },
    { segment: "Tadapani → Dobato", time: "4–5 hours" },
    { segment: "Dobato → Bayeli Kharka", time: "3–4 hours" },
    { segment: "Bayeli Kharka → Khopra Ridge", time: "2–3 hours" },
    { segment: "Khopra Ridge → Swanta", time: "4–5 hours" },
    { segment: "Swanta → Ghara", time: "2–3 hours" }
  ];

  const priceByAltitude = [
    { lodge: "Swanta Community Lodge", village: "Swanta", altitude: "2,200m", priceNpr: "~1,200", priceUsd: "~$9" },
    { lodge: "Tadapani Guest House", village: "Tadapani", altitude: "2,630m", priceNpr: "~2,000", priceUsd: "~$15" },
    { lodge: "Hotel Snowland", village: "Ghorepani", altitude: "2,860m", priceNpr: "~2,500", priceUsd: "~$19" },
    { lodge: "Chhistibung Community Lodge", village: "Chhistibung", altitude: "2,975m", priceNpr: "~1,500", priceUsd: "~$11" },
    { lodge: "Bayeli Kharka Community Lodge", village: "Bayeli Kharka", altitude: "3,425m", priceNpr: "~1,500", priceUsd: "~$11" },
    { lodge: "Khopra Ridge Community Lodge", village: "Khopra Danda", altitude: "3,660m", priceNpr: "~1,800", priceUsd: "~$14" }
  ];

  const facilityMatrix = [
    { lodge: "Swanta Community Lodge", wifi: "Yes", shower: "Solar", charge: "Yes", bath: "Attached", heat: "Limited" },
    { lodge: "Tadapani Guest House", wifi: "Yes", shower: "Solar", charge: "Yes", bath: "Common", heat: "None" },
    { lodge: "Hotel Snowland Ghorepani", wifi: "Yes", shower: "Electric", charge: "Yes", bath: "Attached", heat: "Electric heater" },
    { lodge: "Chhistibung Community Lodge", wifi: "No", shower: "Solar", charge: "Yes", bath: "Common", heat: "None" },
    { lodge: "Bayeli Kharka Community Lodge", wifi: "No", shower: "Solar", charge: "Yes", bath: "Common", heat: "Dining room stove" },
    { lodge: "Khopra Ridge Community Lodge", wifi: "Yes (limited)", shower: "Hot water bottles", charge: "Yes (fee)", bath: "Common", heat: "Hot water bottles" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Teahouse Locator</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Teahouse &amp; Lodge Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Teahouse Locator
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Complete guide to lodges, prices &amp; accommodation. Plan every overnight stop on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link> from Ghorepani to Khopra Danda.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Confirmed Lodges</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">6 to 8 Nodes</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Community &amp; private stays</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Twin Room Rates</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">1,200–2,500 NPR</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Approx. $9–$19 USD / night</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Highest Overnight Node</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660 Meters</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Khopra Danda Ridge Lodge</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Booking Priority</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Spring &amp; Autumn</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Advance booking critical</span>
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
              <a href="#locator-tool" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Teahouse Finder
              </a>
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Accommodation Overview
              </a>
              <a href="#village-directory" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Village-by-Village Directory
              </a>
              <a href="#distances" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Distance &amp; Hours
              </a>
              <a href="#teahouse-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Staying Is Like
              </a>
              <a href="#cost-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Cost Breakdown
              </a>
              <a href="#food-meals" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Meal Costs
              </a>
              <a href="#facilities-matrix" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodge Facilities Comparison
              </a>
              <a href="#community-lodges" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Community-Owned Lodges
              </a>
              <a href="#booking-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Book Lodges
              </a>
              <a href="#khayer-lake-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation Near Khayer Lake
              </a>
              <a href="#seasonal-availability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Availability
              </a>
              <a href="#best-lodges" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Lodges by Type
              </a>
              <a href="#solo-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solo Trekker Tips
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
                Inquire Lodge Reservations
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* SECTION: INTERACTIVE SEARCH WIDGET */}
          <article id="locator-tool" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Interactive Teahouse Finder &amp; Database
            </h2>
            <TeahouseFinder />
          </article>

          {/* SECTION: INTRODUCTION & OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Overview of Accommodation on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                If you&apos;re planning the Khopra Ridge Trek, one of the most important questions you&apos;ll need to answer before you start walking is a simple one: where will you actually sleep each night?
              </p>
              <p>
                This Khopra Ridge Teahouse Locator exists to answer that question completely. Unlike the busier Annapurna Base Camp or Poon Hill routes — where lodges are almost impossible to miss — the Khopra Ridge route passes through smaller, quieter villages with far fewer accommodation options. Knowing which villages have lodges, how much rooms cost, which stops require advance booking, and what conditions are actually like on the ground makes a real and practical difference to your trip.
              </p>
              <p>
                <strong>How many teahouses are available?</strong> The main circuit features approximately 6 to 8 confirmed overnight lodges, dominated by community-owned cooperative stays.
              </p>
              <p>
                <strong>Typical room prices:</strong> Twin-shared rooms range from ~1,200 NPR (~$9 USD) per night at community lodges to ~2,500 NPR (~$19 USD) at private guesthouses in Ghorepani.
              </p>
              <p>
                <strong>Highest overnight stop:</strong> <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Community Lodge</Link> at 3,660 metres altitude beneath Dhaulagiri and Annapurna South.
              </p>
              <p>
                <strong>Advance booking:</strong> Essential in Spring (March–May) and Autumn (September–November) for Khopra Danda and Bayeli Kharka lodges due to strict room limits.
              </p>
            </div>
          </article>

          {/* SECTION: VILLAGE DIRECTORY */}
          <article id="village-directory" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Village-by-Village Khopra Ridge Lodge Directory
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              {/* Tadapani */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">1. Tadapani Accommodation</h3>
                  <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-semibold">2,630m | Private Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> Tadapani Guest House. Twin-shared room ~2,000 NPR (~$15 USD)/night. Facilities include Wi-Fi, solar shower, shared bathrooms. Employs local loaders and porters at the Tadapani junction.
                </p>
              </div>

              {/* Dobato */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">2. Dobato Teahouses</h3>
                  <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-semibold">3,200m–3,400m | Mixed Ownership</span>
                </div>
                <p>
                  Simple mid-route rest stop between Tadapani and Bayeli Kharka. Rooms cost 1,200–1,800 NPR/night. Solar electricity, shared bathrooms. Useful acclimatization point before the high ridge push.
                </p>
              </div>

              {/* Chhistibung */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">3. Chhistibung Lodge</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-semibold">2,975m | Community Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> <Link href="/nodes/chhistibung-accommodation" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Chhistibung Community Lodge</Link>. Twin room ~1,500 NPR (~$11 USD)/night. Solar charging, hot shower, shared bathroom (no Wi-Fi). Revenues fund local wildlife conservation patrols.
                </p>
              </div>

              {/* Bayeli Kharka */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">4. Bayeli Kharka Lodge</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-semibold">3,425m | Community Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> <Link href="/nodes/bayeli-kharka-accommodation" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Bayeli Kharka Community Lodge</Link>. Twin room ~1,500 NPR (~$11 USD)/night. Solar charging, hot shower, dining room stove. Revenues fund Nangi health post &amp; midwife program. <strong>Contact: +977-980-871234 (Booking Priority: High)</strong>.
                </p>
              </div>

              {/* Khopra Danda */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3 border-l-4 border-l-emerald-600">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">5. Khopra Danda Ridge Lodge</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-semibold">3,660m | Community Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> <Link href="/nodes/khopra-ridge-lodge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Community Lodge</Link>. Highest stop on the trail, base for Khayer Lake. Twin room ~1,800 NPR (~$14 USD)/night. Limited Wi-Fi, solar charging, hot water bottles, panoramic dining hall. Revenues fund Nangi High School &amp; valley Wi-Fi expansion. <strong>Contact: +977-984-722101 (Booking Priority: Critical)</strong>.
                </p>
              </div>

              {/* Swanta */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">6. Swanta Village Lodge</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-semibold">2,200m | Community Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> <Link href="/nodes/swanta-village-lodge-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Swanta Community Lodge</Link>. Twin room ~1,200 NPR (~$9 USD)/night. Wi-Fi, solar charging, attached bathrooms, local yak cheese. Revenues fund Swanta Secondary School teacher salaries. <strong>Contact: +977-984-762891</strong>.
                </p>
              </div>

              {/* Ghorepani */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">7. Ghorepani Lodge Options</h3>
                  <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-semibold">2,860m | Private Ownership</span>
                </div>
                <p>
                  <strong>Lodge:</strong> Hotel Snowland Ghorepani. Twin room ~2,500 NPR (~$19 USD)/night. Wi-Fi, attached bathroom, electric hot showers, internal room heating. <strong>Contact: +977-61-460122</strong>.
                </p>
              </div>

              {/* Ghara */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <h3 className="text-lg font-bold text-stone-900">8. Ghara Village Accommodation</h3>
                  <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-semibold">~2,000m | Community &amp; Small Private</span>
                </div>
                <p>
                  Lower descent exit village with simple community lodges (~1,200 NPR/night).
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: TREKKING DISTANCE & HOURS */}
          <article id="distances" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Distance &amp; Walking Hours Between Overnight Stops
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              {/* Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Route Segment</th>
                      <th className="px-6 py-4">Approximate Trekking Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {trekkingHours.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.segment}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Acclimatization &amp; Pace:</strong> Key transition occurs between Bayeli Kharka (3,425m) and Khopra Ridge (3,660m). Spending an extra night at Bayeli Kharka helps sensitive hikers adjust.
              </p>
            </div>
          </article>

          {/* SECTION: TEAHOUSE EXPERIENCE */}
          <article id="teahouse-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Staying in a Khopra Ridge Teahouse Is Actually Like
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Bedrooms:</strong> Simple twin rooms with wooden/plywood walls, mattress, pillow, and blanket. Always ask for an extra blanket before nightfall at Khopra Danda.
              </p>
              <p>
                <strong>Bathrooms &amp; Showers:</strong> Electric hot showers in Ghorepani; solar showers mid-route (best in morning); hot water bottles at Khopra Danda. Shared toilets above 3,000m.
              </p>
              <p>
                <strong>Dining Halls:</strong> Social center with wood-burning stoves and panoramic mountain views.
              </p>
              <p>
                <strong>Electricity &amp; Wi-Fi:</strong> Solar power (NPR 100–200 device charging fee). Carry a power bank. Intermittent Wi-Fi.
              </p>
            </div>
          </article>

          {/* SECTION: COST BREAKDOWN */}
          <article id="cost-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Accommodation Cost Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Lodge Name</th>
                      <th className="px-6 py-4">Village</th>
                      <th className="px-6 py-4">Altitude</th>
                      <th className="px-6 py-4">Twin Room (NPR)</th>
                      <th className="px-6 py-4">Approx. USD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {priceByAltitude.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.lodge}</td>
                        <td className="px-6 py-4 text-stone-700">{row.village}</td>
                        <td className="px-6 py-4 text-stone-600">{row.altitude}</td>
                        <td className="px-6 py-4 font-semibold text-stone-900">{row.priceNpr}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.priceUsd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Daily Budget Estimate:</strong> Room (1,200–2,500 NPR) + Dinner &amp; Breakfast (1,000–2,500 NPR) = <strong>2,000–3,500 NPR (~$15–$26 USD) per day per person</strong>.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD & MEALS */}
          <article id="food-meals" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Meal Costs at Khopra Ridge Teahouses
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Teahouse Economics:</strong> Rooms are kept affordable because lodges earn income on meals. Guests are expected to eat dinner and breakfast at their staying lodge.
              </p>
              <p>
                <strong>Meal Prices:</strong> Breakfast (300–500 NPR), Dal Bhat (400–600 NPR at lower villages; 600–900 NPR at Khopra Danda due to porter porterage costs).
              </p>
            </div>
          </article>

          {/* SECTION: FACILITIES MATRIX */}
          <article id="facilities-matrix" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Lodge Facilities Comparison Across the Route
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Lodge</th>
                    <th className="px-6 py-4">Wi-Fi</th>
                    <th className="px-6 py-4">Hot Shower</th>
                    <th className="px-6 py-4">Charging</th>
                    <th className="px-6 py-4">Bathroom</th>
                    <th className="px-6 py-4">Heating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {facilityMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.lodge}</td>
                      <td className="px-6 py-4">{row.wifi}</td>
                      <td className="px-6 py-4">{row.shower}</td>
                      <td className="px-6 py-4">{row.charge}</td>
                      <td className="px-6 py-4">{row.bath}</td>
                      <td className="px-6 py-4">{row.heat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: COMMUNITY LODGES */}
          <article id="community-lodges" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community-Owned Lodges That Make Khopra Ridge Unique
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Unlike commercial trekking circuits, Khopra Ridge operates on a cooperative village model. Accommodation revenue funds local development:
              </p>
              <ul class="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Swanta Community Lodge:</strong> Funds teacher salaries at Swanta Secondary School.</li>
                <li><strong>Bayeli Kharka Community Lodge:</strong> Funds Nangi community health post &amp; midwife services.</li>
                <li><strong>Chhistibung Community Lodge:</strong> Funds local wildlife conservation patrols.</li>
                <li><strong>Khopra Ridge Community Lodge:</strong> Reinvests 100% of profits into Nangi High School and valley Wi-Fi infrastructure.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: BOOKING GUIDE */}
          <article id="booking-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Book Lodges on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Walk-in:</strong> Works in lower villages (Ghorepani, Tadapani, Swanta) and during off-peak months.
              </p>
              <p>
                <strong>Advance Reservation Required:</strong> <Link href="/nodes/khopra-ridge-lodge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Lodge</Link> (+977-984-722101) and <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Bayeli Kharka Lodge</Link> (+977-980-871234) during October, November, March, and April. If full, there are no alternative lodges at these high elevations.
              </p>
            </div>
          </article>

          {/* SECTION: KHAYER LAKE STAY */}
          <article id="khayer-lake-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation Near Khayer Lake
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                There is <strong>no accommodation at Khayer Lake (4,660m)</strong>. The closest lodge is Khopra Ridge Community Lodge (3,660m), located 5 to 6 hours round-trip below the sacred lake. Plan a 2-night stay at Khopra Danda for comfortable lake exploration.
              </p>
            </div>
          </article>

          {/* SECTION: SEASONAL AVAILABILITY */}
          <article id="seasonal-availability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Lodge Availability on the Khopra Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring (Mar–May) &amp; Autumn (Sep–Nov):</strong> High demand, full lodge operation, advance booking essential.
              </p>
              <p>
                <strong>Winter (Dec–Feb):</strong> Low crowds, cold nights, potential temporary closures at higher nodes.
              </p>
              <p>
                <strong>Monsoon (Jun–Aug):</strong> Solitude, high room availability, wet trail conditions.
              </p>
            </div>
          </article>

          {/* SECTION: BEST LODGES BY TYPE */}
          <article id="best-lodges" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Lodges on the Khopra Ridge Trek by Traveler Type
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p><strong>Best Scenic View:</strong> Khopra Ridge Community Lodge (3,660m) — Dhaulagiri panoramic dining room.</p>
              <p><strong>Best Budget Option:</strong> Swanta Community Lodge (2,200m) — 1,200 NPR/night with attached bathrooms.</p>
              <p><strong>Best Comfort Stay:</strong> Hotel Snowland Ghorepani (2,860m) — Electric heating &amp; hot showers.</p>
              <p><strong>Best Eco-Community Impact:</strong> Bayeli Kharka Community Lodge (3,425m) — Direct midwife funding.</p>
            </div>
          </article>

          {/* SECTION: SOLO TIPS */}
          <article id="solo-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Accommodation Tips for Solo Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Solo hikers can easily access all lodges. Start trekking early in the morning (6:00 AM) during peak months to arrive by early afternoon, carry sufficient cash (no ATMs past Ghorepani/Pokhara), and call ahead for high-altitude reservations.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra Ridge Teahouses
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Are there teahouses on the Khopra Ridge Trek?",
                  a: "Yes. Confirmed teahouses and community lodges operate at Tadapani, Dobato, Chhistibung, Bayeli Kharka, Khopra Ridge, Swanta, Ghorepani, and Ghara."
                },
                {
                  q: "How much does accommodation cost on Khopra Ridge?",
                  a: "Twin-shared rooms range from 1,200 NPR ($9 USD) at community lodges to 2,500 NPR ($19 USD) at private guesthouses. Meals cost an additional 1,000–2,500 NPR/day."
                },
                {
                  q: "Do I need to reserve lodges in advance?",
                  a: "Yes for Khopra Ridge Community Lodge and Bayeli Kharka Community Lodge during spring and autumn. Walk-ins work elsewhere."
                },
                {
                  q: "Is Wi-Fi available in Khopra Ridge lodges?",
                  a: "Wi-Fi is available in Ghorepani, Tadapani, Swanta, and Khopra Ridge Lodge (limited). Not available at Chhistibung or Bayeli Kharka."
                },
                {
                  q: "Are hot showers available on the trek?",
                  a: "Electric showers in Ghorepani; solar showers mid-route; hot water bottles provided at Khopra Ridge Lodge (3,660m)."
                },
                {
                  q: "Can solo trekkers find rooms easily?",
                  a: "Yes, outside of peak months. In peak season, solo hikers should call ahead for high-altitude stops."
                },
                {
                  q: "Are blankets provided at high-altitude lodges?",
                  a: "Yes. Blankets/duvets are provided at all lodges. Always ask for an extra blanket before nightfall at 3,660m."
                },
                {
                  q: "Can I charge my phone at Khopra Ridge teahouses?",
                  a: "Yes, solar charging is available for a fee (100–200 NPR). Bring a portable power bank."
                },
                {
                  q: "Is there accommodation at Khayer Lake?",
                  a: "No. The closest lodge is Khopra Ridge Community Lodge at 3,660m, located 5–6 hours round-trip below the lake."
                },
                {
                  q: "Which lodge has the best mountain views?",
                  a: "Khopra Ridge Community Lodge (3,660m) offers direct panoramic views of Dhaulagiri (8,167m) and Annapurna South."
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
            <h2 className="text-2xl font-bold text-stone-955">Conclusion: Plan Your Accommodation Before You Start Walking</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek offers a tightly connected chain of community-run teahouses where your accommodation choice directly supports mountain schools, health posts, and local infrastructure. Reserve your high-altitude stops early, carry cash, and enjoy a seamless Himalayan trek.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Reserve Your Accommodation?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local trekking team arranges accommodation reservations along the entire route, handles peak-season bookings at Khopra Ridge and Bayeli Kharka, and offers full guided packages. Contact us directly for lodge booking assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Your Khopra Ridge Trek Package &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/nodes/khopra-ridge-lodge-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    View Khopra Ridge Community Lodge guide
                  </Link>
                  <Link href="/nodes/swanta-village-lodge-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    View Swanta Village Lodge guide
                  </Link>
                  <Link href="/nodes/bayeli-kharka-accommodation" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    View Bayeli Kharka accommodation details
                  </Link>
                  <Link href="/nodes/chhistibung-accommodation" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    View Chhistibung Community Lodge details
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
                This accommodation directory is compiled and verified by our field operators and cooperative community lodge managers on the Khopra Ridge route. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
