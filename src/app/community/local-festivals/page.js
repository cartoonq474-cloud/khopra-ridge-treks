import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Local Festivals on the Khopra Circuit: A Complete Guide to Himalayan Celebrations",
  description:
    "Discover the local festivals on the Khopra Circuit, from the Janai Purnima pilgrimage to Khayer Lake to Tamu Lhosar in Ghandruk. Plan your cultural trek today.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/local-festivals",
  },
  openGraph: {
    title: "Local Festivals on the Khopra Circuit: A Complete Guide to Himalayan Celebrations",
    description:
      "Discover the local festivals on the Khopra Circuit, from the Janai Purnima pilgrimage to Khayer Lake to Tamu Lhosar in Ghandruk. Plan your cultural trek today.",
    url: "https://khopraridgetrek.com/community/local-festivals",
    type: "article",
  },
};

export default function LocalFestivalsPage() {
  const quickStats = [
    { label: "Sacred Pilgrimage", value: "Janai Purnima at Khayer Lake" },
    { label: "Gurung New Year", value: "Tamu Lhosar (Late December)" },
    { label: "Grand Autumn Festivals", value: "Dashain & Tihar (Oct-Nov)" },
    { label: "Winter Milestone", value: "Maghe Sankranti (Mid-January)" },
  ];

  const seasonalFestivals = [
    {
      season: "🌸 Spring (March – May)",
      title: "Buddha Jayanti & Field Blessing Rituals",
      desc: "Buddha Jayanti is observed with quiet butter-lamp offerings in Buddhist households across Ghandruk. Farmers hold village field-blessing ceremonies before planting spring crops.",
    },
    {
      season: "🌧️ Monsoon (June – August)",
      title: "Janai Purnima Pilgrimage to Khayer Lake (4,660m)",
      desc: "Thousands of Hindu and Buddhist pilgrims, led by Dhami-Jhankri shamans, trek to sacred Khayer Lake for ritual bathing and prayers at Khayer Baraha shrine on the full moon of August.",
    },
    {
      season: "🍂 Autumn (September – November)",
      title: "Dashain & Tihar (Festivals of Victory & Lights)",
      desc: "Nepal's grand autumn celebrations. Villages feature towering bamboo swings (Ping), Tika family blessings, oil-lamp decorations, and Deusi-Bhailo folk singing door-to-door.",
    },
    {
      season: "❄️ Winter (December – February)",
      title: "Tamu Lhosar & Maghe Sankranti",
      desc: "Tamu Lhosar (Gurung New Year on 15 Poush / late Dec) brings vibrant cultural dances, sel roti rice bread feasts, and traditional gunyo-cholo dress to Ghandruk.",
    },
  ];

  const faqs = [
    {
      q: "What festivals can trekkers experience on the Khopra Circuit?",
      a: "Main festivals include the Janai Purnima pilgrimage at sacred Khayer Lake, Tamu Lhosar (Gurung New Year) in Ghandruk, and the grand autumn festivals of Dashain and Tihar. Smaller observances include Maghe Sankranti and Buddha Jayanti.",
    },
    {
      q: "When is Janai Purnima celebrated at Khayer Lake?",
      a: "Janai Purnima falls during the monsoon on the full moon of August (Shrawan Purnima). Exact lunar calendar dates shift annually.",
    },
    {
      q: "Can foreigners participate in local festivals in Nepal?",
      a: "Yes. Foreign trekkers are warmly welcomed to observe and respectfully participate in village celebrations, especially when accompanied by a local guide who explains customs.",
    },
    {
      q: "Which village offers the best cultural festival experience on Khopra Trek?",
      a: "Ghandruk offers the most visible and grand cultural experience for Tamu Lhosar and Gurung performances. Swanta village offers intimate Magar family harvest celebrations.",
    },
    {
      q: "What is Tamu Lhosar, and where is it celebrated?",
      a: "Tamu Lhosar is the Gurung New Year, celebrated on 15 Poush (late December) with traditional food (sel roti), gunyo-cholo dress, and Ghatu/Sorathi folk dances in Ghandruk.",
    },
    {
      q: "Is trekking during Dashain and Tihar a good idea?",
      a: "Yes! Villages are at their most festive with bamboo Ping swings and oil lamps. However, lodges and transport book out quickly, so advance reservation is essential.",
    },
    {
      q: "Are lodges open during major festivals?",
      a: "Most lodges stay open, though family-run teahouses may operate with reduced staff as family members travel to celebrate.",
    },
    {
      q: "How far in advance should festival treks be booked?",
      a: "For Dashain, Tihar, or the Janai Purnima pilgrimage, booking 2 to 3 months in advance is recommended.",
    },
    {
      q: "Is photography allowed during religious ceremonies?",
      a: "Generally yes, with permission. Always ask before photographing private family rituals or sacred Dhami shaman prayers at Khayer Lake.",
    },
    {
      q: "What is the best season for festival trekking in Nepal?",
      a: "Autumn (Oct-Nov) offers the biggest festivals and clearest skies. Winter (Dec) provides quiet trails for Tamu Lhosar, while monsoon (Aug) offers the intense Janai Purnima pilgrimage.",
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
            <Link href="/community/community-tourism-khopra" className="hover:text-emerald-400 transition">Community Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Local Festivals</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Festival Calendar
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Local Festivals on the Khopra Circuit
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A complete guide to Himalayan celebrations — from the Janai Purnima sacred pilgrimage at Khayer Lake to Tamu Lhosar in Ghandruk and autumn Dashain-Tihar.
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
                🪔
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Festival &amp; Cultural Logistics Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara/Kathmandu, our guides arrange festival stays in Ghandruk and pilgrimage support for Khayer Lake during Janai Purnima.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                The Khopra Ridge Trek is best known for its wide-open views of Annapurna South and Dhaulagiri, but the trail offers something just as memorable: a living calendar of Himalayan festivals.
              </p>
              <p>
                Local festivals on the Khopra Circuit are not staged for tourists. They happen naturally as passed down through generations of Gurung and Magar families who call these mountain valleys home.
              </p>
            </div>

            {/* Section 1: Seasonal Festival Calendar */}
            <div id="festival-calendar" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Festival Calendar on the Khopra Circuit
              </h2>

              <div className="space-y-6">
                {seasonalFestivals.map((fest, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {fest.season}
                    </span>
                    <h3 className="font-bold text-stone-950 text-xl">{fest.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{fest.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Janai Purnima & Khayer Lake Pilgrimage */}
            <div id="janai-purnima" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Janai Purnima &amp; Sacred Pilgrimage to Khayer Lake (4,660m)
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">The Khayer Baraha Shrine Blessing</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  During the full moon of August, sacred Khayer Lake becomes a vibrant pilgrimage site. Hindu and Buddhist devotees, guided by Dhami-Jhankri shamans, undertake ritual bathing at 4,660m and offer prayers at Khayer Baraha temple for fertility, health, and spiritual protection.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-800">
                  <Link href="/planning/khayer-baraha-temple-guide" className="hover:underline">
                    Read Khayer Baraha Temple Pilgrimage Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 3: Tamu Lhosar in Gurung Villages */}
            <div id="tamu-lhosar" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Celebrating Tamu Lhosar in Ghandruk
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🎉 Gurung New Year (15 Poush)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Tamu Lhosar marks the Gurung New Year in late December. Ghandruk village comes alive with traditional gunyo-cholo dress, sel roti feasts, and community archer tournaments.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">💃 Ghatu &amp; Sorathi Folk Performances</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Community halls host traditional Ghatu semi-ritual dances and lively Sorathi storytelling performances accompanied by madal drums late into the evening.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Practical Tips for Festival Treks */}
            <div id="practical-tips" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Practical Tips &amp; Cultural Etiquette for Festival Treks
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📅 Advance Lodge Booking</h4>
                  <p className="text-xs text-stone-600">Lodges fill up quickly during Dashain, Tihar, and Janai Purnima. Reserve accommodation 2 to 3 months ahead.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🚍 Transport Buffer Days</h4>
                  <p className="text-xs text-stone-600">Kathmandu-Pokhara buses and trailhead jeeps book heavily during Dashain family travel. Add 1–2 buffer days.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">📷 Photography Etiquette</h4>
                  <p className="text-xs text-stone-600">Always ask permission before photographing shamanic Dhami rituals at Khayer Lake or private family tika ceremonies.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
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
                  Festival Trek Itineraries
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan a Festival Trek on the Khopra Circuit
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). We coordinate festival stays in Ghandruk and pilgrimage logistics for Khayer Lake during Janai Purnima.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Festival Dates
                  </Link>
                  <Link
                    href="/community/gurung-culture"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Gurung Cultural Guide
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
                <a href="#festival-calendar" className="block hover:text-emerald-600 transition">
                  • Seasonal Festival Calendar
                </a>
                <a href="#janai-purnima" className="block hover:text-emerald-600 transition">
                  • Janai Purnima &amp; Khayer Lake
                </a>
                <a href="#tamu-lhosar" className="block hover:text-emerald-600 transition">
                  • Tamu Lhosar in Ghandruk
                </a>
                <a href="#practical-tips" className="block hover:text-emerald-600 transition">
                  • Practical Tips &amp; Etiquette
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Community Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/gurung-culture" className="hover:text-emerald-700 underline">
                      Gurung Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-baraha-temple-guide" className="hover:text-emerald-700 underline">
                      Khayer Baraha Temple Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Hub
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
