import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Couples | Nepal Trek Guide",
  description: "Planning a trek for two? Discover why the Khopra Ridge Trek is Nepal's most peaceful romantic trek for couples — private rooms, itineraries, cost.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-for-couples",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Couples: A Romantic Himalayan Escape in Nepal",
    description:
      "Planning a trek for two? Discover why the Khopra Ridge Trek is Nepal's most peaceful romantic trek for couples — private rooms, itineraries, cost, difficulty, and the best season to go.",
    url: "https://khopraridgetrek.com/planning/khopra-for-couples",
    type: "article",
  },
};

export default function KhopraForCouplesPage() {
  const quickStats = [
    { label: "Trip Style", value: "Romantic Offbeat Mountain Escape" },
    { label: "Ideal Duration", value: "7-Day Classic | 9-Day Relaxed Honeymoon" },
    { label: "Accommodation", value: "Private Double Rooms in Community Lodges" },
    { label: "Crowd Contrast", value: "90% Less Crowded Than Poon Hill / ABC" },
  ];

  const itineraryComparison = [
    {
      title: "Classic 7-Day Couple's Itinerary",
      desc: "Ideal for active couples with a standard one-week timeframe.",
      schedule: [
        "Day 1: Drive Pokhara to Ghandruk / Kimche, trek to Ghandruk heritage village.",
        "Day 2: Trek Ghandruk to Tadapani through rhododendron & oak forests.",
        "Day 3: Trek Tadapani to Dobato, climbing to ridge-line pasture.",
        "Day 4: Trek Dobato to Khopra Ridge (3,660m) in time for golden-hour sunset.",
        "Day 5: Sunrise over Dhaulagiri, descend to Swanta or Chhistibung.",
        "Day 6: Trek down through Swanta to Ghorepani or Birethanti.",
        "Day 7: Drive back to Pokhara for Lakeside celebratory dinner.",
      ],
    },
    {
      title: "Relaxed 9-Day Honeymoon Itinerary",
      desc: "Designed for couples wanting unhurried mornings, rest days & comfort bookends.",
      schedule: [
        "Day 1: Private jeep from Pokhara to Ghandruk; stay in deluxe hotel with balcony.",
        "Day 2: Slow morning explore in Ghandruk, trek gently to Tadapani.",
        "Day 3: Trek Tadapani to Dobato; enjoy sunset at Muldai Viewpoint.",
        "Day 4: Trek Dobato to Khopra Ridge (3,660m); settle into private room.",
        "Day 5: Full rest & photography day at Khopra Ridge (optional Khayer Lake hike).",
        "Day 6: Gentle descent to Swanta Magar village homestay.",
        "Day 7: Trek Swanta to Ghorepani village.",
        "Day 8: Sunrise at Poon Hill, descend to Ulleri or Hile.",
        "Day 9: Private jeep return to Pokhara Lakeside resort.",
      ],
    },
  ];

  const villageComfortLadder = [
    { village: "Ghandruk (1,940m)", comfort: "Highest Comfort", room: "Luxury heritage lodges with attached private bathrooms, hot showers & balconies." },
    { village: "Tadapani (2,630m)", comfort: "Moderate Comfort", room: "Cosy private rooms with sweeping mountain views and shared/attached hot shower facilities." },
    { village: "Swanta (2,200m)", comfort: "Authentic Homestay", room: "Quaint village homestays with organic farm meals and private twin/double beds." },
    { village: "Dobato & Khopra Ridge", comfort: "Alpine Co-op Lodges", room: "Basic wood-partitioned private double rooms, solar lighting, heated dining halls." },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek good for couples?",
      a: "Yes. It offers far quieter trails than Poon Hill or Annapurna Base Camp, spectacular panoramic views of Dhaulagiri, and cozy community lodges perfect for couples seeking peaceful quality time.",
    },
    {
      q: "Is the Khopra Ridge Trek suitable for honeymooners?",
      a: "Yes! For couples who value solitude, star-filled mountain night skies, and authentic culture over luxury resort amenities, a relaxed 9-day Khopra itinerary is a memorable honeymoon escape.",
    },
    {
      q: "Are private rooms available on the Khopra Ridge Trek?",
      a: "Yes, private double rooms are available at nearly every village stop, including high-elevation community lodges. Booking in advance guarantees a private room rather than a shared dorm.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek for beginners?",
      a: "It is rated moderate. Daily walking averages 5 to 7 hours. Couples with average fitness and light pre-trip walking preparation can complete the trek comfortably.",
    },
    {
      q: "How many days do couples need for the Khopra Ridge Trek?",
      a: "Most couples choose either the standard 7-day loop or a relaxed 9-day honeymoon itinerary with extra buffer days for rest and photography.",
    },
    {
      q: "What is the best time to do the Khopra Ridge Trek as a couple?",
      a: "Spring (March to May) for blooming red rhododendron forests and Autumn (September to November) for crystal-clear mountain visibility are the two best seasons.",
    },
    {
      q: "How much does the Khopra Ridge Trek cost for two people?",
      a: "A private 7-day guided trek for two typically ranges between $1,100 and $1,600 total (for both travelers), including permits, licensed guide, jeep transfers, accommodation, and meals.",
    },
    {
      q: "Is the Khayer Lake side trip worth it for couples?",
      a: "For active couples with an extra day, yes — Khayer Lake (4,660m) is a sacred glacial lake tucked under Annapurna South that receives very few trekkers.",
    },
    {
      q: "Is Khopra Ridge less crowded than Poon Hill?",
      a: "Yes, significantly. Poon Hill gets hundreds of hikers at sunrise, whereas Khopra Ridge sees only 15–25 hikers a day, offering pure solitude.",
    },
    {
      q: "Do couples need a guide for the Khopra Ridge Trek?",
      a: "While not strictly mandatory for all open trails, hiring a private licensed guide is strongly recommended for couples to manage lodging reservations, trail navigation, and emergency safety.",
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
            <span className="text-emerald-400">Khopra for Couples</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Couples &amp; Honeymoon Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Couples
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A romantic Himalayan escape in Nepal. Discover peaceful trails, private room accommodation, itinerary options, costs, and best seasons for two.
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
                💑
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Private Couple Trekking Specialists</h4>
                <p>
                  Maintained and verified by licensed Pokhara trekking operator <strong>EMD Treks</strong> (License #8928-091). We arrange guaranteed private double rooms and private jeep transfers for couples and honeymooners.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most of Nepal&apos;s famous trekking routes were never designed with couples in mind. Everest Base Camp is crowded with expedition groups. Annapurna Base Camp fills up fast in peak season. Even Poon Hill can feel more like a queue for sunrise than a shared moment in the mountains.
              </p>
              <p>
                The Khopra Ridge Trek for couples offers something different: quiet forest trails, authentic Gurung and Magar villages, an unobstructed 3,660m view of Dhaulagiri, and evenings spent in small community-owned lodges.
              </p>
            </div>

            {/* Section 1: Romantic Highlights */}
            <div id="romantic-highlights" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Couples Choose Khopra Ridge Over Busier Routes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌄 Quiet Sunrise &amp; Golden Sunset</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Watch the sun illuminate the 8,167m summit wall of Dhaulagiri I with just a handful of hikers, avoiding the pre-dawn crowds of Poon Hill.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌸 Rhododendron Forest Canopies</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    In Spring (March to May), trek under vibrant pink and red rhododendron blooms framing views of Annapurna South and Machhapuchhre.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">✨ Himalayan Stargazing</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    With zero light pollution at Khopra Ridge (3,660m), enjoy crystal-clear night skies and the Milky Way right outside your lodge.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🤝 Meaningful Community Tourism</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Stay in community-owned lodges where 100% of accommodation profits directly fund Magar village primary school salaries and rural healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Lodging & Comfort Expectations */}
            <div id="accommodation-comfort" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Accommodation &amp; Private Room Expectations
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Honesty matters most when planning a trek for two. Khopra Ridge accommodation is comfortable by mountain standards, but basic compared to city hotels. Early booking ensures guaranteed private double rooms.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Village Stop</th>
                      <th className="py-4 px-4 sm:px-6">Comfort Level</th>
                      <th className="py-4 px-4 sm:px-6">Room &amp; Bath Amenities</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {villageComfortLadder.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.village}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800">{row.comfort}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Recommended Itineraries */}
            <div id="itineraries" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Recommended Itineraries for Couples
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {itineraryComparison.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-xl">{item.title}</h3>
                    <p className="text-xs text-stone-500 italic">{item.desc}</p>
                    <ul className="space-y-2 text-xs text-stone-600 list-disc pl-4 leading-relaxed">
                      {item.schedule.map((day, sIdx) => (
                        <li key={sIdx}>{day}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
                  Private Couple Packages
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan Your Private Couple&apos;s Trek with EMD Treks
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your romantic Himalayan escape with licensed Pokhara specialists <strong>EMD Treks</strong> (NTB License #8928-091). We guarantee private double rooms, private jeep transfers, and tailored pacing for two.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire for Two
                  </Link>
                  <Link
                    href="/planning/khopra-loop-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Khopra Loop Planner
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
                <a href="#romantic-highlights" className="block hover:text-emerald-600 transition">
                  • Romantic Highlights
                </a>
                <a href="#accommodation-comfort" className="block hover:text-emerald-600 transition">
                  • Accommodation &amp; Comfort
                </a>
                <a href="#itineraries" className="block hover:text-emerald-600 transition">
                  • 7-Day &amp; 9-Day Itineraries
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khopra-for-families" className="hover:text-emerald-700 underline">
                      Khopra for Families
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-beginners" className="hover:text-emerald-700 underline">
                      Khopra for Beginners
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
