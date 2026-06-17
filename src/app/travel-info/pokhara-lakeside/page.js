import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pokhara Lakeside: The Gateway to the Annapurnas (Complete Travel Guide)",
  description: "Discover Pokhara Lakeside, Nepal's lakeside tourism hub and the gateway to the Annapurna region. Attractions, hotels, food, adventure activities, and trek prep — all in one guide.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Transit Role", value: "Annapurna Gateway" },
    { label: "Key Attraction", value: "Phewa Lake" },
    { label: "Prep Services", value: "Gear, Permits, ATMs" },
    { label: "Kathmandu Flight", value: "25-Minute Run" }
  ];

  const budgetTiers = [
    { tier: "Budget / Backpacker", costDay: "$20 – $30", lodging: "Hostels & Guesthouses", food: "Local Dal Bhat & Steamed Momos", target: "Solo travelers, long-stayers" },
    { tier: "Mid-Range Comfort", costDay: "$40 – $70", lodging: "Comfort hotels (Aircon, Wi-Fi)", food: "International bistros & Cafés", target: "Couples, general trekkers" },
    { tier: "Luxury / Premium", costDay: "$100+", lodging: "Premium lakefront resorts & Spas", food: "Fine dining & Rooftop lounges", target: "Relaxation-focused travelers" }
  ];

  const faqItems = [
    {
      q: "What is Pokhara Lakeside known for?",
      a: "Pokhara Lakeside is known for its beautiful setting on the eastern shore of Phewa Lake, its dense concentration of traveler-friendly hotels, restaurants, and shops, and its role as the primary launching and recovery hub for treks in the Annapurna range."
    },
    {
      q: "Why is Pokhara Lakeside called the gateway to the Annapurnas?",
      a: "Virtually all major Annapurna treks—including Annapurna Base Camp, Poon Hill, Mardi Himal, and Khopra Ridge—are coordinated from Lakeside. Here, trekkers finalize their permits, rent gear, meet guides, and board transportation to the trailheads."
    },
    {
      q: "Is Lakeside the best place to stay in Pokhara?",
      a: "For most visitors, yes. Lakeside offers unmatched convenience because everything a traveler needs (dining, currency exchange, gear shops, transit booking) is within walking distance. It also provides scenic lake and mountain views that inland areas lack."
    },
    {
      q: "How many days should I spend in Pokhara Lakeside?",
      a: "We recommend spending two to three days before a trek to sort logistics and adjust, and another two to three days after the trek for rest and recovery. Non-trekking visitors usually find three to four days ideal to explore the area's main attractions."
    },
    {
      q: "Can I rent trekking gear in Lakeside Pokhara?",
      a: "Yes. Lakeside is filled with gear shops renting and selling down jackets, sub-zero sleeping bags, trekking poles, and rain gear. It's often much cheaper to rent gear here than to purchase it in Western countries."
    },
    {
      q: "Are there ATMs in Pokhara Lakeside?",
      a: "Yes, there are multiple ATMs accepting international cards along the main strip. However, cash is highly critical on the trekking trails, so you must withdraw enough Nepali Rupees in Lakeside before heading to the trailhead."
    },
    {
      q: "What are the best things to do in Pokhara Lakeside?",
      a: "Top activities include boating on Phewa Lake, visiting Tal Barahi Temple, hiking or driving to the World Peace Pagoda, watching the sunrise from Sarangkot, strolling the lakeside promenade, and experiencing tandem paragliding."
    },
    {
      q: "How far is Lakeside from Pokhara Airport?",
      a: "Lakeside is roughly 15 to 20 minutes from Pokhara International Airport by taxi, making arrivals and departures quick and straightforward."
    },
    {
      q: "What is the best time to visit Pokhara Lakeside?",
      a: "Autumn (September to November) and Spring (March to May) offer the most stable weather, clear blue skies, and the best mountain visibility, which makes them ideal for both sightseeing and high-altitude trekking."
    },
    {
      q: "Can I start the Annapurna Base Camp trek from Pokhara?",
      a: "Yes. Pokhara Lakeside is the starting point for arranging transport, permits, and guides for the Annapurna Base Camp trek. The physical trailhead (usually Nayapul, Kimche, or Syauli Bazaar) is reached via a short drive from Lakeside."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🏔️ Travel Information
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Pokhara Lakeside: The Gateway to the Annapurnas
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover Lakeside—Nepal's premier lakefront tourist hub. Learn how to arrange permits, buy and rent gear, prepare for your trek, and explore the region's top adventure sports.
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
                1. Introduction
              </a>
              <a href="#what-is-lakeside" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. What Is Lakeside?
              </a>
              <a href="#gateway-details" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. The Trekker's Gateway
              </a>
              <a href="#attractions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Top Attractions
              </a>
              <a href="#things-to-do" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Best Things to Do
              </a>
              <a href="#adventure-activities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Adventure Capital
              </a>
              <a href="#where-to-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Where to Stay
              </a>
              <a href="#dining-nightlife" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Dining &amp; Nightlife
              </a>
              <a href="#trek-preparation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Prep &amp; Travel Services
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. How to Reach Pokhara
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. Best Time to Visit
              </a>
              <a href="#travel-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12. Practical Travel Tips
              </a>
              <a href="#why-stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                13. Why Stay in Lakeside
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                14. Frequently Asked Qs
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
              Pokhara Lakeside: The Gateway to the Annapurnas
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                If you're planning a trip to Nepal, chances are your itinerary already includes Pokhara Lakeside — even if you don't know it yet. Stretched along the eastern shore of Phewa Lake, this compact district is where most visitors to Pokhara end up staying, eating, and shopping, and it's also where the vast majority of Annapurna trekkers begin and end their journey.
              </p>
              <p>
                Lakeside earns its nickname honestly. It's the place where snow-capped Himalayan peaks meet lakefront cafés, where you can rent a paddleboat in the morning and a down jacket in the afternoon, and where trekking agencies, gear shops, and hotel concierges have spent decades refining the process of getting travelers safely into the mountains and back.
              </p>
              <p>
                Whether you're here purely to relax by the water or you're staging a multi-day trek into the Annapurna Conservation Area, Lakeside is built to support both. This guide covers everything you need: what Lakeside is and why it matters, the top attractions and activities, where to eat and stay, how to prepare for a trek, and the practical details — transportation, budgeting, timing, and safety — that make the difference between a smooth trip and a stressful one.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHAT IS LAKESIDE */}
          <article id="what-is-lakeside" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Pokhara Lakeside?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">The Heart of Tourism in Pokhara</h3>
              <p>
                Pokhara Lakeside (locally known as Baidam) is the city's primary tourist district, sitting directly on the shore of Phewa Lake. Decades of steady tourism growth have shaped it into a dense strip of hotels, restaurants, trekking outfitters, and souvenir shops, all within easy walking distance of the water.
              </p>
              <p>
                Unlike Kathmandu's older, more chaotic tourist quarters like Thamel, Lakeside feels comparatively relaxed. The roads are wide enough for casual strolling, the pace is slower, and the lake views give the whole area a holiday atmosphere that's rare in a city this size.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Where Is Lakeside Located?</h3>
              <p>
                Lakeside sits about 15 to 20 minutes by taxi from Pokhara International Airport and roughly the same distance from the main bus park, making it an easy first stop after arrival. The lake itself runs along the western edge of the district, while the main strip of hotels and restaurants extends north to south just behind the shoreline.
              </p>
              <p>
                Because everything clusters around a few parallel streets, you can walk between most hotels, restaurants, and trekking shops in under fifteen minutes.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Travelers Choose Lakeside</h3>
              <p>
                Three things keep Lakeside at the top of nearly every Pokhara itinerary: walkability, scenery, and density of services. You don't need a vehicle to get a meal, book a trek, change money, or find a pharmacy — it's all within a short walk.
              </p>
              <p>
                The lake and mountain backdrop also means even a basic evening walk along the shore feels like a destination experience, not just a stopover. That combination of convenience and scenery is why most travelers, trekkers included, choose to base themselves here rather than elsewhere in Pokhara.
              </p>
            </div>
          </article>

          {/* SECTION 3: THE GATEWAY */}
          <article id="gateway-details" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Pokhara Lakeside Is the Gateway to the Annapurna Region
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Starting Point for Popular Annapurna Treks</h3>
              <p>
                Lakeside isn't just a pleasant place to stay — it's the operational starting point for nearly every major trek in the Annapurna region. The Annapurna Base Camp trek, the Ghorepani Poon Hill trek, the Mardi Himal trek, and routes like the <Link href="/planning/khopra-trek-route-overview" className="text-emerald-700 font-bold hover:underline">Khopra Ridge Trek</Link> all begin with transport arranged from Lakeside, even though the actual trailheads are an hour or more outside the city.
              </p>
              <p>
                This is where trekkers handle the unglamorous-but-essential work: confirming permits, renting last-minute gear, hiring guides or porters, and arranging the jeep or bus that gets them to the trailhead. Skipping this step or trying to handle it from elsewhere in Pokhara usually means more running around, not less.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Trekking Permits and Travel Preparation</h3>
              <p>
                Most routes into the Annapurna Conservation Area require an <Link href="/planning/khopra-trek-permits" className="text-emerald-700 font-bold hover:underline">ACAP permit</Link>, and independent trekkers on certain routes also need a TIMS card. Both can be arranged through a trekking agency based in Lakeside, which saves you a trip to a separate permit office and ensures the paperwork matches the route you're actually planning to hike.
              </p>
              <p>
                Agencies in the area are used to last-minute changes — swapping a route, adding a guide, or adjusting timing — and can usually turn around permit paperwork same-day.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Transportation to Annapurna Trailheads</h3>
              <p>
                From Lakeside, private jeeps and shared buses run regularly to common trailhead access points, including <Link href="/nodes/nayapul-transit-hub" className="text-emerald-700 font-bold hover:underline">Nayapul</Link> (for Poon Hill and ABC routes), Kande (for Mardi Himal and shorter ridge treks), and <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk</Link> (a common starting or ending point for several circuits).
              </p>
              <p>
                Jeep transfers are faster and more flexible; shared buses are cheaper but slower and less predictable on departure times. Booking through a local agency, rather than negotiating independently at the bus park, tends to save both money and confusion — particularly for trekkers unfamiliar with the routes.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Trekkers Spend Time in Lakeside Before and After Their Trek</h3>
              <p>
                Pre-trek, Lakeside is where you sort logistics: gear, permits, transport, and your last bank withdrawal. Post-trek, it's where you recover—enjoying hot showers, real beds, and food that isn't dal bhat for the first time in a week or two. That dual role, prep hub on the way in and recovery base on the way out, is a big part of why so few trekkers skip staying here.
              </p>
            </div>
          </article>

          {/* SECTION 4: ATTRACTIONS */}
          <article id="attractions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Top Attractions Around Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Lakeside is a hub of sights that justify a visit even without heading deep into the mountains:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-stone-500">
                <li>
                  <strong>Phewa Lake:</strong> The visual centerpiece of the entire district. On clear mornings, the still water reflects the Annapurna range so precisely that photos taken at sunrise often look symmetrical, mountain peaks mirrored almost perfectly on the surface. Rowboats and paddleboats are available for hire right along the shore.
                </li>
                <li>
                  <strong>Tal Barahi Temple:</strong> Sitting on a small island near the eastern shore, Tal Barahi Temple is Pokhara's most visited religious site and a quick boat ride from most Lakeside hotels. The pagoda-style temple is dedicated to the goddess Durga.
                </li>
                <li>
                  <strong>World Peace Pagoda:</strong> Perched on a hilltop on the southern side of Phewa Lake, this shrine offers one of the best panoramic views in the city, taking in the lake, the city skyline, and the Annapurna range in a single sweep.
                </li>
                <li>
                  <strong>Sarangkot Sunrise Viewpoint:</strong> A hilltop village roughly 30 minutes from Lakeside by taxi. Visitors arrive before dawn to watch the sun rise over the Annapurna and Dhaulagiri ranges, with Machhapuchhre (Fishtail Mountain) catching the first light.
                </li>
                <li>
                  <strong>Himalayan Views from Lakeside:</strong> You don't have to leave the lakefront to see the mountains. On clear days, Machhapuchhre's distinctive fishtail peak, along with Annapurna South and glimpses of Dhaulagiri, are visible directly from Lakeside's promenade.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 5: THINGS TO DO */}
          <article id="things-to-do" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Things to Do in Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Boating on Phewa Lake</h3>
              <p>
                Renting a rowboat or paddleboat is the area's signature activity, and rates are inexpensive enough that most visitors do it at least once. Boats are typically rented by the hour directly from operators along the shore, with no advance booking required.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Walking Along the Lakeside Promenade</h3>
              <p>
                The paved walkway running along the lake is where the area's evening social life plays out, lined with cafés, bars, and craft stalls. Sunset is the busiest and most scenic time to walk it, when the light over the water draws out both locals and tourists.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Shopping for Souvenirs and Local Crafts</h3>
              <p>
                Lakeside's main strip is also Pokhara's primary shopping street, mixing trekking gear shops with stalls selling pashmina scarves, singing bowls, prayer flags, and handmade jewelry. Bargaining is expected at most independent stalls, though fixed-price shops are increasingly common.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Yoga, Wellness, and Relaxation</h3>
              <p>
                A growing number of studios and retreat centers around Lakeside offer drop-in yoga classes, massage, and short wellness retreats, catering to both day-trippers and travelers staying for extended periods. It's a popular way to recover after a trek or simply slow down before one.
              </p>
            </div>
          </article>

          {/* SECTION 6: ADVENTURE ACTIVITIES */}
          <article id="adventure-activities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Adventure Activities That Make Pokhara Nepal's Adventure Capital
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Pokhara is famous worldwide as a hub for extreme and recreational adventure sports:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-stone-500">
                <li>
                  <strong>Paragliding Above Phewa Lake:</strong> Paragliding is arguably Pokhara's best-known adventure activity, with tandem flights launching from Sarangkot and landing near Lakeside.
                </li>
                <li>
                  <strong>Ziplining &amp; High-Speed Descents:</strong> One of the longest and steepest zip lines in the world operates just outside Pokhara, offering a short but intense descent with views over the valley.
                </li>
                <li>
                  <strong>Bungee Jumping:</strong> A short drive from Lakeside, a high-elevation bungee jump over a river gorge gives thrill-seekers one of Nepal's most intense activities.
                </li>
                <li>
                  <strong>Ultralight Flights:</strong> Open-cockpit aircraft flights depart from Pokhara's airport and offer close-up aerial views of the Annapurna range.
                </li>
                <li>
                  <strong>Helicopter Sightseeing:</strong> For travelers short on time but eager to see the high Himalaya, helicopter sightseeing tours from Pokhara cover ground in hours that would otherwise take days on foot, including a brief landing near Annapurna Base Camp.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 7: WHERE TO STAY */}
          <article id="where-to-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where to Stay in Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Lakeside's lodging infrastructure covers all budget requirements:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-stone-500">
                <li>
                  <strong>Budget Hotels and Backpacker Hostels:</strong> Lakeside has one of Nepal's highest concentrations of budget accommodation, with simple guesthouses and hostels available. Most are located a short walk from the water.
                </li>
                <li>
                  <strong>Mid-Range Hotels:</strong> The bulk of Lakeside's accommodation falls into this category: clean, comfortable hotels with private bathrooms, reliable Wi-Fi, and often a rooftop terrace with views.
                </li>
                <li>
                  <strong>Luxury Resorts:</strong> A smaller number of upscale resorts and boutique properties line the lake's edge, offering direct water access, spa facilities, and higher-end dining.
                </li>
              </ul>
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs leading-relaxed text-emerald-800">
                <strong>Why Lakeside Is the Best Place to Stay:</strong> Compared to quieter neighborhoods elsewhere in the city, Lakeside wins on convenience: every category of hotel, restaurant, and trekking service is within walking distance, and the lakefront setting adds genuine scenic value.
              </div>
            </div>
          </article>

          {/* SECTION 8: DINING & NIGHTLIFE */}
          <article id="dining-nightlife" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Restaurants, Cafes, and Nightlife in Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Traditional Nepali Food Experiences</h3>
              <p>
                Dal bhat remains the staple meal across Nepal, and Lakeside has no shortage of restaurants serving it well, often with unlimited refills. Momos—Nepali dumplings, steamed or fried—are the area's most popular snack food and a near-mandatory try for first-time visitors.
              </p>
              <h3 className="text-lg font-bold text-stone-900">International Restaurants for Travelers</h3>
              <p>
                Decades of tourism have given Lakeside an unusually broad international food scene for a city its size, with Italian, Indian, Israeli, Korean, and Western comfort-food restaurants all represented along the main strip. It's a useful reset for travelers who've spent a week eating trail food.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Popular Lakeside Cafes &amp; Nightlife</h3>
              <p>
                Coffee culture has taken firm hold in Lakeside, with cafés ranging from simple lake-view spots to specialty roasters with reliable Wi-Fi. The evening scene leans casual rather than club-heavy, with rooftop bars, live acoustic music, and a handful of late-night venues clustered around the main strip.
              </p>
            </div>
          </article>

          {/* SECTION 9: PREP & SERVICES */}
          <article id="trek-preparation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Preparation and Travel Services in Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Preparing for a trek requires organizing equipment, money, and communications:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-stone-500">
                <li>
                  <strong>Trekking Gear Rental and Outdoor Shops:</strong> Lakeside is dense with outdoor gear shops renting and selling down jackets, sub-zero sleeping bags, trekking poles, and rain gear. Quality varies between shops, so check zippers, insulation, and seams before committing.
                </li>
                <li>
                  <strong>Luggage Storage Services:</strong> There's no need to haul city clothes or non-trekking belongings into the mountains. Most hotels in Lakeside offer secure luggage storage, free for guests, so you can leave the extra bags behind.
                </li>
                <li>
                  <strong>ATMs, Currency Exchange, and Cash Planning:</strong> Lakeside has plenty of ATMs that accept international cards. Cash disappears almost entirely once you leave the trailhead, so withdraw enough Nepali Rupees in Lakeside to cover daily trail costs.
                </li>
                <li>
                  <strong>SIM Cards, Wi-Fi, and Connectivity:</strong> Local SIM cards (Ncell and NTC) are sold openly along the main strip and activate quickly, though connectivity drops off sharply once you're deep into the mountains.
                </li>
                <li>
                  <strong>Trekking Agencies and Guide Services:</strong> Lakeside is home to dozens of trekking agencies. Working with a locally established agency, rather than booking blind online, generally gets you more accurate route information.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 10: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Several transport methods connect Kathmandu and Pokhara Lakeside:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-stone-500">
                <li>
                  <strong>Flights from Kathmandu to Pokhara:</strong> Domestic flights between Kathmandu and Pokhara take roughly 25 minutes and run multiple times daily. It's the fastest option and the most reliable choice during the monsoon.
                </li>
                <li>
                  <strong>Tourist Bus Services:</strong> Tourist buses connect Kathmandu and Pokhara in about 6 to 7 hours, offering a budget-friendly alternative with scenic mountain and valley views.
                </li>
                <li>
                  <strong>Private Vehicle Transfers:</strong> Private cars and jeeps offer the most flexibility, allowing stops along the route and direct drop-off at your hotel door.
                </li>
                <li>
                  <strong>Getting from Pokhara Airport to Lakeside:</strong> The airport sits roughly 15 to 20 minutes from Lakeside by taxi, and fares are generally fixed or easy to negotiate.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Pokhara Lakeside
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <ul className="space-y-3 text-xs text-stone-500">
                <li>
                  🌸 <strong>Spring (March to May):</strong> Warm days, blooming rhododendrons on the hillsides, and clear mountain views. This is one of the two peak seasons for trekking.
                </li>
                <li>
                  🍁 <strong>Autumn (September to November):</strong> Widely considered the best overall season. Stable weather, the clearest visibility of the year, and comfortable temperatures.
                </li>
                <li>
                  ❄️ <strong>Winter (December to February):</strong> Days are mild and sunny, though nights turn very cold. Lower trekking routes remain accessible.
                </li>
                <li>
                  ☔ <strong>Monsoon Season (June to August):</strong> Heavy, frequent rain and reduced mountain visibility. Trail conditions are less reliable.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 12: PRACTICAL TIPS */}
          <article id="travel-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Travel Tips for First-Time Visitors
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Plan your travel budget and schedule based on our quick breakdown of expenses:
            </p>

            {/* Budget Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Travel Tier</th>
                      <th className="p-4">Daily Budget</th>
                      <th className="p-4">Lodging Type</th>
                      <th className="p-4">Food &amp; Dining</th>
                      <th className="p-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {budgetTiers.map((tier, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{tier.tier}</td>
                        <td className="p-4 text-xs font-bold text-emerald-600">{tier.costDay}</td>
                        <td className="p-4 text-xs text-stone-500">{tier.lodging}</td>
                        <td className="p-4 text-xs text-stone-500">{tier.food}</td>
                        <td className="p-4 text-xs text-stone-500 leading-relaxed">{tier.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-stone-600 leading-relaxed text-sm space-y-4 mt-6">
              <p>
                <strong>How Many Days to Spend:</strong> Most travelers spend two to three days in Lakeside before a trek, enough time to sort permits, gear, and transport without rushing, and a similar stretch afterward to recover.
              </p>
              <p>
                <strong>Safety &amp; Security:</strong> Lakeside is generally safe for tourists, including solo travelers, with petty theft being the main risk rather than violent crime. Standard precautions apply.
              </p>
              <p>
                <strong>Local Etiquette:</strong> Modest dress is appreciated when visiting temples. Support locally owned guesthouses and restaurants to help channel tourism revenue directly into the community.
              </p>
            </div>
          </article>

          {/* SECTION 13: WHY STAY */}
          <article id="why-stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why We Recommend Staying in Lakeside Before Your Annapurna Trek
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                <strong>Convenience for Trek Preparation:</strong> Everything a trekker needs to finalize plans—gear shops, permit offices, ATMs, and transport bookings—sits within a short walk in Lakeside. That density cuts out the wasted time and uncertainty.
              </p>
              <p>
                <strong>Access to Permits, Gear, and Transportation:</strong> Because so many agencies and outfitters operate here, last-minute changes to your route, gear list, or departure date are far easier to handle in Lakeside than anywhere else.
              </p>
              <p>
                <strong>Comfortable Recovery After the Trek:</strong> After days on the trail, Lakeside's hotels, restaurants, and cafés offer exactly the kind of comfort most trekkers are craving: a hot shower, a real bed, and a meal that isn't dal bhat.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Pokhara Lakeside
            </h2>
            <div className="space-y-4 mt-6">
              {faqItems.map((faq, idx) => (
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

          {/* CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Pokhara Lakeside works because it does two jobs at once: it's a genuinely worthwhile destination on its own, with a lake, temples, viewpoints, and an adventure-sports scene that would justify a visit even without the mountains behind it, and it's the most efficient base for preparing an Annapurna trek. Few places in Nepal combine relaxed lakefront tourism with serious trekking infrastructure this well.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you're here for a few days of boating and sunset walks or you're about to head into the Annapurna Conservation Area for a multi-day trek, Lakeside is built to support the trip you're actually planning to take.
            </p>
          </article>

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Annapurna Trek from Pokhara</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Let us handle the permits, gear, transport, and guide arrangements while you focus on the trail. Inquire now to put together a seamless Pokhara-to-Annapurna trekking package.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    📝 Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🚙 View Pokhara to Ghandruk Transportation Guide
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🎒 Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Our Pokhara Lakeside transit and guide coordination details are verified weekly with the local tourism boards and ACAP regional office in Pokhara.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
