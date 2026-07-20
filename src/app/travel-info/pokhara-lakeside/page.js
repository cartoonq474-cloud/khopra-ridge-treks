import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/travel-info/pokhara-lakeside",
  },
  title: "Pokhara Lakeside: The Gateway to the Annapurna Region in Nepal",
  description: "Discover why Pokhara Lakeside is the essential base for every Annapurna trek. Explore Phewa Lake, top attractions, hotels, restaurants, and everything you need to prepare for trekking in Nepal's Annapurna region.",
};

export default function Page() {
  const hotelCosts = [
    { category: "Budget guesthouse / hostel dorm", price: "NPR 500–2,500 ($4–$20 USD)" },
    { category: "Mid-range hotel", price: "NPR 2,500–6,000 ($20–$45 USD)" },
    { category: "Upper mid-range / boutique", price: "NPR 6,000–15,000 ($45–$115 USD)" },
    { category: "Luxury resort", price: "USD 120–300+" }
  ];

  const taxiCosts = [
    { route: "Pokhara Airport to Lakeside", cost: "NPR 400–600 ($3–$5 USD)" },
    { route: "Lakeside to Tourist Bus Park", cost: "NPR 300–400 ($2–$3 USD)" },
    { route: "Lakeside to Sarangkot (one way)", cost: "NPR 800–1,200 ($6–$9 USD)" },
    { route: "Lakeside to Nayapul (jeep)", cost: "NPR 1,500–2,000 per vehicle seat" },
    { route: "Lakeside to Kimche / Syauli Bazaar", cost: "NPR 2,500–4,000 per vehicle seat" }
  ];

  const boatCosts = [
    { type: "Rowing boat (1–2 people)", price: "NPR 400–600 per hour" },
    { type: "Paddle boat (2–4 people)", price: "NPR 600–800 per hour" }
  ];

  const staffRates = [
    { service: "Trekking guide (licensed, English-speaking)", rate: "USD 25–40 per day" },
    { service: "Porter (standard route, 20–25kg load)", rate: "USD 15–25 per day" }
  ];

  const foodBudgets = [
    { level: "Budget traveller", spend: "NPR 1,000–2,000 per day" },
    { level: "Mid-range (sit-down restaurant meals)", spend: "NPR 2,000–4,000 per day" },
    { level: "Higher end (café + restaurant + drinks)", spend: "NPR 4,000+ per day" }
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
            <span className="text-stone-400">Travel Info</span>
            <span>/</span>
            <span className="text-emerald-400">Pokhara Lakeside</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Annapurna Trekking Base &amp; Travel Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara Lakeside: Gateway to the Annapurnas
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Explore Phewa Lake, top attractions, hotels, restaurants, adventure sports, and essential trek preparation steps in Nepal&apos;s premier Himalayan base town.
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
              <a href="#what-is-lakeside" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Is Pokhara Lakeside?
              </a>
              <a href="#gateway-to-annapurna" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Main Gateway to Annapurna
              </a>
              <a href="#trek-prep-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Essential Trek Preparation
              </a>
              <a href="#trekking-services" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Services Available
              </a>
              <a href="#best-things-to-do" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Things To Do
              </a>
              <a href="#top-attractions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Top Local Attractions
              </a>
              <a href="#adventure-activities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Adventure Activities
              </a>
              <a href="#where-to-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where To Stay in Lakeside
              </a>
              <a href="#restaurants-cafes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Restaurants, Cafés &amp; Nightlife
              </a>
              <a href="#travel-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Travel &amp; Budget Costs Guide
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How To Reach Pokhara
              </a>
              <a href="#best-time-to-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time To Visit
              </a>
              <a href="#why-recommend-lakeside" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Stay Here Before Trekking
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Travel Tips
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
                Inquire Guided Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Pokhara Lakeside: The Gateway to the Annapurna Region
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are travelling to Nepal to trek in the Annapurna region, almost every journey begins here — in Pokhara Lakeside. Sitting beside the glittering waters of Phewa Lake with the Annapurna massif rising sharply on the northern horizon, Lakeside is far more than a tourist district. It is the operational centre where trekkers plan their routes, sort their permits, rent their gear, hire their guides, and take their final deep breath before stepping into the Himalayas.
              </p>
              <p>
                Pokhara Lakeside serves a dual purpose that no other destination in Nepal quite matches. On one hand, it is a genuinely beautiful place to spend time — relaxed, walkable, full of good food, independent cafés, and evening lake views that stay with you long after you leave. On the other hand, it is the most practical and well-connected base from which to organise any trek in the Annapurna Conservation Area, from the iconic Annapurna Base Camp trail to quieter routes like the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link> and Mardi Himal.
              </p>
              <p>
                This guide covers everything a traveller or trekker needs to know about Pokhara Lakeside — what it is, what you can do here, how to prepare for an Annapurna trek, where to stay, where to eat, and how to get here. Whether you are arriving for the first time or returning after years, this is the place where your Nepal adventure truly begins.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT IS LAKESIDE */}
          <article id="what-is-lakeside" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Pokhara Lakeside and Why Is It So Popular?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Pokhara is Nepal&apos;s second-largest city, but Lakeside — locally known as Baidam — is its beating tourist heart. Stretching along the eastern shore of Phewa Lake in the southern part of Pokhara, Lakeside is a concentrated strip of guesthouses, hotels, restaurants, trekking agencies, gear shops, travel agents, and cafés, all within comfortable walking distance of one another.
              </p>
              <p>
                <strong>Where Is Pokhara Lakeside Located?</strong> Lakeside sits along the eastern shore of Phewa Lake in southern Pokhara city. It is approximately 4 kilometres from Pokhara&apos;s domestic airport and around 3 kilometres from the tourist bus park at Baglung Bus Station, making it well-connected to both Kathmandu and the trekking trailheads.
              </p>
              <p>
                <strong>Lakeside vs Other Areas of Pokhara:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Lakeside (Baidam):</strong> The best choice for trekkers. Walking access to permits, gear, agencies, and lake views.</li>
                <li><strong>Airport Area (New Road):</strong> Convenient for late flights, but lacks trekking infrastructure and lake charm.</li>
                <li><strong>Mahendrapool / City Centre:</strong> Commercial hub suitable for local banking, but far from tourist amenities.</li>
                <li><strong>Pame / Northern Lakeside:</strong> Quieter extension with boutique lakefront hotels for peaceful stays.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: GATEWAY TO ANNAPURNA */}
          <article id="gateway-to-annapurna" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Pokhara Lakeside Is the Main Gateway to Annapurna Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Sitting at roughly 820 metres elevation, Pokhara is the primary staging ground for nearly every southern and western Annapurna trail.
              </p>
              <p>
                <strong>Popular Annapurna Treks Departing from Pokhara:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Annapurna Base Camp (ABC) Trek:</strong> 10–14 day classic trek into the high glacial sanctuary beneath Annapurna I (8,091m).</li>
                <li><strong>Ghorepani Poon Hill Trek:</strong> 4–6 day short circuit famous for its 3,210m sunrise panorama over Dhaulagiri and Annapurna.</li>
                <li><strong>Mardi Himal Trek:</strong> 5–7 day ridge trek offering close-range views of Machhapuchhre.</li>
                <li><strong>Khopra Ridge Trek:</strong> Our specialist offbeat route climbing to Khopra Danda (3,660m) and sacred Khayer Lake (4,500m) with community lodge accommodation.</li>
                <li><strong>Annapurna Circuit:</strong> The long multi-week circuit crossing Thorong La (5,416m).</li>
              </ul>
              <p>
                <strong>Pre-Trek &amp; Post-Trek Lakeside Roles:</strong> Trekkers spend 1–2 nights in Lakeside before departing to collect permits, hire guides/porters, rent gear, and withdraw cash. Post-trek, Lakeside provides hot showers, Western food, cold beer, and soft beds for complete physical recovery.
              </p>
            </div>
          </article>

          {/* SECTION: TREK PREP CHECKLIST */}
          <article id="trek-prep-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Trek Preparation Checklist Before Leaving Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>1. Permits (ACAP &amp; TIMS):</strong> Obtain the mandatory <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP Permit</Link> and <Link href="/planning/tims-card-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">TIMS Card</Link> at the Nepal Tourism Board office near the airport in Pokhara before heading to trail checkpoints.
              </p>
              <p>
                <strong>2. Renting Gear:</strong> Quality rental shops in Lakeside supply sub-zero sleeping bags, down jackets, trekking poles, rain ponchos, and porter duffel bags at negotiated daily rates.
              </p>
              <p>
                <strong>3. Cash Withdrawals:</strong> Community lodges along Annapurna routes are cash-only. Withdraw sufficient Nepali Rupees at Lakeside ATMs (Nabil Bank, Standard Chartered, Global IME) as no ATMs exist on trail.
              </p>
              <p>
                <strong>4. Local SIM Cards:</strong> Pick up an NTC or Ncell SIM card along Lakeside for mobile coverage at lower elevations and download offline maps (Maps.me or Gaia GPS).
              </p>
            </div>
          </article>

          {/* SECTION: TREKKING SERVICES */}
          <article id="trekking-services" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Services Available in Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Hiring Guides &amp; Porters:</strong> Licensed local agencies arrange experienced English-speaking guides and responsible porters following International Porter Protection Group (IPPG) guidelines (20–25 kg load limit).
              </p>
              <p>
                <strong>Trailhead Transport Transfers:</strong> Arrange private 4WD jeep transfers from Lakeside directly to Nayapul (ABC/Poon Hill), Kande (Mardi Himal), or Kimche / Syauli Bazaar (<Link href="/planning/pokhara-to-kimche" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>).
              </p>
            </div>
          </article>

          {/* SECTION: BEST THINGS TO DO */}
          <article id="best-things-to-do" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Things To Do in Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Boating on Phewa Lake:</strong> Rent wooden rowboats to visit Tal Barahi Temple island and photograph mountain reflections on still morning waters.</li>
                <li><strong>Walking the Lakefront Promenade:</strong> A 2-km flat paved walking track ideal for early morning walks and sunset views.</li>
                <li><strong>Souvenir &amp; Gear Shopping:</strong> Explore shops selling local Thangka paintings, pashminas, hand-knotted crafts, and outdoor gear.</li>
                <li><strong>Yoga &amp; Wellness:</strong> Stretch tired muscles before or after trekking at local yoga studios and Ayurvedic massage centers.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: TOP ATTRACTIONS */}
          <article id="top-attractions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Top Attractions Near Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>1. Sarangkot Sunrise Viewpoint (1,592m):</strong> 30–40 minute taxi drive from Lakeside for world-famous sunrise vistas over Dhaulagiri, Annapurna South, and Machhapuchhre.
              </p>
              <p>
                <strong>2. World Peace Pagoda (Shanti Stupa):</strong> White hilltop Buddhist pagoda across Phewa Lake offering 360-degree valley and mountain views.
              </p>
              <p>
                <strong>3. Devi&apos;s Fall &amp; Gupteshwor Cave:</strong> Natural underground waterfall and sacred Shiva cave temple located south of Lakeside.
              </p>
              <p>
                <strong>4. Bindhyabasini Temple:</strong> Pokhara&apos;s oldest Hindu temple dedicated to goddess Bhagwati.
              </p>
            </div>
          </article>

          {/* SECTION: ADVENTURE ACTIVITIES */}
          <article id="adventure-activities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Adventure Activities That Make Pokhara Nepal&apos;s Adventure Capital
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Tandem Paragliding:</strong> Launch from Sarangkot and soar over Phewa Lake ($80–$100 USD).
              </p>
              <p>
                <strong>Zipline &amp; Bungee Jumping:</strong> High-speed Hemja zipline and canyon bridge bungee jumping north of Pokhara.
              </p>
              <p>
                <strong>Ultralight Flights &amp; Helicopter Tours:</strong> Scenic flights from Pokhara airport offering close-up aerial views of Machhapuchhre and Annapurna Sanctuary.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE TO STAY */}
          <article id="where-to-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where To Stay in Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Budget Hostels (NPR 500–2,500 / night):</strong> Clean family-run guesthouses and backpacker dorms with hot water and Wi-Fi.
              </p>
              <p>
                <strong>Mid-Range Trekker Hotels (NPR 2,500–6,000 / night):</strong> Comfortable rooms offering luggage storage while you are on trail, early breakfast, and mountain views.
              </p>
              <p>
                <strong>Luxury Resorts ($120–$300+ USD / night):</strong> Premium boutique lakefront resorts with infinity pools, spas, and fine dining.
              </p>
              <p>
                <strong>Recommended Location:</strong> Central to Northern Lakeside — close to permit offices, gear shops, and restaurants while being quiet.
              </p>
            </div>
          </article>

          {/* SECTION: RESTAURANTS & CAFES */}
          <article id="restaurants-cafes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Restaurants, Cafés, and Nightlife in Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Nepali &amp; Regional Cuisine:</strong> Authentic Dal Bhat sets, momos, Thakali buckwheat sets, and Newari spiced dishes.
              </p>
              <p>
                <strong>International Bistros:</strong> Quality Italian pizzas, Mexican, Indian, Korean, and Israeli options.
              </p>
              <p>
                <strong>Digital Nomad Cafés:</strong> Independent coffee shops serving proper espresso, fresh pastries, and fast Wi-Fi.
              </p>
              <p>
                <strong>Relaxed Nightlife:</strong> Live acoustic music bars and lakefront lounges open until midnight.
              </p>
            </div>
          </article>

          {/* SECTION: TRAVEL COSTS */}
          <article id="travel-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Travel Costs in Pokhara Lakeside — Budget Planning Guide
            </h2>
            <div className="space-y-6">
              {/* Hotel Costs Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Accommodation Category</th>
                      <th className="px-6 py-4">Price per Night (Double Room)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {hotelCosts.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.category}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Taxi Fares Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Route</th>
                      <th className="px-6 py-4">Approximate Taxi / Transfer Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {taxiCosts.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.route}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How To Reach Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Flights from Kathmandu:</strong> 25–30 minute domestic flight from Tribhuvan Airport to Pokhara Airport ($100–$130 USD one way; Yeti, Buddha Air, Shree Airlines). Taxi to Lakeside takes 10–15 mins (NPR 400–600).
              </p>
              <p>
                <strong>Tourist Bus from Kathmandu:</strong> 6–8 hour scenic highway coach ride from Thamel to Baglung Bus Station near Lakeside ($10–$20 USD).
              </p>
              <p>
                <strong>Private Vehicle:</strong> 5–7 hour private car/jeep hire from Kathmandu.
              </p>
            </div>
          </article>

          {/* SECTION: BEST TIME TO VISIT */}
          <article id="best-time-to-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time To Visit Pokhara Lakeside
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring (March–May):</strong> Warm temperatures (20–25°C), blooming rhododendrons, clear skies.
              </p>
              <p>
                <strong>Autumn (September–November):</strong> Peak season with crystal-clear post-monsoon mountain visibility and stable weather.
              </p>
              <p>
                <strong>Winter (December–February):</strong> Quiet and affordable with crisp clear days and cool evenings.
              </p>
              <p>
                <strong>Monsoon (June–August):</strong> Heavy rain and obscured mountain views; non-ideal for trekking.
              </p>
            </div>
          </article>

          {/* SECTION: WHY RECOMMEND LAKESIDE */}
          <article id="why-recommend-lakeside" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why We Recommend Staying in Lakeside Before Your Annapurna Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Spending 1 to 2 nights in Lakeside ensures all permits, gear rentals, cash withdrawals, and transport arrangements are completed without rushing, ensuring you start your Himalayan trek well-rested and fully prepared.
              </p>
            </div>
          </article>

          {/* SECTION: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Travel Tips for First-Time Visitors
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Safety &amp; Insurance:</strong> Lakeside is very safe. For trekking, ensure your travel insurance covers helicopter evacuation above 4,000 metres.</li>
                <li><strong>Local Etiquette:</strong> Dress modestly at temples, remove shoes before entering religious sites, and ask before taking photos.</li>
                <li><strong>Recommended Stay Duration:</strong> Plan 2 nights before trekking and 1–2 recovery nights after returning.</li>
                <li><strong>Things to Avoid:</strong> Don&apos;t skip permit checks, don&apos;t carry excessive baggage, and reconfirm your jeep transfer the evening before departure.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Pokhara Lakeside
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Pokhara Lakeside the best place to stay before Annapurna trekking?",
                  a: "Yes. Lakeside offers the closest proximity to permit offices, trekking agencies, gear rental shops, and trailhead transport within walking distance."
                },
                {
                  q: "Can I arrange trekking permits in Pokhara Lakeside?",
                  a: "Yes. The Nepal Tourism Board office issuing ACAP permits and TIMS cards is located near Lakeside. Bring passport photos and cash."
                },
                {
                  q: "Can I rent trekking gear in Pokhara?",
                  a: "Yes. Sleeping bags, down jackets, trekking poles, rain gear, and duffel bags are readily available for daily rental along the main Lakeside strip."
                },
                {
                  q: "How many days should I stay in Pokhara before trekking?",
                  a: "We recommend at least two nights to collect permits, organize gear/transport, withdraw cash, and depart rested."
                },
                {
                  q: "Is Pokhara Lakeside safe for solo travelers?",
                  a: "Yes. Lakeside is one of Nepal's safest tourist districts with low crime rates and a welcoming atmosphere for solo travelers."
                },
                {
                  q: "What are the best hotels in Pokhara Lakeside?",
                  a: "Family-run guesthouses offer great budget value, mid-range trekker hotels on quiet inland lanes provide ideal comfort, and boutique lakefront resorts cater to luxury travelers."
                },
                {
                  q: "How far is Pokhara airport from Lakeside?",
                  a: "Approximately 4 kilometres, taking 10 to 15 minutes by taxi (NPR 400–600)."
                },
                {
                  q: "What are the best things to do around Phewa Lake?",
                  a: "Rowing to Tal Barahi Temple, walking the lakefront promenade, visiting World Peace Pagoda, and watching clear morning mountain reflections."
                },
                {
                  q: "Is boating on Phewa Lake worth it?",
                  a: "Yes. Wooden rowboat rentals ($3–$5 USD/hr) offer spectacular views of the Annapurna range reflecting on calm morning waters."
                },
                {
                  q: "What is the best time to visit Pokhara?",
                  a: "Autumn (September–November) and Spring (March–May) offer the clearest blue skies, stable weather, and best mountain visibility."
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
              Pokhara Lakeside earns its reputation as Nepal&apos;s favourite trekking base by design. The lake, the mountain backdrop, the concentration of services, and the easy pace of life make it the ideal place to begin and end any Annapurna journey.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Annapurna Trek From Pokhara With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are based in Pokhara and specialise in trekking routes in the Annapurna Conservation Area, including the Khopra Ridge Trek and Khayer Lake circuit. We arrange permits, guides, porters, trailhead transport, and complete trekking support for groups and independent travellers departing from Pokhara Lakeside.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Us to Plan Your Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Ghandruk transportation guide
                  </Link>
                  <Link href="/planning/pokhara-to-kimche" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare Pokhara to Kimche jeep transport options
                  </Link>
                  <Link href="/planning/pokhara-to-syauli-bazaar" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Pokhara to Syauli Bazaar transit guide
                  </Link>
                  <Link href="/planning/return-transport-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Plan return transport options after finishing your trek
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
                This Pokhara travel guide is maintained seasonally by our Pokhara operations team. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
