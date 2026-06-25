import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Trek via Mohare Danda: Ultimate 12-Day Eco-Circuit Guide",
  description: "Planning to combine Mohare Danda and Khopra Ridge? Explore our comprehensive 12-day guide detailing the community lodge itinerary, trail difficulty, costs, permit rules, and expert preparation tips.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Difficulty Grade", value: "Moderate to Strenuous" },
    { label: "Daily Walking", value: "4 to 7 Hours" },
    { label: "Max Elevation", value: "3,660m (Trek) / 4,660m (Lake)" },
    { label: "Best Time to Visit", value: "Autumn & Spring" }
  ];

  const mohareHighlights = [
    {
      title: "1. Authentic Village Homestays",
      desc: "Stay in traditional Magar villages like Banskharka and Nangi. You sleep in local homes, eat home-cooked organic meals, and learn about orange orchards and community-run organic farming projects."
    },
    {
      title: "2. The Wireless Internet Legacy",
      desc: "Nangi village is famous as the birth site of the Nepal Wireless Networking Project, started by local hero Mahabir Pun to connect remote mountain communities to medical clinics, schools, and online markets."
    },
    {
      title: "3. Shared Economic Support",
      desc: "Like Khopra, the Mohare Danda route operates on a 100% community-owned lodge and homestay model. Your trekking fees directly fund local teacher salaries, medical supplies, and community development."
    },
    {
      title: "4. Two Spectacular Ridges",
      desc: "Unlike standard trails, this circuit spans two high pasture ridges (Mohare Danda at 3,300m and Khopra Ridge at 3,660m), providing unmatched, crowd-free views of Dhaulagiri and Annapurna South."
    }
  ];

  const itinerary = [
    { day: "Day 1", path: "Pokhara to Galeshwor & Banskharka", elev: "1,525m", details: "Drive to Galeshwor (3 hrs), hike to Banskharka Magar homestay village (3 hrs). Cross the suspension bridge and experience your first community homestay sleep in a rustic local setting." },
    { day: "Day 2", path: "Banskharka to Nangi", elev: "2,320m", details: "Hike through forests, organic farms, and local handmade paper-making projects to Nangi (5 hrs). Visit the village school and see the legendary wireless networking setup." },
    { day: "Day 3", path: "Nangi to Mohare Danda", elev: "3,300m", details: "Climb through oak, pine, and rhododendron forests to Mohare Danda ridge (6 hrs). Unobstructed sunset views over the Dhaulagiri and Annapurna ranges." },
    { day: "Day 4", path: "Mohare Danda to Ghorepani", elev: "2,860m", details: "Walk along the panoramic ridge crest through giant rhododendrons to Ghorepani village (5 hrs). Excellent birdwatching opportunities and sweeping views of the valleys below." },
    { day: "Day 5", path: "Ghorepani to Swanta", elev: "2,214m", details: "Hike to Poon Hill for sunrise, descend to Ghorepani for breakfast, then trek down through deep forest before climbing to Swanta Magar village (5-6 hrs)." },
    { day: "Day 6", path: "Swanta to Chhistibung", elev: "2,975m", details: "Climb through river gorges and thick bamboo forests to Chhistibung lodge (4 hrs). Look out for Himalayan Langur monkeys and local birdlife in the forest canopy." },
    { day: "Day 7", path: "Chhistibung to Khopra Ridge", elev: "3,660m", details: "Steep 1,000m climb on exposed ridges (5 hrs). Close-up view of Dhaulagiri (8,167m) looming directly across the Kali Gandaki valley. Stay in the community-run lodge." },
    { day: "Day 8", path: "Khopra to Khayer Lake & Return", elev: "3,660m", details: "Strenuous day hike to the sacred alpine lake (4,660m) and back (8-9 hrs). Take in the reflection of Annapurna South on the glacial waters before descending back to Khopra." },
    { day: "Day 9", path: "Khopra Ridge to Bayeli Kharka", elev: "3,432m", details: "Trek along the high pasture trails to the remote Bayeli clearing (5 hrs). Enjoy stunning scenery away from any standard tourist corridors." },
    { day: "Day 10", path: "Bayeli to Dobato", elev: "3,420m", details: "Short ridge hike to Dobato (3 hrs). Climb Muldai Viewpoint for an incredible, uninterrupted sunset overlooking both Annapurna and Dhaulagiri ranges." },
    { day: "Day 11", path: "Dobato to Ghandruk", elev: "1,940m", details: "Descend through thick mossy forests and pasture lands to Ghandruk Gurung village (5 hrs). Explore the Gurung cultural museum and traditional stone cottages." },
    { day: "Day 12", path: "Ghandruk to Pokhara", elev: "820m", details: "Hike down stone staircases to Kimche (1 hr), drive to Pokhara Lakeside (3 hrs). Celebrate your successful completion of the ultimate Annapurna community circuit." }
  ];

  const packingEssentials = [
    {
      category: " Layered Clothing",
      items: [
        "Moisture-wicking base layers (merino or synthetic)",
        "Insulating fleece or mid-layer jackets",
        "High-loft down jacket (suitable down to -10°C)",
        "Windproof and waterproof outer shell",
        "Thermal underwear for cold nights in high lodges"
      ]
    },
    {
      category: " Footwear & Gear",
      items: [
        "Well broken-in hiking boots with good ankle support",
        "Trekking poles (vital for knee joints on descents)",
        "30-40 liter comfortable daypack with rain cover",
        "Three-season sleeping bag (rated comfort level of -5°C)"
      ]
    },
    {
      category: " Health & Sanitation",
      items: [
        "Water purification tablets or UV sterilizer",
        "Basic first-aid kit with blister care tape",
        "High UV protection sunglasses & SPF 50+ sunblock",
        "Portable USB power bank (charging fees apply at high lodges)"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why combine Mohare Danda and Khopra Ridge?",
      a: "Combining them creates the ultimate low-impact, crowd-free trekking circuit. You experience two distinct ridgelines with different vantage points of Dhaulagiri and Annapurna South, while supporting local villages through community homestays and cooperative-run lodges."
    },
    {
      q: "How does the community lodge funding model work?",
      a: "Unlike commercial teahouses owned by outside investors, these lodges and homestays are cooperative projects. Accommodation and food revenues are pooled locally to pay fair wages to staff and guides, fund teacher salaries in Swanta, and run the health clinic in Nangi."
    },
    {
      q: "What is the wireless legacy of Nangi village?",
      a: "Nangi is the birthplace of the Nepal Wireless Networking Project, founded by Magsaysay Award winner Mahabir Pun. Using homemade antennas, he connected remote Annapurna villages to the internet, enabling telemedicine, online schooling, and local trade."
    },
    {
      q: "Can beginners do the Mohare Danda to Khopra Trek?",
      a: "Yes, active beginners with good health can complete this trek. The daily stages are mostly 4 to 6 hours. However, the steep climbs to Dobato and Khopra Ridge, along with the optional 4,660m hike to Khayer Lake, require standard cardiorespiratory fitness preparation."
    },
    {
      q: "What are the food options at community lodges?",
      a: "The primary meal is dal bhat (rice, lentil soup, spiced vegetable curry), made with organic ingredients grown in local village farms. Lodges also serve noodle soups, eggs, porridge, chapatis, and fresh yak cheese."
    },
    {
      q: "Is Wi-Fi or mobile reception available on this route?",
      a: "Reception is inconsistent. Lower villages like Ghandruk and Nangi have decent Ncell or Nepal Telecom coverage. On high ridges like Mohare Danda and Khopra, connections are spotty. Paid satellite Wi-Fi is available at some community lodges, though speed is slow."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
             Ultimate Eco-Tourism Circuit
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek via Mohare Danda
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Trek through the Annapurna region's best-kept eco-tourism corridor. Combine traditional Magar village homestays, community-owned lodge circuits, and two high alpine pastures into one unforgettable Himalayan adventure.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
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
                1. Overview
              </a>
              <a href="#highlights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Route Highlights
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. 12-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Difficulty &amp; Prep
              </a>
              <a href="#logistics" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Logistics &amp; Permits
              </a>
              <a href="#faqs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              1. Overview: Combining Two Great Eco-Circuits
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                For hikers seeking complete wilderness seclusion, local cultural interactions, and high ecological standards, combining Mohare Danda (3,300m) and Khopra Ridge (3,660m) is highly recommended. This route starts at Galeshwor and ascends through homestay villages to Mohare Danda, then crosses over to join the Khopra loop via Ghorepani and Swanta.
              </p>
              <p>
                Unlike standard trails in the Annapurna Conservation Area that have become heavily commercialized, this trek operates on a cooperative model. Every lodge and homestay along the Mohare and Khopra corridors is community-owned. This ensures that the profits directly benefit local schools, clinics, and eco-initiatives, establishing a blueprint for regenerative tourism in Nepal.
              </p>
            </div>
          </article>

          {/* SECTION 2: HIGHLIGHTS */}
          <article id="highlights" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              2. Key Mohare Danda &amp; Khopra Highlights
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mohareHighlights.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm hover:border-emerald-500/30 transition duration-300">
                  <h4 className="font-extrabold text-stone-950 text-base">{item.title}</h4>
                  <p className="mt-2 text-xs text-stone-550 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              3. The Complete 12-Day Route Profile
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The 12-day circuit is optimized for safe acclimatization, allowing you to gradually ascend through forest homestays before tackling the high ridges of Mohare and Khopra.
            </p>
            <div className="space-y-6">
              {itinerary.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between hover:border-emerald-500/20 transition-all duration-300">
                  <div className="md:w-1/4">
                    <span className="text-sm font-black text-stone-950 block">{item.day}</span>
                    <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{item.path}</span>
                    <span className="text-xs text-stone-400 mt-0.5 block">Sleep Elev: {item.elev}</span>
                  </div>
                  <div className="md:w-3/4 text-xs text-stone-500 leading-relaxed">
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 4: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              4. Difficulty, Safety &amp; Training Tips
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Combining two ridges increases the cumulative climb and descending stress. With multiple days spent above 3,000m, pacing and core fitness become essential. The optional day hike to Khayer Lake at 4,660m is physically demanding, requiring solid endurance.
              </p>
              
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Acclimatization and Safety Protocol</h4>
                <ul className="space-y-3 text-xs leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Slow and Steady (Bistari, Bistari):</strong> Maintain a comfortable, conversational pace. Rushing altitude gain increases the risk of Acute Mountain Sickness (AMS).
                  </li>
                  <li>
                    <strong>Hydrate Consistently:</strong> Drink at least 4 liters of purified water daily. High-altitude environments dry out respiratory pathways quickly.
                  </li>
                  <li>
                    <strong>Recognize Symptoms:</strong> Headaches, mild nausea, and dizziness are early signs of AMS. Notify your guide immediately and be prepared to descend to a lower lodge if symptoms do not improve.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 5: LOGISTICS */}
          <article id="logistics" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              5. Permits, Transport &amp; Packing Logistics
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900">Required Permits</h3>
                <p className="mt-2 text-xs">
                  Trekkers must obtain two permits prior to departure. A copy of your passport and passport-sized photos are required:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                  <li><strong>Annapurna Conservation Area Permit (ACAP):</strong> NPR 3,000 (~$23 USD) per person.</li>
                  <li><strong>TIMS Card (Trekkers' Information Management System):</strong> NPR 2,000 (~$15 USD) per person.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900">Getting There</h3>
                <p className="mt-2 text-xs">
                  The route begins at Galeshwor. Private jeeps from Pokhara take about 3 hours to reach Galeshwor. The return leg finishes at Ghandruk/Kimche, where private or public jeeps transfer you back to Pokhara Lakeside.
                </p>
              </div>

              {/* Packing Essentials Grid */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-stone-950 mb-4">Gear Essentials</h3>
                <div className="grid gap-6 md:grid-cols-3 text-xs">
                  {packingEssentials.map((cat, i) => (
                    <div key={i}>
                      <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-3">{cat.category}</h5>
                      <ul className="list-disc pl-4 space-y-1 text-stone-500">
                        {cat.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 6: FAQS */}
          <article id="faqs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              6. Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-6">
              {faqs.map((faq, idx) => (
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

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Experience Eco-Tourism at Its Best</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Support local mountain villages directly. Book our guided 12-day Mohare and Khopra combo package. Our local guides ensure safe acclimatization, correct pacing, and complete logistics management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now to Plan Your Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     Check ACAP &amp; TIMS permit guidelines
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     Pokhara to Ghandruk Transportation options
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                     View complete interactive packing checklists
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Read about monthly trail weather conditions
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* E-E-A-T Footnote */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail audits.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
