import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Community Lodge: Complete Guide for Trekkers (2024)",
  description: "Discover everything about the Khopra Ridge Community Lodge at 3,660m — rooms, facilities, mountain views, community tourism impact, Khayer Lake access, and practical trekking tips.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Community Eco-Tourism Node
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Ridge Community Lodge: Complete Guide for Trekkers
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">There are teahouses scattered all across the Annapurna region. And then there is the Khopra Ridge Community Lodge — something entirely different. Perched at 3,660 meters on the spine of Khopra Ridge, this community-owned lodge is one of the most memorable overnight stops in the Nepal Himalayas.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">12,007 feet (Alpine Zone)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Lodge Type</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Eco-Lodge</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Community-Owned &amp; Run</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Revenue Impact</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">100% Local</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Supports Swanta High School</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Key Excursion</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Khayer Lake</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">4,660m sacred alpine lake</span>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Quick Overview
              </a>
              <a href="#what-is-lodge" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">What is the Lodge?
              </a>
              <a href="#community-model" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Community Tourism Model
              </a>
              <a href="#location-access" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Where is it Located?
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Rooms &amp; Sleeping
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Facilities &amp; Amenities
              </a>
              <a href="#mountain-views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Mountain Views
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Khayer Lake Day Hike
              </a>
              <a href="#safety-altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Altitude &amp; Safety
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Best Time to Stay
              </a>
              <a href="#worth-it" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Is It Worth It?
              </a>
              <a href="#plan-book" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Plan &amp; Book
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
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Mountain Hospitality with a Purpose
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">The views stretch from the white walls of Dhaulagiri in the west to the soaring peaks of Annapurna South and Nilgiri in the east. On a clear evening, the horizon looks almost impossibly wide. But what makes this lodge truly stand out has nothing to do with the scenery.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">Built and owned collectively by local Magar and Gurung villages, every rupee you spend on your bed and meals flows directly back into the community — funding classrooms, paying teachers, and supporting rural health services. This is not corporate eco-tourism. This is mountain hospitality with a direct human purpose.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">For trekkers planning the Khopra Ridge Trek, this lodge is also the essential gateway to the sacred Khayer Lake (4,660m), one of the most spiritually significant alpine lakes in the Annapurna Conservation Area. This guide covers everything you need to know before you arrive — the lodge, the rooms, the food, the views, the cold, and the community story behind it all.
            </p>

            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 md:p-8 mt-6">
              <p className="text-emerald-950 font-bold text-base leading-relaxed">Planning a Khopra Ridge Trek? Our local team handles permits, accommodation, guides, and transport.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 mt-4 text-emerald-700 font-extrabold text-sm hover:text-emerald-800 transition"
              >
                <span>Inquire and book today</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </article>

          {/* SECTION 2: WHAT IS THE LODGE */}
          <article id="what-is-lodge" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Is the Khopra Ridge Community Lodge?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge Community Lodge sits directly on the ridgeline of Khopra Danda (also written as Khopra Ridge), a high mountain ridge that forms the southern boundary of the Annapurna region in the Myagdi and Kaski districts of Nepal.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Location on Khopra Ridge</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The lodge elevation is 3,660 meters above sea level — high enough to place guests above the treeline, inside the alpine zone, and in full view of the Himalayan giants that ring the western Annapurna circuit. The nearest settlements below are <Link href="/nodes/chhistibung-guide" className="text-emerald-700 font-bold hover:underline">Chhistibung</Link> (roughly 2,870m) and <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta Village</Link> — both connected to the lodge by well-established trekking trails.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Why the Lodge Was Established</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The lodge was established through a cooperative effort by the local villages of the Swanta Valley to bring tourism revenue directly into the hands of the people who live and work on these mountains year-round. Before the lodge existed, most trekkers passed through the Annapurna Conservation Area on the classic Poon Hill and Ghorepani circuit. The communities living deeper in the range near Khopra Ridge saw little benefit. The lodge changed this by creating a destination that required trekkers to stay, eat, and spend longer in the region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">What Makes It Different From Other Teahouses</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">A standard Annapurna teahouse is a private business. It may be family-run and friendly, but the profits stay within that family or are shared with a single owner. The Khopra Ridge Community Lodge operates on a fundamentally different model: ownership is collective, management is communal, and profits are pooled to support local schools, medical services, and community infrastructure. Staying here is one of the most direct ways a trekker can support rural mountain communities in Nepal.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: COMMUNITY MODEL */}
          <article id="community-model" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">The Community-Owned Tourism Model Behind the Lodge
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The lodge represents an innovative blueprint for how high-altitude community tourism can successfully sustain remote villages.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Funding Local Education</h4>
                <p className="text-xs text-stone-500 leading-relaxed">A direct portion of all accommodation and food revenue supports the Swanta High School — covering operational costs, teacher salaries, and materials for students in one of Nepal&apos;s most isolated mountain communities.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Rural Healthcare Support</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Additional funds are allocated to local medical services, providing basic healthcare access to communities that would otherwise face extremely long journeys to reach the nearest clinic.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">Community-based tourism in this region ensures that local people retain control over their natural and cultural assets. It prevents the displacement of communities by external commercial interests. And it creates a long-term incentive to preserve the environment and the trails — because the communities benefit directly from their protection.
            </p>
          </article>

          {/* SECTION 4: LOCATION AND ACCESS */}
          <article id="location-access" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Where Is Khopra Ridge Community Lodge Located?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Getting to the lodge requires hiking through some of the most dramatic forest and pasture zones on the western side of the Annapurna Circuit.
            </p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Access From Chhistibung</h4>
                <p className="mt-1">The most common approach to the lodge from below passes through Chhistibung, a small settlement at around 2,975 meters that serves as a transitional stop between the forested lower slopes and the open high ridge above. From Chhistibung, the trail climbs steadily through rhododendron forest and then opens out onto the ridge. Most trekkers complete this section in approximately two to three hours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">Connection to Swanta Village and Bayeli Kharka</h4>
                <p className="mt-1">Swanta Village lies below the lodge on the approach from the south and is typically visited as part of a multi-day circuit. <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 font-bold hover:underline">Bayeli Kharka</Link> (3,425m) offers a natural rest point on the ascent for those moving between Tadapani and the Khopra Ridge lodge.
                </p>
              </div>
            </div>

            {/* Quick Links to Related Routes */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-3">Explore Connected Trails &amp; Accommodation</h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
                <Link href="/nodes/chhistibung-accommodation" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Chhistibung Accommodation Guide</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/bayeli-kharka-to-chhistibung" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Bayeli to Chhistibung</span>
                  <span>→</span>
                </Link>
                <Link href="/routes/chhistibung-to-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
                  <span>Route: Chhistibung to Khopra</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* SECTION 5: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Accommodation at Khopra Ridge Community Lodge
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Accommodations on the ridge are simple, clean, and designed to offer protection from the intense cold at 3,660 meters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Room Types and Sleeping</h4>
                <p className="text-xs text-stone-500 leading-relaxed">The lodge offers twin-sharing rooms — two single beds per room with warm blankets provided. Rooms are simple, clean, and functional. Do not expect hotel-grade furnishings or private bathrooms: this is a high-altitude mountain lodge, and the accommodation reflects that honestly.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Comfort Levels &amp; Sleeping Bags</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Bringing a quality sleeping bag liner is strongly recommended, as temperatures drop significantly at night even in the warmer trekking seasons. A base layer set for sleeping is also worth packing to ensure comfort.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: FACILITIES AND AMENITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Facilities and Amenities Available at the Lodge
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Dining Hall and Common Areas</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">The central dining hall is the social heart of the Khopra Ridge Community Lodge. Trekkers from different groups gather here in the evenings around the wood-fired heating stove — one of the most effective antidotes to cold mountain nights. The hall is warm, simple, and convivial.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Food and Drinks</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Meals are prepared in the lodge kitchen using a combination of locally sourced ingredients, including organic vegetables and potatoes grown in the nearby Swanta Valley. The menu follows the standard trekking lodge format — dal bhat (the classic Nepali lentil rice meal), noodle soups, pasta, eggs, and simple breakfast options. Dal bhat is genuinely the best choice at altitude: high-carbohydrate, warm, and filling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Electricity, Charging and Wi-Fi</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Battery charging facilities are available at the lodge for a small additional fee. Given the remote location and the altitude, electricity depends on the lodge&apos;s available generation capacity — bring a power bank as a backup. Community Wi-Fi is available for a small charge, sufficient for basic messaging but not suitable for video calls.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">Water, Toilets and Hygiene</h3>
                <p className="text-stone-600 leading-relaxed text-sm mt-2">Drinking water is available — confirm with staff whether it has been boiled or treated, and carry water purification tablets as a standard precaution. Toilet facilities are basic and shared, which is standard for lodges at this elevation.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: MOUNTAIN VIEWS */}
          <article id="mountain-views" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Mountain Views From Khopra Ridge Community Lodge
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">The view from Khopra Ridge is widely considered one of the finest mountain panoramas accessible on foot in Nepal.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Dhaulagiri &amp; Western Peaks</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Dhaulagiri I — at 8,167 meters the seventh-highest mountain on earth — dominates the western skyline. You are close enough to see the mountain&apos;s glaciated flanks in detail, and high enough to take in its full vertical sweep from base ridges to summit. At sunrise, the mountain appears to glow from within.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Annapurna South, Nilgiri &amp; Machhapuchhre</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Turning east and north, the panorama shifts to include Annapurna South (7,219m), the Nilgiri massif, Gurja Himal, and — on clear days — the distinctive fish-tail profile of Machhapuchhre. This 360-degree mountain horizon is genuinely rare.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm mt-4">At 3,660 meters, above the pollution and light interference of valley settlements, the night sky is extraordinary. The Milky Way is visible on clear, moonless nights with absolute clarity. For daytime photography, wide-angle lenses are highly effective. Come prepared with fully charged batteries, as cold temperatures drain them faster than expected.
            </p>
          </article>

          {/* SECTION 8: KHAYER LAKE DAY HIKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Day Hike From the Lodge
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Khayer Lake (4,660m) is a sacred high-altitude lake of deep significance to Hindu and Buddhist communities throughout the region. Its remote location has protected it from heavy footfall.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">The Gateway</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">The lodge is the only practical overnight base for the Khayer Lake hike. The altitude difference of 1,000m makes a same-day ascent from lower down too demanding.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Route Stats</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">The round-trip hike takes 6 to 8 hours. The trail gains 1,000m of elevation over roughly 5 to 6 kilometers one way. The terrain is open, rocky, and alpine.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Lake Experience</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">The turquoise lake is set in a high rocky basin, ringed by prayer flags and stone shrines. The silence at 4,660m is absolute and spiritually moving.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: ALTITUDE AND SAFETY */}
          <article id="safety-altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Altitude, Weather and Safety Considerations
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">At 3,660 meters, the Khopra Ridge Community Lodge sits well above the altitude threshold at which symptoms of Acute Mountain Sickness (AMS) become a realistic consideration.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-amber-950 text-base">Prevention &amp; Safety Strategies</h4>
              <ul className="list-disc pl-5 text-xs text-amber-900 space-y-2 leading-relaxed">
                <li><strong>Ascend gradually:</strong>Gain no more than 300–500 meters of sleeping elevation per day above 3,000 meters.</li>
                <li><strong>Hydrate consistently:</strong>Aim for at least three liters of water per day at altitude.</li>
                <li><strong>Avoid alcohol:</strong>Avoid alcohol on the night before and the night at altitude.</li>
                <li><strong>Rest before the hike:</strong>An easy afternoon and early night at the lodge significantly improves performance and safety on the lake excursion.</li>
                <li><strong>Descend if symptoms worsen:</strong>No view or itinerary target justifies ignoring serious altitude illness.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 10: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time to Stay at Khopra Ridge Community Lodge
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (Mar–May)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Rhododendron forests bloom in vivid red and pink on the approach. Morning mountain views are excellent before afternoon clouds build up.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (Sep–Nov)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Peak season. Skies are clearest post-monsoon, delivering the sharpest views of Dhaulagiri. Communal dining hall is at its most sociable.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter (Dec–Feb)</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">Cold and snow. For experienced trekkers only. Snow above Chhistibung can make the approach difficult, but skies are crystal clear.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: WORTH IT */}
          <article id="worth-it" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is Staying at Khopra Ridge Community Lodge Worth It?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Reasons Trekkers Love Staying Here</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1 leading-relaxed">
                  <li>Unobstructed, panoramic 360-degree mountain views with fewer crowds than Poon Hill.</li>
                  <li>Community-owned model where 100% of profits fund Swanta High School.</li>
                  <li>Staging ground for the spectacular, sacred Khayer Lake (4,660m).</li>
                  <li>Atmospheric wood-fired dining hall gathering.</li>
                </ul>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Potential Challenges to Consider</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1 leading-relaxed">
                  <li>Basic facilities: shared toilets, no hot showers, and limited electricity.</li>
                  <li>Intensely cold nights (easily dropping below freezing at 3,660m).</li>
                  <li>Evacuation in emergency requires significant time and helicopter transport.</li>
                  <li>Altitude sensitivity: not everyone acclimatizes easily here.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 12: PLAN & BOOK */}
          <article id="plan-book" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How to Plan and Book Your Stay
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">Independent trekkers can stay at the lodge without a guide, but peak season planning is essential. The lodge has limited room capacity, and during October in particular, arriving without a plan can mean finding the lodge full.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">All trekkers require valid ACAP (Annapurna Conservation Area Permit) and TIMS (Trekkers&apos; Information Management System) cards, which must be obtained in Pokhara or Kathmandu before departure.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">For most international trekkers, joining a guided trek is the safest way to experience the lodge. A local guide brings route knowledge, monitors symptoms of AMS, pre-arranges lodging, and provides safety support on the exposed trail to Khayer Lake.
            </p>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Khopra Ridge Community Lodge
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the Khopra Ridge Community Lodge?",
                  a: "The Khopra Ridge Community Lodge is a collectively owned mountain lodge at 3,660 meters on Khopra Ridge in the Annapurna region of Nepal. It was established by local Magar and Gurung villages and is managed as a community enterprise, with all profits supporting Swanta High School and local healthcare services."
                },
                {
                  q: "Who owns the Khopra Ridge Community Lodge?",
                  a: "The lodge is owned and operated collectively by local villages from the Swanta Valley, primarily from the Magar and Gurung communities. It operates as a community-based tourism enterprise rather than a private business."
                },
                {
                  q: "How high is Khopra Ridge Community Lodge?",
                  a: "The lodge sits at 3,660 meters (12,007 feet) above sea level on the Khopra Ridge in the Annapurna Conservation Area of Nepal."
                },
                {
                  q: "Can independent trekkers stay at the lodge?",
                  a: "Yes. Independent trekkers can stay at the lodge without a guide or pre-arranged booking. During peak season (October–November), arriving early in the day or arranging in advance is advisable given limited room capacity."
                },
                {
                  q: "Is Wi-Fi available at Khopra Ridge Community Lodge?",
                  a: "Community Wi-Fi is available at the lodge for a small fee. Connection speed is limited due to the remote mountain location. It is sufficient for basic messaging but not reliable for heavy data use."
                },
                {
                  q: "What facilities are available at the lodge?",
                  a: "The lodge offers twin-sharing rooms with blankets, a central wood-fired dining hall, basic meals using local ingredients, battery charging facilities (fee applies), community Wi-Fi (fee applies), shared toilet facilities, and drinking water. Hot showers are not available."
                },
                {
                  q: "Is the lodge the starting point for the Khayer Lake hike?",
                  a: "Yes. The Khopra Ridge Community Lodge is the primary and most practical base for the Khayer Lake (4,660m) day hike. Trekkers typically stay one night at the lodge, then depart early the following morning for the lake excursion."
                },
                {
                  q: "How cold does it get at Khopra Ridge?",
                  a: "Temperatures at 3,660 meters drop below freezing during winter nights and can reach low single digits Celsius even in spring and autumn. A warm sleeping bag liner, thermal base layers, and proper cold-weather gear are essential regardless of season."
                },
                {
                  q: "What mountain views can be seen from the lodge?",
                  a: "The lodge offers a panoramic 360-degree view of Himalayan peaks including Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri, Gurja Himal, and Machhapuchhre. The sunrise view of Dhaulagiri from the ridge is considered one of the finest mountain viewpoints in the Annapurna region."
                },
                {
                  q: "When is the best time to stay at Khopra Ridge Community Lodge?",
                  a: "The best seasons are autumn (September to November) and spring (March to May). Autumn offers the clearest mountain views and is the peak trekking season. Spring brings rhododendron blooms on the approach trails. Winter is possible for experienced trekkers with appropriate equipment. Monsoon (June to August) is not recommended."
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
            <h2 className="text-2xl font-bold text-stone-950">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge Community Lodge offers something genuinely rare in the world of mountain accommodation: a place where staying the night is also an act of direct community support, where the views are among the finest in the Annapurna region, and where the extra effort required to reach 3,660 meters delivers a reward that more easily accessible viewpoints simply cannot match.
            </p>
          </article>

          {/* SECTION 15: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your Khopra Ridge Trek With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Arranging the Khopra Ridge Trek involves permits, accommodation sequencing, guide logistics, and transport from Pokhara — all of which our team manages directly for you.
              </p>
              <ul className="list-disc pl-5 text-stone-300 text-xs space-y-1">
                <li>ACAP and TIMS permits — arranged before your trek begins</li>
                <li>Accommodation — including your night at the Khopra Ridge Community Lodge</li>
                <li>Experienced local guides — certified, route-familiar, and altitude-aware</li>
                <li>Transport from Pokhara — to and from the trailhead</li>
                <li>Khayer Lake extension — built into your itinerary with the right pacing</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire &amp; Book Today &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span>Based in Pokhara, Nepal</span>
                  <span>Free cancellation &amp; flexible changes</span>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">This Khopra Ridge Community Lodge guide is reviewed by certified local guides based in Pokhara. We regularly inspect road conditions, trailhead access, and community lodge operations to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
