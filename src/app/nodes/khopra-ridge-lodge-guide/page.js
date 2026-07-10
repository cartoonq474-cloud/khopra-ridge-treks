import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/khopra-ridge-lodge-guide",
  },
  title: "Khopra Ridge Lodge Facilities Guide: Rooms, Meals, Bathrooms, WiFi & Overnight Stay",
  description: "Planning to stay overnight at Khopra Ridge? Our complete lodge facilities guide covers rooms, bedding, bathrooms, hot showers, electricity, Wi-Fi, heating, and what to realistically expect at 3,660m.",
};

export default function Page() {
  const ratingTable = [
    { facility: "Room comfort", rating: "6/10", note: "Clean and basic shelter, thin walls" },
    { facility: "Food quality", rating: "8/10", note: "Excellent Dal Bhat and local garlic soup" },
    { facility: "Bathroom quality", rating: "5/10", note: "Shared corridors, squat/western options" },
    { facility: "Hot shower", rating: "5/10", note: "Solar dependent, seasonal availability" },
    { facility: "Wi-Fi", rating: "3/10", note: "Satellite cards, slow speed for messaging" },
    { facility: "Heating (dining hall)", rating: "8/10", note: "Wood-burning iron stove (evening)" },
    { facility: "Heating (bedrooms)", rating: "3/10", note: "Unheated, temperatures drop sharply" },
    { facility: "Charging facilities", rating: "6/10", note: "Centralized dining hall charging (paid)" },
    { facility: "Drinking water", rating: "8/10", note: "Boiled and UV-filtered refill station" },
    { facility: "Overall experience", rating: "7/10", note: "Outstanding scenery and community feel" }
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
            <span className="text-emerald-400">Khopra Ridge Lodge Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Community Eco-Lodge Spotlight
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Lodge Facilities Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Everything you need to know before staying overnight at 3,660m: Rooms, meals, bathrooms, WiFi, heating, and water.
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodge Overview
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Rooms &amp; Dorms
              </a>
              <a href="#bedding" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Bedding &amp; Blankets
              </a>
              <a href="#dining" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Meals &amp; Menu
              </a>
              <a href="#bathrooms" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Toilets &amp; Showers
              </a>
              <a href="#electricity" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solar Electricity
              </a>
              <a href="#connectivity" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Wi-Fi &amp; Signal
              </a>
              <a href="#heating" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Heating &amp; Cold
              </a>
              <a href="#water" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Drinking Water
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Comfort Comparisons
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
              Khopra Ridge Lodge Facilities Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers spend weeks researching the route to Khopra Ridge. Far fewer spend time researching what actually happens when they arrive, drop their pack, and spend a night at 3,660 meters.
              </p>
              <p>
                That is a mistake worth fixing before you leave Pokhara.
              </p>
              <p>
                The lodge at Khopra Ridge is the only major accommodation on the ridge itself. There are no backup options, no alternative guesthouses down the road, and no way to upgrade your room when you arrive. What you find is what you get — and that reality makes understanding the facilities in advance genuinely important, not just helpful.
              </p>
              <p>
                This Khopra Ridge Lodge Facilities Guide covers everything: rooms, bedding, bathrooms, hot showers, electricity, charging, Wi-Fi, heating, food, and drinking water. We have put this together based on active, on-ground experience from our licensed local trekking guides who regularly operate on this circuit out of Pokhara.
              </p>
              <p>
                If you want a realistic picture of what spending a night at Khopra Ridge actually looks like, you are in the right place.
              </p>
            </div>
          </article>

          {/* SECTION: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Overview of Khopra Ridge Lodge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Where Is Khopra Ridge Lodge Located?</strong> Khopra Ridge Lodge sits at an altitude of 3,660 meters (12,007 feet) along the Khopra Ridge Trek circuit in the Annapurna Conservation Area of western Nepal. The lodge is perched directly on the edge of a grassy ridge, with the vast Dhaulagiri Range sweeping across the horizon to the west and Annapurna South rising steeply above to the northeast.
              </p>
              <p>
                The position is dramatic. The 360-degree views from the ridge are among the most striking of any lodge location in the Annapurna region, rivalling far more expensive and well-known destinations on the Annapurna Circuit.
              </p>
              <p>
                <strong>Why This Is the Only Major Lodge on Khopra Ridge:</strong> Unlike the village-based trekking hubs at Ghorepani or Ghandruk, Khopra Ridge has no settled village infrastructure. The lodge was built specifically to serve trekkers doing the Ghorepani–Khopra loop or the extended route toward Sacred Khayer Lake.
              </p>
              <p>
                Because no other permanent accommodation exists on the ridge, every trekker doing this trail stays here. That creates real pressure on room availability during peak season and makes pre-booking far more important than it would be at a typical tea house stop.
              </p>
              <p>
                <strong>Community-Owned Lodge System:</strong> The Khopra Ridge Lodge operates under a community tourism model. Profits from accommodation directly support schools, clinics, and local infrastructure in the surrounding Magar villages, including Swanta Village at the base of the ridge. This is not a privately owned hotel managed for individual profit — it is a locally governed facility that functions as the economic backbone of the community above the treeline.
              </p>
              <p>
                That context matters when evaluating the facilities. The lodge is not built to hotel standards. It is built and maintained by a mountain community with limited access to construction materials, supply chains, and technical infrastructure. What it delivers given those constraints is genuinely impressive.
              </p>
            </div>
          </article>

          {/* SECTION: ACCOMMODATION */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Accommodation and Room Setup
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Private Rooms Available at Khopra Ridge Lodge:</strong> The lodge offers approximately 25 private twin-sharing rooms. Each room is a basic mountain setup: two single beds, a small window, and enough floor space for your bags. There is typically no in-room wardrobe, no desk, and no decorative furniture — just the essentials needed for a functional overnight stay.
              </p>
              <p>
                For couples or trekking partners wanting privacy, these private rooms are the right choice and should be secured well in advance during peak trekking months.
              </p>
              <p>
                <strong>Dormitory Sleeping Options During Peak Season:</strong> When the lodge reaches full private room capacity during the busiest weeks of the spring and autumn seasons, the dining hall doubles as overflow dormitory accommodation. This setup can sleep around 20 additional trekkers, using mattresses laid across the floor space.
              </p>
              <p>
                It is a functional solution, but privacy is essentially nonexistent. If you are particular about your overnight comfort, booking a private room early eliminates this scenario entirely.
              </p>
              <p>
                <strong>How Comfortable Are the Rooms?</strong> Honest answer: the rooms are basic, clean, and functional — which is exactly the right expectation to carry at this altitude. Think clean mountain shelter, not guesthouse comfort. The walls are thin, the windows are small, and room insulation is minimal.
              </p>
              <p>
                Compared to teahouses at lower altitudes like Tadapani or Ghorepani, the rooms at Khopra Ridge feel noticeably more basic. That is not a criticism — it reflects the genuine challenge of building and maintaining infrastructure at 3,660 meters with limited road access and supply routes.
              </p>
            </div>
          </article>

          {/* SECTION: BEDDING */}
          <article id="bedding" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Bedding Quality and Sleeping Comfort at Night
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Mattress Quality and Bed Setup:</strong> The mattresses are foam, not spring or memory foam. They provide adequate support for a single night after a long trekking day, but trekkers with back sensitivity or those used to firm sleeping surfaces may notice the difference. Each bed is a standard single-width setup.
              </p>
              <p>
                <strong>Blankets and Bedding Provided by the Lodge:</strong> The lodge provides blankets on every bed. In warmer months — late spring and early autumn — these blankets are generally sufficient for a comfortable night. However, the number and thickness of blankets available can vary across rooms, and relying entirely on lodge bedding during colder months carries some risk.
              </p>
              <p>
                <strong>Should You Bring a Sleeping Bag?</strong> We strongly recommend carrying a sleeping bag rated to at least 0°C for treks in the spring and autumn seasons, and a bag rated to -10°C or colder for winter treks. The lodge blankets help, but when temperatures drop sharply after midnight — as they reliably do at this altitude — an additional layer makes a significant difference to sleep quality.
              </p>
              <p>
                Trekkers who skip the sleeping bag often spend their night uncomfortably cold even with blankets layered on top. This is one of the most common avoidable mistakes on the Khopra Ridge overnight.
              </p>
              <p>
                <strong>How Cold Does It Get at Night?</strong> Overnight temperatures at 3,660 meters vary considerably by season. During autumn trekking season (September to November), expect nighttime lows of around 0°C to 5°C inside the rooms. In winter months (December to February), temperatures inside unheated rooms can drop well below freezing. Spring (March to May) brings milder conditions, but cold nights remain the norm rather than the exception.
              </p>
              <p>
                Room walls do not retain heat well. Once the dining hall stove is switched off in the evening, rooms cool quickly and do not warm again until the following morning.
              </p>
            </div>
          </article>

          {/* SECTION: DINING */}
          <article id="dining" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Meals and Dining Options at Khopra Ridge Lodge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Nepali Meals Available:</strong> Dal Bhat is the cornerstone of the dining hall menu, and for good reason. The combination of steamed rice, lentil soup, curried potatoes, seasonal vegetables, and spinach provides the kind of sustained energy that a full day of high-altitude trekking demands. Portions are generous and unlimited refills are part of the deal — one of the few genuinely good bargains available on a trekking budget.
              </p>
              <p>
                Ingredients are transported up from Swanta or Ghandruk by trained kitchen staff, which means the food quality is consistently better than trekkers accustomed to remote mountain lodges might expect.
              </p>
              <p>
                <strong>Breakfast and International Food Options:</strong> Beyond Dal Bhat, the menu includes a solid range of options for breakfast and lighter meals. Pancakes, oatmeal, instant noodles, pasta, pizza, and toast are all available. None of these are prepared to restaurant standard — the kitchen is a simple high-altitude operation — but the variety is genuinely wide for a ridge lodge at this elevation.
              </p>
              <p>
                Tea, black coffee, hot chocolate, and instant drinks are available throughout the day. Hot drinks become essential at this altitude, both for warmth and for staying hydrated.
              </p>
              <p>
                <strong>Why Garlic Soup Is Popular for Trekkers:</strong> Garlic soup appears on almost every trekker&apos;s table at Khopra Ridge, and the reason is practical rather than culinary. Garlic has a long-established reputation among Himalayan trekkers as a natural aid for mild altitude symptoms, and many local guides recommend it as standard practice when sleeping above 3,500 meters. Whether or not the science fully supports it, the warm, savory bowl of soup becomes a comforting and sensible choice after a cold afternoon on the ridge.
              </p>
              <p>
                <strong>Drinking Water and Refill Facilities:</strong> Single-use plastic bottles are not sold at the lodge — a deliberate eco-tourism policy aligned with Annapurna Conservation Area guidelines. Instead, the lodge operates a clean water refill station offering boiled and UV-filtered drinking water at a minimal charge. Carry a refillable water bottle.
              </p>
            </div>
          </article>

          {/* SECTION: BATHROOMS */}
          <article id="bathrooms" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Bathroom and Toilet Facilities
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Shared Bathroom Setup at the Lodge:</strong> Bathrooms at Khopra Ridge Lodge are shared. There are no en-suite or attached bathroom options in the private rooms. Trekkers walk from their room to a shared block of toilet and washing facilities, which is standard practice across the teahouse trekking circuit at this altitude.
              </p>
              <p>
                The number of shared bathrooms available is proportional to the lodge&apos;s room capacity, though during peak season occupancy the demand on each bathroom increases noticeably.
              </p>
              <p>
                <strong>Toilet Type and Cleanliness Standards:</strong> The lodge has both western-style sit-down toilets and traditional squat toilets available. Cleanliness is maintained by lodge staff, and the standard is reasonable for a remote high-altitude facility — not spotless by urban expectations, but functional and hygienic.
              </p>
              <p>
                Carry your own toilet paper. It is available for purchase at the lodge, but having your own supply avoids any dependency on stock levels during busy periods. A small bottle of hand sanitizer is a worthwhile addition to your day pack.
              </p>
              <p>
                <strong>Sanitation Conditions at High Altitude:</strong> Water availability for sanitation is limited at 3,660 meters, particularly during winter months when water sources can partially freeze. The lodge manages its water supply carefully, and trekkers should approach bathroom use with that context in mind — efficient use of water is expected and appreciated.
              </p>
            </div>
          </article>

          {/* SECTION: SHOWERS */}
          <article className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Hot Shower Available at Khopra Ridge Lodge?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Does the Lodge Offer Hot Shower Facilities?</strong> Yes — hot shower facilities are available at Khopra Ridge Lodge, but with important qualifications that trekkers should understand before expecting a fully comfortable experience.
              </p>
              <p>
                <strong>Seasonal Limitations of Hot Water Availability:</strong> Hot water supply depends almost entirely on solar water heating systems. On clear, sunny days, hot water availability is generally reliable by mid to late afternoon. On overcast or cold days — which are common on an exposed ridge at this altitude — the water heaters struggle to reach or maintain a usable temperature.
              </p>
              <p>
                During winter months, outdoor pipe temperatures can drop enough to make hot showers genuinely difficult to access even when the heating system is functioning. Trekkers visiting between December and February should treat hot shower availability as a bonus rather than a certainty.
              </p>
              <p>
                <strong>Shower Charges and Usage Restrictions:</strong> Hot showers carry a small additional charge — typically in the range of $3–5 USD depending on the season and availability. Usage time is generally monitored informally, and trekkers are expected to keep shower time brief given the shared nature of facilities and limited water supply.
              </p>
            </div>
          </article>

          {/* SECTION: ELECTRICITY */}
          <article id="electricity" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Electricity and Charging Facilities
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>How Electricity Works at Khopra Ridge Lodge:</strong> The lodge runs on a solar electricity system — a multi-panel installation that generates the power available for the entire facility. There is no grid connection at this altitude. Power output depends directly on daily sunlight exposure, which means electricity availability is noticeably lower during cloudy or overcast days, particularly in the pre-monsoon and winter periods.
              </p>
              <p>
                The system powers lodge lighting and the centralized charging station in the dining hall. It does not power room sockets or individual room lighting beyond basic overhead bulbs.
              </p>
              <p>
                <strong>Device Charging Availability and Cost:</strong> Device charging is centralized in the dining hall, where a shared charging board allows multiple trekkers to charge phones, cameras, and small devices simultaneously. The current charging fee runs approximately $2–3 USD per device, with some variation depending on battery size.
              </p>
              <p>
                Charging during busy periods — particularly in the evening after dinner — involves a waiting period. Priority is generally informal rather than organized, so arriving early to connect your device is a practical habit worth adopting.
              </p>
              <p>
                <strong>Why Carrying a Power Bank Is Recommended:</strong> On cloudy days, the solar system generates significantly reduced power. This creates situations where the charging station is limited or unavailable entirely. A fully charged power bank rated at 10,000–20,000 mAh covers most trekkers&apos; device needs across a full day without relying on the lodge system at all. We consider a power bank essential kit for the Khopra Ridge overnight.
              </p>
            </div>
          </article>

          {/* SECTION: CONNECTIVITY */}
          <article id="connectivity" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Wi-Fi and Mobile Network Connectivity
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Does Khopra Ridge Lodge Have Wi-Fi?</strong> The lodge sells local Wi-Fi scratch cards that provide access to the ridge&apos;s satellite internet connection. The service is available but comes with real limitations that every trekker should understand.
              </p>
              <p>
                Speed is low. Typical use cases — messaging apps, checking emails, and basic web browsing — work with patience. Video calls, streaming, large file uploads, and downloads are not practically possible. Paying for the Wi-Fi card gives access; it does not guarantee a smooth internet experience.
              </p>
              <p>
                <strong>Mobile Network Availability on the Ridge:</strong> Ncell and Nepal Telecom (NTC) signals exist on Khopra Ridge, but reception is extremely inconsistent. Some trekkers find a usable signal by moving to specific spots on the open ridge, while others find no reliable signal at all. The exposed, high-altitude position means signal quality fluctuates significantly with atmospheric conditions.
              </p>
              <p>
                Do not rely on mobile data as your primary connectivity plan on this route. Treat the Wi-Fi at Khopra Ridge as a utility for staying minimally connected. Download a maps application with offline capability before leaving Pokhara, save any documents or guides you need, and inform people you will be largely offline.
              </p>
            </div>
          </article>

          {/* SECTION: HEATING */}
          <article id="heating" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Heating and Cold Weather Conditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dining Hall Heating System:</strong> The dining hall is heated every evening by a wood-burning iron stove positioned at the center of the room. The fire is typically lit between 5:30 PM and 8:30 PM, creating a warm and social atmosphere during the hours when trekkers are eating, drinking, and winding down.
              </p>
              <p>
                The dining hall becomes the social hub of the lodge every evening — the warm center point where trekkers from different groups naturally gather. This is one of the more memorable parts of a Khopra Ridge overnight stay, and the atmosphere around the fire on a cold evening is something many trekkers cite as a highlight of the trek.
              </p>
              <p>
                <strong>Why Bedrooms Feel Much Colder at Night:</strong> The transition from dining hall to bedroom is abrupt. Rooms are unheated, and the thin walls and minimal insulation that characterize high-altitude construction mean that room temperature tracks closely with outside air temperature after the heating cycle ends. By midnight on a cold night, your bedroom will feel significantly colder than it did when you went to sleep.
              </p>
              <p>
                <strong>Winter Trekking Conditions:</strong> Trekkers visiting between December and February face genuinely cold conditions. Daytime temperatures on the ridge can remain below freezing with wind chill factored in, and overnight temperatures inside rooms can reach -5°C to -10°C or lower. A sleeping bag rated to -10°C is the minimum sensible preparation.
              </p>
            </div>
          </article>

          {/* SECTION: WATER */}
          <article id="water" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drinking Water Supply and Hygiene Conditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Drinking Water Options at the Lodge:</strong> The lodge provides two categories of safe drinking water: boiled water and UV-filtered water. Both are available at the clean water refill station and are priced per liter at a minimal charge. This system replaces the plastic bottle sales that were once common on this route and reduces waste on the trail.
              </p>
              <p>
                <strong>Is the Drinking Water Safe?</strong> Yes. The lodge&apos;s boiled and UV-filtered water is safe to drink. Trekkers who refill at the lodge&apos;s designated station do not need additional personal purification tablets for the water sourced there.
              </p>
              <p>
                <strong>Sustainable Water Practices:</strong> Carrying your own 1-liter or 1.5-liter refillable bottle and using the lodge refill station is both the environmentally responsible choice and the most cost-effective way to stay hydrated.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Comfortable Is Staying at Khopra Ridge Lodge Compared to Other Trekking Lodges?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Comparing vs Ghorepani Lodges:</strong> Ghorepani, at 2,860 meters, offers noticeably better lodge infrastructure. Multiple competing lodges mean higher-quality rooms, more consistent hot water, better Wi-Fi, and a wider dining menu. The competition that drives quality at Ghorepani simply does not exist at Khopra Ridge, where the single lodge operates without direct competition.
              </p>
              <p>
                Trekkers moving from a Ghorepani overnight to a Khopra Ridge overnight should expect a step down in general comfort level, with the trade-off being the dramatic improvement in ridge scenery and crowd reduction.
              </p>
              <p>
                <strong>Comparing vs Chhistibung Lodges:</strong> Chhistibung, a stopping point on many circuit routes, operates at a lower altitude (2,975m) with slightly more developed local infrastructure. Room quality is similarly basic, though electricity and water availability tend to be more reliable at the lower elevation.
              </p>
            </div>

            {/* Rating Table */}
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 font-bold text-stone-700">
                  <tr>
                    <th className="px-6 py-4">Facility</th>
                    <th className="px-6 py-4">Rating (Out of 10)</th>
                    <th className="px-6 py-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  {ratingTable.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50 transition">
                      <td className="px-6 py-4 font-semibold text-stone-900">{row.facility}</td>
                      <td className="px-6 py-4 font-mono font-bold text-emerald-600">{row.rating}</td>
                      <td className="px-6 py-4 text-stone-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              The overall experience scores well because the location, food, and community atmosphere compensate significantly for the infrastructure limitations. Most trekkers who reach Khopra Ridge report that the overnight stay exceeded their expectations — particularly when those expectations were properly calibrated in advance.
            </p>
          </article>

          {/* SECTION: BOOKING */}
          <article id="booking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Booking Tips Before Staying at Khopra Ridge Lodge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Why Rooms Fill Quickly:</strong> With approximately 25 private rooms and no alternative lodge on the ridge, Khopra Ridge accommodation reaches capacity quickly during both the spring and autumn trekking peaks. Trekkers without confirmed bookings arriving during these periods risk being assigned to dormitory overflow.
              </p>
              <p>
                <strong>Best Seasons for Trekking and Overnight Stay:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Autumn (September to November):</strong> Most popular season — clear skies, excellent mountain visibility, stable trail conditions, and the most reliable temperatures. Pre-booking is essential.</li>
                <li><strong>Spring (March to May):</strong> Rhododendron-filled trails and warm daytime conditions, with slightly softer crowds than autumn. Late spring can bring cloud cover that reduces solar efficiency.</li>
                <li><strong>Winter (December to February):</strong> Solitude and dramatic snow-covered scenery, but freezing temperatures. This is the choice for experienced cold-weather trekkers.</li>
              </ul>
              <p>
                <strong>Why Booking Early Is Recommended:</strong> Booking your Khopra Ridge accommodation as part of a guided trek package is the most reliable way to guarantee a private room. Confirming your lodge booking several weeks before departure is a simple step that removes logistical risks on this route.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              FAQ: Common Questions About Khopra Ridge Lodge Facilities
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Does Khopra Ridge Lodge have private rooms?",
                  a: "Yes. The lodge has approximately 25 private twin-sharing rooms. These can fill quickly during peak trekking seasons, so booking in advance is strongly recommended."
                },
                {
                  q: "Can I take a hot shower at Khopra Ridge Lodge?",
                  a: "Hot showers are available but depend on solar water heating. Availability is reliable on clear, sunny days and more limited on cold or overcast days. A small additional fee applies."
                },
                {
                  q: "Is Wi-Fi available at Khopra Ridge?",
                  a: "Yes, the lodge sells Wi-Fi scratch cards for access to a satellite internet connection. Speed is low and suitable for basic messaging and browsing only."
                },
                {
                  q: "Can I charge my phone at Khopra Ridge Lodge?",
                  a: "Yes, there is a centralized charging station in the dining hall powered by a solar electricity system. Charging costs approximately $2–3 USD per device. On cloudy days, charging capacity may be reduced."
                },
                {
                  q: "Do I need to carry a sleeping bag?",
                  a: "Yes, we recommend carrying a sleeping bag rated to at least 0°C for spring and autumn treks, and -10°C or lower for winter. Lodge blankets are provided but are not always sufficient for the coldest nights."
                },
                {
                  q: "Are bathrooms shared at Khopra Ridge Lodge?",
                  a: "Yes. All bathroom facilities are shared. Both western-style sit-down toilets and squat toilets are available. Carry your own toilet paper as a general precaution."
                },
                {
                  q: "How cold does Khopra Ridge Lodge get at night?",
                  a: "Expect 0°C to 5°C inside rooms during autumn, colder in spring, and potentially -5°C to -10°C or below in winter. Rooms are not heated overnight."
                },
                {
                  q: "What food is available at the lodge?",
                  a: "The menu includes Dal Bhat with unlimited refills, garlic soup, pancakes, oatmeal, pasta, noodles, and a range of hot drinks. Food quality is genuinely good for a high-altitude community lodge."
                },
                {
                  q: "Is drinking water safe at Khopra Ridge?",
                  a: "Yes. The lodge offers boiled and UV-filtered water at a refill station. No single-use plastic bottles are sold."
                },
                {
                  q: "Should I pre-book accommodation at Khopra Ridge?",
                  a: "Strongly recommended, particularly for spring and autumn travel. With only 25 private rooms available and no alternative accommodation on the ridge, early booking is the most reliable way to secure your preferred room type."
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
              Staying overnight at Khopra Ridge Lodge is one of the most rewarding experiences on the entire Annapurna trekking circuit. The views from the ridge at sunrise are exceptional, the food is better than you might expect at 3,660 meters, and the community atmosphere around the evening fire is genuinely warm and memorable.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              But arriving with the right expectations makes the difference between an uncomfortable surprise and a thoroughly satisfying adventure. The rooms are basic. The bathrooms are shared. The Wi-Fi is slow. The electricity is solar-dependent and limited. The bedrooms get cold.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              None of these are serious problems when you are prepared for them — and all of them are manageable with a good sleeping bag, a charged power bank, and a realistic understanding of what high-altitude teahouse accommodation actually looks like.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The lodge delivers exactly what matters most at 3,660 meters: a safe, warm communal space, consistently good food, adequate bedding, and a sleeping platform that lets you wake up to one of the finest mountain views in Nepal. That, in every practical sense, is more than enough.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek With Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Rooms at Khopra Ridge Lodge fill up fast during spring and autumn trekking seasons. If you are planning your trek, contact our local team in Pokhara to secure your accommodation, confirm your itinerary, and get up-to-date trail information from guides who know this route firsthand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now to Secure Your Lodge Booking &rarr;
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
                This Khopra Ridge Lodge facilities directory is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly inspect solar charging logs, kitchen hygiene, and safety parameters. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
