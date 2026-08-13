import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/tadapani-accommodation",
  },
  title: "Tadapani Accommodation Guide | Khopra Ridge Trek Guide",
  description: "Planning to stay overnight in Tadapani? Discover real lodge prices, tea house facilities, bathroom standards, WiFi availability, food options, and expert.",
};

export default function Page() {
  const extraCosts = [
    { service: "Hot bucket shower", cost: "$2 – $3" },
    { service: "Device charging (per item)", cost: "$1 – $2" },
    { service: "WiFi (per day, where available)", cost: "$1 – $2" },
    { service: "Boiled or bottled drinking water", cost: "$0.50 – $1.50" }
  ];

  const comparisonTable = [
    { village: "Tadapani", alt: "2,630m", comfort: "Basic", price: "$5 – $8", bath: "Mostly shared", facilities: "Limited" },
    { village: "Ghandruk", alt: "1,940m", comfort: "Better", price: "$8 – $15", bath: "Mixed", facilities: "Good" },
    { village: "Ghorepani", alt: "2,860m", comfort: "Moderate", price: "$8 – $12", bath: "Shared/better", facilities: "Moderate" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/nodes" className="hover:text-emerald-400 transition-colors">Nodes</Link>
            <span>/</span>
            <Link href="/nodes/tadapani-guide" className="hover:text-emerald-400 transition-colors">Tadapani Guide</Link>
            <span>/</span>
            <span className="text-emerald-400">Accommodation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Teahouses &amp; Lodging Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Tadapani Accommodation Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Where to Stay, Lodge Prices, Facilities &amp; Trekker Tips in the forest junction of the Annapurna circuit.
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
              <a href="#location" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where is Tadapani?
              </a>
              <a href="#options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodging Options
              </a>
              <a href="#prices" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Prices &amp; Costs
              </a>
              <a href="#rooms" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Room Quality
              </a>
              <a href="#bathrooms" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Bathrooms &amp; Showers
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Utilities &amp; WiFi
              </a>
              <a href="#dining" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Dining Experience
              </a>
              <a href="#best-lodges" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Lodges
              </a>
              <a href="#advance-booking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Do I Need to Book?
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Village Comparisons
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Tips
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
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Tadapani Accommodation Overview
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Tadapani is one of the most important overnight stops on the classic Annapurna trekking circuit. Sitting at 2,630 metres inside dense rhododendron and oak forests, it connects the popular villages of Ghandruk and Ghorepani and serves as a key junction for trekkers pushing toward Khopra Ridge, Annapurna Base Camp, and Poon Hill.
              </p>
              <p>
                What makes Tadapani special is also what makes it challenging. The forest setting and remote location mean accommodation here is more rustic and basic compared to lower trekking hubs like Ghandruk. Facilities are simpler, internet is unreliable, and rooms fill up fast during peak season. Knowing what to expect before you arrive can make a real difference to your experience.
              </p>
              <p>
                This Tadapani accommodation guide is built from first-hand trail knowledge by our licensed local trekking team operating out of Pokhara. We regularly update lodge conditions, pricing, and availability based on active route checks throughout the year. Everything you read here reflects real on-the-ground conditions.
              </p>
            </div>
          </article>

          {/* SECTION: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Tadapani Located on the Annapurna Trekking Route?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Tadapani&apos;s Position Between Ghandruk and Ghorepani:</strong> Tadapani sits roughly mid-route between Ghandruk to the south and Ghorepani to the northwest. Most trekkers arrive after a steep climb from Ghandruk, which typically takes around three to four hours depending on pace and trail conditions.
              </p>
              <p>
                From Tadapani, the trail continues upward toward Ghorepani — the gateway to Poon Hill sunrise viewpoint — or branches off on longer offbeat routes leading toward Dobato, Bayeli Kharka, and eventually the Khopra Ridge circuit. This junction position makes it an unavoidable overnight stop for many classic Annapurna loop itineraries.
              </p>
              <p>
                <strong>Why Tadapani Is an Important Overnight Stop:</strong> The forest environment at Tadapani sits at high enough elevation that trekking onward in darkness or late afternoon becomes genuinely unsafe. Most guides recommend reaching Tadapani by mid-afternoon, resting, eating a hot meal, and then pushing on early the following morning.
              </p>
              <p>
                This makes accommodation in Tadapani a practical necessity rather than a preference. You are staying here because the trail demands it — and because the experience of sitting beside a wood-burning stove in a mountain tea house dining hall, with the forest outside going dark and quiet, is one you will not easily forget.
              </p>
            </div>
          </article>

          {/* SECTION: OPTIONS */}
          <article id="options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Accommodation Options Are Available in Tadapani?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Tadapani has a limited but functional range of overnight stay options. All of them operate on the classic Nepali mountain tea house model: you pay for a room, and you are expected to eat your meals at the same lodge.
              </p>
              <p>
                <strong>Traditional Tea Houses:</strong> These are family-run lodges where a local household manages cooking, cleaning, and basic hosting for trekking guests. A Tadapani tea house typically consists of a shared dining hall on the ground floor and a row of simple rooms upstairs or along a separate corridor. The dining hall is the social centre — this is where trekkers gather in the evenings, where meals are served, and where the wood stove keeps everyone warm after sunset.
              </p>
              <p>
                <strong>Trekking Lodges and Guest Houses:</strong> Some slightly larger operations describe themselves as trekking lodges or guesthouses rather than tea houses. In practice, the difference is minimal at this altitude. These lodges may have a few more rooms, slightly better-maintained bathrooms, or a more organised reception system.
              </p>
            </div>
          </article>

          {/* SECTION: PRICES */}
          <article id="prices" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Tadapani Accommodation Prices and Typical Daily Costs
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Room Prices:</strong> A standard double or twin room in Tadapani costs between USD 5 and USD 8 per night. This rate applies when you agree to eat both dinner and breakfast at the same lodge — which is the standard arrangement across all mountain accommodation in Nepal.
              </p>
              <p>
                <strong>Meal Prices:</strong> Meals are a significant part of your daily accommodation cost. A typical Dal Bhat — the classic Nepali rice, lentil soup, and vegetable combination — costs between USD 4 and USD 7. This is the best value meal because it usually comes with unlimited refills. Breakfast options typically cost USD 2 to USD 5 per person. Expect to spend roughly USD 8 to USD 15 per person per day on food.
              </p>
            </div>

            {/* SOFT CTA */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 my-8">
              <p className="text-sm text-stone-700 leading-relaxed font-semibold">
                Planning the Annapurna Base Camp Trek or Khopra Ridge Trek? Our local trekking experts can recommend and pre-book the best Tadapani lodges for your group.{" "}
                <Link href="/contact" className="text-emerald-700 underline hover:text-emerald-600 transition">
                  Contact us to plan your trek.
                </Link>
              </p>
            </div>

            {/* Extra Costs Table */}
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">Extra Costs Trekkers Should Expect:</h4>
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 font-bold text-stone-700">
                    <tr>
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Typical Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    {extraCosts.map((row, i) => (
                      <tr key={i} className="hover:bg-stone-50/50 transition">
                        <td className="px-6 py-4 font-semibold text-stone-900">{row.service}</td>
                        <td className="px-6 py-4 font-mono font-bold text-emerald-600">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-stone-500 text-xs mt-2">
                These charges are standard across Annapurna trekking accommodation and exist because lodges operate in areas with limited energy supply. Always carry enough Nepali rupees in cash. Card payments are not accepted in Tadapani.
              </p>
            </div>
          </article>

          {/* SECTION: ROOMS */}
          <article id="rooms" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Are Rooms Like in Tadapani Lodges?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Standard Room Setup and Bedding:</strong> Most rooms are configured with two single beds placed side by side. The walls and floors are typically constructed from rough-cut timber or plywood panels, which gives them a rustic, cabin-like feel. Rooms come with basic blankets and pillows. Carrying a lightweight sleeping bag liner will make a genuine difference.
              </p>
              <p>
                <strong>What Comfort Level Should Trekkers Expect?</strong> Be honest with yourself about the conditions. Walls between rooms are thin, meaning you will hear your neighbours moving or snoring. Earplugs are a worthwhile addition. Privacy is limited, and temperatures drop significantly after dark — expect cold nights even in spring and autumn.
              </p>
            </div>
          </article>

          {/* SECTION: BATHROOMS */}
          <article id="bathrooms" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Bathroom and Shower Facilities in Tadapani
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Shared Bathrooms vs Attached Bathrooms:</strong> The majority of accommodation in Tadapani operates on a shared bathroom arrangement. Cleanliness varies by lodge. Attached or en-suite bathrooms are rare at this altitude. A small number of lodges may have one or two rooms with a private bathroom, usually at a higher price.
              </p>
              <p>
                <strong>Hot Shower Availability:</strong> Hot showers in the traditional sense are not standard. What most lodges offer is a hot bucket shower — heated water brought to a small washing cubicle. This service typically costs USD 2 to USD 3 and must usually be requested in advance.
              </p>
            </div>
          </article>

          {/* SECTION: FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Facilities Available in Tadapani Accommodation
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>WiFi Availability and Internet Quality:</strong> WiFi is available in some lodges, but it should not be counted on. Where it does exist, it is slow and unreliable. signal quality in Tadapani is limited due to the dense forest environment. Consider purchasing a local SIM card (Ncell/NTC) with data in Pokhara.
              </p>
              <p>
                <strong>Electricity and Charging Devices:</strong> Lodges have access to electricity through solar panels and small hydroelectric connections, but supply is inconsistent. Charging your device is possible but usually comes with a small fee of USD 1 to USD 2 per device. Carrying a high-capacity power bank is strongly recommended.
              </p>
              <p>
                <strong>Mobile Network and Connectivity:</strong> Mobile signal is weak due to the forest canopy. You may find occasional signal on high ground, but do not rely on it. Inform someone of your schedule before you begin your trek.
              </p>
            </div>
          </article>

          {/* SECTION: DINING */}
          <article id="dining" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Dining Experience at Tadapani Tea Houses
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The dining experience is one of the genuine highlights of staying overnight in Tadapani — far better than the room alone might suggest.
              </p>
              <p>
                <strong>Dinner options:</strong> Dal Bhat (the staple — always the best value), fried rice, noodle soup or Thukpa, macaroni, or vegetable curry with rice.
              </p>
              <p>
                <strong>Breakfast options:</strong> Tibetan bread, porridge or oatmeal, pancakes, eggs, and toast with peanut butter.
              </p>
              <p>
                <strong>Drinks:</strong> Milk tea, ginger tea, hot chocolate, and boiled water (safer than tap water).
              </p>
              <p>
                <strong>Evening Dining Hall Experience:</strong> By 6:00 PM, the wood-burning iron stove is lit and the room fills with warmth. Trekkers from different countries share benches around shared tables, swap stories, and compare routes. Sitting around a fire with a bowl of Dal Bhat is one of the simple pleasures the Annapurna trails do exceptionally well.
              </p>
            </div>
          </article>

          {/* SECTION: BEST LODGES */}
          <article id="best-lodges" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Lodges and Places to Stay in Tadapani
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Lodges for Budget Travelers:</strong> Budget travelers should prioritise lodges that serve consistent hot meals and are positioned close to the main trail junction. Arriving before 2:00 PM during peak season gives you the best selection of available rooms.
              </p>
              <p>
                <strong>Best Accommodation for Comfort:</strong> Look for lodges that are slightly larger in structure, have solar hot water systems, and whose dining halls are regularly cleaned. These lodges usually charge at the upper end of the pricing range — USD 7 to USD 10 — but the difference in experience is worth it.
              </p>
              <p>
                <strong>Best Accommodation for Families:</strong> Accommodation in Tadapani is not designed for family privacy. Rooms are small, walls are thin, and facilities are basic. Families should request adjoining rooms where possible, bring a sleeping bag liner for children, and confirm hot water availability before booking.
              </p>
            </div>
          </article>

          {/* SECTION: ADVANCE BOOKING */}
          <article id="advance-booking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Do You Need to Book Accommodation in Advance in Tadapani?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Peak Season Booking Challenges:</strong> The two main trekking seasons — October to November and March to April — bring the highest concentration of trekkers. Tadapani experiences significant pressure on its limited lodge capacity. Rooms can fill up by early afternoon. Trekkers who arrive after 3:00 PM without a booking regularly find that the most comfortable lodges are already full.
              </p>
              <p>
                <strong>When Walk-In Booking Is Usually Fine:</strong> Outside the peak seasons, Tadapani accommodation is far more relaxed. During December to February (winter), trekker numbers drop significantly and walk-in booking is generally not a problem. The monsoon period (June to August) also sees very few trekkers.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Comparing Accommodation in Tadapani vs Nearby Villages
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Tadapani vs Ghandruk:</strong> Ghandruk sits lower on the route at around 1,940 metres and is a substantially larger Gurung village with more developed infrastructure. Lodges in Ghandruk are generally more comfortable — better-maintained rooms, more reliable hot water, stronger WiFi, and more food choices.
              </p>
              <p>
                <strong>Tadapani vs Ghorepani:</strong> Ghorepani sits at 2,860 metres and is one of the most developed trekking villages in the Annapurna foothills. Tadapani, by comparison, is quieter, less commercialised, and more forest-immersed.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 font-bold text-stone-700">
                  <tr>
                    <th className="px-6 py-4">Village</th>
                    <th className="px-6 py-4">Altitude</th>
                    <th className="px-6 py-4">Comfort Level</th>
                    <th className="px-6 py-4">Typical Room Price</th>
                    <th className="px-6 py-4">Bathroom</th>
                    <th className="px-6 py-4">Facilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50 transition">
                      <td className="px-6 py-4 font-semibold text-stone-900">{row.village}</td>
                      <td className="px-6 py-4 font-mono">{row.alt}</td>
                      <td className="px-6 py-4">{row.comfort}</td>
                      <td className="px-6 py-4 font-mono font-bold text-emerald-600">{row.price}</td>
                      <td className="px-6 py-4">{row.bath}</td>
                      <td className="px-6 py-4">{row.facilities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Tips for Staying Overnight in Tadapani
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What to Pack for an Overnight Stay:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Earplugs — thin walls make noise travel freely.</li>
                <li>Warm layers — base layer, fleece, and down jacket for evening temperatures.</li>
                <li>Power bank — fully charged before departing Ghandruk.</li>
                <li>Headlamp or torch — for night toilet trips and early morning departures.</li>
                <li>Cash in Nepali rupees — no card payments anywhere on this route.</li>
                <li>Sleeping bag liner — adds warmth.</li>
              </ul>
              <p>
                <strong>Tips for a More Comfortable Stay:</strong> Arrive early (before 2:00 PM during peak season). Request your hot water in advance (tell the lodge owner at check-in if you want a hot bucket shower). Charge devices before dinner, and eat Dal Bhat for dinner.
              </p>
            </div>
          </article>

          {/* SECTION: LOCAL GUIDES */}
          <article className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Many Trekkers Pre-Book Tadapani Accommodation Through Local Guides
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Problems With Last-Minute Lodge Booking:</strong> Peak season Tadapani is genuinely competitive for rooms. Independent trekkers who arrive mid-to-late afternoon regularly find the better lodges full, leaving them with poorly maintained options. After a physically demanding day, a bad night&apos;s sleep has real consequences.
              </p>
              <p>
                <strong>Benefits of Booking Through Local Trekking Experts:</strong> Our team books accommodation in Tadapani regularly. We know which lodges are in good condition and which ones have issues. Booking through a local operator also means your guide can call ahead from Ghandruk to confirm the room, arrange a hot dinner, and communicate any specific needs.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Tadapani Accommodation
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What accommodation options are available in Tadapani?",
                  a: "Tadapani offers basic tea houses, family-run trekking lodges, and small guesthouses. All operate on the standard Nepali mountain model where guests are expected to eat meals at the same lodge. Rooms are simple, shared facilities are common, and the dining hall with a wood stove is the social centre."
                },
                {
                  q: "How much does accommodation cost in Tadapani?",
                  a: "A standard double or twin room costs between USD 5 and USD 8 per night, conditional on eating dinner and breakfast at the lodge. Budget USD 8 to USD 15 additional per person per day for meals and drinks. Hot showers, device charging, and WiFi carry small additional fees."
                },
                {
                  q: "Do Tadapani lodges have attached bathrooms?",
                  a: "Attached or en-suite bathrooms are rare in Tadapani. Most lodges operate shared bathrooms on a corridor basis. A small number of lodges may have one or two rooms with a private bathroom, but this should be confirmed in advance rather than assumed."
                },
                {
                  q: "Is WiFi available in Tadapani tea houses?",
                  a: "Some lodges offer WiFi, but it is unreliable and slow. Do not count on it for important communications or uploading content. A local Nepali SIM card with mobile data from Pokhara is a more reliable connectivity option, though signal in Tadapani is limited."
                },
                {
                  q: "Which is the best lodge in Tadapani?",
                  a: "Lodge conditions change seasonally, so we recommend booking through a local guide or agency who maintains up-to-date knowledge of which lodges are in the best condition. Generally, look for lodges that are clean, well-heated, and close to the trail junction."
                },
                {
                  q: "Can I book accommodation in Tadapani after arriving?",
                  a: "Yes, during low season and off-peak months. However, during October to November and March to April, rooms fill up by early afternoon. Walk-in booking during peak season carries a real risk of finding the better lodges fully booked."
                },
                {
                  q: "Are hot showers available in Tadapani?",
                  a: "Hot bucket showers are available at most lodges at an additional cost of USD 2 to USD 3. Some lodges have basic solar water systems. Traditional hot running showers are not available at this elevation."
                },
                {
                  q: "Is Tadapani suitable for family trekkers?",
                  a: "Yes, with realistic expectations. Accommodation is basic, rooms are small, and walls are thin. However, lodge owners are welcoming and kind with children. Families should book in advance, request adjoining rooms, and bring warm clothing."
                },
                {
                  q: "Can I charge my phone in Tadapani lodges?",
                  a: "Yes, most lodges offer device charging at a small fee of USD 1 to USD 2 per device. Electricity supply is solar-based and not always consistent, so charge early in the evening. Carrying a fully charged power bank from Ghandruk is strongly recommended."
                },
                {
                  q: "Is accommodation in Tadapani comfortable?",
                  a: "By mountain tea house standards, yes — it is functional and perfectly adequate for a one-night rest stop. By hotel standards, no. Rooms are basic, walls are thin, and facilities are minimal. Trekkers who understand and accept this before arriving consistently enjoy their Tadapani stay."
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
              Tadapani is not the place to go looking for four walls and a hot tub. It is a remote forest stop at over 2,600 metres where the lodge experience is defined by warmth around a shared stove, a bowl of hot Dal Bhat, and the quiet satisfaction of a hard day&apos;s trekking behind you.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The accommodation here is simple, the bathrooms are basic, the walls are thin, and the WiFi barely works. But the meals are filling, the people are genuinely hospitable, and the forest atmosphere outside the windows is unlike almost anywhere else on the Annapurna trekking network.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              What Tadapani requires from its trekkers is realistic expectations, practical preparation, and ideally an advance booking during peak season. Come ready for mountain conditions, pack an earplug or two, and arrive early enough to choose your room before the afternoon rush.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                📌 Reserve Your Tadapani Accommodation Before Peak Trekking Season
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Skip the stress of arriving in Tadapani and finding lodges already full. We manage advance booking for the cleanest, best-positioned tea houses in Tadapani, and our local guides phone ahead on the morning of your hike to confirm your reservation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now and Secure Your Tadapani Lodge &rarr;
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-2xl border border-white/20 transition duration-200 uppercase tracking-wider"
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
                This Tadapani Forest lodging directory is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly inspect fireplace heating, safety systems, and sanitation standards. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
