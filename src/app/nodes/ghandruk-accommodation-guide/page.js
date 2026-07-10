import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/ghandruk-accommodation-guide",
  },
  title: "Ghandruk Accommodation & Teahouse Guide: Best Places to Stay, Prices & Booking Tips",
  description: "Plan your overnight stay in Ghandruk with confidence. Compare teahouses, hotels, and homestays, explore room prices and facilities, and get expert booking tips for Annapurna trekkers.",
};

export default function Page() {
  const pricingTable = [
    { type: "Budget guesthouse", price: "USD 4–8", bath: "Shared, cold water", best: "Budget backpackers" },
    { type: "Standard teahouse", price: "USD 8–15", bath: "Shared, hot shower available", best: "Most trekkers" },
    { type: "Mid-range lodge", price: "USD 15–25", bath: "Attached or shared, hot shower", best: "Comfort-seekers" },
    { type: "Heritage/luxury hotel", price: "USD 30–60+", bath: "En-suite, hot shower", best: "Couples, luxury travellers" },
    { type: "Gurung homestay", price: "USD 5–10", bath: "Shared", best: "Cultural travellers" }
  ];

  const comparisonTable = [
    { village: "Ghandruk", alt: "1,940m", quality: "Good – Excellent", price: "USD 5–60+", best: "Rest, culture, comfort" },
    { village: "Tadapani", alt: "2,590m", quality: "Basic – Standard", price: "USD 5–15", best: "Trail connection stop" },
    { village: "Chhomrong", alt: "2,170m", quality: "Standard – Good", price: "USD 5–20", best: "ABC route access point" },
    { village: "Ghorepani", alt: "2,860m", quality: "Standard", price: "USD 5–20", best: "Poon Hill sunrise" },
    { village: "ABC", alt: "4,130m", quality: "Basic", price: "USD 15–30", best: "Summit experience" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/nodes" className="hover:text-emerald-400 transition-colors">Nodes</Link>
            <span>/</span>
            <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 transition-colors">Ghandruk Guide</Link>
            <span>/</span>
            <span className="text-emerald-400">Accommodation Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Teahouses &amp; Lodging
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Ghandruk Accommodation &amp; Teahouse Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Where to Stay in Ghandruk: Compare rooms, costs, facilities, homestays, and booking tips for Annapurna region hikers.
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
                Overview
              </a>
              <a href="#types" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodging Types
              </a>
              <a href="#prices" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Price Guide
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Facilities &amp; WiFi
              </a>
              <a href="#food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Dining
              </a>
              <a href="#recommendations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best For You
              </a>
              <a href="#homestay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Gurung Homestays
              </a>
              <a href="#booking-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Booking Tips
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Comparisons
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
              Where to Stay in Ghandruk Village
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Ghandruk is one of the most rewarding overnight stops on the entire Annapurna trekking circuit. Perched at 1,940 metres in the Annapurna Conservation Area, this traditional Gurung village greets trekkers with stone-paved lanes, rhododendron forests, and some of the most dramatic views of Annapurna South, Hiunchuli, and Machhapuchhre in all of Nepal.
              </p>
              <p>
                But Ghandruk is not just a scenic reward. It is also one of the few villages on this route where your accommodation choices genuinely vary. Unlike higher stops on the Annapurna Base Camp Trek where teahouses are basic and availability is limited, Ghandruk offers a spectrum of stays — from heritage hotels with mountain-view balconies to budget guesthouses, standard trekking teahouses, and authentic Gurung homestays.
              </p>
              <p>
                This guide covers everything you need to know before booking accommodation in Ghandruk. You will find a clear breakdown of accommodation types, honest room price ranges, facility expectations, food options, and practical booking advice for every type of trekker — whether you are a backpacker watching your budget, a couple looking for comfort, or a family on a shorter Annapurna route.
              </p>
            </div>

            {/* SOFT CTA 1 */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 my-8">
              <p className="text-sm text-stone-700 leading-relaxed font-semibold">
                Planning the Annapurna Base Camp Trek or Khopra Ridge Trek? Our local trekking experts can recommend and pre-book the best Ghandruk lodges for your group.{" "}
                <Link href="/contact" className="text-emerald-700 underline hover:text-emerald-600 transition">
                  Contact us to plan your trek.
                </Link>
              </p>
            </div>
          </article>

          {/* SECTION: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Overview of Staying in Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Ghandruk sits at the crossroads of several important trekking routes. Whether you are walking the classic Annapurna Base Camp trail via Chhomrong, coming down from Tadapani on the Ghorepani Poon Hill loop, or beginning a Khopra Ridge circuit, almost every itinerary includes at least one night in Ghandruk. That makes accommodation a practical planning priority, not an afterthought.
              </p>
              <p>
                <strong>Why Trekkers Stay Overnight in Ghandruk:</strong> Most trekkers arriving in Ghandruk do so after a significant day of walking. The village serves as a natural rest point — long enough to enjoy the panorama and the culture, important enough to deserve a full night rather than just a passing stop.
              </p>
              <p>
                Staying overnight also gives you access to Ghandruk&apos;s early-morning mountain views, which are widely considered among the best in the Annapurna region. On a clear morning, Annapurna South fills the horizon from almost every lodge terrace in the village.
              </p>
              <p>
                <strong>Why Ghandruk Has Better Facilities Than Higher Trekking Villages:</strong> As you climb higher on the Annapurna Base Camp Trek — toward Deurali, Machhapuchhre Base Camp, or ABC itself — accommodation becomes more basic and more expensive. Infrastructure at altitude is limited by terrain, supply costs, and seasonal access.
              </p>
              <p>
                Ghandruk, by contrast, has road access from Pokhara, a larger local population, and several years of established tourism development. This means more accommodation options, more competition between lodges, better facilities, and more consistent food quality. For trekkers who plan to acclimatise or rest before climbing higher, Ghandruk is an ideal base.
              </p>
            </div>
          </article>

          {/* SECTION: TYPES */}
          <article id="types" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Types of Accommodation Available in Ghandruk
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-extrabold text-stone-900 text-base">Luxury Heritage Hotels</h4>
                <p>
                  A small number of properties in Ghandruk offer a genuinely comfortable stay by Himalayan standards. These heritage-style hotels typically feature stone-built architecture that blends with the village aesthetic, private en-suite bathrooms, hot showers, reliable electricity, and dining rooms with panoramic mountain views.
                </p>
                <p className="text-stone-500 text-xs">
                  Some properties offer heated rooms during the colder months and better mattress quality than standard teahouses. Room service, travel desks, and cultural programmes are sometimes available at this tier.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-extrabold text-stone-900 text-base">Standard Trekking Teahouses</h4>
                <p>
                  The majority of accommodation in Ghandruk falls into this category. Standard trekking teahouses are family-run lodges built specifically for trekkers. They typically offer twin or double rooms with basic wooden furniture, a shared bathroom (sometimes with a hot shower on request), and a communal dining hall where breakfast, lunch, and dinner are served.
                </p>
                <p className="text-stone-500 text-xs">
                  The standard is clean and functional. Do not expect hotel-style softness — mattresses are firm, walls are thin, and rooms are simple. But a good teahouse gives you exactly what you need on a trek: a warm, dry, safe place to sleep with food waiting downstairs.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-extrabold text-stone-900 text-base">Budget Guesthouses</h4>
                <p>
                  Budget guesthouses cater to trekkers who are keeping costs very low or travelling on extended itineraries where accommodation spending adds up over many nights. These properties offer the most basic room setups — often a single bed or mattress, shared cold-water bathrooms, and very simple meal options.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-extrabold text-stone-900 text-base">Traditional Gurung Homestays</h4>
                <p>
                  A small but growing number of local families offer homestay accommodation. In a Gurung homestay, you sleep in a family home, eat with or alongside your hosts, and experience daily village life firsthand — from local cooking methods to traditional dress and community rituals. The Gurung people have lived in this region for generations and are known across Nepal for their warmth and hospitality.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: PRICES */}
          <article id="prices" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Ghandruk Accommodation Price Guide
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Room prices in Ghandruk are reasonable by international trekking standards, but they vary based on accommodation type, season, and whether meals are included. The following ranges reflect typical costs at time of writing:
            </p>

            <div className="overflow-x-auto my-6 border border-stone-200 rounded-3xl bg-white shadow-sm">
              <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 font-bold text-stone-700">
                  <tr>
                    <th className="px-6 py-4">Accommodation Type</th>
                    <th className="px-6 py-4">Approx. Room Price (Per Night)</th>
                    <th className="px-6 py-4">Bathroom</th>
                    <th className="px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  {pricingTable.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50 transition duration-150">
                      <td className="px-6 py-4 font-semibold text-stone-900">{row.type}</td>
                      <td className="px-6 py-4 font-mono font-bold text-emerald-600">{row.price}</td>
                      <td className="px-6 py-4">{row.bath}</td>
                      <td className="px-6 py-4">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <em>Note: Many teahouses offer reduced room rates if guests eat meals at the lodge. This is standard practice across the Annapurna trekking region.</em>
              </p>
              <p>
                <strong>Budget Accommodation Cost:</strong> Basic guesthouses and lower-tier teahouses typically charge between USD 4 and USD 8 per night for a room. At this price, expect a clean but minimal setup. Hot water showers may carry an additional charge of USD 1–2.
              </p>
              <p>
                <strong>Mid-Range Lodge Prices:</strong> The mid-range category falls between USD 8 and USD 25 per night. This is where most trekkers find the right balance of comfort and cost. Rooms at this tier are generally better maintained, with more reliable hot water access and cleaner bedding.
              </p>
              <p>
                <strong>Premium Hotel Prices:</strong> Heritage and luxury properties typically charge USD 30 to USD 60 or more per night. These lodges often include breakfast, en-suite bathrooms, better furniture, and mountain-facing balconies.
              </p>
              <p>
                <strong>Peak Season Price Differences:</strong> Accommodation prices rise noticeably during the two main trekking seasons: October to November and March to April. During these periods, demand is highest. In the off-season, prices drop, and some lodge owners are willing to negotiate.
              </p>
            </div>
          </article>

          {/* SECTION: FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Teahouse Facilities Guide
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Attached vs Shared Bathrooms:</strong> Most standard teahouses offer shared bathrooms. Mid-range and luxury lodges increasingly offer attached (en-suite) bathrooms. If private facilities are important to you, confirm availability and expect to pay more.
              </p>
              <p>
                <strong>Hot Shower Availability:</strong> Hot showers are available in most teahouses, but the system varies. Many properties use solar-heated water, which means hot shower availability depends on recent sunshine. Some lodges use electric geysers as a backup.
              </p>
              <p>
                <strong>WiFi Access:</strong> WiFi is available at most teahouses. Connection quality has improved, with some properties offering fiber-connected internet. That said, speeds are not comparable to Pokhara or Kathmandu. Expect enough bandwidth to message family or check maps.
              </p>
              <p>
                <strong>Electricity and Charging:</strong> Mains electricity reaches Ghandruk, and most lodges provide electrical charging for phones, cameras, and power banks. Carry a universal travel adapter (mainly Type C and D).
              </p>
              <p>
                <strong>Heating and Blankets:</strong> Ghandruk sits below 2,000 metres and is generally warmer than higher stops. Most teahouses provide blankets. Central heating is not common in standard teahouses, though dining halls often have wood-burning stoves.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD */}
          <article id="food" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food and Dining Options in Ghandruk Lodges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Food in Ghandruk is a highlight of staying here. Compared to higher altitude teahouses, lodges in Ghandruk typically serve a broader and fresher selection of meals.
              </p>
              <p>
                <strong>Traditional Dal Bhat:</strong> Dal Bhat is the cornerstone of Nepali trekking cuisine. This traditional meal consists of steamed rice, lentil soup, seasonal vegetable curry, and pickles. Many lodges offer unlimited refills, which is a genuine advantage after a long day on the trail.
              </p>
              <p>
                <strong>Western Food Menu:</strong> Most teahouses carry an international menu alongside local dishes. Common options include pasta, fried noodles, pizza, pancakes, french fries, and omelettes. For reliable, consistent food, Dal Bhat tends to outperform Western options.
              </p>
              <p>
                <strong>Breakfast Options:</strong> Breakfast menus typically include porridge with honey, Tibetan bread with jam, eggs (boiled, fried, or scrambled), pancakes, or chapati with curry. Tea, coffee, and hot chocolate are universally available.
              </p>
              <p>
                <strong>Vegetarian and Vegan Meals:</strong> Ghandruk is well set up for vegetarian trekkers. Vegan options are more limited but available — let your lodge know your dietary requirements when ordering.
              </p>
            </div>
          </article>

          {/* SECTION: RECOMMENDATIONS */}
          <article id="recommendations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Accommodation for Different Travelers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Budget Backpackers:</strong> Basic guesthouses and no-frills teahouses deliver everything essential. Eating meals at the lodge usually reduces or eliminates the room charge at many properties.
              </p>
              <p>
                <strong>Luxury Travelers:</strong> Choose a heritage hotel or premium lodge. If you value a private bathroom, quality bedding, a reliable hot shower, and a proper breakfast, budget USD 35 and upward per night. Book in advance during peak season.
              </p>
              <p>
                <strong>Couples:</strong> Mid-range to premium lodges with mountain views and attached bathrooms provide the best experience. Request a south-facing or west-facing room for the best mountain panorama.
              </p>
              <p>
                <strong>Families:</strong> Ghandruk is highly family-friendly and accessible from Pokhara in 3–4 hours via jeep and a moderate walk. Mid-range lodges offer more space, more reliable hot water, and better food variety.
              </p>
              <p>
                <strong>Solo Trekkers:</strong> Standard teahouses are ideal. The communal dining hall naturally brings together travellers from different routes, making evenings sociable. Staff can assist with trail conditions and onward planning.
              </p>
            </div>
          </article>

          {/* SECTION: HOMESTAY */}
          <article id="homestay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Traditional Gurung Homestay Experience
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Staying in a Gurung homestay in Ghandruk is one of those travel experiences that stays with you long after the trek ends. It is not the most comfortable option, but it is almost certainly the most meaningful.
              </p>
              <p>
                <strong>Local Hospitality and Cultural Immersion:</strong> Gurung families have a deep tradition of welcoming guests. You will typically eat together with your hosts, share tea, and observe daily village routines. Conversations about Gurung history, the community&apos;s connection to the Gurkha military tradition, and farming life are all part of the homestay experience.
              </p>
              <p>
                <strong>Community Tourism and Sustainability:</strong> Choosing a homestay is also a direct economic contribution. Unlike larger lodging where profit may flow outside the village, homestay income stays with the host family, supporting sustainable development in the Annapurna Conservation Area.
              </p>
            </div>
          </article>

          {/* SECTION: BOOKING TIPS */}
          <article id="booking-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Booking Tips for Ghandruk Accommodation
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Advance Booking During Peak Season:</strong> October, November, March, and April are the busiest months. If you are trekking during peak season, book your Ghandruk accommodation at least 2–4 weeks in advance.
              </p>
              <p>
                <strong>Walk-In Booking During Off-Season:</strong> Between December and February, and in the monsoon months of June through August, foot traffic drops. Walk-in booking at standard teahouses is straightforward, and you can often choose your preferred room and negotiate on price.
              </p>
              <p>
                <strong>Booking Through a Trekking Agency:</strong> Many trekkers who book guided Annapurna or Khopra Ridge treks through a Pokhara-based agency will have their Ghandruk accommodation pre-arranged as part of the package.
              </p>
              <p>
                <strong>Walk-In Tips for Independent Trekkers:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Arrive before 3 PM to have the best choice of available rooms.</li>
                <li>Look at 2–3 lodges before committing — standards vary.</li>
                <li>Ask to see the room, the bathroom, and confirm hot shower availability.</li>
                <li>Confirm whether the room rate includes meals or whether eating at the lodge is separate.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Stay in Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>October to November:</strong> Most popular time to visit. Skies are clear, mountain views are outstanding, and the trails are active. Accommodation is busiest and most expensive.
              </p>
              <p>
                <strong>March to April:</strong> Second peak season. Rhododendron forests bloom in vivid pink and red. Views are excellent and temperatures comfortable.
              </p>
              <p>
                <strong>December to February:</strong> Cold nights, but winter views are often the clearest of the year. Ghandruk itself stays accessible, and crowds are minimal.
              </p>
              <p>
                <strong>June to August (Monsoon):</strong> Heavy rain, leeches, and obscured views, but valleys are lush green and prices are lowest.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT TO EXPECT */}
          <article className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What to Expect When Staying in Ghandruk Teahouses
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Room comfort:</strong> Clean and functional but not plush. Mattresses are firm, walls are thin, and noise from the dining hall or neighbouring rooms may be audible at night.</li>
                <li><strong>Bathrooms:</strong> Shared bathrooms are clean but basic. Toilet paper is not always provided — carry your own.</li>
                <li><strong>Hot water timing:</strong> Solar-heated showers are best taken in the afternoon. Morning hot water may be unreliable after a cold night.</li>
                <li><strong>WiFi:</strong> Available but not high-speed. Download offline maps before leaving Pokhara.</li>
                <li><strong>Mobile coverage:</strong> Ncell and NTC networks cover Ghandruk. Coverage is generally adequate for messaging and basic data.</li>
                <li><strong>Payment:</strong> Most teahouses operate on a cash basis. Card machines are rare. Carry sufficient Nepali rupees from Pokhara.</li>
                <li><strong>Drinking water:</strong> Boiled or purified water is available at all lodges at a small charge. Carry a filter or purification tablets.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Comparing Ghandruk With Other Annapurna Trekking Stops
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Ghandruk consistently offers a better standard of accommodation and food than higher stops on the route, at a lower price point. If rest and recovery are a priority, plan a full day in Ghandruk rather than pushing straight through.
            </p>

            <div className="overflow-x-auto my-6 border border-stone-200 rounded-3xl bg-white shadow-sm">
              <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 font-bold text-stone-700">
                  <tr>
                    <th className="px-6 py-4">Village</th>
                    <th className="px-6 py-4">Altitude</th>
                    <th className="px-6 py-4">Accommodation Quality</th>
                    <th className="px-6 py-4">Price Level</th>
                    <th className="px-6 py-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50 transition duration-150">
                      <td className="px-6 py-4 font-semibold text-stone-900">{row.village}</td>
                      <td className="px-6 py-4 font-mono">{row.alt}</td>
                      <td className="px-6 py-4">{row.quality}</td>
                      <td className="px-6 py-4 font-mono font-bold text-emerald-600">{row.price}</td>
                      <td className="px-6 py-4">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghandruk Lodging
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is the best place to stay in Ghandruk?",
                  a: "The best accommodation in Ghandruk depends on your budget and travel style. For comfort and mountain views, heritage hotels and mid-range lodges near the centre of the village offer the best overall experience. Budget travellers will find good value in the many family-run teahouses spread across the village."
                },
                {
                  q: "How much does accommodation cost in Ghandruk?",
                  a: "Room prices in Ghandruk range from approximately USD 4–8 per night for basic guesthouses to USD 30–60 or more at heritage hotels. Standard teahouses typically fall between USD 8 and USD 15. Many lodges offer reduced room rates when guests eat meals on-site."
                },
                {
                  q: "Do Ghandruk teahouses have private bathrooms?",
                  a: "Most standard teahouses offer shared bathrooms. Private (attached) bathrooms are available at mid-range and premium lodges, but are less common in budget guesthouses. Always confirm bathroom availability when booking."
                },
                {
                  q: "Is WiFi available in Ghandruk lodges?",
                  a: "Yes. Most teahouses and hotels in Ghandruk offer WiFi, with quality ranging from basic mobile-speed connections to fiber-connected internet at better properties. Speeds are adequate for messaging and light browsing."
                },
                {
                  q: "Are hot showers available in Ghandruk?",
                  a: "Hot showers are available at most teahouses and all mid-range to premium lodges. The majority use solar heating, so shower quality depends on recent sunshine. Afternoon showers are typically more reliable than early morning ones."
                },
                {
                  q: "Should I book accommodation in Ghandruk in advance?",
                  a: "During peak trekking season (October–November and March–April), advance booking is strongly recommended for mid-range and premium lodges. Standard teahouses can usually accommodate walk-in arrivals, but prime rooms go quickly. Off-season travellers can generally book on arrival."
                },
                {
                  q: "Can families stay comfortably in Ghandruk?",
                  a: "Yes. Ghandruk is one of the most family-friendly stops on the Annapurna trekking circuit. Mid-range lodges offer the right combination of private space, flexible food options, and comfortable facilities. The village is accessible on a shorter trekking itinerary from Pokhara, making it viable even for families with younger children."
                },
                {
                  q: "What food is available in Ghandruk teahouses?",
                  a: "All teahouses serve Dal Bhat (rice, lentil soup, and vegetable curry) as the primary trekking meal. Most lodges also offer an international menu including pasta, noodles, fried rice, pancakes, and eggs. Breakfast options include porridge, Tibetan bread, omelettes, and toast. Vegetarian meals are widely available."
                },
                {
                  q: "Can I stay with a local family in Ghandruk?",
                  a: "Yes. Traditional Gurung homestays are available in Ghandruk and offer an authentic cultural experience. These stays involve living in a family home, eating local meals, and engaging with village life. Homestays are typically the most affordable accommodation option in the village and directly support the local community."
                },
                {
                  q: "Which accommodation type is best for the Annapurna Base Camp trek?",
                  a: "For trekkers on the ABC route, a standard to mid-range teahouse in Ghandruk is the most practical choice. You will want a reliable hot shower, a good meal, and a full night of rest before continuing up the trail. Booking through a trekking agency ensures your lodge is pre-confirmed and matched to your group's needs."
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
              Ghandruk offers more accommodation choice, better facilities, and a richer overnight experience than almost any other trekking stop on the Annapurna circuit. Whether you are sleeping in a heritage hotel with a mountain-view balcony, sharing a teahouse dining hall with fellow trekkers from around the world, or waking up in a Gurung family home to the smell of local cooking, the village delivers something beyond a place to sleep.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The key is knowing what to expect — and planning ahead during busy season. With the right lodge booked, the right facilities confirmed, and a realistic sense of what teahouse comfort looks like at this altitude, Ghandruk becomes one of the highlights of your Nepal trek rather than just a waypoint between trailheads.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Use this guide as your planning reference. Compare your options, match your budget to the right accommodation tier, and if you are booking through a guided trekking package, work with an operator who knows the village lodges first-hand.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Book Your Trek with Ghandruk Accommodation Included
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Planning the Annapurna Base Camp Trek, Khopra Ridge Trek, or a Ghorepani Poon Hill loop that passes through Ghandruk? Our Pokhara-based trekking team pre-selects and books the best Ghandruk lodges for every budget — so you arrive knowing exactly where you are staying and what to expect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Get Personalised Accommodation Recommendations &rarr;
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
                This Ghandruk Village accommodation database and teahouse registry is inspected by certified local guides based in Pokhara and Swanta. We regularly inspect room sizes, sanitary systems, and kitchen hygiene to ensure reliable service standards.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
