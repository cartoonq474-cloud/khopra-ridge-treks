import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/swanta-village-lodge-guide",
  },
  title: "Swanta Village Lodge & Homestay Guide: Best Accommodation on the Khopra Ridge Trek",
  description: "Planning to stay in Swanta Village? Discover the best lodges and homestays, room types, facilities, food options, pricing, and trekking tips for your Khopra Ridge Trek overnight stop.",
};

export default function Page() {
  const highlightPoints = [
    {
      title: "Family Lodges",
      desc: "Warm wooden-framed rooms managed directly by Magar families, featuring common social dining halls and home-cooked menus."
    },
    {
      title: "Local Homestays",
      desc: "Stay directly inside a working Magar home to observe daily routines, farm chores, and ancestral stone architecture."
    },
    {
      title: "Mountain Guesthouses",
      desc: "Simple budget-friendly accommodations suited for walk-in travelers and solo trekkers looking for basic shelter."
    }
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
            <span className="text-emerald-400">Swanta Village Lodge Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Cultural Homestays &amp; Cooperatives
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Swanta Village Lodge &amp; Homestay Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Best accommodation on the Khopra Ridge Trek: Magar hospitality, organic farm dining, and local cheese cooperatives.
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
                Trekking Position
              </a>
              <a href="#accommodation-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodging &amp; Homestays
              </a>
              <a href="#room-types" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Room Quality
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Utilities &amp; Showers
              </a>
              <a href="#dining" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Organic Food
              </a>
              <a href="#culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Magar Culture
              </a>
              <a href="#cheese" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cheese Factory Co-op
              </a>
              <a href="#prices" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pricing &amp; Costs
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Village Comparisons
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#booking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Booking Tips
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
              Swanta Village Lodge &amp; Homestay Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are trekking the Khopra Ridge route and wondering where to stay, what to expect, and whether Swanta Village is worth an overnight stop — this guide answers all of it.
              </p>
              <p>
                Swanta Village sits at around 2,200 metres (7,217 feet) in the Myagdi District of the Annapurna Region. It is a warm, sun-facing farming settlement built on terraced hillsides, home to the indigenous Magar community. For trekkers descending from the cold heights of Khopra Ridge or climbing toward Bayeli Kharka and Dobato, Swanta is one of the most genuinely comfortable and culturally rich overnight stops on the entire route.
              </p>
              <p>
                Accommodation in Swanta is not luxurious. It is honest, warm, and rooted in the village itself — family-run lodges, local homestays, and community guesthouses where you eat food grown in the garden outside and wake up to views of terraced fields against a Himalayan backdrop.
              </p>
              <p>
                This guide covers everything you need to know: accommodation types, room conditions, facilities, food, pricing, cultural experience, booking tips, and how Swanta compares to other trekking villages on the route.
              </p>
            </div>
          </article>

          {/* SECTION: LOCATION */}
          <article id="location" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Swanta Village on the Khopra Ridge Trek Route?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before choosing where to sleep, it helps to understand exactly where Swanta sits within the trek and why most trekkers stop here.
              </p>
              <p>
                <strong>Trekking Position Between Key Villages:</strong> Swanta Village falls on the popular Khopra Ridge Trek circuit that connects lowland gateway villages with high-altitude ridge camps. On the standard route, trekkers typically approach Swanta from Ghorepani or arrive after descending from the upper route through Chhistibung and Bayeli Kharka.
              </p>
              <p>
                The village connects to key points on the circuit including Tadapani, Ghandruk, and eventually the lower trail networks heading toward Beni. Understanding this position matters because Swanta&apos;s location makes it a logical midpoint — not just a cultural curiosity, but a practical and comfortable place to rest before or after higher altitude sections.
              </p>
              <p>
                <strong>Altitude and Trekking Conditions:</strong> At 2,200 metres, Swanta sits well below the stress zone for altitude-related discomfort. By comparison, Khopra Ridge camp sits above 3,600 metres and Khayer Lake is higher still. Swanta&apos;s elevation means warmer nights, stable weather, and significantly more comfortable sleep than camps at higher elevation.
              </p>
              <p>
                The village enjoys reliable sunshine, natural shelter from wind, and a climate that feels dramatically warmer than the ridgeline. For trekkers who have spent nights in the cold above, Swanta feels like a genuine recovery point.
              </p>
              <p>
                <strong>Why Swanta Is a Natural Overnight Stop:</strong> The distance logic is straightforward. Swanta breaks up the trek at a point where continuing further would mean pushing into difficult terrain in fading light or arriving at a camp with fewer comforts. The lodges in Swanta village have reliable facilities, meals are ready by early evening, and the village atmosphere gives trekkers something to engage with beyond their own exhaustion.
              </p>
              <p>
                It is also worth saying: trekkers who skip Swanta often look back and wish they had stayed. The village stay experience here is genuinely different from a ridge camp overnight.
              </p>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION OPTIONS */}
          <article id="accommodation-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation Options in Swanta Village
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              There are three main accommodation types in Swanta. They overlap in character — all are simple, locally run, and built on genuine hospitality:
            </p>

            <div className="grid gap-6 sm:grid-cols-3 my-6">
              {highlightPoints.map((pt, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
                  <h4 className="font-extrabold text-stone-955 text-base">
                    {pt.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Family-Run Trekking Lodges:</strong> Independently operated guesthouses where a local family manages everything. Rooms are basic but clean, with simple wooden furniture, foam or spring mattresses, and window views that often look out over terraced farmland. Dining halls are communal, serving farm-fresh food cooked from scratch.
              </p>
              <p>
                <strong>Local Homestays:</strong> Sleep inside a working Magar family home rather than a purpose-built guesthouse. The household rhythms continue around you, meals are eaten near the family, and the cultural immersion is immediate. You get access to private rooms within family dwellings, shared bathroom facilities, and meals prepared with garden vegetables.
              </p>
              <p>
                <strong>Simple Mountain Guesthouses:</strong> A middle category with basic kitchen service, shared facilities, and flexible walk-in arrangements. Comfort is basic but entirely sufficient for budget and solo trekkers.
              </p>
            </div>
          </article>

          {/* SECTION: ROOM TYPES */}
          <article id="room-types" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Room Types and What to Expect
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Twin and Private Rooms:</strong> Most lodges offer twin rooms (two single beds with space for bags). A small number of private double-bed rooms exist, but they should be requested in advance. Rooms are small, featuring wooden floors or tiling, and simple decor. Many rooms offer mountain-facing views.
              </p>
              <p>
                <strong>Shared Rooms:</strong> During peak spring and autumn months, some lodges operate shared dormitory-style setups to handle the hiking rush. Booking early or choosing a guided operator helps secure private spaces.
              </p>
              <p>
                <strong>Bedding &amp; Cleanliness:</strong> Cleanliness standards are high, reflecting Magar pride. Beds are made with basic foam mattresses, sheets, pillows, and clean blankets. In winter months, carrying a sleeping bag liner adds crucial warmth since individual bedrooms do not have heating.
              </p>
            </div>
          </article>

          {/* SECTION: FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Facilities in Swanta Village Lodges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Bathrooms &amp; Toilets:</strong> Standard setups feature shared corridor bathrooms serving multiple rooms. Toilets are a mix of traditional squat systems and western-style toilets.
              </p>
              <p>
                <strong>Hot Shower Availability:</strong> Solar water heaters provide hot showers, which are highly appreciated after days at higher ridge camps. Availability depends on weather; wood-fired bucket hot showers are occasionally offered as backup.
              </p>
              <p>
                <strong>Electricity and Charging:</strong> Swanta benefits from stable local hydroelectric power. Trekkers can charge phones, cameras, and power banks inside their rooms at no extra cost in most lodges, unlike high camps.
              </p>
              <p>
                <strong>WiFi and Mobile Network:</strong> Ncell signal is generally stable for basic calls and text messages. WiFi is limited and slow; you should download offline maps and handle critical messaging before arriving.
              </p>
              <p>
                <strong>Drinking Water &amp; Hygiene:</strong> Safe boiled or filtered water is sold at refill stations in the lodges. Purifying tablets or filter bottles are recommended as backup.
              </p>
            </div>
          </article>

          {/* SECTION: DINING */}
          <article id="dining" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Dining in Swanta Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Dal Bhat Meals:</strong> The nutritional staple of Annapurna hikes. A Swanta Dal Bhat includes steamed rice, lentil soup, curried vegetables, and local pickles. Free refills are standard, offering the best caloric value. Expect to pay NPR 500–700 per set.
              </p>
              <p>
                <strong>Organic Farm-to-Table Dining:</strong> What distinguishes Swanta dining is proximity. The greens, potatoes, and beans are harvested directly from the surrounding terraced crop fields. It is fresh, organic, and locally prepared.
              </p>
              <p>
                <strong>Breakfast, Snacks, &amp; Tea:</strong> Standard breakfast options include chapati, eggs, porridge, Tibetan bread, and coffee. Lodges serve hot milk tea, ginger tea, and noodles during day breaks, fostering social dining hall vibes.
              </p>
            </div>
          </article>

          {/* SECTION: CULTURE */}
          <article id="culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Homestay Experience with the Magar Community
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Choosing a homestay in Swanta is choosing to step past the surface of a trekking village and into something more real.
              </p>
              <p>
                <strong>Daily Life Inside a Swanta Homestay:</strong> Household routines unfold around you. Mornings start early with animal feeding, firewood collection, and kitchen prep. The atmosphere is calm and grounded. Families give you space while offering quiet, authentic hospitality.
              </p>
              <p>
                <strong>Cultural Immersion and Local Traditions:</strong> Homes feature traditional clay and stone construction, low timber doorways, and central hearths. Magar hospitality emphasizes generosity with food; accepting small refills is considered polite and culturally meaningful.
              </p>
              <p>
                <strong>Farm-Based Living Experience:</strong> The valley crop fields grow millet, barley, and potatoes. Watching or participating in harvesting provides a direct connection to the agricultural rhythm of Annapurna community life.
              </p>
            </div>
          </article>

          {/* SECTION: CHEESE */}
          <article id="cheese" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Swanta Cheese Cooperative Experience
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Local Cheese Production System:</strong> Swanta hosts a community-run yak and cattle cheese cooperative. The processing facility turns milk from high pasture cattle into cheese rounds, aged using traditional methods. This local enterprise supports village economic resilience.
              </p>
              <p>
                <strong>Visiting the Cheese Factory:</strong> Trekkers can visit the aging room to see the production process. Visits are arranged via your guide or lodge host and take around 30 to 45 minutes. It is a fascinating look at community cooperative mechanics.
              </p>
              <p>
                <strong>Buying Local Products:</strong> Aged cheese rounds are sold directly to hikers at reasonable prices. Buying cheese supports local farming families and provides a calorie-dense snack that packs well on the trail.
              </p>
            </div>
          </article>

          {/* SECTION: PRICES */}
          <article id="prices" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation Prices in Swanta Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Swanta Village remains a budget-friendly destination. Here is a breakdown of average costs:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Room Rates:</strong> NPR 300–700 per night (private rooms are on the higher end). Many lodges reduce room costs if you eat meals at their property.</li>
                <li><strong>Dal Bhat:</strong> NPR 500–700 per set</li>
                <li><strong>Breakfast Options:</strong> NPR 200–400</li>
                <li><strong>Hot Tea/Drinks:</strong> NPR 80–150</li>
                <li><strong>Estimated Daily Meal Budget:</strong> NPR 1,200–1,800 per person</li>
              </ul>
              <p>
                <strong>Trekking Packages vs Independent Cost:</strong> Independent hikers pay cash directly. Trekkers booked on guided packages have accommodations and meal logistics pre-arranged and covered, which guarantees private rooms during peak months and supports the local Magar schools cooperative.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Swanta vs Other Trekking Villages on the Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Swanta vs Ghorepani:</strong> Ghorepani (2,860m) is a busy hub with larger, commercialized lodges, WiFi, and souvenir shops. Swanta offers a quieter, more authentic community atmosphere away from the crowds.
              </p>
              <p>
                <strong>Swanta vs Bayeli Kharka:</strong> Bayeli Kharka (3,400m) is an exposed high-altitude settlement with basic lodges and colder nights. Swanta is much warmer, offering comfortable recovery sleep, hot solar showers, and a richer cultural experience.
              </p>
              <p>
                <strong>Swanta vs Chhistibung:</strong> Chhistibung (2,975m) has very limited lodge structures, serving mostly as a quick lunch spot. Swanta provides better rooms, diverse food menus, and homestay opportunities.
              </p>
            </div>
          </article>

          {/* SECTION: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Stay in Swanta Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring &amp; Autumn (Peak Seasons):</strong> March to May brings blooming rhododendron trails. September to November offers clear blue skies and sharp mountain views. Peak demand makes pre-booking essential.
              </p>
              <p>
                <strong>Winter (December to February):</strong> Possible but cold. Swanta (2,200m) rarely receives heavy snow, but trail sections above can be icy. Warm sleeping bags and thermal base layers are required.
              </p>
              <p>
                <strong>Monsoon (June to August):</strong> Saturated trails, low visibility, and leeches. Monsoon trekking is not recommended.
              </p>
            </div>
          </article>

          {/* SECTION: BOOKING */}
          <article id="booking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Booking Tips for Swanta Accommodation
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Walk-in vs Pre-Booking Reality:</strong> Outside peak months, finding walk-in rooms is simple. In October and November, lodges reach capacity quickly. Arriving before 3:00 PM is crucial to secure quality private rooms if trekking independently.
              </p>
              <p>
                <strong>Role of Guides:</strong> Licensed guides maintain direct lines with Swanta homestay operators, ensuring you arrive to a pre-booked room, confirmed meals, and a warm welcome without walk-in stress.
              </p>
              <p>
                <strong>Peak Season Windows:</strong> Expect the highest demand from mid-October to mid-November, and late March to late April.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Swanta Village Lodges
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where can I stay in Swanta Village?",
                  a: "Swanta Village has family-run trekking lodges, local Magar homestays, and simple community guesthouses. All are locally operated and provide basic but clean accommodation with meals included as a separate service."
                },
                {
                  q: "Are homestays available in Swanta Village?",
                  a: "Yes. Homestay accommodation in Swanta Village allows you to stay inside a working Magar family home, eat family-cooked meals, and experience village life directly. This is one of the most sought-after cultural experiences on the Khopra Ridge Trek route."
                },
                {
                  q: "How much does accommodation cost in Swanta Village?",
                  a: "Room rates in Swanta Village typically range from NPR 300–700 per night. Many lodges offer low or zero room charges if you eat your meals at the same property. Daily food costs run approximately NPR 1,200–1,800 per person depending on meals chosen."
                },
                {
                  q: "Do lodges in Swanta have hot showers?",
                  a: "Yes. Most lodges in Swanta Village offer solar-powered hot showers. After trekking from higher altitudes, this is one of the most appreciated facilities in the village. Shower availability depends on solar conditions — cloudy days may reduce water temperature."
                },
                {
                  q: "Is WiFi available in Swanta Village accommodation?",
                  a: "WiFi access in Swanta is limited and unreliable. Some lodges offer basic WiFi, but speeds are slow. Ncell mobile network coverage is available and generally adequate for calls and messaging. Download offline maps and handle communications before arriving in the village."
                },
                {
                  q: "What food is available in Swanta Village lodges?",
                  a: "The standard meal is Dal Bhat — rice, lentil soup, vegetable curry, and seasonal sides. Breakfast options include eggs, chapati, porridge, and noodle soup. Tea, coffee, and snacks are available throughout the day. Food is cooked using locally grown organic vegetables where possible."
                },
                {
                  q: "Is Swanta a good overnight stop on the Khopra Ridge Trek?",
                  a: "Yes. Swanta is one of the most comfortable and culturally rewarding overnight stops on the Khopra Ridge circuit. Its combination of reliable facilities, warm climate at 2,200 metres, genuine Magar cultural experience, and the unique cheese cooperative makes it a highlight for most trekkers on the route."
                },
                {
                  q: "Do I need to book accommodation in Swanta in advance?",
                  a: "During peak trekking season (October–November and March–April), advance booking is recommended. Guided trekkers typically have accommodation pre-arranged. Independent trekkers should aim to arrive before 3pm during peak months to secure good rooms."
                },
                {
                  q: "Can independent trekkers stay in Swanta Village?",
                  a: "Yes. Independent trekkers with valid ACAP and TIMS permits are welcome in Swanta. Walk-in accommodation is available for most of the year outside peak season. During high-demand periods, early arrival improves your chances of securing a private or preferred room."
                },
                {
                  q: "What makes Swanta different from other trekking villages?",
                  a: "Swanta Village offers a combination that is rare on the Khopra Ridge route: a comfortable lower altitude, reliable electricity and hot showers, genuine Magar cultural homestays, organic farm-to-table food, and the community cheese cooperative experience. It is the most culturally immersive overnight stop on the circuit, not just a rest point."
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
              Swanta Village is one of those places that trekkers often underestimate from a distance and deeply appreciate once they arrive. At 2,200 metres, it offers a warm escape from cold ridge nights. It provides reliable facilities in a village setting that has no interest in performing tourism — the Magar community is simply living its life, and you are welcomed into that for a night or two.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The accommodation in Swanta is honest and practical. Family-run lodges, cultural homestays, and community guesthouses all deliver what trekkers need most: a clean bed, a hot meal, a warm shower, and a sense that you are somewhere genuinely worth being.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The cheese cooperative, the terraced farmlands, the Magar hospitality — none of this is staged. It is simply what Swanta is. If you are planning the Khopra Ridge Trek and wondering whether Swanta deserves a full overnight stop rather than a passing lunch break: it does. Build it into your itinerary, spend a full evening there, and let the village work on you.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Book Your Guided Khopra Ridge Trek with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We run fully guided Khopra Ridge Trek packages that include confirmed accommodation in Swanta Village, meals arranged with local Magar families, and support from licensed local trekking guides who have been operating this circuit for years. Every accommodation profit on our treks goes directly back into Magar village schools, local clinics, and community infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Your Guided Trek Package &rarr;
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
                This Swanta Village lodging directory is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly inspect fireplace heating, safety systems, and sanitation standards. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
