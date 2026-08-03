import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Day Hike Packing List: Complete Checklist for a Safe High-Altitude Trek",
  description:
    "Planning the Khayer Lake day hike from Khopra Ridge? Our complete packing list covers clothing, gear, food, and safety essentials for this high-altitude trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-packing-list",
  },
  openGraph: {
    title: "Khayer Lake Day Hike Packing List: Complete Checklist for a Safe High-Altitude Trek",
    description:
      "Planning the Khayer Lake day hike from Khopra Ridge? Our complete packing list covers clothing, gear, food, and safety essentials for this high-altitude trek.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-packing-list",
    type: "article",
  },
};

export default function KhayerLakePackingListPage() {
  const stats = [
    { label: "Target Daypack Size", value: "20 – 30 Liters" },
    { label: "Target Pack Weight", value: "4 – 7 kg (Fully Loaded)" },
    { label: "Required Water Supply", value: "2 – 3 Liters Minimum" },
    { label: "High-Altitude Point", value: "4,660 m (Lake Basin)" },
  ];

  const checklistCategories = [
    {
      category: "1. Technical Clothing & Layering System",
      items: [
        { name: "Moisture-Wicking Base Layer", detail: "Merino wool or synthetic long sleeve (no cotton)." },
        { name: "Fleece or Insulated Mid-Layer", detail: "Traps warmth while hiking through cool morning temperatures." },
        { name: "Waterproof & Windproof Shell", detail: "Gore-Tex outer jacket to block ridge wind gusts and sudden snow." },
        { name: "Down or Synthetic Insulated Jacket", detail: "Packed in daypack for rest stops and cold lake shore stays." },
        { name: "Gloves, Beanie & Neck Buff", detail: "Thermal gloves, fleece hat, and UV neck gaiter." },
        { name: "Sun Hat & UV Protection", detail: "Wide-brim hat for intense high-altitude sunlight." },
        { name: "Spare Wool Hiking Socks", detail: "Extra pair kept in dry bag in case feet get damp." },
      ],
    },
    {
      category: "2. Footwear & Trail Accessories",
      items: [
        { name: "Waterproof Hiking Boots", detail: "Broken-in boots with stiff ankle support for loose scree and rocks." },
        { name: "Wool Hiking Socks", detail: "Cushioned Merino wool socks to absorb impact and prevent blisters." },
        { name: "Gaiters (Seasonal / Winter)", detail: "Keeps snow, mud, and small stones out of boot tops." },
        { name: "Trekking Poles", detail: "Adjustable poles with rubber tips; reduces knee impact during 1,000m descent." },
      ],
    },
    {
      category: "3. Hydration & Nutrition (No Teahouses on Route)",
      items: [
        { name: "2 to 3 Liters of Water", detail: "Hydration reservoir plus 1L wide-mouth insulated Nalgene bottle." },
        { name: "Electrolyte Tablets / Powders", detail: "Replaces lost salts; improves hydration efficiency at altitude." },
        { name: "High-Energy Trail Snacks", detail: "Energy bars, trail mix, dried fruit, nuts, chocolate bars." },
        { name: "Packed Lodge Lunch", detail: "Arranged the night before at Khopra Ridge Community Lodge." },
        { name: "Water Purification Tablets / Filter", detail: "Backup purification for emergency snowmelt streams." },
      ],
    },
    {
      category: "4. Safety, Navigation & Emergency Gear",
      items: [
        { name: "First Aid Kit & Blister Care", detail: "Blister plasters, sterile gauze, antiseptic, personal medication, Diamox." },
        { name: "Headlamp + Extra Batteries", detail: "Mandatory for 5:30 AM dawn departure; cold drains lithium cells fast." },
        { name: "Offline GPS App / Maps", detail: "Gaia GPS / Maps.me pre-loaded before leaving Khopra Ridge." },
        { name: "Mylar Emergency Foil Blanket", detail: "Lightweight thermal sheet for emergency hypothermia protection." },
        { name: "Whistle & Pocket Knife", detail: "High-decibel signaling whistle for fog or separation." },
      ],
    },
    {
      category: "5. Sun Protection & Personal Essentials",
      items: [
        { name: "High-SPF Sunscreen (SPF 50+)", detail: "High-altitude UV rays reflect intensely off snow and ice." },
        { name: "UV Category 3/4 Sunglasses", detail: "Prevents snow blindness and eye strain in bright alpine sun." },
        { name: "SPF Lip Balm", detail: "Protects lips from cracking in dry, freezing alpine wind." },
        { name: "Power Bank & Phone Cable", detail: "10,000 mAh power bank; keep phone in inside jacket pocket for warmth." },
        { name: "Tissues, Sanitizer & Trash Bag", detail: "Leave No Trace principles; pack out all wrapper and paper waste." },
      ],
    },
  ];

  const faqs = [
    {
      q: "What should I pack for the Khayer Lake day hike?",
      a: "At minimum, pack a layered clothing system (base layer, mid-layer, waterproof shell, down jacket), waterproof boots, 2–3 liters of water, high-energy snacks, first aid kit, headlamp, and high-SPF sun protection.",
    },
    {
      q: "How big should my backpack be for the Khayer Lake hike?",
      a: "A 20 to 30 liter daypack is ideal — large enough for your water, snacks, extra layers, and safety gear, but light enough for comfortable 1,000m climbing.",
    },
    {
      q: "How much water should I carry from Khopra Ridge?",
      a: "Plan for at least 2 to 3 liters. There are no teahouses, shops, or reliable purified water stations between Khopra Ridge and Khayer Lake.",
    },
    {
      q: "Is a down jacket necessary for a day hike?",
      a: "Yes! Temperatures at Khayer Lake (4,660m) and during 5:30 AM pre-dawn starts frequently drop below freezing. A packable down jacket keeps you warm during rest stops.",
    },
    {
      q: "Do I need trekking poles for Khayer Lake?",
      a: "They are strongly recommended. Poles provide crucial balance across loose moraine scree and relieve knee strain during the long 1,000m descent back to Khopra Ridge.",
    },
    {
      q: "Can I leave my main backpack at Khopra Ridge Lodge?",
      a: "Yes. The hike to Khayer Lake is a round-trip day hike. You leave your main duffel or heavy trekking bag in the lodge storage and carry only your daypack.",
    },
    {
      q: "What snacks are best for the 8–10 hour hike?",
      a: "Pack high-calorie, easily digestible snacks: energy bars, nuts, dried fruit, trail mix, and a packed lunch box prepared by your Khopra Ridge lodge staff.",
    },
    {
      q: "Do I need waterproof clothing?",
      a: "Yes. A windproof and waterproof outer shell jacket (Gore-Tex or equivalent) is non-negotiable to protect against freezing ridge winds and unexpected snow showers.",
    },
    {
      q: "How cold does Khayer Lake get during the day?",
      a: "Pre-dawn starts can be -5°C to -10°C in autumn/spring. Midday temperatures at the lake may range from 0°C to 8°C, but wind chill makes it feel much colder.",
    },
    {
      q: "What gear items do hikers most often forget?",
      a: "High-SPF lip balm, spare headlamp batteries, extra wool socks, electrolyte tablets, and an offline GPS map are the most commonly forgotten items.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Day Hike Packing List</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Complete Alpine Daypack Checklist
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake Day Hike Packing List
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete gear, clothing, hydration, and safety checklist for the 16km round-trip day hike from Khopra Ridge (3,660m) to sacred Khayer Lake (4,660m).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Gear Guidance from Local Operators</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Because there are zero teahouses or shops on the route to Khayer Lake, packing your daypack accurately is essential for high-altitude safety.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                The hike from Khopra Ridge to Khayer Lake is one of the most rewarding high-altitude day hikes in the Annapurna region, but it is also one of the least forgiving when it comes to packing mistakes. You will be walking for 8 to 10 hours round trip, climbing to 4,660 meters, and moving through exposed terrain where weather shifts from clear sun to sub-zero wind in minutes.
              </p>
              <p>
                Unlike the main tea-house trail, this is an isolated day hike. You leave your main duffel bag at <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge Community Lodge</Link> and carry only what fits in your 20–30L daypack. Every item must earn its place.
              </p>
            </div>

            {/* Section 1: Daypack Strategy */}
            <div id="daypack-strategy" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Daypack Strategy: Weight &amp; Capacity
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Ideal Daypack Size (20L to 30L)</h3>
                <p>
                  A 20 to 30 liter backpack with a padded hip belt is recommended. The hip belt transfers weight off your shoulders onto your hips, keeping you balanced over loose scree slopes.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Target Weight (4kg to 7kg)</h3>
                <p>
                  Your total pack weight—including 3 liters of water, packed lunch, extra layers, and camera—should stay under 7kg. Anything heavier will quickly fatigue your legs during the 1,000m climb.
                </p>
              </div>
            </div>

            {/* Section 2: Complete Interactive Checklist */}
            <div id="checklist-categories" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Complete Khayer Lake Day Hike Packing Checklist
              </h2>

              {checklistCategories.map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                  <h3 className="font-extrabold text-stone-950 text-xl border-b border-stone-100 pb-3">
                    {cat.category}
                  </h3>
                  <div className="space-y-3">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                        <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                        <div>
                          <strong className="text-stone-950 font-bold">{item.name}:</strong>{" "}
                          <span className="text-stone-600">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 3: Seasonal Packing Modifications */}
            <div id="seasonal-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Packing Modifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">Autumn (Peak Clear Season)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Cold sub-zero pre-dawn starts require heavy down insulation, thermal gloves, and warm beanies. Sun protection is critical due to intense UV rays.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">Spring &amp; Early Winter</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Snow patches persist in the upper moraine basin. Add waterproof trail gaiters and microspikes if lingering ice is reported by lodge staff.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Common Packing Mistakes */}
            <div id="common-mistakes" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Common Packing Mistakes to Avoid
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base">
                  <li><strong>Carrying Less Than 2L Water:</strong> There are no water refilling stations along the 16km trail. Dehydration dramatically worsens altitude sickness.</li>
                  <li><strong>Wearing Unbroken Boots:</strong> Attempting a 1,000m climb in new, stiff boots causes severe blisters. Always break boots in beforehand.</li>
                  <li><strong>Forgetting Headlamp Batteries:</strong> Cold temperatures drain batteries fast. If your pre-dawn start begins at 5:30 AM, a dead headlamp stops you before the trail starts.</li>
                  <li><strong>Packing Cotton Clothes:</strong> Cotton holds sweat and stays cold against your skin, risking hypothermia when alpine wind gusts pick up.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Packing
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Book Guided Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khayer Lake with Certified Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Have questions about gear rentals in Pokhara or trail conditions? Contact <strong>EMD Treks</strong> (License #8928-091) for personalized guidance and complete trekking support.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/khayer-lake-route-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Route &amp; Trail Guide
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#daypack-strategy" className="block hover:text-emerald-600 transition">
                  • Daypack Weight &amp; Size
                </a>
                <a href="#checklist-categories" className="block hover:text-emerald-600 transition">
                  • Complete Gear Checklist
                </a>
                <a href="#seasonal-packing" className="block hover:text-emerald-600 transition">
                  • Seasonal Modifications
                </a>
                <a href="#common-mistakes" className="block hover:text-emerald-600 transition">
                  • Common Packing Mistakes
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Packing Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/packing-checklist" className="hover:text-emerald-700 underline">
                      Full Khopra Trek Packing List
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-route-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Route Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-weather" className="hover:text-emerald-700 underline">
                      Khayer Lake Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/khayer-lake-altitude-risks" className="hover:text-emerald-700 underline">
                      Altitude Risks &amp; Safety
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
