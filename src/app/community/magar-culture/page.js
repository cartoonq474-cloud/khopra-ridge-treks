import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Magar Culture in the Khopra Valleys: Traditions, Villages, and Everyday Life",
  description:
    "Discover Magar culture in the Khopra Valleys — village life, farming traditions, food, festivals, honey hunting, and community-run lodges along the Khopra Ridge Trek.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/magar-culture",
  },
  openGraph: {
    title: "Magar Culture in the Khopra Valleys: Traditions, Villages, and Everyday Life",
    description:
      "Discover Magar culture in the Khopra Valleys — village life, farming traditions, food, festivals, honey hunting, and community-run lodges along the Khopra Ridge Trek.",
    url: "https://khopraridgetrek.com/community/magar-culture",
    type: "article",
  },
};

export default function MagarCulturePage() {
  const quickStats = [
    { label: "Ethnic Subgroup", value: "Pun Magar (Myagdi District)" },
    { label: "Cultural Hubs", value: "Swanta & Paudwar Villages" },
    { label: "Primary Agriculture", value: "Terraced Buckwheat & Millet" },
    { label: "Spiritual Leader", value: "Dhami (Nature Shaman)" },
  ];

  const culturalPillars = [
    {
      title: "🏡 Red Mud & Stone Architecture",
      desc: "Traditional houses built from local stone and mud, plastered in warm reddish clay with clean white-bordered windows and doors.",
    },
    {
      title: "🍯 Giant Honeybee Cliff Harvesting",
      desc: "Scaling sheer cliffs on hemp rope ladders to harvest wild honey from the giant Himalayan honeybee (Apis laboriosa).",
    },
    {
      title: "🍲 Organic Mountain Staples (Dhindo & Gundruk)",
      desc: "Nutrient-rich millet/buckwheat dhindo porridge served with fermented gundruk greens, lentils, and farm-fresh ghee.",
    },
    {
      title: "🥁 Kauda, Salaijo & Sorathi Music",
      desc: "Vibrant folk dances accompanied by the double-headed madal drum, celebrated during harvest milestones and weddings.",
    },
  ];

  const faqs = [
    {
      q: "Who are the Magar people of Nepal?",
      a: "The Magar are one of Nepal's largest indigenous ethnic groups, historically settled across the mid-western and western hills. In the Khopra Valleys (Myagdi District), Pun Magar identity is closely tied to terrace farming, livestock grazing, and community-based tourism.",
    },
    {
      q: "Which villages along the Khopra Ridge Trek are predominantly Magar?",
      a: "Swanta, Paudwar, Chhistibung, and Bayeli Kharka are the primary Magar villages along the Khopra route, while nearby Poon Hill and Ghandruk lean more heavily Gurung.",
    },
    {
      q: "What language do Magar communities speak?",
      a: "Magar communities speak the Magar language (belonging to the Tibeto-Burman family) alongside Nepali, which functions as the common language for trade and interaction with trekkers.",
    },
    {
      q: "What foods are traditionally eaten in Magar villages?",
      a: "Staple foods include dhindo (a thick millet or buckwheat porridge), gundruk (fermented leafy greens), lentil soup, potatoes, and farm-fresh organic vegetables grown on local terraces.",
    },
    {
      q: "Can trekkers stay in Magar homestays?",
      a: "Yes. Many Magar villages like Swanta offer homestays and community lodges, giving trekkers a close-up experience of daily village cooking, farming routines, and warm hospitality.",
    },
    {
      q: "What festivals do Magar people celebrate?",
      a: "Magar communities celebrate agricultural harvest festivals, weddings, and seasonal rituals accompanied by traditional folk dances like Kauda, Salaijo, and Sorathi.",
    },
    {
      q: "What is traditional honey hunting in Nepal?",
      a: "Honey hunting involves harvesting wild honey from nests of the giant Himalayan honeybee (Apis laboriosa) on steep cliff faces using handmade rope ladders, smoke, and bamboo poles.",
    },
    {
      q: "How does community-based tourism support local villages?",
      a: "Cooperative lodge models pool accommodation revenue to fund shared village priorities like Swanta High School teacher salaries, Nangi health post supplies, and trail repairs.",
    },
    {
      q: "What is the difference between Magar and Gurung culture?",
      a: "Magar and Gurung communities are distinct indigenous groups with separate Tibeto-Burman languages, deities, and architectural styles. Khopra Ridge runs primarily through Magar territory.",
    },
    {
      q: "What is the best way to experience local culture on the Khopra Trek?",
      a: "Staying in community-run lodges or homestays, eating authentic dhindo and local meals, and respecting village customs offers the most genuine cultural experience.",
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
            <span className="text-emerald-400">Magar Culture</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Myagdi Indigenous Heritage
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Magar Culture in the Khopra Valleys
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Discover Pun Magar traditions, terraced farming, cliff honey hunting, organic mountain food, Dhami shamans, and community-run village life along the Khopra Ridge Trek.
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
                🏡
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Local Magar Heritage Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Myagdi/Kathmandu, our guides are native to Swanta and Paudwar, working directly with local Magar lodge committees.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                The Khopra Ridge Trek is often described in terms of its views — Annapurna South, Nilgiri, and Dhaulagiri rising above rhododendron forests. But the human element is equally compelling: the Magar communities who have farmed these slopes and raised livestock on these ridgelines for generations.
              </p>
              <p>
                Magar culture in the Khopra Valleys is a living, working culture visible in the terraced fields of Swanta and Paudwar, audible in village folk songs, and tastable in a bowl of dhindo served in a community lodge kitchen.
              </p>
            </div>

            {/* Section 1: Who Are the Magar People? */}
            <div id="magar-origins" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Who Are the Magar People of the Khopra Valleys?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌾 Pun Magar Subgroup</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The Pun Magar community predominates in Myagdi District. Historically settled in the western hills, they developed distinct farming systems and dialect variations suited to steep mountain terrain.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🗣️ Tibeto-Burman Language</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The Magar language belongs to the Tibeto-Burman family. While Nepali is used for trade and guiding, Magar is spoken inside family homes and at seasonal harvest celebrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Magar Villages Along the Trek */}
            <div id="magar-villages" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Magar Villages Along the Khopra Route
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">🌾 Swanta Village — Cultural Hub</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Swanta (2,200m) is the cultural heart of the Khopra Valleys. Surrounded by terraced fields, Swanta&apos;s community lodges directly fund the local high school and health initiatives.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-emerald-800">
                    <Link href="/nodes/swanta-village-guide" className="hover:underline">
                      Explore Swanta Village Guide →
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">🏘️ Paudwar, Chhistibung &amp; Bayeli Kharka</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Paudwar is famed for red mud plastered stone homes and organic farming. Higher up, Chhistibung and Bayeli Kharka operate alpine pasture lodge cooperatives.
                  </p>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
                {culturalPillars.map((pillar, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900">{pillar.title}</h4>
                    <p className="text-xs text-stone-600">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Shamanic Dhami & Spiritual Beliefs */}
            <div id="spiritual-dhami" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Dhami Shamans, Nature Worship &amp; Spiritual Beliefs
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">The Role of the Dhami Healer</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Religious practice among Magars blends Hindu and Buddhist customs with ancestral nature worship. The <strong>Dhami</strong> is a traditional spiritual healer and shaman consulted for illness, seasonal agricultural blessings, and appeasing mountain guardian spirits.
                </p>
              </div>
            </div>

            {/* Section 4: Giant Honeybee Cliff Harvesting */}
            <div id="honey-hunting" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Tradition of Himalayan Cliff Honey Hunting
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🐝 Giant Himalayan Bees</h4>
                  <p className="text-xs text-stone-600">Harvested from nests of <em>Apis laboriosa</em> built on sheer cliff walls hundreds of feet above valley floors.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🪜 Rope Ladder Harvests</h4>
                  <p className="text-xs text-stone-600">Experienced harvesters scale handmade hemp ladders using smoke to soothe bees during spring and autumn seasons.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🙏 Sacred Cliff Rituals</h4>
                  <p className="text-xs text-stone-600">Harvesting is preceded by spiritual prayers and offerings to mountain deities for safety and a good yield.</p>
                </div>
              </div>
            </div>

            {/* Section 5: Music, Dance & Homestays */}
            <div id="music-and-lodges" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Kauda Folk Music &amp; Community-Run Homestays
              </h2>

              <div className="prose prose-stone max-w-none space-y-4 text-stone-700 leading-relaxed text-sm">
                <p>
                  Magar folk music centers on <strong>Kauda</strong>, <strong>Salaijo</strong>, and <strong>Sorathi</strong> dances accompanied by the double-headed <em>madal</em> drum.
                </p>
                <p>
                  Staying in community lodges or homestays in Swanta allows trekkers to sample farm-to-table dhindo porridge and gundruk greens while directly supporting local schools and health clinics.
                </p>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
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
                  Community-Owned Eco Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Experience Authentic Magar Hospitality on Khopra Ridge
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Enjoy community lodges in Swanta and Chhistibung where accommodation directly funds local village education and healthcare.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Magar Cultural Treks
                  </Link>
                  <Link
                    href="/nodes/swanta-village-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Swanta Village Guide
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
                <a href="#magar-origins" className="block hover:text-emerald-600 transition">
                  • Pun Magar Origins
                </a>
                <a href="#magar-villages" className="block hover:text-emerald-600 transition">
                  • Swanta &amp; Paudwar Villages
                </a>
                <a href="#spiritual-dhami" className="block hover:text-emerald-600 transition">
                  • Dhami Nature Shamans
                </a>
                <a href="#honey-hunting" className="block hover:text-emerald-600 transition">
                  • Himalayan Cliff Honey Hunting
                </a>
                <a href="#music-and-lodges" className="block hover:text-emerald-600 transition">
                  • Kauda Music &amp; Homestays
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Cultural Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/gurung-culture" className="hover:text-emerald-700 underline">
                      Gurung Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/swanta-village-guide" className="hover:text-emerald-700 underline">
                      Swanta Village Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/what-is-community-lodge" className="hover:text-emerald-700 underline">
                      What is a Community Lodge?
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
