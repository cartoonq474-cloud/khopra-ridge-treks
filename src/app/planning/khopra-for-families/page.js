import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Families | Nepal Trek Guide",
  description: "Planning the Khopra Ridge Trek with children? Get honest guidance on age, difficulty, safety, itinerary, and accommodation for a family-friendly Himalayan trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-for-families",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Families: A Complete Guide to Trekking in Nepal With Kids",
    description:
      "Planning the Khopra Ridge Trek with children? Get honest guidance on age, difficulty, safety, itinerary, and accommodation for a family-friendly Himalayan trek.",
    url: "https://khopraridgetrek.com/planning/khopra-for-families",
    type: "article",
  },
};

export default function KhopraForFamiliesPage() {
  const quickStats = [
    { label: "Recommended Min. Age", value: "Age 7+ (Teens excel)" },
    { label: "Family Pace Itinerary", value: "8–9 Days with Rest Buffers" },
    { label: "Daily Hiking Duration", value: "4 to 6 Hours with Rest Stops" },
    { label: "Essential Support", value: "Dedicated Guide & Porter Team" },
  ];

  const familyItineraries = [
    {
      title: "Active Family 6–7 Day Itinerary",
      desc: "For fit families with older kids or teens accustomed to multi-day hiking.",
      steps: [
        "Day 1: Jeep Pokhara to Ghandruk; short trek through stone Gurung village.",
        "Day 2: Trek Ghandruk to Tadapani through ancient oak & rhododendron forests.",
        "Day 3: Trek Tadapani to Dobato; climb to Muldai Viewpoint for sunset.",
        "Day 4: Trek Dobato to Khopra Ridge (3,660m); afternoon panorama of Dhaulagiri.",
        "Day 5: Sunrise over Annapurna South; descend to Swanta Magar village.",
        "Day 6: Trek Swanta to Ghorepani or Birethanti.",
        "Day 7: Drive back to Pokhara Lakeside.",
      ],
    },
    {
      title: "Slower 8–9 Day Family Itinerary (Recommended)",
      desc: "Designed for families with younger children or first-time Himalayan trekkers.",
      steps: [
        "Day 1: Private jeep Pokhara to Ghandruk; explore local heritage museum.",
        "Day 2: Short 3-hour hike Ghandruk to Tadapani; easy rest afternoon.",
        "Day 3: Trek Tadapani to Bayeli Kharka / Dobato; break up elevation gain.",
        "Day 4: Short, unhurried climb to Khopra Ridge (3,660m); settle into lodge.",
        "Day 5: Midpoint rest day at Khopra Ridge; easy walks along the grassy spine.",
        "Day 6: Descend gently through pasture land to Swanta village homestay.",
        "Day 7: Trek Swanta to Ghorepani village.",
        "Day 8: Optional sunrise at Poon Hill; descend to Hile.",
        "Day 9: Private jeep return to Pokhara for celebratory dinner.",
      ],
    },
  ];

  const packingChecklist = [
    { category: "Layered Apparel", items: "Thermal base layers, fleece mid-layers, windproof & waterproof outer jackets, warm beanies, gloves." },
    { category: "Footwear & Gear", items: "Sturdy broken-in hiking boots for kids, thick wool socks, child-sized trekking poles, headlamps." },
    { category: "Health & Safety", items: "Pulse oximeter, blister care kits, child-specific rehydration salts, hand sanitizer, water purification tablets." },
    { category: "Comfort & Fun", items: "Deck of cards, travel journals, favorite compact snacks (energy bars, dried fruit), lightweight games." },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek suitable for children?",
      a: "Yes, for most children aged seven and above with reasonable fitness and some hiking experience. Younger children can manage shorter sections with porter carrying support.",
    },
    {
      q: "What is the best age for the Khopra Ridge Trek?",
      a: "Seven years old is the recommended minimum, though physical stamina and motivation matter as much as age. Teenagers adapt to the trail exceptionally well.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek for families?",
      a: "It is moderate — harder than a simple day hike, but easier than Annapurna Base Camp or Everest Base Camp. Daily walking is 4 to 6 hours with regular rest stops.",
    },
    {
      q: "Can beginner families complete the Khopra Ridge Trek?",
      a: "Yes, with proper preparation, a slower 8–9 day pace, and local guide/porter support. It avoids extreme altitude and offers frequent lodge stops.",
    },
    {
      q: "Is Khayer Lake suitable for children?",
      a: "Khayer Lake (4,500m) is a demanding high-altitude side hike best reserved for fit children over ten who show zero signs of altitude discomfort at Khopra Ridge.",
    },
    {
      q: "Do families need a guide and porter?",
      a: "Yes, strongly recommended. A licensed guide ensures safety, lodge reservations, and AMS monitoring, while porters carry main luggage so parents can focus on their kids.",
    },
    {
      q: "Are teahouses on Khopra Ridge family-friendly?",
      a: "Yes. Community lodges offer a warm, hospitable atmosphere. Private family triple rooms or double rooms can be reserved in advance.",
    },
    {
      q: "What food is available for children during the trek?",
      a: "Freshly cooked dal bhat, vegetable noodle soup, pancakes, french fries, and pasta are widely available. Vegetarian options are the freshest choice at high altitude.",
    },
    {
      q: "What is the safest season for family trekking in Nepal?",
      a: "Spring (March to May) for blooming rhododendrons and Autumn (September to November) for clear skies and dry trails are the two best seasons for families.",
    },
    {
      q: "How many days should families plan for the trek?",
      a: "Six to seven days works for fit, active families with older kids, while eight to nine days with extra acclimatization stops is far more comfortable for younger children.",
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
            <Link href="/planning/khopra-loop-trek" className="hover:text-emerald-400 transition">Planning Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra for Families</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Family &amp; Kids Trekking Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Families
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A complete guide to trekking in Nepal with kids. Honest advice on age guidelines, difficulty, safety practices, itineraries, and family accommodation.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickStats.map((stat, idx) => (
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
                👨‍👩‍👧‍👦
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Licensed Family Trek Specialists</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We organize custom family itineraries with certified guides, pulse oximeter monitoring, and dedicated porter support.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most parents researching a Himalayan trek ask the same question: can our family actually do this, and will everyone enjoy it? The Khopra Ridge Trek is one of the few routes in the Annapurna region where the honest answer is yes — provided it is planned at a realistic pace.
              </p>
              <p>
                Unlike Poon Hill, Khopra Ridge sees far fewer crowds on the trail. Unlike Annapurna Base Camp or Everest Base Camp, it does not demand extreme altitude tolerance or back-to-back exhausting hiking days.
              </p>
            </div>

            {/* Section 1: Age & Fitness Guidelines */}
            <div id="age-guidelines" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Age &amp; Fitness Guidelines for Children
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">Recommended Age: 7+ Years</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Children aged 7 and above generally handle 4 to 5 hours of walking per day with rest stops and can communicate early signs of fatigue or headache clearly.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">Teenagers &amp; First-Timers</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Teens thrive on Khopra Ridge due to the uncrowded trails, rich village culture, and rewarding 3,660m ridge viewpoint over Dhaulagiri.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">Younger Kids (Ages 4–6)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Can manage shorter segments if parents hire dedicated porter support for carrying on steeper trail climbs.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">Motivation Over Fitness</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Preparing children beforehand with local day hikes and setting honest expectations turns walking time into a shared family adventure.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Family Itineraries */}
            <div id="family-itineraries" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Recommended Family Itineraries
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {familyItineraries.map((plan, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-xl">{plan.title}</h3>
                    <p className="text-xs text-stone-500 italic">{plan.desc}</p>
                    <ul className="space-y-2 text-xs text-stone-600 list-disc pl-4 leading-relaxed">
                      {plan.steps.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Family Packing Essentials */}
            <div id="family-packing" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential Family Packing List
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Category</th>
                      <th className="py-4 px-4 sm:px-6">Key Items for Children &amp; Parents</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {packingChecklist.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
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
                  Licensed Family Trek Operators
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Family&apos;s Himalayan Adventure
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Contact Pokhara local specialists <strong>EMD Treks</strong> (NTB License #8928-091) for custom family itineraries, experienced child-friendly guides, porter support, and guaranteed lodge bookings.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Customize a Family Trek
                  </Link>
                  <Link
                    href="/planning/khopra-for-couples"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Couples Guide
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
                <a href="#age-guidelines" className="block hover:text-emerald-600 transition">
                  • Age &amp; Fitness Guidelines
                </a>
                <a href="#family-itineraries" className="block hover:text-emerald-600 transition">
                  • Recommended Itineraries
                </a>
                <a href="#family-packing" className="block hover:text-emerald-600 transition">
                  • Family Packing Essentials
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khopra-for-beginners" className="hover:text-emerald-700 underline">
                      Khopra for Beginners
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-seniors" className="hover:text-emerald-700 underline">
                      Khopra for Seniors
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-couples" className="hover:text-emerald-700 underline">
                      Khopra for Couples
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-budget-travelers" className="hover:text-emerald-700 underline">
                      Khopra for Budget Travelers
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
